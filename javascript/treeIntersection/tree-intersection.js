class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  preOrder() {
    const values = [];
    const hash = (node) => {
      values.push(node.value);
      if (node.left) hash(node.left);
      if (node.right) hash(node.right);
    };
    hash(this);
    return values;
  }
}

function tree_intersection(tree1, tree2) {
  const tree1Values = tree1.preOrder();
  const tree2Values = tree2.preOrder();
  const hashSet = new Set();
  tree1Values.forEach((value) => {
    hashSet.add(value);
  });
  const intersection = [];
  tree2Values.forEach((value) => {
    if (hashSet.has(value)) {
      intersection.push(value);
    }
  });
  return intersection;
}

module.exports = { tree_intersection, Node };

// resources used: https://www.geeksforgeeks.org/union-and-intersection-of-two-linked-lists/
