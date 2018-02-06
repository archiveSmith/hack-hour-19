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
<<<<<<< HEAD
  if (l1[0] !== null && l2[0] !== null) {
    let current1 = l1[0];
    let current2 = l2[0];
    let result;
    while (current2) {
      result += current1 + current2
      current1 = l1[+1];
      current2 = l2[+1];
    }
  }
  return result;
};

module.exports = { Node: Node, zip: zip };
=======
};

module.exports = {Node: Node, zip: zip};
>>>>>>> 7aaf7015ff4c20a0122e15e2a41d5efa2a5c227c
