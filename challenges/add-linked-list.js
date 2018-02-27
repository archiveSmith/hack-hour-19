/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	let l1Head = l1.head; 
	let l2Head = l2.head;
	let resultsList = new Node();
	let carryOver = false;
	while(l1Head && l2Head){
		let sum = l1.value + l2.value;
		if(carryOver){
			sum+1; 
			carryOver = false;
		}
		if(sum>=10){
			 resultsList.next = new Node(sum%10);
			 resultsList = resultsList.next; 
			 carryOver = true; 
		}
		else{
			resultsList.next = new Node(sum%10); 
			resultsList = resultsList.next;
		}
		
		l1Head = l1Head.next; 
		l2Head = l2Head.next;
	}
	while(l1Head || l2Head){
		if(l1Head){
			let sum = l1Head.value + 1;
			carryOver = false;
			if(sum>=10){
				resultsList.value = sum%10; 
				resultsList = resultsList.next; 
				carryOver = true;
			}
			l1Head = l1Head.next; 
		}
		if(l2Head){
			let sum = l2Head.value + 1;
			carryOver = false;
			if(sum>=10){
				resultsList.value = sum%10;
				resultsList = resultsList.next;
				carryOver = true;  
			}
			l2Head = l2Head.next;
		}
	}
	if(carryOver){
		resultsList.value = new Node(1); 
	}
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
