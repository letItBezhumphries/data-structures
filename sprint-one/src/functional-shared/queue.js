var Queue = function() {
  let someInstance = {
    numKey: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.numKey += 1;
    this.storage[this.numKey] = value;
  },
  dequeue: function() {
    let first = this.storage[1];
    delete this.storage[1];
    this.storage[1] = this.storage[2];
    if (this.numKey > 0) {
      this.numKey--;
    }
    return first;
  },
  size: function() {
    return this.numKey;
  }
};


