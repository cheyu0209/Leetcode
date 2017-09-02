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

    if(head == null){return null}
    var current = head;
    var bool = true;
    while(current.next != null){
        bool =true;
        if(current.val == current.next.val){
            if(current.next.next != null){
                if(current.next.val == current.next.next.val){
                    bool = false;
                }
                current.next.val = current.next.next.val;
                current.next = current.next.next;
            }
            else{
                current.next = null;
                break;
            }
        }
        if(bool){
            current = current.next;
        }
     }
    return head;

};



// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
// https://leetcode.com/submissions/detail/116590115/
