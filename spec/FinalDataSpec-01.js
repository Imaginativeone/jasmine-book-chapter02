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
