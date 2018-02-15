/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
    this.top = null;
    this.length = 0;
}

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
    this.length += 1;
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







// ======= Solutions ========== /
// function Stack() {
//   this.stack = {};
//   this.length = 0;

//   this.push = (e) => {
//     this.stack[this.length] = e;
//     this.length += 1;
//     return e;
//   };

//   this.pop = () => {
//     if (!this.length) { return undefined; }

//     this.length -= 1;

//     const e = this.stack[this.length];
//     delete this.stack[this.length];
//     return e;
//   };
// }

// /**
// * Queue Class
// */

// function Queue() {
//   this.leftStack = new Stack();
//   this.rightStack = new Stack();
//   this.length = 0;

//   this.enqueue = (e) => {
//     this.leftStack.push(e);
//     this.length += 1;
//     return e;
//   };

//   this.dequeue = () => {
//     // if nothing in queue, return undefined
//     if (!this.rightStack.length && !this.leftStack.length) { return undefined; }

//     // if rightStack is empty, put leftStack into it
//     if (!this.rightStack.length) {
//       for (let i = 0; i < this.length; i += 1) {
//         this.rightStack.push(this.leftStack.pop());
//       }
//     }

//     this.length -= 1;
//     return this.rightStack.pop();
//   };
// }