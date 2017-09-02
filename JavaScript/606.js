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
    var ans = "";
    if(t == null)
       return "";
    ans += dfs(t);
    return ans.toString();
};

function dfs(t){
    var part = t.val;
    if(!t.left && t.right)
      part += "()";
    if(t.left)
      part += '(' + dfs(t.left) + ')';
    if(t.right)
      part += '(' + dfs(t.right) + ')';
    return part;
};



// https://leetcode.com/problems/construct-string-from-binary-tree/description/
// https://leetcode.com/submissions/detail/116706993/
