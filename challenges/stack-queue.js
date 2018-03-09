/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.body = {};
  this.length = 0;
}

Stack.prototype.push = function(elem) {
  this.body[this.length++] = elem;
}

Stack.prototype.pop = function() => {
  let elem = this.body[this.length - 1];
  delete this.body[(this.length)-- - 1];
  return elem;
}

let stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack);

/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};

============================================

const stack = require('./SQ.js').Stack;
const queue = require('./SQ.js').Queue;

const data = require('./SQ.js')

data.Stack.push(4);
stack.push(4);
