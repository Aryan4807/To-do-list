"use strict";
let button = document.getElementById('btn');
let inputElement = document.getElementById('inputel');
let formElement = document.getElementById('form');
let todolist = document.getElementById('todolist');
const showlist = ReadTodo();
showlist === null || showlist === void 0 ? void 0 : showlist.forEach(createTodo);
function ReadTodo() {
    const jsonData = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('todos dfsknfn');
    if (jsonData == null)
        return [];
    return JSON.parse(jsonData);
}
function saveTodo() {
    localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem('todos dfsknfn', JSON === null || JSON === void 0 ? void 0 : JSON.stringify(showlist));
}
function handleSubmit(e) {
    e.preventDefault();
    // console.log('sssssssssssss')
    const Todo = {
        name: inputElement === null || inputElement === void 0 ? void 0 : inputElement.value,
        completed: false
    };
    showlist.push(Todo);
    // localStorage?.setItem('todos dfsknfn', JSON?.stringify(showlist))
    createTodo(Todo);
    saveTodo();
    // ReadTodo()
    inputElement.value = '';
}
function createTodo(Todo) {
    const ul = document.createElement('li');
    const check = document.createElement('input');
    check.type = "checkbox";
    check.checked = Todo.completed;
    check === null || check === void 0 ? void 0 : check.addEventListener('change', function () {
        Todo.completed = check.checked;
        saveTodo();
    });
    ul.append(check);
    ul.append(Todo === null || Todo === void 0 ? void 0 : Todo.name);
    todolist.append(ul);
}
formElement.addEventListener('submit', handleSubmit);
console.log('aa', button);
// button.addEventListener("click",function(){
//     // .value= 'ENTER again'
//     alert( inputElement.value)
//     inputElement.value=''
// })
// inputElement.addEventListener("click",function(){
//     inputElement.value= ''
// })
