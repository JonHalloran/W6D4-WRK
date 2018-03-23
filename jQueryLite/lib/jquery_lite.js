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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(selector) {
  let collection = [];
  if (selector instanceof HTMLElement) {
    collection.push(new DOMNodeCollection([selector]));
  }
  let $l = document.querySelectorAll(selector);
  // this.$l = $l;

  return new DOMNodeCollection(document.querySelectorAll(selector));
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  html(string) {
    if (string !== undefined) {
      this.array[0].innerHTML = string;
    }

    return this.array[0].innerHTML;
  }

  empty() {
    this.array.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(thing) {
    this.array.forEach(el => {
      el.innerHTML += thing;
    });
  }

  attr(attributeName, value) {
    this.array.forEach(el => {
      if (value !== undefined) {
        el.setAttribute(attributeName, value);
      }
    });
    return this.array[0].getAttribute(attributeName);
  }

  addClass(className) {
    this.array.forEach(el => {
      el.classList.add(className);
    });
    return className;
  }

  removeClass(className) {
    this.array.forEach(el => {
      el.classList.remove(className);
    });
    return this.array[0].class;
  }

  children() {
    let childrenArr = [];
    this.array.forEach(el => {
      let arr = Array.from(el.children);
      childrenArr = childrenArr.concat(arr);
    });

    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    let parentArr = [];
    this.array.forEach(el => {
      let parent = el.parentNode;
      console.log(parent);
      if (parentArr.indexOf(parent) === -1) {
        parentArr = parentArr.concat(parent);
      }
    });
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let out = [];
    this.array.forEach(el => {
      let found = el.querySelectorAll(selector);
      let foundArr = Array.from(found);
      out = out.concat(foundArr);
    });
    return new DOMNodeCollection(out);
  }

  remove() {
    this.array.forEach(el => {
      el.remove();
    });
    this.array = [];
  }

  on(event, func) {
    this.array.forEach(el => {
      console.log(el);
      el.addEventListener(event, func);
      el.setAttribute("callback", func);
    });
  }

  off(event) {
    this.array.forEach(el => {
      let calledFunction = el.getAttribute("callback");
      console.log(calledFunction);
      el.removeEventListener(event, calledFunction);
      el.removeAttribute("callback");
    });
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);