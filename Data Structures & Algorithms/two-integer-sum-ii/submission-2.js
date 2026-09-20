class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (numbers.length < 2) return [];

        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const add = numbers[left] + numbers[right];
            if (add > target) {
                right--;
            } else if (add < target) {
                left++;
            }
            else {
                return [left + 1, right + 1]
            }
        }

        return [left + 1, right + 1];
    }
}
