'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  let len = array.length;
  for (let i = 0; i < (len-1)/2; i ++) {
    array[i] += array[len-1-i];
    array[len-1-i] = array[i] - array[len-1-i];
    array[i] -= array[len-1-i];
  }
  return array;
}

function tests() {
  let x = [];
  for (let i = 0; i < 9; i ++) {
    x.push(i);
  }
  console.log(x);
  console.log(reverseInPlace(x));
  console.log(reverseInPlace(x));
  let y = [];
  for (let i = 0; i < 10; i ++) {
    y.push(i);
  }
  console.log(y);
  console.log(reverseInPlace(y));
  console.log(reverseInPlace(y));
}

//tests()

module.exports = reverseInPlace;
