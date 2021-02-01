/*
 * @Author: your name
 * @Date: 2021-01-28 01:21:59
 * @LastEditTime: 2021-01-28 01:30:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/iterator.js
 */
let arr = ['a','b','c']
let iter = arr[Symbol.iterator]()
console.log(iter.next())
iter.next()