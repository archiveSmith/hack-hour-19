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
LinkedList.prototype.add = function (val) {
  let newNode = new Node(val);
  if (this.tail === null) {
    newNode = this.tail
  } else {
    newNode = this.tail.next
  }

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (!this.head) {
    return undefined
  }
  let current = this.head;
  while (current) {
    if (current === val) {
      delete val
      return current

    } else {
      current = current.next
    }
  }
}

module.exports = LinkedList;
