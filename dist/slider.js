/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);





function initialize() {
  this.render = _render_render__WEBPACK_IMPORTED_MODULE_0__.render;
  this.renderSlides = _render_render__WEBPACK_IMPORTED_MODULE_0__.renderSlides;
  this.calculateSize = _render_render__WEBPACK_IMPORTED_MODULE_0__.calculateSize;
  this.render();
  this.renderSlides(this.data);
  this.checkScreenResolution();
  this.autoLoad = _render_render__WEBPACK_IMPORTED_MODULE_0__.autoLoad;
  this.autoLoad();
  this.moveLeft = _events_events__WEBPACK_IMPORTED_MODULE_1__.moveLeft;
  this.moveRight = _events_events__WEBPACK_IMPORTED_MODULE_1__.moveRight;
  this.leftArrow.addEventListener('click', this.moveLeft.bind(this));
  this.rightArrow.addEventListener('click', this.moveRight.bind(this));
  window.addEventListener('resize', this.checkScreenResolution.bind(this));
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderSlides": () => (/* binding */ renderSlides),
/* harmony export */   "autoLoad": () => (/* binding */ autoLoad),
/* harmony export */   "calculateSize": () => (/* binding */ calculateSize)
/* harmony export */ });
function render() {
  this.sliderElement = document.getElementById(this.el);
  this.sliderElement.className = 'slider';
  this.sliderContainer = document.createElement('div');
  this.sliderContainer.className = 'slider__slider-container';
  this.sliderElement.appendChild(this.sliderContainer);
  this.leftArrowBtn = document.createElement('button');
  this.leftArrowBtn.className = 'slider__left-arrow-btn';
  this.rightArrowBtn = document.createElement('button');
  this.rightArrowBtn.className = 'slider__right-arrow-btn';
  this.sliderElement.appendChild(this.leftArrowBtn);
  this.sliderElement.appendChild(this.rightArrowBtn);
  this.leftArrow.classList.add('slider__left-arrow-btn__left', 'fas', 'fa-chevron-left');
  this.rightArrow.classList.add('slider__right-arrow-btn__right', 'fas', 'fa-chevron-right');
  this.leftArrowBtn.appendChild(this.leftArrow);
  this.rightArrowBtn.appendChild(this.rightArrow);
  this.leftArrowBtn.style.display = 'none';
}
function renderSlides(data) {
  var _this = this;

  this.sliderContainer.style.width = "".concat(this.data.length * (this.sliderElement.offsetWidth / this.previewType), "px");
  data.forEach(function (slide) {
    var slideImg = document.createElement('img');
    slideImg.className = 'slider__link__img';
    slideImg.style.height = "".concat(9 * (_this.sliderElement.offsetWidth / _this.previewType) / 16, "px");

    if (_this.lazyLoad === true) {
      slideImg.setAttribute('data-src', slide.imgUrl);
    } else {
      slideImg.src = slide.imgUrl;
    }

    if (_this.lazyLoad === true) {
      _this.imageObserver.observe(slideImg);
    }

    var slideTitle = document.createElement('h1');
    slideTitle.innerText = slide.caption;
    var slideLink = document.createElement('a');
    slideLink.className = 'slider__link';
    slideLink.href = slide.redirectLink;
    slideLink.target = '_blank';
    slideLink.appendChild(slideImg);
    slideLink.appendChild(slideTitle);
    var slideContainer = document.createElement('div');
    slideContainer.className = 'slider__slider-container__slide';
    slideContainer.style.width = "".concat(_this.sliderElement.offsetWidth / _this.previewType, "px");
    slideContainer.appendChild(slideLink);

    _this.sliderContainer.appendChild(slideContainer);
  });
}
function autoLoad() {
  var _this2 = this;

  if (this.auto === true) {
    this.rightArrowBtn.style.display = 'none';
    setInterval(function () {
      _this2.countInfinity++;
      var matrix = new WebKitCSSMatrix(_this2.sliderContainer.style.transform);
      _this2.sliderContainer.style.transform = "translateX(".concat(matrix.m41 - _this2.sliderElement.offsetWidth, "px)");

      if (_this2.countInfinity * _this2.sliderElement.offsetWidth >= _this2.data.length * (_this2.sliderElement.offsetWidth / _this2.previewType)) {
        _this2.dataInfinity.forEach(function (el) {
          return _this2.data.push(el);
        });

        _this2.renderSlides(_this2.dataInfinity);
      }
    }, 3000);
  }
}
function calculateSize() {
  var _this3 = this;

  this.sliderContainer.style.width = "".concat(this.data.length * (this.sliderElement.offsetWidth / this.previewType), "px");
  document.querySelectorAll('.slider__slider-container__slide').forEach(function (el) {
    el.style.width = "".concat(_this3.sliderElement.offsetWidth / _this3.previewType, "px");
    el.childNodes[0].childNodes[0].style.height = "".concat(9 * (_this3.sliderElement.offsetWidth / _this3.previewType) / 16, "px");
  });
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveRight": () => (/* binding */ moveRight),
/* harmony export */   "moveLeft": () => (/* binding */ moveLeft)
/* harmony export */ });
function moveRight() {
  var _this = this;

  this.countInfinity++;
  this.leftArrowBtn.style.display = 'block';
  var matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform);
  this.sliderContainer.style.transform = "translateX(".concat(matrix.m41 - this.sliderElement.offsetWidth, "px)");

  if (this.infinity === true) {
    if (this.countInfinity * this.sliderElement.offsetWidth >= this.data.length * (this.sliderElement.offsetWidth / this.previewType)) {
      this.dataInfinity.forEach(function (el) {
        return _this.data.push(el);
      });
      this.renderSlides(this.dataInfinity);
    }
  } else {
    if (this.countInfinity === this.data.length / this.previewType - 1) {
      this.rightArrowBtn.style.display = 'none';
    }
  }
}
function moveLeft() {
  // ogranici ako je doslo do kraja da se izgubi strelica
  this.countInfinity--;

  if (this.countInfinity === 0) {
    this.leftArrowBtn.style.display = 'none';
  }

  this.rightArrowBtn.style.display = 'block';
  var matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform);
  this.sliderContainer.style.transform = "translateX(".concat(matrix.m41 + this.sliderElement.offsetWidth, "px)");
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  this.imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target; // console.log("lazy loading ", lazyImage)

        lazyImage.src = lazyImage.dataset.src;
      }
    });
  });
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkMediaQuery)
/* harmony export */ });
function checkMediaQuery() {
  if (this.sliderElement.offsetWidth <= 768) {
    this.previewType = 1;
    this.calculateSize();
  } else if (this.sliderElement.offsetWidth > 768 && this.sliderElement.offsetWidth <= 1024) {
    this.previewType = 3;
    this.calculateSize();
  } else if (this.sliderElement.offsetWidth > 1024) {
    this.previewType = 6;
    this.calculateSize();
  }
}

/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _app_lazy_lazy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _app_helper_checkScreenResolution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import './scss/main.scss'




var Slider = function Slider(el, data, options) {
  _classCallCheck(this, Slider);

  this.el = el;
  this.data = data;
  this.dataInfinity = _toConsumableArray(this.data);
  this.checkScreenResolution = _app_helper_checkScreenResolution__WEBPACK_IMPORTED_MODULE_2__.default;
  this.infinity = options.infinity;
  this.lazyLoad = options.lazyLoad;
  this.auto = options.auto;
  this.leftArrow = document.createElement('i');
  this.rightArrow = document.createElement('i');
  this.countInfinity = 0;
  this.previewType = 6;
  this.lazy = _app_lazy_lazy__WEBPACK_IMPORTED_MODULE_1__.default;
  this.lazy();
  this.initialize = _app_core_core__WEBPACK_IMPORTED_MODULE_0__.default; // metodu initialize smo premestili u poseban fajl
};

window.Slider = Slider;
})();

/******/ })()
;