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

  let l1NodesUsed = 0;
  let l2NodesUsed = 0;
  if(l1.length === 0) return l2;
  if(l2.length === 0) return l1;
  let l1.head = new Node();
  l1.head.next = l1.head;
};

console.log(zip(,))

public class Node {
  Node next;
  int data;
  public Node(int data) {
    this.data = data;
  }
}

module.exports = {Node: Node, zip: zip};
