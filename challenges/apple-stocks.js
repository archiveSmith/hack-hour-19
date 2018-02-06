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
  if(!Array.isArray(stock_prices_yesterday)){
    return 0;
  }
  // let start = stock_prices_yesterday[0];
  // let largest = stock_prices_yesterday.reduce((large, cur) => {
  //   return cur > large ? cur : large;
  // }, stock_prices_yesterday[0]);
  // if(largest < 0) {
  //     return largest < 0 ? 0 : largest;
  // }
  let sorted = stock_prices_yesterday.sort((a,b) => b - a);
  if(sorted[0] < 0){
    return 0;
  }
  if(sorted[1] < 0){
    return sorted[0] + sorted[1];
  }
  return sorted[0] - sorted[1];


}

console.log(bestProfit([4,-3,-4,-1,-3]));
module.exports = bestProfit;
