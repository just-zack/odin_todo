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

function displayTaskSubmit(value, currentTask) {
  const currentContainer = document.getElementById(value + "_container");
  let taskCard = createTaskCard(currentTask);
  const deleteButton = document.createElement("button");
  currentContainer.appendChild(taskCard);

  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete_task");
  taskCard.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createTaskCard,
  displayTaskSubmit,
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9kaXNwbGF5SGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKGN1cnJlbnRUYXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBkb25lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRfXCIgKyBjdXJyZW50VGFzay5uYW1lKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2tfY2FyZFwiKTtcbiAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2tfY29udGVudFwiKTtcbiAgZG9uZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZG9uZV9idG5cIik7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tSb3cxKTtcbiAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJkb25lXCIpO1xuICB9KTtcblxuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gIHRhc2tSb3cxLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3Jvd1wiKTtcbiAgdGFza1JvdzIuY2xhc3NMaXN0LmFkZChcInRhc2tfcm93XCIpO1xuICB0YXNrTmFtZS5pbm5lclRleHQgPSBcIlRhc2s6IFwiICsgY3VycmVudFRhc2submFtZTtcbiAgdGFza0RhdGUuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogXCIgKyBjdXJyZW50VGFzay5kYXRlO1xuICB0YXNrRGF0ZS5zdHlsZS5jb2xvciA9IFwiIzJlYzRiNmdpdCBwXCI7XG4gIHRhc2tSb3cxLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1JvdzEpO1xuICB0YXNrVXJnZW5jeS5pbm5lclRleHQgPSBjdXJyZW50VGFzay51cmdlbmN5O1xuICB0YXNrUm93MS5hcHBlbmRDaGlsZCh0YXNrVXJnZW5jeSk7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tSb3cyKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiICsgY3VycmVudFRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tSb3cyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIHRhc2tDYXJkO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza1N1Ym1pdCh2YWx1ZSwgY3VycmVudFRhc2spIHtcbiAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlICsgXCJfY29udGFpbmVyXCIpO1xuICBsZXQgdGFza0NhcmQgPSBjcmVhdGVUYXNrQ2FyZChjdXJyZW50VGFzayk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZV90YXNrXCIpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrQ2FyZC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVGFza0NhcmQsXG4gIGRpc3BsYXlUYXNrU3VibWl0LFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==