const { merge, mergeSort } = require("./merge");

describe("Merge Sort", () => {
  it("should sort an array", () => {
    const arr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it("should merge two arrays", () => {
    const left = [1, 2, 3];
    const right = [4, 5, 6];
    const arr = [];
    merge(left, right, arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
