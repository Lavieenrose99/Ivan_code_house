/*
 * @Author: your name
 * @Date: 2021-03-03 14:09:02
 * @LastEditTime: 2021-03-11 20:46:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/继承/type.js
 */
// /*
//  * @Author: your name
//  * @Date: 2021-03-03 14:09:02
//  * @LastEditTime: 2021-03-11 20:42:37
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: /ivan个人练习代码/JS/继承/type.js
//  */
// // prototype 

// function A (){
//     this.name = 'cjz'
// }
// A.prototype.age = 18
// A.prototype.fn = function(){
    
// }
// function B(){

// }
// B.prototype = new A()
// let a = new A()
// let b = new B()
// console.log(a.name,a.__proto__.age,a.age,b.name,b.age)

// //constructor

// function C(name,age){
//     this.name = name
//     this.age = age
// }
// function Exect(exc){
//     this.exc = exc
// }
// C.prototype.work = 'dgz'

// function D(name,age,job){
//     C.call(this,name,age)
//     Exect.call(this,name)
//     this.job = job
// }

// D.prototype = new C() //不加就是普通的借助构造函数来继承，
// ///加就是构造函数加原型链来继承结合优点..缺点是调用了两次父类的构造函数

// let d = new D('cjz',66,'ali')

// console.log(d.exc,d.work)
// //f4 直接用child prototype 取 father的值
// //缺点是子类的constrotor函数指向父类 
// function Person(name, age) {
//     this.name = name,
//         this.age = age,
//         this.setAge = function () { }
// }
// Person.prototype.setAge = function () {
//     console.log("111")
// }
// function Student(name, age, price) {
//     Person.call(this, name, age)
//     this.price = price
//     this.setScore = function () { }
// }
// Student.prototype = Person.prototype
// Student.prototype.sayHello = function () { }
// var s1 = new Student('Tom', 20, 15000)
// console.log(s1.constructor)

// // Object.create()


// function Create(name,age){
//     this.name = name
//     this.age = age
// }
// Create.prototype.jork = 'hhh'

// function AbSorb(){
//     const data = [...arguments]
//     console.log(data)
//      Create.call(this,data[0],data[1])
// }

// AbSorb.prototype = Object.create(Create.prototype)
// let k = new AbSorb('cjz',18)
// console.log(k.name,k.jork)

// //通过class继承就是ES6中引入了class关键字，class可以通过extends关键字实现继承，
// //还可以通过static关键字定义类的静态方法,这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
// //ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
// //ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），
// //然后再用子类的构造函数修改this。



       //父类型
       function Person(name, age) {
        this.name = name,
        this.age = age,
        this.play = [1, 2, 3]
        this.setName = function () { }
    }
    Person.prototype.setAge = function () { }
    //子类型
    function Student(price) {
        this.price = price
        this.setScore = function () { }
    }
    Student.prototype = new Person() // 子类型的原型为父类型的一个实例对象
    var s1 = new Student(15000)
    var s2 = new Student(14000)
    console.log(s1.play,s2)