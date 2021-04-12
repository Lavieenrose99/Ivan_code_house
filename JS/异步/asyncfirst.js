/*
 * @Author: your name
 * @Date: 2021-04-12 11:06:53
 * @LastEditTime: 2021-04-12 15:43:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/异步/asyncfirst.js
 */

console.log('first')

console.log('second')

function otherFuc(){
    console.log('func first')
    console.log('func second')
}

setTimeout(()=>{
    otherFuc()
},2000)


console.log('third')

/*
first
second
third
func first
func second
*/