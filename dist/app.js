const newTodo = document.querySelector(`.new-todo-input`)
const submit = document.querySelector(`.new-todo-submit`)
const form = document.querySelector(`.new-todo-form`)
const ul = document.querySelector(`.todos-list`)

form.addEventListener('submit', addToDo)

let masterTodoList = []

//onload, render todos list
renderTodos(masterTodoList)

function addToDo(event) {
    event.preventDefault()
    masterTodoList.push(newTodo.value)
    newTodo.value = ``
    saveToLocalStorage()
    renderTodos(masterTodoList)
}

function renderTodos(masterTodoList) {
    //clear screen of all todos and empty the masterToDoList to avoid double todos
    ul.innerHTML = ``
    masterTodoList = []

    // get items from LS
    let storedItems = JSON.parse(localStorage.getItem(`Full List`))
    masterTodoList.push(storedItems)
    console.log(masterTodoList);
    console.log(storedItems);
    // for each todo, create element and render in DOM
    storedItems.forEach(todo => {
        const li = document.createElement(`li`)
        li.classList.add(`todo`)
        li.textContent = `${todo}`
        ul.appendChild(li)
    })
}

// save list to LS
function saveToLocalStorage() {
    localStorage.setItem(`Full List`, JSON.stringify(masterTodoList))
}
