class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }
  getNeighbors(node) {
    return node.neighbors;
  }
  depthFirst(startNode) {
    let stack = [];
    let visited = new Set();
    stack.push(startNode);
    visited.add(startNode);
    while (stack.length) {
      let currentNode = stack.pop();
      let neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        let neighborNode = neighbor.node;
        if (visited.has(neighborNode)) {
          continue;
        } else {
          visited.add(neighborNode);
        }
        stack.push(neighborNode);
      }
    }
    return visited;
  }
}

module.exports = { Graph, Node };
