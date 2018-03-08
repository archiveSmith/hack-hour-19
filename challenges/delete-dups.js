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
  /*I'm unclear of how to work through these linked list problems.
    Should I be writing out a full implementation of linked lists?
    Do I just assume that a linkedList has already been written?
    How do I test something like this?
  */
  let temp = head.next;
  let curr = head;

  while (curr) {

    if (curr.value === temp.value) {
      curr.next = curr.next.next;
    }
    else {
      curr = curr.next;
      temp = curr.next
    }

  }

  //loop through all values and just print them.
  let output = [];
  let curr2 = head
  while (curr2) {
    output.push(curr2.value);
    curr2 = curr2.next;
  }
  return output;

}

module.exports = deleteDups;
