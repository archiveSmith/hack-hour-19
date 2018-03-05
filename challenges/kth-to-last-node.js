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
  let count = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    count++;
  }
  let newCurrent = head;
  for (var i = 0; i < (count - k); i++) {
    newCurrent = newCurrent.next;
  }
  return newCurrent.value;
}

  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
 
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
kthToLastNode(2, a);  



function kthToLastNode(k, head) {
  var length = 0;
  var curr = head;
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  var i = length - k;
  curr = head;
  if (i < 0) {
    return undefined;
  }
  while (i--) {
    curr = curr.next;
  }
  return curr.value;
}


function kthToLastNode(k, head) {
  var lead = head;
  var follow = head;
  for (var i = 0; i < k && lead; i++) {
    lead = lead.next;
  }
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }
  return follow.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
