/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  // efficient, but mutates the list. Could fix this, but take up more time by storing the return value in a variable and then going back and cleaning up the nodes once done.
  // let itr = head;
  // while (itr) {
  //   if (itr.visited === true) {
  //     return true;
  //   }
  //   itr.visited = true;
  //   itr = itr.next;
  // }
  // return false;



  // MOST EFFICIENT: TORTOISE AND HARE
  if (head && head.next) {
    return chase(head, head.next);
  }
  return false;
}

function chase(tortoise, hare) {
  if (tortoise === hare) return true;
  tortoise = tortoise.next;
  hare = hare.next.next;
  return (hare.next !== null && hare !== null && chase(tortoise, hare));
}



module.exports = {Node: Node, hasCycle: hasCycle}
