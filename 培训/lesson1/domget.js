/*
 * @Author: your name
 * @Date: 2021-04-16 00:24:52
 * @LastEditTime: 2021-04-16 14:35:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/培训/lesson1/domget.js
 */

 let s1 = document.getElementById("s1")
 let list = document.getElementsByClassName("show")
 s1.style = "height:300px; width:300px; border: 2px solid red;";
 s1.innerHTML = "<div>777</div>"
 for(let i = 0;i < list.length;i++){
     list[i].innerHTML = `这是第${i}项`
 }
 
 let select = document.querySelector("#cjz")
 select.innerHTML = "sb"

