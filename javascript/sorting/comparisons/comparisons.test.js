const { sortByYear, sortByTitle, Movies } = require("./comparisons");

describe("sortByYear", () => {
  it("should sort the movies by most recent year first", () => {
    const sortedMovies = Movies.sort(sortByYear);
    expect(sortedMovies[0].year).toEqual(2011);
    expect(sortedMovies[1].year).toEqual(2008);
    expect(sortedMovies[2].year).toEqual(2007);
  });
});
describe("sortByTitle", () => {
  it("should sort the movies, alphabetical by title", () => {
    const sortedMovies = Movies.sort(sortByTitle);
    expect(sortedMovies[0].title).toEqual("City of God");
    expect(sortedMovies[1].title).toEqual("Crocodile Dundee");
    expect(sortedMovies[2].title).toEqual("Godfather");
  });
});
describe("Movies", () => {
  it("should be an array", () => {
    expect(Array.isArray(Movies)).toEqual(true);
  });
  it("should have a title", () => {
    expect(Movies[0].title).toEqual("Godfather");
  });
  it("should have a year", () => {
    expect(Movies[0].year).toEqual(1972);
  });
  it("should have a list of genres", () => {
    expect(Movies[0].genres).toEqual(["Crime", "Drama"]);
  });
});
