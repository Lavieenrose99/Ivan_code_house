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