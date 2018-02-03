/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.arr = {};
  this.length = 0;

  this.push = (el) => {
    this.length++;
    this.arr[this.length - 1] = el;
  };

  this.pop = () => {
    this.length--;
    const result = this.arr[this.length];
    delete this.arr[this.length];
    return result;
  };
}

module.exports = Stack;