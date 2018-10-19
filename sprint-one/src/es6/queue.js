class Queue {
  constructor() {
    this.storage = {};
    this.numKey = 0;
  }

  enqueue(value) {
    this.numKey += 1;
    this.storage[this.numKey] = value;
  }

  dequeue() {
    let next = this.storage[1];
    delete this.storage[1];
    this.storage[1] = this.storage[2];
    if (this.numKey > 0) {
      this.numKey--;
    }
    return next;
  }

  size() {
    return this.numKey;
  }
}
