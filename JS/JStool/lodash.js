/*
 * @Author: your name
 * @Date: 2021-03-05 23:23:30
 * @LastEditTime: 2021-03-11 18:54:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/lodash/practice.js
 */
const _ = require('lodash')

var arr1 = [
    { id: 3, name: 'cjz' },
    { id: 0, name: 'ljh'},
    { id: 4, name: 'ljy'}
]
const changearr1 = _.reject(arr1,['id',0]) //取出某个条件的元素
console.log(changearr1)
const changearr2 = _.chunk(arr1,2) //将代买按照一定的条件进行分割
console.log(changearr2)

var arr2 = [0,NaN,0,2,0,1,3]
console.log(arr2)
const changearr3 = _.compact(arr2) //去除0,naN等假值
console.log(changearr3)

var arr3 = [1,2,3,4,5,6,7]
console.log(_.shuffle(arr3)) //无序化

var foo = {id: 0, name: "aaa", age: 33}
var bar = _.pick(foo, ['name', 'age']) //筛选对象
var keys = _.keys(foo)
var key = Object.keys(foo) //筛选出对象的属性 es6也提供了对应的函数
console.log(bar,keys,key)
//bar = {name: "aaa", age: 33}

var agent = [ { id: 0 ,name: 'cjz'}, { id: 0 ,name: 'cjz'}, { id: 0 ,name: 'cjz'}]
// agent.forEach((item,index)=>{
//     item.id = agent[index].name 
// })
const copy = _.forEach(agent,function(item,index){
    item.id = item.name
})
console.log(copy,agent)

