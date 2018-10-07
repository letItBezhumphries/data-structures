var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceObj = Object.create(queueMethods);
  instanceObj['numKey'] = 0;
  instanceObj['storage'] = {};

  return instanceObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.numKey += 1;
  this.storage[this.numKey] = value;
};

queueMethods.dequeue = function() {
  let front = this.storage[1];
  delete this.storage[1];
  this.storage[1] = this.storage[2];
  if (this.numKey > 0) {
    this.numKey--;
  }
  return front;
};

queueMethods.size = function() {
  return this.numKey;
};