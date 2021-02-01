 function cloneFunc(arr){
         if(typeof arr === 'object'){  
             const cloneObj = Array.isArray(arr) ? [] : {}
             for( key in arr){
                 cloneObj[key] = cloneFunc(arr[key]) //名字已经起好了就看是对象还是基本类型
             }
             return cloneObj
         }else{
                 return arr
             }
             
 }