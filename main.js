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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-height: 100px;\n    --board-size: 320px;\n\n    --background-color: rgb(240, 240, 240);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    /* width: 100vw; */\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    /* max-width: 100%; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    /* display: contents; */\n    /* width: fit-content; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    /* padding-top: 20px; */\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    /* border: 1px solid red; */\n    height: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n    /* margin-right: 160px; */\n    /* text-align: right; */\n}\n\n.setup-ship-box {\n    display: inline-flex;\n    gap: 3px;\n}\n\n.setup-ship-cell {\nwidth: 30px;\nheight: 30px;\nbackground-color: var(--cell-hover-color);\nborder: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start, .setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover){\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    width: var(--board-size);\n    height: var(--board-size);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    cursor: crosshair;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover){\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover{\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n:root {\n    --header-height: 100px;\n    --board-size: 320px;\n\n    --background-color: rgb(240, 240, 240);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    /* width: 100vw; */\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    /* max-width: 100%; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    /* display: contents; */\n    /* width: fit-content; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    /* padding-top: 20px; */\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    /* border: 1px solid red; */\n    height: 40px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n    /* margin-right: 160px; */\n    /* text-align: right; */\n}\n\n.setup-ship-box {\n    display: inline-flex;\n    gap: 3px;\n}\n\n.setup-ship-cell {\nwidth: 30px;\nheight: 30px;\nbackground-color: var(--cell-hover-color);\nborder: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start, .setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover){\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    width: var(--board-size);\n    height: var(--board-size);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    cursor: crosshair;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover){\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover{\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}"],"sourceRoot":""}]);
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

const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
// drawGame('Bob', false)
// drawGame('bob', true)
newGame();

function startGame(player1, player2){
    game.newGame(player1, player2);
    drawGame();
}

function newGame(){
    const newPlayer1 = game.createPlayer('Mysterio', 1);
    const newPlayer2 = game.createPlayer(false, 2);
    console.log(newPlayer2)
    newPlayer2.gameboard.placeAllShipsRandomly();
    drawSetup(newPlayer1);
    const startGameButton = document.querySelector('.setup-button-start');
    startGameButton.addEventListener('click', function(event){
        if (newPlayer1.gameboard.placedShips.length === 5){
            startGame(newPlayer1, newPlayer2);
        }
        
    });

}

function clearContainer(container){
    console.log(container.firstChild)
    while (container.firstChild) container.removeChild(container.firstChild);
}

function drawGame() {
    clearContainer(gameContainer);
    const player1BoardContainer = drawBoardContainer(game.player1);
    const player2BoardContainer = drawBoardContainer(game.player2);
    populateBoard(game.player1, player1BoardContainer.querySelector('.board'));
    gameContainer.append(player1BoardContainer, player2BoardContainer);

}

function drawSetup(player){
    clearContainer(gameContainer);
    const setupBoard = drawSetupBoard(player);
    const setupShips = drawSetupShips();
    const randomShipsButton = setupShips.querySelector('.setup-button-random');
    randomShipsButton.addEventListener('click', function(event){
        randomizeFleet(player, setupBoard)
    });
    
    gameContainer.append(setupBoard, setupShips);
}

function drawSetupBoard(player) {
    // placeholder that just draws an empty grid
    return drawBoardContainer(player)
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
    for (let i = 0; i < ship.length; i++) {
        const shipCell = document.createElement('div');
        shipCell.classList.add('setup-ship-cell');
        shipBox.appendChild(shipCell);
    }
    const shipName = document.createElement('p');
    shipName.textContent = ship.type;
    shipContainer.append(shipBox, shipName);
    return shipContainer;
}

function randomizeFleet(player, board){
    player.gameboard.placeAllShipsRandomly();
    populateBoard(player, board);
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
    // header.style.width = `${entry[0].contentRect.width}px`;
})

gameSizeObserver.observe(gameContainer);

//
//
//
//

// Hold the information of the player's board - name, board and ships left
function drawBoardContainer(player) {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');
    const playerName = document.createElement('h3');
    // CAN TRIM THIS LATER PROBABLY
    if (player) playerName.textContent = `${player.name}'s fleet`;
    else playerName.textContent = 'your current fleet';
    const playerBoard = drawBoard(player);
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
            // CAN TRIM THIS LATER PROBABLY
            cell.dataset.player = player ? player.number : 0;
            cell.dataset.row = row;
            cell.dataset.col = col;
            board.appendChild(cell);
            //
            // MAY NEED TO REVISE
            // NEED TO ADD EVENT LISTENERS ONLY FOR OPPOSING PLAYER'S BOARD
            //
            if (player && player.isAI) cell.addEventListener('click', listenForAttack, false);
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
            const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
            if (square !== null && typeof square === 'object') {
                cell.classList.add('cell-ship')
            }
            else cell.classList.remove('cell-ship');
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
    function createPlayer(name, number){
        return (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(name, number);
    }
    function newGame(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
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
        createPlayer,
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
    function clearBoard(board){
        for (let row = 0; row < 10; row++){
            for (let col = 0; col < 10; col++){
                board[row][col] = null;
            }
        }
    }
    function clearFleet(fleet){
        while (fleet.length > 0) fleet.pop();
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
        clearBoard(this.board);
        clearFleet(this.placedShips);
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


function Player(playerName, playerNumber) {
    let name = typeof playerName === 'string' ? playerName : 'battleBot';
    const number = playerNumber;
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
        number,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNsQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tYm9hcmQtc2l6ZTogMzIwcHg7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICAtLWNlbGwtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1jZWxsLWhvdmVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1zaGlwLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICAgIC0taGl0LWNvbG9yOiByZ2IoMjA2LCAxNjksIDEzNCk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDE2MSwgMjE2LCAxNjEpO1xcbiAgICAtLXN1bmstY29sb3I6IHJnYigyMDYsIDEzNCwgMTM0KTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigxNTUsIDk5LCA2MSk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDUyLCAxMDksIDUyKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMTU1LCA2MSwgNjEpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDE2MCwgMTYwLCAxNjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIwLCAyMCwgMjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcGFkZGluZzogMCA1JTtcXG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcblxcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxuICAgIH1cXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogY29udGVudHM7ICovXFxuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi8qIFBsYXllciBzZXR1cCAqL1xcbi5zZXR1cC1zaGlwcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIHBhZGRpbmctdG9wOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogdmFyKC0tYm9hcmQtc2l6ZSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1ib2FyZC1zaXplKSArIDI1cHgpO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnNldHVwLXNoaXAtc2hpcGxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIC8qIG1hcmdpbi1yaWdodDogMTYwcHg7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1ib3gge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5zZXR1cC1zaGlwLWNlbGwge1xcbndpZHRoOiAzMHB4O1xcbmhlaWdodDogMzBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNldHVwLXNoaXBzLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQsIC5zZXR1cC1idXR0b24tcmFuZG9tIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE4OSwgMTI5KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydC1kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKXtcXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydDpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMTYsIDExNik7XFxuICAgIH1cXG59XFxuXFxuLyogUGxheWVyIHNlY3Rpb25zICovXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogUGxheWVyIGJvYXJkcyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi8qIE9ubHkgYWxsb3cgdmlzaWJsZSBob3ZlciBmb3Igb3Bwb3NpbmcgcGxheWVyJ3MgYm9hcmQgKi9cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcil7XFxuICAgIC5jZWxsOm5vdChbZGF0YS1wbGF5ZXI9JzEnXSk6bm90KC5jZWxsLWhpdCk6bm90KC5jZWxsLW1pc3MpOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+Kclic7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtbWlzczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4pePJztcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDAgMzJweDtcXG59XFxuXFxuI2Zvb3Rlci1saW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5mb290ZXIgaSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAjZm9vdGVyLWxpbms6aG92ZXIsXFxuICAgICNmb290ZXItZGFyay1tb2RlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLDJC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QjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0k7O1FBRUksZUFBZTtRQUNmLHFCQUFxQjtRQUNyQiwrQkFBK0I7SUFDbkM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tYm9hcmQtc2l6ZTogMzIwcHg7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICAtLWNlbGwtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1jZWxsLWhvdmVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1zaGlwLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICAgIC0taGl0LWNvbG9yOiByZ2IoMjA2LCAxNjksIDEzNCk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDE2MSwgMjE2LCAxNjEpO1xcbiAgICAtLXN1bmstY29sb3I6IHJnYigyMDYsIDEzNCwgMTM0KTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigxNTUsIDk5LCA2MSk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDUyLCAxMDksIDUyKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMTU1LCA2MSwgNjEpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDE2MCwgMTYwLCAxNjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIwLCAyMCwgMjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcGFkZGluZzogMCA1JTtcXG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcblxcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxuICAgIH1cXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogY29udGVudHM7ICovXFxuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi8qIFBsYXllciBzZXR1cCAqL1xcbi5zZXR1cC1zaGlwcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIHBhZGRpbmctdG9wOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogdmFyKC0tYm9hcmQtc2l6ZSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1ib2FyZC1zaXplKSArIDI1cHgpO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnNldHVwLXNoaXAtc2hpcGxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIC8qIG1hcmdpbi1yaWdodDogMTYwcHg7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1ib3gge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi5zZXR1cC1zaGlwLWNlbGwge1xcbndpZHRoOiAzMHB4O1xcbmhlaWdodDogMzBweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNldHVwLXNoaXBzLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQsIC5zZXR1cC1idXR0b24tcmFuZG9tIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE4OSwgMTI5KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydC1kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKXtcXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydDpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMTYsIDExNik7XFxuICAgIH1cXG59XFxuXFxuLyogUGxheWVyIHNlY3Rpb25zICovXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogUGxheWVyIGJvYXJkcyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi8qIE9ubHkgYWxsb3cgdmlzaWJsZSBob3ZlciBmb3Igb3Bwb3NpbmcgcGxheWVyJ3MgYm9hcmQgKi9cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcil7XFxuICAgIC5jZWxsOm5vdChbZGF0YS1wbGF5ZXI9JzEnXSk6bm90KC5jZWxsLWhpdCk6bm90KC5jZWxsLW1pc3MpOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+Kclic7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtbWlzczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4pePJztcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDAgMzJweDtcXG59XFxuXFxuI2Zvb3Rlci1saW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5mb290ZXIgaSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAjZm9vdGVyLWxpbms6aG92ZXIsXFxuICAgICNmb290ZXItZGFyay1tb2RlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyQm94IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBjcmVhdGVGb290ZXJCb3ggZnJvbSAnLi9mb290ZXInO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFwcC5pZCA9ICdhcHAnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xuY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyQm94KCk7XG5jb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXJCb3goKTtcbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmdhbWVDb250YWluZXIuaWQgPSAnZ2FtZS1jb250YWluZXInO1xuYXBwLmFwcGVuZENoaWxkKGhlYWRlcik7XG5hcHAuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG5hcHAuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbi8vIGRyYXdHYW1lKCdCb2InLCBmYWxzZSlcbi8vIGRyYXdHYW1lKCdib2InLCB0cnVlKVxubmV3R2FtZSgpO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMil7XG4gICAgZ2FtZS5uZXdHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIGRyYXdHYW1lKCk7XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUoKXtcbiAgICBjb25zdCBuZXdQbGF5ZXIxID0gZ2FtZS5jcmVhdGVQbGF5ZXIoJ015c3RlcmlvJywgMSk7XG4gICAgY29uc3QgbmV3UGxheWVyMiA9IGdhbWUuY3JlYXRlUGxheWVyKGZhbHNlLCAyKTtcbiAgICBjb25zb2xlLmxvZyhuZXdQbGF5ZXIyKVxuICAgIG5ld1BsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpO1xuICAgIGRyYXdTZXR1cChuZXdQbGF5ZXIxKTtcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAtYnV0dG9uLXN0YXJ0Jyk7XG4gICAgc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZiAobmV3UGxheWVyMS5nYW1lYm9hcmQucGxhY2VkU2hpcHMubGVuZ3RoID09PSA1KXtcbiAgICAgICAgICAgIHN0YXJ0R2FtZShuZXdQbGF5ZXIxLCBuZXdQbGF5ZXIyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRhaW5lcihjb250YWluZXIpe1xuICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZHJhd0dhbWUoKSB7XG4gICAgY2xlYXJDb250YWluZXIoZ2FtZUNvbnRhaW5lcik7XG4gICAgY29uc3QgcGxheWVyMUJvYXJkQ29udGFpbmVyID0gZHJhd0JvYXJkQ29udGFpbmVyKGdhbWUucGxheWVyMSk7XG4gICAgY29uc3QgcGxheWVyMkJvYXJkQ29udGFpbmVyID0gZHJhd0JvYXJkQ29udGFpbmVyKGdhbWUucGxheWVyMik7XG4gICAgcG9wdWxhdGVCb2FyZChnYW1lLnBsYXllcjEsIHBsYXllcjFCb2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQocGxheWVyMUJvYXJkQ29udGFpbmVyLCBwbGF5ZXIyQm9hcmRDb250YWluZXIpO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cChwbGF5ZXIpe1xuICAgIGNsZWFyQ29udGFpbmVyKGdhbWVDb250YWluZXIpO1xuICAgIGNvbnN0IHNldHVwQm9hcmQgPSBkcmF3U2V0dXBCb2FyZChwbGF5ZXIpO1xuICAgIGNvbnN0IHNldHVwU2hpcHMgPSBkcmF3U2V0dXBTaGlwcygpO1xuICAgIGNvbnN0IHJhbmRvbVNoaXBzQnV0dG9uID0gc2V0dXBTaGlwcy5xdWVyeVNlbGVjdG9yKCcuc2V0dXAtYnV0dG9uLXJhbmRvbScpO1xuICAgIHJhbmRvbVNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICByYW5kb21pemVGbGVldChwbGF5ZXIsIHNldHVwQm9hcmQpXG4gICAgfSk7XG4gICAgXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQoc2V0dXBCb2FyZCwgc2V0dXBTaGlwcyk7XG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cEJvYXJkKHBsYXllcikge1xuICAgIC8vIHBsYWNlaG9sZGVyIHRoYXQganVzdCBkcmF3cyBhbiBlbXB0eSBncmlkXG4gICAgcmV0dXJuIGRyYXdCb2FyZENvbnRhaW5lcihwbGF5ZXIpXG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cFNoaXBzKHBsYXllcikge1xuICAgIGNvbnN0IHNldHVwU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR1cFNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNldHVwU2hpcHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2V0dXBTaGlwc1RpdGxlLnRleHRDb250ZW50ID0gJ3BsYWNlIHlvdXIgc2hpcHM6JztcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2NhcnJpZXInLFxuICAgICAgICAgICAgbGVuZ3RoOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdiYXR0bGVzaGlwJyxcbiAgICAgICAgICAgIGxlbmd0aDogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnZGVzdHJveWVyJyxcbiAgICAgICAgICAgIGxlbmd0aDogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VibWFyaW5lJyxcbiAgICAgICAgICAgIGxlbmd0aDogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAncGF0cm9sIGJvYXQnLFxuICAgICAgICAgICAgbGVuZ3RoOiAyXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBzZXR1cFNoaXBzT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHVwU2hpcHNPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLW9wdGlvbnMnKTtcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXN0YXJ0Jyk7XG4gICAgc3RhcnRHYW1lLnRleHRDb250ZW50ID0gJ1RPIEJBVFRMRSEnO1xuICAgIGNvbnN0IHJhbmRvbVNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmFuZG9tU2hpcHMuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXJhbmRvbScpO1xuICAgIHJhbmRvbVNoaXBzLnRleHRDb250ZW50ID0gJ3JhbmRvbWl6ZSc7XG4gICAgc2V0dXBTaGlwc09wdGlvbnMuYXBwZW5kKHN0YXJ0R2FtZSwgcmFuZG9tU2hpcHMpO1xuICAgIHNldHVwU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dXBTaGlwc1RpdGxlKTtcbiAgICBjb25zdCBzaGlwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIHNoaXBMaXN0LmFwcGVuZENoaWxkKGRyYXdTaGlwKHNoaXApKTtcbiAgICB9KVxuICAgIHNldHVwU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcExpc3QpO1xuICAgIHNldHVwU2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dXBTaGlwc09wdGlvbnMpO1xuICAgIHJldHVybiBzZXR1cFNoaXBzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcCcpO1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwQm94LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtYm94Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtY2VsbCcpO1xuICAgICAgICBzaGlwQm94LmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcbiAgICB9XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBzaGlwLnR5cGU7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmQoc2hpcEJveCwgc2hpcE5hbWUpO1xuICAgIHJldHVybiBzaGlwQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiByYW5kb21pemVGbGVldChwbGF5ZXIsIGJvYXJkKXtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpO1xuICAgIHBvcHVsYXRlQm9hcmQocGxheWVyLCBib2FyZCk7XG59XG5cbi8vXG4vLyBcbi8vIElGIEdBTUUgQ09OVEFJTkVSIEhFSUdIVCBJUyBCSUdHRVIgVEhBTiA1MDBQWCAoSS5FLiwgV1JBUFBFRCksIEFESlVTVCBIRUFERVIgVE8gU1VJVFxuLy8gVEhJUyBJUyBBIFZFUlkgU0NVRkZFRCBTT0xVVElPTiBBTkQgUE9SQkFCTFkgQlJFQUtTIFdIRU4gUExBQ0lORyBTSElQUyBPTiBTSU5HTEUgR1JJRCBWSUVXXG4vL1xuLy9cbmNvbnN0IGdhbWVTaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cnkgPT4ge1xuICAgIGlmIChlbnRyeVswXS5jb250ZW50UmVjdC5oZWlnaHQgPiA1MDApIGhlYWRlci5zdHlsZS53aWR0aCA9ICczMjBweCc7XG4gICAgZWxzZSBoZWFkZXIuc3R5bGUud2lkdGggPSBgJHtlbnRyeVswXS5jb250ZW50UmVjdC53aWR0aH1weGA7XG4gICAgLy8gaGVhZGVyLnN0eWxlLndpZHRoID0gYCR7ZW50cnlbMF0uY29udGVudFJlY3Qud2lkdGh9cHhgO1xufSlcblxuZ2FtZVNpemVPYnNlcnZlci5vYnNlcnZlKGdhbWVDb250YWluZXIpO1xuXG4vL1xuLy9cbi8vXG4vL1xuXG4vLyBIb2xkIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcGxheWVyJ3MgYm9hcmQgLSBuYW1lLCBib2FyZCBhbmQgc2hpcHMgbGVmdFxuZnVuY3Rpb24gZHJhd0JvYXJkQ29udGFpbmVyKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgLy8gQ0FOIFRSSU0gVEhJUyBMQVRFUiBQUk9CQUJMWVxuICAgIGlmIChwbGF5ZXIpIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0ncyBmbGVldGA7XG4gICAgZWxzZSBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gJ3lvdXIgY3VycmVudCBmbGVldCc7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkcmF3Qm9hcmQocGxheWVyKTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQocGxheWVyTmFtZSwgcGxheWVyQm9hcmQpO1xuICAgIHJldHVybiBib2FyZENvbnRhaW5lcjtcbn1cblxuLy8gRHJhdyBhIGdyaWQgb2YgY2VsbHMgd2l0aCBkYXRhIGF0dHJpYnV0ZXMgZm9yIHRoZWlyIGxvY2F0aW9uc1xuZnVuY3Rpb24gZHJhd0JvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIC8vIENBTiBUUklNIFRISVMgTEFURVIgUFJPQkFCTFlcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5wbGF5ZXIgPSBwbGF5ZXIgPyBwbGF5ZXIubnVtYmVyIDogMDtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY29sO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gTUFZIE5FRUQgVE8gUkVWSVNFXG4gICAgICAgICAgICAvLyBORUVEIFRPIEFERCBFVkVOVCBMSVNURU5FUlMgT05MWSBGT1IgT1BQT1NJTkcgUExBWUVSJ1MgQk9BUkRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci5pc0FJKSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG4vLyBVcG9uIGNsaWNraW5nIGEgY2VsbCwgYXR0YWNrIHRoZSByZWxldmFudCBzcXVhcmUsIGlmIGFsbG93ZWRcbmZ1bmN0aW9uIGxpc3RlbkZvckF0dGFjayhldmVudCkge1xuICAgIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPSBjZWxsLmRhdGFzZXQucGxheWVyO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllck51bWJlciA9IGRlZmVuZGluZ1BsYXllck51bWJlciA9PT0gJzEnID8gJzInIDogJzEnO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllciA9IGdhbWVbYHBsYXllciR7YXR0YWNraW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllciA9IGdhbWVbYHBsYXllciR7ZGVmZW5kaW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXIgIT09IGF0dGFja2luZ1BsYXllcikgcmV0dXJuO1xuICAgIGNvbnN0IHJvdyA9IGNlbGwuZGF0YXNldC5yb3c7XG4gICAgY29uc3QgY29sID0gY2VsbC5kYXRhc2V0LmNvbDtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGRlZmVuZGluZ1BsYXllciwgcm93LCBjb2wpWzBdO1xuICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtaGl0Jyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWlzcycpO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Gb3JBdHRhY2ssIGZhbHNlKVxuICAgIG5leHRUdXJuKCk7XG59XG5cbi8vIENhbGwgYW4gYXR0YWNrIGZvciB0aGUgQUkgYW5kIG1vZGlmeSB0aGUgcmVzdWx0aW5nIGF0dGFja2VkIGNlbGxcbmZ1bmN0aW9uIGNhbGxBSUF0dGFjayhhaSkge1xuICAgIGlmIChhaSAhPT0gZ2FtZS5jdXJyZW50UGxheWVyKSByZXR1cm47XG4gICAgY29uc3QgZGVmZW5kaW5nUGxheWVyTnVtYmVyID0gZ2FtZS5kZWZlbmRpbmdQbGF5ZXIgPT09IGdhbWUucGxheWVyMSA/ICcxJyA6ICcyJztcbiAgICBjb25zdCBbcmVzdWx0LCBsb2NhdGlvbl0gPSBhaS5hdHRhY2soZ2FtZS5kZWZlbmRpbmdQbGF5ZXIpO1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9JyR7ZGVmZW5kaW5nUGxheWVyTnVtYmVyfSddW2RhdGEtcm93PScke2xvY2F0aW9uWzBdfSddW2RhdGEtY29sPScke2xvY2F0aW9uWzFdfSddYClcbiAgICBpZiAocmVzdWx0ID09PSAnaGl0JykgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLWhpdCcpO1xuICAgIGlmIChyZXN1bHQgPT09ICdtaXNzJykgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLW1pc3MnKTtcbiAgICBuZXh0VHVybigpO1xufVxuXG4vLyBIYW5kbGUgZW5kLW9mLXR1cm4gZXZlbnRzXG5mdW5jdGlvbiBuZXh0VHVybigpIHtcbiAgICBjb25zdCB3aW5uZXIgPSBnYW1lLmNoZWNrR2FtZU92ZXIoKTtcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICAgIGFsZXJ0KGAke3dpbm5lci5uYW1lfSB3aW5zYClcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUod2lubmVyKTtcbiAgICB9O1xuICAgIGdhbWUuY2hhbmdlVHVybigpO1xuICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXIuaXNBSSkge1xuICAgICAgICBjYWxsQUlBdHRhY2soZ2FtZS5jdXJyZW50UGxheWVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Gb3JBdHRhY2ssIGZhbHNlKSk7XG4gICAgLy8gYW5ub3VuY2Ugd2lubmVyXG4gICAgLy8gcmV2ZWFsIGJvdGggYm9hcmRzXG59XG5cbi8vIERyYXcgdGhlIHNoaXBzIHRvIHRoZSBwbGF5ZXIncyBvbi1zY3JlZW4gYm9hcmQgc28gdGhleSBjYW4gc2VlIHRoZWlyIGZsZWV0XG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKHBsYXllciwgYm9hcmQpIHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xuICAgICAgICAgICAgaWYgKHNxdWFyZSAhPT0gbnVsbCAmJiB0eXBlb2Ygc3F1YXJlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1zaGlwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsLXNoaXAnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBGb290ZXIgbGluayBhbmQgbGlnaHQvZGFyayBtb2RlIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgYXV0aG9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGF1dGhvck5hbWUuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1hdXRob3JcIik7XG4gICAgYXV0aG9yTmFtZS50ZXh0Q29udGVudCA9IFwiQ2FybCBNYWRzZW4gMjAyMlwiO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBmb290ZXJMaW5rLmlkID0gXCJmb290ZXItbGlua1wiO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9lbHNhZXBvL29kaW4tYmF0dGxlc2hpcFwiKTtcbiAgICBjb25zdCBnaXRIdWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIsIFwiZmEtZ2l0aHViXCIsIFwiZmEteGxcIiwgXCJmb290ZXItbG9nb1wiKTtcbiAgICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xuICAgIFxuICAgIGZ1bmN0aW9uIGdldFRoZW1lKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZURhcmtNb2RlKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgICAgZGFya01vZGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImZhLW1vb25cIik7XG4gICAgICBkYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtc3VuXCIpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0b2dnbGVEYXJrU3RvcmFnZSgpIHtcbiAgICAgIGlmIChnZXRUaGVtZSgpID09PSBcImRhcmtcIikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNCcm93c2VyRGFya01vZGUoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlc1xuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGFya01vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pZCA9IFwiZm9vdGVyLWRhcmstbW9kZVwiO1xuICAgIGRhcmtNb2RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW1vb25cIiwgXCJmYS14bFwiKTtcbiAgICBkYXJrTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZURhcmtNb2RlKCk7XG4gICAgICB0b2dnbGVEYXJrU3RvcmFnZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIGlmIChnZXRUaGVtZSgpID09PSBcImRhcmtcIiB8fCAoIWdldFRoZW1lKCkgJiYgaXNCcm93c2VyRGFya01vZGUoKSkpIHtcbiAgICAgIHRvZ2dsZURhcmtNb2RlKCk7XG4gICAgfVxuICAgIFxuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChhdXRob3JOYW1lKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGRhcmtNb2RlQnV0dG9uKTtcblxuICAgIHJldHVybiBmb290ZXJCb3g7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXJCb3goKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnYmF0dGxlc2hpcC4nO1xuXG4gICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0dhbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYnV0dG9uJyk7XG4gICAgbmV3R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9ICduZXcgZ2FtZSc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuZXdHYW1lQnV0dG9uKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlckJveDsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZnVuY3Rpb24gR2FtZSgpe1xuICAgIGxldCBwbGF5ZXIxO1xuICAgIGxldCBwbGF5ZXIyO1xuICAgIGxldCBjdXJyZW50UGxheWVyO1xuICAgIGxldCBkZWZlbmRpbmdQbGF5ZXI7XG4gICAgZnVuY3Rpb24gY3JlYXRlUGxheWVyKG5hbWUsIG51bWJlcil7XG4gICAgICAgIHJldHVybiBQbGF5ZXIobmFtZSwgbnVtYmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbmV3R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gcGxheWVyMTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXIxO1xuICAgICAgICB0aGlzLmRlZmVuZGluZ1BsYXllciA9IHRoaXMucGxheWVyMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlVHVybigpe1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucGxheWVyMSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMTtcbiAgICAgICAgdGhpcy5kZWZlbmRpbmdQbGF5ZXIgPSB0aGlzLmRlZmVuZGluZ1BsYXllciA9PT0gdGhpcy5wbGF5ZXIyID8gdGhpcy5wbGF5ZXIxIDogdGhpcy5wbGF5ZXIyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0dhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkpIHJldHVybiB0aGlzLnBsYXllcjI7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkpIHJldHVybiB0aGlzLnBsYXllcjE7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0R2FtZSgpe1xuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCgzLCBbMSwzXSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoNCwgWzcsMl0sICdob3Jpem9udGFsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoNSwgWzIsN10sICd2ZXJ0aWNhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIFsxLDNdLCAndmVydGljYWwnKVxuICAgICAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCBbNywyXSwgJ2hvcml6b250YWwnKVxuICAgICAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LCBbMiw3XSwgJ3ZlcnRpY2FsJylcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyMSxcbiAgICAgICAgcGxheWVyMixcbiAgICAgICAgY3VycmVudFBsYXllcixcbiAgICAgICAgZGVmZW5kaW5nUGxheWVyLFxuICAgICAgICBjcmVhdGVQbGF5ZXIsXG4gICAgICAgIG5ld0dhbWUsXG4gICAgICAgIGNoYW5nZVR1cm4sXG4gICAgICAgIGNoZWNrR2FtZU92ZXIsXG4gICAgICAgIHRlc3RHYW1lXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbXB0eUdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgLy8gQ3JlYXRlIGEgMTB4MTAgMmQgYXJyYXkgZ2FtZWJvYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlRW1wdHlHYW1lYm9hcmQoKSB7XG4gICAgICAgIGxldCBnYW1lYm9hcmRBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPD0gOTsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IDk7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgcm93QXJyYXlbY29sXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lYm9hcmRBcnJheVtyb3ddID0gcm93QXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZEFycmF5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckJvYXJkKGJvYXJkKXtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckZsZWV0KGZsZWV0KXtcbiAgICAgICAgd2hpbGUgKGZsZWV0Lmxlbmd0aCA+IDApIGZsZWV0LnBvcCgpO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIGEgc3F1YXJlIGluIHRoZSBnYW1lYm9hcmQsIGFuZCB1bmRlZmluZWQgaWYgb3V0c2lkZSB0aGUgZ2FtZWJvYXJkIGV4dGVudHNcbiAgICBmdW5jdGlvbiBjaGVja1NxdWFyZShyb3csIGNvbCkge1xuICAgICAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAocm93ID4gOSB8fCBjb2wgPiA5KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGgpO1xuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2Ygc2hpcCBwbGFjZW1lbnQgc3F1YXJlc1xuICAgICAgICBsZXQgW3JvdywgY29sXSA9IG9yaWdpbjtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgIGFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnID8gY29sKysgOiByb3crKztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBldmVyeSBwbGFjZW1lbnQgc3F1YXJlIGlzIG51bGwsIHBsYWNlIHRoZSBzaGlwIG9uIGFsbCB0aG9zZSBzcXVhcmVzXG4gICAgICAgIGlmIChzaGlwU3F1YXJlcy5ldmVyeShzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBzcXVhcmU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1NxdWFyZShyb3csIGNvbCkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVtjb2xdID09PSBudWxsO1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gc3F1YXJlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwbGFjZWRTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcCBpbiB0aGF0IGxvY2F0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHNSYW5kb21seSgpe1xuICAgICAgICBjbGVhckJvYXJkKHRoaXMuYm9hcmQpO1xuICAgICAgICBjbGVhckZsZWV0KHRoaXMucGxhY2VkU2hpcHMpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwc1tpXSk7XG4gICAgICAgICAgICB3aGlsZSAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcgfHwgcmVzdWx0ID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXBzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBSYW5kb21seShzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUFsaWdubWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21PcmlnaW4oYWxpZ25tZW50KSB7XG4gICAgICAgICAgICBsZXQgcm93RGlmID0gMDtcbiAgICAgICAgICAgIGxldCBjb2xEaWYgPSAwO1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJykgcm93RGlmID0gc2hpcExlbmd0aCAtIDE7XG4gICAgICAgICAgICBlbHNlIGNvbERpZiA9IHNoaXBMZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHJvd0RpZikpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGNvbERpZikpO1xuICAgICAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFsaWdubWVudCA9IGdldFJhbmRvbUFsaWdubWVudCgpO1xuICAgICAgICBsZXQgb3JpZ2luID0gZ2V0UmFuZG9tT3JpZ2luKGFsaWdubWVudCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIHdoaWxlICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0JyB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGFsaWdubWVudCA9IGdldFJhbmRvbUFsaWdubWVudCgpO1xuICAgICAgICAgICAgb3JpZ2luID0gZ2V0UmFuZG9tT3JpZ2luKGFsaWdubWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gUmVjZWl2ZXMgYW4gYXR0YWNrIGFuZCBjYWxjdWxhdGVzIHRoZSByZXN1bHRcbiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IC0gJ2hpdCcgb3IgJ21pc3MnIGRlcGVuZGluZyBvbiByZXN1bHQsIGFuZCB0aGUgY29vcmRpbmF0ZXNcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrU3F1YXJlKHJvdywgY29sKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gXCJJbnZhbGlkIGxvY2F0aW9uXCI7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PT0gbnVsbCkgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAnbWlzcyc7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9ICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5ib2FyZFtyb3ddW2NvbF0sIFtyb3csIGNvbF1dO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0FsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlZFNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBwbGFjZWRTaGlwcyxcbiAgICAgICAgY2hlY2tTcXVhcmUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5LFxuICAgICAgICBwbGFjZVNoaXBSYW5kb21seSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tBbGxTaGlwc1N1bmtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5mdW5jdGlvbiBQbGF5ZXIocGxheWVyTmFtZSwgcGxheWVyTnVtYmVyKSB7XG4gICAgbGV0IG5hbWUgPSB0eXBlb2YgcGxheWVyTmFtZSA9PT0gJ3N0cmluZycgPyBwbGF5ZXJOYW1lIDogJ2JhdHRsZUJvdCc7XG4gICAgY29uc3QgbnVtYmVyID0gcGxheWVyTnVtYmVyO1xuICAgIGNvbnN0IGlzQUkgPSB0eXBlb2YgcGxheWVyTmFtZSAhPT0gJ3N0cmluZycgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgLy8gQ3JlYXRlIGEgMkQgYXJyYXkgb2YgYXZhaWxhYmxlIGF0dGFjayBjb29yZGluYXRlc1xuICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja3MgPSBjcmVhdGVBdHRhY2tBcnJheSgpO1xuICAgIGZ1bmN0aW9uIGF0dGFjayhlbmVteSwgcm93LCBjb2wpIHtcbiAgICAgICAgLy8gR2V0IHJvdyBhbmQgY29sIGZvciBhIHJhbmRvbSBBSSBhdHRhY2sgZnJvbSB0aGUgYXZhaWxhYmxlQXR0YWNrcyBhcnJheVxuICAgICAgICBpZiAoaXNBSSkge1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZUF0dGFja3MubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05vIHNxdWFyZXMgdG8gYXR0YWNrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhcnJheVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja3MubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBhcnJheUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUF0dGFja3NbYXJyYXlSb3ddLmxlbmd0aCk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHNxdWFyZSBmcm9tIHRoZSBhdmFpbGFibGVBdHRhY2tzIGFycmF5ICYgZ2V0IHRoZSBjb29yZGluYXRlc1xuICAgICAgICAgICAgbGV0IGF0dGFja0Nvb3JkcyA9IGF2YWlsYWJsZUF0dGFja3NbYXJyYXlSb3ddLnNwbGljZShhcnJheUNvbCwgMSlbMF07XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlQXR0YWNrc1thcnJheVJvd10ubGVuZ3RoID09PSAwKSBhdmFpbGFibGVBdHRhY2tzLnNwbGljZShhcnJheVJvdywgMSk7XG4gICAgICAgICAgICBbcm93LCBjb2xdID0gYXR0YWNrQ29vcmRzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybiB0aGUgJ2hpdCcgb3IgJ21pc3MnIHJlc3VsdCBvZiB0aGUgYXR0YWNrXG4gICAgICAgIHJldHVybiBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG51bWJlcixcbiAgICAgICAgaXNBSSxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBhdHRhY2tcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dGFja0FycmF5KCkge1xuICAgIGNvbnN0IGF0dGFja0FycmF5ID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIHJvd0FycmF5LnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNrQXJyYXkucHVzaChyb3dBcnJheSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImZ1bmN0aW9uIFNoaXAobCl7XG4gICAgY29uc3QgbGVuZ3RoID0gbDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgZnVuY3Rpb24gaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N1bmsoKXtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHMsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvZG9tL2RvbUNvbnRyb2xsZXInXG5cbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyBteUljb24uc3JjID0gSWNvbjtcbi8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=