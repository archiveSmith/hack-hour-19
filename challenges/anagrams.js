/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// function anagrams(str) {
//   if (str.length === 1) return [str];
//   let arr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     let strcpy = str.slice();
//     let char = strcpy[i];
//     let rest = strcpy.substring(0, i) + strcpy.substring(i + 1);
//     let perm = anagrams(rest);
//     perm.forEach(i => arr.push(char + i));
//   }
//   return arr;
// }

function anagrams(str){
  if(str.length === 1){ return [str]}
  let arr = []
  for(let i = 0; i < str.length; i++){
    let strcpy = str.slice()
    let char = strcpy[i]
    let rest = strcpy.substring(0,i) + strcpy.substring(i+1)
    
    let perm = anagrams(rest)
    arr.push(...perm)
    
  }
  arr.push(str)
  
  return arr
}


console.log(anagrams('cat'))



module.exports = anagrams;
