/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */



/**
 * input is an array of integers, and a target number
 * output should be a boolean
 */
function subsetSum(array, target) {
  /*
    ok so this is a permutation problem.
    that helps me (slightly) think about how to go about this.
    Every permutation problem I've seen so far has a recursive
    solution. I'll keep that in mind.


  output gets changed only if we hit a match.
  we default to "false" so that if we hit NO matches, we can
  just return the output as is.
  */
  let output = false;
  let temp = 0;

   /**
   * takes nothing as input.
   * IMPURE.. it will change temp to Zero if we
   * don't find a match.
   */
  let makeItOrStartOver = () => {
    if (temp === target) {output = true;}
    else {temp = 0;}
  }


  /**
   * This is where I want to add portions of the input array
   * to our temp
   * I feel really confused about how to go about this one.
   * The following function really only works if the ENTIRE
   * input array adds to the target.
   */
  let addToTemp = () => {
    for (let i = 0; i<array.length; i++) {
      temp += array[i];
    }
    makeItOrStartOver();
  }
  /*
    
  */
  addToTemp();







  return output;
}
module.exports = subsetSum;
