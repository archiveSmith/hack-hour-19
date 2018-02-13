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
  this.index = 0;
}

Stack.prototype.push = function(value) {
    this.storage[this.index] = value;
    this.index++;
    return Object.keys(this.storage).length;
};


Stack.prototype.pop = function () {
  this.index--;
  let removed = this.storage[this.index];
  delete this.storage[this.index];
  return removed;
};

Stack.prototype.getMax = function() {
  let objArr = Object.entries(this.storage);
  let biggest = objArr.reduce(function(largest, entry){
    return entry[1] > largest ?  entry[1] : largest;
  },-99999);

  return biggest;

};
//
// console.log(Stack.prototype);
// console.log(Stack.prototype.push(2));
// Stack.prototype;
// console.log(Stack.getMax);
module.exports = Stack;
