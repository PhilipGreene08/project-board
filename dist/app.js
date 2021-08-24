const newTodo = document.querySelector(`.new-todo-input`)
const submit = document.querySelector(`.new-todo-submit`)
const form = document.querySelector(`.new-todo-form`)
const ul = document.querySelector(`.todos-list`)
const deleteAllButton = document.querySelector(`.delete-all-button`)

form.addEventListener('submit', addToDo)
deleteAllButton.addEventListener(`click`, deleteAllFunction)

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
    if (masterTodoList.length > 0) {
        //clear screen of all todos and empty the masterToDoList to avoid double todos
        ul.innerHTML = ``
        masterTodoList = []

        // get items from LS
        let storedItems = JSON.parse(localStorage.getItem(`Full List`))
        masterTodoList.push(storedItems)
        // for each todo, create element and render in DOM
        storedItems.forEach(todo => {
            const li = document.createElement(`li`)
            li.classList.add(`todo`)
            li.innerHTML = `<p>${todo}</p> <i class="fas fa-trash"></i> <i class="far fa-edit"></i>`
            ul.appendChild(li)
        })
    } else {
        console.log(`no data`);
    }
}



function deleteAllFunction() {
    ul.innerHTML = ``
    localStorage.clear()
}

// save list to LS
function saveToLocalStorage() {
    localStorage.setItem(`Full List`, JSON.stringify(masterTodoList))
}
