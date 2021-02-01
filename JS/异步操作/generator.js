/*
 * @Author: your name
 * @Date: 2021-01-30 23:15:49
 * @LastEditTime: 2021-01-30 23:49:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/异步操作/generator.js
 */

 function* g1(s1){
      let y = 2 * (yield s1) 
      let x = yield (y * 2)
      return x + y
 }

 let g2 = g1(7)
 console.log(g2.next())
 console.log(g2.next(6))
 console.log(g2.next(7))