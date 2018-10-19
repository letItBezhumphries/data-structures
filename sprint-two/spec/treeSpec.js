describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  //advanced methods implemented
  it('should have methods named "addChild" and "contains" and "removeFromParent" and "traverse"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
  });

  //advanced properties added
  it('should have properties named "value" and "parent"', function() {
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  // //our tree test
  // it('should not be able to add children to a non-existent tree\'s child', function() {
  //   tree.addChild(5);
  //   tree.children[0].addChild(6);
  //   expect(function() { tree.children[1].addChild(6); }).not.throws();
  // });


  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  /*    *     *    A D V A N C E D    C O N T E N T    *     *      */

  //advanced test -- not sure if its implemented correctly??
  it('ADVANCED TEST: should correctly disassociate the tree with its parent', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7); //add to node 5
    tree.children[0].children[0].removeFromParent();
    expect(tree.contains(7)).to.equal(false);
    expect(tree.children[0].children[0]).to.equal(undefined);
    tree.children[0].addChild(8);
    tree.children[0].addChild(3);
    tree.children[0].addChild(9);
    tree.children[0].addChild(4);
    tree.children[0].children[1].removeFromParent();
    expect(tree.contains(3)).to.equal(false);
    expect(tree.children[0].children[1].value).to.equal(9);
  });

  it('AVANCED TEST: should correctly traverse through your tree/ children', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    tree.addChild(5);//root
    tree.addChild(8);//child
    tree.children[0].addChild(6);
    tree.children[0].addChild(9);
    tree.traverse(func);
    expect(array).to.eql([5, 6, 9, 8]);
  });

});
