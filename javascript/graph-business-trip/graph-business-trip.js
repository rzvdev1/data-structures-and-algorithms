//resource from class repo to use class and methods
class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(from, to, weight = null) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(value) {
    const vertex = new Node(value);

    this.adjacencyList.set(vertex, []);
    return vertex;
  }
  addEdge(startNode, endNode, weight) {
    if (!this.adjacencyList.has(startNode) || !this.adjacencyList.has(endNode))
      throw new Error("invalid verticies");

    let edges = this.adjacencyList.get(startNode);
    const newEdge = new Edge(startNode, endNode, weight);
    edges.push(newEdge);
  }

  addUndirectedEdge(a, b, weight) {
    this.addEdge(a, b, weight);
    this.addEdge(b, a, weight);
  }
  getVerticies() {
    const vertexArray = [];
    this.adjacencyList.forEach((_, key) => vertexArray.push(key.value));
    return vertexArray;
  }
  getNeighbors(vertex) {
    if (!vertex) return;

    const edges = this.getEdges(vertex);
    if (edges) {
      return edges.map((edge) => edge.to);
    } else return null;
  }

  getEdges(vertex) {
    return this.adjacencyList.has(vertex)
      ? this.adjacencyList.get(vertex)
      : null;
  }
  size() {
    return this.adjacencyList.size;
  }
}

// Return: the cost of the trip (if it’s possible) or null (if not)

// Input	Output
// [Metroville, Pandora, ]	$82
// [Arendelle, New Monstropolis, Naboo]	$115
// [Naboo, Pandora]	null
// [Narnia, Arendelle, Naboo]	null
function businessTrip(graph, array) {
  let cost = 0;
  let cities = graph.getVerticies();
  let isTrip = true;

  for (let i = 0; i < array.length - 1; i++) {
    let neighbors = graph.getNeighbors(array[i]);
    let isNeighbor = false;
    for (let j = 0; j < neighbors.length; j++) {
      if (neighbors[j].value === array[i + 1]) {
        isNeighbor = true;
        cost += neighbors[j].weight;
      }
    }
    if (!isNeighbor) {
      isTrip = false;
      cost = 0;
      break;
    }
  }
}

module.exports = { businessTrip, Graph };
