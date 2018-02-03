/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.set = {};
  this.index = -1;
  this.max = 0;
}

Stack.prototype.push = function(value) {
	this.index++;
	this.set[this.index] = value;
	if (this.max < value) {
		this.max = value;
	}
	return this.set;
};

Stack.prototype.pop = function() {
	let val = this.set[this.index];
	delete (this.set[this.index]);
	this.index--;
	if (this.max === val) {
		this.max = this.getMax();
	}
	return val;
};

Stack.prototype.getMax = function (){
	this.max = Object.values(this.set).sort(function (a, b){
		return a + b;
	})[0];
	return this.max;
}

// let x = new Stack();
// x.push(7);
// x.push(103);
// x.push(13);
// x.push(16);
// x.push(99);
// x.push(200);
//
// console.log(x.pop());
// console.log(x);




module.exports = Stack;