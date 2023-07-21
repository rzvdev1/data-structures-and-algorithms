"use strict";

const { LinkedList } = require("./linkedListInsertions");
// "{ a } -> { b } -> { c } -> NULL"
const dummyLL = {
  value: "a",
  next: {
    value: "b",
    next: {
      value: "c",
      next: null,
    },
  },
};

describe("linked list test suite", () => {
  test("toString method returns the node values in the right format", () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
  });
  test("includes method returns true if a value exists, else false", () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.includes("b")).toEqual(true);
    expect(testLL.includes("z")).toEqual(false);
  });
  test("insert should take a new value and add it to the front of the list", () => {
    const testLL = new LinkedList(dummyLL);
    testLL.insert(1);
    expect(testLL.toString()).toEqual(
      "{ 1 } -> { a } -> { b } -> { c } -> NULL"
    );
  });
  //   append
  // arguments: new value
  // adds a new node with the given value to the end of the list
  test("should append to the end of the list", () => {
    const testLL = new LinkedList(dummyLL);
    testLL.append("z");
    expect(testLL.toString()).toEqual(
      "{ a } -> { b } -> { c } -> { z } -> NULL"
    );
  });
  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified

  test("should insert before the first node", () => {
    const testLLBefore = new LinkedList(dummyLL);
    testLLBefore.insertBefore("b", "1");
    expect(testLLBefore.toString()).toEqual(
      "{ a } -> { 1 } -> { b } -> { c } -> NULL"
    );
  });

  test("should insert after the first node", () => {
    const testLLAfter = new LinkedList(dummyLL);
    testLLAfter.insertAfter("c", "2");
    expect(testLLAfter.toString()).toEqual(
      "{ a } -> { b } -> { c } -> { 2 } -> NULL"
    );
  });
});
