/*
 * @Author: your name
 * @Date: 2021-03-12 20:21:31
 * @LastEditTime: 2021-03-13 00:24:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/对象/propotery.js
 */

//  const Obj = function(){}
//  const student = function(){}
// student.prototype.name = 'cjz'
// // Obj.prototype = Object.create(student.prototype)

//    Object.setPrototypeOf(Obj,student)
//  console.log(Obj.__proto__.__proto__)
 //student

 function Father(){

 }
 Father.prototype.name = 'cjz'

 let child = new Father 
 console.log(child.__proto__.__proto__)

 const obj = {}
 console.log(obj.__proto__)