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
  if (!l1) return l2;
  if (!l2) return l1;
  let i = l1;
  let j = l1.next;
  let m = l2;
  let n = l2.next;
  while (j) {
    i.next = m;
    m.next = j;
    if (j && !n) return l1;
    j = j.next;
    i = m.next;
    m = n;
    n = n.next;
  }
  i.next = m;
  return l1;
};

const list1 = new Node('a');
list1.next = new Node('b');
// list1.next.next = new Node('c');
const list2 = new Node ('1');
list2.next = new Node('2');
list2.next.next = new Node('3');
// console.log('List 1', list1);
// console.log('List 2', list2);
console.log('Zipped', zip(list1, list2));
console.log('List 1 Nodes', '\n', list1, '\n', list1.next, '\n', list1.next.next, '\n', list1.next.next.next);


module.exports = {Node: Node, zip: zip};
