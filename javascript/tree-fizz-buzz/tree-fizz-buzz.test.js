const { kAryTree, fizzBuzzTree } = require("./tree-fizz-buzz.js");

describe("fizzBuzzTree", () => {
  it("should return null if tree is empty", () => {
    let tree = new kAryTree();
    expect(fizzBuzzTree(tree)).toBeNull();
  });
  it("should return the value is not divisible by 3 or 5, simply turn the number into a String. ", () => {
    let tree = new kAryTree(1);
    tree.children.push(new kAryTree(2));
    tree.children.push(new kAryTree(4));
    tree.children.push(new kAryTree(7));
    tree.children[0].children.push(new kAryTree(8));
    tree.children[0].children.push(new kAryTree(13));
    tree.children[1].children.push(new kAryTree(14));
    tree.children[2].children.push(new kAryTree(16));
    tree.children[2].children.push(new kAryTree(17));
    tree.children[2].children.push(new kAryTree(19));
    expect(fizzBuzzTree(tree)).toEqual({
      value: "1",
      children: [
        {
          value: "2",
          children: [
            { value: "8", children: [] },
            { value: "13", children: [] },
          ],
        },
        { value: "4", children: [{ value: "14", children: [] }] },
        {
          value: "7",
          children: [
            { value: "16", children: [] },
            { value: "17", children: [] },
            { value: "19", children: [] },
          ],
        },
      ],
    });
  });
  it("should return tree with values changed to FizzBuzz, Fizz, Buzz, or string", () => {
    let tree = new kAryTree(3);
    tree.children.push(new kAryTree(5));
    tree.children.push(new kAryTree(15));
    tree.children.push(new kAryTree(4));
    tree.children[0].children.push(new kAryTree(6));
    tree.children[0].children.push(new kAryTree(7));
    tree.children[1].children.push(new kAryTree(8));
    tree.children[2].children.push(new kAryTree(9));
    tree.children[2].children.push(new kAryTree(10));
    tree.children[2].children.push(new kAryTree(11));
    tree.children[2].children.push(new kAryTree(12));
    tree.children[2].children.push(new kAryTree(13));
    tree.children[2].children.push(new kAryTree(14));
    expect(fizzBuzzTree(tree)).toEqual({
      value: "Fizz",
      children: [
        {
          value: "Buzz",
          children: [
            { value: "Fizz", children: [] },
            { value: "7", children: [] },
          ],
        },
        { value: "FizzBuzz", children: [{ value: "8", children: [] }] },
        {
          value: "4",
          children: [
            { value: "Fizz", children: [] },
            { value: "Buzz", children: [] },
            { value: "11", children: [] },
            { value: "Fizz", children: [] },
            { value: "13", children: [] },
            { value: "14", children: [] },
          ],
        },
      ],
    });
  });
});
