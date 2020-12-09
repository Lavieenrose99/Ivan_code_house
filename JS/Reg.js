/*
 * @Author: your name
 * @Date: 2020-12-09 00:44:36
 * @LastEditTime: 2020-12-09 00:57:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/Reg.js
 */
let Reg = new RegExp(".ad","g")
let str = 'bat, cad, dad'
console.log(Reg.exec(str)[0])