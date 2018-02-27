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
  if (!l1 && !l2) return undefined;
  if (!l1) return l2;
  if (!l2) return l1;
  let carryOver = false;
  const sumList = new Node(l1.value + l2.value); // Create head
  let k = sumList;
  let i = l1.next;
  let j = l2.next;
  // Create a new node in sum list containing sum of digits
  // Check if sum is >= 10 - if so, subtract 10 and add 1 to next node
  while (i && j) {
    let sum = i.value + j.value;
    if (carryOver) sum++;
    if (sum > 9) {
      carryOver = true;
      sum -= 10;
    } else {
      carryOver = false;
    }
    k.next = new Node(sum);
    k = k.next;
    i = i.next;
    j = j.next;
  }
  if (!i && j) {
    k.next = j;
    if (carryOver) k.next.value++;
  }
  else if (!j && i) { 
    k.next = i;
    if (carryOver) k.next.value++;
  }
  else if (carryOver) k.next = new Node(1);
  return sumList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
