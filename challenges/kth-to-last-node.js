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
  let next = head;
  let nodeStack = [];
  while (next) {
    nodeStack.push(next);
    next = next.next;
  }
  let kthNode = {
    value: undefined
  };
  for (let kay = 0; kay < k; kay ++) {
    kthNode = nodeStack.pop();
  }

  if (!kthNode) {
    return undefined;
  }

  return kthNode.value;
}

function tests() {
  let head = new Node(1);
  let current = head;
  for (let i = 2; i < 20; i ++) {
    current.next = new Node(i);
    current = current.next;
  }

  for (let i = 0; i < 21; i ++) {
    console.log(kthToLastNode(i, head));
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

  console.log(kthToLastNode(2, a));
}

//tests();

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
