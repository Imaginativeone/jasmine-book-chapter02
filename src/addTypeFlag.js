// addTypeFlag
function addTypeFlag(array, type) {
  array.map((item) => {      
    item.infotype = type;
  });
  return array;
}
