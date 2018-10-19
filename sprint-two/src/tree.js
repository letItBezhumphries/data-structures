var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  /*   advanced */
  newTree.parent = null; //root node
  /*     *      */
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {

  var treeNode = Tree(value);
  treeNode.parent = this; //you wantt to point to the parent's node
  this.children.push(treeNode);

};

treeMethods.contains = function(target) {
  //check if current tree value is target
  if (this.value === target) {
    return true;
    //otherwise iterate over this.children
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      }
      //also check if it has children
      if (this.children[i].children.length > 0) {
        if (this.children[i].contains(target) === true) { return true; }
      }
    }
  }
  return false; //if it did not return true
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addchild() --> constant time
 * contains() --> linear time
 */

/*     *     *     *     A D V A N C E D    C O N T E N T   *     *     *     *      */
treeMethods.removeFromParent = function() {
  //helper function to find node's index in parent array
  var findIndex = function(node) {
    for (var i = 0; i < node.parent.children.length; i++) {
      if (node.parent.children[i].value === node.value) {
        return i;
      }
    }
    return -1; //did not find
  };
  var index = findIndex(this);
  if (index === -1) {
    return;
  } //if it did not find the index then exit function
  this.parent.children.splice(index, 1);
};


treeMethods.traverse = function(fn) {
  //iterate through all the children
  for (var i = 0; i < this.children.length; i++) {
    fn(this.children[i].value);
    if (this.children[i].children.length > 0 ) {
      this.children[i].traverse(fn);
    }
  }
};
