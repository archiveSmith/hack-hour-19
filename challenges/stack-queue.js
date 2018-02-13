/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.top = null;
    this.length = 0;
}

Stack.prototype.getLength = () => {
    return this.length;
};

Stack.prototype.pop = () => {
    if(this.length === 0) return undefined;
    let nodeRemoved = this.top;
    this.top = nodeRemoved.prev;
    nodeRemoved.prev = null;
    this.length--;
    return nodeRemoved;
};

Stack.prototype.push = (val) => {
    let newNode = new Node(val);
    if(this.length === 0) {
        this.top = newNode;
    } else {
      newNode.prev = this.top;
      this.top = newNode;
    }
    this.length++;
    return this.length;
};

/**
* Queue Class
*/


function Queue() {
    this.stack = new Stack();
}

Queue.prototype.enqueue = (val) => {
    this.stack.push(val);
    return this.stack.length();
};

Queue.prototype.dequeue = () => {
    const newStack = new Stack();
    while (this.stack.length > 0) {
        const popped = this.stack.pop();
        newStack.push(popped);
    }
    const returnVal = newStack.pop();

    while (newStack.length > 0) {
        const popped = newStack.pop();
        this.stack.push(popped);
    }
    return returnVal;
};


function Node (val) {
    this.value = val;
    this.prev = null;
}


module.exports = {Stack: Stack, Queue: Queue};
