/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
}

Stack.prototype.push = value => this.storage.push(value);

Stack.prototype.pop = () => this.storage.pop();

Stack.prototype.isEmpty = () => this.storage.length;

/**
 * Queue Class
 */

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = value => this.in.push(value);

Queue.prototype.dequeue = () => {
  if (this.out.isEmpty()) {
    while (!this.in.isEmpty()) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};

module.exports = { Stack, Queue };

// /**
//  * Create a stack.Then create a queue using two stacks.
//  */

// function Stack() {
//   this.storage = {};
//   this.index = 0;
// }

// Stack.prototype.push = function (value) {
//   this.storage[this.index] = value;
//   this.index++;
// };

// Stack.prototype.pop = function () {
//   const result = this.storage[this.index - 1];
//   delete this.storage[this.index - 1];
//   this.index -= 1;
//   return result;
// };

// /**
//  * Queue Class
//  */

// function Queue() {
//   this.storage = {};
//   this.index = 0;
//   this.dequeueCount = 0;
// }

// Queue.prototype.enqueue = function (value) {
//   this.storage[this.index] = value;
//   this.index++;
// };

// Queue.prototype.dequeue = function () {
//   if (Object.keys(this.storage).length === 0) return undefined;
//   const dequeueItem = this.storage[this.dequeueCount];
//   delete this.storage[this.dequeueCount];
//   this.dequeueCount++;
//   return dequeueItem;
// };

// module.exports = { Stack, Queue };
