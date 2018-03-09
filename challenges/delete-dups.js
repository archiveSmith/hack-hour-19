/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(2);
let node6 = new Node(1);
let node7 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

function deleteDups(head) {
  // Object for memory buffer due to O(1) lookup
  let buffer = {};
  let currentAnchor = head;
  let currentScout = currentAnchor;
  buffer[currentScout.value] = true;

  while (currentScout.next) {
    currentScout = currentScout.next;
    if (buffer.hasOwnProperty(currentScout.value)) {
      if (currentScout.next === null) {
        currentAnchor.next = null;
        return head;
      } else {
        if (buffer.hasOwnProperty(currentScout.next.value) === false) {
          currentAnchor.next = currentScout.next;
          continue;
        }
      }
    } else buffer[currentScout.value] = true;
    currentAnchor = currentAnchor.next;
  }
  return head;
}

console.log(JSON.stringify(deleteDups(node1), null, 2))

module.exports = deleteDups;