/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    var err_tm = [];

    nums.sort(function(a, b){return a-b});

    for(i=0; i<nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            err_tm[0] = nums[i];
            nums[i+1] = null;
            for(j=i+1; j<nums.length-1; j++)
                nums[j] = nums[j+1];
            break;
        }
    }
    for(i=0, j=1; i<nums.length; i++) {
        if(nums[i] !== i+1) {
            err_tm[1] = i+1;
            break;
        }
    }
    return err_tm;

    /* Solution 2 */
    // 若位置（i）的數字對應（nums[i]-1）是正確的話不變，錯誤則改變位置
    // ex: [0, 1, 2] 對應數字為 1, 2, 3
    // 因此，重複數字位置不改變
    /*
    function swap(nums, i, j) {
        var tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    var i;
    for (i = 0; i < nums.length; i++) {
        while (nums[i] !== nums[nums[i]-1])
          swap(nums, i, nums[i] - 1);
    }
    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1)
          return [nums[i], i+1];
    }
    */

    /* Solution 3 */
    // Math.abs(x) 傳回絕對值
    // 以絕對值建立負數 map，若負數 map 的絕對值有所對應則為重複數
    // 無負數 map 者即為缺少數
    /*
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0)
          res[0] = Math.abs(nums[i]);
	    else
         nums[Math.abs(nums[i]) - 1] *= -1;
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0)
          res[1] = i+1;
    }
    return res;
    */
};



// https://leetcode.com/problems/set-mismatch/description/
// https://leetcode.com/submissions/detail/118860881/
