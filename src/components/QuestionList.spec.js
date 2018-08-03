describe("The question list", () => {
  beforeEach(() => {
    console.log("Before Each!");
  });

  beforeAll(() => {
    console.log("Before All!");
  });

  afterAll(() => {
    console.log("After All!");
  });

  afterEach(() => {
    console.log("After Each!");
  });

  it.skip("Should display a list of items", () => {
    expect(2 + 2).toEqual(5);
  });

  it("Should work", () => {
    expect(2 + 2).toEqual(4);
  });
});
