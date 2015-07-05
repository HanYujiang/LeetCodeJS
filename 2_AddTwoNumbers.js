/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  var sum = l1.val + l2.val;
  var next1 = l1.next;
  var next2 = l2.next;
  var result = new ListNode(sum%10);
  var l3 = result;
  sum = Math.floor(sum/10);
  while (next1 || next2 || sum!==0) {
    sum += (next1?next1.val:0) + (next2?next2.val:0);
    l3.next = new ListNode(sum%10);
    l3 = l3.next;
    next1 = next1?next1.next:null;
    next2 = next2?next2.next:null;
    sum = Math.floor(sum/10);
  }
  return result;
};
