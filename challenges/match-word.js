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
  let arr = str
    .toLowerCase()
    .split("")
    .map(function(elem) {
      if (elem < "a" || elem > "z") {
        return " ";
      } else {
        return elem;
      }
    })
    .join("")
    .split(" ")
    .filter(function(elem) {
      return elem !== "";
    });

  if (arr.length % 2 !== 0) return false;

  return arr.reduce(function(stack, word) {
    if (
      stack[0] ===
      word
        .slice()
        .split("")
        .reverse()
        .join("")
    ) {
      stack.shift();
    } else {
      stack.unshift(word);
    }
    return stack;
  }, []).length
    ? false
    : true;
}

console.log(matchWord(""));

module.exports = matchWord;
