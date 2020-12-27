/*
 * @Author: your name
 * @Date: 2020-12-27 21:20:01
 * @LastEditTime: 2020-12-27 23:59:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/test.js
 */
let url = new URL('https://www.alibaba.com/abc/d?p=1&e=2#/hash')
const data = url.search.split('?')[1].split('&')
const query = data.map((item)=>{
    const arr = item.split('=');
    const name = arr[0]
    const obj = {
    }
    obj[name] = arr[1]
    return obj
})
const dd = {}
const query1 = query.map((arr)=>{
    console.log(arr)
    dd[Object.keys(arr)[0]] = Object.values(arr)[0]
    return dd
})
console.log(query1)
const output = {
    origin: url.origin,
    protocol: url.protocol,
    port: url.port,
    pathname: url.pathname,
    query:query1[0],
    hash: url.hash 

}
console.log(output)