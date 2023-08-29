class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirst() {
    const result = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

module.exports = { Node, BinaryTree };
