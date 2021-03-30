/*
 * @Author: your name
 * @Date: 2021-03-03 20:07:04
 * @LastEditTime: 2021-03-03 20:08:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/对象/api.js
 */
const test = { a: 1, b: 2}
const test1 = Object.assign(test,{c : '777'})
console.log(test1,test)//{ a: 1, b: 2, c: '777' } { a: 1, b: 2, c: '777' }