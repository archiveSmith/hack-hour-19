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
    strFilter = str.replace(/[\W_]+/g," ").trim();
    strFilter = strFilter.toLowerCase().split(' ');
    if(strFilter.length % 2 !== 0) return false;
    
    let result = [];
    for (let i = 0; i < strFilter.length; i += 1) {
      result.push(strFilter[i].split('').sort());
    }
    
    for (let j = 0; j < result.length; j += 1) {
      if (result[j].includes(result[j + 1])) {
        return true;
      }
      return false;
    }
    
    //not done yet, but almost there!!
}

module.exports = matchWord;
