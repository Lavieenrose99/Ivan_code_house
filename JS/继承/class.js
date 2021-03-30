/*
 * @Author: your name
 * @Date: 2021-03-13 18:22:12
 * @LastEditTime: 2021-03-13 18:25:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/继承/class.js
 */
class learnClass{
    constructor(name,job){
        this.name = name
        this.job =job
    }
    static CheckStatic(){
        console.log('wow')
    }
}
learnClass.CheckStatic()
//静态类是是可以直接使用的

function learnFunc(name,job){

}
learnFunc.prototype.guess = function(){
    console.log('guess is wrong!!')

}