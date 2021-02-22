// addTypeFlag
function addTypeFlag(array, type) {
  return array.map((item) => {      
    item.infotype = type;
  });
}
