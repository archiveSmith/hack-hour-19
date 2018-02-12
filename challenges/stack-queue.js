/**
 * Create a stack.Then create a queue using two stacks.
 */

/*
  I got so far as the stack implemented from following a
  tutorial and I have a plan for how the stacks are going to sit in the Queue

  But this is all I've coded so far...

  The rules will go as follows..

  1-Items come into the first stack.
  2- Fill while able to be filled
  3-Once full, Stack A goes into the Queue
  4-More items get put onto StackB until it is full,
    afterwhich it moves to queue in second position.
  5-For Removal, stackA gets unloaded first. LIFO.
  6-Only once all items are removed from stackA, do we start
    removing StackB items..
*/
 function Stack() {
   this.count = 0;
   this.storage = {};
   this.maxCount = 10;
  }
  Stack.prototype.push = function(value) {
    if (this.count === this.maxCount) {
      return 'sorry no can do. Max stack items has been reached';
    }
    else {
      this.storage[this.count] = value;
      this.count++;
    }
  }

  Stack.prototype.pop = function() {
    if(this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  Stack.prototype.size = function() {
    return this.count;
  }


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
