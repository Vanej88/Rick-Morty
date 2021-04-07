/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: displayCards, clearCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayCards", function() { return displayCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCards", function() { return clearCards; });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");

function displayCards(characters) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = characters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var char = _step.value;
      displayCard(char);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function displayCard(character) {
  // pintamos todos los personajes
  var template = "\n                    <div class=\"card__content\">\n                        <div class=\"card__box-img\">\n                            <img class=\"card__img\" src=\"".concat(character.image, "\" data-image=\"").concat(character.image, "\" alt=\"rick\">\n                        </div>\n                        <div class=\"card__box-text\">\n                            <p class=\"card__title\" data-name=\"").concat(character.name, "\">").concat(character.name, "</p>\n                            <p class=\"card__description\"><span class=\"card__circle card__circle--active\"></span><span class=\"card__status\" data-status=\"").concat(character.status, "\">").concat(character.status, "</span>-<span class=\"card__type\" data-species=\"").concat(character.species, "\" data-gender=\"").concat(character.gender, "\" data-origin=\"").concat(character.origin.name, "\" data-location=\"").concat(character.location.name, "\">").concat(character.species, "</span></p>\n                        </div>   \n                    </div>\n");
  var padre = document.querySelector(".cards");
  var card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = template;
  card.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__["openPopup"]);
  padre.appendChild(card);
}

function clearCards() {
  var parent = document.querySelector(".cards");
  parent.innerHTML = "";
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
//import "@babel/polyfill"


Object(_main__WEBPACK_IMPORTED_MODULE_0__["main"])();

/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/*! exports provided: configureInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureInput", function() { return configureInput; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");

function configureInput(characters) {
  var input = document.querySelector('.input__buscador');
  input.addEventListener('keydown', function (event) {
    // if(event.keyCode === 13){
    var value = input.value;
    var filtered = characters.filter(function (char) {
      //console.log(characters[0])
      //console.log(char.name)
      var nombre = char.name.toLowerCase();
      var lowerValue = value.toLowerCase();
      return nombre.includes(lowerValue);
    });
    Object(_card__WEBPACK_IMPORTED_MODULE_0__["clearCards"])();
    Object(_card__WEBPACK_IMPORTED_MODULE_0__["displayCards"])(filtered); //}
  });
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/js/input.js");


function main() {
  var characters = [];

  function getChars(characterNum) {
    var charactersPerPage = 20;
    var pages = Math.ceil(characterNum / charactersPerPage);

    for (var i = 1; i <= pages; i++) {
      fetch("https://rickandmortyapi.com/api/character/?page=".concat(i)).then(function (response) {
        return response.json();
      }).then(function (data) {
        data.results.forEach(function (element) {
          characters.push(element);
        });

        if (characters.length >= characterNum) {
          Object(_card__WEBPACK_IMPORTED_MODULE_0__["displayCards"])(characters);
          Object(_input__WEBPACK_IMPORTED_MODULE_1__["configureInput"])(characters);
        }
      });
    }
  }

  getChars(60);
}

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: openPopup, displayModal, hideModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopup", function() { return openPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayModal", function() { return displayModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return hideModal; });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");

var modalParent = document.querySelector('.section-modal');
var modalFetch = document.createElement('div');
modalFetch.setAttribute('class', 'modal-fetch');
modalParent.appendChild(modalFetch);
function openPopup(event) {
  var image = event.currentTarget.querySelector("[data-image]").getAttribute('data-image');
  var name = event.currentTarget.querySelector("[data-name]").getAttribute('data-name');
  var status = event.currentTarget.querySelector("[data-status]").getAttribute("data-status");
  var species = event.currentTarget.querySelector("[data-species]").getAttribute("data-species");
  var gender = event.currentTarget.querySelector("[data-gender]").getAttribute("data-gender");
  var origin = event.currentTarget.querySelector("[data-origin]").getAttribute("data-origin");
  var location = event.currentTarget.querySelector("[data-location]").getAttribute("data-location");
  var clickedChar = "\n   <div class=\"modal\"> \n       <div class=\"modal__container\">\n            <div clas=\"modal__box-img\">\n                <img class=\"modal__img\" src=\"".concat(image, "\">\n            </div>\n            <div class=\"modal__box-text\">\n                <h3 class=\"modal__title\">").concat(name, "</h3>\n                <div class=\"modal__description\">\n                    <p class=\"modal__description-info\"><span class=\"modal__circle\"></span><span class=\"modal__status\">").concat(status, "</span>-<span class=\"modal__type\">").concat(species, "</span></p>\n                </div>\n                <div class=\"modal__details\">\n                    <p class=\"modal__details-text-light\">Gender</p>\n                    <p class=\"modal__details-text-bold\">").concat(gender, "</p>\n                </div>\n                <div class=\"modal__details\">\n                    <p class=\"modal__details-text-light\">Origin</p>\n                   <p class=\"modal__details-text-bold\">").concat(origin, "</p>\n                </div>\n                <div class=\"modal__details\">\n                    <p class=\"modal__details-text-light\">Last known Location:</p>\n                    <p class=\"modal__details-text-bold\">").concat(location, "</p>\n                </div>\n            </div>\n        </div>  \n    </div> \n    ");
  modalFetch.innerHTML = clickedChar;
  displayModal();
  hideModal();
}
function displayModal() {
  modalParent.classList.add('section-modal');
  modalFetch.classList.add('modal-fetch');
}
function hideModal() {
  modalFetch.addEventListener('click', function (event) {
    //let parent = document.querySelector('.modal-fetch')
    modalFetch.innerHTML = ''; //backGround.classList.remove('background-effect')
  });
}
Object(_card__WEBPACK_IMPORTED_MODULE_0__["clearCards"])();

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=build.js.map