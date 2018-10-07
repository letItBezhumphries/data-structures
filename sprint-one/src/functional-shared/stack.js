var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    numberKey: 0
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};


var stackMethods = {};
stackMethods.push = function(value) {
  this.numberKey += 1;
  return this.storage[this.numberKey] = value;
};

stackMethods.pop = function() {
  let popped = this.storage[this.size()];
  delete this.storage[this.size()];
  this.numberKey -= 1;
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
    

