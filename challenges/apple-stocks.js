/**
//  *  I have an array stock_prices_yesterday where:
//  *
//  *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
//  *    - The values are the prices in dollars of Apple stock at the time
//  *
//  *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

// each index is minutes past 9:30am
//

function bestProfit(stock_prices_yesterday) {
  let minIndex = 0;
  let maxIndex = 1;
  let minPrice = 0;
  let maxProfit = 0;
  const arr = stock_prices_yesterday;

  // if there are no 2 prices to compare there is no profit or if array doesnt exist then return 0
  if (arr.length < 2 || !arr) return 0;

  // iterate through the array and find the actual minPrice by comparing each iterated item in the array with the minPrice index at 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minPrice]) {
      // current minPrice with index of i (ex: 2)
      minPrice = i;
    }

    // new best profit
    // compare each difference in the array
    // if the difference of array at maxIndex and array at minIndex is < the difference of each item and the item at minPrice index
    // then the maxIndex is i
    // minIndex is minPrice
    // (12 - 10) < arr[i] - 5
    if (arr[maxIndex] - arr[minIndex] < arr[i] - arr[minPrice]) {
      // console.log('::', i, minIndex, maxIndex, minPrice);
      maxIndex = i;
      minIndex = minPrice;
    }
  }
  maxProfit = arr[maxIndex] - arr[maxIndex];
  return maxProfit;
}

const stock_prices_yesterday = [10, 12, 5, 8, 11, 9, 10];
console.log(bestProfit(stock_prices_yesterday));

module.exports = bestProfit;
