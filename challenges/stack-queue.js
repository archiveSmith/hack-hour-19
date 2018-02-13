/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const stackObj = {};
  stackObj.top = 0;
  stackObj.stack = [];
  stackObj.push = (val) => {
    console.log(stackObj);
    stackObj.stack[stackObj.top++] = val;
  };
  stackObj.pop = () => {
    if (stackObj.top <= 0) return;
    return stackObj.stack[stackObj.top--];
  };
  return stackObj;
}


/**
* Queue Class
*/


function Queue() {

}

const test1 = Stack();
test1.push(3);
console.log(test1.pop());
test1.push(4);
test1.push(5);
console.log(test1.stack);

module.exports = {Stack: Stack, Queue: Queue};
