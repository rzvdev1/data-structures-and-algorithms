// Resouce I use to help me understand the concept of stack and queue better:
// its a video from YouTube https://www.youtube.com/watch?v=1AJ4ldcH2t4

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

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    //temp variable
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
  isEmpty() {
    return this.head === this.tail;
  }
}

module.exports = { Stack, Queue };
