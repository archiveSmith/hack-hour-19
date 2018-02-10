/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.top = 0;
  this.max = -Infinity;
  this.stack = [];

  Stack.prototype.push = (val) => {
    if (val > this.max) this.max = val;
    this.stack[this.top] = val;
    this.top += 1;
    return this.top;
  };

  Stack.prototype.pop = () => {
    if (this.top === 0) return;
    const val = this.stack[this.top - 1];
    this.top -= 1;
    return val;
  };

  Stack.prototype.getMax = () => {
    if (this.top === 0) return;
    return this.max;
  };
}

module.exports = Stack;