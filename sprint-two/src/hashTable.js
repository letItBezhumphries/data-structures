
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //create a tuple an array with first elem = key and 2nd elem = value
  var tuple = [key, value];
  //create a variable to store a bucket at that index
  var bucket = this._storage.get(index);
  //check if there isnt a bucket, if true 
  if (!bucket) {
    //reassign bucket to point to an empty array
    bucket = [];
    //and insert bucket at index
    this._storage.set(index, bucket);
  }
  //create a boolean flag to check if tuple exists
  var tupleExists = false;
  //iterate over the bucket of tuples to check if tuple already exists
  for (var i = 0; i < bucket.length; i++) {
    //check each tuple if tuple[0] is key
    if (bucket[i][0] === key) {
      //set tuple[1] to equal value
      bucket[i][1] = value;
      //toggle tupleExists value to true
      tupleExists = true;
    }    
  } 
  //check if tuple doesn't exist in bucket if it doesn't append tuple to bucket
  if (tupleExists === false) {
    bucket.push(tuple);
  }  
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //declare variable to store bucket at that index
  var bucket = this._storage.get(index);
  //check if the bucket has tuples
  if (bucket.length > 0) {
    //if there is length there are and iterate over each tuple
    for (var i = 0; i < bucket.length; i++) {
      //if you find a tuple with first elem === key
      if (bucket[i][0] === key) {
        //return the tuple[1]
        return bucket[i][1];
      }
    }
  } else {
    //if not multiple tuples get and return that tuple
    return this._storage.get(index);
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //declare a bucket 
  var bucket = this._storage.get(index);
  //look for the bucket, if it doesn't exist return null 
  if (bucket === undefined) {
    return null;
  }
  //iterate over the bucket tuples
  if (bucket.length > 0) {
    for (var i = 0; i < bucket.length; i++) {
      //if you find a tuple has a zero index equal to key
      if (bucket[i][0] === key) {
        //splice away the tuple from the bucket
        bucket[i].splice(i, 1);
        //and return the removed tuple's value
        return bucket[i][1];
      }
    }
  }
  //otherwise return null  
  return null; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: because of the hashing function this is Constant time--O(1)
   retrieve: because of reference to the index position best case is in Constant time--O(1) and worst case in Linear O(n)
   remove: because removing an item from an array worst case in Linear Time--O(n), 
 */


