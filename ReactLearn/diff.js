/*
 * @Author: your name
 * @Date: 2021-02-09 22:33:39
 * @LastEditTime: 2021-02-10 16:22:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ivan个人练习代码/ReactLearn/diff.js
 */


 import { Element, SetVdToDom , newElement, document} from './vdmock.js'


const diff = (oldNode,newNode)=>{
    let difference = {} //用来保存两个节点之间的差异
    getDiff(oldNode,newNode,0,difference)
    return difference
}
const REMOVE = 'remove'
const MODIFY_TEXT =  'modify_text'
const CHANGE_ATTRS = 'change_attrs'
const TAKEPLACE = 'replace'
let initIndex = 0
const getDiff = (oldNode,newNode,index,difference)=>{
    let diffResult = []
    //新节点不存在的话说明节点已经被删除
    if(!newNode){
        diffResult.push({
            index,
            type: REMOVE
        }) //如果是文本节点直接替换就行
    }else if(typeof newNode === 'string' && typeof oldNode === 'string'){
        if(oldNode !== newNode){
            diffResult.push({
                index,
                value: newNode,
                type: MODIFY_TEXT
            })
        } //如果节点类型相同则则继续比较属性是否相同
    }else if(oldNode.tagName === newNode.tagName){
        let storeAttrs = {}
        for(let  key in oldNode){
            if(oldNode[key] !== newNode[key]){
                storeAttrs[key] = newNode[key]
            }
        }
        for (let key in newNode){
            if(!oldNode.hasOwnProperty(key)){
                storeAttrs[key] = newNode[key]
            }
        }
        if(Object.keys(storeAttrs).length>0){
            diffResult.push({
                index,
                value: storeAttrs,
                type: CHANGE_ATTRS
            })
        } //遍历子节点
        oldNode.child.forEach((child,index)=>{
            console.log(child,111)
             getDiff(child,newNode.child[index],++initIndex,difference)
        }) //如果类型不相同，那么无需对比直接替换掉就行
      
    }else{
        diffResult.push({
            type: TAKEPLACE,
            newNode
        })
    }if( //如果不存在旧节点那么同样也是直接替换就行
        !oldNode
    ){ 
        diffResult.push({
            type: TAKEPLACE,
            newNode
        })
    } //最后将结果返回
    if(diffResult.length){
        difference[index] = diffResult
    }
}

const VdObj = newElement('ul',{id: 'list'},[
    newElement('li',{class: 'list-1',style:'color:red' }, ['lavie']),
    newElement('li',{class: 'list-2' }, ['virtual dom']),
    newElement('li',{class: 'list-3' }, ['React']),  
    newElement('li',{class: 'list-4' }, ['Vue']) 
])
const VdObj2 = newElement('ul',{id: 'list'},[
    newElement('li',{class: 'tag-1',style:'color:green' }, ['text1']),
    newElement('li',{class: 'tag-2' }, ['text2']),
    newElement('li',{class: 'tag-3' }, ['text2'])  
])
console.log(diff(VdObj,VdObj2))


const fixPlace = (node,difference)=>{
    let pacer = { index: 0 }
    pace(node,pacer,difference)
}

const pace = (node,pacer,difference) =>{
    let currentDifference = difference[pacer.index]
    let childNodes = node.child
    childNodes.forEach(function(child){
        pacer.index ++
        pace(child,pacer,difference)
    })
    if(currentPath){
        doFix(node,currentDifference)
    }
}

const doFix = (node,difference) =>{
     difference.forEach(item=>{
         switch (item.type){
             case 'change_attrs':
                 const attrs = item.storeAttrs.attrs
                 for( let key in attrs ){
                     if(node.nodeType !== 1) 
                     return 
                     const value = attrs[key]
                     if(value){
                         SetVdToDom(node,key,value)
                         
                     }else{
                         node.removeAttribute(key)
                     }
                 }
                 break
                 case 'modify_text':
                     node.textContent = item.data
                     break
                case 'replace': 
                   let newNode = (item.newNode instanceof Element) ? render(item.newNode) : 
                   document.createTextNode(item.newNode)
                    node.parentNode.replaceChild(newNode,node)
                    break
                case 'remove' :
                    node.parentNode.removeChild(node)
                    break
                    default: 
                    break
         }
     })
}