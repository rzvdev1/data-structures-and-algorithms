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

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }
  enqueue(animal) {
    if (animal.species === "dog") {
      this.dog.enqueue(animal);
    } else if (animal.species === "cat") {
      this.cat.enqueue(animal);
    }
  }
  dequeue(pref) {
    if (pref === "dog") {
      return this.dog.dequeue();
    } else if (pref === "cat") {
      return this.cat.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = { AnimalShelter };
