/*
 * @Author: your name
 * @Date: 2021-02-24 00:10:20
 * @LastEditTime: 2021-02-27 22:38:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/递归/fibo.js
 */
var fib = function(n){
    if(n === 0 || n=== 1)
    return n
    if(n === 2) 
    return 1
    return fib(n - 1) + fib(n - 2) 
}
console.log(fib(4))

//db

var fibdb = function(N){
    if(N < 1)
    return N
    const cache = []
    cache[0] = 0
    cache[1] = 1
    function momemize(n){
        if(cache[n]!==undefined){
            return cache[n]
        }else{
            cache[n] = momemize(n - 1) + momemize(n - 2)
            return cache[n]
        }
    }
    return momemize(N)
}

//dbup

var fibUP = function(N){
    if(N <= 1){
        return N
    }
    let prev2 = 0
    let prev1 = 1
    let result = 0
    //每一个数要用两遍第一遍是prev第二遍是curr
    for(let i = 1;i < N;i++){
        result = prev1 + prev2
        prev2 = prev1
        prev1 = result
    }
    return result
}
console.log(fibUP(2))