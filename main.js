import {creatCheckBox, createTask, createTaskText, createTaskTime} from "./helpers.js";

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
