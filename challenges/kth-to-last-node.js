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
  let itr = head

  //get the length of the list first
  let count = 1;
  while (itr.next){
    itr=itr.next;
    //now itr is the LAST node
    count++;
    //now count tells me the length of the list.
  }

  const steps = count - k;
  //steps tells me how many steps I need to go down the list.

  itr = head;
  for (let i=0; i<steps; i++){
    itr = itr.next;
  }
  return itr.value;
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
