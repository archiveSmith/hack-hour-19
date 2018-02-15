/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.data = {};
  this.index = 0;
}

Stack.prototype.push = function(item) {
  this.data[this.index] = item;
  this.index++;
};

Stack.prototype.pop = function() {
  let result = this.data[this.index - 1];
  delete this.data[this.index - 1];
  this.index -= 1;
  return result;
};

/**
 * Queue Class
 */

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(item) {
  this.stack1.push(item);
};

Queue.prototype.dequeue = function() {
  this.stack2.push(this.stack1.pop());
  return this.stack1.pop();
};

module.exports = { Stack: Stack, Queue: Queue };
