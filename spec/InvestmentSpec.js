describe("Investment", () => {
  it("Should be of a stock", () => {
    
    let stock = new Stock();
    let investment = new Investment(stock);

    expect(investment.stock).toBe(stock);
  })
});
