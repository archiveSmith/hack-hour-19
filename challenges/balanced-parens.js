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
	let squareArr = [];
	let parenL = 0;
	let parenR = 0; 
	let parenArr = [];
	let curlyL = 0;
	let curlyR = 0;
	let curlyArr = [];
	let even = false; 
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

	for(let char of input){
		if((char=="(")||(char==")")){
			parenArr.push(char);
		}
		if((char=="{")||(char=="}")){
			curlyArr.push(char);
		}
		if((char=="[")||(char=="]")){
			squareArr.push(char);
		}
	}


	if((squareL===squareR)&&(parenL===parenR)&&(curlyL===curlyR)){
		even = true; 
	}

	let balParen = true;
	for(let i=0; i<(parenArr.length/2); i++){
		if(parenArr[i]===parenArr[parenArr.length-1-i]){
			balParen = false;
		}
	}
	let balCurly = true;
	for(let i=0; i<(curlyArr.length/2); i++){
		if(curlyArr[i]===curlyArr[curlyArr.length-1-i]){
			curlyArr = false;
		}
	}
	let balSquare = true; 
	for(let i=0; i<(squareArr.length/2); i++){
		if(squareArr[i]===squareArr[squareArr.length-1-i]){
			squareArr = false;
		}
	}


	if((even===true) && (balSquare===true) && (balCurly===true) && (balParen===true)){
		return true;
	}
	return false; 
}

module.exports = balancedParens;
