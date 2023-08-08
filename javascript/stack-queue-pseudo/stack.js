class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }
  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    //temp variable
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  peek() {
    return this.storage[this.size];
  }
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
