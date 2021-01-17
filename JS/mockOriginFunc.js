/*
 * @Author: your name
 * @Date: 2021-01-17 12:48:31
 * @LastEditTime: 2021-01-17 13:05:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/mockOriginFunc.js
 */

const arr = [1,3,2,42,2]
 arr.reduce((pre,cur,index,array)=>{
     console.log(index,pre,cur)//如果没有初始值是从索引一开始的,index代表cur的索引
     return pre + cur
 },inint=0)


 Array.prototype.mockReduce = Array.prototype.mockReduce || function(fuc,init){
     var startPoint = typeof init === 'undefined' ? 1 : 0
     var arr = this
     var first = typeof init === 'undefined' ? arr[0] : init
     console.log(this)
     arr.forEach(function(val,index){
         first = fuc(first,val,index + startPoint,arr)
     })
     return first
 }
arr2 = [3,4,3,2,77] //加深this理解
 arr.mockReduce.apply(arr2,[(pre,cur,index,array)=>{
    console.log(index,pre,cur)//如果没有初始值是从索引一开始的,index代表cur的索引
    return pre + cur
},inint=0])