const { Graph, Node } = require("./graph-depth-first.js");

describe("Graph", () => {
  it("Traverses a graph depth first", () => {
    let graph = new Graph();
    let nodeA = new Node("A");
    let nodeB = new Node("B");
    let nodeC = new Node("C");
    let nodeD = new Node("D");
    let nodeE = new Node("E");
    let nodeF = new Node("F");
    let nodeG = new Node("G");
    let nodeH = new Node("H");

    graph.nodes.push(nodeA);
    graph.nodes.push(nodeB);
    graph.nodes.push(nodeC);
    graph.nodes.push(nodeD);
    graph.nodes.push(nodeE);
    graph.nodes.push(nodeF);
    graph.nodes.push(nodeG);
    graph.nodes.push(nodeH);

    nodeA.neighbors.push({ node: nodeB, weight: 1 });
    nodeA.neighbors.push({ node: nodeD, weight: 1 });
    nodeB.neighbors.push({ node: nodeE, weight: 1 });
    nodeB.neighbors.push({ node: nodeF, weight: 1 });
    nodeC.neighbors.push({ node: nodeG, weight: 1 });
    nodeC.neighbors.push({ node: nodeH, weight: 1 });
    nodeD.neighbors.push({ node: nodeB, weight: 1 });
    nodeE.neighbors.push({ node: nodeC, weight: 1 });
    nodeF.neighbors.push({ node: nodeG, weight: 1 });
    nodeG.neighbors.push({ node: nodeF, weight: 1 });

    let result = graph.depthFirst(nodeA);
    expect(result.size).toBe(8);
    expect(result.has(nodeA)).toBe(true);
    expect(result.has(nodeB)).toBe(true);
    expect(result.has(nodeC)).toBe(true);
    expect(result.has(nodeD)).toBe(true);
    expect(result.has(nodeE)).toBe(true);
    expect(result.has(nodeF)).toBe(true);
    expect(result.has(nodeG)).toBe(true);
    expect(result.has(nodeH)).toBe(true);
  });
});
