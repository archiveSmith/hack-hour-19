/*eslint-disable*/
// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // Function checker(char) returns true is char is a letter or false if char is not a letter
  function checker(char) {
    return char.match(/[a-z]/i);    
  }
  let stack = [];
  let word = '';

  // Iterate through the length of the string
  for (let i = 0; i < str.length; i += 1) {
    // While the char is a valid letter
    while (i < str.length && checker(str[i])) {
      // Build the word
      word += str[i];
      i += 1;
    }
    if (word !== ''){
      let index = stack.indexOf(word.split('').reverse().join('').toLowerCase());
    
      // Check if word is a word in the stack spelled backwards
      if (index >= 0) {
        // If the word doesn't correspond with the top most element, then return false
        if (index !== stack.length - 1) {
          return false;
        } else { // Otherwise pop off the top element from the stack
          stack.pop();
        }
      } else { // If the word isn't any word in the stack spelled backwards, then push into the stack
        stack.push(word.toLowerCase());
      }
    }
    word = '';
  }
  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = matchWord;
