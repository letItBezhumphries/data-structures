class Stack {
  constructor() {
    this.storage = {};
    this.numKey = 0;
  }
  
  push(value) {
    this.numKey += 1;
    this.storage[this.numKey] = value;
  }

  pop() {
    let top = this.storage[this.size()];
    delete this.storage[this.size()];
    this.numKey -= 1;
    return top;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}