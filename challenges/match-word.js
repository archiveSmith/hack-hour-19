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
  // return str.match(/[^a-zA-Z]/gi).join('');
  // let result = [];
  // let check = '';
  // return 'a'.match(/[a-zA-Z]/gi);
  for(var i = 0; i < str.length; i++){
    // console.log(str[i].toString());
    console.log(str[i].toString().match(/[a-zA-Z]gi/));
    // if(str[i].match(/[a-zA-Z]gi/)){
    //   console.log('hello');
    // }
}
    // if(check == str.match(/^a-zA-Z/)){
    //   result.push(check);
    //   check = '';
    // }
    // if(str[i].match(/a-zA-Z/)){
    //   check += str[i];
    // }

  // }
  //
  // return result;
}
console.log(matchWord('laksjdo_02-klasdf'));
module.exports = matchWord;
