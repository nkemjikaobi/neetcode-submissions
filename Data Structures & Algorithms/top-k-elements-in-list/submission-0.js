class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        for (const [num, freq] of count) {
            // we push the number into the corresponding frequency bucket
            buckets[freq].push(num);
        }

        // console.log("count", count);
        // console.log("bucket", buckets);

        const result = [];

        for (let i = buckets.length - 1; i > 0; i--) {
            //i said i > 0 cos bucket 0 is basically useless
            for (const num of buckets[i]) {
                result.push(num);

                if (result.length === k) return result;
            }
        }

        return result;
    }
}
