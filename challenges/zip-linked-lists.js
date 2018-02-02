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
  let zipped;
  let currNode;
  let nextNode1;
  let nextNode2;
  let nextNode;
  let nextList;

  if (l1) {
    if (!l2) return l1;
    currNode = zipped = new Node(l1.val);
    nextNode1 = l1.next;
    nextNode2 = l2;
    nextNode = nextNode2;
    nextList = 2;
  } else if (l2) {
    if (!l1) return l2;
    currNode = zipped = new Node(l2.val);
    nextNode1 = l1;
    nextNode2 = l2.next;
    nextNode = nextNode1;
    nextList = 1;
  }
}

module.exports = { Node: Node, zip: zip };
