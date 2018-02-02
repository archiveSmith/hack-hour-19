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

  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let nodeHead = l1;

  let currentNode1 = l1;
  let currentNode2 = l2;

  while (currentNode1 !== null && currentNode2 !== null) {
    let tempNodeLeft = currentNode1.next;
    let tempNodeRight = currentNode2.next;

    currentNode1.next = currentNode2;
    currentNode2.next = tempNodeLeft;

    tempNodeLeft = tempNodeLeft.next;

    currentNode2.next.next = tempNodeRight;
    tempNodeRight = tempNodeRight.next;

    currentNode1 = tempNodeLeft.next;
    currentNode2 = tempNodeRight.next;
  }

  return nodeHead;
}



module.exports = {Node: Node, zip: zip};
