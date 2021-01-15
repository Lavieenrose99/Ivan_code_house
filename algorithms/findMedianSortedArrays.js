/*
 * @Author: your name
 * @Date: 2021-01-15 10:33:32
 * @LastEditTime: 2021-01-15 10:33:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/algorithms/findMedianSortedArrays.js
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var num
    function sortNumber(a,b)
  {
        return a - b
    }
    const arr = nums1.concat(nums2).sort(sortNumber)
    
    if(arr.length % 2 === 0){
      num = (arr[arr.length / 2 - 1 ] + arr[arr.length / 2 ]) / 2
      return num
    }else {
        console.log(arr)
        console.log('yep',Math.floor(arr.length / 2))
        num = arr[Math.floor(arr.length / 2)]
        return num
    }
};

console.log(findMedianSortedArrays([3],[-2,-1]))