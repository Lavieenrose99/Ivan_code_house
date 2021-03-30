/*
 * @Author: your name
 * @Date: 2021-03-08 16:48:01
 * @LastEditTime: 2021-03-08 17:38:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/设计模式/singleton.js
 */
// 定义一个类
function Singleton(name) {
    this.name = name;
    this.instance = null;
}
// 原型扩展类的一个方法getName()
Singleton.prototype.getName = function() {
    console.log(this.name)
};
// 获取类的实例
Singleton.getInstance = function(name) {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance
};

// 获取对象1
var a = Singleton.getInstance('a');
// 获取对象2
var b = Singleton.getInstance('b');
// 进行比较
console.log(a.name);


function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  
  var p = new Point(1, 2);

  console.log(p.toString())


  class DemoClass {
      constructor(x,y){
          this.name = x
          this.value = y
      }

    toString(){
        console.log(this.name)
    }
  }

  const copy = new DemoClass('cjz',666)
  console.log(typeof copy.__proto__.constructor.__proto__.__proto__) //链指向原型对象->DemoClass->Function->Object
  copy.toString()
  console.log(typeof DemoClass.toString)


  class DemoStatic{
      constructor(x,y){
          this.x = x;
          this.y = y;
      }
      static getName(x,y){
          console.log('('+x+y+')')
      }
  }

  DemoStatic.getName(6,7)