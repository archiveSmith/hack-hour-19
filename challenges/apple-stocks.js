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
  
    if(stock_prices_yesterday.length === 0 ) { return 0; }
    
  let lowestPrice = stock_prices_yesterday[0];
  let lowTime = 0;
  for(let i = 0; i<stock_prices_yesterday.length; i++) {
      if(stock_prices_yesterday[i] < lowestPrice) {
          lowestPrice = stock_prices_yesterday[i];
          lowTime = stock_prices_yesterday.indexOf(lowestPrice);
      }
  }
  let highestPrice = stock_prices_yesterday[0];
  let highTime = 0;
  for(let j = 0; j<stock_prices_yesterday.length; j++) {
      if(stock_prices_yesterday[j] > highestPrice) {
          highestPrice = stock_prices_yesterday[j];
          highTime = stock_prices_yesterday.indexOf(highestPrice);
      }
  }
   
  
  console.log("highestprice " + highestPrice);
  console.log("lowestPrice " + lowestPrice);
  console.log("lowtime " + lowTime);
  console.log("highTime " + highTime);
  
  
  
  
  }
  bestProfit(stock_prices_yesterday);
module.exports = bestProfit;
