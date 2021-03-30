/*
 * @Author: your name
 * @Date: 2021-03-15 15:44:02
 * @LastEditTime: 2021-03-15 15:44:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/lru.js
 */
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map()
    this.capacity = capacity
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
   var val = this.map.get(key)
   if(val == undefined) return -1
   this.map.delete(key)
   this.map.set(key,val)
   return val
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
   if(this.map.has(key)) this.map.delete(key)
   this.map.set(key,value)
   if(this.map.size >  this.capacity){
       this.map.delete(this.map.entries().next().value[0])
   }
};




/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/