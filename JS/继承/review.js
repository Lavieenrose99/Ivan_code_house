/*
 * @Author: your name
 * @Date: 2021-03-13 17:01:11
 * @LastEditTime: 2021-03-13 17:34:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/继承/review.js
 */

 function A(name,year){
     this.name = name 
     this.year = year
     this.setName = function(){
         return `MY name is ${name} i am ${year} old`
     }
 }

 A.prototype.job = 'tc'

 function B(){
     
 }

B.prototype = new A() //如果需要增加属性一定要在指定继承之后不然会被覆盖，原理是集成之后已经是一个对象这样就可以在对象里面附加属性
B.prototype.setHello = function(){
}
var b = new B('cjz',666)
b.__proto__.name = 'cjz'
console.log(b.__proto__)


function C(name,job){
    this.name = name
    this.job = job
    this.Intronduce = function(){
        return `my name is C${name}`
    }
}
function E(name,job){
    this.namee = name
    this.jobb = job
    this.Intronducee = function(){
        return `my name is E${name}`
    }
}
function D(name,job){
    C.call(this,name,job)
    E.call(this,name,job)
}

var testD = new D('cjz','tc')
console.log(testD)