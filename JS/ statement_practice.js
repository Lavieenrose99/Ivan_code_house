/*
 * @Author: your name
 * @Date: 2020-11-09 12:35:42
 * @LastEditTime: 2020-11-09 13:24:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JS&TS练习代码/JS/ statement_practice.js
 */

const Obj = {
    head: '111',
    arms: '222',
    legs: '333'
}

with(Obj){
    const cocatHead = head+'222'
    console.log(cocatHead);
    
}
