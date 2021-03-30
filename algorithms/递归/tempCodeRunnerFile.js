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