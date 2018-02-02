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
	// base case if one of the linkied is empty, retur non empty 

	//while both linked list has value  
	let current1 = l1.head; 
	let current2 = l2.head; 
	let zipList = new Node(current.value);
	current1 = current1.next;
	current2sTurn = true; 
	while(current1 && current12){	
		if(current2sTurn){
			zipList.next = current2.value; 
			current2 = current2.next; 
			current2sTurn = false; 
		}
		else{
			zipList.next = current1.value; 
			current1 = current.next; 
			current2sTurn = true; 
		}
		if(current2sTurn){
			zipList.next = current2; 
		}
		else{
			zipList.next = current1; 
		}
		return zipList; 
	}
};

module.exports = {Node: Node, zip: zip};
