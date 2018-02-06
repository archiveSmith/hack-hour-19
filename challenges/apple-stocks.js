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
   //this var will hold all of our subtractions from all possible permutations
   let permSubArr = [];

   //check if input is NOT an array, return 0 if so.
   if (stock_prices_yesterday.constructor !== Array) {
     return 0;
   }

   //check if every element of the array is a Number, return 0 otherwise.
   for(let i = 0; i<stock_prices_yesterday.length; i++) {
     if (stock_prices_yesterday[i].constructor !== Number) {
       return 0;
     }
   }

   // for every item in our array...
   for (var i = 0; i<stock_prices_yesterday.length; i++) {

     //for the rest of the items in the array
     for (var j = i+1; j<stock_prices_yesterday.length; j++) {

       //push the subtraction of i - j to the permSubArr.
       permSubArr.push(stock_prices_yesterday[i]- stock_prices_yesterday[j]);
     }//close inner for loop

   }//close the initial for loop.

   //now sort it lowest to highest
   permSubArr.sort((a,b)=>{
     return a-b;
   });

   //if nothing is lower than -1, then there was no way to make a profit
   if (permSubArr[0] >-1) {return 0;}

   //else return the lowest number, but it has to be a positive, so we return
   //it wrapped in Math.abs()
   return Math.abs(permSubArr[0]);

 }

module.exports = bestProfit;
