var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //declare variable to store an instance of new Node(value) 
    let newNode = new Node(value);
    //reassign the tail to point to the newNode
    list.tail = newNode;
    //check if newNode is the first and only node that has been added??
  
    //check if list.head has been assigned to a node if it hasn't assign list.head to newNode
    if (list.head === null) {
      list.head = newNode;
    }
    //maybe follow probability chain of if list.head doesn't equal null and if list.head.next 
    //doesn't equal list.tail which would handle any list where more than two nodes have been added
    list.head.next = list.tail;
  };

  list.removeHead = function() {
    //declare variable to store head.value that we need to return
    let removedHead = list.head.value;
    //reassign the list.head to point to the next node
    list.head = list.head.next;
    //return removedHead
    return removedHead;
  };

  list.contains = function(target) {
    //declare a variable to store boolean value to return
    let wasAdded = false;
    //check if the head.value === target or if the tail.value equals target
    if (list.head.value === target || list.tail.value === target) {
      //if it does reassign wasAdded to true
      wasAdded = true;
    }
    //return wasAdded
    return wasAdded;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail & removeHead --> Constant Time O(1)
 * contains --> Linear time
 */
