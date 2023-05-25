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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  --main_font: \"Bungee\";\n  --main_color: #a8d4d0;\n  --secondary_color: #fdfffc;\n  --tertiary_color: #2ec4b6;\n  --fourth_color: #011627;\n  --standard_padding: 20px;\n  --large_padding: 40px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tertiary_color);\n  height: 100vh;\n  width: 100vw;\n}\n\n#header_container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--standard_padding);\n  background-color: var(--tertiary_color);\n  font-family: var(--main_font);\n  color: var(--secondary_color);\n}\n\n#right_container {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n#logo {\n  height: 60px;\n}\n\n#sign_out {\n  height: 40px;\n  width: 120px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--secondary_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#sign_out:hover,\n#sign_out:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--tertiary_color);\n}\n\n#main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  flex: auto;\n  height: 100;\n}\n\n#left_nav {\n  background-color: var(--secondary_color);\n  width: 30vw;\n  height: 100;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-top-left-radius: 3vw;\n  padding: var(--standard_padding);\n  gap: var(--standard_padding);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#project_list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: var(--large_padding);\n  flex: auto;\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 20px;\n  box-shadow: 1px 5px 15px;\n}\n\n.project_card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--standard_padding);\n  gap: 10px;\n}\n\n.project_title {\n  font-size: 1.5rem;\n  color: var(--fourth_color);\n  border: none;\n  background-color: var(--secondary_color);\n  text-align: start;\n}\n\n.project_title:hover,\n.project_title:focus {\n  font-size: 1.5rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n.delete_project {\n  width: 80px;\n  height: 2.2rem;\n  background-color: var(--secondary_color);\n  border-radius: 8px;\n}\n\n.delete_project:hover {\n  background-color: #ef233c;\n  color: var(--secondary_color);\n  border-color: #ef233c;\n}\n\n#project_submission {\n  display: flex;\n  justify-content: space-between;\n  align-self: stretch;\n  gap: var(--standard_padding);\n}\n\n#home,\n#today,\n#week {\n  font-size: 1.5rem;\n  width: 2vw;\n  font-family: var(--main_font);\n  border: none;\n  background-color: var(--secondary_color);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#projects {\n  font-size: 1.7rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#current_project {\n  font: 1.5rem;\n  color: var(--fourth_color);\n  font-family: var(--main_font);\n}\n\n#home:hover,\n#home:focus,\n#today:hover,\n#today:focus,\n#week:hover,\n#week:focus {\n  font-size: 2rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n#project_viewer {\n  padding-top: var(--large_padding);\n}\n\n#new_project {\n  background-color: var(--secondary_color);\n  border: none;\n  border-bottom: 2px solid var(--fourth_color);\n  color: var(--fourth_color);\n  padding-left: 5px;\n  font-size: 1rem;\n  height: 2rem;\n  width: 10rem;\n  flex: auto;\n}\n\n#new_project::placeholder {\n  color: var(--fourth_color);\n}\n\n#submit_new_project {\n  height: 2.2rem;\n  width: 80px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#submit_new_project:hover,\n#submit_new_project:focus,\n#submit_task:hover,\n#submit_task:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#main_display {\n  background-color: var(--secondary_color);\n  height: 100;\n  width: 100;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border-bottom-right-radius: 3vw;\n  padding: var(--standard_padding);\n}\n\n#current_project {\n  font-size: 2rem;\n  color: var(--fourth_color);\n  margin-bottom: var(--standard_padding);\n}\n\n#task_content {\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 30px;\n  box-shadow: 1px 5px 10px;\n  flex: 1;\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: var(--large_padding);\n}\n\n#create_new_task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--main_color);\n  padding: var(--standard_padding);\n  border-radius: 20px;\n}\n\n#new_task_content {\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n#new_task_form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--standard_padding);\n  padding-right: var(--standard_padding);\n}\n\n#new_task_row1 {\n  display: flex;\n  flex: auto;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n}\n\n#new_task,\n#due_date,\n#urgency,\n#description {\n  font-size: 1rem;\n  border: none;\n  border-bottom: solid 2px var(--fourth_color);\n  padding: 5px;\n}\n\n#new_task {\n  flex: 1;\n  width: 20vw;\n}\n\n#description {\n  flex: 1;\n  width: 35vw;\n}\n\n#submit_task {\n  height: 35px;\n  width: 35px;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: var(--tertiary_color);\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#footer_container {\n  background-color: var(--tertiary_color);\n  width: 100vw;\n  height: 5vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#footer {\n  font-size: 1rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-right: var(--large_padding);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  --main_font: \"Bungee\";\n  --main_color: #a8d4d0;\n  --secondary_color: #fdfffc;\n  --tertiary_color: #2ec4b6;\n  --fourth_color: #011627;\n  --standard_padding: 20px;\n  --large_padding: 40px;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--tertiary_color);\n  height: 100vh;\n  width: 100vw;\n}\n\n#header_container {\n  display: flex;\n  justify-content: space-between;\n  padding: var(--standard_padding);\n  background-color: var(--tertiary_color);\n  font-family: var(--main_font);\n  color: var(--secondary_color);\n}\n\n#right_container {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n#logo {\n  height: 60px;\n}\n\n#sign_out {\n  height: 40px;\n  width: 120px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--secondary_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#sign_out:hover,\n#sign_out:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--tertiary_color);\n}\n\n#main_container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  flex: auto;\n  height: 100;\n}\n\n#left_nav {\n  background-color: var(--secondary_color);\n  width: 30vw;\n  height: 100;\n  grid-column-start: 1;\n  grid-column-end: 2;\n  border-top-left-radius: 3vw;\n  padding: var(--standard_padding);\n  gap: var(--standard_padding);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#project_list {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: var(--large_padding);\n  flex: auto;\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 20px;\n  box-shadow: 1px 5px 15px;\n}\n\n.project_card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--standard_padding);\n  gap: 10px;\n}\n\n.project_title {\n  font-size: 1.5rem;\n  color: var(--fourth_color);\n  border: none;\n  background-color: var(--secondary_color);\n  text-align: start;\n}\n\n.project_title:hover,\n.project_title:focus {\n  font-size: 1.5rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n.delete_project {\n  width: 80px;\n  height: 2.2rem;\n  background-color: var(--secondary_color);\n  border-radius: 8px;\n}\n\n.delete_project:hover {\n  background-color: #ef233c;\n  color: var(--secondary_color);\n  border-color: #ef233c;\n}\n\n#project_submission {\n  display: flex;\n  justify-content: space-between;\n  align-self: stretch;\n  gap: var(--standard_padding);\n}\n#home,\n#today,\n#week {\n  font-size: 1.5rem;\n  width: 2vw;\n  font-family: var(--main_font);\n  border: none;\n  background-color: var(--secondary_color);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#projects {\n  font-size: 1.7rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-top: var(--standard_padding);\n  width: auto;\n}\n\n#current_project {\n  font: 1.5rem;\n  color: var(--fourth_color);\n  font-family: var(--main_font);\n}\n#home:hover,\n#home:focus,\n#today:hover,\n#today:focus,\n#week:hover,\n#week:focus {\n  font-size: 2rem;\n  border: none;\n  border-bottom: 2px solid var(--tertiary_color);\n  color: var(--tertiary_color);\n}\n\n#project_viewer {\n  padding-top: var(--large_padding);\n}\n\n#new_project {\n  background-color: var(--secondary_color);\n  border: none;\n  border-bottom: 2px solid var(--fourth_color);\n  color: var(--fourth_color);\n  padding-left: 5px;\n  font-size: 1rem;\n  height: 2rem;\n  width: 10rem;\n  flex: auto;\n}\n\n#new_project::placeholder {\n  color: var(--fourth_color);\n}\n\n#submit_new_project {\n  height: 2.2rem;\n  width: 80px;\n  font-family: var(--main_font);\n  font-size: 1rem;\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n  background-color: var(--tertiary_color);\n  border-radius: 8px;\n}\n\n#submit_new_project:hover,\n#submit_new_project:focus,\n#submit_task:hover,\n#submit_task:focus {\n  color: var(--tertiary_color);\n  background-color: var(--fourth_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#main_display {\n  background-color: var(--secondary_color);\n  height: 100;\n  width: 100;\n  grid-column-start: 2;\n  grid-column-end: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border-bottom-right-radius: 3vw;\n  padding: var(--standard_padding);\n}\n\n#current_project {\n  font-size: 2rem;\n  color: var(--fourth_color);\n  margin-bottom: var(--standard_padding);\n}\n\n#task_content {\n  border: 2px solid var(--fourth_color);\n  background-color: var(--secondary_color);\n  border-radius: 30px;\n  box-shadow: 1px 5px 10px;\n  flex: 1;\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: var(--large_padding);\n}\n\n#create_new_task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--main_color);\n  padding: var(--standard_padding);\n  border-radius: 20px;\n}\n\n#new_task_content {\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n#new_task_form {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--standard_padding);\n  padding-right: var(--standard_padding);\n}\n#new_task_row1 {\n  display: flex;\n  flex: auto;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--standard_padding);\n}\n\n#new_task,\n#due_date,\n#urgency,\n#description {\n  font-size: 1rem;\n  border: none;\n  border-bottom: solid 2px var(--fourth_color);\n  padding: 5px;\n}\n\n#new_task {\n  flex: 1;\n  width: 20vw;\n}\n\n#description {\n  flex: 1;\n  width: 35vw;\n}\n\n#submit_task {\n  height: 35px;\n  width: 35px;\n  border-radius: 5px;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: var(--tertiary_color);\n  color: var(--secondary_color);\n  border: 2px solid var(--fourth_color);\n}\n\n#footer_container {\n  background-color: var(--tertiary_color);\n  width: 100vw;\n  height: 5vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#footer {\n  font-size: 1rem;\n  font-family: var(--main_font);\n  color: var(--fourth_color);\n  padding-right: var(--large_padding);\n}\n"],"sourceRoot":""}]);
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NzljZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIC0tbWFpbl9mb250OiBcXFwiQnVuZ2VlXFxcIjtcXG4gIC0tbWFpbl9jb2xvcjogI2E4ZDRkMDtcXG4gIC0tc2Vjb25kYXJ5X2NvbG9yOiAjZmRmZmZjO1xcbiAgLS10ZXJ0aWFyeV9jb2xvcjogIzJlYzRiNjtcXG4gIC0tZm91cnRoX2NvbG9yOiAjMDExNjI3O1xcbiAgLS1zdGFuZGFyZF9wYWRkaW5nOiAyMHB4O1xcbiAgLS1sYXJnZV9wYWRkaW5nOiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNoZWFkZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxufVxcblxcbiNyaWdodF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNsb2dvIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuI3NpZ25fb3V0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2lnbl9vdXQ6aG92ZXIsXFxuI3NpZ25fb3V0OmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGZsZXg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMDtcXG59XFxuXFxuI2xlZnRfbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdF9saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG4gIGZsZXg6IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0X2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlOmhvdmVyLFxcbi5wcm9qZWN0X3RpdGxlOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdCB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmRlbGV0ZV9wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogI2VmMjMzYztcXG59XFxuXFxuI3Byb2plY3Rfc3VibWlzc2lvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNob21lLFxcbiN0b2RheSxcXG4jd2VlayB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAydnc7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNjdXJyZW50X3Byb2plY3Qge1xcbiAgZm9udDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG59XFxuXFxuI2hvbWU6aG92ZXIsXFxuI2hvbWU6Zm9jdXMsXFxuI3RvZGF5OmhvdmVyLFxcbiN0b2RheTpmb2N1cyxcXG4jd2Vlazpob3ZlcixcXG4jd2Vlazpmb2N1cyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuI3Byb2plY3Rfdmlld2VyIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXFxuI25ld19wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTByZW07XFxuICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4jbmV3X3Byb2plY3Q6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jc3VibWl0X25ld19wcm9qZWN0IHtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3N1Ym1pdF9uZXdfcHJvamVjdDpob3ZlcixcXG4jc3VibWl0X25ld19wcm9qZWN0OmZvY3VzLFxcbiNzdWJtaXRfdGFzazpob3ZlcixcXG4jc3VibWl0X3Rhc2s6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9kaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIHdpZHRoOiAxMDA7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI2N1cnJlbnRfcHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jdGFza19jb250ZW50IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTBweDtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogNTV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVxcblxcbiNjcmVhdGVfbmV3X3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2NvbG9yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI25ld190YXNrX2NvbnRlbnQge1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25ld190YXNrX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNuZXdfdGFza19yb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jbmV3X3Rhc2ssXFxuI2R1ZV9kYXRlLFxcbiN1cmdlbmN5LFxcbiNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI25ld190YXNrIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMzV2dztcXG59XFxuXFxuI3N1Ym1pdF90YXNrIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuI2Zvb3Rlcl9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFB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XFxcIkJ1bmdlZVxcXCI7XFxuICAtLW1haW5fY29sb3I6ICNhOGQ0ZDA7XFxuICAtLXNlY29uZGFyeV9jb2xvcjogI2ZkZmZmYztcXG4gIC0tdGVydGlhcnlfY29sb3I6ICMyZWM0YjY7XFxuICAtLWZvdXJ0aF9jb2xvcjogIzAxMTYyNztcXG4gIC0tc3RhbmRhcmRfcGFkZGluZzogMjBweDtcXG4gIC0tbGFyZ2VfcGFkZGluZzogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4jaGVhZGVyX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbn1cXG5cXG4jcmlnaHRfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jbG9nbyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbiNzaWduX291dCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NpZ25fb3V0OmhvdmVyLFxcbiNzaWduX291dDpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuI21haW5fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBmbGV4OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDA7XFxufVxcblxcbiNsZWZ0X25hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3Z3O1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI3Byb2plY3RfbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxuICBmbGV4OiBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdF9jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdF90aXRsZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdF90aXRsZTpob3ZlcixcXG4ucHJvamVjdF90aXRsZTpmb2N1cyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3Qge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyMzNjO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItY29sb3I6ICNlZjIzM2M7XFxufVxcblxcbiNwcm9qZWN0X3N1Ym1pc3Npb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG4jaG9tZSxcXG4jdG9kYXksXFxuI3dlZWsge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMnZ3O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jY3VycmVudF9wcm9qZWN0IHtcXG4gIGZvbnQ6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxufVxcbiNob21lOmhvdmVyLFxcbiNob21lOmZvY3VzLFxcbiN0b2RheTpob3ZlcixcXG4jdG9kYXk6Zm9jdXMsXFxuI3dlZWs6aG92ZXIsXFxuI3dlZWs6Zm9jdXMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxufVxcblxcbiNwcm9qZWN0X3ZpZXdlciB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVxcblxcbiNuZXdfcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgZmxleDogYXV0bztcXG59XFxuXFxuI25ld19wcm9qZWN0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuI3N1Ym1pdF9uZXdfcHJvamVjdCB7XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNzdWJtaXRfbmV3X3Byb2plY3Q6aG92ZXIsXFxuI3N1Ym1pdF9uZXdfcHJvamVjdDpmb2N1cyxcXG4jc3VibWl0X3Rhc2s6aG92ZXIsXFxuI3N1Ym1pdF90YXNrOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuI21haW5fZGlzcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDA7XFxuICB3aWR0aDogMTAwO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3Z3O1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNjdXJyZW50X3Byb2plY3Qge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI3Rhc2tfY29udGVudCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDEwcHg7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDU1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cXG5cXG4jY3JlYXRlX25ld190YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbl9jb2xvcik7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNuZXdfdGFza19jb250ZW50IHtcXG4gIGdhcDogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNuZXdfdGFza19mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG4jbmV3X3Rhc2tfcm93MSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI25ld190YXNrLFxcbiNkdWVfZGF0ZSxcXG4jdXJnZW5jeSxcXG4jZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNuZXdfdGFzayB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDIwdnc7XFxufVxcblxcbiNkZXNjcmlwdGlvbiB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDM1dnc7XFxufVxcblxcbiNzdWJtaXRfdGFzayB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxufVxcblxcbiNmb290ZXJfY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9jb250ZW50L05QQ19sb2dvLnBuZ1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9