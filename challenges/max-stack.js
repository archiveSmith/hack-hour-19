/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.length = 0;
  this.sorted = [];
}

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.sorted.push(value);
  this.sorted.sort((a, b) => a - b);
  return ++this.length;
}

Stack.prototype.pop = function() {
  let popped;
  if (this.length) {
    popped = this.storage[--this.length];
    delete this.storage[this.length];
    this.sorted.splice(this.sorted.indexOf(popped), 1);
  }
  return popped;
}

Stack.prototype.getMax = function() {
  return this.sorted[this.sorted.length - 1];
}

module.exports = Stack;