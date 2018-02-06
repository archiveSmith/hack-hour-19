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
    let array = stock_prices_yesterday,
        length = stock_prices_yesterday.length,
        buyPrice = 0,
        sellPrice = 0,
        profit = 0;

    if (!Array.isArray(stock_prices_yesterday)) return 0;
    if (stock_prices_yesterday < 2) return 0;

    for (let i = 0; i < length; index++) {
        if (buyPrice === 0) {
            buyPrice = array[i];
        } 
        else if (array[i+1] - array[i] > profit) {
            buyPrice = array[i];
            sellPrice = array[i+1];
            profit = array[i+1] - array[i];
        }
        else if (array[i] > sellPrice) {
            sellPrice = array[i];
            profit = sellPrice - buyPrice;
        }    
    }

    return profit;
}

module.exports = bestProfit;
