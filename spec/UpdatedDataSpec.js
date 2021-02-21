describe('Updated Data Spec', () => {

  describe('The promise happens in here', () => {

  let allPromises = Promise.all([tryUrl('/users'), tryUrl('/hobbies'), tryUrl('/favorites')])
  .then(result => {
  expect(true).toEqual(true);        
  return result;
  })
  describe('CorrectedDataSpec: allPromises, working with the Promise.all()', () => {
  // console.log('allPromises', allPromises);
  
  it ('CorrectedDataSpec: Promise.all() Elements are available here', (done) => {
    allPromises.then((elements) => {
    // console.log('elements', elements);

    let usrs = elements[0];
    let hobs = elements[1];
    let favs = elements[2];
    
    // console.log('usrs', usrs, 'hobs', hobs, 'favs', favs);

    expect(true).toBe(true);
    done();
    })
  }) ///////////////////////////////////

  it ('CorrectedDataSpec: Correct the elements', (done) => {
    allPromises.then((elements) => {

    // console.log('elements: before', elements); // same as line 40

    elements[0] = correctUsers(elements[0], 'PA');
    elements[1] = correctHobbies(elements[1]);
    elements[2] = correctFavorites(elements[2]);

    // console.log('elements: after', elements);

    expect(true).toBe(true);
    done();
    })
  }) ///////////////////////////////////

  it ('CorrectedDataSpec: Update the elements', (done) => { // This needs a Promise.all();
    allPromises.then((data) => {

    console.log('data', data);

    let u = tryUrl('/updateUsers',     data[0], 'post');      
    let h = tryUrl('/updateHobbies',   data[1], 'post');
    let f = tryUrl('/updateFavorites', data[2], 'post');
    let p = Promise.all([u, h, f]);
    expect(true).toBe(true);
    done();

    return p;

    })
    .then((updatedArray) => {

    const flaggedUsrs = addTypeFlag(updatedArray[0], 'updated-user');
    const flaggedHobs = addTypeFlag(updatedArray[1], 'updated-hobby');
    const flaggedFavs = addTypeFlag(updatedArray[2], 'updated-favorite');

    const data = flaggedUsrs.concat(flaggedHobs, flaggedFavs)

    const superList = data.map((superUser) => {

    if (!superUser.user_id) {
      superUser.superUser = superUser.id;
    } else {
      superUser.superUser = superUser.user_id;
    }

    return superUser;

    }).sort((a, b) => a.superUser - b.superUser);

    console.log('superList', superList);

    let sUser = [{}];
    let hobbyArray = [];

    superList.map((simUser) => {

    // const id = simUser.superUser;

    // If this object already exists
    if (sUser[simUser.superUser]) { 

      console.log('********** Beg of EXT element **********');
      
      if (simUser.infotype === 'updated-user') { 

        console.log('This is an updated-user that already exists');
        console.log('sUser[' + simUser.superUser + '] already exists. It\'s an ' + simUser.infotype);
        console.log('Current User', sUser[simUser.superUser]);
        console.log('Current Element', simUser);
        
      } else {

        if (sUser[simUser.superUser].infotype === 'updated-user') { 

          // This element is an updated hobby, no previous hobbies (create hobby array)
          if ((simUser.infotype === 'updated-hobby') && (!sUser[simUser.superUser].hobbiesArray)) {
            console.log('Considering adding this ' + simUser.infotype + 
              ' to this ' + sUser[simUser.superUser].infotype + '\'s hobbyArray.');
            sUser[simUser.superUser].hobbiesArray = [];
            sUser[simUser.superUser].hobbiesArray.push(simUser);
          }
          
          // This element is an updated hobby, previous hobbies (push to hobby array)
          if ((simUser.infotype === 'updated-hobby') && (sUser[simUser.superUser].hobbiesArray)) {
            console.log('Already in hobbiesArray', sUser[simUser.superUser].hobbiesArray);
            console.log('Potential add to hobbiesArray', simUser);

            const attachableHobby = sUser[simUser.superUser].hobbiesArray.includes(simUser);
            
            if (!attachableHobby) sUser[simUser.superUser].hobbiesArray.push(simUser)
            console.log('attachableHobby', !attachableHobby);
          }

          // This element is an updated favorite, no previous favorites (create favorite array)
          if ((simUser.infotype === 'updated-favorite') && (!sUser[simUser.superUser].favoritesArray)) {
            console.log('Considering adding this ' + simUser.infotype + 
              ' to this ' + sUser[simUser.superUser].infotype + '\'s favoriteArray.');
            sUser[simUser.superUser].favoritesArray = [];
            sUser[simUser.superUser].favoritesArray.push(simUser);
          }
          
          // This element is an updated favorite, previous favorites (push to favorite array)
          if ((simUser.infotype === 'updated-favorite') && (sUser[simUser.superUser].favoritesArray)) {

            // JavaScript array(s) includes()
            console.log('Already in favoritesArray', sUser[simUser.superUser].favoritesArray);
            console.log('Potential add to favoritesArray', simUser);

            const attachablefavorite = sUser[simUser.superUser].favoritesArray.includes(simUser);
            console.log('attachablefavorite', !attachablefavorite);

            if (!attachablefavorite) sUser[simUser.superUser].favoritesArray.push(simUser)

          }

        }

        console.log('Is this related to an updated-user object?');
        console.log(sUser[simUser.superUser].infotype);

        console.log('sUser[' + simUser.superUser + '] already exists. This element is an ' + simUser.infotype);
        console.log('Current User', sUser[simUser.superUser]);
        console.log('Current Element', simUser);

        console.log('This is a simulated-user that already exists');
        console.log(simUser);

      }

      console.log('********** End of EXT element **********');

    // If this object does not exist, then create it
    } else {

      console.log('********** Beg of NEW element **********');
      console.log('Create a new sUser[' + simUser.superUser + '] here: ' + simUser.infotype);
      
      sUser[simUser.superUser] = simUser;
      console.log('sUser[' + simUser.superUser + ']', sUser[simUser.superUser]);

      // If not an updated-user, then element is a simulated user
      if (simUser.infotype === 'updated-user') {

      // Simulated users
      } else {

        // Create the hobbies array and add this element to it.
        if (simUser.infotype === 'updated-hobby') {
          console.log('Add this favorite to NEW empty hobby array.');
          sUser[simUser.superUser].hobbiesArray = [];
          sUser[simUser.superUser].hobbiesArray.push(simUser);
        }
  
        // Create the favorites array and add this element to it.
        if (simUser.infotype === 'updated-favorite') {
          console.log('Add this favorite to NEW empty favorites array.');
          sUser[simUser.superUser].favoritesArray = [];
          sUser[simUser.superUser].favoritesArray.push(simUser);
        }
  
      }

      console.log('********** End of NEW element **********');
    }

    })
    
    sUser.shift();

    console.log('superList', superList);
    console.log(sUser);

    })
  })

  })

  })

});
