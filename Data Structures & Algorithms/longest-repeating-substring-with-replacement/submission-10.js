class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        let map = new Map();
        let longestLength = 0;

        while (right < s.length) {
            const rightChar = s[right];
            map.set(rightChar, (map.get(rightChar) ?? 0 )+ 1); // update the map

            const highestOccuringLetter = Math.max(...map.values())
            const lengthOfSlidingWindow = (right - left) + 1
            
            // ensure we have room to replace characters
            if(lengthOfSlidingWindow - highestOccuringLetter <= k) {
                longestLength = Math.max(longestLength, lengthOfSlidingWindow)
            }
            else {
                const leftChar = s[left];
                map.set(leftChar, map.get(leftChar) - 1)
                left++;
            }

            right++;
        
        }

        return longestLength;
    }
}
