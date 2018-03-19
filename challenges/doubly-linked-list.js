/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

let ll = new LinkedList();
ll.add(10);
let nodeA = new Node(10, 'NodeB', null);

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  var newNode = new Node(value, null, this.tail);

  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;

  this.tail = newNode;
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(!this.tail) return null;

  var value = this.tail.value;

  this.tail = this.tail.prev;

  if(this.tail) this.tail.next = null;
  else this.head = null;

  return value;
};



module.exports = LinkedList;
