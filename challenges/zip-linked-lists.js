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
  if (!l1 || !l2) return (l1) ? l1 : l2;
  let head = l1;
  let next1 = l1.next;
  let next2 = l2.next;
  while (l1 && l2) {
    l1.next = l2;
    l2.next = next1;
    l1 = next1;
    l2 = next2;
    if (next1) next1 = next1.next;
    if (next2) next2 = next2.next;
  }
  l1 = head;
};

module.exports = {Node: Node, zip: zip};
