/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (val) {
  this.storage[this.index++] = val;
}

Stack.prototype.pop = function() {
  const popped = this.storage[this.index - 1];
  if (typeof this.storage[0] !== 'undefined') delete this.storage[--this.index];
  return popped;
}

/**
* Queue Class
*/


function Queue() {
  this.container = new Stack();
  this.q = new Stack();
}

Queue.prototype.enqueue = function (val) {
  while (this.q.index) this.container.push(this.q.pop());
  this.q.push(val);
  while (this.container.index) this.q.push(this.container.pop());
}

Queue.prototype.dequeue = function () {
  return this.q.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
