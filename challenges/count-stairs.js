/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {

  // Use a counter
  let total = 0;

  // Once you reach the top of the staircase, you are done.
  if (n === 0) return total;
  
  // If you have one stair to climb, there is one way to do it.
  if (n === 1) {
    return total + 1;
  }

  // If you have two stairs to climb, there are two ways to do it
  if (n === 2) {
    return total + 2;
  }

  // If you have more than two stairs to climb, you can either start with 1 and add countStairs(n-1) more possibilities or start with 2 and add countStairs(n-2) more possibilities
  if (n > 2) {
    return total + countStairs(n-1) + countStairs(n-2);
  }

  return total;

}

module.exports = countStairs;
