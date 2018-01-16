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

// do not know size of linked list 
// use 2 pointers to initialize both to head of linked list
// move 2nd pointer to nth node and keep 1st pointer at head
// increment both 1st and 2nd pointers until 1st pointer.next not equal to null
// 2nd pointer will be at nth from end of node.


function kthToLastNode(k, head) {
  if (!head || k < 1) {
    return undefined;
  }
  var firstPointer = head;
  var nthBehindPointer = head;
  
  for (var i = 0; i < k -1; i++) {
    firstPointer = firstPointer.next;
    if (!firstPointer) {
      return undefined;
    }
  }
  
  while (typeof firstPointer.next !== 'undefined') {
    nthBehindPointer = nthBehindPointer.next;
    firstPointer = firstPointer.next;
  }
  return nthBehindPointer;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
