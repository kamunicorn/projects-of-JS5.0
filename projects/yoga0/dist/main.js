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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*jshint esversion: 6 */\r\n// 'use strict';\r\n\r\n/* let functions = require('./parts/functions.js');\r\nfunctions(); */\r\n\r\nwindow.addEventListener('DOMContentLoaded', function() {\r\n\r\n\tlet calc = __webpack_require__(/*! ./parts/calc.js */ \"./src/parts/calc.js\"),\r\n\t\tform = __webpack_require__(/*! ./parts/forms.js */ \"./src/parts/forms.js\"),\r\n\t\tmodal = __webpack_require__(/*! ./parts/modal.js */ \"./src/parts/modal.js\"),\r\n\t\tslider = __webpack_require__(/*! ./parts/slider.js */ \"./src/parts/slider.js\"),\r\n\t\ttabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/parts/tabs.js\"),\r\n\t\ttimer = __webpack_require__(/*! ./parts/timer.js */ \"./src/parts/timer.js\");\r\n\r\n\tcalc();\r\n\tform();\r\n\tmodal();\r\n\tslider();\r\n\ttabs();\r\n\ttimer();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function isEmpty(str) { // не пропускаем пустые строки\r\n\treturn (str == null || str == '');\r\n}\r\n\t// Calculator\r\nfunction isContainOnlyDigits(str) {  // проверка строки на содержание в ней только цифр\r\n\tif (isEmpty(str)) {\r\n\t\treturn false;\r\n\t}\r\n\treturn !/[\\D]/gi.test(str);   \r\n}\r\nfunction removeNotDigits(str) {\r\n\treturn str.replace(/[\\D]/gi, '');\r\n}\r\n\r\nfunction calc() {\r\n\tlet calcBlock = document.getElementById('price'),\r\n\t\tpeople = calcBlock.getElementsByClassName('counter-block-input')[0],\r\n\t\tdays = calcBlock.getElementsByClassName('counter-block-input')[1],\r\n\t\tbase = document.getElementById('select'),\r\n\t\ttotalBox = document.getElementById('total'),\r\n\t\t// \r\n\t\tcalcObj = {\r\n\t\t\tdays: null,\r\n\t\t\tpeople: null,\r\n\t\t\tbaseIndex: base.selectedIndex,\r\n\t\t\tbaseRate: +base.value,\r\n\t\t\tpricePerDay: 2500,\r\n\t\t\ttotal: null,\r\n\r\n\t\t\tcalculateTotal: function() {\r\n\t\t\t\tif (this.days == 0 || this.people == 0 || this.days == null || this.people == null) {\r\n\t\t\t\t\tthis.total = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.total = (this.days + this.people) * this.baseRate * this.pricePerDay;\r\n\t\t\t\t}\r\n\t\t\t\t/*if (this.days != null && this.people != null) {\r\n\t\t\t\t\tthis.total = this.days * this.people * this.baseRate * this.pricePerDay;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.total = null;\r\n\t\t\t\t}*/\r\n\t\t\t\t/*console.log(this);\r\n\t\t\t\tconsole.log('total = ' + this.total);*/\r\n\t\t\t}\r\n\t\t};\r\n\r\n\ttotalBox.textContent = 0;\r\n\r\n\tbase.addEventListener('change', (e) => {\r\n\t\tlet target = e.target;\r\n\r\n\t\tcalcObj.baseRate = +target.value;\r\n\t\tcalcObj.baseIndex = target.selectedIndex;\r\n\t\tsetTotalCost();\r\n\t});\r\n\r\n\tdays.addEventListener('input', function() {\r\n\t\tgetAndSetProperty.call(this, 'days');\r\n\t});\r\n\r\n\tpeople.addEventListener('input', function() {\r\n\t\tgetAndSetProperty.call(this, 'people');\r\n\t});\r\n\r\n\tfunction setTotalCost() {\r\n\t\tcalcObj.calculateTotal();\r\n\t\tif (calcObj.total == null || calcObj.total == 0) {\r\n\t\t\ttotalBox.textContent = 0;\r\n\t\t} else {\r\n\t\t\ttotalBox.textContent = calcObj.total.toLocaleString();\r\n\t\t}\r\n\t}\r\n\r\n\tfunction getAndSetProperty(property) {\r\n\t\tlet value = this.value;\r\n\r\n\t\tif (value.length > 0) {\r\n\t\t\tif (!isContainOnlyDigits(value)) {\r\n\t\t\t\tvalue = removeNotDigits(value);\r\n\t\t\t}\r\n\t\t\tvalue = +value;\t\r\n\t\t}\r\n\t\tif (value == null || value == '' || value == 0) {\r\n\t\t\tcalcObj[property] = 0;\r\n\t\t\tthis.value = '';\r\n\t\t} else {\r\n\t\t\tthis.value = value;\r\n\t\t\tcalcObj[property] = value;\r\n\t\t}\r\n\t\tsetTotalCost();\r\n\t}\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/parts/calc.js?");

/***/ }),

/***/ "./src/parts/forms.js":
/*!****************************!*\
  !*** ./src/parts/forms.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\nfunction verifyTelephone(str) {\r\n\tlet s = removeNotDigits(str);\r\n\treturn (s == '') ? '' : '+' + s;\r\n}\r\nfunction removeNotDigits(str) {\r\n\treturn str.replace(/[\\D]/gi, '');\r\n}\r\n\t// Forms submit\r\nfunction forms() {\r\n\r\n\tlet statusMessage = {\r\n\t\tloading: 'Загрузка...',\r\n\t\tsuccess: 'Спасибо! Скоро мы с вами свяжемся!',\r\n\t\tfailure: 'Что-то пошло не так.'\r\n\t};\r\n\r\n\tlet statusBox = document.createElement('div'),\r\n\t\tmainForm = document.querySelector('.main-form'),\r\n\t\tcontactForm = document.querySelector('#contacts form');\r\n\r\n\tstatusBox.classList.add('status');\r\n\r\n\tcontactForm.addEventListener('submit', function(e) {\r\n\t\te.preventDefault();\r\n\t\tsubmitForm(this);\r\n\t});\r\n\r\n\tmainForm.addEventListener('submit', function(e) {\r\n\t\te.preventDefault();\r\n\t\tsubmitForm(this);\r\n\t});\r\n\r\n\tfunction submitForm(form) {\r\n\t\tlet formInputs = form.querySelectorAll('input');\r\n\t\tform.appendChild(statusBox);\r\n\t\tlet formData = new FormData(form);\r\n\t\t\r\n\t\tfunction postData(data) {\r\n\r\n\t\t\treturn new Promise(function(resolve, reject) {\r\n\t\t\t\tlet request = new XMLHttpRequest();\r\n\t\t\t\trequest.open('POST', 'server.php');\r\n\t\t\t\trequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n\t\t\t\t\r\n\t\t\t\trequest.onreadystatechange = function() {\r\n\t\t\t\t\tif (request.readyState < 4) {\r\n\t\t\t\t\t\tresolve();\r\n\t\t\t\t\t\t// statusBox.innerHTML = statusMessage.loading;\r\n\t\t\t\t\t} else if (request.readyState === 4 && request.status === 200) {\r\n\t\t\t\t\t\tresolve();\r\n\t\t\t\t\t\t// statusBox.innerHTML = statusMessage.success;\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\treject();\r\n\t\t\t\t\t\t// statusBox.innerHTML = statusMessage.failure;\r\n\t\t\t\t\t}\r\n\t\t\t\t};\r\n\r\n\t\t\t\trequest.send(data);\r\n\r\n\t\t\t});\r\n\t\t}\t// End postData\r\n\r\n\t\tpostData(formData)\r\n\t\t\t\t.then(() => statusBox.innerHTML = statusMessage.loading)\r\n\t\t\t\t.then(() => {\r\n\t\t\t\t\tstatusBox.innerHTML = statusMessage.success;\r\n\t\t\t\t\tformInputs.forEach( (input) => input.value = '' );\r\n\t\t\t\t})\r\n\t\t\t\t.catch(() => statusBox.innerHTML = statusMessage.failure);\r\n\t}\r\n\r\n\t\t// verify and reset telephone str\r\n\r\n\tlet phoneInputs = document.querySelectorAll('input[type=tel]')\r\n\t// console.log(phoneInputs);\r\n\r\n\tphoneInputs.forEach(function(input) {\r\n\t\tinput.addEventListener('input', function() {\r\n\t\t\t// console.log(this);\r\n\t\t\tthis.value = verifyTelephone(this.value);\r\n\t\t});\r\n\t});\r\n}\t\r\n\r\nmodule.exports = forms;\n\n//# sourceURL=webpack:///./src/parts/forms.js?");

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\t// Modal\r\nfunction modal() {\r\n\tlet more = document.querySelector('.more'),\r\n\t\toverlay = document.querySelector('.overlay'),\r\n\t\tpopupClose = document.querySelector('.popup-close'),\r\n\t\tdescriptionBtn = document.querySelectorAll('.description-btn'),\r\n\t\tclickedButton;\r\n\r\n\tdescriptionBtn.forEach(function(btn) {\r\n\t\tbtn.addEventListener('click', function() {\r\n\t\t\tclickedButton = this;\r\n\t\t\tshowModal.call(this);\r\n\t\t});\r\n\t});\r\n\r\n\tmore.addEventListener('click', function() {\r\n\t\tclickedButton = this;\r\n\t\tshowModal.call(this);\r\n\t});\r\n\r\n\tpopupClose.addEventListener('click', () => {\r\n\t\toverlay.style.display = 'none';\r\n\t\tclickedButton.classList.remove('more-splash');\r\n\t\tdocument.body.style.overflow = '';\r\n\t});\r\n\r\n\tfunction showModal() {\r\n\t\tthis.classList.add('more-splash');\r\n\t\toverlay.style.display = 'block';\r\n\t\tdocument.body.style.overflow = 'hidden';\r\n\t}\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/parts/modal.js?");

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\t// Photo slider\r\nfunction slider() {\r\n\tlet photoBlock = document.getElementById('photo'),\r\n\t\tsliderItems = photoBlock.querySelectorAll('.slider-item'),\r\n\t\tphotoPrev = photoBlock.querySelector('.prev'),\r\n\t\tphotoNext = photoBlock.querySelector('.next'),\r\n\t\tsliderDotsBlock = photoBlock.querySelector('.slider-dots'),\r\n\t\tsliderDotsItems = sliderDotsBlock.querySelectorAll('.dot'),\r\n\t\twantedSlide = 0;\r\n\r\n\tshowSliderItems(wantedSlide);\r\n\r\n\tphotoNext.addEventListener('click', () => {\r\n\t\tlet lastSlide = wantedSlide;\r\n\t\twantedSlide = (wantedSlide >= sliderItems.length - 1) ? 0 : wantedSlide + 1;\r\n\t\tshowSliderItems(wantedSlide);\r\n\t\tresetDotActive(lastSlide, wantedSlide);\r\n\t});\r\n\r\n\tphotoPrev.addEventListener('click', () => {\r\n\t\tlet lastSlide = wantedSlide;\r\n\t\twantedSlide = (wantedSlide <= 0) ? sliderItems.length - 1 : wantedSlide - 1;\r\n\t\tshowSliderItems(wantedSlide);\r\n\t\tresetDotActive(lastSlide, wantedSlide);\r\n\t});\r\n\r\n\tsliderDotsBlock.addEventListener('click', (e) => {\r\n\t\tlet target = e.target;\r\n\t\tif (target.classList.contains('dot') && !target.classList.contains('dot-active')) {\r\n\t\t\tlet lastSlide = wantedSlide;\r\n\t\t\tfor (let i = 0; i < sliderDotsItems.length; i++) {\r\n\t\t\t\tif (target == sliderDotsItems[i]) {\r\n\t\t\t\t\twantedSlide = i;\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tshowSliderItems(wantedSlide);\r\n\t\t\tresetDotActive(lastSlide, wantedSlide);\r\n\t\t}\r\n\t});\r\n\r\n\tfunction showSliderItems(n) {\r\n\t\tfor (let i = 0; i < sliderItems.length; i++) {\r\n\t\t\tif (i == n) {\r\n\t\t\t\tsliderItems[n].classList.add('show');\r\n\t\t\t\tsliderItems[n].classList.remove('hide');\r\n\t\t\t} else {\r\n\t\t\t\tsliderItems[i].classList.remove('show');\r\n\t\t\t\tsliderItems[i].classList.add('hide');\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction resetDotActive(last, current) {\r\n\t\tsliderDotsItems[last].classList.remove('dot-active');\r\n\t\tsliderDotsItems[current].classList.add('dot-active');\r\n\t}\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/parts/slider.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\t// tabs switching\r\nfunction tabs() {\r\n\tlet headerOfTabs = document.querySelector('.info-header'),\r\n\t\ttabs = document.querySelectorAll('.info-header-tab'),\r\n\t\ttabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\n\tshowTabContent(0);\r\n\r\n\theaderOfTabs.addEventListener('click', (e) => {\r\n\t\tlet target = e.target;\r\n\t\tif (target && target.classList.contains('info-header-tab')) {\r\n\t\t\tfor (let i = 0; i < tabs.length; i++) {\r\n\t\t\t\tif (target == tabs[i] && tabContent[i].classList.contains('hide')) {\r\n\t\t\t\t\tshowTabContent(i);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\r\n\tfunction showTabContent(n) {\r\n\t\tfor (let i = 0; i < tabContent.length; i++) {\r\n\t\t\tif (i == n) {\r\n\t\t\t\ttabContent[n].classList.add('show');\r\n\t\t\t\ttabContent[n].classList.remove('hide');\r\n\t\t\t} else {\r\n\t\t\t\ttabContent[i].classList.remove('show');\r\n\t\t\t\ttabContent[i].classList.add('hide');\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\n\t// countdown timer\r\n\r\nfunction addZero(digit) {\r\n\treturn (digit < 10) ? '0' + digit : '' + digit;\r\n}\r\n\r\nfunction timer() {\r\n\r\n\tlet deadline = '2019-01-01 00:00:00';\r\n\r\n\tfunction getTimeDifference(endtime) {\r\n\t\tlet d = Date.parse(endtime) - Date.parse(new Date());\r\n\t\tif (d <= 0) {\r\n\t\t\treturn {\r\n\t\t\t\t'total' : d,\r\n\t\t\t\t'seconds' : 0,\r\n\t\t\t\t'minutes' : 0,\r\n\t\t\t\t'hours' : 0\r\n\t\t\t};\r\n\t\t}\r\n\t\tlet\tseconds = Math.floor( (d/1000) % 60 ),\r\n\t\t\tminutes = Math.floor( (d/1000/60) % 60 ),\r\n\t\t\thours = Math.floor( d / 1000/60/60 );\r\n\t\t\r\n\t\treturn {\r\n\t\t\ttotal: d,\r\n\t\t\tseconds: seconds,\r\n\t\t\tminutes: minutes,\r\n\t\t\thours: hours\r\n\t\t};\r\n\t}\r\n\r\n\tfunction setClock(id, endtime) {\r\n\t\tlet timerBox = document.getElementById(id),\r\n\t\t\thoursBox = timerBox.querySelector('.hours'),\r\n\t\t\tminutesBox = timerBox.querySelector('.minutes'),\r\n\t\t\tsecondsBox = timerBox.querySelector('.seconds');\r\n\r\n\t\tfunction updateClock() {\r\n\t\t\tlet d = getTimeDifference(endtime);\r\n\t\t\thoursBox.textContent = addZero(d.hours);\r\n\t\t\tminutesBox.textContent = addZero(d.minutes);\r\n\t\t\tsecondsBox.textContent = addZero(d.seconds);\r\n\t\t}\r\n\r\n\t\tsetTimeout(function recurse() {\r\n\t\t\tupdateClock();\r\n\t\t\tsetTimeout(recurse, 1000);\r\n\t\t});\r\n\t}\r\n\r\n\tsetClock('timer', deadline);\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ })

/******/ });