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

function Node(val) {
    this.value = val;
    this.next = null;
}

function deleteDups(head) {
const cache = {};
let j;

for(let i = head; i; i = i.next) {
    if(!cache[i.value]) {
        cache[i.value] = true;
        j = i;
    }  else {
        j.next = i.next;
    }
}
return JSON.stringify(head);
}
deleteDups(a);

module.exports = deleteDups;
