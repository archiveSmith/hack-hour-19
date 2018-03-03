/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function palindrome(str){
  if(str.length <= 1){ return true }
  let first = str[0];
  let last = str[str.length-1];
  if(first == last){
    return palindrome(str.substring(1,str.length-1))
  }
  return false
}

function swap(str, i, j){
  let temp = str[i]
  str[i] = str[j]
  str[j] = temp
  return str
}

function permPalin(str) {
  if(str.length === 2){
    return [swap(str,0,1)]
  }
  if(str.length === 1){
    return [str]
  }

  for(let i=0; i<str.length; i++){
    let letter = str[i]
    let subarr = str.split('').splice(i,1)
    console.log(str.split('').splice(1,1))
    let perms = permPalin(subarr)
    return perms.map(i => letter + i)
  }
    
}

console.log(permPalin('abcd'))

//module.exports = permPalin;
