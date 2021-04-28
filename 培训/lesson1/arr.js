/*
 * @Author: your name
 * @Date: 2021-04-15 19:29:23
 * @LastEditTime: 2021-04-16 19:41:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/培训/lesson1/arr.js
 */
const arr_sort = [1,3,4,52,4,1,3]  

const s2b = arr_sort.sort((a,b)=>a - b)

const arr_push = ['cjz','钟总监','121大人']

console.log(arr_push.slice(1,2)) 

console.log(arr_push.splice(1,2,'sbcjz','ssbcjz'))
console.log(arr_push)

arr_example = [1,32,1,31]

function FindingAddition(arr,num){
     arr.push(num)
     arr.sort((a,b)=>a-b)
     return arr.indexOf(num)

}
console.log(FindingAddition([1,32,1,31],3))

let arrStr = 'czczcsdads'
console.log(arrStr.split(""))

function random(len){
    let length = len ? len : 6
    let define = 'qwertyuioplkjhgfdsazxcvbnm1234567890'
    let arrStr = []
    for(let i = 0;i < length;i++){
        let save = Math.round(Math.random()*34)
        arrStr[i] = define[save]
    }
   
    console.log( arrStr.join(""))
    
}

random()

const arr_map = [1,3,1,3,1,1]

console.log(arr_map.map((item,index,array)=>{
    return item * 2
}))

console.log(arr_map.filter((item,index,array)=>{
    return item > 2
}))

arr_map.forEach((item,index,array)=>{
    console.log(item,index,array)
    arr_map[index] = item + 1
})

const arr_reduce = [1,3,1]
console.log(arr_reduce.reduce((acc,cur,index,arr)=>{
    console.log(acc,cur)
    return acc + cur
},5))
//10


const fn1 = function(num){
    return num + 1
}

const fn2 = function(num){
    return num * 2
}

const pipe =  function(...rest){
     return rest.reduce((data,fn)=>{
        return fn(data)
   },0)
}
// ...rest 表示把传入的参数变成数组
const result = pipe(fn1,fn2)

console.log(result)