/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var map=[];
    var tmp;

    /* 將 nums 與 map 的 index 與 value 相互對應 */
    for(i=0; i<nums.length;i++)
        map[ nums[i] ] = i;

    /* target-nums 如果存在，則 map 有對應的值 */
    for(i=0; i<nums.length-1; i++)
    {
        tmp = target-nums[i];
        // 確認其值存在且非原值
        if(map[tmp] && (map[tmp] != i))
            return [i, map[tmp]];
    }

};



// https://leetcode.com/problems/two-sum/description/
// https://leetcode.com/submissions/detail/115932712/
