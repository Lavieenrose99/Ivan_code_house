 const Todos = [
//      {
//          date:  20200401,
//          value: 'JS学习'
//      },
//      {
//         date: 20200501,
//         value: 'TS学习'
//     },
//     {
//         date: 20200307,
//         value: 'Java学习'
//     }
//  ]
//  var input1 = document.getElementById("input-todo")
//  var btn = document.getElementById("add-btn")
//  var todolist = document.getElementById("todo-list")
//  let inputValue = ''
//  const remove = ()=>{
//     var child = todolist.lastElementChild;  
//     while (child) { 
//         todolist.removeChild(child); 
//         child = todolist.lastElementChild; 
//     }
//  }
//  const renderList = ()=>Todos.forEach(item=>{
//      var listItem  = document.createElement("li")
//      var date  = document.createElement("span")
//      date.innerHTML = `日期: ${item.date}`
//      date.style = "float: right"
//      listItem.innerHTML = item.value
//      listItem.appendChild(date)
//      todolist.appendChild(listItem)
//  })

//  renderList()

//  input1.oninput= function(e){
//     inputValue = e.target.value
// }
//  btn.onclick = function(){
//      addList(inputValue)
//  }
//  function addList(str){
//      const strArr = str.split("-")
//      Todos.push({
//          date: Number(strArr[0]),
//          value: strArr[1]
//      })
//      function compare(p){ //这是比较函数
//         return function(m,n){
//             var a = m[p];
//             var b = n[p];
//             return a - b; //升序
//         }
//     }
//      Todos.sort(compare("date"))
//      remove()
//      renderList()
//  }