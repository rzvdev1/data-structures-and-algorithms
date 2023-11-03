const { businessTrip, Graph } = require("./graph-business-trip.js");

describe("Graph Business Trip", () => {
  it("should return the cost of the trip ", () => {
    const graph = new Graph();
    const pandora = graph.addVertex("Pandora");
    const arendelle = graph.addVertex("Arendelle");
    const metroville = graph.addVertex("Metroville");
    const monstropolis = graph.addVertex("Monstropolis");
    const naboo = graph.addVertex("Naboo");
    const narnia = graph.addVertex("Narnia");

    graph.addUndirectedEdge(pandora, arendelle, 150);
    graph.addUndirectedEdge(pandora, metroville, 82);
    graph.addUndirectedEdge(arendelle, metroville, 99);
    graph.addUndirectedEdge(arendelle, monstropolis, 42);
    graph.addUndirectedEdge(metroville, monstropolis, 105);
    graph.addUndirectedEdge(metroville, naboo, 26);
    graph.addUndirectedEdge(metroville, narnia, 37);
    graph.addUndirectedEdge(monstropolis, naboo, 73);
    graph.addUndirectedEdge(narnia, naboo, 250);

    expect(businessTrip(graph, ["Metroville", "Pandora"])).toEqual(82);
    expect(
      businessTrip(graph, ["Arendelle", "New Monstropolis", "Naboo"])
    ).toEqual(115);
    expect(businessTrip(graph, ["Naboo", "Pandora"])).toEqual(null);
    expect(businessTrip(graph, ["Narnia", "Arendelle", "Naboo"])).toEqual(null);
  });
});
