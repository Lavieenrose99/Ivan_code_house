/*
 * @Author: your name
 * @Date: 2021-03-14 21:55:44
 * @LastEditTime: 2021-03-14 23:06:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/numhandle/bigNum.js
 */
 
 const a = 9007199254740991100n
 const b = 23131232131313n

 console.log(a + b) //大数相加最简单的方法是使用bigInt 或者是转化成字符串


 const c = 9007199254740991100
 const d = 23131232131313

 function handleBigNum(abing,bbing){
     let a = String(abing)
     let b = String(bbing)
     let maxLength = Math.max(a.length, b.length);
   //用0去补齐长度
   a = a.padStart(maxLength , 0);//"0009007199254740991"
   b = b.padStart(maxLength , 0);//"1234567899999999999"
   //定义加法过程中需要用到的变量
   let t = 0;
   let f = 0;   //"进位"
   let sum = "";
   for(let i=maxLength-1 ; i>=0 ; i--){
      t = parseInt(a[i]) + parseInt(b[i]) + f;
      f = Math.floor(t/10%10);
      sum = t%10 + sum;
   }
   return sum;

 }

 console.log(handleBigNum(9007199254740991100,23131232131313))

 console.log([1] + 3 == 13)

 console.log([1,2]) 