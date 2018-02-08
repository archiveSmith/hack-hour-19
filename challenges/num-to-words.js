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
    const num100 = ['Hundred','Thousand','Million','Billion','Trillion'];
    const num20 = [ 'Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety' ];
    const num11 = ['Eleven','Twelve','Thirteen', 'Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
    const num1 = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten' ];
    const splitNumber = num.toString().split('').map(ele => parseInt(ele));
    const rejoinNum = parseInt(splitNumber.join(''))
    let arr = [];
      while (splitNumber.length > 0) {
        arr.push(num1[splitNumber[0]])
        if (rejoinNum >= 100) {
          arr.push(num100[splitNumber.length - 3]);
          splitNumber.shift();
        } else if (rejoinNum > 19  && rejoinNum < 100) {
          arr.pop();
          arr.push(num20[splitNumber[0]]);
          splitNumber.shift();
        }
      }  
      return arr;
    }
    
    console.log(numToWords(9996))
    

module.exports = numToWords;
