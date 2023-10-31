const { Node, Graph } = require("./graph-breadth-first.js");

describe("Graph", () => {
  const graph = new Graph();
  const nodeA = new Node("A");
  const nodeB = new Node("B");
  const nodeC = new Node("C");
  const nodeD = new Node("D");
  const nodeE = new Node("E");
  const nodeF = new Node("F");
  const nodeG = new Node("G");
  const nodeH = new Node("H");

  graph.addNode(nodeA);
  graph.addNode(nodeB);
  graph.addNode(nodeC);
  graph.addNode(nodeD);
  graph.addNode(nodeE);
  graph.addNode(nodeF);
  graph.addNode(nodeG);
  graph.addNode(nodeH);

  graph.addEdge(nodeA, nodeB);
  graph.addEdge(nodeA, nodeD);
  graph.addEdge(nodeB, nodeC);
  graph.addEdge(nodeC, nodeG);
  graph.addEdge(nodeD, nodeE);
  graph.addEdge(nodeD, nodeH);
  graph.addEdge(nodeD, nodeF);
  graph.addEdge(nodeE, nodeF);
  graph.addEdge(nodeF, nodeH);

  it("should return a collection of nodes in the order they were visited", () => {
    expect(graph.breadthFirst(nodeA)).toEqual([
      "A",
      "B",
      "D",
      "C",
      "E",
      "H",
      "F",
      "G",
    ]);
  });
});
