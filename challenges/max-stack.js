/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // Initialize length and body to be 0 and empty respectively
  this.length = 0;
  this.body = {};
}

// Adds an element to the top of the stack and returns the length
Stack.prototype.push = function(elem) {
  // Set the index of 'var' to the current length of the body and increment
  this.body[this.length++] = elem;
  // Return length
  return this.length;
};

// Removes the element at the top of the stack and returns it
Stack.prototype.pop = function() {
  // Keep track of popped element
  let elem = this.body[this.length - 1];
  // Delete last element in body and update length
  delete this.body[(this.length--) - 1];
  // Return the popped element
  return elem;
}

// Returns the max element in the stack
Stack.prototype.getMax = function() {
  // Set 'max' to the first element of the body
  let max = this.body[0];
  // Iterate through each element in the body
  for (let prop in this.body) {
    // If the element is larger than 'max', then update 'max'
    if (this.body[prop] > max) max = this.body[prop];
  }
  return max;
}

module.exports = Stack;