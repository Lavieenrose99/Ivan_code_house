/*
 * @Author: your name
 * @Date: 2021-03-14 21:31:06
 * @LastEditTime: 2021-03-14 21:48:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/排序/generatorsort.js
 */
function generatorsort(a,b,n){
    let arrRandom = []
    for(let i = 0;i < n ;i++ ){
        arrRandom[i] = Math.round(Math.random()*( b - a ) + a)
    }
    let after = arrRandom.slice()

    after.sort((a,b)=>a - b)

    return {
        '排序前': arrRandom,
        '排序后': after
    }

}

console.log(generatorsort(10,99,10))