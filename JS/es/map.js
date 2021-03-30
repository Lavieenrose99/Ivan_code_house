/*
 * @Author: your name
 * @Date: 2021-02-23 23:15:04
 * @LastEditTime: 2021-03-02 14:50:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/es/map.js
 */
let arr = new Map([['Miceal',120],['Bob',12],['Michael', 95], ['Bob', 75], ['Tracy', 85]])
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
a.push('D')
for (var x of a) { // 遍历Array
    console.log(x);
}
// for (var x of s) { // 遍历Set
//     console.log(x);
// }

arr.set('dd',99)
// for(let key of arr){
//     console.log(key[0],key[1])
// }
console.log(arr.entries().next().value[0])//最早的
