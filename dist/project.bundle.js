/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", logNewProject);
let projectArray = [];

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

function getNewProjectNameNoSpaces() {
  return getNewProjectName().split(" ").join("");
}

function createNewProject(name) {
  projectArray.push(new Project(name));
}

function displayNewProject() {
  let newProjectContainer = document.createElement("div");
  let newProjectName = document.createElement("button");
  let deleteProject = document.createElement("button");
  let projectContainer = document.getElementById("project_viewer");
  let projectName = getNewProjectNameNoSpaces();

  newProjectContainer.classList.add("project_card", projectName);
  projectContainer.appendChild(newProjectContainer);
  newProjectName.classList.add("project_title", projectName);
  newProjectName.innerText = getNewProjectName();
  newProjectContainer.appendChild(newProjectName);
  deleteProject.classList.add("delete_project");
  deleteProject.setAttribute("id", projectName);
  deleteProject.innerText = "DELETE";
  newProjectContainer.appendChild(deleteProject);
}

function overrideSubmit(event) {
  event.preventDefault();
}

function listenForDelete(value) {
  let deleteButton = document.getElementById(value);
  deleteButton.addEventListener("click", deleteExistingProject);

  function deleteExistingProject(value) {
    const deleteItems = document.querySelectorAll(value);
    deleteItems.forEach((element) => element.remove());
  }
}

function deleteProject(projectNameNoSpaces, projectName) {
  const deleteBtn = document.getElementById(projectNameNoSpaces);
  deleteBtn.addEventListener("click", () => {
    const deleteItems = document.querySelectorAll("." + projectNameNoSpaces);
    deleteItems.forEach((element) => element.remove());
    for (let i = 0; i < projectArray.length; i++) {
      let myProjectTitle = projectArray[i].name;
      myProjectTitle = myProjectTitle.replace(/\s+/g, "");
      if (myProjectTitle === projectName) {
        projectArray.splice(i, 1);
      }
    }
  });
}

function clearNewProjectFields() {
  let newProjectName = document.getElementById("new_project");
  newProjectName.value = "";
}

function logNewProject() {
  let projectName = getNewProjectName();
  let projectNameNoSpaces = getNewProjectNameNoSpaces();

  overrideSubmit(event);
  createNewProject(projectName);
  displayNewProject();
  deleteProject(projectNameNoSpaces, projectName);
  clearNewProjectFields();
  console.log(projectArray);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRfbmV3X3Byb2plY3RcIik7XG5jcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvZ05ld1Byb2plY3QpO1xubGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrQXJyYXkgPSBbXTtcbiAgfVxuICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICB0aGlzLnRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICB9XG59XG5mdW5jdGlvbiBnZXROZXdQcm9qZWN0TmFtZSgpIHtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfcHJvamVjdFwiKTtcbiAgcmV0dXJuIG5ld1Byb2plY3ROYW1lLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCkge1xuICByZXR1cm4gZ2V0TmV3UHJvamVjdE5hbWUoKS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld1Byb2plY3QoKSB7XG4gIGxldCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF92aWV3ZXJcIik7XG4gIGxldCBwcm9qZWN0TmFtZSA9IGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMoKTtcblxuICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2NhcmRcIiwgcHJvamVjdE5hbWUpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90aXRsZVwiLCBwcm9qZWN0TmFtZSk7XG4gIG5ld1Byb2plY3ROYW1lLmlubmVyVGV4dCA9IGdldE5ld1Byb2plY3ROYW1lKCk7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xuICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJkZWxldGVfcHJvamVjdFwiKTtcbiAgZGVsZXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZSk7XG4gIGRlbGV0ZVByb2plY3QuaW5uZXJUZXh0ID0gXCJERUxFVEVcIjtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVTdWJtaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuRm9yRGVsZXRlKHZhbHVlKSB7XG4gIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSk7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlRXhpc3RpbmdQcm9qZWN0KTtcblxuICBmdW5jdGlvbiBkZWxldGVFeGlzdGluZ1Byb2plY3QodmFsdWUpIHtcbiAgICBjb25zdCBkZWxldGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpO1xuICAgIGRlbGV0ZUl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdE5hbWVOb1NwYWNlcyk7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICAgIGRlbGV0ZUl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbXlQcm9qZWN0VGl0bGUgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICAgIG15UHJvamVjdFRpdGxlID0gbXlQcm9qZWN0VGl0bGUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgIGlmIChteVByb2plY3RUaXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhck5ld1Byb2plY3RGaWVsZHMoKSB7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Byb2plY3RcIik7XG4gIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gbG9nTmV3UHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3ROYW1lID0gZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgbGV0IHByb2plY3ROYW1lTm9TcGFjZXMgPSBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCk7XG5cbiAgb3ZlcnJpZGVTdWJtaXQoZXZlbnQpO1xuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgZGlzcGxheU5ld1Byb2plY3QoKTtcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZU5vU3BhY2VzLCBwcm9qZWN0TmFtZSk7XG4gIGNsZWFyTmV3UHJvamVjdEZpZWxkcygpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9