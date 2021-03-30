/*
 * @Author: your name
 * @Date: 2021-03-09 21:31:34
 * @LastEditTime: 2021-03-09 23:16:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS手写xx函数/debounce&&thorlte.js
 */
function throttle(fn,wait){
     
    let time = null;
    return function (){
        if(!time){
            time = setTimeout(()=>{
                fn
            })
        }
    }


}