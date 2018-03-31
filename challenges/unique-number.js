/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  const occurrences = array.reduce((tracker, el) => {
    if (tracker[el]) tracker[el]++;
    else tracker[el] = 1;
    return tracker;
  }, {});
  const keys = Object.keys(occurrences);
  let single;
  keys.forEach(key => {
    if(occurrences[key] === 1) single = key;
  });
  return single;
}
console.log(uniqueNumber([1,2,3,2,3])); // -> 2)
module.exports = uniqueNumber;
