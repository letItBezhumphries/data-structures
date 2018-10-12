var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //because set is the instance object only refer to this.storage 
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  return this.storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * add: this is just inserting a key/value onto an object O(1)--Constant Time
 * contains: this is iterating over the keys of object  O(n)--Linear Time
 * remove: because we have a reference to the key to remove O(1)--Constant Time
  */
