/*
 * @Author: your name
 * @Date: 2020-12-09 16:48:10
 * @LastEditTime: 2020-12-13 23:10:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/prop.js
 */
function Person(name, age){ 
    this.name = name;
    this.age = age;
    function Aka(a){
        this.a = a
    }
 }
const Obj = {}
 Person.prototype.motherland = 'china'
 Person.prototype.console = ()=>{
     return console.log("nnl");
 }
 Person.prototype.create = (num1,num2)=>{
     console.log(num1+num2)
 }
 console.log(Person.prototype.constructor)
 let child1 = new Person()

 let person1 = new Person(111,111)
 person1.__proto__.child = "222"
 person1.__proto__.__proto__.child = '111'
 console.log(person1.__proto__  === Person.prototype)
 console.log(person1)
 console.log(person1.constructor)
 console.log(person1.__proto__)
 console.log(person1.__proto__.constructor)
 console.log(person1.__proto__.__proto__.constructor)
 console.log(person1.__proto__.__proto__.__proto__)
 console.log(Obj.constructor)
 console.log(person1,111)
 person1.console()
 person1.create(111,222)
 console.log(person1.child)
console.log(Person)
console.log(Person)