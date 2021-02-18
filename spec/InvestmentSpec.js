describe("Investment", () => {

  let stock, investment;

  beforeEach(() => {

    stock = new Stock();

    investment = new Investment({
      stock: stock,
      shares: 100,
      sharePrice: 20
    });

  });

  
  it("Should be of a stock", () => {
    expect(investment.stock).toBe(stock);
  });
  
  it('should have the invested shares quantity', () => {
    expect(investment.shares).toEqual(100);
  })

  it('Should have the share paid price', () => {
    expect(investment.sharePrice).toEqual(20);
  });

  it('Should have a cost', () => {
    expect(investment.cost).toEqual(2000);
  });

});
