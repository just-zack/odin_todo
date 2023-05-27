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
  console.log(projectFunctions.getCurrentNameNoSpace());
  console.log(projectFunctions.getNewProjectNameNoSpaces());
  console.log(projectFunctions.getNewProjectName);
  addProjectSelectionEventListener(
    projectFunctions.getNewProjectNameNoSpaces(),
    projectFunctions.getNewProjectName(),
    projectFunctions.getSPA
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
  projectFunctions.pushArray(taskFunctions.getCurrentTask());
  console.log(projectFunctions.getSPA());
  console.log(projectFunctions.getCurrentNameNoSpace());
  console.log(taskFunctions.getCurrentTask());

  displayFunctions.displayTasksByProject(
    projectFunctions.getCSP(),
    projectFunctions.getCurrentNameNoSpace()
  );
});

function addProjectSelectionEventListener(
  projectNameNoSpaces,
  projectName,
  projectArray
) {
  console.log(projectNameNoSpaces);
  console.log("break");
  console.log(projectName);
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    projectFunctions.changeSelectedProject(projectName);
    projectFunctions.replaceTaskContainer(projectNameNoSpaces);
    displayFunctions.displayTasksByProject(
      projectName,
      projectNameNoSpaces,
      projectArray
    );
  });
}
// call a taskFunction that uses projectFunctions.currentSelectedProject
