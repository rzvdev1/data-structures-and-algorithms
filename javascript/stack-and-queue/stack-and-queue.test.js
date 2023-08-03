const { describe } = require("eslint/lib/rule-tester/rule-tester.js");
const { Stack, Queue } = require("./stack-and-queue.js");

describe("Stack", () => {
  test("should add a new element to the stack", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.size).toBe(1);
    expect(stack.storage[1]).toBe(1);
  });
  test("should remove the last element from the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.size).toBe(1);
    expect(stack.storage[2]).toBe(undefined);
  });
  test("should return the value of top element", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });
  test("should return true if the stack is empty", () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });
});

describe("Queue", () => {
  test("should add a new element to the queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.tail).toBe(1);
    expect(queue.storage[0]).toBe(1);
  });
  test("should remove the first element from the queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    expect(queue.head).toBe(1);
    expect(queue.storage[0]).toBe(undefined);
  });
  test("should return true if the queue is empty", () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });
});
