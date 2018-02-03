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
  this.count = 0;

  Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
    return count;
  }

  Stack.prototype.pop = function () {
    if(count === 0) {return undefined};
    let stored = this.storage[this.count];
    delete this.storage[this.count - 1];
    this.count--;
    return stored;
  }

  Stack.prototype.getMax = function () {
    let keys = Object.keys(this.storage).sort((b,a) => b - a);
    return keys[0];
  }
}

module.exports = Stack;