var maxProfit = function(prices) {
  let [left, right, max] = [0, 1, 0];

  while (right < prices.length) {
    const betterBuyPrice = prices[right] <= prices[left];
    if(betterBuyPrice) left = right;

    const profit = prices[right] - prices[left]

    max = Math.max(max, profit);
    right++
  }
  return max;
};

//Time: O(N)
//Space: O(1)