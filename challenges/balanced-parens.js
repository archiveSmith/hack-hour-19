/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */


  let testVariable = "something()()";
  function balancedParens(input){
 //
 //baby steps... first I want to be able to count how many parens are in a given string
   //define a placeholder variable number of openParens
   let openParenCount = 0;
   //first I split the input into an array
   let split = input.split("");
   //then I loop through the array
   for(var i = 0; i<split.length; i++) {
     //and increment counter anytime I see an open paren.
     if (split[i] === "(") {openParenCount++;}
   }
   //
   //
   //Now I'll do the same thing with close paren
   let closedParenCount = 0;
   //then I loop through the array
   for(var j = 0; j<split.length; j++) {
     //and increment counter anytime I see an open paren.
     if (split[j] === ")") {closedParenCount++;}
   }
   //then return a boolean that determines whether or not
   //the two parenCounts match...
   return openParenCount === closedParenCount;
 }

  /*
   Now there are some obvious problems with this naive approach.
   1- It only works on parens, while a parameter/argument could allow this to work on any symbol.
   2- It doesn't account for correct or incorrect nesting styles
       which seems to be the crux of today's challenge.
 */

 /*
     Lets deal with the first obvious problem...
     I could write a helper function that takes a charCode as input, but that wouldn't help
     our overall situation. That would make it so that I must explicitly define which symbol
     I am testing for. This is not the ideal solution.
     hrm..... insert Alex thinking emoji here...
 */

 /*
   Some observations about this problem...
   1- We have 3 different symbol types to address.. (), {}, []... For now I call them all BRACKETS
   2- Once a bracket inside another bracket, you can't close the outer one before closing the inner
   3- So I just talked through this problem with Chris and he really helped me slow my thinking down
      and figure this out...

      So the data structure of use here is a Stack.
      ... I could definitely handle this one... I'll come back to it.
 */




module.exports = balancedParens;
