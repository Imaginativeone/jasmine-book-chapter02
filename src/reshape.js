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
