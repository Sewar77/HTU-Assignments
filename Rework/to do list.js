let add_task_btn = document.getElementById("add-task-btn");

add_task_btn.onclick = function () {
  let added_task = document.getElementById("added-task").value;
  let newLi = document.createElement("li");
  if (added_task.trim() !== "") {
    newLi.innerText = added_task;
    document.getElementById("uncompleted-tasks-list").appendChild(newLi);
    document.getElementById("added-task").value = "";
  } else {
    alert("Please enter a task!");
  }
};

let deleteTasksButton = document.getElementById("delete-task-btn");

deleteTasksButton.onclick = function () {
  let completedList = document.getElementById("completed-tasks-list");
  while (completedList.firstChild) {
    completedList.removeChild(completedList.firstChild);
  }
  tasks = tasks.filter((task) => !task.completed);
};


let completeTaskBtn = document.getElementById("complete-task-btn");

completeTaskBtn.onclick = function () {
  let uncompletedList = document.getElementById("uncompleted-tasks-list");
  let completedList = document.getElementById("completed-tasks-list");

  while (uncompletedList.firstChild) {
    let taskItem = uncompletedList.firstChild; // Get the first task
    completedList.appendChild(taskItem); // Move to completed list
  }

  // Update tasks array (if using an array)
  tasks.forEach((task) => {
    task.completed = true; // Mark as completed
  });
};
