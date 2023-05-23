const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", logNewProject);

class Project {
  constructor(name) {
    this.name = name;
    this.taskArray = [];
  }
  addTask(newTask) {
    this.taskArray.push(newTask);
  }
}
function getNewProjectName() {
  let newProjectName = document.getElementById("new_project");
  return newProjectName.value;
}
function createNewProject(name) {
  new Project(name);
}

function displayNewProject() {
  let newProjectContainer = document.createElement("div");
  let newProjectName = document.createElement("button");
  let deleteProject = document.createElement("button");
  let projectContainer = document.getElementById("project_viewer");

  newProjectContainer.classList.add("project_card");
  projectContainer.appendChild(newProjectContainer);
  newProjectName.classList.add("project_title");
  newProjectName.innerText = getNewProjectName();
  newProjectContainer.appendChild(newProjectName);
  deleteProject.classList.add("delete_project");
  deleteProject.innerText = "DELETE";
  newProjectContainer.appendChild(deleteProject);
}

function overrideSubmit(event) {
  event.preventDefault();
}

function clearNewProjectFields() {
  let newProjectName = document.getElementById("new_project");
  newProjectName.value = "";
}

function logNewProject() {
  overrideSubmit(event);
  createNewProject(getNewProjectName());
  displayNewProject();
  clearNewProjectFields();
}
