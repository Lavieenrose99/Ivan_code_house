/*
 * @Author: your name
 * @Date: 2021-03-09 14:39:36
 * @LastEditTime: 2021-03-14 15:20:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/ES6/proxy.js
 */

// const handler = {
//     get: function(obj, prop) { //传入两个属性第一个是代理对象第二个是访问属性
//         console.log(obj,prop)
//         return prop in obj ? obj[prop] : 37;
//     }
// };
// const Obj = { name: 'cjz'}
// const p = new Proxy(Obj, handler);

// p.name

// const arrObj = { //给对象添加可遍历属性
//     [Symbol.iterator]: function(){
//         const _this = this
//         //也可使用: keys = Object.getOwnPropertyNames(this)
//         const keys = Object.keys(this)
//         let index = 0
//         return {
//             next(){
//                 return {
//                     value: _this[keys[index++]],
//                     done: index>keys.length
//                 }
//             }
//         }
//     },
//     name: 'cjz',
//     data: 666,
//     job: 'google'
// } 


// for(let key in arrObj){
//     console.log(key)
// }

// for(let data of arrObj){
//     console.log(data)
// }

const handler1 = {
    get: function(target,prop,proxy){
        console.log(target,prop,proxy)
        return Reflect.get(target,prop)
    }
}

const Proxy1 = new Proxy({name:'cjz'},handler1) //Reflect只是一个内置对象是用来提供方法的

const name = Proxy1.name
console.log(name)

// const Obj1 = {
//     name: 'cjz',
//     job: 'ali'
// }
// function fun1(){
//     this.name = 1
// }
// fun1.prototype.job = 'ali'
// console.log(fun1.hasOwnProperty('name')) //true
// console.log(fun1.hasOwnProperty('job')) //true
// console.log(fun1.__proto__) //true

const K  = Symbol()
const L = Symbol()

const conObj = {
    [K]: 1,
    [L]: 2,
    name: 'cjz',
    use: function(){
        console.log(this[K],11)
    }
}
conObj[K] = 2

for(let key in conObj) console.log(key,'c') //symbol不会被遍历出来

const nameSet = Reflect.ownKeys(conObj) //使用这个方法可以遍历出symbol属性
//或者使用
const nameSet1 = Object.getOwnPropertyNames(conObj).concat(Object.getOwnPropertySymbols(conObj))
console.log(nameSet)
console.log(nameSet1)
console.log(conObj[K],conObj) 