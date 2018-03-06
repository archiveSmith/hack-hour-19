/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

 function permPalin(str) {
 	/*
 	  What are all of the permutations?
 	*/
 	// define a variable placeholder
 	let arr = [];
 	//turn the string into an array of characters


 /*
 Not even close yet...
 */

 	//helper function that will push all permutations into arr
 	function getAllPermutations(string) {
   let results = [];
   if (str.length === 1) {
     results.push(string);
     return results;
   }

   for (let i = 0; i < string.length; i++) {
     let firstChar = string[i];
     let charsLeft = string.substring(0, i) + string.substring(i + 1);
     let innerPermutations = getAllPermutations(charsLeft);
     console.log(innerPermutations);
     for (let j = 0; j < innerPermutations.length; j++) {
       results.push(firstChar + innerPermutations[j]);
     }
   }

   return undefined;
 }
 getAllPermutations(str);
 return arr;

 }//close main func definition

module.exports = permPalin;
