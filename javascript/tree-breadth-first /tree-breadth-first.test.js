const { Node, BinaryTree } = require("./tree-breadth-first");

describe("Breadth First Traversal", () => {
  test("should return an array of values representing the breadth first traversal", () => {
    const tree = new BinaryTree();
    const root = new Node(2);
    const node1 = new Node(7);
    const node2 = new Node(5);
    const node3 = new Node(2);
    const node4 = new Node(6);
    const node5 = new Node(9);
    const node6 = new Node(5);
    const node7 = new Node(11);
    const node8 = new Node(4);

    tree.root = root;
    root.left = node1;
    root.right = node2;
    node1.left = node3;
    node1.right = node4;
    node4.left = node6;
    node2.right = node5;
    node5.right = node7;
    node5.left = node8;

    expect(tree.breadthFirst()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});
