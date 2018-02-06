/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stockPrices) {
  if (!Array.isArray(stockPrices)) return 0;
  if (stockPrices.length === 0) return 0;

  // only want to look until midnight
  let max = 30 + (60 * 14);
  //console.log(max);

  let len = Math.min(max, stockPrices.length);

  let lowestPrice = stockPrices[0];
  let profit = 0;
  for (let i = 0; i < len; i ++) {
    if (typeof stockPrices[i] !== 'number') return 0;
    let diff = stockPrices[i] - lowestPrice;
    if (diff > profit) profit = diff;
    if (stockPrices[i] < lowestPrice) lowestPrice = stockPrices[i];
  }
  return profit;
}

function tests(){
  let x = 'string';
  console.log(bestProfit(x));
  x = [];
  console.log(bestProfit(x));
  x = [11, 7, 4, 9, 'wrong', 10, 20];
  console.log(bestProfit(x));
  x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(bestProfit(x));
  x = [10, 9, 8, 7, 6, 5, 4];
  console.log(bestProfit(x));
  x = [10, 9, 11, 7, 6, 18, 4];
  console.log(bestProfit(x));
}

//tests();

module.exports = bestProfit;
