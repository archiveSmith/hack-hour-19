/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {

  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  // this.storage[this.index] = value;
  // return this.index++
  let current = this.storage[this.index]
  while (current !== undefined) {
    this.index++
  }
  this.storage[this.index] = value;
  return this.index++;
};

Stack.prototype.pop = function () {
  let result = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--
  return result
};
Stack.prototype.getMax = function () {
  this.storage = Array.from(this.storage);
  let result = this.storage.sort((a, b) => a - b);
  return result[this.index - 1];

  // body...

}

module.exports = Stack;