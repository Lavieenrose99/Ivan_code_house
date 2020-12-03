/*
 * @Author: your name
 * @Date: 2020-12-03 23:53:51
 * @LastEditTime: 2020-12-04 00:04:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/Object.js
 */

 const Obj1 = new Object()
 Obj1.name = "cjz"
 Obj1.age = 18
 const markName = 'name' 
 console.log(Obj1['name']===Obj1.name)
 console.log(Obj1[markName])
 //js中还可以用方括号表示法来表示对象属性 优点是可以通过变量来访问属性


