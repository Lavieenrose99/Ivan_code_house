/*
 * @Author: your name
 * @Date: 2021-03-07 22:48:34
 * @LastEditTime: 2021-03-13 00:49:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/遍历/for.js
 */

// function CheckIn(){
//     this.name = 'cjz'
// }
// CheckIn.prototype.job = 'enineer'
// const obj = new CheckIn()
// console.log(obj)
// for(let key in obj){
//     console.log(key)
// }

const arr = ['a',123,{a:'1',b:'2'}]
arr.name = 'demo' // in还会遍历自定义属性
for(let key in arr){
    console.log(key)//只是索引，推荐是是用来遍历对象的属性
}
for(let value of arr){
    console.log(value) //这个直接是拿来遍历
}

class RangeIterator {
    constructor(start, stop) {
      this.value = start;
      this.stop = stop;
    }
  
    [Symbol.iterator]() { return this; }
  
    next() {
      var value = this.value;
      if (value < this.stop) {
        this.value++;
        return {done: false, value: value};
      }
      return {done: true, value: undefined};
    }
  }
  
  function range(start, stop) {
    return new RangeIterator(start, stop);
  }
  
const makeLit = new range(0,3)
console.log(makeLit[Symbol.iterator]().next())
console.log(makeLit[Symbol.iterator]().next())
console.log(makeLit[Symbol.iterator]().next())

//   for (var value of range(0, 3)) {
//     console.log(value); // 0, 1, 2
//   }

const arrReview = [1,3,3,4,5,1]
const Obj = {
  [Symbol.iterator]() { return this; },
  name: 'cjz',
  value: 'tencent',
  job: 'fontEnd',
  time: 1,
  next() {
    if(this.time < 10){
      this.time++
     return { value: 1, done: false }
    }else{
       return { done: true, value: undefined}
    }
}
}
for(let i of arrReview){
  console.log(i)
}
for(let value of Obj){
  console.log(value,'chh')
}