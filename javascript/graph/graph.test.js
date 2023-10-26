const Graph = require("./graph");

describe("Graph", () => {
  it("should add vertex", () => {
    const graph = new Graph();
    graph.addVertex("A");
    expect(graph.adjacencyList).toEqual({ A: [] });
  });
  it("should add edge", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    expect(graph.adjacencyList).toEqual({ A: ["B"], B: ["A"] });
  });
  it("should get vertices", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    expect(graph.getVertices()).toEqual(["A", "B"]);
  });
  it("should get neighbors", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    expect(graph.getNeighbors("A")).toEqual(["B"]);
  });
  it("should get size", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B");
    expect(graph.size()).toEqual(2);
  });
});
