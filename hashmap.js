const LinkedList = require("./linkedList.js");

class HashMap {
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
        this.set(currentNode.data.key, currentNode.data.value);
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

  set(key, value) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];
    if (this.checkOutOfBounds(index)) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.checkLoad()) this.resize();
    let currentNode = bucket.head;
    while (currentNode) {
      if (currentNode.data.key === key) {
        currentNode.data.value = value;
        return;
      }
      currentNode = currentNode.next;
    }

    bucket.append({ key, value });
  }

  get(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    let currentNode = bucket.head;
    while (currentNode) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key) % this.capacity;
    const bucket = this.buckets[index];

    let currentNode = bucket.head;
    while (currentNode) {
      if (currentNode.data.key === key) {
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

    if (bucket.head.data.key === key) {
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
        keys.push(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.capacity; i++) {
      let currentNode = this.buckets[i].head;
      while (currentNode) {
        values.push(currentNode.data.value);
        currentNode = currentNode.next;
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.capacity; i++) {
      let currentNode = this.buckets[i].head;
      while (currentNode) {
        entries.push([[currentNode.data.value], [currentNode.data.key]]);
        currentNode = currentNode.next;
      }
    }
    return entries;
  }
}

module.exports = HashMap;
