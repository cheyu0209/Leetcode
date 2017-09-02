/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if( ( Math.log10(n)/Math.log10(3) ) % 1 === 0 )
        return true;
    else
        return false;

};



// https://leetcode.com/problems/power-of-three/description/
// https://leetcode.com/submissions/detail/116366689/
