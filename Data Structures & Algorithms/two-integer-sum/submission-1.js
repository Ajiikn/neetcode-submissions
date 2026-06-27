class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const Notebook = {}
        for (let i=0 ; i,nums.length; i++) {
            let j = target - nums[i]
                if (j in Notebook) {
                    return [i,Notebook[j]]
                }
            Notebook[nums[i]] = i
        }
        return []
    }
}
