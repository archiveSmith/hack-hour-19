/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
function Node(val, last) {
  this.val = val;
  this.prev = last;
}

function Stack() {
  this.head = null;
  this.len = 0;
  this.push = function(val) {
    this.len ++;
    if (!this.head) {
      this.head = new Node(val, null);
    } else {
      this.head = new Node(val, this.head);
    }
    return this.len;
  };
  this.pop = function() {
    let popped = this.head;
    if (this.head) {
      this.len --;
      this.head = this.head.prev;
      return popped.val
    }
    return popped;
  };
  this.getMax = function() { // runs in O(n) time for now
    if (this.len === 0) return undefined;
    let curr = this.head;
    let max = this.head.val;
    while (curr) {
      if (curr.val > max) { max = curr.val};
      curr = curr.prev;
    }
    return max;
  };
}

function tests() {
  let x = new Stack();
  x.push(10);
  for (let i = 1; i < 11; i ++) {
    console.log('length is', x.push(i));
  }
  for (let i = 1; i <= 11; i ++) {
    console.log('just popped', x.pop());
    console.log('new length is', x.len)
    console.log('current max is', x.getMax());
  }
}
//tests()

module.exports = Stack;
