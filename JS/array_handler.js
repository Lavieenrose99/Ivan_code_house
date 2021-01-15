/*
 * @Author: your name
 * @Date: 2021-01-13 22:23:08
 * @LastEditTime: 2021-01-15 16:46:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/array_handler.js
 */

const o1 = {
    text: 't1',
    fn: function(){
        return this.text
    }
}
const o2 = {
    text: 't2',
    fn: function(){
       var fn1 = o1.fn
        return fn1()
    }
}
const o3 = {
    text: 't3',
    fn: o1.fn
}
/*
总结如果函数中是被上一级对象调用的那么this就是上一级对象
如果不是那么this就是全局
*/
console.log(o2.fn()) //undefined
console.log(o3.fn())//t3

const fnc = {
    name: function(a,b){
        console.log(a,b,this)
    }
}
const target = {
    gee: 111
}
fnc.name.call(target,'a','b')

function a(){
    console.log('hello')
}

function doo(a){
    console.log(this.a)
}

const obj1 = {
    a: 1,
    doo: doo
}
const obj2 = {
    a:2,
    doo: doo
}

obj1.doo.call(obj2)

//var unm = 9
function out (){
    console.log(unm)
   var unm = 9
}
out()
//同样存在暂时性死区问题
function check(a,b=a){
    console.log(`${a}is${b}`)
}
function checkerr(a=b,b){
    console.log(`${a}is${b}`)
}
check(2,undefined)
//checkerr(undefined,2)


function bar(){
    let num = 1
    return function fn(){
        console.log(num,'666')
    }()//表示立刻执行和在调用时写两个()()一样
}

console.log(bar())