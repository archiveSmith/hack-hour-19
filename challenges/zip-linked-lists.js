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
  // Check to see if a linkedlist is null
  if(l1 === null && l2 === null) return null;
  if(l1 === null) return l2;
  if(l2 === null) return l1;

  // Set a reference to the head of l1
  let head = l1;
  
  // Declare current node variables for each linked list
  let currentl1 = l1;
  let currentl2 = l2;

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
  return head;
};

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);

let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

console.log(JSON.stringify(zip(list1, list2), null, 2));

module.exports = {Node: Node, zip: zip};
