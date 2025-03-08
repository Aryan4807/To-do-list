
let button = document.getElementById('btn')!
let inputElement = document.getElementById('inputel')! as HTMLInputElement
let formElement = document.getElementById('form')!
let todolist = document.getElementById('todolist')!
interface Todo {
    name: string,
    completed: boolean
}
const showlist: Todo[] = ReadTodo();
showlist?.forEach(createTodo)
function ReadTodo(): Todo[] {
    const jsonData = localStorage?.getItem('todos dfsknfn');
    if (jsonData == null) return []
    return JSON.parse(jsonData)
}
function saveTodo(){
    localStorage?.setItem('todos dfsknfn', JSON?.stringify(showlist))
}
function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    // console.log('sssssssssssss')
    const Todo: Todo = {
        name: inputElement?.value,
        completed: false
    }
    showlist.push(Todo)
    // localStorage?.setItem('todos dfsknfn', JSON?.stringify(showlist))
    createTodo(Todo);
    saveTodo()
    // ReadTodo()
    inputElement.value = '';
}
function createTodo(Todo: Todo) {
    const ul = document.createElement('li')
    const check = document.createElement('input');
    check.type = "checkbox"
    check.checked=Todo.completed
    check?.addEventListener('change',function(){
        Todo.completed=check.checked
        saveTodo()
    })
    ul.append(check);
    ul.append(Todo?.name);

    todolist.append(ul);
}
formElement.addEventListener('submit', handleSubmit)

console.log('aa', button)

// button.addEventListener("click",function(){
//     // .value= 'ENTER again'
//     alert( inputElement.value)
//     inputElement.value=''
// })
// inputElement.addEventListener("click",function(){
//     inputElement.value= ''
// })