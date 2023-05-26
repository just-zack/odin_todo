/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let projectArray = [];
let currentSelectedProject;
let selectedProjectArray;

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
  newProjectName.setAttribute("id", projectName + "_btn");
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

function changeSelectedProject(projectName) {
  const projectDisplay = document.getElementById("current_project");
  projectDisplay.innerText = projectName;
  for (let i = 0; i < projectArray.length; i++) {
    if (projectArray[i].name === projectName) {
      currentSelectedProject = projectArray[i];
      selectedProjectArray = projectArray[i].taskArray;
    }
  }
  console.log(currentSelectedProject);
  console.log(selectedProjectArray);
}

function addProjectSelectionEventListener(projectNameNoSpaces, projectName) {
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    changeSelectedProject(projectName);
  });
}

function logNewProject() {
  let projectName = getNewProjectName();
  let projectNameNoSpaces = getNewProjectNameNoSpaces();

  overrideSubmit(event);
  createNewProject(projectName);
  displayNewProject();
  deleteProject(projectNameNoSpaces, projectName);
  addProjectSelectionEventListener(projectNameNoSpaces, projectName);
  clearNewProjectFields();
  console.log(projectArray);
}
function setHome() {
  let homeBtn = document.getElementById("home");
  let home = new Project("home");
  projectArray.push(home);
  currentSelectedProject = projectArray[0];
  homeBtn.addEventListener("click", () => {
    changeSelectedProject("home");
  });
}

function pushArray(addedTask) {
  currentSelectedProject.taskArray.push(addedTask);
  return console.log(currentSelectedProject);
}

function getCSP() {
  return currentSelectedProject;
}

function getSPA() {
  return selectedProjectArray;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Project,
  getNewProjectName,
  getNewProjectNameNoSpaces,
  createNewProject,
  displayNewProject,
  overrideSubmit,
  deleteProject,
  clearNewProjectFields,
  changeSelectedProject,
  addProjectSelectionEventListener,
  logNewProject,
  setHome,
  pushArray,
  getCSP,
  getSPA,
});

setHome();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgcHJvamVjdEFycmF5ID0gW107XG5sZXQgY3VycmVudFNlbGVjdGVkUHJvamVjdDtcbmxldCBzZWxlY3RlZFByb2plY3RBcnJheTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza0FycmF5ID0gW107XG4gIH1cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgdGhpcy50YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWUoKSB7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Byb2plY3RcIik7XG4gIHJldHVybiBuZXdQcm9qZWN0TmFtZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcygpIHtcbiAgcmV0dXJuIGdldE5ld1Byb2plY3ROYW1lKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0KCkge1xuICBsZXQgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Rfdmlld2VyXCIpO1xuICBsZXQgcHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCk7XG5cbiAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9jYXJkXCIsIHByb2plY3ROYW1lKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGl0bGVcIiwgcHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZSArIFwiX2J0blwiKTtcbiAgbmV3UHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XG4gIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZV9wcm9qZWN0XCIpO1xuICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lKTtcbiAgZGVsZXRlUHJvamVjdC5pbm5lclRleHQgPSBcIkRFTEVURVwiO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVN1Ym1pdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBwcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgICBkZWxldGVJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG15UHJvamVjdFRpdGxlID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgICBteVByb2plY3RUaXRsZSA9IG15UHJvamVjdFRpdGxlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICBpZiAobXlQcm9qZWN0VGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdQcm9qZWN0RmllbGRzKCkge1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdGVkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudF9wcm9qZWN0XCIpO1xuICBwcm9qZWN0RGlzcGxheS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdEFycmF5W2ldLm5hbWUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXlbaV0udGFza0FycmF5O1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0QXJyYXkpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0U2VsZWN0aW9uRXZlbnRMaXN0ZW5lcihwcm9qZWN0TmFtZU5vU3BhY2VzLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2J0blwiKTtcbiAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZVNlbGVjdGVkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2dOZXdQcm9qZWN0KCkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0TmFtZSgpO1xuICBsZXQgcHJvamVjdE5hbWVOb1NwYWNlcyA9IGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMoKTtcblxuICBvdmVycmlkZVN1Ym1pdChldmVudCk7XG4gIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICBkaXNwbGF5TmV3UHJvamVjdCgpO1xuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKTtcbiAgYWRkUHJvamVjdFNlbGVjdGlvbkV2ZW50TGlzdGVuZXIocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpO1xuICBjbGVhck5ld1Byb2plY3RGaWVsZHMoKTtcbiAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbn1cbmZ1bmN0aW9uIHNldEhvbWUoKSB7XG4gIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBsZXQgaG9tZSA9IG5ldyBQcm9qZWN0KFwiaG9tZVwiKTtcbiAgcHJvamVjdEFycmF5LnB1c2goaG9tZSk7XG4gIGN1cnJlbnRTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3QoXCJob21lXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaEFycmF5KGFkZGVkVGFzaykge1xuICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0LnRhc2tBcnJheS5wdXNoKGFkZGVkVGFzayk7XG4gIHJldHVybiBjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NQKCkge1xuICByZXR1cm4gY3VycmVudFNlbGVjdGVkUHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0U1BBKCkge1xuICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0QXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUHJvamVjdCxcbiAgZ2V0TmV3UHJvamVjdE5hbWUsXG4gIGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGRpc3BsYXlOZXdQcm9qZWN0LFxuICBvdmVycmlkZVN1Ym1pdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgY2xlYXJOZXdQcm9qZWN0RmllbGRzLFxuICBjaGFuZ2VTZWxlY3RlZFByb2plY3QsXG4gIGFkZFByb2plY3RTZWxlY3Rpb25FdmVudExpc3RlbmVyLFxuICBsb2dOZXdQcm9qZWN0LFxuICBzZXRIb21lLFxuICBwdXNoQXJyYXksXG4gIGdldENTUCxcbiAgZ2V0U1BBLFxufTtcblxuc2V0SG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9