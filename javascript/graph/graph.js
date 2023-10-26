class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this;
  }

  getVertices() {
    return Object.keys(this.adjacencyList);
  }
  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
  }
  size() {
    return this.getVertices().length;
  }
}
module.exports = Graph;
