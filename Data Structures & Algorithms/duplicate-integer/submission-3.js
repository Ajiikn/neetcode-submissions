class Solution {
   hasDuplicate(nums) {
        const notebook = {};
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            if (current in notebook) {
                return true;
            }
            notebook[current] = i;
        }
        return false;
}
}