class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = [];
        for (const str of strs) {
            const lengthOfWord = str.length;
            const delimiter = "#";
            let encodedWord = `${lengthOfWord}${delimiter}${str}`;

            result.push(encodedWord);
        }

        console.log("result", result);

        return result.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // "5#Hello5#World"
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // if j is not #, just keep moving
            while (str[j] !== "#") {
                j++;
            }

            // a common mistake would be to use str[i] but if the length was
            // 12#HelloWorld!!, it will fail cos the length will be 1 instead of 12
            let length = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + length;
            result.push(str.substring(i,j))

            // let i catch up to j
            i = j
        }

        return result;
    }
}
