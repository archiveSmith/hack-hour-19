// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", i.e. the same keyword backwards. For this problem we'll check that all words 
// in a string are "closed". Write a function that takes a string and returns true if every word is closed by its 
// backwards counterpart. Words must be separated by space or punctuation.


function matchWord(str) {
  let output = [];
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z]/gi)) {
      output.push(arr[i]);    
    }
  }
  console.log(output);
}
matchWord('__END_DNE-----');//  -> true
// matchWord('__ENDDNE__');//  -> false       (not separated by a space)
// matchWord('IF()()fi[]');//  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');//  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');//  -> true
// matchWord('');//  -> true
module.exports = matchWord;
