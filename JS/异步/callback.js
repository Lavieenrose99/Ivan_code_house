/*
 * @Author: your name
 * @Date: 2021-04-12 13:15:01
 * @LastEditTime: 2021-04-12 15:46:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/异步/callback.js
 */
console.log('Start')

function loginUser(email,password){
    setTimeout(()=>{
        console.log("Now we have the data");
        return {
            userInfo: 'cjz'
        }
    },2000)
}

const usr = loginUser("895530239@qq.com",'123456')

console.log(usr)

console.log("finsh")

// Callback way
console.log('Start')

function loginUser(email,password,callback){
    setTimeout(()=>{
        console.log("Now we have the data");
        if(email === '895530239@qq.com' && password === '123456'){
        callback({
            userInfo: 'cjz'
        })
    }else{
        callback({
            err : '信息错误'
        })
    }
    },2000)
}


const usr = loginUser("895530239@qq.com",'123456',(usr)=>{
       console.log(usr)
})



// console.log("finsh")


// callback hell 

console.log('Start')

function loginUser(email,password,callback){
    setTimeout(()=>{
        console.log("Now we have the data");
        if(email === '895530239@qq.com' && password === '123456'){
        callback({
            userInfo: 'cjz'
        })
    }else{
        callback({
            err : '信息错误'
        })
    }
    },2000)
}

function Tencentvideo(userInfo,callback){
    setTimeout(()=>{
        if(userInfo === 'cjz'){
            callback("尊贵的会员您已经跳过广告")
        }else{
            callback('充值会员首月10元')
        }
    },2000)
}
function videoDetail(right,callback){
    setTimeout(()=>{
       callback('开始观看')
    },1000)
}

const usr = loginUser("895530239@qq.com",'123456',(usr)=>{
       console.log(`${usr.userInfo}已经登录`)
       Tencentvideo(usr.userInfo,(right)=>{
                console.log(right)
                videoDetail(right,(info)=>{
                console.log(info)
                })
       })
})



console.log("finsh") //通过这种写法可以继续往下继续获得其他的内容，但是会造成回调地狱问题
//主要就是代码的阅读性可维护性会大大下降，因为你无法单单从某一个部分去知道这个部分具体是负责啥功能

//usually function(info,onSuccess,onFailure)