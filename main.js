import {creatCheckBox, createTask, createTaskText, createTaskTime} from "./helpers.js";

let btn = document.querySelector("#add-btn")
let input = document.querySelector("#task-input")
let taskBlock = document.querySelector("#task-block")
let doneTaskBlock = document.querySelector("#done-task-block")
btn.onclick = function () {
    let inputValue = input.value
    let task = createTask()
    let checkBox = creatCheckBox(task)
    task.append(checkBox)
    let taskText = createTaskText(inputValue)
    task.append(taskText)
    let taskTime = createTaskTime()
    task.append(taskTime)
    taskBlock.append(task)
}
let clearOpen = document.querySelector(".clear-open")
let clearDone = document.querySelector(".clear-done")
clearOpen.onclick = function () {
    let tasks = taskBlock.querySelectorAll(".task")
    for (let task of tasks) {
        taskBlock.removeChild(task)
    }
}
clearDone.onclick = function () {
    let tasks = doneTaskBlock.querySelectorAll(".task")
    for (let task of tasks) {
        doneTaskBlock.removeChild(task)
    }
}