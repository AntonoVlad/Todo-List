let btn = document.querySelector("#add-btn")
let input = document.querySelector("#task-input")
let taskBlock = document.querySelector("#task-block")
btn.onclick = function() {
    let inputValue = input.value
    let task = createTask()
    let checkBox = creatCheckBox()
    task.append(checkBox)
    let taskText = createTaskText(inputValue)
    task.append(taskText)
    let taskTime = createTaskTime()
    task.append(taskTime)
    taskBlock.append(task)
}
let createTask = function() {
    let task = document.createElement("div")
    task.classList.add("task")

    return task
}
let creatCheckBox = function () {
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")

    return checkBox
}
let createTaskText = function(value) {
    let taskText = document.createElement("div")
    taskText.classList.add("task-text")
    taskText.textContent = value

    return taskText
}
let createTaskTime = function () {
    let taskTime = document.createElement("div")
    taskTime.classList.add("task-time")
    taskTime.textContent = new Date().toLocaleTimeString()

    return taskTime
}