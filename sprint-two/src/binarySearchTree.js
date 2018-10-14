var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(newValue) {
  //check if given newValue > this.value---? what is this.value
  if (newValue > this.value) {
    //if it is greater we want to set/check right side of tree, if this.right is null
    if (this.right === null) {
      //set this.right to new instance with newValue passed in
      this.right = new BinarySearchTree(newValue);
    } else {
      //otherwise this.right has been set already, therefore recursively call insert on this.right tree
      //with newValue passed in 
      this.right.insert(newValue);  
    }
  }
  //check if newValue < this.value
  if (newValue < this.value) {
    //if newValue is less than we want to set/check left side of tree, and whether this.left is null
    if (this.left === null) {
      //set this.left to new instance with newValue passed in
      this.left = new BinarySearchTree(newValue);
    } else {
      //otherwise the left child spot has been set, thus recursively call insert on the left child's children
      this.left.insert(newValue);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  //create function that will search each child for target value
  var findTarget = function(child) {
    //check if child is null for base case--if true return false
    if (child === null) {
      return false;
    } 
    //check for case that we find the target 
    if (child.value === target) {
      return true;
    }
    //check for case where target is either less than or greater than child currently checking
    if (target < child.value) {
      //check left side of tree by returning a recursive call of findTarget
      return findTarget(child.left);
    } else {
      //otherwise return recursive call passing in right side
      return findTarget(child.right);
    }
  }; 
  return findTarget(this);   
};

BinarySearchTree.prototype.depthFirstLog = function(func) {
  var checkEachChild = function(child) {
    //start with base case of null
    if (child === null) {
      return;
    }
    func.call(null, child.value);
    //check left side for not base case
    if (child.left !== null) {
      checkEachChild(child.left);
    } 
    //check right side for not base case
    if (child.right !== null) {  
      checkEachChild(child.right);
    }
  };
  checkEachChild(this);
};




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
