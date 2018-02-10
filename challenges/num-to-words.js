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

// COME BACK AND FINISH THIS

function numToWords(num, word = '') {
  if (num < 0) word = 'Negative' + numToWords(Math.abs(num));
  if (num === 0) {
    if (!word) return 'Zero';
    return '';
  }
  let digits = num.toString().length; // Nearest power of 10, rounded down
  let placeholder;
  switch (digits) {
    case 15:
      placeholder = 'Quadrillion';
      break;
    case 14:
    case 13:
    case 12:
      placeholder = 'Trillion';
      break;
    case 7:
      placeholder = '';
    case 6:
    case 5:
    case 4:
      placeholder = 'Thousand';
    default:
      placeholder = '';
  }
  // word = numToWords( how many of placeholder ) + placeholder + numToWords (original minus above placeholder)
  return word;
}

module.exports = numToWords;
