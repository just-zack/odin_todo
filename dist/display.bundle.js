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
  !*** ./src/displayHandler.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTaskCard(currentTask, currentProject, homeProject) {
  const taskCard = document.createElement("div");
  const taskContent = document.createElement("div");
  const taskRow1 = document.createElement("div");
  const taskRow2 = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskDate = document.createElement("h3");
  const taskUrgency = document.createElement("h3");
  const taskDescription = document.createElement("h3");
  const doneBtn = document.createElement("button");

  taskCard.setAttribute("id", "t_" + currentTask.name);
  taskCard.classList.add("task_card");
  taskContent.classList.add("task_content");
  doneBtn.classList.add("done_btn");
  taskCard.appendChild(doneBtn);
  taskCard.appendChild(taskName);
  taskCard.appendChild(taskRow1);
  doneBtn.addEventListener("click", () => {
    taskName.classList.toggle("done");
  });

  taskCard.appendChild(taskContent);
  taskRow1.classList.add("task_row");
  taskRow2.classList.add("task_row");
  taskName.innerText = "Task: " + currentTask.name;
  taskDate.innerText = "Due Date: " + currentTask.date;
  taskDate.style.color = "#2ec4b6git p";
  taskRow1.appendChild(taskDate);
  taskContent.appendChild(taskRow1);
  taskUrgency.innerText = currentTask.urgency;
  taskRow1.appendChild(taskUrgency);
  taskContent.appendChild(taskRow2);
  taskDescription.innerText = "Description: " + currentTask.description;
  taskRow2.appendChild(taskDescription);

  const deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("id", currentTask.name + "_delete");
  deleteButton.classList.add("delete_task");
  taskCard.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
    console.log(homeProject);
    removeTaskFromArray(currentTask, currentProject, homeProject);
  });
  return taskCard;
}

function removeTaskFromArray(currentTask, currentProject, homeProject) {
  console.log(homeProject);
  console.log(currentProject);
  if (currentProject.name !== homeProject.name) {
    for (let i = 0; i < currentProject.taskArray.length; i++) {
      if (currentProject.taskArray[i] === currentTask) {
        currentProject.taskArray.splice(i, 1);
      }
    }
    for (let i = 0; i < homeProject.taskArray.length; i++) {
      if (homeProject.taskArray[i] === currentTask) {
        homeProject.taskArray.splice(i, 1);
      }
    }
  } else {
    for (let i = 0; i < homeProject.taskArray.length; i++) {
      if (homeProject.taskArray[i] === currentTask) {
        homeProject.taskArray.splice(i, 1);
      }
    }
  }
  console.log("fire");
  console.log(homeProject);
  console.log(currentProject);
  console.log(currentTask);
}
/*function displayTaskSubmit(value, currentTask, currentTaskNoSpaces) {
const currentContainer = document.getElementById(value + "_container");
let taskCard = createTaskCard(currentTask);
const deleteButton = document.createElement("button");
currentContainer.appendChild(taskCard);

deleteButton.innerText = "Delete";
deleteButton.setAttribute("id", currentTaskNoSpaces + "_delete");
deleteButton.classList.add("delete_task");
taskCard.appendChild(deleteButton);
}
*/
function displayTasksByProject(
  currentProject,
  currentProjectNameNoSpaces,
  homeProject
) {
  let taskCard;
  clearTaskDisplay(currentProjectNameNoSpaces);
  const currentContainer = document.getElementById(
    currentProjectNameNoSpaces + "_container"
  );
  for (let i = 0; i < currentProject.taskArray.length; i++) {
    taskCard = createTaskCard(
      currentProject.taskArray[i],
      currentProject,
      homeProject
    );
    currentContainer.appendChild(taskCard);
  }
}

function clearTaskDisplay(currentProjectNameNoSpaces) {
  const currentContainer = document.getElementById(
    currentProjectNameNoSpaces + "_container"
  );
  currentContainer.remove();
  const newTaskContainer = document.createElement("div");
  const taskContent = document.getElementById("task_content");
  newTaskContainer.setAttribute(
    "id",
    currentProjectNameNoSpaces + "_container"
  );
  newTaskContainer.classList.add("project_tasks");
  taskContent.appendChild(newTaskContainer);
}

function replaceTaskContainer(projectNameNoSpaces) {
  const currentTaskContainer = document.querySelector(".project_tasks");
  currentTaskContainer.remove();

  const newTaskContainer = document.createElement("div");
  const taskContent = document.getElementById("task_content");
  newTaskContainer.setAttribute("id", projectNameNoSpaces + "_container");
  newTaskContainer.classList.add("project_tasks");
  taskContent.appendChild(newTaskContainer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTaskCard,
  displayTasksByProject,
  replaceTaskContainer,
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9CQUFvQixrQ0FBa0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9kaXNwbGF5SGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKGN1cnJlbnRUYXNrLCBjdXJyZW50UHJvamVjdCwgaG9tZVByb2plY3QpIHtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tSb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1JvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tVcmdlbmN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHRhc2tDYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidF9cIiArIGN1cnJlbnRUYXNrLm5hbWUpO1xuICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwidGFza19jYXJkXCIpO1xuICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza19jb250ZW50XCIpO1xuICBkb25lQnRuLmNsYXNzTGlzdC5hZGQoXCJkb25lX2J0blwiKTtcbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza1JvdzEpO1xuICBkb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImRvbmVcIik7XG4gIH0pO1xuXG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgdGFza1JvdzEuY2xhc3NMaXN0LmFkZChcInRhc2tfcm93XCIpO1xuICB0YXNrUm93Mi5jbGFzc0xpc3QuYWRkKFwidGFza19yb3dcIik7XG4gIHRhc2tOYW1lLmlubmVyVGV4dCA9IFwiVGFzazogXCIgKyBjdXJyZW50VGFzay5uYW1lO1xuICB0YXNrRGF0ZS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBcIiArIGN1cnJlbnRUYXNrLmRhdGU7XG4gIHRhc2tEYXRlLnN0eWxlLmNvbG9yID0gXCIjMmVjNGI2Z2l0IHBcIjtcbiAgdGFza1JvdzEuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrUm93MSk7XG4gIHRhc2tVcmdlbmN5LmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLnVyZ2VuY3k7XG4gIHRhc2tSb3cxLmFwcGVuZENoaWxkKHRhc2tVcmdlbmN5KTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1JvdzIpO1xuICB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjogXCIgKyBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgdGFza1JvdzIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgY3VycmVudFRhc2submFtZSArIFwiX2RlbGV0ZVwiKTtcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVfdGFza1wiKTtcbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0NhcmQucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coaG9tZVByb2plY3QpO1xuICAgIHJlbW92ZVRhc2tGcm9tQXJyYXkoY3VycmVudFRhc2ssIGN1cnJlbnRQcm9qZWN0LCBob21lUHJvamVjdCk7XG4gIH0pO1xuICByZXR1cm4gdGFza0NhcmQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tQXJyYXkoY3VycmVudFRhc2ssIGN1cnJlbnRQcm9qZWN0LCBob21lUHJvamVjdCkge1xuICBjb25zb2xlLmxvZyhob21lUHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0Lm5hbWUgIT09IGhvbWVQcm9qZWN0Lm5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tBcnJheVtpXSA9PT0gY3VycmVudFRhc2spIHtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob21lUHJvamVjdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChob21lUHJvamVjdC50YXNrQXJyYXlbaV0gPT09IGN1cnJlbnRUYXNrKSB7XG4gICAgICAgIGhvbWVQcm9qZWN0LnRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9tZVByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaG9tZVByb2plY3QudGFza0FycmF5W2ldID09PSBjdXJyZW50VGFzaykge1xuICAgICAgICBob21lUHJvamVjdC50YXNrQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhcImZpcmVcIik7XG4gIGNvbnNvbGUubG9nKGhvbWVQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XG59XG4vKmZ1bmN0aW9uIGRpc3BsYXlUYXNrU3VibWl0KHZhbHVlLCBjdXJyZW50VGFzaywgY3VycmVudFRhc2tOb1NwYWNlcykge1xuY29uc3QgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlICsgXCJfY29udGFpbmVyXCIpO1xubGV0IHRhc2tDYXJkID0gY3JlYXRlVGFza0NhcmQoY3VycmVudFRhc2spO1xuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG5kZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbmRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjdXJyZW50VGFza05vU3BhY2VzICsgXCJfZGVsZXRlXCIpO1xuZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVfdGFza1wiKTtcbnRhc2tDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG59XG4qL1xuZnVuY3Rpb24gZGlzcGxheVRhc2tzQnlQcm9qZWN0KFxuICBjdXJyZW50UHJvamVjdCxcbiAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMsXG4gIGhvbWVQcm9qZWN0XG4pIHtcbiAgbGV0IHRhc2tDYXJkO1xuICBjbGVhclRhc2tEaXNwbGF5KGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfY29udGFpbmVyXCJcbiAgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0YXNrQ2FyZCA9IGNyZWF0ZVRhc2tDYXJkKFxuICAgICAgY3VycmVudFByb2plY3QudGFza0FycmF5W2ldLFxuICAgICAgY3VycmVudFByb2plY3QsXG4gICAgICBob21lUHJvamVjdFxuICAgICk7XG4gICAgY3VycmVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRGlzcGxheShjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcykge1xuICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBjdXJyZW50Q29udGFpbmVyLnJlbW92ZSgpO1xuICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tfY29udGVudFwiKTtcbiAgbmV3VGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJpZFwiLFxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfY29udGFpbmVyXCJcbiAgKTtcbiAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90YXNrc1wiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUYXNrQ29udGFpbmVyKHByb2plY3ROYW1lTm9TcGFjZXMpIHtcbiAgY29uc3QgY3VycmVudFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfdGFza3NcIik7XG4gIGN1cnJlbnRUYXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGFza3NcIik7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVRhc2tDYXJkLFxuICBkaXNwbGF5VGFza3NCeVByb2plY3QsXG4gIHJlcGxhY2VUYXNrQ29udGFpbmVyLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==