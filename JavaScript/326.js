/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

   /* 換底公式 */
   /*
    if( ( Math.log10(n)/Math.log10(3) ) % 1 === 0 )
        return true;
    else
        return false;
    */

    /* 遞迴 */
    if(!n)
      return false;
    if(n === 1)
      return true;
    if((n%3) !== 0)
      return false;
    return isPowerOfThree(n/3);

};



// https://leetcode.com/problems/power-of-three/description/
// https://leetcode.com/submissions/detail/116366689/
