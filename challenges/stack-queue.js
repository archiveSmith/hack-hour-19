/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function () {
  const result = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return result;
};

/**
 * Queue Class
 */

function Queue() {
  this.storage = {};
  this.index = 0;
  this.dequeueCount = 0;
}

Queue.prototype.enqueue = function (value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function () {
  if (Object.keys(this.storage).length === 0) return undefined;
  const dequeueItem = this.storage[this.dequeueCount];
  delete this.storage[this.dequeueCount];
  this.dequeueCount++;
  return dequeueItem;
};

module.exports = { Stack, Queue };
