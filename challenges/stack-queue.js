/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  
  this.pop = function() {
    return this.stack.pop();
  };
  
  this.push = function(item) {
    return this.stack.push(item);
  };
}



/**
* Queue Class
*/


function Queue() {
  this.inbox = [];
  this.outbox = [];
};

Queue.prototype.push = function(val) {
  this.inbox.push(val);
  };
  
Queue.prototype.pop = function() {
  if (!this.outbox.length) {
    if (!this.inbox.length) {
      return undefined;
    }
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
