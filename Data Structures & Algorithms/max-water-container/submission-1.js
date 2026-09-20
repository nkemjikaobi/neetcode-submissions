class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // At index 0 and 7 => 7 * nums[0] OR nums [7] => 7 * 1 = 7
        const store = new Set();
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const containerSize = (right - left) * Math.min(heights[left], heights[right]);
            store.add(containerSize)

            if(heights[left] < heights[right]) left++;
            else if (heights[left] > heights[right]) right--;
            else {
                left++;
                right--;
            }
        }
        return Math.max(...store)
    }
}
