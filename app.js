const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

console.log(empties);

//fill listeners
fill.addEventListener('dragstart', dragstart)
fill.addEventListener('dragend', dragend)

//loop through empty + call drag

for (const element of empties) {
    console.log(element);
    element.addEventListener('dragover', dragOver)
    element.addEventListener('dragenter', dragEnter)
    element.addEventListener('dragleave', dragLeave)
    element.addEventListener('drop', dragDrop)
}

//drag functions
function dragstart() {
    console.log(this);
    this.className += ` hold`
    setTimeout(() => this.className = ` invisible`, 0)
}

function dragend() {
    console.log(this);
    this.className = `fill`
}

function dragOver(e) {
    e.preventDefault()
    console.log(`over`);
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ` hovered`
}

function dragLeave(e) {
    e.preventDefault()
    this.className = `empty`
}

function dragDrop(e) {
    console.log(this.append(fill));
    this.append(fill)
    console.log(`drop`)
}