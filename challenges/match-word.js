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
  let words = str.split(/[^a-z]/i);
  words = words.filter(function(word) {
    return (word.length > 0)
  });

  //console.log(words);

  let i = 0;
  let wordStack = [];
  for (wordx of words) {
    word = wordx.toLowerCase();

    //console.log(word);
    //console.log(reverse(word));
    if (i === 0) {
      wordStack.push(reverse(word));
      i++;
    } else if (wordStack[i-1] !== word) {
      wordStack.push(reverse(word));
      i ++
    } else {
      wordStack.pop();
      i --;
    }
  }
  return (wordStack.length === 0)

}

function reverse(str) {
  let rev = '';
  for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev;
  }
  return rev;
}

function tests() {
  console.log(matchWord('__END_DNE-----'));
  console.log(matchWord('__ENDDNE__'));
  console.log(matchWord('IF()()fi[]'));
  console.log(matchWord('for__if__rof__fi'));
  console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
  console.log(matchWord(''));
}

//tests();

module.exports = matchWord;
