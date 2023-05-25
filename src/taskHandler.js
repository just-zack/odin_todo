const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", logNewTask);
import currentSelectedProject from "./globalVar.js";

class Task {
  constructor(name, date, urgency, description) {
    this.name = name;
    this.date = date;
    this.urgency = urgency;
    this.description = description;
  }
}

function createNewTask(name, date, urgency, description) {
  taskArray.push(new Task(name, date, urgency, description));
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
  let taskArray = currentSelectedProject.taskArray;

  overrideSubmit(event);
  console.log(currentSelectedProject);
  taskArray.push(createNewTask(name, date, urgency, description));
  clearNewTaskFields();
  console.log(taskArray);
  console.log(currentSelectedProject);
}
