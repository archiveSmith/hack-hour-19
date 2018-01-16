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
  let finalNode = getToEnd(head);
  let toGo = finalNode - k;
  console.log(toGo);
  let temp = head;
  while(toGo > 0) {
    temp = temp.next;
    toGo--
  }
  return temp.value;
}


function getToEnd(head) {
  let count = 1;
  while (head.next) {
    count++;
    head = head.next;
  }
  return count;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(kthToLastNode(2, a)); //-> returns 'D' (the value on the second to last node)
// console.log(kthToLastNode(3, b)); //my own example

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
