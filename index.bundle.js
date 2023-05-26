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
    }
  }
  console.log(currentSelectedProject);
  console.log(selectedProjectArray);
}

function addProjectSelectionEventListener(projectNameNoSpaces, projectName) {
  const projectBtn = document.getElementById(projectNameNoSpaces + "_btn");
  projectBtn.addEventListener("click", () => {
    changeSelectedProject(projectName);
  });
}

function logNewProject() {
  let projectName = getNewProjectName();
  let projectNameNoSpaces = getNewProjectNameNoSpaces();

  overrideSubmit(event);
  createNewProject(projectName);
  displayNewProject();
  deleteProject(projectNameNoSpaces, projectName);
  addProjectSelectionEventListener(projectNameNoSpaces, projectName);
  clearNewProjectFields();
  console.log(projectArray);
}
function setHome() {
  let homeBtn = document.getElementById("home");
  let home = new Project("home");
  projectArray.push(home);
  currentSelectedProject = projectArray[0];
  homeBtn.addEventListener("click", () => {
    changeSelectedProject("home");
  });
}

function pushArray(addedTask) {
  currentSelectedProject.taskArray.push(addedTask);
  return console.log(currentSelectedProject);
}

function getCSP() {
  return currentSelectedProject;
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
  addProjectSelectionEventListener,
  logNewProject,
  setHome,
  pushArray,
  getCSP,
  getSPA,
});

setHome();


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

function createTaskCard() {
  const taskContainer = document.getElementById("create_new_task");
  const taskCard = document.createElement("div");
  const taskRow1 = document.createElement("div");
  const taskRow2 = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskDate = document.createElement("h3");
  const taskUrgency = document.createElement("h3");
  const taskDescription = document.createElement("h3");

  taskContainer.appendChild(taskCard);
  taskCard.appendChild(taskRow1);
  taskName.innerText = currentTask.name;
  taskRow1.appendChild(taskName);
  taskDate.innerText = currentTask.date;
  taskRow1.appendChild(taskDate);
  taskUrgency.innerText = currentTask.urgency;
  taskRow1.appendChild(taskUrgency);
  taskCard.appendChild(taskRow2);
  taskDescription.innerText = currentTask.description;
  taskRow2.appendChild(taskDescription);
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
  createTaskCard,
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




let currentTaskCopy;

const createButton = document.getElementById("submit_new_project");
createButton.addEventListener("click", () => {
  _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].logNewProject();
  console.log(_projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCSP());
  console.log(_projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSPA());
});

const submitTask = document.getElementById("submit_task");
submitTask.addEventListener("click", () => {
  _taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].logNewTask();
  _projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].pushArray(_taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrentTask());
  console.log(_projectHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSPA());
  _taskHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"].createTaskCard();
});

// call a taskFunction that uses projectFunctions.currentSelectedProject

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsRUFBRSx3RUFBOEI7QUFDaEMsY0FBYyxpRUFBdUI7QUFDckMsY0FBYyxpRUFBdUI7QUFDckMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxrRUFBd0I7QUFDMUIsRUFBRSxvRUFBMEIsQ0FBQyxzRUFBNEI7QUFDekQsY0FBYyxpRUFBdUI7QUFDckMsRUFBRSxzRUFBNEI7QUFDOUIsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NzljZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9wcm9qZWN0SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvdGFza0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgLS1tYWluX2ZvbnQ6IFxcXCJCdW5nZWVcXFwiO1xcbiAgLS1tYWluX2NvbG9yOiAjYThkNGQwO1xcbiAgLS1zZWNvbmRhcnlfY29sb3I6ICNmZGZmZmM7XFxuICAtLXRlcnRpYXJ5X2NvbG9yOiAjMmVjNGI2O1xcbiAgLS1mb3VydGhfY29sb3I6ICMwMTE2Mjc7XFxuICAtLXN0YW5kYXJkX3BhZGRpbmc6IDIwcHg7XFxuICAtLWxhcmdlX3BhZGRpbmc6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuI2hlYWRlcl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG59XFxuXFxuI3JpZ2h0X2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuI2xvZ28ge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4jc2lnbl9vdXQge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNzaWduX291dDpob3ZlcixcXG4jc2lnbl9vdXQ6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxufVxcblxcbiNtYWluX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZmxleDogYXV0bztcXG4gIGhlaWdodDogMTAwO1xcbn1cXG5cXG4jbGVmdF9uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgaGVpZ2h0OiAxMDA7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDN2dztcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNwcm9qZWN0X2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbiAgZmxleDogYXV0bztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTVweDtcXG59XFxuXFxuLnByb2plY3RfY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3RfdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3RfdGl0bGU6aG92ZXIsXFxuLnByb2plY3RfdGl0bGU6Zm9jdXMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuLmRlbGV0ZV9wcm9qZWN0IHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uZGVsZXRlX3Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmMjMzYztcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiAjZWYyMzNjO1xcbn1cXG5cXG4jcHJvamVjdF9zdWJtaXNzaW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgZ2FwOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI2hvbWUsXFxuI3RvZGF5LFxcbiN3ZWVrIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDJ2dztcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI2N1cnJlbnRfcHJvamVjdCB7XFxuICBmb250OiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbn1cXG5cXG4jaG9tZTpob3ZlcixcXG4jaG9tZTpmb2N1cyxcXG4jdG9kYXk6aG92ZXIsXFxuI3RvZGF5OmZvY3VzLFxcbiN3ZWVrOmhvdmVyLFxcbiN3ZWVrOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4jcHJvamVjdF92aWV3ZXIge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cXG5cXG4jbmV3X3Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGZsZXg6IGF1dG87XFxufVxcblxcbiNuZXdfcHJvamVjdDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxufVxcblxcbiNzdWJtaXRfbmV3X3Byb2plY3Qge1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICB3aWR0aDogODBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc3VibWl0X25ld19wcm9qZWN0OmhvdmVyLFxcbiNzdWJtaXRfbmV3X3Byb2plY3Q6Zm9jdXMsXFxuI3N1Ym1pdF90YXNrOmhvdmVyLFxcbiNzdWJtaXRfdGFzazpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxufVxcblxcbiNtYWluX2Rpc3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGhlaWdodDogMTAwO1xcbiAgd2lkdGg6IDEwMDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDN2dztcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jY3VycmVudF9wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiN0YXNrX2NvbnRlbnQge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXFxuI2NyZWF0ZV9uZXdfdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5fY29sb3IpO1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jbmV3X3Rhc2tfY29udGVudCB7XFxuICBnYXA6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbmV3X3Rhc2tfZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI25ld190YXNrX3JvdzEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IGF1dG87XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcblxcbiNuZXdfdGFzayxcXG4jZHVlX2RhdGUsXFxuI3VyZ2VuY3ksXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jbmV3X3Rhc2sge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAzNXZ3O1xcbn1cXG5cXG4jc3VibWl0X3Rhc2sge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jZm9vdGVyX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1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Q0EsYUFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0FBSUY7O0FBREE7Ozs7RUFJRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUFJRjs7QUFEQTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0FBSUY7O0FBREE7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIC0tbWFpbl9mb250OiBcXFwiQnVuZ2VlXFxcIjtcXG4gIC0tbWFpbl9jb2xvcjogI2E4ZDRkMDtcXG4gIC0tc2Vjb25kYXJ5X2NvbG9yOiAjZmRmZmZjO1xcbiAgLS10ZXJ0aWFyeV9jb2xvcjogIzJlYzRiNjtcXG4gIC0tZm91cnRoX2NvbG9yOiAjMDExNjI3O1xcbiAgLS1zdGFuZGFyZF9wYWRkaW5nOiAyMHB4O1xcbiAgLS1sYXJnZV9wYWRkaW5nOiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiNoZWFkZXJfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxufVxcblxcbiNyaWdodF9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNsb2dvIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuI3NpZ25fb3V0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluX2ZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2lnbl9vdXQ6aG92ZXIsXFxuI3NpZ25fb3V0OmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGZsZXg6IGF1dG87XFxuICBoZWlnaHQ6IDEwMDtcXG59XFxuXFxuI2xlZnRfbmF2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICB3aWR0aDogMzB2dztcXG4gIGhlaWdodDogMTAwO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdF9saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG4gIGZsZXg6IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0X2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlOmhvdmVyLFxcbi5wcm9qZWN0X3RpdGxlOmZvY3VzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeV9jb2xvcik7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdCB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmRlbGV0ZV9wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogI2VmMjMzYztcXG59XFxuXFxuI3Byb2plY3Rfc3VibWlzc2lvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGdhcDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcbiNob21lLFxcbiN0b2RheSxcXG4jd2VlayB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAydnc7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNjdXJyZW50X3Byb2plY3Qge1xcbiAgZm9udDogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG59XFxuI2hvbWU6aG92ZXIsXFxuI2hvbWU6Zm9jdXMsXFxuI3RvZGF5OmhvdmVyLFxcbiN0b2RheTpmb2N1cyxcXG4jd2Vlazpob3ZlcixcXG4jd2Vlazpmb2N1cyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG59XFxuXFxuI3Byb2plY3Rfdmlld2VyIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1sYXJnZV9wYWRkaW5nKTtcXG59XFxuXFxuI25ld19wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTByZW07XFxuICBmbGV4OiBhdXRvO1xcbn1cXG5cXG4jbmV3X3Byb2plY3Q6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jc3VibWl0X25ld19wcm9qZWN0IHtcXG4gIGhlaWdodDogMi4ycmVtO1xcbiAgd2lkdGg6IDgwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbl9mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3N1Ym1pdF9uZXdfcHJvamVjdDpob3ZlcixcXG4jc3VibWl0X25ld19wcm9qZWN0OmZvY3VzLFxcbiNzdWJtaXRfdGFzazpob3ZlcixcXG4jc3VibWl0X3Rhc2s6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3VydGhfY29sb3IpO1xcbn1cXG5cXG4jbWFpbl9kaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeV9jb2xvcik7XFxuICBoZWlnaHQ6IDEwMDtcXG4gIHdpZHRoOiAxMDA7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzdnc7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZF9wYWRkaW5nKTtcXG59XFxuXFxuI2N1cnJlbnRfcHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jdGFza19jb250ZW50IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvdXJ0aF9jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IDFweCA1cHggMTBweDtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogNTV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogdmFyKC0tbGFyZ2VfcGFkZGluZyk7XFxufVxcblxcbiNjcmVhdGVfbmV3X3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluX2NvbG9yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuI25ld190YXNrX2NvbnRlbnQge1xcbiAgZ2FwOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI25ld190YXNrX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc3RhbmRhcmRfcGFkZGluZyk7XFxufVxcbiNuZXdfdGFza19yb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IHZhcigtLXN0YW5kYXJkX3BhZGRpbmcpO1xcbn1cXG5cXG4jbmV3X3Rhc2ssXFxuI2R1ZV9kYXRlLFxcbiN1cmdlbmN5LFxcbiNkZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI25ld190YXNrIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2Rlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMzV2dztcXG59XFxuXFxuI3N1Ym1pdF90YXNrIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5X2NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlfY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm91cnRoX2NvbG9yKTtcXG59XFxuXFxuI2Zvb3Rlcl9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnlfY29sb3IpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW5fZm9udCk7XFxuICBjb2xvcjogdmFyKC0tZm91cnRoX2NvbG9yKTtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWxhcmdlX3BhZGRpbmcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgcHJvamVjdEFycmF5ID0gW107XG5sZXQgY3VycmVudFNlbGVjdGVkUHJvamVjdDtcbmxldCBzZWxlY3RlZFByb2plY3RBcnJheTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza0FycmF5ID0gW107XG4gIH1cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgdGhpcy50YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWUoKSB7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Byb2plY3RcIik7XG4gIHJldHVybiBuZXdQcm9qZWN0TmFtZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3UHJvamVjdE5hbWVOb1NwYWNlcygpIHtcbiAgcmV0dXJuIGdldE5ld1Byb2plY3ROYW1lKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXcgUHJvamVjdChuYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0KCkge1xuICBsZXQgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Rfdmlld2VyXCIpO1xuICBsZXQgcHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0TmFtZU5vU3BhY2VzKCk7XG5cbiAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9jYXJkXCIsIHByb2plY3ROYW1lKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgbmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RfdGl0bGVcIiwgcHJvamVjdE5hbWUpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0TmFtZSArIFwiX2J0blwiKTtcbiAgbmV3UHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gZ2V0TmV3UHJvamVjdE5hbWUoKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XG4gIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZV9wcm9qZWN0XCIpO1xuICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3ROYW1lKTtcbiAgZGVsZXRlUHJvamVjdC5pbm5lclRleHQgPSBcIkRFTEVURVwiO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVN1Ym1pdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3ROYW1lTm9TcGFjZXMpO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBwcm9qZWN0TmFtZU5vU3BhY2VzKTtcbiAgICBkZWxldGVJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG15UHJvamVjdFRpdGxlID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgICBteVByb2plY3RUaXRsZSA9IG15UHJvamVjdFRpdGxlLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICBpZiAobXlQcm9qZWN0VGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOZXdQcm9qZWN0RmllbGRzKCkge1xuICBsZXQgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld19wcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlbGVjdGVkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudF9wcm9qZWN0XCIpO1xuICBwcm9qZWN0RGlzcGxheS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdEFycmF5W2ldLm5hbWUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2ldO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXlbaV0udGFza0FycmF5O1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0QXJyYXkpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0U2VsZWN0aW9uRXZlbnRMaXN0ZW5lcihwcm9qZWN0TmFtZU5vU3BhY2VzLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdE5hbWVOb1NwYWNlcyArIFwiX2J0blwiKTtcbiAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZVNlbGVjdGVkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2dOZXdQcm9qZWN0KCkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBnZXROZXdQcm9qZWN0TmFtZSgpO1xuICBsZXQgcHJvamVjdE5hbWVOb1NwYWNlcyA9IGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMoKTtcblxuICBvdmVycmlkZVN1Ym1pdChldmVudCk7XG4gIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICBkaXNwbGF5TmV3UHJvamVjdCgpO1xuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lTm9TcGFjZXMsIHByb2plY3ROYW1lKTtcbiAgYWRkUHJvamVjdFNlbGVjdGlvbkV2ZW50TGlzdGVuZXIocHJvamVjdE5hbWVOb1NwYWNlcywgcHJvamVjdE5hbWUpO1xuICBjbGVhck5ld1Byb2plY3RGaWVsZHMoKTtcbiAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbn1cbmZ1bmN0aW9uIHNldEhvbWUoKSB7XG4gIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICBsZXQgaG9tZSA9IG5ldyBQcm9qZWN0KFwiaG9tZVwiKTtcbiAgcHJvamVjdEFycmF5LnB1c2goaG9tZSk7XG4gIGN1cnJlbnRTZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0QXJyYXlbMF07XG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VTZWxlY3RlZFByb2plY3QoXCJob21lXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaEFycmF5KGFkZGVkVGFzaykge1xuICBjdXJyZW50U2VsZWN0ZWRQcm9qZWN0LnRhc2tBcnJheS5wdXNoKGFkZGVkVGFzayk7XG4gIHJldHVybiBjb25zb2xlLmxvZyhjdXJyZW50U2VsZWN0ZWRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NQKCkge1xuICByZXR1cm4gY3VycmVudFNlbGVjdGVkUHJvamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0U1BBKCkge1xuICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0QXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUHJvamVjdCxcbiAgZ2V0TmV3UHJvamVjdE5hbWUsXG4gIGdldE5ld1Byb2plY3ROYW1lTm9TcGFjZXMsXG4gIGNyZWF0ZU5ld1Byb2plY3QsXG4gIGRpc3BsYXlOZXdQcm9qZWN0LFxuICBvdmVycmlkZVN1Ym1pdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgY2xlYXJOZXdQcm9qZWN0RmllbGRzLFxuICBjaGFuZ2VTZWxlY3RlZFByb2plY3QsXG4gIGFkZFByb2plY3RTZWxlY3Rpb25FdmVudExpc3RlbmVyLFxuICBsb2dOZXdQcm9qZWN0LFxuICBzZXRIb21lLFxuICBwdXNoQXJyYXksXG4gIGdldENTUCxcbiAgZ2V0U1BBLFxufTtcblxuc2V0SG9tZSgpO1xuIiwibGV0IGN1cnJlbnRUYXNrO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0ZSwgdXJnZW5jeSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy51cmdlbmN5ID0gdXJnZW5jeTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhuYW1lLCBkYXRlLCB1cmdlbmN5LCBkZXNjcmlwdGlvbikge1xuICBjdXJyZW50VGFzayA9IG5ldyBUYXNrKG5hbWUsIGRhdGUsIHVyZ2VuY3ksIGRlc2NyaXB0aW9uKTtcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVTdWJtaXQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3VGFza05hbWUoKSB7XG4gIGxldCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3X3Rhc2tcIik7XG4gIHJldHVybiBuZXdUYXNrTmFtZS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3VGFza05hbWVOb1NwYWNlcygpIHtcbiAgcmV0dXJuIGdldE5ld1Rhc2tOYW1lKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTmV3VGFza0ZpZWxkcygpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld190YXNrX2Zvcm1cIik7XG4gIHRhc2tGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIGxvZ05ld1Rhc2soKSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdfdGFza1wiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZV9kYXRlXCIpO1xuICBjb25zdCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJnZW5jeVwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgbGV0IG5hbWUgPSB0YXNrTmFtZS52YWx1ZTtcbiAgbGV0IGRhdGUgPSB0YXNrRGF0ZS52YWx1ZTtcbiAgbGV0IHVyZ2VuY3kgPSB0YXNrVXJnZW5jeS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuXG4gIG92ZXJyaWRlU3VibWl0KGV2ZW50KTtcbiAgY3JlYXRlTmV3VGFzayhuYW1lLCBkYXRlLCB1cmdlbmN5LCBkZXNjcmlwdGlvbik7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcbiAgY2xlYXJOZXdUYXNrRmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrKCkge1xuICBjb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XG4gIHJldHVybiBjdXJyZW50VGFzaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQoKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9uZXdfdGFza1wiKTtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrUm93MSk7XG4gIHRhc2tOYW1lLmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLm5hbWU7XG4gIHRhc2tSb3cxLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgdGFza0RhdGUuaW5uZXJUZXh0ID0gY3VycmVudFRhc2suZGF0ZTtcbiAgdGFza1JvdzEuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICB0YXNrVXJnZW5jeS5pbm5lclRleHQgPSBjdXJyZW50VGFzay51cmdlbmN5O1xuICB0YXNrUm93MS5hcHBlbmRDaGlsZCh0YXNrVXJnZW5jeSk7XG4gIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tSb3cyKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrUm93Mi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRhc2ssXG4gIGNyZWF0ZU5ld1Rhc2ssXG4gIG92ZXJyaWRlU3VibWl0LFxuICBnZXROZXdUYXNrTmFtZSxcbiAgZ2V0TmV3VGFza05hbWVOb1NwYWNlcyxcbiAgY2xlYXJOZXdUYXNrRmllbGRzLFxuICBsb2dOZXdUYXNrLFxuICBnZXRDdXJyZW50VGFzayxcbiAgY3JlYXRlVGFza0NhcmQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4uL3NyYy9jb250ZW50L05QQ19sb2dvLnBuZ1wiO1xuaW1wb3J0IHByb2plY3RGdW5jdGlvbnMgZnJvbSBcIi4vcHJvamVjdEhhbmRsZXIuanNcIjtcbmltcG9ydCB0YXNrRnVuY3Rpb25zIGZyb20gXCIuL3Rhc2tIYW5kbGVyLmpzXCI7XG5sZXQgY3VycmVudFRhc2tDb3B5O1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdF9uZXdfcHJvamVjdFwiKTtcbmNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0RnVuY3Rpb25zLmxvZ05ld1Byb2plY3QoKTtcbiAgY29uc29sZS5sb2cocHJvamVjdEZ1bmN0aW9ucy5nZXRDU1AoKSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RGdW5jdGlvbnMuZ2V0U1BBKCkpO1xufSk7XG5cbmNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdF90YXNrXCIpO1xuc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0YXNrRnVuY3Rpb25zLmxvZ05ld1Rhc2soKTtcbiAgcHJvamVjdEZ1bmN0aW9ucy5wdXNoQXJyYXkodGFza0Z1bmN0aW9ucy5nZXRDdXJyZW50VGFzaygpKTtcbiAgY29uc29sZS5sb2cocHJvamVjdEZ1bmN0aW9ucy5nZXRTUEEoKSk7XG4gIHRhc2tGdW5jdGlvbnMuY3JlYXRlVGFza0NhcmQoKTtcbn0pO1xuXG4vLyBjYWxsIGEgdGFza0Z1bmN0aW9uIHRoYXQgdXNlcyBwcm9qZWN0RnVuY3Rpb25zLmN1cnJlbnRTZWxlY3RlZFByb2plY3RcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==