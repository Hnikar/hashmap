class Node {
  constructor(data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.nextNode = new Node(data);
      this.tail = this.tail.nextNode;
    }
    this.size++;
  }
  prepend(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      const newHead = new Node(data, this.head);
      this.head = newHead;
    }
    this.size++;
  }
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.nextNode;
    }

    return null;
  }
  pop() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    this.tail = previous;
    if (this.tail) {
      this.tail.nextNode = null;
    } else {
      this.head = null;
    }

    this.size--;

    return current.data;
  }
  contains(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }
  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.nextNode;
    }

    return null;
  }
  toString() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `${current.data} -> `;
      current = current.nextNode;
    }

    result += "null";

    return result;
  }
  insertAt(index, data) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }

    const newNode = new Node(data, current);
    previous.nextNode = newNode;
    this.size++;
  }
  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.nextNode;
      count++;
    }

    previous.nextNode = current.nextNode;
    if (!current.nextNode) {
      this.tail = previous;
    }

    this.size--;
  }
}

module.exports = LinkedList;
