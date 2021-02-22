let allPromises = Promise.all([tryUrl('/users'), tryUrl('/hobbies'), tryUrl('/favorites')]).then(result => { return result })
  .then((data) => {

    data[0] = correctUsers(data[0], 'PA');
    data[1] = correctHobbies(data[1]);
    data[2] = correctFavorites(data[2]);

    return data;
  })
  .then(data => Promise.all([
    tryUrl('/updateUsers',     data[0], 'post'),
    tryUrl('/updateHobbies',   data[1], 'post'),
    tryUrl('/updateFavorites', data[2], 'post')
  ]))    
  .then((updatedArray) => {

    const superList  = getSuperList(updatedArray);
    const sUser      = transformList(superList);
    const finalShape = reshape(sUser);
    
    console.log('finalShape', finalShape);
})

////////////////////////////////////////////////////
//
// Functions
//
////////////////////////////////////////////////////
function reshape(sUser) {
  let newShape = {};
  let newShapeArray = [];

  sUser.map((rUser) => {
    newShape.rUser = rUser;
    newShape.id = rUser.superUser;
    newShapeArray.push(newShape.rUser);
    rUser.id = rUser.superUser;
    return newShapeArray;
  })

  return newShapeArray;
}

function transformList(superList) {
  
      let sUser = [];
    superList.map((simUser) => {
      
      // If this object already exists
      if (sUser[simUser.superUser]) { 
        if (simUser.infotype === 'updated-user') {

        } else {
          
          if (sUser[simUser.superUser].infotype === 'updated-user') { 
            
            // This element is an updated hobby, no previous hobbies (create hobby array)
            if ((simUser.infotype === 'updated-hobby') && (!sUser[simUser.superUser].hobbiesArray)) {
              sUser[simUser.superUser].hobbiesArray = [];
              sUser[simUser.superUser].hobbiesArray.push(simUser);
            }
            
            // This element is an updated hobby, previous hobbies (push to hobby array)
            if ((simUser.infotype === 'updated-hobby') && (sUser[simUser.superUser].hobbiesArray)) {
              const attachableHobby = sUser[simUser.superUser].hobbiesArray.includes(simUser);            
              if (!attachableHobby) sUser[simUser.superUser].hobbiesArray.push(simUser)
            }
            
            // This element is an updated favorite, no previous favorites (create favorite array)
            if ((simUser.infotype === 'updated-favorite') && (!sUser[simUser.superUser].favoritesArray)) {
              sUser[simUser.superUser].favoritesArray = [];
              sUser[simUser.superUser].favoritesArray.push(simUser);
            }
            
            // This element is an updated favorite, previous favorites (push to favorite array)
            if ((simUser.infotype === 'updated-favorite') && (sUser[simUser.superUser].favoritesArray)) {  
              // JavaScript array(s) includes()
              const attachablefavorite = sUser[simUser.superUser].favoritesArray.includes(simUser);
              if (!attachablefavorite) sUser[simUser.superUser].favoritesArray.push(simUser)
            }
          }
        }
        
      // If this object does not exist, then create it
      } else {
        
        sUser[simUser.superUser] = simUser;
        
        // Updated Users
        if (simUser.infotype === 'updated-user') {
          
        // Simulated Users
        } else {
          
          // Create the hobbies array and add this element to it.
          if (simUser.infotype === 'updated-hobby') {
            sUser[simUser.superUser].hobbiesArray = [];
            sUser[simUser.superUser].hobbiesArray.push(simUser);
          }
          
          // Create the favorites array and add this element to it.
          if (simUser.infotype === 'updated-favorite') {
            sUser[simUser.superUser].favoritesArray = [];
            sUser[simUser.superUser].favoritesArray.push(simUser);
          }
        }
      }
    })
    sUser.shift();

  // return superList;

  return sUser;

}

function getSuperList(updatedArray) {

  const flaggedUsrs = addTypeFlag(updatedArray[0], 'updated-user');
  const flaggedHobs = addTypeFlag(updatedArray[1], 'updated-hobby');
  const flaggedFavs = addTypeFlag(updatedArray[2], 'updated-favorite');
      
  const data = flaggedUsrs.concat(flaggedHobs, flaggedFavs);
  
  const superList = data.map((superUser) => {

    if (!superUser.user_id) {
        superUser.superUser = superUser.id;
    } else {
        superUser.superUser = superUser.user_id;
    }

    return superUser;

  }).sort((a, b) => a.superUser - b.superUser);

  // return array;
  return superList;

}

function tryUrl(url, data, method='get') {
  return fetch(url, { 
    method: method, 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) || null 
  }).then(res => res.json())
}

function correctUsers(users, state) {
  return users.filter(user => {
    if (!user.state) {
      user.state = state;
      return user;
    }
  })
}

function correctHobbies(hobbies) {
  return hobbies.filter(hobby => {
    if(!hobby.experience) {
      switch(hobby.years_played) {
        case 1:
        hobby.experience = 'beginner';
        break;
        case 2:
        hobby.experience = 'advanced';
        break;
        case 3:
        hobby.experience = 'expert';
        break;
      }
      return hobby;
    }
  })
}

function correctFavorites(favorites) {
  return favorites.filter((favorite) => {
    if (!favorite.type) {
      favorite.type = "other"
      return favorite;
    }
  })
}

// addTypeFlag
function addTypeFlag(array, type) {
  return newType = array.map((item) => {
    item.infotype = type;
    return item;
  })
}
