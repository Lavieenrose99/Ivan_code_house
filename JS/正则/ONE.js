/*
 * @Author: your name
 * @Date: 2021-02-01 23:17:35
 * @LastEditTime: 2021-03-01 23:33:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/JS/正则/ONE.js
 */
var regex = /ab{2,5}c/;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
const matches = string.match(regex)
console.log( string.match(regex) ); 
//match未使用g只返回第一个数组会有index等信息，含有g则不会有
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]  使用量词x->{}

let regex1 = /a[l,h]b/g
let str1 = 'alb thb ahhhb ahb alhb'
let matches1 = str1.match(regex1)
console.log(matches1) 
//纵向模糊匹配使用字符组[] 字符组只是其中一个字符
//省略规格可以使用连字符 [123456abcdefGHIJKLM] [1-6a-fG-M] 如果要匹配连字符的话可以放在前面或者使用转义\
// [^abc]表示排除abc 

var regex = /\d{2,5}/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); 
// => ["123", "1234", "12345", "12345"]


var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
// => true
// => true

// 查找url属性

(function UrlClass(value = 'name'){
    let match =  RegExp(`[?&]${value}=([^&]*)`).exec('https://www.baidu.com?name=jawil&age=23')
    console.log(( match && decodeURIComponent(match[1].replace(/\+/g, ' '))))
    // return match && decodeURIComponent(match[1].replace(/\+/g, ' '))

})()

let str = "helloworld"


console.log(str.match(new RegExp('hed|ll','g')))
console.log(str.match(new RegExp(/he|llo/,'g')))
console.log(str.match(/hello|helloworld/g))

var regex = /good|goodbye/g;
var string = "goodbye";
console.log( string.match(/good|goodbye/g) );

let num1 = '123423456'
var regexN = /(?!^)(?=(\d{3})+$)/g //连续三个数字前面的位置“”，替换成”,“，但是要求这个位置不是开头
console.log(num1.replace(regexN,','))
let num2 = "123432 23241323"
var regex2 = /\B(?=(\d{3})+\b)/g //范围是非单词的边界到单词的边界
console.log(num2.replace(regex2,','))
var regex3 = /(?=.*[0-9])^([0-9a-zA-Z]{6,12})$/g //表示从开头位置开始后面的字符后面存在数字
let code1 = 'htc138298'
let code2 = 'asdsdsdsd'
let code3 = '123234312231'
let code4 = 'ASDSDSDSDS'
// console.log(regex3.test(code1),regex3.test(code2))
var regex4 =  /(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9A-Za-z]{6,12}$/g //表示不能全部是数字且不能全部是英文字符
// console.log(regex4.test(code2),regex4.test(code3),regex4.test(code4),regex4.test(code1))

let date = '2021/12/3'
let date2 = '2021.12.30'
let date3 = '2021-12-15'
let date4 = '2021-12.16'
let regex5 = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{1}/
let regex6 = /\d{4}(-|\/|\.)\d{2}\1\d{1}/ //反向引用之前括号引用了什么就是什么
console.log(regex5.test(date))//true ...
console.log(regex5.test(date2))
console.log(regex5.test(date3))
console.log(regex5.test(date4))
console.log(regex6.test(date4))//false


function trim(str){
    console.log(str.replace(/^\s+|\s+$/g, ''))
}
function trim1(str){
       console.log(str.replace(/^\s*(.*?)\s*$/g, "$1"))
}
let test = '   word    '
trim(test)
trim1(test)

let map = new Map()
let s = 's'
map.set(s[0],0)
console.log(map)




