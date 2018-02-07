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
	if (typeof stock_prices_yesterday !== 'object' || stock_prices_yesterday.length < 1) {
		return 0;
	}

	let max = Math.max.apply(null, stock_prices_yesterday);
	let indexOfHighPoint = stock_prices_yesterday.indexOf(max);
	let toHigh = stock_prices_yesterday.slice(0, indexOfHighPoint);
	let min = Math.min.apply(null, toHigh); //if not infinity
	console.log(min);

	console.log(max);

}

bestProfit([5,3, 7,4]);

module.exports = bestProfit;
