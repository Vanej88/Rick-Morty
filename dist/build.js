/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCards": function() { return /* binding */ displayCards; },
/* harmony export */   "clearCards": function() { return /* binding */ clearCards; }
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");

function displayCards(characters) {
  for (let char of characters) {
    displayCard(char);
  }
}

function displayCard(character) {
  // pintamos todos los personajes
  let template = `
                    <div  class="card__content">
                        <div class="card__box-img">
                            <img class="card__img" src="${character.image}" data-image="${character.image}" alt="rick">
                        </div>
                        <div class="card__box-text">
                            <p class="card__title" 
                              data-name="${character.name}">${character.name}</p>
                            <div class="card__description">
                              <p class="card__status">
                                <span class="card__status-circle card__status-circle--active card__circle card__circle--active"></span>
                                <span data-status="${character.status}">${character.status}</span>
                              </p>
                              
                              <p class="card__type" 
                                    data-species="${character.species}" 
                                    data-gender="${character.gender}" 
                                    data-origin="${character.origin.name}" 
                                    data-location="${character.location.name}">${character.species}
                              </p>
                            </div>
                        </div>   
                    </div>
`;
  let padre = document.querySelector(".cards");
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = template;
  card.addEventListener("click", _modal__WEBPACK_IMPORTED_MODULE_0__.openPopup);
  padre.appendChild(card);
}

function clearCards() {
  let parent = document.querySelector(".cards");
  parent.innerHTML = "";
}

/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureInput": function() { return /* binding */ configureInput; }
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");

function configureInput(characters) {
  const input = document.querySelector('.search__input');
  input.addEventListener('keydown', function (event) {
    const value = input.value;
    const filtered = characters.filter(char => {
      let nombre = char.name.toLowerCase();
      let lowerValue = value.toLowerCase();
      return nombre.includes(lowerValue);
    });
    (0,_card__WEBPACK_IMPORTED_MODULE_0__.clearCards)();
    (0,_card__WEBPACK_IMPORTED_MODULE_0__.displayCards)(filtered);
  });
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": function() { return /* binding */ main; }
/* harmony export */ });
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
          (0,_card__WEBPACK_IMPORTED_MODULE_0__.displayCards)(characters);
          (0,_input__WEBPACK_IMPORTED_MODULE_1__.configureInput)(characters);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayModal": function() { return /* binding */ displayModal; },
/* harmony export */   "hideModal": function() { return /* binding */ hideModal; },
/* harmony export */   "openPopup": function() { return /* binding */ openPopup; }
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");

const body = document.querySelector('body');
const modalParent = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
function displayModal() {
  modalParent.classList.add('modal--open');
  overlay.classList.add('overlay--visible');
  body.classList.add('no-scroll');
}
function hideModal() {
  console.log("calling");
  modalParent.classList.remove('modal--open');
  body.classList.remove('no-scroll');
  overlay.classList.remove('overlay--visible');
  console.log('hi');
}
function openPopup(event) {
  const image = event.currentTarget.querySelector("[data-image]").getAttribute('data-image');
  const name = event.currentTarget.querySelector("[data-name]").getAttribute('data-name');
  const status = event.currentTarget.querySelector("[data-status]").getAttribute("data-status");
  const species = event.currentTarget.querySelector("[data-species]").getAttribute("data-species");
  const gender = event.currentTarget.querySelector("[data-gender]").getAttribute("data-gender");
  const origin = event.currentTarget.querySelector("[data-origin]").getAttribute("data-origin");
  const location = event.currentTarget.querySelector("[data-location]").getAttribute("data-location");
  const clickedChar = `
   
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
            <div class="modal__box-btn">
                <button id="close-modal" class="modal__btn" type="button" ><i class="fas fa-times"></i></button>
            </div>
        </div>  
    `;
  modalParent.innerHTML = clickedChar;
  displayModal();
  const closeModal = document.querySelector('#close-modal');
  closeModal.addEventListener("click", hideModal);
} //clearCards()

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (function() {

// extracted by mini-css-extract-plugin

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
/******/ 			// no module.id needed
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
//import "@babel/polyfill"


(0,_main__WEBPACK_IMPORTED_MODULE_0__.main)();
}();
/******/ })()
;
//# sourceMappingURL=build.js.map