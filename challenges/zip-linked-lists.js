/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

//CONSTRUCTOR - only necessary if you are making a new list
function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  // Base Cases
  if (!l1 && !l2) return undefined;
  if (!l1) return l2;
  if (!l2) return l1;
  if (typeof l1 !== 'object' || typeof l2 !== 'object') return undefined;

  // Recursive solution: the next node on l1 should be the zipped version of l2 and l1.next;
  l1.next = zip(l2, l1.next);
  
  // Once the recursion is done, the entire zipped list is contained in l1;
  return l1;
};

module.exports = {Node: Node, zip: zip};
