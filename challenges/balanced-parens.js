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
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
	let squareL = 0;
	let squareR = 0;
	let parenL = 0;
	let parenR = 0; 
	let curlyL = 0;
	let curlyR = 0; 
	for(let char of input){
		if(char=="("){
			parenL++;
		}
		if(char==")"){
			parenR++;
		}
		if(char=="{"){
			curlyL++;
		}
		if(char=="}"){
			curlyR++;
		}
		if(char=="["){
			squareL++;
		}
		if(char=="]"){
			squareR++;
		}
	} 
	if((squareL===squareR)&&(parenL===parenR)&&(curlyL===curlyR)){
		return true; 
	}
	return false;
}

module.exports = balancedParens;
