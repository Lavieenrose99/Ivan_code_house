/*
 * @Author: your name
 * @Date: 2021-01-23 01:55:32
 * @LastEditTime: 2021-01-25 17:05:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/chain.js
 */

 主要是要指定next
var reverseList = function(head) {
      let prev = null;
      let curr = head;
      while (curr) {
          const next = curr.next; //保存
          curr.next = prev; //指定当前节点指向
          prev = curr; //完成指向，当前节点变成前置节点
          curr = next; //后节点向前
      }
      return prev; //考虑实际的遍历情况得出，输出最后的当前节点就好
  };

  var swapPairs = function(head) {
    if(head == null || head.next == null)
    return head
   var p = record = new ListNode()
   record.next = head
   p.next = head
   var node1,node2
   while((node1 = p.next)&& (node2 = p.next.next)){
     let next = node2.next
     node2.next = node1
     node1.next = next
       p.next = node2
       p = node1
   }
     return record.next
};

var reverseBetween = function(head, m, n) {
    const count = n - m;
    var  start = record = new ListNode()
     var pre , cur , end, front
     start.next = head
   for(var i = 0 ;i < m -1;i++){
      start = start.next
   }
    pre = start
    cur = start.next
    end = start.next
    front = start.next.next;
   for(var j = 0; j <  count; j++){
       const next = front.next
         front.next = cur
         cur = front
         front  = next
   }
   pre.next = cur
   end.next = front
   return record.next
};

 console.log(reverseList([1,2,3,4,5]))


