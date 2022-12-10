let addItem = document.querySelector('.add-item'),
    addBtn = document.querySelector('.add'),
    newItem,
    parentDiv = document.querySelector('.tasks'),
    taskText = document.querySelectorAll('.task-text')


addItem.addEventListener('input', function(event) {
    newItem = event.target.value;
})


addItem.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        newTodo()
    }
})

addBtn.addEventListener('click', function(e) {
    newTodo()
})

function newTodo() {
    let newEl = document.createElement('div'),
        text = document.createElement('div'),
        deleteBtn = document.createElement('img'),
        starBtn = document.createElement('img'),
        icons = document.createElement('div')

    newEl.className = 'task'
    text.className = 'task-text'
    text.innerHTML = newItem[0].toUpperCase() + newItem.slice(1)

    icons.className = 'btns'
    deleteBtn.src = './trash-can-solid.svg'
    deleteBtn.className = 'delete'

    starBtn.src = './star-solid.svg'
    starBtn.className = 'star'

    newEl.appendChild(text)
    icons.appendChild(deleteBtn)

    icons.appendChild(starBtn)
    newEl.appendChild(icons)

    theFirsrtChild = parentDiv.firstChild
    parentDiv.insertBefore(newEl, theFirsrtChild)
    addItem.value = ''

    bindTaskEvents(newEl)
}

let bindTaskEvents = function(item) {
    // let deleteBtn
    // if(item.length > 1) item.forEach(it => deleteBtn = it.querySelector('.delete'))
    // console.log(item);
    // else {}
    deleteBtn = item.querySelector('.delete')
    deleteBtn.onclick = deleteTask
}
//bind - связать


let deleteTask = function() {
    let li = this.parentNode.parentNode
    let ul = li.parentNode
    ul.removeChild(li)
}

let flag = 0
taskText.forEach(t => t.addEventListener('click', function(e) {
    if(flag === 0) {
        e.target.style.textDecoration  = "line-through"
        flag = 1
    }
    else if(flag === 1) {
        e.target.style.textDecoration  = "none"
        flag = 0
    }
}))

//Начать интернет магазин делать с детьми легкий
//Какой проект они придумали для своей идеи, добили ли Cat energy

/*
Идеи:
Школьный помощник по предметам
Маме-папе по работе попомщник сайт, интернет магазин
Игру
*/