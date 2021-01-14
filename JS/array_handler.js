/*
 * @Author: your name
 * @Date: 2021-01-13 22:23:08
 * @LastEditTime: 2021-01-14 01:26:35
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

var findMedianSortedArrays = function(nums1, nums2) {
    var num
    function sortNumber(a,b)
  {
        return a - b
    }
    const arr = nums1.concat(nums2).sort(sortNumber)
    
    if(arr.length % 2 === 0){
      num = (arr[arr.length / 2 - 1 ] + arr[arr.length / 2 ]) / 2
      return num
    }else {
        console.log(arr)
        console.log('yep',Math.floor(arr.length / 2))
        num = arr[Math.floor(arr.length / 2)]
        return num
    }
};

console.log(findMedianSortedArrays([3],[-2,-1]))