/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let items = [];

  this.push = (element) => {
    items.push(element);
    return items.length;
  }

  this.pop = () => {
    return items.pop();
  }

  this.getMax = () => {
    return Math.max(...items);
  }

}

module.exports = Stack;

let stack = new Stack();
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop(4));
console.log(stack.push(26));
console.log(stack.push(87));
console.log(stack.push(8));
console.log(stack.getMax());
