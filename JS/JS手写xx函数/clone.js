/*
 * @Author: your name
 * @Date: 2021-02-01 16:24:57
 * @LastEditTime: 2021-03-15 10:41:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS手写xx函数/clone.js
 */
 
 /* simplest */

 let obj1 = { man:'cjz',female:'gyw'}
 const obj2 = { names: {person1: 'cjz',person2: 'gyw'},job:'couple' }
 const objClone = JSON.parse(JSON.stringify(obj1))
//  console.log(objClone)

 /* normal */

 function cloneFunc(arr){
         if(typeof arr === 'object'){  
             const cloneObj = Array.isArray(arr) ? [] : {}
             for( key in arr){
                 cloneObj[key] = cloneFunc(arr[key]) //名字已经起好了就看是对象还是基本类型
             }
             return cloneObj
         }else{
                 return arr
             }
             
 } 
 
 let b = { name : 'gyw'}
 const target = {
    field1: 1,
    field2: undefined,
    field3: b,
    field4: [1,3,4,5]
};
 function sellowClone(obj){
     let cobj = {}
     for(const value in obj){
         cobj[value] = obj[value]
     }
     return cobj

 }
 let d = cloneFunc(target)
 b.name = 'cjzslover'
 let a = sellowClone(target)
 console.log(a,target,d)


 //sallow clone

 //way1

 const cloneObj = {
     name: { a : 'cjz' },
     job: 'tcen'
 }

 const copyAim = {...cloneObj}
 console.log(copyAim)
 copyAim.name.a = {} //只解决了第一层的问题
 console.log(cloneObj)

 function DeepClone(obj){
     const newObj = {}
     for(let item in obj){
         if(typeof obj[item] !== 'object'){
             newObj[item] = obj[item]
         }else{
             newObj[item] = DeepClone(obj[item]) //深拷贝递归到没有对象就返回自己实现其实是比较困难的一件事建议使用lodash的深拷贝函数
         }
     }
     return newObj
 }
 const cloneObj1 = {
    name: { a : 'gyw' },
    job: 'tcen'
}
const C = DeepClone(cloneObj1)
C.name.a = {}
 console.log(cloneObj1)
 