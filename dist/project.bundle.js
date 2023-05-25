/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/globalVar.js":
/*!**************************!*\
  !*** ./src/globalVar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let currentSelectedProject;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ currentSelectedProject });


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/globalVar.js");
const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", logNewProject);
let projectArray = [];

_globalVar_js__WEBPACK_IMPORTED_MODULE_0__["default"] = "";

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
      _globalVar_js__WEBPACK_IMPORTED_MODULE_0__["default"] = projectArray[i];
    }
  }
  console.log(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
  _globalVar_js__WEBPACK_IMPORTED_MODULE_0__["default"] = projectArray[0];
  homeBtn.addEventListener("click", () => {
    changeSelectedProject("home");
  });
}

setHome();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlLEVBQUUsd0JBQXdCLEVBQUM7Ozs7Ozs7VUNEMUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNvRDtBQUNwRCxxREFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0EsTUFBTSxxREFBc0I7QUFDNUI7QUFDQTtBQUNBLGNBQWMscURBQXNCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFzQjtBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL2dsb2JhbFZhci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGN1cnJlbnRTZWxlY3RlZFByb2plY3Q7XG5leHBvcnQgZGVmYXVsdCB7IGN1cnJlbnRTZWxlY3RlZFByb2plY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRfbmV3X3Byb2plY3RcIik7XG5jcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvZ05ld1Byb2plY3QpO1xubGV0IHByb2plY3RBcnJheSA9IFtdO1xuaW1wb3J0IGN1cnJlbnRTZWxlY3RlZFByb2plY3QgZnJvbSBcIi4vZ2xvYmFsVmFyLmpzXCI7XG5jdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gXCJcIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza0FycmF5ID0gW107XG4gIH1cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgdGhpcy50YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWUoKSB7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Byb2plY3RcIik7XG4gIHJldHVybiBuZXdQcm9qZWN0TmFtZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcygpIHtcbiAgcmV0dXJuIGdldE5ld1Byb2plY3ROYW1lKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0KCkge1xuICBsZXQgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Rfdmlld2VyXCIpO1xuICBsZXQgcHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCk7XG5cbiAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9jYXJkXCIsIHByb2plY3ROYW1lKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGl0bGVcIiwgcHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZSArIFwiX2J0blwiKTtcbiAgbmV3UHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XG4gIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZV9wcm9qZWN0XCIpO1xuICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lKTtcbiAgZGVsZXRlUHJvamVjdC5pbm5lclRleHQgPSBcIkRFTEVURVwiO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVN1Ym1pdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBwcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgICBkZWxldGVJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG15UHJvamVjdFRpdGxlID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgICBteVByb2plY3RUaXRsZSA9IG15UHJvamVjdFRpdGxlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICBpZiAobXlQcm9qZWN0VGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdQcm9qZWN0RmllbGRzKCkge1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdGVkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudF9wcm9qZWN0XCIpO1xuICBwcm9qZWN0RGlzcGxheS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdEFycmF5W2ldLm5hbWUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFNlbGVjdGlvbkV2ZW50TGlzdGVuZXIocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9idG5cIik7XG4gIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3QocHJvamVjdE5hbWUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9nTmV3UHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3ROYW1lID0gZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgbGV0IHByb2plY3ROYW1lTm9TcGFjZXMgPSBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCk7XG5cbiAgb3ZlcnJpZGVTdWJtaXQoZXZlbnQpO1xuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgZGlzcGxheU5ld1Byb2plY3QoKTtcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZU5vU3BhY2VzLCBwcm9qZWN0TmFtZSk7XG4gIGFkZFByb2plY3RTZWxlY3Rpb25FdmVudExpc3RlbmVyKHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKTtcbiAgY2xlYXJOZXdQcm9qZWN0RmllbGRzKCk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG59XG5mdW5jdGlvbiBzZXRIb21lKCkge1xuICBsZXQgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgbGV0IGhvbWUgPSBuZXcgUHJvamVjdChcImhvbWVcIik7XG4gIHByb2plY3RBcnJheS5wdXNoKGhvbWUpO1xuICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5WzBdO1xuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0KFwiaG9tZVwiKTtcbiAgfSk7XG59XG5cbnNldEhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==