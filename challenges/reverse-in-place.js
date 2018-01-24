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
   //i realize by doing this that I don't know what's going on under the hood
   //with array.sort()
   //maybe it actually IS making a new object.. not sure.
   //to be continued
   return array.sort(function(a, b){return a+b})
 }

module.exports = reverseInPlace;
