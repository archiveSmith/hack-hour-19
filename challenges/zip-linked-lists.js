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
//one bug it adds the first one twice
function zip(l1, l2, answerList, left, one) {
	if(!answerList) {
		console.log('initialize');
		answerList = new Node(l1.value);
		left = true;
		one = answerList;
	}
	if(!l1 && !l2) {
		console.log('base');
		return one
	}
	if(left){
		console.log('adding l1 node');
		while(answerList.next){
			answerList = answerList.next;
		}
		answerList.next = new Node(l1.value);
		l1 = l1.next;
		return zip(l1, l2, answerList, false, one);
	} else {
		console.log('adding l2 node');
		while(answerList.next){
			answerList = answerList.next;
		}
		answerList.next = new Node(l2.value);
		l2 = l2.next;
		return zip(l1, l2, answerList, true, one);
	}




};

function countIt(list){
	let count = 0;
	while(list){
		if(list.value){
			count++;
		}
		list = list.next;
	}
	return count;
}


let first = new Node(1);
first.next = new Node(2);
first.next.next = new Node(3);
first.next.next = new Node(4);

let second = new Node(10);
second.next = new Node(20);
second.next.next = new Node(30);

console.log(zip(first, second));


//module.exports = {Node: Node, zip: zip};
