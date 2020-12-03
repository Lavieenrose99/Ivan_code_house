/*
 * @Author: your name
 * @Date: 2020-10-05 23:57:30
 * @LastEditTime: 2020-11-28 21:18:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS&TS练习代码/JS/symbol_practice.js
 */
let a = Symbol('foo');
 console.log(a.toString());
 const obj = {
     toString(){
         return 'abc'
     }
 }
 let b = Symbol(obj)
 console.log(b.toString());
 obj[a] = 'aaa'
 console.log(obj[a]);
 let sym = Symbol();
 Boolean(sym);
 console.log(sym);
 console.log( Boolean(sym));
 console.log(!sym);
 console.log(!!sym);
 const [a,b,c,d] = 'hello';

const [{length: len},{length: len1}] = ['hello','hell'];
const text = 'hello world';
console.log(text.toString());
console.log(a,b,c,d,len,len1);
console.log(title)

const obj = {
    a: 111,
    b:222,
    c:333
}
console.log(obj.toLocaleString());
console.log(obj.valueOf());

