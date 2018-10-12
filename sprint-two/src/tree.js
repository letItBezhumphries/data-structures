var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a variable to store new instance of Tree(value)
  let child = Tree(value);
  //push the child onto the newTree children array must use this keyword
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //create a variable to store a boolean
  var hasChild = false;
  //iterate over the children array
  for (let i = 0; i < this.children.length; i++) {
    //check if a child.value === target 
    if (this.children[i].value === target) {
      //if true toggle the hasChild to true
      hasChild = true;
    } 
    //check if the each child has children, if they do  
    if (this.children[i].children.length > 0) {
      //check if the child's children.contains(target) is true
      if (this.children[i].contains(target) === true) {
        //if true set hasChild to equal true
        hasChild = true;
      }
    }
  }
  return hasChild;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild(value) -->  O(1) --> Constant time
 * contains --> O(n) --> Linear Time
 */
