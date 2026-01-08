let taskList = document.getElementById("taskList");

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerText = taskText;

    li.onclick = function () {
        li.classList.toggle("completed");
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
