/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  // body...
  constructor() {
    this.MAX = -Infinity;
    this.data = {};
    this.length = 0;
  }
  push(value) {
    if (value > this.MAX) {
      this.MAX = value;
    }
    this.data[this.length] = value;
    this.length += 1;
    return this.length;
  }
  pop() {
    const temp = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    this.MAX = Object.values(this.data).reduce((prev, cur) => (cur > prev) ? cur : prev);
    return temp;
  }
  getMax() {
    return this.MAX;
  }
}

module.exports = Stack;