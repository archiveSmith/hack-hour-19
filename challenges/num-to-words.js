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
	let outputString = ""; 
	let strNum = num.toString().reverse();
	let arrOfArrays = [];
	for(let i=0; i<strNum.length;i+=3){
		let arr = [];
		if(strNum.charAt(i)){
			arr.push(strNum.charAt(i));
		}
		if(strNum.chartAt(i+1)){
			arr.push(strNum.charAt(i+1));
		}
		if(strNum.charAt(i+2)){
			arr.push(strNum.charAt(i+2));
		}
		arrOfArrays.push(arr);
	}
	while(arrOfArrays.length>0){
		switch(arrOfArrays.length){
		 case 4:
			let string = helperFunction(arrOfArrays[3]); 
			string+=Billion; 
			outputString+=string; 
			arrOfArrays.pop(); 
			break; 
		 case 3: 
			let string = helperFunction(arrOfArrays[2]); 
			string+=Million; 
			outputString+=string; 
			arrOfArrays.pop();
			break;
		 case 2: 
			let string = helperFunction(arrOfArrays[1]); 
			string+=Thousand; 
			outputString+=string; 
			arrOfArrays.pop();
			break; 
		 case 1: 
			let string = helperFunction(arrOfArrays[0])
			outputString+=string;
			arrOfArrays.pop();
			break;
		}
	}

	return outputString; 

	function helperFunction(str){
		let str.reverse();
		let outputString = "";
		if(str.length===3){
			
		}
		if(str.length===2){

		}
		if(str.length===1){

		}

		return outputString; 
	}

}

module.exports = numToWords;
