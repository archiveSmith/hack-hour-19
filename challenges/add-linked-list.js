/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let newNode1 = new Node(val);
  let newNode2 = new Node(val);
  let newNode3 = new Node(val);

  newNode1 = l1.head + l2.head;
  newNode2 = l1.head.next + l2.head.next;
  newNode3 = l1.head.next.next + l2.head.next.next;

  if (newNode1 > 9) {
    newNode2 = newNode2 + 1;
    newNode1 = newNode1 - 10;
  }

  if (newNode2 > 9) {
    newNode3 = newNode3 + 1;
    newNode2 = newNode2 - 10;
  }

  let l3 = new LinkedList;
  l3.head = newNode1;
  l3.head.next = newNode2;
  l3.head.next.next = newNode3

  return l3
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
