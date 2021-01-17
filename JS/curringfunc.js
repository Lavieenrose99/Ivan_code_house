/*
 * @Author: your name
 * @Date: 2021-01-16 22:14:10
 * @LastEditTime: 2021-01-17 00:55:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/curringfunc.js
 */

function add(num1,num2){
    return num1 + num2
}
 function curry(fn){
     var args = Array.prototype.slice.call(arguments,1)
     return function(){
         var innerArgs = Array.prototype.slice.call(arguments)
         var finalArgs = args.concat(innerArgs)
         return fn.apply(null,finalArgs)
     }
 }
 var curr = curry(add,4)
 console.log(curr(4))// output: 8

 const Introduce = name=>company=>job=>{
     return `${name}是${company}的${job}!`
 }
 console.log(Introduce('Ivan')('古哥')('前端菜鸡'))
 //output: Ivan是古哥的前端菜鸡!

 const fn1 = num => num + 1
 const fn2 = num => num * 2
 /* ...resf ES6的rest参数 */
 const pipe = (...resf) => x => resf.reduce((data,fn)=>fn(data),x)
 const reslut = pipe(fn1,fn2)(2)
 console.log(reslut)
 /*  fn2(fn1(2))这个就是调用过程  */