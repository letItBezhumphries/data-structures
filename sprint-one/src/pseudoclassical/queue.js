var Queue = function() {
  this.storage = {};
  this.numKey = 0;
};

Queue.prototype.enqueue = function(value) {
  this.numKey += 1;
  this.storage[this.numKey] = value;
};

Queue.prototype.dequeue = function() {
  let head = this.storage[1];
  delete this.storage[1];
  this.storage[1] = this.storage[2];
  if (this.numKey > 0) {
    this.numKey--;
  }
  return head;
};

Queue.prototype.size = function() {
  return this.numKey;
};

