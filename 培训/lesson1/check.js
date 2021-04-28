/*
 * @Author: your name
 * @Date: 2021-04-16 14:18:58
 * @LastEditTime: 2021-04-19 23:46:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/培训/lesson1/check.js
 */


const filterWays = (arr)=>{
    var newArr = []
    for(let i = 0; i < filterAudlt.length; i++){
        if(arr[i].age < 18){
            newArr.push(arr[i].name)
        }
    }
    return newArr
}


const filterAudlt = [
    {name: 'cjz',age:21},{name:'ljy',age:3},{name:'ztr',age:0}
]
console.log(filterWays(filterAudlt))
//[ { name: 'cjz', age: 21 } ]

//赌
const gamble = (arrGuess,arrBig,start)=>{
     const chooseNum = arrBig.splice(start,arrGuess.length)
     let count = 0
     for(let i = 0; i< chooseNum.length;i++){
         if(arrGuess.indexOf(chooseNum[i].num) !== -1){
          count += chooseNum[i].value - chooseNum[i].cost
         }else{
             count -= chooseNum[i].cost
         }
     }
     return `你获得了${count}元`
        
}

const Lottery = [
    {
        num: 62,
        value: 100,
        cost: 50,
    },{
        num: 99,
        value: 999,
        cost:666
    },{
        num: 172,
        value: 121,
        cost:333
    },{
        num: 321,
        value: 121212121,
        cost:999
    }
]
const GuessArr = [
   62,323
]
const GuessArr1 = [
    321,99
]

// console.log(gamble(GuessArr,Lottery,2))
console.log(gamble(GuessArr1,Lottery,1))


function random(len){
    let length = len ? len : 6
    let define = 'qwertyuioplkjhgfdsazxcvbnm1234567890'
    let arrStr = []
    for(let i = 0;i < length;i++){
        let save = Math.round(Math.random()*34)
        arrStr[i] = define[save]
    }
   
    console.log( arrStr.join(""))
    
}

random()

