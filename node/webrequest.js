/*
 * @Author: your name
 * @Date: 2021-03-17 10:18:19
 * @LastEditTime: 2021-03-17 10:20:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/node/webrequest.js
 */
const fetch = require('node-fetch')

fetch('https://api.github.com/users/ruanyf')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err)); 