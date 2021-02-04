let btn = document.querySelector("#add-btn")
let openTaskBlock = document.querySelector(".open-task-section .task-block")
let inputTask = document.querySelector(".new-task-input")
let doneTaskBlock = document.querySelector(".done-task-section")

btn.addEventListener("click", function () {
    let newTask = createTask()
    let newCheckbox = createCheckboxTask(newTask)
    let newText = createTextTask(inputTask.value)
    let newDate = createDateTask()
    openTaskBlock.appendChild(newTask)
    newTask.appendChild(newCheckbox)
    newTask.appendChild(newText)
    newTask.appendChild(newDate)
})

function createTask() {
    let newTask = document.createElement("div")
    newTask.classList.add("task")

    return newTask
}

function createCheckboxTask(newTask) {
    let checkbox = document.createElement("input")
    checkbox.classList.add("task-checkbox")
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            doneTaskBlock.appendChild(newTask)

        }else {
            openTaskBlock.appendChild(newTask)

        }

    })

    return checkbox
}

function createTextTask(value) {
    let textTask = document.createElement("div")
    textTask.classList.add("task-text")
    textTask.textContent = value

    return textTask
}

function createDateTask() {
    let dateTask = document.createElement("div")
    dateTask.classList.add("task-time")
    dateTask.textContent = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()

    return dateTask
}

