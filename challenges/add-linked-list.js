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
  let arr1 = [];
  let arr2 = [];

  let currentl1 = l1;
  let currentl2 = l2;

  while (currentl1 || currentl2) {
    if(currentl1) {
      arr1.push(currentl1.value);
      currentl1 = currentl1.next;
    }
    if (currentl2) {
      arr2.push(currentl2.value);
      currentl2 = currentl2.next;
    }
  }

  let num1 = Number(arr1.reverse().join(''));
  let num2 = Number(arr2.reverse().join(''));

  let numSum = num1 + num2;
  let numSumList = numSum.toString().split('').reverse();

  let head = new Node(numSumList[0]);
  let current = head;

  for (let i = 1; i < numSumList.length; i += 1) {
    while(current.next) {
      current = current.next;
    }
    current.next = new Node(numSumList[i]);
  }

  return head;
}

// let node1 = new Node(1);
// node1.next = new Node(2);
// node1.next.next = new Node(3);

// let node2 = new Node(4);
// node2.next = new Node(5);
// node2.next.next = new Node(6);

// console.log(addLinkedList(node1, node2));

module.exports = {Node: Node, addLinkedList: addLinkedList};