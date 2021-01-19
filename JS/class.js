/*
 * @Author: your name
 * @Date: 2021-01-12 01:00:57
 * @LastEditTime: 2021-01-17 21:48:47
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
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   }
  
//   const member = new Person("Lydia", "Hallie");

  
//   console.log(member.getFullName());
class A {
   constructor(){
       this.b = 2
   }
}
A.prototype.x = 2
class B extends A{
     m(){
         console.log(A.prototype.b)
        return super.x
    }
}
let b = new B()
console.log(b.m())
class C {
    static print(){
        console.log('this is static',this)
    }
    print(){
        console.log('this is normal',this)
    }
}
C.print()
const c = new C()
c.print()

console.log(Object.getPrototypeOf(B))
