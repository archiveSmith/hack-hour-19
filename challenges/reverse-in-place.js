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
  let temp = array;
  let temp2 = 0;
  for(var i = 0; i < temp.length; i++){
    let start = temp.length - 1 - i;
     temp2 = temp[i];
    temp2 = temp[i];

    temp[i] = temp[start]
    temp[start] = temp2;
    // temp[i] = temp[start];
    // temp[start] = hold;
    // temp[hold] = hold2;
    // let temp = array[i];

    // array[i] = array[start];
    // array[start] = temp;

  }
  return temp;
}
console.log(reverseInPlace([1,2,3,4]));
module.exports = reverseInPlace;
