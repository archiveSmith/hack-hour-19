/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val, next) {
  this.value = val;
  this.next = next;
}

function zip(l1, l2) {
  let l3 = new Node(null);
  let prev = l3;
  
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  
  if (l1 === null) {prev.next = l2;}
  if (l2 === null) {prev.next = l1;}
  
  return l3.next;
};

// create first linked list: 1 -> 3 -> 10
let n3 = new Node(12, null);
let n2 = new Node(4, n3);
let n1 = new Node(3, n2);
let l1 = n1; 

// create second linked list: 5 -> 6 -> 9
let n6 = new Node(11, null);
let n5 = new Node(7, n6);
let n4 = new Node(6, n5);
let l2 = n4;

module.exports = {Node: Node, zip: zip};
