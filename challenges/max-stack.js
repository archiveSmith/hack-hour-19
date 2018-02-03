/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() { // LIFO
  // body... 
  this.storage = [];
  this.push = function(val){
    this.storage.push(val);
    return this.storage.length;
   }
  this.pop = function() {
    let index = this.storage.length - 1;
    let removed = this.storage[index];
    this.storage.splice(index,1);
    return removed;
   }
  this.getMax = function() {
    let max = Math.max.apply(null, this.storage);
    return max;
  }
}

module.exports = Stack;