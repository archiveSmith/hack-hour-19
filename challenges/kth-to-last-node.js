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
  this.alphabet.push(val);
}

function kthToLastNode(k, head) {
  let alphabet;
  //insert alphabet array with all letters
  //from a-z lowerCase only
for(i=97,alphabet='';i<123;)alphabet+=String.fromCharCode(i++)
  //the idea was to go backwards through the alphabet
  for(var i = alphabet.length; i>0; i--) {
    if(alphabet[i]) {console.log(i)}
  }
  //if we don't have a node with a value.toLowerCase
  //then pop off that letter from the alphabet
  //then we could work backwards k times
  //to find the answer..
  //feels a bit hackey but the other solution
  //i imagine involves making it a doublyLinkedList
  //i'm sure there is also a traversal i could do through the singlyLL
  //but I haven't gotten my head around that solution yet.

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
