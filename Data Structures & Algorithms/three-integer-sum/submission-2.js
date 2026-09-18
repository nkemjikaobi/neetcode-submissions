class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort the numbers
        nums.sort((a, b) => a - b)

        let result = [];
        for(let i = 0; i < nums.length; i++) {
            // dont process the same number twice
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if(sum < 0) {
                    left++
                }
                else if (sum > 0) {
                    right--
                }
                else {
                    result.push([nums[i],nums[left], nums[right]])
                    left++
                    right--

                    // dont process the same left number twice
                    while (left < right && nums[left] === nums[left - 1]) left++;
                }
            }
        }

        return result;
    }
}
