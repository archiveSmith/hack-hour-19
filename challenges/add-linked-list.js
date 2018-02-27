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

  let node1 = l1;
  let node2 = l2;
  
  do {
    arr1.push(l1.value);
    node1 = node1.next;
  } while (node1.next !== null);

  do {
    arr2.push(l2.value);
    node2 = node2.next;
  } while (node2.next !== null);

  let sum = arr1.reverse().join("") + arr2.reverse().join("");
  let sumArr = sum.split("").reverse();
  console.log(`sum ${sum}`);

  let sumLL = new Node(sumArr[0]);
  let node = sumLL;
  for (let i = 1; i < sumArr.length; i++){
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(sumArr[i]);
  }
  return sumLL;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };