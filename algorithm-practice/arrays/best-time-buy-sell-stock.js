/*
You are given an integer array prices where prices[i] is the price of
a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock.
You can only hold at most one share of the stock at any time.
However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.
*/

// LEVEL 1 - ONE BUY + SELL
/* Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5
*/
var maxSingleProfit = function (prices) {
  let profit = 0;
  for(let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
        const currentProfit = prices[j] - prices[i];
        if (currentProfit > profit) {
          profit = currentProfit;
        }
    }
  }
  return profit;
};

console.log(maxSingleProfit([7, 1, 5, 3, 6, 4]))


// LEVEL 2 - MULTIPLE TRANSACTIONS
// must sell the stock before you buy again
/* Input: prices = [7, 1, 5, 3, 6, 4]
Output: 7
*/
var maxMultiTransactionProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i+1]) {
      profit += prices[i+1] - prices[i];
    }
  }
  return profit;
};
console.log(maxMultiTransactionProfit([7, 1, 5, 3, 6, 4]))
