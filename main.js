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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(220,220,220);\n}\n\n#app {\n    padding: 10%;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n    border: 2px solid black;\n}\n\n.board {\n    display: grid;\n    width: 400px;\n    height: 400px;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n}\n\n.cell {\n    cursor: crosshair;\n    background-color: rgb(200,200,200);\n    border: 1px solid grey;\n}\n\n.cell-ship {\n    background-color: blue;\n}\n\n.cell-hit {\n    background-color: red;\n}\n\n.cell-miss {\n    background-color: green;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,sCAAsC;IACtC,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(220,220,220);\n}\n\n#app {\n    padding: 10%;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n    border: 2px solid black;\n}\n\n.board {\n    display: grid;\n    width: 400px;\n    height: 400px;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n    gap: 1px;\n}\n\n.cell {\n    cursor: crosshair;\n    background-color: rgb(200,200,200);\n    border: 1px solid grey;\n}\n\n.cell-ship {\n    background-color: blue;\n}\n\n.cell-hit {\n    background-color: red;\n}\n\n.cell-miss {\n    background-color: green;\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/domController.js":
/*!**************************************!*\
  !*** ./src/modules/domController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");


const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

const game = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
game.newGame('Bob', false);
game.testGame();
let player1Board = drawBoard(1);
let player2Board = drawBoard(2);


app.append(player1Board, player2Board);

populateBoard(game.player1, player1Board)
// populateBoard(game.player2, player2Board)

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
            if (!player.isAI) cell.addEventListener('click', listenForAttack, false);
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
function callAIAttack(ai){
    if (ai !== game.currentPlayer) return;
    const defendingPlayerNumber = game.defendingPlayer === game.player1 ? '1' : '2';
    const [result, location] = ai.attack(game.defendingPlayer);
    const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${location[0]}'][data-col='${location[1]}']`)
    if (result === 'hit') cell.classList.add('cell-hit');
    if (result === 'miss') cell.classList.add('cell-miss');
    nextTurn();
}

// Handle end-of-turn events
function nextTurn(){
    const winner = game.checkGameOver();
    if (winner){
        alert(`${winner.name} wins`)
        return endGame(winner);
    };
    game.changeTurn();
    if (game.currentPlayer.isAI) {
        callAIAttack(game.currentPlayer)
    }
}

function endGame(winner){
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


function Gameboard(){
    const board = createEmptyGameboard();
    const placedShips = [];
    // Create a 10x10 2d array gameboard
    function createEmptyGameboard(){
        let gameboardArray = [];
        for (let row = 0; row <= 9; row++){
            let rowArray = [];
            for (let col = 0; col <= 9; col++){
                rowArray[col] = null;
            }
            gameboardArray[row] = rowArray;
        }
        return gameboardArray;
    }
    // Return the value of a square in the gameboard, and undefined if outside the gameboard extents
    function checkSquare(row, col){
        if (row < 0 || col < 0) return undefined;
        if (row > 9 || col > 9) return undefined;
        else return board[row][col];
    }
    function placeShip(shipLength, origin, alignment){
        const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(shipLength);
        // Create an array of ship placement squares
        let [row, col] = origin;
        let shipSquares = [];
        for (let i = 0; i < ship.length; i++){
            shipSquares.push([row, col]);
            alignment === 'horizontal' ? col++ : row++;
        }
        // If every placement square is null, place the ship on all those squares
        if (shipSquares.every(square => {
            let [row, col] = square;
            if (checkSquare(row, col) === undefined) return false;
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
    // Receives an attack and calculates the result
    // Returns an array - 'hit' or 'miss' depending on result, and the coordinates
    function receiveAttack(row, col){
        if (this.checkSquare(row, col) === undefined) return "Invalid location";
        if (this.board[row][col] === null) this.board[row][col] = 'miss';
        else {
            this.board[row][col].hit();
            this.board[row][col] = 'hit';
        }
        return [this.board[row][col], [row, col]];
    }
    function checkAllShipsSunk(){
        return placedShips.every(ship => ship.isSunk());
    }
    return {
        board,
        placedShips,
        checkSquare,
        placeShip,
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
/* harmony import */ var _modules_domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domController */ "./src/modules/domController.js");



// import Icon from './icon.png';
// const myIcon = new Image();
// myIcon.src = Icon;
// element.appendChild(myIcon)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQzVDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNsQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsMjIwLDIyMCk7XFxufVxcblxcbiNhcHAge1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwyMDAsMjAwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLmNlbGwtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5jZWxsLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGwtbWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLDIyMCwyMjApO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgcGFkZGluZzogMTAlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsMjAwLDIwMCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uY2VsbC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jZWxsLW1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hcHAuaWQgPSAnYXBwJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwKTtcblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcbmdhbWUubmV3R2FtZSgnQm9iJywgZmFsc2UpO1xuZ2FtZS50ZXN0R2FtZSgpO1xubGV0IHBsYXllcjFCb2FyZCA9IGRyYXdCb2FyZCgxKTtcbmxldCBwbGF5ZXIyQm9hcmQgPSBkcmF3Qm9hcmQoMik7XG5cblxuYXBwLmFwcGVuZChwbGF5ZXIxQm9hcmQsIHBsYXllcjJCb2FyZCk7XG5cbnBvcHVsYXRlQm9hcmQoZ2FtZS5wbGF5ZXIxLCBwbGF5ZXIxQm9hcmQpXG4vLyBwb3B1bGF0ZUJvYXJkKGdhbWUucGxheWVyMiwgcGxheWVyMkJvYXJkKVxuXG4vLyBEcmF3IGEgZ3JpZCBvZiBjZWxscyB3aXRoIGRhdGEgYXR0cmlidXRlcyBmb3IgdGhlaXIgbG9jYXRpb25zXG5mdW5jdGlvbiBkcmF3Qm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY29sO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICBpZiAoIXBsYXllci5pc0FJKSBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuRm9yQXR0YWNrLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xufVxuXG4vLyBVcG9uIGNsaWNraW5nIGEgY2VsbCwgYXR0YWNrIHRoZSByZWxldmFudCBzcXVhcmUsIGlmIGFsbG93ZWRcbmZ1bmN0aW9uIGxpc3RlbkZvckF0dGFjayhldmVudCkge1xuICAgIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPSBjZWxsLmRhdGFzZXQucGxheWVyO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllck51bWJlciA9IGRlZmVuZGluZ1BsYXllck51bWJlciA9PT0gJzEnID8gJzInIDogJzEnO1xuICAgIGNvbnN0IGF0dGFja2luZ1BsYXllciA9IGdhbWVbYHBsYXllciR7YXR0YWNraW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGNvbnN0IGRlZmVuZGluZ1BsYXllciA9IGdhbWVbYHBsYXllciR7ZGVmZW5kaW5nUGxheWVyTnVtYmVyfWBdO1xuICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXIgIT09IGF0dGFja2luZ1BsYXllcikgcmV0dXJuO1xuICAgIGNvbnN0IHJvdyA9IGNlbGwuZGF0YXNldC5yb3c7XG4gICAgY29uc3QgY29sID0gY2VsbC5kYXRhc2V0LmNvbDtcbiAgICBjb25zdCByZXN1bHQgPSBhdHRhY2tpbmdQbGF5ZXIuYXR0YWNrKGRlZmVuZGluZ1BsYXllciwgcm93LCBjb2wpWzBdO1xuICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtaGl0Jyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWlzcycpO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW5Gb3JBdHRhY2ssIGZhbHNlKVxuICAgIG5leHRUdXJuKCk7XG59XG5cbi8vIENhbGwgYW4gYXR0YWNrIGZvciB0aGUgQUkgYW5kIG1vZGlmeSB0aGUgcmVzdWx0aW5nIGF0dGFja2VkIGNlbGxcbmZ1bmN0aW9uIGNhbGxBSUF0dGFjayhhaSl7XG4gICAgaWYgKGFpICE9PSBnYW1lLmN1cnJlbnRQbGF5ZXIpIHJldHVybjtcbiAgICBjb25zdCBkZWZlbmRpbmdQbGF5ZXJOdW1iZXIgPSBnYW1lLmRlZmVuZGluZ1BsYXllciA9PT0gZ2FtZS5wbGF5ZXIxID8gJzEnIDogJzInO1xuICAgIGNvbnN0IFtyZXN1bHQsIGxvY2F0aW9uXSA9IGFpLmF0dGFjayhnYW1lLmRlZmVuZGluZ1BsYXllcik7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBsYXllcj0nJHtkZWZlbmRpbmdQbGF5ZXJOdW1iZXJ9J11bZGF0YS1yb3c9JyR7bG9jYXRpb25bMF19J11bZGF0YS1jb2w9JyR7bG9jYXRpb25bMV19J11gKVxuICAgIGlmIChyZXN1bHQgPT09ICdoaXQnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtaGl0Jyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtbWlzcycpO1xuICAgIG5leHRUdXJuKCk7XG59XG5cbi8vIEhhbmRsZSBlbmQtb2YtdHVybiBldmVudHNcbmZ1bmN0aW9uIG5leHRUdXJuKCl7XG4gICAgY29uc3Qgd2lubmVyID0gZ2FtZS5jaGVja0dhbWVPdmVyKCk7XG4gICAgaWYgKHdpbm5lcil7XG4gICAgICAgIGFsZXJ0KGAke3dpbm5lci5uYW1lfSB3aW5zYClcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUod2lubmVyKTtcbiAgICB9O1xuICAgIGdhbWUuY2hhbmdlVHVybigpO1xuICAgIGlmIChnYW1lLmN1cnJlbnRQbGF5ZXIuaXNBSSkge1xuICAgICAgICBjYWxsQUlBdHRhY2soZ2FtZS5jdXJyZW50UGxheWVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpc3RlbkZvckF0dGFjaywgZmFsc2UpKTtcbiAgICAvLyBhbm5vdW5jZSB3aW5uZXJcbiAgICAvLyByZXZlYWwgYm90aCBib2FyZHNcbn1cblxuLy8gRHJhdyB0aGUgc2hpcHMgdG8gdGhlIHBsYXllcidzIG9uLXNjcmVlbiBib2FyZCBzbyB0aGV5IGNhbiBzZWUgdGhlaXIgZmxlZXRcbmZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQocGxheWVyLCBib2FyZCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKHNxdWFyZSAhPT0gbnVsbCAmJiB0eXBlb2Ygc3F1YXJlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sPScke2NvbH0nXWApO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1zaGlwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZnVuY3Rpb24gR2FtZSgpe1xuICAgIGxldCBwbGF5ZXIxO1xuICAgIGxldCBwbGF5ZXIyO1xuICAgIGxldCBjdXJyZW50UGxheWVyO1xuICAgIGxldCBkZWZlbmRpbmdQbGF5ZXI7XG4gICAgZnVuY3Rpb24gbmV3R2FtZShwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUpe1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBQbGF5ZXIocGxheWVyMU5hbWUpO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBQbGF5ZXIocGxheWVyMk5hbWUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjE7XG4gICAgICAgIHRoaXMuZGVmZW5kaW5nUGxheWVyID0gdGhpcy5wbGF5ZXIyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VUdXJuKCl7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgICAgICB0aGlzLmRlZmVuZGluZ1BsYXllciA9IHRoaXMuZGVmZW5kaW5nUGxheWVyID09PSB0aGlzLnBsYXllcjIgPyB0aGlzLnBsYXllcjEgOiB0aGlzLnBsYXllcjI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrR2FtZU92ZXIoKXtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMjtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSkgcmV0dXJuIHRoaXMucGxheWVyMTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RHYW1lKCl7XG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIFsxLDNdLCAndmVydGljYWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LCBbNywyXSwgJ2hvcml6b250YWwnKVxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlU2hpcCg1LCBbMiw3XSwgJ3ZlcnRpY2FsJylcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5wbGFjZVNoaXAoMywgWzEsM10sICd2ZXJ0aWNhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIFs3LDJdLCAnaG9yaXpvbnRhbCcpXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2VTaGlwKDUsIFsyLDddLCAndmVydGljYWwnKVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyLFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBkZWZlbmRpbmdQbGF5ZXIsXG4gICAgICAgIG5ld0dhbWUsXG4gICAgICAgIGNoYW5nZVR1cm4sXG4gICAgICAgIGNoZWNrR2FtZU92ZXIsXG4gICAgICAgIHRlc3RHYW1lXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKXtcbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVtcHR5R2FtZWJvYXJkKCk7XG4gICAgY29uc3QgcGxhY2VkU2hpcHMgPSBbXTtcbiAgICAvLyBDcmVhdGUgYSAxMHgxMCAyZCBhcnJheSBnYW1lYm9hcmRcbiAgICBmdW5jdGlvbiBjcmVhdGVFbXB0eUdhbWVib2FyZCgpe1xuICAgICAgICBsZXQgZ2FtZWJvYXJkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDw9IDk7IHJvdysrKXtcbiAgICAgICAgICAgIGxldCByb3dBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IDk7IGNvbCsrKXtcbiAgICAgICAgICAgICAgICByb3dBcnJheVtjb2xdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVib2FyZEFycmF5W3Jvd10gPSByb3dBcnJheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkQXJyYXk7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgdmFsdWUgb2YgYSBzcXVhcmUgaW4gdGhlIGdhbWVib2FyZCwgYW5kIHVuZGVmaW5lZCBpZiBvdXRzaWRlIHRoZSBnYW1lYm9hcmQgZXh0ZW50c1xuICAgIGZ1bmN0aW9uIGNoZWNrU3F1YXJlKHJvdywgY29sKXtcbiAgICAgICAgaWYgKHJvdyA8IDAgfHwgY29sIDwgMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHJvdyA+IDkgfHwgY29sID4gOSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgZWxzZSByZXR1cm4gYm9hcmRbcm93XVtjb2xdO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcExlbmd0aCwgb3JpZ2luLCBhbGlnbm1lbnQpe1xuICAgICAgICBjb25zdCBzaGlwID0gU2hpcChzaGlwTGVuZ3RoKTtcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHNoaXAgcGxhY2VtZW50IHNxdWFyZXNcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBvcmlnaW47XG4gICAgICAgIGxldCBzaGlwU3F1YXJlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgc2hpcFNxdWFyZXMucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgIGFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnID8gY29sKysgOiByb3crKztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBldmVyeSBwbGFjZW1lbnQgc3F1YXJlIGlzIG51bGwsIHBsYWNlIHRoZSBzaGlwIG9uIGFsbCB0aG9zZSBzcXVhcmVzXG4gICAgICAgIGlmIChzaGlwU3F1YXJlcy5ldmVyeShzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBzcXVhcmU7XG4gICAgICAgICAgICBpZiAoY2hlY2tTcXVhcmUocm93LCBjb2wpID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sXSA9PT0gbnVsbDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHNoaXBTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gc3F1YXJlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwbGFjZWRTaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICAgICAgcmV0dXJuIHNoaXA7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gXCJDYW5ub3QgcGxhY2Ugc2hpcCBpbiB0aGF0IGxvY2F0aW9uXCI7XG4gICAgfVxuICAgIC8vIFJlY2VpdmVzIGFuIGF0dGFjayBhbmQgY2FsY3VsYXRlcyB0aGUgcmVzdWx0XG4gICAgLy8gUmV0dXJucyBhbiBhcnJheSAtICdoaXQnIG9yICdtaXNzJyBkZXBlbmRpbmcgb24gcmVzdWx0LCBhbmQgdGhlIGNvb3JkaW5hdGVzXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhyb3csIGNvbCl7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrU3F1YXJlKHJvdywgY29sKSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gXCJJbnZhbGlkIGxvY2F0aW9uXCI7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sXSA9PT0gbnVsbCkgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAnbWlzcyc7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9ICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbdGhpcy5ib2FyZFtyb3ddW2NvbF0sIFtyb3csIGNvbF1dO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0FsbFNoaXBzU3Vuaygpe1xuICAgICAgICByZXR1cm4gcGxhY2VkU2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHBsYWNlZFNoaXBzLFxuICAgICAgICBjaGVja1NxdWFyZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBjaGVja0FsbFNoaXBzU3Vua1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmZ1bmN0aW9uIFBsYXllcihwbGF5ZXJOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVvZiBwbGF5ZXJOYW1lID09PSAnc3RyaW5nJyA/IHBsYXllck5hbWUgOiAnYmF0dGxlQm90JztcbiAgICBjb25zdCBpc0FJID0gdHlwZW9mIHBsYXllck5hbWUgIT09ICdzdHJpbmcnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIC8vIENyZWF0ZSBhIDJEIGFycmF5IG9mIGF2YWlsYWJsZSBhdHRhY2sgY29vcmRpbmF0ZXNcbiAgICBjb25zdCBhdmFpbGFibGVBdHRhY2tzID0gY3JlYXRlQXR0YWNrQXJyYXkoKTtcbiAgICBmdW5jdGlvbiBhdHRhY2soZW5lbXksIHJvdywgY29sKSB7XG4gICAgICAgIC8vIEdldCByb3cgYW5kIGNvbCBmb3IgYSByYW5kb20gQUkgYXR0YWNrIGZyb20gdGhlIGF2YWlsYWJsZUF0dGFja3MgYXJyYXlcbiAgICAgICAgaWYgKGlzQUkpIHtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVBdHRhY2tzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdObyBzcXVhcmVzIHRvIGF0dGFjayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXJyYXlSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgYXJyYXlDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVBdHRhY2tzW2FycmF5Um93XS5sZW5ndGgpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBzcXVhcmUgZnJvbSB0aGUgYXZhaWxhYmxlQXR0YWNrcyBhcnJheSAmIGdldCB0aGUgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGxldCBhdHRhY2tDb29yZHMgPSBhdmFpbGFibGVBdHRhY2tzW2FycmF5Um93XS5zcGxpY2UoYXJyYXlDb2wsIDEpWzBdO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZUF0dGFja3NbYXJyYXlSb3ddLmxlbmd0aCA9PT0gMCkgYXZhaWxhYmxlQXR0YWNrcy5zcGxpY2UoYXJyYXlSb3csIDEpO1xuICAgICAgICAgICAgW3JvdywgY29sXSA9IGF0dGFja0Nvb3JkcztcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm4gdGhlICdoaXQnIG9yICdtaXNzJyByZXN1bHQgb2YgdGhlIGF0dGFja1xuICAgICAgICByZXR1cm4gZW5lbXkuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBpc0FJLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGF0dGFja1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQXR0YWNrQXJyYXkoKSB7XG4gICAgY29uc3QgYXR0YWNrQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgbGV0IHJvd0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgcm93QXJyYXkucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRhY2tBcnJheS5wdXNoKHJvd0FycmF5KTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja0FycmF5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiZnVuY3Rpb24gU2hpcChsKXtcbiAgICBjb25zdCBsZW5ndGggPSBsO1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBmdW5jdGlvbiBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU3Vuaygpe1xuICAgICAgICBpZiAodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0cyxcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9kb21Db250cm9sbGVyJ1xuXG4vLyBpbXBvcnQgSWNvbiBmcm9tICcuL2ljb24ucG5nJztcbi8vIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuLy8gbXlJY29uLnNyYyA9IEljb247XG4vLyBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbilcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9