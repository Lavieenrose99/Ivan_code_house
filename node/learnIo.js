/*
 * @Author: your name
 * @Date: 2021-03-14 17:43:09
 * @LastEditTime: 2021-03-14 17:58:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/node/learnIo.js
 */


 const fs = require("fs")
 const path = require("path")

 console.log(path.join(__dirname,'readfile.txt')) //用于连接__dirname__当前文件的位置

 fs.readFile(path.join(__dirname,'readfile.txt'),'utf-8',function(err,data){
    if (err) throw err
     console.log(data.toString())
 })

 console.log("程序开始了")