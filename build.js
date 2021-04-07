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
/******/ 	__webpack_require__.p = "/";
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
  for (let char of characters) {
    displayCard(char);
  }
}

function displayCard(character) {
  // pintamos todos los personajes
  let template = `
                    <div class="card__content">
                        <div class="card__box-img">
                            <img class="card__img" src="${character.image}" data-image="${character.image}" alt="rick">
                        </div>
                        <div class="card__box-text">
                            <p class="card__title" data-name="${character.name}">${character.name}</p>
                            <p class="card__description"><span class="card__circle card__circle--active"></span><span class="card__status" data-status="${character.status}">${character.status}</span>-<span class="card__type" data-species="${character.species}" data-gender="${character.gender}" data-origin="${character.origin.name}" data-location="${character.location.name}">${character.species}</span></p>
                        </div>   
                    </div>
`;
  let padre = document.querySelector(".cards");
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = template;
  card.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__["openPopup"]);
  padre.appendChild(card);
}

function clearCards() {
  let parent = document.querySelector(".cards");
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
  const input = document.querySelector('.input__buscador');
  input.addEventListener('keydown', function (event) {
    // if(event.keyCode === 13){
    const value = input.value;
    const filtered = characters.filter(char => {
      //console.log(characters[0])
      //console.log(char.name)
      let nombre = char.name.toLowerCase();
      let lowerValue = value.toLowerCase();
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
  let characters = [];

  function getChars(characterNum) {
    let charactersPerPage = 20;
    let pages = Math.ceil(characterNum / charactersPerPage);

    for (let i = 1; i <= pages; i++) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${i}`).then(response => response.json()).then(data => {
        data.results.forEach(element => {
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

const modalParent = document.querySelector('.section-modal');
const modalFetch = document.createElement('div');
modalFetch.setAttribute('class', 'modal-fetch');
modalParent.appendChild(modalFetch);
function openPopup(event) {
  const image = event.currentTarget.querySelector("[data-image]").getAttribute('data-image');
  const name = event.currentTarget.querySelector("[data-name]").getAttribute('data-name');
  const status = event.currentTarget.querySelector("[data-status]").getAttribute("data-status");
  const species = event.currentTarget.querySelector("[data-species]").getAttribute("data-species");
  const gender = event.currentTarget.querySelector("[data-gender]").getAttribute("data-gender");
  const origin = event.currentTarget.querySelector("[data-origin]").getAttribute("data-origin");
  const location = event.currentTarget.querySelector("[data-location]").getAttribute("data-location");
  const clickedChar = `
   <div class="modal"> 
       <div class="modal__container">
            <div clas="modal__box-img">
                <img class="modal__img" src="${image}">
            </div>
            <div class="modal__box-text">
                <h3 class="modal__title">${name}</h3>
                <div class="modal__description">
                    <p class="modal__description-info"><span class="modal__circle"></span><span class="modal__status">${status}</span>-<span class="modal__type">${species}</span></p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Gender</p>
                    <p class="modal__details-text-bold">${gender}</p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Origin</p>
                   <p class="modal__details-text-bold">${origin}</p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Last known Location:</p>
                    <p class="modal__details-text-bold">${location}</p>
                </div>
            </div>
        </div>  
    </div> 
    `;
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