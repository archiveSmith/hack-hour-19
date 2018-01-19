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
  let count = 0;

  let node = head;
  const array = [];

  while (node !== null) {
    array.push(node);
    count += 1;
    node = node.next;
  }

  if (array[count - k] === undefined) {
    return undefined;
  }
  return array[count - k].value;
}

function kthToLastNode2(k, head){
  let lead = head;
  let follow = head;
  for(let i = 0; i < k && lead !== null; i += 1) {
    lead = lead.next;
  }

  while(lead !== null) {
    lead = lead.next;
    follow = follow.next;
  }
  return follow.value;
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

console.log(kthToLastNode2(6, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
