let addBtn = document.getElementById("add-btn")
addBtn.onclick = function () {
    let taskInput = document.getElementById("task-input")
    let taskInputValue = taskInput.value
    let div = creatTask()
    let taskBlock = document.getElementById("task-block")
    taskBlock.appendChild(div)
    let chekbox = creatChekbox(div)
    div.appendChild(chekbox)
    let taskTextBox = creatTextbox(taskInputValue)
    div.appendChild(taskTextBox)
    let taskTime = creatTaskTime()
    div.appendChild(taskTime)

}

function creatChekbox(task) {
    let chekbox = document.createElement("input")
    chekbox.setAttribute("type", "checkbox")
    chekbox.setAttribute("class", "task-checkbox")
    chekbox.onchange = function () {
        let doneTaskBlock = document.getElementById("done-task-block")
        doneTaskBlock.appendChild(task)

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