class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let left = 0;
        let right = 1;

        while (right < prices.length) {
            if(prices[right] > prices[left]) {
                const diff = prices[right] - prices[left]
                profit = Math.max(profit, diff)
            }
            else if (prices[right] < prices[left]) {
                left = right
            }
            right++
        }

        return profit
    }
}
