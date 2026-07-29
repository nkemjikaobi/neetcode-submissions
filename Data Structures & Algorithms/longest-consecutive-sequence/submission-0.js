class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count = 0;
        const numberSet = new Set(nums);

        for(const num of nums) {
            if(!numberSet.has(num - 1)) {
                let current = num;
                let streak = 1;

                while (numberSet.has(current + 1)) {
                    current++
                    streak++;
                }

                count = Math.max(count, streak)
            }
        }

        return count;

    }
}
