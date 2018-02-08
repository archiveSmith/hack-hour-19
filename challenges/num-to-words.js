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
  if (typeof num !== 'number') return;
  if (num < 0) return; // no support for negative numbers?
  if (num === 0) return 'Zero';

  let illions = [
    '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion'
  ];
  let teens = [
    'Ten','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];

  let ones = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
  ]

  let hundreds = ones.map(function(digit) {
    return digit + 'Hundred';
  })

  hundreds[0] = '';

  let tens = [
    '', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];

  //console.log(hundreds);

  let word = '';
  let ill = 0;
  while (num !== 0) {
    //console.log(num);
    let chunk = num % 1000;

    if (chunk !== 0) {
      word = illions[ill] + word;
    };
    let teenCheck = num % 100;
    if (teenCheck > 9 && teenCheck < 20) {
      word = teens[teenCheck-10] + word;
    } else {
      // console.log(num % 10);
      // console.log(Math.floor(num / 10));

      word = ones[num % 10] + word;
      word = tens[(Math.floor(num / 10)) % 10] + word;
    }
    word = hundreds[(Math.floor(num / 100)) % 10] + word;
    num = Math.floor(num / 1000);
    ill ++;
  }

  return word;
}

function tests() {
  console.log(numToWords(0));
  console.log(numToWords(43));
  console.log(numToWords(2999));
  console.log(numToWords(15));
  console.log(numToWords(2483579411));
  console.log(numToWords(300525151340440));
  console.log(numToWords(92120000000000000));
}

//tests();

module.exports = numToWords;
