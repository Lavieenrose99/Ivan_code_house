/*
 * @Author: your name
 * @Date: 2021-02-20 00:52:08
 * @LastEditTime: 2021-03-17 15:34:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/栈和队列/flatten.js
 */
// [1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]

const flatten = (array)=>{
    const newArr = []
    let fn = function(newArrReslut,compareReslut){
        for(let i = 0;i<compareReslut.length;i++){
            if(Array.isArray(compareReslut[i])){
                 fn(newArrReslut,compareReslut[i])
            }else{
                newArrReslut.push(compareReslut[i])
            }
        }
        return newArrReslut
    }
    
    return fn(newArr,array)
}

console.log(flatten([1, [2, [3, [4, 5]]], 6]))

//判断括号 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效

var isValid = function(str){
    const store = []
    if(str.length % 2 !== 0){
        return false
    }
    for(let i = 0;i < str.length;i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
                store.push(str[i])
        }else if(str[i] === ')' && store.pop() !== '(') return false
        else if(str[i] === ']' && store.pop() !== '[') return false
        else if(str[i] === '}' && store.pop() !== '{') return false
    }
    return store.length === 0
}
//主要的点在于理解数组与栈的关系(([])) 第一次遇到]时出栈的是之前最后一个也是刚好需要对应的符号
let str = '((}}'

console.log(isValid('(()]'))


// const flattenCopy = (arr)=>{
//     const arrCopy  = []
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             flattenCopy(arr[i])
//         }else{
//             arrCopy.push(arr[i])
//         }
//     }
// }


const flattenCopy = (arr)=>{
    const arrCopy = []
    let fn = function (arrSave,arrItem){
        for(let i = 0; i < arrItem.length; i++){
            if(Array.isArray(arrItem[i])){
                fn(arrSave,arrItem[i])
            }else{
                arrSave.push(arrItem[i])
            }
        }
        return arrSave
    }
    return fn(arrCopy,arr)
}


console.log(flattenCopy([1, [2, [3, [4, 5]]], 6]))