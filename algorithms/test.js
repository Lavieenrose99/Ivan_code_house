/*
 * @Author: your name
 * @Date: 2021-01-25 17:05:45
 * @LastEditTime: 2021-01-27 16:31:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/test.js
 */
let Obj1 = Obj2 = {name: 'cjz'}
Obj1.name = 'gyw'
console.log(Obj1,Obj2)
let count = 10
// let start = 0
// while(--count){ //--count是减了之后再判断会少一次
//     console.log(count)
// }
// while(start++<count){
//     console.log(start)
// }
// for(let i = 0;i<10;++i){ //先判断，再执行，执行完成之后再i++
//     console.log(i)
// }

// console.log(Math.floor(5/2))

// let node = {
//     next: 0
// }

// let node1 = node.next

// node.next = { node:  }

// console.log(node1)

let next = { next: {next:5,value:7},value:6}
let pre = {next: {next:7,value:8}}
let cur = {next:{next:11,value:5}}
let p = {next,value:3}

// let start = p.next //区分引用和值
// p.next = pre
// start.next = cur
// console.log(start)


let start = p //获得p地址
p = pre //重新获得新地址 值和引用要区分啊
start.next = cur
console.log(start,p)
