let btn = document.querySelector("#add-btn")
let openTaskBlock = document.querySelector(".open-task-section .task-block")
let inputTask = document.querySelector(".new-task-input")
let doneTaskBlock = document.querySelector(".done-task-section .task-block")
let clearOpenTask = document.querySelector(".clear-open")
let clearDoneTask = document.querySelector(".clear-done")
let searchInput = document.querySelector(".page-search")
let openSelect = document.querySelector(".open-task-section .select")
let doneSelect = document.querySelector(".done-task-section .select")

btn.addEventListener("click", function () {
    let newTask = createTask()
    let newCheckbox = createCheckboxTask(newTask)
    let newText = createTextTask(inputTask.value)
    let newDate = createDateTask()
    openTaskBlock.appendChild(newTask)
    newTask.appendChild(newCheckbox)
    newTask.appendChild(newText)
    newTask.appendChild(newDate)
    inputTask.value = ""
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

        } else {
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
    dateTask.setAttribute("data-date", new Date().getTime())
    dateTask.textContent = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()

    return dateTask
}

clearOpenTask.addEventListener("click", function () {
    openTaskBlock.textContent = ""
})

clearDoneTask.addEventListener("click", function () {
    doneTaskBlock.textContent = ""
})

searchInput.addEventListener("input", function () {
    let allTasks = document.querySelectorAll(".task")
    for (let i = 0; i < allTasks.length; i++) {
        let text = allTasks[i].querySelector(".task-text").textContent
        if (text.toLowerCase().includes(searchInput.value.toLowerCase())) {
            allTasks[i].classList.remove("hidden")
        } else {
            allTasks[i].classList.add("hidden")
        }
    }
})

openSelect.addEventListener("change", function () {
    let tasks = openTaskBlock.querySelectorAll(".task")
    let tasksArray = Array.from(tasks)
    tasksArray.sort(function (task1, task2) {
        let task1Date = task1.querySelector(".task-time").getAttribute("data-date")
        let task2Date = task2.querySelector(".task-time").getAttribute("data-date")

        return openSelect.value == "dsc" ? task2Date - task1Date : task1Date - task2Date
    })
    tasksArray.forEach(function (task) {
        openTaskBlock.appendChild(task)
    })
})


doneSelect.addEventListener("change", function () {
    let tasks = doneTaskBlock.querySelectorAll(".task")
    let taskArray = Array.from(tasks)
    taskArray.sort(function (task1, task2) {
        let task1Date = task1.querySelector(".task-text").textContent
        let task2Date = task2.querySelector(".task-text").textContent

        if (task1Date > task2Date) {

            return doneSelect.value == "desc" ? -1 : 1
        }
        if (task1Date < task2Date) {

            return doneSelect.value == "desc" ? 1 : -1
        }

            return 0
    })
    taskArray.forEach(function (task) {
        doneTaskBlock.appendChild(task)
    })

})

