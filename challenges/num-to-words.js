// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 *  numToWords(143) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    const numString = '';
    const numArr = num.toString().split('');
    const length = numArr.length;
    const ones = { 0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', };
    const eens = { 10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen', };
    const tens = { 2: 'Twenty', 3: 'Thirty', 4: 'Forty', 5: 'Fifty', 6: 'Sixty', 7: 'Seventy', 8: 'Eighty', 9: 'Ninety', };

    const findScale = function (place) {
        let scale = '';
        switch (place) {
            case 2:
                scale = 'Hundred';
                break;
            case 3:
            case 4:
            case 5:
                scale = 'Thousand';
                break;
            case 6:
            case 7:
            case 8:
                scale = 'Million';
                break;
            case 9:
            case 10:
            case 11:
                scale = 'Billion';
                break;   
            case 12:
            case 13:
            case 14:
                scale = 'Trillion';
                break;   
            case 15:
            case 16:
            case 17:
                scale = 'Quadrillion';
                break;         
            default:
                break;
        }

        return scale;
    };

    if (num >= 0 && num <= 9) {
        return ones[num];
    } else if (num >= 10 && num <= 19) {
        return eens[num];
    } else {
        for (let i = 0; i < numArr.length - 1; i++) {
            const place = length - i;
            if (place === 2) {
                numString += eens[place];
            } else if (place === 2) {
                numString += eens[]
            }
        }
    }
}

module.exports = numToWords;
