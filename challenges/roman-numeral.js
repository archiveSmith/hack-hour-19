/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */
//should put roman numerals into a node list instead of ugly if else
class Node {
	constructor(value) {
		this.value = value;
		this.numeral = null;
		this.next = null;
	}

}


function romanNumeral(n, list) {
	//console.log('originalNumber', n);
	if(!list) {
		list = new Node(n);
	} else {
		list.value = n;
		if(list.value !== 0) {
			list.remainder = list.value - checkDivisibility(list.value)[1];
			list.numeral = checkDivisibility(list.value)[0];
			console.log(list);
			list.next = romanNumeral(list.remainder, list);
		}
	}

	return list;
}

//this works without node list
function romanNumeral(n, allNumerals = []) {
	//console.log('originalNumber', n);
	if(n !== 0) {
		allNumerals.push(checkDivisibility(n)[0]);
		romanNumeral(n - checkDivisibility(n)[1], allNumerals);
	}
	return allNumerals.join('');
}

function checkDivisibility(val) {
	if(val - 1000 >= 0) {
		return ["M", 1000];
	} else if(val - 900 >= 0) {
		return ["CM", 900];
	} else if(val - 500 >= 0) {
		return ["D", 500];
	} else if(val - 400 >= 0) {
		return ["CD", 400];
	} else if(val - 100 >= 0) {
		return ["C", 100];
	} else if(val - 90 >= 0) {
		return ["XC", 90];
	} else if(val - 50 >= 0) {
		return ["L", 50];
	} else if(val - 40 >= 0) {
		return ["XL", 40];
	}  else if(val - 10 >= 0) {
		return ["X", 10];
	} else if(val - 9 >= 0) {
		return ["IX", 9];
	} else if(val - 5 >= 0) {
		return ["V", 5];
	} else if(val - 4 >= 0) {
		return ["IV", 4];
	} else if(val - 1 >= 0) {
		return ["I", 1];
	}
}

// romanNumeral(1);
// romanNumeral(4);
// romanNumeral(5);
// romanNumeral(9);
// romanNumeral(10);
console.log(romanNumeral(967));

//module.exports = romanNumeral;
