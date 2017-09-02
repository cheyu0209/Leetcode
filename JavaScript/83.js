/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    /* 解題重點：對於連續重複數字的判斷 -> 保留 current 而從 next 與 next.next 下手 */

    /* Solution 1 */    // 傳
    /*
    if(head == null) {
        return null;
    }

    var current = head;
    var bool = true;

    while(current.next != null) {
        bool = true;
        if(current.val === current.next.val){
            if(current.next.next != null){
                if(current.next.val === current.next.next.val) {
                    bool = false;
                }
                // 先傳 value 在傳 link ， value 才不會遺失
                current.next.val = current.next.next.val;
                current.next = current.next.next;
            }
            else {
                current.next = null;
                break;
            }
        }
        if(bool) {
            current = current.next;
        }
     }
    return head;
    */

    /* Solution 2 */
    /*
    if (head === null) {
        return head;
    }
    for (let nd = head, nx = nd.next; nx !== null; ) {
        if (nx.val === nd.val) {
            nd.next = nd.next.next;
            nx = nx.next;
        } else {
            nd = nd.next;
            nx = nx.next;
        }
    }
    return head;
    */

    /* Solution 3 */    // Better One
    if(head == null ) return head;
    if(head.next == null ) return head;

    var cur = head;

    while(cur.next != null) {
        if(cur.val != cur.next.val){
            cur = cur.next;
        }
        else {
            // next.next 若為 null 則結束 while
            cur.next = cur.next.next;
        }
    }
    return head;

};



// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
// https://leetcode.com/submissions/detail/116590115/
