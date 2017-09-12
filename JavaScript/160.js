/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    /* 找到第一個交集 */
    /* 相交後鏈結相同，將較長鏈結由頭縮短 */
    var alen = getLen(headA);
    var blen = getLen(headB);

    while(alen > blen) {
        headA = headA.next;
        alen--;
    }

    while(alen < blen) {
        headB = headB.next;
        blen--;
    }

    while(headA !== null) {
        if(headA === headB)
            return headA;
        headA = headA.next;
        headB = headB.next;
    }
    return null;

    function getLen(node){
        var length = 0;
        while(node != null ){
            length++;
            node = node.next;
        }
        return length;
    }
};



// https://leetcode.com/problems/intersection-of-two-linked-lists/description/
// https://leetcode.com/submissions/detail/118357132/
