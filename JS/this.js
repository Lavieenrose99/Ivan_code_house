/*
 * @Author: your name
 * @Date: 2021-01-19 00:51:34
 * @LastEditTime: 2021-01-19 18:33:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/this.js
 */
// const Obj1 = {
//     apple: 10,
//     fn: function(){
//         console.log(this.apple)
//     }
// }
// var fn1 = Obj1.fn
// fn1()

const ObjFather = {
    pear: 100,
    ObjSon: {
        pear: 200,
        fn: function(){
            console.log(this.pear)
        }
    }
}
//ObjFather.ObjSon.fn() //outPut: 200


// const oj2 = {
//     name: 'BE',
//     fn: oj1.fn
// }


const oj1 = {
    name: 'Oj1',
    fn: function(){
         return this.name
    }
}
const  oj3 = {
    name: 'Oj3',
    fn: function(){
        var fn = oj1.fn
        return fn()
    }
}
Function.prototype.callNew = function(objNew){
    objNew.fn = this
    //this就是调用call的函数
    var args = [...arguments].slice(1)
    //贪方便使用了es6的语法
    var end = objNew.fn(...args)
    delete objNew.fn
    return end
}
//console.log(oj1.fn.callNew(oj3))

function Compare() {
    this.name = 'lavie同学'
  
    var fn = function(a) {
        var str  = a || '外部'
      console.log(this.name,str)
    }
  
    var arrow_fn = (a) => {
        var str  = a || '外部'
      console.log(this.name,str)
    }
    fn('内部')
    arrow_fn('内部')
    return {
        fn: fn,
        arrow: arrow_fn
    }
  }
// Compare()
// Compare().fn()
// Compare().arrow()
/*
lavie同学 内部
lavie同学 内部
lavie同学 内部
lavie同学 内部
undefined 外部
lavie同学 内部
lavie同学 内部
lavie同学 外部
*/
const obj4 = {
    name: 'cjz'
}
function Demo(params) {
    this.name = 'lavie'
}

// var son = new Demo()
// son.call(obj4)
// console.log(son.name)// papa

function foo(a){
    this.a = a
}
const obj1 = {}
var bar = foo.bind(obj1)
bar(2)
console.log(obj1.a)


const data = { 
    finish: false,
    favor: true
}

function fun1(x){
    const arr = []
    let count = -1
    for(let d of Object.values(x)){
        d?arr.push(Object.keys(x)[++count]):null
        console.log(arr)
    }
    return arr.join("")
}
console.log(fun1(data))