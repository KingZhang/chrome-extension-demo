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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addPageScript;
/* harmony export (immutable) */ __webpack_exports__["b"] = sendChromeMessage;
function addPageScript(jsPath) {
    var pageScript = document.createElement('script');
    pageScript.setAttribute('type', 'text/javascript');
    pageScript.src = chrome.extension.getURL(jsPath);
    pageScript.onload = function () {
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(pageScript);
}

function sendChromeMessage(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const CMD_RUN = 'run';
/* harmony export (immutable) */ __webpack_exports__["a"] = CMD_RUN;

const CMD_STOP = 'stop';
/* harmony export (immutable) */ __webpack_exports__["b"] = CMD_STOP;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_appRoot_common_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_appRoot_common_constants__ = __webpack_require__(1);



Object(__WEBPACK_IMPORTED_MODULE_0_appRoot_common_utils__["a" /* addPageScript */])('js/inner.js');

function run() {};

function stop() {}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd == __WEBPACK_IMPORTED_MODULE_1_appRoot_common_constants__["a" /* CMD_RUN */]) {
        run();
    }
    sendResponse('run');
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd == __WEBPACK_IMPORTED_MODULE_1_appRoot_common_constants__["b" /* CMD_STOP */]) {
        stop();
    }
});

/***/ })
/******/ ]);
//# sourceMappingURL=content.js.map