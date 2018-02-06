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


	function findMaxPrice(stockArr){
		let currentMax = stockArr[0];
		for(let i=1; i<stockArr.length; i++){
			if(stockArr[i]>currentMax){
				return stockArr[i];
			}
		}
		return currentMax; 
	};
	function findMinPrice(stockArr){
		let currentMin = stockArr[0];
		for(let i=1; i<stockArr.length; i++){
			if(stockArr<currentMin){
				return stockArr[i];
			}
		}
		return currentMin; 
	}

	if((stock_prices_yesterday.length <=1) || (Array.isArray(stock_prices_yesterday))){
		return 0;
	}

	let maxPrice = findMaxPrice(stock_prices_yesterday); 
	let minPrice = findMinPrice(stock_prices_yesterday); 

	// if(maxPrice-minPrice <= 0){
	// 	return 0; 
	// }

	return maxPrice-minPrice; 
}

module.exports = bestProfit;
