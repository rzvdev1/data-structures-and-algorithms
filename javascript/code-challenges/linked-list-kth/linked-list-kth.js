class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  traversalCheatSheet() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversalCheatSheet() {
    let current = this.head;
    if (!current) return;
    while (current?.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  // insert
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  // includes
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // toString
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    if (!this.head) return "NULL";
    let current = this.head;
    let returnStr = "";
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += "NULL";
    return returnStr;
  }
  //   append
  // arguments: new value
  // adds a new node with the given value to the end of the list
  append(value) {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  // insert after
  // arguments: value, new value
  // adds a new node with the given new value immediately after the first node that has the value specified
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current.value !== value) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  kth(k) {
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    if (k > length) return null;
    current = this.head;
    for (let i = 0; i < length - k - 1; i++) {
      current = current.next;
    }
    return current.value;
  }
}

module.exports = { LinkedList, Node };
