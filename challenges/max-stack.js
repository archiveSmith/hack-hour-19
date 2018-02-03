/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.arr = [];
  this.max_i;
  
  this.push = function(elem){
    if(elem > this.arr[this.max_i] || this.max_i === undefined){
      this.max_i = this.arr.length
    }
    return this.arr.push(elem)
  }

  this.pop = function(){
    let ret = this.arr.splice(this.arr.length-1)[0];
    if(this.arr.length === this.max_i){
      this.max_i = this.arr.reduce((max_ind, cur, i, array) => cur > array[max_ind] ? i : max_ind, 0);
    }
    return ret;
  }

  this.getMax = function(){
    return this.arr[this.max_i]
  }
}


module.exports = Stack;
