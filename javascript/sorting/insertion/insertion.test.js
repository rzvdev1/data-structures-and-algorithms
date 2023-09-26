const { insert, insertionSort } = require("./insertion");

describe("insertion sort", () => {
  it("should sort an array", () => {
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it("should insert a value into a sorted array", () => {
    let sorted = [1, 2, 3];
    insert(sorted, 2.5);
    expect(sorted).toEqual([1, 2, 2.5, 3]);
  });
});
