let openTaskBlock = document.querySelector("#task-block")
let doneTaskBlock = document.querySelector("#done-task-block")
export let createTask = function () {
    let task = document.createElement("div")
    task.classList.add("task")

    return task
}
export let creatCheckBox = function (task) {
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.onchange = function (e) {
        if (checkBox.checked) {
            openTaskBlock.removeChild(task)
            doneTaskBlock.append(task)
        } else {
            doneTaskBlock.removeChild(task)
            openTaskBlock.append(task)
        }
    }
    return checkBox
}
export let createTaskText = function (value) {
    let taskText = document.createElement("div")
    taskText.classList.add("task-text")
    taskText.textContent = value

    return taskText
}
export let createTaskTime = function () {
    let taskTime = document.createElement("div")
    taskTime.classList.add("task-time")
    taskTime.textContent = new Date().toLocaleTimeString()

    return taskTime
}