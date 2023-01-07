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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-height: 100px;\n    --board-size: 320px;\n\n    --background-color: rgb(240, 240, 240);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    /* width: 100vw; */\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    /* max-width: 100%; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    /* display: contents; */\n    /* width: fit-content; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    /* padding-top: 20px; */\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 100;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.setup-ship-cell {\n    width: 30.2px;\n    height: 30.2px;\n    background-color: var(--cell-hover-color);\n    border: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    width: var(--board-size);\n    height: var(--board-size);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-drag-over {\n    border-width: 2px;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n:root {\n    --header-height: 100px;\n    --board-size: 320px;\n\n    --background-color: rgb(240, 240, 240);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    /* width: 100vw; */\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    /* max-width: 100%; */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    /* display: contents; */\n    /* width: fit-content; */\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    /* padding-top: 20px; */\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 100;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.setup-ship-cell {\n    width: 30.2px;\n    height: 30.2px;\n    background-color: var(--cell-hover-color);\n    border: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    width: var(--board-size);\n    height: var(--board-size);\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-drag-over {\n    border-width: 2px;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _shipTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shipTypes */ "./src/modules/shipTypes.js");
/* harmony import */ var _draggableShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draggableShip */ "./src/modules/dom/draggableShip.js");






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

    const ships = setupShips.querySelectorAll('.setup-ship-box');
    console.log(ships)

    const randomShipsButton = setupShips.querySelector('.setup-button-random');
    randomShipsButton.addEventListener('click', function(event){
        randomizeFleet(player, setupBoard)
    });
    
    gameContainer.append(setupBoard, setupShips);
}

function drawSetupBoard(player) {
    // placeholder that just draws an empty grid
    const setupBoard = drawBoardContainer(player)
    const setupCells = setupBoard.querySelectorAll('.cell')
    setupCells.forEach(cell => {
        cell.player = player;
        cell.board = setupBoard.querySelector('div');
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);
    })
    return setupBoard;
}

function drawSetupShips(player) {
    const setupShipsContainer = document.createElement('div');
    setupShipsContainer.classList.add('setup-ships-container');
    const setupShipsTitle = document.createElement('h3');
    setupShipsTitle.textContent = 'place your ships:';
    const setupShipsOptions = document.createElement('div');
    setupShipsOptions.classList.add('setup-ships-options');
    const startGame = document.createElement('button');
    startGame.classList.add('setup-button-start');
    startGame.textContent = 'TO BATTLE!';
    const randomShips = document.createElement('button');
    randomShips.classList.add('setup-button-random');
    randomShips.textContent = 'randomize';
    setupShipsOptions.append(startGame, randomShips);
    const shipList = document.createElement('div');
    for (let ship in _shipTypes__WEBPACK_IMPORTED_MODULE_3__["default"]){
        shipList.appendChild(drawShip(_shipTypes__WEBPACK_IMPORTED_MODULE_3__["default"][ship]));
    }
    setupShipsContainer.append(setupShipsTitle, shipList, setupShipsOptions);
    return setupShipsContainer;
}

function drawShip(ship) {
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('setup-ship');
    const shipBox = document.createElement('div');
    shipBox.id = ship.name;
    shipBox.dataset.length = ship.length;
    shipBox.classList.add('setup-ship-box');
    for (let i = 0; i < ship.length; i++) {
        const shipCell = document.createElement('div');
        shipCell.classList.add('setup-ship-cell');
        shipBox.appendChild(shipCell);
    }
    shipBox.draggable = true;

    shipBox.addEventListener('dragstart', dragStart);

    const shipName = document.createElement('p');
    shipName.textContent = ship.name;
    shipContainer.append(shipName, shipBox);
    return shipContainer;
}



function dragStart(event){
    event.dataTransfer.setData(`${event.target.id}`, true);
    setTimeout(() => {
        event.target.classList.add('setup-ship-hide');
    }, 0)
}

function dragEnter(event){
    event.preventDefault();
    const type = event.dataTransfer.types[0];
    const player = event.target.player;
    const board = event.target.board;
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    console.log(player)
    const shipSquares = player.gameboard.checkValidPlacement(_shipTypes__WEBPACK_IMPORTED_MODULE_3__["default"][type].length, [row, col], 'horizontal')
    shipSquares.squares = shipSquares.squares.filter(square => {
        return player.gameboard.checkSquare(square[0], square[1]) !== undefined;
    })
    shipSquares.squares.forEach(square => {
        const cell = board.querySelector(`[data-row='${square[0]}'][data-col='${square[1]}']`);
        cell.classList.add('cell-drag-over');
        if (shipSquares.isValid) cell.classList.add('cell-drag-valid');
        else cell.classList.add('cell-drag-invalid');
    })
    event.target.classList.add('cell-drag-over');
}

function dragOver(event){
    event.preventDefault();
}

function dragLeave(event){
    const leftCells = document.querySelectorAll('.cell-drag-over');
    leftCells.forEach(cell => {
        cell.classList.remove('cell-drag-over', 'cell-drag-valid', 'cell-drag-invalid');
    })
}

function drop(event){
    const leftCells = document.querySelectorAll('.cell-drag-over');
    leftCells.forEach(cell => {
        cell.classList.remove('cell-drag-over', 'cell-drag-valid', 'cell-drag-invalid');
    })

    const type = event.dataTransfer.types[0];
    const shipElement = document.getElementById(type);
    event.target.appendChild(shipElement)
    shipElement.classList.remove('setup-ship-hide');
    shipElement.classList.add('setup-ship-dropped');
    const player = event.target.player;
    const board = event.target.board;
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    player.gameboard.placeShip(shipElement.id, [row,col], 'horizontal')
    // populateBoard(player, board)
}

//
/// REMOVE SHIP FUNCTION ON PICKING UP PLACED SHIP
// I.E., IF CLASS HAS DROPPED, THEN REMOVE THE SHIP
//
//
//
// THEN FIGURE OUT HOW TO DO ROTATION
//
// THEN ADD IN GHOST SHIP SO IS OBVIOUS TO PLAYER WHAT SHIPS ARE LEFT TO PLACE AND WHAT HAS BEEN PLACED
///
//
//
///
//

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

/***/ "./src/modules/dom/draggableShip.js":
/*!******************************************!*\
  !*** ./src/modules/dom/draggableShip.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeDraggableShip(shipObject){
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('setup-ship');



    const ship = drawShip(shipObject);
    
    const shipName = document.createElement('p');
    shipName.textContent = shipObject.type;
    shipContainer.append(ship, shipName);

    return shipContainer;
}


function drawShip(shipObject) {
    const ship = document.createElement('div');
    ship.classList.add('setup-ship-box');
    for (let i = 0; i < shipObject.length; i++) {
        const shipCell = document.createElement('div');
        shipCell.classList.add('setup-ship-cell');
        ship.appendChild(shipCell);
    }
    ship['draggable'] = true;
    
    return ship;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeDraggableShip);

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
/* harmony import */ var _shipTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipTypes */ "./src/modules/shipTypes.js");



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
    function clearBoard(board) {
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                board[row][col] = null;
            }
        }
    }
    function clearFleet(fleet) {
        while (fleet.length > 0) fleet.pop();
    }
    // Return the value of a square in the gameboard, and undefined if outside the gameboard extents
    function checkSquare(row, col) {
        if (row < 0 || col < 0) return undefined;
        if (row > 9 || col > 9) return undefined;
        else return this.board[row][col];
    }
    function checkValidPlacement(shipLength, origin, alignment) {
        // Create an array of ship placement squares
        let [row, col] = origin;
        let shipSquares = [];
        for (let i = 0; i < shipLength; i++) {
            shipSquares.push([row, col]);
            alignment === 'horizontal' ? col++ : row++;
        }
        // If every placement square is null, validPlacement is an array of the valid squares
        const validPlacement = shipSquares.every(square => {
            let [row, col] = square;
            if (this.checkSquare(row, col) === undefined) return false;
            return this.board[row][col] === null;
        })
        // Return an dobject containing the validity and the squares processed
        return {
            isValid: validPlacement,
            squares: shipSquares
        }
    }
    function placeShip(shipType, origin, alignment) {
        const shipLength = _shipTypes__WEBPACK_IMPORTED_MODULE_1__["default"][shipType].length;
        const shipSquares = this.checkValidPlacement(shipLength, origin, alignment);
        // If shipSquares is a valid array, place the ship on all of those squares
        if (shipSquares.isValid) {
            const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipType);
            ship.squares = shipSquares.squares;
            ship.alignment = alignment;
            shipSquares.squares.forEach(square => {
                let [row, col] = square;
                this.board[row][col] = ship;
            })
            placedShips.push(ship);
            return ship;
        } else return "Cannot place ship in that location";
    }
    function removeShip(squares){
        squares.forEach(square => {
            const [row, col] = square;
            this.board[row][col] = null;
        })
    }
    function placeAllShipsRandomly() {
        clearBoard(this.board);
        clearFleet(this.placedShips);
        for (let ship in _shipTypes__WEBPACK_IMPORTED_MODULE_1__["default"]){
            let result = this.placeShipRandomly(ship);
            while (typeof result !== 'object' || result === null) {
                result = this.placeShipRandomly(ship);
            }
        }
    }
    // Take a ship and determine a random alignment and origin
    // Keep trying to place ship until an allowed location is found
    function placeShipRandomly(shipType) {
        const shipLength = _shipTypes__WEBPACK_IMPORTED_MODULE_1__["default"][shipType].length;
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
        let shipSquares = this.checkValidPlacement(shipLength, origin, alignment);
        // let result = this.placeShip(shipLength, origin, alignment);
        while (!shipSquares.isValid) {
            alignment = getRandomAlignment();
            origin = getRandomOrigin(alignment);
            shipSquares = this.checkValidPlacement(shipLength, origin, alignment);
        }
        return this.placeShip(shipType, origin, alignment);
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
        checkValidPlacement,
        placeShip,
        removeShip,
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
/* harmony import */ var _shipTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipTypes */ "./src/modules/shipTypes.js");


function Ship(shipType){
    const type = shipType;
    const length = _shipTypes__WEBPACK_IMPORTED_MODULE_0__["default"][shipType].length;
    let hits = 0;
    let squares;
    let alignment;
    function hit(){
        this.hits++;
    }
    function isSunk(){
        if (this.hits >= this.length) return true;
        else return false;
    }
    return {
        type,
        length,
        hits,
        squares,
        alignment,
        hit,
        isSunk
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/modules/shipTypes.js":
/*!**********************************!*\
  !*** ./src/modules/shipTypes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipTypes = {
    carrier: {
        id: 1,
        name: 'carrier',
        length: 5
    },
    battleship: {
        id: 2,
        name: 'battleship',
        length: 4
    },
    destroyer: {
        id: 3,
        name: 'destroyer',
        length: 3
    },
    submarine: {
        id: 4,
        name: 'submarine',
        length: 3
    },
    patrol: {
        id: 5,
        name: 'patrol',
        length: 2
    },
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipTypes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLG1IQUFtSCxJQUFJLElBQUksSUFBSSxnQ0FBZ0MsSUFBSSxvQkFBb0IsV0FBVyw2QkFBNkIsMEJBQTBCLCtDQUErQyx1Q0FBdUMsNkNBQTZDLDJDQUEyQyx1Q0FBdUMsc0NBQXNDLHVDQUF1Qyx1Q0FBdUMseUNBQXlDLDRDQUE0Qyx5Q0FBeUMsK0NBQStDLGtDQUFrQyxHQUFHLGdCQUFnQiwwQ0FBMEMsb0NBQW9DLDBDQUEwQyw4Q0FBOEMsdUNBQXVDLG9DQUFvQyxxQ0FBcUMscUNBQXFDLDRDQUE0Qyw0Q0FBNEMsc0NBQXNDLDRDQUE0QyxrQ0FBa0MsR0FBRyw4QkFBOEIsNkJBQTZCLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLGdEQUFnRCw0Q0FBNEMsb0NBQW9DLEdBQUcsVUFBVSxvQkFBb0IsdUJBQXVCLHNCQUFzQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxTQUFTLFFBQVEsZ0JBQWdCLEdBQUcsMEJBQTBCLDBCQUEwQixzQkFBc0IscUNBQXFDLDBCQUEwQixHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQiwwQkFBMEIsR0FBRyxZQUFZLGdEQUFnRCxvQ0FBb0Msb0JBQW9CLDhCQUE4QiwwQkFBMEIsK0NBQStDLHVCQUF1Qiw0Q0FBNEMsR0FBRyxtQkFBbUIsbURBQW1ELEdBQUcsMkJBQTJCLG9CQUFvQiwwQkFBMEIsNEJBQTRCLHNEQUFzRCxPQUFPLEdBQUcscUJBQXFCLDRCQUE0QiwrQkFBK0Isc0JBQXNCLDhCQUE4Qiw0QkFBNEIsc0JBQXNCLGdCQUFnQixHQUFHLGdEQUFnRCxvQkFBb0IsNkJBQTZCLHFDQUFxQyw0QkFBNEIsaUNBQWlDLDZDQUE2Qyx3QkFBd0IsR0FBRywwQkFBMEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsR0FBRyxpQkFBaUIsbUJBQW1CLG9CQUFvQixrQ0FBa0MscUNBQXFDLDBCQUEwQixHQUFHLG1CQUFtQixnQkFBZ0IsNEJBQTRCLEdBQUcscUJBQXFCLDJCQUEyQixlQUFlLHlCQUF5QixtQkFBbUIsR0FBRywwQkFBMEIseUNBQXlDLG1CQUFtQixHQUFHLHlCQUF5Qix5QkFBeUIsaUJBQWlCLGdCQUFnQixHQUFHLHNCQUFzQixvQkFBb0IscUJBQXFCLGdEQUFnRCw4QkFBOEIsR0FBRywwQkFBMEIsb0JBQW9CLHFDQUFxQyxHQUFHLGdEQUFnRCxtQkFBbUIsbUJBQW1CLEdBQUcseUJBQXlCLHVCQUF1QixzQkFBc0IsMkNBQTJDLHNDQUFzQyxHQUFHLGtDQUFrQyxtQkFBbUIsMkJBQTJCLEdBQUcsMkJBQTJCLGlDQUFpQyxnQ0FBZ0MsK0NBQStDLE9BQU8sR0FBRyw2Q0FBNkMsNEJBQTRCLEdBQUcsaUNBQWlDLG9CQUFvQiwrQkFBK0IsZ0NBQWdDLDBDQUEwQyw2Q0FBNkMsZUFBZSxHQUFHLFdBQVcseUJBQXlCLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQiwwQ0FBMEMsaURBQWlELEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQiwwQ0FBMEMsR0FBRyx3QkFBd0IseUNBQXlDLEdBQUcsdUZBQXVGLHlFQUF5RSxvREFBb0QsT0FBTyxHQUFHLGdCQUFnQiwwQ0FBMEMsR0FBRyxlQUFlLHlDQUF5QyxHQUFHLHNCQUFzQixtQkFBbUIsbUJBQW1CLHdCQUF3QiwwQkFBMEIsR0FBRyxnQkFBZ0IsMENBQTBDLEdBQUcsdUJBQXVCLG1CQUFtQixtQkFBbUIsMEJBQTBCLEdBQUcsMEJBQTBCLG9CQUFvQiwwQkFBMEIsOEJBQThCLHlCQUF5QixnQkFBZ0Isc0JBQXNCLEdBQUcsa0JBQWtCLDRCQUE0QixHQUFHLGNBQWMsdUJBQXVCLHdCQUF3QixHQUFHLGNBQWMsb0NBQW9DLHNDQUFzQyxHQUFHLDJCQUEyQiwwREFBMEQsMEJBQTBCLGdDQUFnQywwQ0FBMEMsT0FBTyxHQUFHLG1CQUFtQjtBQUMzZ2Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjJCO0FBQ1k7QUFDQTtBQUNGO0FBQ1c7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQWU7QUFDOUIsZUFBZSxtREFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsaURBQUk7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBUztBQUM5QixzQ0FBc0Msa0RBQVM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsa0RBQVM7QUFDdEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVEQUF1RCxVQUFVLGVBQWUsVUFBVTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkJBQTJCO0FBQzVELCtCQUErQiwyQkFBMkI7QUFDMUQsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEMsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0I7QUFDaEUsMENBQTBDLHNCQUFzQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxzQkFBc0IsZUFBZSxZQUFZLGVBQWUsWUFBWTtBQUNySTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEMsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQSwyREFBMkQsSUFBSSxlQUFlLElBQUk7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcFVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUM3QmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUN6RDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hETztBQUNVOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7QUFDcEMsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDN0lZOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q2U7O0FBRXBDO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQzFCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7OztVQzdCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2RyYWdnYWJsZVNoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBUeXBlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tYm9hcmQtc2l6ZTogMzIwcHg7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICAtLWNlbGwtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1jZWxsLWhvdmVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1zaGlwLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICAgIC0taGl0LWNvbG9yOiByZ2IoMjA2LCAxNjksIDEzNCk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDE2MSwgMjE2LCAxNjEpO1xcbiAgICAtLXN1bmstY29sb3I6IHJnYigyMDYsIDEzNCwgMTM0KTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigxNTUsIDk5LCA2MSk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDUyLCAxMDksIDUyKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMTU1LCA2MSwgNjEpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDE2MCwgMTYwLCAxNjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIwLCAyMCwgMjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcGFkZGluZzogMCA1JTtcXG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge31cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxuICAgIH1cXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgLyogZGlzcGxheTogY29udGVudHM7ICovXFxuICAgIC8qIHdpZHRoOiBmaXQtY29udGVudDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi8qIFBsYXllciBzZXR1cCAqL1xcbi5zZXR1cC1zaGlwcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIHBhZGRpbmctdG9wOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogdmFyKC0tYm9hcmQtc2l6ZSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1ib2FyZC1zaXplKSArIDI1cHgpO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnNldHVwLXNoaXAtc2hpcGxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zZXR1cC1zaGlwLWJveCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBnYXA6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5zZXR1cC1zaGlwLWhpZGUgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1kcm9wcGVkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICB0b3A6IC0xcHg7XFxufVxcblxcbi5zZXR1cC1zaGlwLWNlbGwge1xcbiAgICB3aWR0aDogMzAuMnB4O1xcbiAgICBoZWlnaHQ6IDMwLjJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2V0dXAtc2hpcHMtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydCxcXG4uc2V0dXAtYnV0dG9uLXJhbmRvbSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxODksIDEyOSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQtZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAuc2V0dXAtYnV0dG9uLXN0YXJ0OmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDExNiwgMTE2KTtcXG4gICAgfVxcbn1cXG5cXG4vKiBQbGF5ZXIgc2VjdGlvbnMgKi9cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKiBQbGF5ZXIgYm9hcmRzICovXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IHZhcigtLWJvYXJkLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWJvYXJkLXNpemUpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1kcmFnLW92ZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLmNlbGwtZHJhZy12YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1kcmFnLWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4vKiBPbmx5IGFsbG93IHZpc2libGUgaG92ZXIgZm9yIG9wcG9zaW5nIHBsYXllcidzIGJvYXJkICovXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgLmNlbGw6bm90KFtkYXRhLXBsYXllcj0nMSddKTpub3QoLmNlbGwtaGl0KTpub3QoLmNlbGwtbWlzcyk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+Kclic7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtbWlzczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4pePJztcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDAgMzJweDtcXG59XFxuXFxuI2Zvb3Rlci1saW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5mb290ZXIgaSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcblxcbiAgICAjZm9vdGVyLWxpbms6aG92ZXIsXFxuICAgICNmb290ZXItZGFyay1tb2RlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQywrQkFBK0I7SUFD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QUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBOztJQUVJOztRQUVJLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsK0JBQStCO0lBQ25DO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWJvYXJkLXNpemU6IDMyMHB4O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgLS1jZWxsLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tY2VsbC1ob3Zlci1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxuICAgIC0tc2hpcC1jb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgICAtLWhpdC1jb2xvcjogcmdiKDIwNiwgMTY5LCAxMzQpO1xcbiAgICAtLW1pc3MtY29sb3I6IHJnYigxNjEsIDIxNiwgMTYxKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMjA2LCAxMzQsIDEzNCk7XFxuICAgIC0tdGV4dC1jb2xvci1tYWluOiByZ2IoNDAsIDQwLCA0MCk7XFxuICAgIC0tdGV4dC1jb2xvci1ncmV5OiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWhvdmVyOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWFjdGl2ZTogZ3JleTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xcbiAgICAtLWNlbGwtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS1jZWxsLWhvdmVyLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxuICAgIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gICAgLS1zaGlwLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxuICAgIC0taGl0LWNvbG9yOiByZ2IoMTU1LCA5OSwgNjEpO1xcbiAgICAtLW1pc3MtY29sb3I6IHJnYig1MiwgMTA5LCA1Mik7XFxuICAgIC0tc3Vuay1jb2xvcjogcmdiKDE1NSwgNjEsIDYxKTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxNjAsIDE2MCwgMTYwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMCwgMjAsIDIwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHBhZGRpbmc6IDAgNSU7XFxuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHt9XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3ItaG92ZXIpO1xcbiAgICB9XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIC8qIGRpc3BsYXk6IGNvbnRlbnRzOyAqL1xcbiAgICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4vKiBQbGF5ZXIgc2V0dXAgKi9cXG4uc2V0dXAtc2hpcHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAvKiBwYWRkaW5nLXRvcDogMjBweDsgKi9cXG4gICAgd2lkdGg6IHZhcigtLWJvYXJkLXNpemUpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tYm9hcmQtc2l6ZSkgKyAyNXB4KTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5zZXR1cC1zaGlwLXNoaXBsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZXR1cC1zaGlwIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1ib3gge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1oaWRlIGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnNldHVwLXNoaXAtZHJvcHBlZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgdG9wOiAtMXB4O1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1jZWxsIHtcXG4gICAgd2lkdGg6IDMwLjJweDtcXG4gICAgaGVpZ2h0OiAzMC4ycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNldHVwLXNoaXBzLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQsXFxuLnNldHVwLWJ1dHRvbi1yYW5kb20ge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMzZweDtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTg5LCAxMjkpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0LWRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydDpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMTYsIDExNik7XFxuICAgIH1cXG59XFxuXFxuLyogUGxheWVyIHNlY3Rpb25zICovXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogUGxheWVyIGJvYXJkcyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtZHJhZy1vdmVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbi5jZWxsLWRyYWctdmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtZHJhZy1pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG59XFxuXFxuLyogT25seSBhbGxvdyB2aXNpYmxlIGhvdmVyIGZvciBvcHBvc2luZyBwbGF5ZXIncyBib2FyZCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIC5jZWxsOm5vdChbZGF0YS1wbGF5ZXI9JzEnXSk6bm90KC5jZWxsLWhpdCk6bm90KC5jZWxsLW1pc3MpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbiAgICB9XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtaGl0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfinJYnO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG5cXG4uY2VsbC1taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi5jZWxsLW1pc3M6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+KXjyc7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDMycHg7XFxufVxcblxcbiNmb290ZXItbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZm9vdGVyIGkge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG5cXG4gICAgI2Zvb3Rlci1saW5rOmhvdmVyLFxcbiAgICAjZm9vdGVyLWRhcmstbW9kZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUnO1xuaW1wb3J0IGNyZWF0ZUhlYWRlckJveCBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgY3JlYXRlRm9vdGVyQm94IGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBzaGlwVHlwZXMgZnJvbSAnLi4vc2hpcFR5cGVzJztcbmltcG9ydCBtYWtlRHJhZ2dhYmxlU2hpcCBmcm9tICcuL2RyYWdnYWJsZVNoaXAnO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFwcC5pZCA9ICdhcHAnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xuY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyQm94KCk7XG5jb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXJCb3goKTtcbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmdhbWVDb250YWluZXIuaWQgPSAnZ2FtZS1jb250YWluZXInO1xuYXBwLmFwcGVuZENoaWxkKGhlYWRlcik7XG5hcHAuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG5hcHAuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbi8vIGRyYXdHYW1lKCdCb2InLCBmYWxzZSlcbi8vIGRyYXdHYW1lKCdib2InLCB0cnVlKVxubmV3R2FtZSgpO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMil7XG4gICAgZ2FtZS5uZXdHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIGRyYXdHYW1lKCk7XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUoKXtcbiAgICBjb25zdCBuZXdQbGF5ZXIxID0gZ2FtZS5jcmVhdGVQbGF5ZXIoJ015c3RlcmlvJywgMSk7XG4gICAgY29uc3QgbmV3UGxheWVyMiA9IGdhbWUuY3JlYXRlUGxheWVyKGZhbHNlLCAyKTtcbiAgICBuZXdQbGF5ZXIyLmdhbWVib2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICBkcmF3U2V0dXAobmV3UGxheWVyMSk7XG4gICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwLWJ1dHRvbi1zdGFydCcpO1xuICAgIHN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYgKG5ld1BsYXllcjEuZ2FtZWJvYXJkLnBsYWNlZFNoaXBzLmxlbmd0aCA9PT0gNSl7XG4gICAgICAgICAgICBzdGFydEdhbWUobmV3UGxheWVyMSwgbmV3UGxheWVyMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKGNvbnRhaW5lcil7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkcmF3R2FtZSgpIHtcbiAgICBjbGVhckNvbnRhaW5lcihnYW1lQ29udGFpbmVyKTtcbiAgICBjb25zdCBwbGF5ZXIxQm9hcmRDb250YWluZXIgPSBkcmF3Qm9hcmRDb250YWluZXIoZ2FtZS5wbGF5ZXIxKTtcbiAgICBjb25zdCBwbGF5ZXIyQm9hcmRDb250YWluZXIgPSBkcmF3Qm9hcmRDb250YWluZXIoZ2FtZS5wbGF5ZXIyKTtcbiAgICBwb3B1bGF0ZUJvYXJkKGdhbWUucGxheWVyMSwgcGxheWVyMUJvYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChwbGF5ZXIxQm9hcmRDb250YWluZXIsIHBsYXllcjJCb2FyZENvbnRhaW5lcik7XG5cbn1cblxuZnVuY3Rpb24gZHJhd1NldHVwKHBsYXllcil7XG4gICAgY2xlYXJDb250YWluZXIoZ2FtZUNvbnRhaW5lcik7XG4gICAgY29uc3Qgc2V0dXBCb2FyZCA9IGRyYXdTZXR1cEJvYXJkKHBsYXllcik7XG4gICAgY29uc3Qgc2V0dXBTaGlwcyA9IGRyYXdTZXR1cFNoaXBzKCk7XG5cbiAgICBjb25zdCBzaGlwcyA9IHNldHVwU2hpcHMucXVlcnlTZWxlY3RvckFsbCgnLnNldHVwLXNoaXAtYm94Jyk7XG4gICAgY29uc29sZS5sb2coc2hpcHMpXG5cbiAgICBjb25zdCByYW5kb21TaGlwc0J1dHRvbiA9IHNldHVwU2hpcHMucXVlcnlTZWxlY3RvcignLnNldHVwLWJ1dHRvbi1yYW5kb20nKTtcbiAgICByYW5kb21TaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgcmFuZG9taXplRmxlZXQocGxheWVyLCBzZXR1cEJvYXJkKVxuICAgIH0pO1xuICAgIFxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kKHNldHVwQm9hcmQsIHNldHVwU2hpcHMpO1xufVxuXG5mdW5jdGlvbiBkcmF3U2V0dXBCb2FyZChwbGF5ZXIpIHtcbiAgICAvLyBwbGFjZWhvbGRlciB0aGF0IGp1c3QgZHJhd3MgYW4gZW1wdHkgZ3JpZFxuICAgIGNvbnN0IHNldHVwQm9hcmQgPSBkcmF3Qm9hcmRDb250YWluZXIocGxheWVyKVxuICAgIGNvbnN0IHNldHVwQ2VsbHMgPSBzZXR1cEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJylcbiAgICBzZXR1cENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwucGxheWVyID0gcGxheWVyO1xuICAgICAgICBjZWxsLmJvYXJkID0gc2V0dXBCb2FyZC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xuICAgIH0pXG4gICAgcmV0dXJuIHNldHVwQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cFNoaXBzKHBsYXllcikge1xuICAgIGNvbnN0IHNldHVwU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR1cFNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNldHVwU2hpcHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2V0dXBTaGlwc1RpdGxlLnRleHRDb250ZW50ID0gJ3BsYWNlIHlvdXIgc2hpcHM6JztcbiAgICBjb25zdCBzZXR1cFNoaXBzT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHVwU2hpcHNPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLW9wdGlvbnMnKTtcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXN0YXJ0Jyk7XG4gICAgc3RhcnRHYW1lLnRleHRDb250ZW50ID0gJ1RPIEJBVFRMRSEnO1xuICAgIGNvbnN0IHJhbmRvbVNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmFuZG9tU2hpcHMuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXJhbmRvbScpO1xuICAgIHJhbmRvbVNoaXBzLnRleHRDb250ZW50ID0gJ3JhbmRvbWl6ZSc7XG4gICAgc2V0dXBTaGlwc09wdGlvbnMuYXBwZW5kKHN0YXJ0R2FtZSwgcmFuZG9tU2hpcHMpO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwVHlwZXMpe1xuICAgICAgICBzaGlwTGlzdC5hcHBlbmRDaGlsZChkcmF3U2hpcChzaGlwVHlwZXNbc2hpcF0pKTtcbiAgICB9XG4gICAgc2V0dXBTaGlwc0NvbnRhaW5lci5hcHBlbmQoc2V0dXBTaGlwc1RpdGxlLCBzaGlwTGlzdCwgc2V0dXBTaGlwc09wdGlvbnMpO1xuICAgIHJldHVybiBzZXR1cFNoaXBzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcCcpO1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwQm94LmlkID0gc2hpcC5uYW1lO1xuICAgIHNoaXBCb3guZGF0YXNldC5sZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICBzaGlwQm94LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtYm94Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtY2VsbCcpO1xuICAgICAgICBzaGlwQm94LmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcbiAgICB9XG4gICAgc2hpcEJveC5kcmFnZ2FibGUgPSB0cnVlO1xuXG4gICAgc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuXG4gICAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2hpcE5hbWUudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmQoc2hpcE5hbWUsIHNoaXBCb3gpO1xuICAgIHJldHVybiBzaGlwQ29udGFpbmVyO1xufVxuXG5cblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGV2ZW50KXtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShgJHtldmVudC50YXJnZXQuaWR9YCwgdHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLWhpZGUnKTtcbiAgICB9LCAwKVxufVxuXG5mdW5jdGlvbiBkcmFnRW50ZXIoZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdHlwZSA9IGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXTtcbiAgICBjb25zdCBwbGF5ZXIgPSBldmVudC50YXJnZXQucGxheWVyO1xuICAgIGNvbnN0IGJvYXJkID0gZXZlbnQudGFyZ2V0LmJvYXJkO1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIpXG4gICAgY29uc3Qgc2hpcFNxdWFyZXMgPSBwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcFR5cGVzW3R5cGVdLmxlbmd0aCwgW3JvdywgY29sXSwgJ2hvcml6b250YWwnKVxuICAgIHNoaXBTcXVhcmVzLnNxdWFyZXMgPSBzaGlwU3F1YXJlcy5zcXVhcmVzLmZpbHRlcihzcXVhcmUgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyLmdhbWVib2FyZC5jaGVja1NxdWFyZShzcXVhcmVbMF0sIHNxdWFyZVsxXSkgIT09IHVuZGVmaW5lZDtcbiAgICB9KVxuICAgIHNoaXBTcXVhcmVzLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3NxdWFyZVswXX0nXVtkYXRhLWNvbD0nJHtzcXVhcmVbMV19J11gKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLWRyYWctb3ZlcicpO1xuICAgICAgICBpZiAoc2hpcFNxdWFyZXMuaXNWYWxpZCkgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLWRyYWctdmFsaWQnKTtcbiAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtZHJhZy1pbnZhbGlkJyk7XG4gICAgfSlcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2VsbC1kcmFnLW92ZXInKTtcbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdMZWF2ZShldmVudCl7XG4gICAgY29uc3QgbGVmdENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwtZHJhZy1vdmVyJyk7XG4gICAgbGVmdENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbC1kcmFnLW92ZXInLCAnY2VsbC1kcmFnLXZhbGlkJywgJ2NlbGwtZHJhZy1pbnZhbGlkJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZHJvcChldmVudCl7XG4gICAgY29uc3QgbGVmdENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwtZHJhZy1vdmVyJyk7XG4gICAgbGVmdENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbC1kcmFnLW92ZXInLCAnY2VsbC1kcmFnLXZhbGlkJywgJ2NlbGwtZHJhZy1pbnZhbGlkJyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHR5cGUgPSBldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF07XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0eXBlKTtcbiAgICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpXG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC1oaWRlJyk7XG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1kcm9wcGVkJyk7XG4gICAgY29uc3QgcGxheWVyID0gZXZlbnQudGFyZ2V0LnBsYXllcjtcbiAgICBjb25zdCBib2FyZCA9IGV2ZW50LnRhcmdldC5ib2FyZDtcbiAgICBjb25zdCByb3cgPSBldmVudC50YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgY29uc3QgY29sID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBFbGVtZW50LmlkLCBbcm93LGNvbF0sICdob3Jpem9udGFsJylcbiAgICAvLyBwb3B1bGF0ZUJvYXJkKHBsYXllciwgYm9hcmQpXG59XG5cbi8vXG4vLy8gUkVNT1ZFIFNISVAgRlVOQ1RJT04gT04gUElDS0lORyBVUCBQTEFDRUQgU0hJUFxuLy8gSS5FLiwgSUYgQ0xBU1MgSEFTIERST1BQRUQsIFRIRU4gUkVNT1ZFIFRIRSBTSElQXG4vL1xuLy9cbi8vXG4vLyBUSEVOIEZJR1VSRSBPVVQgSE9XIFRPIERPIFJPVEFUSU9OXG4vL1xuLy8gVEhFTiBBREQgSU4gR0hPU1QgU0hJUCBTTyBJUyBPQlZJT1VTIFRPIFBMQVlFUiBXSEFUIFNISVBTIEFSRSBMRUZUIFRPIFBMQUNFIEFORCBXSEFUIEhBUyBCRUVOIFBMQUNFRFxuLy8vXG4vL1xuLy9cbi8vL1xuLy9cblxuZnVuY3Rpb24gcmFuZG9taXplRmxlZXQocGxheWVyLCBib2FyZCl7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICBwb3B1bGF0ZUJvYXJkKHBsYXllciwgYm9hcmQpO1xufVxuXG4vL1xuLy8gXG4vLyBJRiBHQU1FIENPTlRBSU5FUiBIRUlHSFQgSVMgQklHR0VSIFRIQU4gNTAwUFggKEkuRS4sIFdSQVBQRUQpLCBBREpVU1QgSEVBREVSIFRPIFNVSVRcbi8vIFRISVMgSVMgQSBWRVJZIFNDVUZGRUQgU09MVVRJT04gQU5EIFBPUkJBQkxZIEJSRUFLUyBXSEVOIFBMQUNJTkcgU0hJUFMgT04gU0lOR0xFIEdSSUQgVklFV1xuLy9cbi8vXG5jb25zdCBnYW1lU2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJ5ID0+IHtcbiAgICBpZiAoZW50cnlbMF0uY29udGVudFJlY3QuaGVpZ2h0ID4gNTAwKSBoZWFkZXIuc3R5bGUud2lkdGggPSAnMzIwcHgnO1xuICAgIGVsc2UgaGVhZGVyLnN0eWxlLndpZHRoID0gYCR7ZW50cnlbMF0uY29udGVudFJlY3Qud2lkdGh9cHhgO1xuICAgIC8vIGhlYWRlci5zdHlsZS53aWR0aCA9IGAke2VudHJ5WzBdLmNvbnRlbnRSZWN0LndpZHRofXB4YDtcbn0pXG5cbmdhbWVTaXplT2JzZXJ2ZXIub2JzZXJ2ZShnYW1lQ29udGFpbmVyKTtcblxuLy9cbi8vXG4vL1xuLy9cblxuLy8gSG9sZCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIHBsYXllcidzIGJvYXJkIC0gbmFtZSwgYm9hcmQgYW5kIHNoaXBzIGxlZnRcbmZ1bmN0aW9uIGRyYXdCb2FyZENvbnRhaW5lcihwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIC8vIENBTiBUUklNIFRISVMgTEFURVIgUFJPQkFCTFlcbiAgICBpZiAocGxheWVyKSBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9J3MgZmxlZXRgO1xuICAgIGVsc2UgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9ICd5b3VyIGN1cnJlbnQgZmxlZXQnO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZHJhd0JvYXJkKHBsYXllcik7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kKHBsYXllck5hbWUsIHBsYXllckJvYXJkKTtcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXI7XG59XG5cbi8vIERyYXcgYSBncmlkIG9mIGNlbGxzIHdpdGggZGF0YSBhdHRyaWJ1dGVzIGZvciB0aGVpciBsb2NhdGlvbnNcbmZ1bmN0aW9uIGRyYXdCb2FyZChwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAvLyBDQU4gVFJJTSBUSElTIExBVEVSIFBST0JBQkxZXG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQucGxheWVyID0gcGxheWVyID8gcGxheWVyLm51bWJlciA6IDA7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGNvbDtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIE1BWSBORUVEIFRPIFJFVklTRVxuICAgICAgICAgICAgLy8gTkVFRCBUTyBBREQgRVZFTlQgTElTVEVORVJTIE9OTFkgRk9SIE9QUE9TSU5HIFBMQVlFUidTIEJPQVJEXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgaWYgKHBsYXllciAmJiBwbGF5ZXIuaXNBSSkgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckF0dGFjaywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbn1cblxuLy8gVXBvbiBjbGlja2luZyBhIGNlbGwsIGF0dGFjayB0aGUgcmVsZXZhbnQgc3F1YXJlLCBpZiBhbGxvd2VkXG5mdW5jdGlvbiBsaXN0ZW5Gb3JBdHRhY2soZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgZGVmZW5kaW5nUGxheWVyTnVtYmVyID0gY2VsbC5kYXRhc2V0LnBsYXllcjtcbiAgICBjb25zdCBhdHRhY2tpbmdQbGF5ZXJOdW1iZXIgPSBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPT09ICcxJyA/ICcyJyA6ICcxJztcbiAgICBjb25zdCBhdHRhY2tpbmdQbGF5ZXIgPSBnYW1lW2BwbGF5ZXIke2F0dGFja2luZ1BsYXllck51bWJlcn1gXTtcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXIgPSBnYW1lW2BwbGF5ZXIke2RlZmVuZGluZ1BsYXllck51bWJlcn1gXTtcbiAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyICE9PSBhdHRhY2tpbmdQbGF5ZXIpIHJldHVybjtcbiAgICBjb25zdCByb3cgPSBjZWxsLmRhdGFzZXQucm93O1xuICAgIGNvbnN0IGNvbCA9IGNlbGwuZGF0YXNldC5jb2w7XG4gICAgY29uc3QgcmVzdWx0ID0gYXR0YWNraW5nUGxheWVyLmF0dGFjayhkZWZlbmRpbmdQbGF5ZXIsIHJvdywgY29sKVswXTtcbiAgICBpZiAocmVzdWx0ID09PSAnaGl0JykgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLWhpdCcpO1xuICAgIGlmIChyZXN1bHQgPT09ICdtaXNzJykgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLW1pc3MnKTtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSlcbiAgICBuZXh0VHVybigpO1xufVxuXG4vLyBDYWxsIGFuIGF0dGFjayBmb3IgdGhlIEFJIGFuZCBtb2RpZnkgdGhlIHJlc3VsdGluZyBhdHRhY2tlZCBjZWxsXG5mdW5jdGlvbiBjYWxsQUlBdHRhY2soYWkpIHtcbiAgICBpZiAoYWkgIT09IGdhbWUuY3VycmVudFBsYXllcikgcmV0dXJuO1xuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllck51bWJlciA9IGdhbWUuZGVmZW5kaW5nUGxheWVyID09PSBnYW1lLnBsYXllcjEgPyAnMScgOiAnMic7XG4gICAgY29uc3QgW3Jlc3VsdCwgbG9jYXRpb25dID0gYWkuYXR0YWNrKGdhbWUuZGVmZW5kaW5nUGxheWVyKTtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPScke2RlZmVuZGluZ1BsYXllck51bWJlcn0nXVtkYXRhLXJvdz0nJHtsb2NhdGlvblswXX0nXVtkYXRhLWNvbD0nJHtsb2NhdGlvblsxXX0nXWApXG4gICAgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1oaXQnKTtcbiAgICBpZiAocmVzdWx0ID09PSAnbWlzcycpIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1taXNzJyk7XG4gICAgbmV4dFR1cm4oKTtcbn1cblxuLy8gSGFuZGxlIGVuZC1vZi10dXJuIGV2ZW50c1xuZnVuY3Rpb24gbmV4dFR1cm4oKSB7XG4gICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0dhbWVPdmVyKCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgICBhbGVydChgJHt3aW5uZXIubmFtZX0gd2luc2ApXG4gICAgICAgIHJldHVybiBlbmRHYW1lKHdpbm5lcik7XG4gICAgfTtcbiAgICBnYW1lLmNoYW5nZVR1cm4oKTtcbiAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyLmlzQUkpIHtcbiAgICAgICAgY2FsbEFJQXR0YWNrKGdhbWUuY3VycmVudFBsYXllcilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSkpO1xuICAgIC8vIGFubm91bmNlIHdpbm5lclxuICAgIC8vIHJldmVhbCBib3RoIGJvYXJkc1xufVxuXG4vLyBEcmF3IHRoZSBzaGlwcyB0byB0aGUgcGxheWVyJ3Mgb24tc2NyZWVuIGJvYXJkIHNvIHRoZXkgY2FuIHNlZSB0aGVpciBmbGVldFxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZChwbGF5ZXIsIGJvYXJkKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbF07XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbD0nJHtjb2x9J11gKTtcbiAgICAgICAgICAgIGlmIChzcXVhcmUgIT09IG51bGwgJiYgdHlwZW9mIHNxdWFyZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtc2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbC1zaGlwJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZnVuY3Rpb24gbWFrZURyYWdnYWJsZVNoaXAoc2hpcE9iamVjdCl7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcCcpO1xuXG5cblxuICAgIGNvbnN0IHNoaXAgPSBkcmF3U2hpcChzaGlwT2JqZWN0KTtcbiAgICBcbiAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzaGlwTmFtZS50ZXh0Q29udGVudCA9IHNoaXBPYmplY3QudHlwZTtcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZChzaGlwLCBzaGlwTmFtZSk7XG5cbiAgICByZXR1cm4gc2hpcENvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBkcmF3U2hpcChzaGlwT2JqZWN0KSB7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1ib3gnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBPYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1jZWxsJyk7XG4gICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuICAgIH1cbiAgICBzaGlwWydkcmFnZ2FibGUnXSA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHNoaXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VEcmFnZ2FibGVTaGlwOyIsIi8vIEZvb3RlciBsaW5rIGFuZCBsaWdodC9kYXJrIG1vZGUgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXV0aG9yTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWF1dGhvclwiKTtcbiAgICBhdXRob3JOYW1lLnRleHRDb250ZW50ID0gXCJDYXJsIE1hZHNlbiAyMDIyXCI7XG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGZvb3RlckxpbmsuaWQgPSBcImZvb3Rlci1saW5rXCI7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2Vsc2FlcG8vb2Rpbi1iYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGdpdEh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBnaXRIdWJMb2dvLmNsYXNzTGlzdC5hZGQoXCJmYS1icmFuZHNcIiwgXCJmYS1naXRodWJcIiwgXCJmYS14bFwiLCBcImZvb3Rlci1sb2dvXCIpO1xuICAgIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViTG9nbyk7XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdG9nZ2xlRGFya01vZGUoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgICBkYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtbW9vblwiKTtcbiAgICAgIGRhcmtNb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1zdW5cIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZURhcmtTdG9yYWdlKCkge1xuICAgICAgaWYgKGdldFRoZW1lKCkgPT09IFwiZGFya1wiKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBpc0Jyb3dzZXJEYXJrTW9kZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGRhcmtNb2RlQnV0dG9uLmlkID0gXCJmb290ZXItZGFyay1tb2RlXCI7XG4gICAgZGFya01vZGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtbW9vblwiLCBcImZhLXhsXCIpO1xuICAgIGRhcmtNb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlRGFya01vZGUoKTtcbiAgICAgIHRvZ2dsZURhcmtTdG9yYWdlKCk7XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKGdldFRoZW1lKCkgPT09IFwiZGFya1wiIHx8ICghZ2V0VGhlbWUoKSAmJiBpc0Jyb3dzZXJEYXJrTW9kZSgpKSkge1xuICAgICAgdG9nZ2xlRGFya01vZGUoKTtcbiAgICB9XG4gICAgXG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGF1dGhvck5hbWUpO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZGFya01vZGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGZvb3RlckJveDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyOyIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlckJveCgpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdiYXR0bGVzaGlwLic7XG5cbiAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3R2FtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctZ2FtZS1idXR0b24nKTtcbiAgICBuZXdHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ25ldyBnYW1lJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5ld0dhbWVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyQm94OyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5mdW5jdGlvbiBHYW1lKCl7XG4gICAgbGV0IHBsYXllcjE7XG4gICAgbGV0IHBsYXllcjI7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG4gICAgbGV0IGRlZmVuZGluZ1BsYXllcjtcbiAgICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSwgbnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIFBsYXllcihuYW1lLCBudW1iZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBuZXdHYW1lKHBsYXllcjEsIHBsYXllcjIpe1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjE7XG4gICAgICAgIHRoaXMuZGVmZW5kaW5nUGxheWVyID0gdGhpcy5wbGF5ZXIyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJuKCl7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgICAgICB0aGlzLmRlZmVuZGluZ1BsYXllciA9IHRoaXMuZGVmZW5kaW5nUGxheWVyID09PSB0aGlzLnBsYXllcjIgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMjtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RHYW1lKCl7XG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIFsxLDNdLCAndmVydGljYWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCBbNywyXSwgJ2hvcml6b250YWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LCBbMiw3XSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoMywgWzEsM10sICd2ZXJ0aWNhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIFs3LDJdLCAnaG9yaXpvbnRhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDUsIFsyLDddLCAndmVydGljYWwnKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBkZWZlbmRpbmdQbGF5ZXIsXG4gICAgICAgIGNyZWF0ZVBsYXllcixcbiAgICAgICAgbmV3R2FtZSxcbiAgICAgICAgY2hhbmdlVHVybixcbiAgICAgICAgY2hlY2tHYW1lT3ZlcixcbiAgICAgICAgdGVzdEdhbWVcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgc2hpcFR5cGVzIGZyb20gJy4vc2hpcFR5cGVzJztcblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRW1wdHlHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuICAgIC8vIENyZWF0ZSBhIDEweDEwIDJkIGFycmF5IGdhbWVib2FyZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVtcHR5R2FtZWJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZWJvYXJkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDw9IDk7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8PSA5OyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHJvd0FycmF5W2NvbF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZWJvYXJkQXJyYXlbcm93XSA9IHJvd0FycmF5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmRBcnJheTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJCb2FyZChib2FyZCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJGbGVldChmbGVldCkge1xuICAgICAgICB3aGlsZSAoZmxlZXQubGVuZ3RoID4gMCkgZmxlZXQucG9wKCk7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgYSBzcXVhcmUgaW4gdGhlIGdhbWVib2FyZCwgYW5kIHVuZGVmaW5lZCBpZiBvdXRzaWRlIHRoZSBnYW1lYm9hcmQgZXh0ZW50c1xuICAgIGZ1bmN0aW9uIGNoZWNrU3F1YXJlKHJvdywgY29sKSB7XG4gICAgICAgIGlmIChyb3cgPCAwIHx8IGNvbCA8IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChyb3cgPiA5IHx8IGNvbCA+IDkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBzaGlwIHBsYWNlbWVudCBzcXVhcmVzXG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gb3JpZ2luO1xuICAgICAgICBsZXQgc2hpcFNxdWFyZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPT09ICdob3Jpem9udGFsJyA/IGNvbCsrIDogcm93Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgZXZlcnkgcGxhY2VtZW50IHNxdWFyZSBpcyBudWxsLCB2YWxpZFBsYWNlbWVudCBpcyBhbiBhcnJheSBvZiB0aGUgdmFsaWQgc3F1YXJlc1xuICAgICAgICBjb25zdCB2YWxpZFBsYWNlbWVudCA9IHNoaXBTcXVhcmVzLmV2ZXJ5KHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IHNxdWFyZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU3F1YXJlKHJvdywgY29sKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbF0gPT09IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIFJldHVybiBhbiBkb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZhbGlkaXR5IGFuZCB0aGUgc3F1YXJlcyBwcm9jZXNzZWRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzVmFsaWQ6IHZhbGlkUGxhY2VtZW50LFxuICAgICAgICAgICAgc3F1YXJlczogc2hpcFNxdWFyZXNcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcFR5cGUsIG9yaWdpbiwgYWxpZ25tZW50KSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwVHlwZXNbc2hpcFR5cGVdLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPSB0aGlzLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgICAgICAvLyBJZiBzaGlwU3F1YXJlcyBpcyBhIHZhbGlkIGFycmF5LCBwbGFjZSB0aGUgc2hpcCBvbiBhbGwgb2YgdGhvc2Ugc3F1YXJlc1xuICAgICAgICBpZiAoc2hpcFNxdWFyZXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcFR5cGUpO1xuICAgICAgICAgICAgc2hpcC5zcXVhcmVzID0gc2hpcFNxdWFyZXMuc3F1YXJlcztcbiAgICAgICAgICAgIHNoaXAuYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBzcXVhcmU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gc2hpcDtcbiAgICAgICAgfSBlbHNlIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwIGluIHRoYXQgbG9jYXRpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlU2hpcChzcXVhcmVzKXtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gc3F1YXJlO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGNsZWFyQm9hcmQodGhpcy5ib2FyZCk7XG4gICAgICAgIGNsZWFyRmxlZXQodGhpcy5wbGFjZWRTaGlwcyk7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcFR5cGVzKXtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApO1xuICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnIHx8IHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucGxhY2VTaGlwUmFuZG9tbHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGFrZSBhIHNoaXAgYW5kIGRldGVybWluZSBhIHJhbmRvbSBhbGlnbm1lbnQgYW5kIG9yaWdpblxuICAgIC8vIEtlZXAgdHJ5aW5nIHRvIHBsYWNlIHNoaXAgdW50aWwgYW4gYWxsb3dlZCBsb2NhdGlvbiBpcyBmb3VuZFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBUeXBlKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwVHlwZXNbc2hpcFR5cGVdLmxlbmd0aDtcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQWxpZ25tZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbU9yaWdpbihhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGxldCByb3dEaWYgPSAwO1xuICAgICAgICAgICAgbGV0IGNvbERpZiA9IDA7XG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50ID09PSAndmVydGljYWwnKSByb3dEaWYgPSBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGVsc2UgY29sRGlmID0gc2hpcExlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gcm93RGlmKSk7XG4gICAgICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gY29sRGlmKSk7XG4gICAgICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxpZ25tZW50ID0gZ2V0UmFuZG9tQWxpZ25tZW50KCk7XG4gICAgICAgIGxldCBvcmlnaW4gPSBnZXRSYW5kb21PcmlnaW4oYWxpZ25tZW50KTtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmVzID0gdGhpcy5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KTtcbiAgICAgICAgLy8gbGV0IHJlc3VsdCA9IHRoaXMucGxhY2VTaGlwKHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KTtcbiAgICAgICAgd2hpbGUgKCFzaGlwU3F1YXJlcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPSBnZXRSYW5kb21BbGlnbm1lbnQoKTtcbiAgICAgICAgICAgIG9yaWdpbiA9IGdldFJhbmRvbU9yaWdpbihhbGlnbm1lbnQpO1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMgPSB0aGlzLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlU2hpcChzaGlwVHlwZSwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgIH1cbiAgICAvLyBSZWNlaXZlcyBhbiBhdHRhY2sgYW5kIGNhbGN1bGF0ZXMgdGhlIHJlc3VsdFxuICAgIC8vIFJldHVybnMgYW4gYXJyYXkgLSAnaGl0JyBvciAnbWlzcycgZGVwZW5kaW5nIG9uIHJlc3VsdCwgYW5kIHRoZSBjb29yZGluYXRlc1xuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tTcXVhcmUocm93LCBjb2wpID09PSB1bmRlZmluZWQpIHJldHVybiBcIkludmFsaWQgbG9jYXRpb25cIjtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdID09PSBudWxsKSB0aGlzLmJvYXJkW3Jvd11bY29sXSA9ICdtaXNzJztcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gJ2hpdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmJvYXJkW3Jvd11bY29sXSwgW3JvdywgY29sXV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHBsYWNlZFNoaXBzLFxuICAgICAgICBjaGVja1NxdWFyZSxcbiAgICAgICAgY2hlY2tWYWxpZFBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZW1vdmVTaGlwLFxuICAgICAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHksXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja0FsbFNoaXBzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmZ1bmN0aW9uIFBsYXllcihwbGF5ZXJOYW1lLCBwbGF5ZXJOdW1iZXIpIHtcbiAgICBsZXQgbmFtZSA9IHR5cGVvZiBwbGF5ZXJOYW1lID09PSAnc3RyaW5nJyA/IHBsYXllck5hbWUgOiAnYmF0dGxlQm90JztcbiAgICBjb25zdCBudW1iZXIgPSBwbGF5ZXJOdW1iZXI7XG4gICAgY29uc3QgaXNBSSA9IHR5cGVvZiBwbGF5ZXJOYW1lICE9PSAnc3RyaW5nJyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAvLyBDcmVhdGUgYSAyRCBhcnJheSBvZiBhdmFpbGFibGUgYXR0YWNrIGNvb3JkaW5hdGVzXG4gICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrcyA9IGNyZWF0ZUF0dGFja0FycmF5KCk7XG4gICAgZnVuY3Rpb24gYXR0YWNrKGVuZW15LCByb3csIGNvbCkge1xuICAgICAgICAvLyBHZXQgcm93IGFuZCBjb2wgZm9yIGEgcmFuZG9tIEFJIGF0dGFjayBmcm9tIHRoZSBhdmFpbGFibGVBdHRhY2tzIGFycmF5XG4gICAgICAgIGlmIChpc0FJKSB7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiAnTm8gc3F1YXJlcyB0byBhdHRhY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFycmF5Um93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGFycmF5Q29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQXR0YWNrc1thcnJheVJvd10ubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc3F1YXJlIGZyb20gdGhlIGF2YWlsYWJsZUF0dGFja3MgYXJyYXkgJiBnZXQgdGhlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBsZXQgYXR0YWNrQ29vcmRzID0gYXZhaWxhYmxlQXR0YWNrc1thcnJheVJvd10uc3BsaWNlKGFycmF5Q29sLCAxKVswXTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVBdHRhY2tzW2FycmF5Um93XS5sZW5ndGggPT09IDApIGF2YWlsYWJsZUF0dGFja3Muc3BsaWNlKGFycmF5Um93LCAxKTtcbiAgICAgICAgICAgIFtyb3csIGNvbF0gPSBhdHRhY2tDb29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIHRoZSAnaGl0JyBvciAnbWlzcycgcmVzdWx0IG9mIHRoZSBhdHRhY2tcbiAgICAgICAgcmV0dXJuIGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBpc0FJLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGF0dGFja1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQXR0YWNrQXJyYXkoKSB7XG4gICAgY29uc3QgYXR0YWNrQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgcm93QXJyYXkucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2tBcnJheS5wdXNoKHJvd0FycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja0FycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IHNoaXBUeXBlcyBmcm9tICcuL3NoaXBUeXBlcyc7XG5cbmZ1bmN0aW9uIFNoaXAoc2hpcFR5cGUpe1xuICAgIGNvbnN0IHR5cGUgPSBzaGlwVHlwZTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwVHlwZXNbc2hpcFR5cGVdLmxlbmd0aDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHNxdWFyZXM7XG4gICAgbGV0IGFsaWdubWVudDtcbiAgICBmdW5jdGlvbiBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0cyxcbiAgICAgICAgc3F1YXJlcyxcbiAgICAgICAgYWxpZ25tZW50LFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJjb25zdCBzaGlwVHlwZXMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ2NhcnJpZXInLFxuICAgICAgICBsZW5ndGg6IDVcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICAgICAgbGVuZ3RoOiA0XG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdkZXN0cm95ZXInLFxuICAgICAgICBsZW5ndGg6IDNcbiAgICB9LFxuICAgIHN1Ym1hcmluZToge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ3N1Ym1hcmluZScsXG4gICAgICAgIGxlbmd0aDogM1xuICAgIH0sXG4gICAgcGF0cm9sOiB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAncGF0cm9sJyxcbiAgICAgICAgbGVuZ3RoOiAyXG4gICAgfSxcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcFR5cGVzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvZG9tL2RvbUNvbnRyb2xsZXInXG5cbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyBteUljb24uc3JjID0gSWNvbjtcbi8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=