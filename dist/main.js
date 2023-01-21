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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-height: 100px;\n    --board-size: 318px;\n    --cell-size: 30px;\n\n    --background-color: rgb(240, 240, 240);\n    --background-color-transparent: rgba(240, 240, 240, 0.7);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --background-color-transparent: rgba(30, 30, 30, 0.7);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(90, 90, 90);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ships-header p {\n    margin: 0;\n    font-size: 0.8rem;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    cursor: grab;\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 20;\n}\n\n.setup-ship-vertical {\n    flex-direction: column;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.ghost-ship {\n    position: absolute;\n    z-index: 200;\n    opacity: 0.8;\n}\n\n.ghost-ship>.setup-ship-cell {\n    background-color: var(--cell-hover-color);\n}\n\n.setup-ship-cell {\n    width: var(--cell-size);\n    height: var(--cell-size);\n    background-color: var(--cell-hover-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: var(--hit-color);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    height: var(--cell-size);\n    width: var(--cell-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-setup {\n    display: inline-block;\n}\n\n.cell-drag-over {\n    pointer-events: none;\n    position: absolute;\n    display: inline-block;\n    z-index: 40;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n.cell-sunk {\n    background-color: var(--sunk-color);\n    transition: background-color 0.2s ease;\n}\n\n/* Victory container */\n.victory-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 318px;\n    text-align: center;\n    padding: 20px;\n    border: 3px solid var(--text-color-main);\n    background-color: var(--background-color-transparent);\n    backdrop-filter: blur(4px);\n}\n\n.victory-container h2 {\n    margin: 0;\n    text-shadow: 0 0 2px black, 0 0 4px black, 0 0 6px black;\n}\n\n.victory-container p {\n    margin: 6px;\n}\n\n.victory-victory {\n    color: var(--miss-color);\n}\n\n.victory-defeat {\n    color: var(--sunk-color);\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}\n\n@media screen and (max-width: 800px) {\n    :root {\n        --header-height: 80px;\n        --board-size: 278px;\n        --cell-size: 26px;\n    }\n\n    header button {\n        height: 28px;\n        width: 100px;\n        font-size: 0.9rem;\n        padding-bottom: 2px;\n    }\n\n    #game-container {\n        gap: 20px;\n    }\n\n    .setup-button-start,\n    .setup-button-random {\n        width: 100px;\n        height: 28px;\n    }\n\n    .setup-button-start {\n        font-size: 0.9rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n:root {\n    --header-height: 100px;\n    --board-size: 318px;\n    --cell-size: 30px;\n\n    --background-color: rgb(240, 240, 240);\n    --background-color-transparent: rgba(240, 240, 240, 0.7);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --background-color-transparent: rgba(30, 30, 30, 0.7);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(90, 90, 90);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ships-header p {\n    margin: 0;\n    font-size: 0.8rem;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    cursor: grab;\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 20;\n}\n\n.setup-ship-vertical {\n    flex-direction: column;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.ghost-ship {\n    position: absolute;\n    z-index: 200;\n    opacity: 0.8;\n}\n\n.ghost-ship>.setup-ship-cell {\n    background-color: var(--cell-hover-color);\n}\n\n.setup-ship-cell {\n    width: var(--cell-size);\n    height: var(--cell-size);\n    background-color: var(--cell-hover-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: var(--hit-color);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    height: var(--cell-size);\n    width: var(--cell-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-setup {\n    display: inline-block;\n}\n\n.cell-drag-over {\n    pointer-events: none;\n    position: absolute;\n    display: inline-block;\n    z-index: 40;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n.cell-sunk {\n    background-color: var(--sunk-color);\n    transition: background-color 0.2s ease;\n}\n\n/* Victory container */\n.victory-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 318px;\n    text-align: center;\n    padding: 20px;\n    border: 3px solid var(--text-color-main);\n    background-color: var(--background-color-transparent);\n    backdrop-filter: blur(4px);\n}\n\n.victory-container h2 {\n    margin: 0;\n    text-shadow: 0 0 2px black, 0 0 4px black, 0 0 6px black;\n}\n\n.victory-container p {\n    margin: 6px;\n}\n\n.victory-victory {\n    color: var(--miss-color);\n}\n\n.victory-defeat {\n    color: var(--sunk-color);\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}\n\n@media screen and (max-width: 800px) {\n    :root {\n        --header-height: 80px;\n        --board-size: 278px;\n        --cell-size: 26px;\n    }\n\n    header button {\n        height: 28px;\n        width: 100px;\n        font-size: 0.9rem;\n        padding-bottom: 2px;\n    }\n\n    #game-container {\n        gap: 20px;\n    }\n\n    .setup-button-start,\n    .setup-button-random {\n        width: 100px;\n        height: 28px;\n    }\n\n    .setup-button-start {\n        font-size: 0.9rem;\n    }\n}"],"sourceRoot":""}]);
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

// If the game container height if over 500px, we can see the flexbox is wrapped
// We then adjust the header to match the width of the game boards - instead of being 100% wide
// I'm sure there are better solutions.
const gameSizeObserver = new ResizeObserver(entry => {
    if (entry[0].contentRect.height > 500) header.style.width = '320px';
    else header.style.width = `${entry[0].contentRect.width}px`;
})
gameSizeObserver.observe(gameContainer);

// Hold the information of the player's board - name, board and ships left
function drawBoardContainer(player) {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');
    const playerName = document.createElement('h3');
    if (player.isAI) playerName.textContent = `${player.name}'s fleet`;
    else playerName.textContent = `Your fleet`;
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
function styleAttackedCell(cell, defendingPlayerNumber, result, ship) {
    if (result === 'hit') {
        cell.classList.add('cell-hit');
        if (ship.isSunk()) {
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
function drawVictoryContainer(winner) {
    const loser = game.checkGameOver() === game.player1 ? game.player2 : game.player1;
    const victoryContainer = document.createElement('div');
    victoryContainer.classList.add('victory-container');
    const victoryTitle = document.createElement('h2');
    const winnerText = document.createElement('p');
    const loserText = document.createElement('p');
    if (winner.isAI) {
        victoryTitle.classList.add('victory-defeat');
        victoryTitle.textContent = 'TOTAL DEFEAT';
        winnerText.textContent = `${winner.name} has claimed domination!`;
        loserText.textContent = `Your fleet is sunk.`
    } else {
        victoryTitle.classList.add('victory-victory');
        victoryTitle.textContent = 'TOTAL VICTORY';
        winnerText.textContent = `You have claimed domination!`;
        loserText.textContent = `${loser.name}'s fleet is sunk.`
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFB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O0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsSUFBSSxlQUFlLElBQUk7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsOEJBQThCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGdCQUFnQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGtEQUFTO0FBQ3RFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1REFBdUQsVUFBVSxlQUFlLFVBQVU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxrREFBUztBQUN0RTtBQUNBO0FBQ0EsNkRBQTZELElBQUksZUFBZSxJQUFJO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LFNBQVM7Ozs7OztVQzdCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvYWlMb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcFR5cGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1ib2FyZC1zaXplOiAzMThweDtcXG4gICAgLS1jZWxsLXNpemU6IDMwcHg7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC43KTtcXG4gICAgLS1jZWxsLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tY2VsbC1ob3Zlci1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxuICAgIC0tc2hpcC1jb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgICAtLWhpdC1jb2xvcjogcmdiKDIwNiwgMTY5LCAxMzQpO1xcbiAgICAtLW1pc3MtY29sb3I6IHJnYigxNjEsIDIxNiwgMTYxKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMjA2LCAxMzQsIDEzNCk7XFxuICAgIC0tdGV4dC1jb2xvci1tYWluOiByZ2IoNDAsIDQwLCA0MCk7XFxuICAgIC0tdGV4dC1jb2xvci1ncmV5OiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWhvdmVyOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWFjdGl2ZTogZ3JleTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcXG4gICAgLS1jZWxsLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XFxuICAgIC0tY2VsbC1ob3Zlci1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIC0tc2hpcC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xcbiAgICAtLWhpdC1jb2xvcjogcmdiKDE1NSwgOTksIDYxKTtcXG4gICAgLS1taXNzLWNvbG9yOiByZ2IoNTIsIDEwOSwgNTIpO1xcbiAgICAtLXN1bmstY29sb3I6IHJnYigxNTUsIDYxLCA2MSk7XFxuICAgIC0tdGV4dC1jb2xvci1tYWluOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIC0tdGV4dC1jb2xvci1ncmV5OiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWhvdmVyOiByZ2IoMjAsIDIwLCAyMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWFjdGl2ZTogZ3JleTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxufVxcblxcbiNhcHAge1xcbiAgICBwYWRkaW5nOiAwIDUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxuICAgIH1cXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi8qIFBsYXllciBzZXR1cCAqL1xcbi5zZXR1cC1zaGlwcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJvYXJkLXNpemUpICsgMjVweCk7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uc2V0dXAtc2hpcHMtaGVhZGVyIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1zaGlwbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1ib3gge1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBnYXA6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLnNldHVwLXNoaXAtdmVydGljYWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1oaWRlIGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnNldHVwLXNoaXAtZHJvcHBlZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgdG9wOiAtMXB4O1xcbn1cXG5cXG4uZ2hvc3Qtc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5naG9zdC1zaGlwPi5zZXR1cC1zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNldHVwLXNoaXAtY2VsbCB7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0LFxcbi5zZXR1cC1idXR0b24tcmFuZG9tIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQtZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAuc2V0dXAtYnV0dG9uLXN0YXJ0OmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDExNiwgMTE2KTtcXG4gICAgfVxcbn1cXG5cXG4vKiBQbGF5ZXIgc2VjdGlvbnMgKi9cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKiBQbGF5ZXIgYm9hcmRzICovXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtc2V0dXAge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jZWxsLWRyYWctb3ZlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgei1pbmRleDogNDA7XFxufVxcblxcbi5jZWxsLWRyYWctdmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtZHJhZy1pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG59XFxuXFxuLyogT25seSBhbGxvdyB2aXNpYmxlIGhvdmVyIGZvciBvcHBvc2luZyBwbGF5ZXIncyBib2FyZCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIC5jZWxsOm5vdChbZGF0YS1wbGF5ZXI9JzEnXSk6bm90KC5jZWxsLWhpdCk6bm90KC5jZWxsLW1pc3MpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbiAgICB9XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtaGl0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfinJYnO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG5cXG4uY2VsbC1taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi5jZWxsLW1pc3M6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+KXjyc7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLmNlbGwtc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmstY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG59XFxuXFxuLyogVmljdG9yeSBjb250YWluZXIgKi9cXG4udmljdG9yeS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMzE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10cmFuc3BhcmVudCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbn1cXG5cXG4udmljdG9yeS1jb250YWluZXIgaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IGJsYWNrLCAwIDAgNHB4IGJsYWNrLCAwIDAgNnB4IGJsYWNrO1xcbn1cXG5cXG4udmljdG9yeS1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4udmljdG9yeS12aWN0b3J5IHtcXG4gICAgY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4udmljdG9yeS1kZWZlYXQge1xcbiAgICBjb2xvcjogdmFyKC0tc3Vuay1jb2xvcik7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMCAzMnB4O1xcbn1cXG5cXG4jZm9vdGVyLWxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmZvb3RlciBpIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuXFxuICAgICNmb290ZXItbGluazpob3ZlcixcXG4gICAgI2Zvb3Rlci1kYXJrLW1vZGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWhlYWRlci1oZWlnaHQ6IDgwcHg7XFxuICAgICAgICAtLWJvYXJkLXNpemU6IDI3OHB4O1xcbiAgICAgICAgLS1jZWxsLXNpemU6IDI2cHg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICAgIH1cXG5cXG4gICAgI2dhbWUtY29udGFpbmVyIHtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc2V0dXAtYnV0dG9uLXN0YXJ0LFxcbiAgICAuc2V0dXAtYnV0dG9uLXJhbmRvbSB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIH1cXG5cXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydCB7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7O0lBRWpCLHNDQUFzQztJQUN0Qyx3REFBd0Q7SUFDeEQsZ0NBQWdDO0lBQ2hDLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMscURBQXFEO0lBQ3JELDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsMkJBQTJCO0FBQy9COztBQUVBOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBLFdBQVc7QUFDWDtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJB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QUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxxREFBcUQ7SUFDckQsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksU0FBUztJQUNULHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7QUFFQTs7SUFFSTs7UUFFSSxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLCtCQUErQjtJQUNuQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTs7UUFFSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAxMDBweDtcXG4gICAgLS1ib2FyZC1zaXplOiAzMThweDtcXG4gICAgLS1jZWxsLXNpemU6IDMwcHg7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC43KTtcXG4gICAgLS1jZWxsLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tY2VsbC1ob3Zlci1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxuICAgIC0tc2hpcC1jb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xcbiAgICAtLWhpdC1jb2xvcjogcmdiKDIwNiwgMTY5LCAxMzQpO1xcbiAgICAtLW1pc3MtY29sb3I6IHJnYigxNjEsIDIxNiwgMTYxKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMjA2LCAxMzQsIDEzNCk7XFxuICAgIC0tdGV4dC1jb2xvci1tYWluOiByZ2IoNDAsIDQwLCA0MCk7XFxuICAgIC0tdGV4dC1jb2xvci1ncmV5OiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoMjEwLCAyMTAsIDIxMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWhvdmVyOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWFjdGl2ZTogZ3JleTtcXG59XFxuXFxuOnJvb3QuZGFyayB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAzMCwgMzApO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMzAsIDMwLCAzMCwgMC43KTtcXG4gICAgLS1jZWxsLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XFxuICAgIC0tY2VsbC1ob3Zlci1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLWNlbGwtYm9yZGVyLWNvbG9yOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIC0tc2hpcC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xcbiAgICAtLWhpdC1jb2xvcjogcmdiKDE1NSwgOTksIDYxKTtcXG4gICAgLS1taXNzLWNvbG9yOiByZ2IoNTIsIDEwOSwgNTIpO1xcbiAgICAtLXN1bmstY29sb3I6IHJnYigxNTUsIDYxLCA2MSk7XFxuICAgIC0tdGV4dC1jb2xvci1tYWluOiByZ2IoMjIwLCAyMjAsIDIyMCk7XFxuICAgIC0tdGV4dC1jb2xvci1ncmV5OiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWhvdmVyOiByZ2IoMjAsIDIwLCAyMCk7XFxuICAgIC0tYnV0dG9uLWNvbG9yLWFjdGl2ZTogZ3JleTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxufVxcblxcbiNhcHAge1xcbiAgICBwYWRkaW5nOiAwIDUlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1ob3Zlcik7XFxuICAgIH1cXG59XFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi8qIFBsYXllciBzZXR1cCAqL1xcbi5zZXR1cC1zaGlwcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1zaXplKTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWJvYXJkLXNpemUpICsgMjVweCk7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uc2V0dXAtc2hpcHMtaGVhZGVyIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1zaGlwbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1ib3gge1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBnYXA6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLnNldHVwLXNoaXAtdmVydGljYWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1oaWRlIGRpdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnNldHVwLXNoaXAtZHJvcHBlZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgdG9wOiAtMXB4O1xcbn1cXG5cXG4uZ2hvc3Qtc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5naG9zdC1zaGlwPi5zZXR1cC1zaGlwLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNldHVwLXNoaXAtY2VsbCB7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0LFxcbi5zZXR1cC1idXR0b24tcmFuZG9tIHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQtZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAuc2V0dXAtYnV0dG9uLXN0YXJ0OmhvdmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDExNiwgMTE2KTtcXG4gICAgfVxcbn1cXG5cXG4vKiBQbGF5ZXIgc2VjdGlvbnMgKi9cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKiBQbGF5ZXIgYm9hcmRzICovXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtc2V0dXAge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jZWxsLWRyYWctb3ZlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgei1pbmRleDogNDA7XFxufVxcblxcbi5jZWxsLWRyYWctdmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtZHJhZy1pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG59XFxuXFxuLyogT25seSBhbGxvdyB2aXNpYmxlIGhvdmVyIGZvciBvcHBvc2luZyBwbGF5ZXIncyBib2FyZCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIC5jZWxsOm5vdChbZGF0YS1wbGF5ZXI9JzEnXSk6bm90KC5jZWxsLWhpdCk6bm90KC5jZWxsLW1pc3MpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbiAgICB9XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtaGl0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfinJYnO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG5cXG4uY2VsbC1taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi5jZWxsLW1pc3M6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+KXjyc7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuLmNlbGwtc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmstY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcXG59XFxuXFxuLyogVmljdG9yeSBjb250YWluZXIgKi9cXG4udmljdG9yeS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMzE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10cmFuc3BhcmVudCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbn1cXG5cXG4udmljdG9yeS1jb250YWluZXIgaDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IGJsYWNrLCAwIDAgNHB4IGJsYWNrLCAwIDAgNnB4IGJsYWNrO1xcbn1cXG5cXG4udmljdG9yeS1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4udmljdG9yeS12aWN0b3J5IHtcXG4gICAgY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4udmljdG9yeS1kZWZlYXQge1xcbiAgICBjb2xvcjogdmFyKC0tc3Vuay1jb2xvcik7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMCAzMnB4O1xcbn1cXG5cXG4jZm9vdGVyLWxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmZvb3RlciBpIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuXFxuICAgICNmb290ZXItbGluazpob3ZlcixcXG4gICAgI2Zvb3Rlci1kYXJrLW1vZGU6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWhlYWRlci1oZWlnaHQ6IDgwcHg7XFxuICAgICAgICAtLWJvYXJkLXNpemU6IDI3OHB4O1xcbiAgICAgICAgLS1jZWxsLXNpemU6IDI2cHg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxuICAgIH1cXG5cXG4gICAgI2dhbWUtY29udGFpbmVyIHtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc2V0dXAtYnV0dG9uLXN0YXJ0LFxcbiAgICAuc2V0dXAtYnV0dG9uLXJhbmRvbSB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIH1cXG5cXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydCB7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBhaUxvZ2ljKCkge1xuICAgIC8vIENyZWF0ZSBhIDJEIGFycmF5IG9mIGF2YWlsYWJsZSBhdHRhY2sgY29vcmRpbmF0ZXNcbiAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tzID0gY3JlYXRlQXR0YWNrQXJyYXkoKTtcbiAgICBsZXQgbGFzdFNoaXA7XG4gICAgLy8gU3RvcmUgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHJlY2VudCBhdHRhY2tzLCBpbiBvcmRlclxuICAgIC8vIFdoZW4gYSBzaGlwIGlzIHN1bmssIHJlbW92ZSBhbGwgb2YgaXQncyBjZWxscyBmcm9tIHRoZSBhcnJheVxuICAgIC8vIFNvIHdlIGhhdmUgYW4gYXJyYXkgb2YgcmVjZW50IGhpdHMgb2Ygc2hpcHMgdGhhdCBhcmUgbm90IHlldCBzdW5rXG4gICAgY29uc3QgbGFzdEhpdEFycmF5ID0gW107XG4gICAgY29uc3QgcG9zc2libGVEaXJlY3Rpb25zID0gWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXTtcbiAgICBsZXQgY29uY3VycmVudE1pc3NlcyA9IDA7XG4gICAgZnVuY3Rpb24gYXR0YWNrKGVuZW15KSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RIaXRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZTaGlwSXNTdW5rKGVuZW15LCB0aGlzLmxhc3RIaXRBcnJheVtsYXN0SGl0QXJyYXkubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVBdHRhY2tzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdObyBzcXVhcmVzIHRvIGF0dGFjayc7XG4gICAgICAgIC8vIElmIHRoZSBsYXN0IGhpdCBzaGlwIGlzIHN1bmssIG9yIG5vdGhpbmcgaGFzIGJlZW4gaGl0IHlldCwgZ2V0IGEgcmFuZG9tIGNlbGxcbiAgICAgICAgLy8gSWYgdGhlIGJvdCBoYXMgbWlzc2VkIG1vcmUgdGhhbiAzIHRpbWVzIGluIGEgcm93LCBnaXZlIGEgNTAlIGNoYW5jZSB0byBjaGVhdFxuICAgICAgICBpZiAodGhpcy5sYXN0SGl0QXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jdXJyZW50TWlzc2VzID4gNSAmJiBNYXRoLnJhbmRvbSgpID4gMC44KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5lbXlCb2FyZCA9IGVuZW15LmdhbWVib2FyZC5ib2FyZDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZW5lbXkuZ2FtZWJvYXJkLmNoZWNrU3F1YXJlKHJvdywgY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2VsbCA9PT0gJ29iamVjdCcgJiYgY2VsbCAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWF0aW5nIScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXR0YWNrQ29vcmRzID0gdGhpcy5nZXRSYW5kb21DZWxsKGVuZW15KTtcbiAgICAgICAgICAgIHJldHVybiBhdHRhY2tDb29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRWxzZSwgd2UgZmluZCB0aGUgbmV4dCBjZWxsIGFkamFjZW50IHRvIHRoZSBsYXN0SGl0XG4gICAgICAgIGNvbnN0IGxhc3RIaXQgPSB0aGlzLmxhc3RIaXRBcnJheVtsYXN0SGl0QXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSB0aGlzLmdldEFsbEFkamFjZW50Q2VsbHMoZW5lbXksIGxhc3RIaXQpO1xuICAgICAgICBjb25zdCBhZGphY2VudEhpdHMgPSBhZGphY2VudENlbGxzLmZpbHRlcihjZWxsID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoY2VsbC5jZWxsUmVzdWx0ID09PSAnaGl0JyAmJiB0aGlzLmNoZWNrSWZTaGlwSXNTdW5rKGVuZW15LCBjZWxsLmFkamFjZW50Q2VsbCkgPT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgaGl0IChvciBtdWx0aXBsZSkgYWRqYWNlbnQsIGF0dGFjayBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXG4gICAgICAgIGlmIChhZGphY2VudEhpdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tQWRqYWNlbnRIaXQgPSBhZGphY2VudEhpdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqYWNlbnRIaXRzLmxlbmd0aCldO1xuICAgICAgICAgICAgbGV0IG5leHRDZWxsID0gdGhpcy5nZXROZXh0QXR0YWNrYWJsZUNlbGwoZW5lbXksIGxhc3RIaXQsIHRoaXMuZmxpcERpcmVjdGlvbihyYW5kb21BZGphY2VudEhpdC5kaXJlY3Rpb24pKTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbCA9IHRoaXMuZ2V0TmV4dEF0dGFja2FibGVDZWxsKGVuZW15LCBsYXN0SGl0LCByYW5kb21BZGphY2VudEhpdC5kaXJlY3Rpb24pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdoaWxlIChuZXh0Q2VsbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbCA9IHRoaXMuZ2V0TmV4dEF0dGFja2FibGVDZWxsKGVuZW15LCBsYXN0SGl0LCB0aGlzLnBvc3NpYmxlRGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBvc3NpYmxlRGlyZWN0aW9ucy5sZW5ndGgpXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5leHRDZWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0ZXJhdGUgYmFja3dhcmRzIHRocm91Z2ggYWxsIG90aGVyIGhpdCBjZWxscyBmb3IgYWRqYWNlbnkgdG8gdGhlIGxhc3RIaXQgY2VsbFxuICAgICAgICAvLyBJZiBhZGphY2VuY3kgaXMgZm91bmQsIHNlZSBpZiB3ZSBjYW4gYXR0YWNrIGEgY2VsbCBpbiB0aGF0IGRpcmVjdGlvblxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5sYXN0SGl0QXJyYXkubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmxhc3RIaXRBcnJheVtpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QWRqYWNlbmN5KGxhc3RIaXQsIGNlbGwpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0Q2VsbCA9IHRoaXMuZ2V0TmV4dEF0dGFja2FibGVDZWxsKGVuZW15LCBsYXN0SGl0LCByZXN1bHQuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAobmV4dENlbGwpIHJldHVybiBuZXh0Q2VsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGhhdmUgY29uZmlybWVkIHRoYXQgdGhlIGxhc3RIaXQgaXMgdGhlIG9ubHkgaGl0IG9uIHRoYXQgc2hpcFxuICAgICAgICAvLyBTbyB3ZSBwaWNrIGEgcmFuZG9tIGFkamFjZW50IGNlbGwgdGhhdCB3ZSBjYW4gYXR0YWNrLCBhbmQgYXR0YWNrIGl0IVxuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzVG9BdHRhY2sgPSBhZGphY2VudENlbGxzLmZpbHRlcihjZWxsID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgY2VsbC5jZWxsUmVzdWx0ICE9PSAnc3RyaW5nJyAmJiBjZWxsLmNlbGxSZXN1bHQgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBhZGphY2VudENlbGxzVG9BdHRhY2tbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWRqYWNlbnRDZWxsc1RvQXR0YWNrLmxlbmd0aCldO1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsLmFkamFjZW50Q2VsbClcbiAgICAgICAgcmV0dXJuIGNlbGwuYWRqYWNlbnRDZWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21DZWxsKGVuZW15KSB7XG4gICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUF0dGFja3MubGVuZ3RoID09PSAwKSByZXR1cm4gJ05vIHNxdWFyZXMgdG8gYXR0YWNrJztcbiAgICAgICAgLy8gR2V0IHJvdyBhbmQgY29sIGZvciBhIHJhbmRvbSBBSSBhdHRhY2sgZnJvbSB0aGUgYXZhaWxhYmxlQXR0YWNrcyBhcnJheVxuICAgICAgICBsZXQgYXJyYXlSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmF2YWlsYWJsZUF0dGFja3MubGVuZ3RoKTtcbiAgICAgICAgbGV0IGFycmF5Q29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hdmFpbGFibGVBdHRhY2tzW2FycmF5Um93XS5sZW5ndGgpO1xuICAgICAgICBsZXQgY2VsbCA9IHRoaXMuYXZhaWxhYmxlQXR0YWNrc1thcnJheVJvd11bYXJyYXlDb2xdO1xuICAgICAgICAvLyBJZiB0aGUgc2VsZWN0ZWQgY2VsbCBoYXMgbm8gYWRqYWNlbnQgY2VsbHMgdG8gYXR0YWNrLCBnZXQgYSBkaWZmZXJlbnQgcmFuZG9tIGNlbGxcbiAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IHRoaXMuZ2V0QWxsQWRqYWNlbnRDZWxscyhlbmVteSwgY2VsbCk7XG4gICAgICAgIGlmIChhZGphY2VudENlbGxzLmV2ZXJ5KGNlbGwgPT4gdHlwZW9mIGNlbGwuY2VsbFJlc3VsdCAhPT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21DZWxsKGVuZW15KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIGEgY2VsbCBmcm9tIHRoZSBhdmFpbGFibGVBdHRhY2tzIGFycmF5XG4gICAgLy8gQ2FsbGVkIGJ5IHBsYXllci5qcyBhZnRlciBtYWtpbmcgYW4gYXR0YWNrXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVBdHRhY2tzKGNlbGwpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5hdmFpbGFibGVBdHRhY2tzLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuYXZhaWxhYmxlQXR0YWNrc1tyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSB0aGlzLmF2YWlsYWJsZUF0dGFja3Nbcm93XVtjb2xdO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsWzBdID09PSBzcXVhcmVbMF0gJiYgY2VsbFsxXSA9PT0gc3F1YXJlWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQXR0YWNrc1tyb3ddLnNwbGljZShjb2wsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVBdHRhY2tzW3Jvd10ubGVuZ3RoID09PSAwKSB0aGlzLmF2YWlsYWJsZUF0dGFja3Muc3BsaWNlKHJvdywgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QWRqYWNlbnRDZWxsKGNlbGwsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgW3JvdywgY29sXSA9IGNlbGw7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgcm93LS07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICAgICAgICByb3crKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNvbC0tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNvbCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgfVxuICAgIC8vIEdpdmVuIGEgY2VsbCwgZmluZCB0aGUgNCBwb3NzaWJsZSBhZGphY2VudCBjZWxscyBhbmQgdGhlaXIgZGlyZWN0aW9uXG4gICAgZnVuY3Rpb24gZ2V0QWxsQWRqYWNlbnRDZWxscyhlbmVteSwgY2VsbCkge1xuICAgICAgICByZXR1cm4gcG9zc2libGVEaXJlY3Rpb25zLm1hcChkaXJlY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxsID0gdGhpcy5nZXRBZGphY2VudENlbGwoY2VsbCwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGxldCBjZWxsUmVzdWx0ID0gZW5lbXkuZ2FtZWJvYXJkLmNoZWNrU3F1YXJlKGFkamFjZW50Q2VsbFswXSwgYWRqYWNlbnRDZWxsWzFdKTtcbiAgICAgICAgICAgIGlmIChjZWxsUmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSWZTaGlwSXNTdW5rKGVuZW15LCBhZGphY2VudENlbGwpKSBjZWxsUmVzdWx0ID0gJ3N1bmsnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjZWxsUmVzdWx0LFxuICAgICAgICAgICAgICAgIGFkamFjZW50Q2VsbCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYSBjZWxsIGlzIGFkamFjZW50IHRvLCBvciBpbiB0aGUgc2FtZSByb3cvY29sIGFzIGFub3RoZXJcbiAgICAvLyBSZXR1cm4gdGhlIGRpcmVjdGlvbiB0byB0aGUgY2VsbCwgdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiwgYW5kIHRoZSBkaXN0YW5jZVxuICAgIGZ1bmN0aW9uIGdldEFkamFjZW5jeShjZWxsLCBuZWlnaGJvdXJDZWxsKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb247XG4gICAgICAgIGxldCBvcHBvc2l0ZURpcmVjdGlvbjtcbiAgICAgICAgbGV0IGRpc3RhbmNlO1xuICAgICAgICBpZiAoY2VsbFswXSA9PT0gbmVpZ2hib3VyQ2VsbFswXSkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGNlbGxbMV0gLSBuZWlnaGJvdXJDZWxsWzFdO1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gZGlmZiA+IDEgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICAgICAgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaWZmID4gMSA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKGRpZmYpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGxbMV0gPT09IG5laWdoYm91ckNlbGxbMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBjZWxsWzBdIC0gbmVpZ2hib3VyQ2VsbFswXTtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpZmYgPiAxID8gJ2Rvd24nIDogJ3VwJztcbiAgICAgICAgICAgIG9wcG9zaXRlRGlyZWN0aW9uID0gZGlmZiA+IDEgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhkaWZmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgb3Bwb3NpdGVEaXJlY3Rpb24sXG4gICAgICAgICAgICBkaXN0YW5jZVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIExvb2sgZm9yIGEgcG9zc2libGUgY2VsbCB0byBhdHRhY2sgaW4gYSBnaXZlbiBkaXJlY3Rpb24gKHNlYXJjaCA0IGNlbGxzIG9ubHkpXG4gICAgZnVuY3Rpb24gZ2V0TmV4dEF0dGFja2FibGVDZWxsKGVuZW15LCBjZWxsLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IG5leHRDZWxsID0gZ2V0QWRqYWNlbnRDZWxsKGNlbGwsIGRpcmVjdGlvbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmV4dENlbGxTdGF0dXMgPSBlbmVteS5nYW1lYm9hcmQuY2hlY2tTcXVhcmUobmV4dENlbGxbMF0sIG5leHRDZWxsWzFdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dENlbGxTdGF0dXMgPT09ICdvYmplY3QnIHx8IG5leHRDZWxsU3RhdHVzID09PSBudWxsKSByZXR1cm4gbmV4dENlbGw7XG4gICAgICAgICAgICBpZiAobmV4dENlbGxTdGF0dXMgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKG5leHRDZWxsU3RhdHVzID09PSAnbWlzcycpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8vIFdlIHNraXAgb3ZlciBhIGhpdCAoY291bGQgYmUgcGFydCBvZiB0aGUgc2FtZSBzaGlwIHdlJ3JlIGF0dGFja2luZyksXG4gICAgICAgICAgICAvLyB1bmxlc3MgdGhhdCBzaGlwIGlzIHN1bmsgLSB0aGVuIHdlIHNob3VsZG4ndCBrZWVwIGF0dGFja2luZyBpbiB0aGF0IGRpcmVjdGlvblxuICAgICAgICAgICAgaWYgKG5leHRDZWxsU3RhdHVzID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSWZTaGlwSXNTdW5rKGVuZW15LCBuZXh0Q2VsbCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHRDZWxsID0gZ2V0QWRqYWNlbnRDZWxsKG5leHRDZWxsLCBkaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmxpcERpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xlZnQnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmluZCB0aGUgc2hpcCBhdCBhIGNlcnRhaW4gY2VsbCBhbmQgY2hlY2sgaWYgaXQgaXMgc3Vua1xuICAgIC8vIElmIGl0IGlzLCByZW1vdmUgaXRzIHNxdWFyZXMgZnJvbSB0aGUgbGFzdEhpdEFycmF5IGFuZCByZXR1cm4gdHJ1ZVxuICAgIGZ1bmN0aW9uIGNoZWNrSWZTaGlwSXNTdW5rKGVuZW15LCBjZWxsKSB7XG4gICAgICAgIGNvbnN0IGVuZW15U2hpcHMgPSBlbmVteS5nYW1lYm9hcmQucGxhY2VkU2hpcHM7XG4gICAgICAgIGxldCBoaXRTaGlwO1xuICAgICAgICBlbmVteVNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5zcXVhcmVzLnNvbWUoc3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNxdWFyZVswXSA9PT0gY2VsbFswXSAmJiBzcXVhcmVbMV0gPT09IGNlbGxbMV0pXG4gICAgICAgICAgICB9KSkgaGl0U2hpcCA9IHNoaXA7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChoaXRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBoaXRTaGlwLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sYXN0SGl0QXJyYXkuZmluZEluZGV4KGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChsb2NhdGlvblswXSA9PT0gc3F1YXJlWzBdICYmIGxvY2F0aW9uWzFdID09PSBzcXVhcmVbMV0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHRoaXMubGFzdEhpdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBhdmFpbGFibGVBdHRhY2tzLFxuICAgICAgICBsYXN0U2hpcCxcbiAgICAgICAgbGFzdEhpdEFycmF5LFxuICAgICAgICBwb3NzaWJsZURpcmVjdGlvbnMsXG4gICAgICAgIGNvbmN1cnJlbnRNaXNzZXMsXG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgZ2V0UmFuZG9tQ2VsbCxcbiAgICAgICAgcmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVBdHRhY2tzLFxuICAgICAgICBnZXRBZGphY2VudENlbGwsXG4gICAgICAgIGdldEFsbEFkamFjZW50Q2VsbHMsXG4gICAgICAgIGdldE5leHRBdHRhY2thYmxlQ2VsbCxcbiAgICAgICAgZ2V0QWRqYWNlbmN5LFxuICAgICAgICBmbGlwRGlyZWN0aW9uLFxuICAgICAgICBjaGVja0lmU2hpcElzU3Vua1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQXR0YWNrQXJyYXkoKSB7XG4gICAgY29uc3QgYXR0YWNrQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgcm93QXJyYXkucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2tBcnJheS5wdXNoKHJvd0FycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja0FycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhaUxvZ2ljOyIsImltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUnO1xuaW1wb3J0IGNyZWF0ZUhlYWRlckJveCBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgY3JlYXRlRm9vdGVyQm94IGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCBzaGlwVHlwZXMgZnJvbSAnLi4vc2hpcFR5cGVzJztcbmltcG9ydCBzZXR1cCBmcm9tICcuL3BsYWNlU2hpcHMnO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFwcC5pZCA9ICdhcHAnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xuY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyQm94KCk7XG5jb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXJCb3goKTtcbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmdhbWVDb250YWluZXIuaWQgPSAnZ2FtZS1jb250YWluZXInO1xuYXBwLmFwcGVuZENoaWxkKGhlYWRlcik7XG5hcHAuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG5hcHAuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUtYnV0dG9uJyk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3R2FtZSk7XG5cbmNvbnN0IGdhbWUgPSBHYW1lKCk7XG5uZXdHYW1lKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgZ2FtZS5uZXdHYW1lKHBsYXllcjEsIHBsYXllcjIpO1xuICAgIGRyYXdHYW1lKCk7XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gICAgY29uc3QgbmV3UGxheWVyMSA9IGdhbWUuY3JlYXRlUGxheWVyKCdNeXN0ZXJpbycsIDEpO1xuICAgIGNvbnN0IG5ld1BsYXllcjIgPSBnYW1lLmNyZWF0ZVBsYXllcihmYWxzZSwgMik7XG4gICAgbmV3UGxheWVyMi5nYW1lYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG4gICAgZHJhd1NldHVwKG5ld1BsYXllcjEpO1xuICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cC1idXR0b24tc3RhcnQnKTtcbiAgICBzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKG5ld1BsYXllcjEuZ2FtZWJvYXJkLnBsYWNlZFNoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgc3RhcnRHYW1lKG5ld1BsYXllcjEsIG5ld1BsYXllcjIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gZHJhd0dhbWUoKSB7XG4gICAgY2xlYXJDb250YWluZXIoZ2FtZUNvbnRhaW5lcik7XG4gICAgY29uc3QgcGxheWVyMUJvYXJkQ29udGFpbmVyID0gZHJhd0JvYXJkQ29udGFpbmVyKGdhbWUucGxheWVyMSk7XG4gICAgY29uc3QgcGxheWVyMkJvYXJkQ29udGFpbmVyID0gZHJhd0JvYXJkQ29udGFpbmVyKGdhbWUucGxheWVyMik7XG4gICAgcG9wdWxhdGVCb2FyZChnYW1lLnBsYXllcjEsIHBsYXllcjFCb2FyZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKSk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQocGxheWVyMUJvYXJkQ29udGFpbmVyLCBwbGF5ZXIyQm9hcmRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkcmF3U2V0dXAocGxheWVyKSB7XG4gICAgY2xlYXJDb250YWluZXIoZ2FtZUNvbnRhaW5lcik7XG4gICAgY29uc3Qgc2V0dXBCb2FyZCA9IHNldHVwLmRyYXdTZXR1cEJvYXJkKHBsYXllciwgZHJhd0JvYXJkQ29udGFpbmVyKHBsYXllcikpO1xuICAgIGNvbnN0IHNldHVwU2hpcHMgPSBzZXR1cC5kcmF3U2V0dXBTaGlwcygpO1xuICAgIGNvbnN0IHNoaXBzID0gc2V0dXBTaGlwcy5xdWVyeVNlbGVjdG9yQWxsKCcuc2V0dXAtc2hpcC1ib3gnKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZChzZXR1cEJvYXJkLCBzZXR1cFNoaXBzKTtcbn1cblxuLy8gSWYgdGhlIGdhbWUgY29udGFpbmVyIGhlaWdodCBpZiBvdmVyIDUwMHB4LCB3ZSBjYW4gc2VlIHRoZSBmbGV4Ym94IGlzIHdyYXBwZWRcbi8vIFdlIHRoZW4gYWRqdXN0IHRoZSBoZWFkZXIgdG8gbWF0Y2ggdGhlIHdpZHRoIG9mIHRoZSBnYW1lIGJvYXJkcyAtIGluc3RlYWQgb2YgYmVpbmcgMTAwJSB3aWRlXG4vLyBJJ20gc3VyZSB0aGVyZSBhcmUgYmV0dGVyIHNvbHV0aW9ucy5cbmNvbnN0IGdhbWVTaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cnkgPT4ge1xuICAgIGlmIChlbnRyeVswXS5jb250ZW50UmVjdC5oZWlnaHQgPiA1MDApIGhlYWRlci5zdHlsZS53aWR0aCA9ICczMjBweCc7XG4gICAgZWxzZSBoZWFkZXIuc3R5bGUud2lkdGggPSBgJHtlbnRyeVswXS5jb250ZW50UmVjdC53aWR0aH1weGA7XG59KVxuZ2FtZVNpemVPYnNlcnZlci5vYnNlcnZlKGdhbWVDb250YWluZXIpO1xuXG4vLyBIb2xkIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcGxheWVyJ3MgYm9hcmQgLSBuYW1lLCBib2FyZCBhbmQgc2hpcHMgbGVmdFxuZnVuY3Rpb24gZHJhd0JvYXJkQ29udGFpbmVyKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaWYgKHBsYXllci5pc0FJKSBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9J3MgZmxlZXRgO1xuICAgIGVsc2UgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGBZb3VyIGZsZWV0YDtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRyYXdCb2FyZChwbGF5ZXIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJOYW1lLCBwbGF5ZXJCb2FyZCk7XG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xufVxuXG4vLyBEcmF3IGEgZ3JpZCBvZiBjZWxscyB3aXRoIGRhdGEgYXR0cmlidXRlcyBmb3IgdGhlaXIgbG9jYXRpb25zXG5mdW5jdGlvbiBkcmF3Qm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgLy8gQ0FOIFRSSU0gVEhJUyBMQVRFUiBQUk9CQUJMWVxuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBsYXllciA9IHBsYXllciA/IHBsYXllci5udW1iZXIgOiAwO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBNQVkgTkVFRCBUTyBSRVZJU0VcbiAgICAgICAgICAgIC8vIE5FRUQgVE8gQUREIEVWRU5UIExJU1RFTkVSUyBPTkxZIEZPUiBPUFBPU0lORyBQTEFZRVInUyBCT0FSRFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIGlmIChwbGF5ZXIgJiYgcGxheWVyLmlzQUkpIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Gb3JBdHRhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG59XG5cbi8vIFVwb24gY2xpY2tpbmcgYSBjZWxsLCBhdHRhY2sgdGhlIHJlbGV2YW50IHNxdWFyZSwgaWYgYWxsb3dlZFxuLy8gUGFzcyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBhdHRhY2sgdG8gc3R5bGVBdHRhY2tlZENlbGwgZnVuY3Rpb25cbmZ1bmN0aW9uIGxpc3RlbkZvckF0dGFjayhldmVudCkge1xuICAgIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPSBjZWxsLmRhdGFzZXQucGxheWVyO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllck51bWJlciA9IGRlZmVuZGluZ1BsYXllck51bWJlciA9PT0gJzEnID8gJzInIDogJzEnO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllciA9IGdhbWVbYHBsYXllciR7YXR0YWNraW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllciA9IGdhbWVbYHBsYXllciR7ZGVmZW5kaW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXIgIT09IGF0dGFja2luZ1BsYXllcikgcmV0dXJuO1xuICAgIGNvbnN0IHJvdyA9IGNlbGwuZGF0YXNldC5yb3c7XG4gICAgY29uc3QgY29sID0gY2VsbC5kYXRhc2V0LmNvbDtcbiAgICBjb25zdCBbcmVzdWx0LCBsb2NhdGlvbiwgc2hpcF0gPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGRlZmVuZGluZ1BsYXllciwgcm93LCBjb2wpO1xuICAgIHN0eWxlQXR0YWNrZWRDZWxsKGNlbGwsIGRlZmVuZGluZ1BsYXllck51bWJlciwgcmVzdWx0LCBzaGlwKTtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSlcbiAgICBuZXh0VHVybigpO1xufVxuXG4vLyBDYWxsIGFuIGF0dGFjayBmb3IgdGhlIEFJXG5mdW5jdGlvbiBjYWxsQUlBdHRhY2soYWkpIHtcbiAgICBpZiAoYWkgIT09IGdhbWUuY3VycmVudFBsYXllcikgcmV0dXJuO1xuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllck51bWJlciA9IGdhbWUuZGVmZW5kaW5nUGxheWVyID09PSBnYW1lLnBsYXllcjEgPyAnMScgOiAnMic7XG4gICAgY29uc3QgW3Jlc3VsdCwgbG9jYXRpb24sIHNoaXBdID0gYWkuYXR0YWNrKGdhbWUuZGVmZW5kaW5nUGxheWVyKTtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPScke2RlZmVuZGluZ1BsYXllck51bWJlcn0nXVtkYXRhLXJvdz0nJHtsb2NhdGlvblswXX0nXVtkYXRhLWNvbD0nJHtsb2NhdGlvblsxXX0nXWApXG4gICAgc3R5bGVBdHRhY2tlZENlbGwoY2VsbCwgZGVmZW5kaW5nUGxheWVyTnVtYmVyLCByZXN1bHQsIHNoaXApXG4gICAgbmV4dFR1cm4oKTtcbn1cblxuLy8gU3R5bGUgYXR0YWNrZWQgY2VsbCBiYXNlZCBvbiBhIGhpdCBvciBtaXNzXG4vLyBJZiB0aGUgc2hpcCBpcyBzdW5rLCBzdHlsZSBlYWNoIG9mIHRoZSBzaGlwJ3MgY2VsbHMgd2l0aCB0aGUgLmNlbGwtc3VuayBjbGFzc1xuZnVuY3Rpb24gc3R5bGVBdHRhY2tlZENlbGwoY2VsbCwgZGVmZW5kaW5nUGxheWVyTnVtYmVyLCByZXN1bHQsIHNoaXApIHtcbiAgICBpZiAocmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtaGl0Jyk7XG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBzaGlwLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wbGF5ZXI9JyR7ZGVmZW5kaW5nUGxheWVyTnVtYmVyfSddW2RhdGEtcm93PScke3NxdWFyZVswXX0nXVtkYXRhLWNvbD0nJHtzcXVhcmVbMV19J11gKVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1zdW5rJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWlzcycpO1xufVxuXG4vLyBIYW5kbGUgZW5kLW9mLXR1cm4gZXZlbnRzXG5mdW5jdGlvbiBuZXh0VHVybigpIHtcbiAgICBjb25zdCB3aW5uZXIgPSBnYW1lLmNoZWNrR2FtZU92ZXIoKTtcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICAgIHJldHVybiBlbmRHYW1lKHdpbm5lcik7XG4gICAgfTtcbiAgICBnYW1lLmNoYW5nZVR1cm4oKTtcbiAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyLmlzQUkpIHtcbiAgICAgICAgY2FsbEFJQXR0YWNrKGdhbWUuY3VycmVudFBsYXllcilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSkpO1xuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhd1ZpY3RvcnlDb250YWluZXIod2lubmVyKSk7XG59XG5cbi8vIFBvcHVwIHZpY3RvcnkgY29udGFpbmVyXG5mdW5jdGlvbiBkcmF3VmljdG9yeUNvbnRhaW5lcih3aW5uZXIpIHtcbiAgICBjb25zdCBsb3NlciA9IGdhbWUuY2hlY2tHYW1lT3ZlcigpID09PSBnYW1lLnBsYXllcjEgPyBnYW1lLnBsYXllcjIgOiBnYW1lLnBsYXllcjE7XG4gICAgY29uc3QgdmljdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpY3RvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1jb250YWluZXInKTtcbiAgICBjb25zdCB2aWN0b3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbG9zZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmICh3aW5uZXIuaXNBSSkge1xuICAgICAgICB2aWN0b3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1kZWZlYXQnKTtcbiAgICAgICAgdmljdG9yeVRpdGxlLnRleHRDb250ZW50ID0gJ1RPVEFMIERFRkVBVCc7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXIubmFtZX0gaGFzIGNsYWltZWQgZG9taW5hdGlvbiFgO1xuICAgICAgICBsb3NlclRleHQudGV4dENvbnRlbnQgPSBgWW91ciBmbGVldCBpcyBzdW5rLmBcbiAgICB9IGVsc2Uge1xuICAgICAgICB2aWN0b3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgndmljdG9yeS12aWN0b3J5Jyk7XG4gICAgICAgIHZpY3RvcnlUaXRsZS50ZXh0Q29udGVudCA9ICdUT1RBTCBWSUNUT1JZJztcbiAgICAgICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGBZb3UgaGF2ZSBjbGFpbWVkIGRvbWluYXRpb24hYDtcbiAgICAgICAgbG9zZXJUZXh0LnRleHRDb250ZW50ID0gYCR7bG9zZXIubmFtZX0ncyBmbGVldCBpcyBzdW5rLmBcbiAgICB9XG4gICAgdmljdG9yeUNvbnRhaW5lci5hcHBlbmQodmljdG9yeVRpdGxlLCB3aW5uZXJUZXh0LCBsb3NlclRleHQpO1xuICAgIHJldHVybiB2aWN0b3J5Q29udGFpbmVyO1xufVxuXG4vLyBEcmF3IHRoZSBzaGlwcyB0byB0aGUgcGxheWVyJ3Mgb24tc2NyZWVuIGJvYXJkIHNvIHRoZXkgY2FuIHNlZSB0aGVpciBmbGVldFxuZnVuY3Rpb24gcG9wdWxhdGVCb2FyZChwbGF5ZXIsIGJvYXJkKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbF07XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbD0nJHtjb2x9J11gKTtcbiAgICAgICAgICAgIGlmIChzcXVhcmUgIT09IG51bGwgJiYgdHlwZW9mIHNxdWFyZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtc2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnY2VsbC1zaGlwJyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gRm9vdGVyIGxpbmsgYW5kIGxpZ2h0L2RhcmsgbW9kZSBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGF1dGhvck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhdXRob3JOYW1lLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItYXV0aG9yXCIpO1xuICAgIGF1dGhvck5hbWUudGV4dENvbnRlbnQgPSBcIkNhcmwgTWFkc2VuIDIwMjJcIjtcbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZm9vdGVyTGluay5pZCA9IFwiZm9vdGVyLWxpbmtcIjtcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vZWxzYWVwby9vZGluLWJhdHRsZXNoaXBcIik7XG4gICAgY29uc3QgZ2l0SHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImZhLWJyYW5kc1wiLCBcImZhLWdpdGh1YlwiLCBcImZhLXhsXCIsIFwiZm9vdGVyLWxvZ29cIik7XG4gICAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChnaXRIdWJMb2dvKTtcbiAgICBcbiAgICBmdW5jdGlvbiBnZXRUaGVtZSgpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0b2dnbGVEYXJrTW9kZSgpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6cm9vdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgICAgIGRhcmtNb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1tb29uXCIpO1xuICAgICAgZGFya01vZGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImZhLXN1blwiKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdG9nZ2xlRGFya1N0b3JhZ2UoKSB7XG4gICAgICBpZiAoZ2V0VGhlbWUoKSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGlzQnJvd3NlckRhcmtNb2RlKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiZcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRhcmtNb2RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZGFya01vZGVCdXR0b24uaWQgPSBcImZvb3Rlci1kYXJrLW1vZGVcIjtcbiAgICBkYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1tb29uXCIsIFwiZmEteGxcIik7XG4gICAgZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVEYXJrTW9kZSgpO1xuICAgICAgdG9nZ2xlRGFya1N0b3JhZ2UoKTtcbiAgICB9KTtcbiAgICBcbiAgICBpZiAoZ2V0VGhlbWUoKSA9PT0gXCJkYXJrXCIgfHwgKCFnZXRUaGVtZSgpICYmIGlzQnJvd3NlckRhcmtNb2RlKCkpKSB7XG4gICAgICB0b2dnbGVEYXJrTW9kZSgpO1xuICAgIH1cbiAgICBcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoYXV0aG9yTmFtZSk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChkYXJrTW9kZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZm9vdGVyQm94O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyQm94KCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ2JhdHRsZXNoaXAuJztcblxuICAgIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdHYW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy1nYW1lLWJ1dHRvbicpO1xuICAgIG5ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSAnbmV3IGdhbWUnO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmV3R2FtZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXJCb3g7IiwiaW1wb3J0IHNoaXBUeXBlcyBmcm9tICcuLi9zaGlwVHlwZXMnO1xuXG5sZXQgcGxheWVyO1xubGV0IGJvYXJkO1xuXG4vLyBUaGlzIG9iamVjdCBob2xkcyB0aGUgZGF0YSBmb3IgdGhlIGRyYWcgbWV0aG9kcyB0byB1c2Vcbi8vIFRoZXNlIHByb3BlcnRpZXMgYXJlIHVwZGF0ZWQgYXMgdGhlIHVzZXIgZHJhZ3MgYW5kIGRyb3BzIHNoaXBzXG5jb25zdCBkcmFnRGF0YSA9IHtcbiAgICBzaGlwT2JqZWN0OiBudWxsLFxuICAgIHNoaXBFbGVtZW50OiBudWxsLFxuICAgIG9mZnNldFg6IG51bGwsXG4gICAgb2Zmc2V0WTogbnVsbCxcbiAgICByb3dEaWY6IDAsXG4gICAgY29sRGlmOiAwLFxuICAgIHNoaXBIb21lQ29udGFpbmVyOiBudWxsLFxuICAgIHByZXZpb3VzQ29udGFpbmVyOiBudWxsLFxuICAgIHByZXZpb3VzQ2VsbDogbnVsbCxcbiAgICBjdXJyZW50Q2VsbDogbnVsbCxcbn1cblxuZnVuY3Rpb24gZHJhd1NldHVwQm9hcmQoc2V0dXBQbGF5ZXIsIHNldHVwQm9hcmQpIHtcbiAgICBwbGF5ZXIgPSBzZXR1cFBsYXllcjtcbiAgICBib2FyZCA9IHNldHVwQm9hcmQ7XG4gICAgY29uc3Qgc2V0dXBDZWxscyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJylcbiAgICBzZXR1cENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcblxuICAgICAgICAvLyBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGRyYWdFbnRlcilcbiAgICB9KVxuICAgIHJldHVybiBzZXR1cEJvYXJkO1xufVxuXG5mdW5jdGlvbiBkcmF3U2V0dXBTaGlwcygpIHtcbiAgICBjb25zdCBzZXR1cFNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dXBTaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwcy1jb250YWluZXInKTtcbiAgICBjb25zdCBzZXR1cFNoaXBzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dXBTaGlwc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwcy1oZWFkZXInKTtcbiAgICBjb25zdCBzZXR1cFNoaXBzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNldHVwU2hpcHNUaXRsZS50ZXh0Q29udGVudCA9ICdwbGFjZSB5b3VyIHNoaXBzOic7XG4gICAgY29uc3Qgc2V0dXBTaGlwc0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2V0dXBTaGlwc0luZm8udGV4dENvbnRlbnQgPSAnZG91YmxlIGNsaWNrIHRvIHJvdGF0ZSAob25jZSBwbGFjZWQpJztcbiAgICBjb25zdCBzZXR1cFNoaXBzT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNldHVwU2hpcHNPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLW9wdGlvbnMnKTtcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXN0YXJ0Jyk7XG4gICAgc3RhcnRHYW1lLnRleHRDb250ZW50ID0gJ1RPIEJBVFRMRSEnO1xuICAgIGNvbnN0IHJhbmRvbVNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmFuZG9tU2hpcHMuY2xhc3NMaXN0LmFkZCgnc2V0dXAtYnV0dG9uLXJhbmRvbScpO1xuICAgIHJhbmRvbVNoaXBzLnRleHRDb250ZW50ID0gJ3JhbmRvbWl6ZSc7XG4gICAgcmFuZG9tU2hpcHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByYW5kb21pemVGbGVldCk7XG4gICAgc2V0dXBTaGlwc09wdGlvbnMuYXBwZW5kKHN0YXJ0R2FtZSwgcmFuZG9tU2hpcHMpO1xuICAgIGNvbnN0IHNoaXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwVHlwZXMpIHtcbiAgICAgICAgc2hpcExpc3QuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoc2hpcFR5cGVzW3NoaXBdKSk7XG4gICAgfVxuICAgIHNldHVwU2hpcHNIZWFkZXIuYXBwZW5kKHNldHVwU2hpcHNUaXRsZSwgc2V0dXBTaGlwc0luZm8pXG4gICAgc2V0dXBTaGlwc0NvbnRhaW5lci5hcHBlbmQoc2V0dXBTaGlwc0hlYWRlciwgc2hpcExpc3QsIHNldHVwU2hpcHNPcHRpb25zKTtcbiAgICByZXR1cm4gc2V0dXBTaGlwc0NvbnRhaW5lcjtcbn1cblxuLy8gRHJhdyBhIHNoaXAgdG8gYmUgcGxhY2VkLCBnaXZpbmcgdGhlIGVsZW1lbnQgYW4gSUQgb2YgdGhlIHNoaXAncyB0eXBlXG5mdW5jdGlvbiBkcmF3U2hpcChzaGlwKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcCcpO1xuICAgIHNoaXBDb250YWluZXIuaWQgPSBgJHtzaGlwLm5hbWV9LWhvbWVgO1xuICAgIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwQm94LmlkID0gc2hpcC5uYW1lO1xuICAgIHNoaXBCb3guZGF0YXNldC5sZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICBzaGlwQm94LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtYm94Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtY2VsbCcpO1xuICAgICAgICBzaGlwQm94LmFwcGVuZENoaWxkKHNoaXBDZWxsKTtcbiAgICB9XG4gICAgc2hpcEJveC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIHNoaXBCb3guZGF0YXNldC5hbGlnbm1lbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgIHNoaXBCb3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICAgIHNoaXBCb3guYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCByb3RhdGVTaGlwKTtcblxuICAgIC8vIHNoaXBCb3guYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vICAgICBkcmFnU3RhcnQoZXZlbnQpO1xuICAgIC8vIH0pXG4gICAgc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICBjb25zdCB5ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoeCwgeSlcbiAgICAgICAgY29uc3QgdG91Y2hDZWxsID0gZWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSk7XG4gICAgICAgIGlmICh0b3VjaENlbGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZHJhZ0VudGVyKGV2ZW50LCB0b3VjaENlbGxbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhZ0xlYXZlKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQWRkIGluIGEgZ2hvc3Qgc2hpcFxuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvLyBQVVQgVEhJUyBJTlRPIFdFQiBWRVJTSU9OIFRPT1xuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG4gICAgICAgIGNvbnN0IHByZXZCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2hvc3Qtc2hpcCcpO1xuICAgICAgICBpZiAocHJldkJveCkgcHJldkJveC5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbmV3Qm94ID0gc2hpcEJveC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHRvdWNoTG9jYXRpb24gPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xuICAgICAgICBpZiAoZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgbmV3Qm94LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtdmVydGljYWwnKVxuICAgICAgICB9XG4gICAgICAgIG5ld0JveC5jbGFzc0xpc3QuYWRkKCdnaG9zdC1zaGlwJylcbiAgICAgICAgbmV3Qm94LnN0eWxlLmxlZnQgPSBgJHt0b3VjaExvY2F0aW9uLnBhZ2VYIC0gZHJhZ0RhdGEub2Zmc2V0WH1weGA7XG4gICAgICAgIG5ld0JveC5zdHlsZS50b3AgPSBgJHt0b3VjaExvY2F0aW9uLnBhZ2VZIC0gZHJhZ0RhdGEub2Zmc2V0WX1weGA7XG4gICAgICAgIGFwcC5hcHBlbmRDaGlsZChuZXdCb3gpXG4gICAgfSlcbiAgICBzaGlwQm94LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHByZXZCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2hvc3Qtc2hpcCcpO1xuICAgICAgICBpZiAocHJldkJveCkgcHJldkJveC5yZW1vdmUoKTtcbiAgICAgICAgZHJhZ0VuZChldmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHgsIHkpXG4gICAgICAgIGNvbnN0IHRvdWNoQ2VsbCA9IGVsZW1lbnRzLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpO1xuICAgICAgICBpZiAodG91Y2hDZWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRyb3AoZXZlbnQsIHRvdWNoQ2VsbFswXSk7XG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIC8vIEFzIG1vYmlsZSBicm93c2VycyBkb24ndCBzdXBwb3J0IGRvdWJsZSB0YXAsIHdlIGFkZCBhIHRpbWVyIGludG8gdGhlIHRvdWNoc3RhcnQgZXZlbnQgbGlzdGVuZXJcbiAgICBzaGlwQm94LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gRGlzYWJsZSBicm93c2VyIGRlZmF1bHQgem9vbSBvbiBkb3VibGUgdGFwXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgdGltZUJldHdlZW5UYXBzID0gMjAwO1xuICAgICAgICBpZiAoKHRpbWUgLSBzaGlwQm94Lmxhc3RDbGljaykgPCB0aW1lQmV0d2VlblRhcHMpIHtcbiAgICAgICAgICAgIHJvdGF0ZVNoaXAoZXZlbnQpO1xuICAgICAgICAgICAgZHJhZ1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYWdTdGFydChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEJveC5sYXN0Q2xpY2sgPSB0aW1lO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKHNoaXAubmFtZSA9PT0gJ3BhdHJvbCcpIHNoaXBOYW1lLnRleHRDb250ZW50ID0gJ3BhdHJvbCBib2F0JztcbiAgICBlbHNlIHNoaXBOYW1lLnRleHRDb250ZW50ID0gc2hpcC5uYW1lO1xuICAgIHNoaXBDb250YWluZXIuYXBwZW5kKHNoaXBOYW1lLCBzaGlwQm94KTtcbiAgICByZXR1cm4gc2hpcENvbnRhaW5lcjtcbn1cblxuLy8gUGxhY2UgYWxsIHNoaXAncyByYW5kb21seSBvbiB0aGUgcGxheWVyJ3MgZ2FtZWJvYXJkXG4vLyBUaGVuIGFwcGVuZCBlYWNoIHNoaXAgZWxlbWVudCB0byB0aGUgcGxhY2VkIHNoaXAncyBvcmlnaW4gd2l0aCBhcHByb3ByaWF0ZSBzdHlsaW5nXG5mdW5jdGlvbiByYW5kb21pemVGbGVldCgpIHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VkU2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHNoaXAudHlwZTtcbiAgICAgICAgY29uc3Qgb3JpZ2luID0gc2hpcC5zcXVhcmVzWzBdO1xuICAgICAgICBjb25zdCBhbGlnbm1lbnQgPSBzaGlwLmFsaWdubWVudDtcbiAgICAgICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0eXBlfWApO1xuICAgICAgICBzaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudCA9IGFsaWdubWVudDtcbiAgICAgICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1kcm9wcGVkJyk7XG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT09ICd2ZXJ0aWNhbCcpIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbiAgICAgICAgZWxzZSBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBvcmlnaW47XG4gICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHNoaXBFbGVtZW50KTtcbiAgICB9KVxufVxuXG4vLyBXaGVuIGEgdXNlciBncmFicyBhIHNoaXAgZWxlbWVudCwgd2UgdHJhY2sgdGhlIHVzZXIncyBjdXJzb3IgbG9jYXRpb24gZm9yIHRoZSBkcmFnRW50ZXIgYW5kIGRyb3AgZXZlbnRzXG4vLyBXaGVuIHRoZSBzaGlwIGlzIGdyYWJiZWQgZnJvbSB0aGUgY2VudGVyLCB0aGUgY3Vyc29yIGRvZXMgbm90IG1hdGNoIHVwIHdpdGggdGhlIHNoaXAncyBvcmlnaW4gY2VsbFxuLy8gVGhlIGNlbGxEaWYgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBvcmlnaW4gY2VsbCB0byB0aGUgY2VsbCB3aGVyZSB0aGUgdXNlciBoYXMgZ3JhYmJlZCB0aGUgc2hpcCBlbGVtZW50XG4vLyBpLmUuLCBpZiBhIHNoaXAgb2YgbGVuZ3RoIDUgaXMgZ3JhYmJlZCBmcm9tIHRoZSA0dGggY2VsbCwgdGhlIGNlbGxEaWYgd2lsbCBiZSAzXG5mdW5jdGlvbiB1cGRhdGVDZWxsRGlmKGV2ZW50KSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICBsZXQgYmNyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggLSBiY3IueDtcbiAgICAgICAgeSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSAtIGJjci55O1xuICAgICAgICBkcmFnRGF0YS5vZmZzZXRYID0geDtcbiAgICAgICAgZHJhZ0RhdGEub2Zmc2V0WSA9IHk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IGV2ZW50Lm9mZnNldFg7XG4gICAgICAgIHkgPSBldmVudC5vZmZzZXRZO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgY2VsbFNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAtc2hpcC1jZWxsJykub2Zmc2V0V2lkdGg7XG4gICAgaWYgKGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZHJhZ0RhdGEucm93RGlmID0gMDtcbiAgICAgICAgZHJhZ0RhdGEuY29sRGlmID0gTWF0aC5mbG9vcih4IC8gKGNlbGxTaXplICsgMikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdEYXRhLnJvd0RpZiA9IE1hdGguZmxvb3IoeSAvIChjZWxsU2l6ZSArIDIpKTtcbiAgICAgICAgZHJhZ0RhdGEuY29sRGlmID0gMDtcbiAgICB9XG59XG5cbi8vIEhhbmRsZSBsb2dpYyBmb3Igcm90YXRpbmcgYSBwbGFjZWQgc2hpcCAtIHJvdGF0aW9uIGlzIGFyb3VuZCB0aGUgb3JpZ2luXG5mdW5jdGlvbiByb3RhdGVTaGlwKGV2ZW50KSB7XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkcmFnRGF0YS5zaGlwRWxlbWVudDtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcFR5cGVzW3NoaXBFbGVtZW50LmlkXS5sZW5ndGg7XG4gICAgY29uc3Qgb3JpZ2luQ2VsbCA9IHNoaXBFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gSWYgdGhlIHNoaXAgaXMgbm90IHBsYWNlZCBpbiBhIGNlbGwsIHJldHVyblxuICAgIGlmICghb3JpZ2luQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkgcmV0dXJuO1xuICAgIGNvbnN0IG9yaWdpblJvdyA9IHBhcnNlSW50KG9yaWdpbkNlbGwuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IG9yaWdpbkNvbCA9IHBhcnNlSW50KG9yaWdpbkNlbGwuZGF0YXNldC5jb2wpO1xuICAgIGNvbnNvbGUubG9nKG9yaWdpblJvdywgb3JpZ2luQ29sKVxuICAgIHBsYXllci5nYW1lYm9hcmQucmVtb3ZlU2hpcChbb3JpZ2luUm93LCBvcmlnaW5Db2xdKTtcbiAgICBsZXQgcm93ID0gb3JpZ2luUm93O1xuICAgIGxldCBjb2wgPSBvcmlnaW5Db2w7XG4gICAgbGV0IG9yaWdpbkFsaWdubWVudCA9IHNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50O1xuICAgIGxldCBuZXdBbGlnbm1lbnQ7XG4gICAgLy8gSWYgdGhlIHJvdGF0aW9uIGNhdXNlcyB0aGUgc2hpcCB0byBiZSBvZmYgdGhlIGdyaWQsIGNoYW5nZSB0aGUgb3JpZ2luIGNlbGwgdG8gYWxsb3cgaXRzIGxlbmd0aFxuICAgIC8vIFRoaXMgYWxsb3dzIGEgc2hpcCBwbGFjZWQgbmVhciB0aGUgZmFyIGVkZ2Ugb2YgdGhlIGdyaWQgdG8gc3RpbGwgYmUgcm90YXRlZFxuICAgIGlmIChvcmlnaW5BbGlnbm1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBuZXdBbGlnbm1lbnQgPSAndmVydGljYWwnO1xuICAgICAgICBpZiAoKDEwIC0gcm93KSA8IHNoaXBMZW5ndGgpIHJvdyA9IDEwIC0gc2hpcExlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdBbGlnbm1lbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIGlmICgoMTAgLSBjb2wpIDwgc2hpcExlbmd0aCkgY29sID0gMTAgLSBzaGlwTGVuZ3RoO1xuICAgIH1cbiAgICAvLyBBdHRlbXB0IHRvIHBsYWNlIHRoZSBzaGlwIGFsb25nIGVhY2ggcm93IChpZiBob3Jpem9udGFsKSBvciBjb2x1bW4gKGlmIHZlcnRpY2FsKVxuICAgIC8vIEF0dGVtcHQgdGhpcyAxMCB0aW1lcyAtIGZvciBlYWNoIHJvdyBvciBjb2x1bW4sIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBncmlkXG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICBsZXQgc2hpcFNxdWFyZXMgPSBwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgW3JvdywgY29sXSwgbmV3QWxpZ25tZW50KTtcbiAgICB3aGlsZSAoc2hpcFNxdWFyZXMuaXNWYWxpZCA9PT0gZmFsc2UgJiYgYXR0ZW1wdHMgPCAxMCkge1xuICAgICAgICBpZiAobmV3QWxpZ25tZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHJvdyA9IHJvdyA8IDkgPyByb3cgKyAxIDogMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNvbCA9IGNvbCA8IDkgPyBjb2wgKyAxIDogMDtcbiAgICAgICAgc2hpcFNxdWFyZXMgPSBwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgW3JvdywgY29sXSwgbmV3QWxpZ25tZW50KTtcbiAgICAgICAgYXR0ZW1wdHMrKztcbiAgICB9XG4gICAgLy8gSWYgYSB2YWxpZCBwbGFjZW1lbnQgaXMgZm91bmQsIHBsYWNlIHRoZSBzaGlwIG9uIGJvdGggdGhlIHNldHVwIGJvYXJkIGFuZCBwbGF5ZXIncyBnYW1lYm9hcmRcbiAgICAvLyBTdHlsZSBhcHByb3ByaWF0ZWx5IHdpdGggYSB2ZXJ0aWNhbCBjbGFzcyBpZiBuZWVkZWRcbiAgICBpZiAoc2hpcFNxdWFyZXMuaXNWYWxpZCkge1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwRWxlbWVudC5pZCwgW3JvdywgY29sXSwgbmV3QWxpZ25tZW50KTtcbiAgICAgICAgY29uc3QgbmV3T3JpZ2luQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYCk7XG4gICAgICAgIG5ld09yaWdpbkNlbGwuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgICAgICBzaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudCA9IG5ld0FsaWdubWVudDtcbiAgICAgICAgaWYgKG5ld0FsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJykgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xuICAgICAgICBlbHNlIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbiAgICB9XG4gICAgLy8gRWxzZSwgcGxhY2UgdGhlIHNoaXAgYmFjayBpbnRvIHRoZSBwbGF5ZXIncyBnYW1lYm9hcmRcbiAgICBlbHNlIHtcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEVsZW1lbnQuaWQsIFtvcmlnaW5Sb3csIG9yaWdpbkNvbF0sIG9yaWdpbkFsaWdubWVudCk7XG4gICAgfVxufVxuXG4vLyBXaGVuIHRoZSB1c2VyIHN0YXJ0cyBkcmFnZ2luZyBhIHNoaXAsIHdlIHN0b3JlIGl0cyBpbmZvcm1hdGlvbiBpbiBkcmFnRGF0YVxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICBkcmFnRGF0YS5zaGlwRWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkcmFnRGF0YS5zaGlwSG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkfS1ob21lYCk7XG4gICAgICAgIGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBkcmFnRGF0YS5zaGlwSG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LnRhcmdldC5pZH0taG9tZWApO1xuICAgICAgICBkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIH07XG4gICAgdXBkYXRlQ2VsbERpZihldmVudClcbiAgICBpZiAoZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQgPT09ICd2ZXJ0aWNhbCcpIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbiAgICAvLyBPbiBkcmFnU3RhcnQsIHdlIHN0b3JlIHRoZSBzaGlwIGJhY2sgaW4gaXRzIGhvbWUgY29udGFpbmVyICYgc3R5bGUgaXQgdG8gYmUgYSAnZ2hvc3QnXG4gICAgLy8gVXNlIGEgc2V0VGltZW91dCB0byBlbnN1cmUgdGhpcyBoYXBwZW5zIG9ubHkgYWZ0ZXIgdGhlIHNoaXAgaGFzIGJlZW4gcGlja2VkIHVwXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtaGlkZScpO1xuICAgICAgICBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cC1zaGlwLWRyb3BwZWQnKTtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xuICAgICAgICBkcmFnRGF0YS5zaGlwSG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnRGF0YS5zaGlwRWxlbWVudClcbiAgICB9LCAwKTtcbiAgICAvLyBJZiB0aGUgc2hpcCBpcyBhbHJlYWR5IHBsYWNlZCAoaS5lLiwgaXQncyBwYXJlbnQgaXMgYSBjZWxsKSwgd2UgcmVtb3ZlIHRoZSBzaGlwIGZyb20gdGhlIHBsYXllcidzIGdhbWVib2FyZFxuICAgIGlmIChkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXI7XG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKTtcbiAgICAgICAgcGxheWVyLmdhbWVib2FyZC5yZW1vdmVTaGlwKFtyb3csIGNvbF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhZ0VuZChldmVudCkge1xuICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwLXNoaXAtaGlkZScpO1xufVxuXG4vLyBGb3IgZWFjaCBjZWxsIHdlIGVudGVyIHdoaWxzdCBkcmFnZ2luZyB0aGUgc2hpcCwgd2UgdXNlIHJvd0RpZmYgYW5kIGNvbERpZmZcbi8vIENoZWNrIHRoZSBwbGFjZW1lbnQgc3F1YXJlcyBhbmQgc3R5bGUgdGhlbSB2YWxpZCBvciBpbnZhbGlkXG5mdW5jdGlvbiBkcmFnRW50ZXIoZXZlbnQsIHRvdWNoQ2VsbCkge1xuICAgIGRyYWdMZWF2ZShldmVudCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0eXBlID0gZHJhZ0RhdGEuc2hpcEVsZW1lbnQuaWQ7XG4gICAgbGV0IHJvdztcbiAgICBsZXQgY29sO1xuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2htb3ZlJykge1xuICAgICAgICByb3cgPSBwYXJzZUludCh0b3VjaENlbGwuZGF0YXNldC5yb3cpIC0gcGFyc2VJbnQoZHJhZ0RhdGEucm93RGlmKTtcbiAgICAgICAgY29sID0gcGFyc2VJbnQodG91Y2hDZWxsLmRhdGFzZXQuY29sKSAtIHBhcnNlSW50KGRyYWdEYXRhLmNvbERpZik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93KSAtIHBhcnNlSW50KGRyYWdEYXRhLnJvd0RpZik7XG4gICAgICAgIGNvbCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmNvbCkgLSBwYXJzZUludChkcmFnRGF0YS5jb2xEaWYpO1xuICAgIH07XG4gICAgY29uc3Qgc2hpcFNxdWFyZXMgPSBwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcFR5cGVzW3R5cGVdLmxlbmd0aCwgW3JvdywgY29sXSwgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQpXG4gICAgc2hpcFNxdWFyZXMuc3F1YXJlcyA9IHNoaXBTcXVhcmVzLnNxdWFyZXMuZmlsdGVyKHNxdWFyZSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrU3F1YXJlKHNxdWFyZVswXSwgc3F1YXJlWzFdKSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pXG4gICAgc2hpcFNxdWFyZXMuc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7c3F1YXJlWzBdfSddW2RhdGEtY29sPScke3NxdWFyZVsxXX0nXWApO1xuICAgICAgICAvLyBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtZHJhZy1vdmVyJyk7XG4gICAgICAgIGNvbnN0IGNlbGxPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCAnY2VsbC1kcmFnLW92ZXInKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjZWxsT3ZlcmxheSk7XG4gICAgICAgIGlmIChzaGlwU3F1YXJlcy5pc1ZhbGlkKSBjZWxsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdjZWxsLWRyYWctdmFsaWQnKTtcbiAgICAgICAgZWxzZSBjZWxsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdjZWxsLWRyYWctaW52YWxpZCcpO1xuICAgIH0pXG4gICAgLy8gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NlbGwtZHJhZy1vdmVyJyk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vIEhFUkUgV0UgU0hPVUxEIEJFIEFCTEUgVE8gU0VFIFRIRSBCT0FSRCBVTkRFUk5FQVRIIEEgU0hJUCBCT1hcbiAgICAvLyBJR05PUklORyBJVCBJTiBTT01FIFdBWT9cbiAgICAvL1xuICAgIC8vXG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuLy8gV2hlbiB3ZSBsZWF2ZSBhIGNlbGwsIG9yIGRyb3AgdGhlIHNoaXAsIHJlbW92ZSBhbGwgdmFsaWQvaW52YWxpZCBzdHlsaW5nXG5mdW5jdGlvbiBkcmFnTGVhdmUoZXZlbnQpIHtcbiAgICBjb25zdCBsZWZ0Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbC1kcmFnLW92ZXInKTtcbiAgICBsZWZ0Q2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG4vLyBIYW5kbGUgZHJvcCBldmVudHMgb24gY2VsbHMgdXNpbmcgdGhlIHJvd0RpZmYgYW5kIGNvbERpZmYgZHJhZ0RhdGEgcHJvcGVydGllc1xuZnVuY3Rpb24gZHJvcChldmVudCwgdG91Y2hDZWxsKSB7XG4gICAgZHJhZ0xlYXZlKGV2ZW50KTtcbiAgICBsZXQgcm93O1xuICAgIGxldCBjb2w7XG4gICAgY29uc3QgdHlwZSA9IGRyYWdEYXRhLnNoaXBFbGVtZW50LmlkO1xuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgIHJvdyA9IHBhcnNlSW50KHRvdWNoQ2VsbC5kYXRhc2V0LnJvdykgLSBwYXJzZUludChkcmFnRGF0YS5yb3dEaWYpO1xuICAgICAgICBjb2wgPSBwYXJzZUludCh0b3VjaENlbGwuZGF0YXNldC5jb2wpIC0gcGFyc2VJbnQoZHJhZ0RhdGEuY29sRGlmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb3cgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5yb3cpIC0gcGFyc2VJbnQoZHJhZ0RhdGEucm93RGlmKTtcbiAgICAgICAgY29sID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKSAtIHBhcnNlSW50KGRyYWdEYXRhLmNvbERpZik7XG4gICAgfTtcbiAgICBjb25zdCBzaGlwU3F1YXJlcyA9IHBsYXllci5nYW1lYm9hcmQuY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwVHlwZXNbdHlwZV0ubGVuZ3RoLCBbcm93LCBjb2xdLCBkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudClcbiAgICAvLyBJZiB0aGUgZHJvcCBpcyBhIHZhbGlkIGxvY2F0aW9uLCBwbGFjZSB0aGUgc2hpcCBvbiB0aGUgcGxheWVyJ3MgZ2FtZWJvYXJkIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHNldHVwIGJvYXJkXG4gICAgaWYgKHNoaXBTcXVhcmVzLmlzVmFsaWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luQ2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYCk7XG4gICAgICAgIG9yaWdpbkNlbGwuYXBwZW5kQ2hpbGQoZHJhZ0RhdGEuc2hpcEVsZW1lbnQpO1xuICAgICAgICBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLWRyb3BwZWQnKTtcbiAgICAgICAgZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIgPSBvcmlnaW5DZWxsO1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChkcmFnRGF0YS5zaGlwRWxlbWVudC5pZCwgW3JvdywgY29sXSwgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQpO1xuICAgIH1cbiAgICAvLyBFbHNlLCBtb3ZlIHRoZSBzaGlwIGJhY2sgdG8gaXRzIHByZXZpb3VzIGxvY2F0aW9uXG4gICAgLy8gSWYgdGhhdCBsb2NhdGlvbiBpcyBhIGNlbGwsIHBsYWNlIHRoZSBzaGlwIGJhY2sgb24gdGhlIHBsYXllcidzIGdhbWVib2FyZCBpbiB0aGUgcHJldmlvdXMgbG9jYXRpb25cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLWRyb3BwZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZSb3cgPSBkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lci5kYXRhc2V0LnJvdztcbiAgICAgICAgICAgIGNvbnN0IHByZXZDb2wgPSBkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lci5kYXRhc2V0LmNvbDtcbiAgICAgICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGRyYWdEYXRhLnNoaXBFbGVtZW50LmlkLCBbcHJldlJvdywgcHJldkNvbF0sIGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50KVxuICAgICAgICB9XG4gICAgICAgIGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdEYXRhLnNoaXBFbGVtZW50KVxuICAgIH1cbiAgICBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cC1zaGlwLWhpZGUnKTtcbiAgICBpZiAoZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQgPT09ICd2ZXJ0aWNhbCcpIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbiAgICBlbHNlIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbn1cblxuY29uc3Qgc2V0dXAgPSB7XG4gICAgZHJhd1NldHVwQm9hcmQsXG4gICAgZHJhd1NldHVwU2hpcHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0dXA7IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmZ1bmN0aW9uIEdhbWUoKXtcbiAgICBsZXQgcGxheWVyMTtcbiAgICBsZXQgcGxheWVyMjtcbiAgICBsZXQgY3VycmVudFBsYXllcjtcbiAgICBsZXQgZGVmZW5kaW5nUGxheWVyO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsYXllcihuYW1lLCBudW1iZXIpe1xuICAgICAgICByZXR1cm4gUGxheWVyKG5hbWUsIG51bWJlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5ld0dhbWUocGxheWVyMSwgcGxheWVyMil7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IHBsYXllcjE7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IHBsYXllcjI7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyMTtcbiAgICAgICAgdGhpcy5kZWZlbmRpbmdQbGF5ZXIgPSB0aGlzLnBsYXllcjI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoYW5nZVR1cm4oKXtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5jdXJyZW50UGxheWVyID09PSB0aGlzLnBsYXllcjEgPyB0aGlzLnBsYXllcjIgOiB0aGlzLnBsYXllcjE7XG4gICAgICAgIHRoaXMuZGVmZW5kaW5nUGxheWVyID0gdGhpcy5kZWZlbmRpbmdQbGF5ZXIgPT09IHRoaXMucGxheWVyMiA/IHRoaXMucGxheWVyMSA6IHRoaXMucGxheWVyMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tHYW1lT3Zlcigpe1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5jaGVja0FsbFNoaXBzU3VuaygpKSByZXR1cm4gdGhpcy5wbGF5ZXIyO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5jaGVja0FsbFNoaXBzU3VuaygpKSByZXR1cm4gdGhpcy5wbGF5ZXIxO1xuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGVzdEdhbWUoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoMywgWzEsM10sICd2ZXJ0aWNhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIFs3LDJdLCAnaG9yaXpvbnRhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKDUsIFsyLDddLCAndmVydGljYWwnKVxuICAgICAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgzLCBbMSwzXSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoNCwgWzcsMl0sICdob3Jpem9udGFsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoNSwgWzIsN10sICd2ZXJ0aWNhbCcpXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXllcjEsXG4gICAgICAgIHBsYXllcjIsXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgICAgIGRlZmVuZGluZ1BsYXllcixcbiAgICAgICAgY3JlYXRlUGxheWVyLFxuICAgICAgICBuZXdHYW1lLFxuICAgICAgICBjaGFuZ2VUdXJuLFxuICAgICAgICBjaGVja0dhbWVPdmVyLFxuICAgICAgICB0ZXN0R2FtZVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBzaGlwVHlwZXMgZnJvbSAnLi9zaGlwVHlwZXMnO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVFbXB0eUdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG4gICAgLy8gQ3JlYXRlIGEgMTB4MTAgMmQgYXJyYXkgZ2FtZWJvYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlRW1wdHlHYW1lYm9hcmQoKSB7XG4gICAgICAgIGxldCBnYW1lYm9hcmRBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPD0gOTsgcm93KyspIHtcbiAgICAgICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IDk7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgcm93QXJyYXlbY29sXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lYm9hcmRBcnJheVtyb3ddID0gcm93QXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZEFycmF5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckJvYXJkKGJvYXJkKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckZsZWV0KGZsZWV0KSB7XG4gICAgICAgIHdoaWxlIChmbGVldC5sZW5ndGggPiAwKSBmbGVldC5wb3AoKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSB2YWx1ZSBvZiBhIHNxdWFyZSBpbiB0aGUgZ2FtZWJvYXJkLCBhbmQgdW5kZWZpbmVkIGlmIG91dHNpZGUgdGhlIGdhbWVib2FyZCBleHRlbnRzXG4gICAgZnVuY3Rpb24gY2hlY2tTcXVhcmUocm93LCBjb2wpIHtcbiAgICAgICAgaWYgKHJvdyA8IDAgfHwgY29sIDwgMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHJvdyA+IDkgfHwgY29sID4gOSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHNoaXAgcGxhY2VtZW50IHNxdWFyZXNcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBvcmlnaW47XG4gICAgICAgIGxldCBzaGlwU3F1YXJlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgIGFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnID8gY29sKysgOiByb3crKztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBldmVyeSBwbGFjZW1lbnQgc3F1YXJlIGlzIG51bGwsIHZhbGlkUGxhY2VtZW50IGlzIGFuIGFycmF5IG9mIHRoZSB2YWxpZCBzcXVhcmVzXG4gICAgICAgIGNvbnN0IHZhbGlkUGxhY2VtZW50ID0gc2hpcFNxdWFyZXMuZXZlcnkoc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gc3F1YXJlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tTcXVhcmUocm93LCBjb2wpID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sXSA9PT0gbnVsbDtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gUmV0dXJuIGFuIGRvYmplY3QgY29udGFpbmluZyB0aGUgdmFsaWRpdHkgYW5kIHRoZSBzcXVhcmVzIHByb2Nlc3NlZFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNWYWxpZDogdmFsaWRQbGFjZW1lbnQsXG4gICAgICAgICAgICBzcXVhcmVzOiBzaGlwU3F1YXJlc1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwVHlwZSwgb3JpZ2luLCBhbGlnbm1lbnQpIHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBUeXBlc1tzaGlwVHlwZV0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBzaGlwU3F1YXJlcyA9IHRoaXMuY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIC8vIElmIHNoaXBTcXVhcmVzIGlzIGEgdmFsaWQgYXJyYXksIHBsYWNlIHRoZSBzaGlwIG9uIGFsbCBvZiB0aG9zZSBzcXVhcmVzXG4gICAgICAgIGlmIChzaGlwU3F1YXJlcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gU2hpcChzaGlwVHlwZSk7XG4gICAgICAgICAgICBzaGlwLnNxdWFyZXMgPSBzaGlwU3F1YXJlcy5zcXVhcmVzO1xuICAgICAgICAgICAgc2hpcC5hbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XG4gICAgICAgICAgICBzaGlwU3F1YXJlcy5zcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IHNxdWFyZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IHNoaXA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGxhY2VkU2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgICAgIHJldHVybiBzaGlwO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIFwiQ2Fubm90IHBsYWNlIHNoaXAgaW4gdGhhdCBsb2NhdGlvblwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVTaGlwKG9yaWdpbil7XG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBvcmlnaW47XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmNoZWNrU3F1YXJlKHJvdywgY29sKTtcbiAgICAgICAgc2hpcC5zcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBzcXVhcmU7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwbGFjZWRTaGlwc0luZGV4ID0gdGhpcy5wbGFjZWRTaGlwcy5pbmRleE9mKHNoaXApO1xuICAgICAgICB0aGlzLnBsYWNlZFNoaXBzLnNwbGljZShwbGFjZWRTaGlwc0luZGV4LCAxKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VBbGxTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICBjbGVhckJvYXJkKHRoaXMuYm9hcmQpO1xuICAgICAgICBjbGVhckZsZWV0KHRoaXMucGxhY2VkU2hpcHMpO1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHNoaXBUeXBlcyl7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wbGFjZVNoaXBSYW5kb21seShzaGlwKTtcbiAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0JyB8fCByZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRha2UgYSBzaGlwIGFuZCBkZXRlcm1pbmUgYSByYW5kb20gYWxpZ25tZW50IGFuZCBvcmlnaW5cbiAgICAvLyBLZWVwIHRyeWluZyB0byBwbGFjZSBzaGlwIHVudGlsIGFuIGFsbG93ZWQgbG9jYXRpb24gaXMgZm91bmRcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBSYW5kb21seShzaGlwVHlwZSkge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcFR5cGVzW3NoaXBUeXBlXS5sZW5ndGg7XG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUFsaWdubWVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21PcmlnaW4oYWxpZ25tZW50KSB7XG4gICAgICAgICAgICBsZXQgcm93RGlmID0gMDtcbiAgICAgICAgICAgIGxldCBjb2xEaWYgPSAwO1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJykgcm93RGlmID0gc2hpcExlbmd0aCAtIDE7XG4gICAgICAgICAgICBlbHNlIGNvbERpZiA9IHNoaXBMZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHJvd0RpZikpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGNvbERpZikpO1xuICAgICAgICAgICAgcmV0dXJuIFtyb3csIGNvbF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFsaWdubWVudCA9IGdldFJhbmRvbUFsaWdubWVudCgpO1xuICAgICAgICBsZXQgb3JpZ2luID0gZ2V0UmFuZG9tT3JpZ2luKGFsaWdubWVudCk7XG4gICAgICAgIGxldCBzaGlwU3F1YXJlcyA9IHRoaXMuY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIC8vIGxldCByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCk7XG4gICAgICAgIHdoaWxlICghc2hpcFNxdWFyZXMuaXNWYWxpZCkge1xuICAgICAgICAgICAgYWxpZ25tZW50ID0gZ2V0UmFuZG9tQWxpZ25tZW50KCk7XG4gICAgICAgICAgICBvcmlnaW4gPSBnZXRSYW5kb21PcmlnaW4oYWxpZ25tZW50KTtcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzID0gdGhpcy5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZVNoaXAoc2hpcFR5cGUsIG9yaWdpbiwgYWxpZ25tZW50KTtcbiAgICB9XG4gICAgLy8gUmVjZWl2ZXMgYW4gYXR0YWNrIGFuZCBjYWxjdWxhdGVzIHRoZSByZXN1bHRcbiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IC0gJ2hpdCcgb3IgJ21pc3MnIGRlcGVuZGluZyBvbiByZXN1bHQsIGFuZCB0aGUgY29vcmRpbmF0ZXNcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrU3F1YXJlKHJvdywgY29sKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gXCJJbnZhbGlkIGxvY2F0aW9uXCI7XG4gICAgICAgIGNvbnN0IGF0dGFja2VkU2hpcCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICBpZiAoYXR0YWNrZWRTaGlwID09PSBudWxsKSB0aGlzLmJvYXJkW3Jvd11bY29sXSA9ICdtaXNzJztcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRhY2tlZFNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9ICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5ib2FyZFtyb3ddW2NvbF0sIFtyb3csIGNvbF0sIGF0dGFja2VkU2hpcF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHBsYWNlZFNoaXBzLFxuICAgICAgICBjaGVja1NxdWFyZSxcbiAgICAgICAgY2hlY2tWYWxpZFBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZW1vdmVTaGlwLFxuICAgICAgICBwbGFjZUFsbFNoaXBzUmFuZG9tbHksXG4gICAgICAgIHBsYWNlU2hpcFJhbmRvbWx5LFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja0FsbFNoaXBzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IGFpTG9naWMgZnJvbSAnLi9haUxvZ2ljJztcblxuZnVuY3Rpb24gUGxheWVyKHBsYXllck5hbWUsIHBsYXllck51bWJlcikge1xuICAgIGxldCBuYW1lID0gdHlwZW9mIHBsYXllck5hbWUgPT09ICdzdHJpbmcnID8gcGxheWVyTmFtZSA6ICdiYXR0bGVCb3QnO1xuICAgIGNvbnN0IG51bWJlciA9IHBsYXllck51bWJlcjtcbiAgICBjb25zdCBpc0FJID0gdHlwZW9mIHBsYXllck5hbWUgIT09ICdzdHJpbmcnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IGJhdHRsZUJvdCA9IGFpTG9naWMoKTtcbiAgICBmdW5jdGlvbiBhdHRhY2soZW5lbXksIHJvdywgY29sKSB7XG4gICAgICAgIC8vIElmIHRoZSBhdHRhY2tpbmcgcGxheWVyIGlzIEFJLCB3ZSB1c2UgdGhlIGFpTG9naWMgbW9kdWxlIHRvIGdldCB0aGUgYXR0YWNrIGNvb3JkaW5hdGVzXG4gICAgICAgIGlmICh0aGlzLmlzQUkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhdHRsZUJvdC5hdmFpbGFibGVBdHRhY2tzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdObyBzcXVhcmVzIHRvIGF0dGFjayc7XG4gICAgICAgICAgICBbcm93LCBjb2xdID0gdGhpcy5iYXR0bGVCb3QuYXR0YWNrKGVuZW15KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIHJlc3VsdCBvZiB0aGUgYXR0YWNrIGFuZCB1cGRhdGUgdGhlIGFpTG9naWMgd2l0aCBpdFxuICAgICAgICBjb25zdCByZXN1bHQgPSBlbmVteS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgIGlmICh0aGlzLmlzQUkpe1xuICAgICAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhdHRsZUJvdC5sYXN0SGl0QXJyYXkucHVzaChyZXN1bHRbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYmF0dGxlQm90LmNvbmN1cnJlbnRNaXNzZXMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gJ21pc3MnKSB0aGlzLmJhdHRsZUJvdC5jb25jdXJyZW50TWlzc2VzKys7XG4gICAgICAgICAgICBpZiAocmVzdWx0WzJdICE9PSBudWxsKSB0aGlzLmJhdHRsZUJvdC5sYXN0U2hpcCA9IHJlc3VsdFsyXTtcbiAgICAgICAgICAgIHRoaXMuYmF0dGxlQm90LnJlbW92ZUNlbGxGcm9tQXZhaWxhYmxlQXR0YWNrcyhyZXN1bHRbMV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG51bWJlcixcbiAgICAgICAgaXNBSSxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBiYXR0bGVCb3QsXG4gICAgICAgIGF0dGFja1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBzaGlwVHlwZXMgZnJvbSAnLi9zaGlwVHlwZXMnO1xuXG5mdW5jdGlvbiBTaGlwKHNoaXBUeXBlKXtcbiAgICBjb25zdCB0eXBlID0gc2hpcFR5cGU7XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcFR5cGVzW3NoaXBUeXBlXS5sZW5ndGg7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzcXVhcmVzO1xuICAgIGxldCBhbGlnbm1lbnQ7XG4gICAgZnVuY3Rpb24gaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N1bmsoKXtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHMsXG4gICAgICAgIHNxdWFyZXMsXG4gICAgICAgIGFsaWdubWVudCxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiY29uc3Qgc2hpcFR5cGVzID0ge1xuICAgIGNhcnJpZXI6IHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdjYXJyaWVyJyxcbiAgICAgICAgbGVuZ3RoOiA1XG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnYmF0dGxlc2hpcCcsXG4gICAgICAgIGxlbmd0aDogNFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnZGVzdHJveWVyJyxcbiAgICAgICAgbGVuZ3RoOiAzXG4gICAgfSxcbiAgICBzdWJtYXJpbmU6IHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdzdWJtYXJpbmUnLFxuICAgICAgICBsZW5ndGg6IDNcbiAgICB9LFxuICAgIHBhdHJvbDoge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ3BhdHJvbCcsXG4gICAgICAgIGxlbmd0aDogMlxuICAgIH0sXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBUeXBlczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL2RvbS9kb21Db250cm9sbGVyJ1xuXG4vLyBpbXBvcnQgSWNvbiBmcm9tICcuL2ljb24ucG5nJztcbi8vIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuLy8gbXlJY29uLnNyYyA9IEljb247XG4vLyBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbilcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9