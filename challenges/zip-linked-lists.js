/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let currentNode1 = l1;
  let currentNode2 = l2;

  while (currentNode1 !== null && currentNode2 !== null) {
    const tempNode = currentNode1.next;
    currentNode1.next = currentNode2.next;
    currentNode2.next = tempNode;
    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }
}

module.exports = {Node: Node, zip: zip};
