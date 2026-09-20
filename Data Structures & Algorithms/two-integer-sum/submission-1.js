class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length < 2) return [];

        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i]
            if(map.has(difference)) return [map.get(difference), i]
            
            map.set(nums[i], i)
        }
    }
}
