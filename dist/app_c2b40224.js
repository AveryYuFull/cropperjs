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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return IS_BROWSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return WINDOW; });
/* unused harmony export IS_TOUCH_DEVICE */
/* unused harmony export HAS_POINTER_EVENT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACTION_CROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ACTION_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ACTION_ZOOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ACTION_EAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ACTION_WEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ACTION_SOUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ACTION_NORTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ACTION_NORTH_EAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ACTION_NORTH_WEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ACTION_SOUTH_EAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ACTION_SOUTH_WEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CLASS_CROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return CLASS_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return CLASS_HIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CLASS_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return CLASS_INVISIBLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return CLASS_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return CLASS_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return DATA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return DATA_PREVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return DRAG_MODE_CROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return DRAG_MODE_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return DRAG_MODE_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return EVENT_CROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return EVENT_CROP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return EVENT_CROP_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return EVENT_CROP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return EVENT_DBLCLICK; });
/* unused harmony export EVENT_TOUCH_START */
/* unused harmony export EVENT_TOUCH_MOVE */
/* unused harmony export EVENT_TOUCH_END */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return EVENT_POINTER_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return EVENT_POINTER_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return EVENT_POINTER_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return EVENT_READY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return EVENT_RESIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return EVENT_WHEEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return EVENT_ZOOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return MIME_TYPE_JPEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return REGEXP_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return REGEXP_DATA_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return REGEXP_DATA_URL_JPEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return REGEXP_TAG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return MIN_CONTAINER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MIN_CONTAINER_HEIGHT; });
var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER ? 'ontouchstart' in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
var NAMESPACE = 'cropper';

// Actions
var ACTION_ALL = 'all';
var ACTION_CROP = 'crop';
var ACTION_MOVE = 'move';
var ACTION_ZOOM = 'zoom';
var ACTION_EAST = 'e';
var ACTION_WEST = 'w';
var ACTION_SOUTH = 's';
var ACTION_NORTH = 'n';
var ACTION_NORTH_EAST = 'ne';
var ACTION_NORTH_WEST = 'nw';
var ACTION_SOUTH_EAST = 'se';
var ACTION_SOUTH_WEST = 'sw';

// Classes
var CLASS_CROP = NAMESPACE + '-crop';
var CLASS_DISABLED = NAMESPACE + '-disabled';
var CLASS_HIDDEN = NAMESPACE + '-hidden';
var CLASS_HIDE = NAMESPACE + '-hide';
var CLASS_INVISIBLE = NAMESPACE + '-invisible';
var CLASS_MODAL = NAMESPACE + '-modal';
var CLASS_MOVE = NAMESPACE + '-move';

// Data keys
var DATA_ACTION = NAMESPACE + 'Action';
var DATA_PREVIEW = NAMESPACE + 'Preview';

// Drag modes
var DRAG_MODE_CROP = 'crop';
var DRAG_MODE_MOVE = 'move';
var DRAG_MODE_NONE = 'none';

// Events
var EVENT_CROP = 'crop';
var EVENT_CROP_END = 'cropend';
var EVENT_CROP_MOVE = 'cropmove';
var EVENT_CROP_START = 'cropstart';
var EVENT_DBLCLICK = 'dblclick';
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
var EVENT_READY = 'ready';
var EVENT_RESIZE = 'resize';
var EVENT_WHEEL = 'wheel';
var EVENT_ZOOM = 'zoom';

// Mime types
var MIME_TYPE_JPEG = 'image/jpeg';

// RegExps
var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
var REGEXP_TAG_NAME = /^img|canvas$/i;

// Misc
// Inspired by the default width and height of a canvas element.
var MIN_CONTAINER_WIDTH = 200;
var MIN_CONTAINER_HEIGHT = 100;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isNaN */
/* harmony export (immutable) */ __webpack_exports__["u"] = isNumber;
/* unused harmony export isPositiveNumber */
/* harmony export (immutable) */ __webpack_exports__["w"] = isUndefined;
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["v"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["t"] = isFunction;
/* unused harmony export toArray */
/* harmony export (immutable) */ __webpack_exports__["h"] = forEach;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return assign; });
/* harmony export (immutable) */ __webpack_exports__["x"] = normalizeDecimalNumber;
/* harmony export (immutable) */ __webpack_exports__["E"] = setStyle;
/* harmony export (immutable) */ __webpack_exports__["r"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["z"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["F"] = toggleClass;
/* unused harmony export toParamCase */
/* harmony export (immutable) */ __webpack_exports__["j"] = getData;
/* harmony export (immutable) */ __webpack_exports__["D"] = setData;
/* harmony export (immutable) */ __webpack_exports__["A"] = removeData;
/* harmony export (immutable) */ __webpack_exports__["B"] = removeListener;
/* harmony export (immutable) */ __webpack_exports__["b"] = addListener;
/* harmony export (immutable) */ __webpack_exports__["g"] = dispatchEvent;
/* harmony export (immutable) */ __webpack_exports__["l"] = getOffset;
/* harmony export (immutable) */ __webpack_exports__["s"] = isCrossOriginURL;
/* harmony export (immutable) */ __webpack_exports__["c"] = addTimestamp;
/* harmony export (immutable) */ __webpack_exports__["q"] = getTransforms;
/* harmony export (immutable) */ __webpack_exports__["k"] = getMaxZoomRatio;
/* harmony export (immutable) */ __webpack_exports__["m"] = getPointer;
/* harmony export (immutable) */ __webpack_exports__["n"] = getPointersCenter;
/* harmony export (immutable) */ __webpack_exports__["i"] = getAdjustedSizes;
/* harmony export (immutable) */ __webpack_exports__["o"] = getRotatedSizes;
/* harmony export (immutable) */ __webpack_exports__["p"] = getSourceCanvas;
/* unused harmony export getStringFromCharCode */
/* harmony export (immutable) */ __webpack_exports__["f"] = dataURLToArrayBuffer;
/* harmony export (immutable) */ __webpack_exports__["d"] = arrayBufferToDataURL;
/* harmony export (immutable) */ __webpack_exports__["C"] = resetAndGetOrientation;
/* harmony export (immutable) */ __webpack_exports__["y"] = parseOrientation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



/**
 * Check if the given value is not a number.
 */
var isNaN = Number.isNaN || __WEBPACK_IMPORTED_MODULE_0__constants__["T" /* WINDOW */].isNaN;

/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Check if the given value is a positive number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
 */
var isPositiveNumber = function isPositiveNumber(value) {
  return value > 0 && value < Infinity;
};

/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */
function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */

function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;


    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (error) {
    return false;
  }
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
function isFunction(value) {
  return typeof value === 'function';
}

var slice = Array.prototype.slice;

/**
 * Convert array-like or iterable object to an array.
 * @param {*} value - The value to convert.
 * @returns {Array} Returns a new array.
 */

function toArray(value) {
  return Array.from ? Array.from(value) : slice.call(value);
}

/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @returns {*} The original data.
 */
function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
        toArray(data).forEach(function (value, key) {
          callback.call(data, value, key, data);
        });
      } else if (isObject(data)) {
      Object.keys(data).forEach(function (key) {
        callback.call(data, data[key], key, data);
      });
    }
  }

  return data;
}

/**
 * Extend the given object.
 * @param {*} target - The target object to extend.
 * @param {*} args - The rest objects for merging to the target object.
 * @returns {Object} The extended object.
 */
var assign = Object.assign || function assign(target) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (isObject(target) && args.length > 0) {
    args.forEach(function (arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function (key) {
          target[key] = arg[key];
        });
      }
    });
  }

  return target;
};

var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;

/**
 * Normalize decimal number.
 * Check out {@link http://0.30000000000000004.com/}
 * @param {number} value - The value to normalize.
 * @param {number} [times=100000000000] - The times for normalizing.
 * @returns {number} Returns the normalized number.
 */
function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;

  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}

var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;

/**
 * Apply styles to the given element.
 * @param {Element} element - The target element.
 * @param {Object} styles - The styles for applying.
 */
function setStyle(element, styles) {
  var style = element.style;


  forEach(styles, function (value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value = value + 'px';
    }

    style[property] = value;
  });
}

/**
 * Check if the given element has a special class.
 * @param {Element} element - The element to check.
 * @param {string} value - The class to search.
 * @returns {boolean} Returns `true` if the special class was found.
 */
function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}

/**
 * Add classes to the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be added.
 */
function addClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      addClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.add(value);
    return;
  }

  var className = element.className.trim();

  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = className + ' ' + value;
  }
}

/**
 * Remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be removed.
 */
function removeClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      removeClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.remove(value);
    return;
  }

  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, '');
  }
}

/**
 * Add or remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be toggled.
 * @param {boolean} added - Add only.
 */
function toggleClass(element, value, added) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      toggleClass(elem, value, added);
    });
    return;
  }

  // IE10-11 doesn't support the second parameter of `classList.toggle`
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}

var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

/**
 * Transform the given string from camelCase to kebab-case
 * @param {string} value - The value to transform.
 * @returns {string} The transformed value.
 */
function toParamCase(value) {
  return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
}

/**
 * Get data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to get.
 * @returns {string} The data value.
 */
function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }

  if (element.dataset) {
    return element.dataset[name];
  }

  return element.getAttribute('data-' + toParamCase(name));
}

/**
 * Set data to the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to set.
 * @param {string} data - The data value.
 */
function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute('data-' + toParamCase(name), data);
  }
}

/**
 * Remove data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to remove.
 */
function removeData(element, name) {
  if (isObject(element[name])) {
    try {
      delete element[name];
    } catch (error) {
      element[name] = undefined;
    }
  } else if (element.dataset) {
    // #128 Safari not allows to delete dataset property
    try {
      delete element.dataset[name];
    } catch (error) {
      element.dataset[name] = undefined;
    }
  } else {
    element.removeAttribute('data-' + toParamCase(name));
  }
}

var REGEXP_SPACES = /\s\s*/;
var onceSupported = function () {
  var supported = false;

  if (__WEBPACK_IMPORTED_MODULE_0__constants__["K" /* IS_BROWSER */]) {
    var once = false;
    var listener = function listener() {};
    var options = Object.defineProperty({}, 'once', {
      get: function get() {
        supported = true;
        return once;
      },


      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });

    __WEBPACK_IMPORTED_MODULE_0__constants__["T" /* WINDOW */].addEventListener('test', listener, options);
    __WEBPACK_IMPORTED_MODULE_0__constants__["T" /* WINDOW */].removeEventListener('test', listener, options);
  }

  return supported;
}();

/**
 * Remove event listener from the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */
function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var handler = listener;

  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (!onceSupported) {
      var listeners = element.listeners;


      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];

        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }

        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }

    element.removeEventListener(event, handler, options);
  });
}

/**
 * Add event listener to the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */
function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _handler = listener;

  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners,
          listeners = _element$listeners === undefined ? {} : _element$listeners;


      _handler = function handler() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        listener.apply(element, args);
      };

      if (!listeners[event]) {
        listeners[event] = {};
      }

      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }

      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }

    element.addEventListener(event, _handler, options);
  });
}

/**
 * Dispatch event on the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Object} data - The additional event data.
 * @returns {boolean} Indicate if the event is default prevented or not.
 */
function dispatchEvent(element, type, data) {
  var event = void 0;

  // Event and CustomEvent on IE9-11 are global objects, not constructors
  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, true, true, data);
  }

  return element.dispatchEvent(event);
}

/**
 * Get the offset base on the document.
 * @param {Element} element - The target element.
 * @returns {Object} The offset data.
 */
function getOffset(element) {
  var box = element.getBoundingClientRect();

  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}

var location = __WEBPACK_IMPORTED_MODULE_0__constants__["T" /* WINDOW */].location;

var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

/**
 * Check if the given URL is a cross origin URL.
 * @param {string} url - The target URL.
 * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
 */
function isCrossOriginURL(url) {
  var parts = url.match(REGEXP_ORIGINS);

  return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}

/**
 * Add timestamp to the given URL.
 * @param {string} url - The target URL.
 * @returns {string} The result URL.
 */
function addTimestamp(url) {
  var timestamp = 'timestamp=' + new Date().getTime();

  return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
}

/**
 * Get transforms base on the given object.
 * @param {Object} obj - The target object.
 * @returns {string} A string contains transform values.
 */
function getTransforms(_ref) {
  var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;

  var values = [];

  if (isNumber(translateX) && translateX !== 0) {
    values.push('translateX(' + translateX + 'px)');
  }

  if (isNumber(translateY) && translateY !== 0) {
    values.push('translateY(' + translateY + 'px)');
  }

  // Rotate should come first before scale to match orientation transform
  if (isNumber(rotate) && rotate !== 0) {
    values.push('rotate(' + rotate + 'deg)');
  }

  if (isNumber(scaleX) && scaleX !== 1) {
    values.push('scaleX(' + scaleX + ')');
  }

  if (isNumber(scaleY) && scaleY !== 1) {
    values.push('scaleY(' + scaleY + ')');
  }

  var transform = values.length ? values.join(' ') : 'none';

  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform: transform
  };
}

/**
 * Get the max ratio of a group of pointers.
 * @param {string} pointers - The target pointers.
 * @returns {number} The result ratio.
 */
function getMaxZoomRatio(pointers) {
  var pointers2 = assign({}, pointers);
  var ratios = [];

  forEach(pointers, function (pointer, pointerId) {
    delete pointers2[pointerId];

    forEach(pointers2, function (pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;

      ratios.push(ratio);
    });
  });

  ratios.sort(function (a, b) {
    return Math.abs(a) < Math.abs(b);
  });

  return ratios[0];
}

/**
 * Get a pointer from an event object.
 * @param {Object} event - The target event object.
 * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
 * @returns {Object} The result pointer contains start and/or end point coordinates.
 */
function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX,
      pageY = _ref2.pageY;

  var end = {
    endX: pageX,
    endY: pageY
  };

  return endOnly ? end : assign({
    startX: pageX,
    startY: pageY
  }, end);
}

/**
 * Get the center point coordinate of a group of pointers.
 * @param {Object} pointers - The target pointers.
 * @returns {Object} The center point coordinate.
 */
function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;

  forEach(pointers, function (_ref3) {
    var startX = _ref3.startX,
        startY = _ref3.startY;

    pageX += startX;
    pageY += startY;
    count += 1;
  });

  pageX /= count;
  pageY /= count;

  return {
    pageX: pageX,
    pageY: pageY
  };
}

/**
 * Get the max sizes in a rectangle under the given aspect ratio.
 * @param {Object} data - The original sizes.
 * @param {string} [type='contain'] - The adjust type.
 * @returns {Object} The result sizes.
 */
function getAdjustedSizes(_ref4) // or 'cover'
{
  var aspectRatio = _ref4.aspectRatio,
      height = _ref4.height,
      width = _ref4.width;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';

  var isValidWidth = isPositiveNumber(width);
  var isValidHeight = isPositiveNumber(height);

  if (isValidWidth && isValidHeight) {
    var adjustedWidth = height * aspectRatio;

    if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }
  } else if (isValidWidth) {
    height = width / aspectRatio;
  } else if (isValidHeight) {
    width = height * aspectRatio;
  }

  return {
    width: width,
    height: height
  };
}

/**
 * Get the new sizes of a rectangle after rotated.
 * @param {Object} data - The original sizes.
 * @returns {Object} The result sizes.
 */
function getRotatedSizes(_ref5) {
  var width = _ref5.width,
      height = _ref5.height,
      degree = _ref5.degree;

  degree = Math.abs(degree) % 180;

  if (degree === 90) {
    return {
      width: height,
      height: width
    };
  }

  var arc = degree % 90 * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var newWidth = width * cosArc + height * sinArc;
  var newHeight = width * sinArc + height * cosArc;

  return degree > 90 ? {
    width: newHeight,
    height: newWidth
  } : {
    width: newWidth,
    height: newHeight
  };
}

/**
 * Get a canvas which drew the given image.
 * @param {HTMLImageElement} image - The image for drawing.
 * @param {Object} imageData - The image data.
 * @param {Object} canvasData - The canvas data.
 * @param {Object} options - The options.
 * @returns {HTMLCanvasElement} The result canvas.
 */
function getSourceCanvas(image, _ref6, _ref7, _ref8) {
  var imageAspectRatio = _ref6.aspectRatio,
      imageNaturalWidth = _ref6.naturalWidth,
      imageNaturalHeight = _ref6.naturalHeight,
      _ref6$rotate = _ref6.rotate,
      rotate = _ref6$rotate === undefined ? 0 : _ref6$rotate,
      _ref6$scaleX = _ref6.scaleX,
      scaleX = _ref6$scaleX === undefined ? 1 : _ref6$scaleX,
      _ref6$scaleY = _ref6.scaleY,
      scaleY = _ref6$scaleY === undefined ? 1 : _ref6$scaleY;
  var aspectRatio = _ref7.aspectRatio,
      naturalWidth = _ref7.naturalWidth,
      naturalHeight = _ref7.naturalHeight;
  var _ref8$fillColor = _ref8.fillColor,
      fillColor = _ref8$fillColor === undefined ? 'transparent' : _ref8$fillColor,
      _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
      imageSmoothingEnabled = _ref8$imageSmoothingE === undefined ? true : _ref8$imageSmoothingE,
      _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
      imageSmoothingQuality = _ref8$imageSmoothingQ === undefined ? 'low' : _ref8$imageSmoothingQ,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === undefined ? Infinity : _ref8$maxWidth,
      _ref8$maxHeight = _ref8.maxHeight,
      maxHeight = _ref8$maxHeight === undefined ? Infinity : _ref8$maxHeight,
      _ref8$minWidth = _ref8.minWidth,
      minWidth = _ref8$minWidth === undefined ? 0 : _ref8$minWidth,
      _ref8$minHeight = _ref8.minHeight,
      minHeight = _ref8$minHeight === undefined ? 0 : _ref8$minHeight;

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var maxSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var minSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
  var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));

  // Note: should always use image's natural sizes for drawing as
  // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90
  var destMaxSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var destMinSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
  var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
  var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];

  canvas.width = normalizeDecimalNumber(width);
  canvas.height = normalizeDecimalNumber(height);
  context.fillStyle = fillColor;
  context.fillRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(rotate * Math.PI / 180);
  context.scale(scaleX, scaleY);
  context.imageSmoothingEnabled = imageSmoothingEnabled;
  context.imageSmoothingQuality = imageSmoothingQuality;
  context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
    return Math.floor(normalizeDecimalNumber(param));
  }))));
  context.restore();
  return canvas;
}

var fromCharCode = String.fromCharCode;

/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */

function getStringFromCharCode(dataView, start, length) {
  var str = '';

  length += start;

  for (var i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}

var REGEXP_DATA_URL_HEAD = /^data:.*,/;

/**
 * Transform Data URL to array buffer.
 * @param {string} dataURL - The Data URL to transform.
 * @returns {ArrayBuffer} The result array buffer.
 */
function dataURLToArrayBuffer(dataURL) {
  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
  var binary = atob(base64);
  var arrayBuffer = new ArrayBuffer(binary.length);
  var uint8 = new Uint8Array(arrayBuffer);

  forEach(uint8, function (value, i) {
    uint8[i] = binary.charCodeAt(i);
  });

  return arrayBuffer;
}

/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */
function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var chunks = [];

  // Chunk Typed Array for better performance (#435)
  var chunkSize = 8192;
  var uint8 = new Uint8Array(arrayBuffer);

  while (uint8.length > 0) {
    // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
    // eslint-disable-next-line prefer-spread
    chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
    uint8 = uint8.subarray(chunkSize);
  }

  return 'data:' + mimeType + ';base64,' + btoa(chunks.join(''));
}

/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */
function resetAndGetOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation = void 0;

  // Ignores range error when the image does not have correct Exif information
  try {
    var littleEndian = void 0;
    var app1Start = void 0;
    var ifdStart = void 0;

    // Only handle JPEG image (start by 0xFFD8)
    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
      var length = dataView.byteLength;
      var offset = 2;

      while (offset + 1 < length) {
        if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
          app1Start = offset;
          break;
        }

        offset += 1;
      }
    }

    if (app1Start) {
      var exifIDCode = app1Start + 4;
      var tiffOffset = app1Start + 10;

      if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
        var endianness = dataView.getUint16(tiffOffset);

        littleEndian = endianness === 0x4949;

        if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
      }
    }

    if (ifdStart) {
      var _length = dataView.getUint16(ifdStart, littleEndian);
      var _offset = void 0;
      var i = void 0;

      for (i = 0; i < _length; i += 1) {
        _offset = ifdStart + i * 12 + 2;

        if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
            // 8 is the offset of the current tag's value
            _offset += 8;

            // Get the original orientation value
            orientation = dataView.getUint16(_offset, littleEndian);

            // Override the orientation with its default value
            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
      }
    }
  } catch (error) {
    orientation = 1;
  }

  return orientation;
}

/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */
function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;

  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;

    // Rotate left 180°
    case 3:
      rotate = -180;
      break;

    // Flip vertical
    case 4:
      scaleY = -1;
      break;

    // Flip vertical and rotate right 90°
    case 5:
      rotate = 90;
      scaleY = -1;
      break;

    // Rotate right 90°
    case 6:
      rotate = 90;
      break;

    // Flip horizontal and rotate right 90°
    case 7:
      rotate = 90;
      scaleX = -1;
      break;

    // Rotate left 90°
    case 8:
      rotate = -90;
      break;

    default:
  }

  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_cropper__ = __webpack_require__(3);


// export default Cropper;

window.onload = function () {
  'use strict';

  // var Cropper = window.Cropper;

  var URL = window.URL || window.webkitURL;
  var container = document.querySelector('.img-container');
  var image = container.getElementsByTagName('img').item(0);
  var options = {
    aspectRatio: 16 / 9,
    preview: '.img-preview',
    ready: function ready(e) {
      console.log(e.type);
    },
    cropstart: function cropstart(e) {
      console.log(e.type, e.detail.action);
    },
    cropmove: function cropmove(e) {
      console.log(e.type, e.detail.action);
    },
    cropend: function cropend(e) {
      console.log(e.type, e.detail.action);
    },
    crop: function crop(e) {
      var data = e.detail;

      console.log(e.type);
      dataX.value = Math.round(data.x);
      dataY.value = Math.round(data.y);
      dataHeight.value = Math.round(data.height);
      dataWidth.value = Math.round(data.width);
      dataRotate.value = typeof data.rotate !== 'undefined' ? data.rotate : '';
      dataScaleX.value = typeof data.scaleX !== 'undefined' ? data.scaleX : '';
      dataScaleY.value = typeof data.scaleY !== 'undefined' ? data.scaleY : '';
    },
    zoom: function zoom(e) {
      console.log(e.type, e.detail.ratio);
    }
  };
  var cropper = new __WEBPACK_IMPORTED_MODULE_0__js_cropper__["a" /* default */](image, options);
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__template__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handlers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__methods__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }












var AnotherCropper = __WEBPACK_IMPORTED_MODULE_8__constants__["T" /* WINDOW */].Cropper;

var Cropper = function () {
  /**
   * Create a new Cropper.
   * @param {Element} element - The target element for cropping.
   * @param {Object} [options={}] - The configuration options.
   */
  function Cropper(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cropper);

    if (!element || !__WEBPACK_IMPORTED_MODULE_8__constants__["S" /* REGEXP_TAG_NAME */].test(element.tagName)) {
      throw new Error('The first argument is required and must be an <img> or <canvas> element.');
    }

    this.element = element;
    this.options = Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["e" /* assign */])({}, __WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["v" /* isPlainObject */])(options) && options);
    this.cropped = false;
    this.disabled = false;
    this.pointers = {};
    this.ready = false;
    this.reloading = false;
    this.replaced = false;
    this.sized = false;
    this.sizing = false;
    this.init();
  }

  _createClass(Cropper, [{
    key: 'init',
    value: function init() {
      var element = this.element;

      var tagName = element.tagName.toLowerCase();
      var url = void 0;

      if (element[__WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */]]) {
        return;
      }

      element[__WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */]] = this;

      if (tagName === 'img') {
        this.isImg = true;

        // e.g.: "img/picture.jpg"
        url = element.getAttribute('src') || '';
        this.originalUrl = url;

        // Stop when it's a blank image
        if (!url) {
          return;
        }

        // e.g.: "http://example.com/img/picture.jpg"
        url = element.src;
      } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
        url = element.toDataURL();
      }

      this.load(url);
    }
  }, {
    key: 'load',
    value: function load(url) {
      var _this = this;

      if (!url) {
        return;
      }

      this.url = url;
      this.imageData = {};

      var element = this.element,
          options = this.options;


      if (!options.rotatable && !options.scalable) {
        options.checkOrientation = false;
      }

      // Only IE10+ supports Typed Arrays
      if (!options.checkOrientation || !window.ArrayBuffer) {
        this.clone();
        return;
      }

      // Detect the mime type of the image directly if it is a Data URL
      if (__WEBPACK_IMPORTED_MODULE_8__constants__["Q" /* REGEXP_DATA_URL */].test(url)) {
        // Read ArrayBuffer from Data URL of JPEG images directly for better performance
        if (__WEBPACK_IMPORTED_MODULE_8__constants__["R" /* REGEXP_DATA_URL_JPEG */].test(url)) {
          this.read(Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["f" /* dataURLToArrayBuffer */])(url));
        } else {
          // Only a JPEG image may contains Exif Orientation information,
          // the rest types of Data URLs are not necessary to check orientation at all.
          this.clone();
        }

        return;
      }

      // 1. Detect the mime type of the image by a XMLHttpRequest.
      // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.
      var xhr = new XMLHttpRequest();
      var clone = this.clone.bind(this);

      this.reloading = true;
      this.xhr = xhr;

      // 1. Cross origin requests are only supported for protocol schemes:
      // http, https, data, chrome, chrome-extension.
      // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
      // in some browsers as IE11 and Safari.
      xhr.onabort = clone;
      xhr.onerror = clone;
      xhr.ontimeout = clone;

      xhr.onprogress = function () {
        // Abort the request directly if it not a JPEG image for better performance
        if (xhr.getResponseHeader('content-type') !== __WEBPACK_IMPORTED_MODULE_8__constants__["L" /* MIME_TYPE_JPEG */]) {
          xhr.abort();
        }
      };

      xhr.onload = function () {
        _this.read(xhr.response);
      };

      xhr.onloadend = function () {
        _this.reloading = false;
        _this.xhr = null;
      };

      // Bust cache when there is a "crossOrigin" property to avoid browser cache error
      if (options.checkCrossOrigin && Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["s" /* isCrossOriginURL */])(url) && element.crossOrigin) {
        url = Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["c" /* addTimestamp */])(url);
      }

      xhr.open('GET', url);
      xhr.responseType = 'arraybuffer';
      xhr.withCredentials = element.crossOrigin === 'use-credentials';
      xhr.send();
    }
  }, {
    key: 'read',
    value: function read(arrayBuffer) {
      var options = this.options,
          imageData = this.imageData;

      // Reset the orientation value to its default value 1
      // as some iOS browsers will render image with its orientation

      var orientation = Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["C" /* resetAndGetOrientation */])(arrayBuffer);
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      if (orientation > 1) {
        // Generate a new URL which has the default orientation value
        this.url = Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["d" /* arrayBufferToDataURL */])(arrayBuffer, __WEBPACK_IMPORTED_MODULE_8__constants__["L" /* MIME_TYPE_JPEG */]);

        var _parseOrientation = Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["y" /* parseOrientation */])(orientation);

        rotate = _parseOrientation.rotate;
        scaleX = _parseOrientation.scaleX;
        scaleY = _parseOrientation.scaleY;
      }

      if (options.rotatable) {
        imageData.rotate = rotate;
      }

      if (options.scalable) {
        imageData.scaleX = scaleX;
        imageData.scaleY = scaleY;
      }

      this.clone();
    }
  }, {
    key: 'clone',
    value: function clone() {
      var element = this.element,
          url = this.url;
      var crossOrigin = element.crossOrigin;

      var crossOriginUrl = url;

      if (this.options.checkCrossOrigin && Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["s" /* isCrossOriginURL */])(url)) {
        if (!crossOrigin) {
          crossOrigin = 'anonymous';
        }

        // Bust cache when there is not a "crossOrigin" property (#519)
        crossOriginUrl = Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["c" /* addTimestamp */])(url);
      }

      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;

      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = crossOriginUrl || url;
      image.alt = element.alt || 'The image to crop';
      this.image = image;
      image.onload = this.start.bind(this);
      image.onerror = this.stop.bind(this);
      Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(image, __WEBPACK_IMPORTED_MODULE_8__constants__["p" /* CLASS_HIDE */]);
      element.parentNode.insertBefore(image, element.nextSibling);
    }
  }, {
    key: 'start',
    value: function start() {
      var _this2 = this;

      var image = this.image;


      image.onload = null;
      image.onerror = null;
      this.sizing = true;

      // Match all browsers that use WebKit as the layout engine in iOS devices,
      // such as Safari for iOS, Chrome for iOS, and in-app browsers.
      var isIOSWebKit = __WEBPACK_IMPORTED_MODULE_8__constants__["T" /* WINDOW */].navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(__WEBPACK_IMPORTED_MODULE_8__constants__["T" /* WINDOW */].navigator.userAgent);
      var done = function done(naturalWidth, naturalHeight) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["e" /* assign */])(_this2.imageData, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });
        _this2.sizing = false;
        _this2.sized = true;
        _this2.build();
      };

      // Most modern browsers (excepts iOS WebKit)
      if (image.naturalWidth && !isIOSWebKit) {
        done(image.naturalWidth, image.naturalHeight);
        return;
      }

      var sizingImage = document.createElement('img');
      var body = document.body || document.documentElement;

      this.sizingImage = sizingImage;

      sizingImage.onload = function () {
        done(sizingImage.width, sizingImage.height);

        if (!isIOSWebKit) {
          body.removeChild(sizingImage);
        }
      };

      sizingImage.src = image.src;

      // iOS WebKit will convert the image automatically
      // with its orientation once append it into DOM (#279)
      if (!isIOSWebKit) {
        sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
        body.appendChild(sizingImage);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var image = this.image;


      image.onload = null;
      image.onerror = null;
      image.parentNode.removeChild(image);
      this.image = null;
    }
  }, {
    key: 'build',
    value: function build() {
      if (!this.sized || this.ready) {
        return;
      }

      var element = this.element,
          options = this.options,
          image = this.image;

      // Create cropper elements

      var container = element.parentNode;
      var template = document.createElement('div');

      template.innerHTML = __WEBPACK_IMPORTED_MODULE_1__template__["a" /* default */];

      var cropper = template.querySelector('.' + __WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-container');
      var canvas = cropper.querySelector('.' + __WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-canvas');
      var dragBox = cropper.querySelector('.' + __WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-drag-box');
      var cropBox = cropper.querySelector('.' + __WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-crop-box');
      var face = cropBox.querySelector('.' + __WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-face');

      this.container = container;
      this.cropper = cropper;
      this.canvas = canvas;
      this.dragBox = dragBox;
      this.cropBox = cropBox;
      this.viewBox = cropper.querySelector('.' + __WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-view-box');
      this.face = face;

      canvas.appendChild(image);

      // Hide the original image
      Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(element, __WEBPACK_IMPORTED_MODULE_8__constants__["o" /* CLASS_HIDDEN */]);

      // Inserts the cropper after to the current image
      container.insertBefore(cropper, element.nextSibling);

      // Show the image if is hidden
      if (!this.isImg) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["z" /* removeClass */])(image, __WEBPACK_IMPORTED_MODULE_8__constants__["p" /* CLASS_HIDE */]);
      }

      this.initPreview();
      this.bind();

      options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;

      Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(cropBox, __WEBPACK_IMPORTED_MODULE_8__constants__["o" /* CLASS_HIDDEN */]);

      if (!options.guides) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(cropBox.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-dashed'), __WEBPACK_IMPORTED_MODULE_8__constants__["o" /* CLASS_HIDDEN */]);
      }

      if (!options.center) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(cropBox.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-center'), __WEBPACK_IMPORTED_MODULE_8__constants__["o" /* CLASS_HIDDEN */]);
      }

      if (options.background) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(cropper, __WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-bg');
      }

      if (!options.highlight) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(face, __WEBPACK_IMPORTED_MODULE_8__constants__["q" /* CLASS_INVISIBLE */]);
      }

      if (options.cropBoxMovable) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(face, __WEBPACK_IMPORTED_MODULE_8__constants__["s" /* CLASS_MOVE */]);
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["D" /* setData */])(face, __WEBPACK_IMPORTED_MODULE_8__constants__["t" /* DATA_ACTION */], __WEBPACK_IMPORTED_MODULE_8__constants__["a" /* ACTION_ALL */]);
      }

      if (!options.cropBoxResizable) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(cropBox.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-line'), __WEBPACK_IMPORTED_MODULE_8__constants__["o" /* CLASS_HIDDEN */]);
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["a" /* addClass */])(cropBox.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_8__constants__["O" /* NAMESPACE */] + '-point'), __WEBPACK_IMPORTED_MODULE_8__constants__["o" /* CLASS_HIDDEN */]);
      }

      this.render();
      this.ready = true;
      this.setDragMode(options.dragMode);

      if (options.autoCrop) {
        this.crop();
      }

      this.setData(options.data);

      if (Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["t" /* isFunction */])(options.ready)) {
        Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["b" /* addListener */])(element, __WEBPACK_IMPORTED_MODULE_8__constants__["G" /* EVENT_READY */], options.ready, {
          once: true
        });
      }

      Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["g" /* dispatchEvent */])(element, __WEBPACK_IMPORTED_MODULE_8__constants__["G" /* EVENT_READY */]);
    }
  }, {
    key: 'unbuild',
    value: function unbuild() {
      if (!this.ready) {
        return;
      }

      this.ready = false;
      this.unbind();
      this.resetPreview();
      this.cropper.parentNode.removeChild(this.cropper);
      Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["z" /* removeClass */])(this.element, __WEBPACK_IMPORTED_MODULE_8__constants__["o" /* CLASS_HIDDEN */]);
    }
  }, {
    key: 'uncreate',
    value: function uncreate() {
      if (this.ready) {
        this.unbuild();
        this.ready = false;
        this.cropped = false;
      } else if (this.sizing) {
        this.sizingImage.onload = null;
        this.sizing = false;
        this.sized = false;
      } else if (this.reloading) {
        this.xhr.onabort = null;
        this.xhr.abort();
      } else if (this.image) {
        this.stop();
      }
    }

    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */

  }], [{
    key: 'noConflict',
    value: function noConflict() {
      window.Cropper = AnotherCropper;
      return Cropper;
    }

    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */

  }, {
    key: 'setDefaults',
    value: function setDefaults(options) {
      Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["e" /* assign */])(__WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["v" /* isPlainObject */])(options) && options);
    }
  }]);

  return Cropper;
}();

Object(__WEBPACK_IMPORTED_MODULE_9__utilities__["e" /* assign */])(Cropper.prototype, __WEBPACK_IMPORTED_MODULE_2__render__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__preview__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__events__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__handlers__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__change__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__methods__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Cropper);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
  // Define the view mode of the cropper
  viewMode: 0, // 0, 1, 2, 3

  // Define the dragging mode of the cropper
  dragMode: __WEBPACK_IMPORTED_MODULE_0__constants__["v" /* DRAG_MODE_CROP */], // 'crop', 'move' or 'none'

  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,

  // Define the aspect ratio of the crop box
  aspectRatio: NaN,

  // An object with the previous cropping result data
  data: null,

  // A selector for adding extra containers to preview
  preview: '',

  // Re-render the cropper when resize the window
  responsive: true,

  // Restore the cropped area after resize the window
  restore: true,

  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,

  // Check the current image's Exif Orientation information
  checkOrientation: true,

  // Show the black modal
  modal: true,

  // Show the dashed lines for guiding
  guides: true,

  // Show the center indicator for guiding
  center: true,

  // Show the white modal to highlight the crop box
  highlight: true,

  // Show the grid background
  background: true,

  // Enable to crop the image automatically when initialize
  autoCrop: true,

  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,

  // Enable to move the image
  movable: true,

  // Enable to rotate the image
  rotatable: true,

  // Enable to scale the image
  scalable: true,

  // Enable to zoom the image
  zoomable: true,

  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,

  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,

  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,

  // Enable to move the crop box
  cropBoxMovable: true,

  // Enable to resize the crop box
  cropBoxResizable: true,

  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,

  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: 200,
  minContainerHeight: 100,

  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>');

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render() {
    this.initContainer();
    this.initCanvas();
    this.initCropBox();
    this.renderCanvas();

    if (this.cropped) {
      this.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var element = this.element,
        options = this.options,
        container = this.container,
        cropper = this.cropper;


    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* addClass */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* CLASS_HIDDEN */]);
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["z" /* removeClass */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* CLASS_HIDDEN */]);

    var containerData = {
      width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
      height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
    };

    this.containerData = containerData;

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(cropper, {
      width: containerData.width,
      height: containerData.height
    });

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* addClass */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* CLASS_HIDDEN */]);
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["z" /* removeClass */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* CLASS_HIDDEN */]);
  },


  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var containerData = this.containerData,
        imageData = this.imageData;
    var viewMode = this.options.viewMode;

    var rotated = Math.abs(imageData.rotate) % 180 === 90;
    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerData.width;
    var canvasHeight = containerData.height;

    if (containerData.height * aspectRatio > containerData.width) {
      if (viewMode === 3) {
        canvasWidth = containerData.height * aspectRatio;
      } else {
        canvasHeight = containerData.width / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerData.width / aspectRatio;
    } else {
      canvasWidth = containerData.height * aspectRatio;
    }

    var canvasData = {
      aspectRatio: aspectRatio,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      width: canvasWidth,
      height: canvasHeight
    };

    canvasData.left = (containerData.width - canvasWidth) / 2;
    canvasData.top = (containerData.height - canvasHeight) / 2;
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;

    this.canvasData = canvasData;
    this.limited = viewMode === 1 || viewMode === 2;
    this.limitCanvas(true, true);
    this.initialImageData = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, imageData);
    this.initialCanvasData = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, canvasData);
  },
  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var viewMode = options.viewMode;
    var aspectRatio = canvasData.aspectRatio;

    var cropped = this.cropped && cropBoxData;

    if (sizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;

      if (viewMode > 1) {
        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

        if (viewMode === 3) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      } else if (viewMode > 0) {
        if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBoxData.width;
          minCanvasHeight = cropBoxData.height;

          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }

      var _getAdjustedSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["i" /* getAdjustedSizes */])({
        aspectRatio: aspectRatio,
        width: minCanvasWidth,
        height: minCanvasHeight
      });

      minCanvasWidth = _getAdjustedSizes.width;
      minCanvasHeight = _getAdjustedSizes.height;


      canvasData.minWidth = minCanvasWidth;
      canvasData.minHeight = minCanvasHeight;
      canvasData.maxWidth = Infinity;
      canvasData.maxHeight = Infinity;
    }

    if (positionLimited) {
      if (viewMode > (cropped ? 0 : 1)) {
        var newCanvasLeft = containerData.width - canvasData.width;
        var newCanvasTop = containerData.height - canvasData.height;

        canvasData.minLeft = Math.min(0, newCanvasLeft);
        canvasData.minTop = Math.min(0, newCanvasTop);
        canvasData.maxLeft = Math.max(0, newCanvasLeft);
        canvasData.maxTop = Math.max(0, newCanvasTop);

        if (cropped && this.limited) {
          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
          canvasData.maxLeft = cropBoxData.left;
          canvasData.maxTop = cropBoxData.top;

          if (viewMode === 2) {
            if (canvasData.width >= containerData.width) {
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
            }

            if (canvasData.height >= containerData.height) {
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvasData.minLeft = -canvasData.width;
        canvasData.minTop = -canvasData.height;
        canvasData.maxLeft = containerData.width;
        canvasData.maxTop = containerData.height;
      }
    }
  },
  renderCanvas: function renderCanvas(changed, transformed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;


    if (transformed) {
      var _getRotatedSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["o" /* getRotatedSizes */])({
        width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
        height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
        degree: imageData.rotate || 0
      }),
          naturalWidth = _getRotatedSizes.width,
          naturalHeight = _getRotatedSizes.height;

      var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
      var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);

      canvasData.left -= (width - canvasData.width) / 2;
      canvasData.top -= (height - canvasData.height) / 2;
      canvasData.width = width;
      canvasData.height = height;
      canvasData.aspectRatio = naturalWidth / naturalHeight;
      canvasData.naturalWidth = naturalWidth;
      canvasData.naturalHeight = naturalHeight;
      this.limitCanvas(true, false);
    }

    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
      canvasData.left = canvasData.oldLeft;
    }

    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
      canvasData.top = canvasData.oldTop;
    }

    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);

    this.limitCanvas(false, true);

    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(this.canvas, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
      width: canvasData.width,
      height: canvasData.height
    }, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["q" /* getTransforms */])({
      translateX: canvasData.left,
      translateY: canvasData.top
    })));

    this.renderImage(changed);

    if (this.cropped && this.limited) {
      this.limitCropBox(true, true);
    }
  },
  renderImage: function renderImage(changed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;

    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])(imageData, {
      width: width,
      height: height,
      left: (canvasData.width - width) / 2,
      top: (canvasData.height - height) / 2
    });
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(this.image, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
      width: imageData.width,
      height: imageData.height
    }, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["q" /* getTransforms */])(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
      translateX: imageData.left,
      translateY: imageData.top
    }, imageData))));

    if (changed) {
      this.output();
    }
  },
  initCropBox: function initCropBox() {
    var options = this.options,
        canvasData = this.canvasData;

    var aspectRatio = options.aspectRatio || options.initialAspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBoxData = {
      width: canvasData.width,
      height: canvasData.height
    };

    if (aspectRatio) {
      if (canvasData.height * aspectRatio > canvasData.width) {
        cropBoxData.height = cropBoxData.width / aspectRatio;
      } else {
        cropBoxData.width = cropBoxData.height * aspectRatio;
      }
    }

    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true);

    // Initialize auto crop area
    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);

    // The width/height of auto crop area must large than "minWidth/Height"
    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;

    this.initialCropBoxData = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, cropBoxData);
  },
  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData,
        limited = this.limited;
    var aspectRatio = options.aspectRatio;


    if (sizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
      var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;

      // The min/maxCropBoxWidth/Height must be less than container's width/height
      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }

        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      }

      // The minWidth/Height must be less than maxWidth/Height
      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }

    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, canvasData.left);
        cropBoxData.minTop = Math.max(0, canvasData.top);
        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var options = this.options,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData;


    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }

    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }

    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);

    this.limitCropBox(false, true);

    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;

    if (options.movable && options.cropBoxMovable) {
      // Turn to move the canvas when the crop box is equal to the container
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["D" /* setData */])(this.face, __WEBPACK_IMPORTED_MODULE_0__constants__["t" /* DATA_ACTION */], cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* ACTION_MOVE */] : __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTION_ALL */]);
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(this.cropBox, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
      width: cropBoxData.width,
      height: cropBoxData.height
    }, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["q" /* getTransforms */])({
      translateX: cropBoxData.left,
      translateY: cropBoxData.top
    })));

    if (this.cropped && this.limited) {
      this.limitCanvas(true, true);
    }

    if (!this.disabled) {
      this.output();
    }
  },
  output: function output() {
    this.preview();
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["g" /* dispatchEvent */])(this.element, __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* EVENT_CROP */], this.getData());
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = ({
  initPreview: function initPreview() {
    var element = this.element,
        crossOrigin = this.crossOrigin;
    var preview = this.options.preview;

    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var alt = element.alt || 'The image to preview';
    var image = document.createElement('img');

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    image.src = url;
    image.alt = alt;
    this.viewBox.appendChild(image);
    this.viewBoxImage = image;

    if (!preview) {
      return;
    }

    var previews = preview;

    if (typeof preview === 'string') {
      previews = element.ownerDocument.querySelectorAll(preview);
    } else if (preview.querySelector) {
      previews = [preview];
    }

    this.previews = previews;

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(previews, function (el) {
      var img = document.createElement('img');

      // Save the original size for recover
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["D" /* setData */])(el, __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* DATA_PREVIEW */], {
        width: el.offsetWidth,
        height: el.offsetHeight,
        html: el.innerHTML
      });

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;
      img.alt = alt;

      /**
       * Override img element styles
       * Add `display:block` to avoid margin top issue
       * Add `height:auto` to override `height` attribute on IE8
       * (Occur only when margin-top <= -height)
       */
      img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';

      el.innerHTML = '';
      el.appendChild(img);
    });
  },
  resetPreview: function resetPreview() {
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(this.previews, function (element) {
      var data = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["j" /* getData */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* DATA_PREVIEW */]);

      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(element, {
        width: data.width,
        height: data.height
      });

      element.innerHTML = data.html;
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["A" /* removeData */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* DATA_PREVIEW */]);
    });
  },
  preview: function preview() {
    var imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var cropBoxWidth = cropBoxData.width,
        cropBoxHeight = cropBoxData.height;
    var width = imageData.width,
        height = imageData.height;

    var left = cropBoxData.left - canvasData.left - imageData.left;
    var top = cropBoxData.top - canvasData.top - imageData.top;

    if (!this.cropped || this.disabled) {
      return;
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(this.viewBoxImage, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
      width: width,
      height: height
    }, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["q" /* getTransforms */])(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
      translateX: -left,
      translateY: -top
    }, imageData))));

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(this.previews, function (element) {
      var data = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["j" /* getData */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* DATA_PREVIEW */]);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;

      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }

      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }

      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(element, {
        width: newWidth,
        height: newHeight
      });

      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["E" /* setStyle */])(element.getElementsByTagName('img')[0], Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
        width: width * ratio,
        height: height * ratio
      }, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["q" /* getTransforms */])(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({
        translateX: -left * ratio,
        translateY: -top * ratio
      }, imageData))));
    });
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;


    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.cropstart)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* EVENT_CROP_START */], options.cropstart);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.cropmove)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["A" /* EVENT_CROP_MOVE */], options.cropmove);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.cropend)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* EVENT_CROP_END */], options.cropend);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.crop)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* EVENT_CROP */], options.crop);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.zoom)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["J" /* EVENT_ZOOM */], options.zoom);
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["D" /* EVENT_POINTER_DOWN */], this.onCropStart = this.cropStart.bind(this));

    if (options.zoomable && options.zoomOnWheel) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["I" /* EVENT_WHEEL */], this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }

    if (options.toggleDragModeOnDblclick) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["C" /* EVENT_DBLCLICK */], this.onDblclick = this.dblclick.bind(this));
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(element.ownerDocument, __WEBPACK_IMPORTED_MODULE_0__constants__["E" /* EVENT_POINTER_MOVE */], this.onCropMove = this.cropMove.bind(this));
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(element.ownerDocument, __WEBPACK_IMPORTED_MODULE_0__constants__["F" /* EVENT_POINTER_UP */], this.onCropEnd = this.cropEnd.bind(this));

    if (options.responsive) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["b" /* addListener */])(window, __WEBPACK_IMPORTED_MODULE_0__constants__["H" /* EVENT_RESIZE */], this.onResize = this.resize.bind(this));
    }
  },
  unbind: function unbind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;


    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.cropstart)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* EVENT_CROP_START */], options.cropstart);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.cropmove)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["A" /* EVENT_CROP_MOVE */], options.cropmove);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.cropend)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* EVENT_CROP_END */], options.cropend);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.crop)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* EVENT_CROP */], options.crop);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["t" /* isFunction */])(options.zoom)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(element, __WEBPACK_IMPORTED_MODULE_0__constants__["J" /* EVENT_ZOOM */], options.zoom);
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["D" /* EVENT_POINTER_DOWN */], this.onCropStart);

    if (options.zoomable && options.zoomOnWheel) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["I" /* EVENT_WHEEL */], this.onWheel, {
        passive: false,
        capture: true
      });
    }

    if (options.toggleDragModeOnDblclick) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["C" /* EVENT_DBLCLICK */], this.onDblclick);
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(element.ownerDocument, __WEBPACK_IMPORTED_MODULE_0__constants__["E" /* EVENT_POINTER_MOVE */], this.onCropMove);
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(element.ownerDocument, __WEBPACK_IMPORTED_MODULE_0__constants__["F" /* EVENT_POINTER_UP */], this.onCropEnd);

    if (options.responsive) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["B" /* removeListener */])(window, __WEBPACK_IMPORTED_MODULE_0__constants__["H" /* EVENT_RESIZE */], this.onResize);
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = ({
  resize: function resize() {
    var options = this.options,
        container = this.container,
        containerData = this.containerData;

    var minContainerWidth = Number(options.minContainerWidth) || __WEBPACK_IMPORTED_MODULE_0__constants__["N" /* MIN_CONTAINER_WIDTH */];
    var minContainerHeight = Number(options.minContainerHeight) || __WEBPACK_IMPORTED_MODULE_0__constants__["M" /* MIN_CONTAINER_HEIGHT */];

    if (this.disabled || containerData.width <= minContainerWidth || containerData.height <= minContainerHeight) {
      return;
    }

    var ratio = container.offsetWidth / containerData.width;

    // Resize when width changed or height changed
    if (ratio !== 1 || container.offsetHeight !== containerData.height) {
      var canvasData = void 0;
      var cropBoxData = void 0;

      if (options.restore) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
      }

      this.render();

      if (options.restore) {
        this.setCanvasData(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(canvasData, function (n, i) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(cropBoxData, function (n, i) {
          cropBoxData[i] = n * ratio;
        }));
      }
    }
  },
  dblclick: function dblclick() {
    if (this.disabled || this.options.dragMode === __WEBPACK_IMPORTED_MODULE_0__constants__["x" /* DRAG_MODE_NONE */]) {
      return;
    }

    this.setDragMode(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["r" /* hasClass */])(this.dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* CLASS_CROP */]) ? __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* DRAG_MODE_MOVE */] : __WEBPACK_IMPORTED_MODULE_0__constants__["v" /* DRAG_MODE_CROP */]);
  },
  wheel: function wheel(event) {
    var _this = this;

    var ratio = Number(this.options.wheelZoomRatio) || 0.1;
    var delta = 1;

    if (this.disabled) {
      return;
    }

    event.preventDefault();

    // Limit wheel speed to prevent zoom too fast (#21)
    if (this.wheeling) {
      return;
    }

    this.wheeling = true;

    setTimeout(function () {
      _this.wheeling = false;
    }, 50);

    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }

    this.zoom(-delta * ratio, event);
  },
  cropStart: function cropStart(event) {
    var buttons = event.buttons,
        button = event.button;


    if (this.disabled

    // No primary button (Usually the left button)
    // Note that touch events have no `buttons` or `button` property
    || Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(buttons) && buttons !== 1 || Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(button) && button !== 0

    // Open context menu
    || event.ctrlKey) {
      return;
    }

    var options = this.options,
        pointers = this.pointers;

    var action = void 0;

    if (event.changedTouches) {
      // Handle touch event
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(event.changedTouches, function (touch) {
        pointers[touch.identifier] = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["m" /* getPointer */])(touch);
      });
    } else {
      // Handle mouse event and pointer event
      pointers[event.pointerId || 0] = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["m" /* getPointer */])(event);
    }

    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = __WEBPACK_IMPORTED_MODULE_0__constants__["l" /* ACTION_ZOOM */];
    } else {
      action = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["j" /* getData */])(event.target, __WEBPACK_IMPORTED_MODULE_0__constants__["t" /* DATA_ACTION */]);
    }

    if (!__WEBPACK_IMPORTED_MODULE_0__constants__["P" /* REGEXP_ACTIONS */].test(action)) {
      return;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["g" /* dispatchEvent */])(this.element, __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* EVENT_CROP_START */], {
      originalEvent: event,
      action: action
    }) === false) {
      return;
    }

    // This line is required for preventing page zooming in iOS browsers
    event.preventDefault();

    this.action = action;
    this.cropping = false;

    if (action === __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ACTION_CROP */]) {
      this.cropping = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* addClass */])(this.dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* CLASS_MODAL */]);
    }
  },
  cropMove: function cropMove(event) {
    var action = this.action;


    if (this.disabled || !action) {
      return;
    }

    var pointers = this.pointers;


    event.preventDefault();

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["g" /* dispatchEvent */])(this.element, __WEBPACK_IMPORTED_MODULE_0__constants__["A" /* EVENT_CROP_MOVE */], {
      originalEvent: event,
      action: action
    }) === false) {
      return;
    }

    if (event.changedTouches) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(event.changedTouches, function (touch) {
        // The first parameter should not be undefined (#432)
        Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])(pointers[touch.identifier] || {}, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["m" /* getPointer */])(touch, true));
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])(pointers[event.pointerId || 0] || {}, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["m" /* getPointer */])(event, true));
    }

    this.change(event);
  },
  cropEnd: function cropEnd(event) {
    if (this.disabled) {
      return;
    }

    var action = this.action,
        pointers = this.pointers;


    if (event.changedTouches) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(event.changedTouches, function (touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[event.pointerId || 0];
    }

    if (!action) {
      return;
    }

    event.preventDefault();

    if (!Object.keys(pointers).length) {
      this.action = '';
    }

    if (this.cropping) {
      this.cropping = false;
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["F" /* toggleClass */])(this.dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* CLASS_MODAL */], this.cropped && this.options.modal);
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["g" /* dispatchEvent */])(this.element, __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* EVENT_CROP_END */], {
      originalEvent: event,
      action: action
    });
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = ({
  change: function change(event) {
    var options = this.options,
        canvasData = this.canvasData,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData,
        pointers = this.pointers;
    var action = this.action;
    var aspectRatio = options.aspectRatio;
    var left = cropBoxData.left,
        top = cropBoxData.top,
        width = cropBoxData.width,
        height = cropBoxData.height;

    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = containerData.width;
    var maxHeight = containerData.height;
    var renderable = true;
    var offset = void 0;

    // Locking aspect ratio in "free mode" by holding shift key
    if (!aspectRatio && event.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }

    if (this.limited) {
      minLeft = cropBoxData.minLeft;
      minTop = cropBoxData.minTop;

      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    }

    var pointer = pointers[Object.keys(pointers)[0]];
    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };
    var check = function check(side) {
      switch (side) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ACTION_EAST */]:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }

          break;

        case __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* ACTION_WEST */]:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }

          break;

        case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */]:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }

          break;

        case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ACTION_SOUTH */]:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }

          break;

        default:
      }
    };

    switch (action) {
      // Move crop box
      case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTION_ALL */]:
        left += range.x;
        top += range.y;
        break;

      // Resize crop box
      case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ACTION_EAST */]:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ACTION_EAST */]);
        width += range.x;

        if (width < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* ACTION_WEST */];
          width = -width;
          left -= width;
        }

        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */]:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */]);
        height -= range.y;
        top += range.y;

        if (height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ACTION_SOUTH */];
          height = -height;
          top -= height;
        }

        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* ACTION_WEST */]:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* ACTION_WEST */]);
        width -= range.x;
        left += range.x;

        if (width < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ACTION_EAST */];
          width = -width;
          left -= width;
        }

        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ACTION_SOUTH */]:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(__WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ACTION_SOUTH */]);
        height += range.y;

        if (height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */];
          height = -height;
          top -= height;
        }

        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* ACTION_NORTH_EAST */]:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }

          check(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */]);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */]);
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ACTION_EAST */]);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* ACTION_SOUTH_WEST */];
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ACTION_NORTH_WEST */];
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ACTION_SOUTH_EAST */];
          height = -height;
          top -= height;
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ACTION_NORTH_WEST */]:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }

          check(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */]);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += cropBoxData.width - width;
        } else {
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ACTION_NORTH */]);
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* ACTION_WEST */]);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ACTION_SOUTH_EAST */];
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* ACTION_NORTH_EAST */];
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* ACTION_SOUTH_WEST */];
          height = -height;
          top -= height;
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* ACTION_SOUTH_WEST */]:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* ACTION_WEST */]);
          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ACTION_SOUTH */]);
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* ACTION_WEST */]);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* ACTION_NORTH_EAST */];
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ACTION_SOUTH_EAST */];
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ACTION_NORTH_WEST */];
          height = -height;
          top -= height;
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ACTION_SOUTH_EAST */]:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ACTION_EAST */]);
          width += range.x;
          height = width / aspectRatio;
        } else {
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ACTION_SOUTH */]);
          check(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* ACTION_EAST */]);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ACTION_NORTH_WEST */];
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* ACTION_SOUTH_WEST */];
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* ACTION_NORTH_EAST */];
          height = -height;
          top -= height;
        }

        break;

      // Move canvas
      case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* ACTION_MOVE */]:
        this.move(range.x, range.y);
        renderable = false;
        break;

      // Zoom canvas
      case __WEBPACK_IMPORTED_MODULE_0__constants__["l" /* ACTION_ZOOM */]:
        this.zoom(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["k" /* getMaxZoomRatio */])(pointers), event);
        renderable = false;
        break;

      // Create crop box
      case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ACTION_CROP */]:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }

        offset = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["l" /* getOffset */])(this.cropper);
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;

        if (range.x > 0) {
          action = range.y > 0 ? __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ACTION_SOUTH_EAST */] : __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* ACTION_NORTH_EAST */];
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* ACTION_SOUTH_WEST */] : __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ACTION_NORTH_WEST */];
        }

        if (range.y < 0) {
          top -= height;
        }

        // Show the crop box if is hidden
        if (!this.cropped) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["z" /* removeClass */])(this.cropBox, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* CLASS_HIDDEN */]);
          this.cropped = true;

          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }

        break;

      default:
    }

    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.renderCropBox();
    }

    // Override
    Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(pointers, function (p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities__ = __webpack_require__(1);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




/* harmony default export */ __webpack_exports__["a"] = ({
  // Show the crop box manually
  crop: function crop() {
    if (this.ready && !this.cropped && !this.disabled) {
      this.cropped = true;
      this.limitCropBox(true, true);

      if (this.options.modal) {
        Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* addClass */])(this.dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* CLASS_MODAL */]);
      }

      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["z" /* removeClass */])(this.cropBox, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* CLASS_HIDDEN */]);
      this.setCropBoxData(this.initialCropBoxData);
    }

    return this;
  },


  // Reset the image and crop box to their initial states
  reset: function reset() {
    if (this.ready && !this.disabled) {
      this.imageData = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, this.initialImageData);
      this.canvasData = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, this.initialCanvasData);
      this.cropBoxData = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, this.initialCropBoxData);
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    }

    return this;
  },


  // Clear the crop box
  clear: function clear() {
    if (this.cropped && !this.disabled) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });

      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas(true, true);

      // Render canvas after crop box rendered
      this.renderCanvas();
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["z" /* removeClass */])(this.dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* CLASS_MODAL */]);
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* addClass */])(this.cropBox, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* CLASS_HIDDEN */]);
    }

    return this;
  },


  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function replace(url) {
    var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!this.disabled && url) {
      if (this.isImg) {
        this.element.src = url;
      }

      if (hasSameSize) {
        this.url = url;
        this.image.src = url;

        if (this.ready) {
          this.viewBoxImage.src = url;

          Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(this.previews, function (element) {
            element.getElementsByTagName('img')[0].src = url;
          });
        }
      } else {
        if (this.isImg) {
          this.replaced = true;
        }

        this.options.data = null;
        this.uncreate();
        this.load(url);
      }
    }

    return this;
  },


  // Enable (unfreeze) the cropper
  enable: function enable() {
    if (this.ready && this.disabled) {
      this.disabled = false;
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["z" /* removeClass */])(this.cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["n" /* CLASS_DISABLED */]);
    }

    return this;
  },


  // Disable (freeze) the cropper
  disable: function disable() {
    if (this.ready && !this.disabled) {
      this.disabled = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["a" /* addClass */])(this.cropper, __WEBPACK_IMPORTED_MODULE_0__constants__["n" /* CLASS_DISABLED */]);
    }

    return this;
  },


  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function destroy() {
    var element = this.element;


    if (!element[__WEBPACK_IMPORTED_MODULE_0__constants__["O" /* NAMESPACE */]]) {
      return this;
    }

    element[__WEBPACK_IMPORTED_MODULE_0__constants__["O" /* NAMESPACE */]] = undefined;

    if (this.isImg && this.replaced) {
      element.src = this.originalUrl;
    }

    this.uncreate();
    return this;
  },


  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function move(offsetX) {
    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
    var _canvasData = this.canvasData,
        left = _canvasData.left,
        top = _canvasData.top;


    return this.moveTo(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["w" /* isUndefined */])(offsetX) ? offsetX : left + Number(offsetX), Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["w" /* isUndefined */])(offsetY) ? offsetY : top + Number(offsetY));
  },


  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function moveTo(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var canvasData = this.canvasData;

    var changed = false;

    x = Number(x);
    y = Number(y);

    if (this.ready && !this.disabled && this.options.movable) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(x)) {
        canvasData.left = x;
        changed = true;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(y)) {
        canvasData.top = y;
        changed = true;
      }

      if (changed) {
        this.renderCanvas(true);
      }
    }

    return this;
  },


  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function zoom(ratio, _originalEvent) {
    var canvasData = this.canvasData;


    ratio = Number(ratio);

    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }

    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
  },


  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
    var options = this.options,
        canvasData = this.canvasData;
    var width = canvasData.width,
        height = canvasData.height,
        naturalWidth = canvasData.naturalWidth,
        naturalHeight = canvasData.naturalHeight;


    ratio = Number(ratio);

    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["g" /* dispatchEvent */])(this.element, __WEBPACK_IMPORTED_MODULE_0__constants__["J" /* EVENT_ZOOM */], {
        ratio: ratio,
        oldRatio: width / naturalWidth,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }

      if (_originalEvent) {
        var pointers = this.pointers;

        var offset = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["l" /* getOffset */])(this.cropper);
        var center = pointers && Object.keys(pointers).length ? Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["n" /* getPointersCenter */])(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };

        // Zoom from the triggering point of the event
        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
      } else if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["v" /* isPlainObject */])(pivot) && Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(pivot.x) && Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(pivot.y)) {
        canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
      } else {
        // Zoom from the center of the canvas
        canvasData.left -= (newWidth - width) / 2;
        canvasData.top -= (newHeight - height) / 2;
      }

      canvasData.width = newWidth;
      canvasData.height = newHeight;
      this.renderCanvas(true);
    }

    return this;
  },


  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function rotate(degree) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
  },


  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function rotateTo(degree) {
    degree = Number(degree);

    if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(degree) && this.ready && !this.disabled && this.options.rotatable) {
      this.imageData.rotate = degree % 360;
      this.renderCanvas(true, true);
    }

    return this;
  },


  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function scaleX(_scaleX) {
    var scaleY = this.imageData.scaleY;


    return this.scale(_scaleX, Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(scaleY) ? scaleY : 1);
  },


  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function scaleY(_scaleY) {
    var scaleX = this.imageData.scaleX;


    return this.scale(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(scaleX) ? scaleX : 1, _scaleY);
  },


  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function scale(scaleX) {
    var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
    var imageData = this.imageData;

    var transformed = false;

    scaleX = Number(scaleX);
    scaleY = Number(scaleY);

    if (this.ready && !this.disabled && this.options.scalable) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(scaleX)) {
        imageData.scaleX = scaleX;
        transformed = true;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(scaleY)) {
        imageData.scaleY = scaleY;
        transformed = true;
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }
    }

    return this;
  },


  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function getData() {
    var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;

    var data = void 0;

    if (this.ready && this.cropped) {
      data = {
        x: cropBoxData.left - canvasData.left,
        y: cropBoxData.top - canvasData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };

      var ratio = imageData.width / imageData.naturalWidth;

      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(data, function (n, i) {
        data[i] = n / ratio;
      });

      if (rounded) {
        // In case rounding off leads to extra 1px in right or bottom border
        // we should round the top-left corner and the dimension (#343).
        var bottom = Math.round(data.y + data.height);
        var right = Math.round(data.x + data.width);

        data.x = Math.round(data.x);
        data.y = Math.round(data.y);
        data.width = right - data.x;
        data.height = bottom - data.y;
      }
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }

    if (options.rotatable) {
      data.rotate = imageData.rotate || 0;
    }

    if (options.scalable) {
      data.scaleX = imageData.scaleX || 1;
      data.scaleY = imageData.scaleY || 1;
    }

    return data;
  },


  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function setData(data) {
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData;

    var cropBoxData = {};

    if (this.ready && !this.disabled && Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["v" /* isPlainObject */])(data)) {
      var transformed = false;

      if (options.rotatable) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.rotate) && data.rotate !== imageData.rotate) {
          imageData.rotate = data.rotate;
          transformed = true;
        }
      }

      if (options.scalable) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.scaleX) && data.scaleX !== imageData.scaleX) {
          imageData.scaleX = data.scaleX;
          transformed = true;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.scaleY) && data.scaleY !== imageData.scaleY) {
          imageData.scaleY = data.scaleY;
          transformed = true;
        }
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }

      var ratio = imageData.width / imageData.naturalWidth;

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.x)) {
        cropBoxData.left = data.x * ratio + canvasData.left;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.y)) {
        cropBoxData.top = data.y * ratio + canvasData.top;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.width)) {
        cropBoxData.width = data.width * ratio;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.height)) {
        cropBoxData.height = data.height * ratio;
      }

      this.setCropBoxData(cropBoxData);
    }

    return this;
  },


  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function getContainerData() {
    return this.ready ? Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, this.containerData) : {};
  },


  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function getImageData() {
    return this.sized ? Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["e" /* assign */])({}, this.imageData) : {};
  },


  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function getCanvasData() {
    var canvasData = this.canvasData;

    var data = {};

    if (this.ready) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["h" /* forEach */])(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
        data[n] = canvasData[n];
      });
    }

    return data;
  },


  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function setCanvasData(data) {
    var canvasData = this.canvasData;
    var aspectRatio = canvasData.aspectRatio;


    if (this.ready && !this.disabled && Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["v" /* isPlainObject */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.left)) {
        canvasData.left = data.left;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.top)) {
        canvasData.top = data.top;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.width)) {
        canvasData.width = data.width;
        canvasData.height = data.width / aspectRatio;
      } else if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.height)) {
        canvasData.height = data.height;
        canvasData.width = data.height * aspectRatio;
      }

      this.renderCanvas(true);
    }

    return this;
  },


  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function getCropBoxData() {
    var cropBoxData = this.cropBoxData;

    var data = void 0;

    if (this.ready && this.cropped) {
      data = {
        left: cropBoxData.left,
        top: cropBoxData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
    }

    return data || {};
  },


  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function setCropBoxData(data) {
    var cropBoxData = this.cropBoxData;
    var aspectRatio = this.options.aspectRatio;

    var widthChanged = void 0;
    var heightChanged = void 0;

    if (this.ready && this.cropped && !this.disabled && Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["v" /* isPlainObject */])(data)) {
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.left)) {
        cropBoxData.left = data.left;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.top)) {
        cropBoxData.top = data.top;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.width) && data.width !== cropBoxData.width) {
        widthChanged = true;
        cropBoxData.width = data.width;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["u" /* isNumber */])(data.height) && data.height !== cropBoxData.height) {
        heightChanged = true;
        cropBoxData.height = data.height;
      }

      if (aspectRatio) {
        if (widthChanged) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else if (heightChanged) {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.renderCropBox();
    }

    return this;
  },


  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function getCroppedCanvas() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.ready || !window.HTMLCanvasElement) {
      return null;
    }

    var canvasData = this.canvasData;

    var source = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["p" /* getSourceCanvas */])(this.image, this.imageData, canvasData, options);

    // Returns the source canvas if it is not cropped.
    if (!this.cropped) {
      return source;
    }

    var _getData = this.getData(),
        initialX = _getData.x,
        initialY = _getData.y,
        initialWidth = _getData.width,
        initialHeight = _getData.height;

    var ratio = source.width / Math.floor(canvasData.naturalWidth);

    if (ratio !== 1) {
      initialX *= ratio;
      initialY *= ratio;
      initialWidth *= ratio;
      initialHeight *= ratio;
    }

    var aspectRatio = initialWidth / initialHeight;
    var maxSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["i" /* getAdjustedSizes */])({
      aspectRatio: aspectRatio,
      width: options.maxWidth || Infinity,
      height: options.maxHeight || Infinity
    });
    var minSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["i" /* getAdjustedSizes */])({
      aspectRatio: aspectRatio,
      width: options.minWidth || 0,
      height: options.minHeight || 0
    }, 'cover');

    var _getAdjustedSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["i" /* getAdjustedSizes */])({
      aspectRatio: aspectRatio,
      width: options.width || (ratio !== 1 ? source.width : initialWidth),
      height: options.height || (ratio !== 1 ? source.height : initialHeight)
    }),
        width = _getAdjustedSizes.width,
        height = _getAdjustedSizes.height;

    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    canvas.width = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["x" /* normalizeDecimalNumber */])(width);
    canvas.height = Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["x" /* normalizeDecimalNumber */])(height);

    context.fillStyle = options.fillColor || 'transparent';
    context.fillRect(0, 0, width, height);

    var _options$imageSmoothi = options.imageSmoothingEnabled,
        imageSmoothingEnabled = _options$imageSmoothi === undefined ? true : _options$imageSmoothi,
        imageSmoothingQuality = options.imageSmoothingQuality;


    context.imageSmoothingEnabled = imageSmoothingEnabled;

    if (imageSmoothingQuality) {
      context.imageSmoothingQuality = imageSmoothingQuality;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
    var sourceWidth = source.width;
    var sourceHeight = source.height;

    // Source canvas parameters
    var srcX = initialX;
    var srcY = initialY;
    var srcWidth = void 0;
    var srcHeight = void 0;

    // Destination canvas parameters
    var dstX = void 0;
    var dstY = void 0;
    var dstWidth = void 0;
    var dstHeight = void 0;

    if (srcX <= -initialWidth || srcX > sourceWidth) {
      srcX = 0;
      srcWidth = 0;
      dstX = 0;
      dstWidth = 0;
    } else if (srcX <= 0) {
      dstX = -srcX;
      srcX = 0;
      srcWidth = Math.min(sourceWidth, initialWidth + srcX);
      dstWidth = srcWidth;
    } else if (srcX <= sourceWidth) {
      dstX = 0;
      srcWidth = Math.min(initialWidth, sourceWidth - srcX);
      dstWidth = srcWidth;
    }

    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
      srcY = 0;
      srcHeight = 0;
      dstY = 0;
      dstHeight = 0;
    } else if (srcY <= 0) {
      dstY = -srcY;
      srcY = 0;
      srcHeight = Math.min(sourceHeight, initialHeight + srcY);
      dstHeight = srcHeight;
    } else if (srcY <= sourceHeight) {
      dstY = 0;
      srcHeight = Math.min(initialHeight, sourceHeight - srcY);
      dstHeight = srcHeight;
    }

    var params = [srcX, srcY, srcWidth, srcHeight];

    // Avoid "IndexSizeError"
    if (dstWidth > 0 && dstHeight > 0) {
      var scale = width / initialWidth;

      params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
    }

    // All the numerical parameters should be integer for `drawImage`
    // https://github.com/fengyuanchen/cropper/issues/476
    context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["x" /* normalizeDecimalNumber */])(param));
    }))));

    return canvas;
  },


  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var options = this.options;


    if (!this.disabled && !Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["w" /* isUndefined */])(aspectRatio)) {
      // 0 -> NaN
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;

      if (this.ready) {
        this.initCropBox();

        if (this.cropped) {
          this.renderCropBox();
        }
      }
    }

    return this;
  },


  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function setDragMode(mode) {
    var options = this.options,
        dragBox = this.dragBox,
        face = this.face;


    if (this.ready && !this.disabled) {
      var croppable = mode === __WEBPACK_IMPORTED_MODULE_0__constants__["v" /* DRAG_MODE_CROP */];
      var movable = options.movable && mode === __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* DRAG_MODE_MOVE */];

      mode = croppable || movable ? mode : __WEBPACK_IMPORTED_MODULE_0__constants__["x" /* DRAG_MODE_NONE */];

      options.dragMode = mode;
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["D" /* setData */])(dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["t" /* DATA_ACTION */], mode);
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["F" /* toggleClass */])(dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* CLASS_CROP */], croppable);
      Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["F" /* toggleClass */])(dragBox, __WEBPACK_IMPORTED_MODULE_0__constants__["s" /* CLASS_MOVE */], movable);

      if (!options.cropBoxMovable) {
        // Sync drag mode to crop box when it is not movable
        Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["D" /* setData */])(face, __WEBPACK_IMPORTED_MODULE_0__constants__["t" /* DATA_ACTION */], mode);
        Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["F" /* toggleClass */])(face, __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* CLASS_CROP */], croppable);
        Object(__WEBPACK_IMPORTED_MODULE_1__utilities__["F" /* toggleClass */])(face, __WEBPACK_IMPORTED_MODULE_0__constants__["s" /* CLASS_MOVE */], movable);
      }
    }

    return this;
  }
});

/***/ })
/******/ ]);