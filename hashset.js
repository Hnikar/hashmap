const LinkedList = require("./linkedList.js");

class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = [];
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  checkLoad() {
    let size = 0;
    for (let i = 0; i < this.capacity; i++) {
      size += this.buckets[i].size;
    }
    return size / this.capacity > this.loadFactor;
  }

  resize() {
    let oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = [];
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = new LinkedList();
    }
    for (let i = 0; i < oldBuckets.length; i++) {
      let currentNode = oldBuckets[i].head;
      while (currentNode) {
        this.set(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }

  checkOutOfBounds(index) {
    return index < 0 || index >= this.capacity;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];
    if (this.checkOutOfBounds(index)) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.checkLoad()) this.resize();
    let currentNode = bucket.head;
    while (currentNode) {
      if (currentNode.data === key) {
        return;
      }
      currentNode = currentNode.next;
    }

    bucket.append(key);
  }

  has(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    let currentNode = bucket.head;
    while (currentNode) {
      if (currentNode.data === key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    if (!bucket.head) {
      return false;
    }

    if (bucket.head.data === key) {
      bucket.head = bucket.tail = null;
      return true;
    }
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.capacity; i++) {
      let currentNode = this.buckets[i].head;
      while (currentNode) {
        count++;
        currentNode = currentNode.next;
      }
    }
    return count;
  }

  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.capacity; i++) {
      let currentNode = this.buckets[i].head;
      while (currentNode) {
        keys.push(currentNode.data);
        currentNode = currentNode.next;
      }
    }
    return keys;
  }
}

module.exports = HashSet;
