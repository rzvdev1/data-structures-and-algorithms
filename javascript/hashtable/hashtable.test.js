const { hash, HashTable } = require("./hashtable.js");

describe("Hash Table", () => {
  it("should hash a key", () => {
    expect(hash("hello", 50)).toEqual(8);
  });
  it("should insert a key value pair", () => {
    const hashTable = new HashTable(20);
    hashTable.insert("serena", "moon");
    hashTable.insert("amy", "mercury");
    expect(hashTable.buckets[8].get("serena")).toBe("moon");
    expect(hashTable.buckets[8].get("amy")).toBe("mercury");
  });
  it("should remove a key value pair", () => {
    const hashTable = new HashTable(20);
    hashTable.insert("serena", "moon");
    hashTable.insert("amy", "mercury");
    hashTable.remove("serena");
    expect(hashTable.buckets[8].get("serena")).toBe(undefined);
  });
  it("should search for a key", () => {
    const hashTable = new HashTable(20);
    hashTable.insert("serena", "moon");
    hashTable.insert("amy", "mercury");
    expect(hashTable.search("serena")).toBe("moon");
    expect(hashTable.search("amy")).toBe("mercury");
  });
  it("should return a collection of keys", () => {
    const hashTable = new HashTable(20);
    hashTable.insert("serena", "moon");
    hashTable.insert("amy", "mercury");
    expect(hashTable.keys()).toEqual(["serena", "amy"]);
  });
});
