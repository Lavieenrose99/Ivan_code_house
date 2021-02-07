/*
 * @Author: your name
 * @Date: 2021-02-03 22:32:53
 * @LastEditTime: 2021-02-08 00:05:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/JS手写xx函数/promise.js
 */



function promiseMy(executor){
    let that = this
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onSuccessCallback = []
    this.onRejectCallback = []
    function resolve(value){
           that.status = 'success'
           that.value = value
           that.onSuccessCallback.forEach(function(item){
               item(value)
           })

    }
    function reject(value){
        that.status = 'reject'
        that.reason =  value
        that.onRejectCallback.forEach(function(item){
            item(value)
        })
    }
    executor(resolve,reject)
}

promiseMy.prototype.then = function(onFulfilled,onRejected){
    onFulfilled = typeof onFulfilled === 'function'  ? onFulfilled : data => data
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }
    if(this.status === 'success'){
         onFulfilled(this.value)
    }else if(this.status === 'reject'){
        onRejected(this.reason)
    }else if(this.status === 'pending'){
        this.onSuccessCallback.push(onFulfilled)
        this.onRejectCallback.push(onRejected)
    }
}
   
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';


function getResolveValue(promiseNext,raw,resolve,reject){
    if(raw === promiseNext)
    return reject(new TypeError('不可返回同一个promise对象'))
    let mark; //保证reslove和reject只调用一个
    if((typeof raw === 'object' && raw != null) || (typeof raw === 'function')){
        try {
            let then  = raw.then
            if(typeof then === 'function'){
                then.call(raw,function(next){
                    if(mark) return;
                    mark = true 
                    getResolveValue(promiseNext,next,resolve,reject) //next就是raw的resolve值也就是上一次this.value
                },function(err){
                    if(mark) return;
                    mark = true
                    reject(err)
                })
            }else{
                  resolve(raw)
            }
            
        } catch (error) {
            if(mark) return
            reject(error)
        }
    }else{
         resolve(raw)
    }
}


function PromiseAll(executor){
    const that  = this
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onSuccessCallback = []
    this.onRejectCallback = []

    function resolve(value){
        if(value instanceof PromiseAll){
            return value.then(resolve,reject)
        }
        if(that.status === PENDING){
        that.status = FULFILLED
        that.value = value
        that.onSuccessCallback.forEach(function(func){
            func(value)
        })
       }
    }
    function reject(reason){
        if(that.status === PENDING){
        that.status = REJECTED
        that.reason = reason
        that.onRejectCallback.forEach(function(func){

            func(reason)
        })
       }
    }
        
    executor(resolve,reject)
}

PromiseAll.prototype.then = function(onFulfilled,onRejected){
    onFulfilled = typeof onFulfilled === 'function'  ? onFulfilled : data => data
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }
    let promiseNext
    if(this.status === FULFILLED){
        return promiseNext = new PromiseAll((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    let result  = onFulfilled(this.value)
                      getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
    if(this.status === REJECTED){
        return promiseNext = new PromiseAll((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    let result = onRejected(this.reason)
                    getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
    if(this.status === PENDING){
        return promiseNext = new PromiseAll((resolve,reject)=>{
            this.onSuccessCallback.push(value=>{
                try {
                    let result = onFulfilled(value)
                    getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            }) 
            this.onRejectCallback.push(reason => {
                try {
                    let result = onRejected(reason)
                    getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
       
    }
}

new PromiseAll((resolve,_)=>{
    setTimeout(()=>{
    resolve('cjzagyw')
    },0
    )
}) //p1
.then((data)=>{ console.log(data) 
        return new PromiseAll((resolve,_)=>{

            resolve(new PromiseAll((resolve,_)=>{
                resolve('ggg')
            }))
        })
} ) //p2
.then(data=>{ console.log(data) 
       return new PromiseAll((resolve,_)=>{
        resolve('gywmm')
    }) } ) //p3
    .then(data=>console.log(data)) //p4


new Promise((resolve,reject)=>{
    resolve('lavie')
    reject(new Error('错误'))
}).then(data=>console.log(data),error=>console.log(error)) //lavie
new Promise((resolve,reject)=>{
    reject(new Error('错误'))
    resolve('lavie')
}).then(data=>console.log(data),error=>console.log(error))// Error: 错误


function promiseFirst(executor){
    let that = this
    this.status = 'pending'
    this.value = null
    this.reason = null
    function resolve(value){
        if(that.status === 'pending'){ //确保两个状态不冲突
           that.status = 'success'
           that.value = value
    }
    }
    function reject(value){
        if(that.status === 'pending'){
        that.status = 'reject'
        that.reason =  value
    }
    }

    executor(resolve,reject)
}

promiseFirst.prototype.then = function(onFulfilled,onRejected){
    onFulfilled = typeof onFulfilled === 'function'  ? onFulfilled : data => data
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }
    if(this.status === 'success'){
         onFulfilled(this.value)
    }if(this.status === 'reject'){
        onRejected(this.reason)
    }
}

new promiseFirst((resolve,_)=>{
    setTimeout(()=>{
    resolve('lavie')
},0)
}).then(data=>console.log(data)) //啥都没有


function promiseMy(executor){
    let that = this
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onSuccessCallback = [] 
    this.onRejectCallback = []
    function resolve(value){
        if(that.status === 'pending'){
           that.status = 'success'
           that.value = value
           that.onSuccessCallback.forEach(function(item){
               item(value)
           })
        }

    }
    function reject(value){
        if(that.status === 'pending'){
        that.status = 'reject'
        that.reason =  value
        that.onRejectCallback.forEach(function(item){
            item(value)
        })
    }
    }
    executor(resolve,reject)
}

promiseMy.prototype.then = function(onFulfilled,onRejected){
    onFulfilled = typeof onFulfilled === 'function'  ? onFulfilled : data => data
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }
    if(this.status === 'success'){
         onFulfilled(this.value)
    }else if(this.status === 'reject'){
        onRejected(this.reason)
    }else if(this.status === 'pending'){
        this.onSuccessCallback.push(onFulfilled)
        this.onRejectCallback.push(onRejected)
    }
}

new promiseMy((resolve,_)=>{
    setTimeout(()=>{
        resolve('cjzhhh')
    })
}).then(data=>console.log(data)) // cjzhhh



function getResolveValue(promiseNext,raw,resolve,reject){
    if(raw === promiseNext)
    return reject(new TypeError('不可返回同一个promise对象'))
    let mark; //保证reslove和reject只调用一个
    if((typeof raw === 'object' && raw != null) || (typeof raw === 'function')){ //如果raw（当次返回值）不是对象直接调用reslove
        try {
            let then  = raw.then
            if(typeof then === 'function'){
                then.call(raw,function(next){//抽丝剥茧的过程不断的取对象里面的value
                    if(mark) return;
                    mark = true 
                    getResolveValue(promiseNext,next,resolve,reject) //next就是raw的resolve值也就是上一次this.value
                },function(err){
                    if(mark) return;
                    mark = true
                    reject(err)
                })
            }else{
                  resolve(raw)
            }
            
        } catch (error) {
            if(mark) return
            reject(error)
        }
    }else{
         resolve(raw)
    }
}

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
function PromiseAll(executor){
    const that  = this
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onSuccessCallback = []
    this.onRejectCallback = []

    function resolve(value){
        if(value instanceof PromiseAll){
            return value.then(resolve,reject)
        }
        if(that.status === PENDING){
        that.status = FULFILLED
        that.value = value
        that.onSuccessCallback.forEach(function(func){
            func(value)
        })
       }
    }
    function reject(reason){
        if(that.status === PENDING){
        that.status = REJECTED
        that.reason = reason
        that.onRejectCallback.forEach(function(func){

            func(reason)
        })
       }
    }
        
    executor(resolve,reject)
}

PromiseAll.prototype.then = function(onFulfilled,onRejected){
    onFulfilled = typeof onFulfilled === 'function'  ? onFulfilled : data => data
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }
    let promiseNext
    if(this.status === FULFILLED){
        return promiseNext = new PromiseAll((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    let result  = onFulfilled(this.value)
                      getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
    if(this.status === REJECTED){
        return promiseNext = new PromiseAll((resolve,reject)=>{
            setTimeout(()=>{
                try {
                    let result = onRejected(this.reason)
                    getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }
    if(this.status === PENDING){
        return promiseNext = new PromiseAll((resolve,reject)=>{
            this.onSuccessCallback.push(value=>{
                try {
                    let result = onFulfilled(value)
                    getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            }) 
            this.onRejectCallback.push(reason => {
                try {
                    let result = onRejected(reason)
                    getResolveValue(promiseNext,result,resolve,reject)
                } catch (error) {
                    reject(error)
                }
            })
        })
       
    }
}

new PromiseAll((resolve,_)=>{
    setTimeout(()=>{
    resolve('lavie小师弟')
    },0
    )
}) //p1
.then((data)=>{ console.log(data) 
        return new PromiseAll((resolve,_)=>{
            resolve(new PromiseAll((resolve,_)=>{
                resolve('hello JS')
            }))
        })
} ) //p2
.then(data=>{ console.log(data) 
       return new PromiseAll((resolve,_)=>{
        resolve('hello TS')
    }) } ) //p3
    .then(data=>console.log(data)) //p4

// new Promise((resolve,reject)=>{
//     // resolve(1111)
//     reject('111')
// }).catch(data=>console.log(data))

PromiseAll.prototype.catch = function(err){
    return this.then(null,err)
}
new PromiseAll((resolve,reject)=>{
    reject('错误')
}).catch(data=>console.log(data))

PromiseAll.resolve = function(value){
    return new PromiseAll((resolve,_)=>{
        resolve(value)
    })
}
PromiseAll.reject= function(reason){
    return new PromiseAll((_,reject)=>{
        reject(reason)
    })
}

PromiseAll.all = function(arr){
    if(!Array.isArray(arr)){
        throw new TypeError('请传入一个数组')
    }
    return new PromiseAll((resolve,reject)=>{
        try {
            let resultArr = []
            const length = arr.length
            for(let i = 0;i<length;i++){
                arr[i].then(data=>{
                    resultArr.push(data)
                    if(resultArr.length === length){
                        resolve(resultArr)
                    }
                },reject)
            }
        } catch (error) {
            reject(error)
        }
    })
}

const p1 = new PromiseAll((resolve,_)=>{
    setTimeout(()=>{
    resolve('cjzz')
    },1000)
})

const p2 = new PromiseAll((resolve,_)=>{
    resolve('cjz')
})
PromiseAll.all([p1,p2]).then(data=>console.log(data))

PromiseAll.race = function(arr){
    if(!Array.isArray(arr)){
        throw new TypeError('请传入一个数组')
    }
    return new PromiseAll((resolve,reject)=>{
        try {
            const length = arr.length
            for(let i = 0;i<length;i++){
                arr[i].then(resolve,reject)
            }
        } catch (error) {
            reject(error)
        }
    })
}
PromiseAll.race([p1,p2]).then(data=>console.log(data,'race'))