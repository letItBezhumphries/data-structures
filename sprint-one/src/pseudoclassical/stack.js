var Stack = function() {
  
  this.storage = {};
  this.numKey = 0;
};

Stack.prototype.push = function(value) {
  this.numKey += 1;
  this.storage[this.numKey] = value;
};

Stack.prototype.pop = function() {
  let top = this.storage[this.size()];
  delete this.storage[this.size()];
  this.numKey -= 1;
  return top;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


