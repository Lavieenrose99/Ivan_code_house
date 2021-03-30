/*
 * @Author: your name
 * @Date: 2021-03-06 16:07:47
 * @LastEditTime: 2021-03-13 22:39:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS手写xx函数/bind.js
 */




//call实现：与apply的唯一区别就是参数格式不同


Function.prototype.MyApply = function(ctx){
    ctx.fn = this //思想是将函数挂载在传入的对象上面
    let args = [...arguments].splice(1)[0]
    if(!Array.isArray(args)){
        return new TypeError('参数错误')
    }
    ctx.fn(args)
    delete ctx.fn
}

Function.prototype.MyCall = function(ctx){
    ctx.fn = this 
    let args = [...arguments].slice(1) //取1之后的
    ctx.fn(...args)
     delete ctx.fn
}

Function.prototype.MyBind = function(ctx){  //bind主要的思想是curr
     let fn = this
     let args = [...arguments].slice(1) 
     return function(){
         return fn.apply(ctx,args)
     }
}

const bindObj = {
    name: 'cjz',
    age: 18
}

function Check(a,b,c){
    console.log(this,a,b,c)
}
 Check.MyCall(bindObj,'gyw','xka','ojbk')
 

 Check.MyBind(bindObj,1,3,4)()


Function.prototype.MyCopyCall = function(ctx){
    ctx.fn = this
    args = [...arguments].slice(1)
    ctx.fn(...args)
}

Function.prototype.MyCopyApply = function(ctx){
    ctx.fn = this
    args = [...arguments].slice(1)[0]
    ctx.fn(args)
}
Check.MyCopyApply(bindObj,[1232,123])


Function.prototype.CopyBind = function(ctx){
    fn = this
    args = [...arguments].slice(1)
    return function(){
          return fn.apply(ctx,args)
    } //预设参数丢失的问题
}