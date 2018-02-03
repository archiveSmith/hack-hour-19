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
  // const head;
  // let pointer1;
  // let pointer2;
  //
  // if (l1) {
  //   head = new Node(l1.value);
  //   pointer1 = head;
  // }
  //
  //
  // while (l1.next || l2.next) {
  //   let newNode1;
  //   let newNode2;
  //
  //
  //   if(pointer1) {
  //     newNode1 = new Node(pointer1.value);
  //     pointer1 = pointer1.next;
  //   }
  //
  //   if(pointer2) {
  //     newNode2 = new Node(pointer2.value);
  //     pointer2 = pointer2.next;
  //   }
  // }
  //
  // if(!pointer1) pointer1.next = pointer2;
  // else pointer2.next = pointer1;

  let p1 = l1, // pointer for l1
  let head;
  let p2 = l2;  // pointer for l2
  let p3;  // for new linked list

  if (l1) {
    p1 = 
  }

  while (l1 || l2) {
    let newNode1 = new Node(p1.value);
    let newNode2 = new Node(p2.value);
    newNode1.next = newNode2;
  }

};

module.exports = {Node: Node, zip: zip};
