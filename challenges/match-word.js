// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. For this problem we'll check that all words 
// in a string are "closed". Write a function that takes a string and returns true if every word is closed by its 
// backwards counterpart. Words must be separated by space or punctuation.


function matchWord(str) {
  const isMatch = (str1, str2) => str1 === str2;
  if(!str) return true; // invalid input check
  if (typeof str !== 'string') return false; // null/undefined string check 
  const strSplit = str.split(/[^a-z]/i).filter(line => line !== ''); 

  const output = [];
  for (let i = 0; i < strSplit.length; i++) {
    if (!output.length || !isMatch(strSplit[i].toLowerCase(), output[output.length - 1])) {
      output.push(strSplit[i].toLowerCase().split('').reverse().join(''));
    } else {
      output.pop();
    }
  }
  return !output.length; 
}
console.log(matchWord('__END_DNE-----'));//  -> true
console.log(matchWord('__ENDDNE__')); //  -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));//  -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));//  -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));//  -> true
console.log(matchWord(''));//  -> true
module.exports = matchWord;
