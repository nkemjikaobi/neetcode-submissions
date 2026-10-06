class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";

        for (const str of strs) {
            encodedString += `${str.length}#${str}`;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //12#Worldinhoilk5#Hello

        const result = [];
        let left = 0;
        let right = left;

        while (left < str.length) {
            // Let us try to find #
            while (str[right] !== "#") {
                right++;
            }

            // Everything that was before # is the length
            const length = Number(str.slice(left, right));

            // Word starts after the #
            const wordStart = right + 1;
            const wordEnd = wordStart + length;

            result.push(str.slice(wordStart, wordEnd));

            left = wordEnd;
            right = wordEnd;
        }

        return result;
    }
}
