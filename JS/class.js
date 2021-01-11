/*
 * @Author: your name
 * @Date: 2021-01-12 01:00:57
 * @LastEditTime: 2021-01-12 01:07:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/class.js
 */
class father {
constructor(y,x){
    this.x = x
    this.y = y
}
 print(){
     console.log(this.x)
 }
}
class child extends father{
    constructor(y,x,d){
        super(x,y)
        this.d = d
    }
    print(){
        console.log(this.d,this.x)
    }
}
let a = new child(1,2,3)
a.print()
console.log(a instanceof father && a instanceof child)