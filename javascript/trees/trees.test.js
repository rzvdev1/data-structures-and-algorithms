const { it } = require("eslint/lib/rule-tester/rule-tester");
const { Node, BinaryTree, BinarySearchTree } = require("./trees.js");
// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Returns true	false for the contains method, given an existing or non-existing node value
describe("Binary Tree", () => {
  it("can successfully add a left child and right child properly to a node", () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    expect(tree.root.value).toBe(1);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(3);
  });
  it("can successfully return a collection from a pre-order traversal", () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    expect(tree.preOrder()).toEqual([1, 2, 3]);
  });
  it("can successfully return a collection from an in-order traversal", () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    expect(tree.inOrder()).toEqual([2, 1, 3]);
  });
  it("can successfully return a collection from a post-order traversal", () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    expect(tree.postOrder()).toEqual([2, 3, 1]);
  });
});

describe("Binary Search Tree", () => {
  it(" Returns true	false for the contains method, given an existing or non-existing node value ", () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    expect(tree.contains(1)).toBe(true);
    expect(tree.contains(2)).toBe(true);
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(4)).toBe(false);
  });
});
