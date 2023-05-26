let currentTask;

class Task {
  constructor(name, date, urgency, description) {
    this.name = name;
    this.date = date;
    this.urgency = urgency;
    this.description = description;
  }
}

function createNewTask(name, date, urgency, description) {
  currentTask = new Task(name, date, urgency, description);
}

function overrideSubmit(event) {
  event.preventDefault();
}

function getNewTaskName() {
  let newTaskName = document.getElementById("new_task");
  return newTaskName.value;
}

function getNewTaskNameNoSpaces() {
  return getNewTaskName().split(" ").join("");
}

function clearNewTaskFields() {
  const taskForm = document.getElementById("new_task_form");
  taskForm.reset();
}

function logNewTask() {
  const taskName = document.getElementById("new_task");
  const taskDate = document.getElementById("due_date");
  const taskUrgency = document.getElementById("urgency");
  const taskDescription = document.getElementById("description");
  let name = taskName.value;
  let date = taskDate.value;
  let urgency = taskUrgency.value;
  let description = taskDescription.value;

  overrideSubmit(event);
  createNewTask(name, date, urgency, description);
  console.log(currentTask);
  clearNewTaskFields();
}

function getCurrentTask() {
  console.log(currentTask);
  return currentTask;
}

function createTaskCard() {
  const taskCard = document.createElement("div");
  const taskContent = document.createElement("div");
  const taskRow1 = document.createElement("div");
  const taskRow2 = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskDate = document.createElement("h3");
  const taskUrgency = document.createElement("h3");
  const taskDescription = document.createElement("h3");
  const doneBtn = document.createElement("button");
  const deleteButton = document.createElement("button");

  taskCard.setAttribute("id", "t_" + currentTask.name);
  taskCard.classList.add("task_card");
  taskContent.classList.add("task_content");
  doneBtn.classList.add("done_btn");
  taskCard.appendChild(doneBtn);
  taskCard.appendChild(taskName);
  taskCard.appendChild(taskRow1);
  doneBtn.addEventListener("click", () => {
    taskName.classList.toggle("done");
  });

  taskCard.appendChild(taskContent);
  taskRow1.classList.add("task_row");
  taskRow2.classList.add("task_row");
  taskName.innerText = "Task: " + currentTask.name;
  taskDate.innerText = "Due Date: " + currentTask.date;
  taskDate.style.color = "#2ec4b6";
  taskRow1.appendChild(taskDate);
  taskContent.appendChild(taskRow1);
  taskUrgency.innerText = currentTask.urgency;
  taskRow1.appendChild(taskUrgency);
  taskContent.appendChild(taskRow2);
  taskDescription.innerText = "Description: " + currentTask.description;
  taskRow2.appendChild(taskDescription);

  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete_task");
  taskCard.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
  });

  return taskCard;
}

function deleteTask() {
  alert("what?!");
}

export default {
  Task,
  createNewTask,
  overrideSubmit,
  getNewTaskName,
  getNewTaskNameNoSpaces,
  clearNewTaskFields,
  logNewTask,
  getCurrentTask,
  createTaskCard,
};
