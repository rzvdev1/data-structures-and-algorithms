const PseudoQueue = require("./stack-queue-pseudo");

describe("PseudoQueue", () => {
  test("should create a new pseudo queue", () => {
    const pseudoQueue = new PseudoQueue();
    expect(pseudoQueue).toBeDefined();
  });
  test("should enqueue a value", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.stack1.size).toBe(3);
  });
  test("should dequeue a value", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    pseudoQueue.dequeue();
    expect(pseudoQueue.stack2.size).toBe(2);
  });
  test("should return null if dequeue is called on an empty queue", () => {
    const pseudoQueue = new PseudoQueue();
    expect(pseudoQueue.dequeue()).toBeNull();
  });
});
