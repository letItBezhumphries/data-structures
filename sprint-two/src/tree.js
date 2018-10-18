var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  /*   advanced */
  newTree.parent = null; //root node
  /*     *      */
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new Tree
  var treeNode = Tree(value);

  //add parent
  if (this.parent === null) { //when adding first node
    this.value = treeNode.value;
    this.parent = treeNode;
    this.children.push(treeNode);
  } else {
    treeNode.parent = this;
    console.log(this, treeNode);
    //push the tree node into this.children
    this.children.push(Tree(value));
  }

};

treeMethods.contains = function(target) {
  //check if current tree value is target
  if (this.value === target) {
  //return true
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

};

treeMethods.traverse = function() {

};
