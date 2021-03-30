/*
 * @Author: your name
 * @Date: 2021-03-09 21:06:25
 * @LastEditTime: 2021-03-09 21:26:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS手写xx函数/arr.js
 */


 Array.prototype.uniqueArr = function(){ //数组值做对象名字
      let Obj = {},array = [],arr = this
      for(let i = 0; i < arr.length; i++){
          if(!Obj[arr[i]]){
              Obj[arr[i]] = true;
              array.push(arr[i]);
          }
      }
      return array;
 }

 Array.prototype.setFilter = function(){
     const origin = this
     const slice = new Set(origin);
     return Array.from(slice) //Array.of用于创建数组
 }

 const arr = [1,3,4,22,2,2,1,5,6]
 console.log(arr.uniqueArr())
 console.log(arr.setFilter())
 console.log(arr.filter(function(item,index,arr){
     return arr.indexOf(item) === index //从头开始遍历的话如果索引是位置的话证明是唯一值
 }))