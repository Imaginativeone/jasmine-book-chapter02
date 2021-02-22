function addTypeFlag(array, type) {
  return newType = array.map((item) => {
    item.infotype = type;
    return item;
  })
}
