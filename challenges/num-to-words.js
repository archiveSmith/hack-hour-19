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

 // Count how many total digits
    //turn number into a string
// check first digit
// check second digit
//check if a key in object matches

function numToWords(num) {
  let words = {
    ones: {
      0 : 'Zero',
      1 : 'One',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten'
    },
    teens: {
      11: 'Eleven',
      12: 'Twelve',
      13: 'Thirteen',
      14: 'Fourteen',
      15: 'Fifteen',
      16: 'Sixteen',
      17: 'Seventeen',
      18: 'Eighteen',
      19: 'Nineteen'
    },
    tensplace: {
      20: Twenty,
      30: Thirty,
      40: Forty,
      50: Fifty,
      60: Sixty,
      70: Seventy,
      80: Eighty,
      90: Ninety
    }
    addZeros: {
      00: 'Hundred',
      000: 'Thousand',
      000000: 'Million',
      000000000: 'Billion',
      000000000000: 'Trillion' 
      000000000000000: 'Quadrillion',
      000000000000000000: 'Quintillion',
      000000000000000000000: 'Sextillion'
    }
  }

}

module.exports = numToWords;
