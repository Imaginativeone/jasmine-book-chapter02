function Investment(params) {

  let p = params || {};
  
  this.stock  = p.stock;
  this.shares = p.shares;
  
  console.log('params', params);
  console.log('p', p);
}
