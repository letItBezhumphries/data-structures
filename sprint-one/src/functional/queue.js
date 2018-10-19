var Queue = function() {
  var someInstance = {};
  let numericKey = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    numericKey += 1;
    storage[numericKey] = value; 
  };

  someInstance.dequeue = function() {
    let head = storage[1];
    delete storage[1];
    storage[1] = storage[2];
    if (numericKey > 0) {
      numericKey--;
    }
    return head;
  };

  someInstance.size = function() {
    return numericKey;
  };

  return someInstance;
};
