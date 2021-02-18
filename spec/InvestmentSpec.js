describe("Investment", () => {

  it("Should be of a stock", () => {
    var stock = new Stock();
    var investment = new Investment({
      stock: stock,
      shares: 100
    });
    expect(investment.stock).toBe(stock);
  });

  it('should have the invested shares quantity', () => {

    var stock = new Stock();
    var investment = new Investment({

      stock: stock,
      shares: 100

    });

    console.log('investment', investment);
    expect(investment.shares).toEqual(100);

  })
});
