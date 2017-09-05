/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    /* 只保留英文字母與數字，並轉為小寫 */
    var txt=s.replace(/[^\w\/]/ig,'').toLowerCase();
    for(i=0; i<=txt.length/2; i++) {
        if(txt[i] === txt[txt.length-1-i])
            continue;
        else
            return false;
    }
    return true;

    /*
    var txt=s.replace(/[^\w\/]/ig,'').toLowerCase();
    for(i=0; i<=txt.length/2; i++) {
        if(txt[i] !== txt[txt.length-1-i])
            return false;
    }
    return true;
    */

};



// https://leetcode.com/problems/valid-palindrome/description/
// https://leetcode.com/submissions/detail/117152495/
