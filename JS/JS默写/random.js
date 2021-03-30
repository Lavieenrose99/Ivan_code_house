/*
 * @Author: your name
 * @Date: 2021-03-04 15:31:56
 * @LastEditTime: 2021-03-06 14:11:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS默写/radom.js
 */
function random(len){
    let length = len ? len : 6
    let define = 'qwertyuioplkjhgfdsazxcvbnm1234567890'
    let arrStr = []
    for(let i = 0;i < length;i++){
        let save = Math.round(Math.random()*35)
        arrStr[i] = define[save]
    }
   
    console.log( arrStr.join(""))
    
}
random(100)

/**
* 使用硬币来凑成指定的金额
*
* 说明：给定不同面额的硬币 coins 和一个总金额 amount，
* 编写一个函数来计算可以凑成总金额所需的最少的硬币个数，
* 如果没有任何一种硬币组合能组成总金额，返回 -1，
* 你可以认为每种硬币的数量是无限的。
*/


function countCoins(arr,amount){
    
}