/*
 * @Author: your name
 * @Date: 2020-12-09 16:48:10
 * @LastEditTime: 2020-12-09 17:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/prop.js
 */
function Person(name, age){ 
    this.name = name;
    this.age = age;
 }
 const Obj = {};
 
 Person.prototype.motherland = 'china'
 console.log(Person.prototype.constructor)

 let person1 = new Person(111,111)
 console.log(person1.__proto__  === Person.prototype)
 console.log(person1)
 console.log(person1.constructor)
 console.log(person1.__proto__)
 console.log(person1.__proto__.constructor)
 console.log(person1.__proto__.__proto__.constructor)
 console.log(person1.__proto__.__proto__.__proto__)
 console.log(Obj.constructor)