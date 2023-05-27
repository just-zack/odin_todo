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
function createTaskCard(currentTask) {
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

  return taskCard;
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
function displayTasksByProject(projectArray, currentProjectNameNoSpaces) {
  console.log("why");
  let taskCard;
  clearTaskDisplay(currentProjectNameNoSpaces);
  const currentContainer = document.getElementById(
    currentProjectNameNoSpaces + "_container"
  );
  for (let i = 0; i < projectArray.length; i++) {
    taskCard = createTaskCard(projectArray[i]);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTaskCard,
  displayTasksByProject,
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvZGlzcGxheUhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZChjdXJyZW50VGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1JvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza1VyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZG9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0X1wiICsgY3VycmVudFRhc2submFtZSk7XG4gIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NhcmRcIik7XG4gIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NvbnRlbnRcIik7XG4gIGRvbmVCdG4uY2xhc3NMaXN0LmFkZChcImRvbmVfYnRuXCIpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkb25lQnRuKTtcbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrUm93MSk7XG4gIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZG9uZVwiKTtcbiAgfSk7XG5cbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuICB0YXNrUm93MS5jbGFzc0xpc3QuYWRkKFwidGFza19yb3dcIik7XG4gIHRhc2tSb3cyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3Jvd1wiKTtcbiAgdGFza05hbWUuaW5uZXJUZXh0ID0gXCJUYXNrOiBcIiArIGN1cnJlbnRUYXNrLm5hbWU7XG4gIHRhc2tEYXRlLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IFwiICsgY3VycmVudFRhc2suZGF0ZTtcbiAgdGFza0RhdGUuc3R5bGUuY29sb3IgPSBcIiMyZWM0YjZnaXQgcFwiO1xuICB0YXNrUm93MS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tSb3cxKTtcbiAgdGFza1VyZ2VuY3kuaW5uZXJUZXh0ID0gY3VycmVudFRhc2sudXJnZW5jeTtcbiAgdGFza1JvdzEuYXBwZW5kQ2hpbGQodGFza1VyZ2VuY3kpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrUm93Mik7XG4gIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrUm93Mi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiB0YXNrQ2FyZDtcbn1cblxuLypmdW5jdGlvbiBkaXNwbGF5VGFza1N1Ym1pdCh2YWx1ZSwgY3VycmVudFRhc2ssIGN1cnJlbnRUYXNrTm9TcGFjZXMpIHtcbmNvbnN0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSArIFwiX2NvbnRhaW5lclwiKTtcbmxldCB0YXNrQ2FyZCA9IGNyZWF0ZVRhc2tDYXJkKGN1cnJlbnRUYXNrKTtcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jdXJyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG5kZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgY3VycmVudFRhc2tOb1NwYWNlcyArIFwiX2RlbGV0ZVwiKTtcbmRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlX3Rhc2tcIik7XG50YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xufVxuKi9cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrc0J5UHJvamVjdChwcm9qZWN0QXJyYXksIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzKSB7XG4gIGNvbnNvbGUubG9nKFwid2h5XCIpO1xuICBsZXQgdGFza0NhcmQ7XG4gIGNsZWFyVGFza0Rpc3BsYXkoY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMpO1xuICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHRhc2tDYXJkID0gY3JlYXRlVGFza0NhcmQocHJvamVjdEFycmF5W2ldKTtcbiAgICBjdXJyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tEaXNwbGF5KGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzKSB7XG4gIGNvbnN0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiXG4gICk7XG4gIGN1cnJlbnRDb250YWluZXIucmVtb3ZlKCk7XG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImlkXCIsXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBuZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3Rhc2tzXCIpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVUYXNrQ2FyZCxcbiAgZGlzcGxheVRhc2tzQnlQcm9qZWN0LFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==