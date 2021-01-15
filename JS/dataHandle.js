/*
 * @Author: your name
 * @Date: 2021-01-15 18:11:01
 * @LastEditTime: 2021-01-15 22:57:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/dataHandle.js
 */
var color = ['red','green','purple']
var number = [3,-4,2,1,-6]
console.log(color.toString())
console.log(color.toLocaleString())
console.log(number.sort((a,b)=>{ 
    console.log(a,b)
    return a - b }))
const lit = number.keys()
console.log(lit)
for(let index of number.keys()){
    console.log(index)
}