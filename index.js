let addItem = document.querySelector('.add-item'),
    addBtn = document.querySelector('.add'),
    newItem,
    searchVal,
    parentDiv = document.querySelector('.tasks'),
    searchInput = document.querySelector('.search'),
    storageArr = []
    

searchInput.addEventListener('input', function(event) {
    searchVal = event.target.value;
    search(searchVal)
})

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

let taskComplete = function(e) {

    let li = this.parentNode
    let text = li.querySelector('.task-text')
    console.log(li);
    if(e.target.checked === true) {
        text.style.textDecoration  = "line-through"
    }
    else {
        text.style.textDecoration  = "none"
    }
}

let importantTask = function() {

    let li = this.parentNode.parentNode
    let text = li.querySelector('.task-text')
    console.log(text);

    if(text.style.fontWeight === "700") {
        text.style.fontWeight  = "400"
    }
    else {
        text.style.fontWeight  = "700"
        theFirsrtChild = parentDiv.firstChild
        parentDiv.insertBefore(li, theFirsrtChild)
    }

}
let deleteTask = function() {
    let li = this.parentNode.parentNode //img.delete -> div.btns -> task
    let ul = li.parentNode //task -> tasks
    ul.removeChild(li) //tasks (task)
}

let bindTaskEvents = function(item) {
    // let deleteBtn
    // if(item.length > 1) item.forEach(it => deleteBtn = it.querySelector('.delete'))
    // console.log(item);
    // else {}
    starBtn = item.querySelector('.star')
    deleteBtn = item.querySelector('.delete')
    checkboxBtn = item.querySelector('.complete')

    starBtn.onclick = importantTask
    deleteBtn.onclick = deleteTask
    checkboxBtn.onchange = taskComplete
    // else if(checkboxBtn.value === 'off') checkboxBtn.onchange = inCompletetask
}

function runInitial() {
    initialTasks = JSON.parse(localStorage.getItem("tasks"))
    initialTasks.map((task) => {
        newTodo(task)
    })
}

runInitial()

function newTodo(task) {
    
    console.log(task);
    let newEl = document.createElement('div'),
        text = document.createElement('div'),
        deleteBtn = document.createElement('img'),
        starBtn = document.createElement('img'),
        icons = document.createElement('div'),
        checkboxBtn = document.createElement('input')

    newEl.className = 'task'
    text.className = 'task-text'

    text.innerHTML = task? task: newItem[0].toUpperCase() + newItem.slice(1)

    storageArr.push(task? task : newItem[0].toUpperCase() + newItem.slice(1))
    localStorage.setItem('tasks', JSON.stringify(storageArr))


    icons.className = 'btns'
    deleteBtn.src = './trash-can-solid.svg'
    deleteBtn.className = 'delete'

    starBtn.src = './star-solid.svg'
    starBtn.className = 'star'

    checkboxBtn.type = 'checkbox'
    checkboxBtn.className = 'complete'

    newEl.appendChild(checkboxBtn)
    newEl.appendChild(text)
    icons.appendChild(deleteBtn)

    icons.appendChild(starBtn)
    newEl.appendChild(icons)

    theFirsrtChild = parentDiv.firstChild
    parentDiv.insertBefore(newEl, theFirsrtChild)
    addItem.value = ''

    bindTaskEvents(newEl)

}


//bind - связать

// true, false



let search = function(value) {
    console.log('Поиск...', value);
    taskText = document.querySelectorAll('.task-text'),
    console.log(taskText);

    taskText.forEach(task => {
        if(task.innerHTML.toLowerCase().includes(value)) {
            theFirsrtChild = parentDiv.firstChild
            parentDiv.insertBefore(task.parentNode, theFirsrtChild)
            console.log(value, 'найден');
        }
    })
}

// Декомпозиция: задача функционал поиска реализовать

// Как?
// div.task-text - множесство, лежат внутри div.task
// input.search - вбили текст
// Цикл каждый task.text ->
// сравниванение со всеми div.task-text if(input.value === div.task-text.innerHTML)
// показывает только его, остальные исчезают
// */

// let flag = 0
// taskText.forEach(t => t.addEventListener('click', function(e) {
//     if(flag === 0) {
//         e.target.style.textDecoration  = "line-through"
//         flag = 1
//     }
//     else if(flag === 1) {
//         e.target.style.textDecoration  = "none"
//         flag = 0
//     }
// }))

//Начать интернет магазин делать с детьми легкий
//Какой проект они придумали для своей идеи, добили ли Cat energy

/*
Идеи:
Школьный помощник по предметам
Маме-папе по работе попомщник сайт, интернет магазин
Игру
*/


/*
Декомпозиция: задача функционал поиска реализовать

Как?
div.task-text - множесство, лежат внутри div.task
input.search - вбили текст
Цикл каждый task.text ->
сравниванение со всеми div.task-text if(input.value === div.task-text.innerHTML)
показывает только его, остальные исчезают
*/