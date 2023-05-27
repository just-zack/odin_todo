import "./styles/style.css";
import "../src/content/NPC_logo.png";
import projectFunctions from "./projectHandler.js";
import taskFunctions from "./taskHandler.js";
import displayFunctions from "./displayHandler.js";

projectFunctions.setHome();
let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  projectFunctions.changeSelectedProject("home");
  projectFunctions.replaceTaskContainer("home");
  displayFunctions.displayTasksByProject(
    projectFunctions.getHome().taskArray,
    "home"
  );
});

const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", () => {
  projectFunctions.logNewProject();
  addProjectSelectionEventListener(
    projectFunctions.getNewProjectNameNoSpaces(),
    projectFunctions.getNewProjectName()
  );
  projectFunctions.clearNewProjectFields();
});

/*
const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", () => {
  taskFunctions.logNewTask();
  projectFunctions.pushArray(taskFunctions.getCurrentTask());
  console.log(projectFunctions.getSPA());
  console.log(projectFunctions.getCurrentNameNoSpace());
  console.log(taskFunctions.getCurrentTask());
  let taskName = taskFunctions.getCurrentTask();
  displayFunctions.displayTaskSubmit(
    projectFunctions.getCurrentNameNoSpace(),
    taskName,
    taskFunctions.getNewTaskNameNoSpaces()
  );
  const deleteTaskBtn = document.getElementById(
    taskFunctions.getNewTaskNameNoSpaces() + "_delete"
  );
  const taskCard = document.getElementById("t_" + taskName.name);
  deleteTaskBtn.addEventListener("click", () => {
    taskCard.remove();
  });
});
*/

const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", () => {
  taskFunctions.logNewTask();
  if (projectFunctions.getCSP().name !== "home") {
    projectFunctions.pushArray(taskFunctions.getCurrentTask());
    projectFunctions.pushHomeArray(taskFunctions.getCurrentTask());
  } else {
    projectFunctions.pushHomeArray(taskFunctions.getCurrentTask());
  }
  displayFunctions.displayTasksByProject(
    projectFunctions.getSPA(),
    projectFunctions.getCurrentNameNoSpace()
  );
});

function addProjectSelectionEventListener(projectNameNoSpaces, projectName) {
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    projectFunctions.changeSelectedProject(projectName);
    displayFunctions.replaceTaskContainer(projectNameNoSpaces);
    displayFunctions.displayTasksByProject(
      projectFunctions.getSPA(),
      projectNameNoSpaces
    );
  });
}
// call a taskFunction that uses projectFunctions.currentSelectedProject
