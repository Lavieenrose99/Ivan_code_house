/*
 * @Author: your name
 * @Date: 2021-03-05 11:04:54
 * @LastEditTime: 2021-03-06 14:11:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/闭包/test.js
 */
var arr = []
function fn() {
    for (let i = 0; i < 10; i++) {
        arr[i] = function () {
            console.log(i)
        }
    }
}
fn()
arr[7]()

for(let i = 0; i < 10; i++) {
    console.log(i)
}

