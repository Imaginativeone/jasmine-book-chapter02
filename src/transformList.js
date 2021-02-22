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
  return sUser;

}
