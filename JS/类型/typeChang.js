/*
 * @Author: your name
 * @Date: 2021-03-14 10:33:53
 * @LastEditTime: 2021-03-14 12:41:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/类型/typeChang.js
 */


 let str = String(123)
console.log(typeof str)
let obj = {}
let func = function A(){}
console.log(Boolean(obj))
console.log(String({}))
console.log(String(Symbol()))
console.log(String(func))
console.log(String([1,3,4]))
console.log(Number([1,2])) //只有数组里面存在一个数的时候才是转换成数字，或者是空数组的时候转化成0，其他时候都是转化成非数字


console.log('1' + 1 + [12,1])
console.log([1,32,3] + 1)
console.log(false + true)

console.log(undefined == null)
console.log(11 == '11') //字符串会转化成数字
console.log(true == 1) //boolean会转化成数字
console.log([] == ![]) //![]=> false false=>0 []=>0 