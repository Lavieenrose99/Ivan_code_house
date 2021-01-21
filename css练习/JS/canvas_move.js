/*
 * @Author: your name
 * @Date: 2021-01-21 11:04:10
 * @LastEditTime: 2021-01-21 14:34:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/css练习/JS/canvas_move.js
 */
function drawPath(cas){
    var canvas = document.getElementById(cas),
                context = canvas.getContext('2d'),
                WIDTH = canvas.width = document.documentElement.clientWidth,
                HEIGHT = canvas.height = document.documentElement.clientHeight,
                /*
                r:起始半径
                reducer： 控制消失时间，以及圆最大可以多大
                */
                set = {
                    raduis: 1,
                    reducer: 0.05,         
                },
                roadPath = [];
               //记录鼠标位置到数组中
            window.onmousemove = function (event) {
                mouseX = event.clientX;
                mouseY = event.clientY;
                roadPath.push({
                    mouseX: mouseX,
                    mouseY: mouseY,
                    r: set.raduis,
                    life: 1
                })
            };
            function move() {
                var color = 'rgba(225,0,0,0.25)'
                context.clearRect(0, 0, WIDTH, HEIGHT);
                for (var i = 0; i < roadPath.length; i++) {
                    context.fillStyle = color;
                    context.beginPath();
                    context.arc( roadPath[i].mouseX ,roadPath[i].mouseY,roadPath[i].r,0, Math.PI * 2);
                    context.closePath();
                    context.fill();
                    roadPath[i].r += set.raduis;
                    roadPath[i].life -= set.reducer;
                    //生命属性耗完的元素踢出数组
                    if( roadPath[i].life <= 0){
                        roadPath.splice(i,1);
                        i--;
                        //数组长度减1了，后一位补上去掉的位置，所以应该从原本位置开始
                      
                    }
                }
                window.requestAnimationFrame(move);
                //一直调用
            };
            move();
        }