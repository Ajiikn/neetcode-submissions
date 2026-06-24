class Solution {
   hasDuplicate(nums) {
        const mySet = new Set(nums)
        const myArray = [...mySet]
            if(nums.length === myArray.length) {
                return false
            }
        return true
    }
}