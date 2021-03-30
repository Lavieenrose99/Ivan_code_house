/*
 * @Author: your name
 * @Date: 2021-03-14 17:10:06
 * @LastEditTime: 2021-03-14 17:10:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS手写xx函数/callback.js
 */
var callback = function(arg3) {
    console.log('callback Totle is:' + arg3)
  }

function fn(arg1, arg2, cb) {
  var Total = arg1 + arg2;
  cb(Total);
  console.log('mainFunction Totle is:' + Total)
}

fn(2, 2, callback)   // 调用fn()函数，并传入2, 2, callback作为参数
console.log(111)