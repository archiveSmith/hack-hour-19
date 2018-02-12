/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.store = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.store[this.length] = val;
  this.length++;
  return this.length;
}

Stack.prototype.pop = function() {
  if (this.length === 0) return undefined;
  const popped = this.store[this.length-1];
  delete this.store[this.length-1];
  this.length--;
  return popped;
}

/**
* Queue Class
*/


// Nest them within one another
function Queue() {
  this.pushStack = new Stack();
  this.popStack = new Stack();

  //make the popStack store be the "reverse" of the pushStack store
  // this.popStack.store = this.pushStack.store;

  this.store = this.popStack.store;
}

Queue.prototype.enqueue = function(val) {
  this.pushStack.push(val);

  // Make the popStack be the reverse;
  let pushArr = Object.values(this.pushStack.store);
  let popArr = pushArr.reverse();
  for (let i=0; i<popArr.length; i++){
    this.popStack.store[i] = popArr[i];
  }

  return popArr.length;
}

Queue.prototype.dequeue = function(){
  let returned = this.popStack.pop(val);

  //make the pushStack be the reverse;
  let popArr = Object.values(this.popStack.store);
  let pushArr = popArr.reverse();
  for (let i=0; i<pushArr.length; i++) {
    this.pushStack.store[i] = pushArr[i];
  }

  return returned;
}

module.exports = {Stack: Stack, Queue: Queue};
