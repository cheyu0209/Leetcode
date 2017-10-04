/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    /* Solution 1 */
    // 將整個 tree 的右半部反轉後再作比較
    if(root === null || (root.right === null && root.left === null) ){
        return true;
    }

    root.right = revertTree(root.right);
    return isSameTree(root.left, root.right);

    function revertTree(node) {
        if(node === null || node.left === null && node.right === null)
            return node;
        var temp = revertTree(node.left);
        node.left = revertTree(node.right);
        node.right = temp;
        return node;
    }

    function isSameTree(left, right) {
        if(left === null && right=== null)
            return true;
        if(left === null && right !== null || right === null &&left !== null)
            return false;
        if(left.val !== right.val)
            return false;

        return isSameTree(left.right, right.right) && isSameTree(left.left, right.left)
    }

    /* Solution 2 */
    // 將 tree 拆成母節點跟兩個子節點做遞迴比較
    /*
    function isAMirror(a,b){
        if(a === null && b === null)
          return true;
        if(a !== null && b === null)
          return false;
        if(b !== null && a === null)
          return false;
        if(a.val !== b.val)
          return false;
        return
          isAMirror(a.left,b.right) && isAMirror(a.right,b.left);
    }

    if(root===null)
      return true;

    return isAMirror(root.left,root.right);
    */
};



// https://leetcode.com/problems/symmetric-tree/description/
// https://leetcode.com/submissions/detail/121952735/
