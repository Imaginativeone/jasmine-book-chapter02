// import waitUntil from 'wait-until-promise';
// import waitUntil from '../node_modules/wait-until-promise/index.js';

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
