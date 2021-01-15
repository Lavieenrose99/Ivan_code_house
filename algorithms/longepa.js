/*
 * @Author: your name
 * @Date: 2021-01-15 00:35:37
 * @LastEditTime: 2021-01-16 01:57:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/longepa.js
 */
function longest(s){
    const arr1 =  Array.from(s)
    const itemSet = []
    if(arr1.length===1){
        return arr1[0]
    }
    else if(arr1.length===2){
        if(arr1[0]===arr1[1]){
            return arr1.join("")
        }else{
            return arr1[0]
        }
    }
    else{
    for(let i = 0;i<arr1.length;i++){
        for(let j = i + 1;j<arr1.length;j++){
            if(arr1[i] === arr1[j]&&arr1[j]!==arr1[j+1]){
                const te = [];
                for(let t = i; t<=j; t++ ){
                     te.push(arr1[t])

                }
                const item = te.join("") 
                itemSet.push(item)
                continue;
            }
            if(arr1[i] === arr1[j]&&arr1[j]===arr1[j+1]&&j===arr1.length){
                console.log(111)
                const te = [];
                for(let t = i; t<=j; t++ ){
                     te.push(arr1[t])

                }
                const item = te.join("") 
                itemSet.push(item)
                continue;
            }
        }
    }
    let count = 0
    let longest = ''
    for(let i = 0;i<itemSet.length;i++){
         if(itemSet[i].length>0){
             count = itemSet[i].length
             longest = itemSet[i]
         }
    }
    return longest
}
}
//console.log(longest('bbccccc'))


// arr.sort((a,b)=>a-b) //升序
// console.log(arr)
// arr.sort((a,b)=>b-a) //降序列
// console.log(arr)
// arr.push(...['123',232])
// arr.pop()

const arr = [8,-1,-4,6,-7]
const arra = arr.map((item,index,array)=>{
  return item * 2
})
console.log(arra)
/* [ 16, -2, -8, 12, -14 ] */
// arra.forEach((item,index,array)=>{
//      item.kk = 3
// })
//console.log(arra.indexOf(-2,1),arra.lastIndexOf(12,3))
arra.reduce(function(pre,cur){          
    console.log(pre,cur)
    return pre + cur 
})
