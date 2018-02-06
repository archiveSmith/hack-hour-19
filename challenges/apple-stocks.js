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
// Best profit is the biggest difference between two prices at time t2 and t1, where t2 > t1
function bestProfit(stock_prices_yesterday) {
  if (!stock_prices_yesterday || !Array.isArray(stock_prices_yesterday))
    return 0;
  let maxProfit = 0,
    smallest = stock_prices_yesterday[0];
  for (let i = 1; i < stock_prices_yesterday.length; i++) {
    console.log('Index', i, 'Price', stock_prices_yesterday[i]);
    if (stock_prices_yesterday[i] < smallest)
      smallest = stock_prices_yesterday[i];
    if (stock_prices_yesterday[i] - smallest > maxProfit)
      maxProfit = stock_prices_yesterday[i] - smallest;
  }
  return maxProfit;
}

module.exports = bestProfit;
