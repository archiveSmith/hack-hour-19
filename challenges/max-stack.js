/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.count = 0;

  Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
    return count;
  }

  Stack.prototype.pop = function () {
    if(count === 0) {return undefined};
    let stored = this.storage[this.count];
    delete this.storage[this.count - 1];
    this.count--;
    return stored;
  }

  Stack.prototype.getMax = function () {
    let keys = Object.keys(this.storage).sort((b,a) => b - a);
    return keys[0];
  }
}



/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0
  this.store = {}
  this.max = {
    idx: 0,
    val: Number.NEGATIVE_INFINITY
  }
}

Stack.prototype.setNewMax = function () {
  for (let i in this.store) {
    if (this.store[i] > this.max.val) {
      this.max.val = this.store[i]
      this.max.idx = i
    }
  }
}

Stack.prototype.resetMax = function () {
  this.max.val = Number.NEGATIVE_INFINITY
  this.max.idx = -1
  return
}

Stack.prototype.push = function (v) {
  if (v > this.max.val) {
    this.max.idx = this.length
    this.max.val = v
  }
  this.store[this.length] = v
  this.length++
  return this.length
}

Stack.prototype.pop = function () {
  if (this.length === 0) return undefined;
  else {
    var popped = this.store[this.length - 1]
    if (popped === this.max.val) {
      this.resetMax()
    }
    delete this.store[this.length - 1]
    this.setNewMax()
  }
  this.length -= 1
  return popped
}

Stack.prototype.getMax = function () {
  return this.length === 0
    ? undefined
    : this.max.val
}

module.exports = Stack;