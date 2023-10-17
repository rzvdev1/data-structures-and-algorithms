const { tree_intersection, Node } = require("./tree-intersection.js");

describe("tree_intersection", () => {
  it("returns an array of values found in both trees", () => {
    const tree1 = new Node(150);
    tree1.left = new Node(100);
    tree1.right = new Node(250);
    tree1.left.left = new Node(75);
    tree1.left.right = new Node(160);
    tree1.left.right.left = new Node(125);
    tree1.left.right.right = new Node(175);
    tree1.right.left = new Node(200);
    tree1.right.right = new Node(350);
    tree1.right.right.left = new Node(300);
    tree1.right.right.right = new Node(500);
    const tree2 = new Node(42);
    tree2.left = new Node(100);
    tree2.right = new Node(600);
    tree2.left.left = new Node(15);
    tree2.left.right = new Node(160);
    tree2.left.right.left = new Node(125);
    tree2.left.right.right = new Node(175);
    tree2.right.left = new Node(200);
    tree2.right.right = new Node(350);
    tree2.right.right.left = new Node(4);
    tree2.right.right.right = new Node(500);
    expect(tree_intersection(tree1, tree2)).toEqual([
      100, 160, 125, 175, 200, 350, 500,
    ]);
  });
});
