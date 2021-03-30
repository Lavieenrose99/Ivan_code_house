/*
 * @Author: your name
 * @Date: 2021-03-10 15:43:00
 * @LastEditTime: 2021-03-10 16:12:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/ES6/generator.js
 */

 function* asyncFun(value){
     let value1 = yield value * 2
     let value2 = yield value1
     yield value2
 }

 let func1 = asyncFun(9) //创建一个迭代器然后立刻冻结

 console.log(func1.next())//每次调用next立刻解冻然后跳到下个yiled前面
 console.log(func1.next(4)) //返回的结果取决于next的传参
 console.log(func1.next(7))
 console.log(func1.next(7))