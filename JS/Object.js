/*
 * @Author: your name
 * @Date: 2020-12-03 23:53:51
 * @LastEditTime: 2020-12-25 01:36:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/Object.js
 */

 const Obj1 = new Object()
 Obj1.name = "cjz"
 Obj1.age = 18
 const markName = 'name' 
 console.log(Obj1['name']===Obj1.name)
 console.log(Obj1[markName])
 //js中还可以用方括号表示法来表示对象属性 优点是可以通过变量来访问属性
 console.log(Obj1.valueOf())
 console.log(Obj1.name.toLocaleString())
 console.log(Obj1.age.toString())
 //数组里面
 const array = ['cjz','lwx','clh','ljh']
 console.log(array.toString())
 console.log(array.join('| '))
 console.log(array.push('lsl'))
 console.log(array)
 console.log(array.pop())
 //头插入
 console.log(array.unshift('111'))
 //取出第一个
 console.log(array.shift())
 console.log(array.indexOf('clh',3))//第二个参数应该是提升查找效率的
 console.log(array.lastIndexOf('ljh'))
 //forEach不会直接改变基本数据类型的值
array.forEach(function(arr,index,array){
    return array[index] = 'cjz';
})
const objArray = [{id:1,name:'cjz'},{id:2,name:'lwx'},{id:3,name:'clh'},{id:4,name:'ljy'}]
// objArray.forEach((item,index,arr)=>{
//     return item.style = '666'
// })
objArray.forEach((item,index,arr)=>{
   arr[index].name  + 'xxx'
})
console.log(objArray)
objArray.forEach((item,index,arr)=>{
    item.name = arr[index].name  + 'xxx'
})
console.log(objArray)
objArray.forEach((item,index,arr)=>{
    console.log(item===arr[index])
})
//console.log(array)
console.log(array.reduce((pre,aft)=>{
     return pre + aft
}))
Object.defineProperty(Obj1,'kick',{
    writable: true,
    value: 'gun'
})
Obj1.kick = 'gun1'
console.log(Obj1.kick)

Object.defineProperty(Obj1,'dick',{
    get: function(){
        console.log(this.kick)
        return this.kick
    },
    set: ()=>{
        console.log('fuck')
    }
})
Obj1.dick = '11'
console.log(Obj1.dick,111)
let kk = new Boolean(false)
let dd = Boolean(false)
console.log(kk,dd)

