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

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let num1 = '';
  let num2 = '';
  let current = l1.head;
  while (current) {
    num1 += current.value;
    current = current.next;
  }
  num1 = parseInt(num1, 10);
  current = l2.head;
  while (current) {
    num2 += current.value;
    current = current.next
  }
  num2 = parseInt(num1, 10);
  let sum = num1 + num2;
  let sum = String(sum).split('').reverse().map(int => parseInt(int, 10));
  let LL = new LinkedList();
  let val = sum.shift();
  LL.head = new Node(val);
  let pointer = LL.head;
  while (sum.length !== 0) {
    val = sum.shift();
    let nextNode = new Node(val);
    pointer = pointer.next;
    pointer = nextNode;
  }

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
