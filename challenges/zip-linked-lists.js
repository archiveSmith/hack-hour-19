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
  if(!l1 && !l2){ return null }
  if(l1 && l2) {
    let firsts_next = l1.next
    l1.next = l2
    l2.next = zip(firsts_next,l2.next)
    return l1
  }
  if(l1 || l2){
    return (l1 ? l1 : l2)
  }
};


module.exports = {Node: Node, zip: zip};
