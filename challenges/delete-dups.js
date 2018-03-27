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
  if (!head) return head;
  let i = head;
  while (i && i.next) {
    let j = i.next;
    while (j) {
      if (i.value === j.value) i.next = j.next;
      j = j.next;
    }
    i = i.next;
  }
  return head;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

/*
const linkedList = new Node(1);
linkedList.next = new Node(1);
linkedList.next.next = new Node(2);
linkedList.next.next.next = new Node(2);

console.log(JSON.stringify(deleteDups(linkedList), null, 2));
*/


module.exports = deleteDups;
