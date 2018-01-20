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

  // let currentNode = new Node(val);
  // if(!this.head){
  //   this.head = currentNode;
  //   this.count = 0;
  // } else {
  //   currentNode =
  //   this.count
  // }
}


function kthToLastNode(k, head) {
  let currentNode = new Node(k);
  head.value = 0;
  let check = head;
  console.log(check);
  console.log(currentNode);
  // let currentNode = new Node(5);
  // currentNode.head = head;
  // this.head.count = 1;
  // this.count = k;

}
// let dog = kthToLastNode(2,{value: 3, next: null});
// let cat = new Node(5);
// console.log(dog);
// console.log(cat);
let dog = kthToLastNode(3, {dog:4});
console.log(dog);

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
