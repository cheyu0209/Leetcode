/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
   /* 預先算好連續的合 */
    this.sum = [];
    var sumtmp = 0;
    for(i=0; i<nums.length; i++) {
        sumtmp += nums[i];
        this.sum.push(sumtmp);
        //this.sum = sumtmp;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    /* 算範圍時再相減 */
    if(i === 0)
        return this.sum[j];
    else
        return this.sum[j] - this.sum[i-1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */



/* 一般計算方式，超時 */
/*
var NumArray = function(nums) {
    this.nums = nums;
};

NumArray.prototype.sumRange = function(i, j) {
    var sum = 0;
    for(let tmp=i; tmp<=j; tmp++)
        sum += this.nums[tmp];
    return sum;
};
*/



// https://leetcode.com/problems/range-sum-query-immutable/description/
// https://leetcode.com/submissions/detail/117007193/
