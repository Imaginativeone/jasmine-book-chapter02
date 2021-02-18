function Investment(params) {

  let p = params || {};
  
  this.stock  = p.stock;
  this.shares = p.shares;
  this.sharePrice = p.sharePrice;

  this.cost = this.shares * this.sharePrice;
  
}
