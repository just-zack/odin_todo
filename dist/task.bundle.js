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
/*!****************************!*\
  !*** ./src/taskHandler.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let currentTask;

class Task {
  constructor(name, date, urgency, description) {
    this.name = name;
    this.date = date;
    this.urgency = urgency;
    this.description = description;
  }
}

function createNewTask(name, date, urgency, description) {
  currentTask = new Task(name, date, urgency, description);
}

function overrideSubmit(event) {
  event.preventDefault();
}

function getNewTaskName() {
  let newTaskName = document.getElementById("new_task");
  return newTaskName.value;
}

function getNewTaskNameNoSpaces() {
  return getNewTaskName().split(" ").join("");
}

function clearNewTaskFields() {
  const taskForm = document.getElementById("new_task_form");
  taskForm.reset();
}

function logNewTask() {
  const taskName = document.getElementById("new_task");
  const taskDate = document.getElementById("due_date");
  const taskUrgency = document.getElementById("urgency");
  const taskDescription = document.getElementById("description");
  let name = taskName.value;
  let date = taskDate.value;
  let urgency = taskUrgency.value;
  let description = taskDescription.value;

  overrideSubmit(event);
  createNewTask(name, date, urgency, description);
  clearNewTaskFields();
}

function getCurrentTask() {
  return currentTask;
}

function deleteTask(projectArray, taskName) {
  for (let i = 0; i < projectArray.length; i++) {
    let myTaskTitle = projectArray[i].name;
    myTaskTitle = myTaskTitle.replace(/\s+/g, "");
    if (myTaskTitle === taskName) {
      projectArray.splice(i, 1);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Task,
  createNewTask,
  overrideSubmit,
  getNewTaskName,
  getNewTaskNameNoSpaces,
  clearNewTaskFields,
  logNewTask,
  getCurrentTask,
  deleteTask,
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3Rhc2tIYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwibGV0IGN1cnJlbnRUYXNrO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgdXJnZW5jeSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy51cmdlbmN5ID0gdXJnZW5jeTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhuYW1lLCBkYXRlLCB1cmdlbmN5LCBkZXNjcmlwdGlvbikge1xuICBjdXJyZW50VGFzayA9IG5ldyBUYXNrKG5hbWUsIGRhdGUsIHVyZ2VuY3ksIGRlc2NyaXB0aW9uKTtcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVTdWJtaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3VGFza05hbWUoKSB7XG4gIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Rhc2tcIik7XG4gIHJldHVybiBuZXdUYXNrTmFtZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3VGFza05hbWVOb1NwYWNlcygpIHtcbiAgcmV0dXJuIGdldE5ld1Rhc2tOYW1lKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTmV3VGFza0ZpZWxkcygpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld190YXNrX2Zvcm1cIik7XG4gIHRhc2tGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGxvZ05ld1Rhc2soKSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfdGFza1wiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZV9kYXRlXCIpO1xuICBjb25zdCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJnZW5jeVwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgbGV0IG5hbWUgPSB0YXNrTmFtZS52YWx1ZTtcbiAgbGV0IGRhdGUgPSB0YXNrRGF0ZS52YWx1ZTtcbiAgbGV0IHVyZ2VuY3kgPSB0YXNrVXJnZW5jeS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuXG4gIG92ZXJyaWRlU3VibWl0KGV2ZW50KTtcbiAgY3JlYXRlTmV3VGFzayhuYW1lLCBkYXRlLCB1cmdlbmN5LCBkZXNjcmlwdGlvbik7XG4gIGNsZWFyTmV3VGFza0ZpZWxkcygpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VGFzaygpIHtcbiAgcmV0dXJuIGN1cnJlbnRUYXNrO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RBcnJheSwgdGFza05hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbXlUYXNrVGl0bGUgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICBteVRhc2tUaXRsZSA9IG15VGFza1RpdGxlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgaWYgKG15VGFza1RpdGxlID09PSB0YXNrTmFtZSkge1xuICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBUYXNrLFxuICBjcmVhdGVOZXdUYXNrLFxuICBvdmVycmlkZVN1Ym1pdCxcbiAgZ2V0TmV3VGFza05hbWUsXG4gIGdldE5ld1Rhc2tOYW1lTm9TcGFjZXMsXG4gIGNsZWFyTmV3VGFza0ZpZWxkcyxcbiAgbG9nTmV3VGFzayxcbiAgZ2V0Q3VycmVudFRhc2ssXG4gIGRlbGV0ZVRhc2ssXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9