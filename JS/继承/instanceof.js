/*
 * @Author: your name
 * @Date: 2021-03-08 17:41:13
 * @LastEditTime: 2021-03-14 11:05:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/继承/instanceof.js
 */
function instanceofWays(origin,aim){
        let right = aim.prototype
        let left = origin.__proto__
    while(true){
        if(right === left){
            return true
        }else if(left == null){
            return false
        }
        right = right.__proto__
    }
}

function Check(){}
let Compare = new Check()

console.log(Object instanceof Object) //instanceof 是判断一个实例是其父类型或者祖先实例
console.log(instanceofWays(Compare,Check)) 
console.log(Object.prototype)
console.log(Function.prototype)

let str1 = 'cjzshihaoren'
console.log(str1 instanceof String)