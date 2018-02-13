/**
 * Create a stack.Then create a queue using two stacks.
 */


// function node(val){
//   this.value = val;
//   this.next = null;
// }

function Stack() {
  this.storage = {};
  this.index = 0;

}

Stack.prototype.push(val) {
  this.storage[this.index] = val;
  this.index++;
}
Stack.prototype.pop() {
  let popped = this.storage[this.index - 1];
  this.storage[this.index - 1] = undefined;
  this.index--;
  return popped;
}

/**
* Queue Class
*/


function Queue() {
  this.storage = {};
}

module.exports = {Stack: Stack, Queue: Queue};
