/*
 * @Author: your name
 * @Date: 2021-01-23 01:55:32
 * @LastEditTime: 2021-03-21 17:05:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/chain.js
 */

 //主要是要指定next
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

 var reverseKGroup = function(head, k) {
  let count = 0;
  for(let p = head;p!=null;p = p.next){
      if(p==null&&count<k) return head
      count++
  }
  let groups = Math.floor( count/k )
  let p = newNode = new ListNode()
  p.next = head
  for(let i = 0;i<groups;i++){
      let pre = null
          cur = p.next
          for(let j = 0;j<k;j++){
              let next = cur.next
              cur.next = pre
              pre = cur
              cur = next
          }
          let start = p.next  //理解每个对象在改变前都是一串不会变的地址
          start.next = cur
          p.next = pre
          p = start
  }
     return newNode.next
};

//寻找环的起点


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
var detectCycle = function(head) {
  let mark = new ListNode()  
  mark.next = head
  let fast  = slow = mark

  if(fast.next == null || fast.next.next == null)
  return null
  while(fast && fast.next){
      fast =  fast.next.next
      slow = slow.next
      if(fast === slow){
          let p = mark
          while(p !== slow){
              slow = slow.next
              p = p.next
          }
          return p
      }
      
  }return null
};

//合并两个有序列表

const getChain = (l1,l2)=>{
  
    function merge(l1,l2){  
        
        if(l1 == null) return l2
        if(l2 == null) return l1
        if(l1.val>l2.val){
            l2.next = merge(l1,l2.next)
            return l2 //关键
        }else{
            l1.next = merge(l1.next,l2)
            return l1
        }
    }
    return merge(l1,l2)
}
//合并k个升序链表
//要注意 链表绝对不是简单的数组，本质是一个对象c.next.next.next，
//本题使用的方法只是用数组方法将它的每个节点提取出来之后存储先在处理

var mergeKLists = function(lists){
    let ans  = lists.reduce((cur,val)=>{
         while(val){
           cur.push(val)
           val = val.next     
         }
         return cur
     },[]).sort((data1,data2)=>data1.val - data2.val).reduceRight((p,cur)=>(cur.next = p, p = cur,p),null)
     return ans
 }
 

 //判断回文链表
 var isPalindrome = function(head) {  
    let arr = []
    let mark = head
    while(mark){
        arr.push(mark.val)
        mark = mark.next
    }
    for(let a = 0,b = arr.length - 1;a < b;a++,b--){
        if(arr[a]!==arr[b]){
            return false
        }
    }
    return true

};

var mergeTwoLists = function(l1, l2) {
    if(l1==null) return l2
    if(l2==null) return l1
    if(l1.val<l2.val){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    }
};  

//快慢指针
var hasCycle = function(head) {
    if(!head || !head.next){
        return false
    }
    let fast = new ListNode()
    let slow = new ListNode()
    fast = head.next
    slow = head
    while(fast != null && fast.next != null){   
        if(fast === slow){
            return true
        }
        fast = fast.next.next
        slow = slow.next
    }
        
     
    return false
};


const Void = {

}

console.log(Void.next)