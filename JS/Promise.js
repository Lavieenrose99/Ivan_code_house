/*
 * @Author: your name
 * @Date: 2020-11-17 09:59:28
 * @LastEditTime: 2021-01-16 18:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS&TS练习代码/JS/Promise.js
 */
const  myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function(){
        
        setTimeout(function(){
            resolve("111")
            resolve("!!!!") //代码正常执行！
        }, 300)
    }, 250);
    ;
});
console.log(myFirstPromise)
 
// myFirstPromise.then(function(successMessage){
//     //successMessage的值是上面调用resolve(...)方法传入的值.
//     //successMessage参数不一定非要是字符串类型，这里只是举个例子
//     console.log("Yay! " + successMessage);
//     return successMessage
// }).then((info)=>{
//     console.log(info)
// }
// ).then((myFirstPromise)=>{
//     console.log(myFirstPromise)
// });
// console.log(myFirstPromise);

// const firascs = function (url){
//     return new Promise(function(resolve,reject){
//         var imgs = new Image()
//         imgs.onload = function(){
//             resolve(imgs)
//         }
//         imgs.onerror = function(){
//             reject(new Error('sorry'))
//         }
//         imgs.src = url
//     })
// }
// const urlss= 'http://qiniu.daosuan.net/icon-1606046338000'
// firascs(urlss).then(function(t){
//     console.log('hello')
// },function(e){
//     console.log(e)
// })


const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>
{   resolve(1)    
    console.log('p1')
        
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
        console.log('p2')
        
    },1000)
})
const funcArr = [p1,p2]
const runFuc = (arr,value) => arr.reduce(
    (promiseChain,currentFun)=> {
        console.log(promiseChain,currentFun)
     return promiseChain.then( )//调用下一个
    },
)
runFuc(funcArr)

const pipe = (...fns) => x => fns.reduce((y, f,_,fun) => {
           console.log(y,f,fun)
           return f(y)
        }, x);

const f1 = x => {
    return x+1;
}

const f2 = x => {
    return 2 * x;
}
const com = (f1,f2) => x => console.log(f1,x)

// (1+1)*2 = 4
let result = pipe(f1, f2)(4);
let coms = com(f1,f2)(1)
//console.log(coms)
console.log(result);


