/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

//CONSTRUCTOR FOR MY liiiiiiiiiist
function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  //go to the end of list one
  //link the end of list one to the end of list two
  //do this forever

  //OR just build a new one.
  let Head = new Node()//put the value of l1 head in here somehow);

  //grab the values in l1 and put them in an array
  let l1itr = l1.value;
  //do the same with l2
  //make my new list from the zipped arrays.

};

module.exports = {Node: Node, zip: zip};
