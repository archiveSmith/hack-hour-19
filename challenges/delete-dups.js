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

function deleteDups(head) {
  let tempBuffer = [];
  let currentNode = head;
  while (currentNode) {
    tempBuffer.includes(currentNode)
      ? (currentNode.next = currentNode.next.next)
      : tempBuffer.push(currentNode);
    currentNode = currentNode.next;
  }
  return head;
}

module.exports = deleteDups;
