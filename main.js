let btn = document.querySelector("#add-btn")
let input = document.querySelector("#task-input")
let taskBlock = document.querySelector("#task-block")
btn.onclick = function() {
    let inputValue = input.value
    let task = document.createElement("div")
    task.classList.add("task")
    taskBlock.append(task)
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    task.append(checkBox)
    let taskText = document.createElement("div")
    taskText.classList.add("task-text")
    taskText.textContent = inputValue
    task.append(taskText)
    let taskTime = document.createElement("div")
    taskTime.classList.add("task-time")
    taskTime.textContent = new Date().toLocaleTimeString()
    task.append(taskTime)
}