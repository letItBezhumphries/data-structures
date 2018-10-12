//graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes.

// Instantiate a new graph
var Graph = function() {
  //set the graph storage for nodes
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //create an array to store list of edges between node and other nodes
  let edges = [];
  //assign the vertices node property equal to edges array
  this.vertices[node] = edges; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check if the node exists as property on vertices
  if (this.vertices[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //declare a variable that will store the index of the removed node
  var removedNodeIndex;
  //iterate over the keys in this.vertices
  for (var key in this.vertices) {  
  //check if the key/value edges array includes node 
    if (this.vertices[key].includes(node)) {
      //if it does set removedNodeIndex to point to the index of node in array
      removedNodeIndex = this.vertices[key].indexOf(node);
      //splice away the removedNodeIndex
      this.vertices[key].splice(removedNodeIndex, 1);
    }
  }
  //finally delete the node key from vertices
  delete this.vertices[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if toNode exists on this.vertices[fromNode] if it does return true
  if (this.vertices[fromNode].includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //push toNode onto the fromNode edges array
  this.vertices[fromNode].push(toNode);
  //push fromNode onto the toNode edges array
  this.vertices[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index;
  //check if toNode exists on fromNode array
  if (this.vertices[fromNode].includes(toNode)) {
    //if it does set index to the toNode index
    index = this.vertices[fromNode].indexOf(toNode);
    //splice away toNode
    this.vertices[fromNode].splice(index, 1);
  }
  if (this.vertices[toNode].includes(fromNode)) {
    index = this.vertices[toNode].indexOf(fromNode);
    this.vertices[toNode].splice(index, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over the nodes in vertices and pass node into the callback
  for (var node in this.vertices) {
    cb(node);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *   addNode: is inserting a key on object is        O(1)--Constant Time.
 *   contains: is basically object key lookup and is O(1)--Constant Time.
 *   removeNode: depending on whether its removing just the node or all the edges
 *               if removing only node O(1)--Constant Time.
 *               if removing edges as well O(n)--Linear Time- array search by value. 
 *   hasEdge: this involves searching Array by value which is O(n)--Linear Time.
 *   addEdge: adding to the end of array  O(1)--Constant Time.
 *   removeEdge: searching Array by value which is O(n)--Linear Time.
 *   forEachEdge: involves visiting each key in object O(n)--Linear Time.
 */


