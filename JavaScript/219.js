/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    /* 若 map[nums[i]] 未定義值時將值傳入，已有值則比較陣列差 */

    /* null & undefined */
    /*
    null：variable 的 value 為＂沒有值＂
    undefined：variable 被宣告（初始化），但並未賦值
    */
    
    var map = [];
    for(i=0; i<nums.length; i++) {
        if(map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
            return true;
        }
        map[nums[i]] = i;
    }
    return false;

};



// https://leetcode.com/problems/contains-duplicate-ii/description/
// https://leetcode.com/submissions/detail/117823810/
