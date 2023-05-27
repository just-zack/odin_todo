/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  --main_font: \"Bungee\";\n  --main_color: #a8d4d0;\n  --secondary_color: #fdfffc;\n  --tertiary_color: #2ec4b6;\n  --fourth_color: #011627;\n  --standard_padding: 20px;\n  --large_padding: 40px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tertiary_color);\n  height: 100vh;\n  width: 100vw;\n}\n\n#header_container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--standard_padding);\n  background-color: var(--tertiary_color);\n  font-family: var(--main_font);\n  color: var(--secondary_color);\n}\n\n#right_container {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n#logo {\n  height: 60px;\n}\n\n#sign_out {\n  height: 40px;\n  width: 120px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--secondary_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#sign_out:hover,\n#sign_out:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--tertiary_color);\n}\n\n#main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  flex: auto;\n  height: 100;\n}\n\n#left_nav {\n  background-color: var(--secondary_color);\n  width: 30vw;\n  height: 100;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-top-left-radius: 3vw;\n  padding: var(--standard_padding);\n  gap: var(--standard_padding);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#project_list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: var(--large_padding);\n  flex: auto;\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 20px;\n  box-shadow: 1px 5px 15px;\n}\n\n.project_card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--standard_padding);\n  gap: 10px;\n}\n\n.project_title {\n  font-size: 1.5rem;\n  color: var(--fourth_color);\n  border: none;\n  background-color: var(--secondary_color);\n  text-align: start;\n}\n\n.project_title:hover,\n.project_title:focus {\n  font-size: 1.5rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n.delete_project,\n.delete_task {\n  width: 80px;\n  height: 2.2rem;\n  background-color: var(--secondary_color);\n  border-radius: 8px;\n}\n\n.delete_project:hover,\n.delete_task:hover {\n  background-color: #ef233c;\n  color: var(--secondary_color);\n  border-color: #ef233c;\n}\n\n#project_submission {\n  display: flex;\n  justify-content: space-between;\n  align-self: stretch;\n  gap: var(--standard_padding);\n}\n\n#home,\n#today,\n#week {\n  font-size: 1.5rem;\n  width: 2vw;\n  font-family: var(--main_font);\n  border: none;\n  background-color: var(--secondary_color);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#projects {\n  font-size: 1.7rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#current_project {\n  font: 1.5rem;\n  color: var(--fourth_color);\n  font-family: var(--main_font);\n}\n\n#home:hover,\n#home:focus,\n#today:hover,\n#today:focus,\n#week:hover,\n#week:focus {\n  font-size: 2rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n#project_viewer {\n  padding-top: var(--large_padding);\n}\n\n#new_project {\n  background-color: var(--secondary_color);\n  border: none;\n  border-bottom: 2px solid var(--fourth_color);\n  color: var(--fourth_color);\n  padding-left: 5px;\n  font-size: 1rem;\n  height: 2rem;\n  width: 10rem;\n  flex: auto;\n}\n\n#new_project::placeholder {\n  color: var(--fourth_color);\n}\n\n#submit_new_project {\n  height: 2.2rem;\n  width: 80px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#submit_new_project:hover,\n#submit_new_project:focus,\n#submit_task:hover,\n#submit_task:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#main_display {\n  background-color: var(--secondary_color);\n  height: 100;\n  width: 100;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border-bottom-right-radius: 3vw;\n  padding: var(--standard_padding);\n}\n\n#current_project {\n  font-size: 2rem;\n  color: var(--fourth_color);\n  margin-bottom: var(--standard_padding);\n}\n\n#task_content {\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 30px;\n  box-shadow: 1px 5px 10px;\n  flex: 1;\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: var(--large_padding);\n}\n\n#create_new_task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--main_color);\n  padding: var(--standard_padding);\n  border-radius: 20px;\n}\n\n#new_task_content {\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n#new_task_form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--standard_padding);\n  padding-right: var(--standard_padding);\n}\n\n#new_task_row1 {\n  display: flex;\n  flex: auto;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n}\n\n.project_tasks {\n  background-color: var(--main_color);\n  border-radius: 20px;\n  margin-top: var(--standard_padding);\n}\n\n.task_card {\n  display: flex;\n  width: 100;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n  align-items: center;\n  padding: var(--large_padding);\n  color: var(--fourth_color);\n}\n\n.done_btn {\n  width: 15px;\n  height: 15px;\n  background-color: var(--secondary_color);\n}\n\n.done {\n  text-decoration: line-through;\n  color: var(--secondary_color);\n  opacity: 0.5;\n}\n\n.task_row {\n  display: flex;\n  gap: var(--standard_padding);\n}\n\n#new_task,\n#due_date,\n#urgency,\n#description {\n  font-size: 1rem;\n  border: none;\n  border-bottom: solid 2px var(--fourth_color);\n  padding: 5px;\n}\n\n#new_task {\n  flex: 1;\n  width: 20vw;\n}\n\n#description {\n  flex: 1;\n  width: 35vw;\n}\n\n#submit_task {\n  height: 35px;\n  width: 35px;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: var(--tertiary_color);\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#footer_container {\n  background-color: var(--tertiary_color);\n  width: 100vw;\n  height: 5vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#footer {\n  font-size: 1rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-right: var(--large_padding);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,qBAAA;EACA,0BAAA;EACA,yBAAA;EACA,uBAAA;EACA,wBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uCAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,gCAAA;EACA,uCAAA;EACA,6BAAA;EACA,6BAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AACF;;AAEA;EACE,YAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,6BAAA;EACA,eAAA;EACA,6BAAA;EACA,wCAAA;EACA,uCAAA;EACA,kBAAA;AACF;;AAEA;;EAEE,4BAAA;EACA,qCAAA;EACA,uCAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,UAAA;EACA,WAAA;AACF;;AAEA;EACE,wCAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;EACA,4BAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,UAAA;EACA,qCAAA;EACA,wCAAA;EACA,mBAAA;EACA,wBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oCAAA;EACA,SAAA;AACF;;AAEA;EACE,iBAAA;EACA,0BAAA;EACA,YAAA;EACA,wCAAA;EACA,iBAAA;AACF;;AAEA;;EAEE,iBAAA;EACA,YAAA;EACA,8CAAA;EACA,4BAAA;AACF;;AAEA;;EAEE,WAAA;EACA,cAAA;EACA,wCAAA;EACA,kBAAA;AACF;;AAEA;;EAEE,yBAAA;EACA,6BAAA;EACA,qBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,4BAAA;AACF;;AACA;;;EAGE,iBAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;EACA,wCAAA;EACA,0BAAA;EACA,oCAAA;EACA,WAAA;AAEF;;AACA;EACE,iBAAA;EACA,6BAAA;EACA,0BAAA;EACA,oCAAA;EACA,WAAA;AAEF;;AACA;EACE,YAAA;EACA,0BAAA;EACA,6BAAA;AAEF;;AAAA;;;;;;EAME,eAAA;EACA,YAAA;EACA,8CAAA;EACA,4BAAA;AAGF;;AAAA;EACE,iCAAA;AAGF;;AAAA;EACE,wCAAA;EACA,YAAA;EACA,4CAAA;EACA,0BAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,UAAA;AAGF;;AAAA;EACE,0BAAA;AAGF;;AAAA;EACE,cAAA;EACA,WAAA;EACA,6BAAA;EACA,eAAA;EACA,6BAAA;EACA,qCAAA;EACA,uCAAA;EACA,kBAAA;AAGF;;AAAA;;;;EAIE,4BAAA;EACA,qCAAA;EACA,qCAAA;AAGF;;AAAA;EACE,wCAAA;EACA,WAAA;EACA,UAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,+BAAA;EACA,gCAAA;AAGF;;AAAA;EACE,eAAA;EACA,0BAAA;EACA,sCAAA;AAGF;;AAAA;EACE,qCAAA;EACA,wCAAA;EACA,mBAAA;EACA,wBAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,6BAAA;AAGF;;AAAA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mCAAA;EACA,gCAAA;EACA,mBAAA;AAGF;;AAAA;EACE,QAAA;EACA,aAAA;EACA,sBAAA;AAGF;;AAAA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,4BAAA;EACA,sCAAA;AAGF;;AADA;EACE,aAAA;EACA,UAAA;EACA,uBAAA;EACA,8BAAA;EACA,4BAAA;AAIF;;AADA;EACE,mCAAA;EACA,mBAAA;EACA,mCAAA;AAIF;;AADA;EACE,aAAA;EACA,UAAA;EACA,8BAAA;EACA,4BAAA;EACA,mBAAA;EACA,6BAAA;EACA,0BAAA;AAIF;;AADA;EACE,WAAA;EACA,YAAA;EACA,wCAAA;AAIF;;AADA;EACE,6BAAA;EACA,6BAAA;EACA,YAAA;AAIF;;AADA;EACE,aAAA;EACA,4BAAA;AAIF;;AADA;;;;EAIE,eAAA;EACA,YAAA;EACA,4CAAA;EACA,YAAA;AAIF;;AADA;EACE,OAAA;EACA,WAAA;AAIF;;AADA;EACE,OAAA;EACA,WAAA;AAIF;;AADA;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,uCAAA;EACA,6BAAA;EACA,qCAAA;AAIF;;AADA;EACE,uCAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAIF;;AADA;EACE,eAAA;EACA,6BAAA;EACA,0BAAA;EACA,mCAAA;AAIF","sourcesContent":["* {\n  --main_font: \"Bungee\";\n  --main_color: #a8d4d0;\n  --secondary_color: #fdfffc;\n  --tertiary_color: #2ec4b6;\n  --fourth_color: #011627;\n  --standard_padding: 20px;\n  --large_padding: 40px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tertiary_color);\n  height: 100vh;\n  width: 100vw;\n}\n\n#header_container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--standard_padding);\n  background-color: var(--tertiary_color);\n  font-family: var(--main_font);\n  color: var(--secondary_color);\n}\n\n#right_container {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n#logo {\n  height: 60px;\n}\n\n#sign_out {\n  height: 40px;\n  width: 120px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--secondary_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#sign_out:hover,\n#sign_out:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--tertiary_color);\n}\n\n#main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  flex: auto;\n  height: 100;\n}\n\n#left_nav {\n  background-color: var(--secondary_color);\n  width: 30vw;\n  height: 100;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-top-left-radius: 3vw;\n  padding: var(--standard_padding);\n  gap: var(--standard_padding);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#project_list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: var(--large_padding);\n  flex: auto;\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 20px;\n  box-shadow: 1px 5px 15px;\n}\n\n.project_card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--standard_padding);\n  gap: 10px;\n}\n\n.project_title {\n  font-size: 1.5rem;\n  color: var(--fourth_color);\n  border: none;\n  background-color: var(--secondary_color);\n  text-align: start;\n}\n\n.project_title:hover,\n.project_title:focus {\n  font-size: 1.5rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n.delete_project,\n.delete_task {\n  width: 80px;\n  height: 2.2rem;\n  background-color: var(--secondary_color);\n  border-radius: 8px;\n}\n\n.delete_project:hover,\n.delete_task:hover {\n  background-color: #ef233c;\n  color: var(--secondary_color);\n  border-color: #ef233c;\n}\n\n#project_submission {\n  display: flex;\n  justify-content: space-between;\n  align-self: stretch;\n  gap: var(--standard_padding);\n}\n#home,\n#today,\n#week {\n  font-size: 1.5rem;\n  width: 2vw;\n  font-family: var(--main_font);\n  border: none;\n  background-color: var(--secondary_color);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#projects {\n  font-size: 1.7rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#current_project {\n  font: 1.5rem;\n  color: var(--fourth_color);\n  font-family: var(--main_font);\n}\n#home:hover,\n#home:focus,\n#today:hover,\n#today:focus,\n#week:hover,\n#week:focus {\n  font-size: 2rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n#project_viewer {\n  padding-top: var(--large_padding);\n}\n\n#new_project {\n  background-color: var(--secondary_color);\n  border: none;\n  border-bottom: 2px solid var(--fourth_color);\n  color: var(--fourth_color);\n  padding-left: 5px;\n  font-size: 1rem;\n  height: 2rem;\n  width: 10rem;\n  flex: auto;\n}\n\n#new_project::placeholder {\n  color: var(--fourth_color);\n}\n\n#submit_new_project {\n  height: 2.2rem;\n  width: 80px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#submit_new_project:hover,\n#submit_new_project:focus,\n#submit_task:hover,\n#submit_task:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#main_display {\n  background-color: var(--secondary_color);\n  height: 100;\n  width: 100;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border-bottom-right-radius: 3vw;\n  padding: var(--standard_padding);\n}\n\n#current_project {\n  font-size: 2rem;\n  color: var(--fourth_color);\n  margin-bottom: var(--standard_padding);\n}\n\n#task_content {\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 30px;\n  box-shadow: 1px 5px 10px;\n  flex: 1;\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: var(--large_padding);\n}\n\n#create_new_task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--main_color);\n  padding: var(--standard_padding);\n  border-radius: 20px;\n}\n\n#new_task_content {\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n#new_task_form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--standard_padding);\n  padding-right: var(--standard_padding);\n}\n#new_task_row1 {\n  display: flex;\n  flex: auto;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n}\n\n.project_tasks {\n  background-color: var(--main_color);\n  border-radius: 20px;\n  margin-top: var(--standard_padding);\n}\n\n.task_card {\n  display: flex;\n  width: 100;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n  align-items: center;\n  padding: var(--large_padding);\n  color: var(--fourth_color);\n}\n\n.done_btn {\n  width: 15px;\n  height: 15px;\n  background-color: var(--secondary_color);\n}\n\n.done {\n  text-decoration: line-through;\n  color: var(--secondary_color);\n  opacity: 0.5;\n}\n\n.task_row {\n  display: flex;\n  gap: var(--standard_padding);\n}\n\n#new_task,\n#due_date,\n#urgency,\n#description {\n  font-size: 1rem;\n  border: none;\n  border-bottom: solid 2px var(--fourth_color);\n  padding: 5px;\n}\n\n#new_task {\n  flex: 1;\n  width: 20vw;\n}\n\n#description {\n  flex: 1;\n  width: 35vw;\n}\n\n#submit_task {\n  height: 35px;\n  width: 35px;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: var(--tertiary_color);\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#footer_container {\n  background-color: var(--tertiary_color);\n  width: 100vw;\n  height: 5vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#footer {\n  font-size: 1rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-right: var(--large_padding);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayHandler.js":
/*!*******************************!*\
  !*** ./src/displayHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

  const deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";
  deleteButton.setAttribute("id", currentTask.name + "_delete");
  deleteButton.classList.add("delete_task");
  taskCard.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
  });

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


/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let projectArray = [];
let currentSelectedProject;
let currentProjectNameNoSpace;
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
      currentProjectNameNoSpace = projectArray[i].name.split(" ").join("");
    }
  }
}
/*
function addProjectSelectionEventListener(projectNameNoSpaces, projectName) {
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    changeSelectedProject(projectName);
    replaceTaskContainer(projectNameNoSpaces);
  });
}
*/

function replaceTaskContainer(projectNameNoSpaces) {
  const currentTaskContainer = document.querySelector(".project_tasks");
  currentTaskContainer.remove();

  const newTaskContainer = document.createElement("div");
  const taskContent = document.getElementById("task_content");
  newTaskContainer.setAttribute("id", projectNameNoSpaces + "_container");
  newTaskContainer.classList.add("project_tasks");
  taskContent.appendChild(newTaskContainer);
}

function logNewProject() {
  let projectName = getNewProjectName();
  let projectNameNoSpaces = getNewProjectNameNoSpaces();

  overrideSubmit(event);
  createNewProject(projectName);
  displayNewProject();
  deleteProject(projectNameNoSpaces, projectName);
}
function setHome() {
  let homeBtn = document.getElementById("home");
  let taskContainer = document.getElementById("task_content");
  let homeTaskContainer = document.createElement("div");

  homeTaskContainer.setAttribute("id", "home_container");
  homeTaskContainer.classList.add("project_tasks");
  taskContainer.appendChild(homeTaskContainer);

  let home = new Project("home");
  projectArray.push(home);
  currentSelectedProject = projectArray[0];
  selectedProjectArray = projectArray[0].taskArray;
  currentProjectNameNoSpace = "home";
  homeBtn.addEventListener("click", () => {
    changeSelectedProject("home");
    replaceTaskContainer("home");
  });
}

function pushArray(addedTask) {
  currentSelectedProject.taskArray.push(addedTask);
  return console.log(currentSelectedProject);
}

function getCSP() {
  return currentSelectedProject;
}

function getCurrentNameNoSpace() {
  return currentProjectNameNoSpace;
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
  logNewProject,
  setHome,
  pushArray,
  getCSP,
  getCurrentNameNoSpace,
  getSPA,
  replaceTaskContainer,
});


/***/ }),

/***/ "./src/taskHandler.js":
/*!****************************!*\
  !*** ./src/taskHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  console.log(currentTask);
  clearNewTaskFields();
}

function getCurrentTask() {
  console.log(currentTask);
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


/***/ }),

/***/ "./src/content/NPC_logo.png":
/*!**********************************!*\
  !*** ./src/content/NPC_logo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "NPC_logo.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _src_content_NPC_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/content/NPC_logo.png */ "./src/content/NPC_logo.png");
/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectHandler.js */ "./src/projectHandler.js");
/* harmony import */ var _taskHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskHandler.js */ "./src/taskHandler.js");
/* harmony import */ var _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayHandler.js */ "./src/displayHandler.js");





let currentTaskCopy;

_projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].setHome();

const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", () => {
  _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].logNewProject();
  addProjectSelectionEventListener(
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getNewProjectNameNoSpaces(),
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getNewProjectName(),
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSPA()
  );
  _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearNewProjectFields();
});

/*
const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", () => {
  taskFunctions.logNewTask();
  projectFunctions.pushArray(taskFunctions.getCurrentTask());
  console.log(projectFunctions.getSPA());
  console.log(projectFunctions.getCurrentNameNoSpace());
  console.log(taskFunctions.getCurrentTask());
  let taskName = taskFunctions.getCurrentTask();
  displayFunctions.displayTaskSubmit(
    projectFunctions.getCurrentNameNoSpace(),
    taskName,
    taskFunctions.getNewTaskNameNoSpaces()
  );
  const deleteTaskBtn = document.getElementById(
    taskFunctions.getNewTaskNameNoSpaces() + "_delete"
  );
  const taskCard = document.getElementById("t_" + taskName.name);
  deleteTaskBtn.addEventListener("click", () => {
    taskCard.remove();
  });
});
*/

const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", () => {
  _taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].logNewTask();
  _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].pushArray(_taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTask());
  _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTasksByProject(
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSPA(),
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentNameNoSpace()
  );
});

function addProjectSelectionEventListener(
  projectNameNoSpaces,
  projectName,
  projectArray
) {
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeSelectedProject(projectName);
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].replaceTaskContainer(projectNameNoSpaces);
    _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTasksByProject(
      _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSPA(),
      projectNameNoSpaces
    );
  });
}
// call a taskFunction that uses projectFunctions.currentSelectedProject

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsNEJBQTRCLDBCQUEwQiwrQkFBK0IsOEJBQThCLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLGNBQWMsZUFBZSxHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQiw0Q0FBNEMsa0JBQWtCLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0IsbUNBQW1DLHFDQUFxQyw0Q0FBNEMsa0NBQWtDLGtDQUFrQyxHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxXQUFXLGlCQUFpQixHQUFHLGVBQWUsaUJBQWlCLGlCQUFpQixrQ0FBa0Msb0JBQW9CLGtDQUFrQyw2Q0FBNkMsNENBQTRDLHVCQUF1QixHQUFHLHVDQUF1QyxpQ0FBaUMsMENBQTBDLDRDQUE0QyxHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLGVBQWUsZ0JBQWdCLEdBQUcsZUFBZSw2Q0FBNkMsZ0JBQWdCLGdCQUFnQix5QkFBeUIsdUJBQXVCLGdDQUFnQyxxQ0FBcUMsaUNBQWlDLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGtDQUFrQyxlQUFlLDBDQUEwQyw2Q0FBNkMsd0JBQXdCLDZCQUE2QixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLHdCQUF3Qix5Q0FBeUMsY0FBYyxHQUFHLG9CQUFvQixzQkFBc0IsK0JBQStCLGlCQUFpQiw2Q0FBNkMsc0JBQXNCLEdBQUcsaURBQWlELHNCQUFzQixpQkFBaUIsbURBQW1ELGlDQUFpQyxHQUFHLG9DQUFvQyxnQkFBZ0IsbUJBQW1CLDZDQUE2Qyx1QkFBdUIsR0FBRyxnREFBZ0QsOEJBQThCLGtDQUFrQywwQkFBMEIsR0FBRyx5QkFBeUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsaUNBQWlDLEdBQUcsNEJBQTRCLHNCQUFzQixlQUFlLGtDQUFrQyxpQkFBaUIsNkNBQTZDLCtCQUErQix5Q0FBeUMsZ0JBQWdCLEdBQUcsZUFBZSxzQkFBc0Isa0NBQWtDLCtCQUErQix5Q0FBeUMsZ0JBQWdCLEdBQUcsc0JBQXNCLGlCQUFpQiwrQkFBK0Isa0NBQWtDLEdBQUcseUZBQXlGLG9CQUFvQixpQkFBaUIsbURBQW1ELGlDQUFpQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyxrQkFBa0IsNkNBQTZDLGlCQUFpQixpREFBaUQsK0JBQStCLHNCQUFzQixvQkFBb0IsaUJBQWlCLGlCQUFpQixlQUFlLEdBQUcsK0JBQStCLCtCQUErQixHQUFHLHlCQUF5QixtQkFBbUIsZ0JBQWdCLGtDQUFrQyxvQkFBb0Isa0NBQWtDLDBDQUEwQyw0Q0FBNEMsdUJBQXVCLEdBQUcscUdBQXFHLGlDQUFpQywwQ0FBMEMsMENBQTBDLEdBQUcsbUJBQW1CLDZDQUE2QyxnQkFBZ0IsZUFBZSx5QkFBeUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLDRCQUE0QixvQ0FBb0MscUNBQXFDLEdBQUcsc0JBQXNCLG9CQUFvQiwrQkFBK0IsMkNBQTJDLEdBQUcsbUJBQW1CLDBDQUEwQyw2Q0FBNkMsd0JBQXdCLDZCQUE2QixZQUFZLGdCQUFnQixrQkFBa0IsMkJBQTJCLGdDQUFnQyxrQ0FBa0MsR0FBRyxzQkFBc0Isa0JBQWtCLG1DQUFtQyx3QkFBd0Isd0NBQXdDLHFDQUFxQyx3QkFBd0IsR0FBRyx1QkFBdUIsYUFBYSxrQkFBa0IsMkJBQTJCLEdBQUcsb0JBQW9CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGlDQUFpQywyQ0FBMkMsR0FBRyxvQkFBb0Isa0JBQWtCLGVBQWUsNEJBQTRCLG1DQUFtQyxpQ0FBaUMsR0FBRyxvQkFBb0Isd0NBQXdDLHdCQUF3Qix3Q0FBd0MsR0FBRyxnQkFBZ0Isa0JBQWtCLGVBQWUsbUNBQW1DLGlDQUFpQyx3QkFBd0Isa0NBQWtDLCtCQUErQixHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQiw2Q0FBNkMsR0FBRyxXQUFXLGtDQUFrQyxrQ0FBa0MsaUJBQWlCLEdBQUcsZUFBZSxrQkFBa0IsaUNBQWlDLEdBQUcscURBQXFELG9CQUFvQixpQkFBaUIsaURBQWlELGlCQUFpQixHQUFHLGVBQWUsWUFBWSxnQkFBZ0IsR0FBRyxrQkFBa0IsWUFBWSxnQkFBZ0IsR0FBRyxrQkFBa0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsb0JBQW9CLHFCQUFxQiw0Q0FBNEMsa0NBQWtDLDBDQUEwQyxHQUFHLHVCQUF1Qiw0Q0FBNEMsaUJBQWlCLGdCQUFnQixrQkFBa0IsOEJBQThCLHdCQUF3QixHQUFHLGFBQWEsb0JBQW9CLGtDQUFrQywrQkFBK0Isd0NBQXdDLEdBQUcsT0FBTyx1RkFBdUYsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLFFBQVEsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsNEJBQTRCLDRCQUE0QiwwQkFB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNTO0FBQ2M7QUFDTjtBQUNNO0FBQ25EOztBQUVBLGtFQUF3Qjs7QUFFeEI7QUFDQTtBQUNBLEVBQUUsd0VBQThCO0FBQ2hDO0FBQ0EsSUFBSSxvRkFBMEM7QUFDOUMsSUFBSSw0RUFBa0M7QUFDdEMsSUFBSSxpRUFBdUI7QUFDM0I7QUFDQSxFQUFFLGdGQUFzQztBQUN4QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGtFQUF3QjtBQUMxQixFQUFFLG9FQUEwQixDQUFDLHNFQUE0QjtBQUN6RCxFQUFFLGdGQUFzQztBQUN4QyxJQUFJLGlFQUF1QjtBQUMzQixJQUFJLGdGQUFzQztBQUMxQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFzQztBQUMxQyxJQUFJLCtFQUFxQztBQUN6QyxJQUFJLGdGQUFzQztBQUMxQyxNQUFNLGlFQUF1QjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzc5Y2QiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvZGlzcGxheUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3Byb2plY3RIYW5kbGVyLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy90YXNrSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAtLW1haW5fZm9udDogXFxcIkJ1bmdlZVxcXCI7XFxuICAtLW1haW5fY29sb3I6ICNhOGQ0ZDA7XFxuICAtLXNlY29uZGFyeV9jb2xvcjogI2ZkZmZmYztcXG4gIC0tdGVydGlhcnlfY29sb3I6ICMyZWM0YjY7XFxuICAtLWZvdXJ0aF9jb2xvcjogIzAxMTYyNztcXG4gIC0tc3RhbmRhcmRfcGFkZGluZzogMjBweDtcXG4gIC0tbGFyZ2VfcGFkZGluZzogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jaGVhZGVyX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbn1cXG5cXG4jcmlnaHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbiNzaWduX291dCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NpZ25fb3V0OmhvdmVyLFxcbiNzaWduX291dDpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuI21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBmbGV4OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDA7XFxufVxcblxcbiNsZWZ0X25hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3Z3O1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI3Byb2plY3RfbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxuICBmbGV4OiBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdF9jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdF90aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdF90aXRsZTpob3ZlcixcXG4ucHJvamVjdF90aXRsZTpmb2N1cyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3QsXFxuLmRlbGV0ZV90YXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3Q6aG92ZXIsXFxuLmRlbGV0ZV90YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogI2VmMjMzYztcXG59XFxuXFxuI3Byb2plY3Rfc3VibWlzc2lvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNob21lLFxcbiN0b2RheSxcXG4jd2VlayB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAydnc7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNjdXJyZW50X3Byb2plY3Qge1xcbiAgZm9udDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG59XFxuXFxuI2hvbWU6aG92ZXIsXFxuI2hvbWU6Zm9jdXMsXFxuI3RvZGF5OmhvdmVyLFxcbiN0b2RheTpmb2N1cyxcXG4jd2Vlazpob3ZlcixcXG4jd2Vlazpmb2N1cyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuI3Byb2plY3Rfdmlld2VyIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXFxuI25ld19wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTByZW07XFxuICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4jbmV3X3Byb2plY3Q6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jc3VibWl0X25ld19wcm9qZWN0IHtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3N1Ym1pdF9uZXdfcHJvamVjdDpob3ZlcixcXG4jc3VibWl0X25ld19wcm9qZWN0OmZvY3VzLFxcbiNzdWJtaXRfdGFzazpob3ZlcixcXG4jc3VibWl0X3Rhc2s6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9kaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIHdpZHRoOiAxMDA7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI2N1cnJlbnRfcHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jdGFza19jb250ZW50IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTBweDtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogNTV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVxcblxcbiNjcmVhdGVfbmV3X3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2NvbG9yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI25ld190YXNrX2NvbnRlbnQge1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25ld190YXNrX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNuZXdfdGFza19yb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4ucHJvamVjdF90YXNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuLnRhc2tfY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuLmRvbmVfYnRuIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG59XFxuXFxuLmRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRhc2tfcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jbmV3X3Rhc2ssXFxuI2R1ZV9kYXRlLFxcbiN1cmdlbmN5LFxcbiNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI25ld190YXNrIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMzV2dztcXG59XFxuXFxuI3N1Ym1pdF90YXNrIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuI2Zvb3Rlcl9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGlC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QSxxQ0FBQTtBQUlGOztBQURBO0VBQ0UsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FBSUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAtLW1haW5fZm9udDogXFxcIkJ1bmdlZVxcXCI7XFxuICAtLW1haW5fY29sb3I6ICNhOGQ0ZDA7XFxuICAtLXNlY29uZGFyeV9jb2xvcjogI2ZkZmZmYztcXG4gIC0tdGVydGlhcnlfY29sb3I6ICMyZWM0YjY7XFxuICAtLWZvdXJ0aF9jb2xvcjogIzAxMTYyNztcXG4gIC0tc3RhbmRhcmRfcGFkZGluZzogMjBweDtcXG4gIC0tbGFyZ2VfcGFkZGluZzogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jaGVhZGVyX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbn1cXG5cXG4jcmlnaHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbiNzaWduX291dCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NpZ25fb3V0OmhvdmVyLFxcbiNzaWduX291dDpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuI21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBmbGV4OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDA7XFxufVxcblxcbiNsZWZ0X25hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3Z3O1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI3Byb2plY3RfbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxuICBmbGV4OiBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdF9jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdF90aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdF90aXRsZTpob3ZlcixcXG4ucHJvamVjdF90aXRsZTpmb2N1cyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3QsXFxuLmRlbGV0ZV90YXNrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3Q6aG92ZXIsXFxuLmRlbGV0ZV90YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogI2VmMjMzYztcXG59XFxuXFxuI3Byb2plY3Rfc3VibWlzc2lvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcbiNob21lLFxcbiN0b2RheSxcXG4jd2VlayB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAydnc7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNjdXJyZW50X3Byb2plY3Qge1xcbiAgZm9udDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG59XFxuI2hvbWU6aG92ZXIsXFxuI2hvbWU6Zm9jdXMsXFxuI3RvZGF5OmhvdmVyLFxcbiN0b2RheTpmb2N1cyxcXG4jd2Vlazpob3ZlcixcXG4jd2Vlazpmb2N1cyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuI3Byb2plY3Rfdmlld2VyIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXFxuI25ld19wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTByZW07XFxuICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4jbmV3X3Byb2plY3Q6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jc3VibWl0X25ld19wcm9qZWN0IHtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3N1Ym1pdF9uZXdfcHJvamVjdDpob3ZlcixcXG4jc3VibWl0X25ld19wcm9qZWN0OmZvY3VzLFxcbiNzdWJtaXRfdGFzazpob3ZlcixcXG4jc3VibWl0X3Rhc2s6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9kaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIHdpZHRoOiAxMDA7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI2N1cnJlbnRfcHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jdGFza19jb250ZW50IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTBweDtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogNTV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVxcblxcbiNjcmVhdGVfbmV3X3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2NvbG9yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI25ld190YXNrX2NvbnRlbnQge1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25ld190YXNrX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcbiNuZXdfdGFza19yb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4ucHJvamVjdF90YXNrcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuLnRhc2tfY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuLmRvbmVfYnRuIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG59XFxuXFxuLmRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRhc2tfcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jbmV3X3Rhc2ssXFxuI2R1ZV9kYXRlLFxcbiN1cmdlbmN5LFxcbiNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI25ld190YXNrIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMzV2dztcXG59XFxuXFxuI3N1Ym1pdF90YXNrIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuI2Zvb3Rlcl9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZChjdXJyZW50VGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1JvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza1VyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZG9uZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0X1wiICsgY3VycmVudFRhc2submFtZSk7XG4gIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NhcmRcIik7XG4gIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NvbnRlbnRcIik7XG4gIGRvbmVCdG4uY2xhc3NMaXN0LmFkZChcImRvbmVfYnRuXCIpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkb25lQnRuKTtcbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrUm93MSk7XG4gIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZG9uZVwiKTtcbiAgfSk7XG5cbiAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuICB0YXNrUm93MS5jbGFzc0xpc3QuYWRkKFwidGFza19yb3dcIik7XG4gIHRhc2tSb3cyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3Jvd1wiKTtcbiAgdGFza05hbWUuaW5uZXJUZXh0ID0gXCJUYXNrOiBcIiArIGN1cnJlbnRUYXNrLm5hbWU7XG4gIHRhc2tEYXRlLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IFwiICsgY3VycmVudFRhc2suZGF0ZTtcbiAgdGFza0RhdGUuc3R5bGUuY29sb3IgPSBcIiMyZWM0YjZnaXQgcFwiO1xuICB0YXNrUm93MS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tSb3cxKTtcbiAgdGFza1VyZ2VuY3kuaW5uZXJUZXh0ID0gY3VycmVudFRhc2sudXJnZW5jeTtcbiAgdGFza1JvdzEuYXBwZW5kQ2hpbGQodGFza1VyZ2VuY3kpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrUm93Mik7XG4gIHRhc2tEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrUm93Mi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjdXJyZW50VGFzay5uYW1lICsgXCJfZGVsZXRlXCIpO1xuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZV90YXNrXCIpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrQ2FyZC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhc2tDYXJkO1xufVxuXG4vKmZ1bmN0aW9uIGRpc3BsYXlUYXNrU3VibWl0KHZhbHVlLCBjdXJyZW50VGFzaywgY3VycmVudFRhc2tOb1NwYWNlcykge1xuY29uc3QgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlICsgXCJfY29udGFpbmVyXCIpO1xubGV0IHRhc2tDYXJkID0gY3JlYXRlVGFza0NhcmQoY3VycmVudFRhc2spO1xuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmN1cnJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG5kZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbmRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjdXJyZW50VGFza05vU3BhY2VzICsgXCJfZGVsZXRlXCIpO1xuZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVfdGFza1wiKTtcbnRhc2tDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG59XG4qL1xuZnVuY3Rpb24gZGlzcGxheVRhc2tzQnlQcm9qZWN0KHByb2plY3RBcnJheSwgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMpIHtcbiAgbGV0IHRhc2tDYXJkO1xuICBjbGVhclRhc2tEaXNwbGF5KGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgY29uc3QgY3VycmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfY29udGFpbmVyXCJcbiAgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0YXNrQ2FyZCA9IGNyZWF0ZVRhc2tDYXJkKHByb2plY3RBcnJheVtpXSk7XG4gICAgY3VycmVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrRGlzcGxheShjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcykge1xuICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBjdXJyZW50Q29udGFpbmVyLnJlbW92ZSgpO1xuICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tfY29udGVudFwiKTtcbiAgbmV3VGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJpZFwiLFxuICAgIGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfY29udGFpbmVyXCJcbiAgKTtcbiAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90YXNrc1wiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVGFza0NhcmQsXG4gIGRpc3BsYXlUYXNrc0J5UHJvamVjdCxcbn07XG4iLCJsZXQgcHJvamVjdEFycmF5ID0gW107XG5sZXQgY3VycmVudFNlbGVjdGVkUHJvamVjdDtcbmxldCBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlO1xubGV0IHNlbGVjdGVkUHJvamVjdEFycmF5O1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrQXJyYXkgPSBbXTtcbiAgfVxuICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICB0aGlzLnRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICB9XG59XG5mdW5jdGlvbiBnZXROZXdQcm9qZWN0TmFtZSgpIHtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfcHJvamVjdFwiKTtcbiAgcmV0dXJuIG5ld1Byb2plY3ROYW1lLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCkge1xuICByZXR1cm4gZ2V0TmV3UHJvamVjdE5hbWUoKS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld1Byb2plY3QoKSB7XG4gIGxldCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdF92aWV3ZXJcIik7XG4gIGxldCBwcm9qZWN0TmFtZSA9IGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMoKTtcblxuICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2NhcmRcIiwgcHJvamVjdE5hbWUpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90aXRsZVwiLCBwcm9qZWN0TmFtZSk7XG4gIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lICsgXCJfYnRuXCIpO1xuICBuZXdQcm9qZWN0TmFtZS5pbm5lclRleHQgPSBnZXROZXdQcm9qZWN0TmFtZSgpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbiAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlX3Byb2plY3RcIik7XG4gIGRlbGV0ZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE5hbWUpO1xuICBkZWxldGVQcm9qZWN0LmlubmVyVGV4dCA9IFwiREVMRVRFXCI7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIG92ZXJyaWRlU3VibWl0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdE5hbWVOb1NwYWNlcyk7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICAgIGRlbGV0ZUl0ZW1zLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbXlQcm9qZWN0VGl0bGUgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICAgIG15UHJvamVjdFRpdGxlID0gbXlQcm9qZWN0VGl0bGUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICAgIGlmIChteVByb2plY3RUaXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhck5ld1Byb2plY3RGaWVsZHMoKSB7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Byb2plY3RcIik7XG4gIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2VsZWN0ZWRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50X3Byb2plY3RcIik7XG4gIHByb2plY3REaXNwbGF5LmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0QXJyYXlbaV0ubmFtZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIGN1cnJlbnRTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXlbaV07XG4gICAgICBzZWxlY3RlZFByb2plY3RBcnJheSA9IHByb2plY3RBcnJheVtpXS50YXNrQXJyYXk7XG4gICAgICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlID0gcHJvamVjdEFycmF5W2ldLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG4gICAgfVxuICB9XG59XG4vKlxuZnVuY3Rpb24gYWRkUHJvamVjdFNlbGVjdGlvbkV2ZW50TGlzdGVuZXIocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9idG5cIik7XG4gIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHJlcGxhY2VUYXNrQ29udGFpbmVyKHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICB9KTtcbn1cbiovXG5cbmZ1bmN0aW9uIHJlcGxhY2VUYXNrQ29udGFpbmVyKHByb2plY3ROYW1lTm9TcGFjZXMpIHtcbiAgY29uc3QgY3VycmVudFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfdGFza3NcIik7XG4gIGN1cnJlbnRUYXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGFza3NcIik7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBsb2dOZXdQcm9qZWN0KCkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0TmFtZSgpO1xuICBsZXQgcHJvamVjdE5hbWVOb1NwYWNlcyA9IGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMoKTtcblxuICBvdmVycmlkZVN1Ym1pdChldmVudCk7XG4gIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICBkaXNwbGF5TmV3UHJvamVjdCgpO1xuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKTtcbn1cbmZ1bmN0aW9uIHNldEhvbWUoKSB7XG4gIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBsZXQgaG9tZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhvbWVUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZV9jb250YWluZXJcIik7XG4gIGhvbWVUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3Rhc2tzXCIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYXNrQ29udGFpbmVyKTtcblxuICBsZXQgaG9tZSA9IG5ldyBQcm9qZWN0KFwiaG9tZVwiKTtcbiAgcHJvamVjdEFycmF5LnB1c2goaG9tZSk7XG4gIGN1cnJlbnRTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gIHNlbGVjdGVkUHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5WzBdLnRhc2tBcnJheTtcbiAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZSA9IFwiaG9tZVwiO1xuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0KFwiaG9tZVwiKTtcbiAgICByZXBsYWNlVGFza0NvbnRhaW5lcihcImhvbWVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoQXJyYXkoYWRkZWRUYXNrKSB7XG4gIGN1cnJlbnRTZWxlY3RlZFByb2plY3QudGFza0FycmF5LnB1c2goYWRkZWRUYXNrKTtcbiAgcmV0dXJuIGNvbnNvbGUubG9nKGN1cnJlbnRTZWxlY3RlZFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBnZXRDU1AoKSB7XG4gIHJldHVybiBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50TmFtZU5vU3BhY2UoKSB7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlO1xufVxuXG5mdW5jdGlvbiBnZXRTUEEoKSB7XG4gIHJldHVybiBzZWxlY3RlZFByb2plY3RBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBQcm9qZWN0LFxuICBnZXROZXdQcm9qZWN0TmFtZSxcbiAgZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcyxcbiAgY3JlYXRlTmV3UHJvamVjdCxcbiAgZGlzcGxheU5ld1Byb2plY3QsXG4gIG92ZXJyaWRlU3VibWl0LFxuICBkZWxldGVQcm9qZWN0LFxuICBjbGVhck5ld1Byb2plY3RGaWVsZHMsXG4gIGNoYW5nZVNlbGVjdGVkUHJvamVjdCxcbiAgbG9nTmV3UHJvamVjdCxcbiAgc2V0SG9tZSxcbiAgcHVzaEFycmF5LFxuICBnZXRDU1AsXG4gIGdldEN1cnJlbnROYW1lTm9TcGFjZSxcbiAgZ2V0U1BBLFxuICByZXBsYWNlVGFza0NvbnRhaW5lcixcbn07XG4iLCJsZXQgY3VycmVudFRhc2s7XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlLCB1cmdlbmN5LCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLnVyZ2VuY3kgPSB1cmdlbmN5O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKG5hbWUsIGRhdGUsIHVyZ2VuY3ksIGRlc2NyaXB0aW9uKSB7XG4gIGN1cnJlbnRUYXNrID0gbmV3IFRhc2sobmFtZSwgZGF0ZSwgdXJnZW5jeSwgZGVzY3JpcHRpb24pO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVN1Ym1pdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBnZXROZXdUYXNrTmFtZSgpIHtcbiAgbGV0IG5ld1Rhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfdGFza1wiKTtcbiAgcmV0dXJuIG5ld1Rhc2tOYW1lLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXROZXdUYXNrTmFtZU5vU3BhY2VzKCkge1xuICByZXR1cm4gZ2V0TmV3VGFza05hbWUoKS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdUYXNrRmllbGRzKCkge1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Rhc2tfZm9ybVwiKTtcbiAgdGFza0Zvcm0ucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gbG9nTmV3VGFzaygpIHtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld190YXNrXCIpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlX2RhdGVcIik7XG4gIGNvbnN0IHRhc2tVcmdlbmN5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cmdlbmN5XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpO1xuICBsZXQgbmFtZSA9IHRhc2tOYW1lLnZhbHVlO1xuICBsZXQgZGF0ZSA9IHRhc2tEYXRlLnZhbHVlO1xuICBsZXQgdXJnZW5jeSA9IHRhc2tVcmdlbmN5LnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG5cbiAgb3ZlcnJpZGVTdWJtaXQoZXZlbnQpO1xuICBjcmVhdGVOZXdUYXNrKG5hbWUsIGRhdGUsIHVyZ2VuY3ksIGRlc2NyaXB0aW9uKTtcbiAgY29uc29sZS5sb2coY3VycmVudFRhc2spO1xuICBjbGVhck5ld1Rhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2soKSB7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcbiAgcmV0dXJuIGN1cnJlbnRUYXNrO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RBcnJheSwgdGFza05hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbXlUYXNrVGl0bGUgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICBteVRhc2tUaXRsZSA9IG15VGFza1RpdGxlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgaWYgKG15VGFza1RpdGxlID09PSB0YXNrTmFtZSkge1xuICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBUYXNrLFxuICBjcmVhdGVOZXdUYXNrLFxuICBvdmVycmlkZVN1Ym1pdCxcbiAgZ2V0TmV3VGFza05hbWUsXG4gIGdldE5ld1Rhc2tOYW1lTm9TcGFjZXMsXG4gIGNsZWFyTmV3VGFza0ZpZWxkcyxcbiAgbG9nTmV3VGFzayxcbiAgZ2V0Q3VycmVudFRhc2ssXG4gIGRlbGV0ZVRhc2ssXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9jb250ZW50L05QQ19sb2dvLnBuZ1wiO1xuaW1wb3J0IHByb2plY3RGdW5jdGlvbnMgZnJvbSBcIi4vcHJvamVjdEhhbmRsZXIuanNcIjtcbmltcG9ydCB0YXNrRnVuY3Rpb25zIGZyb20gXCIuL3Rhc2tIYW5kbGVyLmpzXCI7XG5pbXBvcnQgZGlzcGxheUZ1bmN0aW9ucyBmcm9tIFwiLi9kaXNwbGF5SGFuZGxlci5qc1wiO1xubGV0IGN1cnJlbnRUYXNrQ29weTtcblxucHJvamVjdEZ1bmN0aW9ucy5zZXRIb21lKCk7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0X25ld19wcm9qZWN0XCIpO1xuY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2plY3RGdW5jdGlvbnMubG9nTmV3UHJvamVjdCgpO1xuICBhZGRQcm9qZWN0U2VsZWN0aW9uRXZlbnRMaXN0ZW5lcihcbiAgICBwcm9qZWN0RnVuY3Rpb25zLmdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMoKSxcbiAgICBwcm9qZWN0RnVuY3Rpb25zLmdldE5ld1Byb2plY3ROYW1lKCksXG4gICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRTUEEoKVxuICApO1xuICBwcm9qZWN0RnVuY3Rpb25zLmNsZWFyTmV3UHJvamVjdEZpZWxkcygpO1xufSk7XG5cbi8qXG5jb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRfdGFza1wiKTtcbnN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Z1bmN0aW9ucy5sb2dOZXdUYXNrKCk7XG4gIHByb2plY3RGdW5jdGlvbnMucHVzaEFycmF5KHRhc2tGdW5jdGlvbnMuZ2V0Q3VycmVudFRhc2soKSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RGdW5jdGlvbnMuZ2V0U1BBKCkpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0RnVuY3Rpb25zLmdldEN1cnJlbnROYW1lTm9TcGFjZSgpKTtcbiAgY29uc29sZS5sb2codGFza0Z1bmN0aW9ucy5nZXRDdXJyZW50VGFzaygpKTtcbiAgbGV0IHRhc2tOYW1lID0gdGFza0Z1bmN0aW9ucy5nZXRDdXJyZW50VGFzaygpO1xuICBkaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlUYXNrU3VibWl0KFxuICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0Q3VycmVudE5hbWVOb1NwYWNlKCksXG4gICAgdGFza05hbWUsXG4gICAgdGFza0Z1bmN0aW9ucy5nZXROZXdUYXNrTmFtZU5vU3BhY2VzKClcbiAgKTtcbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIHRhc2tGdW5jdGlvbnMuZ2V0TmV3VGFza05hbWVOb1NwYWNlcygpICsgXCJfZGVsZXRlXCJcbiAgKTtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRfXCIgKyB0YXNrTmFtZS5uYW1lKTtcbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tDYXJkLnJlbW92ZSgpO1xuICB9KTtcbn0pO1xuKi9cblxuY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0X3Rhc2tcIik7XG5zdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGdW5jdGlvbnMubG9nTmV3VGFzaygpO1xuICBwcm9qZWN0RnVuY3Rpb25zLnB1c2hBcnJheSh0YXNrRnVuY3Rpb25zLmdldEN1cnJlbnRUYXNrKCkpO1xuICBkaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlUYXNrc0J5UHJvamVjdChcbiAgICBwcm9qZWN0RnVuY3Rpb25zLmdldFNQQSgpLFxuICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0Q3VycmVudE5hbWVOb1NwYWNlKClcbiAgKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0U2VsZWN0aW9uRXZlbnRMaXN0ZW5lcihcbiAgcHJvamVjdE5hbWVOb1NwYWNlcyxcbiAgcHJvamVjdE5hbWUsXG4gIHByb2plY3RBcnJheVxuKSB7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfYnRuXCIpO1xuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdEZ1bmN0aW9ucy5jaGFuZ2VTZWxlY3RlZFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RGdW5jdGlvbnMucmVwbGFjZVRhc2tDb250YWluZXIocHJvamVjdE5hbWVOb1NwYWNlcyk7XG4gICAgZGlzcGxheUZ1bmN0aW9ucy5kaXNwbGF5VGFza3NCeVByb2plY3QoXG4gICAgICBwcm9qZWN0RnVuY3Rpb25zLmdldFNQQSgpLFxuICAgICAgcHJvamVjdE5hbWVOb1NwYWNlc1xuICAgICk7XG4gIH0pO1xufVxuLy8gY2FsbCBhIHRhc2tGdW5jdGlvbiB0aGF0IHVzZXMgcHJvamVjdEZ1bmN0aW9ucy5jdXJyZW50U2VsZWN0ZWRQcm9qZWN0XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=