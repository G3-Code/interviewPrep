const InsertionSort = require("./InsertionSort");

describe("Test case for Insertion sort", () => {
  it("Should give a sorted array", () => {
    expect(InsertionSort([2, 1, -5, 7, 0])).toEqual([-5, 0, 1, 2, 7]);
  });
});
