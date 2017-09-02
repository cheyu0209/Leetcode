/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var sum=0;

    /*
    字串排序
    nums.sort();
    ex: 2, -7, -2, 6 -> -2, -7, 2, 6
    */

    // 數值排序
    nums.sort( function(a, b) {return a - b;} );

    for(i=0; i<nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
};



// https://leetcode.com/problems/array-partition-i/description/
// https://leetcode.com/submissions/detail/116092084/
