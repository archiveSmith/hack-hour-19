/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  //I whiteboarded out the basic problem/solution but I didn't get to coding any of it this morning.
  //I ended up talking with Althea about strategies for solo projects going forward. We stopped the convo
  //and decided to go to lunch together sometime next week but still, I didn't get to do this.
  //Yet another thing I gotta come back to.

  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
};

module.exports = {Node: Node, zip: zip};
