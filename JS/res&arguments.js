/*
 * @Author: your name
 * @Date: 2021-01-16 21:40:14
 * @LastEditTime: 2021-01-17 12:48:45
 * @LastEditors: Please set LastEditors
 * @Description: res参数代替arguments
 * @FilePath: /ivan个人练习代码/JS/res&arguments.js
 */

 const func1 = (...res)=>{
     return res.reduce(function(pre,cur){
         return pre + cur
     })
 }
 function func2(){
     /* 
     类数组对象要先转换成数组
     */
    return Array.prototype.slice.call(arguments).reduce(function(pre,cur){
         return pre + cur
     })
    
 }
 console.log(func1(1,3,4,5))
 console.log(func2(1,3,4,5))

