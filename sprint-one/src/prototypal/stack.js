var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instanceObj = Object.create(stackMethods);
  
  instanceObj['storage'] = {};
  instanceObj['numKey'] = 0;

  return instanceObj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.numKey += 1;
  this.storage[this.numKey] = value;
};

stackMethods.pop = function() {
  let top = this.storage[this.size()];
  delete this.storage[this.size()];
  this.numKey -= 1;
  return top;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};



