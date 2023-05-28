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
  const titleDescriptionContainer = document.createElement("div");
  const taskContent = document.createElement("div");
  const leftContainer = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskDate = document.createElement("h3");
  const taskUrgency = document.createElement("h3");
  const taskDescription = document.createElement("h3");
  const doneBtn = document.createElement("button");

  taskCard.setAttribute("id", "t_" + currentTask.name);
  taskCard.classList.add("task_card");
  titleDescriptionContainer.classList.add("task_title_description");

  taskContent.classList.add("task_content");
  doneBtn.classList.add("done_btn");
  leftContainer.classList.add("left_task_container");
  taskCard.appendChild(leftContainer);
  leftContainer.appendChild(doneBtn);
  leftContainer.appendChild(titleDescriptionContainer);
  taskCard.appendChild(taskContent);
  titleDescriptionContainer.appendChild(taskName);
  taskName.innerText = "Task: " + currentTask.name;
  titleDescriptionContainer.appendChild(taskDescription);
  doneBtn.addEventListener("click", () => {
    taskName.classList.toggle("done");
    taskDescription.classList.toggle("done");
  });

  if (currentTask.date !== "") {
    taskDate.innerText = "Due Date: " + currentTask.date;
    taskContent.appendChild(taskDate);
  }
  taskUrgency.innerText = currentTask.urgency.toUpperCase();
  if (currentTask.urgency === "urgent") {
    taskUrgency.style.color = "red";
  } else if (currentTask.urgency === "moderate") {
    taskUrgency.style.color = "orange";
  } else {
    taskUrgency.style.color = "#2ec4b6";
  }
  taskContent.appendChild(taskUrgency);
  taskDescription.innerText = "Description: " + currentTask.description;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("id", currentTask.name + "_delete");
  deleteButton.classList.add("delete_task");
  taskContent.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
    removeTaskFromArray(currentTask, currentProject, homeProject);
  });
  return taskCard;
}

function removeTaskFromArray(currentTask, currentProject, homeProject) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQ0FBa0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvZGlzcGxheUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZChjdXJyZW50VGFzaywgY3VycmVudFByb2plY3QsIGhvbWVQcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGVEZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza1VyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZG9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0X1wiICsgY3VycmVudFRhc2submFtZSk7XG4gIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NhcmRcIik7XG4gIHRpdGxlRGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfdGl0bGVfZGVzY3JpcHRpb25cIik7XG5cbiAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2tfY29udGVudFwiKTtcbiAgZG9uZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZG9uZV9idG5cIik7XG4gIGxlZnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxlZnRfdGFza19jb250YWluZXJcIik7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGVzY3JpcHRpb25Db250YWluZXIpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gIHRpdGxlRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICB0YXNrTmFtZS5pbm5lclRleHQgPSBcIlRhc2s6IFwiICsgY3VycmVudFRhc2submFtZTtcbiAgdGl0bGVEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICBkb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImRvbmVcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoXCJkb25lXCIpO1xuICB9KTtcblxuICBpZiAoY3VycmVudFRhc2suZGF0ZSAhPT0gXCJcIikge1xuICAgIHRhc2tEYXRlLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IFwiICsgY3VycmVudFRhc2suZGF0ZTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gIH1cbiAgdGFza1VyZ2VuY3kuaW5uZXJUZXh0ID0gY3VycmVudFRhc2sudXJnZW5jeS50b1VwcGVyQ2FzZSgpO1xuICBpZiAoY3VycmVudFRhc2sudXJnZW5jeSA9PT0gXCJ1cmdlbnRcIikge1xuICAgIHRhc2tVcmdlbmN5LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgfSBlbHNlIGlmIChjdXJyZW50VGFzay51cmdlbmN5ID09PSBcIm1vZGVyYXRlXCIpIHtcbiAgICB0YXNrVXJnZW5jeS5zdHlsZS5jb2xvciA9IFwib3JhbmdlXCI7XG4gIH0gZWxzZSB7XG4gICAgdGFza1VyZ2VuY3kuc3R5bGUuY29sb3IgPSBcIiMyZWM0YjZcIjtcbiAgfVxuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrVXJnZW5jeSk7XG4gIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgY3VycmVudFRhc2submFtZSArIFwiX2RlbGV0ZVwiKTtcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVfdGFza1wiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0NhcmQucmVtb3ZlKCk7XG4gICAgcmVtb3ZlVGFza0Zyb21BcnJheShjdXJyZW50VGFzaywgY3VycmVudFByb2plY3QsIGhvbWVQcm9qZWN0KTtcbiAgfSk7XG4gIHJldHVybiB0YXNrQ2FyZDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21BcnJheShjdXJyZW50VGFzaywgY3VycmVudFByb2plY3QsIGhvbWVQcm9qZWN0KSB7XG4gIGlmIChjdXJyZW50UHJvamVjdC5uYW1lICE9PSBob21lUHJvamVjdC5uYW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjdXJyZW50UHJvamVjdC50YXNrQXJyYXlbaV0gPT09IGN1cnJlbnRUYXNrKSB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9tZVByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaG9tZVByb2plY3QudGFza0FycmF5W2ldID09PSBjdXJyZW50VGFzaykge1xuICAgICAgICBob21lUHJvamVjdC50YXNrQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvbWVQcm9qZWN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGhvbWVQcm9qZWN0LnRhc2tBcnJheVtpXSA9PT0gY3VycmVudFRhc2spIHtcbiAgICAgICAgaG9tZVByb2plY3QudGFza0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coXCJmaXJlXCIpO1xuICBjb25zb2xlLmxvZyhob21lUHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coY3VycmVudFRhc2spO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NCeVByb2plY3QoXG4gIGN1cnJlbnRQcm9qZWN0LFxuICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcyxcbiAgaG9tZVByb2plY3Rcbikge1xuICBsZXQgdGFza0NhcmQ7XG4gIGNsZWFyVGFza0Rpc3BsYXkoY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMpO1xuICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHRhc2tDYXJkID0gY3JlYXRlVGFza0NhcmQoXG4gICAgICBjdXJyZW50UHJvamVjdC50YXNrQXJyYXlbaV0sXG4gICAgICBjdXJyZW50UHJvamVjdCxcbiAgICAgIGhvbWVQcm9qZWN0XG4gICAgKTtcbiAgICBjdXJyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tEaXNwbGF5KGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzKSB7XG4gIGNvbnN0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiXG4gICk7XG4gIGN1cnJlbnRDb250YWluZXIucmVtb3ZlKCk7XG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImlkXCIsXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBuZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3Rhc2tzXCIpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRhc2tDb250YWluZXIocHJvamVjdE5hbWVOb1NwYWNlcykge1xuICBjb25zdCBjdXJyZW50VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF90YXNrc1wiKTtcbiAgY3VycmVudFRhc2tDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2NvbnRlbnRcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiKTtcbiAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90YXNrc1wiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVGFza0NhcmQsXG4gIGRpc3BsYXlUYXNrc0J5UHJvamVjdCxcbiAgcmVwbGFjZVRhc2tDb250YWluZXIsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9