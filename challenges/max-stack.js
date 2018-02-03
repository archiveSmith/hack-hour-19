/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.store = {};
  this.length = 0;
}

Stack.prototype.pop = function() {
  if (this.length === 0) return undefined;
  let lastItem = this.store[this.length - 1];
  delete this.store[this.length - 1];
  this.length -= 1;
  return lastItem;
};

Stack.prototype.push = function(value) {
  this.store[this.length] = value;
  this.length += 1;
  return this.length;
};

Stack.prototype.getMax = function() {
  let maxNum = this.store[0];
  for (const key in this.store) {
    if (this.store[key] > maxNum) {
      maxNum = this.store[key];
    }
  }
  return maxNum;
};

// const stack = new Stack();
// stack.push(1);
// stack.push(12);
// stack.push(14);
// stack.push(19);
// console.log(JSON.stringify(stack.getMax(), null, 2));

module.exports = Stack;
