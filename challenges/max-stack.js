/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
function Stack(){
  this.size = 0,
  this.storage = {}
}

Stack.prototype.push = function(val){
      this.array.length++
      this.array[this.array.length] = val;
      return this.array.length;
}

Stack.prototype.pop = function(){
      let popped = this.array.slice(-1);
 			this.array = this.array.slice(0, this.array.length - 1);
 			return popped[0];
}

Stack.prototype.getMax = function(){
  // Create Array that tracks largest value in Stack
      this.array.forEach(val => {
        let storage = val
        if(this.array(val) > storage){
}

module.exports = Stack;