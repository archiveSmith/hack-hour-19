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
  let strArr = str.split(/[^a-zA-Z]/g)
  strArr = strArr.filter(el => el !== '');
  strArr = strArr.map(el => el.toLowerCase());

  while(strArr.length > 1){
    let match = strArr.findIndex(el => el === strArr[0].split('').reverse().join(''))
    if(match === -1){
      return false;
    }
    strArr.splice(match,1)
    strArr.splice(0,1)
  }

  return strArr.length === 1 ? false : true;
  
}

module.exports = matchWord;
