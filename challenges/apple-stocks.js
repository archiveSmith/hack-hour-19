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

function bestProfit(stock_prices_yesterday) {
  // find highest and lowest value
  const highestPrice = Math.max(...stock_prices_yesterday);
  const lowestPrice = Math.min(...stock_prices_yesterday);
  const highestInd = stock_prices_yesterday.indexOf(highestPrice);
  const lowestInd = stock_prices_yesterday.indexOf(lowestPrice);

  // if they're in the right order, ya good!
  if (lowestInd < highestInd) {
    return highestPrice - lowestPrice;
  }

  // if not, find the best profit for EACH buy time.
  let profitArray = [];
  for (let i=0; i<stock_prices_yesterday.length-1; i++){
    let bestPrice = Number.NEGATIVE_INFINITY;
    for (let j=i+1; j<stock_prices_yesterday.length; j++){
      bestPrice = Math.max(bestPrice, stock_prices_yesterday[j] - stock_prices_yesterday[i]);
    }
    profitArray.push(bestPrice);
  }

  let result = Math.max(...profitArray);
  if (result > 0) return result;
  if (result <= 0) return 0;
}


module.exports = bestProfit;
