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

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(thing) {
    if (!this.head) {
      const newNode = new Node(thing);
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      const newerNode = new Node(thing);
      node.next = newerNode;
    }
  }
}

function addLinkedList(l1, l2) {
  let ones = l1.head + l2.head;
  let tens = l1.head.next + l2.head.next;
  let hunds = l1.head.next.next + l1.head.next.next;
  if (ones > 9) {
    ones = Number(("" + ones).split("")[1]);
    tens++;
  }
  if (tens > 9) {
    tens = Number(("" + tens).split("")[1]);
    hunds++;
  }
  let result = new LinkedList();
  result.add(ones);
  result.add(tens);
  result.add(hunds);
  return result;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
