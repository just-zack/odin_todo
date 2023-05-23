/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRfbmV3X3Byb2plY3RcIik7XG5jcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvZ05ld1Byb2plY3QpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrQXJyYXkgPSBbXTtcbiAgfVxuICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICB0aGlzLnRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICB9XG59XG5mdW5jdGlvbiBnZXROZXdQcm9qZWN0TmFtZSgpIHtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfcHJvamVjdFwiKTtcbiAgcmV0dXJuIG5ld1Byb2plY3ROYW1lLnZhbHVlO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gIG5ldyBQcm9qZWN0KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdCgpIHtcbiAgbGV0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0X3ZpZXdlclwiKTtcblxuICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2NhcmRcIik7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gIG5ld1Byb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3RpdGxlXCIpO1xuICBuZXdQcm9qZWN0TmFtZS5pbm5lclRleHQgPSBnZXROZXdQcm9qZWN0TmFtZSgpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbiAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlX3Byb2plY3RcIik7XG4gIGRlbGV0ZVByb2plY3QuaW5uZXJUZXh0ID0gXCJERUxFVEVcIjtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVTdWJtaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdQcm9qZWN0RmllbGRzKCkge1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGxvZ05ld1Byb2plY3QoKSB7XG4gIG92ZXJyaWRlU3VibWl0KGV2ZW50KTtcbiAgY3JlYXRlTmV3UHJvamVjdChnZXROZXdQcm9qZWN0TmFtZSgpKTtcbiAgZGlzcGxheU5ld1Byb2plY3QoKTtcbiAgY2xlYXJOZXdQcm9qZWN0RmllbGRzKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=