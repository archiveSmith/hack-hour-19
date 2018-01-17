/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */



function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  const currentNode = this.head;
  let count = 0;

  while(count < k) {
    currentNode = currentNode.next;
    count++;
  }

  currentNode = this.head;

  for(let i = 0; i <= count - k; i++) {
    currentNode = currentNode.next;
  }
  
  return currentNode.value;
}

LinkedList.prototype.add = function(value) {
  const nodeAdd = new Node(value);
  let currentNode = this.head;

  if(!currentNode) {
    this.head = nodeAdd;
    return nodeAdd;
  } 

  while(currentNode.next) {
    currentNode = currentNode.next;
  }

    currentNode.next = nodeAdd;
    return nodeAdd;
  
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};


let list = new LinkedList();
list.add("A");
list.add("B");
list.add("C");
list.add("D");
list.add("E");
console.log(kthToLastNode(2, list))
console.log(JSON.stringify(list, null, 2));