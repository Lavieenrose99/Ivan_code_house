/*
 * @Author: your name
 * @Date: 2021-01-21 16:37:59
 * @LastEditTime: 2021-01-21 17:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/Webpack/modules1.js
 */
// var Ivan = function(){
//     var name = 'ivan'
//     var sex = 'male'
//     return {
//         tell: function(){
//         console.log(name,sex)
//     },
//       do: function (){
//           console.log(111)
//       },
// }
// }
(function(window){
    var name = 'cjz'
    var sex = 'male'
    function fn1(){
        console.log(name,sex)
    }
    window.Moudule = {fn1}
})(window)

// Ivan().tell()
//  Ivan().do()
// console.log(1)