/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.data = {};
  this.index = 0;
}

//pop + return element that was removed
Stack.prototype.pop = function() {
  let result = this.data[this.index - 1];
  delete this.data[this.index - 1];
  this.index -= 1;
  return result;
};

//push + return new length
Stack.prototype.push = function(value) {
  this.data[this.index] = value;
  this.index++;
  return this.index;
};

//getMax return largest value in stack
Stack.prototype.getMax = function() {
  let max = 0;
  for (item of Object.values(this.data)) {
    if (item > max) {
      max = item;
    }
  }
  return max;
};

module.exports = Stack;
