import "./styles/style.css";
import "../src/content/NPC_logo.png";
import projectFunctions from "./projectHandler.js";
import taskFunctions from "./taskHandler.js";
let currentTaskCopy;

projectFunctions.setHome();

const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", () => {
  projectFunctions.logNewProject();
  console.log(projectFunctions.getCSP());
  console.log(projectFunctions.getSPA());
});

const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", () => {
  taskFunctions.logNewTask();
  projectFunctions.pushArray(taskFunctions.getCurrentTask());
  console.log(projectFunctions.getSPA());
  const homeContainer = document.getElementById("home_container");
  let taskCard = taskFunctions.createTaskCard();
  homeContainer.appendChild(taskCard);
});

// call a taskFunction that uses projectFunctions.currentSelectedProject
