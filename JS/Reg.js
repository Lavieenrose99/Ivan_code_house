/*
 * @Author: your name
 * @Date: 2020-12-09 00:44:36
 * @LastEditTime: 2020-12-19 14:53:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/Reg.js
 */
let Reg = new RegExp("^a","g")
let Reg1 = new RegExp("(\\D|[\@])\+","g")
let Reg2 = new RegExp("(style)","g")
let str = 'bat, cad, dad@sdad,sdas1111da'
let str2 = '<div style><span style="sdsd"></span></div>'
console.log(str.replace(Reg1,'fuck'))//regex+pattern
console.log(str.match(Reg1))//regex
console.log(Reg1)
console.log(str2.replace(Reg2,'fuck'))