var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  //check for parent
  if (this.value < val) { //if greater
    if (this.right === null) {
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else { //check left if lesser than
    if (this.left === null) {
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(val) {
  if (this.value === val) {
    return true;
  }
  if (this.value < val ) { //if greater check right
    if (this.right === null) {
      return false;
    }
    return this.right.contains(val);
  } else { //if lesser check right
    if (this.left === null) {
      return false;
    }
    //start recursion
    return this.left.contains(val);
  }

};

BinarySearchTree.prototype.depthFirstLog = function(fn) {
  fn.call(null, this.value);
  //if both are null,
  if (this.left === null && this.right === null) {
    return;
  }
  if (this.left !== null) {
    this.left.depthFirstLog(fn);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(fn);
  }      
};

/*
 * Complexity: What is the time complexity of the above functions?



      5
      /\
     2  null
     /\   /\
    n  3 6  7
     / \
      n   n

      */



/*
 * Complexity: What is the time complexity of the above functions?
 * 5 -- 2 -- 3 -- 7 -- 6
 *
 *      5
 *     /  \
 *    2     6
 *   / \    / \
 *      3       7
 * 
 * insert --> O(log n) --> Logarithmic 
 * contains --> O(log n) --> Logarithmic Time
 * depthFirstLog --> O(n) --> Linear Time
 */
