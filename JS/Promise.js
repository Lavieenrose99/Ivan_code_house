/*
 * @Author: your name
 * @Date: 2020-11-17 09:59:28
 * @LastEditTime: 2020-11-17 14:09:13
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
 
myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay! " + successMessage);
    return successMessage
}).then((info)=>{
    console.log(info)
}
).then((myFirstPromise)=>{
    console.log(myFirstPromise)
});
//console.log(myFirstPromise);