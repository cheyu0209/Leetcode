/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

    if(num === 1)
        return true;
    if(num < 1 || num%2===1)
        return false;
    return isPowerOfFour(num/4);

    /* Solution 2 */
    /*
    // 條件一：不為負數
    // 條件二：2 的 n 次方
    // 條件三：num - 1 可以被 3 整除
    return num > 0 && (num & (num - 1)) == 0 && (num - 1) % 3 == 0;
    */

    /* Solution 3 */
    /*
    while(num % 4 == 0 & num != 0){
        num /= 4;
    }
    return num == 1;
    */

};



// https://leetcode.com/problems/power-of-four/description/
// https://leetcode.com/submissions/detail/117518687/
