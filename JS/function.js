/*
 * @Author: your name
 * @Date: 2020-12-27 17:16:29
 * @LastEditTime: 2020-12-27 20:55:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/function.js
 */

 /*学习前提 函数里面有两个特殊对象arguments和this
 */

function func1(num){ //不推荐使用argument.callee是一个非常大的对象
    if(num <= 1){
        return 1
    }else{
       // console.log(arguments.callee,arguments.length)
        console.log(this)
        return arguments.callee(num-1) * num
    }
}
var func3 = (function f1(num){
    if(num <= 1){
        return 1
    }else{
        return f1(num - 1) * num
    }
})
function fun5(){
    //'use strict';
    console.log(this)
}
let Obj1 = {
    name: 1,
    display(){
        console.log(this)
    }
}
var func4 = func3
var func2 = func1
func1 = null
//fun5()
//console.log(Obj1.display())
//console.log(func4(4))


function Person(){
    this.getThis = function(){ // 这个函数返回 this
        return this;
    }
}

let p1 = new Person(); // 调用了构造函数并返回了一个新的对象
//console.log(p1.getThis() === p1); // true

let p2 = new Person();
//console.log(p2.getThis() === p2); //  true

let xm = {
    name: '小明',
    sayName(a,b,c){
        console.log(a,b,c)
        console.log(this.name);
    }
};

xm.sayName();  // 对象调用函数输出 '小明'
let xh = {
    name: '小红'
};
// xm.sayName.call(xh);  // 小红
// xm.sayName.call(xm,1,3,4)
// xm.sayName.apply(xh,[1,2,3]);  // 小红


function PersonClose(){
    let age = 24;

    this.getAge = function(){
        return age;  // 引用了外层的变量
    }

    this.grow = function(){
        age ++;  // 引用了外层的变量
    }
}

let xmc = new PersonClose(); 
let xhc = new PersonClose();
let ageThisYear = xmc.getAge();
console.log('小明今年的年龄是 ' + ageThisYear);
xmc.grow();
let ageNextYear = xmc.getAge();
let ageNextYearh = xhc.getAge();
console.log('小花的年龄是',ageNextYearh)
console.log('小明明年的年龄是', ageNextYear); // 小明明年的年龄是 25




