class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const count = new Array(26).fill(0);

        // get the lowercase
        const letterA = 'a'.charCodeAt(0)

        for(let i = 0; i < s.length; i++) {
            const lowerCaseS = s[i].charCodeAt(0);
            const lowerCaseT = t[i].charCodeAt(0);

            count[lowerCaseS - letterA]++
            count[lowerCaseT - letterA]--
        }

        return count.every(c => c === 0)
    }
}
