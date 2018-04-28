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
  if (typeof n !== 'number') return;
  let ways = [];
  ways.push(1);
  ways.push(1);
  for (let i = 2; i <= n; i ++) {
    ways.push(ways[i-1] + ways[i-2]);
  }
  return ways[n];
}

function tests() {
  console.log(countStairs(4));
  console.log(countStairs(5));
  console.log(countStairs(6));
  console.log(countStairs(20));
}

//tests()

module.exports = countStairs;
