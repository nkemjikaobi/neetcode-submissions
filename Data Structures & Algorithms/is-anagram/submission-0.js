class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const count = new Array(26).fill(0);

        // since we are using lower case letters
        const baseLetter = 'a'.charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            const sCharAt = s[i].charCodeAt(0);
            const tCharAt = t[i].charCodeAt(0);

            count[sCharAt - baseLetter]++;
            count[tCharAt - baseLetter]--;
        }

        return count.every(c => c === 0);
    }
}
