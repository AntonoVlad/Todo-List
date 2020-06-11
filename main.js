let addBtn = document.getElementById("add-btn")
addBtn.onclick = function () {
    let taskInput = document.getElementById("task-input")
    let taskInputValue = taskInput.value
    let task = creatTask()
    let taskBlock = document.getElementById("task-block")
    taskBlock.appendChild(task)
    let chekbox = creatChekbox(task)
    task.appendChild(chekbox)
    let taskTextBox = creatTextbox(taskInputValue)
    task.appendChild(taskTextBox)
    let taskTimeBox = creatTaskTimeBox()
    task.appendChild(taskTimeBox)
    let taskTime = creatTaskTime()
    taskTimeBox.appendChild(taskTime)
}

function creatChekbox(task) {
    let chekbox = document.createElement("input")
    chekbox.setAttribute("type", "checkbox")
    chekbox.setAttribute("class", "task-checkbox")
    chekbox.onchange = function (event) {

        let isCheckBoxChecked = event.target.checked
        let taskTimeBox = task.querySelector(".task-time-box")
        if (isCheckBoxChecked) {
            let doneTaskBlock = document.getElementById("done-task-block")
            doneTaskBlock.appendChild(task)
            let taskClock = creatTaskClock()
            taskTimeBox.appendChild(taskClock)
        } else {
            let taskBlock = document.getElementById("task-block")
            taskBlock.appendChild(task)
            let taskClock = task.querySelector(".task-clock")
            taskTimeBox.removeChild(taskClock)
        }

    }
    return chekbox
}

function creatTextbox(taskInputValue) {
    let taskTextBox = document.createElement("div")
    taskTextBox.setAttribute("class", "task-text")
    taskTextBox.textContent = taskInputValue

    return taskTextBox
}

function creatTaskTime() {
    let taskTime = document.createElement("div")
    taskTime.setAttribute("class", "task-time")
    taskTime.textContent = new Date().toLocaleTimeString('en', {hour: 'numeric', minute: 'numeric'})

    return taskTime
}

function creatTask() {
    let div = document.createElement("div")
    div.setAttribute("class", "task")

    return div
}

function creatTaskTimeBox() {
    let taskTimeBox = document.createElement("div")
    taskTimeBox.setAttribute("class", "task-time-box")

    return taskTimeBox
}

function creatTaskClock() {
    let taskClock = document.createElement("div")
    taskClock.setAttribute("class", "task-clock")
    taskClock.textContent = new Date().toLocaleTimeString('en', {hour: 'numeric', minute: 'numeric'})

    return taskClock
}

let taskFilter = document.querySelector(".page-search")
taskFilter.oninput = function () {
    let taskFilterValue = taskFilter.value
    let tasks = document.querySelectorAll(".task")
    tasks.forEach(function (task) {
        let taskTextBox = task.querySelector(".task-text")
        let taskText = taskTextBox.textContent
        let needShowTask = taskText.includes(taskFilterValue)
        task.classList.toggle("hidden",!needShowTask)
    })
}

