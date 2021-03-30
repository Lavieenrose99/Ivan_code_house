/*
 * @Author: your name
 * @Date: 2021-03-13 23:40:26
 * @LastEditTime: 2021-03-14 00:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/设计模式/module.js
 */

 var saveModule = (
     function(){
         var num = 0
         return{
             get: function(){
                 return num
             },
             set: function(newValue){
               num = newValue
               return num
             },
             add: function(){
                 num++
             }
         }
     }
 )()

 console.log(saveModule.get())
 console.log(saveModule.add())
 console.log(saveModule.get())
 console.log(saveModule.set(6)) //防止全局污染并且保存了变量，也是一种闭包的应用方式哦

 function checkInstanceOf(origin,aim){
     let pro = origin.prototype
     let chain = aim.__proto__
     console.log(chain)

     while(chain){
         if(chain === pro){
             return true
         }else{
             chain = chain.__proto__
         }
     }
     return false
 }




 function CheckFun(){

 }
 function B(){

 }
 let son = new CheckFun()
 let b = new B()
 
 console.log(checkInstanceOf(Object,b))
 console.log( b instanceof Object)