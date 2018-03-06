// Write a function that takes a number as an argument and returns its english word representation as a string.
//Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

 function numToWords(num) {
   /*What a problem!
     First I want to know how many digits there are...
     There is a pattern here where every 3 digits gets treated uniquely
     So I'm thinking what I really want is an array where every element is 3 digit combos.
     I'll start there.
   */
   num = String(num);
   let arr = [];

   //this helper function will populate our arr variable with 3number combos
   function takeNextThree() {
     let temp = '';
     for (let i = 0; i<3; i++) {
     temp+= num[0];
     num=num.slice(1);
     // console.log('here is temp', temp);
     // console.log('here is num', num);
   }//close forLoop
     if (temp !== undefined) {
       arr.push((temp));
     temp = '';
     }
     else {temp='';}
   }//close takeNextThree helper function

   //Now we run our helper function
   for (let i = 0; num.length; i++) {
       takeNextThree();
   }


   return arr;
 }

module.exports = numToWords;
