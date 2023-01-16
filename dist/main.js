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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-height: 100px;\n    --board-size: 320px;\n    --cell-size: 30px;\n\n    --background-color: rgb(240, 240, 240);\n    --background-color-transparent: rgba(240, 240, 240, 0.7);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --background-color-transparent: rgba(30, 30, 30, 0.7);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\nh1 {}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ships-header p {\n    margin: 0;\n    font-size: 0.8rem;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    cursor: grab;\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 20;\n}\n\n.setup-ship-vertical {\n    flex-direction: column;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.setup-ship-dropped div {\n    /* border: 2px solid black; */\n}\n\n.ghost-ship {\n    position: absolute;\n    z-index: 200;\n    opacity: 0.8;\n}\n\n.ghost-ship > .setup-ship-cell {\n    background-color: var(--cell-hover-color);\n}\n\n.setup-ship-cell {\n    width: var(--cell-size);\n    height: var(--cell-size);\n    background-color: var(--cell-hover-color);\n    border: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    height: var(--cell-size);\n    width: var(--cell-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-setup {\n    display: inline-block;\n}\n\n.cell-drag-over {\n    pointer-events: none;\n    position: absolute;\n    display: inline-block;\n    z-index: 40;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n.cell-sunk {\n    background-color: var(--sunk-color);\n    transition: background-color 0.2s ease;\n}\n\n/* Victory container */\n.victory-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 318px;\n    text-align: center;\n    padding: 20px;\n    border: 3px solid var(--text-color-main);\n    background-color: var(--background-color-transparent);\n    backdrop-filter: blur(4px);\n}\n\n.victory-container h2 {\n    margin: 0;\n}\n\n.victory-container p {\n    margin: 6px;\n}\n\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n:root {\n    --header-height: 100px;\n    --board-size: 320px;\n    --cell-size: 30px;\n\n    --background-color: rgb(240, 240, 240);\n    --background-color-transparent: rgba(240, 240, 240, 0.7);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --background-color-transparent: rgba(30, 30, 30, 0.7);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(70, 70, 70);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\nh1 {}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ships-header p {\n    margin: 0;\n    font-size: 0.8rem;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    cursor: grab;\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 20;\n}\n\n.setup-ship-vertical {\n    flex-direction: column;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.setup-ship-dropped div {\n    /* border: 2px solid black; */\n}\n\n.ghost-ship {\n    position: absolute;\n    z-index: 200;\n    opacity: 0.8;\n}\n\n.ghost-ship > .setup-ship-cell {\n    background-color: var(--cell-hover-color);\n}\n\n.setup-ship-cell {\n    width: var(--cell-size);\n    height: var(--cell-size);\n    background-color: var(--cell-hover-color);\n    border: 1px solid black;\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: rgb(235, 189, 129);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    height: var(--cell-size);\n    width: var(--cell-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-setup {\n    display: inline-block;\n}\n\n.cell-drag-over {\n    pointer-events: none;\n    position: absolute;\n    display: inline-block;\n    z-index: 40;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n.cell-sunk {\n    background-color: var(--sunk-color);\n    transition: background-color 0.2s ease;\n}\n\n/* Victory container */\n.victory-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 318px;\n    text-align: center;\n    padding: 20px;\n    border: 3px solid var(--text-color-main);\n    background-color: var(--background-color-transparent);\n    backdrop-filter: blur(4px);\n}\n\n.victory-container h2 {\n    margin: 0;\n}\n\n.victory-container p {\n    margin: 6px;\n}\n\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/aiLogic.js":
/*!********************************!*\
  !*** ./src/modules/aiLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function aiLogic() {
    // Create a 2D array of available attack coordinates
    const availableAttacks = createAttackArray();
    let lastShip;
    // Store an array containing all the recent attacks, in order
    // When a ship is sunk, remove all of it's cells from the array
    // So we have an array of recent hits of ships that are not yet sunk
    const lastHitArray = [];
    const possibleDirections = ['up', 'down', 'left', 'right'];
    let concurrentMisses = 0;
    function attack(enemy) {
        if (this.lastHitArray.length > 0) {
            this.checkIfShipIsSunk(enemy, this.lastHitArray[lastHitArray.length - 1]);
        };
        if (this.availableAttacks.length === 0) return 'No squares to attack';
        // If the last hit ship is sunk, or nothing has been hit yet, get a random cell
        // If the bot has missed more than 3 times in a row, give a 50% chance to cheat
        if (this.lastHitArray.length === 0) {
            if (this.concurrentMisses > 5 && Math.random() > 0.8) {
                const enemyBoard = enemy.gameboard.board;
                for (let row = 0; row < 10; row++) {
                    for (let col = 0; col < 10; col++) {
                        const cell = enemy.gameboard.checkSquare(row, col);
                        if (typeof cell === 'object' && cell !== null){
                            console.log('cheating!')
                            return [row, col];
                        }
                    }
                }
            }
            let attackCoords = this.getRandomCell(enemy);
            return attackCoords;
        }
        // Else, we find the next cell adjacent to the lastHit
        const lastHit = this.lastHitArray[lastHitArray.length - 1];
        const adjacentCells = this.getAllAdjacentCells(enemy, lastHit);
        const adjacentHits = adjacentCells.filter(cell => {
            return (cell.cellResult === 'hit' && this.checkIfShipIsSunk(enemy, cell.adjacentCell) === false);
        });
        // If there is a hit (or multiple) adjacent, attack in the opposite direction
        if (adjacentHits.length > 0) {
            const randomAdjacentHit = adjacentHits[Math.floor(Math.random() * adjacentHits.length)];
            let nextCell = this.getNextAttackableCell(enemy, lastHit, this.flipDirection(randomAdjacentHit.direction));
            if (nextCell === false) {
                nextCell = this.getNextAttackableCell(enemy, lastHit, randomAdjacentHit.direction);
            };
            while (nextCell === false) {
                nextCell = this.getNextAttackableCell(enemy, lastHit, this.possibleDirections[Math.floor(Math.random() * this.possibleDirections.length)]);
            };
            return nextCell;
        }
        // Iterate backwards through all other hit cells for adjaceny to the lastHit cell
        // If adjacency is found, see if we can attack a cell in that direction
        for (let i = this.lastHitArray.length - 2; i >= 0; i--) {
            const cell = this.lastHitArray[i];
            const result = this.getAdjacency(lastHit, cell);
            if (result) {
                let nextCell = this.getNextAttackableCell(enemy, lastHit, result.direction);
                if (nextCell) return nextCell;
            }
        }
        // At this point we have confirmed that the lastHit is the only hit on that ship
        // So we pick a random adjacent cell that we can attack, and attack it!
        const adjacentCellsToAttack = adjacentCells.filter(cell => {
            return typeof cell.cellResult !== 'string' && cell.cellResult !== undefined;
        });
        const cell = adjacentCellsToAttack[Math.floor(Math.random() * adjacentCellsToAttack.length)];
        console.log(cell.adjacentCell)
        return cell.adjacentCell;
    }
    function getRandomCell(enemy) {
        if (this.availableAttacks.length === 0) return 'No squares to attack';
        // Get row and col for a random AI attack from the availableAttacks array
        let arrayRow = Math.floor(Math.random() * this.availableAttacks.length);
        let arrayCol = Math.floor(Math.random() * this.availableAttacks[arrayRow].length);
        let cell = this.availableAttacks[arrayRow][arrayCol];
        // If the selected cell has no adjacent cells to attack, get a different random cell
        const adjacentCells = this.getAllAdjacentCells(enemy, cell);
        if (adjacentCells.every(cell => typeof cell.cellResult !== 'object')) {
            return this.getRandomCell(enemy);
        }
        return cell;
    }
    // Remove a cell from the availableAttacks array
    // Called by player.js after making an attack
    function removeCellFromAvailableAttacks(cell) {
        for (let row = 0; row < this.availableAttacks.length; row++) {
            for (let col = 0; col < this.availableAttacks[row].length; col++) {
                const square = this.availableAttacks[row][col];
                if (cell[0] === square[0] && cell[1] === square[1]) {
                    this.availableAttacks[row].splice(col, 1);
                    if (this.availableAttacks[row].length === 0) this.availableAttacks.splice(row, 1);
                    return;
                }
            }
        }
    }
    function getAdjacentCell(cell, direction) {
        let [row, col] = cell;
        switch (direction) {
            case 'up':
                row--;
                break;
            case 'down':
                row++;
                break;
            case 'left':
                col--;
                break;
            case 'right':
                col++;
                break;
            default:
                break;
        };
        return [row, col];
    }
    // Given a cell, find the 4 possible adjacent cells and their direction
    function getAllAdjacentCells(enemy, cell) {
        return possibleDirections.map(direction => {
            const adjacentCell = this.getAdjacentCell(cell, direction);
            let cellResult = enemy.gameboard.checkSquare(adjacentCell[0], adjacentCell[1]);
            if (cellResult === 'hit') {
                if (this.checkIfShipIsSunk(enemy, adjacentCell)) cellResult = 'sunk';
            }
            return {
                cellResult,
                adjacentCell,
                direction
            }
        })
    }
    // Check if a cell is adjacent to, or in the same row/col as another
    // Return the direction to the cell, the opposite direction, and the distance
    function getAdjacency(cell, neighbourCell) {
        let direction;
        let oppositeDirection;
        let distance;
        if (cell[0] === neighbourCell[0]) {
            const diff = cell[1] - neighbourCell[1];
            direction = diff > 1 ? 'left' : 'right';
            oppositeDirection = diff > 1 ? 'right' : 'left';
            distance = Math.abs(diff);
        } else if (cell[1] === neighbourCell[1]) {
            const diff = cell[0] - neighbourCell[0];
            direction = diff > 1 ? 'down' : 'up';
            oppositeDirection = diff > 1 ? 'up' : 'down';
            distance = Math.abs(diff);
        } else {
            return false;
        }
        return {
            direction,
            oppositeDirection,
            distance
        }
    }
    // Look for a possible cell to attack in a given direction (search 4 cells only)
    function getNextAttackableCell(enemy, cell, direction) {
        let nextCell = getAdjacentCell(cell, direction);
        for (let i = 0; i < 4; i++) {
            let nextCellStatus = enemy.gameboard.checkSquare(nextCell[0], nextCell[1]);
            if (typeof nextCellStatus === 'object' || nextCellStatus === null) return nextCell;
            if (nextCellStatus === undefined) return false;
            if (nextCellStatus === 'miss') return false;
            // We skip over a hit (could be part of the same ship we're attacking),
            // unless that ship is sunk - then we shouldn't keep attacking in that direction
            if (nextCellStatus === 'hit') {
                if (this.checkIfShipIsSunk(enemy, nextCell)) return false;
            }
            nextCell = getAdjacentCell(nextCell, direction);
        }
        return false;
    }
    function flipDirection(direction) {
        switch (direction) {
            case 'up':
                return 'down';
            case 'down':
                return 'up';
            case 'left':
                return 'right';
            case 'right':
                return 'left';
            default:
                return false;
        }
    }
    // Find the ship at a certain cell and check if it is sunk
    // If it is, remove its squares from the lastHitArray and return true
    function checkIfShipIsSunk(enemy, cell) {
        const enemyShips = enemy.gameboard.placedShips;
        let hitShip;
        enemyShips.forEach(ship => {
            if (ship.squares.some(square => {
                return (square[0] === cell[0] && square[1] === cell[1])
            })) hitShip = ship;
        })
        if (hitShip.isSunk()) {
            hitShip.squares.forEach(square => {
                const index = this.lastHitArray.findIndex(location => {
                    return (location[0] === square[0] && location[1] === square[1])
                });
                if (index > -1) this.lastHitArray.splice(index, 1);
            });
            return true;
        } else return false;
    }
    return {
        availableAttacks,
        lastShip,
        lastHitArray,
        possibleDirections,
        concurrentMisses,
        attack,
        getRandomCell,
        removeCellFromAvailableAttacks,
        getAdjacentCell,
        getAllAdjacentCells,
        getNextAttackableCell,
        getAdjacency,
        flipDirection,
        checkIfShipIsSunk
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aiLogic);

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
/* harmony import */ var _placeShips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeShips */ "./src/modules/dom/placeShips.js");






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

const newGameButton = header.querySelector('.new-game-button');
newGameButton.addEventListener('click', newGame);

const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
newGame();

function startGame(player1, player2) {
    game.newGame(player1, player2);
    drawGame();
}

function newGame() {
    const newPlayer1 = game.createPlayer('Mysterio', 1);
    const newPlayer2 = game.createPlayer(false, 2);
    newPlayer2.gameboard.placeAllShipsRandomly();
    drawSetup(newPlayer1);
    const startGameButton = document.querySelector('.setup-button-start');
    startGameButton.addEventListener('click', function (event) {
        if (newPlayer1.gameboard.placedShips.length === 5) {
            startGame(newPlayer1, newPlayer2);
        }
    });
}

function clearContainer(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
}

function drawGame() {
    clearContainer(gameContainer);
    const player1BoardContainer = drawBoardContainer(game.player1);
    const player2BoardContainer = drawBoardContainer(game.player2);
    populateBoard(game.player1, player1BoardContainer.querySelector('.board'));
    gameContainer.append(player1BoardContainer, player2BoardContainer);
}

function drawSetup(player) {
    clearContainer(gameContainer);
    const setupBoard = _placeShips__WEBPACK_IMPORTED_MODULE_4__["default"].drawSetupBoard(player, drawBoardContainer(player));
    const setupShips = _placeShips__WEBPACK_IMPORTED_MODULE_4__["default"].drawSetupShips();

    const ships = setupShips.querySelectorAll('.setup-ship-box');

    gameContainer.append(setupBoard, setupShips);
}


//
// 
// IF GAME CONTAINER HEIGHT IS BIGGER THAN 500PX (I.E., WRAPPED), ADJUST HEADER TO SUIT
// THIS IS A VERY SCUFFED SOLUTION AND PORBABLY BREAKS SOMEWHERE
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
// Pass information from the attack to styleAttackedCell function
function listenForAttack(event) {
    const cell = event.target
    const defendingPlayerNumber = cell.dataset.player;
    const attackingPlayerNumber = defendingPlayerNumber === '1' ? '2' : '1';
    const attackingPlayer = game[`player${attackingPlayerNumber}`];
    const defendingPlayer = game[`player${defendingPlayerNumber}`];
    if (game.currentPlayer !== attackingPlayer) return;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const [result, location, ship] = attackingPlayer.attack(defendingPlayer, row, col);
    styleAttackedCell(cell, defendingPlayerNumber, result, ship);
    cell.removeEventListener('click', listenForAttack, false)
    nextTurn();
}

// Call an attack for the AI
function callAIAttack(ai) {
    if (ai !== game.currentPlayer) return;
    const defendingPlayerNumber = game.defendingPlayer === game.player1 ? '1' : '2';
    const [result, location, ship] = ai.attack(game.defendingPlayer);
    const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${location[0]}'][data-col='${location[1]}']`)
    styleAttackedCell(cell, defendingPlayerNumber, result, ship)
    nextTurn();
}

// Style attacked cell based on a hit or miss
// If the ship is sunk, style each of the ship's cells with the .cell-sunk class
function styleAttackedCell(cell, defendingPlayerNumber, result, ship){
    if (result === 'hit'){
        cell.classList.add('cell-hit');
        if (ship.isSunk()){
            ship.squares.forEach(square => {
                const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${square[0]}'][data-col='${square[1]}']`)
                cell.classList.add('cell-sunk')
            })
        }
    }
    if (result === 'miss') cell.classList.add('cell-miss');
}

// Handle end-of-turn events
function nextTurn() {
    const winner = game.checkGameOver();
    if (winner) {
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
    gameContainer.appendChild(drawVictoryContainer(winner));
}

// Popup victory container
function drawVictoryContainer(winner){
    const loser = game.checkGameOver() === game.player1 ? game.player2 : game.player1;
    const victoryContainer = document.createElement('div');
    victoryContainer.classList.add('victory-container');
    const victoryTitle = document.createElement('h2');
    victoryTitle.textContent = winner.isAI ? 'TOTAL DEFEAT' : 'TOTAL VICTORY';
    const winnerText = document.createElement('p');
    winnerText.textContent = `${winner.name} has claimed domination!`;
    const loserText = document.createElement('p');
    loserText.textContent = `${loser.name}'s fleet is sunk.`
    victoryContainer.append(victoryTitle, winnerText, loserText);
    return victoryContainer;
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

/***/ "./src/modules/dom/placeShips.js":
/*!***************************************!*\
  !*** ./src/modules/dom/placeShips.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shipTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shipTypes */ "./src/modules/shipTypes.js");


let player;
let board;

// This object holds the data for the drag methods to use
// These properties are updated as the user drags and drops ships
const dragData = {
    shipObject: null,
    shipElement: null,
    offsetX: null,
    offsetY: null,
    rowDif: 0,
    colDif: 0,
    shipHomeContainer: null,
    previousContainer: null,
    previousCell: null,
    currentCell: null,
}

function drawSetupBoard(setupPlayer, setupBoard) {
    player = setupPlayer;
    board = setupBoard;
    const setupCells = board.querySelectorAll('.cell')
    setupCells.forEach(cell => {
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);

        // cell.addEventListener('touchmove', dragEnter)
    })
    return setupBoard;
}

function drawSetupShips() {
    const setupShipsContainer = document.createElement('div');
    setupShipsContainer.classList.add('setup-ships-container');
    const setupShipsHeader = document.createElement('div');
    setupShipsHeader.classList.add('setup-ships-header');
    const setupShipsTitle = document.createElement('h3');
    setupShipsTitle.textContent = 'place your ships:';
    const setupShipsInfo = document.createElement('p');
    setupShipsInfo.textContent = 'double click to rotate (once placed)';
    const setupShipsOptions = document.createElement('div');
    setupShipsOptions.classList.add('setup-ships-options');
    const startGame = document.createElement('button');
    startGame.classList.add('setup-button-start');
    startGame.textContent = 'TO BATTLE!';
    const randomShips = document.createElement('button');
    randomShips.classList.add('setup-button-random');
    randomShips.textContent = 'randomize';
    randomShips.addEventListener('click', randomizeFleet);
    setupShipsOptions.append(startGame, randomShips);
    const shipList = document.createElement('div');
    for (let ship in _shipTypes__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        shipList.appendChild(drawShip(_shipTypes__WEBPACK_IMPORTED_MODULE_0__["default"][ship]));
    }
    setupShipsHeader.append(setupShipsTitle, setupShipsInfo)
    setupShipsContainer.append(setupShipsHeader, shipList, setupShipsOptions);
    return setupShipsContainer;
}

// Draw a ship to be placed, giving the element an ID of the ship's type
function drawShip(ship) {
    const shipContainer = document.createElement('div');
    shipContainer.classList.add('setup-ship');
    shipContainer.id = `${ship.name}-home`;
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
    shipBox.dataset.alignment = 'horizontal';
    shipBox.addEventListener('dragstart', dragStart);
    shipBox.addEventListener('dragend', dragEnd);
    shipBox.addEventListener('dblclick', rotateShip);

    // shipBox.addEventListener('touchstart', function (event) {
    //     dragStart(event);
    // })
    shipBox.addEventListener('touchmove', function (event) {
        const x = event.touches[0].clientX
        const y = event.touches[0].clientY
        const elements = document.elementsFromPoint(x, y)
        const touchCell = elements.filter(element => element.classList.contains('cell'));
        if (touchCell.length > 0) {
            dragEnter(event, touchCell[0]);
        } else {
            dragLeave(event);
        };
        // Add in a ghost ship
        //
        //
        //
        // PUT THIS INTO WEB VERSION TOO
        const app = document.querySelector('#app');
        const prevBox = document.querySelector('.ghost-ship');
        if (prevBox) prevBox.remove();
        const newBox = shipBox.cloneNode(true);
        const touchLocation = event.targetTouches[0];
        if (dragData.shipElement.dataset.alignment === 'vertical'){
            newBox.classList.add('setup-ship-vertical')
        }
        newBox.classList.add('ghost-ship')
        newBox.style.left = `${touchLocation.pageX - dragData.offsetX}px`;
        newBox.style.top = `${touchLocation.pageY - dragData.offsetY}px`;
        app.appendChild(newBox)
    })
    shipBox.addEventListener('touchend', function (event) {
        const prevBox = document.querySelector('.ghost-ship');
        if (prevBox) prevBox.remove();
        dragEnd(event);
        const x = event.changedTouches[0].clientX;
        const y = event.changedTouches[0].clientY
        const elements = document.elementsFromPoint(x, y)
        const touchCell = elements.filter(element => element.classList.contains('cell'));
        if (touchCell.length > 0) {
            drop(event, touchCell[0]);
        };
    })

    // As mobile browsers don't support double tap, we add a timer into the touchstart event listener
    shipBox.addEventListener('touchstart', function (event) {
        // Disable browser default zoom on double tap
        event.preventDefault();
        let date = new Date();
        let time = date.getTime();
        const timeBetweenTaps = 200;
        if ((time - shipBox.lastClick) < timeBetweenTaps) {
            rotateShip(event);
            dragStart(event);
        } else {
            dragStart(event);
        }
        shipBox.lastClick = time;
    });

    const shipName = document.createElement('p');
    if (ship.name === 'patrol') shipName.textContent = 'patrol boat';
    else shipName.textContent = ship.name;
    shipContainer.append(shipName, shipBox);
    return shipContainer;
}

// Place all ship's randomly on the player's gameboard
// Then append each ship element to the placed ship's origin with appropriate styling
function randomizeFleet() {
    player.gameboard.placeAllShipsRandomly();
    player.gameboard.placedShips.forEach(ship => {
        const type = ship.type;
        const origin = ship.squares[0];
        const alignment = ship.alignment;
        const shipElement = document.querySelector(`#${type}`);
        shipElement.dataset.alignment = alignment;
        shipElement.classList.add('setup-ship-dropped');
        if (alignment === 'vertical') shipElement.classList.add('setup-ship-vertical');
        else shipElement.classList.remove('setup-ship-vertical');
        const [row, col] = origin;
        const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
        cell.appendChild(shipElement);
    })
}

// When a user grabs a ship element, we track the user's cursor location for the dragEnter and drop events
// When the ship is grabbed from the center, the cursor does not match up with the ship's origin cell
// The cellDif difference between the origin cell to the cell where the user has grabbed the ship element
// i.e., if a ship of length 5 is grabbed from the 4th cell, the cellDif will be 3
function updateCellDif(event) {
    let x;
    let y;
    if (event.type === 'touchstart') {
        let bcr = event.target.parentElement.getBoundingClientRect();
        x = event.targetTouches[0].clientX - bcr.x;
        y = event.targetTouches[0].clientY - bcr.y;
        dragData.offsetX = x;
        dragData.offsetY = y;
    } else {
        x = event.offsetX;
        y = event.offsetY;
    };
    
    const cellSize = document.querySelector('.setup-ship-cell').offsetWidth;
    if (dragData.shipElement.dataset.alignment === 'horizontal') {
        dragData.rowDif = 0;
        dragData.colDif = Math.floor(x / (cellSize + 2));
    } else {
        dragData.rowDif = Math.floor(y / (cellSize + 2));
        dragData.colDif = 0;
    }
}

// Handle logic for rotating a placed ship - rotation is around the origin
function rotateShip(event) {
    const shipElement = dragData.shipElement;
    const shipLength = _shipTypes__WEBPACK_IMPORTED_MODULE_0__["default"][shipElement.id].length;
    const originCell = shipElement.parentElement;
    // If the ship is not placed in a cell, return
    if (!originCell.classList.contains('cell')) return;
    const originRow = parseInt(originCell.dataset.row);
    const originCol = parseInt(originCell.dataset.col);
    console.log(originRow, originCol)
    player.gameboard.removeShip([originRow, originCol]);
    let row = originRow;
    let col = originCol;
    let originAlignment = shipElement.dataset.alignment;
    let newAlignment;
    // If the rotation causes the ship to be off the grid, change the origin cell to allow its length
    // This allows a ship placed near the far edge of the grid to still be rotated
    if (originAlignment === 'horizontal') {
        newAlignment = 'vertical';
        if ((10 - row) < shipLength) row = 10 - shipLength;
    } else {
        newAlignment = 'horizontal';
        if ((10 - col) < shipLength) col = 10 - shipLength;
    }
    // Attempt to place the ship along each row (if horizontal) or column (if vertical)
    // Attempt this 10 times - for each row or column, iterating through the grid
    let attempts = 0;
    let shipSquares = player.gameboard.checkValidPlacement(shipLength, [row, col], newAlignment);
    while (shipSquares.isValid === false && attempts < 10) {
        if (newAlignment === 'horizontal') {
            row = row < 9 ? row + 1 : 0;
        }
        else col = col < 9 ? col + 1 : 0;
        shipSquares = player.gameboard.checkValidPlacement(shipLength, [row, col], newAlignment);
        attempts++;
    }
    // If a valid placement is found, place the ship on both the setup board and player's gameboard
    // Style appropriately with a vertical class if needed
    if (shipSquares.isValid) {
        player.gameboard.placeShip(shipElement.id, [row, col], newAlignment);
        const newOriginCell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
        newOriginCell.appendChild(shipElement);
        shipElement.dataset.alignment = newAlignment;
        if (newAlignment === 'vertical') shipElement.classList.add('setup-ship-vertical');
        else shipElement.classList.remove('setup-ship-vertical');
    }
    // Else, place the ship back into the player's gameboard
    else {
        player.gameboard.placeShip(shipElement.id, [originRow, originCol], originAlignment);
    }
}

// When the user starts dragging a ship, we store its information in dragData
function dragStart(event) {
    if (event.type === 'touchstart') {
        dragData.shipElement = event.target.parentElement;
        dragData.shipHomeContainer = document.querySelector(`#${event.target.parentElement.id}-home`);
        dragData.previousContainer = event.target.parentElement.parentElement;
    }
    else {
        dragData.shipElement = event.target;
        dragData.shipHomeContainer = document.querySelector(`#${event.target.id}-home`);
        dragData.previousContainer = event.target.parentElement;
    };
    updateCellDif(event)
    if (dragData.shipElement.dataset.alignment === 'vertical') dragData.shipElement.classList.add('setup-ship-vertical');
    // On dragStart, we store the ship back in its home container & style it to be a 'ghost'
    // Use a setTimeout to ensure this happens only after the ship has been picked up
    setTimeout(() => {
        dragData.shipElement.classList.add('setup-ship-hide');
        dragData.shipElement.classList.remove('setup-ship-dropped');
        dragData.shipElement.classList.remove('setup-ship-vertical');
        dragData.shipHomeContainer.appendChild(dragData.shipElement)
    }, 0);
    // If the ship is already placed (i.e., it's parent is a cell), we remove the ship from the player's gameboard
    if (dragData.previousContainer.classList.contains('cell')) {
        const cell = dragData.previousContainer;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        player.gameboard.removeShip([row, col]);
    }
}

function dragEnd(event) {
    dragData.shipElement.classList.remove('setup-ship-hide');
}

// For each cell we enter whilst dragging the ship, we use rowDiff and colDiff
// Check the placement squares and style them valid or invalid
function dragEnter(event, touchCell) {
    dragLeave(event);
    event.preventDefault();
    const type = dragData.shipElement.id;
    let row;
    let col;
    if (event.type === 'touchmove') {
        row = parseInt(touchCell.dataset.row) - parseInt(dragData.rowDif);
        col = parseInt(touchCell.dataset.col) - parseInt(dragData.colDif);
    } else {
        row = parseInt(event.target.dataset.row) - parseInt(dragData.rowDif);
        col = parseInt(event.target.dataset.col) - parseInt(dragData.colDif);
    };
    const shipSquares = player.gameboard.checkValidPlacement(_shipTypes__WEBPACK_IMPORTED_MODULE_0__["default"][type].length, [row, col], dragData.shipElement.dataset.alignment)
    shipSquares.squares = shipSquares.squares.filter(square => {
        return player.gameboard.checkSquare(square[0], square[1]) !== undefined;
    })
    shipSquares.squares.forEach(square => {
        const cell = board.querySelector(`[data-row='${square[0]}'][data-col='${square[1]}']`);
        // cell.classList.add('cell-drag-over');
        const cellOverlay = document.createElement('div');
        cellOverlay.classList.add('cell', 'cell-drag-over');
        cell.appendChild(cellOverlay);
        if (shipSquares.isValid) cellOverlay.classList.add('cell-drag-valid');
        else cellOverlay.classList.add('cell-drag-invalid');
    })
    // event.target.classList.add('cell-drag-over');
    //
    //
    // HERE WE SHOULD BE ABLE TO SEE THE BOARD UNDERNEATH A SHIP BOX
    // IGNORING IT IN SOME WAY?
    //
    //
}

function dragOver(event) {
    event.preventDefault();
}

// When we leave a cell, or drop the ship, remove all valid/invalid styling
function dragLeave(event) {
    const leftCells = document.querySelectorAll('.cell-drag-over');
    leftCells.forEach(cell => {
        cell.remove();
    })
}

// Handle drop events on cells using the rowDiff and colDiff dragData properties
function drop(event, touchCell) {
    dragLeave(event);
    let row;
    let col;
    const type = dragData.shipElement.id;
    if (event.type === 'touchend') {
        row = parseInt(touchCell.dataset.row) - parseInt(dragData.rowDif);
        col = parseInt(touchCell.dataset.col) - parseInt(dragData.colDif);
    } else {
        row = parseInt(event.target.dataset.row) - parseInt(dragData.rowDif);
        col = parseInt(event.target.dataset.col) - parseInt(dragData.colDif);
    };
    const shipSquares = player.gameboard.checkValidPlacement(_shipTypes__WEBPACK_IMPORTED_MODULE_0__["default"][type].length, [row, col], dragData.shipElement.dataset.alignment)
    // If the drop is a valid location, place the ship on the player's gameboard and append it to the setup board
    if (shipSquares.isValid) {
        const originCell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);
        originCell.appendChild(dragData.shipElement);
        dragData.shipElement.classList.add('setup-ship-dropped');
        dragData.previousContainer = originCell;
        player.gameboard.placeShip(dragData.shipElement.id, [row, col], dragData.shipElement.dataset.alignment);
    }
    // Else, move the ship back to its previous location
    // If that location is a cell, place the ship back on the player's gameboard in the previous location
    else {
        if (dragData.previousContainer.classList.contains('cell')) {
            dragData.shipElement.classList.add('setup-ship-dropped');
            const prevRow = dragData.previousContainer.dataset.row;
            const prevCol = dragData.previousContainer.dataset.col;
            player.gameboard.placeShip(dragData.shipElement.id, [prevRow, prevCol], dragData.shipElement.dataset.alignment)
        }
        dragData.previousContainer.appendChild(dragData.shipElement)
    }
    dragData.shipElement.classList.remove('setup-ship-hide');
    if (dragData.shipElement.dataset.alignment === 'vertical') dragData.shipElement.classList.add('setup-ship-vertical');
    else dragData.shipElement.classList.remove('setup-ship-vertical');
}

const setup = {
    drawSetupBoard,
    drawSetupShips
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);

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
    function removeShip(origin){
        const [row, col] = origin;
        const ship = this.checkSquare(row, col);
        ship.squares.forEach(square => {
            const [row, col] = square;
            this.board[row][col] = null;
        });
        const placedShipsIndex = this.placedShips.indexOf(ship);
        this.placedShips.splice(placedShipsIndex, 1);
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
        const attackedShip = this.board[row][col];
        if (attackedShip === null) this.board[row][col] = 'miss';
        else {
            attackedShip.hit();
            this.board[row][col] = 'hit';
        }
        return [this.board[row][col], [row, col], attackedShip];
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
/* harmony import */ var _aiLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aiLogic */ "./src/modules/aiLogic.js");



function Player(playerName, playerNumber) {
    let name = typeof playerName === 'string' ? playerName : 'battleBot';
    const number = playerNumber;
    const isAI = typeof playerName !== 'string' ? true : false;
    const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const battleBot = (0,_aiLogic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    function attack(enemy, row, col) {
        // If the attacking player is AI, we use the aiLogic module to get the attack coordinates
        if (this.isAI) {
            if (this.battleBot.availableAttacks.length === 0) return 'No squares to attack';
            [row, col] = this.battleBot.attack(enemy);
        }
        // Get the result of the attack and update the aiLogic with it
        const result = enemy.gameboard.receiveAttack(row, col);
        if (this.isAI){
            if (result[0] === 'hit') {
                this.battleBot.lastHitArray.push(result[1]);
                this.battleBot.concurrentMisses = 0;
            }
            if (result[0] === 'miss') this.battleBot.concurrentMisses++;
            if (result[2] !== null) this.battleBot.lastShip = result[2];
            this.battleBot.removeCellFromAvailableAttacks(result[1]);
        }
        return result;
    }
    return {
        name,
        number,
        isAI,
        gameboard,
        battleBot,
        attack
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxtSEFBbUgsSUFBSSxJQUFJ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDdENlOztBQUVwQztBQUNBO0FBQ0EsbUJBQW1CLGtEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUMxQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7VUM3QnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2FpTG9naWMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9wbGFjZVNoaXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBUeXBlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tYm9hcmQtc2l6ZTogMzIwcHg7XFxuICAgIC0tY2VsbC1zaXplOiAzMHB4O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNyk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigyMDYsIDE2OSwgMTM0KTtcXG4gICAgLS1taXNzLWNvbG9yOiByZ2IoMTYxLCAyMTYsIDE2MSk7XFxuICAgIC0tc3Vuay1jb2xvcjogcmdiKDIwNiwgMTM0LCAxMzQpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbjpyb290LmRhcmsge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigxNTUsIDk5LCA2MSk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDUyLCAxMDksIDUyKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMTU1LCA2MSwgNjEpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDE2MCwgMTYwLCAxNjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIwLCAyMCwgMjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcGFkZGluZzogMCA1JTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgxIHt9XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3ItYWN0aXZlKTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWhvdmVyKTtcXG4gICAgfVxcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLyogUGxheWVyIHNldHVwICovXFxuLnNldHVwLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IHZhcigtLWJvYXJkLXNpemUpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tYm9hcmQtc2l6ZSkgKyAyNXB4KTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1oZWFkZXIgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5zZXR1cC1zaGlwLXNoaXBsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZXR1cC1zaGlwIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zZXR1cC1zaGlwLWJveCB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC12ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zZXR1cC1zaGlwLWhpZGUgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1kcm9wcGVkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICB0b3A6IC0xcHg7XFxufVxcblxcbi5zZXR1cC1zaGlwLWRyb3BwZWQgZGl2IHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbi5naG9zdC1zaGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmdob3N0LXNoaXAgPiAuc2V0dXAtc2hpcC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5zZXR1cC1zaGlwLWNlbGwge1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0LFxcbi5zZXR1cC1idXR0b24tcmFuZG9tIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE4OSwgMTI5KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydC1kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIC5zZXR1cC1idXR0b24tc3RhcnQ6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTE2LCAxMTYpO1xcbiAgICB9XFxufVxcblxcbi8qIFBsYXllciBzZWN0aW9ucyAqL1xcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIFBsYXllciBib2FyZHMgKi9cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1zZXR1cCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmNlbGwtZHJhZy1vdmVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLmNlbGwtZHJhZy12YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1kcmFnLWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4vKiBPbmx5IGFsbG93IHZpc2libGUgaG92ZXIgZm9yIG9wcG9zaW5nIHBsYXllcidzIGJvYXJkICovXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgLmNlbGw6bm90KFtkYXRhLXBsYXllcj0nMSddKTpub3QoLmNlbGwtaGl0KTpub3QoLmNlbGwtbWlzcyk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+Kclic7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtbWlzczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4pePJztcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uY2VsbC1zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5cXG4vKiBWaWN0b3J5IGNvbnRhaW5lciAqL1xcbi52aWN0b3J5LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbi52aWN0b3J5LWNvbnRhaW5lciBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnZpY3RvcnktY29udGFpbmVyIHAge1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDMycHg7XFxufVxcblxcbiNmb290ZXItbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZm9vdGVyIGkge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG5cXG4gICAgI2Zvb3Rlci1saW5rOmhvdmVyLFxcbiAgICAjZm9vdGVyLWRhcmstbW9kZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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QjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUk7O1FBRUksZUFBZTtRQUNmLHFCQUFxQjtRQUNyQiwrQkFBK0I7SUFDbkM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tYm9hcmQtc2l6ZTogMzIwcHg7XFxuICAgIC0tY2VsbC1zaXplOiAzMHB4O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNyk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigyMDYsIDE2OSwgMTM0KTtcXG4gICAgLS1taXNzLWNvbG9yOiByZ2IoMTYxLCAyMTYsIDE2MSk7XFxuICAgIC0tc3Vuay1jb2xvcjogcmdiKDIwNiwgMTM0LCAxMzQpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbjpyb290LmRhcmsge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigxNTUsIDk5LCA2MSk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDUyLCAxMDksIDUyKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMTU1LCA2MSwgNjEpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDE2MCwgMTYwLCAxNjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIwLCAyMCwgMjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcGFkZGluZzogMCA1JTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgxIHt9XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3ItYWN0aXZlKTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWhvdmVyKTtcXG4gICAgfVxcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLyogUGxheWVyIHNldHVwICovXFxuLnNldHVwLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IHZhcigtLWJvYXJkLXNpemUpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tYm9hcmQtc2l6ZSkgKyAyNXB4KTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1oZWFkZXIgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5zZXR1cC1zaGlwLXNoaXBsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZXR1cC1zaGlwIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zZXR1cC1zaGlwLWJveCB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC12ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zZXR1cC1zaGlwLWhpZGUgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1kcm9wcGVkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICB0b3A6IC0xcHg7XFxufVxcblxcbi5zZXR1cC1zaGlwLWRyb3BwZWQgZGl2IHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbi5naG9zdC1zaGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmdob3N0LXNoaXAgPiAuc2V0dXAtc2hpcC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5zZXR1cC1zaGlwLWNlbGwge1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0LFxcbi5zZXR1cC1idXR0b24tcmFuZG9tIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE4OSwgMTI5KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydC1kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIC5zZXR1cC1idXR0b24tc3RhcnQ6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTE2LCAxMTYpO1xcbiAgICB9XFxufVxcblxcbi8qIFBsYXllciBzZWN0aW9ucyAqL1xcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIFBsYXllciBib2FyZHMgKi9cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1zZXR1cCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmNlbGwtZHJhZy1vdmVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLmNlbGwtZHJhZy12YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1kcmFnLWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4vKiBPbmx5IGFsbG93IHZpc2libGUgaG92ZXIgZm9yIG9wcG9zaW5nIHBsYXllcidzIGJvYXJkICovXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgLmNlbGw6bm90KFtkYXRhLXBsYXllcj0nMSddKTpub3QoLmNlbGwtaGl0KTpub3QoLmNlbGwtbWlzcyk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+Kclic7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtbWlzczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4pePJztcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uY2VsbC1zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5cXG4vKiBWaWN0b3J5IGNvbnRhaW5lciAqL1xcbi52aWN0b3J5LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbi52aWN0b3J5LWNvbnRhaW5lciBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnZpY3RvcnktY29udGFpbmVyIHAge1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDMycHg7XFxufVxcblxcbiNmb290ZXItbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZm9vdGVyIGkge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG5cXG4gICAgI2Zvb3Rlci1saW5rOmhvdmVyLFxcbiAgICAjZm9vdGVyLWRhcmstbW9kZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFpTG9naWMoKSB7XG4gICAgLy8gQ3JlYXRlIGEgMkQgYXJyYXkgb2YgYXZhaWxhYmxlIGF0dGFjayBjb29yZGluYXRlc1xuICAgIGNvbnN0IGF2YWlsYWJsZUF0dGFja3MgPSBjcmVhdGVBdHRhY2tBcnJheSgpO1xuICAgIGxldCBsYXN0U2hpcDtcbiAgICAvLyBTdG9yZSBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgcmVjZW50IGF0dGFja3MsIGluIG9yZGVyXG4gICAgLy8gV2hlbiBhIHNoaXAgaXMgc3VuaywgcmVtb3ZlIGFsbCBvZiBpdCdzIGNlbGxzIGZyb20gdGhlIGFycmF5XG4gICAgLy8gU28gd2UgaGF2ZSBhbiBhcnJheSBvZiByZWNlbnQgaGl0cyBvZiBzaGlwcyB0aGF0IGFyZSBub3QgeWV0IHN1bmtcbiAgICBjb25zdCBsYXN0SGl0QXJyYXkgPSBbXTtcbiAgICBjb25zdCBwb3NzaWJsZURpcmVjdGlvbnMgPSBbJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCddO1xuICAgIGxldCBjb25jdXJyZW50TWlzc2VzID0gMDtcbiAgICBmdW5jdGlvbiBhdHRhY2soZW5lbXkpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdEhpdEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZlNoaXBJc1N1bmsoZW5lbXksIHRoaXMubGFzdEhpdEFycmF5W2xhc3RIaXRBcnJheS5sZW5ndGggLSAxXSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUF0dGFja3MubGVuZ3RoID09PSAwKSByZXR1cm4gJ05vIHNxdWFyZXMgdG8gYXR0YWNrJztcbiAgICAgICAgLy8gSWYgdGhlIGxhc3QgaGl0IHNoaXAgaXMgc3Vuaywgb3Igbm90aGluZyBoYXMgYmVlbiBoaXQgeWV0LCBnZXQgYSByYW5kb20gY2VsbFxuICAgICAgICAvLyBJZiB0aGUgYm90IGhhcyBtaXNzZWQgbW9yZSB0aGFuIDMgdGltZXMgaW4gYSByb3csIGdpdmUgYSA1MCUgY2hhbmNlIHRvIGNoZWF0XG4gICAgICAgIGlmICh0aGlzLmxhc3RIaXRBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmN1cnJlbnRNaXNzZXMgPiA1ICYmIE1hdGgucmFuZG9tKCkgPiAwLjgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmVteUJvYXJkID0gZW5lbXkuZ2FtZWJvYXJkLmJvYXJkO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBlbmVteS5nYW1lYm9hcmQuY2hlY2tTcXVhcmUocm93LCBjb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjZWxsID09PSAnb2JqZWN0JyAmJiBjZWxsICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlYXRpbmchJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhdHRhY2tDb29yZHMgPSB0aGlzLmdldFJhbmRvbUNlbGwoZW5lbXkpO1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja0Nvb3JkcztcbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlLCB3ZSBmaW5kIHRoZSBuZXh0IGNlbGwgYWRqYWNlbnQgdG8gdGhlIGxhc3RIaXRcbiAgICAgICAgY29uc3QgbGFzdEhpdCA9IHRoaXMubGFzdEhpdEFycmF5W2xhc3RIaXRBcnJheS5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IHRoaXMuZ2V0QWxsQWRqYWNlbnRDZWxscyhlbmVteSwgbGFzdEhpdCk7XG4gICAgICAgIGNvbnN0IGFkamFjZW50SGl0cyA9IGFkamFjZW50Q2VsbHMuZmlsdGVyKGNlbGwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChjZWxsLmNlbGxSZXN1bHQgPT09ICdoaXQnICYmIHRoaXMuY2hlY2tJZlNoaXBJc1N1bmsoZW5lbXksIGNlbGwuYWRqYWNlbnRDZWxsKSA9PT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBoaXQgKG9yIG11bHRpcGxlKSBhZGphY2VudCwgYXR0YWNrIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgaWYgKGFkamFjZW50SGl0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21BZGphY2VudEhpdCA9IGFkamFjZW50SGl0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGphY2VudEhpdHMubGVuZ3RoKV07XG4gICAgICAgICAgICBsZXQgbmV4dENlbGwgPSB0aGlzLmdldE5leHRBdHRhY2thYmxlQ2VsbChlbmVteSwgbGFzdEhpdCwgdGhpcy5mbGlwRGlyZWN0aW9uKHJhbmRvbUFkamFjZW50SGl0LmRpcmVjdGlvbikpO1xuICAgICAgICAgICAgaWYgKG5leHRDZWxsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsID0gdGhpcy5nZXROZXh0QXR0YWNrYWJsZUNlbGwoZW5lbXksIGxhc3RIaXQsIHJhbmRvbUFkamFjZW50SGl0LmRpcmVjdGlvbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2hpbGUgKG5leHRDZWxsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsID0gdGhpcy5nZXROZXh0QXR0YWNrYWJsZUNlbGwoZW5lbXksIGxhc3RIaXQsIHRoaXMucG9zc2libGVEaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVEaXJlY3Rpb25zLmxlbmd0aCldKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbmV4dENlbGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXRlcmF0ZSBiYWNrd2FyZHMgdGhyb3VnaCBhbGwgb3RoZXIgaGl0IGNlbGxzIGZvciBhZGphY2VueSB0byB0aGUgbGFzdEhpdCBjZWxsXG4gICAgICAgIC8vIElmIGFkamFjZW5jeSBpcyBmb3VuZCwgc2VlIGlmIHdlIGNhbiBhdHRhY2sgYSBjZWxsIGluIHRoYXQgZGlyZWN0aW9uXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmxhc3RIaXRBcnJheS5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMubGFzdEhpdEFycmF5W2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRBZGphY2VuY3kobGFzdEhpdCwgY2VsbCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRDZWxsID0gdGhpcy5nZXROZXh0QXR0YWNrYWJsZUNlbGwoZW5lbXksIGxhc3RIaXQsIHJlc3VsdC5kaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0Q2VsbCkgcmV0dXJuIG5leHRDZWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEF0IHRoaXMgcG9pbnQgd2UgaGF2ZSBjb25maXJtZWQgdGhhdCB0aGUgbGFzdEhpdCBpcyB0aGUgb25seSBoaXQgb24gdGhhdCBzaGlwXG4gICAgICAgIC8vIFNvIHdlIHBpY2sgYSByYW5kb20gYWRqYWNlbnQgY2VsbCB0aGF0IHdlIGNhbiBhdHRhY2ssIGFuZCBhdHRhY2sgaXQhXG4gICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHNUb0F0dGFjayA9IGFkamFjZW50Q2VsbHMuZmlsdGVyKGNlbGwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjZWxsLmNlbGxSZXN1bHQgIT09ICdzdHJpbmcnICYmIGNlbGwuY2VsbFJlc3VsdCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2VsbCA9IGFkamFjZW50Q2VsbHNUb0F0dGFja1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhZGphY2VudENlbGxzVG9BdHRhY2subGVuZ3RoKV07XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbGwuYWRqYWNlbnRDZWxsKVxuICAgICAgICByZXR1cm4gY2VsbC5hZGphY2VudENlbGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNlbGwoZW5lbXkpIHtcbiAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGggPT09IDApIHJldHVybiAnTm8gc3F1YXJlcyB0byBhdHRhY2snO1xuICAgICAgICAvLyBHZXQgcm93IGFuZCBjb2wgZm9yIGEgcmFuZG9tIEFJIGF0dGFjayBmcm9tIHRoZSBhdmFpbGFibGVBdHRhY2tzIGFycmF5XG4gICAgICAgIGxldCBhcnJheVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGgpO1xuICAgICAgICBsZXQgYXJyYXlDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF2YWlsYWJsZUF0dGFja3NbYXJyYXlSb3ddLmxlbmd0aCk7XG4gICAgICAgIGxldCBjZWxsID0gdGhpcy5hdmFpbGFibGVBdHRhY2tzW2FycmF5Um93XVthcnJheUNvbF07XG4gICAgICAgIC8vIElmIHRoZSBzZWxlY3RlZCBjZWxsIGhhcyBubyBhZGphY2VudCBjZWxscyB0byBhdHRhY2ssIGdldCBhIGRpZmZlcmVudCByYW5kb20gY2VsbFxuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gdGhpcy5nZXRBbGxBZGphY2VudENlbGxzKGVuZW15LCBjZWxsKTtcbiAgICAgICAgaWYgKGFkamFjZW50Q2VsbHMuZXZlcnkoY2VsbCA9PiB0eXBlb2YgY2VsbC5jZWxsUmVzdWx0ICE9PSAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUNlbGwoZW5lbXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgYSBjZWxsIGZyb20gdGhlIGF2YWlsYWJsZUF0dGFja3MgYXJyYXlcbiAgICAvLyBDYWxsZWQgYnkgcGxheWVyLmpzIGFmdGVyIG1ha2luZyBhbiBhdHRhY2tcbiAgICBmdW5jdGlvbiByZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUF0dGFja3MoY2VsbCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmF2YWlsYWJsZUF0dGFja3MubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5hdmFpbGFibGVBdHRhY2tzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuYXZhaWxhYmxlQXR0YWNrc1tyb3ddW2NvbF07XG4gICAgICAgICAgICAgICAgaWYgKGNlbGxbMF0gPT09IHNxdWFyZVswXSAmJiBjZWxsWzFdID09PSBzcXVhcmVbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVBdHRhY2tzW3Jvd10uc3BsaWNlKGNvbCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUF0dGFja3Nbcm93XS5sZW5ndGggPT09IDApIHRoaXMuYXZhaWxhYmxlQXR0YWNrcy5zcGxpY2Uocm93LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRBZGphY2VudENlbGwoY2VsbCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gY2VsbDtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICByb3ctLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY29sLS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY29sKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICB9XG4gICAgLy8gR2l2ZW4gYSBjZWxsLCBmaW5kIHRoZSA0IHBvc3NpYmxlIGFkamFjZW50IGNlbGxzIGFuZCB0aGVpciBkaXJlY3Rpb25cbiAgICBmdW5jdGlvbiBnZXRBbGxBZGphY2VudENlbGxzKGVuZW15LCBjZWxsKSB7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZURpcmVjdGlvbnMubWFwKGRpcmVjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGphY2VudENlbGwgPSB0aGlzLmdldEFkamFjZW50Q2VsbChjZWxsLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgbGV0IGNlbGxSZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQuY2hlY2tTcXVhcmUoYWRqYWNlbnRDZWxsWzBdLCBhZGphY2VudENlbGxbMV0pO1xuICAgICAgICAgICAgaWYgKGNlbGxSZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tJZlNoaXBJc1N1bmsoZW5lbXksIGFkamFjZW50Q2VsbCkpIGNlbGxSZXN1bHQgPSAnc3Vuayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNlbGxSZXN1bHQsXG4gICAgICAgICAgICAgICAgYWRqYWNlbnRDZWxsLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvLyBDaGVjayBpZiBhIGNlbGwgaXMgYWRqYWNlbnQgdG8sIG9yIGluIHRoZSBzYW1lIHJvdy9jb2wgYXMgYW5vdGhlclxuICAgIC8vIFJldHVybiB0aGUgZGlyZWN0aW9uIHRvIHRoZSBjZWxsLCB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLCBhbmQgdGhlIGRpc3RhbmNlXG4gICAgZnVuY3Rpb24gZ2V0QWRqYWNlbmN5KGNlbGwsIG5laWdoYm91ckNlbGwpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjtcbiAgICAgICAgbGV0IG9wcG9zaXRlRGlyZWN0aW9uO1xuICAgICAgICBsZXQgZGlzdGFuY2U7XG4gICAgICAgIGlmIChjZWxsWzBdID09PSBuZWlnaGJvdXJDZWxsWzBdKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gY2VsbFsxXSAtIG5laWdoYm91ckNlbGxbMV07XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBkaWZmID4gMSA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgICAgICBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpZmYgPiAxID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoZGlmZik7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbFsxXSA9PT0gbmVpZ2hib3VyQ2VsbFsxXSkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGNlbGxbMF0gLSBuZWlnaGJvdXJDZWxsWzBdO1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGlmZiA+IDEgPyAnZG93bicgOiAndXAnO1xuICAgICAgICAgICAgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaWZmID4gMSA/ICd1cCcgOiAnZG93bic7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRpZmYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgICAgICBvcHBvc2l0ZURpcmVjdGlvbixcbiAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gTG9vayBmb3IgYSBwb3NzaWJsZSBjZWxsIHRvIGF0dGFjayBpbiBhIGdpdmVuIGRpcmVjdGlvbiAoc2VhcmNoIDQgY2VsbHMgb25seSlcbiAgICBmdW5jdGlvbiBnZXROZXh0QXR0YWNrYWJsZUNlbGwoZW5lbXksIGNlbGwsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgbmV4dENlbGwgPSBnZXRBZGphY2VudENlbGwoY2VsbCwgZGlyZWN0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXh0Q2VsbFN0YXR1cyA9IGVuZW15LmdhbWVib2FyZC5jaGVja1NxdWFyZShuZXh0Q2VsbFswXSwgbmV4dENlbGxbMV0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXh0Q2VsbFN0YXR1cyA9PT0gJ29iamVjdCcgfHwgbmV4dENlbGxTdGF0dXMgPT09IG51bGwpIHJldHVybiBuZXh0Q2VsbDtcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbFN0YXR1cyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAobmV4dENlbGxTdGF0dXMgPT09ICdtaXNzJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gV2Ugc2tpcCBvdmVyIGEgaGl0IChjb3VsZCBiZSBwYXJ0IG9mIHRoZSBzYW1lIHNoaXAgd2UncmUgYXR0YWNraW5nKSxcbiAgICAgICAgICAgIC8vIHVubGVzcyB0aGF0IHNoaXAgaXMgc3VuayAtIHRoZW4gd2Ugc2hvdWxkbid0IGtlZXAgYXR0YWNraW5nIGluIHRoYXQgZGlyZWN0aW9uXG4gICAgICAgICAgICBpZiAobmV4dENlbGxTdGF0dXMgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tJZlNoaXBJc1N1bmsoZW5lbXksIG5leHRDZWxsKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dENlbGwgPSBnZXRBZGphY2VudENlbGwobmV4dENlbGwsIGRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbGlwRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAncmlnaHQnO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnbGVmdCc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGaW5kIHRoZSBzaGlwIGF0IGEgY2VydGFpbiBjZWxsIGFuZCBjaGVjayBpZiBpdCBpcyBzdW5rXG4gICAgLy8gSWYgaXQgaXMsIHJlbW92ZSBpdHMgc3F1YXJlcyBmcm9tIHRoZSBsYXN0SGl0QXJyYXkgYW5kIHJldHVybiB0cnVlXG4gICAgZnVuY3Rpb24gY2hlY2tJZlNoaXBJc1N1bmsoZW5lbXksIGNlbGwpIHtcbiAgICAgICAgY29uc3QgZW5lbXlTaGlwcyA9IGVuZW15LmdhbWVib2FyZC5wbGFjZWRTaGlwcztcbiAgICAgICAgbGV0IGhpdFNoaXA7XG4gICAgICAgIGVuZW15U2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLnNxdWFyZXMuc29tZShzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoc3F1YXJlWzBdID09PSBjZWxsWzBdICYmIHNxdWFyZVsxXSA9PT0gY2VsbFsxXSlcbiAgICAgICAgICAgIH0pKSBoaXRTaGlwID0gc2hpcDtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGhpdFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIGhpdFNoaXAuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxhc3RIaXRBcnJheS5maW5kSW5kZXgobG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxvY2F0aW9uWzBdID09PSBzcXVhcmVbMF0gJiYgbG9jYXRpb25bMV0gPT09IHNxdWFyZVsxXSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5sYXN0SGl0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGF2YWlsYWJsZUF0dGFja3MsXG4gICAgICAgIGxhc3RTaGlwLFxuICAgICAgICBsYXN0SGl0QXJyYXksXG4gICAgICAgIHBvc3NpYmxlRGlyZWN0aW9ucyxcbiAgICAgICAgY29uY3VycmVudE1pc3NlcyxcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICBnZXRSYW5kb21DZWxsLFxuICAgICAgICByZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUF0dGFja3MsXG4gICAgICAgIGdldEFkamFjZW50Q2VsbCxcbiAgICAgICAgZ2V0QWxsQWRqYWNlbnRDZWxscyxcbiAgICAgICAgZ2V0TmV4dEF0dGFja2FibGVDZWxsLFxuICAgICAgICBnZXRBZGphY2VuY3ksXG4gICAgICAgIGZsaXBEaXJlY3Rpb24sXG4gICAgICAgIGNoZWNrSWZTaGlwSXNTdW5rXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBdHRhY2tBcnJheSgpIHtcbiAgICBjb25zdCBhdHRhY2tBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICByb3dBcnJheS5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICB9XG4gICAgICAgIGF0dGFja0FycmF5LnB1c2gocm93QXJyYXkpO1xuICAgIH1cbiAgICByZXR1cm4gYXR0YWNrQXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFpTG9naWM7IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZSc7XG5pbXBvcnQgY3JlYXRlSGVhZGVyQm94IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBjcmVhdGVGb290ZXJCb3ggZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IHNoaXBUeXBlcyBmcm9tICcuLi9zaGlwVHlwZXMnO1xuaW1wb3J0IHNldHVwIGZyb20gJy4vcGxhY2VTaGlwcyc7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYXBwLmlkID0gJ2FwcCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XG5jb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXJCb3goKTtcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlckJveCgpO1xuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ2FtZUNvbnRhaW5lci5pZCA9ICdnYW1lLWNvbnRhaW5lcic7XG5hcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmFwcC5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcbmFwcC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5jb25zdCBuZXdHYW1lQnV0dG9uID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZS1idXR0b24nKTtcbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdHYW1lKTtcblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbm5ld0dhbWUoKTtcblxuZnVuY3Rpb24gc3RhcnRHYW1lKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICBnYW1lLm5ld0dhbWUocGxheWVyMSwgcGxheWVyMik7XG4gICAgZHJhd0dhbWUoKTtcbn1cblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgICBjb25zdCBuZXdQbGF5ZXIxID0gZ2FtZS5jcmVhdGVQbGF5ZXIoJ015c3RlcmlvJywgMSk7XG4gICAgY29uc3QgbmV3UGxheWVyMiA9IGdhbWUuY3JlYXRlUGxheWVyKGZhbHNlLCAyKTtcbiAgICBuZXdQbGF5ZXIyLmdhbWVib2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICBkcmF3U2V0dXAobmV3UGxheWVyMSk7XG4gICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwLWJ1dHRvbi1zdGFydCcpO1xuICAgIHN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAobmV3UGxheWVyMS5nYW1lYm9hcmQucGxhY2VkU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBzdGFydEdhbWUobmV3UGxheWVyMSwgbmV3UGxheWVyMik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBkcmF3R2FtZSgpIHtcbiAgICBjbGVhckNvbnRhaW5lcihnYW1lQ29udGFpbmVyKTtcbiAgICBjb25zdCBwbGF5ZXIxQm9hcmRDb250YWluZXIgPSBkcmF3Qm9hcmRDb250YWluZXIoZ2FtZS5wbGF5ZXIxKTtcbiAgICBjb25zdCBwbGF5ZXIyQm9hcmRDb250YWluZXIgPSBkcmF3Qm9hcmRDb250YWluZXIoZ2FtZS5wbGF5ZXIyKTtcbiAgICBwb3B1bGF0ZUJvYXJkKGdhbWUucGxheWVyMSwgcGxheWVyMUJvYXJkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChwbGF5ZXIxQm9hcmRDb250YWluZXIsIHBsYXllcjJCb2FyZENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cChwbGF5ZXIpIHtcbiAgICBjbGVhckNvbnRhaW5lcihnYW1lQ29udGFpbmVyKTtcbiAgICBjb25zdCBzZXR1cEJvYXJkID0gc2V0dXAuZHJhd1NldHVwQm9hcmQocGxheWVyLCBkcmF3Qm9hcmRDb250YWluZXIocGxheWVyKSk7XG4gICAgY29uc3Qgc2V0dXBTaGlwcyA9IHNldHVwLmRyYXdTZXR1cFNoaXBzKCk7XG5cbiAgICBjb25zdCBzaGlwcyA9IHNldHVwU2hpcHMucXVlcnlTZWxlY3RvckFsbCgnLnNldHVwLXNoaXAtYm94Jyk7XG5cbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChzZXR1cEJvYXJkLCBzZXR1cFNoaXBzKTtcbn1cblxuXG4vL1xuLy8gXG4vLyBJRiBHQU1FIENPTlRBSU5FUiBIRUlHSFQgSVMgQklHR0VSIFRIQU4gNTAwUFggKEkuRS4sIFdSQVBQRUQpLCBBREpVU1QgSEVBREVSIFRPIFNVSVRcbi8vIFRISVMgSVMgQSBWRVJZIFNDVUZGRUQgU09MVVRJT04gQU5EIFBPUkJBQkxZIEJSRUFLUyBTT01FV0hFUkVcbi8vXG4vL1xuY29uc3QgZ2FtZVNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyeSA9PiB7XG4gICAgaWYgKGVudHJ5WzBdLmNvbnRlbnRSZWN0LmhlaWdodCA+IDUwMCkgaGVhZGVyLnN0eWxlLndpZHRoID0gJzMyMHB4JztcbiAgICBlbHNlIGhlYWRlci5zdHlsZS53aWR0aCA9IGAke2VudHJ5WzBdLmNvbnRlbnRSZWN0LndpZHRofXB4YDtcbiAgICAvLyBoZWFkZXIuc3R5bGUud2lkdGggPSBgJHtlbnRyeVswXS5jb250ZW50UmVjdC53aWR0aH1weGA7XG59KVxuXG5nYW1lU2l6ZU9ic2VydmVyLm9ic2VydmUoZ2FtZUNvbnRhaW5lcik7XG5cbi8vXG4vL1xuLy9cbi8vXG5cbi8vIEhvbGQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBwbGF5ZXIncyBib2FyZCAtIG5hbWUsIGJvYXJkIGFuZCBzaGlwcyBsZWZ0XG5mdW5jdGlvbiBkcmF3Qm9hcmRDb250YWluZXIocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb250YWluZXInKTtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAvLyBDQU4gVFJJTSBUSElTIExBVEVSIFBST0JBQkxZXG4gICAgaWYgKHBsYXllcikgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSdzIGZsZWV0YDtcbiAgICBlbHNlIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSAneW91ciBjdXJyZW50IGZsZWV0JztcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJOYW1lLCBwbGF5ZXJCb2FyZCk7XG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xufVxuXG4vLyBEcmF3IGEgZ3JpZCBvZiBjZWxscyB3aXRoIGRhdGEgYXR0cmlidXRlcyBmb3IgdGhlaXIgbG9jYXRpb25zXG5mdW5jdGlvbiBkcmF3Qm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgLy8gQ0FOIFRSSU0gVEhJUyBMQVRFUiBQUk9CQUJMWVxuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBsYXllciA9IHBsYXllciA/IHBsYXllci5udW1iZXIgOiAwO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBNQVkgTkVFRCBUTyBSRVZJU0VcbiAgICAgICAgICAgIC8vIE5FRUQgVE8gQUREIEVWRU5UIExJU1RFTkVSUyBPTkxZIEZPUiBPUFBPU0lORyBQTEFZRVInUyBCT0FSRFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlmIChwbGF5ZXIgJiYgcGxheWVyLmlzQUkpIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Gb3JBdHRhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbi8vIFVwb24gY2xpY2tpbmcgYSBjZWxsLCBhdHRhY2sgdGhlIHJlbGV2YW50IHNxdWFyZSwgaWYgYWxsb3dlZFxuLy8gUGFzcyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBhdHRhY2sgdG8gc3R5bGVBdHRhY2tlZENlbGwgZnVuY3Rpb25cbmZ1bmN0aW9uIGxpc3RlbkZvckF0dGFjayhldmVudCkge1xuICAgIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPSBjZWxsLmRhdGFzZXQucGxheWVyO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllck51bWJlciA9IGRlZmVuZGluZ1BsYXllck51bWJlciA9PT0gJzEnID8gJzInIDogJzEnO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllciA9IGdhbWVbYHBsYXllciR7YXR0YWNraW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllciA9IGdhbWVbYHBsYXllciR7ZGVmZW5kaW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXIgIT09IGF0dGFja2luZ1BsYXllcikgcmV0dXJuO1xuICAgIGNvbnN0IHJvdyA9IGNlbGwuZGF0YXNldC5yb3c7XG4gICAgY29uc3QgY29sID0gY2VsbC5kYXRhc2V0LmNvbDtcbiAgICBjb25zdCBbcmVzdWx0LCBsb2NhdGlvbiwgc2hpcF0gPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGRlZmVuZGluZ1BsYXllciwgcm93LCBjb2wpO1xuICAgIHN0eWxlQXR0YWNrZWRDZWxsKGNlbGwsIGRlZmVuZGluZ1BsYXllck51bWJlciwgcmVzdWx0LCBzaGlwKTtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSlcbiAgICBuZXh0VHVybigpO1xufVxuXG4vLyBDYWxsIGFuIGF0dGFjayBmb3IgdGhlIEFJXG5mdW5jdGlvbiBjYWxsQUlBdHRhY2soYWkpIHtcbiAgICBpZiAoYWkgIT09IGdhbWUuY3VycmVudFBsYXllcikgcmV0dXJuO1xuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllck51bWJlciA9IGdhbWUuZGVmZW5kaW5nUGxheWVyID09PSBnYW1lLnBsYXllcjEgPyAnMScgOiAnMic7XG4gICAgY29uc3QgW3Jlc3VsdCwgbG9jYXRpb24sIHNoaXBdID0gYWkuYXR0YWNrKGdhbWUuZGVmZW5kaW5nUGxheWVyKTtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPScke2RlZmVuZGluZ1BsYXllck51bWJlcn0nXVtkYXRhLXJvdz0nJHtsb2NhdGlvblswXX0nXVtkYXRhLWNvbD0nJHtsb2NhdGlvblsxXX0nXWApXG4gICAgc3R5bGVBdHRhY2tlZENlbGwoY2VsbCwgZGVmZW5kaW5nUGxheWVyTnVtYmVyLCByZXN1bHQsIHNoaXApXG4gICAgbmV4dFR1cm4oKTtcbn1cblxuLy8gU3R5bGUgYXR0YWNrZWQgY2VsbCBiYXNlZCBvbiBhIGhpdCBvciBtaXNzXG4vLyBJZiB0aGUgc2hpcCBpcyBzdW5rLCBzdHlsZSBlYWNoIG9mIHRoZSBzaGlwJ3MgY2VsbHMgd2l0aCB0aGUgLmNlbGwtc3VuayBjbGFzc1xuZnVuY3Rpb24gc3R5bGVBdHRhY2tlZENlbGwoY2VsbCwgZGVmZW5kaW5nUGxheWVyTnVtYmVyLCByZXN1bHQsIHNoaXApe1xuICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKXtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLWhpdCcpO1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSl7XG4gICAgICAgICAgICBzaGlwLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9JyR7ZGVmZW5kaW5nUGxheWVyTnVtYmVyfSddW2RhdGEtcm93PScke3NxdWFyZVswXX0nXVtkYXRhLWNvbD0nJHtzcXVhcmVbMV19J11gKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1zdW5rJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWlzcycpO1xufVxuXG4vLyBIYW5kbGUgZW5kLW9mLXR1cm4gZXZlbnRzXG5mdW5jdGlvbiBuZXh0VHVybigpIHtcbiAgICBjb25zdCB3aW5uZXIgPSBnYW1lLmNoZWNrR2FtZU92ZXIoKTtcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICAgIHJldHVybiBlbmRHYW1lKHdpbm5lcik7XG4gICAgfTtcbiAgICBnYW1lLmNoYW5nZVR1cm4oKTtcbiAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyLmlzQUkpIHtcbiAgICAgICAgY2FsbEFJQXR0YWNrKGdhbWUuY3VycmVudFBsYXllcilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSkpO1xuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1ZpY3RvcnlDb250YWluZXIod2lubmVyKSk7XG59XG5cbi8vIFBvcHVwIHZpY3RvcnkgY29udGFpbmVyXG5mdW5jdGlvbiBkcmF3VmljdG9yeUNvbnRhaW5lcih3aW5uZXIpe1xuICAgIGNvbnN0IGxvc2VyID0gZ2FtZS5jaGVja0dhbWVPdmVyKCkgPT09IGdhbWUucGxheWVyMSA/IGdhbWUucGxheWVyMiA6IGdhbWUucGxheWVyMTtcbiAgICBjb25zdCB2aWN0b3J5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmljdG9yeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHZpY3RvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdmljdG9yeVRpdGxlLnRleHRDb250ZW50ID0gd2lubmVyLmlzQUkgPyAnVE9UQUwgREVGRUFUJyA6ICdUT1RBTCBWSUNUT1JZJztcbiAgICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIubmFtZX0gaGFzIGNsYWltZWQgZG9taW5hdGlvbiFgO1xuICAgIGNvbnN0IGxvc2VyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb3NlclRleHQudGV4dENvbnRlbnQgPSBgJHtsb3Nlci5uYW1lfSdzIGZsZWV0IGlzIHN1bmsuYFxuICAgIHZpY3RvcnlDb250YWluZXIuYXBwZW5kKHZpY3RvcnlUaXRsZSwgd2lubmVyVGV4dCwgbG9zZXJUZXh0KTtcbiAgICByZXR1cm4gdmljdG9yeUNvbnRhaW5lcjtcbn1cblxuLy8gRHJhdyB0aGUgc2hpcHMgdG8gdGhlIHBsYXllcidzIG9uLXNjcmVlbiBib2FyZCBzbyB0aGV5IGNhbiBzZWUgdGhlaXIgZmxlZXRcbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQocGxheWVyLCBib2FyZCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYCk7XG4gICAgICAgICAgICBpZiAoc3F1YXJlICE9PSBudWxsICYmIHR5cGVvZiBzcXVhcmUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLXNoaXAnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NlbGwtc2hpcCcpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIEZvb3RlciBsaW5rIGFuZCBsaWdodC9kYXJrIG1vZGUgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXV0aG9yTmFtZS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWF1dGhvclwiKTtcbiAgICBhdXRob3JOYW1lLnRleHRDb250ZW50ID0gXCJDYXJsIE1hZHNlbiAyMDIyXCI7XG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGZvb3RlckxpbmsuaWQgPSBcImZvb3Rlci1saW5rXCI7XG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2Vsc2FlcG8vb2Rpbi1iYXR0bGVzaGlwXCIpO1xuICAgIGNvbnN0IGdpdEh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBnaXRIdWJMb2dvLmNsYXNzTGlzdC5hZGQoXCJmYS1icmFuZHNcIiwgXCJmYS1naXRodWJcIiwgXCJmYS14bFwiLCBcImZvb3Rlci1sb2dvXCIpO1xuICAgIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViTG9nbyk7XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdG9nZ2xlRGFya01vZGUoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gICAgICBkYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtbW9vblwiKTtcbiAgICAgIGRhcmtNb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1zdW5cIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZURhcmtTdG9yYWdlKCkge1xuICAgICAgaWYgKGdldFRoZW1lKCkgPT09IFwiZGFya1wiKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBpc0Jyb3dzZXJEYXJrTW9kZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGRhcmtNb2RlQnV0dG9uLmlkID0gXCJmb290ZXItZGFyay1tb2RlXCI7XG4gICAgZGFya01vZGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtbW9vblwiLCBcImZhLXhsXCIpO1xuICAgIGRhcmtNb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlRGFya01vZGUoKTtcbiAgICAgIHRvZ2dsZURhcmtTdG9yYWdlKCk7XG4gICAgfSk7XG4gICAgXG4gICAgaWYgKGdldFRoZW1lKCkgPT09IFwiZGFya1wiIHx8ICghZ2V0VGhlbWUoKSAmJiBpc0Jyb3dzZXJEYXJrTW9kZSgpKSkge1xuICAgICAgdG9nZ2xlRGFya01vZGUoKTtcbiAgICB9XG4gICAgXG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGF1dGhvck5hbWUpO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZGFya01vZGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGZvb3RlckJveDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyOyIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlckJveCgpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdiYXR0bGVzaGlwLic7XG5cbiAgICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3R2FtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctZ2FtZS1idXR0b24nKTtcbiAgICBuZXdHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ25ldyBnYW1lJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5ld0dhbWVCdXR0b24pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyQm94OyIsImltcG9ydCBzaGlwVHlwZXMgZnJvbSAnLi4vc2hpcFR5cGVzJztcblxubGV0IHBsYXllcjtcbmxldCBib2FyZDtcblxuLy8gVGhpcyBvYmplY3QgaG9sZHMgdGhlIGRhdGEgZm9yIHRoZSBkcmFnIG1ldGhvZHMgdG8gdXNlXG4vLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSB1cGRhdGVkIGFzIHRoZSB1c2VyIGRyYWdzIGFuZCBkcm9wcyBzaGlwc1xuY29uc3QgZHJhZ0RhdGEgPSB7XG4gICAgc2hpcE9iamVjdDogbnVsbCxcbiAgICBzaGlwRWxlbWVudDogbnVsbCxcbiAgICBvZmZzZXRYOiBudWxsLFxuICAgIG9mZnNldFk6IG51bGwsXG4gICAgcm93RGlmOiAwLFxuICAgIGNvbERpZjogMCxcbiAgICBzaGlwSG9tZUNvbnRhaW5lcjogbnVsbCxcbiAgICBwcmV2aW91c0NvbnRhaW5lcjogbnVsbCxcbiAgICBwcmV2aW91c0NlbGw6IG51bGwsXG4gICAgY3VycmVudENlbGw6IG51bGwsXG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cEJvYXJkKHNldHVwUGxheWVyLCBzZXR1cEJvYXJkKSB7XG4gICAgcGxheWVyID0gc2V0dXBQbGF5ZXI7XG4gICAgYm9hcmQgPSBzZXR1cEJvYXJkO1xuICAgIGNvbnN0IHNldHVwQ2VsbHMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpXG4gICAgc2V0dXBDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ0xlYXZlKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG5cbiAgICAgICAgLy8gY2VsbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBkcmFnRW50ZXIpXG4gICAgfSlcbiAgICByZXR1cm4gc2V0dXBCb2FyZDtcbn1cblxuZnVuY3Rpb24gZHJhd1NldHVwU2hpcHMoKSB7XG4gICAgY29uc3Qgc2V0dXBTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHVwU2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcHMtY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2V0dXBTaGlwc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHVwU2hpcHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcHMtaGVhZGVyJyk7XG4gICAgY29uc3Qgc2V0dXBTaGlwc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzZXR1cFNoaXBzVGl0bGUudGV4dENvbnRlbnQgPSAncGxhY2UgeW91ciBzaGlwczonO1xuICAgIGNvbnN0IHNldHVwU2hpcHNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNldHVwU2hpcHNJbmZvLnRleHRDb250ZW50ID0gJ2RvdWJsZSBjbGljayB0byByb3RhdGUgKG9uY2UgcGxhY2VkKSc7XG4gICAgY29uc3Qgc2V0dXBTaGlwc09wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR1cFNoaXBzT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwcy1vcHRpb25zJyk7XG4gICAgY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRHYW1lLmNsYXNzTGlzdC5hZGQoJ3NldHVwLWJ1dHRvbi1zdGFydCcpO1xuICAgIHN0YXJ0R2FtZS50ZXh0Q29udGVudCA9ICdUTyBCQVRUTEUhJztcbiAgICBjb25zdCByYW5kb21TaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJhbmRvbVNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NldHVwLWJ1dHRvbi1yYW5kb20nKTtcbiAgICByYW5kb21TaGlwcy50ZXh0Q29udGVudCA9ICdyYW5kb21pemUnO1xuICAgIHJhbmRvbVNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmFuZG9taXplRmxlZXQpO1xuICAgIHNldHVwU2hpcHNPcHRpb25zLmFwcGVuZChzdGFydEdhbWUsIHJhbmRvbVNoaXBzKTtcbiAgICBjb25zdCBzaGlwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcFR5cGVzKSB7XG4gICAgICAgIHNoaXBMaXN0LmFwcGVuZENoaWxkKGRyYXdTaGlwKHNoaXBUeXBlc1tzaGlwXSkpO1xuICAgIH1cbiAgICBzZXR1cFNoaXBzSGVhZGVyLmFwcGVuZChzZXR1cFNoaXBzVGl0bGUsIHNldHVwU2hpcHNJbmZvKVxuICAgIHNldHVwU2hpcHNDb250YWluZXIuYXBwZW5kKHNldHVwU2hpcHNIZWFkZXIsIHNoaXBMaXN0LCBzZXR1cFNoaXBzT3B0aW9ucyk7XG4gICAgcmV0dXJuIHNldHVwU2hpcHNDb250YWluZXI7XG59XG5cbi8vIERyYXcgYSBzaGlwIHRvIGJlIHBsYWNlZCwgZ2l2aW5nIHRoZSBlbGVtZW50IGFuIElEIG9mIHRoZSBzaGlwJ3MgdHlwZVxuZnVuY3Rpb24gZHJhd1NoaXAoc2hpcCkge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAnKTtcbiAgICBzaGlwQ29udGFpbmVyLmlkID0gYCR7c2hpcC5uYW1lfS1ob21lYDtcbiAgICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcEJveC5pZCA9IHNoaXAubmFtZTtcbiAgICBzaGlwQm94LmRhdGFzZXQubGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgc2hpcEJveC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLWJveCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzaGlwQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLWNlbGwnKTtcbiAgICAgICAgc2hpcEJveC5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG4gICAgfVxuICAgIHNoaXBCb3guZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBzaGlwQm94LmRhdGFzZXQuYWxpZ25tZW50ID0gJ2hvcml6b250YWwnO1xuICAgIHNoaXBCb3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgICBzaGlwQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRW5kKTtcbiAgICBzaGlwQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgcm90YXRlU2hpcCk7XG5cbiAgICAvLyBzaGlwQm94LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyAgICAgZHJhZ1N0YXJ0KGV2ZW50KTtcbiAgICAvLyB9KVxuICAgIHNoaXBCb3guYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHgsIHkpXG4gICAgICAgIGNvbnN0IHRvdWNoQ2VsbCA9IGVsZW1lbnRzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpO1xuICAgICAgICBpZiAodG91Y2hDZWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRyYWdFbnRlcihldmVudCwgdG91Y2hDZWxsWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYWdMZWF2ZShldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEFkZCBpbiBhIGdob3N0IHNoaXBcbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgLy8gUFVUIFRISVMgSU5UTyBXRUIgVkVSU0lPTiBUT09cbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuICAgICAgICBjb25zdCBwcmV2Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdob3N0LXNoaXAnKTtcbiAgICAgICAgaWYgKHByZXZCb3gpIHByZXZCb3gucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IG5ld0JveCA9IHNoaXBCb3guY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCB0b3VjaExvY2F0aW9uID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcbiAgICAgICAgaWYgKGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50ID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgIG5ld0JveC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLXZlcnRpY2FsJylcbiAgICAgICAgfVxuICAgICAgICBuZXdCb3guY2xhc3NMaXN0LmFkZCgnZ2hvc3Qtc2hpcCcpXG4gICAgICAgIG5ld0JveC5zdHlsZS5sZWZ0ID0gYCR7dG91Y2hMb2NhdGlvbi5wYWdlWCAtIGRyYWdEYXRhLm9mZnNldFh9cHhgO1xuICAgICAgICBuZXdCb3guc3R5bGUudG9wID0gYCR7dG91Y2hMb2NhdGlvbi5wYWdlWSAtIGRyYWdEYXRhLm9mZnNldFl9cHhgO1xuICAgICAgICBhcHAuYXBwZW5kQ2hpbGQobmV3Qm94KVxuICAgIH0pXG4gICAgc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBwcmV2Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdob3N0LXNoaXAnKTtcbiAgICAgICAgaWYgKHByZXZCb3gpIHByZXZCb3gucmVtb3ZlKCk7XG4gICAgICAgIGRyYWdFbmQoZXZlbnQpO1xuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludCh4LCB5KVxuICAgICAgICBjb25zdCB0b3VjaENlbGwgPSBlbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKTtcbiAgICAgICAgaWYgKHRvdWNoQ2VsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkcm9wKGV2ZW50LCB0b3VjaENlbGxbMF0pO1xuICAgICAgICB9O1xuICAgIH0pXG5cbiAgICAvLyBBcyBtb2JpbGUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCBkb3VibGUgdGFwLCB3ZSBhZGQgYSB0aW1lciBpbnRvIHRoZSB0b3VjaHN0YXJ0IGV2ZW50IGxpc3RlbmVyXG4gICAgc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIERpc2FibGUgYnJvd3NlciBkZWZhdWx0IHpvb20gb24gZG91YmxlIHRhcFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB0aW1lID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVCZXR3ZWVuVGFwcyA9IDIwMDtcbiAgICAgICAgaWYgKCh0aW1lIC0gc2hpcEJveC5sYXN0Q2xpY2spIDwgdGltZUJldHdlZW5UYXBzKSB7XG4gICAgICAgICAgICByb3RhdGVTaGlwKGV2ZW50KTtcbiAgICAgICAgICAgIGRyYWdTdGFydChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmFnU3RhcnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBCb3gubGFzdENsaWNrID0gdGltZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmIChzaGlwLm5hbWUgPT09ICdwYXRyb2wnKSBzaGlwTmFtZS50ZXh0Q29udGVudCA9ICdwYXRyb2wgYm9hdCc7XG4gICAgZWxzZSBzaGlwTmFtZS50ZXh0Q29udGVudCA9IHNoaXAubmFtZTtcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZChzaGlwTmFtZSwgc2hpcEJveCk7XG4gICAgcmV0dXJuIHNoaXBDb250YWluZXI7XG59XG5cbi8vIFBsYWNlIGFsbCBzaGlwJ3MgcmFuZG9tbHkgb24gdGhlIHBsYXllcidzIGdhbWVib2FyZFxuLy8gVGhlbiBhcHBlbmQgZWFjaCBzaGlwIGVsZW1lbnQgdG8gdGhlIHBsYWNlZCBzaGlwJ3Mgb3JpZ2luIHdpdGggYXBwcm9wcmlhdGUgc3R5bGluZ1xuZnVuY3Rpb24gcmFuZG9taXplRmxlZXQoKSB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZUFsbFNoaXBzUmFuZG9tbHkoKTtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlZFNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBzaGlwLnR5cGU7XG4gICAgICAgIGNvbnN0IG9yaWdpbiA9IHNoaXAuc3F1YXJlc1swXTtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gc2hpcC5hbGlnbm1lbnQ7XG4gICAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dHlwZX1gKTtcbiAgICAgICAgc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XG4gICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtZHJvcHBlZCcpO1xuICAgICAgICBpZiAoYWxpZ25tZW50ID09PSAndmVydGljYWwnKSBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG4gICAgICAgIGVsc2Ugc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gb3JpZ2luO1xuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbD0nJHtjb2x9J11gKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgfSlcbn1cblxuLy8gV2hlbiBhIHVzZXIgZ3JhYnMgYSBzaGlwIGVsZW1lbnQsIHdlIHRyYWNrIHRoZSB1c2VyJ3MgY3Vyc29yIGxvY2F0aW9uIGZvciB0aGUgZHJhZ0VudGVyIGFuZCBkcm9wIGV2ZW50c1xuLy8gV2hlbiB0aGUgc2hpcCBpcyBncmFiYmVkIGZyb20gdGhlIGNlbnRlciwgdGhlIGN1cnNvciBkb2VzIG5vdCBtYXRjaCB1cCB3aXRoIHRoZSBzaGlwJ3Mgb3JpZ2luIGNlbGxcbi8vIFRoZSBjZWxsRGlmIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgb3JpZ2luIGNlbGwgdG8gdGhlIGNlbGwgd2hlcmUgdGhlIHVzZXIgaGFzIGdyYWJiZWQgdGhlIHNoaXAgZWxlbWVudFxuLy8gaS5lLiwgaWYgYSBzaGlwIG9mIGxlbmd0aCA1IGlzIGdyYWJiZWQgZnJvbSB0aGUgNHRoIGNlbGwsIHRoZSBjZWxsRGlmIHdpbGwgYmUgM1xuZnVuY3Rpb24gdXBkYXRlQ2VsbERpZihldmVudCkge1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgbGV0IGJjciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB4ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYIC0gYmNyLng7XG4gICAgICAgIHkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgLSBiY3IueTtcbiAgICAgICAgZHJhZ0RhdGEub2Zmc2V0WCA9IHg7XG4gICAgICAgIGRyYWdEYXRhLm9mZnNldFkgPSB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBldmVudC5vZmZzZXRYO1xuICAgICAgICB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IGNlbGxTaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwLXNoaXAtY2VsbCcpLm9mZnNldFdpZHRoO1xuICAgIGlmIChkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGRyYWdEYXRhLnJvd0RpZiA9IDA7XG4gICAgICAgIGRyYWdEYXRhLmNvbERpZiA9IE1hdGguZmxvb3IoeCAvIChjZWxsU2l6ZSArIDIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnRGF0YS5yb3dEaWYgPSBNYXRoLmZsb29yKHkgLyAoY2VsbFNpemUgKyAyKSk7XG4gICAgICAgIGRyYWdEYXRhLmNvbERpZiA9IDA7XG4gICAgfVxufVxuXG4vLyBIYW5kbGUgbG9naWMgZm9yIHJvdGF0aW5nIGEgcGxhY2VkIHNoaXAgLSByb3RhdGlvbiBpcyBhcm91bmQgdGhlIG9yaWdpblxuZnVuY3Rpb24gcm90YXRlU2hpcChldmVudCkge1xuICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZHJhZ0RhdGEuc2hpcEVsZW1lbnQ7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBUeXBlc1tzaGlwRWxlbWVudC5pZF0ubGVuZ3RoO1xuICAgIGNvbnN0IG9yaWdpbkNlbGwgPSBzaGlwRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIC8vIElmIHRoZSBzaGlwIGlzIG5vdCBwbGFjZWQgaW4gYSBjZWxsLCByZXR1cm5cbiAgICBpZiAoIW9yaWdpbkNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHJldHVybjtcbiAgICBjb25zdCBvcmlnaW5Sb3cgPSBwYXJzZUludChvcmlnaW5DZWxsLmRhdGFzZXQucm93KTtcbiAgICBjb25zdCBvcmlnaW5Db2wgPSBwYXJzZUludChvcmlnaW5DZWxsLmRhdGFzZXQuY29sKTtcbiAgICBjb25zb2xlLmxvZyhvcmlnaW5Sb3csIG9yaWdpbkNvbClcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlbW92ZVNoaXAoW29yaWdpblJvdywgb3JpZ2luQ29sXSk7XG4gICAgbGV0IHJvdyA9IG9yaWdpblJvdztcbiAgICBsZXQgY29sID0gb3JpZ2luQ29sO1xuICAgIGxldCBvcmlnaW5BbGlnbm1lbnQgPSBzaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudDtcbiAgICBsZXQgbmV3QWxpZ25tZW50O1xuICAgIC8vIElmIHRoZSByb3RhdGlvbiBjYXVzZXMgdGhlIHNoaXAgdG8gYmUgb2ZmIHRoZSBncmlkLCBjaGFuZ2UgdGhlIG9yaWdpbiBjZWxsIHRvIGFsbG93IGl0cyBsZW5ndGhcbiAgICAvLyBUaGlzIGFsbG93cyBhIHNoaXAgcGxhY2VkIG5lYXIgdGhlIGZhciBlZGdlIG9mIHRoZSBncmlkIHRvIHN0aWxsIGJlIHJvdGF0ZWRcbiAgICBpZiAob3JpZ2luQWxpZ25tZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgbmV3QWxpZ25tZW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgaWYgKCgxMCAtIHJvdykgPCBzaGlwTGVuZ3RoKSByb3cgPSAxMCAtIHNoaXBMZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3QWxpZ25tZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICBpZiAoKDEwIC0gY29sKSA8IHNoaXBMZW5ndGgpIGNvbCA9IDEwIC0gc2hpcExlbmd0aDtcbiAgICB9XG4gICAgLy8gQXR0ZW1wdCB0byBwbGFjZSB0aGUgc2hpcCBhbG9uZyBlYWNoIHJvdyAoaWYgaG9yaXpvbnRhbCkgb3IgY29sdW1uIChpZiB2ZXJ0aWNhbClcbiAgICAvLyBBdHRlbXB0IHRoaXMgMTAgdGltZXMgLSBmb3IgZWFjaCByb3cgb3IgY29sdW1uLCBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgZ3JpZFxuICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgbGV0IHNoaXBTcXVhcmVzID0gcGxheWVyLmdhbWVib2FyZC5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIFtyb3csIGNvbF0sIG5ld0FsaWdubWVudCk7XG4gICAgd2hpbGUgKHNoaXBTcXVhcmVzLmlzVmFsaWQgPT09IGZhbHNlICYmIGF0dGVtcHRzIDwgMTApIHtcbiAgICAgICAgaWYgKG5ld0FsaWdubWVudCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICByb3cgPSByb3cgPCA5ID8gcm93ICsgMSA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjb2wgPSBjb2wgPCA5ID8gY29sICsgMSA6IDA7XG4gICAgICAgIHNoaXBTcXVhcmVzID0gcGxheWVyLmdhbWVib2FyZC5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIFtyb3csIGNvbF0sIG5ld0FsaWdubWVudCk7XG4gICAgICAgIGF0dGVtcHRzKys7XG4gICAgfVxuICAgIC8vIElmIGEgdmFsaWQgcGxhY2VtZW50IGlzIGZvdW5kLCBwbGFjZSB0aGUgc2hpcCBvbiBib3RoIHRoZSBzZXR1cCBib2FyZCBhbmQgcGxheWVyJ3MgZ2FtZWJvYXJkXG4gICAgLy8gU3R5bGUgYXBwcm9wcmlhdGVseSB3aXRoIGEgdmVydGljYWwgY2xhc3MgaWYgbmVlZGVkXG4gICAgaWYgKHNoaXBTcXVhcmVzLmlzVmFsaWQpIHtcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEVsZW1lbnQuaWQsIFtyb3csIGNvbF0sIG5ld0FsaWdubWVudCk7XG4gICAgICAgIGNvbnN0IG5ld09yaWdpbkNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xuICAgICAgICBuZXdPcmlnaW5DZWxsLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICAgICAgc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQgPSBuZXdBbGlnbm1lbnQ7XG4gICAgICAgIGlmIChuZXdBbGlnbm1lbnQgPT09ICd2ZXJ0aWNhbCcpIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbiAgICAgICAgZWxzZSBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG4gICAgfVxuICAgIC8vIEVsc2UsIHBsYWNlIHRoZSBzaGlwIGJhY2sgaW50byB0aGUgcGxheWVyJ3MgZ2FtZWJvYXJkXG4gICAgZWxzZSB7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBFbGVtZW50LmlkLCBbb3JpZ2luUm93LCBvcmlnaW5Db2xdLCBvcmlnaW5BbGlnbm1lbnQpO1xuICAgIH1cbn1cblxuLy8gV2hlbiB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgYSBzaGlwLCB3ZSBzdG9yZSBpdHMgaW5mb3JtYXRpb24gaW4gZHJhZ0RhdGFcbmZ1bmN0aW9uIGRyYWdTdGFydChldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEhvbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZH0taG9tZWApO1xuICAgICAgICBkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkcmFnRGF0YS5zaGlwRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEhvbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC50YXJnZXQuaWR9LWhvbWVgKTtcbiAgICAgICAgZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9O1xuICAgIHVwZGF0ZUNlbGxEaWYoZXZlbnQpXG4gICAgaWYgKGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50ID09PSAndmVydGljYWwnKSBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG4gICAgLy8gT24gZHJhZ1N0YXJ0LCB3ZSBzdG9yZSB0aGUgc2hpcCBiYWNrIGluIGl0cyBob21lIGNvbnRhaW5lciAmIHN0eWxlIGl0IHRvIGJlIGEgJ2dob3N0J1xuICAgIC8vIFVzZSBhIHNldFRpbWVvdXQgdG8gZW5zdXJlIHRoaXMgaGFwcGVucyBvbmx5IGFmdGVyIHRoZSBzaGlwIGhhcyBiZWVuIHBpY2tlZCB1cFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLWhpZGUnKTtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC1kcm9wcGVkJyk7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ0RhdGEuc2hpcEVsZW1lbnQpXG4gICAgfSwgMCk7XG4gICAgLy8gSWYgdGhlIHNoaXAgaXMgYWxyZWFkeSBwbGFjZWQgKGkuZS4sIGl0J3MgcGFyZW50IGlzIGEgY2VsbCksIHdlIHJlbW92ZSB0aGUgc2hpcCBmcm9tIHRoZSBwbGF5ZXIncyBnYW1lYm9hcmRcbiAgICBpZiAoZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyO1xuICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KTtcbiAgICAgICAgY29uc3QgY29sID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbCk7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQucmVtb3ZlU2hpcChbcm93LCBjb2xdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cC1zaGlwLWhpZGUnKTtcbn1cblxuLy8gRm9yIGVhY2ggY2VsbCB3ZSBlbnRlciB3aGlsc3QgZHJhZ2dpbmcgdGhlIHNoaXAsIHdlIHVzZSByb3dEaWZmIGFuZCBjb2xEaWZmXG4vLyBDaGVjayB0aGUgcGxhY2VtZW50IHNxdWFyZXMgYW5kIHN0eWxlIHRoZW0gdmFsaWQgb3IgaW52YWxpZFxuZnVuY3Rpb24gZHJhZ0VudGVyKGV2ZW50LCB0b3VjaENlbGwpIHtcbiAgICBkcmFnTGVhdmUoZXZlbnQpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdHlwZSA9IGRyYWdEYXRhLnNoaXBFbGVtZW50LmlkO1xuICAgIGxldCByb3c7XG4gICAgbGV0IGNvbDtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNobW92ZScpIHtcbiAgICAgICAgcm93ID0gcGFyc2VJbnQodG91Y2hDZWxsLmRhdGFzZXQucm93KSAtIHBhcnNlSW50KGRyYWdEYXRhLnJvd0RpZik7XG4gICAgICAgIGNvbCA9IHBhcnNlSW50KHRvdWNoQ2VsbC5kYXRhc2V0LmNvbCkgLSBwYXJzZUludChkcmFnRGF0YS5jb2xEaWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdykgLSBwYXJzZUludChkcmFnRGF0YS5yb3dEaWYpO1xuICAgICAgICBjb2wgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5jb2wpIC0gcGFyc2VJbnQoZHJhZ0RhdGEuY29sRGlmKTtcbiAgICB9O1xuICAgIGNvbnN0IHNoaXBTcXVhcmVzID0gcGxheWVyLmdhbWVib2FyZC5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBUeXBlc1t0eXBlXS5sZW5ndGgsIFtyb3csIGNvbF0sIGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50KVxuICAgIHNoaXBTcXVhcmVzLnNxdWFyZXMgPSBzaGlwU3F1YXJlcy5zcXVhcmVzLmZpbHRlcihzcXVhcmUgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyLmdhbWVib2FyZC5jaGVja1NxdWFyZShzcXVhcmVbMF0sIHNxdWFyZVsxXSkgIT09IHVuZGVmaW5lZDtcbiAgICB9KVxuICAgIHNoaXBTcXVhcmVzLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3NxdWFyZVswXX0nXVtkYXRhLWNvbD0nJHtzcXVhcmVbMV19J11gKTtcbiAgICAgICAgLy8gY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLWRyYWctb3ZlcicpO1xuICAgICAgICBjb25zdCBjZWxsT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdjZWxsJywgJ2NlbGwtZHJhZy1vdmVyJyk7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2VsbE92ZXJsYXkpO1xuICAgICAgICBpZiAoc2hpcFNxdWFyZXMuaXNWYWxpZCkgY2VsbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY2VsbC1kcmFnLXZhbGlkJyk7XG4gICAgICAgIGVsc2UgY2VsbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY2VsbC1kcmFnLWludmFsaWQnKTtcbiAgICB9KVxuICAgIC8vIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjZWxsLWRyYWctb3ZlcicpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyBIRVJFIFdFIFNIT1VMRCBCRSBBQkxFIFRPIFNFRSBUSEUgQk9BUkQgVU5ERVJORUFUSCBBIFNISVAgQk9YXG4gICAgLy8gSUdOT1JJTkcgSVQgSU4gU09NRSBXQVk/XG4gICAgLy9cbiAgICAvL1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8vIFdoZW4gd2UgbGVhdmUgYSBjZWxsLCBvciBkcm9wIHRoZSBzaGlwLCByZW1vdmUgYWxsIHZhbGlkL2ludmFsaWQgc3R5bGluZ1xuZnVuY3Rpb24gZHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgY29uc3QgbGVmdENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwtZHJhZy1vdmVyJyk7XG4gICAgbGVmdENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuLy8gSGFuZGxlIGRyb3AgZXZlbnRzIG9uIGNlbGxzIHVzaW5nIHRoZSByb3dEaWZmIGFuZCBjb2xEaWZmIGRyYWdEYXRhIHByb3BlcnRpZXNcbmZ1bmN0aW9uIGRyb3AoZXZlbnQsIHRvdWNoQ2VsbCkge1xuICAgIGRyYWdMZWF2ZShldmVudCk7XG4gICAgbGV0IHJvdztcbiAgICBsZXQgY29sO1xuICAgIGNvbnN0IHR5cGUgPSBkcmFnRGF0YS5zaGlwRWxlbWVudC5pZDtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoZW5kJykge1xuICAgICAgICByb3cgPSBwYXJzZUludCh0b3VjaENlbGwuZGF0YXNldC5yb3cpIC0gcGFyc2VJbnQoZHJhZ0RhdGEucm93RGlmKTtcbiAgICAgICAgY29sID0gcGFyc2VJbnQodG91Y2hDZWxsLmRhdGFzZXQuY29sKSAtIHBhcnNlSW50KGRyYWdEYXRhLmNvbERpZik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93KSAtIHBhcnNlSW50KGRyYWdEYXRhLnJvd0RpZik7XG4gICAgICAgIGNvbCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvbCkgLSBwYXJzZUludChkcmFnRGF0YS5jb2xEaWYpO1xuICAgIH07XG4gICAgY29uc3Qgc2hpcFNxdWFyZXMgPSBwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcFR5cGVzW3R5cGVdLmxlbmd0aCwgW3JvdywgY29sXSwgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQpXG4gICAgLy8gSWYgdGhlIGRyb3AgaXMgYSB2YWxpZCBsb2NhdGlvbiwgcGxhY2UgdGhlIHNoaXAgb24gdGhlIHBsYXllcidzIGdhbWVib2FyZCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBzZXR1cCBib2FyZFxuICAgIGlmIChzaGlwU3F1YXJlcy5pc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbkNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xuICAgICAgICBvcmlnaW5DZWxsLmFwcGVuZENoaWxkKGRyYWdEYXRhLnNoaXBFbGVtZW50KTtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1kcm9wcGVkJyk7XG4gICAgICAgIGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyID0gb3JpZ2luQ2VsbDtcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoZHJhZ0RhdGEuc2hpcEVsZW1lbnQuaWQsIFtyb3csIGNvbF0sIGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50KTtcbiAgICB9XG4gICAgLy8gRWxzZSwgbW92ZSB0aGUgc2hpcCBiYWNrIHRvIGl0cyBwcmV2aW91cyBsb2NhdGlvblxuICAgIC8vIElmIHRoYXQgbG9jYXRpb24gaXMgYSBjZWxsLCBwbGFjZSB0aGUgc2hpcCBiYWNrIG9uIHRoZSBwbGF5ZXIncyBnYW1lYm9hcmQgaW4gdGhlIHByZXZpb3VzIGxvY2F0aW9uXG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICAgICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1kcm9wcGVkJyk7XG4gICAgICAgICAgICBjb25zdCBwcmV2Um93ID0gZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIuZGF0YXNldC5yb3c7XG4gICAgICAgICAgICBjb25zdCBwcmV2Q29sID0gZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIuZGF0YXNldC5jb2w7XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChkcmFnRGF0YS5zaGlwRWxlbWVudC5pZCwgW3ByZXZSb3csIHByZXZDb2xdLCBkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudClcbiAgICAgICAgfVxuICAgICAgICBkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnRGF0YS5zaGlwRWxlbWVudClcbiAgICB9XG4gICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC1oaWRlJyk7XG4gICAgaWYgKGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50ID09PSAndmVydGljYWwnKSBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG4gICAgZWxzZSBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG59XG5cbmNvbnN0IHNldHVwID0ge1xuICAgIGRyYXdTZXR1cEJvYXJkLFxuICAgIGRyYXdTZXR1cFNoaXBzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5mdW5jdGlvbiBHYW1lKCl7XG4gICAgbGV0IHBsYXllcjE7XG4gICAgbGV0IHBsYXllcjI7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI7XG4gICAgbGV0IGRlZmVuZGluZ1BsYXllcjtcbiAgICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSwgbnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIFBsYXllcihuYW1lLCBudW1iZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBuZXdHYW1lKHBsYXllcjEsIHBsYXllcjIpe1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjE7XG4gICAgICAgIHRoaXMuZGVmZW5kaW5nUGxheWVyID0gdGhpcy5wbGF5ZXIyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJuKCl7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgICAgICB0aGlzLmRlZmVuZGluZ1BsYXllciA9IHRoaXMuZGVmZW5kaW5nUGxheWVyID09PSB0aGlzLnBsYXllcjIgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMjtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RHYW1lKCl7XG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIFsxLDNdLCAndmVydGljYWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCBbNywyXSwgJ2hvcml6b250YWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LCBbMiw3XSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoMywgWzEsM10sICd2ZXJ0aWNhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIFs3LDJdLCAnaG9yaXpvbnRhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDUsIFsyLDddLCAndmVydGljYWwnKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBkZWZlbmRpbmdQbGF5ZXIsXG4gICAgICAgIGNyZWF0ZVBsYXllcixcbiAgICAgICAgbmV3R2FtZSxcbiAgICAgICAgY2hhbmdlVHVybixcbiAgICAgICAgY2hlY2tHYW1lT3ZlcixcbiAgICAgICAgdGVzdEdhbWVcbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgc2hpcFR5cGVzIGZyb20gJy4vc2hpcFR5cGVzJztcblxuZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRW1wdHlHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuICAgIC8vIENyZWF0ZSBhIDEweDEwIDJkIGFycmF5IGdhbWVib2FyZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVtcHR5R2FtZWJvYXJkKCkge1xuICAgICAgICBsZXQgZ2FtZWJvYXJkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDw9IDk7IHJvdysrKSB7XG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8PSA5OyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHJvd0FycmF5W2NvbF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZWJvYXJkQXJyYXlbcm93XSA9IHJvd0FycmF5O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmRBcnJheTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJCb2FyZChib2FyZCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJGbGVldChmbGVldCkge1xuICAgICAgICB3aGlsZSAoZmxlZXQubGVuZ3RoID4gMCkgZmxlZXQucG9wKCk7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgYSBzcXVhcmUgaW4gdGhlIGdhbWVib2FyZCwgYW5kIHVuZGVmaW5lZCBpZiBvdXRzaWRlIHRoZSBnYW1lYm9hcmQgZXh0ZW50c1xuICAgIGZ1bmN0aW9uIGNoZWNrU3F1YXJlKHJvdywgY29sKSB7XG4gICAgICAgIGlmIChyb3cgPCAwIHx8IGNvbCA8IDApIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChyb3cgPiA5IHx8IGNvbCA+IDkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KSB7XG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBzaGlwIHBsYWNlbWVudCBzcXVhcmVzXG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gb3JpZ2luO1xuICAgICAgICBsZXQgc2hpcFNxdWFyZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPT09ICdob3Jpem9udGFsJyA/IGNvbCsrIDogcm93Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgZXZlcnkgcGxhY2VtZW50IHNxdWFyZSBpcyBudWxsLCB2YWxpZFBsYWNlbWVudCBpcyBhbiBhcnJheSBvZiB0aGUgdmFsaWQgc3F1YXJlc1xuICAgICAgICBjb25zdCB2YWxpZFBsYWNlbWVudCA9IHNoaXBTcXVhcmVzLmV2ZXJ5KHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IHNxdWFyZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrU3F1YXJlKHJvdywgY29sKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbF0gPT09IG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIFJldHVybiBhbiBkb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHZhbGlkaXR5IGFuZCB0aGUgc3F1YXJlcyBwcm9jZXNzZWRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzVmFsaWQ6IHZhbGlkUGxhY2VtZW50LFxuICAgICAgICAgICAgc3F1YXJlczogc2hpcFNxdWFyZXNcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcFR5cGUsIG9yaWdpbiwgYWxpZ25tZW50KSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwVHlwZXNbc2hpcFR5cGVdLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc2hpcFNxdWFyZXMgPSB0aGlzLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgICAgICAvLyBJZiBzaGlwU3F1YXJlcyBpcyBhIHZhbGlkIGFycmF5LCBwbGFjZSB0aGUgc2hpcCBvbiBhbGwgb2YgdGhvc2Ugc3F1YXJlc1xuICAgICAgICBpZiAoc2hpcFNxdWFyZXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcFR5cGUpO1xuICAgICAgICAgICAgc2hpcC5zcXVhcmVzID0gc2hpcFNxdWFyZXMuc3F1YXJlcztcbiAgICAgICAgICAgIHNoaXAuYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBzcXVhcmU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gc2hpcDtcbiAgICAgICAgfSBlbHNlIHJldHVybiBcIkNhbm5vdCBwbGFjZSBzaGlwIGluIHRoYXQgbG9jYXRpb25cIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlU2hpcChvcmlnaW4pe1xuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gb3JpZ2luO1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5jaGVja1NxdWFyZShyb3csIGNvbCk7XG4gICAgICAgIHNoaXAuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gc3F1YXJlO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGxhY2VkU2hpcHNJbmRleCA9IHRoaXMucGxhY2VkU2hpcHMuaW5kZXhPZihzaGlwKTtcbiAgICAgICAgdGhpcy5wbGFjZWRTaGlwcy5zcGxpY2UocGxhY2VkU2hpcHNJbmRleCwgMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgY2xlYXJCb2FyZCh0aGlzLmJvYXJkKTtcbiAgICAgICAgY2xlYXJGbGVldCh0aGlzLnBsYWNlZFNoaXBzKTtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwVHlwZXMpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucGxhY2VTaGlwUmFuZG9tbHkoc2hpcCk7XG4gICAgICAgICAgICB3aGlsZSAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcgfHwgcmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUYWtlIGEgc2hpcCBhbmQgZGV0ZXJtaW5lIGEgcmFuZG9tIGFsaWdubWVudCBhbmQgb3JpZ2luXG4gICAgLy8gS2VlcCB0cnlpbmcgdG8gcGxhY2Ugc2hpcCB1bnRpbCBhbiBhbGxvd2VkIGxvY2F0aW9uIGlzIGZvdW5kXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwUmFuZG9tbHkoc2hpcFR5cGUpIHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBUeXBlc1tzaGlwVHlwZV0ubGVuZ3RoO1xuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21BbGlnbm1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tT3JpZ2luKGFsaWdubWVudCkge1xuICAgICAgICAgICAgbGV0IHJvd0RpZiA9IDA7XG4gICAgICAgICAgICBsZXQgY29sRGlmID0gMDtcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT09ICd2ZXJ0aWNhbCcpIHJvd0RpZiA9IHNoaXBMZW5ndGggLSAxO1xuICAgICAgICAgICAgZWxzZSBjb2xEaWYgPSBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSByb3dEaWYpKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBjb2xEaWYpKTtcbiAgICAgICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhbGlnbm1lbnQgPSBnZXRSYW5kb21BbGlnbm1lbnQoKTtcbiAgICAgICAgbGV0IG9yaWdpbiA9IGdldFJhbmRvbU9yaWdpbihhbGlnbm1lbnQpO1xuICAgICAgICBsZXQgc2hpcFNxdWFyZXMgPSB0aGlzLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgICAgICAvLyBsZXQgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXAoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgICAgICB3aGlsZSAoIXNoaXBTcXVhcmVzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGFsaWdubWVudCA9IGdldFJhbmRvbUFsaWdubWVudCgpO1xuICAgICAgICAgICAgb3JpZ2luID0gZ2V0UmFuZG9tT3JpZ2luKGFsaWdubWVudCk7XG4gICAgICAgICAgICBzaGlwU3F1YXJlcyA9IHRoaXMuY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2VTaGlwKHNoaXBUeXBlLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgfVxuICAgIC8vIFJlY2VpdmVzIGFuIGF0dGFjayBhbmQgY2FsY3VsYXRlcyB0aGUgcmVzdWx0XG4gICAgLy8gUmV0dXJucyBhbiBhcnJheSAtICdoaXQnIG9yICdtaXNzJyBkZXBlbmRpbmcgb24gcmVzdWx0LCBhbmQgdGhlIGNvb3JkaW5hdGVzXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja1NxdWFyZShyb3csIGNvbCkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFwiSW52YWxpZCBsb2NhdGlvblwiO1xuICAgICAgICBjb25zdCBhdHRhY2tlZFNoaXAgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgaWYgKGF0dGFja2VkU2hpcCA9PT0gbnVsbCkgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAnbWlzcyc7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0YWNrZWRTaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAnaGl0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3RoaXMuYm9hcmRbcm93XVtjb2xdLCBbcm93LCBjb2xdLCBhdHRhY2tlZFNoaXBdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0FsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlZFNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBwbGFjZWRTaGlwcyxcbiAgICAgICAgY2hlY2tTcXVhcmUsXG4gICAgICAgIGNoZWNrVmFsaWRQbGFjZW1lbnQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVtb3ZlU2hpcCxcbiAgICAgICAgcGxhY2VBbGxTaGlwc1JhbmRvbWx5LFxuICAgICAgICBwbGFjZVNoaXBSYW5kb21seSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgY2hlY2tBbGxTaGlwc1N1bmtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBhaUxvZ2ljIGZyb20gJy4vYWlMb2dpYyc7XG5cbmZ1bmN0aW9uIFBsYXllcihwbGF5ZXJOYW1lLCBwbGF5ZXJOdW1iZXIpIHtcbiAgICBsZXQgbmFtZSA9IHR5cGVvZiBwbGF5ZXJOYW1lID09PSAnc3RyaW5nJyA/IHBsYXllck5hbWUgOiAnYmF0dGxlQm90JztcbiAgICBjb25zdCBudW1iZXIgPSBwbGF5ZXJOdW1iZXI7XG4gICAgY29uc3QgaXNBSSA9IHR5cGVvZiBwbGF5ZXJOYW1lICE9PSAnc3RyaW5nJyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBiYXR0bGVCb3QgPSBhaUxvZ2ljKCk7XG4gICAgZnVuY3Rpb24gYXR0YWNrKGVuZW15LCByb3csIGNvbCkge1xuICAgICAgICAvLyBJZiB0aGUgYXR0YWNraW5nIHBsYXllciBpcyBBSSwgd2UgdXNlIHRoZSBhaUxvZ2ljIG1vZHVsZSB0byBnZXQgdGhlIGF0dGFjayBjb29yZGluYXRlc1xuICAgICAgICBpZiAodGhpcy5pc0FJKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYXR0bGVCb3QuYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGggPT09IDApIHJldHVybiAnTm8gc3F1YXJlcyB0byBhdHRhY2snO1xuICAgICAgICAgICAgW3JvdywgY29sXSA9IHRoaXMuYmF0dGxlQm90LmF0dGFjayhlbmVteSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSByZXN1bHQgb2YgdGhlIGF0dGFjayBhbmQgdXBkYXRlIHRoZSBhaUxvZ2ljIHdpdGggaXRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgICAgICBpZiAodGhpcy5pc0FJKXtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbMF0gPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXR0bGVCb3QubGFzdEhpdEFycmF5LnB1c2gocmVzdWx0WzFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJhdHRsZUJvdC5jb25jdXJyZW50TWlzc2VzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHRbMF0gPT09ICdtaXNzJykgdGhpcy5iYXR0bGVCb3QuY29uY3VycmVudE1pc3NlcysrO1xuICAgICAgICAgICAgaWYgKHJlc3VsdFsyXSAhPT0gbnVsbCkgdGhpcy5iYXR0bGVCb3QubGFzdFNoaXAgPSByZXN1bHRbMl07XG4gICAgICAgICAgICB0aGlzLmJhdHRsZUJvdC5yZW1vdmVDZWxsRnJvbUF2YWlsYWJsZUF0dGFja3MocmVzdWx0WzFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBudW1iZXIsXG4gICAgICAgIGlzQUksXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgYmF0dGxlQm90LFxuICAgICAgICBhdHRhY2tcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgc2hpcFR5cGVzIGZyb20gJy4vc2hpcFR5cGVzJztcblxuZnVuY3Rpb24gU2hpcChzaGlwVHlwZSl7XG4gICAgY29uc3QgdHlwZSA9IHNoaXBUeXBlO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBUeXBlc1tzaGlwVHlwZV0ubGVuZ3RoO1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3F1YXJlcztcbiAgICBsZXQgYWxpZ25tZW50O1xuICAgIGZ1bmN0aW9uIGhpdCgpe1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTdW5rKCl7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRzLFxuICAgICAgICBzcXVhcmVzLFxuICAgICAgICBhbGlnbm1lbnQsXG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImNvbnN0IHNoaXBUeXBlcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnY2FycmllcicsXG4gICAgICAgIGxlbmd0aDogNVxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ2JhdHRsZXNoaXAnLFxuICAgICAgICBsZW5ndGg6IDRcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ2Rlc3Ryb3llcicsXG4gICAgICAgIGxlbmd0aDogM1xuICAgIH0sXG4gICAgc3VibWFyaW5lOiB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnc3VibWFyaW5lJyxcbiAgICAgICAgbGVuZ3RoOiAzXG4gICAgfSxcbiAgICBwYXRyb2w6IHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdwYXRyb2wnLFxuICAgICAgICBsZW5ndGg6IDJcbiAgICB9LFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBzaGlwVHlwZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9kb20vZG9tQ29udHJvbGxlcidcblxuLy8gaW1wb3J0IEljb24gZnJvbSAnLi9pY29uLnBuZyc7XG4vLyBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbi8vIG15SWNvbi5zcmMgPSBJY29uO1xuLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==