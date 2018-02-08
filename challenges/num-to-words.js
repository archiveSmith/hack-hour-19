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
    if (typeof num !== 'number') return false
    if (num === 0) return 'Zero'
    
    const ones = ' One Two Three Four Five Six Seven Eight Nine'.split(' ')
    const teens = ' Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(' ')
    const tens = ' Ten Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split(' ')
    const manyZeroes = ' Thousand Million Billion Trillion Quadrillion Quintillion Sextillion'.split(' ')
    const hundreds = [ones, teens.concat(tens), 'Hundred']
    
    const numArr = num.toString().split('')
    let counter = 0
    for (let i = numArr.length-1; i > 0; i--) {
      counter++
      if (counter%3 === 0) {
        numArr.splice(i, 0, ' ')
      }
    }
    
    const toEnglish = (numStr) => {
      numStr = numStr.split('')
      let ans = ''
      if (numStr.length === 3 && numStr[0] !== '0') {
        ans += ones[numStr[0]]+'Hundred'
        numStr.shift()
      }
      if (numStr.length === 2 && numStr[0] !== '0') {
        let temp = parseInt(numStr[0] + numStr[1])
        if (temp < 20 && temp > 10) {
          return ans + teens[numStr[1]]
        }
        ans += tens[numStr[0]]
        numStr.shift()
      }
      return ans += ones[numStr[0]]
    }
    const formattedArr = numArr.join('').split(' ').reverse().map(numStr => toEnglish(numStr))
    
    return formattedArr.map((str, i) => {
      if (!str.length) return ''
      return str + manyZeroes[i]
    }).reverse().join('')
  }
  
  
  numToWords()
module.exports = numToWords;
