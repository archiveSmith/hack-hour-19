/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;


  kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
  this.fancy.push(val);
}

function kthToLastNode(k, head) {
  let fancy;
  //insert fancy array with all letters
  //from a-z lowerCase only
for(i=97,fancy='';i<123;)fancy+=String.fromCharCode(i++)
  //the idea was to go backwards through the fancy
  for(var i = fancy.length; i>0; i--) {
    if(fancy[i]) {console.log(i)}
  }
  //if we don't have a node with a value.toLowerCase
  //then pop off that letter from the fancy
  //then we could work backwards k times
  //to find the answer..
  //feels a bit hackey but the other solution
  //i imagine involves making it a doublyLinkedList
  //i'm sure there is also a traversal i could do through the singlyLL
  //but I haven't gotten my head around that solution yet.

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
