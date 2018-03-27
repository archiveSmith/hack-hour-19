/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

/*
Create a doubly linked list with an add and remove method
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
  }

  add(val) {
    const lastNode = this.tail;
    this.tail = new Node(val);
    this.tail.prev = lastNode;
    lastNode.next = this.tail;
  }

  remove(val) {
    let pointer = this.head;

    while (pointer && pointer.val !== val) {
      pointer = pointer.next;
    }
    if (pointer) {
      if (pointer === this.head) {
        this.head = pointer.next;
        this.head.prev = null;
      } else {
        pointer.prev.next = pointer.next; // 1 -- 2 -- 3 -- 4
        if (pointer.next) {
          pointer.next.prev = pointer.prev;
        } else {
          this.tail = pointer.prev;
        }
      }
    }
  }
}

module.exports = LinkedList;
