/*
 * @Author: your name
 * @Date: 2021-03-05 21:59:30
 * @LastEditTime: 2021-03-13 21:35:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/动态规划/findRoad.js
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let length = obstacleGrid.length
    let witdh = obstacleGrid[0].length
    let temp = []
    for(let i = 0; i < length; i++){
        temp[i] = Array(witdh).fill(0)
    }
    if(obstacleGrid[0][0] === 1 || obstacleGrid[ length -1 ][ witdh - 1 ] === 1){
        return 0
    }
    for(let i =  0; i <  length ; i++){
        for(let j = 0; j < witdh ; j++){
            if(i === 0 && j === 0 ){
                temp[i][j] = 1
            }else if( i === 0 ){
                if(obstacleGrid[i][j]!==1 && temp[i][j -1] !== 0) { temp[i][j] = 1 }
                else { temp[i][j] = 0 }
            }else if(j === 0){
                if(obstacleGrid[i][j] !== 1 && temp[i - 1][j] !==0) { temp[i][j] = 1 }
                else { temp[i][j] = 0 }
            }else if( obstacleGrid[i][j] !== 1){
                temp[i][j] = temp[i - 1][j] + temp[i][j -1 ]
            }
        }
    }

    return temp[length -1][witdh - 1]

};
// console.log(uniquePathsWithObstacles(
//     [[0,0,0],[0,1,0],[0,0,0]]))
    

//
var change = function(amount, coins) {
    let coinsNum = coins.length
    const dp = []
    for(let i = 0;i < coinsNum + 1; i++){
        dp[i] = []
         for(let j = 0;j < amount + 1; j++){
             if(i === 0){
                 if(amount !== 0)
                 dp[i][j] = 0
                 else{
                  dp[i][j] = 1
                 }
             }else if(j === 0){
                 dp[i][0] = 1 //可以不全用
             }else{
                 dp[i][j] = 0
             }
    }
    }

    for (let i = 1; i < coinsNum + 1; i++) {
    for (let j = 1; j < amount + 1; j++) {
        if (j - coins[i - 1] < 0) {
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
        }
    }
}


    return dp[coinsNum][amount]
    
};
change(11,[1, 2, 5])


const climbStairs = (n)=>{
    if( n < 2 ) return 1
    if( n === 2) return 2

    let arr = []
    arr[1] = 1
    arr[2] = 2
    for(let i = 3; i <= n; i++){
        arr[i] = arr[n - 1] + arr[n - 2]
    }
    return arr[n]
}

