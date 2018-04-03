/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weight) {
  let memo = [];

  for (let i = 0; i < items.length + 1; i ++) {
    memo.push([]);
    memo[i].push(0);
  }

  for (let i = 0; i < weight; i ++) {
    memo[0].push(0);
  }

  for (let w = 1; w < weight + 1; w ++) {
    for (let j = 1; j < memo.length; j ++) {
      let item = items[ j - 1 ];
      let up = memo[ j - 1 ][w];
      let offset = w - item.weight;
      // console.log(memo[j-1][offset] + item.value);
      let left = (offset < 0) ? 0 : memo[ j - 1 ][offset] + item.value;
      // console.log(up, left);
      memo[j][w] = Math.max(up, left);
    }
  }
  // console.log(memo);
  return memo[memo.length-1][weight];
};

function tests() {
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
  console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])
}

//tests();

module.exports = solveKnapsack;
