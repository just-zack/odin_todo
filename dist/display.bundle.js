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
    doneBtn.classList.toggle("marked_done");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IscUNBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9kaXNwbGF5SGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKGN1cnJlbnRUYXNrLCBjdXJyZW50UHJvamVjdCwgaG9tZVByb2plY3QpIHtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZURlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBkb25lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRfXCIgKyBjdXJyZW50VGFzay5uYW1lKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2tfY2FyZFwiKTtcbiAgdGl0bGVEZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZV9kZXNjcmlwdGlvblwiKTtcblxuICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza19jb250ZW50XCIpO1xuICBkb25lQnRuLmNsYXNzTGlzdC5hZGQoXCJkb25lX2J0blwiKTtcbiAgbGVmdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF90YXNrX2NvbnRhaW5lclwiKTtcbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZUJ0bik7XG4gIGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgdGl0bGVEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIHRhc2tOYW1lLmlubmVyVGV4dCA9IFwiVGFzazogXCIgKyBjdXJyZW50VGFzay5uYW1lO1xuICB0aXRsZURlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZG9uZVwiKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImRvbmVcIik7XG4gICAgZG9uZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwibWFya2VkX2RvbmVcIik7XG4gIH0pO1xuXG4gIGlmIChjdXJyZW50VGFzay5kYXRlICE9PSBcIlwiKSB7XG4gICAgdGFza0RhdGUuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogXCIgKyBjdXJyZW50VGFzay5kYXRlO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgfVxuICB0YXNrVXJnZW5jeS5pbm5lclRleHQgPSBjdXJyZW50VGFzay51cmdlbmN5LnRvVXBwZXJDYXNlKCk7XG4gIGlmIChjdXJyZW50VGFzay51cmdlbmN5ID09PSBcInVyZ2VudFwiKSB7XG4gICAgdGFza1VyZ2VuY3kuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRUYXNrLnVyZ2VuY3kgPT09IFwibW9kZXJhdGVcIikge1xuICAgIHRhc2tVcmdlbmN5LnN0eWxlLmNvbG9yID0gXCJvcmFuZ2VcIjtcbiAgfSBlbHNlIHtcbiAgICB0YXNrVXJnZW5jeS5zdHlsZS5jb2xvciA9IFwiIzJlYzRiNlwiO1xuICB9XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tVcmdlbmN5KTtcbiAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiICsgY3VycmVudFRhc2suZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjdXJyZW50VGFzay5uYW1lICsgXCJfZGVsZXRlXCIpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZV90YXNrXCIpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrQ2FyZC5yZW1vdmUoKTtcbiAgICByZW1vdmVUYXNrRnJvbUFycmF5KGN1cnJlbnRUYXNrLCBjdXJyZW50UHJvamVjdCwgaG9tZVByb2plY3QpO1xuICB9KTtcbiAgcmV0dXJuIHRhc2tDYXJkO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrRnJvbUFycmF5KGN1cnJlbnRUYXNrLCBjdXJyZW50UHJvamVjdCwgaG9tZVByb2plY3QpIHtcbiAgaWYgKGN1cnJlbnRQcm9qZWN0Lm5hbWUgIT09IGhvbWVQcm9qZWN0Lm5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tBcnJheVtpXSA9PT0gY3VycmVudFRhc2spIHtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob21lUHJvamVjdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChob21lUHJvamVjdC50YXNrQXJyYXlbaV0gPT09IGN1cnJlbnRUYXNrKSB7XG4gICAgICAgIGhvbWVQcm9qZWN0LnRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG9tZVByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaG9tZVByb2plY3QudGFza0FycmF5W2ldID09PSBjdXJyZW50VGFzaykge1xuICAgICAgICBob21lUHJvamVjdC50YXNrQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhcImZpcmVcIik7XG4gIGNvbnNvbGUubG9nKGhvbWVQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrc0J5UHJvamVjdChcbiAgY3VycmVudFByb2plY3QsXG4gIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzLFxuICBob21lUHJvamVjdFxuKSB7XG4gIGxldCB0YXNrQ2FyZDtcbiAgY2xlYXJUYXNrRGlzcGxheShjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcyk7XG4gIGNvbnN0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiXG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdGFza0NhcmQgPSBjcmVhdGVUYXNrQ2FyZChcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tBcnJheVtpXSxcbiAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgaG9tZVByb2plY3RcbiAgICApO1xuICAgIGN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Rpc3BsYXkoY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMpIHtcbiAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfY29udGFpbmVyXCJcbiAgKTtcbiAgY3VycmVudENvbnRhaW5lci5yZW1vdmUoKTtcbiAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2NvbnRlbnRcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiaWRcIixcbiAgICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiXG4gICk7XG4gIG5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGFza3NcIik7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGFza0NvbnRhaW5lcihwcm9qZWN0TmFtZU5vU3BhY2VzKSB7XG4gIGNvbnN0IGN1cnJlbnRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X3Rhc2tzXCIpO1xuICBjdXJyZW50VGFza0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tfY29udGVudFwiKTtcbiAgbmV3VGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfY29udGFpbmVyXCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3Rhc2tzXCIpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVUYXNrQ2FyZCxcbiAgZGlzcGxheVRhc2tzQnlQcm9qZWN0LFxuICByZXBsYWNlVGFza0NvbnRhaW5lcixcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=