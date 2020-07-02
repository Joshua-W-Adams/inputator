var inputator =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * npm Entry File
 * (c) 2020 Joshua Adams
 */

/**
 * index.js is the default 'entry file' for npm.
 * This means that any require('package name') or import 'package name'
 * statements will refer to this file.
 */
var pkg = __webpack_require__(1); // export a file with the same name as the package by default


module.exports = __webpack_require__(2)("./".concat(pkg.name, ".js"));

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"inputator\",\"version\":\"1.0.1\",\"description\":\"A JavaScript component for generating html input elements\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Joshua-W-Adams/input.js.git\"},\"author\":\"Joshua Adams\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/Joshua-W-Adams/input.js/issues\"},\"homepage\":\"https://github.com/Joshua-W-Adams/input.js#readme\",\"devDependencies\":{\"@babel/core\":\"^7.8.4\",\"@babel/preset-env\":\"^7.8.4\",\"babel-loader\":\"^8.0.6\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-plugin-import\":\"^2.20.0\",\"express\":\"^4.17.1\",\"gulp\":\"^4.0.2\",\"gulp-concat\":\"^2.6.1\",\"gulp-eslint\":\"^6.0.0\",\"gulp-minify-css\":\"^1.2.4\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^4.0.2\",\"gulp-stylelint\":\"^13.0.0\",\"stylelint\":\"^13.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"webpack-stream\":\"^5.2.1\"},\"dependencies\":{\"gulp-nodemon\":\"^2.5.0\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./inputator.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Input.js
 * JavaScript component for generating input UI elements
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// N/A

/* ================================ Variables =============================== */
// clears input on key up (typing) operations from the stack que
var timeoutVariable;
/* ============================= Private Methods ============================ */

function _addElement(parent, type) {
  var element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _onHoverDefault() {}

function _onClickDefault(element) {
  // set default styling
  element.style.backgroundColor = 'rgba(206,230,253,1)';
  element.style.outline = 'none';
}

function _onFocusOutDefault(element) {
  // set default styling
  element.style.backgroundColor = 'rgba(241,243,244,1)';
}

function _onKeyUpDefault() {}

function _containerRenderer() {
  var e = {};
  e.id = 'inputjs-container';
  e.className = 'inputjs-container';
  e.style = {
    position: 'relative',
    boxSizing: 'border-box'
  };
  return e;
}

function _iconRenderer() {
  var e = {};
  e.id = 'inputjs-container__icon';
  e.className = 'inputjs-container__icon';
  e.style = {
    'font-size': '30px',
    boxSizing: 'border-box',
    opacity: '0.5'
  };
  return e;
}

function _inputRenderer() {
  var e = {};
  e.id = 'inputjs-container__input';
  e.className = 'inputjs-container__input';
  e.name = 'search';
  e.placeholder = 'Input Search Value';
  e.style = {
    'font-size': '16px',
    'font-family': 'roboto',
    padding: '10px',
    boxSizing: 'border-box',
    width: '100%',
    border: 'solid 1px rgba(0,0,0,.125)',
    borderRadius: '3px',
    textIndent: '30px',
    backgroundColor: 'rgba(241,243,244,1)'
  };
  return e;
}

function _applyRender(element, properties) {
  var arr = Object.keys(properties);

  for (var i = 0; i < arr.length; i++) {
    var prop = arr[i];

    if (_typeof(properties[prop]) === 'object' && properties[prop] !== null) {
      Object.assign(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }

  return element;
}

function _addInput(container, options) {
  var cnf = {
    renderer: options.renderer || _inputRenderer,
    onClick: options.onClick || _onClickDefault,
    onFocusOut: options.onFocusOut || _onFocusOutDefault,
    onHover: options.onHover || _onHoverDefault,
    onKeyUp: options.onKeyUp || _onKeyUpDefault
  };

  var e = _addElement(container, 'input');

  var render = cnf.renderer(e);

  _applyRender(e, render); // add events


  e.onclick = function onclick() {
    return cnf.onClick(e, _onClickDefault);
  };

  e.addEventListener('focusout', function onfocusout() {
    return cnf.onFocusOut(e, _onFocusOutDefault);
  });

  e.onmouseover = function onmouseover() {
    return cnf.onHover(e, _onHoverDefault);
  };

  e.onkeyup = function onkeyup() {
    clearTimeout(timeoutVariable); // add to javascript function que to prevent blocking of front end of
    // application

    timeoutVariable = setTimeout(function cb() {
      cnf.onKeyUp(e, _onKeyUpDefault);
    }, 500);
  };

  return e;
}

function _addInputIcon(container, options) {
  var cnf = {
    renderer: options.icon.renderer || _iconRenderer,
    innerHTML: options.icon.innerHTML || '&#8981;'
  };

  var eContainer = _addElement(container, 'div');

  eContainer.style.display = 'inline-block';
  eContainer.style.boxSizing = 'border-box';
  eContainer.style.position = 'absolute';
  eContainer.style.top = '1.5px';
  eContainer.style.left = '15px';

  var e = _addElement(eContainer, 'div');

  e.innerHTML = cnf.innerHTML;
  var render = cnf.renderer(e);

  _applyRender(e, render);

  return e;
}

function _addInputContainer(frag) {
  var e = _addElement(frag, 'div');

  var render = _containerRenderer();

  _applyRender(e, render);

  return e;
}
/* ============================== Public Methods ============================ */


function init(options) {
  // Create DOM fragment
  var frag = document.createDocumentFragment(); // add input container

  var container = _addInputContainer(frag, options); // add input icon


  _addInputIcon(container, options); // add input


  _addInput(container, options); // Append fragment to DOM


  var div = document.getElementById(options.div);
  div.appendChild(frag);
}
/* =========================== Export Public APIs =========================== */


module.exports = {
  init: init
};

/***/ })
/******/ ]);
//# sourceMappingURL=inputator.js.map