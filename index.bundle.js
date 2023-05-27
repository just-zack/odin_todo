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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  --main_font: \"Bungee\";\n  --main_color: #a8d4d0;\n  --secondary_color: #fdfffc;\n  --tertiary_color: #2ec4b6;\n  --fourth_color: #011627;\n  --standard_padding: 20px;\n  --large_padding: 40px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tertiary_color);\n  height: 100vh;\n  width: 100vw;\n}\n\n#header_container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--standard_padding);\n  background-color: var(--tertiary_color);\n  font-family: var(--main_font);\n  color: var(--secondary_color);\n}\n\n#right_container {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n#logo {\n  height: 60px;\n}\n\n#sign_out {\n  height: 40px;\n  width: 120px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--secondary_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#sign_out:hover,\n#sign_out:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--tertiary_color);\n}\n\n#main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  flex: auto;\n  height: 100;\n}\n\n#left_nav {\n  background-color: var(--secondary_color);\n  width: 30vw;\n  height: 100;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-top-left-radius: 3vw;\n  padding: var(--standard_padding);\n  gap: var(--standard_padding);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#project_list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: var(--large_padding);\n  flex: auto;\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 20px;\n  box-shadow: 1px 5px 15px;\n}\n\n.project_card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--standard_padding);\n  gap: 10px;\n}\n\n.project_title {\n  font-size: 1.5rem;\n  color: var(--fourth_color);\n  border: none;\n  background-color: var(--secondary_color);\n  text-align: start;\n}\n\n.project_title:hover,\n.project_title:focus {\n  font-size: 1.5rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n.delete_project,\n.delete_task {\n  width: 80px;\n  height: 2.2rem;\n  background-color: var(--secondary_color);\n  border-radius: 8px;\n}\n\n.delete_project:hover,\n.delete_task:hover {\n  background-color: #ef233c;\n  color: var(--secondary_color);\n  border-color: #ef233c;\n}\n\n#project_submission {\n  display: flex;\n  justify-content: space-between;\n  align-self: stretch;\n  gap: var(--standard_padding);\n}\n\n#home,\n#today,\n#week {\n  font-size: 1.5rem;\n  width: 2vw;\n  font-family: var(--main_font);\n  border: none;\n  background-color: var(--secondary_color);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#projects {\n  font-size: 1.7rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#current_project {\n  font: 1.5rem;\n  color: var(--fourth_color);\n  font-family: var(--main_font);\n}\n\n#home:hover,\n#home:focus,\n#today:hover,\n#today:focus,\n#week:hover,\n#week:focus {\n  font-size: 2rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n#project_viewer {\n  padding-top: var(--large_padding);\n}\n\n#new_project {\n  background-color: var(--secondary_color);\n  border: none;\n  border-bottom: 2px solid var(--fourth_color);\n  color: var(--fourth_color);\n  padding-left: 5px;\n  font-size: 1rem;\n  height: 2rem;\n  width: 10rem;\n  flex: auto;\n}\n\n#new_project::placeholder {\n  color: var(--fourth_color);\n}\n\n#submit_new_project {\n  height: 2.2rem;\n  width: 80px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#submit_new_project:hover,\n#submit_new_project:focus,\n#submit_task:hover,\n#submit_task:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#main_display {\n  background-color: var(--secondary_color);\n  height: 100;\n  width: 100;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border-bottom-right-radius: 3vw;\n  padding: var(--standard_padding);\n}\n\n#current_project {\n  font-size: 2rem;\n  color: var(--fourth_color);\n  margin-bottom: var(--standard_padding);\n}\n\n#task_content {\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 30px;\n  box-shadow: 1px 5px 10px;\n  flex: 1;\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: var(--large_padding);\n}\n\n#create_new_task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--main_color);\n  padding: var(--standard_padding);\n  border-radius: 20px;\n}\n\n#new_task_content {\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n#new_task_form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--standard_padding);\n  padding-right: var(--standard_padding);\n}\n\n#new_task_row1 {\n  display: flex;\n  flex: auto;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n}\n\n.project_tasks {\n  background-color: var(--main_color);\n  border-radius: 20px;\n  margin-top: var(--standard_padding);\n}\n\n.task_card {\n  display: flex;\n  width: 100;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n  align-items: center;\n  padding: var(--large_padding);\n  color: var(--fourth_color);\n}\n\n.done_btn {\n  width: 15px;\n  height: 15px;\n  background-color: var(--secondary_color);\n}\n\n.done {\n  text-decoration: line-through;\n  color: var(--secondary_color);\n  opacity: 0.5;\n}\n\n.task_row {\n  display: flex;\n  gap: var(--standard_padding);\n}\n\n#new_task,\n#due_date,\n#urgency,\n#description {\n  font-size: 1rem;\n  border: none;\n  border-bottom: solid 2px var(--fourth_color);\n  padding: 5px;\n}\n\n#new_task {\n  flex: 1;\n  width: 20vw;\n}\n\n#description {\n  flex: 1;\n  width: 35vw;\n}\n\n#submit_task {\n  height: 35px;\n  width: 35px;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: var(--tertiary_color);\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#footer_container {\n  background-color: var(--tertiary_color);\n  width: 100vw;\n  height: 5vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#footer {\n  font-size: 1rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-right: var(--large_padding);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  --main_font: \"Bungee\";\n  --main_color: #a8d4d0;\n  --secondary_color: #fdfffc;\n  --tertiary_color: #2ec4b6;\n  --fourth_color: #011627;\n  --standard_padding: 20px;\n  --large_padding: 40px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tertiary_color);\n  height: 100vh;\n  width: 100vw;\n}\n\n#header_container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--standard_padding);\n  background-color: var(--tertiary_color);\n  font-family: var(--main_font);\n  color: var(--secondary_color);\n}\n\n#right_container {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n#logo {\n  height: 60px;\n}\n\n#sign_out {\n  height: 40px;\n  width: 120px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--secondary_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#sign_out:hover,\n#sign_out:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--tertiary_color);\n}\n\n#main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  flex: auto;\n  height: 100;\n}\n\n#left_nav {\n  background-color: var(--secondary_color);\n  width: 30vw;\n  height: 100;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-top-left-radius: 3vw;\n  padding: var(--standard_padding);\n  gap: var(--standard_padding);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#project_list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: var(--large_padding);\n  flex: auto;\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 20px;\n  box-shadow: 1px 5px 15px;\n}\n\n.project_card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--standard_padding);\n  gap: 10px;\n}\n\n.project_title {\n  font-size: 1.5rem;\n  color: var(--fourth_color);\n  border: none;\n  background-color: var(--secondary_color);\n  text-align: start;\n}\n\n.project_title:hover,\n.project_title:focus {\n  font-size: 1.5rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n.delete_project,\n.delete_task {\n  width: 80px;\n  height: 2.2rem;\n  background-color: var(--secondary_color);\n  border-radius: 8px;\n}\n\n.delete_project:hover,\n.delete_task:hover {\n  background-color: #ef233c;\n  color: var(--secondary_color);\n  border-color: #ef233c;\n}\n\n#project_submission {\n  display: flex;\n  justify-content: space-between;\n  align-self: stretch;\n  gap: var(--standard_padding);\n}\n#home,\n#today,\n#week {\n  font-size: 1.5rem;\n  width: 2vw;\n  font-family: var(--main_font);\n  border: none;\n  background-color: var(--secondary_color);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#projects {\n  font-size: 1.7rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#current_project {\n  font: 1.5rem;\n  color: var(--fourth_color);\n  font-family: var(--main_font);\n}\n#home:hover,\n#home:focus,\n#today:hover,\n#today:focus,\n#week:hover,\n#week:focus {\n  font-size: 2rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n#project_viewer {\n  padding-top: var(--large_padding);\n}\n\n#new_project {\n  background-color: var(--secondary_color);\n  border: none;\n  border-bottom: 2px solid var(--fourth_color);\n  color: var(--fourth_color);\n  padding-left: 5px;\n  font-size: 1rem;\n  height: 2rem;\n  width: 10rem;\n  flex: auto;\n}\n\n#new_project::placeholder {\n  color: var(--fourth_color);\n}\n\n#submit_new_project {\n  height: 2.2rem;\n  width: 80px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#submit_new_project:hover,\n#submit_new_project:focus,\n#submit_task:hover,\n#submit_task:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#main_display {\n  background-color: var(--secondary_color);\n  height: 100;\n  width: 100;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border-bottom-right-radius: 3vw;\n  padding: var(--standard_padding);\n}\n\n#current_project {\n  font-size: 2rem;\n  color: var(--fourth_color);\n  margin-bottom: var(--standard_padding);\n}\n\n#task_content {\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 30px;\n  box-shadow: 1px 5px 10px;\n  flex: 1;\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: var(--large_padding);\n}\n\n#create_new_task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--main_color);\n  padding: var(--standard_padding);\n  border-radius: 20px;\n}\n\n#new_task_content {\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n#new_task_form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--standard_padding);\n  padding-right: var(--standard_padding);\n}\n#new_task_row1 {\n  display: flex;\n  flex: auto;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n}\n\n.project_tasks {\n  background-color: var(--main_color);\n  border-radius: 20px;\n  margin-top: var(--standard_padding);\n}\n\n.task_card {\n  display: flex;\n  width: 100;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n  align-items: center;\n  padding: var(--large_padding);\n  color: var(--fourth_color);\n}\n\n.done_btn {\n  width: 15px;\n  height: 15px;\n  background-color: var(--secondary_color);\n}\n\n.done {\n  text-decoration: line-through;\n  color: var(--secondary_color);\n  opacity: 0.5;\n}\n\n.task_row {\n  display: flex;\n  gap: var(--standard_padding);\n}\n\n#new_task,\n#due_date,\n#urgency,\n#description {\n  font-size: 1rem;\n  border: none;\n  border-bottom: solid 2px var(--fourth_color);\n  padding: 5px;\n}\n\n#new_task {\n  flex: 1;\n  width: 20vw;\n}\n\n#description {\n  flex: 1;\n  width: 35vw;\n}\n\n#submit_task {\n  height: 35px;\n  width: 35px;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: var(--tertiary_color);\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#footer_container {\n  background-color: var(--tertiary_color);\n  width: 100vw;\n  height: 5vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#footer {\n  font-size: 1rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-right: var(--large_padding);\n}\n"],"sourceRoot":""}]);
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

/*function replaceTaskContainer(projectNameNoSpaces) {
  const currentTaskContainer = document.querySelector(".project_tasks");
  currentTaskContainer.remove();

  const newTaskContainer = document.createElement("div");
  const taskContent = document.getElementById("task_content");
  newTaskContainer.setAttribute("id", projectNameNoSpaces + "_container");
  newTaskContainer.classList.add("project_tasks");
  taskContent.appendChild(newTaskContainer);
}
*/

function logNewProject() {
  let projectName = getNewProjectName();
  let projectNameNoSpaces = getNewProjectNameNoSpaces();

  overrideSubmit(event);
  createNewProject(projectName);
  displayNewProject();
  deleteProject(projectNameNoSpaces, projectName);
}
function setHome() {
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
}

function pushArray(addedTask) {
  currentSelectedProject.taskArray.push(addedTask);
}
function pushHomeArray(addedTask) {
  projectArray[0].taskArray.push(addedTask);
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

function getHome() {
  return projectArray[0];
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
  pushHomeArray,
  getCSP,
  getCurrentNameNoSpace,
  getSPA,
  getHome,
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






_projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].setHome();
let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeSelectedProject("home");
  _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].replaceTaskContainer("home");
  _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTasksByProject(
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getHome().taskArray,
    "home"
  );
});

const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", () => {
  _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].logNewProject();
  addProjectSelectionEventListener(
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getNewProjectNameNoSpaces(),
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getNewProjectName()
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
  if (_projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCSP().name !== "home") {
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].pushArray(_taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTask());
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].pushHomeArray(_taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTask());
  } else {
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].pushHomeArray(_taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTask());
  }
  _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTasksByProject(
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSPA(),
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentNameNoSpace()
  );
});

function addProjectSelectionEventListener(projectNameNoSpaces, projectName) {
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeSelectedProject(projectName);
    _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].replaceTaskContainer(projectNameNoSpaces);
    _displayHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].displayTasksByProject(
      _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSPA(),
      projectNameNoSpaces
    );
  });
}

function deleteTaskFromArray(taskName) {
  console.log(_projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCSP());
  let taskArray = _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCSP().taskArray;

  console.log(taskArray);
  for (let i = 0; i < taskArray.length; i++) {
    let myTaskTitle = taskArray[i].name;
    myTaskTitle = myTaskTitle.replace(/\s+/g, "");
    if (myTaskTitle === taskName) {
      taskArray.splice(i, 1);
    }
    console.log(taskArray);
  }
}

// call a taskFunction that uses projectFunctions.currentSelectedProject

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLFFBQVEsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsNEJBQTRCLDRCQUE0QiwwQkFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2R0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QztBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NzljZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9kaXNwbGF5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvcHJvamVjdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3Rhc2tIYW5kbGVyLmpzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIC0tbWFpbl9mb250OiBcXFwiQnVuZ2VlXFxcIjtcXG4gIC0tbWFpbl9jb2xvcjogI2E4ZDRkMDtcXG4gIC0tc2Vjb25kYXJ5X2NvbG9yOiAjZmRmZmZjO1xcbiAgLS10ZXJ0aWFyeV9jb2xvcjogIzJlYzRiNjtcXG4gIC0tZm91cnRoX2NvbG9yOiAjMDExNjI3O1xcbiAgLS1zdGFuZGFyZF9wYWRkaW5nOiAyMHB4O1xcbiAgLS1sYXJnZV9wYWRkaW5nOiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNoZWFkZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxufVxcblxcbiNyaWdodF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNsb2dvIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuI3NpZ25fb3V0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2lnbl9vdXQ6aG92ZXIsXFxuI3NpZ25fb3V0OmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGZsZXg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMDtcXG59XFxuXFxuI2xlZnRfbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdF9saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG4gIGZsZXg6IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0X2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlOmhvdmVyLFxcbi5wcm9qZWN0X3RpdGxlOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdCxcXG4uZGVsZXRlX3Rhc2sge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdDpob3ZlcixcXG4uZGVsZXRlX3Rhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWYyMzNjO1xcbn1cXG5cXG4jcHJvamVjdF9zdWJtaXNzaW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI2hvbWUsXFxuI3RvZGF5LFxcbiN3ZWVrIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDJ2dztcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI2N1cnJlbnRfcHJvamVjdCB7XFxuICBmb250OiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbn1cXG5cXG4jaG9tZTpob3ZlcixcXG4jaG9tZTpmb2N1cyxcXG4jdG9kYXk6aG92ZXIsXFxuI3RvZGF5OmZvY3VzLFxcbiN3ZWVrOmhvdmVyLFxcbiN3ZWVrOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4jcHJvamVjdF92aWV3ZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cXG5cXG4jbmV3X3Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGZsZXg6IGF1dG87XFxufVxcblxcbiNuZXdfcHJvamVjdDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxufVxcblxcbiNzdWJtaXRfbmV3X3Byb2plY3Qge1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICB3aWR0aDogODBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc3VibWl0X25ld19wcm9qZWN0OmhvdmVyLFxcbiNzdWJtaXRfbmV3X3Byb2plY3Q6Zm9jdXMsXFxuI3N1Ym1pdF90YXNrOmhvdmVyLFxcbiNzdWJtaXRfdGFzazpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxufVxcblxcbiNtYWluX2Rpc3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGhlaWdodDogMTAwO1xcbiAgd2lkdGg6IDEwMDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDN2dztcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jY3VycmVudF9wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiN0YXNrX2NvbnRlbnQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXFxuI2NyZWF0ZV9uZXdfdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fY29sb3IpO1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jbmV3X3Rhc2tfY29udGVudCB7XFxuICBnYXA6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmV3X3Rhc2tfZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI25ld190YXNrX3JvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IGF1dG87XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbi5wcm9qZWN0X3Rhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4udGFza19jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4uZG9uZV9idG4ge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbn1cXG5cXG4uZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFza19yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNuZXdfdGFzayxcXG4jZHVlX2RhdGUsXFxuI3VyZ2VuY3ksXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jbmV3X3Rhc2sge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAzNXZ3O1xcbn1cXG5cXG4jc3VibWl0X3Rhc2sge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jZm9vdGVyX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTs7RUFFRSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FB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RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBSUY7O0FBREE7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0FBSUY7O0FBREE7Ozs7RUFJRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUFJRjs7QUFEQTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0FBSUY7O0FBREE7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIC0tbWFpbl9mb250OiBcXFwiQnVuZ2VlXFxcIjtcXG4gIC0tbWFpbl9jb2xvcjogI2E4ZDRkMDtcXG4gIC0tc2Vjb25kYXJ5X2NvbG9yOiAjZmRmZmZjO1xcbiAgLS10ZXJ0aWFyeV9jb2xvcjogIzJlYzRiNjtcXG4gIC0tZm91cnRoX2NvbG9yOiAjMDExNjI3O1xcbiAgLS1zdGFuZGFyZF9wYWRkaW5nOiAyMHB4O1xcbiAgLS1sYXJnZV9wYWRkaW5nOiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNoZWFkZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxufVxcblxcbiNyaWdodF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNsb2dvIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuI3NpZ25fb3V0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2lnbl9vdXQ6aG92ZXIsXFxuI3NpZ25fb3V0OmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGZsZXg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMDtcXG59XFxuXFxuI2xlZnRfbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdF9saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG4gIGZsZXg6IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0X2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlOmhvdmVyLFxcbi5wcm9qZWN0X3RpdGxlOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdCxcXG4uZGVsZXRlX3Rhc2sge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdDpob3ZlcixcXG4uZGVsZXRlX3Rhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWYyMzNjO1xcbn1cXG5cXG4jcHJvamVjdF9zdWJtaXNzaW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuI2hvbWUsXFxuI3RvZGF5LFxcbiN3ZWVrIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDJ2dztcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI2N1cnJlbnRfcHJvamVjdCB7XFxuICBmb250OiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbn1cXG4jaG9tZTpob3ZlcixcXG4jaG9tZTpmb2N1cyxcXG4jdG9kYXk6aG92ZXIsXFxuI3RvZGF5OmZvY3VzLFxcbiN3ZWVrOmhvdmVyLFxcbiN3ZWVrOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4jcHJvamVjdF92aWV3ZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cXG5cXG4jbmV3X3Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGZsZXg6IGF1dG87XFxufVxcblxcbiNuZXdfcHJvamVjdDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxufVxcblxcbiNzdWJtaXRfbmV3X3Byb2plY3Qge1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICB3aWR0aDogODBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc3VibWl0X25ld19wcm9qZWN0OmhvdmVyLFxcbiNzdWJtaXRfbmV3X3Byb2plY3Q6Zm9jdXMsXFxuI3N1Ym1pdF90YXNrOmhvdmVyLFxcbiNzdWJtaXRfdGFzazpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxufVxcblxcbiNtYWluX2Rpc3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGhlaWdodDogMTAwO1xcbiAgd2lkdGg6IDEwMDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDN2dztcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jY3VycmVudF9wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiN0YXNrX2NvbnRlbnQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXFxuI2NyZWF0ZV9uZXdfdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fY29sb3IpO1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jbmV3X3Rhc2tfY29udGVudCB7XFxuICBnYXA6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmV3X3Rhc2tfZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuI25ld190YXNrX3JvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IGF1dG87XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbi5wcm9qZWN0X3Rhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4udGFza19jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4uZG9uZV9idG4ge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbn1cXG5cXG4uZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGFza19yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNuZXdfdGFzayxcXG4jZHVlX2RhdGUsXFxuI3VyZ2VuY3ksXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jbmV3X3Rhc2sge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAzNXZ3O1xcbn1cXG5cXG4jc3VibWl0X3Rhc2sge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jZm9vdGVyX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKGN1cnJlbnRUYXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBkb25lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRfXCIgKyBjdXJyZW50VGFzay5uYW1lKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChcInRhc2tfY2FyZFwiKTtcbiAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2tfY29udGVudFwiKTtcbiAgZG9uZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZG9uZV9idG5cIik7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tSb3cxKTtcbiAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJkb25lXCIpO1xuICB9KTtcblxuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gIHRhc2tSb3cxLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3Jvd1wiKTtcbiAgdGFza1JvdzIuY2xhc3NMaXN0LmFkZChcInRhc2tfcm93XCIpO1xuICB0YXNrTmFtZS5pbm5lclRleHQgPSBcIlRhc2s6IFwiICsgY3VycmVudFRhc2submFtZTtcbiAgdGFza0RhdGUuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogXCIgKyBjdXJyZW50VGFzay5kYXRlO1xuICB0YXNrRGF0ZS5zdHlsZS5jb2xvciA9IFwiIzJlYzRiNmdpdCBwXCI7XG4gIHRhc2tSb3cxLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1JvdzEpO1xuICB0YXNrVXJnZW5jeS5pbm5lclRleHQgPSBjdXJyZW50VGFzay51cmdlbmN5O1xuICB0YXNrUm93MS5hcHBlbmRDaGlsZCh0YXNrVXJnZW5jeSk7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tSb3cyKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiICsgY3VycmVudFRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tSb3cyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGN1cnJlbnRUYXNrLm5hbWUgKyBcIl9kZWxldGVcIik7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlX3Rhc2tcIik7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tDYXJkLnJlbW92ZSgpO1xuICB9KTtcblxuICByZXR1cm4gdGFza0NhcmQ7XG59XG5cbi8qZnVuY3Rpb24gZGlzcGxheVRhc2tTdWJtaXQodmFsdWUsIGN1cnJlbnRUYXNrLCBjdXJyZW50VGFza05vU3BhY2VzKSB7XG5jb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUgKyBcIl9jb250YWluZXJcIik7XG5sZXQgdGFza0NhcmQgPSBjcmVhdGVUYXNrQ2FyZChjdXJyZW50VGFzayk7XG5jb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY3VycmVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG5cbmRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGN1cnJlbnRUYXNrTm9TcGFjZXMgKyBcIl9kZWxldGVcIik7XG5kZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZV90YXNrXCIpO1xudGFza0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbn1cbiovXG5mdW5jdGlvbiBkaXNwbGF5VGFza3NCeVByb2plY3QocHJvamVjdEFycmF5LCBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcykge1xuICBsZXQgdGFza0NhcmQ7XG4gIGNsZWFyVGFza0Rpc3BsYXkoY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMpO1xuICBjb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHRhc2tDYXJkID0gY3JlYXRlVGFza0NhcmQocHJvamVjdEFycmF5W2ldKTtcbiAgICBjdXJyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tEaXNwbGF5KGN1cnJlbnRQcm9qZWN0TmFtZU5vU3BhY2VzKSB7XG4gIGNvbnN0IGN1cnJlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiXG4gICk7XG4gIGN1cnJlbnRDb250YWluZXIucmVtb3ZlKCk7XG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImlkXCIsXG4gICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIlxuICApO1xuICBuZXdUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3Rhc2tzXCIpO1xuICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVRhc2tDb250YWluZXIocHJvamVjdE5hbWVOb1NwYWNlcykge1xuICBjb25zdCBjdXJyZW50VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF90YXNrc1wiKTtcbiAgY3VycmVudFRhc2tDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2NvbnRlbnRcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgcHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2NvbnRhaW5lclwiKTtcbiAgbmV3VGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF90YXNrc1wiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlVGFza0NhcmQsXG4gIGRpc3BsYXlUYXNrc0J5UHJvamVjdCxcbiAgcmVwbGFjZVRhc2tDb250YWluZXIsXG59O1xuIiwibGV0IHByb2plY3RBcnJheSA9IFtdO1xubGV0IGN1cnJlbnRTZWxlY3RlZFByb2plY3Q7XG5sZXQgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZTtcbmxldCBzZWxlY3RlZFByb2plY3RBcnJheTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza0FycmF5ID0gW107XG4gIH1cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgdGhpcy50YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWUoKSB7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Byb2plY3RcIik7XG4gIHJldHVybiBuZXdQcm9qZWN0TmFtZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcygpIHtcbiAgcmV0dXJuIGdldE5ld1Byb2plY3ROYW1lKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0KCkge1xuICBsZXQgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Rfdmlld2VyXCIpO1xuICBsZXQgcHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCk7XG5cbiAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9jYXJkXCIsIHByb2plY3ROYW1lKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGl0bGVcIiwgcHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZSArIFwiX2J0blwiKTtcbiAgbmV3UHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XG4gIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZV9wcm9qZWN0XCIpO1xuICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lKTtcbiAgZGVsZXRlUHJvamVjdC5pbm5lclRleHQgPSBcIkRFTEVURVwiO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVN1Ym1pdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBwcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgICBkZWxldGVJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG15UHJvamVjdFRpdGxlID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgICBteVByb2plY3RUaXRsZSA9IG15UHJvamVjdFRpdGxlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICBpZiAobXlQcm9qZWN0VGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdQcm9qZWN0RmllbGRzKCkge1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdGVkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudF9wcm9qZWN0XCIpO1xuICBwcm9qZWN0RGlzcGxheS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdEFycmF5W2ldLm5hbWUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXlbaV0udGFza0FycmF5O1xuICAgICAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZSA9IHByb2plY3RBcnJheVtpXS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgIH1cbiAgfVxufVxuLypcbmZ1bmN0aW9uIGFkZFByb2plY3RTZWxlY3Rpb25FdmVudExpc3RlbmVyKHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0TmFtZU5vU3BhY2VzICsgXCJfYnRuXCIpO1xuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlU2VsZWN0ZWRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICByZXBsYWNlVGFza0NvbnRhaW5lcihwcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgfSk7XG59XG4qL1xuXG4vKmZ1bmN0aW9uIHJlcGxhY2VUYXNrQ29udGFpbmVyKHByb2plY3ROYW1lTm9TcGFjZXMpIHtcbiAgY29uc3QgY3VycmVudFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfdGFza3NcIik7XG4gIGN1cnJlbnRUYXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBuZXdUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9jb250YWluZXJcIik7XG4gIG5ld1Rhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGFza3NcIik7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tDb250YWluZXIpO1xufVxuKi9cblxuZnVuY3Rpb24gbG9nTmV3UHJvamVjdCgpIHtcbiAgbGV0IHByb2plY3ROYW1lID0gZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgbGV0IHByb2plY3ROYW1lTm9TcGFjZXMgPSBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCk7XG5cbiAgb3ZlcnJpZGVTdWJtaXQoZXZlbnQpO1xuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgZGlzcGxheU5ld1Byb2plY3QoKTtcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZU5vU3BhY2VzLCBwcm9qZWN0TmFtZSk7XG59XG5mdW5jdGlvbiBzZXRIb21lKCkge1xuICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza19jb250ZW50XCIpO1xuICBsZXQgaG9tZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhvbWVUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZV9jb250YWluZXJcIik7XG4gIGhvbWVUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X3Rhc2tzXCIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYXNrQ29udGFpbmVyKTtcblxuICBsZXQgaG9tZSA9IG5ldyBQcm9qZWN0KFwiaG9tZVwiKTtcbiAgcHJvamVjdEFycmF5LnB1c2goaG9tZSk7XG4gIGN1cnJlbnRTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gIHNlbGVjdGVkUHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5WzBdLnRhc2tBcnJheTtcbiAgY3VycmVudFByb2plY3ROYW1lTm9TcGFjZSA9IFwiaG9tZVwiO1xufVxuXG5mdW5jdGlvbiBwdXNoQXJyYXkoYWRkZWRUYXNrKSB7XG4gIGN1cnJlbnRTZWxlY3RlZFByb2plY3QudGFza0FycmF5LnB1c2goYWRkZWRUYXNrKTtcbn1cbmZ1bmN0aW9uIHB1c2hIb21lQXJyYXkoYWRkZWRUYXNrKSB7XG4gIHByb2plY3RBcnJheVswXS50YXNrQXJyYXkucHVzaChhZGRlZFRhc2spO1xufVxuXG5mdW5jdGlvbiBnZXRDU1AoKSB7XG4gIHJldHVybiBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50TmFtZU5vU3BhY2UoKSB7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdE5hbWVOb1NwYWNlO1xufVxuXG5mdW5jdGlvbiBnZXRTUEEoKSB7XG4gIHJldHVybiBzZWxlY3RlZFByb2plY3RBcnJheTtcbn1cblxuZnVuY3Rpb24gZ2V0SG9tZSgpIHtcbiAgcmV0dXJuIHByb2plY3RBcnJheVswXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBQcm9qZWN0LFxuICBnZXROZXdQcm9qZWN0TmFtZSxcbiAgZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcyxcbiAgY3JlYXRlTmV3UHJvamVjdCxcbiAgZGlzcGxheU5ld1Byb2plY3QsXG4gIG92ZXJyaWRlU3VibWl0LFxuICBkZWxldGVQcm9qZWN0LFxuICBjbGVhck5ld1Byb2plY3RGaWVsZHMsXG4gIGNoYW5nZVNlbGVjdGVkUHJvamVjdCxcbiAgbG9nTmV3UHJvamVjdCxcbiAgc2V0SG9tZSxcbiAgcHVzaEFycmF5LFxuICBwdXNoSG9tZUFycmF5LFxuICBnZXRDU1AsXG4gIGdldEN1cnJlbnROYW1lTm9TcGFjZSxcbiAgZ2V0U1BBLFxuICBnZXRIb21lLFxufTtcbiIsImxldCBjdXJyZW50VGFzaztcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGUsIHVyZ2VuY3ksIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMudXJnZW5jeSA9IHVyZ2VuY3k7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sobmFtZSwgZGF0ZSwgdXJnZW5jeSwgZGVzY3JpcHRpb24pIHtcbiAgY3VycmVudFRhc2sgPSBuZXcgVGFzayhuYW1lLCBkYXRlLCB1cmdlbmN5LCBkZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIG92ZXJyaWRlU3VibWl0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGdldE5ld1Rhc2tOYW1lKCkge1xuICBsZXQgbmV3VGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld190YXNrXCIpO1xuICByZXR1cm4gbmV3VGFza05hbWUudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE5ld1Rhc2tOYW1lTm9TcGFjZXMoKSB7XG4gIHJldHVybiBnZXROZXdUYXNrTmFtZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhck5ld1Rhc2tGaWVsZHMoKSB7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfdGFza19mb3JtXCIpO1xuICB0YXNrRm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBsb2dOZXdUYXNrKCkge1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Rhc2tcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVfZGF0ZVwiKTtcbiAgY29uc3QgdGFza1VyZ2VuY3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVyZ2VuY3lcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gIGxldCBuYW1lID0gdGFza05hbWUudmFsdWU7XG4gIGxldCBkYXRlID0gdGFza0RhdGUudmFsdWU7XG4gIGxldCB1cmdlbmN5ID0gdGFza1VyZ2VuY3kudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcblxuICBvdmVycmlkZVN1Ym1pdChldmVudCk7XG4gIGNyZWF0ZU5ld1Rhc2sobmFtZSwgZGF0ZSwgdXJnZW5jeSwgZGVzY3JpcHRpb24pO1xuICBjbGVhck5ld1Rhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2soKSB7XG4gIHJldHVybiBjdXJyZW50VGFzaztcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0QXJyYXksIHRhc2tOYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG15VGFza1RpdGxlID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgbXlUYXNrVGl0bGUgPSBteVRhc2tUaXRsZS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xuICAgIGlmIChteVRhc2tUaXRsZSA9PT0gdGFza05hbWUpIHtcbiAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVGFzayxcbiAgY3JlYXRlTmV3VGFzayxcbiAgb3ZlcnJpZGVTdWJtaXQsXG4gIGdldE5ld1Rhc2tOYW1lLFxuICBnZXROZXdUYXNrTmFtZU5vU3BhY2VzLFxuICBjbGVhck5ld1Rhc2tGaWVsZHMsXG4gIGxvZ05ld1Rhc2ssXG4gIGdldEN1cnJlbnRUYXNrLFxuICBkZWxldGVUYXNrLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9zcmMvY29udGVudC9OUENfbG9nby5wbmdcIjtcbmltcG9ydCBwcm9qZWN0RnVuY3Rpb25zIGZyb20gXCIuL3Byb2plY3RIYW5kbGVyLmpzXCI7XG5pbXBvcnQgdGFza0Z1bmN0aW9ucyBmcm9tIFwiLi90YXNrSGFuZGxlci5qc1wiO1xuaW1wb3J0IGRpc3BsYXlGdW5jdGlvbnMgZnJvbSBcIi4vZGlzcGxheUhhbmRsZXIuanNcIjtcblxucHJvamVjdEZ1bmN0aW9ucy5zZXRIb21lKCk7XG5sZXQgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvamVjdEZ1bmN0aW9ucy5jaGFuZ2VTZWxlY3RlZFByb2plY3QoXCJob21lXCIpO1xuICBkaXNwbGF5RnVuY3Rpb25zLnJlcGxhY2VUYXNrQ29udGFpbmVyKFwiaG9tZVwiKTtcbiAgZGlzcGxheUZ1bmN0aW9ucy5kaXNwbGF5VGFza3NCeVByb2plY3QoXG4gICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRIb21lKCkudGFza0FycmF5LFxuICAgIFwiaG9tZVwiXG4gICk7XG59KTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRfbmV3X3Byb2plY3RcIik7XG5jcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvamVjdEZ1bmN0aW9ucy5sb2dOZXdQcm9qZWN0KCk7XG4gIGFkZFByb2plY3RTZWxlY3Rpb25FdmVudExpc3RlbmVyKFxuICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcygpLFxuICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0TmV3UHJvamVjdE5hbWUoKVxuICApO1xuICBwcm9qZWN0RnVuY3Rpb25zLmNsZWFyTmV3UHJvamVjdEZpZWxkcygpO1xufSk7XG5cbi8qXG5jb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRfdGFza1wiKTtcbnN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Z1bmN0aW9ucy5sb2dOZXdUYXNrKCk7XG4gIHByb2plY3RGdW5jdGlvbnMucHVzaEFycmF5KHRhc2tGdW5jdGlvbnMuZ2V0Q3VycmVudFRhc2soKSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RGdW5jdGlvbnMuZ2V0U1BBKCkpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0RnVuY3Rpb25zLmdldEN1cnJlbnROYW1lTm9TcGFjZSgpKTtcbiAgY29uc29sZS5sb2codGFza0Z1bmN0aW9ucy5nZXRDdXJyZW50VGFzaygpKTtcbiAgbGV0IHRhc2tOYW1lID0gdGFza0Z1bmN0aW9ucy5nZXRDdXJyZW50VGFzaygpO1xuICBkaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlUYXNrU3VibWl0KFxuICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0Q3VycmVudE5hbWVOb1NwYWNlKCksXG4gICAgdGFza05hbWUsXG4gICAgdGFza0Z1bmN0aW9ucy5nZXROZXdUYXNrTmFtZU5vU3BhY2VzKClcbiAgKTtcbiAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIHRhc2tGdW5jdGlvbnMuZ2V0TmV3VGFza05hbWVOb1NwYWNlcygpICsgXCJfZGVsZXRlXCJcbiAgKTtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRfXCIgKyB0YXNrTmFtZS5uYW1lKTtcbiAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tDYXJkLnJlbW92ZSgpO1xuICB9KTtcbn0pO1xuKi9cblxuY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0X3Rhc2tcIik7XG5zdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGdW5jdGlvbnMubG9nTmV3VGFzaygpO1xuICBpZiAocHJvamVjdEZ1bmN0aW9ucy5nZXRDU1AoKS5uYW1lICE9PSBcImhvbWVcIikge1xuICAgIHByb2plY3RGdW5jdGlvbnMucHVzaEFycmF5KHRhc2tGdW5jdGlvbnMuZ2V0Q3VycmVudFRhc2soKSk7XG4gICAgcHJvamVjdEZ1bmN0aW9ucy5wdXNoSG9tZUFycmF5KHRhc2tGdW5jdGlvbnMuZ2V0Q3VycmVudFRhc2soKSk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdEZ1bmN0aW9ucy5wdXNoSG9tZUFycmF5KHRhc2tGdW5jdGlvbnMuZ2V0Q3VycmVudFRhc2soKSk7XG4gIH1cbiAgZGlzcGxheUZ1bmN0aW9ucy5kaXNwbGF5VGFza3NCeVByb2plY3QoXG4gICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRTUEEoKSxcbiAgICBwcm9qZWN0RnVuY3Rpb25zLmdldEN1cnJlbnROYW1lTm9TcGFjZSgpXG4gICk7XG59KTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFNlbGVjdGlvbkV2ZW50TGlzdGVuZXIocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMgKyBcIl9idG5cIik7XG4gIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwcm9qZWN0RnVuY3Rpb25zLmNoYW5nZVNlbGVjdGVkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgZGlzcGxheUZ1bmN0aW9ucy5yZXBsYWNlVGFza0NvbnRhaW5lcihwcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgICBkaXNwbGF5RnVuY3Rpb25zLmRpc3BsYXlUYXNrc0J5UHJvamVjdChcbiAgICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0U1BBKCksXG4gICAgICBwcm9qZWN0TmFtZU5vU3BhY2VzXG4gICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tQXJyYXkodGFza05hbWUpIHtcbiAgY29uc29sZS5sb2cocHJvamVjdEZ1bmN0aW9ucy5nZXRDU1AoKSk7XG4gIGxldCB0YXNrQXJyYXkgPSBwcm9qZWN0RnVuY3Rpb25zLmdldENTUCgpLnRhc2tBcnJheTtcblxuICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBteVRhc2tUaXRsZSA9IHRhc2tBcnJheVtpXS5uYW1lO1xuICAgIG15VGFza1RpdGxlID0gbXlUYXNrVGl0bGUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgICBpZiAobXlUYXNrVGl0bGUgPT09IHRhc2tOYW1lKSB7XG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICB9XG59XG5cbi8vIGNhbGwgYSB0YXNrRnVuY3Rpb24gdGhhdCB1c2VzIHByb2plY3RGdW5jdGlvbnMuY3VycmVudFNlbGVjdGVkUHJvamVjdFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9