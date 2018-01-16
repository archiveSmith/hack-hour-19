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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	// traverse through the list to see how many nodes are in it by keeping count
	let current = head; 
	let length = 0;
	while(current){
		current = current.next; 
		length++; 
	}
	//
	current = head; 
	//let returnIndex = length - k; 
	if(length===k){
		return current.value; 
	} 
	let newCount = 0;
	while(current){
		current = current.next;
		newCount ++; 
		if(newCount===(length-k)){
			return current.value; 
		}
	}
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
