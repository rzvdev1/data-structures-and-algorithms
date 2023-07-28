const { LinkedList } = require("./linked-list-zip.js");

describe("linked list test suite", () => {
  test("should zip two linked lists together", () => {
    const ll1 = new LinkedList();
    ll1.insert("c");
    ll1.insert("b");
    ll1.insert("a");
    const ll2 = new LinkedList();
    ll2.insert(3);
    ll2.insert(2);
    ll2.insert(1);
    const zippedList = LinkedList.zipLists(ll1, ll2);
    expect(zippedList.toString()).toEqual(
      "{ a } -> { 1 } -> { b } -> { 2 } -> { c } -> { 3 } -> NULL"
    );
  });
});
