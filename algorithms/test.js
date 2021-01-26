/*
 * @Author: your name
 * @Date: 2021-01-25 17:05:45
 * @LastEditTime: 2021-01-25 17:12:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/test.js
 */
let Obj1 = Obj2 = {name: 'cjz'}
Obj1.name = 'gyw'
console.log(Obj1,Obj2)
let count = 10
let start = 0
// while(--count){ //--count是减了之后再判断会少一次
//     console.log(count)
// }
// while(start++<count){
//     console.log(start)
// }
for(let i = 0;i<10;++i){ //先判断，再执行，执行完成之后再i++
    console.log(i)
}