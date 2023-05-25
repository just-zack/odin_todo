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
/*!****************************!*\
  !*** ./src/taskHandler.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/globalVar.js");
const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", logNewTask);


class Task {
  constructor(name, date, urgency, description) {
    this.name = name;
    this.date = date;
    this.urgency = urgency;
    this.description = description;
  }
}

function createNewTask(name, date, urgency, description) {
  taskArray.push(new Task(name, date, urgency, description));
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
  let taskArray = _globalVar_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskArray;

  overrideSubmit(event);
  console.log(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  taskArray.push(createNewTask(name, date, urgency, description));
  clearNewTaskFields();
  console.log(taskArray);
  console.log(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlLEVBQUUsd0JBQXdCLEVBQUM7Ozs7Ozs7VUNEMUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtEQUFnQzs7QUFFbEQ7QUFDQSxjQUFjLHFEQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxjQUFjLHFEQUFzQjtBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9nbG9iYWxWYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3Rhc2tIYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0O1xuZXhwb3J0IGRlZmF1bHQgeyBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdF90YXNrXCIpO1xuc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9nTmV3VGFzayk7XG5pbXBvcnQgY3VycmVudFNlbGVjdGVkUHJvamVjdCBmcm9tIFwiLi9nbG9iYWxWYXIuanNcIjtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHVyZ2VuY3ksIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMudXJnZW5jeSA9IHVyZ2VuY3k7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sobmFtZSwgZGF0ZSwgdXJnZW5jeSwgZGVzY3JpcHRpb24pIHtcbiAgdGFza0FycmF5LnB1c2gobmV3IFRhc2sobmFtZSwgZGF0ZSwgdXJnZW5jeSwgZGVzY3JpcHRpb24pKTtcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVTdWJtaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3VGFza05hbWUoKSB7XG4gIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Rhc2tcIik7XG4gIHJldHVybiBuZXdUYXNrTmFtZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3VGFza05hbWVOb1NwYWNlcygpIHtcbiAgcmV0dXJuIGdldE5ld1Rhc2tOYW1lKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTmV3VGFza0ZpZWxkcygpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld190YXNrX2Zvcm1cIik7XG4gIHRhc2tGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGxvZ05ld1Rhc2soKSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfdGFza1wiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZV9kYXRlXCIpO1xuICBjb25zdCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJnZW5jeVwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgbGV0IG5hbWUgPSB0YXNrTmFtZS52YWx1ZTtcbiAgbGV0IGRhdGUgPSB0YXNrRGF0ZS52YWx1ZTtcbiAgbGV0IHVyZ2VuY3kgPSB0YXNrVXJnZW5jeS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICBsZXQgdGFza0FycmF5ID0gY3VycmVudFNlbGVjdGVkUHJvamVjdC50YXNrQXJyYXk7XG5cbiAgb3ZlcnJpZGVTdWJtaXQoZXZlbnQpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRQcm9qZWN0KTtcbiAgdGFza0FycmF5LnB1c2goY3JlYXRlTmV3VGFzayhuYW1lLCBkYXRlLCB1cmdlbmN5LCBkZXNjcmlwdGlvbikpO1xuICBjbGVhck5ld1Rhc2tGaWVsZHMoKTtcbiAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgY29uc29sZS5sb2coY3VycmVudFNlbGVjdGVkUHJvamVjdCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=