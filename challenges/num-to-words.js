// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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
  if (typeof num !== 'number') return false;
  if (num === 0) return 0;

  const ones = ' One Two Three Four Five Six Seven Eight Nine'.split(' ')
  const teens = ' Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(' ')
  const tens = ' Ten Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split(' ')
  const manyZeroes = ' Thousand Million Billion Trillion Quadrillion Quintillion Sextillion'.split(' ')
  const hundreds = [ones, teens.concat(tens), 'Hundred']
  
  
}

// console.log(numToWords(10))

module.exports = numToWords;
