/*
 * @Author: your name
 * @Date: 2021-01-30 18:52:28
 * @LastEditTime: 2021-01-30 23:10:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/异步操作/promise.js
 */
// let p1 = function(str){
//   return new Promise((resolve,reject)=>{
//     console.log("promise start!!")
//     if(str.length<10)
//     resolve(str)
//     else
//     reject(new Error('错误截取'))
// })
// }
// p1('sada').then((str)=>{
//     console.log(str)
//     return p1('sdada少时诵诗书所所所所')
// }).then(()=>{
//     console.log('sucess')
//      return p1()
// },(err)=>{
//     console.log(err)
//     throw err
// }).catch(()=>{
//     console.log('sorry') //接收抛出的异常 错误的状态会调用then的第二个参数同时还会调用下一个catch捕获错误then中的回调方法在出现错误的时候也会被捕获
//     return p1('sdsds')
// }).then((str)=>{
//     console.log(str)
// })


let p2 =  new Promise((resolve,reject)=>{
     setTimeout(resolve,1000,'cjz')
})
let p3 =  new Promise((resolve,reject)=>{
    setTimeout(resolve,10,'陈俊璋nb')
})
let p4 =  new Promise((resolve,reject)=>{
     setTimeout(resolve,1000,'sdsds')
})
Promise.race([p2,p3,p4]).then((values)=>{
    console.log(values)
})


// var p5 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');
// });

// Promise.all([p5, p2, p3]).then(values => {
//   console.log(values); // [3, 1337, "foo"]
// });

const Obj = {
    then: function(resolve){
        resolve('foo')
    }
}
let p1 = Promise.resolve(Obj)
p1.then((value)=>console.log(value))