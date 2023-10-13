const { repeatedWord } = require("./hashmap-repeated-word.js");

describe("repeatedWord", () => {
  it("should return the first repeated word", () => {
    const str = "Once upon a time, there was a brave princess who...";
    expect(repeatedWord(str)).toBe("a");
  });
});
