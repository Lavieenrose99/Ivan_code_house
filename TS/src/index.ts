/*
 * @Author: your name
 * @Date: 2020-11-09 14:42:45
 * @LastEditTime: 2021-02-23 15:38:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/TS/src/index.ts
 */
function greeter(person: string) {
    return "Hello, " + person
}

const user: string = "Jane User"
console.log(user);
console.log(greeter(user));

let turple: [number,string] = [111,'cjz']
turple.push(222)
console.log(turple)