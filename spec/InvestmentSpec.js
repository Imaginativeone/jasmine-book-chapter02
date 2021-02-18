describe("Investment", () => {

  let stock, investment;

  beforeEach(() => {

    stock = new Stock();

    investment = new Investment({
      stock: stock,
      shares: 100
    });

  });

  it("Should be of a stock", () => {
    expect(investment.stock).toBe(stock);
  });

  it('should have the invested shares quantity', () => {
    expect(investment.shares).toEqual(100);
  })
});
