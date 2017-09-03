/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {

    /* 字串排序 */
    /*
    nums.sort();
    ex: 2, -7, -2, 6 -> -2, -7, 2, 6
    */

    /*數值排序 */
    var sum=0;

    nums.sort( function(a, b) {return a - b;} );

    for(i=0; i<nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
};



// https://leetcode.com/problems/array-partition-i/description/
// https://leetcode.com/submissions/detail/116092084/
