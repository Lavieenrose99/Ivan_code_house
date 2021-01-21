/*
 * @Author: your name
 * @Date: 2020-12-09 16:48:10
 * @LastEditTime: 2021-01-20 22:28:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/prop.js
 */

fn1.prototype.nam = 'lavie'
function fn1(name){
    this.name = name
}
const  fn2 = new fn1('cjz')
console.log(fn2.__proto__)
console.log(fn1.__proto__)
console.log(Function.prototype.constructor === Function)
console.log(fn2)
//fn2 是this然后this的原型链指向原型对象的prototype fn1是原型对象
/*
fn1 { nam: 'lavie' }
[Function]
true
fn1 { name: 'cjz' }
*/
