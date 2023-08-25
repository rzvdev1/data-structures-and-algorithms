const { it, describe } = require("eslint/lib/rule-tester/rule-tester");
const { Node, BinaryTree } = require("./tree-max.js");

describe("tree-max", () => {
  it("should return the maximum value in a tree", () => {
    const tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    expect(tree.maxValue()).toEqual(3);
  });
});
