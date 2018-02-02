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

function zip(currentl1 = l1, currentl2 = l2) {
  // Check to see if a linkedlist is null
  if(!l1 && !l2) return null;
  if(!l1) return l2;
  if(!l2) return l1;

  // Declare memory variables for each linked list
  let meml1;
  let meml2;

  // Iterate while any node isn't null
  while(currentl1 && currentl2) {
    // Set memory variables
    meml1 = currentl1.next;
    meml2 = currentl2.next;

    // Reassign current nodes
    currentl1.next = currentl2;
    currentl2.next = meml1;
    currentl1 = currentl2.next;
    currentl2 = meml2;
  }

  // Return the head of the first linked list
  return l1;
};

module.exports = {Node: Node, zip: zip};
