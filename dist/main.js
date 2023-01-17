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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header-height: 100px;\n    --board-size: 318px;\n    --cell-size: 30px;\n\n    --background-color: rgb(240, 240, 240);\n    --background-color-transparent: rgba(240, 240, 240, 0.7);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --background-color-transparent: rgba(30, 30, 30, 0.7);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(90, 90, 90);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ships-header p {\n    margin: 0;\n    font-size: 0.8rem;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    cursor: grab;\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 20;\n}\n\n.setup-ship-vertical {\n    flex-direction: column;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.ghost-ship {\n    position: absolute;\n    z-index: 200;\n    opacity: 0.8;\n}\n\n.ghost-ship>.setup-ship-cell {\n    background-color: var(--cell-hover-color);\n}\n\n.setup-ship-cell {\n    width: var(--cell-size);\n    height: var(--cell-size);\n    background-color: var(--cell-hover-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: var(--hit-color);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    height: var(--cell-size);\n    width: var(--cell-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-setup {\n    display: inline-block;\n}\n\n.cell-drag-over {\n    pointer-events: none;\n    position: absolute;\n    display: inline-block;\n    z-index: 40;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n.cell-sunk {\n    background-color: var(--sunk-color);\n    transition: background-color 0.2s ease;\n}\n\n/* Victory container */\n.victory-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 318px;\n    text-align: center;\n    padding: 20px;\n    border: 3px solid var(--text-color-main);\n    background-color: var(--background-color-transparent);\n    backdrop-filter: blur(4px);\n}\n\n.victory-container h2 {\n    margin: 0;\n}\n\n.victory-container p {\n    margin: 6px;\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}\n\n@media screen and (max-width: 800px) {\n    :root {\n        --header-height: 80px;\n        --board-size: 278px;\n        --cell-size: 26px;\n    }\n\n    header button {\n        height: 28px;\n        width: 100px;\n        font-size: 0.9rem;\n        padding-bottom: 2px;\n    }\n\n    #game-container {\n        gap: 20px;\n    }\n\n    .setup-button-start,\n    .setup-button-random {\n        width: 100px;\n        height: 28px;\n    }\n\n    .setup-button-start {\n        font-size: 0.9rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;;IAEjB,sCAAsC;IACtC,wDAAwD;IACxD,gCAAgC;IAChC,sCAAsC;IACtC,oCAAoC;IACpC,gCAAgC;IAChC,+BAA+B;IAC/B,gCAAgC;IAChC,gCAAgC;IAChC,kCAAkC;IAClC,qCAAqC;IACrC,kCAAkC;IAClC,wCAAwC;IACxC,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;IACnC,qDAAqD;IACrD,6BAA6B;IAC7B,mCAAmC;IACnC,uCAAuC;IACvC,gCAAgC;IAChC,6BAA6B;IAC7B,8BAA8B;IAC9B,8BAA8B;IAC9B,qCAAqC;IACrC,qCAAqC;IACrC,+BAA+B;IAC/B,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yCAAyC;IACzC,qCAAqC;IACrC,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,SAAS;AACb;;AAEA,WAAW;AACX;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wCAAwC;IACxC,gBAAgB;IAChB,qCAAqC;AACzC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;QACjB,2CAA2C;IAC/C;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;IACf,SAAS;AACb;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,wBAAwB;IACxB,sCAAsC;IACtC,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,QAAQ;IACR,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,yCAAyC;IACzC,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,+BAA+B;AACnC;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI;QACI,qBAAqB;QACrB,oCAAoC;IACxC;AACJ;;AAEA,oBAAoB;AACpB;IACI,qBAAqB;AACzB;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;IACxB,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;IACnC,0CAA0C;AAC9C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;AACtC;;AAEA,yDAAyD;AACzD;IACI;QACI,yCAAyC;IAC7C;AACJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;IACnC,sCAAsC;AAC1C;;AAEA,sBAAsB;AACtB;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,qDAAqD;IACrD,0BAA0B;AAC9B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA,WAAW;AACX;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;AACnC;;AAEA;;IAEI;;QAEI,eAAe;QACf,qBAAqB;QACrB,+BAA+B;IACnC;AACJ;;AAEA;IACI;QACI,qBAAqB;QACrB,mBAAmB;QACnB,iBAAiB;IACrB;;IAEA;QACI,YAAY;QACZ,YAAY;QACZ,iBAAiB;QACjB,mBAAmB;IACvB;;IAEA;QACI,SAAS;IACb;;IAEA;;QAEI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n:root {\n    --header-height: 100px;\n    --board-size: 318px;\n    --cell-size: 30px;\n\n    --background-color: rgb(240, 240, 240);\n    --background-color-transparent: rgba(240, 240, 240, 0.7);\n    --cell-color: rgb(230, 230, 230);\n    --cell-hover-color: rgb(200, 200, 200);\n    --cell-border-color: rgb(70, 70, 70);\n    --ship-color: rgb(150, 150, 150);\n    --hit-color: rgb(206, 169, 134);\n    --miss-color: rgb(161, 216, 161);\n    --sunk-color: rgb(206, 134, 134);\n    --text-color-main: rgb(40, 40, 40);\n    --text-color-grey: rgb(100, 100, 100);\n    --button-color: rgb(210, 210, 210);\n    --button-color-hover: rgb(230, 230, 230);\n    --button-color-active: grey;\n}\n\n:root.dark {\n    --background-color: rgb(30, 30, 30);\n    --background-color-transparent: rgba(30, 30, 30, 0.7);\n    --cell-color: rgb(40, 40, 40);\n    --cell-hover-color: rgb(90, 90, 90);\n    --cell-border-color: rgb(220, 220, 220);\n    --ship-color: rgb(153, 153, 153);\n    --hit-color: rgb(155, 99, 61);\n    --miss-color: rgb(52, 109, 52);\n    --sunk-color: rgb(155, 61, 61);\n    --text-color-main: rgb(220, 220, 220);\n    --text-color-grey: rgb(160, 160, 160);\n    --button-color: rgb(50, 50, 50);\n    --button-color-hover: rgb(20, 20, 20);\n    --button-color-active: grey;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--background-color);\n    font-family: 'Roboto Mono', monospace;\n    color: var(--text-color-main);\n}\n\n#app {\n    padding: 0 5%;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\nh3 {\n    margin: 0;\n}\n\n/* Header */\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader button {\n    height: 32px;\n    width: 120px;\n    font-size: 1rem;\n    padding-bottom: 2px;\n}\n\nbutton {\n    font-family: 'Poppins', Arial, sans-serif;\n    color: var(--text-color-main);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--text-color-main);\n    border-radius: 0;\n    background-color: var(--button-color);\n}\n\nbutton:active {\n    background-color: var(--button-color-active);\n}\n\n@media (hover: hover) {\n    button:hover {\n        cursor: pointer;\n        border-width: 2px;\n        background-color: var(--button-color-hover);\n    }\n}\n\n#game-container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-wrap: wrap;\n    gap: 40px;\n}\n\n/* Player setup */\n.setup-ships-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: var(--board-size);\n    height: calc(var(--board-size) + 25px);\n    text-align: right;\n}\n\n.setup-ships-header p {\n    margin: 0;\n    font-size: 0.8rem;\n}\n\n.setup-ship-shiplist {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.setup-ship {\n    height: 40px;\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.setup-ship p {\n    margin: 0;\n    display: inline-block;\n}\n\n.setup-ship-box {\n    cursor: grab;\n    display: inline-flex;\n    gap: 2px;\n    position: relative;\n    z-index: 20;\n}\n\n.setup-ship-vertical {\n    flex-direction: column;\n}\n\n.setup-ship-hide div {\n    background-color: rgba(0, 0, 0, 0);\n    opacity: 0.5;\n}\n\n.setup-ship-dropped {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n}\n\n.ghost-ship {\n    position: absolute;\n    z-index: 200;\n    opacity: 0.8;\n}\n\n.ghost-ship>.setup-ship-cell {\n    background-color: var(--cell-hover-color);\n}\n\n.setup-ship-cell {\n    width: var(--cell-size);\n    height: var(--cell-size);\n    background-color: var(--cell-hover-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.setup-ships-options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\n    width: 120px;\n    height: 36px;\n}\n\n.setup-button-start {\n    font-weight: 600;\n    font-size: 1rem;\n    background-color: var(--hit-color);\n    transition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\n    opacity: 0.5;\n    pointer-events: none;\n}\n\n@media (hover: hover) {\n    .setup-button-start:hover {\n        transform: scale(1.1);\n        background-color: rgb(226, 116, 116);\n    }\n}\n\n/* Player sections */\n.board-container {\n    display: inline-block;\n}\n\n/* Player boards */\n.board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n}\n\n.cell {\n    position: relative;\n    cursor: crosshair;\n    height: var(--cell-size);\n    width: var(--cell-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--cell-color);\n    border: 1px solid var(--cell-border-color);\n}\n\n.cell-setup {\n    display: inline-block;\n}\n\n.cell-drag-over {\n    pointer-events: none;\n    position: absolute;\n    display: inline-block;\n    z-index: 40;\n}\n\n.cell-drag-valid {\n    background-color: var(--miss-color);\n}\n\n.cell-drag-invalid {\n    background-color: var(--hit-color);\n}\n\n/* Only allow visible hover for opposing player's board */\n@media (hover: hover) {\n    .cell:not([data-player='1']):not(.cell-hit):not(.cell-miss):hover {\n        background-color: var(--cell-hover-color);\n    }\n}\n\n.cell-ship {\n    background-color: var(--ship-color);\n}\n\n.cell-hit {\n    background-color: var(--hit-color);\n}\n\n.cell-hit::after {\n    content: '✖';\n    opacity: 0.8;\n    font-size: 1.3rem;\n    padding-bottom: 1px;\n}\n\n.cell-miss {\n    background-color: var(--miss-color);\n}\n\n.cell-miss::after {\n    content: '●';\n    opacity: 0.6;\n    padding-bottom: 4px;\n}\n\n.cell-sunk {\n    background-color: var(--sunk-color);\n    transition: background-color 0.2s ease;\n}\n\n/* Victory container */\n.victory-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 318px;\n    text-align: center;\n    padding: 20px;\n    border: 3px solid var(--text-color-main);\n    background-color: var(--background-color-transparent);\n    backdrop-filter: blur(4px);\n}\n\n.victory-container h2 {\n    margin: 0;\n}\n\n.victory-container p {\n    margin: 6px;\n}\n\n/* Footer */\nfooter {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    gap: 16px;\n    padding: 0 32px;\n}\n\n#footer-link {\n    text-decoration: none;\n}\n\nfooter p {\n    font-weight: 600;\n    font-size: 1.1rem;\n}\n\nfooter i {\n    color: var(--text-color-main);\n    transition: transform 0.1s ease;\n}\n\n@media (hover: hover) {\n\n    #footer-link:hover,\n    #footer-dark-mode:hover {\n        cursor: pointer;\n        transform: scale(1.2);\n        transition: transform 0.1s ease;\n    }\n}\n\n@media screen and (max-width: 800px) {\n    :root {\n        --header-height: 80px;\n        --board-size: 278px;\n        --cell-size: 26px;\n    }\n\n    header button {\n        height: 28px;\n        width: 100px;\n        font-size: 0.9rem;\n        padding-bottom: 2px;\n    }\n\n    #game-container {\n        gap: 20px;\n    }\n\n    .setup-button-start,\n    .setup-button-random {\n        width: 100px;\n        height: 28px;\n    }\n\n    .setup-button-start {\n        font-size: 0.9rem;\n    }\n}"],"sourceRoot":""}]);
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
    playerName.textContent = `${player.name}'s fleet`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FB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LFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1Q0FBdUM7QUFDdEUsOEJBQThCLHVDQUF1QztBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEtBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxJQUFJLGVBQWUsSUFBSTtBQUM5RTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxJQUFJLGVBQWUsSUFBSTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlOztBQUVwQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9haUxvZ2ljLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kb20vcGxhY2VTaGlwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwVHlwZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDEwMHB4O1xcbiAgICAtLWJvYXJkLXNpemU6IDMxOHB4O1xcbiAgICAtLWNlbGwtc2l6ZTogMzBweDtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci10cmFuc3BhcmVudDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjcpO1xcbiAgICAtLWNlbGwtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1jZWxsLWhvdmVyLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XFxuICAgIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcXG4gICAgLS1zaGlwLWNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XFxuICAgIC0taGl0LWNvbG9yOiByZ2IoMjA2LCAxNjksIDEzNCk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDE2MSwgMjE2LCAxNjEpO1xcbiAgICAtLXN1bmstY29sb3I6IHJnYigyMDYsIDEzNCwgMTM0KTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG46cm9vdC5kYXJrIHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDMwLCAzMCk7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci10cmFuc3BhcmVudDogcmdiYSgzMCwgMzAsIDMwLCAwLjcpO1xcbiAgICAtLWNlbGwtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcXG4gICAgLS1jZWxsLWhvdmVyLWNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICAgIC0tY2VsbC1ib3JkZXItY29sb3I6IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gICAgLS1zaGlwLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxuICAgIC0taGl0LWNvbG9yOiByZ2IoMTU1LCA5OSwgNjEpO1xcbiAgICAtLW1pc3MtY29sb3I6IHJnYig1MiwgMTA5LCA1Mik7XFxuICAgIC0tc3Vuay1jb2xvcjogcmdiKDE1NSwgNjEsIDYxKTtcXG4gICAgLS10ZXh0LWNvbG9yLW1haW46IHJnYigyMjAsIDIyMCwgMjIwKTtcXG4gICAgLS10ZXh0LWNvbG9yLWdyZXk6IHJnYigxNjAsIDE2MCwgMTYwKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcXG4gICAgLS1idXR0b24tY29sb3ItaG92ZXI6IHJnYigyMCwgMjAsIDIwKTtcXG4gICAgLS1idXR0b24tY29sb3ItYWN0aXZlOiBncmV5O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHBhZGRpbmc6IDAgNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3ItYWN0aXZlKTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yLWhvdmVyKTtcXG4gICAgfVxcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLyogUGxheWVyIHNldHVwICovXFxuLnNldHVwLXNoaXBzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IHZhcigtLWJvYXJkLXNpemUpO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tYm9hcmQtc2l6ZSkgKyAyNXB4KTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5zZXR1cC1zaGlwcy1oZWFkZXIgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5zZXR1cC1zaGlwLXNoaXBsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZXR1cC1zaGlwIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dXAtc2hpcCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zZXR1cC1zaGlwLWJveCB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC12ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zZXR1cC1zaGlwLWhpZGUgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1kcm9wcGVkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICB0b3A6IC0xcHg7XFxufVxcblxcbi5naG9zdC1zaGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmdob3N0LXNoaXA+LnNldHVwLXNoaXAtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtaG92ZXItY29sb3IpO1xcbn1cXG5cXG4uc2V0dXAtc2hpcC1jZWxsIHtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNlbGwtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnNldHVwLXNoaXBzLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zZXR1cC1idXR0b24tc3RhcnQsXFxuLnNldHVwLWJ1dHRvbi1yYW5kb20ge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogMzZweDtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydC1kaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAgIC5zZXR1cC1idXR0b24tc3RhcnQ6aG92ZXIge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMTE2LCAxMTYpO1xcbiAgICB9XFxufVxcblxcbi8qIFBsYXllciBzZWN0aW9ucyAqL1xcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIFBsYXllciBib2FyZHMgKi9cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLWNlbGwtc2l6ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1zZXR1cCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmNlbGwtZHJhZy1vdmVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB6LWluZGV4OiA0MDtcXG59XFxuXFxuLmNlbGwtZHJhZy12YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1kcmFnLWludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4vKiBPbmx5IGFsbG93IHZpc2libGUgaG92ZXIgZm9yIG9wcG9zaW5nIHBsYXllcidzIGJvYXJkICovXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgLmNlbGw6bm90KFtkYXRhLXBsYXllcj0nMSddKTpub3QoLmNlbGwtaGl0KTpub3QoLmNlbGwtbWlzcyk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxuICAgIH1cXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+Kclic7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG59XFxuXFxuLmNlbGwtbWlzczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4pePJztcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uY2VsbC1zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuay1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xcbn1cXG5cXG4vKiBWaWN0b3J5IGNvbnRhaW5lciAqL1xcbi52aWN0b3J5LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbi52aWN0b3J5LWNvbnRhaW5lciBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnZpY3RvcnktY29udGFpbmVyIHAge1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDMycHg7XFxufVxcblxcbiNmb290ZXItbGluayB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuZm9vdGVyIGkge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG5cXG4gICAgI2Zvb3Rlci1saW5rOmhvdmVyLFxcbiAgICAjZm9vdGVyLWRhcmstbW9kZTpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIC0taGVhZGVyLWhlaWdodDogODBweDtcXG4gICAgICAgIC0tYm9hcmQtc2l6ZTogMjc4cHg7XFxuICAgICAgICAtLWNlbGwtc2l6ZTogMjZweDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogMjhweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gICAgfVxcblxcbiAgICAjZ2FtZS1jb250YWluZXIge1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zZXR1cC1idXR0b24tc3RhcnQsXFxuICAgIC5zZXR1cC1idXR0b24tcmFuZG9tIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGhlaWdodDogMjhweDtcXG4gICAgfVxcblxcbiAgICAuc2V0dXAtYnV0dG9uLXN0YXJ0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIsc0NBQXNDO0lBQ3RDLHdEQUF3RDtJQUN4RCxnQ0FBZ0M7SUFDaEMsc0NBQXNDO0lBQ3RDLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGdD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QjtRQUNyQiwrQkFBK0I7SUFDbkM7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7O1FBRUksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAgIC0taGVhZGVyLWhlaWdodDogMTAwcHg7XFxuICAgIC0tYm9hcmQtc2l6ZTogMzE4cHg7XFxuICAgIC0tY2VsbC1zaXplOiAzMHB4O1xcblxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNyk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDcwLCA3MCwgNzApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigyMDYsIDE2OSwgMTM0KTtcXG4gICAgLS1taXNzLWNvbG9yOiByZ2IoMTYxLCAyMTYsIDE2MSk7XFxuICAgIC0tc3Vuay1jb2xvcjogcmdiKDIwNiwgMTM0LCAxMzQpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbjpyb290LmRhcmsge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMzAsIDMwKTtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDMwLCAzMCwgMzAsIDAuNyk7XFxuICAgIC0tY2VsbC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xcbiAgICAtLWNlbGwtaG92ZXItY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcXG4gICAgLS1jZWxsLWJvcmRlci1jb2xvcjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXNoaXAtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG4gICAgLS1oaXQtY29sb3I6IHJnYigxNTUsIDk5LCA2MSk7XFxuICAgIC0tbWlzcy1jb2xvcjogcmdiKDUyLCAxMDksIDUyKTtcXG4gICAgLS1zdW5rLWNvbG9yOiByZ2IoMTU1LCA2MSwgNjEpO1xcbiAgICAtLXRleHQtY29sb3ItbWFpbjogcmdiKDIyMCwgMjIwLCAyMjApO1xcbiAgICAtLXRleHQtY29sb3ItZ3JleTogcmdiKDE2MCwgMTYwLCAxNjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1ob3ZlcjogcmdiKDIwLCAyMCwgMjApO1xcbiAgICAtLWJ1dHRvbi1jb2xvci1hY3RpdmU6IGdyZXk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcGFkZGluZzogMCA1JTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1tYWluKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvci1hY3RpdmUpO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3ItaG92ZXIpO1xcbiAgICB9XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4vKiBQbGF5ZXIgc2V0dXAgKi9cXG4uc2V0dXAtc2hpcHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogdmFyKC0tYm9hcmQtc2l6ZSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1ib2FyZC1zaXplKSArIDI1cHgpO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnNldHVwLXNoaXBzLWhlYWRlciBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnNldHVwLXNoaXAtc2hpcGxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNldHVwLXNoaXAge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZXR1cC1zaGlwIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnNldHVwLXNoaXAtYm94IHtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjA7XFxufVxcblxcbi5zZXR1cC1zaGlwLXZlcnRpY2FsIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNldHVwLXNoaXAtaGlkZSBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5zZXR1cC1zaGlwLWRyb3BwZWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xcHg7XFxuICAgIHRvcDogLTFweDtcXG59XFxuXFxuLmdob3N0LXNoaXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDIwMDtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uZ2hvc3Qtc2hpcD4uc2V0dXAtc2hpcC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5zZXR1cC1zaGlwLWNlbGwge1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2VsbC1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uc2V0dXAtc2hpcHMtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNldHVwLWJ1dHRvbi1zdGFydCxcXG4uc2V0dXAtYnV0dG9uLXJhbmRvbSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4uc2V0dXAtYnV0dG9uLXN0YXJ0LWRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydDpob3ZlciB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAxMTYsIDExNik7XFxuICAgIH1cXG59XFxuXFxuLyogUGxheWVyIHNlY3Rpb25zICovXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogUGxheWVyIGJvYXJkcyAqL1xcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jZWxsLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5jZWxsLXNldHVwIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uY2VsbC1kcmFnLW92ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHotaW5kZXg6IDQwO1xcbn1cXG5cXG4uY2VsbC1kcmFnLXZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XFxufVxcblxcbi5jZWxsLWRyYWctaW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxufVxcblxcbi8qIE9ubHkgYWxsb3cgdmlzaWJsZSBob3ZlciBmb3Igb3Bwb3NpbmcgcGxheWVyJ3MgYm9hcmQgKi9cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgICAuY2VsbDpub3QoW2RhdGEtcGxheWVyPScxJ10pOm5vdCguY2VsbC1oaXQpOm5vdCguY2VsbC1taXNzKTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyLWNvbG9yKTtcXG4gICAgfVxcbn1cXG5cXG4uY2VsbC1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5jZWxsLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XFxufVxcblxcbi5jZWxsLWhpdDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAn4pyWJztcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuXFxuLmNlbGwtbWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbn1cXG5cXG4uY2VsbC1taXNzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICfil48nO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5jZWxsLXN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdW5rLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcblxcbi8qIFZpY3RvcnkgY29udGFpbmVyICovXFxuLnZpY3RvcnktY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDMxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItbWFpbik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHJhbnNwYXJlbnQpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG59XFxuXFxuLnZpY3RvcnktY29udGFpbmVyIGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udmljdG9yeS1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDAgMzJweDtcXG59XFxuXFxuI2Zvb3Rlci1saW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5mb290ZXIgaSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLW1haW4pO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcblxcbiAgICAjZm9vdGVyLWxpbms6aG92ZXIsXFxuICAgICNmb290ZXItZGFyay1tb2RlOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1oZWFkZXItaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgLS1ib2FyZC1zaXplOiAyNzhweDtcXG4gICAgICAgIC0tY2VsbC1zaXplOiAyNnB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgICB9XFxuXFxuICAgICNnYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnNldHVwLWJ1dHRvbi1zdGFydCxcXG4gICAgLnNldHVwLWJ1dHRvbi1yYW5kb20ge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xcbiAgICB9XFxuXFxuICAgIC5zZXR1cC1idXR0b24tc3RhcnQge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYWlMb2dpYygpIHtcbiAgICAvLyBDcmVhdGUgYSAyRCBhcnJheSBvZiBhdmFpbGFibGUgYXR0YWNrIGNvb3JkaW5hdGVzXG4gICAgY29uc3QgYXZhaWxhYmxlQXR0YWNrcyA9IGNyZWF0ZUF0dGFja0FycmF5KCk7XG4gICAgbGV0IGxhc3RTaGlwO1xuICAgIC8vIFN0b3JlIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSByZWNlbnQgYXR0YWNrcywgaW4gb3JkZXJcbiAgICAvLyBXaGVuIGEgc2hpcCBpcyBzdW5rLCByZW1vdmUgYWxsIG9mIGl0J3MgY2VsbHMgZnJvbSB0aGUgYXJyYXlcbiAgICAvLyBTbyB3ZSBoYXZlIGFuIGFycmF5IG9mIHJlY2VudCBoaXRzIG9mIHNoaXBzIHRoYXQgYXJlIG5vdCB5ZXQgc3Vua1xuICAgIGNvbnN0IGxhc3RIaXRBcnJheSA9IFtdO1xuICAgIGNvbnN0IHBvc3NpYmxlRGlyZWN0aW9ucyA9IFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0J107XG4gICAgbGV0IGNvbmN1cnJlbnRNaXNzZXMgPSAwO1xuICAgIGZ1bmN0aW9uIGF0dGFjayhlbmVteSkge1xuICAgICAgICBpZiAodGhpcy5sYXN0SGl0QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja0lmU2hpcElzU3VuayhlbmVteSwgdGhpcy5sYXN0SGl0QXJyYXlbbGFzdEhpdEFycmF5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGggPT09IDApIHJldHVybiAnTm8gc3F1YXJlcyB0byBhdHRhY2snO1xuICAgICAgICAvLyBJZiB0aGUgbGFzdCBoaXQgc2hpcCBpcyBzdW5rLCBvciBub3RoaW5nIGhhcyBiZWVuIGhpdCB5ZXQsIGdldCBhIHJhbmRvbSBjZWxsXG4gICAgICAgIC8vIElmIHRoZSBib3QgaGFzIG1pc3NlZCBtb3JlIHRoYW4gMyB0aW1lcyBpbiBhIHJvdywgZ2l2ZSBhIDUwJSBjaGFuY2UgdG8gY2hlYXRcbiAgICAgICAgaWYgKHRoaXMubGFzdEhpdEFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY3VycmVudE1pc3NlcyA+IDUgJiYgTWF0aC5yYW5kb20oKSA+IDAuOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBlbmVteS5nYW1lYm9hcmQuYm9hcmQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGVuZW15LmdhbWVib2FyZC5jaGVja1NxdWFyZShyb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNlbGwgPT09ICdvYmplY3QnICYmIGNlbGwgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVhdGluZyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGF0dGFja0Nvb3JkcyA9IHRoaXMuZ2V0UmFuZG9tQ2VsbChlbmVteSk7XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrQ29vcmRzO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UsIHdlIGZpbmQgdGhlIG5leHQgY2VsbCBhZGphY2VudCB0byB0aGUgbGFzdEhpdFxuICAgICAgICBjb25zdCBsYXN0SGl0ID0gdGhpcy5sYXN0SGl0QXJyYXlbbGFzdEhpdEFycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBhZGphY2VudENlbGxzID0gdGhpcy5nZXRBbGxBZGphY2VudENlbGxzKGVuZW15LCBsYXN0SGl0KTtcbiAgICAgICAgY29uc3QgYWRqYWNlbnRIaXRzID0gYWRqYWNlbnRDZWxscy5maWx0ZXIoY2VsbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGNlbGwuY2VsbFJlc3VsdCA9PT0gJ2hpdCcgJiYgdGhpcy5jaGVja0lmU2hpcElzU3VuayhlbmVteSwgY2VsbC5hZGphY2VudENlbGwpID09PSBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGhpdCAob3IgbXVsdGlwbGUpIGFkamFjZW50LCBhdHRhY2sgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICBpZiAoYWRqYWNlbnRIaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUFkamFjZW50SGl0ID0gYWRqYWNlbnRIaXRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50SGl0cy5sZW5ndGgpXTtcbiAgICAgICAgICAgIGxldCBuZXh0Q2VsbCA9IHRoaXMuZ2V0TmV4dEF0dGFja2FibGVDZWxsKGVuZW15LCBsYXN0SGl0LCB0aGlzLmZsaXBEaXJlY3Rpb24ocmFuZG9tQWRqYWNlbnRIaXQuZGlyZWN0aW9uKSk7XG4gICAgICAgICAgICBpZiAobmV4dENlbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbmV4dENlbGwgPSB0aGlzLmdldE5leHRBdHRhY2thYmxlQ2VsbChlbmVteSwgbGFzdEhpdCwgcmFuZG9tQWRqYWNlbnRIaXQuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aGlsZSAobmV4dENlbGwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbmV4dENlbGwgPSB0aGlzLmdldE5leHRBdHRhY2thYmxlQ2VsbChlbmVteSwgbGFzdEhpdCwgdGhpcy5wb3NzaWJsZURpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb3NzaWJsZURpcmVjdGlvbnMubGVuZ3RoKV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBuZXh0Q2VsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJdGVyYXRlIGJhY2t3YXJkcyB0aHJvdWdoIGFsbCBvdGhlciBoaXQgY2VsbHMgZm9yIGFkamFjZW55IHRvIHRoZSBsYXN0SGl0IGNlbGxcbiAgICAgICAgLy8gSWYgYWRqYWNlbmN5IGlzIGZvdW5kLCBzZWUgaWYgd2UgY2FuIGF0dGFjayBhIGNlbGwgaW4gdGhhdCBkaXJlY3Rpb25cbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGFzdEhpdEFycmF5Lmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5sYXN0SGl0QXJyYXlbaV07XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEFkamFjZW5jeShsYXN0SGl0LCBjZWxsKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dENlbGwgPSB0aGlzLmdldE5leHRBdHRhY2thYmxlQ2VsbChlbmVteSwgbGFzdEhpdCwgcmVzdWx0LmRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRDZWxsKSByZXR1cm4gbmV4dENlbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBoYXZlIGNvbmZpcm1lZCB0aGF0IHRoZSBsYXN0SGl0IGlzIHRoZSBvbmx5IGhpdCBvbiB0aGF0IHNoaXBcbiAgICAgICAgLy8gU28gd2UgcGljayBhIHJhbmRvbSBhZGphY2VudCBjZWxsIHRoYXQgd2UgY2FuIGF0dGFjaywgYW5kIGF0dGFjayBpdCFcbiAgICAgICAgY29uc3QgYWRqYWNlbnRDZWxsc1RvQXR0YWNrID0gYWRqYWNlbnRDZWxscy5maWx0ZXIoY2VsbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGNlbGwuY2VsbFJlc3VsdCAhPT0gJ3N0cmluZycgJiYgY2VsbC5jZWxsUmVzdWx0ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjZWxsID0gYWRqYWNlbnRDZWxsc1RvQXR0YWNrW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFkamFjZW50Q2VsbHNUb0F0dGFjay5sZW5ndGgpXTtcbiAgICAgICAgY29uc29sZS5sb2coY2VsbC5hZGphY2VudENlbGwpXG4gICAgICAgIHJldHVybiBjZWxsLmFkamFjZW50Q2VsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ2VsbChlbmVteSkge1xuICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVBdHRhY2tzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdObyBzcXVhcmVzIHRvIGF0dGFjayc7XG4gICAgICAgIC8vIEdldCByb3cgYW5kIGNvbCBmb3IgYSByYW5kb20gQUkgYXR0YWNrIGZyb20gdGhlIGF2YWlsYWJsZUF0dGFja3MgYXJyYXlcbiAgICAgICAgbGV0IGFycmF5Um93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5hdmFpbGFibGVBdHRhY2tzLmxlbmd0aCk7XG4gICAgICAgIGxldCBhcnJheUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYXZhaWxhYmxlQXR0YWNrc1thcnJheVJvd10ubGVuZ3RoKTtcbiAgICAgICAgbGV0IGNlbGwgPSB0aGlzLmF2YWlsYWJsZUF0dGFja3NbYXJyYXlSb3ddW2FycmF5Q29sXTtcbiAgICAgICAgLy8gSWYgdGhlIHNlbGVjdGVkIGNlbGwgaGFzIG5vIGFkamFjZW50IGNlbGxzIHRvIGF0dGFjaywgZ2V0IGEgZGlmZmVyZW50IHJhbmRvbSBjZWxsXG4gICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSB0aGlzLmdldEFsbEFkamFjZW50Q2VsbHMoZW5lbXksIGNlbGwpO1xuICAgICAgICBpZiAoYWRqYWNlbnRDZWxscy5ldmVyeShjZWxsID0+IHR5cGVvZiBjZWxsLmNlbGxSZXN1bHQgIT09ICdvYmplY3QnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tQ2VsbChlbmVteSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBhIGNlbGwgZnJvbSB0aGUgYXZhaWxhYmxlQXR0YWNrcyBhcnJheVxuICAgIC8vIENhbGxlZCBieSBwbGF5ZXIuanMgYWZ0ZXIgbWFraW5nIGFuIGF0dGFja1xuICAgIGZ1bmN0aW9uIHJlbW92ZUNlbGxGcm9tQXZhaWxhYmxlQXR0YWNrcyhjZWxsKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuYXZhaWxhYmxlQXR0YWNrcy5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLmF2YWlsYWJsZUF0dGFja3Nbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5hdmFpbGFibGVBdHRhY2tzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbFswXSA9PT0gc3F1YXJlWzBdICYmIGNlbGxbMV0gPT09IHNxdWFyZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUF0dGFja3Nbcm93XS5zcGxpY2UoY29sLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQXR0YWNrc1tyb3ddLmxlbmd0aCA9PT0gMCkgdGhpcy5hdmFpbGFibGVBdHRhY2tzLnNwbGljZShyb3csIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEFkamFjZW50Q2VsbChjZWxsLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBjZWxsO1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgIHJvdy0tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjb2wtLTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjb2wrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBbcm93LCBjb2xdO1xuICAgIH1cbiAgICAvLyBHaXZlbiBhIGNlbGwsIGZpbmQgdGhlIDQgcG9zc2libGUgYWRqYWNlbnQgY2VsbHMgYW5kIHRoZWlyIGRpcmVjdGlvblxuICAgIGZ1bmN0aW9uIGdldEFsbEFkamFjZW50Q2VsbHMoZW5lbXksIGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlRGlyZWN0aW9ucy5tYXAoZGlyZWN0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFkamFjZW50Q2VsbCA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxsKGNlbGwsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBsZXQgY2VsbFJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5jaGVja1NxdWFyZShhZGphY2VudENlbGxbMF0sIGFkamFjZW50Q2VsbFsxXSk7XG4gICAgICAgICAgICBpZiAoY2VsbFJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0lmU2hpcElzU3VuayhlbmVteSwgYWRqYWNlbnRDZWxsKSkgY2VsbFJlc3VsdCA9ICdzdW5rJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2VsbFJlc3VsdCxcbiAgICAgICAgICAgICAgICBhZGphY2VudENlbGwsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGEgY2VsbCBpcyBhZGphY2VudCB0bywgb3IgaW4gdGhlIHNhbWUgcm93L2NvbCBhcyBhbm90aGVyXG4gICAgLy8gUmV0dXJuIHRoZSBkaXJlY3Rpb24gdG8gdGhlIGNlbGwsIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24sIGFuZCB0aGUgZGlzdGFuY2VcbiAgICBmdW5jdGlvbiBnZXRBZGphY2VuY3koY2VsbCwgbmVpZ2hib3VyQ2VsbCkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uO1xuICAgICAgICBsZXQgb3Bwb3NpdGVEaXJlY3Rpb247XG4gICAgICAgIGxldCBkaXN0YW5jZTtcbiAgICAgICAgaWYgKGNlbGxbMF0gPT09IG5laWdoYm91ckNlbGxbMF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBjZWxsWzFdIC0gbmVpZ2hib3VyQ2VsbFsxXTtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IGRpZmYgPiAxID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgICAgICAgIG9wcG9zaXRlRGlyZWN0aW9uID0gZGlmZiA+IDEgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhkaWZmKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsWzFdID09PSBuZWlnaGJvdXJDZWxsWzFdKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gY2VsbFswXSAtIG5laWdoYm91ckNlbGxbMF07XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBkaWZmID4gMSA/ICdkb3duJyA6ICd1cCc7XG4gICAgICAgICAgICBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpZmYgPiAxID8gJ3VwJyA6ICdkb3duJztcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoZGlmZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgICAgIG9wcG9zaXRlRGlyZWN0aW9uLFxuICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBMb29rIGZvciBhIHBvc3NpYmxlIGNlbGwgdG8gYXR0YWNrIGluIGEgZ2l2ZW4gZGlyZWN0aW9uIChzZWFyY2ggNCBjZWxscyBvbmx5KVxuICAgIGZ1bmN0aW9uIGdldE5leHRBdHRhY2thYmxlQ2VsbChlbmVteSwgY2VsbCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBuZXh0Q2VsbCA9IGdldEFkamFjZW50Q2VsbChjZWxsLCBkaXJlY3Rpb24pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5leHRDZWxsU3RhdHVzID0gZW5lbXkuZ2FtZWJvYXJkLmNoZWNrU3F1YXJlKG5leHRDZWxsWzBdLCBuZXh0Q2VsbFsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5leHRDZWxsU3RhdHVzID09PSAnb2JqZWN0JyB8fCBuZXh0Q2VsbFN0YXR1cyA9PT0gbnVsbCkgcmV0dXJuIG5leHRDZWxsO1xuICAgICAgICAgICAgaWYgKG5leHRDZWxsU3RhdHVzID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbFN0YXR1cyA9PT0gJ21pc3MnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyBXZSBza2lwIG92ZXIgYSBoaXQgKGNvdWxkIGJlIHBhcnQgb2YgdGhlIHNhbWUgc2hpcCB3ZSdyZSBhdHRhY2tpbmcpLFxuICAgICAgICAgICAgLy8gdW5sZXNzIHRoYXQgc2hpcCBpcyBzdW5rIC0gdGhlbiB3ZSBzaG91bGRuJ3Qga2VlcCBhdHRhY2tpbmcgaW4gdGhhdCBkaXJlY3Rpb25cbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbFN0YXR1cyA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0lmU2hpcElzU3VuayhlbmVteSwgbmV4dENlbGwpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXh0Q2VsbCA9IGdldEFkamFjZW50Q2VsbChuZXh0Q2VsbCwgZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZsaXBEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZpbmQgdGhlIHNoaXAgYXQgYSBjZXJ0YWluIGNlbGwgYW5kIGNoZWNrIGlmIGl0IGlzIHN1bmtcbiAgICAvLyBJZiBpdCBpcywgcmVtb3ZlIGl0cyBzcXVhcmVzIGZyb20gdGhlIGxhc3RIaXRBcnJheSBhbmQgcmV0dXJuIHRydWVcbiAgICBmdW5jdGlvbiBjaGVja0lmU2hpcElzU3VuayhlbmVteSwgY2VsbCkge1xuICAgICAgICBjb25zdCBlbmVteVNoaXBzID0gZW5lbXkuZ2FtZWJvYXJkLnBsYWNlZFNoaXBzO1xuICAgICAgICBsZXQgaGl0U2hpcDtcbiAgICAgICAgZW5lbXlTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAuc3F1YXJlcy5zb21lKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChzcXVhcmVbMF0gPT09IGNlbGxbMF0gJiYgc3F1YXJlWzFdID09PSBjZWxsWzFdKVxuICAgICAgICAgICAgfSkpIGhpdFNoaXAgPSBzaGlwO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoaGl0U2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgaGl0U2hpcC5zcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGFzdEhpdEFycmF5LmZpbmRJbmRleChsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobG9jYXRpb25bMF0gPT09IHNxdWFyZVswXSAmJiBsb2NhdGlvblsxXSA9PT0gc3F1YXJlWzFdKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLmxhc3RIaXRBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXZhaWxhYmxlQXR0YWNrcyxcbiAgICAgICAgbGFzdFNoaXAsXG4gICAgICAgIGxhc3RIaXRBcnJheSxcbiAgICAgICAgcG9zc2libGVEaXJlY3Rpb25zLFxuICAgICAgICBjb25jdXJyZW50TWlzc2VzLFxuICAgICAgICBhdHRhY2ssXG4gICAgICAgIGdldFJhbmRvbUNlbGwsXG4gICAgICAgIHJlbW92ZUNlbGxGcm9tQXZhaWxhYmxlQXR0YWNrcyxcbiAgICAgICAgZ2V0QWRqYWNlbnRDZWxsLFxuICAgICAgICBnZXRBbGxBZGphY2VudENlbGxzLFxuICAgICAgICBnZXROZXh0QXR0YWNrYWJsZUNlbGwsXG4gICAgICAgIGdldEFkamFjZW5jeSxcbiAgICAgICAgZmxpcERpcmVjdGlvbixcbiAgICAgICAgY2hlY2tJZlNoaXBJc1N1bmtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dGFja0FycmF5KCkge1xuICAgIGNvbnN0IGF0dGFja0FycmF5ID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIHJvd0FycmF5LnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0YWNrQXJyYXkucHVzaChyb3dBcnJheSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tBcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWlMb2dpYzsiLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lJztcbmltcG9ydCBjcmVhdGVIZWFkZXJCb3ggZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IGNyZWF0ZUZvb3RlckJveCBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgc2hpcFR5cGVzIGZyb20gJy4uL3NoaXBUeXBlcyc7XG5pbXBvcnQgc2V0dXAgZnJvbSAnLi9wbGFjZVNoaXBzJztcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hcHAuaWQgPSAnYXBwJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwKTtcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlckJveCgpO1xuY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyQm94KCk7XG5jb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5nYW1lQ29udGFpbmVyLmlkID0gJ2dhbWUtY29udGFpbmVyJztcbmFwcC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuYXBwLmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuYXBwLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lLWJ1dHRvbicpO1xubmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xubmV3R2FtZSgpO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMikge1xuICAgIGdhbWUubmV3R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICBkcmF3R2FtZSgpO1xufVxuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICAgIGNvbnN0IG5ld1BsYXllcjEgPSBnYW1lLmNyZWF0ZVBsYXllcignTXlzdGVyaW8nLCAxKTtcbiAgICBjb25zdCBuZXdQbGF5ZXIyID0gZ2FtZS5jcmVhdGVQbGF5ZXIoZmFsc2UsIDIpO1xuICAgIG5ld1BsYXllcjIuZ2FtZWJvYXJkLnBsYWNlQWxsU2hpcHNSYW5kb21seSgpO1xuICAgIGRyYXdTZXR1cChuZXdQbGF5ZXIxKTtcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dXAtYnV0dG9uLXN0YXJ0Jyk7XG4gICAgc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChuZXdQbGF5ZXIxLmdhbWVib2FyZC5wbGFjZWRTaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHN0YXJ0R2FtZShuZXdQbGF5ZXIxLCBuZXdQbGF5ZXIyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdHYW1lKCkge1xuICAgIGNsZWFyQ29udGFpbmVyKGdhbWVDb250YWluZXIpO1xuICAgIGNvbnN0IHBsYXllcjFCb2FyZENvbnRhaW5lciA9IGRyYXdCb2FyZENvbnRhaW5lcihnYW1lLnBsYXllcjEpO1xuICAgIGNvbnN0IHBsYXllcjJCb2FyZENvbnRhaW5lciA9IGRyYXdCb2FyZENvbnRhaW5lcihnYW1lLnBsYXllcjIpO1xuICAgIHBvcHVsYXRlQm9hcmQoZ2FtZS5wbGF5ZXIxLCBwbGF5ZXIxQm9hcmRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJvYXJkJykpO1xuICAgIGdhbWVDb250YWluZXIuYXBwZW5kKHBsYXllcjFCb2FyZENvbnRhaW5lciwgcGxheWVyMkJvYXJkQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZHJhd1NldHVwKHBsYXllcikge1xuICAgIGNsZWFyQ29udGFpbmVyKGdhbWVDb250YWluZXIpO1xuICAgIGNvbnN0IHNldHVwQm9hcmQgPSBzZXR1cC5kcmF3U2V0dXBCb2FyZChwbGF5ZXIsIGRyYXdCb2FyZENvbnRhaW5lcihwbGF5ZXIpKTtcbiAgICBjb25zdCBzZXR1cFNoaXBzID0gc2V0dXAuZHJhd1NldHVwU2hpcHMoKTtcbiAgICBjb25zdCBzaGlwcyA9IHNldHVwU2hpcHMucXVlcnlTZWxlY3RvckFsbCgnLnNldHVwLXNoaXAtYm94Jyk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmQoc2V0dXBCb2FyZCwgc2V0dXBTaGlwcyk7XG59XG5cbi8vIElmIHRoZSBnYW1lIGNvbnRhaW5lciBoZWlnaHQgaWYgb3ZlciA1MDBweCwgd2UgY2FuIHNlZSB0aGUgZmxleGJveCBpcyB3cmFwcGVkXG4vLyBXZSB0aGVuIGFkanVzdCB0aGUgaGVhZGVyIHRvIG1hdGNoIHRoZSB3aWR0aCBvZiB0aGUgZ2FtZSBib2FyZHMgLSBpbnN0ZWFkIG9mIGJlaW5nIDEwMCUgd2lkZVxuLy8gSSdtIHN1cmUgdGhlcmUgYXJlIGJldHRlciBzb2x1dGlvbnMuXG5jb25zdCBnYW1lU2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJ5ID0+IHtcbiAgICBpZiAoZW50cnlbMF0uY29udGVudFJlY3QuaGVpZ2h0ID4gNTAwKSBoZWFkZXIuc3R5bGUud2lkdGggPSAnMzIwcHgnO1xuICAgIGVsc2UgaGVhZGVyLnN0eWxlLndpZHRoID0gYCR7ZW50cnlbMF0uY29udGVudFJlY3Qud2lkdGh9cHhgO1xufSlcbmdhbWVTaXplT2JzZXJ2ZXIub2JzZXJ2ZShnYW1lQ29udGFpbmVyKTtcblxuLy8gSG9sZCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIHBsYXllcidzIGJvYXJkIC0gbmFtZSwgYm9hcmQgYW5kIHNoaXBzIGxlZnRcbmZ1bmN0aW9uIGRyYXdCb2FyZENvbnRhaW5lcihwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHBsYXllck5hbWUudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIubmFtZX0ncyBmbGVldGA7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkcmF3Qm9hcmQocGxheWVyKTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmQocGxheWVyTmFtZSwgcGxheWVyQm9hcmQpO1xuICAgIHJldHVybiBib2FyZENvbnRhaW5lcjtcbn1cblxuLy8gRHJhdyBhIGdyaWQgb2YgY2VsbHMgd2l0aCBkYXRhIGF0dHJpYnV0ZXMgZm9yIHRoZWlyIGxvY2F0aW9uc1xuZnVuY3Rpb24gZHJhd0JvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIC8vIENBTiBUUklNIFRISVMgTEFURVIgUFJPQkFCTFlcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5wbGF5ZXIgPSBwbGF5ZXIgPyBwbGF5ZXIubnVtYmVyIDogMDtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY29sO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gTUFZIE5FRUQgVE8gUkVWSVNFXG4gICAgICAgICAgICAvLyBORUVEIFRPIEFERCBFVkVOVCBMSVNURU5FUlMgT05MWSBGT1IgT1BQT1NJTkcgUExBWUVSJ1MgQk9BUkRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAocGxheWVyICYmIHBsYXllci5pc0FJKSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG4vLyBVcG9uIGNsaWNraW5nIGEgY2VsbCwgYXR0YWNrIHRoZSByZWxldmFudCBzcXVhcmUsIGlmIGFsbG93ZWRcbi8vIFBhc3MgaW5mb3JtYXRpb24gZnJvbSB0aGUgYXR0YWNrIHRvIHN0eWxlQXR0YWNrZWRDZWxsIGZ1bmN0aW9uXG5mdW5jdGlvbiBsaXN0ZW5Gb3JBdHRhY2soZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgZGVmZW5kaW5nUGxheWVyTnVtYmVyID0gY2VsbC5kYXRhc2V0LnBsYXllcjtcbiAgICBjb25zdCBhdHRhY2tpbmdQbGF5ZXJOdW1iZXIgPSBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPT09ICcxJyA/ICcyJyA6ICcxJztcbiAgICBjb25zdCBhdHRhY2tpbmdQbGF5ZXIgPSBnYW1lW2BwbGF5ZXIke2F0dGFja2luZ1BsYXllck51bWJlcn1gXTtcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXIgPSBnYW1lW2BwbGF5ZXIke2RlZmVuZGluZ1BsYXllck51bWJlcn1gXTtcbiAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyICE9PSBhdHRhY2tpbmdQbGF5ZXIpIHJldHVybjtcbiAgICBjb25zdCByb3cgPSBjZWxsLmRhdGFzZXQucm93O1xuICAgIGNvbnN0IGNvbCA9IGNlbGwuZGF0YXNldC5jb2w7XG4gICAgY29uc3QgW3Jlc3VsdCwgbG9jYXRpb24sIHNoaXBdID0gYXR0YWNraW5nUGxheWVyLmF0dGFjayhkZWZlbmRpbmdQbGF5ZXIsIHJvdywgY29sKTtcbiAgICBzdHlsZUF0dGFja2VkQ2VsbChjZWxsLCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIsIHJlc3VsdCwgc2hpcCk7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckF0dGFjaywgZmFsc2UpXG4gICAgbmV4dFR1cm4oKTtcbn1cblxuLy8gQ2FsbCBhbiBhdHRhY2sgZm9yIHRoZSBBSVxuZnVuY3Rpb24gY2FsbEFJQXR0YWNrKGFpKSB7XG4gICAgaWYgKGFpICE9PSBnYW1lLmN1cnJlbnRQbGF5ZXIpIHJldHVybjtcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPSBnYW1lLmRlZmVuZGluZ1BsYXllciA9PT0gZ2FtZS5wbGF5ZXIxID8gJzEnIDogJzInO1xuICAgIGNvbnN0IFtyZXN1bHQsIGxvY2F0aW9uLCBzaGlwXSA9IGFpLmF0dGFjayhnYW1lLmRlZmVuZGluZ1BsYXllcik7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj0nJHtkZWZlbmRpbmdQbGF5ZXJOdW1iZXJ9J11bZGF0YS1yb3c9JyR7bG9jYXRpb25bMF19J11bZGF0YS1jb2w9JyR7bG9jYXRpb25bMV19J11gKVxuICAgIHN0eWxlQXR0YWNrZWRDZWxsKGNlbGwsIGRlZmVuZGluZ1BsYXllck51bWJlciwgcmVzdWx0LCBzaGlwKVxuICAgIG5leHRUdXJuKCk7XG59XG5cbi8vIFN0eWxlIGF0dGFja2VkIGNlbGwgYmFzZWQgb24gYSBoaXQgb3IgbWlzc1xuLy8gSWYgdGhlIHNoaXAgaXMgc3Vuaywgc3R5bGUgZWFjaCBvZiB0aGUgc2hpcCdzIGNlbGxzIHdpdGggdGhlIC5jZWxsLXN1bmsgY2xhc3NcbmZ1bmN0aW9uIHN0eWxlQXR0YWNrZWRDZWxsKGNlbGwsIGRlZmVuZGluZ1BsYXllck51bWJlciwgcmVzdWx0LCBzaGlwKXtcbiAgICBpZiAocmVzdWx0ID09PSAnaGl0Jyl7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1oaXQnKTtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpe1xuICAgICAgICAgICAgc2hpcC5zcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGxheWVyPScke2RlZmVuZGluZ1BsYXllck51bWJlcn0nXVtkYXRhLXJvdz0nJHtzcXVhcmVbMF19J11bZGF0YS1jb2w9JyR7c3F1YXJlWzFdfSddYClcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtc3VuaycpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZXN1bHQgPT09ICdtaXNzJykgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsLW1pc3MnKTtcbn1cblxuLy8gSGFuZGxlIGVuZC1vZi10dXJuIGV2ZW50c1xuZnVuY3Rpb24gbmV4dFR1cm4oKSB7XG4gICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0dhbWVPdmVyKCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgICByZXR1cm4gZW5kR2FtZSh3aW5uZXIpO1xuICAgIH07XG4gICAgZ2FtZS5jaGFuZ2VUdXJuKCk7XG4gICAgaWYgKGdhbWUuY3VycmVudFBsYXllci5pc0FJKSB7XG4gICAgICAgIGNhbGxBSUF0dGFjayhnYW1lLmN1cnJlbnRQbGF5ZXIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckF0dGFjaywgZmFsc2UpKTtcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyYXdWaWN0b3J5Q29udGFpbmVyKHdpbm5lcikpO1xufVxuXG4vLyBQb3B1cCB2aWN0b3J5IGNvbnRhaW5lclxuZnVuY3Rpb24gZHJhd1ZpY3RvcnlDb250YWluZXIod2lubmVyKXtcbiAgICBjb25zdCBsb3NlciA9IGdhbWUuY2hlY2tHYW1lT3ZlcigpID09PSBnYW1lLnBsYXllcjEgPyBnYW1lLnBsYXllcjIgOiBnYW1lLnBsYXllcjE7XG4gICAgY29uc3QgdmljdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZpY3RvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1jb250YWluZXInKTtcbiAgICBjb25zdCB2aWN0b3J5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHZpY3RvcnlUaXRsZS50ZXh0Q29udGVudCA9IHdpbm5lci5pc0FJID8gJ1RPVEFMIERFRkVBVCcgOiAnVE9UQUwgVklDVE9SWSc7XG4gICAgY29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gYCR7d2lubmVyLm5hbWV9IGhhcyBjbGFpbWVkIGRvbWluYXRpb24hYDtcbiAgICBjb25zdCBsb3NlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9zZXJUZXh0LnRleHRDb250ZW50ID0gYCR7bG9zZXIubmFtZX0ncyBmbGVldCBpcyBzdW5rLmBcbiAgICB2aWN0b3J5Q29udGFpbmVyLmFwcGVuZCh2aWN0b3J5VGl0bGUsIHdpbm5lclRleHQsIGxvc2VyVGV4dCk7XG4gICAgcmV0dXJuIHZpY3RvcnlDb250YWluZXI7XG59XG5cbi8vIERyYXcgdGhlIHNoaXBzIHRvIHRoZSBwbGF5ZXIncyBvbi1zY3JlZW4gYm9hcmQgc28gdGhleSBjYW4gc2VlIHRoZWlyIGZsZWV0XG5mdW5jdGlvbiBwb3B1bGF0ZUJvYXJkKHBsYXllciwgYm9hcmQpIHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xuICAgICAgICAgICAgaWYgKHNxdWFyZSAhPT0gbnVsbCAmJiB0eXBlb2Ygc3F1YXJlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1zaGlwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjZWxsLXNoaXAnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBGb290ZXIgbGluayBhbmQgbGlnaHQvZGFyayBtb2RlIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgYXV0aG9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGF1dGhvck5hbWUuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1hdXRob3JcIik7XG4gICAgYXV0aG9yTmFtZS50ZXh0Q29udGVudCA9IFwiQ2FybCBNYWRzZW4gMjAyMlwiO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBmb290ZXJMaW5rLmlkID0gXCJmb290ZXItbGlua1wiO1xuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9lbHNhZXBvL29kaW4tYmF0dGxlc2hpcFwiKTtcbiAgICBjb25zdCBnaXRIdWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIsIFwiZmEtZ2l0aHViXCIsIFwiZmEteGxcIiwgXCJmb290ZXItbG9nb1wiKTtcbiAgICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xuICAgIFxuICAgIGZ1bmN0aW9uIGdldFRoZW1lKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRvZ2dsZURhcmtNb2RlKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgICAgZGFya01vZGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImZhLW1vb25cIik7XG4gICAgICBkYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtc3VuXCIpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0b2dnbGVEYXJrU3RvcmFnZSgpIHtcbiAgICAgIGlmIChnZXRUaGVtZSgpID09PSBcImRhcmtcIikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNCcm93c2VyRGFya01vZGUoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJlxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlc1xuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGFya01vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pZCA9IFwiZm9vdGVyLWRhcmstbW9kZVwiO1xuICAgIGRhcmtNb2RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW1vb25cIiwgXCJmYS14bFwiKTtcbiAgICBkYXJrTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZURhcmtNb2RlKCk7XG4gICAgICB0b2dnbGVEYXJrU3RvcmFnZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIGlmIChnZXRUaGVtZSgpID09PSBcImRhcmtcIiB8fCAoIWdldFRoZW1lKCkgJiYgaXNCcm93c2VyRGFya01vZGUoKSkpIHtcbiAgICAgIHRvZ2dsZURhcmtNb2RlKCk7XG4gICAgfVxuICAgIFxuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChhdXRob3JOYW1lKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGRhcmtNb2RlQnV0dG9uKTtcblxuICAgIHJldHVybiBmb290ZXJCb3g7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXJCb3goKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnYmF0dGxlc2hpcC4nO1xuXG4gICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0dhbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYnV0dG9uJyk7XG4gICAgbmV3R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9ICduZXcgZ2FtZSc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuZXdHYW1lQnV0dG9uKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlckJveDsiLCJpbXBvcnQgc2hpcFR5cGVzIGZyb20gJy4uL3NoaXBUeXBlcyc7XG5cbmxldCBwbGF5ZXI7XG5sZXQgYm9hcmQ7XG5cbi8vIFRoaXMgb2JqZWN0IGhvbGRzIHRoZSBkYXRhIGZvciB0aGUgZHJhZyBtZXRob2RzIHRvIHVzZVxuLy8gVGhlc2UgcHJvcGVydGllcyBhcmUgdXBkYXRlZCBhcyB0aGUgdXNlciBkcmFncyBhbmQgZHJvcHMgc2hpcHNcbmNvbnN0IGRyYWdEYXRhID0ge1xuICAgIHNoaXBPYmplY3Q6IG51bGwsXG4gICAgc2hpcEVsZW1lbnQ6IG51bGwsXG4gICAgb2Zmc2V0WDogbnVsbCxcbiAgICBvZmZzZXRZOiBudWxsLFxuICAgIHJvd0RpZjogMCxcbiAgICBjb2xEaWY6IDAsXG4gICAgc2hpcEhvbWVDb250YWluZXI6IG51bGwsXG4gICAgcHJldmlvdXNDb250YWluZXI6IG51bGwsXG4gICAgcHJldmlvdXNDZWxsOiBudWxsLFxuICAgIGN1cnJlbnRDZWxsOiBudWxsLFxufVxuXG5mdW5jdGlvbiBkcmF3U2V0dXBCb2FyZChzZXR1cFBsYXllciwgc2V0dXBCb2FyZCkge1xuICAgIHBsYXllciA9IHNldHVwUGxheWVyO1xuICAgIGJvYXJkID0gc2V0dXBCb2FyZDtcbiAgICBjb25zdCBzZXR1cENlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKVxuICAgIHNldHVwQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3ApO1xuXG4gICAgICAgIC8vIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ0VudGVyKVxuICAgIH0pXG4gICAgcmV0dXJuIHNldHVwQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGRyYXdTZXR1cFNoaXBzKCkge1xuICAgIGNvbnN0IHNldHVwU2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR1cFNoaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHNldHVwU2hpcHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZXR1cFNoaXBzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXBzLWhlYWRlcicpO1xuICAgIGNvbnN0IHNldHVwU2hpcHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2V0dXBTaGlwc1RpdGxlLnRleHRDb250ZW50ID0gJ3BsYWNlIHlvdXIgc2hpcHM6JztcbiAgICBjb25zdCBzZXR1cFNoaXBzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzZXR1cFNoaXBzSW5mby50ZXh0Q29udGVudCA9ICdkb3VibGUgY2xpY2sgdG8gcm90YXRlIChvbmNlIHBsYWNlZCknO1xuICAgIGNvbnN0IHNldHVwU2hpcHNPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2V0dXBTaGlwc09wdGlvbnMuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcHMtb3B0aW9ucycpO1xuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0R2FtZS5jbGFzc0xpc3QuYWRkKCdzZXR1cC1idXR0b24tc3RhcnQnKTtcbiAgICBzdGFydEdhbWUudGV4dENvbnRlbnQgPSAnVE8gQkFUVExFISc7XG4gICAgY29uc3QgcmFuZG9tU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByYW5kb21TaGlwcy5jbGFzc0xpc3QuYWRkKCdzZXR1cC1idXR0b24tcmFuZG9tJyk7XG4gICAgcmFuZG9tU2hpcHMudGV4dENvbnRlbnQgPSAncmFuZG9taXplJztcbiAgICByYW5kb21TaGlwcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbWl6ZUZsZWV0KTtcbiAgICBzZXR1cFNoaXBzT3B0aW9ucy5hcHBlbmQoc3RhcnRHYW1lLCByYW5kb21TaGlwcyk7XG4gICAgY29uc3Qgc2hpcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBzaGlwIGluIHNoaXBUeXBlcykge1xuICAgICAgICBzaGlwTGlzdC5hcHBlbmRDaGlsZChkcmF3U2hpcChzaGlwVHlwZXNbc2hpcF0pKTtcbiAgICB9XG4gICAgc2V0dXBTaGlwc0hlYWRlci5hcHBlbmQoc2V0dXBTaGlwc1RpdGxlLCBzZXR1cFNoaXBzSW5mbylcbiAgICBzZXR1cFNoaXBzQ29udGFpbmVyLmFwcGVuZChzZXR1cFNoaXBzSGVhZGVyLCBzaGlwTGlzdCwgc2V0dXBTaGlwc09wdGlvbnMpO1xuICAgIHJldHVybiBzZXR1cFNoaXBzQ29udGFpbmVyO1xufVxuXG4vLyBEcmF3IGEgc2hpcCB0byBiZSBwbGFjZWQsIGdpdmluZyB0aGUgZWxlbWVudCBhbiBJRCBvZiB0aGUgc2hpcCdzIHR5cGVcbmZ1bmN0aW9uIGRyYXdTaGlwKHNoaXApIHtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwJyk7XG4gICAgc2hpcENvbnRhaW5lci5pZCA9IGAke3NoaXAubmFtZX0taG9tZWA7XG4gICAgY29uc3Qgc2hpcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBCb3guaWQgPSBzaGlwLm5hbWU7XG4gICAgc2hpcEJveC5kYXRhc2V0Lmxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIHNoaXBCb3guY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1ib3gnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2hpcENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1jZWxsJyk7XG4gICAgICAgIHNoaXBCb3guYXBwZW5kQ2hpbGQoc2hpcENlbGwpO1xuICAgIH1cbiAgICBzaGlwQm94LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgc2hpcEJveC5kYXRhc2V0LmFsaWdubWVudCA9ICdob3Jpem9udGFsJztcbiAgICBzaGlwQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG4gICAgc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHJvdGF0ZVNoaXApO1xuXG4gICAgLy8gc2hpcEJveC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gICAgIGRyYWdTdGFydChldmVudCk7XG4gICAgLy8gfSlcbiAgICBzaGlwQm94LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgIGNvbnN0IHkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludCh4LCB5KVxuICAgICAgICBjb25zdCB0b3VjaENlbGwgPSBlbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKTtcbiAgICAgICAgaWYgKHRvdWNoQ2VsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkcmFnRW50ZXIoZXZlbnQsIHRvdWNoQ2VsbFswXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmFnTGVhdmUoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBBZGQgaW4gYSBnaG9zdCBzaGlwXG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFBVVCBUSElTIElOVE8gV0VCIFZFUlNJT04gVE9PXG4gICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcbiAgICAgICAgY29uc3QgcHJldkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naG9zdC1zaGlwJyk7XG4gICAgICAgIGlmIChwcmV2Qm94KSBwcmV2Qm94LnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBuZXdCb3ggPSBzaGlwQm94LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgdG91Y2hMb2NhdGlvbiA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG4gICAgICAgIGlmIChkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICBuZXdCb3guY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpXG4gICAgICAgIH1cbiAgICAgICAgbmV3Qm94LmNsYXNzTGlzdC5hZGQoJ2dob3N0LXNoaXAnKVxuICAgICAgICBuZXdCb3guc3R5bGUubGVmdCA9IGAke3RvdWNoTG9jYXRpb24ucGFnZVggLSBkcmFnRGF0YS5vZmZzZXRYfXB4YDtcbiAgICAgICAgbmV3Qm94LnN0eWxlLnRvcCA9IGAke3RvdWNoTG9jYXRpb24ucGFnZVkgLSBkcmFnRGF0YS5vZmZzZXRZfXB4YDtcbiAgICAgICAgYXBwLmFwcGVuZENoaWxkKG5ld0JveClcbiAgICB9KVxuICAgIHNoaXBCb3guYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcHJldkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5naG9zdC1zaGlwJyk7XG4gICAgICAgIGlmIChwcmV2Qm94KSBwcmV2Qm94LnJlbW92ZSgpO1xuICAgICAgICBkcmFnRW5kKGV2ZW50KTtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoeCwgeSlcbiAgICAgICAgY29uc3QgdG91Y2hDZWxsID0gZWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSk7XG4gICAgICAgIGlmICh0b3VjaENlbGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZHJvcChldmVudCwgdG91Y2hDZWxsWzBdKTtcbiAgICAgICAgfTtcbiAgICB9KVxuXG4gICAgLy8gQXMgbW9iaWxlIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgZG91YmxlIHRhcCwgd2UgYWRkIGEgdGltZXIgaW50byB0aGUgdG91Y2hzdGFydCBldmVudCBsaXN0ZW5lclxuICAgIHNoaXBCb3guYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBEaXNhYmxlIGJyb3dzZXIgZGVmYXVsdCB6b29tIG9uIGRvdWJsZSB0YXBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCB0aW1lQmV0d2VlblRhcHMgPSAyMDA7XG4gICAgICAgIGlmICgodGltZSAtIHNoaXBCb3gubGFzdENsaWNrKSA8IHRpbWVCZXR3ZWVuVGFwcykge1xuICAgICAgICAgICAgcm90YXRlU2hpcChldmVudCk7XG4gICAgICAgICAgICBkcmFnU3RhcnQoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhZ1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwQm94Lmxhc3RDbGljayA9IHRpbWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpZiAoc2hpcC5uYW1lID09PSAncGF0cm9sJykgc2hpcE5hbWUudGV4dENvbnRlbnQgPSAncGF0cm9sIGJvYXQnO1xuICAgIGVsc2Ugc2hpcE5hbWUudGV4dENvbnRlbnQgPSBzaGlwLm5hbWU7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmQoc2hpcE5hbWUsIHNoaXBCb3gpO1xuICAgIHJldHVybiBzaGlwQ29udGFpbmVyO1xufVxuXG4vLyBQbGFjZSBhbGwgc2hpcCdzIHJhbmRvbWx5IG9uIHRoZSBwbGF5ZXIncyBnYW1lYm9hcmRcbi8vIFRoZW4gYXBwZW5kIGVhY2ggc2hpcCBlbGVtZW50IHRvIHRoZSBwbGFjZWQgc2hpcCdzIG9yaWdpbiB3aXRoIGFwcHJvcHJpYXRlIHN0eWxpbmdcbmZ1bmN0aW9uIHJhbmRvbWl6ZUZsZWV0KCkge1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VBbGxTaGlwc1JhbmRvbWx5KCk7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZWRTaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gc2hpcC50eXBlO1xuICAgICAgICBjb25zdCBvcmlnaW4gPSBzaGlwLnNxdWFyZXNbMF07XG4gICAgICAgIGNvbnN0IGFsaWdubWVudCA9IHNoaXAuYWxpZ25tZW50O1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3R5cGV9YCk7XG4gICAgICAgIHNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLWRyb3BwZWQnKTtcbiAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJykgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xuICAgICAgICBlbHNlIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwLXNoaXAtdmVydGljYWwnKTtcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IG9yaWdpbjtcbiAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2w9JyR7Y29sfSddYCk7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgIH0pXG59XG5cbi8vIFdoZW4gYSB1c2VyIGdyYWJzIGEgc2hpcCBlbGVtZW50LCB3ZSB0cmFjayB0aGUgdXNlcidzIGN1cnNvciBsb2NhdGlvbiBmb3IgdGhlIGRyYWdFbnRlciBhbmQgZHJvcCBldmVudHNcbi8vIFdoZW4gdGhlIHNoaXAgaXMgZ3JhYmJlZCBmcm9tIHRoZSBjZW50ZXIsIHRoZSBjdXJzb3IgZG9lcyBub3QgbWF0Y2ggdXAgd2l0aCB0aGUgc2hpcCdzIG9yaWdpbiBjZWxsXG4vLyBUaGUgY2VsbERpZiBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG9yaWdpbiBjZWxsIHRvIHRoZSBjZWxsIHdoZXJlIHRoZSB1c2VyIGhhcyBncmFiYmVkIHRoZSBzaGlwIGVsZW1lbnRcbi8vIGkuZS4sIGlmIGEgc2hpcCBvZiBsZW5ndGggNSBpcyBncmFiYmVkIGZyb20gdGhlIDR0aCBjZWxsLCB0aGUgY2VsbERpZiB3aWxsIGJlIDNcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxEaWYoZXZlbnQpIHtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIGxldCBiY3IgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgeCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCAtIGJjci54O1xuICAgICAgICB5ID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gYmNyLnk7XG4gICAgICAgIGRyYWdEYXRhLm9mZnNldFggPSB4O1xuICAgICAgICBkcmFnRGF0YS5vZmZzZXRZID0geTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICAgICAgeSA9IGV2ZW50Lm9mZnNldFk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBjZWxsU2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cC1zaGlwLWNlbGwnKS5vZmZzZXRXaWR0aDtcbiAgICBpZiAoZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBkcmFnRGF0YS5yb3dEaWYgPSAwO1xuICAgICAgICBkcmFnRGF0YS5jb2xEaWYgPSBNYXRoLmZsb29yKHggLyAoY2VsbFNpemUgKyAyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ0RhdGEucm93RGlmID0gTWF0aC5mbG9vcih5IC8gKGNlbGxTaXplICsgMikpO1xuICAgICAgICBkcmFnRGF0YS5jb2xEaWYgPSAwO1xuICAgIH1cbn1cblxuLy8gSGFuZGxlIGxvZ2ljIGZvciByb3RhdGluZyBhIHBsYWNlZCBzaGlwIC0gcm90YXRpb24gaXMgYXJvdW5kIHRoZSBvcmlnaW5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZXZlbnQpIHtcbiAgICBjb25zdCBzaGlwRWxlbWVudCA9IGRyYWdEYXRhLnNoaXBFbGVtZW50O1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwVHlwZXNbc2hpcEVsZW1lbnQuaWRdLmxlbmd0aDtcbiAgICBjb25zdCBvcmlnaW5DZWxsID0gc2hpcEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAvLyBJZiB0aGUgc2hpcCBpcyBub3QgcGxhY2VkIGluIGEgY2VsbCwgcmV0dXJuXG4gICAgaWYgKCFvcmlnaW5DZWxsLmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSByZXR1cm47XG4gICAgY29uc3Qgb3JpZ2luUm93ID0gcGFyc2VJbnQob3JpZ2luQ2VsbC5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3Qgb3JpZ2luQ29sID0gcGFyc2VJbnQob3JpZ2luQ2VsbC5kYXRhc2V0LmNvbCk7XG4gICAgY29uc29sZS5sb2cob3JpZ2luUm93LCBvcmlnaW5Db2wpXG4gICAgcGxheWVyLmdhbWVib2FyZC5yZW1vdmVTaGlwKFtvcmlnaW5Sb3csIG9yaWdpbkNvbF0pO1xuICAgIGxldCByb3cgPSBvcmlnaW5Sb3c7XG4gICAgbGV0IGNvbCA9IG9yaWdpbkNvbDtcbiAgICBsZXQgb3JpZ2luQWxpZ25tZW50ID0gc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQ7XG4gICAgbGV0IG5ld0FsaWdubWVudDtcbiAgICAvLyBJZiB0aGUgcm90YXRpb24gY2F1c2VzIHRoZSBzaGlwIHRvIGJlIG9mZiB0aGUgZ3JpZCwgY2hhbmdlIHRoZSBvcmlnaW4gY2VsbCB0byBhbGxvdyBpdHMgbGVuZ3RoXG4gICAgLy8gVGhpcyBhbGxvd3MgYSBzaGlwIHBsYWNlZCBuZWFyIHRoZSBmYXIgZWRnZSBvZiB0aGUgZ3JpZCB0byBzdGlsbCBiZSByb3RhdGVkXG4gICAgaWYgKG9yaWdpbkFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIG5ld0FsaWdubWVudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgIGlmICgoMTAgLSByb3cpIDwgc2hpcExlbmd0aCkgcm93ID0gMTAgLSBzaGlwTGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0FsaWdubWVudCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgaWYgKCgxMCAtIGNvbCkgPCBzaGlwTGVuZ3RoKSBjb2wgPSAxMCAtIHNoaXBMZW5ndGg7XG4gICAgfVxuICAgIC8vIEF0dGVtcHQgdG8gcGxhY2UgdGhlIHNoaXAgYWxvbmcgZWFjaCByb3cgKGlmIGhvcml6b250YWwpIG9yIGNvbHVtbiAoaWYgdmVydGljYWwpXG4gICAgLy8gQXR0ZW1wdCB0aGlzIDEwIHRpbWVzIC0gZm9yIGVhY2ggcm93IG9yIGNvbHVtbiwgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGdyaWRcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIGxldCBzaGlwU3F1YXJlcyA9IHBsYXllci5nYW1lYm9hcmQuY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCBbcm93LCBjb2xdLCBuZXdBbGlnbm1lbnQpO1xuICAgIHdoaWxlIChzaGlwU3F1YXJlcy5pc1ZhbGlkID09PSBmYWxzZSAmJiBhdHRlbXB0cyA8IDEwKSB7XG4gICAgICAgIGlmIChuZXdBbGlnbm1lbnQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgcm93ID0gcm93IDwgOSA/IHJvdyArIDEgOiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgY29sID0gY29sIDwgOSA/IGNvbCArIDEgOiAwO1xuICAgICAgICBzaGlwU3F1YXJlcyA9IHBsYXllci5nYW1lYm9hcmQuY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCBbcm93LCBjb2xdLCBuZXdBbGlnbm1lbnQpO1xuICAgICAgICBhdHRlbXB0cysrO1xuICAgIH1cbiAgICAvLyBJZiBhIHZhbGlkIHBsYWNlbWVudCBpcyBmb3VuZCwgcGxhY2UgdGhlIHNoaXAgb24gYm90aCB0aGUgc2V0dXAgYm9hcmQgYW5kIHBsYXllcidzIGdhbWVib2FyZFxuICAgIC8vIFN0eWxlIGFwcHJvcHJpYXRlbHkgd2l0aCBhIHZlcnRpY2FsIGNsYXNzIGlmIG5lZWRlZFxuICAgIGlmIChzaGlwU3F1YXJlcy5pc1ZhbGlkKSB7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBFbGVtZW50LmlkLCBbcm93LCBjb2xdLCBuZXdBbGlnbm1lbnQpO1xuICAgICAgICBjb25zdCBuZXdPcmlnaW5DZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbD0nJHtjb2x9J11gKTtcbiAgICAgICAgbmV3T3JpZ2luQ2VsbC5hcHBlbmRDaGlsZChzaGlwRWxlbWVudCk7XG4gICAgICAgIHNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50ID0gbmV3QWxpZ25tZW50O1xuICAgICAgICBpZiAobmV3QWxpZ25tZW50ID09PSAndmVydGljYWwnKSBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG4gICAgICAgIGVsc2Ugc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xuICAgIH1cbiAgICAvLyBFbHNlLCBwbGFjZSB0aGUgc2hpcCBiYWNrIGludG8gdGhlIHBsYXllcidzIGdhbWVib2FyZFxuICAgIGVsc2Uge1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwRWxlbWVudC5pZCwgW29yaWdpblJvdywgb3JpZ2luQ29sXSwgb3JpZ2luQWxpZ25tZW50KTtcbiAgICB9XG59XG5cbi8vIFdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIGEgc2hpcCwgd2Ugc3RvcmUgaXRzIGluZm9ybWF0aW9uIGluIGRyYWdEYXRhXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBIb21lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWR9LWhvbWVgKTtcbiAgICAgICAgZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBIb21lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQudGFyZ2V0LmlkfS1ob21lYCk7XG4gICAgICAgIGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfTtcbiAgICB1cGRhdGVDZWxsRGlmKGV2ZW50KVxuICAgIGlmIChkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJykgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xuICAgIC8vIE9uIGRyYWdTdGFydCwgd2Ugc3RvcmUgdGhlIHNoaXAgYmFjayBpbiBpdHMgaG9tZSBjb250YWluZXIgJiBzdHlsZSBpdCB0byBiZSBhICdnaG9zdCdcbiAgICAvLyBVc2UgYSBzZXRUaW1lb3V0IHRvIGVuc3VyZSB0aGlzIGhhcHBlbnMgb25seSBhZnRlciB0aGUgc2hpcCBoYXMgYmVlbiBwaWNrZWQgdXBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC1oaWRlJyk7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwLXNoaXAtZHJvcHBlZCcpO1xuICAgICAgICBkcmFnRGF0YS5zaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZXR1cC1zaGlwLXZlcnRpY2FsJyk7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBIb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdEYXRhLnNoaXBFbGVtZW50KVxuICAgIH0sIDApO1xuICAgIC8vIElmIHRoZSBzaGlwIGlzIGFscmVhZHkgcGxhY2VkIChpLmUuLCBpdCdzIHBhcmVudCBpcyBhIGNlbGwpLCB3ZSByZW1vdmUgdGhlIHNoaXAgZnJvbSB0aGUgcGxheWVyJ3MgZ2FtZWJvYXJkXG4gICAgaWYgKGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdyk7XG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpO1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlbW92ZVNoaXAoW3JvdywgY29sXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFnRW5kKGV2ZW50KSB7XG4gICAgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC1oaWRlJyk7XG59XG5cbi8vIEZvciBlYWNoIGNlbGwgd2UgZW50ZXIgd2hpbHN0IGRyYWdnaW5nIHRoZSBzaGlwLCB3ZSB1c2Ugcm93RGlmZiBhbmQgY29sRGlmZlxuLy8gQ2hlY2sgdGhlIHBsYWNlbWVudCBzcXVhcmVzIGFuZCBzdHlsZSB0aGVtIHZhbGlkIG9yIGludmFsaWRcbmZ1bmN0aW9uIGRyYWdFbnRlcihldmVudCwgdG91Y2hDZWxsKSB7XG4gICAgZHJhZ0xlYXZlKGV2ZW50KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHR5cGUgPSBkcmFnRGF0YS5zaGlwRWxlbWVudC5pZDtcbiAgICBsZXQgcm93O1xuICAgIGxldCBjb2w7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XG4gICAgICAgIHJvdyA9IHBhcnNlSW50KHRvdWNoQ2VsbC5kYXRhc2V0LnJvdykgLSBwYXJzZUludChkcmFnRGF0YS5yb3dEaWYpO1xuICAgICAgICBjb2wgPSBwYXJzZUludCh0b3VjaENlbGwuZGF0YXNldC5jb2wpIC0gcGFyc2VJbnQoZHJhZ0RhdGEuY29sRGlmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb3cgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5yb3cpIC0gcGFyc2VJbnQoZHJhZ0RhdGEucm93RGlmKTtcbiAgICAgICAgY29sID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKSAtIHBhcnNlSW50KGRyYWdEYXRhLmNvbERpZik7XG4gICAgfTtcbiAgICBjb25zdCBzaGlwU3F1YXJlcyA9IHBsYXllci5nYW1lYm9hcmQuY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwVHlwZXNbdHlwZV0ubGVuZ3RoLCBbcm93LCBjb2xdLCBkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudClcbiAgICBzaGlwU3F1YXJlcy5zcXVhcmVzID0gc2hpcFNxdWFyZXMuc3F1YXJlcy5maWx0ZXIoc3F1YXJlID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQuY2hlY2tTcXVhcmUoc3F1YXJlWzBdLCBzcXVhcmVbMV0pICE9PSB1bmRlZmluZWQ7XG4gICAgfSlcbiAgICBzaGlwU3F1YXJlcy5zcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtzcXVhcmVbMF19J11bZGF0YS1jb2w9JyR7c3F1YXJlWzFdfSddYCk7XG4gICAgICAgIC8vIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1kcmFnLW92ZXInKTtcbiAgICAgICAgY29uc3QgY2VsbE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY2VsbCcsICdjZWxsLWRyYWctb3ZlcicpO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNlbGxPdmVybGF5KTtcbiAgICAgICAgaWYgKHNoaXBTcXVhcmVzLmlzVmFsaWQpIGNlbGxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2NlbGwtZHJhZy12YWxpZCcpO1xuICAgICAgICBlbHNlIGNlbGxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2NlbGwtZHJhZy1pbnZhbGlkJyk7XG4gICAgfSlcbiAgICAvLyBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2VsbC1kcmFnLW92ZXInKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gSEVSRSBXRSBTSE9VTEQgQkUgQUJMRSBUTyBTRUUgVEhFIEJPQVJEIFVOREVSTkVBVEggQSBTSElQIEJPWFxuICAgIC8vIElHTk9SSU5HIElUIElOIFNPTUUgV0FZP1xuICAgIC8vXG4gICAgLy9cbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4vLyBXaGVuIHdlIGxlYXZlIGEgY2VsbCwgb3IgZHJvcCB0aGUgc2hpcCwgcmVtb3ZlIGFsbCB2YWxpZC9pbnZhbGlkIHN0eWxpbmdcbmZ1bmN0aW9uIGRyYWdMZWF2ZShldmVudCkge1xuICAgIGNvbnN0IGxlZnRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsLWRyYWctb3ZlcicpO1xuICAgIGxlZnRDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbi8vIEhhbmRsZSBkcm9wIGV2ZW50cyBvbiBjZWxscyB1c2luZyB0aGUgcm93RGlmZiBhbmQgY29sRGlmZiBkcmFnRGF0YSBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBkcm9wKGV2ZW50LCB0b3VjaENlbGwpIHtcbiAgICBkcmFnTGVhdmUoZXZlbnQpO1xuICAgIGxldCByb3c7XG4gICAgbGV0IGNvbDtcbiAgICBjb25zdCB0eXBlID0gZHJhZ0RhdGEuc2hpcEVsZW1lbnQuaWQ7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcpIHtcbiAgICAgICAgcm93ID0gcGFyc2VJbnQodG91Y2hDZWxsLmRhdGFzZXQucm93KSAtIHBhcnNlSW50KGRyYWdEYXRhLnJvd0RpZik7XG4gICAgICAgIGNvbCA9IHBhcnNlSW50KHRvdWNoQ2VsbC5kYXRhc2V0LmNvbCkgLSBwYXJzZUludChkcmFnRGF0YS5jb2xEaWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdykgLSBwYXJzZUludChkcmFnRGF0YS5yb3dEaWYpO1xuICAgICAgICBjb2wgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5jb2wpIC0gcGFyc2VJbnQoZHJhZ0RhdGEuY29sRGlmKTtcbiAgICB9O1xuICAgIGNvbnN0IHNoaXBTcXVhcmVzID0gcGxheWVyLmdhbWVib2FyZC5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBUeXBlc1t0eXBlXS5sZW5ndGgsIFtyb3csIGNvbF0sIGRyYWdEYXRhLnNoaXBFbGVtZW50LmRhdGFzZXQuYWxpZ25tZW50KVxuICAgIC8vIElmIHRoZSBkcm9wIGlzIGEgdmFsaWQgbG9jYXRpb24sIHBsYWNlIHRoZSBzaGlwIG9uIHRoZSBwbGF5ZXIncyBnYW1lYm9hcmQgYW5kIGFwcGVuZCBpdCB0byB0aGUgc2V0dXAgYm9hcmRcbiAgICBpZiAoc2hpcFNxdWFyZXMuaXNWYWxpZCkge1xuICAgICAgICBjb25zdCBvcmlnaW5DZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbD0nJHtjb2x9J11gKTtcbiAgICAgICAgb3JpZ2luQ2VsbC5hcHBlbmRDaGlsZChkcmFnRGF0YS5zaGlwRWxlbWVudCk7XG4gICAgICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtZHJvcHBlZCcpO1xuICAgICAgICBkcmFnRGF0YS5wcmV2aW91c0NvbnRhaW5lciA9IG9yaWdpbkNlbGw7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKGRyYWdEYXRhLnNoaXBFbGVtZW50LmlkLCBbcm93LCBjb2xdLCBkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudCk7XG4gICAgfVxuICAgIC8vIEVsc2UsIG1vdmUgdGhlIHNoaXAgYmFjayB0byBpdHMgcHJldmlvdXMgbG9jYXRpb25cbiAgICAvLyBJZiB0aGF0IGxvY2F0aW9uIGlzIGEgY2VsbCwgcGxhY2UgdGhlIHNoaXAgYmFjayBvbiB0aGUgcGxheWVyJ3MgZ2FtZWJvYXJkIGluIHRoZSBwcmV2aW91cyBsb2NhdGlvblxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHVwLXNoaXAtZHJvcHBlZCcpO1xuICAgICAgICAgICAgY29uc3QgcHJldlJvdyA9IGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyLmRhdGFzZXQucm93O1xuICAgICAgICAgICAgY29uc3QgcHJldkNvbCA9IGRyYWdEYXRhLnByZXZpb3VzQ29udGFpbmVyLmRhdGFzZXQuY29sO1xuICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoZHJhZ0RhdGEuc2hpcEVsZW1lbnQuaWQsIFtwcmV2Um93LCBwcmV2Q29sXSwgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuZGF0YXNldC5hbGlnbm1lbnQpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ0RhdGEucHJldmlvdXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ0RhdGEuc2hpcEVsZW1lbnQpXG4gICAgfVxuICAgIGRyYWdEYXRhLnNoaXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NldHVwLXNoaXAtaGlkZScpO1xuICAgIGlmIChkcmFnRGF0YS5zaGlwRWxlbWVudC5kYXRhc2V0LmFsaWdubWVudCA9PT0gJ3ZlcnRpY2FsJykgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xuICAgIGVsc2UgZHJhZ0RhdGEuc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dXAtc2hpcC12ZXJ0aWNhbCcpO1xufVxuXG5jb25zdCBzZXR1cCA9IHtcbiAgICBkcmF3U2V0dXBCb2FyZCxcbiAgICBkcmF3U2V0dXBTaGlwc1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXR1cDsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZnVuY3Rpb24gR2FtZSgpe1xuICAgIGxldCBwbGF5ZXIxO1xuICAgIGxldCBwbGF5ZXIyO1xuICAgIGxldCBjdXJyZW50UGxheWVyO1xuICAgIGxldCBkZWZlbmRpbmdQbGF5ZXI7XG4gICAgZnVuY3Rpb24gY3JlYXRlUGxheWVyKG5hbWUsIG51bWJlcil7XG4gICAgICAgIHJldHVybiBQbGF5ZXIobmFtZSwgbnVtYmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbmV3R2FtZShwbGF5ZXIxLCBwbGF5ZXIyKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gcGxheWVyMTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXIxO1xuICAgICAgICB0aGlzLmRlZmVuZGluZ1BsYXllciA9IHRoaXMucGxheWVyMjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlVHVybigpe1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLmN1cnJlbnRQbGF5ZXIgPT09IHRoaXMucGxheWVyMSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMTtcbiAgICAgICAgdGhpcy5kZWZlbmRpbmdQbGF5ZXIgPSB0aGlzLmRlZmVuZGluZ1BsYXllciA9PT0gdGhpcy5wbGF5ZXIyID8gdGhpcy5wbGF5ZXIxIDogdGhpcy5wbGF5ZXIyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0dhbWVPdmVyKCl7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkpIHJldHVybiB0aGlzLnBsYXllcjI7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkpIHJldHVybiB0aGlzLnBsYXllcjE7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXN0R2FtZSgpe1xuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCgzLCBbMSwzXSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoNCwgWzcsMl0sICdob3Jpem9udGFsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZVNoaXAoNSwgWzIsN10sICd2ZXJ0aWNhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIFsxLDNdLCAndmVydGljYWwnKVxuICAgICAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCBbNywyXSwgJ2hvcml6b250YWwnKVxuICAgICAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LCBbMiw3XSwgJ3ZlcnRpY2FsJylcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyMSxcbiAgICAgICAgcGxheWVyMixcbiAgICAgICAgY3VycmVudFBsYXllcixcbiAgICAgICAgZGVmZW5kaW5nUGxheWVyLFxuICAgICAgICBjcmVhdGVQbGF5ZXIsXG4gICAgICAgIG5ld0dhbWUsXG4gICAgICAgIGNoYW5nZVR1cm4sXG4gICAgICAgIGNoZWNrR2FtZU92ZXIsXG4gICAgICAgIHRlc3RHYW1lXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IHNoaXBUeXBlcyBmcm9tICcuL3NoaXBUeXBlcyc7XG5cbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVtcHR5R2FtZWJvYXJkKCk7XG4gICAgY29uc3QgcGxhY2VkU2hpcHMgPSBbXTtcbiAgICAvLyBDcmVhdGUgYSAxMHgxMCAyZCBhcnJheSBnYW1lYm9hcmRcbiAgICBmdW5jdGlvbiBjcmVhdGVFbXB0eUdhbWVib2FyZCgpIHtcbiAgICAgICAgbGV0IGdhbWVib2FyZEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8PSA5OyByb3crKykge1xuICAgICAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPD0gOTsgY29sKyspIHtcbiAgICAgICAgICAgICAgICByb3dBcnJheVtjb2xdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVib2FyZEFycmF5W3Jvd10gPSByb3dBcnJheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkQXJyYXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyQm9hcmQoYm9hcmQpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyRmxlZXQoZmxlZXQpIHtcbiAgICAgICAgd2hpbGUgKGZsZWV0Lmxlbmd0aCA+IDApIGZsZWV0LnBvcCgpO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIHZhbHVlIG9mIGEgc3F1YXJlIGluIHRoZSBnYW1lYm9hcmQsIGFuZCB1bmRlZmluZWQgaWYgb3V0c2lkZSB0aGUgZ2FtZWJvYXJkIGV4dGVudHNcbiAgICBmdW5jdGlvbiBjaGVja1NxdWFyZShyb3csIGNvbCkge1xuICAgICAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAocm93ID4gOSB8fCBjb2wgPiA5KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudChzaGlwTGVuZ3RoLCBvcmlnaW4sIGFsaWdubWVudCkge1xuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2Ygc2hpcCBwbGFjZW1lbnQgc3F1YXJlc1xuICAgICAgICBsZXQgW3JvdywgY29sXSA9IG9yaWdpbjtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwU3F1YXJlcy5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICAgICAgYWxpZ25tZW50ID09PSAnaG9yaXpvbnRhbCcgPyBjb2wrKyA6IHJvdysrO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGV2ZXJ5IHBsYWNlbWVudCBzcXVhcmUgaXMgbnVsbCwgdmFsaWRQbGFjZW1lbnQgaXMgYW4gYXJyYXkgb2YgdGhlIHZhbGlkIHNxdWFyZXNcbiAgICAgICAgY29uc3QgdmFsaWRQbGFjZW1lbnQgPSBzaGlwU3F1YXJlcy5ldmVyeShzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBzcXVhcmU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1NxdWFyZShyb3csIGNvbCkgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcm93XVtjb2xdID09PSBudWxsO1xuICAgICAgICB9KVxuICAgICAgICAvLyBSZXR1cm4gYW4gZG9iamVjdCBjb250YWluaW5nIHRoZSB2YWxpZGl0eSBhbmQgdGhlIHNxdWFyZXMgcHJvY2Vzc2VkXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1ZhbGlkOiB2YWxpZFBsYWNlbWVudCxcbiAgICAgICAgICAgIHNxdWFyZXM6IHNoaXBTcXVhcmVzXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBUeXBlLCBvcmlnaW4sIGFsaWdubWVudCkge1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcFR5cGVzW3NoaXBUeXBlXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNoaXBTcXVhcmVzID0gdGhpcy5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KTtcbiAgICAgICAgLy8gSWYgc2hpcFNxdWFyZXMgaXMgYSB2YWxpZCBhcnJheSwgcGxhY2UgdGhlIHNoaXAgb24gYWxsIG9mIHRob3NlIHNxdWFyZXNcbiAgICAgICAgaWYgKHNoaXBTcXVhcmVzLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBUeXBlKTtcbiAgICAgICAgICAgIHNoaXAuc3F1YXJlcyA9IHNoaXBTcXVhcmVzLnNxdWFyZXM7XG4gICAgICAgICAgICBzaGlwLmFsaWdubWVudCA9IGFsaWdubWVudDtcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gc3F1YXJlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwbGFjZWRTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcCBpbiB0aGF0IGxvY2F0aW9uXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVNoaXAob3JpZ2luKXtcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IG9yaWdpbjtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuY2hlY2tTcXVhcmUocm93LCBjb2wpO1xuICAgICAgICBzaGlwLnNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IHNxdWFyZTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBsYWNlZFNoaXBzSW5kZXggPSB0aGlzLnBsYWNlZFNoaXBzLmluZGV4T2Yoc2hpcCk7XG4gICAgICAgIHRoaXMucGxhY2VkU2hpcHMuc3BsaWNlKHBsYWNlZFNoaXBzSW5kZXgsIDEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZUFsbFNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGNsZWFyQm9hcmQodGhpcy5ib2FyZCk7XG4gICAgICAgIGNsZWFyRmxlZXQodGhpcy5wbGFjZWRTaGlwcyk7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcFR5cGVzKXtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnBsYWNlU2hpcFJhbmRvbWx5KHNoaXApO1xuICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnIHx8IHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucGxhY2VTaGlwUmFuZG9tbHkoc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGFrZSBhIHNoaXAgYW5kIGRldGVybWluZSBhIHJhbmRvbSBhbGlnbm1lbnQgYW5kIG9yaWdpblxuICAgIC8vIEtlZXAgdHJ5aW5nIHRvIHBsYWNlIHNoaXAgdW50aWwgYW4gYWxsb3dlZCBsb2NhdGlvbiBpcyBmb3VuZFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcFJhbmRvbWx5KHNoaXBUeXBlKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwVHlwZXNbc2hpcFR5cGVdLmxlbmd0aDtcbiAgICAgICAgZnVuY3Rpb24gZ2V0UmFuZG9tQWxpZ25tZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPCAwLjUgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbU9yaWdpbihhbGlnbm1lbnQpIHtcbiAgICAgICAgICAgIGxldCByb3dEaWYgPSAwO1xuICAgICAgICAgICAgbGV0IGNvbERpZiA9IDA7XG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50ID09PSAndmVydGljYWwnKSByb3dEaWYgPSBzaGlwTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGVsc2UgY29sRGlmID0gc2hpcExlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gcm93RGlmKSk7XG4gICAgICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gY29sRGlmKSk7XG4gICAgICAgICAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxpZ25tZW50ID0gZ2V0UmFuZG9tQWxpZ25tZW50KCk7XG4gICAgICAgIGxldCBvcmlnaW4gPSBnZXRSYW5kb21PcmlnaW4oYWxpZ25tZW50KTtcbiAgICAgICAgbGV0IHNoaXBTcXVhcmVzID0gdGhpcy5jaGVja1ZhbGlkUGxhY2VtZW50KHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KTtcbiAgICAgICAgLy8gbGV0IHJlc3VsdCA9IHRoaXMucGxhY2VTaGlwKHNoaXBMZW5ndGgsIG9yaWdpbiwgYWxpZ25tZW50KTtcbiAgICAgICAgd2hpbGUgKCFzaGlwU3F1YXJlcy5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPSBnZXRSYW5kb21BbGlnbm1lbnQoKTtcbiAgICAgICAgICAgIG9yaWdpbiA9IGdldFJhbmRvbU9yaWdpbihhbGlnbm1lbnQpO1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMgPSB0aGlzLmNoZWNrVmFsaWRQbGFjZW1lbnQoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlU2hpcChzaGlwVHlwZSwgb3JpZ2luLCBhbGlnbm1lbnQpO1xuICAgIH1cbiAgICAvLyBSZWNlaXZlcyBhbiBhdHRhY2sgYW5kIGNhbGN1bGF0ZXMgdGhlIHJlc3VsdFxuICAgIC8vIFJldHVybnMgYW4gYXJyYXkgLSAnaGl0JyBvciAnbWlzcycgZGVwZW5kaW5nIG9uIHJlc3VsdCwgYW5kIHRoZSBjb29yZGluYXRlc1xuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tTcXVhcmUocm93LCBjb2wpID09PSB1bmRlZmluZWQpIHJldHVybiBcIkludmFsaWQgbG9jYXRpb25cIjtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRTaGlwID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgICAgIGlmIChhdHRhY2tlZFNoaXAgPT09IG51bGwpIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gJ21pc3MnO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dGFja2VkU2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gJ2hpdCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmJvYXJkW3Jvd11bY29sXSwgW3JvdywgY29sXSwgYXR0YWNrZWRTaGlwXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tBbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiBwbGFjZWRTaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgcGxhY2VkU2hpcHMsXG4gICAgICAgIGNoZWNrU3F1YXJlLFxuICAgICAgICBjaGVja1ZhbGlkUGxhY2VtZW50LFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlbW92ZVNoaXAsXG4gICAgICAgIHBsYWNlQWxsU2hpcHNSYW5kb21seSxcbiAgICAgICAgcGxhY2VTaGlwUmFuZG9tbHksXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGNoZWNrQWxsU2hpcHNTdW5rXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgYWlMb2dpYyBmcm9tICcuL2FpTG9naWMnO1xuXG5mdW5jdGlvbiBQbGF5ZXIocGxheWVyTmFtZSwgcGxheWVyTnVtYmVyKSB7XG4gICAgbGV0IG5hbWUgPSB0eXBlb2YgcGxheWVyTmFtZSA9PT0gJ3N0cmluZycgPyBwbGF5ZXJOYW1lIDogJ2JhdHRsZUJvdCc7XG4gICAgY29uc3QgbnVtYmVyID0gcGxheWVyTnVtYmVyO1xuICAgIGNvbnN0IGlzQUkgPSB0eXBlb2YgcGxheWVyTmFtZSAhPT0gJ3N0cmluZycgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgYmF0dGxlQm90ID0gYWlMb2dpYygpO1xuICAgIGZ1bmN0aW9uIGF0dGFjayhlbmVteSwgcm93LCBjb2wpIHtcbiAgICAgICAgLy8gSWYgdGhlIGF0dGFja2luZyBwbGF5ZXIgaXMgQUksIHdlIHVzZSB0aGUgYWlMb2dpYyBtb2R1bGUgdG8gZ2V0IHRoZSBhdHRhY2sgY29vcmRpbmF0ZXNcbiAgICAgICAgaWYgKHRoaXMuaXNBSSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmF0dGxlQm90LmF2YWlsYWJsZUF0dGFja3MubGVuZ3RoID09PSAwKSByZXR1cm4gJ05vIHNxdWFyZXMgdG8gYXR0YWNrJztcbiAgICAgICAgICAgIFtyb3csIGNvbF0gPSB0aGlzLmJhdHRsZUJvdC5hdHRhY2soZW5lbXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgcmVzdWx0IG9mIHRoZSBhdHRhY2sgYW5kIHVwZGF0ZSB0aGUgYWlMb2dpYyB3aXRoIGl0XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgICAgaWYgKHRoaXMuaXNBSSl7XG4gICAgICAgICAgICBpZiAocmVzdWx0WzBdID09PSAnaGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYmF0dGxlQm90Lmxhc3RIaXRBcnJheS5wdXNoKHJlc3VsdFsxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXR0bGVCb3QuY29uY3VycmVudE1pc3NlcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0WzBdID09PSAnbWlzcycpIHRoaXMuYmF0dGxlQm90LmNvbmN1cnJlbnRNaXNzZXMrKztcbiAgICAgICAgICAgIGlmIChyZXN1bHRbMl0gIT09IG51bGwpIHRoaXMuYmF0dGxlQm90Lmxhc3RTaGlwID0gcmVzdWx0WzJdO1xuICAgICAgICAgICAgdGhpcy5iYXR0bGVCb3QucmVtb3ZlQ2VsbEZyb21BdmFpbGFibGVBdHRhY2tzKHJlc3VsdFsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbnVtYmVyLFxuICAgICAgICBpc0FJLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGJhdHRsZUJvdCxcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IHNoaXBUeXBlcyBmcm9tICcuL3NoaXBUeXBlcyc7XG5cbmZ1bmN0aW9uIFNoaXAoc2hpcFR5cGUpe1xuICAgIGNvbnN0IHR5cGUgPSBzaGlwVHlwZTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwVHlwZXNbc2hpcFR5cGVdLmxlbmd0aDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHNxdWFyZXM7XG4gICAgbGV0IGFsaWdubWVudDtcbiAgICBmdW5jdGlvbiBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0cyxcbiAgICAgICAgc3F1YXJlcyxcbiAgICAgICAgYWxpZ25tZW50LFxuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJjb25zdCBzaGlwVHlwZXMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ2NhcnJpZXInLFxuICAgICAgICBsZW5ndGg6IDVcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdiYXR0bGVzaGlwJyxcbiAgICAgICAgbGVuZ3RoOiA0XG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdkZXN0cm95ZXInLFxuICAgICAgICBsZW5ndGg6IDNcbiAgICB9LFxuICAgIHN1Ym1hcmluZToge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ3N1Ym1hcmluZScsXG4gICAgICAgIGxlbmd0aDogM1xuICAgIH0sXG4gICAgcGF0cm9sOiB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAncGF0cm9sJyxcbiAgICAgICAgbGVuZ3RoOiAyXG4gICAgfSxcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hpcFR5cGVzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvZG9tL2RvbUNvbnRyb2xsZXInXG5cbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4vLyBteUljb24uc3JjID0gSWNvbjtcbi8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=