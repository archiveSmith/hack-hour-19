/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.stack = []; 
	this.size = this.stack.length;
}

Stack.prototype.push = function(val){
	this.stack.push(val); 
	return this.size; 
}

Stack.prototype.pop = function(){
	return this.stack.pop(); 
}


/**
* Queue Class
*/


function Queue() {
	this.queue = new Stack(); 
	this.size = queue.size; 	
}

Queue.prototype.remove(){
	this.queue.stack.reverse(); 
	let toBeRemoved = this.queue.pop();
	this.queue.reverse(); 
	return toBeRemoved; 
}

Queue.prototype.add(val){
	this.queue.push(val);
	return this.size;
}

module.exports = {Stack: Stack, Queue: Queue};
