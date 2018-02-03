/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.array = {};
  this.size = 0; 
  this.maxVal = 0; 
  this.getMax = function(){
  	if(this.size===0){
  		return undefined; 
  	}
  	return this.maxVal; 
  };
  this.pop = function(){
  	if(this.size===0){
  		return undefined; 
  	}
  	let lastVal = this.array[this.size]; 
  	delete this.array[this.size]; 
  	this.size--; 
  	for(let key in this.array){
  		if(this.array[key]>this.maxVal){
  			this.maxVal = this.array[key]; 
  		}
  	}
  	return lastVal; 
  };
  this.push = function(val){
  	if(val>this.maxVal){
  		this.maxVal = val; 
  	}
  	this.size++; 
  	this.array[this.size] = val; 
  	return this.size; 
  };
}

module.exports = Stack;