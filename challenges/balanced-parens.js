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
    let openCurly = 0;
    let closeCurly = 0;
    let openSquare = 0;
    let closeSquare = 0;
    let openParenth = 0;
    let closeParenth = 0;
    let lastOpen = [];
    

    for (let i = 0; i < input.length; i++) {
        switch(input[i]) {
            case '(':
            lastOpen.push('(');
            openParenth++
                break;
            case ')':
                if (lastOpen.pop() !== '(') {
                    return false;
                }
                if (openParenth < closeParenth || (openCurly !== closeCurly || openSquare !== closeSquare)) {
                    return false;
                }
            closeParenth++
                break;  
            case '[':
            lastOpen.push('[');
        
            openSquare++
                break;
            case ']':
            if (lastOpen.pop() !== '[') {
                return false;
            }
                if (openSquare < closeSquare || (openCurly !== closeCurly || openParenth !== closeParenth)) {
                    return false;
                }
            closeSquare++
                break; 
            case '{':
        
            lastOpen.push('{');
            openCurly++
                break;
            case '}':
            if (lastOpen.pop() !== '{') {
                return false;
            }

                if (openCurly < closeCurly || (openSquare !== closeSquare || openParenth !== closeParenth)) {
                    return false;
                }
            closeCurly++
                break;                               
        }
    }

    return openCurly === closeCurly 
    && openParenth === closeParenth
    && openSquare === closeSquare;
}

// function balancedParens(input){
//     let countOpen = 0;
//     let countClose = 0;

//     let parenthResult = balancedBracket(input, '(', ')')
//     let squareResult = balancedBracket(input, '[', ']');
//     let curlyResult = balancedBracket(input, '{', '}');

//     return parenthResult && squareResult && curlyResult;
//     // return countOpen === countClose;
// }

// function balancedBracket(input, open, close){
//     let countOpen = 0;
//     let countClose = 0;

//     for (let i = 0; i < input.length; i++) {
//         if(input[i] === open) {
//             countOpen++
//         } else if (input[i] === close && countOpen > countClose) {
//             countClose++
//         }
//     }

//     return countOpen === countClose;
// }

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
module.exports = balancedParens;
