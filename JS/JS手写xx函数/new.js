/*
 * @Author: your name
 * @Date: 2021-02-01 15:09:53
 * @LastEditTime: 2021-02-01 16:08:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS手写xx函数/new.js
 */
// function New(Constructor, ...args){
//     let obj = {};   // 创建一个新对象
//     Object.setPrototypeOf(obj, Constructor.prototype);  // 连接新对象与函数的原型
//     return Constructor.apply(obj, args) || obj;   // 执行函数，改变 this 指向新的对象
// }

// function Foo(a){
//     this.a = a;
// }

// New(Foo, 1);  // Foo { a: 1 }

// function New(){
//     let obj = {}
//     console.log(arguments)
//     let Constructor = Array.prototype.shift.call(arguments) //shift会改变原始数组
//     console.log(Constructor.prototype)
//      obj.__proto__ =  Constructor.prototype
//      console.log(arguments)
//      let ret = Constructor.apply(obj,arguments) //相当于将obj执行A里面的东西但是this指向obj
//      return typeof ret === 'object' ? ret : obj
// }

function A(a,b){
    this.a = arguments[0]
    this.b = arguments[1]
}

// let B = New(A,3,4)
// console.log(B)
A.prototype.name = 'cjz'

function NewSe(func,...agrs){
    const obj = {}
    obj.__proto__ = func.prototype
    let ret = func.apply(obj,agrs)
    return typeof ret === 'object' ? ret : obj

}

let C = NewSe(A,3,4)
console.log(C.__proto__)


