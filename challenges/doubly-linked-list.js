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

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let newTail = new Node(val);
  newTail.prev = this.tail;
  if (!this.head) {
    this.head = newTail;
    this.tail = newTail;
    return;
  }
  this.tail.next = newTail;
  this.tail = newTail;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let nextNode = this.head;
  while (nextNode) {
    if (nextNode.val === val) {
      if (nextNode.prev) {
        nextNode.prev.next = nextNode.next;
      } else {
        console.log('first node')
        this.head = nextNode.next;
      }
      if (nextNode.next) {
        nextNode.next.prev = nextNode.prev;
      } else {
        console.log('last node');
        this.tail = nextNode.prev;
      }
      return val;
    }
    nextNode = nextNode.next;
  }
};

function tests() {
  let lin = new LinkedList();
  lin.remove(0);
  console.log(lin);
  lin.add(0);
  console.log(lin);

  lin.add(1);
  console.log(lin);

  lin.add(2);
  console.log(lin);

  lin.add(3);
  console.log(lin);
  lin.remove(2);
  console.log(lin);

}

//tests();

module.exports = LinkedList;
