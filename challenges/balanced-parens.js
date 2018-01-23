/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */



function balancedParens(input){
	//MY REGEX EXPRESSION RIPS OUT BRACKETS [] SO IT FAILS, BUT I THINK THIS WORKS OTHERWISE, FAILING THE ONE TEST CASE
	input = input.replace(/[^(){}]/g, '');
	// if(!walkThrough(input)){
	// 	return false;
	// }
	if(testForCorrect(input)) {
		return getLeftNum(input) === getRightNum(input);
	}
	return false;
}

function testForCorrect(input) {
	let valid = true;
	let straight = 0;
	input.split('').forEach(function (el){
		if(el === '(' || el === '{' || el === '[') {
			straight += 1;
		}
		if (el === ')' || el === '}' || el === ']'){
			straight -= 1;
			if(straight < 0) {
				valid = false
			}
		}
	});
	return valid;
}

function getLeftNum(input) {
	let count = 0;
	for(var i = 0; i < input.length; i++) {
		if(input[i] === '(' || input[i] === '{' || input[i] === '[') {
			count++;
		}
	}
	return count;
}

function getRightNum(input) {
	let count = 0;
	for(var i = 0; i < input.length; i++) {
		if(input[i] === ')' || input[i] === '}' || input[i] === ']') {
			count++;
		}
	}
	return count;
}

console.log(1, balancedParens('('));  // false
console.log(2,balancedParens('()')); // true
console.log(3,balancedParens(')('));  // false
console.log(4,balancedParens('(())')); //true

console.log(5,balancedParens('[](){}')); // true
console.log(6,balancedParens('[({})]'));   // true
console.log(7,balancedParens('[(]{)}')); // false THIS IS THE ONE PROBLEM

console.log(8,balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(9,balancedParens(' var hubble = function() { telescopes.awesome();')); // false

function walkThrough(input){
	let valid = true;
	let arr = input.split('');
	arr.forEach(function (el, index){
		if(input[index] === '(') {
			if(!(input[index + 1] === '(' || input[index + 1] === ')')) {
				valid = false;
			}
		}
		if(input[index] === '{') {
			if(!(input[index + 1] === '{' || input[index + 1] === '}')) {
				valid = false;
			}
		}
		if(input[index] === '[') {
			console.log('here');
			if(!(input[index + 1] === '[' || input[index + 1] === ']')) {
				valid = false;
			}
		}
	});
	return valid;
}


//module.exports = balancedParens;
