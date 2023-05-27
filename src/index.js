import "./styles/style.css";
import "../src/content/NPC_logo.png";
import projectFunctions from "./projectHandler.js";
import taskFunctions from "./taskHandler.js";
import displayFunctions from "./displayHandler.js";
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
  console.log(projectFunctions.getCurrentNameNoSpace());
  console.log(taskFunctions.getCurrentTask());
  displayFunctions.displayTaskSubmit(
    projectFunctions.getCurrentNameNoSpace(),
    taskFunctions.getCurrentTask()
  );
});

// call a taskFunction that uses projectFunctions.currentSelectedProject
