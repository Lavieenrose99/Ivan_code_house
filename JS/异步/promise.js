/*
 * @Author: your name
 * @Date: 2021-04-12 14:14:50
 * @LastEditTime: 2021-04-12 15:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/异步/promise.js
 */

 const promise = new Promise((resolve,reject)=>{
     setTimeout(()=>{
          resolve({
              user: 'cjz'
          })
        //   reject(new Error('api is something srong'))
     },1000)
 })

 promise
 .then(usr=>{
     console.log(usr)
 })
 .catch(err=>{
     console.log(err)
 })


 console.log('Start')

function loginUser(email,password){

    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("Now we have the data");
        if(email === '895530239@qq.com' && password === '123456'){
        resolve({
            userInfo: 'cjz'
        })
    }else{
        reject(new Error('something was wrong'))
    }
    },2000)
    })
   
}

function Tencentvideo(userInfo){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
        if(userInfo === 'cjz'){
            console.log(`${userInfo}已经登录`)
            resolve("尊贵的会员您已经跳过广告")
        }else{
            reject('充值会员首月10元')
        }
    },2000)
     })
   
}
function videoDetail(right){
   return new Promise((resolve,_)=>{
         setTimeout(()=>{
             console.log(right)
             resolve('视频开始了')
         })
    },1000)
}

loginUser('895530239@qq.com','123456')
.then(usr=>Tencentvideo(usr.userInfo))
.then(right=>videoDetail(right))
.then(info=>console.log(info))

//await

async function displayFunc(){
    const user = await loginUser('895530239@qq.com','123456')
    const right = await Tencentvideo(user.userInfo)
    const info = await videoDetail(right)
    console.log(info)
}

displayFunc()

//apis
// let p2 =  new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,'cjz')
// })
// let p3 =  new Promise((resolve,reject)=>{
//    setTimeout(resolve,10,'陈俊璋sb')
// })
// let p4 =  new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,'sdsds')
// })
// Promise.race([p2,p3,p4]).then((values)=>{
//    console.log(values)
// })

// Promise.all([p5, p2, p3]).then(values => {
//   console.log(values); // [3, 1337, "foo"]
// });