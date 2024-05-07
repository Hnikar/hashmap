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

    let currentNode = bucket.head;
    while (currentNode) {
      if (currentNode.value.key === key) {
        currentNode.value.value = value;
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
      if (currentNode.value.key === key) {
        return currentNode.value.value;
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
      if (currentNode.value.key === key) {
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

    if (bucket.head.value.key === key) {
      bucket.head = bucket.tail = null;
      return true;
    }
  }
}

module.exports = HashMap;
