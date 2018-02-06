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
    let yesterdaysPrice;
    let todaysPrice;
    let x;
    let y;
    stock_prices_yesterday.x = yesterdaysPrice;
    stock_prices_yesterday.y = todaysPrice;
    stock_prices_yesterday = stock_prices_yesterday.slice(0, 2)
    console.log(stock_prices_yesterday[0].x)
    console.log(stock_prices_yesterday)
    if (stock_prices_yesterday[0].x < stock_prices_yesterday[1].y) {
        return stock_prices_yesterday[1].y - stock_prices_yesterday[0].x
    } else {
        return 0;
    }
}
console.log(bestProfit([{ 'x': 500 }, { 'y': 700 }]));

module.exports = bestProfit;
