/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-height: 100px;\n    --board-size: 320px;\n\n    --background-color: rgb(240, 240, 240);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 134, 134);\n    --miss-color: rgb(161, 216, 161);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 61, 61);\n    --miss-color: rgb(52, 109, 52);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    /* width: 100vw; */\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    /* max-width: 100%; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    /* display: contents; */\n    /* width: fit-content; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    /* padding-top: 20px; */\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    /* border: 1px solid red; */\n    height: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n    /* margin-right: 160px; */\n    /* text-align: right; */\n}\n\n.setup-ship-box {\n    display: inline-flex;\n    gap: 3px;\n}\n\n.setup-ship-cell {\nwidth: 30px;\nheight: 30px;\nbackground-color: var(--cell-hover-color);\nborder: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start, .setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover){\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    width: var(--board-size);\n    height: var(--board-size);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    cursor: crosshair;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover){\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover{\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n:root {\n    --header-height: 100px;\n    --board-size: 320px;\n\n    --background-color: rgb(240, 240, 240);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 134, 134);\n    --miss-color: rgb(161, 216, 161);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 61, 61);\n    --miss-color: rgb(52, 109, 52);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    /* width: 100vw; */\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    /* max-width: 100%; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    /* display: contents; */\n    /* width: fit-content; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    /* padding-top: 20px; */\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    /* border: 1px solid red; */\n    height: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n    /* margin-right: 160px; */\n    /* text-align: right; */\n}\n\n.setup-ship-box {\n    display: inline-flex;\n    gap: 3px;\n}\n\n.setup-ship-cell {\nwidth: 30px;\nheight: 30px;\nbackground-color: var(--cell-hover-color);\nborder: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start, .setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover){\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    width: var(--board-size);\n    height: var(--board-size);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    cursor: crosshair;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover){\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover{\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/dom/domController.js":
/*!******************************************!*\
  !*** ./src/modules/dom/domController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ "./src/modules/game.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/modules/dom/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/modules/dom/footer.js");




const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
const header = (0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
const gameContainer = document.createElement('div');
gameContainer.id = 'game-container';
app.appendChild(header);
app.appendChild(gameContainer);
app.appendChild(footer);

//
//new game creation goes here-ish
//
const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
game.newGame('Bob', false);
game.testGame();

const player1BoardContainer = drawBoardContainer(game.player1);
// const player2BoardContainer = drawBoardContainer(game.player2);
// gameContainer.append(player1BoardContainer, player2BoardContainer);

gameContainer.append(player1BoardContainer, drawSetupShips());


populateBoard(game.player1, player1BoardContainer.querySelector('.board'));


// HERE WE MAKE:
// function PLACESHIP BOARD
// function SHIPS TO PLACE CONTAINER

function drawSetupBoard(player) {

}

function drawSetupShips(player) {
    const setupShipsContainer = document.createElement('div');
    setupShipsContainer.classList.add('setup-ships-container');
    const setupShipsTitle = document.createElement('h3');
    setupShipsTitle.textContent = 'place your ships:';
    const ships = [
        {
            type: 'carrier',
            length: 5
        },
        {
            type: 'battleship',
            length: 4
        },
        {
            type: 'destroyer',
            length: 3
        },
        {
            type: 'submarine',
            length: 3
        },
        {
            type: 'patrol boat',
            length: 2
        },
    ];
    const setupShipsOptions = document.createElement('div');
    setupShipsOptions.classList.add('setup-ships-options');
    const startGame = document.createElement('button');
    startGame.classList.add('setup-button-start');
    startGame.textContent = 'TO BATTLE!';
    const randomShips = document.createElement('button');
    randomShips.classList.add('setup-button-random');
    randomShips.textContent = 'randomize';
    setupShipsOptions.append(startGame, randomShips);
    setupShipsContainer.appendChild(setupShipsTitle);
    const shipList = document.createElement('div');
    ships.forEach(ship => {
        shipList.appendChild(drawShip(ship));
    })
    setupShipsContainer.appendChild(shipList);
    setupShipsContainer.appendChild(setupShipsOptions);
    return setupShipsContainer;
}

function drawShip(ship) {
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('setup-ship');
    const shipBox = document.createElement('div');
    shipBox.classList.add('setup-ship-box');
    for (let i = 0; i < ship.length; i++){
        const shipCell = document.createElement('div');
        shipCell.classList.add('setup-ship-cell');
        shipBox.appendChild(shipCell);
    }
    const shipName = document.createElement('p');
    shipName.textContent = ship.type;
    shipContainer.append(shipBox, shipName);
    return shipContainer;
}

//
// 
// IF GAME CONTAINER HEIGHT IS BIGGER THAN 500PX (I.E., WRAPPED), ADJUST HEADER TO SUIT
// THIS IS A VERY SCUFFED SOLUTION AND PORBABLY BREAKS WHEN PLACING SHIPS ON SINGLE GRID VIEW
//
//
const gameSizeObserver = new ResizeObserver(entry => {
    if (entry[0].contentRect.height > 500) header.style.width = '320px';
    else header.style.width = `${entry[0].contentRect.width}px`;
    console.log(header.style.width)
    // header.style.width = `${entry[0].contentRect.width}px`;
    console.log(header.style.width)
})

gameSizeObserver.observe(gameContainer);


function drawBoardContainer(player) {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');
    const playerName = document.createElement('h3');
    playerName.textContent = `${player.name}'s fleet`;
    const playerNumber = player === game.player1 ? 1 : 2;
    const playerBoard = drawBoard(playerNumber);
    boardContainer.append(playerName, playerBoard);
    return boardContainer;
}

// Draw a grid of cells with data attributes for their locations
function drawBoard(player) {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.player = player;
            cell.dataset.row = row;
            cell.dataset.col = col;
            board.appendChild(cell);
            //
            // MAY NEED TO REVISE
            // NEED TO ADD EVENT LISTENERS ONLY FOR OPPOSING PLAYER'S BOARD
            //
            if (player === 2) cell.addEventListener('click', listenForAttack, false);
        }
    }
    return board;
}

// Upon clicking a cell, attack the relevant square, if allowed
function listenForAttack(event) {
    const cell = event.target
    const defendingPlayerNumber = cell.dataset.player;
    const attackingPlayerNumber = defendingPlayerNumber === '1' ? '2' : '1';
    const attackingPlayer = game[`player${attackingPlayerNumber}`];
    const defendingPlayer = game[`player${defendingPlayerNumber}`];
    if (game.currentPlayer !== attackingPlayer) return;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const result = attackingPlayer.attack(defendingPlayer, row, col)[0];
    if (result === 'hit') cell.classList.add('cell-hit');
    if (result === 'miss') cell.classList.add('cell-miss');
    cell.removeEventListener('click', listenForAttack, false)
    nextTurn();
}

// Call an attack for the AI and modify the resulting attacked cell
function callAIAttack(ai) {
    if (ai !== game.currentPlayer) return;
    const defendingPlayerNumber = game.defendingPlayer === game.player1 ? '1' : '2';
    const [result, location] = ai.attack(game.defendingPlayer);
    const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${location[0]}'][data-col='${location[1]}']`)
    if (result === 'hit') cell.classList.add('cell-hit');
    if (result === 'miss') cell.classList.add('cell-miss');
    nextTurn();
}

// Handle end-of-turn events
function nextTurn() {
    const winner = game.checkGameOver();
    if (winner) {
        alert(`${winner.name} wins`)
        return endGame(winner);
    };
    game.changeTurn();
    if (game.currentPlayer.isAI) {
        callAIAttack(game.currentPlayer)
    }
}

function endGame(winner) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.removeEventListener('click', listenForAttack, false));
    // announce winner
    // reveal both boards
}

// Draw the ships to the player's on-screen board so they can see their fleet
function populateBoard(player, board) {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const square = player.gameboard.board[row][col];
            if (square !== null && typeof square === 'object') {
                const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
                cell.classList.add('cell-ship')
            }
        }
    }
}

/***/ }),

/***/ "./src/modules/dom/footer.js":
/*!***********************************!*\
  !*** ./src/modules/dom/footer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Footer link and light/dark mode functionality
function createFooter(){
    const footerBox = document.createElement("footer");
    const authorName = document.createElement("p");
    authorName.classList.add("footer-author");
    authorName.textContent = "Carl Madsen 2022";
    const footerLink = document.createElement("a");
    footerLink.id = "footer-link";
    footerLink.setAttribute("href", "https://github.com/elsaepo/odin-battleship");
    const gitHubLogo = document.createElement("i");
    gitHubLogo.classList.add("fa-brands", "fa-github", "fa-xl", "footer-logo");
    footerLink.appendChild(gitHubLogo);
    
    function getTheme() {
      return localStorage.getItem("theme");
    }
    
    function toggleDarkMode() {
      document.querySelector(":root").classList.toggle("dark");
      darkModeButton.classList.toggle("fa-moon");
      darkModeButton.classList.toggle("fa-sun");
    }
    
    function toggleDarkStorage() {
      if (getTheme() === "dark") {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    }
    
    function isBrowserDarkMode() {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    
    const darkModeButton = document.createElement("i");
    darkModeButton.id = "footer-dark-mode";
    darkModeButton.classList.add("fa-solid", "fa-moon", "fa-xl");
    darkModeButton.addEventListener("mousedown", function () {
      toggleDarkMode();
      toggleDarkStorage();
    });
    
    if (getTheme() === "dark" || (!getTheme() && isBrowserDarkMode())) {
      toggleDarkMode();
    }
    
    footerBox.appendChild(authorName);
    footerBox.appendChild(footerLink);
    footerBox.appendChild(darkModeButton);

    return footerBox;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/modules/dom/header.js":
/*!***********************************!*\
  !*** ./src/modules/dom/header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeaderBox(){
    const header = document.createElement('header');
    header.id = 'header';
    const title = document.createElement('h1');
    title.textContent = 'battleship.';

    const newGameButton = document.createElement('button');
    newGameButton.classList.add('new-game-button');
    newGameButton.textContent = 'new game';

    header.appendChild(title);
    header.appendChild(newGameButton);

    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeaderBox);

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");


function Game(){
    let player1;
    let player2;
    let currentPlayer;
    let defendingPlayer;
    function newGame(player1Name, player2Name){
        this.player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(player1Name);
        this.player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(player2Name);
        this.currentPlayer = this.player1;
        this.defendingPlayer = this.player2;
    }
    function changeTurn(){
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        this.defendingPlayer = this.defendingPlayer === this.player2 ? this.player1 : this.player2;
    }
    function checkGameOver(){
        if (this.player1.gameboard.checkAllShipsSunk()) return this.player2;
        if (this.player2.gameboard.checkAllShipsSunk()) return this.player1;
        else return false;
    }
    function testGame(){
        this.player1.gameboard.placeShip(3, [1,3], 'vertical')
        this.player1.gameboard.placeShip(4, [7,2], 'horizontal')
        this.player1.gameboard.placeShip(5, [2,7], 'vertical')
        this.player2.gameboard.placeShip(3, [1,3], 'vertical')
        this.player2.gameboard.placeShip(4, [7,2], 'horizontal')
        this.player2.gameboard.placeShip(5, [2,7], 'vertical')
    }
    return {
        player1,
        player2,
        currentPlayer,
        defendingPlayer,
        newGame,
        changeTurn,
        checkGameOver,
        testGame
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


function Gameboard() {
    const board = createEmptyGameboard();
    const placedShips = [];
    // Create a 10x10 2d array gameboard
    function createEmptyGameboard() {
        let gameboardArray = [];
        for (let row = 0; row <= 9; row++) {
            let rowArray = [];
            for (let col = 0; col <= 9; col++) {
                rowArray[col] = null;
            }
            gameboardArray[row] = rowArray;
        }
        return gameboardArray;
    }
    // Return the value of a square in the gameboard, and undefined if outside the gameboard extents
    function checkSquare(row, col) {
        if (row < 0 || col < 0) return undefined;
        if (row > 9 || col > 9) return undefined;
        else return this.board[row][col];
    }
    function placeShip(shipLength, origin, alignment) {
        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);
        // Create an array of ship placement squares
        let [row, col] = origin;
        let shipSquares = [];
        for (let i = 0; i < ship.length; i++) {
            shipSquares.push([row, col]);
            alignment === 'horizontal' ? col++ : row++;
        }
        // If every placement square is null, place the ship on all those squares
        if (shipSquares.every(square => {
            let [row, col] = square;
            if (this.checkSquare(row, col) === undefined) return false;
            return this.board[row][col] === null;
        })) {
            shipSquares.forEach(square => {
                let [row, col] = square;
                this.board[row][col] = ship;
            })
            placedShips.push(ship);
            return ship;
        } else return "Cannot place ship in that location";
    }
    function placeAllShipsRandomly(){
        const ships = [5, 4, 3, 3, 2];
        for (let i = 0; i < ships.length; i++){
            let result = this.placeShipRandomly(ships[i]);
            while (typeof result !== 'object' || result === null){
                result = this.placeShipRandomly(ships[i]);
            }
        }
    }
    function placeShipRandomly(shipLength) {
        function getRandomAlignment() {
            return Math.random() < 0.5 ? 'horizontal' : 'vertical';
        }
        function getRandomOrigin(alignment) {
            let rowDif = 0;
            let colDif = 0;
            if (alignment === 'vertical') rowDif = shipLength - 1;
            else colDif = shipLength - 1;
            let row = Math.floor(Math.random() * (10 - rowDif));
            let col = Math.floor(Math.random() * (10 - colDif));
            return [row, col];
        }
        let alignment = getRandomAlignment();
        let origin = getRandomOrigin(alignment);
        let result = this.placeShip(shipLength, origin, alignment);
        while (typeof result !== 'object' || result === null) {
            alignment = getRandomAlignment();
            origin = getRandomOrigin(alignment);
            result = this.placeShip(shipLength, origin, alignment);
        }
        return result;
    }
    // Receives an attack and calculates the result
    // Returns an array - 'hit' or 'miss' depending on result, and the coordinates
    function receiveAttack(row, col) {
        if (this.checkSquare(row, col) === undefined) return "Invalid location";
        if (this.board[row][col] === null) this.board[row][col] = 'miss';
        else {
            this.board[row][col].hit();
            this.board[row][col] = 'hit';
        }
        return [this.board[row][col], [row, col]];
    }
    function checkAllShipsSunk() {
        return placedShips.every(ship => ship.isSunk());
    }
    return {
        board,
        placedShips,
        checkSquare,
        placeShip,
        placeAllShipsRandomly,
        placeShipRandomly,
        receiveAttack,
        checkAllShipsSunk
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");


function Player(playerName) {
    const name = typeof playerName === 'string' ? playerName : 'battleBot';
    const isAI = typeof playerName !== 'string' ? true : false;
    const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    // Create a 2D array of available attack coordinates
    const availableAttacks = createAttackArray();
    function attack(enemy, row, col) {
        // Get row and col for a random AI attack from the availableAttacks array
        if (isAI) {
            if (availableAttacks.length === 0){
                return 'No squares to attack';
            }
            let arrayRow = Math.floor(Math.random() * availableAttacks.length);
            let arrayCol = Math.floor(Math.random() * availableAttacks[arrayRow].length);
            // Remove the square from the availableAttacks array & get the coordinates
            let attackCoords = availableAttacks[arrayRow].splice(arrayCol, 1)[0];
            if (availableAttacks[arrayRow].length === 0) availableAttacks.splice(arrayRow, 1);
            [row, col] = attackCoords;
        }
        // Return the 'hit' or 'miss' result of the attack
        return enemy.gameboard.receiveAttack(row, col);
    }
    return {
        name,
        isAI,
        gameboard,
        attack
    }
}

function createAttackArray() {
    const attackArray = [];
    for (let row = 0; row < 10; row++) {
        let rowArray = [];
        for (let col = 0; col < 10; col++) {
            rowArray.push([row, col]);
        }
        attackArray.push(rowArray);
    }
    return attackArray;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Ship(l){
    const length = l;
    let hits = 0;
    function hit(){
        this.hits++;
    }
    function isSunk(){
        if (this.hits >= this.length) return true;
        else return false;
    }
    return {
        length,
        hits,
        hit,
        isSunk
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_dom_domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom/domController */ "./src/modules/dom/domController.js");



// import Icon from './icon.png';
// const myIcon = new Image();
// myIcon.src = Icon;
// element.appendChild(myIcon)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEM7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUM1Q3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7O1VDbEJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlOztBQUVwQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWJvYXJkLXNpemU6IDMyMHB4O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgLS1jZWxsLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tY2VsbC1ob3Zlci1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxuICAgIC0tc2hpcC1jb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgICAtLWhpdC1jb2xvcjogcmdiKDIwNiwgMTM0LCAxMzQpO1xcbiAgICAtLW1pc3MtY29sb3I6IHJnYigxNjEsIDIxNiwgMTYxKTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigxNTUsIDYxLCA2MSk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDUyLCAxMDksIDUyKTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxNjAsIDE2MCwgMTYwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMCwgMjAsIDIwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHBhZGRpbmc6IDAgNSU7XFxuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG5cXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3ItaG92ZXIpO1xcbiAgICB9XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIC8qIGRpc3BsYXk6IGNvbnRlbnRzOyAqL1xcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4vKiBQbGF5ZXIgc2V0dXAgKi9cXG4uc2V0dXAtc2hpcHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMjBweDsgKi9cXG4gICAgd2lkdGg6IHZhcigtLWJvYXJkLXNpemUpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tYm9hcmQtc2l6ZSkgKyAyNXB4KTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5zZXR1cC1zaGlwLXNoaXBsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZXR1cC1zaGlwIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDE2MHB4OyAqL1xcbiAgICAvKiB0ZXh0LWFsaWduOiByaWdodDsgKi9cXG59XFxuXFxuLnNldHVwLXNoaXAtYm94IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1jZWxsIHtcXG53aWR0aDogMzBweDtcXG5oZWlnaHQ6IDMwcHg7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0LCAuc2V0dXAtYnV0dG9uLXJhbmRvbSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxODksIDEyOSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKXtcXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydDpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMTYsIDExNik7XFxuICAgIH1cXG59XFxuXFxuLyogUGxheWVyIHNlY3Rpb25zICovXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogUGxheWVyIGJvYXJkcyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLyogT25seSBhbGxvdyB2aXNpYmxlIGhvdmVyIGZvciBvcHBvc2luZyBwbGF5ZXIncyBib2FyZCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKXtcXG4gICAgLmNlbGw6bm90KFtkYXRhLXBsYXllcj0nMSddKTpub3QoLmNlbGwtaGl0KTpub3QoLmNlbGwtbWlzcyk6aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG4uY2VsbC1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5jZWxsLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDMycHg7XFxufVxcblxcbiNmb290ZXItbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZm9vdGVyIGkge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgI2Zvb3Rlci1saW5rOmhvdmVyLFxcbiAgICAjZm9vdGVyLWRhcmstbW9kZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBQ2hDLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsMkJBQTJCO0FBQy9COztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBLFdBQVc7QUFDWDtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsMkNBQTJDO0lBQy9DO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFFBQVE7QUFDWjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1oseUNBQXlDO0FBQ3pDLHVCQUF1QjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLG9DQUFvQztJQUN4QztBQUNKOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsMENBQTBDO0FBQzlDOztBQUVBLHlEQUF5RDtBQUN6RDtJQUNJO1FBQ0kseUNBQXlDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUEsV0FBVztBQUNYO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSTs7UUFFSSxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLCtCQUErQjtJQUNuQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1ib2FyZC1zaXplOiAzMjBweDtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigyMDYsIDEzNCwgMTM0KTtcXG4gICAgLS1taXNzLWNvbG9yOiByZ2IoMTYxLCAyMTYsIDE2MSk7XFxuICAgIC0tdGV4dC1jb2xvci1tYWluOiByZ2IoNDAsIDQwLCA0MCk7XFxuICAgIC0tdGV4dC1jb2xvci1ncmV5OiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWhvdmVyOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWFjdGl2ZTogZ3JleTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xcbiAgICAtLWNlbGwtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS1jZWxsLWhvdmVyLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxuICAgIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gICAgLS1zaGlwLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxuICAgIC0taGl0LWNvbG9yOiByZ2IoMTU1LCA2MSwgNjEpO1xcbiAgICAtLW1pc3MtY29sb3I6IHJnYig1MiwgMTA5LCA1Mik7XFxuICAgIC0tdGV4dC1jb2xvci1tYWluOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIC0tdGV4dC1jb2xvci1ncmV5OiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWhvdmVyOiByZ2IoMjAsIDIwLCAyMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWFjdGl2ZTogZ3JleTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxufVxcblxcbiNhcHAge1xcbiAgICBwYWRkaW5nOiAwIDUlO1xcbiAgICAvKiB3aWR0aDogMTAwdnc7ICovXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuXFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICAvKiBtYXgtd2lkdGg6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3ItYWN0aXZlKTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWhvdmVyKTtcXG4gICAgfVxcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICAvKiBkaXNwbGF5OiBjb250ZW50czsgKi9cXG4gICAgLyogd2lkdGg6IGZpdC1jb250ZW50OyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLyogUGxheWVyIHNldHVwICovXFxuLnNldHVwLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLyogcGFkZGluZy10b3A6IDIwcHg7ICovXFxuICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJvYXJkLXNpemUpICsgMjVweCk7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1zaGlwbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZXR1cC1zaGlwIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAxNjBweDsgKi9cXG4gICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXFxufVxcblxcbi5zZXR1cC1zaGlwLWJveCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLnNldHVwLXNoaXAtY2VsbCB7XFxud2lkdGg6IDMwcHg7XFxuaGVpZ2h0OiAzMHB4O1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2V0dXAtc2hpcHMtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydCwgLnNldHVwLWJ1dHRvbi1yYW5kb20ge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMzZweDtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTg5LCAxMjkpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcil7XFxuICAgIC5zZXR1cC1idXR0b24tc3RhcnQ6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTE2LCAxMTYpO1xcbiAgICB9XFxufVxcblxcbi8qIFBsYXllciBzZWN0aW9ucyAqL1xcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIFBsYXllciBib2FyZHMgKi9cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogdmFyKC0tYm9hcmQtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tYm9hcmQtc2l6ZSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi8qIE9ubHkgYWxsb3cgdmlzaWJsZSBob3ZlciBmb3Igb3Bwb3NpbmcgcGxheWVyJ3MgYm9hcmQgKi9cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcil7XFxuICAgIC5jZWxsOm5vdChbZGF0YS1wbGF5ZXI9JzEnXSk6bm90KC5jZWxsLWhpdCk6bm90KC5jZWxsLW1pc3MpOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMCAzMnB4O1xcbn1cXG5cXG4jZm9vdGVyLWxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmZvb3RlciBpIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgICNmb290ZXItbGluazpob3ZlcixcXG4gICAgI2Zvb3Rlci1kYXJrLW1vZGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJztcbmltcG9ydCBjcmVhdGVIZWFkZXJCb3ggZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IGNyZWF0ZUZvb3RlckJveCBmcm9tICcuL2Zvb3Rlcic7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYXBwLmlkID0gJ2FwcCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XG5jb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXJCb3goKTtcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlckJveCgpO1xuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ2FtZUNvbnRhaW5lci5pZCA9ICdnYW1lLWNvbnRhaW5lcic7XG5hcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmFwcC5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcbmFwcC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vL1xuLy9uZXcgZ2FtZSBjcmVhdGlvbiBnb2VzIGhlcmUtaXNoXG4vL1xuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUubmV3R2FtZSgnQm9iJywgZmFsc2UpO1xuZ2FtZS50ZXN0R2FtZSgpO1xuXG5jb25zdCBwbGF5ZXIxQm9hcmRDb250YWluZXIgPSBkcmF3Qm9hcmRDb250YWluZXIoZ2FtZS5wbGF5ZXIxKTtcbi8vIGNvbnN0IHBsYXllcjJCb2FyZENvbnRhaW5lciA9IGRyYXdCb2FyZENvbnRhaW5lcihnYW1lLnBsYXllcjIpO1xuLy8gZ2FtZUNvbnRhaW5lci5hcHBlbmQocGxheWVyMUJvYXJkQ29udGFpbmVyLCBwbGF5ZXIyQm9hcmRDb250YWluZXIpO1xuXG5nYW1lQ29udGFpbmVyLmFwcGVuZChwbGF5ZXIxQm9hcmRDb250YWluZXIsIGRyYXdTZXR1cFNoaXBzKCkpO1xuXG5cbnBvcHVsYXRlQm9hcmQoZ2FtZS5wbGF5ZXIxLCBwbGF5ZXIxQm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJvYXJkJykpO1xuXG5cbi8vIEhFUkUgV0UgTUFLRTpcbi8vIGZ1bmN0aW9uIFBMQUNFU0hJUCBCT0FSRFxuLy8gZnVuY3Rpb24gU0hJUFMgVE8gUExBQ0UgQ09OVEFJTkVSXG5cbmZ1bmN0aW9uIGRyYXdTZXR1cEJvYXJkKHBsYXllcikge1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cFNoaXBzKHBsYXllcikge1xuICAgIGNvbnN0IHNldHVwU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR1cFNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNldHVwU2hpcHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2V0dXBTaGlwc1RpdGxlLnRleHRDb250ZW50ID0gJ3BsYWNlIHlvdXIgc2hpcHM6JztcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2NhcnJpZXInLFxuICAgICAgICAgICAgbGVuZ3RoOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYXR0bGVzaGlwJyxcbiAgICAgICAgICAgIGxlbmd0aDogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnZGVzdHJveWVyJyxcbiAgICAgICAgICAgIGxlbmd0aDogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VibWFyaW5lJyxcbiAgICAgICAgICAgIGxlbmd0aDogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0cm9sIGJvYXQnLFxuICAgICAgICAgICAgbGVuZ3RoOiAyXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBzZXR1cFNoaXBzT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHVwU2hpcHNPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLW9wdGlvbnMnKTtcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXN0YXJ0Jyk7XG4gICAgc3RhcnRHYW1lLnRleHRDb250ZW50ID0gJ1RPIEJBVFRMRSEnO1xuICAgIGNvbnN0IHJhbmRvbVNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmFuZG9tU2hpcHMuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXJhbmRvbScpO1xuICAgIHJhbmRvbVNoaXBzLnRleHRDb250ZW50ID0gJ3JhbmRvbWl6ZSc7XG4gICAgc2V0dXBTaGlwc09wdGlvbnMuYXBwZW5kKHN0YXJ0R2FtZSwgcmFuZG9tU2hpcHMpO1xuICAgIHNldHVwU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dXBTaGlwc1RpdGxlKTtcbiAgICBjb25zdCBzaGlwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIHNoaXBMaXN0LmFwcGVuZENoaWxkKGRyYXdTaGlwKHNoaXApKTtcbiAgICB9KVxuICAgIHNldHVwU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcExpc3QpO1xuICAgIHNldHVwU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dXBTaGlwc09wdGlvbnMpO1xuICAgIHJldHVybiBzZXR1cFNoaXBzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcCcpO1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwQm94LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtYm94Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1jZWxsJyk7XG4gICAgICAgIHNoaXBCb3guYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuICAgIH1cbiAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzaGlwTmFtZS50ZXh0Q29udGVudCA9IHNoaXAudHlwZTtcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZChzaGlwQm94LCBzaGlwTmFtZSk7XG4gICAgcmV0dXJuIHNoaXBDb250YWluZXI7XG59XG5cbi8vXG4vLyBcbi8vIElGIEdBTUUgQ09OVEFJTkVSIEhFSUdIVCBJUyBCSUdHRVIgVEhBTiA1MDBQWCAoSS5FLiwgV1JBUFBFRCksIEFESlVTVCBIRUFERVIgVE8gU1VJVFxuLy8gVEhJUyBJUyBBIFZFUlkgU0NVRkZFRCBTT0xVVElPTiBBTkQgUE9SQkFCTFkgQlJFQUtTIFdIRU4gUExBQ0lORyBTSElQUyBPTiBTSU5HTEUgR1JJRCBWSUVXXG4vL1xuLy9cbmNvbnN0IGdhbWVTaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cnkgPT4ge1xuICAgIGlmIChlbnRyeVswXS5jb250ZW50UmVjdC5oZWlnaHQgPiA1MDApIGhlYWRlci5zdHlsZS53aWR0aCA9ICczMjBweCc7XG4gICAgZWxzZSBoZWFkZXIuc3R5bGUud2lkdGggPSBgJHtlbnRyeVswXS5jb250ZW50UmVjdC53aWR0aH1weGA7XG4gICAgY29uc29sZS5sb2coaGVhZGVyLnN0eWxlLndpZHRoKVxuICAgIC8vIGhlYWRlci5zdHlsZS53aWR0aCA9IGAke2VudHJ5WzBdLmNvbnRlbnRSZWN0LndpZHRofXB4YDtcbiAgICBjb25zb2xlLmxvZyhoZWFkZXIuc3R5bGUud2lkdGgpXG59KVxuXG5nYW1lU2l6ZU9ic2VydmVyLm9ic2VydmUoZ2FtZUNvbnRhaW5lcik7XG5cblxuZnVuY3Rpb24gZHJhd0JvYXJkQ29udGFpbmVyKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSdzIGZsZWV0YDtcbiAgICBjb25zdCBwbGF5ZXJOdW1iZXIgPSBwbGF5ZXIgPT09IGdhbWUucGxheWVyMSA/IDEgOiAyO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZHJhd0JvYXJkKHBsYXllck51bWJlcik7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kKHBsYXllck5hbWUsIHBsYXllckJvYXJkKTtcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXI7XG59XG5cbi8vIERyYXcgYSBncmlkIG9mIGNlbGxzIHdpdGggZGF0YSBhdHRyaWJ1dGVzIGZvciB0aGVpciBsb2NhdGlvbnNcbmZ1bmN0aW9uIGRyYXdCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQucGxheWVyID0gcGxheWVyO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBNQVkgTkVFRCBUTyBSRVZJU0VcbiAgICAgICAgICAgIC8vIE5FRUQgVE8gQUREIEVWRU5UIExJU1RFTkVSUyBPTkxZIEZPUiBPUFBPU0lORyBQTEFZRVInUyBCT0FSRFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09IDIpIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Gb3JBdHRhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbi8vIFVwb24gY2xpY2tpbmcgYSBjZWxsLCBhdHRhY2sgdGhlIHJlbGV2YW50IHNxdWFyZSwgaWYgYWxsb3dlZFxuZnVuY3Rpb24gbGlzdGVuRm9yQXR0YWNrKGV2ZW50KSB7XG4gICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllck51bWJlciA9IGNlbGwuZGF0YXNldC5wbGF5ZXI7XG4gICAgY29uc3QgYXR0YWNraW5nUGxheWVyTnVtYmVyID0gZGVmZW5kaW5nUGxheWVyTnVtYmVyID09PSAnMScgPyAnMicgOiAnMSc7XG4gICAgY29uc3QgYXR0YWNraW5nUGxheWVyID0gZ2FtZVtgcGxheWVyJHthdHRhY2tpbmdQbGF5ZXJOdW1iZXJ9YF07XG4gICAgY29uc3QgZGVmZW5kaW5nUGxheWVyID0gZ2FtZVtgcGxheWVyJHtkZWZlbmRpbmdQbGF5ZXJOdW1iZXJ9YF07XG4gICAgaWYgKGdhbWUuY3VycmVudFBsYXllciAhPT0gYXR0YWNraW5nUGxheWVyKSByZXR1cm47XG4gICAgY29uc3Qgcm93ID0gY2VsbC5kYXRhc2V0LnJvdztcbiAgICBjb25zdCBjb2wgPSBjZWxsLmRhdGFzZXQuY29sO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF0dGFja2luZ1BsYXllci5hdHRhY2soZGVmZW5kaW5nUGxheWVyLCByb3csIGNvbClbMF07XG4gICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1oaXQnKTtcbiAgICBpZiAocmVzdWx0ID09PSAnbWlzcycpIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1taXNzJyk7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckF0dGFjaywgZmFsc2UpXG4gICAgbmV4dFR1cm4oKTtcbn1cblxuLy8gQ2FsbCBhbiBhdHRhY2sgZm9yIHRoZSBBSSBhbmQgbW9kaWZ5IHRoZSByZXN1bHRpbmcgYXR0YWNrZWQgY2VsbFxuZnVuY3Rpb24gY2FsbEFJQXR0YWNrKGFpKSB7XG4gICAgaWYgKGFpICE9PSBnYW1lLmN1cnJlbnRQbGF5ZXIpIHJldHVybjtcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPSBnYW1lLmRlZmVuZGluZ1BsYXllciA9PT0gZ2FtZS5wbGF5ZXIxID8gJzEnIDogJzInO1xuICAgIGNvbnN0IFtyZXN1bHQsIGxvY2F0aW9uXSA9IGFpLmF0dGFjayhnYW1lLmRlZmVuZGluZ1BsYXllcik7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj0nJHtkZWZlbmRpbmdQbGF5ZXJOdW1iZXJ9J11bZGF0YS1yb3c9JyR7bG9jYXRpb25bMF19J11bZGF0YS1jb2w9JyR7bG9jYXRpb25bMV19J11gKVxuICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtaGl0Jyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWlzcycpO1xuICAgIG5leHRUdXJuKCk7XG59XG5cbi8vIEhhbmRsZSBlbmQtb2YtdHVybiBldmVudHNcbmZ1bmN0aW9uIG5leHRUdXJuKCkge1xuICAgIGNvbnN0IHdpbm5lciA9IGdhbWUuY2hlY2tHYW1lT3ZlcigpO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgICAgYWxlcnQoYCR7d2lubmVyLm5hbWV9IHdpbnNgKVxuICAgICAgICByZXR1cm4gZW5kR2FtZSh3aW5uZXIpO1xuICAgIH07XG4gICAgZ2FtZS5jaGFuZ2VUdXJuKCk7XG4gICAgaWYgKGdhbWUuY3VycmVudFBsYXllci5pc0FJKSB7XG4gICAgICAgIGNhbGxBSUF0dGFjayhnYW1lLmN1cnJlbnRQbGF5ZXIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckF0dGFjaywgZmFsc2UpKTtcbiAgICAvLyBhbm5vdW5jZSB3aW5uZXJcbiAgICAvLyByZXZlYWwgYm90aCBib2FyZHNcbn1cblxuLy8gRHJhdyB0aGUgc2hpcHMgdG8gdGhlIHBsYXllcidzIG9uLXNjcmVlbiBib2FyZCBzbyB0aGV5IGNhbiBzZWUgdGhlaXIgZmxlZXRcbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQocGxheWVyLCBib2FyZCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKHNxdWFyZSAhPT0gbnVsbCAmJiB0eXBlb2Ygc3F1YXJlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1zaGlwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBGb290ZXIgbGluayBhbmQgbGlnaHQvZGFyayBtb2RlIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgYXV0aG9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGF1dGhvck5hbWUuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1hdXRob3JcIik7XG4gICAgYXV0aG9yTmFtZS50ZXh0Q29udGVudCA9IFwiQ2FybCBNYWRzZW4gMjAyMlwiO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBmb290ZXJMaW5rLmlkID0gXCJmb290ZXItbGlua1wiO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9lbHNhZXBvL29kaW4tYmF0dGxlc2hpcFwiKTtcbiAgICBjb25zdCBnaXRIdWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIsIFwiZmEtZ2l0aHViXCIsIFwiZmEteGxcIiwgXCJmb290ZXItbG9nb1wiKTtcbiAgICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xuICAgIFxuICAgIGZ1bmN0aW9uIGdldFRoZW1lKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZURhcmtNb2RlKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgICAgZGFya01vZGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImZhLW1vb25cIik7XG4gICAgICBkYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtc3VuXCIpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0b2dnbGVEYXJrU3RvcmFnZSgpIHtcbiAgICAgIGlmIChnZXRUaGVtZSgpID09PSBcImRhcmtcIikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNCcm93c2VyRGFya01vZGUoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlc1xuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGFya01vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pZCA9IFwiZm9vdGVyLWRhcmstbW9kZVwiO1xuICAgIGRhcmtNb2RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW1vb25cIiwgXCJmYS14bFwiKTtcbiAgICBkYXJrTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZURhcmtNb2RlKCk7XG4gICAgICB0b2dnbGVEYXJrU3RvcmFnZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIGlmIChnZXRUaGVtZSgpID09PSBcImRhcmtcIiB8fCAoIWdldFRoZW1lKCkgJiYgaXNCcm93c2VyRGFya01vZGUoKSkpIHtcbiAgICAgIHRvZ2dsZURhcmtNb2RlKCk7XG4gICAgfVxuICAgIFxuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChhdXRob3JOYW1lKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGRhcmtNb2RlQnV0dG9uKTtcblxuICAgIHJldHVybiBmb290ZXJCb3g7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXJCb3goKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnYmF0dGxlc2hpcC4nO1xuXG4gICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0dhbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYnV0dG9uJyk7XG4gICAgbmV3R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9ICduZXcgZ2FtZSc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuZXdHYW1lQnV0dG9uKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlckJveDsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZnVuY3Rpb24gR2FtZSgpe1xuICAgIGxldCBwbGF5ZXIxO1xuICAgIGxldCBwbGF5ZXIyO1xuICAgIGxldCBjdXJyZW50UGxheWVyO1xuICAgIGxldCBkZWZlbmRpbmdQbGF5ZXI7XG4gICAgZnVuY3Rpb24gbmV3R2FtZShwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUpe1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBQbGF5ZXIocGxheWVyMU5hbWUpO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBQbGF5ZXIocGxheWVyMk5hbWUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjE7XG4gICAgICAgIHRoaXMuZGVmZW5kaW5nUGxheWVyID0gdGhpcy5wbGF5ZXIyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJuKCl7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgICAgICB0aGlzLmRlZmVuZGluZ1BsYXllciA9IHRoaXMuZGVmZW5kaW5nUGxheWVyID09PSB0aGlzLnBsYXllcjIgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMjtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RHYW1lKCl7XG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIFsxLDNdLCAndmVydGljYWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCBbNywyXSwgJ2hvcml6b250YWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LCBbMiw3XSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoMywgWzEsM10sICd2ZXJ0aWNhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIFs3LDJdLCAnaG9yaXpvbnRhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDUsIFsyLDddLCAndmVydGljYWwnKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBkZWZlbmRpbmdQbGF5ZXIsXG4gICAgICAgIG5ld0dhbWUsXG4gICAgICAgIGNoYW5nZVR1cm4sXG4gICAgICAgIGNoZWNrR2FtZU92ZXIsXG4gICAgICAgIHRlc3RHYW1lXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbXB0eUdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgLy8gQ3JlYXRlIGEgMTB4MTAgMmQgYXJyYXkgZ2FtZWJvYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlRW1wdHlHYW1lYm9hcmQoKSB7XG4gICAgICAgIGxldCBnYW1lYm9hcmRBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPD0gOTsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IDk7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgcm93QXJyYXlbY29sXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lYm9hcmRBcnJheVtyb3ddID0gcm93QXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZEFycmF5O1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIGEgc3F1YXJlIGluIHRoZSBnYW1lYm9hcmQsIGFuZCB1bmRlZmluZWQgaWYgb3V0c2lkZSB0aGUgZ2FtZWJvYXJkIGV4dGVudHNcbiAgICBmdW5jdGlvbiBjaGVja1NxdWFyZShyb3csIGNvbCkge1xuICAgICAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAocm93ID4gOSB8fCBjb2wgPiA5KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2Ygc2hpcCBwbGFjZW1lbnQgc3F1YXJlc1xuICAgICAgICBsZXQgW3JvdywgY29sXSA9IG9yaWdpbjtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgIGFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnID8gY29sKysgOiByb3crKztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBldmVyeSBwbGFjZW1lbnQgc3F1YXJlIGlzIG51bGwsIHBsYWNlIHRoZSBzaGlwIG9uIGFsbCB0aG9zZSBzcXVhcmVzXG4gICAgICAgIGlmIChzaGlwU3F1YXJlcy5ldmVyeShzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBzcXVhcmU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1NxdWFyZShyb3csIGNvbCkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVtjb2xdID09PSBudWxsO1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gc3F1YXJlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwbGFjZWRTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcCBpbiB0aGF0IGxvY2F0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHNSYW5kb21seSgpe1xuICAgICAgICBjb25zdCBzaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwc1tpXSk7XG4gICAgICAgICAgICB3aGlsZSAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcgfHwgcmVzdWx0ID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXBzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBSYW5kb21seShzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUFsaWdubWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21PcmlnaW4oYWxpZ25tZW50KSB7XG4gICAgICAgICAgICBsZXQgcm93RGlmID0gMDtcbiAgICAgICAgICAgIGxldCBjb2xEaWYgPSAwO1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJykgcm93RGlmID0gc2hpcExlbmd0aCAtIDE7XG4gICAgICAgICAgICBlbHNlIGNvbERpZiA9IHNoaXBMZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHJvd0RpZikpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGNvbERpZikpO1xuICAgICAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFsaWdubWVudCA9IGdldFJhbmRvbUFsaWdubWVudCgpO1xuICAgICAgICBsZXQgb3JpZ2luID0gZ2V0UmFuZG9tT3JpZ2luKGFsaWdubWVudCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIHdoaWxlICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0JyB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGFsaWdubWVudCA9IGdldFJhbmRvbUFsaWdubWVudCgpO1xuICAgICAgICAgICAgb3JpZ2luID0gZ2V0UmFuZG9tT3JpZ2luKGFsaWdubWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gUmVjZWl2ZXMgYW4gYXR0YWNrIGFuZCBjYWxjdWxhdGVzIHRoZSByZXN1bHRcbiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IC0gJ2hpdCcgb3IgJ21pc3MnIGRlcGVuZGluZyBvbiByZXN1bHQsIGFuZCB0aGUgY29vcmRpbmF0ZXNcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrU3F1YXJlKHJvdywgY29sKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gXCJJbnZhbGlkIGxvY2F0aW9uXCI7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PT0gbnVsbCkgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAnbWlzcyc7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9ICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5ib2FyZFtyb3ddW2NvbF0sIFtyb3csIGNvbF1dO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0FsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlZFNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBwbGFjZWRTaGlwcyxcbiAgICAgICAgY2hlY2tTcXVhcmUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5LFxuICAgICAgICBwbGFjZVNoaXBSYW5kb21seSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tBbGxTaGlwc1N1bmtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5mdW5jdGlvbiBQbGF5ZXIocGxheWVyTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgcGxheWVyTmFtZSA9PT0gJ3N0cmluZycgPyBwbGF5ZXJOYW1lIDogJ2JhdHRsZUJvdCc7XG4gICAgY29uc3QgaXNBSSA9IHR5cGVvZiBwbGF5ZXJOYW1lICE9PSAnc3RyaW5nJyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAvLyBDcmVhdGUgYSAyRCBhcnJheSBvZiBhdmFpbGFibGUgYXR0YWNrIGNvb3JkaW5hdGVzXG4gICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrcyA9IGNyZWF0ZUF0dGFja0FycmF5KCk7XG4gICAgZnVuY3Rpb24gYXR0YWNrKGVuZW15LCByb3csIGNvbCkge1xuICAgICAgICAvLyBHZXQgcm93IGFuZCBjb2wgZm9yIGEgcmFuZG9tIEFJIGF0dGFjayBmcm9tIHRoZSBhdmFpbGFibGVBdHRhY2tzIGFycmF5XG4gICAgICAgIGlmIChpc0FJKSB7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiAnTm8gc3F1YXJlcyB0byBhdHRhY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFycmF5Um93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGFycmF5Q29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrc1thcnJheVJvd10ubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc3F1YXJlIGZyb20gdGhlIGF2YWlsYWJsZUF0dGFja3MgYXJyYXkgJiBnZXQgdGhlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBsZXQgYXR0YWNrQ29vcmRzID0gYXZhaWxhYmxlQXR0YWNrc1thcnJheVJvd10uc3BsaWNlKGFycmF5Q29sLCAxKVswXTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVBdHRhY2tzW2FycmF5Um93XS5sZW5ndGggPT09IDApIGF2YWlsYWJsZUF0dGFja3Muc3BsaWNlKGFycmF5Um93LCAxKTtcbiAgICAgICAgICAgIFtyb3csIGNvbF0gPSBhdHRhY2tDb29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIHRoZSAnaGl0JyBvciAnbWlzcycgcmVzdWx0IG9mIHRoZSBhdHRhY2tcbiAgICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaXNBSSxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBhdHRhY2tcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dGFja0FycmF5KCkge1xuICAgIGNvbnN0IGF0dGFja0FycmF5ID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIHJvd0FycmF5LnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNrQXJyYXkucHVzaChyb3dBcnJheSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImZ1bmN0aW9uIFNoaXAobCl7XG4gICAgY29uc3QgbGVuZ3RoID0gbDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgZnVuY3Rpb24gaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N1bmsoKXtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHMsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvZG9tL2RvbUNvbnRyb2xsZXInXG5cbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyBteUljb24uc3JjID0gSWNvbjtcbi8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=