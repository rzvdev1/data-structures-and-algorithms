const leftJoin = require("./hashmap-left-join.js");

describe("Left Join", () => {
  it("should return the left join of two hashmaps", () => {
    let hash1 = {
      fond: "enamored",
      wrath: "anger",
      diligent: "employed",
      outfit: "garb",
      guide: "usher",
    };
    let hash2 = {
      fond: "averse",
      wrath: "delight",
      diligent: "idle",
      guide: "follow",
      flow: "jam",
    };
    let expected = [
      ["fond", "enamored", "averse"],
      ["wrath", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", null],
      ["guide", "usher", "follow"],
    ];
    expect(leftJoin(hash1, hash2)).toEqual(expected);
  });
});
