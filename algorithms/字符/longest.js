/*
 * @Author: your name
 * @Date: 2021-03-01 23:52:04
 * @LastEditTime: 2021-03-13 11:03:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/字符/longest.js
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let i = -1
    let res = 0
    let n = s.length
    for(let j = 0; j < n; j++){
       if(map.has(s[j])){
           i = Math.max(i, map.get(s[j]))
       }
       res = Math.max(res, j - i) 
       map.set(s[j], j)
    }
    return res
};



console.log(lengthOfLongestSubstring('sdsdadacs'))

console.log(-'1' * 2 ) //false


const arr = [1,3,1,4,5,3,1,3]

const FilterSame = (data)=>{
    let len = data.length
    let save = []
    for(let i = 0;i < len;i++){
          if(data.indexOf(data[i])!== i){
              save.push(data[i])
          }
    }
    let filter = new Set(save)
    return [...filter] && Array.from(filter)
}
console.log(FilterSame(arr))