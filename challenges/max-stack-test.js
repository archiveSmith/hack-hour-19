const Stack = require ('./max-stack');

const newStack = new Stack();

const stackLength =  newStack.push(0);
const stackMax = newStack.getMax();

const stackLength1 = newStack.push(1);
const stackMax1 = newStack.getMax();

const stackLength2 = newStack.push(2);
const stackMax2 = newStack.getMax();

const poppedVal = newStack.pop();
const poppedVal1 = newStack.pop();
const poppedVal2 = newStack.pop();

