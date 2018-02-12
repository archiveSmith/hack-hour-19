/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.container = [];
  this.index = 0;

Stack.prototype.push = (value) => {
  this.container[this.index] = value;
  this.index+=1;
  }; 
Stack.prototype.pop = (value) => {
  const savedValue = this.container[this.index - 1];
  delete this.container[this.index - 1];
  this.index-=1;
  return savedValue;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.container = [];
  this.index = 0;

Stack.prototype.enqueue = () => {
  this.container[0] = value;
  this.index+=1;
  }

Stack.prototype.dequeue = () => {
  if(this.index === 0) {
    return undefined; 
  } else {
    delete this.container[0];
    this.index -= 1;
    return this.container
    }
  }
}

module.exports = {Stack: Stack, Queue: Queue};
