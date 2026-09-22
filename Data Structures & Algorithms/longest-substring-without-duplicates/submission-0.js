class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        const seen = new Set();

        while (right < s.length) {
            
            if(!seen.has(s[right])) {
                seen.add(s[right]);
                maxLength = Math.max(maxLength, seen.size)
                right++
            }
            else {
                seen.delete(s[left]);
                left++
            }
        }

        return maxLength
    }
}
