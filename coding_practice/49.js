// 121. Best Time to Buy and Sell Stock

let prices = [7, 1, 5, 3, 6, 4];
function abc(prices) {
  let lowest = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (lowest > prices[i]) {
      lowest = prices[i];
    }
    if (profit < prices[i] - lowest) {
      profit = prices[i] - lowest;
    }
  }

  return profit;
}

console.log(abc(prices));
