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

function addLinkedList(l1, l2, result) {
  //added from codesmith:
  // if (!l1 && !l2 && !result) {
  //   return null;
  // }


  if (l1.next === null) {
    return l2;
  }
  
  if (l2.next === null) {
    return l1;
  }
  
  const sum = l1.value + l2.value;
  result = new Node(sum % 10);
  if (sum > 9) {
    l1.next.value += 1;
  }
  result.next = addLinkedList(l1.next, l2.next);
  return result;
}


module.exports = {Node: Node, addLinkedList: addLinkedList};
