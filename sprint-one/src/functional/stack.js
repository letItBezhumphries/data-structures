var Stack = function() {
  var someInstance = {};
  var numericKey = 0;
  // Use an object with numeric keys to store values
  var storage = {}; 
  
  // Implement the methods below
  someInstance.push = function(value) {
    numericKey += 1;
    return storage[numericKey] = value;
  };

  someInstance.pop = function() {
    let top = storage[someInstance.size()];
    delete storage[someInstance.size()];
    numericKey -= 1;
    return top;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

 