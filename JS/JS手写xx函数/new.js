/*
 * @Author: your name
 * @Date: 2021-02-01 15:09:53
 * @LastEditTime: 2021-03-15 00:36:54
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

function Z(){
    this.name = 'cz'
    return {
        cjz: '666'
    }
}

function Create(origin,...args){
    const obj = {}
    obj.__proto__ = origin.prototype //对象的原型链指向对象原型
    let ret = origin.apply(obj,args) //显式绑定
    return ret instanceof Object === true ? ret : obj
}

const copyZ = new Z() //返回如果是一个对象的话那么调用构造函数返回的是返回的对象

console.log(copyZ)


function Create1(origin,...args){
    const obj = {}
    obj.__proto__ = origin.prototype
    let ret = origin.apply(obj,args)
    return ret instanceof Object ? ret : obj
}

const bindObj = {
    name: 'cjz'
}
const ObjNew = Object.create(bindObj)
console.log(ObjNew.name)




