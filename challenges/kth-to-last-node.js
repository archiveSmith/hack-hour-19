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

// i integer and a head
// o value of the kth to last node

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  var currentNode = this.head;
  let length = this.length;
  let count = 1;

  while(count < k) {
  	currentNode = currentNode.next;
  	kthNode = (length-k+1)
  	count++
  }
  return kthNode;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
