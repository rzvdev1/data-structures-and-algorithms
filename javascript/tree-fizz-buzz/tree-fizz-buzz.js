class kAryTree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(tree) {
  if (!tree) {
    return null;
  }
  let queue = [];
  queue.push(tree);
  while (queue.length) {
    let node = queue.shift();
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = "FizzBuzz";
    } else if (node.value % 3 === 0) {
      node.value = "Fizz";
    } else if (node.value % 5 === 0) {
      node.value = "Buzz";
    } else {
      node.value = node.value.toString();
    }
    for (let i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return tree;
}

module.exports = { kAryTree, fizzBuzzTree };
