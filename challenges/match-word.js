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
  if (str.length === 0) return true;
  const wordArray = str.replace(/[^a-zA-Z ]/g, ' ').trim().split(' ').filter(word => word.length > 0);
  const wordStack = [];
  let top = -1;
  for (let i = 0; i < wordArray.length; i += 1) {
    if (wordStack[top] !== wordArray[i].split('').reverse().join('')) {
      top += 1;
      wordStack[top] = wordArray[i];
    } else {
      top -= 1;
      wordStack.pop();
    }
  }
  return wordStack.length === 0;
}

module.exports = matchWord;
