/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.values = [];
  this.maxVal = 0;
}

Stack.prototype.push = function (value) {
  if(value > this.maxVal) this.maxVal = value;
  this.values.push(value);
  return this.values.length;
}

Stack.prototype.pop = function () {
  const popped = this.values.pop();
  const length = this.values.length;

  //Checking to see if the popped value is the maxVal;
  if (popped === this.maxVal) {
    this.maxVal = 0;
    for (let index = 0; index < length; index++) {
      if (this.values[index] > this.maxVal) this.maxVal = this.values[index];
    }
  }
}

Stack.prototype.getMax = () => {
  return this.maxVal;
}





module.exports = Stack;