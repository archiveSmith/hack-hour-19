/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {};
  this.len = 0;
  this.ind = -1;
}

Stack.prototype.push = function(val) {
  this.ind++;
  this.contents[this.ind] = val;
  this.len++;
  return this.len;
}

Stack.prototype.pop = function() {
  if (this.len === 0) return undefined;

  // store returned value
  const returnVal = this.contents[this.ind];

  // remove node from stack
  delete this.contents[this.ind];

  // decrement length and current 'last index'
  this.ind--;
  this.len--;

  // return popped value
  return returnVal;
}

Stack.prototype.getMax = function() {
  let valArray = Object.values(this.contents);
  return Math.max(...valArray);
}

module.exports = Stack;