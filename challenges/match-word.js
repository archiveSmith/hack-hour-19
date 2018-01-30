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

/*
Plan:
  Overall (intuition tells me that this can be solved by recursion)
  1. Create an array/object that contains all the possible
  2. Make the string case insensitive and split/remove everything that are not words.
  3. Find the first occurrence of matching statements
  4. Check to see if a reverse of that matching statement is present from the
     back.
  5. If not available, return false. If available, splice the substring from
     front and back and rerun matchWord. Run until str.length === 0;
*/


function matchWord(str) {
  if (str.length === 0) return true;

  const cleaned = str.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ' ').trim().split(/\s+/);

  if (cleaned.length % 2 !== 0) return false;

  for (var i = 0; i < cleaned.length; i++) {
    if (cleaned[i] !== undefined) {
      const reverse = cleaned[i].split("").reverse().join("");
      const position = cleaned.lastIndexOf(reverse);
      if (position === -1) {
        return false;
      } else if (position !== -1 && position !== i){
        cleaned[i] = undefined;
        cleaned[position] = undefined;
      }
    }
  }

  return true;
}

module.exports = matchWord;
