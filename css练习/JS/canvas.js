/*
 * @Author: your name
 * @Date: 2021-01-20 22:31:04
 * @LastEditTime: 2021-01-21 11:15:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/css练习/JS/canvas.js
 */
function drawPath(cas){
   var canvas = document.getElementById(cas)
   var context = canvas.getContext('2d')
   context.fillStyle = "#EEEEFF"
   context.fillRect(0,0,400,300)
  for(let i = 0;i < 10;i++){
      context.beginPath()
      context.arc(i * 40, i * 30,i * 10,0,Math.PI * 2,true)
      context.closePath()
      context.fillStyle = 'rgba(225,0,0,0.25)'
      context.fill()
  }
}
