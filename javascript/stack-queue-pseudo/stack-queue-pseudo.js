const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
      if (this.stack2.isEmpty()) {
        return null;
      }
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
