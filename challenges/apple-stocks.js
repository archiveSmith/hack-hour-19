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

function max(val,stock_prices){
  return stock_prices.reduce((acc,cur)=> (cur > val && cur > acc) ? cur-val : acc, 0);
}

function bestProfit(stock_prices_yesterday) {
  return stock_prices_yesterday.reduce((acc,cur,i)=>{
    let max_profit = max(cur,stock_prices_yesterday.slice(i))
    return max_profit > acc ? max_profit : acc ;
  },0);
}

module.exports = bestProfit;


