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
// Time complexity: O(n)
// Space complexity: O(n)
function deleteDups(head) {
    const cache = {};
    let prevNode = null;
    let currNode = head;
    while (currNode) {
      if (cache.hasOwnProperty(currNode.value)) {
        prevNode.next = currNode.next;
      } else {
        cache[currNode.value] = true;
        prevNode = currNode;
      }
      currNode = currNode.next;
    }
    return head;
  }
  
  // Time complexity O(n^2)
  // Space complexity O(1)
  function deleteDups(head) {
    let currNode = head;
  
    while (currNode) {
      let lookupNode = currNode.next;
      let prevLookupNode = currNode;
      while(lookupNode) {
        if(currNode.value === lookupNode.value) {
          prevLookupNode.next = lookupNode.next;
        }
        prevLookupNode = lookupNode;
        lookupNode = lookupNode.next;
      }
      
      currNode = currNode.next;
    }
    return head;
  }

module.exports = deleteDups;
