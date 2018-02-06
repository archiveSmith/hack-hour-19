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
	if (typeof stock_prices_yesterday !== 'object') {
		return 0;
	}

	let max_diff = 0;

	let x = stock_prices_yesterday.reduce(function (a, b){
		if ((b - a) > max_diff) {
			max_diff = (b - a);
		}
		return b;
	}, 0);

	if (max_diff > 0) {
		return max_diff;
	} else {
		return 0;
	}

}

//console.log(bestProfit([500, 200, 1200]));

module.exports = bestProfit;
