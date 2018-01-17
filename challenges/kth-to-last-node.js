/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = this.tail = new Node(val);
    return;
  }
  this.tail.next = new Node(val);
  this.tail = this.tail.next;
};

function kthToLastNode(k, head) {
  let length = 0;
  let last = null;
  while (head.next) {
    length++;
    last = head;
  }

  // length = 5
  // [a, b, c, d, e]
  // kthToLastNode(2, a); -> 'd'
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
