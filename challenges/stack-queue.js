/**
 * Create a stack.Then create a queue using two stacks.
 */
function Node(val, prev) {
  this.val = val;
  this.prev = prev;
}

function Stack() {
  this.head = null;
  this.push = function(val) {
    let pushed = new Node(val, this.head);
    this.head = pushed;
  }
  this.pop = function() {
    if (!this.head) return;
    let popped = this.head;
    this.head = this.head.prev;
    return popped.val;
  }
}



/**
* Queue Class
*/


function Queue() {
  this.addStack = new Stack();
  this.remStack = new Stack();
  this.enqueue = function(val) {
    this.addStack.push(val);
  }
  this.dequeue = function() {
    let transfer = this.addStack.pop();
    while (transfer !== undefined) {
      //console.log('moving', transfer);
      this.remStack.push(transfer);
      transfer = this.addStack.pop();
    }
    let dequeued = this.remStack.pop();
    transfer = this.remStack.pop();
    while (transfer !== undefined) {
      //console.log('moving back', transfer);
      this.addStack.push(transfer);
      transfer = this.remStack.pop();
    }
    //console.log('dequeued', dequeued);

    return dequeued;
  }
}

function stackTests() {
  let testList = [];
  let myStack = new Stack();
  for (let i = 0; i < 10; i ++) {
    testList.push(i);
  }
  for (let i = 0; i < 10; i ++) {
    myStack.push(i);
  }
  for (let i = 0; i < 11; i ++) {
    console.log(myStack.pop());
  }
}

function queueTests() {
  let myQueue = new Queue();
  for (let i = 0; i < 10; i ++) {
    myQueue.enqueue(i);
  }
  for (let i = 0; i < 11; i ++) {
    console.log(myQueue.dequeue());
  }
}

//stackTests();
//queueTests();

module.exports = {Stack: Stack, Queue: Queue};
