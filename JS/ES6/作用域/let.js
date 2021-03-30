/*
 * @Author: your name
 * @Date: 2021-03-15 00:37:23
 * @LastEditTime: 2021-03-15 00:48:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/ES6/作用域/let.js
 */


 for(var i = 0; i  < 10;i++){
     ~function(i){
     setTimeout(()=>{
         console.log(i)
     })
    }(i)//创建私有作用域 增加了一个作用域保存
 }

 for(let i = 0; i < 10;i++){
     setTimeout(()=>{
         console.log(i)
     })
 }