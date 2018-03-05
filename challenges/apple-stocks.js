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
    let profitArray = [];
    
    if (!Array.isArray(stock_prices_yesterday)) {return 'input is invalid'};
    
    while(stock_prices_yesterday.length > 1) {
      let currentBuyingPrice = stock_prices_yesterday[0];
      stock_prices_yesterday.shift();
      let highestSellingPrice = stock_prices_yesterday.reduce((acc, ele) => {
        return Math.max(acc, ele);
      });
      profitArray.push(highestSellingPrice - currentBuyingPrice);
    }
    let highestProfit = profitArray.reduce((acc, ele) => {
      return Math.max(acc, ele);
    });
    return highestProfit > 0 ? highestProfit : 'no profit possible';
  }



  // Brute-Force
function bestProfit(stock_prices_yesterday) {
  var best = 0;
  for (var i = 0; i < stock_prices_yesterday.length; i++) {
    for (var j = i; j < stock_prices_yesterday.length; j++) {
      best = Math.max(best, stock_prices_yesterday[j] - stock_prices_yesterday[i]);
    }
  }
  return best;
}


// Better Solution
function bestProfit(stock_prices_yesterday) {
  var maxProfit = 0;
  var possibleProfit = 0;
  var minI = 0, maxI = 0;
  if (stock_prices_yesterday) {
    for (var i = 0; i < stock_prices_yesterday.length; i++) {
      if (stock_prices_yesterday[i] < stock_prices_yesterday[minI]) {
        minI = i;
      }

      possibleProfit = stock_prices_yesterday[i] - stock_prices_yesterday[minI];

      if (possibleProfit > maxProfit) {
        maxProfit = possibleProfit;
        maxI = i;
      }
    }
  }
  return maxProfit;
}

module.exports = bestProfit;
