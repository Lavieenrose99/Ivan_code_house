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