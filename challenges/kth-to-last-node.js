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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //create a variable that stores head
  let current = head;
  //create a variable that stores incrementing numbers to use like an length
  let length = 0;
  //while current.next does not === null... there are more nodes
  while (current.next !== null) {
    //then traverse down the nodes until you reach current.next = null
    current = current.next;
    //with each pass of node increment the length, which will now tell you the 'length' of each node
    length++;
  }
  //current was recently passes in current.next so reassign current to head again
  current = head;
  //iterate through the length until you reach the difference of length and k to return the value that your looking for
  for (let i = 0; i <= length - k; i++) {
    current = current.next;
  }
  return current.value;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };