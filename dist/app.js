const newTodo = document.querySelector(`.new-todo-input`)
const submit = document.querySelector(`.new-todo-submit`)
const form = document.querySelector(`.new-todo-form`)
const ul = document.querySelector(`.todos-list`)
const deleteAllButton = document.querySelector(`.delete-all-button`)


form.addEventListener('submit', addToDo)
deleteAllButton.addEventListener(`click`, deleteAllFunction)
ul.addEventListener(`click`, deleteItem)

let masterTodoList = []

window.onload = function () {
    renderTodos()
}

function addToDo(event) {
    event.preventDefault()
    //masterTodoList.push(newTodo.value) //dont need to push todo to master list - repetitive code it seems
    saveToLocalStorage(newTodo.value)
    newTodo.value = ``
    renderTodos()
}

function renderTodos() {
    masterTodoList = JSON.parse(localStorage.getItem('Full List')) || [] //need to keep this line or they wont render onload
    if (masterTodoList.length > 0) {
        console.log(`yes`);
        ul.innerHTML = ``
        masterTodoList.forEach(todo => {
            let indexNumber = masterTodoList.indexOf(`${todo}`)
            const li = document.createElement(`li`)
            li.setAttribute('id', `${indexNumber}`)
            li.classList.add(`todo`)
            li.innerHTML = `<p>${todo}</p> <i class="fas fa-trash"></i> <i class="far fa-edit"></i>`
            ul.appendChild(li)
        });
    } else {
        console.log(`no data`);
    }
}

function deleteItem() {
    let clicked = event.target
    //delete item from stored array
    if (clicked.classList.contains(`fa-trash`)) {
        let selectedNode = clicked.parentElement //node to be removed
        let idOfItemToRemove = selectedNode.id //id of item to remove
        let itemArray = JSON.parse(localStorage.getItem(`Full List`)) //get items save to local storage
        itemArray.splice(`${idOfItemToRemove}`, 1) //remove selected item based on ID from idOfItemToRemove
        localStorage.clear(`Full List`) //clear LS
        localStorage.setItem(`Full List`, JSON.stringify(itemArray)) //save new array to LS
        selectedNode.parentElement.removeChild(selectedNode) //remove node from DOM

    } else {
        console.log(`no`);
    }
}

function deleteAllFunction() {
    ul.innerHTML = ``
    localStorage.clear()
}

// save list to LS
function saveToLocalStorage(data) {
    // let masterTodoList = [] //unneeded code i think
    //need to add || [] to end of next line - find out why (masterTodoList = JSON.parse(localStorage.getItem('Full List')) || [])
    masterTodoList = JSON.parse(localStorage.getItem('Full List')) || []
    masterTodoList.push(data)
    localStorage.setItem(`Full List`, JSON.stringify(masterTodoList))
}
