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
            console.log('sUser[' + simUser.superUser + '] already exists. It\'s an ' + simUser.infotype);
            console.log(sUser[simUser.superUser]);

            // sUser[simUser.superUser].gribbit = 0;

            // TODO: Current Development
            // Determine when a hobby does not exist. If my current entity is a hobby, add it to the hobby array.
            // if ((1 === 1) && (sUser[simUser.superUser].hobbyArray.length === 0)) {
            //     console.log('Hobby array is empty');
            // }
            console.log('********** End of EXT element **********');

        // If this object does not exist, then create it
        } else {

            console.log('********** Beg of NEW element **********');
            console.log('Create a new sUser[' + simUser.superUser + '] here. It\'s an ' + simUser.infotype);
            sUser[simUser.superUser] = simUser;
            // sUser[simUser.superUser].hobbyArray = [];

            // Create the favorites array and add this element to it.
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

            console.log(sUser[simUser.superUser]);
            console.log('********** End of NEW element **********');
        }

      })
      
      sUser.shift();

      // .sort((a, b) => a.id-b.id);

      // console.log('data', data);
      console.log('superList', superList);
      console.log(sUser);

      })
    })

    })

    it ('Another it', () => {
        expect(true).toBe(true);
    })
  })

  describe('Template', () => {})

});

// xdescribe('A', () => {
//   it ('A', () => {})
// });
