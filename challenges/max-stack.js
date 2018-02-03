/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
  return this.count;
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return undefined;
  }
  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

Stack.prototype.getMax = function() {
  var values = Object.values(this.storage);
  var largest = -Infinity;
  for (var i = 0; i < values.length; i++) {
    if (values[i] > largest) {
      largest = values[i];
    }
  }
  return largest;
}

module.exports = Stack;
