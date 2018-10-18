var DoublyLinkedList = function() {
  // this.list = {};
  this.head = null;
  this.tail = null;

};

var DoublyNode = function(val) {
  this.next = null;
  this.previous = null;
  this.value = val;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  //create new node
  var newNode = new DoublyNode(value);
  //check if head is null && tail is null --initializing
  if (this.head === null && this.tail === null) { //list is empty
    this.head = newNode;
    this.tail = newNode;
  } else { //list is not empty
    //update node.next ==> head
    newNode.next = this.head;
    //old head node .previous will now be pointing to the new node
    this.head.previous = newNode;
    //head points to new node
    this.head = newNode;
  }

};

DoublyLinkedList.prototype.removeTail = function() {
  //check if tail is empty
  if (this.tail === null) {
    return;
  } else {
    //create storage for removedTail
    var removed = this.tail.value;
    //reassign this.tail.previous to point to null
    var newTail = this.tail.previous;
    this.tail = newTail;
    if (this.tail === null) { //check for list if empty
      this.head = null;
    } else {
    //you won't be able to access next on empty list (null.next --> throws error)!!
      newTail.next = null;
    }
  }
  return removed;
};

DoublyLinkedList.prototype.removeHead = function() {
  if (this.head === null) { return; }
  var oldHead = this.head;
  this.head = oldHead.next;
  if (this.head === null) { //check for list if empty
    this.tail = null;
  } else {
  //you won't be able to access next on empty list (null.next --> throws error)!!
    this.head.previous = null;
  }
  return oldHead.value;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  //create new node
  var newNode = new DoublyNode(value);
  if (this.head === null && this.tail === null) { //list is empty
    this.head = newNode;
    this.tail = newNode;
  } else { //non-empty
    var storage = this.tail;
    storage.next = newNode;
    newNode.previous = storage;
    this.tail = newNode;
  }

};

DoublyLinkedList.prototype.contains = function(val) {
  //iterate each node until
  var currNode = this.head;
  while (currNode !== null) {
    if (currNode.value === val) {
      return true;
    }
    currNode = currNode.next;
  }
  return false;
};