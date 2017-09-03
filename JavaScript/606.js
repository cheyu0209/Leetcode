/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} t
 * @return {string}
 */
 var tree2str = function(t) {

    if(!t)
        return "";

    var ans = t.val;
    if(!t.left && t.right) {
        ans += "()";
    }
    if(t.left) {
        ans += "(" + tree2str(t.left) + ")";
    }
    if(t.right) {
        ans += "(" + tree2str(t.right) + ")";
    }
    return ans.toString();

}



// https://leetcode.com/problems/construct-string-from-binary-tree/description/
// https://leetcode.com/submissions/detail/116870154/
