describe('DoublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  //test for add to head
  it('should designate a new head when new nodes are added', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  //this our 1st test
  it('should handle case when removing from list with only one node', function() {
    doublyLinkedList.addToHead(4);
    expect(function() { doublyLinkedList.removeHead(); }).not.throws();
    doublyLinkedList.addToTail(5);
    expect(function() { doublyLinkedList.removeTail(); }).not.throws();
  });


  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  //this is our 2nd test
  it('should return the value of the former head when removeHead is called twice on list with at least 3 nodes', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.removeHead()).to.equal(5);
    expect(doublyLinkedList.removeHead()).to.equal(6);
  });

  it('should return the value of the last node in list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.removeTail()).to.equal(4);
    expect(doublyLinkedList.removeTail()).to.equal(5);
  });

  it('should designate a new tail when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });


  it('should assign the remaining node "previous" property to null if list has two nodes and removeTail is called', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.previous).to.equal(null);
  });

  it('should have a "previous" property that points to node that precedes it in list', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.previous.value).to.equal(doublyLinkedList.head.value);
  });

  it('should designate a new head when new nodes are added', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should designate a new head and new tail when adding new node to an empty list', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
  });
});