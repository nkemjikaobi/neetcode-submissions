class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //tab a cat
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphaNumeric(s[left])) left++;

            while (left < right && !this.isAlphaNumeric(s[right])) right--;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }

    isAlphaNumeric(char) {
        const pattern = /^[a-z0-9]$/i;

        return pattern.test(char);
    }
}
