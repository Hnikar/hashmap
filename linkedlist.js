class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.nextNode = new Node(value);
      this.tail = this.tail.nextNode;
    }
    this.size++;
  }
  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const newHead = new Node(value, this.head);
      this.head = newHead;
    }
    this.size++;
  }
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.value;
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

    return current.value;
  }
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
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
      result += `${current.value} -> `;
      current = current.nextNode;
    }

    result += "null";

    return result;
  }
  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      this.prepend(value);
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

    const newNode = new Node(value, current);
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
