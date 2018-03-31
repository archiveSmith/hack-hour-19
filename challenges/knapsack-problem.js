/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  if (items.length === 0)
    return 0;
  let valueWithCurrent = -Infinity;
  if (weightAvailable - items[0].weight >= 0) {
    valueWithCurrent = items[0].value + solveKnapsack(items.slice(1), weightAvailable - items[0].weight);
  }
  const valueWithoutCurrent = solveKnapsack(items.slice(1), weightAvailable);
  return Math.max(valueWithCurrent, valueWithoutCurrent);
};

// const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
