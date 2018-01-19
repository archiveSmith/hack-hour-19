"use strict";
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
  array.length % 2 === 0 ? reverseEven(array) : reverseOdd(array);
}

function reverseOdd(array) {
  let midIndex = Math.round((array.length - 1) / 2);
  let tempVal;
  for (let i = 0; i < midIndex; i += 1) {
    tempVal = array[i];
    array[i] = array[array.length - i];
    array[array.length - 1] = tempVal;
  }
  return array;
}

function reverseEven(array) {
  let tempVal;
  let num = array.length / 2;
  for (let i = 0; i < num; i += 1) {
    tempVal = array[i];
    array[i] = array[array.length - (1 + i)];
    array[array.length - (1 + i)] = tempVal;
  }
  return array;
}

module.exports = reverseInPlace;
