/*
 * @Author: your name
 * @Date: 2021-03-01 15:07:48
 * @LastEditTime: 2021-03-21 16:58:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/排序/qi.js
 */
//快速排序

let quicke = (arr)=>{
    if(arr.length <=1 ){
        return arr
    }
    let left = []
    let right = []
    let mid = Math.floor(arr.length / 2)
    let pirot = arr.splice(mid,1)[0] 
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] < pirot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quicke(left).concat([pirot],quicke(right)) //快排就是递归
}

const test = [832,32,11,34,65,2,888]
// console.log(quicke(test))

function swapArr(arr,left,right){
    let rightValue = arr[left]
    arr[left] = arr[right]
    arr[right] = rightValue
}

function Bubble(arr){
    if(!Array.isArray(arr)) return false
    for(let i = arr.length - 1; i > 0 ; i--){
      for(let j = 0; j < i; j++){
          if(arr[j] > arr[j+1]) swapArr(arr,j,j+1)
      }
    }
    return arr
}

// console.log(Bubble([1,3,4,1,2,41,3,2]))

let quickeSort = (arr)=>{
    if(arr.length < 2) return arr
    let mid  = Math.floor(arr.length / 2)
    let right = []
    let left = []
    let point = arr.splice(mid,1)[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < point){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickeSort(left).concat(point,quickeSort(right))

}

// console.log(quickeSort([1,3,4,1,2,41,3,2]))


function quickSortSecornd(arr){
    if(arr.length < 2) return arr
    let left = []
    let right = []
    let midPoint = Math.floor(arr.length / 2)  
    let point = arr.splice(midPoint,1)[0]//必须要裁剪出来啊，不然会多出来
   
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < point){
               left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSortSecornd(left).concat(point,quickSortSecornd(right))
}

console.log(quickSortSecornd([1,3,4,1,2,41,3,2]))