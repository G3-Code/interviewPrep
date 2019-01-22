const BubbleSort = require("./BubbleSort");

describe("This test is to test bubble sort", () => {
  it("Positive test case for bubble sort", () => {
    expect(BubbleSort([2, 4, 3, 1])).toEqual([1, 2, 3, 4]);
  });
});
