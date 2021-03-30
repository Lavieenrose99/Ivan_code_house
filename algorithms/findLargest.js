/*
 * @Author: your name
 * @Date: 2021-02-27 18:00:53
 * @LastEditTime: 2021-02-27 18:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/findLargest.js
 */

let findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k-1]
};//每一个数都是数字

console.log(findKthLargest([2,1,1,3,4],2))