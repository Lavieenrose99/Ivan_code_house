/*
 * @Author: your name
 * @Date: 2021-02-01 23:17:35
 * @LastEditTime: 2021-02-02 00:14:09
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

