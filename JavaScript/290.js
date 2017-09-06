/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {

    var strcut = [];
    strcut = str.split(" ");

    if(strcut.length !== pattern.length)
        return false;

    /* 以物件型式宣告：key : value */
    var pmap = {};
    var smap = {};
    /* for ... in：pattern 中非 null 的 key */
    for(i in pattern) {
        /* 將 pattern 與 strcut 互為基準比較 */
        /* 避免 pattern 重複或 strcut 重複 */
        if(!pmap[pattern[i]])
            pmap[pattern[i]] = strcut[i];
        else if(pmap[pattern[i]] !== strcut[i])
            return false;

        if(!smap[strcut[i]])
            smap[strcut[i]] = pattern[i];
        else if(smap[strcut[i]] !== pattern[i])
            return false;
    }
    return true;

    /* Solution 2 */    // better
    /*
    let map = {};
    const arr = str.split(' ');
    if (pattern.length > arr.length || !pattern)
        return false;

    for (i=0; i<arr.length; i++) {
        if(!map[pattern[i]])
            map[pattern[i]] = arr[i];
        else if (map[pattern[i]] !== arr[i])
            return false;
    }
	const vals = Object.values(map)
  // for ... of：pattern 中非 null 的 value
	for (let val of vals) {
		if (vals.indexOf(val) !== vals.lastIndexOf(val))
        return false;
    }
    return true
    */

};



// https://leetcode.com/problems/word-pattern/description/
// https://leetcode.com/submissions/detail/117371586/
