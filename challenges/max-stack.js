/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(){
  //body
 this.stack = [];
}

Stack.prototype.pushIt  = function(element){
  this.stack[this.stack.length] = element
};

Stack.prototype.poppy = function(){
 this.stack.length = this.stack.length-1;
 return this.stack[this.stack.length-1];
};

Stack.prototype.theMax = function () {
  if(this.stack.length = 0) {return [];}
  let max = this.stack.reduce(function(a, b){
      return Math.max(a, b);
  })
  return max;
};


let scott = new Stack();
console.log(scott)
scott.pushIt(1);
scott.pushIt(55)
scott.pushIt(27);
scott.theMax();
console.log(scott);

module.exports = Stack;