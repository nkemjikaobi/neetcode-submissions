class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();
        const baseLetter = 'a'.charCodeAt(0);

        for (let i = 0; i < strs.length;i++) {
            const count = new Array(26).fill(0);
            
            for(const character of strs[i]) {
                const characterCode = character.charCodeAt(0);
                const index = characterCode -  baseLetter;

                count[index]++;
            }

            const key = count.toString();

            if(result.has(key)) {
                result.get(key).push(strs[i])
            }
            else {
                result.set(key, [strs[i]])
            }
        }

        console.log("hhh", Array.from(result))
        return Array.from(result.values())
    }
}
