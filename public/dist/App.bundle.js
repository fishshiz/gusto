/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(13);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var defaultClient, mixin, responsePromise, client;

defaultClient = __webpack_require__(19);
mixin = __webpack_require__(3);
responsePromise = __webpack_require__(8);
client = __webpack_require__(7);

/**
 * Interceptors have the ability to intercept the request and/org response
 * objects.  They may augment, prune, transform or replace the
 * request/response as needed.  Clients may be composed by wrapping
 * together multiple interceptors.
 *
 * Configured interceptors are functional in nature.  Wrapping a client in
 * an interceptor will not affect the client, merely the data that flows in
 * and out of that client.  A common configuration can be created once and
 * shared; specialization can be created by further wrapping that client
 * with custom interceptors.
 *
 * @param {Client} [target] client to wrap
 * @param {Object} [config] configuration for the interceptor, properties will be specific to the interceptor implementation
 * @returns {Client} A client wrapped with the interceptor
 *
 * @class Interceptor
 */

function defaultInitHandler(config) {
	return config;
}

function defaultRequestHandler(request /*, config, meta */) {
	return request;
}

function defaultResponseHandler(response /*, config, meta */) {
	return response;
}

/**
 * Alternate return type for the request handler that allows for more complex interactions.
 *
 * @param properties.request the traditional request return object
 * @param {Promise} [properties.abort] promise that resolves if/when the request is aborted
 * @param {Client} [properties.client] override the defined client with an alternate client
 * @param [properties.response] response for the request, short circuit the request
 */
function ComplexRequest(properties) {
	if (!(this instanceof ComplexRequest)) {
		// in case users forget the 'new' don't mix into the interceptor
		return new ComplexRequest(properties);
	}
	mixin(this, properties);
}

/**
 * Create a new interceptor for the provided handlers.
 *
 * @param {Function} [handlers.init] one time intialization, must return the config object
 * @param {Function} [handlers.request] request handler
 * @param {Function} [handlers.response] response handler regardless of error state
 * @param {Function} [handlers.success] response handler when the request is not in error
 * @param {Function} [handlers.error] response handler when the request is in error, may be used to 'unreject' an error state
 * @param {Function} [handlers.client] the client to use if otherwise not specified, defaults to platform default client
 *
 * @returns {Interceptor}
 */
function interceptor(handlers) {

	var initHandler, requestHandler, successResponseHandler, errorResponseHandler;

	handlers = handlers || {};

	initHandler            = handlers.init    || defaultInitHandler;
	requestHandler         = handlers.request || defaultRequestHandler;
	successResponseHandler = handlers.success || handlers.response || defaultResponseHandler;
	errorResponseHandler   = handlers.error   || function () {
		// Propagate the rejection, with the result of the handler
		return Promise.resolve((handlers.response || defaultResponseHandler).apply(this, arguments))
			.then(Promise.reject.bind(Promise));
	};

	return function (target, config) {

		if (typeof target === 'object') {
			config = target;
		}
		if (typeof target !== 'function') {
			target = handlers.client || defaultClient;
		}

		config = initHandler(config || {});

		function interceptedClient(request) {
			var context, meta;
			context = {};
			meta = { 'arguments': Array.prototype.slice.call(arguments), client: interceptedClient };
			request = typeof request === 'string' ? { path: request } : request || {};
			request.originator = request.originator || interceptedClient;
			return responsePromise(
				requestHandler.call(context, request, config, meta),
				function (request) {
					var response, abort, next;
					next = target;
					if (request instanceof ComplexRequest) {
						// unpack request
						abort = request.abort;
						next = request.client || next;
						response = request.response;
						// normalize request, must be last
						request = request.request;
					}
					response = response || Promise.resolve(request).then(function (request) {
						return Promise.resolve(next(request)).then(
							function (response) {
								return successResponseHandler.call(context, response, config, meta);
							},
							function (response) {
								return errorResponseHandler.call(context, response, config, meta);
							}
						);
					});
					return abort ? Promise.race([response, abort]) : response;
				},
				function (error) {
					return Promise.reject({ request: request, error: error });
				}
			);
		}

		return client(interceptedClient, target);
	};
}

interceptor.ComplexRequest = ComplexRequest;

module.exports = interceptor;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var empty = {};

/**
 * Mix the properties from the source object into the destination object.
 * When the same property occurs in more then one object, the right most
 * value wins.
 *
 * @param {Object} dest the object to copy properties to
 * @param {Object} sources the objects to copy properties from.  May be 1 to N arguments, but not an Array.
 * @return {Object} the destination object
 */
function mixin(dest /*, sources... */) {
	var i, l, source, name;

	if (!dest) { dest = {}; }
	for (i = 1, l = arguments.length; i < l; i += 1) {
		source = arguments[i];
		for (name in source) {
			if (!(name in dest) || (dest[name] !== source[name] && (!(name in empty) || empty[name] !== source[name]))) {
				dest[name] = source[name];
			}
		}
	}

	return dest; // Object
}

module.exports = mixin;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(47);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(9);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(9);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



/**
 * Add common helper methods to a client impl
 *
 * @param {function} impl the client implementation
 * @param {Client} [target] target of this client, used when wrapping other clients
 * @returns {Client} the client impl with additional methods
 */
module.exports = function client(impl, target) {

	if (target) {

		/**
		 * @returns {Client} the target client
		 */
		impl.skip = function skip() {
			return target;
		};

	}

	/**
	 * Allow a client to easily be wrapped by an interceptor
	 *
	 * @param {Interceptor} interceptor the interceptor to wrap this client with
	 * @param [config] configuration for the interceptor
	 * @returns {Client} the newly wrapped client
	 */
	impl.wrap = function wrap(interceptor, config) {
		return interceptor(impl, config);
	};

	/**
	 * @deprecated
	 */
	impl.chain = function chain() {
		if (typeof console !== 'undefined') {
			console.log('rest.js: client.chain() is deprecated, use client.wrap() instead');
		}

		return impl.wrap.apply(this, arguments);
	};

	return impl;

};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



/*jshint latedef: nofunc */

var normalizeHeaderName = __webpack_require__(25);

function property(promise, name) {
	return promise.then(
		function (value) {
			return value && value[name];
		},
		function (value) {
			return Promise.reject(value && value[name]);
		}
	);
}

/**
 * Obtain the response entity
 *
 * @returns {Promise} for the response entity
 */
function entity() {
	/*jshint validthis:true */
	return property(this, 'entity');
}

/**
 * Obtain the response status
 *
 * @returns {Promise} for the response status
 */
function status() {
	/*jshint validthis:true */
	return property(property(this, 'status'), 'code');
}

/**
 * Obtain the response headers map
 *
 * @returns {Promise} for the response headers map
 */
function headers() {
	/*jshint validthis:true */
	return property(this, 'headers');
}

/**
 * Obtain a specific response header
 *
 * @param {String} headerName the header to retrieve
 * @returns {Promise} for the response header's value
 */
function header(headerName) {
	/*jshint validthis:true */
	headerName = normalizeHeaderName(headerName);
	return property(this.headers(), headerName);
}

/**
 * Follow a related resource
 *
 * The relationship to follow may be define as a plain string, an object
 * with the rel and params, or an array containing one or more entries
 * with the previous forms.
 *
 * Examples:
 *   response.follow('next')
 *
 *   response.follow({ rel: 'next', params: { pageSize: 100 } })
 *
 *   response.follow([
 *       { rel: 'items', params: { projection: 'noImages' } },
 *       'search',
 *       { rel: 'findByGalleryIsNull', params: { projection: 'noImages' } },
 *       'items'
 *   ])
 *
 * @param {String|Object|Array} rels one, or more, relationships to follow
 * @returns ResponsePromise<Response> related resource
 */
function follow(rels) {
	/*jshint validthis:true */
	rels = [].concat(rels);

	return make(rels.reduce(function (response, rel) {
		return response.then(function (response) {
			if (typeof rel === 'string') {
				rel = { rel: rel };
			}
			if (typeof response.entity.clientFor !== 'function') {
				throw new Error('Hypermedia response expected');
			}
			var client = response.entity.clientFor(rel.rel);
			return client({ params: rel.params });
		});
	}, this));
}

/**
 * Wrap a Promise as an ResponsePromise
 *
 * @param {Promise<Response>} promise the promise for an HTTP Response
 * @returns {ResponsePromise<Response>} wrapped promise for Response with additional helper methods
 */
function make(promise) {
	promise.status = status;
	promise.headers = headers;
	promise.header = header;
	promise.entity = entity;
	promise.follow = follow;
	return promise;
}

function responsePromise(obj, callback, errback) {
	return make(Promise.resolve(obj).then(callback, errback));
}

responsePromise.make = make;
responsePromise.reject = function (val) {
	return make(Promise.reject(val));
};
responsePromise.promise = function (func) {
	return make(new Promise(func));
};

module.exports = responsePromise;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(39);
var buildURL = __webpack_require__(42);
var parseHeaders = __webpack_require__(48);
var isURLSameOrigin = __webpack_require__(46);
var createError = __webpack_require__(12);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(41);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(44);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(38);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// We keep all of the constants that declare endpoints in one
// place, so that we could conceivably update this for API layout
// revisions.
module.exports.DEFAULT_ENDPOINT = 'https://api.mapbox.com';

module.exports.API_GEOCODING_FORWARD = '/geocoding/v5/{dataset}/{query}.json{?proximity,country,types,bbox,limit}';
module.exports.API_GEOCODING_REVERSE = '/geocoding/v5/{dataset}/{longitude},{latitude}.json{?types,limit}';

module.exports.API_DIRECTIONS = '/v4/directions/{profile}/{encodedWaypoints}.json{?alternatives,instructions,geometry,steps}';
module.exports.API_DISTANCE = '/distances/v1/mapbox/{profile}';

module.exports.API_SURFACE = '/v4/surface/{mapid}.json{?layer,fields,points,geojson,interpolate,encoded_polyline}';

module.exports.API_UPLOADS = '/uploads/v1/{owner}';
module.exports.API_UPLOAD = '/uploads/v1/{owner}/{upload}';
module.exports.API_UPLOAD_CREDENTIALS = '/uploads/v1/{owner}/credentials';

module.exports.API_MATCHING = '/matching/v4/{profile}.json';

module.exports.API_DATASET_DATASETS = '/datasets/v1/{owner}{?limit,start,fresh}';
module.exports.API_DATASET_DATASET = '/datasets/v1/{owner}/{dataset}';
module.exports.API_DATASET_FEATURES = '/datasets/v1/{owner}/{dataset}/features{?reverse,limit,start}';
module.exports.API_DATASET_FEATURE = '/datasets/v1/{owner}/{dataset}/features/{id}';

module.exports.API_TILESTATS_STATISTICS = '/tilestats/v1/{owner}/{tileset}';
module.exports.API_TILESTATS_LAYER = '/tilestats/v1/{owner}/{tileset}/{layer}';
module.exports.API_TILESTATS_ATTRIBUTE = '/tilestats/v1/{owner}/{tileset}/{layer}/{attribute}';

module.exports.API_STATIC = '/v4/{mapid}{+overlay}/{+xyz}/{width}x{height}{+retina}{.format}{?access_token}';

module.exports.API_STYLES_LIST = '/styles/v1/{owner}';
module.exports.API_STYLES_CREATE = '/styles/v1/{owner}';
module.exports.API_STYLES_READ = '/styles/v1/{owner}/{styleid}';
module.exports.API_STYLES_UPDATE = '/styles/v1/{owner}/{styleid}';
module.exports.API_STYLES_DELETE = '/styles/v1/{owner}/{styleid}';
module.exports.API_STYLES_EMBED = '/styles/v1/{owner}/{styleid}.html{?zoomwheel,title,access_token}';
module.exports.API_STYLES_SPRITE = '/styles/v1/{owner}/{styleid}/sprite{+retina}{.format}';
module.exports.API_STYLES_SPRITE_ADD_ICON = '/styles/v1/{owner}/{styleid}/sprite/{iconName}';
module.exports.API_STYLES_SPRITE_DELETE_ICON = '/styles/v1/{owner}/{styleid}/sprite/{iconName}';

module.exports.API_STYLES_FONT_GLYPH_RANGES = '/fonts/v1/{owner}/{font}/{start}-{end}.pbf'


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/*
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var require;var require;!function(t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):"undefined"!=typeof window?window.Promise=t():"undefined"!=typeof global?global.Promise=t():"undefined"!=typeof self&&(self.Promise=t())}(function(){var t;return function e(t,n,o){function r(u,c){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!c&&f)return require(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+u+"'")}var s=n[u]={exports:{}};t[u][0].call(s.exports,function(e){var n=t[u][1][e];return r(n?n:e)},s,s.exports,e,t,n,o)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(t,e,n){var o=t("../lib/decorators/unhandledRejection"),r=o(t("../lib/Promise"));e.exports="undefined"!=typeof global?global.Promise=r:"undefined"!=typeof self?self.Promise=r:r},{"../lib/Promise":2,"../lib/decorators/unhandledRejection":4}],2:[function(e,n,o){!function(t){"use strict";t(function(t){var e=t("./makePromise"),n=t("./Scheduler"),o=t("./env").asap;return e({scheduler:new n(o)})})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{"./Scheduler":3,"./env":5,"./makePromise":7}],3:[function(e,n,o){!function(t){"use strict";t(function(){function t(t){this._async=t,this._running=!1,this._queue=this,this._queueLen=0,this._afterQueue={},this._afterQueueLen=0;var e=this;this.drain=function(){e._drain()}}return t.prototype.enqueue=function(t){this._queue[this._queueLen++]=t,this.run()},t.prototype.afterQueue=function(t){this._afterQueue[this._afterQueueLen++]=t,this.run()},t.prototype.run=function(){this._running||(this._running=!0,this._async(this.drain))},t.prototype._drain=function(){for(var t=0;t<this._queueLen;++t)this._queue[t].run(),this._queue[t]=void 0;for(this._queueLen=0,this._running=!1,t=0;t<this._afterQueueLen;++t)this._afterQueue[t].run(),this._afterQueue[t]=void 0;this._afterQueueLen=0},t})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}],4:[function(e,n,o){!function(t){"use strict";t(function(t){function e(t){throw t}function n(){}var o=t("../env").setTimer,r=t("../format");return function(t){function i(t){t.handled||(l.push(t),a("Potentially unhandled rejection ["+t.id+"] "+r.formatError(t.value)))}function u(t){var e=l.indexOf(t);e>=0&&(l.splice(e,1),h("Handled previous rejection ["+t.id+"] "+r.formatObject(t.value)))}function c(t,e){p.push(t,e),null===d&&(d=o(f,0))}function f(){for(d=null;p.length>0;)p.shift()(p.shift())}var s,a=n,h=n;"undefined"!=typeof console&&(s=console,a="undefined"!=typeof s.error?function(t){s.error(t)}:function(t){s.log(t)},h="undefined"!=typeof s.info?function(t){s.info(t)}:function(t){s.log(t)}),t.onPotentiallyUnhandledRejection=function(t){c(i,t)},t.onPotentiallyUnhandledRejectionHandled=function(t){c(u,t)},t.onFatalRejection=function(t){c(e,t.value)};var p=[],l=[],d=null;return t}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{"../env":5,"../format":6}],5:[function(e,n,o){!function(t){"use strict";t(function(t){function e(){return"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)}function n(){return"function"==typeof MutationObserver&&MutationObserver||"function"==typeof WebKitMutationObserver&&WebKitMutationObserver}function o(t){function e(){var t=n;n=void 0,t()}var n,o=document.createTextNode(""),r=new t(e);r.observe(o,{characterData:!0});var i=0;return function(t){n=t,o.data=i^=1}}var r,i="undefined"!=typeof setTimeout&&setTimeout,u=function(t,e){return setTimeout(t,e)},c=function(t){return clearTimeout(t)},f=function(t){return i(t,0)};if(e())f=function(t){return process.nextTick(t)};else if(r=n())f=o(r);else if(!i){var s=t,a=s("vertx");u=function(t,e){return a.setTimer(e,t)},c=a.cancelTimer,f=a.runOnLoop||a.runOnContext}return{setTimer:u,clearTimer:c,asap:f}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t(e)})},{}],6:[function(e,n,o){!function(t){"use strict";t(function(){function t(t){var n="object"==typeof t&&null!==t&&(t.stack||t.message)?t.stack||t.message:e(t);return t instanceof Error?n:n+" (WARNING: non-Error used)"}function e(t){var e=String(t);return"[object Object]"===e&&"undefined"!=typeof JSON&&(e=n(t,e)),e}function n(t,e){try{return JSON.stringify(t)}catch(n){return e}}return{formatError:t,formatObject:e,tryStringify:n}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}],7:[function(e,n,o){!function(t){"use strict";t(function(){return function(t){function e(t,e){this._handler=t===_?e:n(t)}function n(t){function e(t){r.resolve(t)}function n(t){r.reject(t)}function o(t){r.notify(t)}var r=new b;try{t(e,n,o)}catch(i){n(i)}return r}function o(t){return S(t)?t:new e(_,new x(y(t)))}function r(t){return new e(_,new x(new P(t)))}function i(){return $}function u(){return new e(_,new b)}function c(t,e){var n=new b(t.receiver,t.join().context);return new e(_,n)}function f(t){return a(K,null,t)}function s(t,e){return a(F,t,e)}function a(t,n,o){function r(e,r,u){u.resolved||h(o,i,e,t(n,r,e),u)}function i(t,e,n){a[t]=e,0===--s&&n.become(new q(a))}for(var u,c="function"==typeof n?r:i,f=new b,s=o.length>>>0,a=new Array(s),p=0;p<o.length&&!f.resolved;++p)u=o[p],void 0!==u||p in o?h(o,c,p,u,f):--s;return 0===s&&f.become(new q(a)),new e(_,f)}function h(t,e,n,o,r){if(U(o)){var i=m(o),u=i.state();0===u?i.fold(e,n,void 0,r):u>0?e(n,i.value,r):(r.become(i),p(t,n+1,i))}else e(n,o,r)}function p(t,e,n){for(var o=e;o<t.length;++o)l(y(t[o]),n)}function l(t,e){if(t!==e){var n=t.state();0===n?t.visit(t,void 0,t._unreport):0>n&&t._unreport()}}function d(t){return"object"!=typeof t||null===t?r(new TypeError("non-iterable passed to race()")):0===t.length?i():1===t.length?o(t[0]):v(t)}function v(t){var n,o,r,i=new b;for(n=0;n<t.length;++n)if(o=t[n],void 0!==o||n in t){if(r=y(o),0!==r.state()){i.become(r),p(t,n+1,r);break}r.visit(i,i.resolve,i.reject)}return new e(_,i)}function y(t){return S(t)?t._handler.join():U(t)?j(t):new q(t)}function m(t){return S(t)?t._handler.join():j(t)}function j(t){try{var e=t.then;return"function"==typeof e?new g(e,t):new q(t)}catch(n){return new P(n)}}function _(){}function w(){}function b(t,n){e.createContext(this,n),this.consumers=void 0,this.receiver=t,this.handler=void 0,this.resolved=!1}function x(t){this.handler=t}function g(t,e){b.call(this),I.enqueue(new E(t,e,this))}function q(t){e.createContext(this),this.value=t}function P(t){e.createContext(this),this.id=++Y,this.value=t,this.handled=!1,this.reported=!1,this._report()}function R(t,e){this.rejection=t,this.context=e}function C(t){this.rejection=t}function O(){return new P(new TypeError("Promise cycle"))}function T(t,e){this.continuation=t,this.handler=e}function Q(t,e){this.handler=e,this.value=t}function E(t,e,n){this._then=t,this.thenable=e,this.resolver=n}function L(t,e,n,o,r){try{t.call(e,n,o,r)}catch(i){o(i)}}function k(t,e,n,o){this.f=t,this.z=e,this.c=n,this.to=o,this.resolver=X,this.receiver=this}function S(t){return t instanceof e}function U(t){return("object"==typeof t||"function"==typeof t)&&null!==t}function H(t,n,o,r){return"function"!=typeof t?r.become(n):(e.enterContext(n),W(t,n.value,o,r),void e.exitContext())}function N(t,n,o,r,i){return"function"!=typeof t?i.become(o):(e.enterContext(o),z(t,n,o.value,r,i),void e.exitContext())}function M(t,n,o,r,i){return"function"!=typeof t?i.notify(n):(e.enterContext(o),A(t,n,r,i),void e.exitContext())}function F(t,e,n){try{return t(e,n)}catch(o){return r(o)}}function W(t,e,n,o){try{o.become(y(t.call(n,e)))}catch(r){o.become(new P(r))}}function z(t,e,n,o,r){try{t.call(o,e,n,r)}catch(i){r.become(new P(i))}}function A(t,e,n,o){try{o.notify(t.call(n,e))}catch(r){o.notify(r)}}function J(t,e){e.prototype=V(t.prototype),e.prototype.constructor=e}function K(t,e){return e}function D(){}function G(){return"undefined"!=typeof process&&null!==process&&"function"==typeof process.emit?function(t,e){return"unhandledRejection"===t?process.emit(t,e.value,e):process.emit(t,e)}:"undefined"!=typeof self&&"function"==typeof CustomEvent?function(t,e,n){var o=!1;try{var r=new n("unhandledRejection");o=r instanceof n}catch(i){}return o?function(t,o){var r=new n(t,{detail:{reason:o.value,key:o},bubbles:!1,cancelable:!0});return!e.dispatchEvent(r)}:t}(D,self,CustomEvent):D}var I=t.scheduler,B=G(),V=Object.create||function(t){function e(){}return e.prototype=t,new e};e.resolve=o,e.reject=r,e.never=i,e._defer=u,e._handler=y,e.prototype.then=function(t,e,n){var o=this._handler,r=o.join().state();if("function"!=typeof t&&r>0||"function"!=typeof e&&0>r)return new this.constructor(_,o);var i=this._beget(),u=i._handler;return o.chain(u,o.receiver,t,e,n),i},e.prototype["catch"]=function(t){return this.then(void 0,t)},e.prototype._beget=function(){return c(this._handler,this.constructor)},e.all=f,e.race=d,e._traverse=s,e._visitRemaining=p,_.prototype.when=_.prototype.become=_.prototype.notify=_.prototype.fail=_.prototype._unreport=_.prototype._report=D,_.prototype._state=0,_.prototype.state=function(){return this._state},_.prototype.join=function(){for(var t=this;void 0!==t.handler;)t=t.handler;return t},_.prototype.chain=function(t,e,n,o,r){this.when({resolver:t,receiver:e,fulfilled:n,rejected:o,progress:r})},_.prototype.visit=function(t,e,n,o){this.chain(X,t,e,n,o)},_.prototype.fold=function(t,e,n,o){this.when(new k(t,e,n,o))},J(_,w),w.prototype.become=function(t){t.fail()};var X=new w;J(_,b),b.prototype._state=0,b.prototype.resolve=function(t){this.become(y(t))},b.prototype.reject=function(t){this.resolved||this.become(new P(t))},b.prototype.join=function(){if(!this.resolved)return this;for(var t=this;void 0!==t.handler;)if(t=t.handler,t===this)return this.handler=O();return t},b.prototype.run=function(){var t=this.consumers,e=this.handler;this.handler=this.handler.join(),this.consumers=void 0;for(var n=0;n<t.length;++n)e.when(t[n])},b.prototype.become=function(t){this.resolved||(this.resolved=!0,this.handler=t,void 0!==this.consumers&&I.enqueue(this),void 0!==this.context&&t._report(this.context))},b.prototype.when=function(t){this.resolved?I.enqueue(new T(t,this.handler)):void 0===this.consumers?this.consumers=[t]:this.consumers.push(t)},b.prototype.notify=function(t){this.resolved||I.enqueue(new Q(t,this))},b.prototype.fail=function(t){var e="undefined"==typeof t?this.context:t;this.resolved&&this.handler.join().fail(e)},b.prototype._report=function(t){this.resolved&&this.handler.join()._report(t)},b.prototype._unreport=function(){this.resolved&&this.handler.join()._unreport()},J(_,x),x.prototype.when=function(t){I.enqueue(new T(t,this))},x.prototype._report=function(t){this.join()._report(t)},x.prototype._unreport=function(){this.join()._unreport()},J(b,g),J(_,q),q.prototype._state=1,q.prototype.fold=function(t,e,n,o){N(t,e,this,n,o)},q.prototype.when=function(t){H(t.fulfilled,this,t.receiver,t.resolver)};var Y=0;J(_,P),P.prototype._state=-1,P.prototype.fold=function(t,e,n,o){o.become(this)},P.prototype.when=function(t){"function"==typeof t.rejected&&this._unreport(),H(t.rejected,this,t.receiver,t.resolver)},P.prototype._report=function(t){I.afterQueue(new R(this,t))},P.prototype._unreport=function(){this.handled||(this.handled=!0,I.afterQueue(new C(this)))},P.prototype.fail=function(t){this.reported=!0,B("unhandledRejection",this),e.onFatalRejection(this,void 0===t?this.context:t)},R.prototype.run=function(){this.rejection.handled||this.rejection.reported||(this.rejection.reported=!0,B("unhandledRejection",this.rejection)||e.onPotentiallyUnhandledRejection(this.rejection,this.context))},C.prototype.run=function(){this.rejection.reported&&(B("rejectionHandled",this.rejection)||e.onPotentiallyUnhandledRejectionHandled(this.rejection))},e.createContext=e.enterContext=e.exitContext=e.onPotentiallyUnhandledRejection=e.onPotentiallyUnhandledRejectionHandled=e.onFatalRejection=D;var Z=new _,$=new e(_,Z);return T.prototype.run=function(){this.handler.join().when(this.continuation)},Q.prototype.run=function(){var t=this.handler.consumers;if(void 0!==t)for(var e,n=0;n<t.length;++n)e=t[n],M(e.progress,this.value,this.handler,e.receiver,e.resolver)},E.prototype.run=function(){function t(t){o.resolve(t)}function e(t){o.reject(t)}function n(t){o.notify(t)}var o=this.resolver;L(this._then,this.thenable,t,e,n)},k.prototype.fulfilled=function(t){this.f.call(this.c,this.z,t,this.to)},k.prototype.rejected=function(t){this.to.reject(t)},k.prototype.progress=function(t){this.to.notify(t)},e}})}("function"==typeof t&&t.amd?t:function(t){n.exports=t()})},{}]},{},[1])(1)});
//# sourceMappingURL=Promise.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26), __webpack_require__(2)))

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var mixin, xWWWFormURLEncoder, origin, urlRE, absoluteUrlRE, fullyQualifiedUrlRE;

mixin = __webpack_require__(3);
xWWWFormURLEncoder = __webpack_require__(23);

urlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i;
absoluteUrlRE = /^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i;
fullyQualifiedUrlRE = /([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i;

/**
 * Apply params to the template to create a URL.
 *
 * Parameters that are not applied directly to the template, are appended
 * to the URL as query string parameters.
 *
 * @param {string} template the URI template
 * @param {Object} params parameters to apply to the template
 * @return {string} the resulting URL
 */
function buildUrl(template, params) {
	// internal builder to convert template with params.
	var url, name, queryStringParams, queryString, re;

	url = template;
	queryStringParams = {};

	if (params) {
		for (name in params) {
			/*jshint forin:false */
			re = new RegExp('\\{' + name + '\\}');
			if (re.test(url)) {
				url = url.replace(re, encodeURIComponent(params[name]), 'g');
			}
			else {
				queryStringParams[name] = params[name];
			}
		}

		queryString = xWWWFormURLEncoder.write(queryStringParams);
		if (queryString) {
			url += url.indexOf('?') === -1 ? '?' : '&';
			url += queryString;
		}
	}
	return url;
}

function startsWith(str, test) {
	return str.indexOf(test) === 0;
}

/**
 * Create a new URL Builder
 *
 * @param {string|UrlBuilder} template the base template to build from, may be another UrlBuilder
 * @param {Object} [params] base parameters
 * @constructor
 */
function UrlBuilder(template, params) {
	if (!(this instanceof UrlBuilder)) {
		// invoke as a constructor
		return new UrlBuilder(template, params);
	}

	if (template instanceof UrlBuilder) {
		this._template = template.template;
		this._params = mixin({}, this._params, params);
	}
	else {
		this._template = (template || '').toString();
		this._params = params || {};
	}
}

UrlBuilder.prototype = {

	/**
	 * Create a new UrlBuilder instance that extends the current builder.
	 * The current builder is unmodified.
	 *
	 * @param {string} [template] URL template to append to the current template
	 * @param {Object} [params] params to combine with current params.  New params override existing params
	 * @return {UrlBuilder} the new builder
	 */
	append: function (template,  params) {
		// TODO consider query strings and fragments
		return new UrlBuilder(this._template + template, mixin({}, this._params, params));
	},

	/**
	 * Create a new UrlBuilder with a fully qualified URL based on the
	 * window's location or base href and the current templates relative URL.
	 *
	 * Path variables are preserved.
	 *
	 * *Browser only*
	 *
	 * @return {UrlBuilder} the fully qualified URL template
	 */
	fullyQualify: function () {
		if (typeof location === 'undefined') { return this; }
		if (this.isFullyQualified()) { return this; }

		var template = this._template;

		if (startsWith(template, '//')) {
			template = origin.protocol + template;
		}
		else if (startsWith(template, '/')) {
			template = origin.origin + template;
		}
		else if (!this.isAbsolute()) {
			template = origin.origin + origin.pathname.substring(0, origin.pathname.lastIndexOf('/') + 1);
		}

		if (template.indexOf('/', 8) === -1) {
			// default the pathname to '/'
			template = template + '/';
		}

		return new UrlBuilder(template, this._params);
	},

	/**
	 * True if the URL is absolute
	 *
	 * @return {boolean}
	 */
	isAbsolute: function () {
		return absoluteUrlRE.test(this.build());
	},

	/**
	 * True if the URL is fully qualified
	 *
	 * @return {boolean}
	 */
	isFullyQualified: function () {
		return fullyQualifiedUrlRE.test(this.build());
	},

	/**
	 * True if the URL is cross origin. The protocol, host and port must not be
	 * the same in order to be cross origin,
	 *
	 * @return {boolean}
	 */
	isCrossOrigin: function () {
		if (!origin) {
			return true;
		}
		var url = this.parts();
		return url.protocol !== origin.protocol ||
		       url.hostname !== origin.hostname ||
		       url.port !== origin.port;
	},

	/**
	 * Split a URL into its consituent parts following the naming convention of
	 * 'window.location'. One difference is that the port will contain the
	 * protocol default if not specified.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/DOM/window.location
	 *
	 * @returns {Object} a 'window.location'-like object
	 */
	parts: function () {
		/*jshint maxcomplexity:20 */
		var url, parts;
		url = this.fullyQualify().build().match(urlRE);
		parts = {
			href: url[0],
			protocol: url[1],
			host: url[3] || '',
			hostname: url[4] || '',
			port: url[6],
			pathname: url[7] || '',
			search: url[8] || '',
			hash: url[9] || ''
		};
		parts.origin = parts.protocol + '//' + parts.host;
		parts.port = parts.port || (parts.protocol === 'https:' ? '443' : parts.protocol === 'http:' ? '80' : '');
		return parts;
	},

	/**
	 * Expand the template replacing path variables with parameters
	 *
	 * @param {Object} [params] params to combine with current params.  New params override existing params
	 * @return {string} the expanded URL
	 */
	build: function (params) {
		return buildUrl(this._template, mixin({}, this._params, params));
	},

	/**
	 * @see build
	 */
	toString: function () {
		return this.build();
	}

};

origin = typeof location !== 'undefined' ? new UrlBuilder(location.href).parts() : void 0;

module.exports = UrlBuilder;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



/**
 * Plain JS Object containing properties that represent an HTTP request.
 *
 * Depending on the capabilities of the underlying client, a request
 * may be cancelable. If a request may be canceled, the client will add
 * a canceled flag and cancel function to the request object. Canceling
 * the request will put the response into an error state.
 *
 * @field {string} [method='GET'] HTTP method, commonly GET, POST, PUT, DELETE or HEAD
 * @field {string|UrlBuilder} [path=''] path template with optional path variables
 * @field {Object} [params] parameters for the path template and query string
 * @field {Object} [headers] custom HTTP headers to send, in addition to the clients default headers
 * @field [entity] the HTTP entity, common for POST or PUT requests
 * @field {boolean} [canceled] true if the request has been canceled, set by the client
 * @field {Function} [cancel] cancels the request if invoked, provided by the client
 * @field {Client} [originator] the client that first handled this request, provided by the interceptor
 *
 * @class Request
 */

/**
 * Plain JS Object containing properties that represent an HTTP response
 *
 * @field {Object} [request] the request object as received by the root client
 * @field {Object} [raw] the underlying request object, like XmlHttpRequest in a browser
 * @field {number} [status.code] status code of the response (i.e. 200, 404)
 * @field {string} [status.text] status phrase of the response
 * @field {Object] [headers] response headers hash of normalized name, value pairs
 * @field [entity] the response body
 *
 * @class Response
 */

/**
 * HTTP client particularly suited for RESTful operations.
 *
 * @field {function} wrap wraps this client with a new interceptor returning the wrapped client
 *
 * @param {Request} the HTTP request
 * @returns {ResponsePromise<Response>} a promise the resolves to the HTTP response
 *
 * @class Client
 */

 /**
  * Extended when.js Promises/A+ promise with HTTP specific helpers
  *q
  * @method entity promise for the HTTP entity
  * @method status promise for the HTTP status code
  * @method headers promise for the HTTP response headers
  * @method header promise for a specific HTTP response header
  *
  * @class ResponsePromise
  * @extends Promise
  */

var client, target, platformDefault;

client = __webpack_require__(7);

if (typeof Promise !== 'function' && console && console.log) {
	console.log('An ES6 Promise implementation is required to use rest.js. See https://github.com/cujojs/when/blob/master/docs/es6-promise-shim.md for using when.js as a Promise polyfill.');
}

/**
 * Make a request with the default client
 * @param {Request} the HTTP request
 * @returns {Promise<Response>} a promise the resolves to the HTTP response
 */
function defaultClient() {
	return target.apply(void 0, arguments);
}

/**
 * Change the default client
 * @param {Client} client the new default client
 */
defaultClient.setDefaultClient = function setDefaultClient(client) {
	target = client;
};

/**
 * Obtain a direct reference to the current default client
 * @returns {Client} the default client
 */
defaultClient.getDefaultClient = function getDefaultClient() {
	return target;
};

/**
 * Reset the default client to the platform default
 */
defaultClient.resetDefaultClient = function resetDefaultClient() {
	target = platformDefault;
};

/**
 * @private
 */
defaultClient.setPlatformDefaultClient = function setPlatformDefaultClient(client) {
	if (platformDefault) {
		throw new Error('Unable to redefine platformDefaultClient');
	}
	target = platformDefault = client;
};

module.exports = client(defaultClient);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var interceptor, UrlBuilder;

interceptor = __webpack_require__(1);
UrlBuilder = __webpack_require__(18);

function startsWith(str, prefix) {
	return str.indexOf(prefix) === 0;
}

function endsWith(str, suffix) {
	return str.lastIndexOf(suffix) + suffix.length === str.length;
}

/**
 * Prefixes the request path with a common value.
 *
 * @param {Client} [client] client to wrap
 * @param {number} [config.prefix] path prefix
 *
 * @returns {Client}
 */
module.exports = interceptor({
	request: function (request, config) {
		var path;

		if (config.prefix && !(new UrlBuilder(request.path).isFullyQualified())) {
			path = config.prefix;
			if (request.path) {
				if (!endsWith(path, '/') && !startsWith(request.path, '/')) {
					// add missing '/' between path sections
					path += '/';
				}
				path += request.path;
			}
			request.path = path;
		}

		return request;
	}
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var interceptor, uriTemplate, mixin;

interceptor = __webpack_require__(1);
uriTemplate = __webpack_require__(79);
mixin = __webpack_require__(3);

/**
 * Applies request params to the path as a URI Template
 *
 * Params are removed from the request object, as they have been consumed.
 *
 * @see https://tools.ietf.org/html/rfc6570
 *
 * @param {Client} [client] client to wrap
 * @param {Object} [config.params] default param values
 * @param {string} [config.template] default template
 *
 * @returns {Client}
 */
module.exports = interceptor({
	init: function (config) {
		config.params = config.params || {};
		config.template = config.template || '';
		return config;
	},
	request: function (request, config) {
		var template, params;

		template = request.path || config.template;
		params = mixin({}, request.params, config.params);

		request.path = uriTemplate.expand(template, params);
		delete request.params;

		return request;
	}
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* Copyright 2014-2016 the original author or authors
* @license MIT, see LICENSE.txt for details
*
* @author Scott Andrews
*/



/**
 * Parse a MIME type into it's constituent parts
 *
 * @param {string} mime MIME type to parse
 * @return {{
 *   {string} raw the original MIME type
 *   {string} type the type and subtype
 *   {string} [suffix] mime suffix, including the plus, if any
 *   {Object} params key/value pair of attributes
 * }}
 */
function parse(mime) {
	var params, type;

	params = mime.split(';');
	type = params[0].trim().split('+');

	return {
		raw: mime,
		type: type[0],
		suffix: type[1] ? '+' + type[1] : '',
		params: params.slice(1).reduce(function (params, pair) {
			pair = pair.split('=');
			params[pair[0].trim()] = pair[1] ? pair[1].trim() : void 0;
			return params;
		}, {})
	};
}

module.exports = {
	parse: parse
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var encodedSpaceRE, urlEncodedSpaceRE;

encodedSpaceRE = /%20/g;
urlEncodedSpaceRE = /\+/g;

function urlEncode(str) {
	str = encodeURIComponent(str);
	// spec says space should be encoded as '+'
	return str.replace(encodedSpaceRE, '+');
}

function urlDecode(str) {
	// spec says space should be encoded as '+'
	str = str.replace(urlEncodedSpaceRE, ' ');
	return decodeURIComponent(str);
}

function append(str, name, value) {
	if (Array.isArray(value)) {
		value.forEach(function (value) {
			str = append(str, name, value);
		});
	}
	else {
		if (str.length > 0) {
			str += '&';
		}
		str += urlEncode(name);
		if (value !== undefined && value !== null) {
			str += '=' + urlEncode(value);
		}
	}
	return str;
}

module.exports = {

	read: function (str) {
		var obj = {};
		str.split('&').forEach(function (entry) {
			var pair, name, value;
			pair = entry.split('=');
			name = urlDecode(pair[0]);
			if (pair.length === 2) {
				value = urlDecode(pair[1]);
			}
			else {
				value = null;
			}
			if (name in obj) {
				if (!Array.isArray(obj[name])) {
					// convert to an array, perserving currnent value
					obj[name] = [obj[name]];
				}
				obj[name].push(value);
			}
			else {
				obj[name] = value;
			}
		});
		return obj;
	},

	write: function (obj) {
		var str = '';
		Object.keys(obj).forEach(function (name) {
			str = append(str, name, obj[name]);
		});
		return str;
	}

};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



/**
 * Attempt to invoke a function capturing the resulting value as a Promise
 *
 * If the method throws, the caught value used to reject the Promise.
 *
 * @param {function} work function to invoke
 * @returns {Promise} Promise for the output of the work function
 */
function attempt(work) {
	try {
		return Promise.resolve(work());
	}
	catch (e) {
		return Promise.reject(e);
	}
}

module.exports = attempt;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



/**
 * Normalize HTTP header names using the pseudo camel case.
 *
 * For example:
 *   content-type         -> Content-Type
 *   accepts              -> Accepts
 *   x-custom-header-name -> X-Custom-Header-Name
 *
 * @param {string} name the raw header name
 * @return {string} the normalized header name
 */
function normalizeHeaderName(name) {
	return name.toLowerCase()
		.split('-')
		.map(function (chunk) { return chunk.charAt(0).toUpperCase() + chunk.slice(1); })
		.join('-');
}

module.exports = normalizeHeaderName;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function autocomplete(input, latInput, lngInput) {
  if (!input) return;
  var dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener("place_changed", function () {
    var place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });

  // for when someone hits enter
  input.on("keydown", function (e) {
    if (e.keyCode === 13) e.preventDefault();
  });
}

exports.default = autocomplete;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _bling = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ajaxHeart(e) {
  var _this = this;

  e.preventDefault();
  _axios2.default.post(this.action).then(function (res) {
    var isHearted = _this.heart.classList.toggle("heart__button--hearted");
    (0, _bling.$)(".heart-count").textContent = res.data.hearts.length;
    if (isHearted) {
      _this.heart.classList.add("heart__button--float");
      setTimeout(function () {
        return _this.heart.classList.remove("heart__button--float");
      }, 2500);
    }
  }).catch(console.error);
}

exports.default = ajaxHeart;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _bling = __webpack_require__(4);

var _mapboxGl = __webpack_require__(57);

var _mapboxGl2 = _interopRequireDefault(_mapboxGl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapboxGeocoder = __webpack_require__(56);
var key = void 0;
var geocoder;
function initMap(mapDiv) {
  _axios2.default.get("api/token").then(function (res) {
    console.log(res.data);
    _mapboxGl2.default.accessToken = res.data;

    geocoder = new MapboxGeocoder({
      accessToken: _mapboxGl2.default.accessToken,
      placeholder: "Search for a location"
    });
    makeMap(mapDiv);
  });
}

function loadPlaces(map) {
  var lat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 43.2;
  var lng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -79.8;

  var coordinates = [];
  _axios2.default.get("/api/stores/near?lat=" + lat + "&lng=" + lng).then(function (res) {
    var places = res.data;
    if (!places.length) {
      alert("no places found :(");
      return;
    }

    var markers = places.map(function (place) {
      var _place$location$coord = _slicedToArray(place.location.coordinates, 2),
          placeLng = _place$location$coord[0],
          placeLat = _place$location$coord[1];

      coordinates.push(place.location.coordinates);
      var position = { lat: placeLat, lng: placeLng };
      var el = document.createElement("div");
      el.className = "marker";
      new _mapboxGl2.default.Marker(el).setLngLat(place.location.coordinates).setPopup(new _mapboxGl2.default.Popup({ offset: 25 }) // add popups
      .setHTML("<a href=\"/stores/" + place.slug + "\"><img src=\"/uploads/" + (place.photo || "store.png") + "\" alt=\"" + place.name + "\" /><p>" + place.name + "-" + place.location.address + "</p></a>")).addTo(map);
    });
    var bounds = coordinates.reduce(function (bounds, coord) {
      return bounds.extend(coord);
    }, new _mapboxGl2.default.LngLatBounds(coordinates[0], coordinates[0]));
    map.fitBounds(bounds, {
      padding: 30
    });
  });
}

function makeMap(mapDiv) {
  if (!mapDiv) return;
  var map = new _mapboxGl2.default.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/streets-v9", // stylesheet location
    center: [-79.8, 43.2], // starting position [lng, lat]
    zoom: 9
  });
  map.addControl(new _mapboxGl2.default.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }));
  loadPlaces(map);
  var autocomplete = new MapboxGeocoder({
    accessToken: _mapboxGl2.default.accessToken
  });
  map.addControl(autocomplete);
  autocomplete.on("result", function (ev) {
    loadPlaces(map, ev.result.geometry.coordinates[1], ev.result.geometry.coordinates[0]);
  });
}

exports.default = initMap;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _dompurify = __webpack_require__(50);

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchResultsHTML(stores) {
    return stores.map(function (store) {
        return '\n            <a href="/stores/' + store.slug + '" class="search__result">\n                <strong>' + store.name + '</strong>\n                <p>' + store.description + '</p>\n            </a>\n        ';
    }).join("");
}

function typeAhead(search) {
    if (!search) return;

    var searchInput = search.querySelector('input[name="search"]');
    var searchResults = search.querySelector(".search__results");

    searchInput.on("input", function () {
        var _this = this;

        if (!this.value) {
            searchResults.style.display = "none";
            return;
        }

        searchResults.style.display = "block";
        searchResults.innerHTML = '';

        _axios2.default.get('/api/search?q=' + this.value).then(function (res) {
            if (res.data.length) {
                searchResults.innerHTML = _dompurify2.default.sanitize(searchResultsHTML(res.data));
                return;
            }
            searchResults.innerHTML = _dompurify2.default.sanitize('<div class="search__result">No results found for ' + _this.value + ' found.</div>');
        }).catch(function (err) {
            console.error(err);
        });
    });

    searchInput.on('keyup', function (e) {
        if (![38, 40, 13].includes(e.keyCode)) return;
        var activeClass = 'search__result--active';
        var current = search.querySelector('.' + activeClass);
        var items = search.querySelectorAll('.search__result');
        var next = void 0;
        if (e.keyCode === 40 && current) {
            next = current.nextElementSibling || items[0];
        } else if (e.keyCode === 40) {
            next = items[0];
        } else if (e.keyCode === 38 && current) {
            next = current.previousElementSibling || items[items.length - 1];
        } else if (e.keyCode === 38) {
            next = items[items.length - 1];
        } else if (e.keyCode === 13 && current.href) {
            window.location = current.href;
        }
        if (current) {
            current.classList.remove(activeClass);
        }
        next.classList.add(activeClass);
    });
}

exports.default = typeAhead;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(13);
var Axios = __webpack_require__(35);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(10);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(11);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(49);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(10);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(36);
var dispatchRequest = __webpack_require__(37);
var isAbsoluteURL = __webpack_require__(45);
var combineURLs = __webpack_require__(43);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(40);
var isCancel = __webpack_require__(11);
var defaults = __webpack_require__(6);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(12);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function(factory) {
    'use strict';
    /* global window: false, define: false, module: false */
    var root = typeof window === 'undefined' ? null : window;

    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){ return factory(root); }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined') {
        module.exports = factory(root);
    } else {
        root.DOMPurify = factory(root);
    }
}(function factory(window) {
    'use strict';

    var DOMPurify = function(window) {
        return factory(window);
    };

    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */
    DOMPurify.version = '0.8.5';

    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */
    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
        // not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
    }

    var document = window.document;
    var originalDocument = document;
    var DocumentFragment = window.DocumentFragment;
    var HTMLTemplateElement = window.HTMLTemplateElement;
    var Node = window.Node;
    var NodeFilter = window.NodeFilter;
    var NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap;
    var Text = window.Text;
    var Comment = window.Comment;
    var DOMParser = window.DOMParser;

    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
        var template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }
    var implementation = document.implementation;
    var createNodeIterator = document.createNodeIterator;
    var getElementsByTagName = document.getElementsByTagName;
    var createDocumentFragment = document.createDocumentFragment;
    var importNode = originalDocument.importNode;

    var hooks = {};

    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported =
        typeof implementation.createHTMLDocument !== 'undefined' &&
        document.documentMode !== 9;

    /* Add properties to a lookup table */
    var _addToSet = function(set, array) {
        var l = array.length;
        while (l--) {
            if (typeof array[l] === 'string') {
                array[l] = array[l].toLowerCase();
            }
            set[array[l]] = true;
        }
        return set;
    };

    /* Shallow clone an object */
    var _cloneObj = function(object) {
        var newObject = {};
        var property;
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                newObject[property] = object[property];
            }
        }
        return newObject;
    };

    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */
    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = _addToSet({}, [

        // HTML
        'a','abbr','acronym','address','area','article','aside','audio','b',
        'bdi','bdo','big','blink','blockquote','body','br','button','canvas',
        'caption','center','cite','code','col','colgroup','content','data',
        'datalist','dd','decorator','del','details','dfn','dir','div','dl','dt',
        'element','em','fieldset','figcaption','figure','font','footer','form',
        'h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i',
        'img','input','ins','kbd','label','legend','li','main','map','mark',
        'marquee','menu','menuitem','meter','nav','nobr','ol','optgroup',
        'option','output','p','pre','progress','q','rp','rt','ruby','s','samp',
        'section','select','shadow','small','source','spacer','span','strike',
        'strong','style','sub','summary','sup','table','tbody','td','template',
        'textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var',
        'video','wbr',

        // SVG
        'svg','altglyph','altglyphdef','altglyphitem','animatecolor',
        'animatemotion','animatetransform','circle','clippath','defs','desc',
        'ellipse','filter','font','g','glyph','glyphref','hkern','image','line',
        'lineargradient','marker','mask','metadata','mpath','path','pattern',
        'polygon','polyline','radialgradient','rect','stop','switch','symbol',
        'text','textpath','title','tref','tspan','view','vkern',

        // SVG Filters
        'feBlend','feColorMatrix','feComponentTransfer','feComposite',
        'feConvolveMatrix','feDiffuseLighting','feDisplacementMap',
        'feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur',
        'feMerge','feMergeNode','feMorphology','feOffset',
        'feSpecularLighting','feTile','feTurbulence',

        //MathML
        'math','menclose','merror','mfenced','mfrac','mglyph','mi','mlabeledtr',
        'mmuliscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow',
        'ms','mpspace','msqrt','mystyle','msub','msup','msubsup','mtable','mtd',
        'mtext','mtr','munder','munderover',

        //Text
        '#text'
    ]);

    /* Allowed attribute names */
    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = _addToSet({}, [

        // HTML
        'accept','action','align','alt','autocomplete','background','bgcolor',
        'border','cellpadding','cellspacing','checked','cite','class','clear','color',
        'cols','colspan','coords','datetime','default','dir','disabled',
        'download','enctype','face','for','headers','height','hidden','high','href',
        'hreflang','id','ismap','label','lang','list','loop', 'low','max',
        'maxlength','media','method','min','multiple','name','noshade','novalidate',
        'nowrap','open','optimum','pattern','placeholder','poster','preload','pubdate',
        'radiogroup','readonly','rel','required','rev','reversed','rows',
        'rowspan','spellcheck','scope','selected','shape','size','span',
        'srclang','start','src','step','style','summary','tabindex','title',
        'type','usemap','valign','value','width','xmlns',

        // SVG
        'accent-height','accumulate','additivive','alignment-baseline',
        'ascent','attributename','attributetype','azimuth','basefrequency',
        'baseline-shift','begin','bias','by','clip','clip-path','clip-rule',
        'color','color-interpolation','color-interpolation-filters','color-profile',
        'color-rendering','cx','cy','d','dx','dy','diffuseconstant','direction',
        'display','divisor','dur','edgemode','elevation','end','fill','fill-opacity',
        'fill-rule','filter','flood-color','flood-opacity','font-family','font-size',
        'font-size-adjust','font-stretch','font-style','font-variant','font-weight',
        'fx', 'fy','g1','g2','glyph-name','glyphref','gradientunits','gradienttransform',
        'image-rendering','in','in2','k','k1','k2','k3','k4','kerning','keypoints',
        'keysplines','keytimes','lengthadjust','letter-spacing','kernelmatrix',
        'kernelunitlength','lighting-color','local','marker-end','marker-mid',
        'marker-start','markerheight','markerunits','markerwidth','maskcontentunits',
        'maskunits','max','mask','mode','min','numoctaves','offset','operator',
        'opacity','order','orient','orientation','origin','overflow','paint-order',
        'path','pathlength','patterncontentunits','patterntransform','patternunits',
        'points','preservealpha','r','rx','ry','radius','refx','refy','repeatcount',
        'repeatdur','restart','result','rotate','scale','seed','shape-rendering',
        'specularconstant','specularexponent','spreadmethod','stddeviation','stitchtiles',
        'stop-color','stop-opacity','stroke-dasharray','stroke-dashoffset','stroke-linecap',
        'stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke','stroke-width',
        'surfacescale','targetx','targety','transform','text-anchor','text-decoration',
        'text-rendering','textlength','u1','u2','unicode','values','viewbox',
        'visibility','vert-adv-y','vert-origin-x','vert-origin-y','word-spacing',
        'wrap','writing-mode','xchannelselector','ychannelselector','x','x1','x2',
        'y','y1','y2','z','zoomandpan',

        // MathML
        'accent','accentunder','bevelled','close','columnsalign','columnlines',
        'columnspan','denomalign','depth','display','displaystyle','fence',
        'frame','largeop','length','linethickness','lspace','lquote',
        'mathbackground','mathcolor','mathsize','mathvariant','maxsize',
        'minsize','movablelimits','notation','numalign','open','rowalign',
        'rowlines','rowspacing','rowspan','rspace','rquote','scriptlevel',
        'scriptminsize','scriptsizemultiplier','selection','separator',
        'separators','stretchy','subscriptshift','supscriptshift','symmetric',
        'voffset',

        // XML
        'xlink:href','xml:id','xlink:title','xml:space','xmlns:xlink'
    ]);

    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    var FORBID_TAGS = null;

    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    var FORBID_ATTR = null;

    /* Decide if custom data attributes are okay */
    var ALLOW_DATA_ATTR = true;

    /* Decide if unknown protocols are okay */
    var ALLOW_UNKNOWN_PROTOCOLS = false;

    /* Output should be safe for jQuery's $() factory? */
    var SAFE_FOR_JQUERY = false;

    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    var SAFE_FOR_TEMPLATES = false;

    /* Specify template detection regex for SAFE_FOR_TEMPLATES mode */
    var MUSTACHE_EXPR = /\{\{[\s\S]*|[\s\S]*\}\}/gm;
    var ERB_EXPR = /<%[\s\S]*|[\s\S]*%>/gm;

    /* Decide if document with <html>... should be returned */
    var WHOLE_DOCUMENT = false;

    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html string.
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    var RETURN_DOM = false;

    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html string */
    var RETURN_DOM_FRAGMENT = false;

    /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify. */
    var RETURN_DOM_IMPORT = false;

    /* Output should be free from DOM clobbering attacks? */
    var SANITIZE_DOM = true;

    /* Keep element content when removing element? */
    var KEEP_CONTENT = true;

    /* Tags to ignore content of when KEEP_CONTENT is true */
    var FORBID_CONTENTS = _addToSet({}, [
        'audio', 'head', 'math', 'script', 'style', 'svg', 'video'
    ]);

    /* Tags that are safe for data: URIs */
    var DATA_URI_TAGS = _addToSet({}, [
        'audio', 'video', 'img', 'source'
    ]);

    /* Attributes safe for values like "javascript:" */
    var URI_SAFE_ATTRIBUTES = _addToSet({}, [
        'alt','class','for','id','label','name','pattern','placeholder',
        'summary','title','value','style','xmlns'
    ]);

    /* Keep a reference to config to pass to hooks */
    var CONFIG = null;

    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */

    var formElement = document.createElement('form');

    /**
     * _parseConfig
     *
     * @param  optional config literal
     */
    var _parseConfig = function(cfg) {
        /* Shield configuration object from tampering */
        if (typeof cfg !== 'object') {
            cfg = {};
        }

        /* Set configuration parameters */
        ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ?
            _addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ?
            _addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ?
            _addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ?
            _addToSet({}, cfg.FORBID_ATTR) : {};
        ALLOW_DATA_ATTR     = cfg.ALLOW_DATA_ATTR     !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        SAFE_FOR_JQUERY     = cfg.SAFE_FOR_JQUERY     ||  false; // Default false
        SAFE_FOR_TEMPLATES  = cfg.SAFE_FOR_TEMPLATES  ||  false; // Default false
        WHOLE_DOCUMENT      = cfg.WHOLE_DOCUMENT      ||  false; // Default false
        RETURN_DOM          = cfg.RETURN_DOM          ||  false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT ||  false; // Default false
        RETURN_DOM_IMPORT   = cfg.RETURN_DOM_IMPORT   ||  false; // Default false
        SANITIZE_DOM        = cfg.SANITIZE_DOM        !== false; // Default true
        KEEP_CONTENT        = cfg.KEEP_CONTENT        !== false; // Default true

        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }

        /* Merge configuration parameters */
        if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = _cloneObj(ALLOWED_TAGS);
            }
            _addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }
        if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = _cloneObj(ALLOWED_ATTR);
            }
            _addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
            _addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }

        /* Add #text in case KEEP_CONTENT is set to true */
        if (KEEP_CONTENT) { ALLOWED_TAGS['#text'] = true; }

        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (Object && 'freeze' in Object) { Object.freeze(cfg); }

        CONFIG = cfg;
    };

   /**
     * _forceRemove
     *
     * @param  a DOM node
     */
    var _forceRemove = function(node) {
        DOMPurify.removed.push({element: node});
        try {
            node.parentNode.removeChild(node);
        } catch (e) {
            node.outerHTML = '';
        }
    };

   /**
     * _removeAttribute
     *
     * @param  an Attribute name
     * @param  a DOM node
     */
    var _removeAttribute = function(name, node) {
        DOMPurify.removed.push({
            attribute: node.getAttributeNode(name),
            from: node
        });
        node.removeAttribute(name);
    };

   /**
     * _initDocument
     *
     * @param  a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */
    var _initDocument = function(dirty) {
        /* Create a HTML document using DOMParser */
        var doc, body;
        try {
            doc = new DOMParser().parseFromString(dirty, 'text/html');
        } catch (e) {}

        /* Some browsers throw, some browsers return null for the code above
           DOMParser with text/html support is only in very recent browsers.
           See #159 why the check here is extra-thorough */
        if (!doc || !doc.documentElement) {
            doc = implementation.createHTMLDocument('');
            body = doc.body;
            body.parentNode.removeChild(body.parentNode.firstElementChild);
            body.outerHTML = dirty;
        }

        /* Work on whole document or just its body */
        if (typeof doc.getElementsByTagName === 'function') {
            return doc.getElementsByTagName(
                WHOLE_DOCUMENT ? 'html' : 'body')[0];
        }
        return getElementsByTagName.call(doc,
            WHOLE_DOCUMENT ? 'html' : 'body')[0];
    };

    /**
     * _createIterator
     *
     * @param  document/fragment to create iterator for
     * @return iterator instance
     */
    var _createIterator = function(root) {
        return createNodeIterator.call(root.ownerDocument || root,
            root,
            NodeFilter.SHOW_ELEMENT
            | NodeFilter.SHOW_COMMENT
            | NodeFilter.SHOW_TEXT,
            function() { return NodeFilter.FILTER_ACCEPT; },
            false
        );
    };

    /**
     * _isClobbered
     *
     * @param  element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */
    var _isClobbered = function(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
            return false;
        }
        if (  typeof elm.nodeName !== 'string'
           || typeof elm.textContent !== 'string'
           || typeof elm.removeChild !== 'function'
           || !(elm.attributes instanceof NamedNodeMap)
           || typeof elm.removeAttribute !== 'function'
           || typeof elm.setAttribute !== 'function'
        ) {
            return true;
        }
        return false;
    };

    /**
     * _isNode
     *
     * @param object to check whether it's a DOM node
     * @return true is object is a DOM node
     */
    var _isNode = function(obj) {
        return (
            typeof Node === "object" ? obj instanceof Node : obj
                && typeof obj === "object" && typeof obj.nodeType === "number"
                && typeof obj.nodeName==="string"
        );
    };

    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   node to check for permission to exist
     * @return  true if node was killed, false if left alive
     */
    var _sanitizeElements = function(currentNode) {
        var tagName, content;
        /* Execute a hook if present */
        _executeHook('beforeSanitizeElements', currentNode, null);

        /* Check if element is clobbered or can clobber */
        if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }

        /* Now let's check the element's type and name */
        tagName = currentNode.nodeName.toLowerCase();

        /* Execute a hook if present */
        _executeHook('uponSanitizeElement', currentNode, {
            tagName: tagName,
            allowedTags: ALLOWED_TAGS
        });

        /* Remove element if anything forbids its presence */
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            /* Keep content except for black-listed elements */
            if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]
                    && typeof currentNode.insertAdjacentHTML === 'function') {
                try {
                    currentNode.insertAdjacentHTML('AfterEnd', currentNode.innerHTML);
                } catch (e) {}
            }
            _forceRemove(currentNode);
            return true;
        }

        /* Convert markup to cover jQuery behavior */
        if (SAFE_FOR_JQUERY && !currentNode.firstElementChild &&
                (!currentNode.content || !currentNode.content.firstElementChild) &&
                /</g.test(currentNode.textContent)) {
            DOMPurify.removed.push({element: currentNode.cloneNode()});
            currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
        }

        /* Sanitize element content to be template-safe */
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
            /* Get the element's text content */
            content = currentNode.textContent;
            content = content.replace(MUSTACHE_EXPR, ' ');
            content = content.replace(ERB_EXPR, ' ');
            if (currentNode.textContent !== content) {
                DOMPurify.removed.push({element: currentNode.cloneNode()});
                currentNode.textContent = content;
            }
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeElements', currentNode, null);

        return false;
    };

    var DATA_ATTR = /^data-[\-\w.\u00B7-\uFFFF]/;
    var IS_ALLOWED_URI = /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;
    var IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;
    /* This needs to be extensive thanks to Webkit/Blink's behavior */
    var ATTR_WHITESPACE = /[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;

    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param   node to sanitize
     * @return  void
     */
    var _sanitizeAttributes = function(currentNode) {
        var attr, name, value, lcName, idAttr, attributes, hookEvent, l;
        /* Execute a hook if present */
        _executeHook('beforeSanitizeAttributes', currentNode, null);

        attributes = currentNode.attributes;

        /* Check if we have attributes; if not we might have a text node */
        if (!attributes) { return; }

        hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
        };
        l = attributes.length;

        /* Go backwards over all attributes; safely remove bad ones */
        while (l--) {
            attr = attributes[l];
            name = attr.name;
            value = attr.value.trim();
            lcName = name.toLowerCase();

            /* Execute a hook if present */
            hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            _executeHook('uponSanitizeAttribute', currentNode, hookEvent );
            value = hookEvent.attrValue;

            /* Remove attribute */
            // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
            // remove a "name" attribute from an <img> tag that has an "id"
            // attribute at the time.
            if (lcName === 'name'  &&
                    currentNode.nodeName === 'IMG' && attributes.id) {
                idAttr = attributes.id;
                attributes = Array.prototype.slice.apply(attributes);
                _removeAttribute('id', currentNode);
                _removeAttribute(name, currentNode);
                if (attributes.indexOf(idAttr) > l) {
                    currentNode.setAttribute('id', idAttr.value);
                }
            } else {
                // This avoids a crash in Safari v9.0 with double-ids.
                // The trick is to first set the id to be empty and then to
                // remove the attriubute
                if (name === 'id') {
                    currentNode.setAttribute(name, '');
                }
                _removeAttribute(name, currentNode);
            }

            /* Did the hooks approve of the attribute? */
            if (!hookEvent.keepAttr) {
                continue;
            }

            /* Make sure attribute cannot clobber */
            if (SANITIZE_DOM &&
                    (lcName === 'id' || lcName === 'name') &&
                    (value in window || value in document || value in formElement)) {
                continue;
            }

            /* Sanitize attribute content to be template-safe */
            if (SAFE_FOR_TEMPLATES) {
                value = value.replace(MUSTACHE_EXPR, ' ');
                value = value.replace(ERB_EXPR, ' ');
            }

            /* Allow valid data-* attributes: At least one character after "-"
               (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
               XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
               We don't need to check the value; it's always URI safe. */
            if (ALLOW_DATA_ATTR && DATA_ATTR.test(lcName)) {
                // This attribute is safe
            }
            /* Otherwise, check the name is permitted */
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                continue;
            }
            /* Check value is safe. First, is attr inert? If so, is safe */
            else if (URI_SAFE_ATTRIBUTES[lcName]) {
                // This attribute is safe
            }
            /* Check no script, data or unknown possibly unsafe URI
               unless we know URI values are safe for that attribute */
            else if (IS_ALLOWED_URI.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Keep image data URIs alive if src is allowed */
            else if (
                lcName === 'src' &&
                value.indexOf('data:') === 0 &&
                DATA_URI_TAGS[currentNode.nodeName.toLowerCase()]) {
                // This attribute is safe
            }
            /* Allow unknown protocols: This provides support for links that
               are handled by protocol handlers which may be unknown ahead of
               time, e.g. fb:, spotify: */
            else if (
                ALLOW_UNKNOWN_PROTOCOLS &&
                !IS_SCRIPT_OR_DATA.test(value.replace(ATTR_WHITESPACE,''))) {
                // This attribute is safe
            }
            /* Check for binary attributes */
            else if (!value) {
                // binary attributes are safe at this point
            }
            /* Anything else, presume unsafe, do not add it back */
            else {
                continue;
            }

            /* Handle invalid data-* attribute set by try-catching it */
            try {
                currentNode.setAttribute(name, value);
                DOMPurify.removed.pop();
            } catch (e) {}
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    /**
     * _sanitizeShadowDOM
     *
     * @param  fragment to iterate over recursively
     * @return void
     */
    var _sanitizeShadowDOM = function(fragment) {
        var shadowNode;
        var shadowIterator = _createIterator(fragment);

        /* Execute a hook if present */
        _executeHook('beforeSanitizeShadowDOM', fragment, null);

        while ( (shadowNode = shadowIterator.nextNode()) ) {
            /* Execute a hook if present */
            _executeHook('uponSanitizeShadowNode', shadowNode, null);

            /* Sanitize tags and elements */
            if (_sanitizeElements(shadowNode)) {
                continue;
            }

            /* Deep shadow DOM detected */
            if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(shadowNode);
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode
     */
    var _executeHook = function(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) { return; }

        hooks[entryPoint].forEach(function(hook) {
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    };

    /**
     * sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    DOMPurify.sanitize = function(dirty, cfg) {
        var body, importedNode, currentNode, oldNode, nodeIterator, returnNode;
        /* Make sure we have a string to sanitize.
           DO NOT return early, as this will return the wrong type if
           the user has requested a DOM object rather than a string */
        if (!dirty) {
            dirty = '<!-->';
        }

        /* Stringify, in case dirty is an object */
        if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString !== 'function') {
                throw new TypeError('toString is not a function');
            } else {
                dirty = dirty.toString();
            }
        }

        /* Check we can run. Otherwise fall back or ignore */
        if (!DOMPurify.isSupported) {
            if (typeof window.toStaticHTML === 'object'
                || typeof window.toStaticHTML === 'function') {
                if (typeof dirty === 'string') {
                    return window.toStaticHTML(dirty);
                } else if (_isNode(dirty)) {
                    return window.toStaticHTML(dirty.outerHTML);
                }
            }
            return dirty;
        }

        /* Assign config vars */
        _parseConfig(cfg);

        /* Clean up removed elements */
        DOMPurify.removed = [];

        if (dirty instanceof Node) {
            /* If dirty is a DOM element, append to an empty document to avoid
               elements being stripped by the parser */
            body = _initDocument('<!-->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */
                body = importedNode;
            } else {
                body.appendChild( importedNode );
            }
        } else {
            /* Exit directly if we have nothing to do */
            if (!RETURN_DOM && !WHOLE_DOCUMENT && dirty.indexOf('<') === -1) {
                return dirty;
            }

            /* Initialize the document to work on */
            body = _initDocument(dirty);

            /* Check we have a DOM node from the data */
            if (!body) {
                return RETURN_DOM ? null : '';
            }
        }

        /* Get node iterator */
        nodeIterator = _createIterator(body);

        /* Now start iterating over the created document */
        while ( (currentNode = nodeIterator.nextNode()) ) {

            /* Fix IE's strange behavior with manipulated textNodes #89 */
            if (currentNode.nodeType === 3 && currentNode === oldNode) {
                continue;
            }

            /* Sanitize tags and elements */
            if (_sanitizeElements(currentNode)) {
                continue;
            }

            /* Shadow DOM detected, sanitize it */
            if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }

            /* Check attributes, sanitize if necessary */
            _sanitizeAttributes(currentNode);

            oldNode = currentNode;
        }

        /* Return sanitized string or DOM */
        if (RETURN_DOM) {

            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);

                while (body.firstChild) {
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }

            if (RETURN_DOM_IMPORT) {
                /* adoptNode() is not used because internal state is not reset
                   (e.g. the past names map of a HTMLFormElement), this is safe
                   in theory but we would rather not risk another attack vector.
                   The state that is cloned by importNode() is explicitly defined
                   by the specs. */
                returnNode = importNode.call(originalDocument, returnNode, true);
            }

            return returnNode;
        }

        return WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    };

    /**
     * addHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint
     * @param {Function} hookFunction
     */
    DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') { return; }
        hooks[entryPoint] = hooks[entryPoint] || [];
        hooks[entryPoint].push(hookFunction);
    };

    /**
     * removeHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint
     * @return void
     */
    DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint].pop();
        }
    };

    /**
     * removeHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint
     * @return void
     */
    DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
        }
    };

    /**
     * removeAllHooks
     * Public method to remove all DOMPurify hooks
     *
     * @return void
     */
    DOMPurify.removeAllHooks = function() {
        hooks = {};
    };

    return DOMPurify;
}));


/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Fuzzy
 * https://github.com/myork/fuzzy
 *
 * Copyright (c) 2012 Matt York
 * Licensed under the MIT license.
 */

(function() {

var root = this;

var fuzzy = {};

// Use in node or in browser
if (true) {
  module.exports = fuzzy;
} else {
  root.fuzzy = fuzzy;
}

// Return all elements of `array` that have a fuzzy
// match against `pattern`.
fuzzy.simpleFilter = function(pattern, array) {
  return array.filter(function(str) {
    return fuzzy.test(pattern, str);
  });
};

// Does `pattern` fuzzy match `str`?
fuzzy.test = function(pattern, str) {
  return fuzzy.match(pattern, str) !== null;
};

// If `pattern` matches `str`, wrap each matching character
// in `opts.pre` and `opts.post`. If no match, return null
fuzzy.match = function(pattern, str, opts) {
  opts = opts || {};
  var patternIdx = 0
    , result = []
    , len = str.length
    , totalScore = 0
    , currScore = 0
    // prefix
    , pre = opts.pre || ''
    // suffix
    , post = opts.post || ''
    // String to compare against. This might be a lowercase version of the
    // raw string
    , compareString =  opts.caseSensitive && str || str.toLowerCase()
    , ch;

  pattern = opts.caseSensitive && pattern || pattern.toLowerCase();

  // For each character in the string, either add it to the result
  // or wrap in template if it's the next string in the pattern
  for(var idx = 0; idx < len; idx++) {
    ch = str[idx];
    if(compareString[idx] === pattern[patternIdx]) {
      ch = pre + ch + post;
      patternIdx += 1;

      // consecutive characters should increase the score more than linearly
      currScore += 1 + currScore;
    } else {
      currScore = 0;
    }
    totalScore += currScore;
    result[result.length] = ch;
  }

  // return rendered string if we have a match for every char
  if(patternIdx === pattern.length) {
    // if the string is an exact match with pattern, totalScore should be maxed
    totalScore = (compareString === pattern) ? Infinity : totalScore;
    return {rendered: result.join(''), score: totalScore};
  }

  return null;
};

// The normal entry point. Filters `arr` for matches against `pattern`.
// It returns an array with matching values of the type:
//
//     [{
//         string:   '<b>lah' // The rendered string
//       , index:    2        // The index of the element in `arr`
//       , original: 'blah'   // The original element in `arr`
//     }]
//
// `opts` is an optional argument bag. Details:
//
//    opts = {
//        // string to put before a matching character
//        pre:     '<b>'
//
//        // string to put after matching character
//      , post:    '</b>'
//
//        // Optional function. Input is an entry in the given arr`,
//        // output should be the string to test `pattern` against.
//        // In this example, if `arr = [{crying: 'koala'}]` we would return
//        // 'koala'.
//      , extract: function(arg) { return arg.crying; }
//    }
fuzzy.filter = function(pattern, arr, opts) {
  if(!arr || arr.length === 0) {
    return [];
  }
  if (typeof pattern !== 'string') {
    return arr;
  }
  opts = opts || {};
  return arr
    .reduce(function(prev, element, idx, arr) {
      var str = element;
      if(opts.extract) {
        str = opts.extract(element);
      }
      var rendered = fuzzy.match(pattern, str, opts);
      if(rendered != null) {
        prev[prev.length] = {
            string: rendered.rendered
          , score: rendered.score
          , index: idx
          , original: element
        };
      }
      return prev;
    }, [])

    // Sort by score. Browsers are inconsistent wrt stable/unstable
    // sorting, so force stable by using the index in the case of tie.
    // See http://ofb.net/~sethml/is-sort-stable.html
    .sort(function(a,b) {
      var compare = b.score - a.score;
      if(compare) return compare;
      return a.index - b.index;
    });
};


}());



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  'country.6646126669086080': {
    'name': 'France',
    'bbox': [[-4.59235, 41.380007], [9.560016, 51.148506]]
  },
  'country.12862386939497690': {
    'name': 'United States',
    'bbox': [[-171.791111, 18.91619], [-66.96466, 71.357764]]
  },
  'country.10299371396720960': {
    'name': 'Russia',
    'bbox': [[19.66064, 41.151416], [190.10042, 81.2504]]
  },
  'country.15589894856372040': {
    'name': 'Canada',
    'bbox': [[-140.99778, 41.675105], [-52.648099, 83.23324]]
  }
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Typeahead = __webpack_require__(80);
var debounce = __webpack_require__(54);
var extend = __webpack_require__(27);
var EventEmitter = __webpack_require__(52).EventEmitter;
var exceptions = __webpack_require__(55);
var MapboxClient = __webpack_require__(62);

/**
 * A geocoder component using Mapbox Geocoding API
 * @class MapboxGeocoder
 *
 * @param {Object} options
 * @param {String} [options.accessToken=null] Required unless `mapboxgl.accessToken` is set globally
 * @param {Number} [options.zoom=16] On geocoded result what zoom level should the map animate to.
 * @param {Boolean} [options.flyTo=true] If false, animating the map to a selected result is disabled.
 * @param {String} [options.placeholder="Search"] Override the default placeholder attribute value.
 * @example
 * var geocoder = new MapboxGeocoder();
 * map.addControl(geocoder);
 * @return {MapboxGeocoder} `this`
 */
function MapboxGeocoder(options) {
  this._eventEmitter = new EventEmitter();
  this.options = extend({}, this.options, options);
}

MapboxGeocoder.prototype = {

  options: {
    placeholder: 'Search',
    zoom: 16,
    flyTo: true
  },

  onAdd: function(map) {
    this._map = map;
    this.mapboxClient = new MapboxClient(this.options.accessToken);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onQueryResult = this._onQueryResult.bind(this);
    this._clear = this._clear.bind(this);

    var el = this.container = document.createElement('div');
    el.className = 'mapboxgl-ctrl-geocoder mapboxgl-ctrl';

    var icon = document.createElement('span');
    icon.className = 'geocoder-icon geocoder-icon-search';

    this._inputEl = document.createElement('input');
    this._inputEl.type = 'text';
    this._inputEl.placeholder = this.options.placeholder;

    this._inputEl.addEventListener('keydown', this._onKeyDown);
    this._inputEl.addEventListener('change', this._onChange);

    var actions = document.createElement('div');
    actions.classList.add('geocoder-pin-right');

    this._clearEl = document.createElement('button');
    this._clearEl.className = 'geocoder-icon geocoder-icon-close';
    this._clearEl.addEventListener('click', this._clear);

    this._loadingEl = document.createElement('span');
    this._loadingEl.className = 'geocoder-icon geocoder-icon-loading';

    actions.appendChild(this._clearEl);
    actions.appendChild(this._loadingEl);

    el.appendChild(icon);
    el.appendChild(this._inputEl);
    el.appendChild(actions);

    this._typeahead = new Typeahead(this._inputEl, [], { filter: false });
    this._typeahead.getItemValue = function(item) { return item.place_name; };

    return el;
  },

  onRemove: function() {
    this.container.parentNode.removeChild(this.container);
    this._map = null;
    return this;
  },

  _onKeyDown: debounce(function(e) {
    if (!e.target.value) {
      return this._clearEl.style.display = 'none';
    }

    // TAB, ESC, LEFT, RIGHT, ENTER, UP, DOWN
    if (e.metaKey || [9, 27, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1) return;
    this._geocode(e.target.value);
  }, 200),

  _onChange: function() {
    if (this._inputEl.value) this._clearEl.style.display = 'block';
    var selected = this._typeahead.selected;
    if (selected) {
      if (this.options.flyTo) {
        if (!exceptions[selected.id] &&
            (selected.bbox && selected.context && selected.context.length <= 3 ||
            selected.bbox && !selected.context)) {
          var bbox = selected.bbox;
          this._map.fitBounds([[bbox[0], bbox[1]],[bbox[2], bbox[3]]]);
        } else if (exceptions[selected.id]) {
          // Certain geocoder search results return (and therefore zoom to fit)
          // an unexpectedly large bounding box: for example, both Russia and the
          // USA span both sides of -180/180, or France includes the island of
          // Reunion in the Indian Ocean. An incomplete list of these exceptions
          // at ./exceptions.json provides "reasonable" bounding boxes as a
          // short-term solution; this may be amended as necessary.
          this._map.fitBounds(exceptions[selected.id].bbox);
        } else {
          this._map.flyTo({
            center: selected.center,
            zoom: this.options.zoom
          });
        }
      }
      this._eventEmitter.emit('result', { result: selected });
    }
  },

  _geocode: function(searchInput) {
    this._loadingEl.style.display = 'block';
    this._eventEmitter.emit('loading');
    var request = this.mapboxClient.geocodeForward(searchInput, this.options);

    request.then(function (response) {
      this._loadingEl.style.display = 'none';
      var res = response.entity;
      if (res.features.length) {
        this._clearEl.style.display = 'block';
      } else {
        this._clearEl.style.display = 'none';
        this._typeahead.selected = null;
      }

      this._eventEmitter.emit('results', res);
      this._typeahead.update(res.features);
    }.bind(this));

    request.catch(function (err) {
      this._loadingEl.style.display = 'none';
      this._eventEmitter.emit('error', { error: err });
    }.bind(this));

    return request;
  },

  _clear: function() {
    this._inputEl.value = '';
    this._typeahead.selected = null;
    this._typeahead.clear();
    this._onChange();
    this._inputEl.focus();
    this._clearEl.style.display = 'none';
    this._eventEmitter.emit('clear');
  },

  _onQueryResult: function(response) {
    var results = response.entity;
    if (!results.features.length) return;
    var result = results.features[0];
    this._typeahead.selected = result;
    this._inputEl.value = result.place_name;
    this._onChange();
  },

  /**
   * Set & query the input
   * @param {string} searchInput location name or other search input
   * @returns {MapboxGeocoder} this
   */
  query: function(searchInput) {
    this._geocode(searchInput).then(this._onQueryResult);
    return this;
  },

  /**
   * Set input
   * @param {string} searchInput location name or other search input
   * @returns {MapboxGeocoder} this
   */
  setInput: function(searchInput) {
    // Set input value to passed value and clear everything else.
    this._inputEl.value = searchInput;
    this._typeahead.selected = null;
    this._typeahead.clear();
    this._onChange();
    return this;
  },

  /**
   * Subscribe to events that happen within the plugin.
   * @param {String} type name of event. Available events and the data passed into their respective event objects are:
   *
   * - __clear__ `Emitted when the input is cleared`
   * - __loading__ `Emitted when the geocoder is looking up a query`
   * - __results__ `{ results } Fired when the geocoder returns a response`
   * - __result__ `{ result } Fired when input is set`
   * - __error__ `{ error } Error as string
   * @param {Function} fn function that's called when the event is emitted.
   * @returns {MapboxGeocoder} this;
   */
  on: function(type, fn) {
    this._eventEmitter.on(type, fn);
    return this;
  },

  /**
   * Remove an event
   * @returns {MapboxGeocoder} this
   * @param {String} type Event name.
   * @param {Function} fn Function that should unsubscribe to the event emitted.
   */
  off: function(type, fn) {
    this._eventEmitter.removeListener(type, fn);
    return this;
  }
};

module.exports = MapboxGeocoder;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mapboxgl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
function geometry(e){var r,t=0;switch(e.type){case"Polygon":return polygonArea(e.coordinates);case"MultiPolygon":for(r=0;r<e.coordinates.length;r++)t+=polygonArea(e.coordinates[r]);return t;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0;case"GeometryCollection":for(r=0;r<e.geometries.length;r++)t+=geometry(e.geometries[r]);return t}}function polygonArea(e){var r=0;if(e&&e.length>0){r+=Math.abs(ringArea(e[0]));for(var t=1;t<e.length;t++)r-=Math.abs(ringArea(e[t]))}return r}function ringArea(e){var r,t,n,o,a,i,g,s=0,l=e.length;if(l>2){for(g=0;g<l;g++)g===l-2?(o=l-2,a=l-1,i=0):g===l-1?(o=l-1,a=0,i=1):(o=g,a=g+1,i=g+2),r=e[o],t=e[a],n=e[i],s+=(rad(n[0])-rad(r[0]))*Math.sin(rad(t[1]));s=s*wgs84.RADIUS*wgs84.RADIUS/2}return s}function rad(e){return e*Math.PI/180}var wgs84=_dereq_("wgs84");module.exports.geometry=geometry,module.exports.ring=ringArea;
},{"wgs84":37}],2:[function(_dereq_,module,exports){
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.glMatrix=n()}(this,function(){"use strict";function t(t,n,r){var e=n[0],a=n[1],o=n[2];return t[0]=e*r[0]+a*r[3]+o*r[6],t[1]=e*r[1]+a*r[4]+o*r[7],t[2]=e*r[2]+a*r[5]+o*r[8],t}function n(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3];return t[0]=r[0]*e+r[4]*a+r[8]*o+r[12]*u,t[1]=r[1]*e+r[5]*a+r[9]*o+r[13]*u,t[2]=r[2]*e+r[6]*a+r[10]*o+r[14]*u,t[3]=r[3]*e+r[7]*a+r[11]*o+r[15]*u,t}function r(){var t=new Float32Array(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function e(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=Math.sin(r),c=Math.cos(r);return t[0]=e*c+o*i,t[1]=a*c+u*i,t[2]=e*-i+o*c,t[3]=a*-i+u*c,t}function a(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=r[0],c=r[1];return t[0]=e*i,t[1]=a*i,t[2]=o*c,t[3]=u*c,t}function o(){var t=new Float32Array(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function u(t,n){var r=Math.sin(n),e=Math.cos(n);return t[0]=e,t[1]=r,t[2]=0,t[3]=-r,t[4]=e,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function i(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function c(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function f(t,n){var r=n[0],e=n[1],a=n[2],o=n[3],u=n[4],i=n[5],c=n[6],f=n[7],v=n[8],s=n[9],l=n[10],M=n[11],h=n[12],m=n[13],y=n[14],d=n[15],p=r*i-e*u,w=r*c-a*u,A=r*f-o*u,F=e*c-a*i,x=e*f-o*i,b=a*f-o*c,g=v*m-s*h,j=v*y-l*h,R=v*d-M*h,X=s*y-l*m,Z=s*d-M*m,k=l*d-M*y,q=p*k-w*Z+A*X+F*R-x*j+b*g;return q?(q=1/q,t[0]=(i*k-c*Z+f*X)*q,t[1]=(a*Z-e*k-o*X)*q,t[2]=(m*b-y*x+d*F)*q,t[3]=(l*x-s*b-M*F)*q,t[4]=(c*R-u*k-f*j)*q,t[5]=(r*k-a*R+o*j)*q,t[6]=(y*A-h*b-d*w)*q,t[7]=(v*b-l*A+M*w)*q,t[8]=(u*Z-i*R+f*g)*q,t[9]=(e*R-r*Z-o*g)*q,t[10]=(h*x-m*A+d*p)*q,t[11]=(s*A-v*x-M*p)*q,t[12]=(i*j-u*X-c*g)*q,t[13]=(r*X-e*j+a*g)*q,t[14]=(m*w-h*F-y*p)*q,t[15]=(v*F-s*w+l*p)*q,t):null}function v(t,n,r){var e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],v=n[7],s=n[8],l=n[9],M=n[10],h=n[11],m=n[12],y=n[13],d=n[14],p=n[15],w=r[0],A=r[1],F=r[2],x=r[3];return t[0]=w*e+A*i+F*s+x*m,t[1]=w*a+A*c+F*l+x*y,t[2]=w*o+A*f+F*M+x*d,t[3]=w*u+A*v+F*h+x*p,w=r[4],A=r[5],F=r[6],x=r[7],t[4]=w*e+A*i+F*s+x*m,t[5]=w*a+A*c+F*l+x*y,t[6]=w*o+A*f+F*M+x*d,t[7]=w*u+A*v+F*h+x*p,w=r[8],A=r[9],F=r[10],x=r[11],t[8]=w*e+A*i+F*s+x*m,t[9]=w*a+A*c+F*l+x*y,t[10]=w*o+A*f+F*M+x*d,t[11]=w*u+A*v+F*h+x*p,w=r[12],A=r[13],F=r[14],x=r[15],t[12]=w*e+A*i+F*s+x*m,t[13]=w*a+A*c+F*l+x*y,t[14]=w*o+A*f+F*M+x*d,t[15]=w*u+A*v+F*h+x*p,t}function s(t,n,r){var e,a,o,u,i,c,f,v,s,l,M,h,m=r[0],y=r[1],d=r[2];return n===t?(t[12]=n[0]*m+n[4]*y+n[8]*d+n[12],t[13]=n[1]*m+n[5]*y+n[9]*d+n[13],t[14]=n[2]*m+n[6]*y+n[10]*d+n[14],t[15]=n[3]*m+n[7]*y+n[11]*d+n[15]):(e=n[0],a=n[1],o=n[2],u=n[3],i=n[4],c=n[5],f=n[6],v=n[7],s=n[8],l=n[9],M=n[10],h=n[11],t[0]=e,t[1]=a,t[2]=o,t[3]=u,t[4]=i,t[5]=c,t[6]=f,t[7]=v,t[8]=s,t[9]=l,t[10]=M,t[11]=h,t[12]=e*m+i*y+s*d+n[12],t[13]=a*m+c*y+l*d+n[13],t[14]=o*m+f*y+M*d+n[14],t[15]=u*m+v*y+h*d+n[15]),t}function l(t,n,r){var e=r[0],a=r[1],o=r[2];return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=n[11]*o,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function M(t,n,r){var e=Math.sin(r),a=Math.cos(r),o=n[4],u=n[5],i=n[6],c=n[7],f=n[8],v=n[9],s=n[10],l=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=o*a+f*e,t[5]=u*a+v*e,t[6]=i*a+s*e,t[7]=c*a+l*e,t[8]=f*a-o*e,t[9]=v*a-u*e,t[10]=s*a-i*e,t[11]=l*a-c*e,t}function h(t,n,r){var e=Math.sin(r),a=Math.cos(r),o=n[0],u=n[1],i=n[2],c=n[3],f=n[4],v=n[5],s=n[6],l=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=o*a+f*e,t[1]=u*a+v*e,t[2]=i*a+s*e,t[3]=c*a+l*e,t[4]=f*a-o*e,t[5]=v*a-u*e,t[6]=s*a-i*e,t[7]=l*a-c*e,t}function m(t,n,r,e,a){var o=1/Math.tan(n/2),u=1/(e-a);return t[0]=o/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(a+e)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*a*e*u,t[15]=0,t}function y(t,n,r,e,a,o,u){var i=1/(n-r),c=1/(e-a),f=1/(o-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(n+r)*i,t[13]=(a+e)*c,t[14]=(u+o)*f,t[15]=1,t}(function(){var t=new Float32Array(3);t[0]=0,t[1]=0,t[2]=0})(),function(){var t=new Float32Array(4);t[0]=0,t[1]=0,t[2]=0,t[3]=0}();return{vec3:{transformMat3:t},vec4:{transformMat4:n},mat2:{create:r,rotate:e,scale:a},mat3:{create:o,fromRotation:u},mat4:{create:i,identity:c,translate:s,scale:l,multiply:v,perspective:m,rotateX:M,rotateZ:h,invert:f,ortho:y}}});
},{}],3:[function(_dereq_,module,exports){
"use strict";function isSupported(e){return!!(isBrowser()&&isArraySupported()&&isFunctionSupported()&&isObjectSupported()&&isJSONSupported()&&isWorkerSupported()&&isUint8ClampedArraySupported()&&isWebGLSupportedCached(e&&e.failIfMajorPerformanceCaveat))}function isBrowser(){return"undefined"!=typeof window&&"undefined"!=typeof document}function isArraySupported(){return Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray}function isFunctionSupported(){return Function.prototype&&Function.prototype.bind}function isObjectSupported(){return Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions}function isJSONSupported(){return"JSON"in window&&"parse"in JSON&&"stringify"in JSON}function isWorkerSupported(){if(!("Worker"in window&&"Blob"in window))return!1;var e,t,r=new Blob([""],{type:"text/javascript"}),o=URL.createObjectURL(r);try{t=new Worker(o),e=!0}catch(t){e=!1}return t&&t.terminate(),URL.revokeObjectURL(o),e}function isUint8ClampedArraySupported(){return"Uint8ClampedArray"in window}function isWebGLSupportedCached(e){return void 0===isWebGLSupportedCache[e]&&(isWebGLSupportedCache[e]=isWebGLSupported(e)),isWebGLSupportedCache[e]}function isWebGLSupported(e){var t=document.createElement("canvas"),r=Object.create(isSupported.webGLContextAttributes);return r.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",r)||t.probablySupportsContext("experimental-webgl",r):t.supportsContext?t.supportsContext("webgl",r)||t.supportsContext("experimental-webgl",r):t.getContext("webgl",r)||t.getContext("experimental-webgl",r)}"undefined"!=typeof module&&module.exports?module.exports=isSupported:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=isSupported);var isWebGLSupportedCache={};isSupported.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0};
},{}],4:[function(_dereq_,module,exports){
"use strict";function Point(t,n){this.x=t,this.y=n}module.exports=Point,Point.prototype={clone:function(){return new Point(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,n){return this.clone()._rotateAround(t,n)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var n=t.x-this.x,i=t.y-this.y;return n*n+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,n){return Math.atan2(this.x*n-this.y*t,this.x*t+this.y*n)},_matMult:function(t){var n=t[0]*this.x+t[1]*this.y,i=t[2]*this.x+t[3]*this.y;return this.x=n,this.y=i,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var n=Math.cos(t),i=Math.sin(t),s=n*this.x-i*this.y,r=i*this.x+n*this.y;return this.x=s,this.y=r,this},_rotateAround:function(t,n){var i=Math.cos(t),s=Math.sin(t),r=n.x+i*(this.x-n.x)-s*(this.y-n.y),h=n.y+s*(this.x-n.x)+i*(this.y-n.y);return this.x=r,this.y=h,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},Point.convert=function(t){return t instanceof Point?t:Array.isArray(t)?new Point(t[0],t[1]):t};
},{}],5:[function(_dereq_,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ShelfPack=e()}(this,function(){function t(t,e,i){i=i||{},this.w=t||64,this.h=e||64,this.autoResize=!!i.autoResize,this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0}function e(t,e,i){this.x=0,this.y=t,this.w=this.free=e,this.h=i}function i(t,e,i,s,h,n,r){this.id=t,this.x=e,this.y=i,this.w=s,this.h=h,this.maxw=n||s,this.maxh=r||h,this.refcount=0}return t.prototype.pack=function(t,e){t=[].concat(t),e=e||{};for(var i,s,h,n,r=[],f=0;f<t.length;f++)if(i=t[f].w||t[f].width,s=t[f].h||t[f].height,h=t[f].id,i&&s){if(!(n=this.packOne(i,s,h)))continue;e.inPlace&&(t[f].x=n.x,t[f].y=n.y,t[f].id=n.id),r.push(n)}return this.shrink(),r},t.prototype.packOne=function(t,i,s){var h,n,r,f,o={freebin:-1,shelf:-1,waste:1/0},a=0;if("string"==typeof s||"number"==typeof s){if(h=this.getBin(s))return this.ref(h),h;"number"==typeof s&&(this.maxId=Math.max(s,this.maxId))}else s=++this.maxId;for(f=0;f<this.freebins.length;f++){if(h=this.freebins[f],i===h.maxh&&t===h.maxw)return this.allocFreebin(f,t,i,s);i>h.maxh||t>h.maxw||i<=h.maxh&&t<=h.maxw&&(r=h.maxw*h.maxh-t*i)<o.waste&&(o.waste=r,o.freebin=f)}for(f=0;f<this.shelves.length;f++)if(n=this.shelves[f],a+=n.h,!(t>n.free)){if(i===n.h)return this.allocShelf(f,t,i,s);i>n.h||i<n.h&&(r=(n.h-i)*t)<o.waste&&(o.freebin=-1,o.waste=r,o.shelf=f)}if(-1!==o.freebin)return this.allocFreebin(o.freebin,t,i,s);if(-1!==o.shelf)return this.allocShelf(o.shelf,t,i,s);if(i<=this.h-a&&t<=this.w)return n=new e(a,this.w,i),this.allocShelf(this.shelves.push(n)-1,t,i,s);if(this.autoResize){var u,l,c,p;return u=l=this.h,c=p=this.w,(c<=u||t>c)&&(p=2*Math.max(t,c)),(u<c||i>u)&&(l=2*Math.max(i,u)),this.resize(p,l),this.packOne(t,i,s)}return null},t.prototype.allocFreebin=function(t,e,i,s){var h=this.freebins.splice(t,1)[0];return h.id=s,h.w=e,h.h=i,h.refcount=0,this.bins[s]=h,this.ref(h),h},t.prototype.allocShelf=function(t,e,i,s){var h=this.shelves[t],n=h.alloc(e,i,s);return this.bins[s]=n,this.ref(n),n},t.prototype.shrink=function(){if(this.shelves.length>0){for(var t=0,e=0,i=0;i<this.shelves.length;i++){var s=this.shelves[i];e+=s.h,t=Math.max(s.w-s.free,t)}this.resize(t,e)}},t.prototype.getBin=function(t){return this.bins[t]},t.prototype.ref=function(t){if(1==++t.refcount){var e=t.h;this.stats[e]=1+(0|this.stats[e])}return t.refcount},t.prototype.unref=function(t){return 0===t.refcount?0:(0==--t.refcount&&(this.stats[t.h]--,delete this.bins[t.id],this.freebins.push(t)),t.refcount)},t.prototype.clear=function(){this.shelves=[],this.freebins=[],this.stats={},this.bins={},this.maxId=0},t.prototype.resize=function(t,e){this.w=t,this.h=e;for(var i=0;i<this.shelves.length;i++)this.shelves[i].resize(t);return!0},e.prototype.alloc=function(t,e,s){if(t>this.free||e>this.h)return null;var h=this.x;return this.x+=t,this.free-=t,new i(s,h,this.y,t,e,t,this.h)},e.prototype.resize=function(t){return this.free+=t-this.w,this.w=t,!0},t});
},{}],6:[function(_dereq_,module,exports){
"use strict";function TinySDF(t,i,s,e,h,r){this.fontSize=t||24,this.buffer=void 0===i?3:i,this.cutoff=e||.25,this.fontFamily=h||"sans-serif",this.fontWeight=r||"normal",this.radius=s||8;var a=this.size=this.fontSize+2*this.buffer;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=a,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textBaseline="middle",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.d=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Int16Array(a),this.middle=Math.round(a/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1))}function edt(t,i,s,e,h,r,a){for(var n=0;n<i;n++){for(var o=0;o<s;o++)e[o]=t[o*i+n];for(edt1d(e,h,r,a,s),o=0;o<s;o++)t[o*i+n]=h[o]}for(o=0;o<s;o++){for(n=0;n<i;n++)e[n]=t[o*i+n];for(edt1d(e,h,r,a,i),n=0;n<i;n++)t[o*i+n]=Math.sqrt(h[n])}}function edt1d(t,i,s,e,h){s[0]=0,e[0]=-INF,e[1]=+INF;for(var r=1,a=0;r<h;r++){for(var n=(t[r]+r*r-(t[s[a]]+s[a]*s[a]))/(2*r-2*s[a]);n<=e[a];)a--,n=(t[r]+r*r-(t[s[a]]+s[a]*s[a]))/(2*r-2*s[a]);a++,s[a]=r,e[a]=n,e[a+1]=+INF}for(r=0,a=0;r<h;r++){for(;e[a+1]<r;)a++;i[r]=(r-s[a])*(r-s[a])+t[s[a]]}}module.exports=TinySDF;var INF=1e20;TinySDF.prototype.draw=function(t){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.fillText(t,this.buffer,this.middle);for(var i=this.ctx.getImageData(0,0,this.size,this.size),s=new Uint8ClampedArray(this.size*this.size),e=0;e<this.size*this.size;e++){var h=i.data[4*e+3]/255;this.gridOuter[e]=1===h?0:0===h?INF:Math.pow(Math.max(0,.5-h),2),this.gridInner[e]=1===h?INF:0===h?0:Math.pow(Math.max(0,h-.5),2)}for(edt(this.gridOuter,this.size,this.size,this.f,this.d,this.v,this.z),edt(this.gridInner,this.size,this.size,this.f,this.d,this.v,this.z),e=0;e<this.size*this.size;e++){var r=this.gridOuter[e]-this.gridInner[e];s[e]=Math.max(0,Math.min(255,Math.round(255-255*(r/this.radius+this.cutoff))))}return s};
},{}],7:[function(_dereq_,module,exports){
function UnitBezier(t,i,e,r){this.cx=3*t,this.bx=3*(e-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*i,this.by=3*(r-i)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=r,this.p2x=e,this.p2y=r}module.exports=UnitBezier,UnitBezier.prototype.sampleCurveX=function(t){return((this.ax*t+this.bx)*t+this.cx)*t},UnitBezier.prototype.sampleCurveY=function(t){return((this.ay*t+this.by)*t+this.cy)*t},UnitBezier.prototype.sampleCurveDerivativeX=function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},UnitBezier.prototype.solveCurveX=function(t,i){void 0===i&&(i=1e-6);var e,r,s,h,n;for(s=t,n=0;n<8;n++){if(h=this.sampleCurveX(s)-t,Math.abs(h)<i)return s;var u=this.sampleCurveDerivativeX(s);if(Math.abs(u)<1e-6)break;s-=h/u}if(e=0,r=1,(s=t)<e)return e;if(s>r)return r;for(;e<r;){if(h=this.sampleCurveX(s),Math.abs(h-t)<i)return s;t>h?e=s:r=s,s=.5*(r-e)+e}return s},UnitBezier.prototype.solve=function(t,i){return this.sampleCurveY(this.solveCurveX(t,i))};
},{}],8:[function(_dereq_,module,exports){
module.exports.VectorTile=_dereq_("./lib/vectortile.js"),module.exports.VectorTileFeature=_dereq_("./lib/vectortilefeature.js"),module.exports.VectorTileLayer=_dereq_("./lib/vectortilelayer.js");
},{"./lib/vectortile.js":9,"./lib/vectortilefeature.js":10,"./lib/vectortilelayer.js":11}],9:[function(_dereq_,module,exports){
"use strict";function VectorTile(e,r){this.layers=e.readFields(readTile,{},r)}function readTile(e,r,i){if(3===e){var t=new VectorTileLayer(i,i.readVarint()+i.pos);t.length&&(r[t.name]=t)}}var VectorTileLayer=_dereq_("./vectortilelayer");module.exports=VectorTile;
},{"./vectortilelayer":11}],10:[function(_dereq_,module,exports){
"use strict";function VectorTileFeature(e,t,r,a,i){this.properties={},this.extent=r,this.type=0,this._pbf=e,this._geometry=-1,this._keys=a,this._values=i,e.readFields(readFeature,this,t)}function readFeature(e,t,r){1==e?t.id=r.readVarint():2==e?readTag(r,t):3==e?t.type=r.readVarint():4==e&&(t._geometry=r.pos)}function readTag(e,t){for(var r=e.readVarint()+e.pos;e.pos<r;){var a=t._keys[e.readVarint()],i=t._values[e.readVarint()];t.properties[a]=i}}function classifyRings(e){var t=e.length;if(t<=1)return[e];for(var r,a,i=[],o=0;o<t;o++){var n=signedArea(e[o]);0!==n&&(void 0===a&&(a=n<0),a===n<0?(r&&i.push(r),r=[e[o]]):r.push(e[o]))}return r&&i.push(r),i}function signedArea(e){for(var t,r,a=0,i=0,o=e.length,n=o-1;i<o;n=i++)t=e[i],r=e[n],a+=(r.x-t.x)*(t.y+r.y);return a}var Point=_dereq_("@mapbox/point-geometry");module.exports=VectorTileFeature,VectorTileFeature.types=["Unknown","Point","LineString","Polygon"],VectorTileFeature.prototype.loadGeometry=function(){var e=this._pbf;e.pos=this._geometry;for(var t,r=e.readVarint()+e.pos,a=1,i=0,o=0,n=0,s=[];e.pos<r;){if(!i){var p=e.readVarint();a=7&p,i=p>>3}if(i--,1===a||2===a)o+=e.readSVarint(),n+=e.readSVarint(),1===a&&(t&&s.push(t),t=[]),t.push(new Point(o,n));else{if(7!==a)throw new Error("unknown command "+a);t&&t.push(t[0].clone())}}return t&&s.push(t),s},VectorTileFeature.prototype.bbox=function(){var e=this._pbf;e.pos=this._geometry;for(var t=e.readVarint()+e.pos,r=1,a=0,i=0,o=0,n=1/0,s=-1/0,p=1/0,h=-1/0;e.pos<t;){if(!a){var u=e.readVarint();r=7&u,a=u>>3}if(a--,1===r||2===r)i+=e.readSVarint(),o+=e.readSVarint(),i<n&&(n=i),i>s&&(s=i),o<p&&(p=o),o>h&&(h=o);else if(7!==r)throw new Error("unknown command "+r)}return[n,p,s,h]},VectorTileFeature.prototype.toGeoJSON=function(e,t,r){function a(e){for(var t=0;t<e.length;t++){var r=e[t],a=180-360*(r.y+p)/n;e[t]=[360*(r.x+s)/n-180,360/Math.PI*Math.atan(Math.exp(a*Math.PI/180))-90]}}var i,o,n=this.extent*Math.pow(2,r),s=this.extent*e,p=this.extent*t,h=this.loadGeometry(),u=VectorTileFeature.types[this.type];switch(this.type){case 1:var d=[];for(i=0;i<h.length;i++)d[i]=h[i][0];h=d,a(h);break;case 2:for(i=0;i<h.length;i++)a(h[i]);break;case 3:for(h=classifyRings(h),i=0;i<h.length;i++)for(o=0;o<h[i].length;o++)a(h[i][o])}1===h.length?h=h[0]:u="Multi"+u;var f={type:"Feature",geometry:{type:u,coordinates:h},properties:this.properties};return"id"in this&&(f.id=this.id),f};
},{"@mapbox/point-geometry":4}],11:[function(_dereq_,module,exports){
"use strict";function VectorTileLayer(e,t){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],e.readFields(readLayer,this,t),this.length=this._features.length}function readLayer(e,t,r){15===e?t.version=r.readVarint():1===e?t.name=r.readString():5===e?t.extent=r.readVarint():2===e?t._features.push(r.pos):3===e?t._keys.push(r.readString()):4===e&&t._values.push(readValueMessage(r))}function readValueMessage(e){for(var t=null,r=e.readVarint()+e.pos;e.pos<r;){var a=e.readVarint()>>3;t=1===a?e.readString():2===a?e.readFloat():3===a?e.readDouble():4===a?e.readVarint64():5===a?e.readVarint():6===a?e.readSVarint():7===a?e.readBoolean():null}return t}var VectorTileFeature=_dereq_("./vectortilefeature.js");module.exports=VectorTileLayer,VectorTileLayer.prototype.feature=function(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];var t=this._pbf.readVarint()+this._pbf.pos;return new VectorTileFeature(this._pbf,t,this.extent,this._keys,this._values)};
},{"./vectortilefeature.js":10}],12:[function(_dereq_,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.WhooTS=e.WhooTS||{})}(this,function(e){function t(e,t,r,n,i,s){return s=s||{},e+"?"+["bbox="+o(r,n,i),"format="+(s.format||"image/png"),"service="+(s.service||"WMS"),"version="+(s.version||"1.1.1"),"request="+(s.request||"GetMap"),"srs="+(s.srs||"EPSG:3857"),"width="+(s.width||256),"height="+(s.height||256),"layers="+t].join("&")}function o(e,t,o){t=Math.pow(2,o)-t-1;var n=r(256*e,256*t,o),i=r(256*(e+1),256*(t+1),o);return n[0]+","+n[1]+","+i[0]+","+i[1]}function r(e,t,o){var r=2*Math.PI*6378137/256/Math.pow(2,o);return[e*r-2*Math.PI*6378137/2,t*r-2*Math.PI*6378137/2]}e.getURL=t,e.getTileBBox=o,e.getMercCoords=r,Object.defineProperty(e,"__esModule",{value:!0})});
},{}],13:[function(_dereq_,module,exports){
function clamp_css_byte(e){return e=Math.round(e),e<0?0:e>255?255:e}function clamp_css_float(e){return e<0?0:e>1?1:e}function parse_css_int(e){return clamp_css_byte("%"===e[e.length-1]?parseFloat(e)/100*255:parseInt(e))}function parse_css_float(e){return clamp_css_float("%"===e[e.length-1]?parseFloat(e)/100:parseFloat(e))}function css_hue_to_rgb(e,r,l){return l<0?l+=1:l>1&&(l-=1),6*l<1?e+(r-e)*l*6:2*l<1?r:3*l<2?e+(r-e)*(2/3-l)*6:e}function parseCSSColor(e){var r=e.replace(/ /g,"").toLowerCase();if(r in kCSSColorTable)return kCSSColorTable[r].slice();if("#"===r[0]){if(4===r.length){var l=parseInt(r.substr(1),16);return l>=0&&l<=4095?[(3840&l)>>4|(3840&l)>>8,240&l|(240&l)>>4,15&l|(15&l)<<4,1]:null}if(7===r.length){var l=parseInt(r.substr(1),16);return l>=0&&l<=16777215?[(16711680&l)>>16,(65280&l)>>8,255&l,1]:null}return null}var a=r.indexOf("("),t=r.indexOf(")");if(-1!==a&&t+1===r.length){var n=r.substr(0,a),s=r.substr(a+1,t-(a+1)).split(","),o=1;switch(n){case"rgba":if(4!==s.length)return null;o=parse_css_float(s.pop());case"rgb":return 3!==s.length?null:[parse_css_int(s[0]),parse_css_int(s[1]),parse_css_int(s[2]),o];case"hsla":if(4!==s.length)return null;o=parse_css_float(s.pop());case"hsl":if(3!==s.length)return null;var i=(parseFloat(s[0])%360+360)%360/360,u=parse_css_float(s[1]),g=parse_css_float(s[2]),d=g<=.5?g*(u+1):g+u-g*u,c=2*g-d;return[clamp_css_byte(255*css_hue_to_rgb(c,d,i+1/3)),clamp_css_byte(255*css_hue_to_rgb(c,d,i)),clamp_css_byte(255*css_hue_to_rgb(c,d,i-1/3)),o];default:return null}}return null}var kCSSColorTable={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};try{exports.parseCSSColor=parseCSSColor}catch(e){}
},{}],14:[function(_dereq_,module,exports){
"use strict";function earcut(e,n,r){r=r||2;var t=n&&n.length,i=t?n[0]*r:e.length,x=linkedList(e,0,i,r,!0),a=[];if(!x)return a;var o,l,u,s,v,f,y;if(t&&(x=eliminateHoles(e,n,x,r)),e.length>80*r){o=u=e[0],l=s=e[1];for(var p=r;p<i;p+=r)v=e[p],f=e[p+1],v<o&&(o=v),f<l&&(l=f),v>u&&(u=v),f>s&&(s=f);y=Math.max(u-o,s-l),y=0!==y?1/y:0}return earcutLinked(x,a,r,o,l,y),a}function linkedList(e,n,r,t,i){var x,a;if(i===signedArea(e,n,r,t)>0)for(x=n;x<r;x+=t)a=insertNode(x,e[x],e[x+1],a);else for(x=r-t;x>=n;x-=t)a=insertNode(x,e[x],e[x+1],a);return a&&equals(a,a.next)&&(removeNode(a),a=a.next),a}function filterPoints(e,n){if(!e)return e;n||(n=e);var r,t=e;do{if(r=!1,t.steiner||!equals(t,t.next)&&0!==area(t.prev,t,t.next))t=t.next;else{if(removeNode(t),(t=n=t.prev)===t.next)break;r=!0}}while(r||t!==n);return n}function earcutLinked(e,n,r,t,i,x,a){if(e){!a&&x&&indexCurve(e,t,i,x);for(var o,l,u=e;e.prev!==e.next;)if(o=e.prev,l=e.next,x?isEarHashed(e,t,i,x):isEar(e))n.push(o.i/r),n.push(e.i/r),n.push(l.i/r),removeNode(e),e=l.next,u=l.next;else if((e=l)===u){a?1===a?(e=cureLocalIntersections(e,n,r),earcutLinked(e,n,r,t,i,x,2)):2===a&&splitEarcut(e,n,r,t,i,x):earcutLinked(filterPoints(e),n,r,t,i,x,1);break}}}function isEar(e){var n=e.prev,r=e,t=e.next;if(area(n,r,t)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(pointInTriangle(n.x,n.y,r.x,r.y,t.x,t.y,i.x,i.y)&&area(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function isEarHashed(e,n,r,t){var i=e.prev,x=e,a=e.next;if(area(i,x,a)>=0)return!1;for(var o=i.x<x.x?i.x<a.x?i.x:a.x:x.x<a.x?x.x:a.x,l=i.y<x.y?i.y<a.y?i.y:a.y:x.y<a.y?x.y:a.y,u=i.x>x.x?i.x>a.x?i.x:a.x:x.x>a.x?x.x:a.x,s=i.y>x.y?i.y>a.y?i.y:a.y:x.y>a.y?x.y:a.y,v=zOrder(o,l,n,r,t),f=zOrder(u,s,n,r,t),y=e.prevZ,p=e.nextZ;y&&y.z>=v&&p&&p.z<=f;){if(y!==e.prev&&y!==e.next&&pointInTriangle(i.x,i.y,x.x,x.y,a.x,a.y,y.x,y.y)&&area(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,p!==e.prev&&p!==e.next&&pointInTriangle(i.x,i.y,x.x,x.y,a.x,a.y,p.x,p.y)&&area(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;y&&y.z>=v;){if(y!==e.prev&&y!==e.next&&pointInTriangle(i.x,i.y,x.x,x.y,a.x,a.y,y.x,y.y)&&area(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;p&&p.z<=f;){if(p!==e.prev&&p!==e.next&&pointInTriangle(i.x,i.y,x.x,x.y,a.x,a.y,p.x,p.y)&&area(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function cureLocalIntersections(e,n,r){var t=e;do{var i=t.prev,x=t.next.next;!equals(i,x)&&intersects(i,t,t.next,x)&&locallyInside(i,x)&&locallyInside(x,i)&&(n.push(i.i/r),n.push(t.i/r),n.push(x.i/r),removeNode(t),removeNode(t.next),t=e=x),t=t.next}while(t!==e);return t}function splitEarcut(e,n,r,t,i,x){var a=e;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&isValidDiagonal(a,o)){var l=splitPolygon(a,o);return a=filterPoints(a,a.next),l=filterPoints(l,l.next),earcutLinked(a,n,r,t,i,x),void earcutLinked(l,n,r,t,i,x)}o=o.next}a=a.next}while(a!==e)}function eliminateHoles(e,n,r,t){var i,x,a,o,l,u=[];for(i=0,x=n.length;i<x;i++)a=n[i]*t,o=i<x-1?n[i+1]*t:e.length,l=linkedList(e,a,o,t,!1),l===l.next&&(l.steiner=!0),u.push(getLeftmost(l));for(u.sort(compareX),i=0;i<u.length;i++)eliminateHole(u[i],r),r=filterPoints(r,r.next);return r}function compareX(e,n){return e.x-n.x}function eliminateHole(e,n){if(n=findHoleBridge(e,n)){var r=splitPolygon(n,e);filterPoints(r,r.next)}}function findHoleBridge(e,n){var r,t=n,i=e.x,x=e.y,a=-1/0;do{if(x<=t.y&&x>=t.next.y&&t.next.y!==t.y){var o=t.x+(x-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=i&&o>a){if(a=o,o===i){if(x===t.y)return t;if(x===t.next.y)return t.next}r=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!r)return null;if(i===a)return r.prev;var l,u=r,s=r.x,v=r.y,f=1/0;for(t=r.next;t!==u;)i>=t.x&&t.x>=s&&i!==t.x&&pointInTriangle(x<v?i:a,x,s,v,x<v?a:i,x,t.x,t.y)&&((l=Math.abs(x-t.y)/(i-t.x))<f||l===f&&t.x>r.x)&&locallyInside(t,e)&&(r=t,f=l),t=t.next;return r}function indexCurve(e,n,r,t){var i=e;do{null===i.z&&(i.z=zOrder(i.x,i.y,n,r,t)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,sortLinked(i)}function sortLinked(e){var n,r,t,i,x,a,o,l,u=1;do{for(r=e,e=null,x=null,a=0;r;){for(a++,t=r,o=0,n=0;n<u&&(o++,t=t.nextZ);n++);for(l=u;o>0||l>0&&t;)0!==o&&(0===l||!t||r.z<=t.z)?(i=r,r=r.nextZ,o--):(i=t,t=t.nextZ,l--),x?x.nextZ=i:e=i,i.prevZ=x,x=i;r=t}x.nextZ=null,u*=2}while(a>1);return e}function zOrder(e,n,r,t,i){return e=32767*(e-r)*i,n=32767*(n-t)*i,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),e|n<<1}function getLeftmost(e){var n=e,r=e;do{n.x<r.x&&(r=n),n=n.next}while(n!==e);return r}function pointInTriangle(e,n,r,t,i,x,a,o){return(i-a)*(n-o)-(e-a)*(x-o)>=0&&(e-a)*(t-o)-(r-a)*(n-o)>=0&&(r-a)*(x-o)-(i-a)*(t-o)>=0}function isValidDiagonal(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!intersectsPolygon(e,n)&&locallyInside(e,n)&&locallyInside(n,e)&&middleInside(e,n)}function area(e,n,r){return(n.y-e.y)*(r.x-n.x)-(n.x-e.x)*(r.y-n.y)}function equals(e,n){return e.x===n.x&&e.y===n.y}function intersects(e,n,r,t){return!!(equals(e,n)&&equals(r,t)||equals(e,t)&&equals(r,n))||area(e,n,r)>0!=area(e,n,t)>0&&area(r,t,e)>0!=area(r,t,n)>0}function intersectsPolygon(e,n){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==n.i&&r.next.i!==n.i&&intersects(r,r.next,e,n))return!0;r=r.next}while(r!==e);return!1}function locallyInside(e,n){return area(e.prev,e,e.next)<0?area(e,n,e.next)>=0&&area(e,e.prev,n)>=0:area(e,n,e.prev)<0||area(e,e.next,n)<0}function middleInside(e,n){var r=e,t=!1,i=(e.x+n.x)/2,x=(e.y+n.y)/2;do{r.y>x!=r.next.y>x&&r.next.y!==r.y&&i<(r.next.x-r.x)*(x-r.y)/(r.next.y-r.y)+r.x&&(t=!t),r=r.next}while(r!==e);return t}function splitPolygon(e,n){var r=new Node(e.i,e.x,e.y),t=new Node(n.i,n.x,n.y),i=e.next,x=n.prev;return e.next=n,n.prev=e,r.next=i,i.prev=r,t.next=r,r.prev=t,x.next=t,t.prev=x,t}function insertNode(e,n,r,t){var i=new Node(e,n,r);return t?(i.next=t.next,i.prev=t,t.next.prev=i,t.next=i):(i.prev=i,i.next=i),i}function removeNode(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Node(e,n,r){this.i=e,this.x=n,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(e,n,r,t){for(var i=0,x=n,a=r-t;x<r;x+=t)i+=(e[a]-e[x])*(e[x+1]+e[a+1]),a=x;return i}module.exports=earcut,module.exports.default=earcut,earcut.deviation=function(e,n,r,t){var i=n&&n.length,x=i?n[0]*r:e.length,a=Math.abs(signedArea(e,0,x,r));if(i)for(var o=0,l=n.length;o<l;o++){var u=n[o]*r,s=o<l-1?n[o+1]*r:e.length;a-=Math.abs(signedArea(e,u,s,r))}var v=0;for(o=0;o<t.length;o+=3){var f=t[o]*r,y=t[o+1]*r,p=t[o+2]*r;v+=Math.abs((e[f]-e[p])*(e[y+1]-e[f+1])-(e[f]-e[y])*(e[p+1]-e[f+1]))}return 0===a&&0===v?0:Math.abs((v-a)/a)},earcut.flatten=function(e){for(var n=e[0][0].length,r={vertices:[],holes:[],dimensions:n},t=0,i=0;i<e.length;i++){for(var x=0;x<e[i].length;x++)for(var a=0;a<n;a++)r.vertices.push(e[i][x][a]);i>0&&(t+=e[i-1].length,r.holes.push(t))}return r};
},{}],15:[function(_dereq_,module,exports){
function rewind(r,e){switch(r&&r.type||null){case"FeatureCollection":return r.features=r.features.map(curryOuter(rewind,e)),r;case"Feature":return r.geometry=rewind(r.geometry,e),r;case"Polygon":case"MultiPolygon":return correct(r,e);default:return r}}function curryOuter(r,e){return function(n){return r(n,e)}}function correct(r,e){return"Polygon"===r.type?r.coordinates=correctRings(r.coordinates,e):"MultiPolygon"===r.type&&(r.coordinates=r.coordinates.map(curryOuter(correctRings,e))),r}function correctRings(r,e){e=!!e,r[0]=wind(r[0],e);for(var n=1;n<r.length;n++)r[n]=wind(r[n],!e);return r}function wind(r,e){return cw(r)===e?r:r.reverse()}function cw(r){return geojsonArea.ring(r)>=0}var geojsonArea=_dereq_("@mapbox/geojson-area");module.exports=rewind;
},{"@mapbox/geojson-area":1}],16:[function(_dereq_,module,exports){
"use strict";function clip(i,n,e,t,l,r,u){if(e/=n,t/=n,r>=e&&u<=t)return i;if(r>t||u<e)return null;for(var s=[],o=0;o<i.length;o++){var h=i[o],p=h.geometry,c=h.type,a=0===l?h.minX:h.minY,g=0===l?h.maxX:h.maxY;if(a>=e&&g<=t)s.push(h);else if(!(a>t||g<e)){var f=[];if("Point"===c||"MultiPoint"===c)clipPoints(p,f,e,t,l);else if("LineString"===c)clipLine(p,f,e,t,l,!1);else if("MultiLineString"===c)clipLines(p,f,e,t,l,!1);else if("Polygon"===c)clipLines(p,f,e,t,l,!0);else if("MultiPolygon"===c)for(var P=0;P<p.length;P++){var L=[];clipLines(p[P],L,e,t,l,!0),L.length&&f.push(L)}f.length&&("LineString"!==c&&"MultiLineString"!==c||(1===f.length?(c="LineString",f=f[0]):c="MultiLineString"),"Point"!==c&&"MultiPoint"!==c||(c=3===f.length?"Point":"MultiPoint"),s.push(createFeature(h.id,c,f,h.tags)))}}return s.length?s:null}function clipPoints(i,n,e,t,l){for(var r=0;r<i.length;r+=3){var u=i[r+l];u>=e&&u<=t&&(n.push(i[r]),n.push(i[r+1]),n.push(i[r+2]))}}function clipLine(i,n,e,t,l,r){for(var u=[],s=0===l?intersectX:intersectY,o=0;o<i.length-3;o+=3){var h=i[o],p=i[o+1],c=i[o+2],a=i[o+3],g=i[o+4],f=0===l?h:p,P=0===l?a:g,L=!1;f<e?P>=e&&s(u,h,p,a,g,e):f>t?P<=t&&s(u,h,p,a,g,t):addPoint(u,h,p,c),P<e&&f>=e&&(s(u,h,p,a,g,e),L=!0),P>t&&f<=t&&(s(u,h,p,a,g,t),L=!0),!r&&L&&(u.size=i.size,n.push(u),u=[])}var v=i.length-3;h=i[v],p=i[v+1],c=i[v+2],f=0===l?h:p,f>=e&&f<=t&&addPoint(u,h,p,c),v=u.length-3,r&&v>=3&&(u[v]!==u[0]||u[v+1]!==u[1])&&addPoint(u,u[0],u[1],u[2]),u.length&&(u.size=i.size,n.push(u))}function clipLines(i,n,e,t,l,r){for(var u=0;u<i.length;u++)clipLine(i[u],n,e,t,l,r)}function addPoint(i,n,e,t){i.push(n),i.push(e),i.push(t)}function intersectX(i,n,e,t,l,r){i.push(r),i.push(e+(r-n)*(l-e)/(t-n)),i.push(1)}function intersectY(i,n,e,t,l,r){i.push(n+(r-e)*(t-n)/(l-e)),i.push(r),i.push(1)}module.exports=clip;var createFeature=_dereq_("./feature");
},{"./feature":18}],17:[function(_dereq_,module,exports){
"use strict";function convert(e,t){var r=[];if("FeatureCollection"===e.type)for(var o=0;o<e.features.length;o++)convertFeature(r,e.features[o],t);else"Feature"===e.type?convertFeature(r,e,t):convertFeature(r,{geometry:e},t);return r}function convertFeature(e,t,r){if(t.geometry){var o=t.geometry.coordinates,n=t.geometry.type,i=r*r,a=[];if("Point"===n)convertPoint(o,a);else if("MultiPoint"===n)for(var u=0;u<o.length;u++)convertPoint(o[u],a);else if("LineString"===n)convertLine(o,a,i,!1);else if("MultiLineString"===n)convertLines(o,a,i,!1);else if("Polygon"===n)convertLines(o,a,i,!0);else{if("MultiPolygon"!==n){if("GeometryCollection"===n){for(u=0;u<t.geometry.geometries.length;u++)convertFeature(e,{geometry:t.geometry.geometries[u],properties:t.properties},r);return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<o.length;u++){var s=[];convertLines(o[u],s,i,!0),a.push(s)}}e.push(createFeature(t.id,n,a,t.properties))}}function convertPoint(e,t){t.push(projectX(e[0])),t.push(projectY(e[1])),t.push(0)}function convertLine(e,t,r,o){for(var n,i,a=0,u=0;u<e.length;u++){var s=projectX(e[u][0]),c=projectY(e[u][1]);t.push(s),t.push(c),t.push(0),u>0&&(a+=o?(n*c-s*i)/2:Math.sqrt(Math.pow(s-n,2)+Math.pow(c-i,2))),n=s,i=c}var p=t.length-3;t[2]=1,simplify(t,0,p,r),t[p+2]=1,t.size=Math.abs(a)}function convertLines(e,t,r,o){for(var n=0;n<e.length;n++){var i=[];convertLine(e[n],i,r,o),t.push(i)}}function projectX(e){return e/360+.5}function projectY(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}module.exports=convert;var simplify=_dereq_("./simplify"),createFeature=_dereq_("./feature");
},{"./feature":18,"./simplify":20}],18:[function(_dereq_,module,exports){
"use strict";function createFeature(e,n,t,i){var a={id:e||null,type:n,geometry:t,tags:i,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return calcBBox(a),a}function calcBBox(e){var n=e.geometry,t=e.type;if("Point"===t||"MultiPoint"===t||"LineString"===t)calcLineBBox(e,n);else if("Polygon"===t||"MultiLineString"===t)for(var i=0;i<n.length;i++)calcLineBBox(e,n[i]);else if("MultiPolygon"===t)for(i=0;i<n.length;i++)for(var a=0;a<n[i].length;a++)calcLineBBox(e,n[i][a])}function calcLineBBox(e,n){for(var t=0;t<n.length;t+=3)e.minX=Math.min(e.minX,n[t]),e.minY=Math.min(e.minY,n[t+1]),e.maxX=Math.max(e.maxX,n[t]),e.maxY=Math.max(e.maxY,n[t+1])}module.exports=createFeature;
},{}],19:[function(_dereq_,module,exports){
"use strict";function geojsonvt(e,t){return new GeoJSONVT(e,t)}function GeoJSONVT(e,t){t=this.options=extend(Object.create(this.options),t);var o=t.debug;if(o&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");var i=1<<t.maxZoom,n=convert(e,t.tolerance/(i*t.extent));this.tiles={},this.tileCoords=[],o&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),n=wrap(n,t.buffer/t.extent),n.length&&this.splitTile(n,0,0,0),o&&(n.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function toID(e,t,o){return 32*((1<<e)*o+t)+e}function extend(e,t){for(var o in t)e[o]=t[o];return e}module.exports=geojsonvt;var convert=_dereq_("./convert"),transform=_dereq_("./transform"),clip=_dereq_("./clip"),wrap=_dereq_("./wrap"),createTile=_dereq_("./tile");GeoJSONVT.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,debug:0},GeoJSONVT.prototype.splitTile=function(e,t,o,i,n,s,l){for(var r=[e,t,o,i],a=this.options,u=a.debug;r.length;){i=r.pop(),o=r.pop(),t=r.pop(),e=r.pop();var m=1<<t,c=toID(t,o,i),p=this.tiles[c],d=t===a.maxZoom?0:a.tolerance/(m*a.extent);if(!p&&(u>1&&console.time("creation"),p=this.tiles[c]=createTile(e,m,o,i,d,t===a.maxZoom),this.tileCoords.push({z:t,x:o,y:i}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,o,i,p.numFeatures,p.numPoints,p.numSimplified),console.timeEnd("creation"));var h="z"+t;this.stats[h]=(this.stats[h]||0)+1,this.total++}if(p.source=e,n){if(t===a.maxZoom||t===n)continue;var x=1<<n-t;if(o!==Math.floor(s/x)||i!==Math.floor(l/x))continue}else if(t===a.indexMaxZoom||p.numPoints<=a.indexMaxPoints)continue;if(p.source=null,0!==e.length){u>1&&console.time("clipping");var f,g,v,Z,T,M,b=.5*a.buffer/a.extent,w=.5-b,Y=.5+b,O=1+b;f=g=v=Z=null,T=clip(e,m,o-b,o+Y,0,p.minX,p.maxX),M=clip(e,m,o+w,o+O,0,p.minX,p.maxX),e=null,T&&(f=clip(T,m,i-b,i+Y,1,p.minY,p.maxY),g=clip(T,m,i+w,i+O,1,p.minY,p.maxY),T=null),M&&(v=clip(M,m,i-b,i+Y,1,p.minY,p.maxY),Z=clip(M,m,i+w,i+O,1,p.minY,p.maxY),M=null),u>1&&console.timeEnd("clipping"),r.push(f||[],t+1,2*o,2*i),r.push(g||[],t+1,2*o,2*i+1),r.push(v||[],t+1,2*o+1,2*i),r.push(Z||[],t+1,2*o+1,2*i+1)}}},GeoJSONVT.prototype.getTile=function(e,t,o){var i=this.options,n=i.extent,s=i.debug;if(e<0||e>24)return null;var l=1<<e;t=(t%l+l)%l;var r=toID(e,t,o);if(this.tiles[r])return transform.tile(this.tiles[r],n);s>1&&console.log("drilling down to z%d-%d-%d",e,t,o);for(var a,u=e,m=t,c=o;!a&&u>0;)u--,m=Math.floor(m/2),c=Math.floor(c/2),a=this.tiles[toID(u,m,c)];return a&&a.source?(s>1&&console.log("found parent tile z%d-%d-%d",u,m,c),s>1&&console.time("drilling down"),this.splitTile(a.source,u,m,c,e,t,o),s>1&&console.timeEnd("drilling down"),this.tiles[r]?transform.tile(this.tiles[r],n):null):null};
},{"./clip":16,"./convert":17,"./tile":21,"./transform":22,"./wrap":23}],20:[function(_dereq_,module,exports){
"use strict";function simplify(i,t,r,s){for(var e,f=s,l=i[t],m=i[t+1],n=i[r],o=i[r+1],p=t+3;p<r;p+=3){var u=getSqSegDist(i[p],i[p+1],l,m,n,o);u>f&&(e=p,f=u)}f>s&&(e-t>3&&simplify(i,t,e,s),i[e+2]=f,r-e>3&&simplify(i,e,r,s))}function getSqSegDist(i,t,r,s,e,f){var l=e-r,m=f-s;if(0!==l||0!==m){var n=((i-r)*l+(t-s)*m)/(l*l+m*m);n>1?(r=e,s=f):n>0&&(r+=l*n,s+=m*n)}return l=i-r,m=t-s,l*l+m*m}module.exports=simplify;
},{}],21:[function(_dereq_,module,exports){
"use strict";function createTile(n,e,i,t,r,u){for(var a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:i,y:t,z2:e,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},l=0;l<n.length;l++){a.numFeatures++,addFeature(a,n[l],r,u);var o=n[l].minX,m=n[l].minY,f=n[l].maxX,s=n[l].maxY;o<a.minX&&(a.minX=o),m<a.minY&&(a.minY=m),f>a.maxX&&(a.maxX=f),s>a.maxY&&(a.maxY=s)}return a}function addFeature(n,e,i,t){var r=e.geometry,u=e.type,a=[];if("Point"===u||"MultiPoint"===u)for(var l=0;l<r.length;l+=3)a.push(r[l]),a.push(r[l+1]),n.numPoints++,n.numSimplified++;else if("LineString"===u)addLine(a,r,n,i,t,!1,!1);else if("MultiLineString"===u||"Polygon"===u)for(l=0;l<r.length;l++)addLine(a,r[l],n,i,t,"Polygon"===u,0===l);else if("MultiPolygon"===u)for(var o=0;o<r.length;o++){var m=r[o];for(l=0;l<m.length;l++)addLine(a,m[l],n,i,t,!0,0===l)}if(a.length){var f={geometry:a,type:"Polygon"===u||"MultiPolygon"===u?3:"LineString"===u||"MultiLineString"===u?2:1,tags:e.tags||null};null!==e.id&&(f.id=e.id),n.features.push(f)}}function addLine(n,e,i,t,r,u,a){var l=t*t;if(!r&&e.size<(u?l:t))return void(i.numPoints+=e.length/3);for(var o=[],m=0;m<e.length;m+=3)(r||e[m+2]>l)&&(i.numSimplified++,o.push(e[m]),o.push(e[m+1])),i.numPoints++;u&&rewind(o,a),n.push(o)}function rewind(n,e){for(var i=0,t=0,r=n.length,u=r-2;t<r;u=t,t+=2)i+=(n[t]-n[u])*(n[t+1]+n[u+1]);if(i>0===e)for(t=0,r=n.length;t<r/2;t+=2){var a=n[t],l=n[t+1];n[t]=n[r-2-t],n[t+1]=n[r-1-t],n[r-2-t]=a,n[r-1-t]=l}}module.exports=createTile;
},{}],22:[function(_dereq_,module,exports){
"use strict";function transformTile(r,t){if(r.transformed)return r;var e,o,n,f=r.z2,s=r.x,a=r.y;for(e=0;e<r.features.length;e++){var i=r.features[e],u=i.geometry,m=i.type;if(i.geometry=[],1===m)for(o=0;o<u.length;o+=2)i.geometry.push(transformPoint(u[o],u[o+1],t,f,s,a));else for(o=0;o<u.length;o++){var h=[];for(n=0;n<u[o].length;n+=2)h.push(transformPoint(u[o][n],u[o][n+1],t,f,s,a));i.geometry.push(h)}}return r.transformed=!0,r}function transformPoint(r,t,e,o,n,f){return[Math.round(e*(r*o-n)),Math.round(e*(t*o-f))]}exports.tile=transformTile,exports.point=transformPoint;
},{}],23:[function(_dereq_,module,exports){
"use strict";function wrap(e,r){var t=e,o=clip(e,1,-1-r,r,0,-1,2),i=clip(e,1,1-r,2+r,0,-1,2);return(o||i)&&(t=clip(e,1,-r,1+r,0,-1,2)||[],o&&(t=shiftFeatureCoords(o,1).concat(t)),i&&(t=t.concat(shiftFeatureCoords(i,-1)))),t}function shiftFeatureCoords(e,r){for(var t=[],o=0;o<e.length;o++){var i,s=e[o],n=s.type;if("Point"===n||"MultiPoint"===n||"LineString"===n)i=shiftCoords(s.geometry,r);else if("MultiLineString"===n||"Polygon"===n){i=[];for(var u=0;u<s.geometry.length;u++)i.push(shiftCoords(s.geometry[u],r))}else if("MultiPolygon"===n)for(i=[],u=0;u<s.geometry.length;u++){for(var a=[],f=0;f<s.geometry[u].length;f++)a.push(shiftCoords(s.geometry[u][f],r));i.push(a)}t.push(createFeature(s.id,n,i,s.tags))}return t}function shiftCoords(e,r){var t=[];t.size=e.size;for(var o=0;o<e.length;o+=3)t.push(e[o]+r,e[o+1],e[o+2]);return t}var clip=_dereq_("./clip"),createFeature=_dereq_("./feature");module.exports=wrap;
},{"./clip":16,"./feature":18}],24:[function(_dereq_,module,exports){
"use strict";function GridIndex(t,r,e){var s=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],r=i[1],e=i[2],this.d=r+2*e;for(var h=0;h<this.d*this.d;h++){var n=i[NUM_PARAMS+h],o=i[NUM_PARAMS+h+1];s.push(n===o?null:i.subarray(n,o))}var l=i[NUM_PARAMS+s.length],a=i[NUM_PARAMS+s.length+1];this.keys=i.subarray(l,a),this.bboxes=i.subarray(a),this.insert=this._insertReadonly}else{this.d=r+2*e;for(var d=0;d<this.d*this.d;d++)s.push([]);this.keys=[],this.bboxes=[]}this.n=r,this.extent=t,this.padding=e,this.scale=r/t,this.uid=0;var f=e/r*t;this.min=-f,this.max=t+f}module.exports=GridIndex;var NUM_PARAMS=3;GridIndex.prototype.insert=function(t,r,e,s,i){this._forEachCell(r,e,s,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(r),this.bboxes.push(e),this.bboxes.push(s),this.bboxes.push(i)},GridIndex.prototype._insertReadonly=function(){throw"Cannot insert into a GridIndex created from an ArrayBuffer."},GridIndex.prototype._insertCell=function(t,r,e,s,i,h){this.cells[i].push(h)},GridIndex.prototype.query=function(t,r,e,s){var i=this.min,h=this.max;if(t<=i&&r<=i&&h<=e&&h<=s)return Array.prototype.slice.call(this.keys);var n=[],o={};return this._forEachCell(t,r,e,s,this._queryCell,n,o),n},GridIndex.prototype._queryCell=function(t,r,e,s,i,h,n){var o=this.cells[i];if(null!==o)for(var l=this.keys,a=this.bboxes,d=0;d<o.length;d++){var f=o[d];if(void 0===n[f]){var u=4*f;t<=a[u+2]&&r<=a[u+3]&&e>=a[u+0]&&s>=a[u+1]?(n[f]=!0,h.push(l[f])):n[f]=!1}}},GridIndex.prototype._forEachCell=function(t,r,e,s,i,h,n){for(var o=this._convertToCellCoord(t),l=this._convertToCellCoord(r),a=this._convertToCellCoord(e),d=this._convertToCellCoord(s),f=o;f<=a;f++)for(var u=l;u<=d;u++){var y=this.d*u+f;if(i.call(this,t,r,e,s,y,h,n))return}},GridIndex.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},GridIndex.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,r=NUM_PARAMS+this.cells.length+1+1,e=0,s=0;s<this.cells.length;s++)e+=this.cells[s].length;var i=new Int32Array(r+e+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var h=r,n=0;n<t.length;n++){var o=t[n];i[NUM_PARAMS+n]=h,i.set(o,h),h+=o.length}return i[NUM_PARAMS+t.length]=h,i.set(this.keys,h),h+=this.keys.length,i[NUM_PARAMS+t.length+1]=h,i.set(this.bboxes,h),h+=this.bboxes.length,i.buffer};
},{}],25:[function(_dereq_,module,exports){
exports.read=function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,e=f>>1,i=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-i)-1,s>>=-i,i+=w;i>0;M=256*M+a[o+N],N+=n,i-=8);for(p=M&(1<<-i)-1,M>>=-i,i+=r;i>0;p=256*p+a[o+N],N+=n,i-=8);if(0===M)M=1-e;else{if(M===f)return p?NaN:1/0*(s?-1:1);p+=Math.pow(2,r),M-=e}return(s?-1:1)*p*Math.pow(2,M-r)},exports.write=function(a,o,t,r,h,M){var p,w,f,e=8*M-h-1,i=(1<<e)-1,N=i>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=i):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),o+=p+N>=1?n/f:n*Math.pow(2,1-N),o*f>=2&&(p++,f/=2),p+N>=i?(w=0,p=i):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,e+=h;e>0;a[t+s]=255&p,s+=u,p/=256,e-=8);a[t+s-u]|=128*l};
},{}],26:[function(_dereq_,module,exports){
"use strict";function kdbush(t,i,e,s,n){return new KDBush(t,i,e,s,n)}function KDBush(t,i,e,s,n){i=i||defaultGetX,e=e||defaultGetY,n=n||Array,this.nodeSize=s||64,this.points=t,this.ids=new n(t.length),this.coords=new n(2*t.length);for(var r=0;r<t.length;r++)this.ids[r]=r,this.coords[2*r]=i(t[r]),this.coords[2*r+1]=e(t[r]);sort(this.ids,this.coords,this.nodeSize,0,this.ids.length-1,0)}function defaultGetX(t){return t[0]}function defaultGetY(t){return t[1]}var sort=_dereq_("./sort"),range=_dereq_("./range"),within=_dereq_("./within");module.exports=kdbush,KDBush.prototype={range:function(t,i,e,s){return range(this.ids,this.coords,t,i,e,s,this.nodeSize)},within:function(t,i,e){return within(this.ids,this.coords,t,i,e,this.nodeSize)}};
},{"./range":27,"./sort":28,"./within":29}],27:[function(_dereq_,module,exports){
"use strict";function range(p,r,s,u,h,e,o){for(var a,t,n=[0,p.length-1,0],f=[];n.length;){var l=n.pop(),v=n.pop(),g=n.pop();if(v-g<=o)for(var i=g;i<=v;i++)a=r[2*i],t=r[2*i+1],a>=s&&a<=h&&t>=u&&t<=e&&f.push(p[i]);else{var c=Math.floor((g+v)/2);a=r[2*c],t=r[2*c+1],a>=s&&a<=h&&t>=u&&t<=e&&f.push(p[c]);var d=(l+1)%2;(0===l?s<=a:u<=t)&&(n.push(g),n.push(c-1),n.push(d)),(0===l?h>=a:e>=t)&&(n.push(c+1),n.push(v),n.push(d))}}return f}module.exports=range;
},{}],28:[function(_dereq_,module,exports){
"use strict";function sortKD(t,a,o,s,r,e){if(!(r-s<=o)){var f=Math.floor((s+r)/2);select(t,a,f,s,r,e%2),sortKD(t,a,o,s,f-1,e+1),sortKD(t,a,o,f+1,r,e+1)}}function select(t,a,o,s,r,e){for(;r>s;){if(r-s>600){var f=r-s+1,p=o-s+1,w=Math.log(f),m=.5*Math.exp(2*w/3),n=.5*Math.sqrt(w*m*(f-m)/f)*(p-f/2<0?-1:1);select(t,a,o,Math.max(s,Math.floor(o-p*m/f+n)),Math.min(r,Math.floor(o+(f-p)*m/f+n)),e)}var c=a[2*o+e],h=s,i=r;for(swapItem(t,a,s,o),a[2*r+e]>c&&swapItem(t,a,s,r);h<i;){for(swapItem(t,a,h,i),h++,i--;a[2*h+e]<c;)h++;for(;a[2*i+e]>c;)i--}a[2*s+e]===c?swapItem(t,a,s,i):(i++,swapItem(t,a,i,r)),i<=o&&(s=i+1),o<=i&&(r=i-1)}}function swapItem(t,a,o,s){swap(t,o,s),swap(a,2*o,2*s),swap(a,2*o+1,2*s+1)}function swap(t,a,o){var s=t[a];t[a]=t[o],t[o]=s}module.exports=sortKD;
},{}],29:[function(_dereq_,module,exports){
"use strict";function within(s,p,r,t,u,h){for(var i=[0,s.length-1,0],o=[],n=u*u;i.length;){var e=i.pop(),a=i.pop(),f=i.pop();if(a-f<=h)for(var v=f;v<=a;v++)sqDist(p[2*v],p[2*v+1],r,t)<=n&&o.push(s[v]);else{var l=Math.floor((f+a)/2),c=p[2*l],q=p[2*l+1];sqDist(c,q,r,t)<=n&&o.push(s[l]);var D=(e+1)%2;(0===e?r-u<=c:t-u<=q)&&(i.push(f),i.push(l-1),i.push(D)),(0===e?r+u>=c:t+u>=q)&&(i.push(l+1),i.push(a),i.push(D))}}return o}function sqDist(s,p,r,t){var u=s-r,h=p-t;return u*u+h*h}module.exports=within;
},{}],30:[function(_dereq_,module,exports){
"use strict";function Pbf(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}function readVarintRemainder(t,i,e){var r,s,n=e.buf;if(s=n[e.pos++],r=(112&s)>>4,s<128)return toNum(t,r,i);if(s=n[e.pos++],r|=(127&s)<<3,s<128)return toNum(t,r,i);if(s=n[e.pos++],r|=(127&s)<<10,s<128)return toNum(t,r,i);if(s=n[e.pos++],r|=(127&s)<<17,s<128)return toNum(t,r,i);if(s=n[e.pos++],r|=(127&s)<<24,s<128)return toNum(t,r,i);if(s=n[e.pos++],r|=(1&s)<<31,s<128)return toNum(t,r,i);throw new Error("Expected varint not more than 10 bytes")}function readPackedEnd(t){return t.type===Pbf.Bytes?t.readVarint()+t.pos:t.pos+1}function toNum(t,i,e){return e?4294967296*i+(t>>>0):4294967296*(i>>>0)+(t>>>0)}function writeBigVarint(t,i){var e,r;if(t>=0?(e=t%4294967296|0,r=t/4294967296|0):(e=~(-t%4294967296),r=~(-t/4294967296),4294967295^e?e=e+1|0:(e=0,r=r+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");i.realloc(10),writeBigVarintLow(e,r,i),writeBigVarintHigh(r,i)}function writeBigVarintLow(t,i,e){e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos]=127&t}function writeBigVarintHigh(t,i){var e=(7&t)<<4;i.buf[i.pos++]|=e|((t>>>=3)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),t&&(i.buf[i.pos++]=127&t)))))}function makeRoomForExtraLength(t,i,e){var r=i<=16383?1:i<=2097151?2:i<=268435455?3:Math.ceil(Math.log(i)/(7*Math.LN2));e.realloc(r);for(var s=e.pos-1;s>=t;s--)e.buf[s+r]=e.buf[s]}function writePackedVarint(t,i){for(var e=0;e<t.length;e++)i.writeVarint(t[e])}function writePackedSVarint(t,i){for(var e=0;e<t.length;e++)i.writeSVarint(t[e])}function writePackedFloat(t,i){for(var e=0;e<t.length;e++)i.writeFloat(t[e])}function writePackedDouble(t,i){for(var e=0;e<t.length;e++)i.writeDouble(t[e])}function writePackedBoolean(t,i){for(var e=0;e<t.length;e++)i.writeBoolean(t[e])}function writePackedFixed32(t,i){for(var e=0;e<t.length;e++)i.writeFixed32(t[e])}function writePackedSFixed32(t,i){for(var e=0;e<t.length;e++)i.writeSFixed32(t[e])}function writePackedFixed64(t,i){for(var e=0;e<t.length;e++)i.writeFixed64(t[e])}function writePackedSFixed64(t,i){for(var e=0;e<t.length;e++)i.writeSFixed64(t[e])}function readUInt32(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16)+16777216*t[i+3]}function writeInt32(t,i,e){t[e]=i,t[e+1]=i>>>8,t[e+2]=i>>>16,t[e+3]=i>>>24}function readInt32(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16)+(t[i+3]<<24)}function readUtf8(t,i,e){for(var r="",s=i;s<e;){var n=t[s],o=null,a=n>239?4:n>223?3:n>191?2:1;if(s+a>e)break;var h,u,f;1===a?n<128&&(o=n):2===a?128==(192&(h=t[s+1]))&&(o=(31&n)<<6|63&h)<=127&&(o=null):3===a?(h=t[s+1],u=t[s+2],128==(192&h)&&128==(192&u)&&((o=(15&n)<<12|(63&h)<<6|63&u)<=2047||o>=55296&&o<=57343)&&(o=null)):4===a&&(h=t[s+1],u=t[s+2],f=t[s+3],128==(192&h)&&128==(192&u)&&128==(192&f)&&((o=(15&n)<<18|(63&h)<<12|(63&u)<<6|63&f)<=65535||o>=1114112)&&(o=null)),null===o?(o=65533,a=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|1023&o),r+=String.fromCharCode(o),s+=a}return r}function writeUtf8(t,i,e){for(var r,s,n=0;n<i.length;n++){if((r=i.charCodeAt(n))>55295&&r<57344){if(!s){r>56319||n+1===i.length?(t[e++]=239,t[e++]=191,t[e++]=189):s=r;continue}if(r<56320){t[e++]=239,t[e++]=191,t[e++]=189,s=r;continue}r=s-55296<<10|r-56320|65536,s=null}else s&&(t[e++]=239,t[e++]=191,t[e++]=189,s=null);r<128?t[e++]=r:(r<2048?t[e++]=r>>6|192:(r<65536?t[e++]=r>>12|224:(t[e++]=r>>18|240,t[e++]=r>>12&63|128),t[e++]=r>>6&63|128),t[e++]=63&r|128)}return e}module.exports=Pbf;var ieee754=_dereq_("ieee754");Pbf.Varint=0,Pbf.Fixed64=1,Pbf.Bytes=2,Pbf.Fixed32=5;var SHIFT_LEFT_32=4294967296,SHIFT_RIGHT_32=1/SHIFT_LEFT_32;Pbf.prototype={destroy:function(){this.buf=null},readFields:function(t,i,e){for(e=e||this.length;this.pos<e;){var r=this.readVarint(),s=r>>3,n=this.pos;this.type=7&r,t(s,i,this),this.pos===n&&this.skip(r)}return i},readMessage:function(t,i){return this.readFields(t,i,this.readVarint()+this.pos)},readFixed32:function(){var t=readUInt32(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=readInt32(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=readUInt32(this.buf,this.pos)+readUInt32(this.buf,this.pos+4)*SHIFT_LEFT_32;return this.pos+=8,t},readSFixed64:function(){var t=readUInt32(this.buf,this.pos)+readInt32(this.buf,this.pos+4)*SHIFT_LEFT_32;return this.pos+=8,t},readFloat:function(){var t=ieee754.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=ieee754.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var i,e,r=this.buf;return e=r[this.pos++],i=127&e,e<128?i:(e=r[this.pos++],i|=(127&e)<<7,e<128?i:(e=r[this.pos++],i|=(127&e)<<14,e<128?i:(e=r[this.pos++],i|=(127&e)<<21,e<128?i:(e=r[this.pos],i|=(15&e)<<28,readVarintRemainder(i,t,this)))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,i=readUtf8(this.buf,this.pos,t);return this.pos=t,i},readBytes:function(){var t=this.readVarint()+this.pos,i=this.buf.subarray(this.pos,t);return this.pos=t,i},readPackedVarint:function(t,i){var e=readPackedEnd(this);for(t=t||[];this.pos<e;)t.push(this.readVarint(i));return t},readPackedSVarint:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readBoolean());return t},readPackedFloat:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readFloat());return t},readPackedDouble:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readDouble());return t},readPackedFixed32:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){var i=readPackedEnd(this);for(t=t||[];this.pos<i;)t.push(this.readSFixed64());return t},skip:function(t){var i=7&t;if(i===Pbf.Varint)for(;this.buf[this.pos++]>127;);else if(i===Pbf.Bytes)this.pos=this.readVarint()+this.pos;else if(i===Pbf.Fixed32)this.pos+=4;else{if(i!==Pbf.Fixed64)throw new Error("Unimplemented type: "+i);this.pos+=8}},writeTag:function(t,i){this.writeVarint(t<<3|i)},realloc:function(t){for(var i=this.length||16;i<this.pos+t;)i*=2;if(i!==this.length){var e=new Uint8Array(i);e.set(this.buf),this.buf=e,this.length=i}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),writeInt32(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),writeInt32(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),writeInt32(this.buf,-1&t,this.pos),writeInt32(this.buf,Math.floor(t*SHIFT_RIGHT_32),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),writeInt32(this.buf,-1&t,this.pos),writeInt32(this.buf,Math.floor(t*SHIFT_RIGHT_32),this.pos+4),this.pos+=8},writeVarint:function(t){if((t=+t||0)>268435455||t<0)return void writeBigVarint(t,this);this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127)))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var i=this.pos;this.pos=writeUtf8(this.buf,t,this.pos);var e=this.pos-i;e>=128&&makeRoomForExtraLength(i,e,this),this.pos=i-1,this.writeVarint(e),this.pos+=e},writeFloat:function(t){this.realloc(4),ieee754.write(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),ieee754.write(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var i=t.length;this.writeVarint(i),this.realloc(i);for(var e=0;e<i;e++)this.buf[this.pos++]=t[e]},writeRawMessage:function(t,i){this.pos++;var e=this.pos;t(i,this);var r=this.pos-e;r>=128&&makeRoomForExtraLength(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,i,e){this.writeTag(t,Pbf.Bytes),this.writeRawMessage(i,e)},writePackedVarint:function(t,i){this.writeMessage(t,writePackedVarint,i)},writePackedSVarint:function(t,i){this.writeMessage(t,writePackedSVarint,i)},writePackedBoolean:function(t,i){this.writeMessage(t,writePackedBoolean,i)},writePackedFloat:function(t,i){this.writeMessage(t,writePackedFloat,i)},writePackedDouble:function(t,i){this.writeMessage(t,writePackedDouble,i)},writePackedFixed32:function(t,i){this.writeMessage(t,writePackedFixed32,i)},writePackedSFixed32:function(t,i){this.writeMessage(t,writePackedSFixed32,i)},writePackedFixed64:function(t,i){this.writeMessage(t,writePackedFixed64,i)},writePackedSFixed64:function(t,i){this.writeMessage(t,writePackedSFixed64,i)},writeBytesField:function(t,i){this.writeTag(t,Pbf.Bytes),this.writeBytes(i)},writeFixed32Field:function(t,i){this.writeTag(t,Pbf.Fixed32),this.writeFixed32(i)},writeSFixed32Field:function(t,i){this.writeTag(t,Pbf.Fixed32),this.writeSFixed32(i)},writeFixed64Field:function(t,i){this.writeTag(t,Pbf.Fixed64),this.writeFixed64(i)},writeSFixed64Field:function(t,i){this.writeTag(t,Pbf.Fixed64),this.writeSFixed64(i)},writeVarintField:function(t,i){this.writeTag(t,Pbf.Varint),this.writeVarint(i)},writeSVarintField:function(t,i){this.writeTag(t,Pbf.Varint),this.writeSVarint(i)},writeStringField:function(t,i){this.writeTag(t,Pbf.Bytes),this.writeString(i)},writeFloatField:function(t,i){this.writeTag(t,Pbf.Fixed32),this.writeFloat(i)},writeDoubleField:function(t,i){this.writeTag(t,Pbf.Fixed64),this.writeDouble(i)},writeBooleanField:function(t,i){this.writeVarintField(t,Boolean(i))}};
},{"ieee754":25}],31:[function(_dereq_,module,exports){
"use strict";function partialSort(a,t,r,o,p){for(r=r||0,o=o||a.length-1,p=p||defaultCompare;o>r;){if(o-r>600){var f=o-r+1,e=t-r+1,l=Math.log(f),s=.5*Math.exp(2*l/3),i=.5*Math.sqrt(l*s*(f-s)/f)*(e-f/2<0?-1:1);partialSort(a,t,Math.max(r,Math.floor(t-e*s/f+i)),Math.min(o,Math.floor(t+(f-e)*s/f+i)),p)}var n=a[t],h=r,u=o;for(swap(a,r,t),p(a[o],n)>0&&swap(a,r,o);h<u;){for(swap(a,h,u),h++,u--;p(a[h],n)<0;)h++;for(;p(a[u],n)>0;)u--}0===p(a[r],n)?swap(a,r,u):(u++,swap(a,u,o)),u<=t&&(r=u+1),t<=u&&(o=u-1)}}function swap(a,t,r){var o=a[t];a[t]=a[r],a[r]=o}function defaultCompare(a,t){return a<t?-1:a>t?1:0}module.exports=partialSort;
},{}],32:[function(_dereq_,module,exports){
"use strict";function supercluster(t){return new SuperCluster(t)}function SuperCluster(t){this.options=extend(Object.create(this.options),t),this.trees=new Array(this.options.maxZoom+1)}function createCluster(t,e,n,o,i){return{x:t,y:e,zoom:1/0,id:o,properties:i,parentId:-1,numPoints:n}}function createPointCluster(t,e){var n=t.geometry.coordinates;return{x:lngX(n[0]),y:latY(n[1]),zoom:1/0,id:e,parentId:-1}}function getClusterJSON(t){return{type:"Feature",properties:getClusterProperties(t),geometry:{type:"Point",coordinates:[xLng(t.x),yLat(t.y)]}}}function getClusterProperties(t){var e=t.numPoints,n=e>=1e4?Math.round(e/1e3)+"k":e>=1e3?Math.round(e/100)/10+"k":e;return extend(extend({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:n})}function lngX(t){return t/360+.5}function latY(t){var e=Math.sin(t*Math.PI/180),n=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return n<0?0:n>1?1:n}function xLng(t){return 360*(t-.5)}function yLat(t){var e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function extend(t,e){for(var n in e)t[n]=e[n];return t}function getX(t){return t.x}function getY(t){return t.y}var kdbush=_dereq_("kdbush");module.exports=supercluster,SuperCluster.prototype={options:{minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,reduce:null,initial:function(){return{}},map:function(t){return t}},load:function(t){var e=this.options.log;e&&console.time("total time");var n="prepare "+t.length+" points";e&&console.time(n),this.points=t;var o=t.map(createPointCluster);e&&console.timeEnd(n);for(var i=this.options.maxZoom;i>=this.options.minZoom;i--){var r=+Date.now();this.trees[i+1]=kdbush(o,getX,getY,this.options.nodeSize,Float32Array),o=this._cluster(o,i),e&&console.log("z%d: %d clusters in %dms",i,o.length,+Date.now()-r)}return this.trees[this.options.minZoom]=kdbush(o,getX,getY,this.options.nodeSize,Float32Array),e&&console.timeEnd("total time"),this},getClusters:function(t,e){for(var n=this.trees[this._limitZoom(e)],o=n.range(lngX(t[0]),latY(t[3]),lngX(t[2]),latY(t[1])),i=[],r=0;r<o.length;r++){var s=n.points[o[r]];i.push(s.numPoints?getClusterJSON(s):this.points[s.id])}return i},getChildren:function(t,e){for(var n=this.trees[e+1].points[t],o=this.options.radius/(this.options.extent*Math.pow(2,e)),i=this.trees[e+1].within(n.x,n.y,o),r=[],s=0;s<i.length;s++){var u=this.trees[e+1].points[i[s]];u.parentId===t&&r.push(u.numPoints?getClusterJSON(u):this.points[u.id])}return r},getLeaves:function(t,e,n,o){n=n||10,o=o||0;var i=[];return this._appendLeaves(i,t,e,n,o,0),i},getTile:function(t,e,n){var o=this.trees[this._limitZoom(t)],i=Math.pow(2,t),r=this.options.extent,s=this.options.radius,u=s/r,a=(n-u)/i,p=(n+1+u)/i,h={features:[]};return this._addTileFeatures(o.range((e-u)/i,a,(e+1+u)/i,p),o.points,e,n,i,h),0===e&&this._addTileFeatures(o.range(1-u/i,a,1,p),o.points,i,n,i,h),e===i-1&&this._addTileFeatures(o.range(0,a,u/i,p),o.points,-1,n,i,h),h.features.length?h:null},getClusterExpansionZoom:function(t,e){for(;e<this.options.maxZoom;){var n=this.getChildren(t,e);if(e++,1!==n.length)break;t=n[0].properties.cluster_id}return e},_appendLeaves:function(t,e,n,o,i,r){for(var s=this.getChildren(e,n),u=0;u<s.length;u++){var a=s[u].properties;if(a.cluster?r+a.point_count<=i?r+=a.point_count:r=this._appendLeaves(t,a.cluster_id,n+1,o,i,r):r<i?r++:t.push(s[u]),t.length===o)break}return r},_addTileFeatures:function(t,e,n,o,i,r){for(var s=0;s<t.length;s++){var u=e[t[s]];r.features.push({type:1,geometry:[[Math.round(this.options.extent*(u.x*i-n)),Math.round(this.options.extent*(u.y*i-o))]],tags:u.numPoints?getClusterProperties(u):this.points[u.id].properties})}},_limitZoom:function(t){return Math.max(this.options.minZoom,Math.min(t,this.options.maxZoom+1))},_cluster:function(t,e){for(var n=[],o=this.options.radius/(this.options.extent*Math.pow(2,e)),i=0;i<t.length;i++){var r=t[i];if(!(r.zoom<=e)){r.zoom=e;var s=this.trees[e+1],u=s.within(r.x,r.y,o),a=r.numPoints||1,p=r.x*a,h=r.y*a,l=null;this.options.reduce&&(l=this.options.initial(),this._accumulate(l,r));for(var c=0;c<u.length;c++){var d=s.points[u[c]];if(e<d.zoom){var m=d.numPoints||1;d.zoom=e,p+=d.x*m,h+=d.y*m,a+=m,d.parentId=i,this.options.reduce&&this._accumulate(l,d)}}1===a?n.push(r):(r.parentId=i,n.push(createCluster(p/a,h/a,a,i,l)))}}return n},_accumulate:function(t,e){var n=e.numPoints?e.properties:this.options.map(this.points[e.id].properties);this.options.reduce(t,n)}};
},{"kdbush":26}],33:[function(_dereq_,module,exports){
"use strict";function TinyQueue(t,i){if(!(this instanceof TinyQueue))return new TinyQueue(t,i);if(this.data=t||[],this.length=this.data.length,this.compare=i||defaultCompare,this.length>0)for(var e=this.length>>1;e>=0;e--)this._down(e)}function defaultCompare(t,i){return t<i?-1:t>i?1:0}module.exports=TinyQueue,TinyQueue.prototype={push:function(t){this.data.push(t),this.length++,this._up(this.length-1)},pop:function(){if(0!==this.length){var t=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),t}},peek:function(){return this.data[0]},_up:function(t){for(var i=this.data,e=this.compare,h=i[t];t>0;){var n=t-1>>1,a=i[n];if(e(h,a)>=0)break;i[t]=a,t=n}i[t]=h},_down:function(t){for(var i=this.data,e=this.compare,h=this.length,n=h>>1,a=i[t];t<n;){var s=1+(t<<1),u=s+1,r=i[s];if(u<h&&e(i[u],r)<0&&(s=u,r=i[u]),e(r,a)>=0)break;i[t]=r,t=s}i[t]=a}};
},{}],34:[function(_dereq_,module,exports){
function fromVectorTileJs(e){var r=new Pbf;return writeTile(e,r),r.finish()}function fromGeojsonVt(e){var r={};for(var t in e)r[t]=new GeoJSONWrapper(e[t].features),r[t].name=t;return fromVectorTileJs({layers:r})}function writeTile(e,r){for(var t in e.layers)r.writeMessage(3,writeLayer,e.layers[t])}function writeLayer(e,r){r.writeVarintField(15,e.version||1),r.writeStringField(1,e.name||""),r.writeVarintField(5,e.extent||4096);var t,i={keys:[],values:[],keycache:{},valuecache:{}};for(t=0;t<e.length;t++)i.feature=e.feature(t),r.writeMessage(2,writeFeature,i);var a=i.keys;for(t=0;t<a.length;t++)r.writeStringField(3,a[t]);var o=i.values;for(t=0;t<o.length;t++)r.writeMessage(4,writeValue,o[t])}function writeFeature(e,r){var t=e.feature;void 0!==t.id&&r.writeVarintField(1,t.id),r.writeMessage(2,writeProperties,e),r.writeVarintField(3,t.type),r.writeMessage(4,writeGeometry,t)}function writeProperties(e,r){var t=e.feature,i=e.keys,a=e.values,o=e.keycache,n=e.valuecache;for(var l in t.properties){var s=o[l];void 0===s&&(i.push(l),s=i.length-1,o[l]=s),r.writeVarint(s);var u=t.properties[l],f=typeof u;"string"!==f&&"boolean"!==f&&"number"!==f&&(u=JSON.stringify(u));var w=f+":"+u,v=n[w];void 0===v&&(a.push(u),v=a.length-1,n[w]=v),r.writeVarint(v)}}function command(e,r){return(r<<3)+(7&e)}function zigzag(e){return e<<1^e>>31}function writeGeometry(e,r){for(var t=e.loadGeometry(),i=e.type,a=0,o=0,n=t.length,l=0;l<n;l++){var s=t[l],u=1;1===i&&(u=s.length),r.writeVarint(command(1,u));for(var f=0;f<s.length;f++){1===f&&1!==i&&r.writeVarint(command(2,s.length-1));var w=s[f].x-a,v=s[f].y-o;r.writeVarint(zigzag(w)),r.writeVarint(zigzag(v)),a+=w,o+=v}}}function writeValue(e,r){var t=typeof e;"string"===t?r.writeStringField(1,e):"boolean"===t?r.writeBooleanField(7,e):"number"===t&&(e%1!=0?r.writeDoubleField(3,e):e<0?r.writeSVarintField(6,e):r.writeVarintField(5,e))}var Pbf=_dereq_("pbf"),GeoJSONWrapper=_dereq_("./lib/geojson_wrapper");module.exports=fromVectorTileJs,module.exports.fromVectorTileJs=fromVectorTileJs,module.exports.fromGeojsonVt=fromGeojsonVt,module.exports.GeoJSONWrapper=GeoJSONWrapper;
},{"./lib/geojson_wrapper":35,"pbf":30}],35:[function(_dereq_,module,exports){
"use strict";function GeoJSONWrapper(e){this.features=e,this.length=e.length}function FeatureWrapper(e){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=4096}var Point=_dereq_("@mapbox/point-geometry"),VectorTileFeature=_dereq_("@mapbox/vector-tile").VectorTileFeature;module.exports=GeoJSONWrapper,GeoJSONWrapper.prototype.feature=function(e){return new FeatureWrapper(this.features[e])},FeatureWrapper.prototype.loadGeometry=function(){var e=this.rawGeometry;this.geometry=[];for(var t=0;t<e.length;t++){for(var r=e[t],o=[],a=0;a<r.length;a++)o.push(new Point(r[a][0],r[a][1]));this.geometry.push(o)}return this.geometry},FeatureWrapper.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-1/0,o=1/0,a=-1/0,p=0;p<e.length;p++)for(var i=e[p],n=0;n<i.length;n++){var h=i[n];t=Math.min(t,h.x),r=Math.max(r,h.x),o=Math.min(o,h.y),a=Math.max(a,h.y)}return[t,o,r,a]},FeatureWrapper.prototype.toGeoJSON=VectorTileFeature.prototype.toGeoJSON;
},{"@mapbox/point-geometry":4,"@mapbox/vector-tile":8}],36:[function(_dereq_,module,exports){
var bundleFn=arguments[3],sources=arguments[4],cache=arguments[5],stringify=JSON.stringify;module.exports=function(r,e){function t(r){d[r]=!0;for(var e in sources[r][1]){var o=sources[r][1][e];d[o]||t(o)}}for(var o,n=Object.keys(cache),a=0,i=n.length;a<i;a++){var s=n[a],u=cache[s].exports;if(u===r||u&&u.default===r){o=s;break}}if(!o){o=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var f={},a=0,i=n.length;a<i;a++){var s=n[a];f[s]=s}sources[o]=["function(require,module,exports){"+r+"(self); }",f]}var c=Math.floor(Math.pow(16,8)*Math.random()).toString(16),l={};l[o]=o,sources[c]=["function(require,module,exports){var f = require("+stringify(o)+");(f.default ? f.default : f)(self);}",l];var d={};t(c);var g="("+bundleFn+")({"+Object.keys(d).map(function(r){return stringify(r)+":["+sources[r][0]+","+stringify(sources[r][1])+"]"}).join(",")+"},{},["+stringify(c)+"])",v=window.URL||window.webkitURL||window.mozURL||window.msURL,w=new Blob([g],{type:"text/javascript"});if(e&&e.bare)return w;var h=v.createObjectURL(w),m=new Worker(h);return m.objectURL=h,m};
},{}],37:[function(_dereq_,module,exports){
module.exports.RADIUS=6378137,module.exports.FLATTENING=1/298.257223563,module.exports.POLAR_RADIUS=6356752.3142;
},{}],38:[function(_dereq_,module,exports){
module.exports={"version":"0.44.1"}
},{}],39:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/struct_array"),StructArray=ref.StructArray,ref$1=_dereq_("../util/struct_array"),Struct=ref$1.Struct,ref$2=_dereq_("../util/web_worker_transfer"),register=ref$2.register,Point=_dereq_("@mapbox/point-geometry"),StructArrayLayout2i4=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r){var i=this.length;this.resize(i+1);var e=2*i;return this.int16[e+0]=t,this.int16[e+1]=r,i},r}(StructArray);StructArrayLayout2i4.prototype.bytesPerElement=4,register("StructArrayLayout2i4",StructArrayLayout2i4);var StructArrayLayout4i8=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e){var o=this.length;this.resize(o+1);var u=4*o;return this.int16[u+0]=t,this.int16[u+1]=r,this.int16[u+2]=i,this.int16[u+3]=e,o},r}(StructArray);StructArrayLayout4i8.prototype.bytesPerElement=8,register("StructArrayLayout4i8",StructArrayLayout4i8);var StructArrayLayout2i4i12=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e,o,u){var n=this.length;this.resize(n+1);var a=6*n;return this.int16[a+0]=t,this.int16[a+1]=r,this.int16[a+2]=i,this.int16[a+3]=e,this.int16[a+4]=o,this.int16[a+5]=u,n},r}(StructArray);StructArrayLayout2i4i12.prototype.bytesPerElement=12,register("StructArrayLayout2i4i12",StructArrayLayout2i4i12);var StructArrayLayout4i4ub12=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e,o,u,n,a){var y=this.length;this.resize(y+1);var s=6*y,c=12*y;return this.int16[s+0]=t,this.int16[s+1]=r,this.int16[s+2]=i,this.int16[s+3]=e,this.uint8[c+8]=o,this.uint8[c+9]=u,this.uint8[c+10]=n,this.uint8[c+11]=a,y},r}(StructArray);StructArrayLayout4i4ub12.prototype.bytesPerElement=12,register("StructArrayLayout4i4ub12",StructArrayLayout4i4ub12);var StructArrayLayout4i4ui16=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e,o,u,n,a){var y=this.length;this.resize(y+1);var s=8*y;return this.int16[s+0]=t,this.int16[s+1]=r,this.int16[s+2]=i,this.int16[s+3]=e,this.uint16[s+4]=o,this.uint16[s+5]=u,this.uint16[s+6]=n,this.uint16[s+7]=a,y},r}(StructArray);StructArrayLayout4i4ui16.prototype.bytesPerElement=16,register("StructArrayLayout4i4ui16",StructArrayLayout4i4ui16);var StructArrayLayout3f12=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i){var e=this.length;this.resize(e+1);var o=3*e;return this.float32[o+0]=t,this.float32[o+1]=r,this.float32[o+2]=i,e},r}(StructArray);StructArrayLayout3f12.prototype.bytesPerElement=12,register("StructArrayLayout3f12",StructArrayLayout3f12);var StructArrayLayout1ul4=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t){var r=this.length;this.resize(r+1);var i=1*r;return this.uint32[i+0]=t,r},r}(StructArray);StructArrayLayout1ul4.prototype.bytesPerElement=4,register("StructArrayLayout1ul4",StructArrayLayout1ul4);var StructArrayLayout6i1ul2ui2i24=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e,o,u,n,a,y,s,c){var p=this.length;this.resize(p+1);var h=12*p,f=6*p;return this.int16[h+0]=t,this.int16[h+1]=r,this.int16[h+2]=i,this.int16[h+3]=e,this.int16[h+4]=o,this.int16[h+5]=u,this.uint32[f+3]=n,this.uint16[h+8]=a,this.uint16[h+9]=y,this.int16[h+10]=s,this.int16[h+11]=c,p},r}(StructArray);StructArrayLayout6i1ul2ui2i24.prototype.bytesPerElement=24,register("StructArrayLayout6i1ul2ui2i24",StructArrayLayout6i1ul2ui2i24);var StructArrayLayout2i2i2i12=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e,o,u){var n=this.length;this.resize(n+1);var a=6*n;return this.int16[a+0]=t,this.int16[a+1]=r,this.int16[a+2]=i,this.int16[a+3]=e,this.int16[a+4]=o,this.int16[a+5]=u,n},r}(StructArray);StructArrayLayout2i2i2i12.prototype.bytesPerElement=12,register("StructArrayLayout2i2i2i12",StructArrayLayout2i2i2i12);var StructArrayLayout2ub4=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r){var i=this.length;this.resize(i+1);var e=4*i;return this.uint8[e+0]=t,this.uint8[e+1]=r,i},r}(StructArray);StructArrayLayout2ub4.prototype.bytesPerElement=4,register("StructArrayLayout2ub4",StructArrayLayout2ub4);var StructArrayLayout2i2ui3ul3ui2f2ub40=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e,o,u,n,a,y,s,c,p,h,f){var A=this.length;this.resize(A+1);var _=20*A,l=10*A,S=40*A;return this.int16[_+0]=t,this.int16[_+1]=r,this.uint16[_+2]=i,this.uint16[_+3]=e,this.uint32[l+2]=o,this.uint32[l+3]=u,this.uint32[l+4]=n,this.uint16[_+10]=a,this.uint16[_+11]=y,this.uint16[_+12]=s,this.float32[l+7]=c,this.float32[l+8]=p,this.uint8[S+36]=h,this.uint8[S+37]=f,A},r}(StructArray);StructArrayLayout2i2ui3ul3ui2f2ub40.prototype.bytesPerElement=40,register("StructArrayLayout2i2ui3ul3ui2f2ub40",StructArrayLayout2i2ui3ul3ui2f2ub40);var StructArrayLayout1f4=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t){var r=this.length;this.resize(r+1);var i=1*r;return this.float32[i+0]=t,r},r}(StructArray);StructArrayLayout1f4.prototype.bytesPerElement=4,register("StructArrayLayout1f4",StructArrayLayout1f4);var StructArrayLayout3i6=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i){var e=this.length;this.resize(e+1);var o=3*e;return this.int16[o+0]=t,this.int16[o+1]=r,this.int16[o+2]=i,e},r}(StructArray);StructArrayLayout3i6.prototype.bytesPerElement=6,register("StructArrayLayout3i6",StructArrayLayout3i6);var StructArrayLayout1ul2ui8=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i){var e=this.length;this.resize(e+1);var o=2*e,u=4*e;return this.uint32[o+0]=t,this.uint16[u+2]=r,this.uint16[u+3]=i,e},r}(StructArray);StructArrayLayout1ul2ui8.prototype.bytesPerElement=8,register("StructArrayLayout1ul2ui8",StructArrayLayout1ul2ui8);var StructArrayLayout3ui6=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i){var e=this.length;this.resize(e+1);var o=3*e;return this.uint16[o+0]=t,this.uint16[o+1]=r,this.uint16[o+2]=i,e},r}(StructArray);StructArrayLayout3ui6.prototype.bytesPerElement=6,register("StructArrayLayout3ui6",StructArrayLayout3ui6);var StructArrayLayout2ui4=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r){var i=this.length;this.resize(i+1);var e=2*i;return this.uint16[e+0]=t,this.uint16[e+1]=r,i},r}(StructArray);StructArrayLayout2ui4.prototype.bytesPerElement=4,register("StructArrayLayout2ui4",StructArrayLayout2ui4);var StructArrayLayout2f8=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r){var i=this.length;this.resize(i+1);var e=2*i;return this.float32[e+0]=t,this.float32[e+1]=r,i},r}(StructArray);StructArrayLayout2f8.prototype.bytesPerElement=8,register("StructArrayLayout2f8",StructArrayLayout2f8);var StructArrayLayout4f16=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype._refreshViews=function(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)},r.prototype.emplaceBack=function(t,r,i,e){var o=this.length;this.resize(o+1);var u=4*o;return this.float32[u+0]=t,this.float32[u+1]=r,this.float32[u+2]=i,this.float32[u+3]=e,o},r}(StructArray);StructArrayLayout4f16.prototype.bytesPerElement=16,register("StructArrayLayout4f16",StructArrayLayout4f16);var CollisionBoxStruct=function(t){function r(){t.apply(this,arguments)}t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r;var i={anchorPointX:{},anchorPointY:{},x1:{},y1:{},x2:{},y2:{},featureIndex:{},sourceLayerIndex:{},bucketIndex:{},radius:{},signedDistanceFromAnchor:{},anchorPoint:{}};return i.anchorPointX.get=function(){return this._structArray.int16[this._pos2+0]},i.anchorPointX.set=function(t){this._structArray.int16[this._pos2+0]=t},i.anchorPointY.get=function(){return this._structArray.int16[this._pos2+1]},i.anchorPointY.set=function(t){this._structArray.int16[this._pos2+1]=t},i.x1.get=function(){return this._structArray.int16[this._pos2+2]},i.x1.set=function(t){this._structArray.int16[this._pos2+2]=t},i.y1.get=function(){return this._structArray.int16[this._pos2+3]},i.y1.set=function(t){this._structArray.int16[this._pos2+3]=t},i.x2.get=function(){return this._structArray.int16[this._pos2+4]},i.x2.set=function(t){this._structArray.int16[this._pos2+4]=t},i.y2.get=function(){return this._structArray.int16[this._pos2+5]},i.y2.set=function(t){this._structArray.int16[this._pos2+5]=t},i.featureIndex.get=function(){return this._structArray.uint32[this._pos4+3]},i.featureIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t},i.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+8]},i.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+8]=t},i.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+9]},i.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+9]=t},i.radius.get=function(){return this._structArray.int16[this._pos2+10]},i.radius.set=function(t){this._structArray.int16[this._pos2+10]=t},i.signedDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+11]},i.signedDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+11]=t},i.anchorPoint.get=function(){return new Point(this.anchorPointX,this.anchorPointY)},Object.defineProperties(r.prototype,i),r}(Struct);CollisionBoxStruct.prototype.size=24;var CollisionBoxArray=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.get=function(t){return new CollisionBoxStruct(this,t)},r}(StructArrayLayout6i1ul2ui2i24);register("CollisionBoxArray",CollisionBoxArray);var PlacedSymbolStruct=function(t){function r(){t.apply(this,arguments)}t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r;var i={anchorX:{},anchorY:{},glyphStartIndex:{},numGlyphs:{},vertexStartIndex:{},lineStartIndex:{},lineLength:{},segment:{},lowerSize:{},upperSize:{},lineOffsetX:{},lineOffsetY:{},writingMode:{},hidden:{}};return i.anchorX.get=function(){return this._structArray.int16[this._pos2+0]},i.anchorX.set=function(t){this._structArray.int16[this._pos2+0]=t},i.anchorY.get=function(){return this._structArray.int16[this._pos2+1]},i.anchorY.set=function(t){this._structArray.int16[this._pos2+1]=t},i.glyphStartIndex.get=function(){return this._structArray.uint16[this._pos2+2]},i.glyphStartIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t},i.numGlyphs.get=function(){return this._structArray.uint16[this._pos2+3]},i.numGlyphs.set=function(t){this._structArray.uint16[this._pos2+3]=t},i.vertexStartIndex.get=function(){return this._structArray.uint32[this._pos4+2]},i.vertexStartIndex.set=function(t){this._structArray.uint32[this._pos4+2]=t},i.lineStartIndex.get=function(){return this._structArray.uint32[this._pos4+3]},i.lineStartIndex.set=function(t){this._structArray.uint32[this._pos4+3]=t},i.lineLength.get=function(){return this._structArray.uint32[this._pos4+4]},i.lineLength.set=function(t){this._structArray.uint32[this._pos4+4]=t},i.segment.get=function(){return this._structArray.uint16[this._pos2+10]},i.segment.set=function(t){this._structArray.uint16[this._pos2+10]=t},i.lowerSize.get=function(){return this._structArray.uint16[this._pos2+11]},i.lowerSize.set=function(t){this._structArray.uint16[this._pos2+11]=t},i.upperSize.get=function(){return this._structArray.uint16[this._pos2+12]},i.upperSize.set=function(t){this._structArray.uint16[this._pos2+12]=t},i.lineOffsetX.get=function(){return this._structArray.float32[this._pos4+7]},i.lineOffsetX.set=function(t){this._structArray.float32[this._pos4+7]=t},i.lineOffsetY.get=function(){return this._structArray.float32[this._pos4+8]},i.lineOffsetY.set=function(t){this._structArray.float32[this._pos4+8]=t},i.writingMode.get=function(){return this._structArray.uint8[this._pos1+36]},i.writingMode.set=function(t){this._structArray.uint8[this._pos1+36]=t},i.hidden.get=function(){return this._structArray.uint8[this._pos1+37]},i.hidden.set=function(t){this._structArray.uint8[this._pos1+37]=t},Object.defineProperties(r.prototype,i),r}(Struct);PlacedSymbolStruct.prototype.size=40;var PlacedSymbolArray=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.get=function(t){return new PlacedSymbolStruct(this,t)},r}(StructArrayLayout2i2ui3ul3ui2f2ub40);register("PlacedSymbolArray",PlacedSymbolArray);var GlyphOffsetStruct=function(t){function r(){t.apply(this,arguments)}t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r;var i={offsetX:{}};return i.offsetX.get=function(){return this._structArray.float32[this._pos4+0]},i.offsetX.set=function(t){this._structArray.float32[this._pos4+0]=t},Object.defineProperties(r.prototype,i),r}(Struct);GlyphOffsetStruct.prototype.size=4;var GlyphOffsetArray=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.getoffsetX=function(t){return this.float32[1*t+0]},r.prototype.get=function(t){return new GlyphOffsetStruct(this,t)},r}(StructArrayLayout1f4);register("GlyphOffsetArray",GlyphOffsetArray);var SymbolLineVertexStruct=function(t){function r(){t.apply(this,arguments)}t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r;var i={x:{},y:{},tileUnitDistanceFromAnchor:{}};return i.x.get=function(){return this._structArray.int16[this._pos2+0]},i.x.set=function(t){this._structArray.int16[this._pos2+0]=t},i.y.get=function(){return this._structArray.int16[this._pos2+1]},i.y.set=function(t){this._structArray.int16[this._pos2+1]=t},i.tileUnitDistanceFromAnchor.get=function(){return this._structArray.int16[this._pos2+2]},i.tileUnitDistanceFromAnchor.set=function(t){this._structArray.int16[this._pos2+2]=t},Object.defineProperties(r.prototype,i),r}(Struct);SymbolLineVertexStruct.prototype.size=6;var SymbolLineVertexArray=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.getx=function(t){return this.int16[3*t+0]},r.prototype.gety=function(t){return this.int16[3*t+1]},r.prototype.gettileUnitDistanceFromAnchor=function(t){return this.int16[3*t+2]},r.prototype.get=function(t){return new SymbolLineVertexStruct(this,t)},r}(StructArrayLayout3i6);register("SymbolLineVertexArray",SymbolLineVertexArray);var FeatureIndexStruct=function(t){function r(){t.apply(this,arguments)}t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r;var i={featureIndex:{},sourceLayerIndex:{},bucketIndex:{}};return i.featureIndex.get=function(){return this._structArray.uint32[this._pos4+0]},i.featureIndex.set=function(t){this._structArray.uint32[this._pos4+0]=t},i.sourceLayerIndex.get=function(){return this._structArray.uint16[this._pos2+2]},i.sourceLayerIndex.set=function(t){this._structArray.uint16[this._pos2+2]=t},i.bucketIndex.get=function(){return this._structArray.uint16[this._pos2+3]},i.bucketIndex.set=function(t){this._structArray.uint16[this._pos2+3]=t},Object.defineProperties(r.prototype,i),r}(Struct);FeatureIndexStruct.prototype.size=8;var FeatureIndexArray=function(t){function r(){t.apply(this,arguments)}return t&&(r.__proto__=t),r.prototype=Object.create(t&&t.prototype),r.prototype.constructor=r,r.prototype.get=function(t){return new FeatureIndexStruct(this,t)},r}(StructArrayLayout1ul2ui8);register("FeatureIndexArray",FeatureIndexArray),module.exports={StructArrayLayout2i4:StructArrayLayout2i4,StructArrayLayout4i8:StructArrayLayout4i8,StructArrayLayout2i4i12:StructArrayLayout2i4i12,StructArrayLayout4i4ub12:StructArrayLayout4i4ub12,StructArrayLayout4i4ui16:StructArrayLayout4i4ui16,StructArrayLayout3f12:StructArrayLayout3f12,StructArrayLayout1ul4:StructArrayLayout1ul4,StructArrayLayout6i1ul2ui2i24:StructArrayLayout6i1ul2ui2i24,StructArrayLayout2i2i2i12:StructArrayLayout2i2i2i12,StructArrayLayout2ub4:StructArrayLayout2ub4,StructArrayLayout2i2ui3ul3ui2f2ub40:StructArrayLayout2i2ui3ul3ui2f2ub40,StructArrayLayout1f4:StructArrayLayout1f4,StructArrayLayout3i6:StructArrayLayout3i6,StructArrayLayout1ul2ui8:StructArrayLayout1ul2ui8,StructArrayLayout3ui6:StructArrayLayout3ui6,StructArrayLayout2ui4:StructArrayLayout2ui4,StructArrayLayout2f8:StructArrayLayout2f8,StructArrayLayout4f16:StructArrayLayout4f16,PosArray:StructArrayLayout2i4,RasterBoundsArray:StructArrayLayout4i8,CircleLayoutArray:StructArrayLayout2i4,FillLayoutArray:StructArrayLayout2i4,FillExtrusionLayoutArray:StructArrayLayout2i4i12,HeatmapLayoutArray:StructArrayLayout2i4,LineLayoutArray:StructArrayLayout4i4ub12,SymbolLayoutArray:StructArrayLayout4i4ui16,SymbolDynamicLayoutArray:StructArrayLayout3f12,SymbolOpacityArray:StructArrayLayout1ul4,CollisionBoxLayoutArray:StructArrayLayout2i2i2i12,CollisionCircleLayoutArray:StructArrayLayout2i2i2i12,CollisionVertexArray:StructArrayLayout2ub4,TriangleIndexArray:StructArrayLayout3ui6,LineIndexArray:StructArrayLayout2ui4,CollisionBoxArray:CollisionBoxArray,PlacedSymbolArray:PlacedSymbolArray,GlyphOffsetArray:GlyphOffsetArray,SymbolLineVertexArray:SymbolLineVertexArray,FeatureIndexArray:FeatureIndexArray};
},{"../util/struct_array":271,"../util/web_worker_transfer":278,"@mapbox/point-geometry":4}],40:[function(_dereq_,module,exports){
"use strict";module.exports={deserialize:function(r,e){var t={};if(!e)return t;for(var n=0,a=r;n<a.length;n+=1){var i=a[n],l=i.layerIds.map(function(r){return e.getLayer(r)}).filter(Boolean);if(0!==l.length){i.layers=l;for(var o=0,f=l;o<f.length;o+=1){t[f[o].id]=i}}}return t}};
},{}],41:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../../util/struct_array"),createLayout=ref.createLayout;module.exports=createLayout([{name:"a_pos",components:2,type:"Int16"}],4);
},{"../../util/struct_array":271}],42:[function(_dereq_,module,exports){
"use strict";function addCircleVertex(e,r,t,a,i){e.emplaceBack(2*r+(a+1)/2,2*t+(i+1)/2)}var ref=_dereq_("../array_types"),CircleLayoutArray=ref.CircleLayoutArray,layoutAttributes=_dereq_("./circle_attributes").members,ref$1=_dereq_("../segment"),SegmentVector=ref$1.SegmentVector,ref$2=_dereq_("../program_configuration"),ProgramConfigurationSet=ref$2.ProgramConfigurationSet,ref$3=_dereq_("../index_array_type"),TriangleIndexArray=ref$3.TriangleIndexArray,loadGeometry=_dereq_("../load_geometry"),EXTENT=_dereq_("../extent"),ref$4=_dereq_("../../util/web_worker_transfer"),register=ref$4.register,CircleBucket=function(e){this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map(function(e){return e.id}),this.index=e.index,this.layoutVertexArray=new CircleLayoutArray,this.indexArray=new TriangleIndexArray,this.segments=new SegmentVector,this.programConfigurations=new ProgramConfigurationSet(layoutAttributes,e.layers,e.zoom)};CircleBucket.prototype.populate=function(e,r){for(var t=this,a=0,i=e;a<i.length;a+=1){var o=i[a],n=o.feature,u=o.index,s=o.sourceLayerIndex;if(t.layers[0]._featureFilter({zoom:t.zoom},n)){var y=loadGeometry(n);t.addFeature(n,y),r.featureIndex.insert(n,y,u,s,t.index)}}},CircleBucket.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},CircleBucket.prototype.upload=function(e){this.layoutVertexBuffer=e.createVertexBuffer(this.layoutVertexArray,layoutAttributes),this.indexBuffer=e.createIndexBuffer(this.indexArray),this.programConfigurations.upload(e)},CircleBucket.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},CircleBucket.prototype.addFeature=function(e,r){for(var t=this,a=0,i=r;a<i.length;a+=1)for(var o=i[a],n=0,u=o;n<u.length;n+=1){var s=u[n],y=s.x,l=s.y;if(!(y<0||y>=EXTENT||l<0||l>=EXTENT)){var c=t.segments.prepareSegment(4,t.layoutVertexArray,t.indexArray),f=c.vertexLength;addCircleVertex(t.layoutVertexArray,y,l,-1,-1),addCircleVertex(t.layoutVertexArray,y,l,1,-1),addCircleVertex(t.layoutVertexArray,y,l,1,1),addCircleVertex(t.layoutVertexArray,y,l,-1,1),t.indexArray.emplaceBack(f,f+1,f+2),t.indexArray.emplaceBack(f,f+3,f+2),c.vertexLength+=4,c.primitiveLength+=2}}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e)},register("CircleBucket",CircleBucket,{omit:["layers"]}),module.exports=CircleBucket;
},{"../../util/web_worker_transfer":278,"../array_types":39,"../extent":53,"../index_array_type":55,"../load_geometry":56,"../program_configuration":58,"../segment":60,"./circle_attributes":41}],43:[function(_dereq_,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"../../util/struct_array":271,"dup":41}],44:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../array_types"),FillLayoutArray=ref.FillLayoutArray,layoutAttributes=_dereq_("./fill_attributes").members,ref$1=_dereq_("../segment"),SegmentVector=ref$1.SegmentVector,ref$2=_dereq_("../program_configuration"),ProgramConfigurationSet=ref$2.ProgramConfigurationSet,ref$3=_dereq_("../index_array_type"),LineIndexArray=ref$3.LineIndexArray,TriangleIndexArray=ref$3.TriangleIndexArray,loadGeometry=_dereq_("../load_geometry"),earcut=_dereq_("earcut"),classifyRings=_dereq_("../../util/classify_rings"),EARCUT_MAX_RINGS=500,ref$4=_dereq_("../../util/web_worker_transfer"),register=ref$4.register,FillBucket=function(e){this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map(function(e){return e.id}),this.index=e.index,this.layoutVertexArray=new FillLayoutArray,this.indexArray=new TriangleIndexArray,this.indexArray2=new LineIndexArray,this.programConfigurations=new ProgramConfigurationSet(layoutAttributes,e.layers,e.zoom),this.segments=new SegmentVector,this.segments2=new SegmentVector};FillBucket.prototype.populate=function(e,r){for(var t=this,i=0,a=e;i<a.length;i+=1){var n=a[i],o=n.feature,s=n.index,u=n.sourceLayerIndex;if(t.layers[0]._featureFilter({zoom:t.zoom},o)){var l=loadGeometry(o);t.addFeature(o,l),r.featureIndex.insert(o,l,s,u,t.index)}}},FillBucket.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},FillBucket.prototype.upload=function(e){this.layoutVertexBuffer=e.createVertexBuffer(this.layoutVertexArray,layoutAttributes),this.indexBuffer=e.createIndexBuffer(this.indexArray),this.indexBuffer2=e.createIndexBuffer(this.indexArray2),this.programConfigurations.upload(e)},FillBucket.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy())},FillBucket.prototype.addFeature=function(e,r){for(var t=this,i=0,a=classifyRings(r,EARCUT_MAX_RINGS);i<a.length;i+=1){for(var n=a[i],o=0,s=0,u=n;s<u.length;s+=1){o+=u[s].length}for(var l=t.segments.prepareSegment(o,t.layoutVertexArray,t.indexArray),y=l.vertexLength,g=[],f=[],h=0,x=n;h<x.length;h+=1){var d=x[h];if(0!==d.length){d!==n[0]&&f.push(g.length/2);var c=t.segments2.prepareSegment(d.length,t.layoutVertexArray,t.indexArray2),m=c.vertexLength;t.layoutVertexArray.emplaceBack(d[0].x,d[0].y),t.indexArray2.emplaceBack(m+d.length-1,m),g.push(d[0].x),g.push(d[0].y);for(var p=1;p<d.length;p++)t.layoutVertexArray.emplaceBack(d[p].x,d[p].y),t.indexArray2.emplaceBack(m+p-1,m+p),g.push(d[p].x),g.push(d[p].y);c.vertexLength+=d.length,c.primitiveLength+=d.length}}for(var A=earcut(g,f),B=0;B<A.length;B+=3)t.indexArray.emplaceBack(y+A[B],y+A[B+1],y+A[B+2]);l.vertexLength+=o,l.primitiveLength+=A.length/3}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e)},register("FillBucket",FillBucket,{omit:["layers"]}),module.exports=FillBucket;
},{"../../util/classify_rings":255,"../../util/web_worker_transfer":278,"../array_types":39,"../index_array_type":55,"../load_geometry":56,"../program_configuration":58,"../segment":60,"./fill_attributes":43,"earcut":14}],45:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../../util/struct_array"),createLayout=ref.createLayout;module.exports=createLayout([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4);
},{"../../util/struct_array":271}],46:[function(_dereq_,module,exports){
"use strict";function addVertex(e,r,t,i,a,n,o,u){e.emplaceBack(r,t,2*Math.floor(i*FACTOR)+o,a*FACTOR*2,n*FACTOR*2,Math.round(u))}function isBoundaryEdge(e,r){return e.x===r.x&&(e.x<0||e.x>EXTENT)||e.y===r.y&&(e.y<0||e.y>EXTENT)}function isEntirelyOutside(e){return e.every(function(e){return e.x<0})||e.every(function(e){return e.x>EXTENT})||e.every(function(e){return e.y<0})||e.every(function(e){return e.y>EXTENT})}var ref=_dereq_("../array_types"),FillExtrusionLayoutArray=ref.FillExtrusionLayoutArray,layoutAttributes=_dereq_("./fill_extrusion_attributes").members,ref$1=_dereq_("../segment"),SegmentVector=ref$1.SegmentVector,MAX_VERTEX_ARRAY_LENGTH=ref$1.MAX_VERTEX_ARRAY_LENGTH,ref$2=_dereq_("../program_configuration"),ProgramConfigurationSet=ref$2.ProgramConfigurationSet,ref$3=_dereq_("../index_array_type"),TriangleIndexArray=ref$3.TriangleIndexArray,loadGeometry=_dereq_("../load_geometry"),EXTENT=_dereq_("../extent"),earcut=_dereq_("earcut"),classifyRings=_dereq_("../../util/classify_rings"),EARCUT_MAX_RINGS=500,ref$4=_dereq_("../../util/web_worker_transfer"),register=ref$4.register,FACTOR=Math.pow(2,13),FillExtrusionBucket=function(e){this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map(function(e){return e.id}),this.index=e.index,this.layoutVertexArray=new FillExtrusionLayoutArray,this.indexArray=new TriangleIndexArray,this.programConfigurations=new ProgramConfigurationSet(layoutAttributes,e.layers,e.zoom),this.segments=new SegmentVector};FillExtrusionBucket.prototype.populate=function(e,r){for(var t=this,i=0,a=e;i<a.length;i+=1){var n=a[i],o=n.feature,u=n.index,s=n.sourceLayerIndex;if(t.layers[0]._featureFilter({zoom:t.zoom},o)){var y=loadGeometry(o);t.addFeature(o,y),r.featureIndex.insert(o,y,u,s,t.index)}}},FillExtrusionBucket.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},FillExtrusionBucket.prototype.upload=function(e){this.layoutVertexBuffer=e.createVertexBuffer(this.layoutVertexArray,layoutAttributes),this.indexBuffer=e.createIndexBuffer(this.indexArray),this.programConfigurations.upload(e)},FillExtrusionBucket.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},FillExtrusionBucket.prototype.addFeature=function(e,r){for(var t=this,i=0,a=classifyRings(r,EARCUT_MAX_RINGS);i<a.length;i+=1){for(var n=a[i],o=0,u=0,s=n;u<s.length;u+=1){o+=s[u].length}for(var y=t.segments.prepareSegment(4,t.layoutVertexArray,t.indexArray),l=0,x=n;l<x.length;l+=1){var f=x[l];if(0!==f.length&&!isEntirelyOutside(f))for(var g=0,d=0;d<f.length;d++){var h=f[d];if(d>=1){var A=f[d-1];if(!isBoundaryEdge(h,A)){y.vertexLength+4>MAX_VERTEX_ARRAY_LENGTH&&(y=t.segments.prepareSegment(4,t.layoutVertexArray,t.indexArray));var c=h.sub(A)._perp()._unit(),p=A.dist(h);g+p>32768&&(g=0),addVertex(t.layoutVertexArray,h.x,h.y,c.x,c.y,0,0,g),addVertex(t.layoutVertexArray,h.x,h.y,c.x,c.y,0,1,g),g+=p,addVertex(t.layoutVertexArray,A.x,A.y,c.x,c.y,0,0,g),addVertex(t.layoutVertexArray,A.x,A.y,c.x,c.y,0,1,g);var E=y.vertexLength;t.indexArray.emplaceBack(E,E+1,E+2),t.indexArray.emplaceBack(E+1,E+2,E+3),y.vertexLength+=4,y.primitiveLength+=2}}}}y.vertexLength+o>MAX_VERTEX_ARRAY_LENGTH&&(y=t.segments.prepareSegment(o,t.layoutVertexArray,t.indexArray));for(var m=[],v=[],V=y.vertexLength,_=0,T=n;_<T.length;_+=1){var B=T[_];if(0!==B.length){B!==n[0]&&v.push(m.length/2);for(var R=0;R<B.length;R++){var F=B[R];addVertex(t.layoutVertexArray,F.x,F.y,0,0,1,1,0),m.push(F.x),m.push(F.y)}}}for(var L=earcut(m,v),X=0;X<L.length;X+=3)t.indexArray.emplaceBack(V+L[X],V+L[X+1],V+L[X+2]);y.primitiveLength+=L.length/3,y.vertexLength+=o}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,e)},register("FillExtrusionBucket",FillExtrusionBucket,{omit:["layers"]}),module.exports=FillExtrusionBucket;
},{"../../util/classify_rings":255,"../../util/web_worker_transfer":278,"../array_types":39,"../extent":53,"../index_array_type":55,"../load_geometry":56,"../program_configuration":58,"../segment":60,"./fill_extrusion_attributes":45,"earcut":14}],47:[function(_dereq_,module,exports){
"use strict";var CircleBucket=_dereq_("./circle_bucket"),ref=_dereq_("../../util/web_worker_transfer"),register=ref.register,HeatmapBucket=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(CircleBucket);register("HeatmapBucket",HeatmapBucket,{omit:["layers"]}),module.exports=HeatmapBucket;
},{"../../util/web_worker_transfer":278,"./circle_bucket":42}],48:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../../util/struct_array"),createLayout=ref.createLayout;module.exports=createLayout([{name:"a_pos_normal",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4);
},{"../../util/struct_array":271}],49:[function(_dereq_,module,exports){
"use strict";function addLineVertex(e,t,r,i,a,n,s){e.emplaceBack(t.x,t.y,i?1:0,a?1:-1,Math.round(EXTRUDE_SCALE*r.x)+128,Math.round(EXTRUDE_SCALE*r.y)+128,1+(0===n?0:n<0?-1:1)|(s*LINE_DISTANCE_SCALE&63)<<2,s*LINE_DISTANCE_SCALE>>6)}var ref=_dereq_("../array_types"),LineLayoutArray=ref.LineLayoutArray,layoutAttributes=_dereq_("./line_attributes").members,ref$1=_dereq_("../segment"),SegmentVector=ref$1.SegmentVector,ref$2=_dereq_("../program_configuration"),ProgramConfigurationSet=ref$2.ProgramConfigurationSet,ref$3=_dereq_("../index_array_type"),TriangleIndexArray=ref$3.TriangleIndexArray,loadGeometry=_dereq_("../load_geometry"),EXTENT=_dereq_("../extent"),vectorTileFeatureTypes=_dereq_("@mapbox/vector-tile").VectorTileFeature.types,ref$4=_dereq_("../../util/web_worker_transfer"),register=ref$4.register,EXTRUDE_SCALE=63,COS_HALF_SHARP_CORNER=Math.cos(Math.PI/180*37.5),SHARP_CORNER_OFFSET=15,LINE_DISTANCE_BUFFER_BITS=15,LINE_DISTANCE_SCALE=.5,MAX_LINE_DISTANCE=Math.pow(2,LINE_DISTANCE_BUFFER_BITS-1)/LINE_DISTANCE_SCALE,LineBucket=function(e){this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map(function(e){return e.id}),this.index=e.index,this.layoutVertexArray=new LineLayoutArray,this.indexArray=new TriangleIndexArray,this.programConfigurations=new ProgramConfigurationSet(layoutAttributes,e.layers,e.zoom),this.segments=new SegmentVector};LineBucket.prototype.populate=function(e,t){for(var r=this,i=0,a=e;i<a.length;i+=1){var n=a[i],s=n.feature,u=n.index,d=n.sourceLayerIndex;if(r.layers[0]._featureFilter({zoom:r.zoom},s)){var o=loadGeometry(s);r.addFeature(s,o),t.featureIndex.insert(s,o,u,d,r.index)}}},LineBucket.prototype.isEmpty=function(){return 0===this.layoutVertexArray.length},LineBucket.prototype.upload=function(e){this.layoutVertexBuffer=e.createVertexBuffer(this.layoutVertexArray,layoutAttributes),this.indexBuffer=e.createIndexBuffer(this.indexArray),this.programConfigurations.upload(e)},LineBucket.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())},LineBucket.prototype.addFeature=function(e,t){for(var r=this,i=this.layers[0].layout,a=i.get("line-join").evaluate(e),n=i.get("line-cap"),s=i.get("line-miter-limit"),u=i.get("line-round-limit"),d=0,o=t;d<o.length;d+=1){var l=o[d];r.addLine(l,e,a,n,s,u)}},LineBucket.prototype.addLine=function(e,t,r,i,a,n){for(var s=this,u="Polygon"===vectorTileFeatureTypes[t.type],d=e.length;d>=2&&e[d-1].equals(e[d-2]);)d--;for(var o=0;o<d-1&&e[o].equals(e[o+1]);)o++;if(!(d<(u?3:2))){"bevel"===r&&(a=1.05);var l=SHARP_CORNER_OFFSET*(EXTENT/(512*this.overscaling)),h=e[o],y=this.segments.prepareSegment(10*d,this.layoutVertexArray,this.indexArray);this.distance=0;var c,f,x,m=i,p=u?"butt":i,_=!0,g=void 0,v=void 0,L=void 0,A=void 0;this.e1=this.e2=this.e3=-1,u&&(c=e[d-2],A=h.sub(c)._unit()._perp());for(var C=o;C<d;C++)if(!(v=u&&C===d-1?e[o+1]:e[C+1])||!e[C].equals(v)){A&&(L=A),c&&(g=c),c=e[C],A=v?v.sub(c)._unit()._perp():L,L=L||A;var E=L.add(A);0===E.x&&0===E.y||E._unit();var V=E.x*A.x+E.y*A.y,S=0!==V?1/V:1/0,B=V<COS_HALF_SHARP_CORNER&&g&&v;if(B&&C>o){var T=c.dist(g);if(T>2*l){var I=c.sub(c.sub(g)._mult(l/T)._round());s.distance+=I.dist(g),s.addCurrentVertex(I,s.distance,L.mult(1),0,0,!1,y),g=I}}var b=g&&v,N=b?r:v?m:p;if(b&&"round"===N&&(S<n?N="miter":S<=2&&(N="fakeround")),"miter"===N&&S>a&&(N="bevel"),"bevel"===N&&(S>2&&(N="flipbevel"),S<a&&(N="miter")),g&&(s.distance+=c.dist(g)),"miter"===N)E._mult(S),s.addCurrentVertex(c,s.distance,E,0,0,!1,y);else if("flipbevel"===N){if(S>100)E=A.clone().mult(-1);else{var k=L.x*A.y-L.y*A.x>0?-1:1,R=S*L.add(A).mag()/L.sub(A).mag();E._perp()._mult(R*k)}s.addCurrentVertex(c,s.distance,E,0,0,!1,y),s.addCurrentVertex(c,s.distance,E.mult(-1),0,0,!1,y)}else if("bevel"===N||"fakeround"===N){var F=L.x*A.y-L.y*A.x>0,q=-Math.sqrt(S*S-1);if(F?(x=0,f=q):(f=0,x=q),_||s.addCurrentVertex(c,s.distance,L,f,x,!1,y),"fakeround"===N){for(var P=Math.floor(8*(.5-(V-.5))),D=void 0,M=0;M<P;M++)D=A.mult((M+1)/(P+1))._add(L)._unit(),s.addPieSliceVertex(c,s.distance,D,F,y);s.addPieSliceVertex(c,s.distance,E,F,y);for(var O=P-1;O>=0;O--)D=L.mult((O+1)/(P+1))._add(A)._unit(),s.addPieSliceVertex(c,s.distance,D,F,y)}v&&s.addCurrentVertex(c,s.distance,A,-f,-x,!1,y)}else"butt"===N?(_||s.addCurrentVertex(c,s.distance,L,0,0,!1,y),v&&s.addCurrentVertex(c,s.distance,A,0,0,!1,y)):"square"===N?(_||(s.addCurrentVertex(c,s.distance,L,1,1,!1,y),s.e1=s.e2=-1),v&&s.addCurrentVertex(c,s.distance,A,-1,-1,!1,y)):"round"===N&&(_||(s.addCurrentVertex(c,s.distance,L,0,0,!1,y),s.addCurrentVertex(c,s.distance,L,1,1,!0,y),s.e1=s.e2=-1),v&&(s.addCurrentVertex(c,s.distance,A,-1,-1,!0,y),s.addCurrentVertex(c,s.distance,A,0,0,!1,y)));if(B&&C<d-1){var $=c.dist(v);if($>2*l){var w=c.add(v.sub(c)._mult(l/$)._round());s.distance+=w.dist(c),s.addCurrentVertex(w,s.distance,A.mult(1),0,0,!1,y),c=w}}_=!1}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t)}},LineBucket.prototype.addCurrentVertex=function(e,t,r,i,a,n,s){var u,d=this.layoutVertexArray,o=this.indexArray;u=r.clone(),i&&u._sub(r.perp()._mult(i)),addLineVertex(d,e,u,n,!1,i,t),this.e3=s.vertexLength++,this.e1>=0&&this.e2>=0&&(o.emplaceBack(this.e1,this.e2,this.e3),s.primitiveLength++),this.e1=this.e2,this.e2=this.e3,u=r.mult(-1),a&&u._sub(r.perp()._mult(a)),addLineVertex(d,e,u,n,!0,-a,t),this.e3=s.vertexLength++,this.e1>=0&&this.e2>=0&&(o.emplaceBack(this.e1,this.e2,this.e3),s.primitiveLength++),this.e1=this.e2,this.e2=this.e3,t>MAX_LINE_DISTANCE/2&&(this.distance=0,this.addCurrentVertex(e,this.distance,r,i,a,n,s))},LineBucket.prototype.addPieSliceVertex=function(e,t,r,i,a){r=r.mult(i?-1:1);var n=this.layoutVertexArray,s=this.indexArray;addLineVertex(n,e,r,!1,i,0,t),this.e3=a.vertexLength++,this.e1>=0&&this.e2>=0&&(s.emplaceBack(this.e1,this.e2,this.e3),a.primitiveLength++),i?this.e2=this.e3:this.e1=this.e3},register("LineBucket",LineBucket,{omit:["layers"]}),module.exports=LineBucket;
},{"../../util/web_worker_transfer":278,"../array_types":39,"../extent":53,"../index_array_type":55,"../load_geometry":56,"../program_configuration":58,"../segment":60,"./line_attributes":48,"@mapbox/vector-tile":8}],50:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../../util/struct_array"),createLayout=ref.createLayout,symbolLayoutAttributes=createLayout([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"}]),dynamicLayoutAttributes=createLayout([{name:"a_projected_pos",components:3,type:"Float32"}],4),placementOpacityAttributes=createLayout([{name:"a_fade_opacity",components:1,type:"Uint32"}],4),collisionVertexAttributes=createLayout([{name:"a_placed",components:2,type:"Uint8"}],4),symbolAttributes={symbolLayoutAttributes:symbolLayoutAttributes,dynamicLayoutAttributes:dynamicLayoutAttributes,placementOpacityAttributes:placementOpacityAttributes,collisionVertexAttributes:collisionVertexAttributes,collisionBox:createLayout([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"},{type:"Int16",name:"radius"},{type:"Int16",name:"signedDistanceFromAnchor"}]),collisionBoxLayout:createLayout([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),collisionCircleLayout:createLayout([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),placement:createLayout([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"hidden"}]),glyphOffset:createLayout([{type:"Float32",name:"offsetX"}]),lineVertex:createLayout([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}])};module.exports=symbolAttributes;
},{"../../util/struct_array":271}],51:[function(_dereq_,module,exports){
"use strict";function addVertex(e,t,r,o,i,a,n,s){e.emplaceBack(t,r,Math.round(64*o),Math.round(64*i),a,n,s?s[0]:0,s?s[1]:0)}function addDynamicAttributes(e,t,r){e.emplaceBack(t.x,t.y,r),e.emplaceBack(t.x,t.y,r),e.emplaceBack(t.x,t.y,r),e.emplaceBack(t.x,t.y,r)}var ref=_dereq_("./symbol_attributes"),symbolLayoutAttributes=ref.symbolLayoutAttributes,collisionVertexAttributes=ref.collisionVertexAttributes,collisionBoxLayout=ref.collisionBoxLayout,collisionCircleLayout=ref.collisionCircleLayout,dynamicLayoutAttributes=ref.dynamicLayoutAttributes,ref$1=_dereq_("../array_types"),SymbolLayoutArray=ref$1.SymbolLayoutArray,SymbolDynamicLayoutArray=ref$1.SymbolDynamicLayoutArray,SymbolOpacityArray=ref$1.SymbolOpacityArray,CollisionBoxLayoutArray=ref$1.CollisionBoxLayoutArray,CollisionCircleLayoutArray=ref$1.CollisionCircleLayoutArray,CollisionVertexArray=ref$1.CollisionVertexArray,PlacedSymbolArray=ref$1.PlacedSymbolArray,GlyphOffsetArray=ref$1.GlyphOffsetArray,SymbolLineVertexArray=ref$1.SymbolLineVertexArray,Point=_dereq_("@mapbox/point-geometry"),ref$2=_dereq_("../segment"),SegmentVector=ref$2.SegmentVector,ref$3=_dereq_("../program_configuration"),ProgramConfigurationSet=ref$3.ProgramConfigurationSet,ref$4=_dereq_("../index_array_type"),TriangleIndexArray=ref$4.TriangleIndexArray,LineIndexArray=ref$4.LineIndexArray,transformText=_dereq_("../../symbol/transform_text"),mergeLines=_dereq_("../../symbol/mergelines"),scriptDetection=_dereq_("../../util/script_detection"),loadGeometry=_dereq_("../load_geometry"),vectorTileFeatureTypes=_dereq_("@mapbox/vector-tile").VectorTileFeature.types,verticalizePunctuation=_dereq_("../../util/verticalize_punctuation"),Anchor=_dereq_("../../symbol/anchor"),ref$5=_dereq_("../../symbol/symbol_size"),getSizeData=ref$5.getSizeData,ref$6=_dereq_("../../util/web_worker_transfer"),register=ref$6.register,shaderOpacityAttributes=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}],SymbolBuffers=function(e){this.layoutVertexArray=new SymbolLayoutArray,this.indexArray=new TriangleIndexArray,this.programConfigurations=e,this.segments=new SegmentVector,this.dynamicLayoutVertexArray=new SymbolDynamicLayoutArray,this.opacityVertexArray=new SymbolOpacityArray,this.placedSymbolArray=new PlacedSymbolArray};SymbolBuffers.prototype.upload=function(e,t){this.layoutVertexBuffer=e.createVertexBuffer(this.layoutVertexArray,symbolLayoutAttributes.members),this.indexBuffer=e.createIndexBuffer(this.indexArray,t),this.programConfigurations.upload(e),this.dynamicLayoutVertexBuffer=e.createVertexBuffer(this.dynamicLayoutVertexArray,dynamicLayoutAttributes.members,!0),this.opacityVertexBuffer=e.createVertexBuffer(this.opacityVertexArray,shaderOpacityAttributes,!0),this.opacityVertexBuffer.itemSize=1},SymbolBuffers.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy())},register("SymbolBuffers",SymbolBuffers);var CollisionBuffers=function(e,t,r){this.layoutVertexArray=new e,this.layoutAttributes=t,this.indexArray=new r,this.segments=new SegmentVector,this.collisionVertexArray=new CollisionVertexArray};CollisionBuffers.prototype.upload=function(e){this.layoutVertexBuffer=e.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=e.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=e.createVertexBuffer(this.collisionVertexArray,collisionVertexAttributes.members,!0)},CollisionBuffers.prototype.destroy=function(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy())},register("CollisionBuffers",CollisionBuffers);var SymbolBucket=function(e){this.collisionBoxArray=e.collisionBoxArray,this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map(function(e){return e.id}),this.index=e.index,this.pixelRatio=e.pixelRatio;var t=this.layers[0],r=t._unevaluatedLayout._values;this.textSizeData=getSizeData(this.zoom,r["text-size"]),this.iconSizeData=getSizeData(this.zoom,r["icon-size"]);var o=this.layers[0].layout;this.sortFeaturesByY=o.get("text-allow-overlap")||o.get("icon-allow-overlap")||o.get("text-ignore-placement")||o.get("icon-ignore-placement")};SymbolBucket.prototype.createArrays=function(){this.text=new SymbolBuffers(new ProgramConfigurationSet(symbolLayoutAttributes.members,this.layers,this.zoom,function(e){return/^text/.test(e)})),this.icon=new SymbolBuffers(new ProgramConfigurationSet(symbolLayoutAttributes.members,this.layers,this.zoom,function(e){return/^icon/.test(e)})),this.collisionBox=new CollisionBuffers(CollisionBoxLayoutArray,collisionBoxLayout.members,LineIndexArray),this.collisionCircle=new CollisionBuffers(CollisionCircleLayoutArray,collisionCircleLayout.members,TriangleIndexArray),this.glyphOffsetArray=new GlyphOffsetArray,this.lineVertexArray=new SymbolLineVertexArray},SymbolBucket.prototype.populate=function(e,t){var r=this,o=this.layers[0],i=o.layout,a=i.get("text-font"),n=i.get("text-field"),s=i.get("icon-image"),l=("constant"!==n.value.kind||n.value.value.length>0)&&("constant"!==a.value.kind||a.value.value.length>0),y="constant"!==s.value.kind||s.value.value&&s.value.value.length>0;if(this.features=[],l||y){for(var c=t.iconDependencies,u=t.glyphDependencies,x={zoom:this.zoom},f=0,h=e;f<h.length;f+=1){var m=h[f],d=m.feature,p=m.index,g=m.sourceLayerIndex;if(o._featureFilter(x,d)){var A=void 0;l&&(A=o.getValueAndResolveTokens("text-field",d),A=transformText(A,o,d));var b=void 0;if(y&&(b=o.getValueAndResolveTokens("icon-image",d)),A||b){var B={text:A,icon:b,index:p,sourceLayerIndex:g,geometry:loadGeometry(d),properties:d.properties,type:vectorTileFeatureTypes[d.type]};if(void 0!==d.id&&(B.id=d.id),r.features.push(B),b&&(c[b]=!0),A)for(var v=a.evaluate(d).join(","),S=u[v]=u[v]||{},V="map"===i.get("text-rotation-alignment")&&"line"===i.get("symbol-placement"),C=scriptDetection.allowsVerticalWritingMode(A),k=0;k<A.length;k++)if(S[A.charCodeAt(k)]=!0,V&&C){var L=verticalizePunctuation.lookup[A.charAt(k)];L&&(S[L.charCodeAt(0)]=!0)}}}}"line"===i.get("symbol-placement")&&(this.features=mergeLines(this.features))}},SymbolBucket.prototype.isEmpty=function(){return 0===this.symbolInstances.length},SymbolBucket.prototype.upload=function(e){this.text.upload(e,this.sortFeaturesByY),this.icon.upload(e,this.sortFeaturesByY),this.collisionBox.upload(e),this.collisionCircle.upload(e)},SymbolBucket.prototype.destroy=function(){this.text.destroy(),this.icon.destroy(),this.collisionBox.destroy(),this.collisionCircle.destroy()},SymbolBucket.prototype.addToLineVertexArray=function(e,t){var r=this,o=this.lineVertexArray.length;if(void 0!==e.segment){for(var i=e.dist(t[e.segment+1]),a=e.dist(t[e.segment]),n={},s=e.segment+1;s<t.length;s++)n[s]={x:t[s].x,y:t[s].y,tileUnitDistanceFromAnchor:i},s<t.length-1&&(i+=t[s+1].dist(t[s]));for(var l=e.segment||0;l>=0;l--)n[l]={x:t[l].x,y:t[l].y,tileUnitDistanceFromAnchor:a},l>0&&(a+=t[l-1].dist(t[l]));for(var y=0;y<t.length;y++){var c=n[y];r.lineVertexArray.emplaceBack(c.x,c.y,c.tileUnitDistanceFromAnchor)}}return{lineStartIndex:o,lineLength:this.lineVertexArray.length-o}},SymbolBucket.prototype.addSymbols=function(e,t,r,o,i,a,n,s,l,y){for(var c=this,u=e.indexArray,x=e.layoutVertexArray,f=e.dynamicLayoutVertexArray,h=e.segments.prepareSegment(4*t.length,e.layoutVertexArray,e.indexArray),m=this.glyphOffsetArray.length,d=h.vertexLength,p=0,g=t;p<g.length;p+=1){var A=g[p],b=A.tl,B=A.tr,v=A.bl,S=A.br,V=A.tex,C=h.vertexLength,k=A.glyphOffset[1];addVertex(x,s.x,s.y,b.x,k+b.y,V.x,V.y,r),addVertex(x,s.x,s.y,B.x,k+B.y,V.x+V.w,V.y,r),addVertex(x,s.x,s.y,v.x,k+v.y,V.x,V.y+V.h,r),addVertex(x,s.x,s.y,S.x,k+S.y,V.x+V.w,V.y+V.h,r),addDynamicAttributes(f,s,0),u.emplaceBack(C,C+1,C+2),u.emplaceBack(C+1,C+2,C+3),h.vertexLength+=4,h.primitiveLength+=2,c.glyphOffsetArray.emplaceBack(A.glyphOffset[0])}e.placedSymbolArray.emplaceBack(s.x,s.y,m,this.glyphOffsetArray.length-m,d,l,y,s.segment,r?r[0]:0,r?r[1]:0,o[0],o[1],n,!1),e.programConfigurations.populatePaintArrays(e.layoutVertexArray.length,a)},SymbolBucket.prototype._addCollisionDebugVertex=function(e,t,r,o,i){return t.emplaceBack(0,0),e.emplaceBack(r.x,r.y,o.x,o.y,Math.round(i.x),Math.round(i.y))},SymbolBucket.prototype.addCollisionDebugVertices=function(e,t,r,o,i,a,n,s){var l=i.segments.prepareSegment(4,i.layoutVertexArray,i.indexArray),y=l.vertexLength,c=i.layoutVertexArray,u=i.collisionVertexArray;if(this._addCollisionDebugVertex(c,u,a,n.anchor,new Point(e,t)),this._addCollisionDebugVertex(c,u,a,n.anchor,new Point(r,t)),this._addCollisionDebugVertex(c,u,a,n.anchor,new Point(r,o)),this._addCollisionDebugVertex(c,u,a,n.anchor,new Point(e,o)),l.vertexLength+=4,s){var x=i.indexArray;x.emplaceBack(y,y+1,y+2),x.emplaceBack(y,y+2,y+3),l.primitiveLength+=2}else{var f=i.indexArray;f.emplaceBack(y,y+1),f.emplaceBack(y+1,y+2),f.emplaceBack(y+2,y+3),f.emplaceBack(y+3,y),l.primitiveLength+=4}},SymbolBucket.prototype.generateCollisionDebugBuffers=function(){for(var e=this,t=0,r=e.symbolInstances;t<r.length;t+=1){var o=r[t];o.textCollisionFeature={boxStartIndex:o.textBoxStartIndex,boxEndIndex:o.textBoxEndIndex},o.iconCollisionFeature={boxStartIndex:o.iconBoxStartIndex,boxEndIndex:o.iconBoxEndIndex};for(var i=0;i<2;i++){var a=o[0===i?"textCollisionFeature":"iconCollisionFeature"];if(a)for(var n=a.boxStartIndex;n<a.boxEndIndex;n++){var s=e.collisionBoxArray.get(n),l=s.x1,y=s.y1,c=s.x2,u=s.y2,x=s.radius>0;e.addCollisionDebugVertices(l,y,c,u,x?e.collisionCircle:e.collisionBox,s.anchorPoint,o,x)}}}},SymbolBucket.prototype.deserializeCollisionBoxes=function(e,t,r,o,i){for(var a={},n=t;n<r;n++){var s=e.get(n);if(0===s.radius){a.textBox={x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,anchorPointX:s.anchorPointX,anchorPointY:s.anchorPointY};break}a.textCircles||(a.textCircles=[]);a.textCircles.push(s.anchorPointX,s.anchorPointY,s.radius,s.signedDistanceFromAnchor,1)}for(var l=o;l<i;l++){var y=e.get(l);if(0===y.radius){a.iconBox={x1:y.x1,y1:y.y1,x2:y.x2,y2:y.y2,anchorPointX:y.anchorPointX,anchorPointY:y.anchorPointY};break}}return a},SymbolBucket.prototype.hasTextData=function(){return this.text.segments.get().length>0},SymbolBucket.prototype.hasIconData=function(){return this.icon.segments.get().length>0},SymbolBucket.prototype.hasCollisionBoxData=function(){return this.collisionBox.segments.get().length>0},SymbolBucket.prototype.hasCollisionCircleData=function(){return this.collisionCircle.segments.get().length>0},SymbolBucket.prototype.sortFeatures=function(e){var t=this;if(this.sortFeaturesByY&&this.sortedAngle!==e&&(this.sortedAngle=e,!(this.text.segments.get().length>1||this.icon.segments.get().length>1))){for(var r=[],o=0;o<this.symbolInstances.length;o++)r.push(o);var i=Math.sin(e),a=Math.cos(e);r.sort(function(e,r){var o=t.symbolInstances[e],n=t.symbolInstances[r];return(i*o.anchor.x+a*o.anchor.y|0)-(i*n.anchor.x+a*n.anchor.y|0)||n.featureIndex-o.featureIndex}),this.text.indexArray.clear(),this.icon.indexArray.clear();for(var n=0,s=r;n<s.length;n+=1){for(var l=s[n],y=t.symbolInstances[l],c=0,u=y.placedTextSymbolIndices;c<u.length;c+=1)for(var x=u[c],f=t.text.placedSymbolArray.get(x),h=f.vertexStartIndex+4*f.numGlyphs,m=f.vertexStartIndex;m<h;m+=4)t.text.indexArray.emplaceBack(m,m+1,m+2),t.text.indexArray.emplaceBack(m+1,m+2,m+3);var d=t.icon.placedSymbolArray.get(l);if(d.numGlyphs){var p=d.vertexStartIndex;t.icon.indexArray.emplaceBack(p,p+1,p+2),t.icon.indexArray.emplaceBack(p+1,p+2,p+3)}}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray)}},register("SymbolBucket",SymbolBucket,{omit:["layers","collisionBoxArray","features","compareText"],shallow:["symbolInstances"]}),SymbolBucket.MAX_GLYPHS=65535,SymbolBucket.addDynamicAttributes=addDynamicAttributes,module.exports=SymbolBucket;
},{"../../symbol/anchor":213,"../../symbol/mergelines":221,"../../symbol/symbol_size":228,"../../symbol/transform_text":229,"../../util/script_detection":269,"../../util/verticalize_punctuation":277,"../../util/web_worker_transfer":278,"../array_types":39,"../index_array_type":55,"../load_geometry":56,"../program_configuration":58,"../segment":60,"./symbol_attributes":50,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8}],52:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/image"),RGBAImage=ref.RGBAImage,util=_dereq_("../util/util"),ref$1=_dereq_("../util/web_worker_transfer"),register=ref$1.register,Level=function(e,t,i){if(e<=0)throw new RangeError("Level must have positive dimension");this.dim=e,this.border=t,this.stride=this.dim+2*this.border,this.data=i||new Int32Array((this.dim+2*this.border)*(this.dim+2*this.border))};Level.prototype.set=function(e,t,i){this.data[this._idx(e,t)]=i+65536},Level.prototype.get=function(e,t){return this.data[this._idx(e,t)]-65536},Level.prototype._idx=function(e,t){if(e<-this.border||e>=this.dim+this.border||t<-this.border||t>=this.dim+this.border)throw new RangeError("out of range source coordinates for DEM data");return(t+this.border)*this.stride+(e+this.border)},register("Level",Level);var DEMData=function(e,t,i){this.uid=e,this.scale=t||1,this.level=i||new Level(256,512),this.loaded=!!i};DEMData.prototype.loadFromImage=function(e){var t=this;if(e.height!==e.width)throw new RangeError("DEM tiles must be square");for(var i=this.level=new Level(e.width,e.width/2),r=e.data,d=0;d<i.dim;d++)for(var s=0;s<i.dim;s++){var a=d*i.dim+s,o=4*a;i.set(s,d,t.scale*((256*r[o]*256+256*r[o+1]+r[o+2])/10-1e4))}for(var m=0;m<i.dim;m++)i.set(-1,m,i.get(0,m)),i.set(i.dim,m,i.get(i.dim-1,m)),i.set(m,-1,i.get(m,0)),i.set(m,i.dim,i.get(m,i.dim-1));i.set(-1,-1,i.get(0,0)),i.set(i.dim,-1,i.get(i.dim-1,0)),i.set(-1,i.dim,i.get(0,i.dim-1)),i.set(i.dim,i.dim,i.get(i.dim-1,i.dim-1)),this.loaded=!0},DEMData.prototype.getPixels=function(){return new RGBAImage({width:this.level.dim+2*this.level.border,height:this.level.dim+2*this.level.border},new Uint8Array(this.level.data.buffer))},DEMData.prototype.backfillBorder=function(e,t,i){var r=this.level,d=e.level;if(r.dim!==d.dim)throw new Error("level mismatch (dem dimension)");var s=t*r.dim,a=t*r.dim+r.dim,o=i*r.dim,m=i*r.dim+r.dim;switch(t){case-1:s=a-1;break;case 1:a=s+1}switch(i){case-1:o=m-1;break;case 1:m=o+1}for(var l=util.clamp(s,-r.border,r.dim+r.border),h=util.clamp(a,-r.border,r.dim+r.border),n=util.clamp(o,-r.border,r.dim+r.border),v=util.clamp(m,-r.border,r.dim+r.border),u=-t*r.dim,f=-i*r.dim,b=n;b<v;b++)for(var g=l;g<h;g++)r.set(g,b,d.get(g+u,b+f))},register("DEMData",DEMData),module.exports={DEMData:DEMData,Level:Level};
},{"../util/image":263,"../util/util":275,"../util/web_worker_transfer":278}],53:[function(_dereq_,module,exports){
"use strict";module.exports=8192;
},{}],54:[function(_dereq_,module,exports){
"use strict";function topDownFeatureComparator(e,r){return r-e}var Point=_dereq_("@mapbox/point-geometry"),loadGeometry=_dereq_("./load_geometry"),EXTENT=_dereq_("./extent"),featureFilter=_dereq_("../style-spec/feature_filter"),Grid=_dereq_("grid-index"),DictionaryCoder=_dereq_("../util/dictionary_coder"),vt=_dereq_("@mapbox/vector-tile"),Protobuf=_dereq_("pbf"),GeoJSONFeature=_dereq_("../util/vectortile_to_geojson"),arraysIntersect=_dereq_("../util/util").arraysIntersect,ref=_dereq_("../source/tile_id"),OverscaledTileID=ref.OverscaledTileID,ref$1=_dereq_("../util/web_worker_transfer"),register=ref$1.register,ref$2=_dereq_("./array_types"),FeatureIndexArray=ref$2.FeatureIndexArray,FeatureIndex=function(e,r,t,a){this.tileID=e,this.overscaling=r,this.x=e.canonical.x,this.y=e.canonical.y,this.z=e.canonical.z,this.grid=t||new Grid(EXTENT,16,0),this.featureIndexArray=a||new FeatureIndexArray};FeatureIndex.prototype.insert=function(e,r,t,a,i){var o=this,n=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(t,a,i);for(var s=0;s<r.length;s++){for(var u=r[s],l=[1/0,1/0,-1/0,-1/0],y=0;y<u.length;y++){var d=u[y];l[0]=Math.min(l[0],d.x),l[1]=Math.min(l[1],d.y),l[2]=Math.max(l[2],d.x),l[3]=Math.max(l[3],d.y)}o.grid.insert(n,l[0],l[1],l[2],l[3])}},FeatureIndex.prototype.query=function(e,r){this.vtLayers||(this.vtLayers=new vt.VectorTile(new Protobuf(this.rawTileData)).layers,this.sourceLayerCoder=new DictionaryCoder(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"]));for(var t={},a=e.params||{},i=EXTENT/e.tileSize/e.scale,o=featureFilter(a.filter),n=e.queryGeometry,s=e.additionalRadius*i,u=1/0,l=1/0,y=-1/0,d=-1/0,c=0;c<n.length;c++)for(var f=n[c],h=0;h<f.length;h++){var x=f[h];u=Math.min(u,x.x),l=Math.min(l,x.y),y=Math.max(y,x.x),d=Math.max(d,x.y)}var v=this.grid.query(u-s,l-s,y+s,d+s);v.sort(topDownFeatureComparator),this.filterMatching(t,v,this.featureIndexArray,n,o,a.layers,r,e.bearing,i);var I=e.collisionIndex?e.collisionIndex.queryRenderedSymbols(n,this.tileID,EXTENT/e.tileSize,e.collisionBoxArray,e.sourceID,e.bucketInstanceIds):[];return I.sort(),this.filterMatching(t,I,e.collisionBoxArray,n,o,a.layers,r,e.bearing,i),t},FeatureIndex.prototype.filterMatching=function(e,r,t,a,i,o,n,s,u){for(var l,y=this,d=0;d<r.length;d++){var c=r[d];if(c!==l){l=c;var f=t.get(c),h=y.bucketLayerIDs[f.bucketIndex];if(!o||arraysIntersect(o,h)){var x=y.sourceLayerCoder.decode(f.sourceLayerIndex),v=y.vtLayers[x],I=v.feature(f.featureIndex);if(i({zoom:y.tileID.overscaledZ},I))for(var g=null,m=0;m<h.length;m++){var p=h[m];if(!(o&&o.indexOf(p)<0)){var q=n[p];if(q&&("symbol"===q.type||(g||(g=loadGeometry(I)),q.queryIntersectsFeature(a,I,g,y.z,s,u)))){var F=new GeoJSONFeature(I,y.z,y.x,y.y);F.layer=q.serialize();var b=e[p];void 0===b&&(b=e[p]=[]),b.push({featureIndex:c,feature:F})}}}}}}},FeatureIndex.prototype.hasLayer=function(e){for(var r=this,t=0,a=r.bucketLayerIDs;t<a.length;t+=1)for(var i=a[t],o=0,n=i;o<n.length;o+=1){var s=n[o];if(e===s)return!0}return!1},register("FeatureIndex",FeatureIndex,{omit:["rawTileData","sourceLayerCoder"]}),module.exports=FeatureIndex;
},{"../source/tile_id":114,"../style-spec/feature_filter":148,"../util/dictionary_coder":257,"../util/util":275,"../util/vectortile_to_geojson":276,"../util/web_worker_transfer":278,"./array_types":39,"./extent":53,"./load_geometry":56,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8,"grid-index":24,"pbf":30}],55:[function(_dereq_,module,exports){
"use strict";module.exports={LineIndexArray:_dereq_("./array_types").LineIndexArray,TriangleIndexArray:_dereq_("./array_types").TriangleIndexArray};
},{"./array_types":39}],56:[function(_dereq_,module,exports){
"use strict";function createBounds(e){return{min:-1*Math.pow(2,e-1),max:Math.pow(2,e-1)-1}}var util=_dereq_("../util/util"),EXTENT=_dereq_("./extent"),bounds=createBounds(16);module.exports=function(e){for(var t=EXTENT/e.extent,r=e.loadGeometry(),n=0;n<r.length;n++)for(var u=r[n],o=0;o<u.length;o++){var a=u[o];a.x=Math.round(a.x*t),a.y=Math.round(a.y*t),(a.x<bounds.min||a.x>bounds.max||a.y<bounds.min||a.y>bounds.max)&&util.warnOnce("Geometry exceeds allowed extent, reduce your vector tile buffer size")}return r};
},{"../util/util":275,"./extent":53}],57:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/struct_array"),createLayout=ref.createLayout;module.exports=createLayout([{name:"a_pos",type:"Int16",components:2}]);
},{"../util/struct_array":271}],58:[function(_dereq_,module,exports){
"use strict";function packColor(r){return[packUint8ToFloat(255*r.r,255*r.g),packUint8ToFloat(255*r.b,255*r.a)]}function paintAttributeName(r,t){return{"text-opacity":"opacity","icon-opacity":"opacity","text-color":"fill_color","icon-color":"fill_color","text-halo-color":"halo_color","icon-halo-color":"halo_color","text-halo-blur":"halo_blur","icon-halo-blur":"halo_blur","text-halo-width":"halo_width","icon-halo-width":"halo_width","line-gap-width":"gapwidth"}[r]||r.replace(t+"-","").replace(/-/g,"_")}var packUint8ToFloat=_dereq_("../shaders/encode_attribute").packUint8ToFloat,Color=_dereq_("../style-spec/util/color"),ref=_dereq_("../util/web_worker_transfer"),register=ref.register,ref$1=_dereq_("../style/properties"),PossiblyEvaluatedPropertyValue=ref$1.PossiblyEvaluatedPropertyValue,ref$2=_dereq_("./array_types"),StructArrayLayout1f4=ref$2.StructArrayLayout1f4,StructArrayLayout2f8=ref$2.StructArrayLayout2f8,StructArrayLayout4f16=ref$2.StructArrayLayout4f16,ConstantBinder=function(r,t,o){this.value=r,this.name=t,this.type=o,this.statistics={max:-1/0}};ConstantBinder.prototype.defines=function(){return["#define HAS_UNIFORM_u_"+this.name]},ConstantBinder.prototype.populatePaintArray=function(){},ConstantBinder.prototype.upload=function(){},ConstantBinder.prototype.destroy=function(){},ConstantBinder.prototype.setUniforms=function(r,t,o,e){var i=e.constantOr(this.value),n=r.gl;"color"===this.type?n.uniform4f(t.uniforms["u_"+this.name],i.r,i.g,i.b,i.a):n.uniform1f(t.uniforms["u_"+this.name],i)};var SourceExpressionBinder=function(r,t,o){this.expression=r,this.name=t,this.type=o,this.statistics={max:-1/0};var e="color"===o?StructArrayLayout2f8:StructArrayLayout1f4;this.paintVertexAttributes=[{name:"a_"+t,type:"Float32",components:"color"===o?2:1,offset:0}],this.paintVertexArray=new e};SourceExpressionBinder.prototype.defines=function(){return[]},SourceExpressionBinder.prototype.populatePaintArray=function(r,t){var o=this.paintVertexArray,e=o.length;o.reserve(r);var i=this.expression.evaluate({zoom:0},t);if("color"===this.type)for(var n=packColor(i),a=e;a<r;a++)o.emplaceBack(n[0],n[1]);else{for(var s=e;s<r;s++)o.emplaceBack(i);this.statistics.max=Math.max(this.statistics.max,i)}},SourceExpressionBinder.prototype.upload=function(r){this.paintVertexArray&&(this.paintVertexBuffer=r.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes))},SourceExpressionBinder.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()},SourceExpressionBinder.prototype.setUniforms=function(r,t){r.gl.uniform1f(t.uniforms["a_"+this.name+"_t"],0)};var CompositeExpressionBinder=function(r,t,o,e,i){this.expression=r,this.name=t,this.type=o,this.useIntegerZoom=e,this.zoom=i,this.statistics={max:-1/0};var n="color"===o?StructArrayLayout4f16:StructArrayLayout2f8;this.paintVertexAttributes=[{name:"a_"+t,type:"Float32",components:"color"===o?4:2,offset:0}],this.paintVertexArray=new n};CompositeExpressionBinder.prototype.defines=function(){return[]},CompositeExpressionBinder.prototype.populatePaintArray=function(r,t){var o=this.paintVertexArray,e=o.length;o.reserve(r);var i=this.expression.evaluate({zoom:this.zoom},t),n=this.expression.evaluate({zoom:this.zoom+1},t);if("color"===this.type)for(var a=packColor(i),s=packColor(n),p=e;p<r;p++)o.emplaceBack(a[0],a[1],s[0],s[1]);else{for(var u=e;u<r;u++)o.emplaceBack(i,n);this.statistics.max=Math.max(this.statistics.max,i,n)}},CompositeExpressionBinder.prototype.upload=function(r){this.paintVertexArray&&(this.paintVertexBuffer=r.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes))},CompositeExpressionBinder.prototype.destroy=function(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()},CompositeExpressionBinder.prototype.interpolationFactor=function(r){return this.useIntegerZoom?this.expression.interpolationFactor(Math.floor(r),this.zoom,this.zoom+1):this.expression.interpolationFactor(r,this.zoom,this.zoom+1)},CompositeExpressionBinder.prototype.setUniforms=function(r,t,o){r.gl.uniform1f(t.uniforms["a_"+this.name+"_t"],this.interpolationFactor(o.zoom))};var ProgramConfiguration=function(){this.binders={},this.cacheKey="",this._buffers=[]};ProgramConfiguration.createDynamic=function(r,t,o){var e=new ProgramConfiguration,i=[];for(var n in r.paint._values)if(o(n)){var a=r.paint.get(n);if(a instanceof PossiblyEvaluatedPropertyValue&&a.property.specification["property-function"]){var s=paintAttributeName(n,r.type),p=a.property.specification.type,u=a.property.useIntegerZoom;"constant"===a.value.kind?(e.binders[n]=new ConstantBinder(a.value,s,p),i.push("/u_"+s)):"source"===a.value.kind?(e.binders[n]=new SourceExpressionBinder(a.value,s,p),i.push("/a_"+s)):(e.binders[n]=new CompositeExpressionBinder(a.value,s,p,u,t),i.push("/z_"+s))}}return e.cacheKey=i.sort().join(""),e},ProgramConfiguration.prototype.populatePaintArrays=function(r,t){var o=this;for(var e in o.binders)o.binders[e].populatePaintArray(r,t)},ProgramConfiguration.prototype.defines=function(){var r=this,t=[];for(var o in r.binders)t.push.apply(t,r.binders[o].defines());return t},ProgramConfiguration.prototype.setUniforms=function(r,t,o,e){var i=this;for(var n in i.binders){i.binders[n].setUniforms(r,t,e,o.get(n))}},ProgramConfiguration.prototype.getPaintVertexBuffers=function(){return this._buffers},ProgramConfiguration.prototype.upload=function(r){var t=this;for(var o in t.binders)t.binders[o].upload(r);var e=[];for(var i in t.binders){var n=t.binders[i];(n instanceof SourceExpressionBinder||n instanceof CompositeExpressionBinder)&&n.paintVertexBuffer&&e.push(n.paintVertexBuffer)}this._buffers=e},ProgramConfiguration.prototype.destroy=function(){var r=this;for(var t in r.binders)r.binders[t].destroy()};var ProgramConfigurationSet=function(r,t,o,e){var i=this;void 0===e&&(e=function(){return!0}),this.programConfigurations={};for(var n=0,a=t;n<a.length;n+=1){var s=a[n];i.programConfigurations[s.id]=ProgramConfiguration.createDynamic(s,o,e),i.programConfigurations[s.id].layoutAttributes=r}};ProgramConfigurationSet.prototype.populatePaintArrays=function(r,t){var o=this;for(var e in o.programConfigurations)o.programConfigurations[e].populatePaintArrays(r,t)},ProgramConfigurationSet.prototype.get=function(r){return this.programConfigurations[r]},ProgramConfigurationSet.prototype.upload=function(r){var t=this;for(var o in t.programConfigurations)t.programConfigurations[o].upload(r)},ProgramConfigurationSet.prototype.destroy=function(){var r=this;for(var t in r.programConfigurations)r.programConfigurations[t].destroy()},register("ConstantBinder",ConstantBinder),register("SourceExpressionBinder",SourceExpressionBinder),register("CompositeExpressionBinder",CompositeExpressionBinder),register("ProgramConfiguration",ProgramConfiguration,{omit:["_buffers"]}),register("ProgramConfigurationSet",ProgramConfigurationSet),module.exports={ProgramConfiguration:ProgramConfiguration,ProgramConfigurationSet:ProgramConfigurationSet};
},{"../shaders/encode_attribute":96,"../style-spec/util/color":153,"../style/properties":188,"../util/web_worker_transfer":278,"./array_types":39}],59:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/struct_array"),createLayout=ref.createLayout;module.exports=createLayout([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}]);
},{"../util/struct_array":271}],60:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/util"),warnOnce=ref.warnOnce,ref$1=_dereq_("../util/web_worker_transfer"),register=ref$1.register,MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,SegmentVector=function(e){void 0===e&&(e=[]),this.segments=e};SegmentVector.prototype.prepareSegment=function(e,t,r){var n=this.segments[this.segments.length-1];return e>MAX_VERTEX_ARRAY_LENGTH&&warnOnce("Max vertices per segment is "+MAX_VERTEX_ARRAY_LENGTH+": bucket requested "+e),(!n||n.vertexLength+e>module.exports.MAX_VERTEX_ARRAY_LENGTH)&&(n={vertexOffset:t.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},this.segments.push(n)),n},SegmentVector.prototype.get=function(){return this.segments},SegmentVector.prototype.destroy=function(){for(var e=this,t=0,r=e.segments;t<r.length;t+=1){var n=r[t];for(var s in n.vaos)n.vaos[s].destroy()}},register("SegmentVector",SegmentVector),module.exports={SegmentVector:SegmentVector,MAX_VERTEX_ARRAY_LENGTH:MAX_VERTEX_ARRAY_LENGTH};
},{"../util/util":275,"../util/web_worker_transfer":278}],61:[function(_dereq_,module,exports){
"use strict";var Coordinate=function(o,t,n){this.column=o,this.row=t,this.zoom=n};Coordinate.prototype.clone=function(){return new Coordinate(this.column,this.row,this.zoom)},Coordinate.prototype.zoomTo=function(o){return this.clone()._zoomTo(o)},Coordinate.prototype.sub=function(o){return this.clone()._sub(o)},Coordinate.prototype._zoomTo=function(o){var t=Math.pow(2,o-this.zoom);return this.column*=t,this.row*=t,this.zoom=o,this},Coordinate.prototype._sub=function(o){return o=o.zoomTo(this.zoom),this.column-=o.column,this.row-=o.row,this},module.exports=Coordinate;
},{}],62:[function(_dereq_,module,exports){
"use strict";var wrap=_dereq_("../util/util").wrap,LngLat=function(t,n){if(isNaN(t)||isNaN(n))throw new Error("Invalid LngLat object: ("+t+", "+n+")");if(this.lng=+t,this.lat=+n,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")};LngLat.prototype.wrap=function(){return new LngLat(wrap(this.lng,-180,180),this.lat)},LngLat.prototype.toArray=function(){return[this.lng,this.lat]},LngLat.prototype.toString=function(){return"LngLat("+this.lng+", "+this.lat+")"},LngLat.prototype.toBounds=function(t){var n=360*t/40075017,r=n/Math.cos(Math.PI/180*this.lat);return new(_dereq_("./lng_lat_bounds"))(new LngLat(this.lng-r,this.lat-n),new LngLat(this.lng+r,this.lat+n))},LngLat.convert=function(t){if(t instanceof LngLat)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new LngLat(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new LngLat(Number(t.lng),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")},module.exports=LngLat;
},{"../util/util":275,"./lng_lat_bounds":63}],63:[function(_dereq_,module,exports){
"use strict";var LngLat=_dereq_("./lng_lat"),LngLatBounds=function(t,n){t&&(n?this.setSouthWest(t).setNorthEast(n):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]))};LngLatBounds.prototype.setNorthEast=function(t){return this._ne=t instanceof LngLat?new LngLat(t.lng,t.lat):LngLat.convert(t),this},LngLatBounds.prototype.setSouthWest=function(t){return this._sw=t instanceof LngLat?new LngLat(t.lng,t.lat):LngLat.convert(t),this},LngLatBounds.prototype.extend=function(t){var n,e,s=this._sw,o=this._ne;if(t instanceof LngLat)n=t,e=t;else{if(!(t instanceof LngLatBounds))return Array.isArray(t)?t.every(Array.isArray)?this.extend(LngLatBounds.convert(t)):this.extend(LngLat.convert(t)):this;if(n=t._sw,e=t._ne,!n||!e)return this}return s||o?(s.lng=Math.min(n.lng,s.lng),s.lat=Math.min(n.lat,s.lat),o.lng=Math.max(e.lng,o.lng),o.lat=Math.max(e.lat,o.lat)):(this._sw=new LngLat(n.lng,n.lat),this._ne=new LngLat(e.lng,e.lat)),this},LngLatBounds.prototype.getCenter=function(){return new LngLat((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)},LngLatBounds.prototype.getSouthWest=function(){return this._sw},LngLatBounds.prototype.getNorthEast=function(){return this._ne},LngLatBounds.prototype.getNorthWest=function(){return new LngLat(this.getWest(),this.getNorth())},LngLatBounds.prototype.getSouthEast=function(){return new LngLat(this.getEast(),this.getSouth())},LngLatBounds.prototype.getWest=function(){return this._sw.lng},LngLatBounds.prototype.getSouth=function(){return this._sw.lat},LngLatBounds.prototype.getEast=function(){return this._ne.lng},LngLatBounds.prototype.getNorth=function(){return this._ne.lat},LngLatBounds.prototype.toArray=function(){return[this._sw.toArray(),this._ne.toArray()]},LngLatBounds.prototype.toString=function(){return"LngLatBounds("+this._sw.toString()+", "+this._ne.toString()+")"},LngLatBounds.prototype.isEmpty=function(){return!(this._sw&&this._ne)},LngLatBounds.convert=function(t){return!t||t instanceof LngLatBounds?t:new LngLatBounds(t)},module.exports=LngLatBounds;
},{"./lng_lat":62}],64:[function(_dereq_,module,exports){
"use strict";var LngLat=_dereq_("./lng_lat"),Point=_dereq_("@mapbox/point-geometry"),Coordinate=_dereq_("./coordinate"),util=_dereq_("../util/util"),interp=_dereq_("../style-spec/util/interpolate").number,tileCover=_dereq_("../util/tile_cover"),ref=_dereq_("../source/tile_id"),CanonicalTileID=ref.CanonicalTileID,UnwrappedTileID=ref.UnwrappedTileID,EXTENT=_dereq_("../data/extent"),glmatrix=_dereq_("@mapbox/gl-matrix"),vec4=glmatrix.vec4,mat4=glmatrix.mat4,mat2=glmatrix.mat2,Transform=function(t,i,o){this.tileSize=512,this._renderWorldCopies=void 0===o||o,this._minZoom=t||0,this._maxZoom=i||22,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this._center=new LngLat(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._posMatrixCache={},this._alignedPosMatrixCache={}},prototypeAccessors={minZoom:{},maxZoom:{},renderWorldCopies:{},worldSize:{},centerPoint:{},size:{},bearing:{},pitch:{},fov:{},zoom:{},center:{},unmodified:{},x:{},y:{},point:{}};Transform.prototype.clone=function(){var t=new Transform(this._minZoom,this._maxZoom,this._renderWorldCopies);return t.tileSize=this.tileSize,t.latRange=this.latRange,t.width=this.width,t.height=this.height,t._center=this._center,t.zoom=this.zoom,t.angle=this.angle,t._fov=this._fov,t._pitch=this._pitch,t._unmodified=this._unmodified,t._calcMatrices(),t},prototypeAccessors.minZoom.get=function(){return this._minZoom},prototypeAccessors.minZoom.set=function(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t))},prototypeAccessors.maxZoom.get=function(){return this._maxZoom},prototypeAccessors.maxZoom.set=function(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t))},prototypeAccessors.renderWorldCopies.get=function(){return this._renderWorldCopies},prototypeAccessors.worldSize.get=function(){return this.tileSize*this.scale},prototypeAccessors.centerPoint.get=function(){return this.size._div(2)},prototypeAccessors.size.get=function(){return new Point(this.width,this.height)},prototypeAccessors.bearing.get=function(){return-this.angle/Math.PI*180},prototypeAccessors.bearing.set=function(t){var i=-util.wrap(t,-180,180)*Math.PI/180;this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=mat2.create(),mat2.rotate(this.rotationMatrix,this.rotationMatrix,this.angle))},prototypeAccessors.pitch.get=function(){return this._pitch/Math.PI*180},prototypeAccessors.pitch.set=function(t){var i=util.clamp(t,0,60)/180*Math.PI;this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices())},prototypeAccessors.fov.get=function(){return this._fov/Math.PI*180},prototypeAccessors.fov.set=function(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices())},prototypeAccessors.zoom.get=function(){return this._zoom},prototypeAccessors.zoom.set=function(t){var i=Math.min(Math.max(t,this.minZoom),this.maxZoom);this._zoom!==i&&(this._unmodified=!1,this._zoom=i,this.scale=this.zoomScale(i),this.tileZoom=Math.floor(i),this.zoomFraction=i-this.tileZoom,this._constrain(),this._calcMatrices())},prototypeAccessors.center.get=function(){return this._center},prototypeAccessors.center.set=function(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices())},Transform.prototype.coveringZoomLevel=function(t){return(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))},Transform.prototype.getVisibleUnwrappedCoordinates=function(t){var i=this.pointCoordinate(new Point(0,0),0),o=this.pointCoordinate(new Point(this.width,0),0),e=Math.floor(i.column),r=Math.floor(o.column),n=[new UnwrappedTileID(0,t)];if(this._renderWorldCopies)for(var s=e;s<=r;s++)0!==s&&n.push(new UnwrappedTileID(s,t));return n},Transform.prototype.coveringTiles=function(t){var i=this.coveringZoomLevel(t),o=i;if(void 0!==t.minzoom&&i<t.minzoom)return[];void 0!==t.maxzoom&&i>t.maxzoom&&(i=t.maxzoom);var e=this.pointCoordinate(this.centerPoint,i),r=new Point(e.column-.5,e.row-.5),n=[this.pointCoordinate(new Point(0,0),i),this.pointCoordinate(new Point(this.width,0),i),this.pointCoordinate(new Point(this.width,this.height),i),this.pointCoordinate(new Point(0,this.height),i)];return tileCover(i,n,t.reparseOverscaled?o:i,this._renderWorldCopies).sort(function(t,i){return r.dist(t.canonical)-r.dist(i.canonical)})},Transform.prototype.resize=function(t,i){this.width=t,this.height=i,this.pixelsToGLUnits=[2/t,-2/i],this._constrain(),this._calcMatrices()},prototypeAccessors.unmodified.get=function(){return this._unmodified},Transform.prototype.zoomScale=function(t){return Math.pow(2,t)},Transform.prototype.scaleZoom=function(t){return Math.log(t)/Math.LN2},Transform.prototype.project=function(t){return new Point(this.lngX(t.lng),this.latY(t.lat))},Transform.prototype.unproject=function(t){return new LngLat(this.xLng(t.x),this.yLat(t.y))},prototypeAccessors.x.get=function(){return this.lngX(this.center.lng)},prototypeAccessors.y.get=function(){return this.latY(this.center.lat)},prototypeAccessors.point.get=function(){return new Point(this.x,this.y)},Transform.prototype.lngX=function(t){return(180+t)*this.worldSize/360},Transform.prototype.latY=function(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))*this.worldSize/360},Transform.prototype.xLng=function(t){return 360*t/this.worldSize-180},Transform.prototype.yLat=function(t){var i=180-360*t/this.worldSize;return 360/Math.PI*Math.atan(Math.exp(i*Math.PI/180))-90},Transform.prototype.setLocationAtPoint=function(t,i){var o=this.pointCoordinate(i)._sub(this.pointCoordinate(this.centerPoint));this.center=this.coordinateLocation(this.locationCoordinate(t)._sub(o)),this._renderWorldCopies&&(this.center=this.center.wrap())},Transform.prototype.locationPoint=function(t){return this.coordinatePoint(this.locationCoordinate(t))},Transform.prototype.pointLocation=function(t){return this.coordinateLocation(this.pointCoordinate(t))},Transform.prototype.locationCoordinate=function(t){return new Coordinate(this.lngX(t.lng)/this.tileSize,this.latY(t.lat)/this.tileSize,this.zoom).zoomTo(this.tileZoom)},Transform.prototype.coordinateLocation=function(t){var i=t.zoomTo(this.zoom);return new LngLat(this.xLng(i.column*this.tileSize),this.yLat(i.row*this.tileSize))},Transform.prototype.pointCoordinate=function(t,i){void 0===i&&(i=this.tileZoom);var o=[t.x,t.y,0,1],e=[t.x,t.y,1,1];vec4.transformMat4(o,o,this.pixelMatrixInverse),vec4.transformMat4(e,e,this.pixelMatrixInverse);var r=o[3],n=e[3],s=o[0]/r,a=e[0]/n,h=o[1]/r,c=e[1]/n,l=o[2]/r,m=e[2]/n,p=l===m?0:(0-l)/(m-l);return new Coordinate(interp(s,a,p)/this.tileSize,interp(h,c,p)/this.tileSize,this.zoom)._zoomTo(i)},Transform.prototype.coordinatePoint=function(t){var i=t.zoomTo(this.zoom),o=[i.column*this.tileSize,i.row*this.tileSize,0,1];return vec4.transformMat4(o,o,this.pixelMatrix),new Point(o[0]/o[3],o[1]/o[3])},Transform.prototype.calculatePosMatrix=function(t,i){void 0===i&&(i=!1);var o=t.key,e=i?this._alignedPosMatrixCache:this._posMatrixCache;if(e[o])return e[o];var r=t.canonical,n=this.worldSize/this.zoomScale(r.z),s=r.x+Math.pow(2,r.z)*t.wrap,a=mat4.identity(new Float64Array(16));return mat4.translate(a,a,[s*n,r.y*n,0]),mat4.scale(a,a,[n/EXTENT,n/EXTENT,1]),mat4.multiply(a,i?this.alignedProjMatrix:this.projMatrix,a),e[o]=new Float32Array(a),e[o]},Transform.prototype._constrain=function(){if(this.center&&this.width&&this.height&&!this._constraining){this._constraining=!0;var t,i,o,e,r=-90,n=90,s=-180,a=180,h=this.size,c=this._unmodified;if(this.latRange){var l=this.latRange;r=this.latY(l[1]),n=this.latY(l[0]),t=n-r<h.y?h.y/(n-r):0}if(this.lngRange){var m=this.lngRange;s=this.lngX(m[0]),a=this.lngX(m[1]),i=a-s<h.x?h.x/(a-s):0}var p=Math.max(i||0,t||0);if(p)return this.center=this.unproject(new Point(i?(a+s)/2:this.x,t?(n+r)/2:this.y)),this.zoom+=this.scaleZoom(p),this._unmodified=c,void(this._constraining=!1);if(this.latRange){var u=this.y,f=h.y/2;u-f<r&&(e=r+f),u+f>n&&(e=n-f)}if(this.lngRange){var d=this.x,g=h.x/2;d-g<s&&(o=s+g),d+g>a&&(o=a-g)}void 0===o&&void 0===e||(this.center=this.unproject(new Point(void 0!==o?o:this.x,void 0!==e?e:this.y))),this._unmodified=c,this._constraining=!1}},Transform.prototype._calcMatrices=function(){if(this.height){this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height;var t=this._fov/2,i=Math.PI/2+this._pitch,o=Math.sin(t)*this.cameraToCenterDistance/Math.sin(Math.PI-i-t),e=this.x,r=this.y,n=Math.cos(Math.PI/2-this._pitch)*o+this.cameraToCenterDistance,s=1.01*n,a=new Float64Array(16);mat4.perspective(a,this._fov,this.width/this.height,1,s),mat4.scale(a,a,[1,-1,1]),mat4.translate(a,a,[0,0,-this.cameraToCenterDistance]),mat4.rotateX(a,a,this._pitch),mat4.rotateZ(a,a,this.angle),mat4.translate(a,a,[-e,-r,0]);var h=this.worldSize/(2*Math.PI*6378137*Math.abs(Math.cos(this.center.lat*(Math.PI/180))));mat4.scale(a,a,[1,1,h,1]),this.projMatrix=a;var c=this.width%2/2,l=this.height%2/2,m=Math.cos(this.angle),p=Math.sin(this.angle),u=e-Math.round(e)+m*c+p*l,f=r-Math.round(r)+m*l+p*c,d=new Float64Array(a);if(mat4.translate(d,d,[u>.5?u-1:u,f>.5?f-1:f,0]),this.alignedProjMatrix=d,a=mat4.create(),mat4.scale(a,a,[this.width/2,-this.height/2,1]),mat4.translate(a,a,[1,-1,0]),this.pixelMatrix=mat4.multiply(new Float64Array(16),a,this.projMatrix),!(a=mat4.invert(new Float64Array(16),this.pixelMatrix)))throw new Error("failed to invert matrix");this.pixelMatrixInverse=a,this._posMatrixCache={},this._alignedPosMatrixCache={}}},Object.defineProperties(Transform.prototype,prototypeAccessors),module.exports=Transform;
},{"../data/extent":53,"../source/tile_id":114,"../style-spec/util/interpolate":158,"../util/tile_cover":273,"../util/util":275,"./coordinate":61,"./lng_lat":62,"@mapbox/gl-matrix":2,"@mapbox/point-geometry":4}],65:[function(_dereq_,module,exports){
"use strict";var Color=_dereq_("../style-spec/util/color"),ZERO=0,ONE=1,ONE_MINUS_SRC_ALPHA=771,ColorMode=function(o,e,l){this.blendFunction=o,this.blendColor=e,this.mask=l};ColorMode.Replace=[ONE,ZERO],ColorMode.disabled=new ColorMode(ColorMode.Replace,Color.transparent,[!1,!1,!1,!1]),ColorMode.unblended=new ColorMode(ColorMode.Replace,Color.transparent,[!0,!0,!0,!0]),ColorMode.alphaBlended=new ColorMode([ONE,ONE_MINUS_SRC_ALPHA],Color.transparent,[!0,!0,!0,!0]),module.exports=ColorMode;
},{"../style-spec/util/color":153}],66:[function(_dereq_,module,exports){
"use strict";var IndexBuffer=_dereq_("./index_buffer"),VertexBuffer=_dereq_("./vertex_buffer"),Framebuffer=_dereq_("./framebuffer"),DepthMode=_dereq_("./depth_mode"),StencilMode=_dereq_("./stencil_mode"),ColorMode=_dereq_("./color_mode"),util=_dereq_("../util/util"),ref=_dereq_("./value"),ClearColor=ref.ClearColor,ClearDepth=ref.ClearDepth,ClearStencil=ref.ClearStencil,ColorMask=ref.ColorMask,DepthMask=ref.DepthMask,StencilMask=ref.StencilMask,StencilFunc=ref.StencilFunc,StencilOp=ref.StencilOp,StencilTest=ref.StencilTest,DepthRange=ref.DepthRange,DepthTest=ref.DepthTest,DepthFunc=ref.DepthFunc,Blend=ref.Blend,BlendFunc=ref.BlendFunc,BlendColor=ref.BlendColor,Program=ref.Program,LineWidth=ref.LineWidth,ActiveTextureUnit=ref.ActiveTextureUnit,Viewport=ref.Viewport,BindFramebuffer=ref.BindFramebuffer,BindRenderbuffer=ref.BindRenderbuffer,BindTexture=ref.BindTexture,BindVertexBuffer=ref.BindVertexBuffer,BindElementBuffer=ref.BindElementBuffer,BindVertexArrayOES=ref.BindVertexArrayOES,PixelStoreUnpack=ref.PixelStoreUnpack,PixelStoreUnpackPremultiplyAlpha=ref.PixelStoreUnpackPremultiplyAlpha,Context=function(e){this.gl=e,this.extVertexArrayObject=this.gl.getExtension("OES_vertex_array_object"),this.lineWidthRange=e.getParameter(e.ALIASED_LINE_WIDTH_RANGE),this.clearColor=new ClearColor(this),this.clearDepth=new ClearDepth(this),this.clearStencil=new ClearStencil(this),this.colorMask=new ColorMask(this),this.depthMask=new DepthMask(this),this.stencilMask=new StencilMask(this),this.stencilFunc=new StencilFunc(this),this.stencilOp=new StencilOp(this),this.stencilTest=new StencilTest(this),this.depthRange=new DepthRange(this),this.depthTest=new DepthTest(this),this.depthFunc=new DepthFunc(this),this.blend=new Blend(this),this.blendFunc=new BlendFunc(this),this.blendColor=new BlendColor(this),this.program=new Program(this),this.lineWidth=new LineWidth(this),this.activeTexture=new ActiveTextureUnit(this),this.viewport=new Viewport(this),this.bindFramebuffer=new BindFramebuffer(this),this.bindRenderbuffer=new BindRenderbuffer(this),this.bindTexture=new BindTexture(this),this.bindVertexBuffer=new BindVertexBuffer(this),this.bindElementBuffer=new BindElementBuffer(this),this.bindVertexArrayOES=this.extVertexArrayObject&&new BindVertexArrayOES(this),this.pixelStoreUnpack=new PixelStoreUnpack(this),this.pixelStoreUnpackPremultiplyAlpha=new PixelStoreUnpackPremultiplyAlpha(this),this.extTextureFilterAnisotropic=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=e.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.extTextureHalfFloat=e.getExtension("OES_texture_half_float"),this.extTextureHalfFloat&&e.getExtension("OES_texture_half_float_linear")};Context.prototype.createIndexBuffer=function(e,t){return new IndexBuffer(this,e,t)},Context.prototype.createVertexBuffer=function(e,t,r){return new VertexBuffer(this,e,t,r)},Context.prototype.createRenderbuffer=function(e,t,r){var i=this.gl,n=i.createRenderbuffer();return this.bindRenderbuffer.set(n),i.renderbufferStorage(i.RENDERBUFFER,e,t,r),this.bindRenderbuffer.set(null),n},Context.prototype.createFramebuffer=function(e,t){return new Framebuffer(this,e,t)},Context.prototype.clear=function(e){var t=e.color,r=e.depth,i=this.gl,n=0;t&&(n|=i.COLOR_BUFFER_BIT,this.clearColor.set(t),this.colorMask.set([!0,!0,!0,!0])),void 0!==r&&(n|=i.DEPTH_BUFFER_BIT,this.clearDepth.set(r),this.depthMask.set(!0)),i.clear(n)},Context.prototype.setDepthMode=function(e){e.func!==this.gl.ALWAYS||e.mask?(this.depthTest.set(!0),this.depthFunc.set(e.func),this.depthMask.set(e.mask),this.depthRange.set(e.range)):this.depthTest.set(!1)},Context.prototype.setStencilMode=function(e){e.func!==this.gl.ALWAYS||e.mask?(this.stencilTest.set(!0),this.stencilMask.set(e.mask),this.stencilOp.set([e.fail,e.depthFail,e.pass]),this.stencilFunc.set({func:e.test.func,ref:e.ref,mask:e.test.mask})):this.stencilTest.set(!1)},Context.prototype.setColorMode=function(e){util.deepEqual(e.blendFunction,ColorMode.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(e.blendFunction),this.blendColor.set(e.blendColor)),this.colorMask.set(e.mask)},module.exports=Context;
},{"../util/util":275,"./color_mode":65,"./depth_mode":67,"./framebuffer":68,"./index_buffer":69,"./stencil_mode":70,"./value":71,"./vertex_buffer":72}],67:[function(_dereq_,module,exports){
"use strict";var ALWAYS=519,DepthMode=function(e,t,d){this.func=e,this.mask=t,this.range=d};DepthMode.ReadOnly=!1,DepthMode.ReadWrite=!0,DepthMode.disabled=new DepthMode(ALWAYS,DepthMode.ReadOnly,[0,1]),module.exports=DepthMode;
},{}],68:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("./value"),ColorAttachment=ref.ColorAttachment,DepthAttachment=ref.DepthAttachment,Framebuffer=function(t,e,r){this.context=t,this.width=e,this.height=r;var h=t.gl,a=this.framebuffer=h.createFramebuffer();this.colorAttachment=new ColorAttachment(t,a),this.depthAttachment=new DepthAttachment(t,a)};Framebuffer.prototype.destroy=function(){var t=this.context.gl,e=this.colorAttachment.get();e&&t.deleteTexture(e);var r=this.depthAttachment.get();r&&t.deleteRenderbuffer(r),t.deleteFramebuffer(this.framebuffer)},module.exports=Framebuffer;
},{"./value":71}],69:[function(_dereq_,module,exports){
"use strict";var IndexBuffer=function(e,t,r){this.context=e;var f=e.gl;this.buffer=f.createBuffer(),this.dynamicDraw=Boolean(r),this.unbindVAO(),e.bindElementBuffer.set(this.buffer),f.bufferData(f.ELEMENT_ARRAY_BUFFER,t.arrayBuffer,this.dynamicDraw?f.DYNAMIC_DRAW:f.STATIC_DRAW),this.dynamicDraw||delete t.arrayBuffer};IndexBuffer.prototype.unbindVAO=function(){this.context.extVertexArrayObject&&this.context.bindVertexArrayOES.set(null)},IndexBuffer.prototype.bind=function(){this.context.bindElementBuffer.set(this.buffer)},IndexBuffer.prototype.updateData=function(e){var t=this.context.gl;this.unbindVAO(),this.bind(),t.bufferSubData(t.ELEMENT_ARRAY_BUFFER,0,e.arrayBuffer)},IndexBuffer.prototype.destroy=function(){var e=this.context.gl;this.buffer&&(e.deleteBuffer(this.buffer),delete this.buffer)},module.exports=IndexBuffer;
},{}],70:[function(_dereq_,module,exports){
"use strict";var ALWAYS=519,KEEP=7680,StencilMode=function(t,e,i,s,d,l){this.test=t,this.ref=e,this.mask=i,this.fail=s,this.depthFail=d,this.pass=l};StencilMode.disabled=new StencilMode({func:ALWAYS,mask:0},0,0,KEEP,KEEP,KEEP),module.exports=StencilMode;
},{}],71:[function(_dereq_,module,exports){
"use strict";var Color=_dereq_("../style-spec/util/color"),util=_dereq_("../util/util"),ClearColor=function(t){this.context=t,this.current=Color.transparent};ClearColor.prototype.get=function(){return this.current},ClearColor.prototype.set=function(t){var e=this.current;t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a||(this.context.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t)};var ClearDepth=function(t){this.context=t,this.current=1};ClearDepth.prototype.get=function(){return this.current},ClearDepth.prototype.set=function(t){this.current!==t&&(this.context.gl.clearDepth(t),this.current=t)};var ClearStencil=function(t){this.context=t,this.current=0};ClearStencil.prototype.get=function(){return this.current},ClearStencil.prototype.set=function(t){this.current!==t&&(this.context.gl.clearStencil(t),this.current=t)};var ColorMask=function(t){this.context=t,this.current=[!0,!0,!0,!0]};ColorMask.prototype.get=function(){return this.current},ColorMask.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]||(this.context.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t)};var DepthMask=function(t){this.context=t,this.current=!0};DepthMask.prototype.get=function(){return this.current},DepthMask.prototype.set=function(t){this.current!==t&&(this.context.gl.depthMask(t),this.current=t)};var StencilMask=function(t){this.context=t,this.current=255};StencilMask.prototype.get=function(){return this.current},StencilMask.prototype.set=function(t){this.current!==t&&(this.context.gl.stencilMask(t),this.current=t)};var StencilFunc=function(t){this.context=t,this.current={func:t.gl.ALWAYS,ref:0,mask:255}};StencilFunc.prototype.get=function(){return this.current},StencilFunc.prototype.set=function(t){var e=this.current;t.func===e.func&&t.ref===e.ref&&t.mask===e.mask||(this.context.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t)};var StencilOp=function(t){this.context=t;var e=this.context.gl;this.current=[e.KEEP,e.KEEP,e.KEEP]};StencilOp.prototype.get=function(){return this.current},StencilOp.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]||(this.context.gl.stencilOp(t[0],t[1],t[2]),this.current=t)};var StencilTest=function(t){this.context=t,this.current=!1};StencilTest.prototype.get=function(){return this.current},StencilTest.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t}};var DepthRange=function(t){this.context=t,this.current=[0,1]};DepthRange.prototype.get=function(){return this.current},DepthRange.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]||(this.context.gl.depthRange(t[0],t[1]),this.current=t)};var DepthTest=function(t){this.context=t,this.current=!1};DepthTest.prototype.get=function(){return this.current},DepthTest.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t}};var DepthFunc=function(t){this.context=t,this.current=t.gl.LESS};DepthFunc.prototype.get=function(){return this.current},DepthFunc.prototype.set=function(t){this.current!==t&&(this.context.gl.depthFunc(t),this.current=t)};var Blend=function(t){this.context=t,this.current=!1};Blend.prototype.get=function(){return this.current},Blend.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t}};var BlendFunc=function(t){this.context=t;var e=this.context.gl;this.current=[e.ONE,e.ZERO]};BlendFunc.prototype.get=function(){return this.current},BlendFunc.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]||(this.context.gl.blendFunc(t[0],t[1]),this.current=t)};var BlendColor=function(t){this.context=t,this.current=Color.transparent};BlendColor.prototype.get=function(){return this.current},BlendColor.prototype.set=function(t){var e=this.current;t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a||(this.context.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t)};var Program=function(t){this.context=t,this.current=null};Program.prototype.get=function(){return this.current},Program.prototype.set=function(t){this.current!==t&&(this.context.gl.useProgram(t),this.current=t)};var LineWidth=function(t){this.context=t,this.current=1};LineWidth.prototype.get=function(){return this.current},LineWidth.prototype.set=function(t){var e=this.context.lineWidthRange,r=util.clamp(t,e[0],e[1]);this.current!==r&&(this.context.gl.lineWidth(r),this.current=t)};var ActiveTextureUnit=function(t){this.context=t,this.current=t.gl.TEXTURE0};ActiveTextureUnit.prototype.get=function(){return this.current},ActiveTextureUnit.prototype.set=function(t){this.current!==t&&(this.context.gl.activeTexture(t),this.current=t)};var Viewport=function(t){this.context=t;var e=this.context.gl;this.current=[0,0,e.drawingBufferWidth,e.drawingBufferHeight]};Viewport.prototype.get=function(){return this.current},Viewport.prototype.set=function(t){var e=this.current;t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]||(this.context.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t)};var BindFramebuffer=function(t){this.context=t,this.current=null};BindFramebuffer.prototype.get=function(){return this.current},BindFramebuffer.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t}};var BindRenderbuffer=function(t){this.context=t,this.current=null};BindRenderbuffer.prototype.get=function(){return this.current},BindRenderbuffer.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t}};var BindTexture=function(t){this.context=t,this.current=null};BindTexture.prototype.get=function(){return this.current},BindTexture.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindTexture(e.TEXTURE_2D,t),this.current=t}};var BindVertexBuffer=function(t){this.context=t,this.current=null};BindVertexBuffer.prototype.get=function(){return this.current},BindVertexBuffer.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t}};var BindElementBuffer=function(t){this.context=t,this.current=null};BindElementBuffer.prototype.get=function(){return this.current},BindElementBuffer.prototype.set=function(t){var e=this.context.gl;e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t};var BindVertexArrayOES=function(t){this.context=t,this.current=null};BindVertexArrayOES.prototype.get=function(){return this.current},BindVertexArrayOES.prototype.set=function(t){this.current!==t&&this.context.extVertexArrayObject&&(this.context.extVertexArrayObject.bindVertexArrayOES(t),this.current=t)};var PixelStoreUnpack=function(t){this.context=t,this.current=4};PixelStoreUnpack.prototype.get=function(){return this.current},PixelStoreUnpack.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t}};var PixelStoreUnpackPremultiplyAlpha=function(t){this.context=t,this.current=!1};PixelStoreUnpackPremultiplyAlpha.prototype.get=function(){return this.current},PixelStoreUnpackPremultiplyAlpha.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t}};var FramebufferValue=function(t,e){this.context=t,this.current=null,this.parent=e};FramebufferValue.prototype.get=function(){return this.current};var ColorAttachment=function(t){function e(e,r){t.call(this,e,r),this.dirty=!1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(this.dirty||this.current!==t){var e=this.context.gl;this.context.bindFramebuffer.set(this.parent),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1}},e.prototype.setDirty=function(){this.dirty=!0},e}(FramebufferValue),DepthAttachment=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.set=function(t){if(this.current!==t){var e=this.context.gl;this.context.bindFramebuffer.set(this.parent),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t}},e}(FramebufferValue);module.exports={ClearColor:ClearColor,ClearDepth:ClearDepth,ClearStencil:ClearStencil,ColorMask:ColorMask,DepthMask:DepthMask,StencilMask:StencilMask,StencilFunc:StencilFunc,StencilOp:StencilOp,StencilTest:StencilTest,DepthRange:DepthRange,DepthTest:DepthTest,DepthFunc:DepthFunc,Blend:Blend,BlendFunc:BlendFunc,BlendColor:BlendColor,Program:Program,LineWidth:LineWidth,ActiveTextureUnit:ActiveTextureUnit,Viewport:Viewport,BindFramebuffer:BindFramebuffer,BindRenderbuffer:BindRenderbuffer,BindTexture:BindTexture,BindVertexBuffer:BindVertexBuffer,BindElementBuffer:BindElementBuffer,BindVertexArrayOES:BindVertexArrayOES,PixelStoreUnpack:PixelStoreUnpack,PixelStoreUnpackPremultiplyAlpha:PixelStoreUnpackPremultiplyAlpha,ColorAttachment:ColorAttachment,DepthAttachment:DepthAttachment};
},{"../style-spec/util/color":153,"../util/util":275}],72:[function(_dereq_,module,exports){
"use strict";var AttributeType={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"},VertexBuffer=function(t,e,r,i){this.length=e.length,this.attributes=r,this.itemSize=e.bytesPerElement,this.dynamicDraw=i,this.context=t;var f=t.gl;this.buffer=f.createBuffer(),t.bindVertexBuffer.set(this.buffer),f.bufferData(f.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?f.DYNAMIC_DRAW:f.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer};VertexBuffer.prototype.bind=function(){this.context.bindVertexBuffer.set(this.buffer)},VertexBuffer.prototype.updateData=function(t){var e=this.context.gl;this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer)},VertexBuffer.prototype.enableAttributes=function(t,e){for(var r=this,i=0;i<this.attributes.length;i++){var f=r.attributes[i],n=e.attributes[f.name];void 0!==n&&t.enableVertexAttribArray(n)}},VertexBuffer.prototype.setVertexAttribPointers=function(t,e,r){for(var i=this,f=0;f<this.attributes.length;f++){var n=i.attributes[f],u=e.attributes[n.name];void 0!==u&&t.vertexAttribPointer(u,n.components,t[AttributeType[n.type]],!1,i.itemSize,n.offset+i.itemSize*(r||0))}},VertexBuffer.prototype.destroy=function(){var t=this.context.gl;this.buffer&&(t.deleteBuffer(this.buffer),delete this.buffer)},module.exports=VertexBuffer;
},{}],73:[function(_dereq_,module,exports){
"use strict";var supported=_dereq_("@mapbox/mapbox-gl-supported"),browser=_dereq_("./util/browser"),version=_dereq_("../package.json").version,Map=_dereq_("./ui/map"),NavigationControl=_dereq_("./ui/control/navigation_control"),GeolocateControl=_dereq_("./ui/control/geolocate_control"),AttributionControl=_dereq_("./ui/control/attribution_control"),ScaleControl=_dereq_("./ui/control/scale_control"),FullscreenControl=_dereq_("./ui/control/fullscreen_control"),Popup=_dereq_("./ui/popup"),Marker=_dereq_("./ui/marker"),Style=_dereq_("./style/style"),LngLat=_dereq_("./geo/lng_lat"),LngLatBounds=_dereq_("./geo/lng_lat_bounds"),Point=_dereq_("@mapbox/point-geometry"),Evented=_dereq_("./util/evented"),config=_dereq_("./util/config"),rtlTextPlugin=_dereq_("./source/rtl_text_plugin");module.exports={version:version,supported:supported,workerCount:Math.max(Math.floor(browser.hardwareConcurrency/2),1),setRTLTextPlugin:rtlTextPlugin.setRTLTextPlugin,Map:Map,NavigationControl:NavigationControl,GeolocateControl:GeolocateControl,AttributionControl:AttributionControl,ScaleControl:ScaleControl,FullscreenControl:FullscreenControl,Popup:Popup,Marker:Marker,Style:Style,LngLat:LngLat,LngLatBounds:LngLatBounds,Point:Point,Evented:Evented,config:config,get accessToken(){return config.ACCESS_TOKEN},set accessToken(o){config.ACCESS_TOKEN=o}};
},{"../package.json":38,"./geo/lng_lat":62,"./geo/lng_lat_bounds":63,"./source/rtl_text_plugin":109,"./style/style":190,"./ui/control/attribution_control":232,"./ui/control/fullscreen_control":233,"./ui/control/geolocate_control":234,"./ui/control/navigation_control":236,"./ui/control/scale_control":237,"./ui/map":247,"./ui/marker":248,"./ui/popup":249,"./util/browser":252,"./util/config":256,"./util/evented":260,"@mapbox/mapbox-gl-supported":3,"@mapbox/point-geometry":4}],74:[function(_dereq_,module,exports){
"use strict";function drawBackground(e,t,r){var a=r.paint.get("background-color"),n=r.paint.get("background-opacity");if(0!==n){var o=e.context,i=o.gl,d=e.transform,u=d.tileSize,l=r.paint.get("background-pattern"),s=l||1!==a.a||1!==n?"translucent":"opaque";if(e.renderPass===s){o.setStencilMode(StencilMode.disabled),o.setDepthMode(e.depthModeForSublayer(0,"opaque"===s?DepthMode.ReadWrite:DepthMode.ReadOnly)),o.setColorMode(e.colorModeForRenderPass());var p;if(l){if(pattern.isPatternMissing(l,e))return;p=e.useProgram("backgroundPattern"),pattern.prepare(l,e,p),e.tileExtentPatternVAO.bind(o,p,e.tileExtentBuffer,[])}else p=e.useProgram("background"),i.uniform4fv(p.uniforms.u_color,[a.r,a.g,a.b,a.a]),e.tileExtentVAO.bind(o,p,e.tileExtentBuffer,[]);i.uniform1f(p.uniforms.u_opacity,n);for(var c=d.coveringTiles({tileSize:u}),f=0,g=c;f<g.length;f+=1){var m=g[f];l&&pattern.setTile({tileID:m,tileSize:u},e,p),i.uniformMatrix4fv(p.uniforms.u_matrix,!1,e.transform.calculatePosMatrix(m.toUnwrapped())),i.drawArrays(i.TRIANGLE_STRIP,0,e.tileExtentBuffer.length)}}}}var pattern=_dereq_("./pattern"),StencilMode=_dereq_("../gl/stencil_mode"),DepthMode=_dereq_("../gl/depth_mode");module.exports=drawBackground;
},{"../gl/depth_mode":67,"../gl/stencil_mode":70,"./pattern":91}],75:[function(_dereq_,module,exports){
"use strict";function drawCircles(e,t,r,i){if("translucent"===e.renderPass){var o=r.paint.get("circle-opacity"),a=r.paint.get("circle-stroke-width"),n=r.paint.get("circle-stroke-opacity");if(0!==o.constantOr(1)||0!==a.constantOr(1)&&0!==n.constantOr(1)){var s=e.context,c=s.gl;s.setDepthMode(e.depthModeForSublayer(0,DepthMode.ReadOnly)),s.setStencilMode(StencilMode.disabled),s.setColorMode(e.colorModeForRenderPass());for(var l=!0,m=0;m<i.length;m++){var u=i[m],f=t.getTile(u),p=f.getBucket(r);if(p){var d=e.context.program.get(),_=p.programConfigurations.get(r.id),g=e.useProgram("circle",_);if((l||g.program!==d)&&(_.setUniforms(s,g,r.paint,{zoom:e.transform.zoom}),l=!1),c.uniform1f(g.uniforms.u_camera_to_center_distance,e.transform.cameraToCenterDistance),c.uniform1i(g.uniforms.u_scale_with_map,"map"===r.paint.get("circle-pitch-scale")?1:0),"map"===r.paint.get("circle-pitch-alignment")){c.uniform1i(g.uniforms.u_pitch_with_map,1);var h=pixelsToTileUnits(f,1,e.transform.zoom);c.uniform2f(g.uniforms.u_extrude_scale,h,h)}else c.uniform1i(g.uniforms.u_pitch_with_map,0),c.uniform2fv(g.uniforms.u_extrude_scale,e.transform.pixelsToGLUnits);c.uniformMatrix4fv(g.uniforms.u_matrix,!1,e.translatePosMatrix(u.posMatrix,f,r.paint.get("circle-translate"),r.paint.get("circle-translate-anchor"))),g.draw(s,c.TRIANGLES,r.id,p.layoutVertexBuffer,p.indexBuffer,p.segments,_)}}}}}var pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),StencilMode=_dereq_("../gl/stencil_mode"),DepthMode=_dereq_("../gl/depth_mode");module.exports=drawCircles;
},{"../gl/depth_mode":67,"../gl/stencil_mode":70,"../source/pixels_to_tile_units":104}],76:[function(_dereq_,module,exports){
"use strict";function drawCollisionDebugGeometry(e,o,i,r,t){var l=e.context,s=l.gl,n=t?e.useProgram("collisionCircle"):e.useProgram("collisionBox");l.setDepthMode(DepthMode.disabled),l.setStencilMode(StencilMode.disabled),l.setColorMode(e.colorModeForRenderPass());for(var u=0;u<r.length;u++){var a=r[u],d=o.getTile(a),f=d.getBucket(i);if(f){var m=t?f.collisionCircle:f.collisionBox;if(m){s.uniformMatrix4fv(n.uniforms.u_matrix,!1,a.posMatrix),t||l.lineWidth.set(1),s.uniform1f(n.uniforms.u_camera_to_center_distance,e.transform.cameraToCenterDistance);var c=pixelsToTileUnits(d,1,e.transform.zoom),x=Math.pow(2,e.transform.zoom-d.tileID.overscaledZ);s.uniform1f(n.uniforms.u_pixels_to_tile_units,c),s.uniform2f(n.uniforms.u_extrude_scale,e.transform.pixelsToGLUnits[0]/(c*x),e.transform.pixelsToGLUnits[1]/(c*x)),n.draw(l,t?s.TRIANGLES:s.LINES,i.id,m.layoutVertexBuffer,m.indexBuffer,m.segments,null,m.collisionVertexBuffer,null)}}}}function drawCollisionDebug(e,o,i,r){drawCollisionDebugGeometry(e,o,i,r,!1),drawCollisionDebugGeometry(e,o,i,r,!0)}var pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),DepthMode=_dereq_("../gl/depth_mode"),StencilMode=_dereq_("../gl/stencil_mode");module.exports=drawCollisionDebug;
},{"../gl/depth_mode":67,"../gl/stencil_mode":70,"../source/pixels_to_tile_units":104}],77:[function(_dereq_,module,exports){
"use strict";function drawDebug(e,r,t){for(var o=0;o<t.length;o++)drawDebugTile(e,r,t[o])}function drawDebugTile(e,r,t){var o=e.context,a=o.gl;o.lineWidth.set(1*browser.devicePixelRatio);var i=t.posMatrix,u=e.useProgram("debug");o.setDepthMode(DepthMode.disabled),o.setStencilMode(StencilMode.disabled),o.setColorMode(e.colorModeForRenderPass()),a.uniformMatrix4fv(u.uniforms.u_matrix,!1,i),a.uniform4f(u.uniforms.u_color,1,0,0,1),e.debugVAO.bind(o,u,e.debugBuffer,[]),a.drawArrays(a.LINE_STRIP,0,e.debugBuffer.length);for(var n=createTextVerticies(t.toString(),50,200,5),s=new PosArray,l=0;l<n.length;l+=2)s.emplaceBack(n[l],n[l+1]);var d=o.createVertexBuffer(s,posAttributes.members);(new VertexArrayObject).bind(o,u,d,[]),a.uniform4f(u.uniforms.u_color,1,1,1,1);for(var f=r.getTile(t).tileSize,m=EXTENT/(Math.pow(2,e.transform.zoom-t.overscaledZ)*f),c=[[-1,-1],[-1,1],[1,-1],[1,1]],b=0;b<c.length;b++){var g=c[b];a.uniformMatrix4fv(u.uniforms.u_matrix,!1,mat4.translate([],i,[m*g[0],m*g[1],0])),a.drawArrays(a.LINES,0,d.length)}a.uniform4f(u.uniforms.u_color,0,0,0,1),a.uniformMatrix4fv(u.uniforms.u_matrix,!1,i),a.drawArrays(a.LINES,0,d.length)}function createTextVerticies(e,r,t,o){o=o||1;var a,i,u,n,s,l,d,f,m=[];for(a=0,i=e.length;a<i;a++)if(s=simplexFont[e[a]]){for(f=null,u=0,n=s[1].length;u<n;u+=2)-1===s[1][u]&&-1===s[1][u+1]?f=null:(l=r+s[1][u]*o,d=t-s[1][u+1]*o,f&&m.push(f.x,f.y,l,d),f={x:l,y:d});r+=s[0]*o}return m}var browser=_dereq_("../util/browser"),mat4=_dereq_("@mapbox/gl-matrix").mat4,EXTENT=_dereq_("../data/extent"),VertexArrayObject=_dereq_("./vertex_array_object"),ref=_dereq_("../data/array_types"),PosArray=ref.PosArray,posAttributes=_dereq_("../data/pos_attributes"),DepthMode=_dereq_("../gl/depth_mode"),StencilMode=_dereq_("../gl/stencil_mode");module.exports=drawDebug;var simplexFont={" ":[16,[]],"!":[10,[5,21,5,7,-1,-1,5,2,4,1,5,0,6,1,5,2]],'"':[16,[4,21,4,14,-1,-1,12,21,12,14]],"#":[21,[11,25,4,-7,-1,-1,17,25,10,-7,-1,-1,4,12,18,12,-1,-1,3,6,17,6]],$:[20,[8,25,8,-4,-1,-1,12,25,12,-4,-1,-1,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],"%":[24,[21,21,3,0,-1,-1,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,-1,-1,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7]],"&":[26,[23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2]],"'":[10,[5,19,4,20,5,21,6,20,6,18,5,16,4,15]],"(":[14,[11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7]],")":[14,[3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7]],"*":[16,[8,21,8,9,-1,-1,3,18,13,12,-1,-1,13,18,3,12]],"+":[26,[13,18,13,0,-1,-1,4,9,22,9]],",":[10,[6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"-":[26,[4,9,22,9]],".":[10,[5,2,4,1,5,0,6,1,5,2]],"/":[22,[20,25,2,-7]],0:[20,[9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21]],1:[20,[6,17,8,18,11,21,11,0]],2:[20,[4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0]],3:[20,[5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],4:[20,[13,21,3,7,18,7,-1,-1,13,21,13,0]],5:[20,[15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4]],6:[20,[16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7]],7:[20,[17,21,7,0,-1,-1,3,21,17,21]],8:[20,[8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21]],9:[20,[16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3]],":":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,5,2,4,1,5,0,6,1,5,2]],";":[10,[5,14,4,13,5,12,6,13,5,14,-1,-1,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4]],"<":[24,[20,18,4,9,20,0]],"=":[26,[4,12,22,12,-1,-1,4,6,22,6]],">":[24,[4,18,20,9,4,0]],"?":[18,[3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,-1,-1,9,2,8,1,9,0,10,1,9,2]],"@":[27,[18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,-1,-1,12,16,10,14,9,11,9,8,10,6,11,5,-1,-1,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,-1,-1,19,16,18,8,18,6,19,5]],A:[18,[9,21,1,0,-1,-1,9,21,17,0,-1,-1,4,7,14,7]],B:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,-1,-1,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0]],C:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5]],D:[21,[4,21,4,0,-1,-1,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0]],E:[19,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11,-1,-1,4,0,17,0]],F:[18,[4,21,4,0,-1,-1,4,21,17,21,-1,-1,4,11,12,11]],G:[21,[18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,-1,-1,13,8,18,8]],H:[22,[4,21,4,0,-1,-1,18,21,18,0,-1,-1,4,11,18,11]],I:[8,[4,21,4,0]],J:[16,[12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7]],K:[21,[4,21,4,0,-1,-1,18,21,4,7,-1,-1,9,12,18,0]],L:[17,[4,21,4,0,-1,-1,4,0,16,0]],M:[24,[4,21,4,0,-1,-1,4,21,12,0,-1,-1,20,21,12,0,-1,-1,20,21,20,0]],N:[22,[4,21,4,0,-1,-1,4,21,18,0,-1,-1,18,21,18,0]],O:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21]],P:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10]],Q:[22,[9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,-1,-1,12,4,18,-2]],R:[21,[4,21,4,0,-1,-1,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,-1,-1,11,11,18,0]],S:[20,[17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3]],T:[16,[8,21,8,0,-1,-1,1,21,15,21]],U:[22,[4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21]],V:[18,[1,21,9,0,-1,-1,17,21,9,0]],W:[24,[2,21,7,0,-1,-1,12,21,7,0,-1,-1,12,21,17,0,-1,-1,22,21,17,0]],X:[20,[3,21,17,0,-1,-1,17,21,3,0]],Y:[18,[1,21,9,11,9,0,-1,-1,17,21,9,11]],Z:[20,[17,21,3,0,-1,-1,3,21,17,21,-1,-1,3,0,17,0]],"[":[14,[4,25,4,-7,-1,-1,5,25,5,-7,-1,-1,4,25,11,25,-1,-1,4,-7,11,-7]],"\\":[14,[0,21,14,-3]],"]":[14,[9,25,9,-7,-1,-1,10,25,10,-7,-1,-1,3,25,10,25,-1,-1,3,-7,10,-7]],"^":[16,[6,15,8,18,10,15,-1,-1,3,12,8,17,13,12,-1,-1,8,17,8,0]],_:[16,[0,-2,16,-2]],"`":[10,[6,21,5,20,4,18,4,16,5,15,6,16,5,17]],a:[19,[15,14,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],b:[19,[4,21,4,0,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],c:[18,[15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],d:[19,[15,21,15,0,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],e:[18,[3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],f:[12,[10,21,8,21,6,20,5,17,5,0,-1,-1,2,14,9,14]],g:[19,[15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],h:[19,[4,21,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],i:[8,[3,21,4,20,5,21,4,22,3,21,-1,-1,4,14,4,0]],j:[10,[5,21,6,20,7,21,6,22,5,21,-1,-1,6,14,6,-3,5,-6,3,-7,1,-7]],k:[17,[4,21,4,0,-1,-1,14,14,4,4,-1,-1,8,8,15,0]],l:[8,[4,21,4,0]],m:[30,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0,-1,-1,15,10,18,13,20,14,23,14,25,13,26,10,26,0]],n:[19,[4,14,4,0,-1,-1,4,10,7,13,9,14,12,14,14,13,15,10,15,0]],o:[19,[8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14]],p:[19,[4,14,4,-7,-1,-1,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3]],q:[19,[15,14,15,-7,-1,-1,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3]],r:[13,[4,14,4,0,-1,-1,4,8,5,11,7,13,9,14,12,14]],s:[17,[14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3]],t:[12,[5,21,5,4,6,1,8,0,10,0,-1,-1,2,14,9,14]],u:[19,[4,14,4,4,5,1,7,0,10,0,12,1,15,4,-1,-1,15,14,15,0]],v:[16,[2,14,8,0,-1,-1,14,14,8,0]],w:[22,[3,14,7,0,-1,-1,11,14,7,0,-1,-1,11,14,15,0,-1,-1,19,14,15,0]],x:[17,[3,14,14,0,-1,-1,14,14,3,0]],y:[16,[2,14,8,0,-1,-1,14,14,8,0,6,-4,4,-6,2,-7,1,-7]],z:[17,[14,14,3,0,-1,-1,3,14,14,14,-1,-1,3,0,14,0]],"{":[14,[9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,-1,-1,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,-1,-1,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7]],"|":[8,[4,25,4,-7]],"}":[14,[5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,-1,-1,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,-1,-1,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7]],"~":[24,[3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,-1,-1,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]]};
},{"../data/array_types":39,"../data/extent":53,"../data/pos_attributes":57,"../gl/depth_mode":67,"../gl/stencil_mode":70,"../util/browser":252,"./vertex_array_object":95,"@mapbox/gl-matrix":2}],78:[function(_dereq_,module,exports){
"use strict";function drawFill(t,e,r,o){var a=r.paint.get("fill-color"),i=r.paint.get("fill-opacity");if(0!==i.constantOr(1)){var n=t.context;n.setColorMode(t.colorModeForRenderPass());var l=r.paint.get("fill-pattern")||1!==a.constantOr(Color.transparent).a||1!==i.constantOr(0)?"translucent":"opaque";t.renderPass===l&&(n.setDepthMode(t.depthModeForSublayer(1,"opaque"===t.renderPass?DepthMode.ReadWrite:DepthMode.ReadOnly)),drawFillTiles(t,e,r,o,drawFillTile)),"translucent"===t.renderPass&&r.paint.get("fill-antialias")&&(n.lineWidth.set(2),n.setDepthMode(t.depthModeForSublayer(r.getPaintProperty("fill-outline-color")?2:0,DepthMode.ReadOnly)),drawFillTiles(t,e,r,o,drawStrokeTile))}}function drawFillTiles(t,e,r,o,a){if(!pattern.isPatternMissing(r.paint.get("fill-pattern"),t))for(var i=!0,n=0,l=o;n<l.length;n+=1){var s=l[n],p=e.getTile(s),d=p.getBucket(r);d&&(t.context.setStencilMode(t.stencilModeForClipping(s)),a(t,e,r,p,s,d,i),i=!1)}}function drawFillTile(t,e,r,o,a,i,n){var l=t.context.gl,s=i.programConfigurations.get(r.id);setFillProgram("fill",r.paint.get("fill-pattern"),t,s,r,o,a,n).draw(t.context,l.TRIANGLES,r.id,i.layoutVertexBuffer,i.indexBuffer,i.segments,s)}function drawStrokeTile(t,e,r,o,a,i,n){var l=t.context.gl,s=i.programConfigurations.get(r.id),p=r.getPaintProperty("fill-outline-color")?null:r.paint.get("fill-pattern"),d=setFillProgram("fillOutline",p,t,s,r,o,a,n);l.uniform2f(d.uniforms.u_world,l.drawingBufferWidth,l.drawingBufferHeight),d.draw(t.context,l.LINES,r.id,i.layoutVertexBuffer,i.indexBuffer2,i.segments2,s)}function setFillProgram(t,e,r,o,a,i,n,l){var s,p=r.context.program.get();return e?(s=r.useProgram(t+"Pattern",o),(l||s.program!==p)&&(o.setUniforms(r.context,s,a.paint,{zoom:r.transform.zoom}),pattern.prepare(e,r,s)),pattern.setTile(i,r,s)):(s=r.useProgram(t,o),(l||s.program!==p)&&o.setUniforms(r.context,s,a.paint,{zoom:r.transform.zoom})),r.context.gl.uniformMatrix4fv(s.uniforms.u_matrix,!1,r.translatePosMatrix(n.posMatrix,i,a.paint.get("fill-translate"),a.paint.get("fill-translate-anchor"))),s}var pattern=_dereq_("./pattern"),Color=_dereq_("../style-spec/util/color"),DepthMode=_dereq_("../gl/depth_mode");module.exports=drawFill;
},{"../gl/depth_mode":67,"../style-spec/util/color":153,"./pattern":91}],79:[function(_dereq_,module,exports){
"use strict";function draw(e,t,r,i){if(0!==r.paint.get("fill-extrusion-opacity"))if("offscreen"===e.renderPass){drawToExtrusionFramebuffer(e,r);for(var o=!0,a=0,n=i;a<n.length;a+=1){var s=n[a],u=t.getTile(s),f=u.getBucket(r);f&&(drawExtrusion(e,t,r,u,s,f,o),o=!1)}}else"translucent"===e.renderPass&&drawExtrusionTexture(e,r)}function drawToExtrusionFramebuffer(e,t){var r=e.context,i=r.gl,o=t.viewportFrame;if(e.depthRboNeedsClear&&e.setupOffscreenDepthRenderbuffer(),!o){var a=new Texture(r,{width:e.width,height:e.height,data:null},i.RGBA);a.bind(i.LINEAR,i.CLAMP_TO_EDGE),o=t.viewportFrame=r.createFramebuffer(e.width,e.height),o.colorAttachment.set(a.texture)}r.bindFramebuffer.set(o.framebuffer),o.depthAttachment.set(e.depthRbo),e.depthRboNeedsClear&&(r.clear({depth:1}),e.depthRboNeedsClear=!1),r.clear({color:Color.transparent}),r.setStencilMode(StencilMode.disabled),r.setDepthMode(new DepthMode(i.LEQUAL,DepthMode.ReadWrite,[0,1])),r.setColorMode(e.colorModeForRenderPass())}function drawExtrusionTexture(e,t){var r=t.viewportFrame;if(r){var i=e.context,o=i.gl,a=e.useProgram("extrusionTexture");i.setStencilMode(StencilMode.disabled),i.setDepthMode(DepthMode.disabled),i.setColorMode(e.colorModeForRenderPass()),i.activeTexture.set(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,r.colorAttachment.get()),o.uniform1f(a.uniforms.u_opacity,t.paint.get("fill-extrusion-opacity")),o.uniform1i(a.uniforms.u_image,0);var n=mat4.create();mat4.ortho(n,0,e.width,e.height,0,0,1),o.uniformMatrix4fv(a.uniforms.u_matrix,!1,n),o.uniform2f(a.uniforms.u_world,o.drawingBufferWidth,o.drawingBufferHeight),e.viewportVAO.bind(i,a,e.viewportBuffer,[]),o.drawArrays(o.TRIANGLE_STRIP,0,4)}}function drawExtrusion(e,t,r,i,o,a,n){var s=e.context,u=s.gl,f=r.paint.get("fill-extrusion-pattern"),l=e.context.program.get(),d=a.programConfigurations.get(r.id),m=e.useProgram(f?"fillExtrusionPattern":"fillExtrusion",d);if((n||m.program!==l)&&d.setUniforms(s,m,r.paint,{zoom:e.transform.zoom}),f){if(pattern.isPatternMissing(f,e))return;pattern.prepare(f,e,m),pattern.setTile(i,e,m),u.uniform1f(m.uniforms.u_height_factor,-Math.pow(2,o.overscaledZ)/i.tileSize/8)}e.context.gl.uniformMatrix4fv(m.uniforms.u_matrix,!1,e.translatePosMatrix(o.posMatrix,i,r.paint.get("fill-extrusion-translate"),r.paint.get("fill-extrusion-translate-anchor"))),setLight(m,e),m.draw(s,u.TRIANGLES,r.id,a.layoutVertexBuffer,a.indexBuffer,a.segments,d)}function setLight(e,t){var r=t.context.gl,i=t.style.light,o=i.properties.get("position"),a=[o.x,o.y,o.z],n=mat3.create();"viewport"===i.properties.get("anchor")&&mat3.fromRotation(n,-t.transform.angle),vec3.transformMat3(a,a,n);var s=i.properties.get("color");r.uniform3fv(e.uniforms.u_lightpos,a),r.uniform1f(e.uniforms.u_lightintensity,i.properties.get("intensity")),r.uniform3f(e.uniforms.u_lightcolor,s.r,s.g,s.b)}var glMatrix=_dereq_("@mapbox/gl-matrix"),pattern=_dereq_("./pattern"),Texture=_dereq_("./texture"),Color=_dereq_("../style-spec/util/color"),DepthMode=_dereq_("../gl/depth_mode"),mat3=glMatrix.mat3,mat4=glMatrix.mat4,vec3=glMatrix.vec3,StencilMode=_dereq_("../gl/stencil_mode");module.exports=draw;
},{"../gl/depth_mode":67,"../gl/stencil_mode":70,"../style-spec/util/color":153,"./pattern":91,"./texture":93,"@mapbox/gl-matrix":2}],80:[function(_dereq_,module,exports){
"use strict";function drawHeatmap(e,t,r,o){if(0!==r.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){var a=e.context,i=a.gl;a.setDepthMode(e.depthModeForSublayer(0,DepthMode.ReadOnly)),a.setStencilMode(StencilMode.disabled),bindFramebuffer(a,e,r),a.clear({color:Color.transparent}),a.setColorMode(new ColorMode([i.ONE,i.ONE],Color.transparent,[!0,!0,!0,!0]));for(var n=!0,u=0;u<o.length;u++){var T=o[u];if(!t.hasRenderableParent(T)){var f=t.getTile(T),m=f.getBucket(r);if(m){var l=e.context.program.get(),s=m.programConfigurations.get(r.id),d=e.useProgram("heatmap",s),E=e.transform,x=E.zoom;(n||d.program!==l)&&(s.setUniforms(e.context,d,r.paint,{zoom:x}),n=!1),i.uniform1f(d.uniforms.u_extrude_scale,pixelsToTileUnits(f,1,x)),i.uniform1f(d.uniforms.u_intensity,r.paint.get("heatmap-intensity")),i.uniformMatrix4fv(d.uniforms.u_matrix,!1,T.posMatrix),d.draw(a,i.TRIANGLES,r.id,m.layoutVertexBuffer,m.indexBuffer,m.segments,s)}}}a.viewport.set([0,0,e.width,e.height])}else"translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),renderTextureToMap(e,r))}function bindFramebuffer(e,t,r){var o=e.gl;e.activeTexture.set(o.TEXTURE1),e.viewport.set([0,0,t.width/4,t.height/4]);var a=r.heatmapFbo;if(a)o.bindTexture(o.TEXTURE_2D,a.colorAttachment.get()),e.bindFramebuffer.set(a.framebuffer);else{var i=o.createTexture();o.bindTexture(o.TEXTURE_2D,i),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),a=r.heatmapFbo=e.createFramebuffer(t.width/4,t.height/4),bindTextureToFramebuffer(e,t,i,a)}}function bindTextureToFramebuffer(e,t,r,o){var a=e.gl;a.texImage2D(a.TEXTURE_2D,0,a.RGBA,t.width/4,t.height/4,0,a.RGBA,e.extTextureHalfFloat?e.extTextureHalfFloat.HALF_FLOAT_OES:a.UNSIGNED_BYTE,null),o.colorAttachment.set(r),e.extTextureHalfFloat&&a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE&&(e.extTextureHalfFloat=null,o.colorAttachment.setDirty(),bindTextureToFramebuffer(e,t,r,o))}function renderTextureToMap(e,t){var r=e.context,o=r.gl,a=t.heatmapFbo;if(a){r.activeTexture.set(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,a.colorAttachment.get()),r.activeTexture.set(o.TEXTURE1);var i=t.colorRampTexture;i||(i=t.colorRampTexture=new Texture(r,t.colorRamp,o.RGBA)),i.bind(o.LINEAR,o.CLAMP_TO_EDGE),r.setDepthMode(DepthMode.disabled);var n=e.useProgram("heatmapTexture"),u=t.paint.get("heatmap-opacity");o.uniform1f(n.uniforms.u_opacity,u),o.uniform1i(n.uniforms.u_image,0),o.uniform1i(n.uniforms.u_color_ramp,1);var T=mat4.create();mat4.ortho(T,0,e.width,e.height,0,0,1),o.uniformMatrix4fv(n.uniforms.u_matrix,!1,T),o.uniform2f(n.uniforms.u_world,o.drawingBufferWidth,o.drawingBufferHeight),e.viewportVAO.bind(e.context,n,e.viewportBuffer,[]),o.drawArrays(o.TRIANGLE_STRIP,0,4)}}var mat4=_dereq_("@mapbox/gl-matrix").mat4,Texture=_dereq_("./texture"),pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),Color=_dereq_("../style-spec/util/color"),DepthMode=_dereq_("../gl/depth_mode"),StencilMode=_dereq_("../gl/stencil_mode"),ColorMode=_dereq_("../gl/color_mode");module.exports=drawHeatmap;
},{"../gl/color_mode":65,"../gl/depth_mode":67,"../gl/stencil_mode":70,"../source/pixels_to_tile_units":104,"../style-spec/util/color":153,"./texture":93,"@mapbox/gl-matrix":2}],81:[function(_dereq_,module,exports){
"use strict";function drawHillshade(e,r,t,a){if("offscreen"===e.renderPass||"translucent"===e.renderPass){var i=e.context;i.setDepthMode(e.depthModeForSublayer(0,DepthMode.ReadOnly)),i.setStencilMode(StencilMode.disabled),i.setColorMode(e.colorModeForRenderPass());for(var n=0,o=a;n<o.length;n+=1){var s=o[n],d=r.getTile(s);d.needsHillshadePrepare&&"offscreen"===e.renderPass?prepareHillshade(e,d):"translucent"===e.renderPass&&renderHillshade(e,d,t)}i.viewport.set([0,0,e.width,e.height])}}function setLight(e,r,t){var a=t.paint.get("hillshade-illumination-direction")*(Math.PI/180);"viewport"===t.paint.get("hillshade-illumination-anchor")&&(a-=r.transform.angle),r.context.gl.uniform2f(e.uniforms.u_light,t.paint.get("hillshade-exaggeration"),a)}function getTileLatRange(e,r){var t=r.toCoordinate(),a=new Coordinate(t.column,t.row+1,t.zoom);return[e.transform.coordinateLocation(t).lat,e.transform.coordinateLocation(a).lat]}function renderHillshade(e,r,t){var a=e.context,i=a.gl,n=r.fbo;if(n){var o=e.useProgram("hillshade"),s=e.transform.calculatePosMatrix(r.tileID.toUnwrapped());setLight(o,e,t);var d=getTileLatRange(e,r.tileID);a.activeTexture.set(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,n.colorAttachment.get()),i.uniformMatrix4fv(o.uniforms.u_matrix,!1,s),i.uniform2fv(o.uniforms.u_latrange,d),i.uniform1i(o.uniforms.u_image,0);var l=t.paint.get("hillshade-shadow-color");i.uniform4f(o.uniforms.u_shadow,l.r,l.g,l.b,l.a);var u=t.paint.get("hillshade-highlight-color");i.uniform4f(o.uniforms.u_highlight,u.r,u.g,u.b,u.a);var f=t.paint.get("hillshade-accent-color");if(i.uniform4f(o.uniforms.u_accent,f.r,f.g,f.b,f.a),r.maskedBoundsBuffer&&r.maskedIndexBuffer&&r.segments)o.draw(a,i.TRIANGLES,t.id,r.maskedBoundsBuffer,r.maskedIndexBuffer,r.segments);else{var m=e.rasterBoundsBuffer;e.rasterBoundsVAO.bind(a,o,m,[]),i.drawArrays(i.TRIANGLE_STRIP,0,m.length)}}}function prepareHillshade(e,r){var t=e.context,a=t.gl;if(r.dem&&r.dem.level){var i=r.dem.level.dim,n=r.dem.getPixels();if(t.activeTexture.set(a.TEXTURE1),t.pixelStoreUnpackPremultiplyAlpha.set(!1),r.demTexture=r.demTexture||e.getTileTexture(r.tileSize),r.demTexture){var o=r.demTexture;o.update(n,!1),o.bind(a.NEAREST,a.CLAMP_TO_EDGE)}else r.demTexture=new Texture(t,n,a.RGBA,!1),r.demTexture.bind(a.NEAREST,a.CLAMP_TO_EDGE);t.activeTexture.set(a.TEXTURE0);var s=r.fbo;if(!s){var d=new Texture(t,{width:i,height:i,data:null},a.RGBA);d.bind(a.LINEAR,a.CLAMP_TO_EDGE),s=r.fbo=t.createFramebuffer(i,i),s.colorAttachment.set(d.texture)}t.bindFramebuffer.set(s.framebuffer),t.viewport.set([0,0,i,i]);var l=mat4.create();mat4.ortho(l,0,EXTENT,-EXTENT,0,0,1),mat4.translate(l,l,[0,-EXTENT,0]);var u=e.useProgram("hillshadePrepare");a.uniformMatrix4fv(u.uniforms.u_matrix,!1,l),a.uniform1f(u.uniforms.u_zoom,r.tileID.overscaledZ),a.uniform2fv(u.uniforms.u_dimension,[2*i,2*i]),a.uniform1i(u.uniforms.u_image,1);var f=e.rasterBoundsBuffer;e.rasterBoundsVAO.bind(t,u,f,[]),a.drawArrays(a.TRIANGLE_STRIP,0,f.length),r.needsHillshadePrepare=!1}}var Coordinate=_dereq_("../geo/coordinate"),Texture=_dereq_("./texture"),EXTENT=_dereq_("../data/extent"),mat4=_dereq_("@mapbox/gl-matrix").mat4,StencilMode=_dereq_("../gl/stencil_mode"),DepthMode=_dereq_("../gl/depth_mode");module.exports=drawHillshade;
},{"../data/extent":53,"../geo/coordinate":61,"../gl/depth_mode":67,"../gl/stencil_mode":70,"./texture":93,"@mapbox/gl-matrix":2}],82:[function(_dereq_,module,exports){
"use strict";function drawLineTile(e,i,t,r,n,a,o,s,u){var f,l,m,p,_=i.context,g=_.gl,d=n.paint.get("line-dasharray"),c=n.paint.get("line-pattern");if(s||u){var x=1/pixelsToTileUnits(t,1,i.transform.tileZoom);if(d){f=i.lineAtlas.getDash(d.from,"round"===n.layout.get("line-cap")),l=i.lineAtlas.getDash(d.to,"round"===n.layout.get("line-cap"));var h=f.width*d.fromScale,v=l.width*d.toScale;g.uniform2f(e.uniforms.u_patternscale_a,x/h,-f.height/2),g.uniform2f(e.uniforms.u_patternscale_b,x/v,-l.height/2),g.uniform1f(e.uniforms.u_sdfgamma,i.lineAtlas.width/(256*Math.min(h,v)*browser.devicePixelRatio)/2)}else if(c){if(m=i.imageManager.getPattern(c.from),p=i.imageManager.getPattern(c.to),!m||!p)return;g.uniform2f(e.uniforms.u_pattern_size_a,m.displaySize[0]*c.fromScale/x,p.displaySize[1]),g.uniform2f(e.uniforms.u_pattern_size_b,p.displaySize[0]*c.toScale/x,p.displaySize[1]);var T=i.imageManager.getPixelSize(),y=T.width,M=T.height;g.uniform2fv(e.uniforms.u_texsize,[y,M])}g.uniform2f(e.uniforms.u_gl_units_to_pixels,1/i.transform.pixelsToGLUnits[0],1/i.transform.pixelsToGLUnits[1])}s&&(d?(g.uniform1i(e.uniforms.u_image,0),_.activeTexture.set(g.TEXTURE0),i.lineAtlas.bind(_),g.uniform1f(e.uniforms.u_tex_y_a,f.y),g.uniform1f(e.uniforms.u_tex_y_b,l.y),g.uniform1f(e.uniforms.u_mix,d.t)):c&&(g.uniform1i(e.uniforms.u_image,0),_.activeTexture.set(g.TEXTURE0),i.imageManager.bind(_),g.uniform2fv(e.uniforms.u_pattern_tl_a,m.tl),g.uniform2fv(e.uniforms.u_pattern_br_a,m.br),g.uniform2fv(e.uniforms.u_pattern_tl_b,p.tl),g.uniform2fv(e.uniforms.u_pattern_br_b,p.br),g.uniform1f(e.uniforms.u_fade,c.t))),_.setStencilMode(i.stencilModeForClipping(a));var b=i.translatePosMatrix(a.posMatrix,t,n.paint.get("line-translate"),n.paint.get("line-translate-anchor"));g.uniformMatrix4fv(e.uniforms.u_matrix,!1,b),g.uniform1f(e.uniforms.u_ratio,1/pixelsToTileUnits(t,1,i.transform.zoom)),e.draw(_,g.TRIANGLES,n.id,r.layoutVertexBuffer,r.indexBuffer,r.segments,o)}var browser=_dereq_("../util/browser"),pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),DepthMode=_dereq_("../gl/depth_mode");module.exports=function(e,i,t,r){if("translucent"===e.renderPass){if(0!==t.paint.get("line-opacity").constantOr(1)){var n=e.context;n.setDepthMode(e.depthModeForSublayer(0,DepthMode.ReadOnly)),n.setColorMode(e.colorModeForRenderPass());for(var a,o=t.paint.get("line-dasharray")?"lineSDF":t.paint.get("line-pattern")?"linePattern":"line",s=!0,u=0,f=r;u<f.length;u+=1){var l=f[u],m=i.getTile(l),p=m.getBucket(t);if(p){var _=p.programConfigurations.get(t.id),g=e.context.program.get(),d=e.useProgram(o,_),c=s||d.program!==g,x=a!==m.tileID.overscaledZ;c&&_.setUniforms(e.context,d,t.paint,{zoom:e.transform.zoom}),drawLineTile(d,e,m,p,t,l,_,c,x),a=m.tileID.overscaledZ,s=!1}}}}};
},{"../gl/depth_mode":67,"../source/pixels_to_tile_units":104,"../util/browser":252}],83:[function(_dereq_,module,exports){
"use strict";function drawRaster(e,r,t,a){if("translucent"===e.renderPass&&0!==t.paint.get("raster-opacity")){var i=e.context,o=i.gl,n=r.getSource(),s=e.useProgram("raster");i.setStencilMode(StencilMode.disabled),i.setColorMode(e.colorModeForRenderPass()),o.uniform1f(s.uniforms.u_brightness_low,t.paint.get("raster-brightness-min")),o.uniform1f(s.uniforms.u_brightness_high,t.paint.get("raster-brightness-max")),o.uniform1f(s.uniforms.u_saturation_factor,saturationFactor(t.paint.get("raster-saturation"))),o.uniform1f(s.uniforms.u_contrast_factor,contrastFactor(t.paint.get("raster-contrast"))),o.uniform3fv(s.uniforms.u_spin_weights,spinWeights(t.paint.get("raster-hue-rotate"))),o.uniform1f(s.uniforms.u_buffer_scale,1),o.uniform1i(s.uniforms.u_image0,0),o.uniform1i(s.uniforms.u_image1,1);for(var u=a.length&&a[0].overscaledZ,d=0,f=a;d<f.length;d+=1){var c=f[d];i.setDepthMode(e.depthModeForSublayer(c.overscaledZ-u,1===t.paint.get("raster-opacity")?DepthMode.ReadWrite:DepthMode.ReadOnly,o.LESS));var m=r.getTile(c),l=e.transform.calculatePosMatrix(c.toUnwrapped(),!0);m.registerFadeDuration(t.paint.get("raster-fade-duration")),o.uniformMatrix4fv(s.uniforms.u_matrix,!1,l);var g=r.findLoadedParent(c,0,{}),p=getFadeValues(m,g,r,t,e.transform),_=void 0,h=void 0;if(i.activeTexture.set(o.TEXTURE0),m.texture.bind(o.LINEAR,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),i.activeTexture.set(o.TEXTURE1),g?(g.texture.bind(o.LINEAR,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),_=Math.pow(2,g.tileID.overscaledZ-m.tileID.overscaledZ),h=[m.tileID.canonical.x*_%1,m.tileID.canonical.y*_%1]):m.texture.bind(o.LINEAR,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),o.uniform2fv(s.uniforms.u_tl_parent,h||[0,0]),o.uniform1f(s.uniforms.u_scale_parent,_||1),o.uniform1f(s.uniforms.u_fade_t,p.mix),o.uniform1f(s.uniforms.u_opacity,p.opacity*t.paint.get("raster-opacity")),n instanceof ImageSource){var E=n.boundsBuffer;n.boundsVAO.bind(i,s,E,[]),o.drawArrays(o.TRIANGLE_STRIP,0,E.length)}else if(m.maskedBoundsBuffer&&m.maskedIndexBuffer&&m.segments)s.draw(i,o.TRIANGLES,t.id,m.maskedBoundsBuffer,m.maskedIndexBuffer,m.segments);else{var M=e.rasterBoundsBuffer,v=e.rasterBoundsVAO;v.bind(i,s,M,[]),o.drawArrays(o.TRIANGLE_STRIP,0,M.length)}}}}function spinWeights(e){e*=Math.PI/180;var r=Math.sin(e),t=Math.cos(e);return[(2*t+1)/3,(-Math.sqrt(3)*r-t+1)/3,(Math.sqrt(3)*r-t+1)/3]}function contrastFactor(e){return e>0?1/(1-e):1+e}function saturationFactor(e){return e>0?1-1/(1.001-e):-e}function getFadeValues(e,r,t,a,i){var o=a.paint.get("raster-fade-duration");if(o>0){var n=browser.now(),s=(n-e.timeAdded)/o,u=r?(n-r.timeAdded)/o:-1,d=t.getSource(),f=i.coveringZoomLevel({tileSize:d.tileSize,roundZoom:d.roundZoom}),c=!r||Math.abs(r.tileID.overscaledZ-f)>Math.abs(e.tileID.overscaledZ-f),m=c&&e.refreshedUponExpiration?1:util.clamp(c?s:1-u,0,1);return e.refreshedUponExpiration&&s>=1&&(e.refreshedUponExpiration=!1),r?{opacity:1,mix:1-m}:{opacity:m,mix:0}}return{opacity:1,mix:0}}var util=_dereq_("../util/util"),ImageSource=_dereq_("../source/image_source"),browser=_dereq_("../util/browser"),StencilMode=_dereq_("../gl/stencil_mode"),DepthMode=_dereq_("../gl/depth_mode");module.exports=drawRaster;
},{"../gl/depth_mode":67,"../gl/stencil_mode":70,"../source/image_source":102,"../util/browser":252,"../util/util":275}],84:[function(_dereq_,module,exports){
"use strict";function drawSymbols(t,e,o,i){if("translucent"===t.renderPass){var r=t.context;r.setStencilMode(StencilMode.disabled),r.setColorMode(t.colorModeForRenderPass()),0!==o.paint.get("icon-opacity").constantOr(1)&&drawLayerSymbols(t,e,o,i,!1,o.paint.get("icon-translate"),o.paint.get("icon-translate-anchor"),o.layout.get("icon-rotation-alignment"),o.layout.get("icon-pitch-alignment"),o.layout.get("icon-keep-upright")),0!==o.paint.get("text-opacity").constantOr(1)&&drawLayerSymbols(t,e,o,i,!0,o.paint.get("text-translate"),o.paint.get("text-translate-anchor"),o.layout.get("text-rotation-alignment"),o.layout.get("text-pitch-alignment"),o.layout.get("text-keep-upright")),e.map.showCollisionBoxes&&drawCollisionDebug(t,e,o,i)}}function drawLayerSymbols(t,e,o,i,r,n,a,s,u,l){var m=t.context,f=m.gl,c=t.transform,y="map"===s,p="map"===u,_=y&&"line"===o.layout.get("symbol-placement"),d=y&&!p&&!_,g=p;m.setDepthMode(g?t.depthModeForSublayer(0,DepthMode.ReadOnly):DepthMode.disabled);for(var x,b=0,h=i;b<h.length;b+=1){var S=h[b],M=e.getTile(S),z=M.getBucket(o);if(z){var T=r?z.text:z.icon;if(T&&T.segments.get().length){var v=T.programConfigurations.get(o.id),w=r||z.sdfIcons,D=r?z.textSizeData:z.iconSizeData;if(x||(x=t.useProgram(w?"symbolSDF":"symbolIcon",v),v.setUniforms(t.context,x,o.paint,{zoom:t.transform.zoom}),setSymbolDrawState(x,t,o,r,d,p,D)),m.activeTexture.set(f.TEXTURE0),f.uniform1i(x.uniforms.u_texture,0),r)M.glyphAtlasTexture.bind(f.LINEAR,f.CLAMP_TO_EDGE),f.uniform2fv(x.uniforms.u_texsize,M.glyphAtlasTexture.size);else{var L=1!==o.layout.get("icon-size").constantOr(0)||z.iconsNeedLinear,P=p||0!==c.pitch;M.iconAtlasTexture.bind(w||t.options.rotating||t.options.zooming||L||P?f.LINEAR:f.NEAREST,f.CLAMP_TO_EDGE),f.uniform2fv(x.uniforms.u_texsize,M.iconAtlasTexture.size)}f.uniformMatrix4fv(x.uniforms.u_matrix,!1,t.translatePosMatrix(S.posMatrix,M,n,a));var E=pixelsToTileUnits(M,1,t.transform.zoom),C=symbolProjection.getLabelPlaneMatrix(S.posMatrix,p,y,t.transform,E),A=symbolProjection.getGlCoordMatrix(S.posMatrix,p,y,t.transform,E);f.uniformMatrix4fv(x.uniforms.u_gl_coord_matrix,!1,t.translatePosMatrix(A,M,n,a,!0)),_?(f.uniformMatrix4fv(x.uniforms.u_label_plane_matrix,!1,identityMat4),symbolProjection.updateLineLabels(z,S.posMatrix,t,r,C,A,p,l)):f.uniformMatrix4fv(x.uniforms.u_label_plane_matrix,!1,C),f.uniform1f(x.uniforms.u_fade_change,t.options.fadeDuration?t.symbolFadeChange:1),drawTileSymbols(x,v,t,o,M,T,r,w,p)}}}}function setSymbolDrawState(t,e,o,i,r,n,a){var s=e.context.gl,u=e.transform;s.uniform1i(t.uniforms.u_pitch_with_map,n?1:0),s.uniform1f(t.uniforms.u_is_text,i?1:0),s.uniform1f(t.uniforms.u_pitch,u.pitch/360*2*Math.PI);var l="constant"===a.functionType||"source"===a.functionType,m="constant"===a.functionType||"camera"===a.functionType;s.uniform1i(t.uniforms.u_is_size_zoom_constant,l?1:0),s.uniform1i(t.uniforms.u_is_size_feature_constant,m?1:0),s.uniform1f(t.uniforms.u_camera_to_center_distance,u.cameraToCenterDistance);var f=symbolSize.evaluateSizeForZoom(a,u.zoom,symbolLayoutProperties.properties[i?"text-size":"icon-size"]);void 0!==f.uSizeT&&s.uniform1f(t.uniforms.u_size_t,f.uSizeT),void 0!==f.uSize&&s.uniform1f(t.uniforms.u_size,f.uSize),s.uniform1f(t.uniforms.u_aspect_ratio,u.width/u.height),s.uniform1i(t.uniforms.u_rotate_symbol,r?1:0)}function drawTileSymbols(t,e,o,i,r,n,a,s,u){var l=o.context,m=l.gl,f=o.transform;if(s){var c=0!==i.paint.get(a?"text-halo-width":"icon-halo-width").constantOr(1),y=u?Math.cos(f._pitch)*f.cameraToCenterDistance:1;m.uniform1f(t.uniforms.u_gamma_scale,y),c&&(m.uniform1f(t.uniforms.u_is_halo,1),drawSymbolElements(n,i,l,t)),m.uniform1f(t.uniforms.u_is_halo,0)}drawSymbolElements(n,i,l,t)}function drawSymbolElements(t,e,o,i){i.draw(o,o.gl.TRIANGLES,e.id,t.layoutVertexBuffer,t.indexBuffer,t.segments,t.programConfigurations.get(e.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer)}var drawCollisionDebug=_dereq_("./draw_collision_debug"),pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),symbolProjection=_dereq_("../symbol/projection"),symbolSize=_dereq_("../symbol/symbol_size"),mat4=_dereq_("@mapbox/gl-matrix").mat4,identityMat4=mat4.identity(new Float32Array(16)),symbolLayoutProperties=_dereq_("../style/style_layer/symbol_style_layer_properties").layout,StencilMode=_dereq_("../gl/stencil_mode"),DepthMode=_dereq_("../gl/depth_mode");module.exports=drawSymbols;
},{"../gl/depth_mode":67,"../gl/stencil_mode":70,"../source/pixels_to_tile_units":104,"../style/style_layer/symbol_style_layer_properties":209,"../symbol/projection":224,"../symbol/symbol_size":228,"./draw_collision_debug":76,"@mapbox/gl-matrix":2}],85:[function(_dereq_,module,exports){
"use strict";function makeGlyphAtlas(a){var e=new AlphaImage({width:0,height:0}),i={},t=new ShelfPack(0,0,{autoResize:!0});for(var h in a){var r=a[h],p=i[h]={};for(var m in r){var d=r[+m];if(d&&0!==d.bitmap.width&&0!==d.bitmap.height){var g=t.packOne(d.bitmap.width+2*padding,d.bitmap.height+2*padding);e.resize({width:t.w,height:t.h}),AlphaImage.copy(d.bitmap,e,{x:0,y:0},{x:g.x+padding,y:g.y+padding},d.bitmap),p[m]={rect:g,metrics:d.metrics}}}}return t.shrink(),e.resize({width:t.w,height:t.h}),{image:e,positions:i}}var ShelfPack=_dereq_("@mapbox/shelf-pack"),ref=_dereq_("../util/image"),AlphaImage=ref.AlphaImage,padding=1;module.exports={makeGlyphAtlas:makeGlyphAtlas};
},{"../util/image":263,"@mapbox/shelf-pack":5}],86:[function(_dereq_,module,exports){
"use strict";var loadGlyphRange=_dereq_("../style/load_glyph_range"),TinySDF=_dereq_("@mapbox/tiny-sdf"),isChar=_dereq_("../util/is_char_in_unicode_block"),ref=_dereq_("../util/util"),asyncAll=ref.asyncAll,ref$1=_dereq_("../util/image"),AlphaImage=ref$1.AlphaImage,GlyphManager=function(e,r){this.requestTransform=e,this.localIdeographFontFamily=r,this.entries={}};GlyphManager.prototype.setURL=function(e){this.url=e},GlyphManager.prototype.getGlyphs=function(e,r){var i=this,t=[];for(var a in e)for(var l=0,n=e[a];l<n.length;l+=1){var s=n[l];t.push({stack:a,id:s})}asyncAll(t,function(e,r){var t=e.stack,a=e.id,l=i.entries[t];l||(l=i.entries[t]={glyphs:{},requests:{}});var n=l.glyphs[a];if(void 0!==n)return void r(null,{stack:t,id:a,glyph:n});if(n=i._tinySDF(l,t,a))return void r(null,{stack:t,id:a,glyph:n});var s=Math.floor(a/256);if(256*s>65535)return void r(new Error("glyphs > 65535 not supported"));var o=l.requests[s];o||(o=l.requests[s]=[],loadGlyphRange(t,s,i.url,i.requestTransform,function(e,r){if(r)for(var i in r)l.glyphs[+i]=r[+i];for(var t=0,a=o;t<a.length;t+=1){(0,a[t])(e,r)}delete l.requests[s]})),o.push(function(e,i){e?r(e):i&&r(null,{stack:t,id:a,glyph:i[a]||null})})},function(e,i){if(e)r(e);else if(i){for(var t={},a=0,l=i;a<l.length;a+=1){var n=l[a],s=n.stack,o=n.id,h=n.glyph;(t[s]||(t[s]={}))[o]=h&&{id:h.id,bitmap:h.bitmap.clone(),metrics:h.metrics}}r(null,t)}})},GlyphManager.prototype._tinySDF=function(e,r,i){var t=this.localIdeographFontFamily;if(t&&(isChar["CJK Unified Ideographs"](i)||isChar["Hangul Syllables"](i))){var a=e.tinySDF;if(!a){var l="400";/bold/i.test(r)?l="900":/medium/i.test(r)?l="500":/light/i.test(r)&&(l="200"),a=e.tinySDF=new TinySDF(24,3,8,.25,t,l)}return{id:i,bitmap:new AlphaImage({width:30,height:30},a.draw(String.fromCharCode(i))),metrics:{width:24,height:24,left:0,top:-8,advance:24}}}},module.exports=GlyphManager;
},{"../style/load_glyph_range":184,"../util/image":263,"../util/is_char_in_unicode_block":265,"../util/util":275,"@mapbox/tiny-sdf":6}],87:[function(_dereq_,module,exports){
"use strict";function imagePosition(a,i){var e=i.pixelRatio,t={x:a.x+padding,y:a.y+padding,w:a.w-2*padding,h:a.h-2*padding};return{pixelRatio:e,textureRect:t,tl:[t.x,t.y],br:[t.x+t.w,t.y+t.h],displaySize:[t.w/e,t.h/e]}}function makeImageAtlas(a){var i=new RGBAImage({width:0,height:0}),e={},t=new ShelfPack(0,0,{autoResize:!0});for(var d in a){var g=a[d],n=t.packOne(g.data.width+2*padding,g.data.height+2*padding);i.resize({width:t.w,height:t.h}),RGBAImage.copy(g.data,i,{x:0,y:0},{x:n.x+padding,y:n.y+padding},g.data),e[d]=imagePosition(n,g)}return t.shrink(),i.resize({width:t.w,height:t.h}),{image:i,positions:e}}var ShelfPack=_dereq_("@mapbox/shelf-pack"),ref=_dereq_("../util/image"),RGBAImage=ref.RGBAImage,padding=1;module.exports={imagePosition:imagePosition,makeImageAtlas:makeImageAtlas};
},{"../util/image":263,"@mapbox/shelf-pack":5}],88:[function(_dereq_,module,exports){
"use strict";var ShelfPack=_dereq_("@mapbox/shelf-pack"),ref=_dereq_("../util/image"),RGBAImage=ref.RGBAImage,ref$1=_dereq_("./image_atlas"),imagePosition=ref$1.imagePosition,Texture=_dereq_("./texture"),padding=1,ImageManager=function(){this.images={},this.loaded=!1,this.requestors=[],this.shelfPack=new ShelfPack(64,64,{autoResize:!0}),this.patterns={},this.atlasImage=new RGBAImage({width:64,height:64}),this.dirty=!0};ImageManager.prototype.isLoaded=function(){return this.loaded},ImageManager.prototype.setLoaded=function(e){var t=this;if(this.loaded!==e&&(this.loaded=e,e)){for(var a=0,i=t.requestors;a<i.length;a+=1){var r=i[a],s=r.ids,h=r.callback;t._notify(s,h)}this.requestors=[]}},ImageManager.prototype.getImage=function(e){return this.images[e]},ImageManager.prototype.addImage=function(e,t){this.images[e]=t},ImageManager.prototype.removeImage=function(e){delete this.images[e];var t=this.patterns[e];t&&(this.shelfPack.unref(t.bin),delete this.patterns[e])},ImageManager.prototype.getImages=function(e,t){var a=this,i=!0;if(!this.isLoaded())for(var r=0,s=e;r<s.length;r+=1){var h=s[r];a.images[h]||(i=!1)}this.isLoaded()||i?this._notify(e,t):this.requestors.push({ids:e,callback:t})},ImageManager.prototype._notify=function(e,t){for(var a=this,i={},r=0,s=e;r<s.length;r+=1){var h=s[r],g=a.images[h];g&&(i[h]={data:g.data.clone(),pixelRatio:g.pixelRatio,sdf:g.sdf})}t(null,i)},ImageManager.prototype.getPixelSize=function(){return{width:this.shelfPack.w,height:this.shelfPack.h}},ImageManager.prototype.getPattern=function(e){var t=this.patterns[e];if(t)return t.position;var a=this.getImage(e);if(!a)return null;var i=a.data.width+2*padding,r=a.data.height+2*padding,s=this.shelfPack.packOne(i,r);if(!s)return null;this.atlasImage.resize(this.getPixelSize());var h=a.data,g=this.atlasImage,n=s.x+padding,o=s.y+padding,d=h.width,l=h.height;RGBAImage.copy(h,g,{x:0,y:0},{x:n,y:o},{width:d,height:l}),RGBAImage.copy(h,g,{x:0,y:l-1},{x:n,y:o-1},{width:d,height:1}),RGBAImage.copy(h,g,{x:0,y:0},{x:n,y:o+l},{width:d,height:1}),RGBAImage.copy(h,g,{x:d-1,y:0},{x:n-1,y:o},{width:1,height:l}),RGBAImage.copy(h,g,{x:0,y:0},{x:n+d,y:o},{width:1,height:l}),this.dirty=!0;var p=imagePosition(s,a);return this.patterns[e]={bin:s,position:p},p},ImageManager.prototype.bind=function(e){var t=e.gl;this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new Texture(e,this.atlasImage,t.RGBA),this.atlasTexture.bind(t.LINEAR,t.CLAMP_TO_EDGE)},module.exports=ImageManager;
},{"../util/image":263,"./image_atlas":87,"./texture":93,"@mapbox/shelf-pack":5}],89:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),LineAtlas=function(t,i){this.width=t,this.height=i,this.nextRow=0,this.bytes=4,this.data=new Uint8Array(this.width*this.height*this.bytes),this.positions={}};LineAtlas.prototype.getDash=function(t,i){var e=t.join(",")+String(i);return this.positions[e]||(this.positions[e]=this.addDash(t,i)),this.positions[e]},LineAtlas.prototype.addDash=function(t,i){var e=this,h=i?7:0,s=2*h+1;if(this.nextRow+s>this.height)return util.warnOnce("LineAtlas out of space"),null;for(var a=0,r=0;r<t.length;r++)a+=t[r];for(var n=this.width/a,E=n/2,T=t.length%2==1,o=-h;o<=h;o++)for(var R=e.nextRow+h+o,d=e.width*R,u=T?-t[t.length-1]:0,l=t[0],x=1,_=0;_<this.width;_++){for(;l<_/n;)u=l,l+=t[x],T&&x===t.length-1&&(l+=t[0]),x++;var g=Math.abs(_-u*n),A=Math.abs(_-l*n),w=Math.min(g,A),D=x%2==1,U=void 0;if(i){var f=h?o/h*(E+1):0;if(D){var p=E-Math.abs(f);U=Math.sqrt(w*w+p*p)}else U=E-Math.sqrt(w*w+f*f)}else U=(D?1:-1)*w;e.data[3+4*(d+_)]=Math.max(0,Math.min(255,U+128))}var v={y:(this.nextRow+h+.5)/this.height,height:2*h/this.height,width:a};return this.nextRow+=s,this.dirty=!0,v},LineAtlas.prototype.bind=function(t){var i=t.gl;this.texture?(i.bindTexture(i.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,i.texSubImage2D(i.TEXTURE_2D,0,0,0,this.width,this.height,i.RGBA,i.UNSIGNED_BYTE,this.data))):(this.texture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.texture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.REPEAT),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.REPEAT),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,this.data))},module.exports=LineAtlas;
},{"../util/util":275}],90:[function(_dereq_,module,exports){
"use strict";var browser=_dereq_("../util/browser"),mat4=_dereq_("@mapbox/gl-matrix").mat4,SourceCache=_dereq_("../source/source_cache"),EXTENT=_dereq_("../data/extent"),pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),util=_dereq_("../util/util"),VertexArrayObject=_dereq_("./vertex_array_object"),ref=_dereq_("../data/array_types"),RasterBoundsArray=ref.RasterBoundsArray,PosArray=ref.PosArray,rasterBoundsAttributes=_dereq_("../data/raster_bounds_attributes"),posAttributes=_dereq_("../data/pos_attributes"),ref$1=_dereq_("../data/program_configuration"),ProgramConfiguration=ref$1.ProgramConfiguration,CrossTileSymbolIndex=_dereq_("../symbol/cross_tile_symbol_index"),shaders=_dereq_("../shaders"),Program=_dereq_("./program"),Context=_dereq_("../gl/context"),DepthMode=_dereq_("../gl/depth_mode"),StencilMode=_dereq_("../gl/stencil_mode"),ColorMode=_dereq_("../gl/color_mode"),Texture=_dereq_("./texture"),updateTileMasks=_dereq_("./tile_mask"),Color=_dereq_("../style-spec/util/color"),draw={symbol:_dereq_("./draw_symbol"),circle:_dereq_("./draw_circle"),heatmap:_dereq_("./draw_heatmap"),line:_dereq_("./draw_line"),fill:_dereq_("./draw_fill"),"fill-extrusion":_dereq_("./draw_fill_extrusion"),hillshade:_dereq_("./draw_hillshade"),raster:_dereq_("./draw_raster"),background:_dereq_("./draw_background"),debug:_dereq_("./draw_debug")},Painter=function(e,r){this.context=new Context(e),this.transform=r,this._tileTextures={},this.setup(),this.numSublayers=SourceCache.maxUnderzooming+SourceCache.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.depthRboNeedsClear=!0,this.emptyProgramConfiguration=new ProgramConfiguration,this.crossTileSymbolIndex=new CrossTileSymbolIndex};Painter.prototype.resize=function(e,r){var t=this,i=this.context.gl;if(this.width=e*browser.devicePixelRatio,this.height=r*browser.devicePixelRatio,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(var s=0,a=t.style._order;s<a.length;s+=1){var o=a[s];t.style._layers[o].resize()}this.depthRbo&&(i.deleteRenderbuffer(this.depthRbo),this.depthRbo=null)},Painter.prototype.setup=function(){var e=this.context,r=new PosArray;r.emplaceBack(0,0),r.emplaceBack(EXTENT,0),r.emplaceBack(0,EXTENT),r.emplaceBack(EXTENT,EXTENT),this.tileExtentBuffer=e.createVertexBuffer(r,posAttributes.members),this.tileExtentVAO=new VertexArrayObject,this.tileExtentPatternVAO=new VertexArrayObject;var t=new PosArray;t.emplaceBack(0,0),t.emplaceBack(EXTENT,0),t.emplaceBack(EXTENT,EXTENT),t.emplaceBack(0,EXTENT),t.emplaceBack(0,0),this.debugBuffer=e.createVertexBuffer(t,posAttributes.members),this.debugVAO=new VertexArrayObject;var i=new RasterBoundsArray;i.emplaceBack(0,0,0,0),i.emplaceBack(EXTENT,0,EXTENT,0),i.emplaceBack(0,EXTENT,0,EXTENT),i.emplaceBack(EXTENT,EXTENT,EXTENT,EXTENT),this.rasterBoundsBuffer=e.createVertexBuffer(i,rasterBoundsAttributes.members),this.rasterBoundsVAO=new VertexArrayObject;var s=new PosArray;s.emplaceBack(0,0),s.emplaceBack(1,0),s.emplaceBack(0,1),s.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(s,posAttributes.members),this.viewportVAO=new VertexArrayObject},Painter.prototype.clearStencil=function(){var e=this.context,r=e.gl;e.setColorMode(ColorMode.disabled),e.setDepthMode(DepthMode.disabled),e.setStencilMode(new StencilMode({func:r.ALWAYS,mask:0},0,255,r.ZERO,r.ZERO,r.ZERO));var t=mat4.create();mat4.ortho(t,0,this.width,this.height,0,0,1),mat4.scale(t,t,[r.drawingBufferWidth,r.drawingBufferHeight,0]);var i=this.useProgram("clippingMask");r.uniformMatrix4fv(i.uniforms.u_matrix,!1,t),this.viewportVAO.bind(e,i,this.viewportBuffer,[]),r.drawArrays(r.TRIANGLE_STRIP,0,4)},Painter.prototype._renderTileClippingMasks=function(e){var r=this,t=this.context,i=t.gl;t.setColorMode(ColorMode.disabled),t.setDepthMode(DepthMode.disabled);var s=1;this._tileClippingMaskIDs={};for(var a=0,o=e;a<o.length;a+=1){var n=o[a],l=r._tileClippingMaskIDs[n.key]=s++;t.setStencilMode(new StencilMode({func:i.ALWAYS,mask:0},l,255,i.KEEP,i.KEEP,i.REPLACE));var c=r.useProgram("clippingMask");i.uniformMatrix4fv(c.uniforms.u_matrix,!1,n.posMatrix),r.tileExtentVAO.bind(r.context,c,r.tileExtentBuffer,[]),i.drawArrays(i.TRIANGLE_STRIP,0,r.tileExtentBuffer.length)}},Painter.prototype.stencilModeForClipping=function(e){var r=this.context.gl;return new StencilMode({func:r.EQUAL,mask:255},this._tileClippingMaskIDs[e.key],0,r.KEEP,r.KEEP,r.REPLACE)},Painter.prototype.colorModeForRenderPass=function(){var e=this.context.gl;if(this._showOverdrawInspector){return new ColorMode([e.CONSTANT_COLOR,e.ONE],new Color(1/8,1/8,1/8,0),[!0,!0,!0,!0])}return"opaque"===this.renderPass?ColorMode.unblended:ColorMode.alphaBlended},Painter.prototype.depthModeForSublayer=function(e,r,t){var i=1-((1+this.currentLayer)*this.numSublayers+e)*this.depthEpsilon,s=i-1+this.depthRange;return new DepthMode(t||this.context.gl.LEQUAL,r,[s,i])},Painter.prototype.render=function(e,r){var t=this;this.style=e,this.options=r,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(browser.now());for(var i in e.sourceCaches){var s=t.style.sourceCaches[i];s.used&&s.prepare(t.context)}var a=this.style._order,o=util.filterObject(this.style.sourceCaches,function(e){return"raster"===e.getSource().type||"raster-dem"===e.getSource().type});for(var n in o)!function(e){var r=o[e],i=r.getVisibleCoordinates(),s=i.map(function(e){return r.getTile(e)});updateTileMasks(s,t.context)}(n);this.renderPass="offscreen";var l,c=[];this.depthRboNeedsClear=!0;for(var h=0;h<a.length;h++){var u=t.style._layers[a[h]];u.hasOffscreenPass()&&!u.isHidden(t.transform.zoom)&&(u.source!==(l&&l.id)&&(l=t.style.sourceCaches[u.source],c=[],l&&(c=l.getVisibleCoordinates(),c.reverse())),c.length&&t.renderLayer(t,l,u,c))}this.context.bindFramebuffer.set(null),this.context.clear({color:r.showOverdrawInspector?Color.black:Color.transparent,depth:1}),this._showOverdrawInspector=r.showOverdrawInspector,this.depthRange=(e._order.length+2)*this.numSublayers*this.depthEpsilon,this.renderPass="opaque";var d,p=[];for(this.currentLayer=a.length-1,this.currentLayer;this.currentLayer>=0;this.currentLayer--){var f=t.style._layers[a[t.currentLayer]];f.source!==(d&&d.id)&&(d=t.style.sourceCaches[f.source],p=[],d&&(t.clearStencil(),p=d.getVisibleCoordinates(),d.getSource().isTileClipped&&t._renderTileClippingMasks(p))),t.renderLayer(t,d,f,p)}this.renderPass="translucent";var m,g=[];for(this.currentLayer=0,this.currentLayer;this.currentLayer<a.length;this.currentLayer++){var y=t.style._layers[a[t.currentLayer]];y.source!==(m&&m.id)&&(m=t.style.sourceCaches[y.source],g=[],m&&(t.clearStencil(),g=m.getVisibleCoordinates(),m.getSource().isTileClipped&&t._renderTileClippingMasks(g)),g.reverse()),t.renderLayer(t,m,y,g)}if(this.options.showTileBoundaries){var b=this.style.sourceCaches[Object.keys(this.style.sourceCaches)[0]];b&&draw.debug(this,b,b.getVisibleCoordinates())}},Painter.prototype.setupOffscreenDepthRenderbuffer=function(){var e=this.context;this.depthRbo||(this.depthRbo=e.createRenderbuffer(e.gl.DEPTH_COMPONENT16,this.width,this.height))},Painter.prototype.renderLayer=function(e,r,t,i){t.isHidden(this.transform.zoom)||("background"===t.type||i.length)&&(this.id=t.id,draw[t.type](e,r,t,i))},Painter.prototype.translatePosMatrix=function(e,r,t,i,s){if(!t[0]&&!t[1])return e;var a=s?"map"===i?this.transform.angle:0:"viewport"===i?-this.transform.angle:0;if(a){var o=Math.sin(a),n=Math.cos(a);t=[t[0]*n-t[1]*o,t[0]*o+t[1]*n]}var l=[s?t[0]:pixelsToTileUnits(r,t[0],this.transform.zoom),s?t[1]:pixelsToTileUnits(r,t[1],this.transform.zoom),0],c=new Float32Array(16);return mat4.translate(c,e,l),c},Painter.prototype.saveTileTexture=function(e){var r=this._tileTextures[e.size[0]];r?r.push(e):this._tileTextures[e.size[0]]=[e]},Painter.prototype.getTileTexture=function(e){var r=this._tileTextures[e];return r&&r.length>0?r.pop():null},Painter.prototype._createProgramCached=function(e,r){this.cache=this.cache||{};var t=""+e+(r.cacheKey||"")+(this._showOverdrawInspector?"/overdraw":"");return this.cache[t]||(this.cache[t]=new Program(this.context,shaders[e],r,this._showOverdrawInspector)),this.cache[t]},Painter.prototype.useProgram=function(e,r){var t=this._createProgramCached(e,r||this.emptyProgramConfiguration);return this.context.program.set(t.program),t},module.exports=Painter;
},{"../data/array_types":39,"../data/extent":53,"../data/pos_attributes":57,"../data/program_configuration":58,"../data/raster_bounds_attributes":59,"../gl/color_mode":65,"../gl/context":66,"../gl/depth_mode":67,"../gl/stencil_mode":70,"../shaders":97,"../source/pixels_to_tile_units":104,"../source/source_cache":111,"../style-spec/util/color":153,"../symbol/cross_tile_symbol_index":218,"../util/browser":252,"../util/util":275,"./draw_background":74,"./draw_circle":75,"./draw_debug":77,"./draw_fill":78,"./draw_fill_extrusion":79,"./draw_heatmap":80,"./draw_hillshade":81,"./draw_line":82,"./draw_raster":83,"./draw_symbol":84,"./program":92,"./texture":93,"./tile_mask":94,"./vertex_array_object":95,"@mapbox/gl-matrix":2}],91:[function(_dereq_,module,exports){
"use strict";var pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units");exports.isPatternMissing=function(e,i){if(!e)return!1;var r=i.imageManager.getPattern(e.from),t=i.imageManager.getPattern(e.to);return!r||!t},exports.prepare=function(e,i,r){var t=i.context,n=t.gl,o=i.imageManager.getPattern(e.from),a=i.imageManager.getPattern(e.to);n.uniform1i(r.uniforms.u_image,0),n.uniform2fv(r.uniforms.u_pattern_tl_a,o.tl),n.uniform2fv(r.uniforms.u_pattern_br_a,o.br),n.uniform2fv(r.uniforms.u_pattern_tl_b,a.tl),n.uniform2fv(r.uniforms.u_pattern_br_b,a.br);var u=i.imageManager.getPixelSize(),f=u.width,m=u.height;n.uniform2fv(r.uniforms.u_texsize,[f,m]),n.uniform1f(r.uniforms.u_mix,e.t),n.uniform2fv(r.uniforms.u_pattern_size_a,o.displaySize),n.uniform2fv(r.uniforms.u_pattern_size_b,a.displaySize),n.uniform1f(r.uniforms.u_scale_a,e.fromScale),n.uniform1f(r.uniforms.u_scale_b,e.toScale),t.activeTexture.set(n.TEXTURE0),i.imageManager.bind(i.context)},exports.setTile=function(e,i,r){var t=i.context.gl;t.uniform1f(r.uniforms.u_tile_units_to_pixels,1/pixelsToTileUnits(e,1,i.transform.tileZoom));var n=Math.pow(2,e.tileID.overscaledZ),o=e.tileSize*Math.pow(2,i.transform.tileZoom)/n,a=o*(e.tileID.canonical.x+e.tileID.wrap*n),u=o*e.tileID.canonical.y;t.uniform2f(r.uniforms.u_pixel_coord_upper,a>>16,u>>16),t.uniform2f(r.uniforms.u_pixel_coord_lower,65535&a,65535&u)};
},{"../source/pixels_to_tile_units":104}],92:[function(_dereq_,module,exports){
"use strict";var browser=_dereq_("../util/browser"),shaders=_dereq_("../shaders"),ref=_dereq_("../data/program_configuration"),ProgramConfiguration=ref.ProgramConfiguration,VertexArrayObject=_dereq_("./vertex_array_object"),Context=_dereq_("../gl/context"),Program=function(r,e,t,a){var o=this,i=r.gl;this.program=i.createProgram();var n=t.defines().concat("#define DEVICE_PIXEL_RATIO "+browser.devicePixelRatio.toFixed(1));a&&n.push("#define OVERDRAW_INSPECTOR;");var s=n.concat(shaders.prelude.fragmentSource,e.fragmentSource).join("\n"),m=n.concat(shaders.prelude.vertexSource,e.vertexSource).join("\n"),g=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(g,s),i.compileShader(g),i.attachShader(this.program,g);var c=i.createShader(i.VERTEX_SHADER);i.shaderSource(c,m),i.compileShader(c),i.attachShader(this.program,c);for(var u=t.layoutAttributes||[],h=0;h<u.length;h++)i.bindAttribLocation(o.program,h,u[h].name);i.linkProgram(this.program),this.numAttributes=i.getProgramParameter(this.program,i.ACTIVE_ATTRIBUTES),this.attributes={},this.uniforms={};for(var f=0;f<this.numAttributes;f++){var d=i.getActiveAttrib(o.program,f);d&&(o.attributes[d.name]=i.getAttribLocation(o.program,d.name))}for(var v=i.getProgramParameter(this.program,i.ACTIVE_UNIFORMS),p=0;p<v;p++){var S=i.getActiveUniform(o.program,p);S&&(o.uniforms[S.name]=i.getUniformLocation(o.program,S.name))}};Program.prototype.draw=function(r,e,t,a,o,i,n,s,m){for(var g,c=this,u=r.gl,h=(g={},g[u.LINES]=2,g[u.TRIANGLES]=3,g)[e],f=0,d=i.get();f<d.length;f+=1){var v=d[f],p=v.vaos||(v.vaos={});(p[t]||(p[t]=new VertexArrayObject)).bind(r,c,a,n?n.getPaintVertexBuffers():[],o,v.vertexOffset,s,m),u.drawElements(e,v.primitiveLength*h,u.UNSIGNED_SHORT,v.primitiveOffset*h*2)}},module.exports=Program;
},{"../data/program_configuration":58,"../gl/context":66,"../shaders":97,"../util/browser":252,"./vertex_array_object":95}],93:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/window"),HTMLImageElement=ref.HTMLImageElement,HTMLCanvasElement=ref.HTMLCanvasElement,HTMLVideoElement=ref.HTMLVideoElement,ImageData=ref.ImageData,Texture=function(e,t,i,r){this.context=e;var a=t.width,T=t.height;this.size=[a,T],this.format=i,this.texture=e.gl.createTexture(),this.update(t,r)};Texture.prototype.update=function(e,t){var i=e.width,r=e.height;this.size=[i,r];var a=this,T=a.context,n=T.gl;n.bindTexture(n.TEXTURE_2D,this.texture),T.pixelStoreUnpack.set(1),this.format===n.RGBA&&!1!==t&&T.pixelStoreUnpackPremultiplyAlpha.set(!0),e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData?n.texImage2D(n.TEXTURE_2D,0,this.format,this.format,n.UNSIGNED_BYTE,e):n.texImage2D(n.TEXTURE_2D,0,this.format,i,r,0,this.format,n.UNSIGNED_BYTE,e.data)},Texture.prototype.bind=function(e,t,i){var r=this,a=r.context,T=a.gl;T.bindTexture(T.TEXTURE_2D,this.texture),e!==this.filter&&(T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,e),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,i||e),this.filter=e),t!==this.wrap&&(T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_S,t),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_T,t),this.wrap=t)},Texture.prototype.destroy=function(){this.context.gl.deleteTexture(this.texture),this.texture=null},module.exports=Texture;
},{"../util/window":254}],94:[function(_dereq_,module,exports){
"use strict";function computeTileMasks(e,i,l,a,r){for(var n=0;n<l.length;n++){var s=l[n];if(a.isLessThan(s.tileID))break;if(i.key===s.tileID.key)return;if(s.tileID.isChildOf(i)){for(var t=i.children(1/0),c=0;c<t.length;c++){computeTileMasks(e,t[c],l.slice(n),a,r)}return}}var o=i.overscaledZ-e.overscaledZ,D=new CanonicalTileID(o,i.canonical.x-(e.canonical.x<<o),i.canonical.y-(e.canonical.y<<o));r[D.key]=r[D.key]||D}var ref=_dereq_("../source/tile_id"),OverscaledTileID=ref.OverscaledTileID,CanonicalTileID=ref.CanonicalTileID;module.exports=function(e,i){for(var l=e.sort(function(e,i){return e.tileID.isLessThan(i.tileID)?-1:i.tileID.isLessThan(e.tileID)?1:0}),a=0;a<l.length;a++){var r={},n=l[a],s=l.slice(a+1);computeTileMasks(n.tileID.wrapped(),n.tileID,s,new OverscaledTileID(0,n.tileID.wrap+1,0,0,0),r),n.setMask(r,i)}};
},{"../source/tile_id":114}],95:[function(_dereq_,module,exports){
"use strict";var VertexArrayObject=function(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null};VertexArrayObject.prototype.bind=function(t,e,r,i,n,s,u,o){var b=this;this.context=t;for(var a=this.boundPaintVertexBuffers.length!==i.length,f=0;!a&&f<i.length;f++)b.boundPaintVertexBuffers[f]!==i[f]&&(a=!0);var x=!this.vao||this.boundProgram!==e||this.boundLayoutVertexBuffer!==r||a||this.boundIndexBuffer!==n||this.boundVertexOffset!==s||this.boundDynamicVertexBuffer!==u||this.boundDynamicVertexBuffer2!==o;!t.extVertexArrayObject||x?this.freshBind(e,r,i,n,s,u,o):(t.bindVertexArrayOES.set(this.vao),u&&u.bind(),n&&n.dynamicDraw&&n.bind(),o&&o.bind())},VertexArrayObject.prototype.freshBind=function(t,e,r,i,n,s,u){var o,b=t.numAttributes,a=this.context,f=a.gl;if(a.extVertexArrayObject)this.vao&&this.destroy(),this.vao=a.extVertexArrayObject.createVertexArrayOES(),a.bindVertexArrayOES.set(this.vao),o=0,this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=r,this.boundIndexBuffer=i,this.boundVertexOffset=n,this.boundDynamicVertexBuffer=s,this.boundDynamicVertexBuffer2=u;else{o=a.currentNumAttributes||0;for(var x=b;x<o;x++)f.disableVertexAttribArray(x)}e.enableAttributes(f,t);for(var d=0,h=r;d<h.length;d+=1){h[d].enableAttributes(f,t)}s&&s.enableAttributes(f,t),u&&u.enableAttributes(f,t),e.bind(),e.setVertexAttribPointers(f,t,n);for(var V=0,l=r;V<l.length;V+=1){var y=l[V];y.bind(),y.setVertexAttribPointers(f,t,n)}s&&(s.bind(),s.setVertexAttribPointers(f,t,n)),i&&i.bind(),u&&(u.bind(),u.setVertexAttribPointers(f,t,n)),a.currentNumAttributes=b},VertexArrayObject.prototype.destroy=function(){this.vao&&(this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null)},module.exports=VertexArrayObject;
},{}],96:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util");exports.packUint8ToFloat=function(t,l){return t=util.clamp(Math.floor(t),0,255),l=util.clamp(Math.floor(l),0,255),256*t+l};
},{"../util/util":275}],97:[function(_dereq_,module,exports){
"use strict";var shaders={prelude:{fragmentSource:"#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n",vertexSource:"#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\nvec2 unpack_opacity(const float packedOpacity) {\n    int intOpacity = int(packedOpacity) / 2;\n    return vec2(float(intOpacity) / 127.0, mod(packedOpacity, 2.0));\n}\n\n// To minimize the number of attributes needed, we encode a 4-component\n// color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n"},background:{fragmentSource:"uniform vec4 u_color;\nuniform float u_opacity;\n\nvoid main() {\n    gl_FragColor = u_color * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},backgroundPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\nuniform float u_opacity;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\nvoid main() {\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"},circle:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    vec2 extrude = v_data.xy;\n    float extrude_length = length(extrude);\n\n    lowp float antialiasblur = v_data.z;\n    float antialiased_blur = -max(blur, antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform bool u_pitch_with_map;\nuniform vec2 u_extrude_scale;\nuniform highp float u_camera_to_center_distance;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec2 circle_center = floor(a_pos * 0.5);\n    if (u_pitch_with_map) {\n        vec2 corner_position = circle_center;\n        if (u_scale_with_map) {\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale;\n        } else {\n            // Pitching the circle with the map effectively scales it with the map\n            // To counteract the effect for pitch-scale: viewport, we rescale the\n            // whole circle based on the pitch scaling effect at its central point\n            vec4 projected_center = u_matrix * vec4(circle_center, 0, 1);\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale * (projected_center.w / u_camera_to_center_distance);\n        }\n\n        gl_Position = u_matrix * vec4(corner_position, 0, 1);\n    } else {\n        gl_Position = u_matrix * vec4(circle_center, 0, 1);\n\n        if (u_scale_with_map) {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * u_camera_to_center_distance;\n        } else {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * gl_Position.w;\n        }\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    lowp float antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n\n    v_data = vec3(extrude.x, extrude.y, antialiasblur);\n}\n"},clippingMask:{fragmentSource:"void main() {\n    gl_FragColor = vec4(1.0);\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},heatmap:{fragmentSource:"#pragma mapbox: define highp float weight\n\nuniform highp float u_intensity;\nvarying vec2 v_extrude;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main() {\n    #pragma mapbox: initialize highp float weight\n\n    // Kernel density estimation with a Gaussian kernel of size 5x5\n    float d = -0.5 * 3.0 * 3.0 * dot(v_extrude, v_extrude);\n    float val = weight * u_intensity * GAUSS_COEF * exp(d);\n\n    gl_FragColor = vec4(val, 1.0, 1.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\n\nuniform mat4 u_matrix;\nuniform float u_extrude_scale;\nuniform float u_opacity;\nuniform float u_intensity;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_extrude;\n\n// Effective \"0\" in the kernel density texture to adjust the kernel size to;\n// this empirically chosen number minimizes artifacts on overlapping kernels\n// for typical heatmap cases (assuming clustered source)\nconst highp float ZERO = 1.0 / 255.0 / 16.0;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main(void) {\n    #pragma mapbox: initialize highp float weight\n    #pragma mapbox: initialize mediump float radius\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 unscaled_extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // This 'extrude' comes in ranging from [-1, -1], to [1, 1].  We'll use\n    // it to produce the vertices of a square mesh framing the point feature\n    // we're adding to the kernel density texture.  We'll also pass it as\n    // a varying, so that the fragment shader can determine the distance of\n    // each fragment from the point feature.\n    // Before we do so, we need to scale it up sufficiently so that the\n    // kernel falls effectively to zero at the edge of the mesh.\n    // That is, we want to know S such that\n    // weight * u_intensity * GAUSS_COEF * exp(-0.5 * 3.0^2 * S^2) == ZERO\n    // Which solves to:\n    // S = sqrt(-2.0 * log(ZERO / (weight * u_intensity * GAUSS_COEF))) / 3.0\n    float S = sqrt(-2.0 * log(ZERO / weight / u_intensity / GAUSS_COEF)) / 3.0;\n\n    // Pass the varying in units of radius\n    v_extrude = S * unscaled_extrude;\n\n    // Scale by radius and the zoom-based scale factor to produce actual\n    // mesh position\n    vec2 extrude = v_extrude * radius * u_extrude_scale;\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec4 pos = vec4(floor(a_pos * 0.5) + extrude, 0, 1);\n\n    gl_Position = u_matrix * pos;\n}\n"},heatmapTexture:{fragmentSource:"uniform sampler2D u_image;\nuniform sampler2D u_color_ramp;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    float t = texture2D(u_image, v_pos).r;\n    vec4 color = texture2D(u_color_ramp, vec2(t, 0.5));\n    gl_FragColor = color * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"},collisionBox:{fragmentSource:"\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        gl_FragColor *= .1;\n    }\n}",vertexSource:"attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 0.5 + 0.5 * (u_camera_to_center_distance / camera_to_anchor_distance);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n    gl_Position.xy += a_extrude * u_extrude_scale * gl_Position.w * collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n}\n"},collisionCircle:{fragmentSource:"\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    vec4 color = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        color = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        color *= .2;\n    }\n\n    float extrude_scale_length = length(v_extrude_scale);\n    float extrude_length = length(v_extrude) * extrude_scale_length;\n    float stroke_width = 15.0 * extrude_scale_length;\n    float radius = v_radius * extrude_scale_length;\n\n    float distance_to_edge = abs(extrude_length - radius);\n    float opacity_t = smoothstep(-stroke_width, 0.0, -distance_to_edge);\n\n    gl_FragColor = opacity_t * color;\n}\n",vertexSource:"attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\n\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 0.5 + 0.5 * (u_camera_to_center_distance / camera_to_anchor_distance);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n\n    highp float padding_factor = 1.2; // Pad the vertices slightly to make room for anti-alias blur\n    gl_Position.xy += a_extrude * u_extrude_scale * padding_factor * gl_Position.w * collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n    v_radius = abs(a_extrude.y); // We don't pitch the circles, so both units of the extrusion vector are equal in magnitude to the radius\n\n    v_extrude = a_extrude * padding_factor;\n    v_extrude_scale = u_extrude_scale * u_camera_to_center_distance * collision_perspective_ratio;\n}\n"},debug:{fragmentSource:"uniform highp vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},fill:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_FragColor = color * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n"},fillOutline:{fragmentSource:"#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_pos;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n    gl_FragColor = outline_color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\nuniform vec2 u_world;\n\nvarying vec2 v_pos;\n\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillOutlinePattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    // find distance to outline for alpha interpolation\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n\n\n    gl_FragColor = mix(color1, color2, u_mix) * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n"},fillPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n"},fillExtrusion:{fragmentSource:"varying vec4 v_color;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    gl_FragColor = v_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec4 a_normal_ed;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    vec3 normal = a_normal_ed.xyz;\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n"},fillExtrusionPattern:{fragmentSource:"uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec4 a_normal_ed;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec3 normal = a_normal_ed.xyz;\n    float edgedistance = a_normal_ed.w;\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = normal.x == 1.0 && normal.y == 0.0 && normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n"},extrusionTexture:{fragmentSource:"uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n"},hillshadePrepare:{fragmentSource:"#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform sampler2D u_image;\nvarying vec2 v_pos;\nuniform vec2 u_dimension;\nuniform float u_zoom;\n\nfloat getElevation(vec2 coord, float bias) {\n    // Convert encoded elevation value to meters\n    vec4 data = texture2D(u_image, coord) * 255.0;\n    return (data.r + data.g * 256.0 + data.b * 256.0 * 256.0) / 4.0;\n}\n\nvoid main() {\n    vec2 epsilon = 1.0 / u_dimension;\n\n    // queried pixels:\n    // +-----------+\n    // |   |   |   |\n    // | a | b | c |\n    // |   |   |   |\n    // +-----------+\n    // |   |   |   |\n    // | d | e | f |\n    // |   |   |   |\n    // +-----------+\n    // |   |   |   |\n    // | g | h | i |\n    // |   |   |   |\n    // +-----------+\n\n    float a = getElevation(v_pos + vec2(-epsilon.x, -epsilon.y), 0.0);\n    float b = getElevation(v_pos + vec2(0, -epsilon.y), 0.0);\n    float c = getElevation(v_pos + vec2(epsilon.x, -epsilon.y), 0.0);\n    float d = getElevation(v_pos + vec2(-epsilon.x, 0), 0.0);\n    float e = getElevation(v_pos, 0.0);\n    float f = getElevation(v_pos + vec2(epsilon.x, 0), 0.0);\n    float g = getElevation(v_pos + vec2(-epsilon.x, epsilon.y), 0.0);\n    float h = getElevation(v_pos + vec2(0, epsilon.y), 0.0);\n    float i = getElevation(v_pos + vec2(epsilon.x, epsilon.y), 0.0);\n\n    // here we divide the x and y slopes by 8 * pixel size\n    // where pixel size (aka meters/pixel) is:\n    // circumference of the world / (pixels per tile * number of tiles)\n    // which is equivalent to: 8 * 40075016.6855785 / (512 * pow(2, u_zoom))\n    // which can be reduced to: pow(2, 19.25619978527 - u_zoom)\n    // we want to vertically exaggerate the hillshading though, because otherwise\n    // it is barely noticeable at low zooms. to do this, we multiply this by some\n    // scale factor pow(2, (u_zoom - 14) * a) where a is an arbitrary value and 14 is the\n    // maxzoom of the tile source. here we use a=0.3 which works out to the\n    // expression below. see nickidlugash's awesome breakdown for more info\n    // https://github.com/mapbox/mapbox-gl-js/pull/5286#discussion_r148419556\n    float exaggeration = u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;\n\n    vec2 deriv = vec2(\n        (c + f + f + i) - (a + d + d + g),\n        (g + h + h + i) - (a + b + b + c)\n    ) /  pow(2.0, (u_zoom - 14.0) * exaggeration + 19.2562 - u_zoom);\n\n    gl_FragColor = clamp(vec4(\n        deriv.x / 2.0 + 0.5,\n        deriv.y / 2.0 + 0.5,\n        1.0,\n        1.0), 0.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (a_texture_pos / 8192.0) / 2.0 + 0.25;\n}\n"},hillshade:{
fragmentSource:"uniform sampler2D u_image;\nvarying vec2 v_pos;\n\nuniform vec2 u_latrange;\nuniform vec2 u_light;\nuniform vec4 u_shadow;\nuniform vec4 u_highlight;\nuniform vec4 u_accent;\n\n#define PI 3.141592653589793\n\nvoid main() {\n    vec4 pixel = texture2D(u_image, v_pos);\n\n    vec2 deriv = ((pixel.rg * 2.0) - 1.0);\n\n    // We divide the slope by a scale factor based on the cosin of the pixel's approximate latitude\n    // to account for mercator projection distortion. see #4807 for details\n    float scaleFactor = cos(radians((u_latrange[0] - u_latrange[1]) * (1.0 - v_pos.y) + u_latrange[1]));\n    // We also multiply the slope by an arbitrary z-factor of 1.25\n    float slope = atan(1.25 * length(deriv) / scaleFactor);\n    float aspect = deriv.x != 0.0 ? atan(deriv.y, -deriv.x) : PI / 2.0 * (deriv.y > 0.0 ? 1.0 : -1.0);\n\n    float intensity = u_light.x;\n    // We add PI to make this property match the global light object, which adds PI/2 to the light's azimuthal\n    // position property to account for 0deg corresponding to north/the top of the viewport in the style spec\n    // and the original shader was written to accept (-illuminationDirection - 90) as the azimuthal.\n    float azimuth = u_light.y + PI;\n\n    // We scale the slope exponentially based on intensity, using a calculation similar to\n    // the exponential interpolation function in the style spec:\n    // https://github.com/mapbox/mapbox-gl-js/blob/master/src/style-spec/expression/definitions/interpolate.js#L217-L228\n    // so that higher intensity values create more opaque hillshading.\n    float base = 1.875 - intensity * 1.75;\n    float maxValue = 0.5 * PI;\n    float scaledSlope = intensity != 0.5 ? ((pow(base, slope) - 1.0) / (pow(base, maxValue) - 1.0)) * maxValue : slope;\n\n    // The accent color is calculated with the cosine of the slope while the shade color is calculated with the sine\n    // so that the accent color's rate of change eases in while the shade color's eases out.\n    float accent = cos(scaledSlope);\n    // We multiply both the accent and shade color by a clamped intensity value\n    // so that intensities >= 0.5 do not additionally affect the color values\n    // while intensity values < 0.5 make the overall color more transparent.\n    vec4 accent_color = (1.0 - accent) * u_accent * clamp(intensity * 2.0, 0.0, 1.0);\n    float shade = abs(mod((aspect + azimuth) / PI + 0.5, 2.0) - 1.0);\n    vec4 shade_color = mix(u_shadow, u_highlight, shade) * sin(scaledSlope) * clamp(intensity * 2.0, 0.0, 1.0);\n    gl_FragColor = accent_color * (1.0 - shade_color.a) + shade_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = a_texture_pos / 8192.0;\n}\n"},line:{fragmentSource:"#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n"},linePattern:{fragmentSource:"uniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_fade;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float x_a = mod(v_linesofar / u_pattern_size_a.x, 1.0);\n    float x_b = mod(v_linesofar / u_pattern_size_b.x, 1.0);\n    float y_a = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_a.y);\n    float y_b = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_b.y);\n    vec2 pos_a = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, vec2(x_a, y_a));\n    vec2 pos_b = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, vec2(x_b, y_b));\n\n    vec4 color = mix(texture2D(u_image, pos_a), texture2D(u_image, pos_b), u_fade);\n\n    gl_FragColor = color * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_linesofar = a_linesofar;\n    v_width2 = vec2(outset, inset);\n}\n"},lineSDF:{fragmentSource:"\nuniform sampler2D u_image;\nuniform float u_sdfgamma;\nuniform float u_mix;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float sdfdist_a = texture2D(u_image, v_tex_a).a;\n    float sdfdist_b = texture2D(u_image, v_tex_b).a;\n    float sdfdist = mix(sdfdist_a, sdfdist_b, u_mix);\n    alpha *= smoothstep(0.5 - u_sdfgamma / floorwidth, 0.5 + u_sdfgamma / floorwidth, sdfdist);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_patternscale_a;\nuniform float u_tex_y_a;\nuniform vec2 u_patternscale_b;\nuniform float u_tex_y_b;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist =outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_tex_a = vec2(a_linesofar * u_patternscale_a.x / floorwidth, normal.y * u_patternscale_a.y + u_tex_y_a);\n    v_tex_b = vec2(a_linesofar * u_patternscale_b.x / floorwidth, normal.y * u_patternscale_b.y + u_tex_y_b);\n\n    v_width2 = vec2(outset, inset);\n}\n"},raster:{fragmentSource:"uniform float u_fade_t;\nuniform float u_opacity;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nuniform float u_brightness_low;\nuniform float u_brightness_high;\n\nuniform float u_saturation_factor;\nuniform float u_contrast_factor;\nuniform vec3 u_spin_weights;\n\nvoid main() {\n\n    // read and cross-fade colors from the main and parent tiles\n    vec4 color0 = texture2D(u_image0, v_pos0);\n    vec4 color1 = texture2D(u_image1, v_pos1);\n    if (color0.a > 0.0) {\n        color0.rgb = color0.rgb / color0.a;\n    }\n    if (color1.a > 0.0) {\n        color1.rgb = color1.rgb / color1.a;\n    }\n    vec4 color = mix(color0, color1, u_fade_t);\n    color.a *= u_opacity;\n    vec3 rgb = color.rgb;\n\n    // spin\n    rgb = vec3(\n        dot(rgb, u_spin_weights.xyz),\n        dot(rgb, u_spin_weights.zxy),\n        dot(rgb, u_spin_weights.yzx));\n\n    // saturation\n    float average = (color.r + color.g + color.b) / 3.0;\n    rgb += (average - rgb) * u_saturation_factor;\n\n    // contrast\n    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;\n\n    // brightness\n    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);\n    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);\n\n    gl_FragColor = vec4(mix(u_high_vec, u_low_vec, rgb) * color.a, color.a);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"uniform mat4 u_matrix;\nuniform vec2 u_tl_parent;\nuniform float u_scale_parent;\nuniform float u_buffer_scale;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    // We are using Int16 for texture position coordinates to give us enough precision for\n    // fractional coordinates. We use 8192 to scale the texture coordinates in the buffer\n    // as an arbitrarily high number to preserve adequate precision when rendering.\n    // This is also the same value as the EXTENT we are using for our tile buffer pos coordinates,\n    // so math for modifying either is consistent.\n    v_pos0 = (((a_texture_pos / 8192.0) - 0.5) / u_buffer_scale ) + 0.5;\n    v_pos1 = (v_pos0 * u_scale_parent) + u_tl_parent;\n}\n"},symbolIcon:{fragmentSource:"uniform sampler2D u_texture;\n\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    lowp float alpha = opacity * v_fade_opacity;\n    gl_FragColor = texture2D(u_texture, v_tex) * alpha;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform float u_fade_change;\n\n#pragma mapbox: define lowp float opacity\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n\n    float size;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // See comments in symbol_sdf.vertex\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // See comments in symbol_sdf.vertex\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n\n    v_tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    v_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n}\n"},symbolSDF:{fragmentSource:"#define SDF_PX 8.0\n#define EDGE_GAMMA 0.105/DEVICE_PIXEL_RATIO\n\nuniform bool u_is_halo;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform sampler2D u_texture;\nuniform highp float u_gamma_scale;\nuniform bool u_is_text;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 tex = v_data0.xy;\n    float gamma_scale = v_data1.x;\n    float size = v_data1.y;\n    float fade_opacity = v_data1[2];\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    lowp vec4 color = fill_color;\n    highp float gamma = EDGE_GAMMA / (fontScale * u_gamma_scale);\n    lowp float buff = (256.0 - 64.0) / 256.0;\n    if (u_is_halo) {\n        color = halo_color;\n        gamma = (halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (fontScale * u_gamma_scale);\n        buff = (6.0 - halo_width / fontScale) / SDF_PX;\n    }\n\n    lowp float dist = texture2D(u_texture, tex).a;\n    highp float gamma_scaled = gamma * gamma_scale;\n    highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist);\n\n    gl_FragColor = color * (alpha * opacity * fade_opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",vertexSource:"const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\n// contents of a_size vary based on the type of property value\n// used for {text,icon}-size.\n// For constants, a_size is disabled.\n// For source functions, we bind only one value per vertex: the value of {text,icon}-size evaluated for the current feature.\n// For composite functions:\n// [ text-size(lowerZoomStop, feature),\n//   text-size(upperZoomStop, feature) ]\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\n\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform highp float u_camera_to_center_distance;\nuniform float u_fade_change;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n    float size;\n\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // If the label is pitched with the map, layout is done in pitched space,\n    // which makes labels in the distance smaller relative to viewport space.\n    // We counteract part of that effect by multiplying by the perspective ratio.\n    // If the label isn't pitched with the map, we do layout in viewport space,\n    // which makes labels in the distance larger relative to the features around\n    // them. We counteract part of that effect by dividing by the perspective ratio.\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // Point labels with 'rotation-alignment: map' are horizontal with respect to tile units\n        // To figure out that angle in projected space, we draw a short horizontal line in tile\n        // space, project it, and measure its angle in projected space.\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n    float gamma_scale = gl_Position.w;\n\n    vec2 tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    float interpolated_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n\n    v_data0 = vec2(tex.x, tex.y);\n    v_data1 = vec3(gamma_scale, size, interpolated_fade_opacity);\n}\n"}},re=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,loop=function(e){var n=shaders[e],a={};n.fragmentSource=n.fragmentSource.replace(re,function(e,n,t,o,i){return a[i]=!0,"define"===n?"\n#ifndef HAS_UNIFORM_u_"+i+"\nvarying "+t+" "+o+" "+i+";\n#else\nuniform "+t+" "+o+" u_"+i+";\n#endif\n":"\n#ifdef HAS_UNIFORM_u_"+i+"\n    "+t+" "+o+" "+i+" = u_"+i+";\n#endif\n"}),n.vertexSource=n.vertexSource.replace(re,function(e,n,t,o,i){var r="float"===o?"vec2":"vec4";return a[i]?"define"===n?"\n#ifndef HAS_UNIFORM_u_"+i+"\nuniform lowp float a_"+i+"_t;\nattribute "+t+" "+r+" a_"+i+";\nvarying "+t+" "+o+" "+i+";\n#else\nuniform "+t+" "+o+" u_"+i+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+i+"\n    "+i+" = unpack_mix_"+r+"(a_"+i+", a_"+i+"_t);\n#else\n    "+t+" "+o+" "+i+" = u_"+i+";\n#endif\n":"define"===n?"\n#ifndef HAS_UNIFORM_u_"+i+"\nuniform lowp float a_"+i+"_t;\nattribute "+t+" "+r+" a_"+i+";\n#else\nuniform "+t+" "+o+" u_"+i+";\n#endif\n":"\n#ifndef HAS_UNIFORM_u_"+i+"\n    "+t+" "+o+" "+i+" = unpack_mix_"+r+"(a_"+i+", a_"+i+"_t);\n#else\n    "+t+" "+o+" "+i+" = u_"+i+";\n#endif\n"})};for(var programName in shaders)loop(programName);module.exports=shaders;
},{}],98:[function(_dereq_,module,exports){
"use strict";var ImageSource=_dereq_("./image_source"),window=_dereq_("../util/window"),rasterBoundsAttributes=_dereq_("../data/raster_bounds_attributes"),VertexArrayObject=_dereq_("../render/vertex_array_object"),Texture=_dereq_("../render/texture"),CanvasSource=function(t){function e(e,i,s,a){t.call(this,e,i,s,a),this.options=i,this.animate=void 0===i.animate||i.animate}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){if(this.canvas=this.canvas||window.document.getElementById(this.options.canvas),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions())return void this.fire("error",new Error("Canvas dimensions cannot be less than or equal to zero."));this.play=function(){this._playing=!0,this.map._rerender()},this.pause=function(){this._playing=!1},this._finishLoading()},e.prototype.getCanvas=function(){return this.canvas},e.prototype.onAdd=function(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play()},e.prototype.onRemove=function(){this.pause()},e.prototype.prepare=function(){var t=this,e=!1;if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),!this._hasInvalidDimensions()&&0!==Object.keys(this.tiles).length){var i=this.map.painter.context,s=i.gl;this.boundsBuffer||(this.boundsBuffer=i.createVertexBuffer(this._boundsArray,rasterBoundsAttributes.members)),this.boundsVAO||(this.boundsVAO=new VertexArrayObject),this.texture?e?this.texture.update(this.canvas):this._playing&&(this.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE),s.texSubImage2D(s.TEXTURE_2D,0,0,0,s.RGBA,s.UNSIGNED_BYTE,this.canvas)):(this.texture=new Texture(i,this.canvas,s.RGBA),this.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE));for(var a in t.tiles){var r=t.tiles[a];"loaded"!==r.state&&(r.state="loaded",r.texture=t.texture)}}},e.prototype.serialize=function(){return{type:"canvas",canvas:this.canvas,coordinates:this.coordinates}},e.prototype.hasTransition=function(){return this._playing},e.prototype._hasInvalidDimensions=function(){for(var t=this,e=0,i=[t.canvas.width,t.canvas.height];e<i.length;e+=1){var s=i[e];if(isNaN(s)||s<=0)return!0}return!1},e}(ImageSource);module.exports=CanvasSource;
},{"../data/raster_bounds_attributes":59,"../render/texture":93,"../render/vertex_array_object":95,"../util/window":254,"./image_source":102}],99:[function(_dereq_,module,exports){
"use strict";function resolveURL(e){var t=window.document.createElement("a");return t.href=e,t.href}var Evented=_dereq_("../util/evented"),util=_dereq_("../util/util"),window=_dereq_("../util/window"),EXTENT=_dereq_("../data/extent"),ResourceType=_dereq_("../util/ajax").ResourceType,browser=_dereq_("../util/browser"),GeoJSONSource=function(e){function t(t,i,o,r){e.call(this),this.id=t,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this.dispatcher=o,this.setEventedParent(r),this._data=i.data,this._options=util.extend({},i),this._collectResourceTiming=i.collectResourceTiming,this._resourceTiming=[],void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type);var s=EXTENT/this.tileSize;this.workerOptions=util.extend({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*s,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*s,extent:EXTENT,maxZoom:this.maxzoom},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?Math.min(i.clusterMaxZoom,this.maxzoom-1):this.maxzoom-1,extent:EXTENT,radius:(i.clusterRadius||50)*s,log:!1}},i.workerOptions)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.load=function(){var e=this;this.fire("dataloading",{dataType:"source"}),this._updateWorkerData(function(t){if(t)return void e.fire("error",{error:t});var i={dataType:"source",sourceDataType:"metadata"};e._collectResourceTiming&&e._resourceTiming&&e._resourceTiming.length>0&&(i.resourceTiming=e._resourceTiming,e._resourceTiming=[]),e.fire("data",i)})},t.prototype.onAdd=function(e){this.map=e,this.load()},t.prototype.setData=function(e){var t=this;return this._data=e,this.fire("dataloading",{dataType:"source"}),this._updateWorkerData(function(e){if(e)return t.fire("error",{error:e});var i={dataType:"source",sourceDataType:"content"};t._collectResourceTiming&&t._resourceTiming&&t._resourceTiming.length>0&&(i.resourceTiming=t._resourceTiming,t._resourceTiming=[]),t.fire("data",i)}),this},t.prototype._updateWorkerData=function(e){var t=this,i=util.extend({},this.workerOptions),o=this._data;"string"==typeof o?(i.request=this.map._transformRequest(resolveURL(o),ResourceType.Source),i.request.collectResourceTiming=this._collectResourceTiming):i.data=JSON.stringify(o),this.workerID=this.dispatcher.send(this.type+".loadData",i,function(i,o){t._loaded=!0,o&&o.resourceTiming&&o.resourceTiming[t.id]&&(t._resourceTiming=o.resourceTiming[t.id].slice(0)),e(i)},this.workerID)},t.prototype.loadTile=function(e,t){var i=this,o=void 0===e.workerID||"expired"===e.state?"loadTile":"reloadTile",r={type:this.type,uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:browser.devicePixelRatio,overscaling:e.tileID.overscaleFactor(),showCollisionBoxes:this.map.showCollisionBoxes};e.workerID=this.dispatcher.send(o,r,function(r,s){return e.unloadVectorData(),e.aborted?t(null):r?t(r):(e.loadVectorData(s,i.map.painter,"reloadTile"===o),t(null))},this.workerID)},t.prototype.abortTile=function(e){e.aborted=!0},t.prototype.unloadTile=function(e){e.unloadVectorData(),this.dispatcher.send("removeTile",{uid:e.uid,type:this.type,source:this.id},null,e.workerID)},t.prototype.onRemove=function(){this.dispatcher.broadcast("removeSource",{type:this.type,source:this.id})},t.prototype.serialize=function(){return util.extend({},this._options,{type:this.type,data:this._data})},t.prototype.hasTransition=function(){return!1},t}(Evented);module.exports=GeoJSONSource;
},{"../data/extent":53,"../util/ajax":251,"../util/browser":252,"../util/evented":260,"../util/util":275,"../util/window":254}],100:[function(_dereq_,module,exports){
"use strict";function loadGeoJSONTile(e,r){var t=e.source,o=e.tileID.canonical;if(!this._geoJSONIndexes[t])return r(null,null);var u=this._geoJSONIndexes[t].getTile(o.z,o.x,o.y);if(!u)return r(null,null);var n=new GeoJSONWrapper(u.features),i=vtpbf(n);0===i.byteOffset&&i.byteLength===i.buffer.byteLength||(i=new Uint8Array(i)),r(null,{vectorTile:n,rawData:i.buffer})}var ajax=_dereq_("../util/ajax"),perf=_dereq_("../util/performance"),rewind=_dereq_("geojson-rewind"),GeoJSONWrapper=_dereq_("./geojson_wrapper"),vtpbf=_dereq_("vt-pbf"),supercluster=_dereq_("supercluster"),geojsonvt=_dereq_("geojson-vt"),VectorTileWorkerSource=_dereq_("./vector_tile_worker_source"),GeoJSONWorkerSource=function(e){function r(r,t,o){e.call(this,r,t,loadGeoJSONTile),o&&(this.loadGeoJSON=o),this._geoJSONIndexes={}}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.loadData=function(e,r){var t=this;this.loadGeoJSON(e,function(o,u){if(o||!u)return r(o);if("object"!=typeof u)return r(new Error("Input data is not a valid GeoJSON object."));rewind(u,!0);try{t._geoJSONIndexes[e.source]=e.cluster?supercluster(e.superclusterOptions).load(u.features):geojsonvt(u,e.geojsonVtOptions)}catch(o){return r(o)}t.loaded[e.source]={};var n={};if(e.request&&e.request.collectResourceTiming){var i=perf.getEntriesByName(e.request.url);i&&(n.resourceTiming={},n.resourceTiming[e.source]=JSON.parse(JSON.stringify(i)))}r(null,n)})},r.prototype.reloadTile=function(r,t){var o=this.loaded[r.source],u=r.uid;return o&&o[u]?e.prototype.reloadTile.call(this,r,t):this.loadTile(r,t)},r.prototype.loadGeoJSON=function(e,r){if(e.request)ajax.getJSON(e.request,r);else{if("string"!=typeof e.data)return r(new Error("Input data is not a valid GeoJSON object."));try{return r(null,JSON.parse(e.data))}catch(e){return r(new Error("Input data is not a valid GeoJSON object."))}}},r.prototype.removeSource=function(e,r){this._geoJSONIndexes[e.source]&&delete this._geoJSONIndexes[e.source],r()},r}(VectorTileWorkerSource);module.exports=GeoJSONWorkerSource;
},{"../util/ajax":251,"../util/performance":268,"./geojson_wrapper":101,"./vector_tile_worker_source":116,"geojson-rewind":15,"geojson-vt":19,"supercluster":32,"vt-pbf":34}],101:[function(_dereq_,module,exports){
"use strict";var Point=_dereq_("@mapbox/point-geometry"),toGeoJSON=_dereq_("@mapbox/vector-tile").VectorTileFeature.prototype.toGeoJSON,EXTENT=_dereq_("../data/extent"),FeatureWrapper=function(e){this._feature=e,this.extent=EXTENT,this.type=e.type,this.properties=e.tags,"id"in e&&!isNaN(e.id)&&(this.id=parseInt(e.id,10))};FeatureWrapper.prototype.loadGeometry=function(){var e=this;if(1===this._feature.type){for(var t=[],r=0,o=e._feature.geometry;r<o.length;r+=1){var a=o[r];t.push([new Point(a[0],a[1])])}return t}for(var i=[],p=0,n=e._feature.geometry;p<n.length;p+=1){for(var s=n[p],u=[],h=0,f=s;h<f.length;h+=1){var l=f[h];u.push(new Point(l[0],l[1]))}i.push(u)}return i},FeatureWrapper.prototype.toGeoJSON=function(e,t,r){return toGeoJSON.call(this,e,t,r)};var GeoJSONWrapper=function(e){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=EXTENT,this.length=e.length,this._features=e};GeoJSONWrapper.prototype.feature=function(e){return new FeatureWrapper(this._features[e])},module.exports=GeoJSONWrapper;
},{"../data/extent":53,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8}],102:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),ref=_dereq_("./tile_id"),CanonicalTileID=ref.CanonicalTileID,LngLat=_dereq_("../geo/lng_lat"),Point=_dereq_("@mapbox/point-geometry"),Evented=_dereq_("../util/evented"),ajax=_dereq_("../util/ajax"),browser=_dereq_("../util/browser"),EXTENT=_dereq_("../data/extent"),ref$1=_dereq_("../data/array_types"),RasterBoundsArray=ref$1.RasterBoundsArray,rasterBoundsAttributes=_dereq_("../data/raster_bounds_attributes"),VertexArrayObject=_dereq_("../render/vertex_array_object"),Texture=_dereq_("../render/texture"),ImageSource=function(t){function e(e,r,o,i){t.call(this),this.id=e,this.dispatcher=o,this.coordinates=r.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this.setEventedParent(i),this.options=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.load=function(){var t=this;this.fire("dataloading",{dataType:"source"}),this.url=this.options.url,ajax.getImage(this.map._transformRequest(this.url,ajax.ResourceType.Image),function(e,r){e?t.fire("error",{error:e}):r&&(t.image=browser.getImageData(r),t._finishLoading())})},e.prototype._finishLoading=function(){this.map&&(this.setCoordinates(this.coordinates),this.fire("data",{dataType:"source",sourceDataType:"metadata"}))},e.prototype.onAdd=function(t){this.map=t,this.load()},e.prototype.setCoordinates=function(t){this.coordinates=t;var e=this.map,r=t.map(function(t){return e.transform.locationCoordinate(LngLat.convert(t)).zoomTo(0)}),o=this.centerCoord=util.getCoordinatesCenter(r);o.column=Math.floor(o.column),o.row=Math.floor(o.row),this.tileID=new CanonicalTileID(o.zoom,o.column,o.row),this.minzoom=this.maxzoom=o.zoom;var i=r.map(function(t){var e=t.zoomTo(o.zoom);return new Point(Math.round((e.column-o.column)*EXTENT),Math.round((e.row-o.row)*EXTENT))});return this._boundsArray=new RasterBoundsArray,this._boundsArray.emplaceBack(i[0].x,i[0].y,0,0),this._boundsArray.emplaceBack(i[1].x,i[1].y,EXTENT,0),this._boundsArray.emplaceBack(i[3].x,i[3].y,0,EXTENT),this._boundsArray.emplaceBack(i[2].x,i[2].y,EXTENT,EXTENT),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire("data",{dataType:"source",sourceDataType:"content"}),this},e.prototype.prepare=function(){var t=this;if(0!==Object.keys(this.tiles).length&&this.image){var e=this.map.painter.context,r=e.gl;this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,rasterBoundsAttributes.members)),this.boundsVAO||(this.boundsVAO=new VertexArrayObject),this.texture||(this.texture=new Texture(e,this.image,r.RGBA),this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE));for(var o in t.tiles){var i=t.tiles[o];"loaded"!==i.state&&(i.state="loaded",i.texture=t.texture)}}},e.prototype.loadTile=function(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null))},e.prototype.serialize=function(){return{type:"image",url:this.options.url,coordinates:this.coordinates}},e.prototype.hasTransition=function(){return!1},e}(Evented);module.exports=ImageSource;
},{"../data/array_types":39,"../data/extent":53,"../data/raster_bounds_attributes":59,"../geo/lng_lat":62,"../render/texture":93,"../render/vertex_array_object":95,"../util/ajax":251,"../util/browser":252,"../util/evented":260,"../util/util":275,"./tile_id":114,"@mapbox/point-geometry":4}],103:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),ajax=_dereq_("../util/ajax"),browser=_dereq_("../util/browser"),normalizeURL=_dereq_("../util/mapbox").normalizeSourceURL;module.exports=function(r,e,o){var u=function(r,e){if(r)return o(r);if(e){var u=util.pick(e,["tiles","minzoom","maxzoom","attribution","mapbox_logo","bounds"]);e.vector_layers&&(u.vectorLayers=e.vector_layers,u.vectorLayerIds=u.vectorLayers.map(function(r){return r.id})),o(null,u)}};r.url?ajax.getJSON(e(normalizeURL(r.url),ajax.ResourceType.Source),u):browser.frame(function(){return u(null,r)})};
},{"../util/ajax":251,"../util/browser":252,"../util/mapbox":267,"../util/util":275}],104:[function(_dereq_,module,exports){
"use strict";var EXTENT=_dereq_("../data/extent");module.exports=function(e,t,r){return t*(EXTENT/(e.tileSize*Math.pow(2,r-e.tileID.overscaledZ)))};
},{"../data/extent":53}],105:[function(_dereq_,module,exports){
"use strict";function sortTilesIn(e,r){var a=e.tileID,n=r.tileID;return a.overscaledZ-n.overscaledZ||a.canonical.y-n.canonical.y||a.wrap-n.wrap||a.canonical.x-n.canonical.x}function mergeRenderedFeatureLayers(e){for(var r={},a={},n=0,t=e;n<t.length;n+=1){var u=t[n],l=u.queryResults,o=u.wrappedTileID,s=a[o]=a[o]||{};for(var i in l)for(var c=l[i],d=s[i]=s[i]||{},f=r[i]=r[i]||[],p=0,v=c;p<v.length;p+=1){var y=v[p];d[y.featureIndex]||(d[y.featureIndex]=!0,f.push(y.feature))}}return r}exports.rendered=function(e,r,a,n,t,u,l){var o=e.tilesIn(a);o.sort(sortTilesIn);for(var s=[],i=0,c=o;i<c.length;i+=1){var d=c[i];s.push({wrappedTileID:d.tileID.wrapped().key,queryResults:d.tile.queryRenderedFeatures(r,d.queryGeometry,d.scale,n,u,e.id,l)})}return mergeRenderedFeatureLayers(s)},exports.source=function(e,r){for(var a=e.getRenderableIds().map(function(r){return e.getTileByID(r)}),n=[],t={},u=0;u<a.length;u++){var l=a[u],o=l.tileID.canonical.key;t[o]||(t[o]=!0,l.querySourceFeatures(n,r))}return n};
},{}],106:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),util=_dereq_("../util/util"),Evented=_dereq_("../util/evented"),normalizeURL=_dereq_("../util/mapbox").normalizeTileURL,browser=_dereq_("../util/browser"),ref=_dereq_("./tile_id"),OverscaledTileID=ref.OverscaledTileID,RasterTileSource=_dereq_("./raster_tile_source"),RasterDEMTileSource=function(e){function r(r,i,t,l){e.call(this,r,i,t,l),this.type="raster-dem",this.maxzoom=22,this._options=util.extend({},i)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.serialize=function(){return{type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds}},r.prototype.loadTile=function(e,r){function i(i,l){if(delete e.request,e.aborted)e.state="unloaded",r(null);else if(i)e.state="errored",r(i);else if(l){this.map._refreshExpiredTiles&&e.setExpiryData(l),delete l.cacheControl,delete l.expires;var a=browser.getImageData(l),s={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:a};e.workerID&&"expired"!==e.state||(e.workerID=this.dispatcher.send("loadDEMTile",s,t.bind(this)))}}function t(i,t){i&&(e.state="errored",r(i)),t&&(e.dem=t,e.needsHillshadePrepare=!0,e.state="loaded",r(null))}var l=normalizeURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize);e.request=ajax.getImage(this.map._transformRequest(l,ajax.ResourceType.Tile),i.bind(this)),e.neighboringTiles=this._getNeighboringTiles(e.tileID)},r.prototype._getNeighboringTiles=function(e){var r=e.canonical,i=Math.pow(2,r.z),t=(r.x-1+i)%i,l=0===r.x?e.wrap-1:e.wrap,a=(r.x+1+i)%i,s=r.x+1===i?e.wrap+1:e.wrap,o={};return o[new OverscaledTileID(e.overscaledZ,l,r.z,t,r.y).key]={backfilled:!1},o[new OverscaledTileID(e.overscaledZ,s,r.z,a,r.y).key]={backfilled:!1},r.y>0&&(o[new OverscaledTileID(e.overscaledZ,l,r.z,t,r.y-1).key]={backfilled:!1},o[new OverscaledTileID(e.overscaledZ,e.wrap,r.z,r.x,r.y-1).key]={backfilled:!1},o[new OverscaledTileID(e.overscaledZ,s,r.z,a,r.y-1).key]={backfilled:!1}),r.y+1<i&&(o[new OverscaledTileID(e.overscaledZ,l,r.z,t,r.y+1).key]={backfilled:!1},o[new OverscaledTileID(e.overscaledZ,e.wrap,r.z,r.x,r.y+1).key]={backfilled:!1},o[new OverscaledTileID(e.overscaledZ,s,r.z,a,r.y+1).key]={backfilled:!1}),o},r.prototype.unloadTile=function(e){e.demTexture&&this.map.painter.saveTileTexture(e.demTexture),e.fbo&&(e.fbo.destroy(),delete e.fbo),e.dem&&delete e.dem,delete e.neighboringTiles,e.state="unloaded",this.dispatcher.send("removeDEMTile",{uid:e.uid,source:this.id},void 0,e.workerID)},r}(RasterTileSource);module.exports=RasterDEMTileSource;
},{"../util/ajax":251,"../util/browser":252,"../util/evented":260,"../util/mapbox":267,"../util/util":275,"./raster_tile_source":108,"./tile_id":114}],107:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../data/dem_data"),DEMData=ref.DEMData,RasterDEMTileWorkerSource=function(){this.loading={},this.loaded={}};RasterDEMTileWorkerSource.prototype.loadTile=function(e,a){var o=e.source,r=e.uid;this.loading[o]||(this.loading[o]={});var t=new DEMData(r);this.loading[o][r]=t,t.loadFromImage(e.rawImageData),delete this.loading[o][r],this.loaded[o]=this.loaded[o]||{},this.loaded[o][r]=t,a(null,t)},RasterDEMTileWorkerSource.prototype.removeTile=function(e){var a=this.loaded[e.source],o=e.uid;a&&a[o]&&delete a[o]},module.exports=RasterDEMTileWorkerSource;
},{"../data/dem_data":52}],108:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),ajax=_dereq_("../util/ajax"),Evented=_dereq_("../util/evented"),loadTileJSON=_dereq_("./load_tilejson"),normalizeURL=_dereq_("../util/mapbox").normalizeTileURL,TileBounds=_dereq_("./tile_bounds"),Texture=_dereq_("../render/texture"),RasterTileSource=function(e){function t(t,i,r,o){e.call(this),this.id=t,this.dispatcher=r,this.setEventedParent(o),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=util.extend({},i),util.extend(this,util.pick(i,["url","scheme","tileSize"]))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.load=function(){var e=this;this.fire("dataloading",{dataType:"source"}),loadTileJSON(this._options,this.map._transformRequest,function(t,i){t?e.fire("error",t):i&&(util.extend(e,i),i.bounds&&(e.tileBounds=new TileBounds(i.bounds,e.minzoom,e.maxzoom)),e.fire("data",{dataType:"source",sourceDataType:"metadata"}),e.fire("data",{dataType:"source",sourceDataType:"content"}))})},t.prototype.onAdd=function(e){this.map=e,this.load()},t.prototype.serialize=function(){return util.extend({},this._options)},t.prototype.hasTile=function(e){return!this.tileBounds||this.tileBounds.contains(e.canonical)},t.prototype.loadTile=function(e,t){var i=this,r=normalizeURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url,this.tileSize);e.request=ajax.getImage(this.map._transformRequest(r,ajax.ResourceType.Tile),function(r,o){if(delete e.request,e.aborted)e.state="unloaded",t(null);else if(r)e.state="errored",t(r);else if(o){i.map._refreshExpiredTiles&&e.setExpiryData(o),delete o.cacheControl,delete o.expires;var a=i.map.painter.context,n=a.gl;e.texture=i.map.painter.getTileTexture(o.width),e.texture?(e.texture.bind(n.LINEAR,n.CLAMP_TO_EDGE,n.LINEAR_MIPMAP_NEAREST),n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,o)):(e.texture=new Texture(a,o,n.RGBA),e.texture.bind(n.LINEAR,n.CLAMP_TO_EDGE,n.LINEAR_MIPMAP_NEAREST),a.extTextureFilterAnisotropic&&n.texParameterf(n.TEXTURE_2D,a.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,a.extTextureFilterAnisotropicMax)),n.generateMipmap(n.TEXTURE_2D),e.state="loaded",t(null)}})},t.prototype.abortTile=function(e,t){e.request&&(e.request.abort(),delete e.request),t()},t.prototype.unloadTile=function(e,t){e.texture&&this.map.painter.saveTileTexture(e.texture),t()},t.prototype.hasTransition=function(){return!1},t}(Evented);module.exports=RasterTileSource;
},{"../render/texture":93,"../util/ajax":251,"../util/evented":260,"../util/mapbox":267,"../util/util":275,"./load_tilejson":103,"./tile_bounds":113}],109:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),Evented=_dereq_("../util/evented"),window=_dereq_("../util/window"),pluginRequested=!1,pluginBlobURL=null;module.exports.evented=new Evented,module.exports.registerForPluginAvailability=function(e){return pluginBlobURL?e({pluginBlobURL:pluginBlobURL,errorCallback:module.exports.errorCallback}):module.exports.evented.once("pluginAvailable",e),e},module.exports.createBlobURL=function(e){return window.URL.createObjectURL(new window.Blob([e.data],{type:"text/javascript"}))},module.exports.clearRTLTextPlugin=function(){pluginRequested=!1,pluginBlobURL=null},module.exports.setRTLTextPlugin=function(e,l){if(pluginRequested)throw new Error("setRTLTextPlugin cannot be called multiple times.");pluginRequested=!0,module.exports.errorCallback=l,ajax.getArrayBuffer({url:e},function(e,t){e?l(e):t&&(pluginBlobURL=module.exports.createBlobURL(t),module.exports.evented.fire("pluginAvailable",{pluginBlobURL:pluginBlobURL,errorCallback:l}))})},module.exports.applyArabicShaping=null,module.exports.processBidirectionalText=null;
},{"../util/ajax":251,"../util/evented":260,"../util/window":254}],110:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),sourceTypes={vector:_dereq_("../source/vector_tile_source"),raster:_dereq_("../source/raster_tile_source"),"raster-dem":_dereq_("../source/raster_dem_tile_source"),geojson:_dereq_("../source/geojson_source"),video:_dereq_("../source/video_source"),image:_dereq_("../source/image_source"),canvas:_dereq_("../source/canvas_source")};exports.create=function(e,r,o,s){var u=new sourceTypes[r.type](e,r,o,s);if(u.id!==e)throw new Error("Expected Source id to be "+e+" instead of "+u.id);return util.bindAll(["load","abort","unload","serialize","prepare"],u),u},exports.getType=function(e){return sourceTypes[e]},exports.setType=function(e,r){sourceTypes[e]=r};
},{"../source/canvas_source":98,"../source/geojson_source":99,"../source/image_source":102,"../source/raster_dem_tile_source":106,"../source/raster_tile_source":108,"../source/vector_tile_source":115,"../source/video_source":117,"../util/util":275}],111:[function(_dereq_,module,exports){
"use strict";function coordinateToTilePoint(e,t){var i=t.zoomTo(e.canonical.z);return new Point((i.column-(e.canonical.x+e.wrap*Math.pow(2,e.canonical.z)))*EXTENT,(i.row-e.canonical.y)*EXTENT)}function isRasterType(e){return"raster"===e||"image"===e||"video"===e}var createSource=_dereq_("./source").create,Tile=_dereq_("./tile"),Evented=_dereq_("../util/evented"),Cache=_dereq_("../util/lru_cache"),Coordinate=_dereq_("../geo/coordinate"),util=_dereq_("../util/util"),EXTENT=_dereq_("../data/extent"),Context=_dereq_("../gl/context"),Point=_dereq_("@mapbox/point-geometry"),browser=_dereq_("../util/browser"),ref=_dereq_("./tile_id"),OverscaledTileID=ref.OverscaledTileID,SourceCache=function(e){function t(t,i,r){var o=this;e.call(this),this.id=t,this.dispatcher=r,this.on("data",function(e){"source"===e.dataType&&"metadata"===e.sourceDataType&&(o._sourceLoaded=!0),o._sourceLoaded&&!o._paused&&"source"===e.dataType&&"content"===e.sourceDataType&&(o.reload(),o.transform&&o.update(o.transform))}),this.on("error",function(){o._sourceErrored=!0}),this._source=createSource(t,i,r,this),this._tiles={},this._cache=new Cache(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._isIdRenderable=this._isIdRenderable.bind(this),this._coveredTiles={}}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.onAdd=function(e){this.map=e,this._maxTileCacheSize=e?e._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(e)},t.prototype.onRemove=function(e){this._source&&this._source.onRemove&&this._source.onRemove(e)},t.prototype.loaded=function(){var e=this;if(this._sourceErrored)return!0;if(!this._sourceLoaded)return!1;for(var t in e._tiles){var i=e._tiles[t];if("loaded"!==i.state&&"errored"!==i.state)return!1}return!0},t.prototype.getSource=function(){return this._source},t.prototype.pause=function(){this._paused=!0},t.prototype.resume=function(){if(this._paused){var e=this._shouldReloadOnResume;this._paused=!1,this._shouldReloadOnResume=!1,e&&this.reload(),this.transform&&this.update(this.transform)}},t.prototype._loadTile=function(e,t){return this._source.loadTile(e,t)},t.prototype._unloadTile=function(e){if(this._source.unloadTile)return this._source.unloadTile(e,function(){})},t.prototype._abortTile=function(e){if(this._source.abortTile)return this._source.abortTile(e,function(){})},t.prototype.serialize=function(){return this._source.serialize()},t.prototype.prepare=function(e){var t=this;this._source.prepare&&this._source.prepare();for(var i in t._tiles)t._tiles[i].upload(e)},t.prototype.getIds=function(){var e=this,t=function(t,i){var r=e._tiles[t].tileID,o=e._tiles[i].tileID,a=new Point(r.canonical.x,r.canonical.y).rotate(e.transform.angle),s=new Point(o.canonical.x,o.canonical.y).rotate(e.transform.angle);return r.overscaledZ-o.overscaledZ||s.y-a.y||s.x-a.x};return Object.keys(this._tiles).map(Number).sort(t)},t.prototype.getRenderableIds=function(){return this.getIds().filter(this._isIdRenderable)},t.prototype.hasRenderableParent=function(e){var t=this.findLoadedParent(e,0,{});return!!t&&this._isIdRenderable(t.tileID.key)},t.prototype._isIdRenderable=function(e){return this._tiles[e]&&this._tiles[e].hasData()&&!this._coveredTiles[e]},t.prototype.reload=function(){var e=this;if(this._paused)return void(this._shouldReloadOnResume=!0);this._resetCache();for(var t in e._tiles)e._reloadTile(t,"reloading")},t.prototype._reloadTile=function(e,t){var i=this._tiles[e];i&&("loading"!==i.state&&(i.state=t),this._loadTile(i,this._tileLoaded.bind(this,i,e,t)))},t.prototype._tileLoaded=function(e,t,i,r){if(r)return e.state="errored",void(404!==r.status?this._source.fire("error",{tile:e,error:r}):this.update(this.transform));e.timeAdded=browser.now(),"expired"===i&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(t,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._source.fire("data",{dataType:"source",tile:e,coord:e.tileID}),this.map&&(this.map.painter.tileExtentVAO.vao=null)},t.prototype._backfillDEM=function(e){function t(e,t){e.needsHillshadePrepare=!0;var i=t.tileID.canonical.x-e.tileID.canonical.x,r=t.tileID.canonical.y-e.tileID.canonical.y,o=Math.pow(2,e.tileID.canonical.z),a=t.tileID.key;0===i&&0===r||Math.abs(r)>1||(Math.abs(i)>1&&(1===Math.abs(i+o)?i+=o:1===Math.abs(i-o)&&(i-=o)),t.dem&&e.dem&&(e.dem.backfillBorder(t.dem,i,r),e.neighboringTiles&&e.neighboringTiles[a]&&(e.neighboringTiles[a].backfilled=!0)))}for(var i=this,r=this.getRenderableIds(),o=0;o<r.length;o++){var a=r[o];if(e.neighboringTiles&&e.neighboringTiles[a]){var s=i.getTileByID(a);t(e,s),t(s,e)}}},t.prototype.getTile=function(e){return this.getTileByID(e.key)},t.prototype.getTileByID=function(e){return this._tiles[e]},t.prototype.getZoom=function(e){return e.zoom+e.scaleZoom(e.tileSize/this._source.tileSize)},t.prototype._findLoadedChildren=function(e,t,i){var r=this,o=!1;for(var a in r._tiles){var s=r._tiles[a];if(!(i[a]||!s.hasData()||s.tileID.overscaledZ<=e.overscaledZ||s.tileID.overscaledZ>t)){var n=Math.pow(2,s.tileID.canonical.z-e.canonical.z);if(Math.floor(s.tileID.canonical.x/n)===e.canonical.x&&Math.floor(s.tileID.canonical.y/n)===e.canonical.y)for(i[a]=s.tileID,o=!0;s&&s.tileID.overscaledZ-1>e.overscaledZ;){var l=s.tileID.scaledTo(s.tileID.overscaledZ-1);if(!l)break;s=r._tiles[l.key],s&&s.hasData()&&(delete i[a],i[l.key]=l)}}}return o},t.prototype.findLoadedParent=function(e,t,i){for(var r=this,o=e.overscaledZ-1;o>=t;o--){var a=e.scaledTo(o);if(!a)return;var s=String(a.key),n=r._tiles[s];if(n&&n.hasData())return i[s]=a,n;if(r._cache.has(s))return i[s]=a,r._cache.get(s)}},t.prototype.updateCacheSize=function(e){var t=Math.ceil(e.width/this._source.tileSize)+1,i=Math.ceil(e.height/this._source.tileSize)+1,r=t*i,o=Math.floor(5*r),a="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,o):o;this._cache.setMaxSize(a)},t.prototype.update=function(e){var i=this;if(this.transform=e,this._sourceLoaded&&!this._paused){this.updateCacheSize(e),this._coveredTiles={};var r;this.used?this._source.tileID?r=e.getVisibleUnwrappedCoordinates(this._source.tileID).map(function(e){return new OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y)}):(r=e.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(r=r.filter(function(e){return i._source.hasTile(e)}))):r=[];var o=(this._source.roundZoom?Math.round:Math.floor)(this.getZoom(e)),a=Math.max(o-t.maxOverzooming,this._source.minzoom),s=Math.max(o+t.maxUnderzooming,this._source.minzoom),n=this._updateRetainedTiles(r,o),l={};if(isRasterType(this._source.type))for(var c=Object.keys(n),h=0;h<c.length;h++){var d=c[h],u=n[d],_=i._tiles[d];if(_&&(void 0===_.fadeEndTime||_.fadeEndTime>=browser.now())){i._findLoadedChildren(u,s,n)&&(n[d]=u);var p=i.findLoadedParent(u,a,l);p&&i._addTile(p.tileID)}}var m;for(m in l)n[m]||(i._coveredTiles[m]=!0);for(m in l)n[m]=l[m];for(var f=util.keysDifference(this._tiles,n),T=0;T<f.length;T++)i._removeTile(f[T])}},t.prototype._updateRetainedTiles=function(e,i){for(var r=this,o={},a={},s=Math.max(i-t.maxOverzooming,this._source.minzoom),n=Math.max(i+t.maxUnderzooming,this._source.minzoom),l=0;l<e.length;l++){var c=e[l],h=r._addTile(c),d=!1;if(h.hasData())o[c.key]=c;else{d=h.wasRequested(),o[c.key]=c;var u=!0;if(i+1>r._source.maxzoom){var _=c.children(r._source.maxzoom)[0],p=r.getTile(_);p&&p.hasData()?o[_.key]=_:u=!1}else{r._findLoadedChildren(c,n,o);for(var m=c.children(r._source.maxzoom),f=0;f<m.length;f++)if(!o[m[f].key]){u=!1;break}}if(!u)for(var T=c.overscaledZ-1;T>=s;--T){var v=c.scaledTo(T);if(a[v.key])break;if(a[v.key]=!0,h=r.getTile(v),!h&&d&&(h=r._addTile(v)),h&&(o[v.key]=v,d=h.wasRequested(),h.hasData()))break}}}return o},t.prototype._addTile=function(e){var t=this._tiles[e.key];if(t)return t;(t=this._cache.getAndRemove(e.key))&&this._cacheTimers[e.key]&&(clearTimeout(this._cacheTimers[e.key]),delete this._cacheTimers[e.key],this._setTileReloadTimer(e.key,t));var i=Boolean(t);return i||(t=new Tile(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(t,this._tileLoaded.bind(this,t,e.key,t.state))),t?(t.uses++,this._tiles[e.key]=t,i||this._source.fire("dataloading",{tile:t,coord:t.tileID,dataType:"source"}),t):null},t.prototype._setTileReloadTimer=function(e,t){var i=this;e in this._timers&&(clearTimeout(this._timers[e]),delete this._timers[e]);var r=t.getExpiryTimeout();r&&(this._timers[e]=setTimeout(function(){i._reloadTile(e,"expired"),delete i._timers[e]},r))},t.prototype._setCacheInvalidationTimer=function(e,t){var i=this;e in this._cacheTimers&&(clearTimeout(this._cacheTimers[e]),delete this._cacheTimers[e]);var r=t.getExpiryTimeout();r&&(this._cacheTimers[e]=setTimeout(function(){i._cache.remove(e),delete i._cacheTimers[e]},r))},t.prototype._removeTile=function(e){var t=this._tiles[e];if(t&&(t.uses--,delete this._tiles[e],this._timers[e]&&(clearTimeout(this._timers[e]),delete this._timers[e]),!(t.uses>0)))if(t.hasData()){t.tileID=t.tileID.wrapped();var i=t.tileID.key;this._cache.add(i,t),this._setCacheInvalidationTimer(i,t)}else t.aborted=!0,this._abortTile(t),this._unloadTile(t)},t.prototype.clearTiles=function(){var e=this;this._shouldReloadOnResume=!1,this._paused=!1;for(var t in e._tiles)e._removeTile(t);this._resetCache()},t.prototype._resetCache=function(){var e=this;for(var t in e._cacheTimers)clearTimeout(e._cacheTimers[t]);this._cacheTimers={},this._cache.reset()},t.prototype.tilesIn=function(e){for(var t=this,i=[],r=this.getIds(),o=1/0,a=1/0,s=-1/0,n=-1/0,l=e[0].zoom,c=0;c<e.length;c++){var h=e[c];o=Math.min(o,h.column),a=Math.min(a,h.row),s=Math.max(s,h.column),n=Math.max(n,h.row)}for(var d=0;d<r.length;d++){var u=t._tiles[r[d]],_=u.tileID,p=[coordinateToTilePoint(_,new Coordinate(o,a,l)),coordinateToTilePoint(_,new Coordinate(s,n,l))];if(p[0].x<EXTENT&&p[0].y<EXTENT&&p[1].x>=0&&p[1].y>=0){for(var m=[],f=0;f<e.length;f++)m.push(coordinateToTilePoint(_,e[f]));i.push({tile:u,tileID:_,queryGeometry:[m],scale:Math.pow(2,t.transform.zoom-u.tileID.overscaledZ)})}}return i},t.prototype.getVisibleCoordinates=function(){for(var e=this,t=this.getRenderableIds().map(function(t){return e._tiles[t].tileID}),i=0,r=t;i<r.length;i+=1){var o=r[i];o.posMatrix=e.transform.calculatePosMatrix(o.toUnwrapped())}return t},t.prototype.hasTransition=function(){var e=this;if(this._source.hasTransition())return!0;if(isRasterType(this._source.type))for(var t in e._tiles){var i=e._tiles[t];if(void 0!==i.fadeEndTime&&i.fadeEndTime>=browser.now())return!0}return!1},t}(Evented);SourceCache.maxOverzooming=10,SourceCache.maxUnderzooming=3,module.exports=SourceCache;
},{"../data/extent":53,"../geo/coordinate":61,"../gl/context":66,"../util/browser":252,"../util/evented":260,"../util/lru_cache":266,"../util/util":275,"./source":110,"./tile":112,"./tile_id":114,"@mapbox/point-geometry":4}],112:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),deserializeBucket=_dereq_("../data/bucket").deserialize,FeatureIndex=_dereq_("../data/feature_index"),vt=_dereq_("@mapbox/vector-tile"),Protobuf=_dereq_("pbf"),GeoJSONFeature=_dereq_("../util/vectortile_to_geojson"),featureFilter=_dereq_("../style-spec/feature_filter"),CollisionIndex=_dereq_("../symbol/collision_index"),SymbolBucket=_dereq_("../data/bucket/symbol_bucket"),ref=_dereq_("../data/array_types"),RasterBoundsArray=ref.RasterBoundsArray,CollisionBoxArray=ref.CollisionBoxArray,rasterBoundsAttributes=_dereq_("../data/raster_bounds_attributes"),EXTENT=_dereq_("../data/extent"),Point=_dereq_("@mapbox/point-geometry"),Texture=_dereq_("../render/texture"),ref$1=_dereq_("../data/segment"),SegmentVector=ref$1.SegmentVector,ref$2=_dereq_("../data/index_array_type"),TriangleIndexArray=ref$2.TriangleIndexArray,browser=_dereq_("../util/browser"),CLOCK_SKEW_RETRY_TIMEOUT=3e4,Tile=function(e,t){this.tileID=e,this.uid=util.uniqueId(),this.uses=0,this.tileSize=t,this.buckets={},this.expirationTime=null,this.expiredRequestCount=0,this.state="loading"};Tile.prototype.registerFadeDuration=function(e){var t=e+this.timeAdded;t<browser.now()||this.fadeEndTime&&t<this.fadeEndTime||(this.fadeEndTime=t)},Tile.prototype.wasRequested=function(){return"errored"===this.state||"loaded"===this.state||"reloading"===this.state},Tile.prototype.loadVectorData=function(e,t,i){var r=this;if(this.hasData()&&this.unloadVectorData(),this.state="loaded",!e)return void(this.collisionBoxArray=new CollisionBoxArray);if(e.rawTileData&&(this.rawTileData=e.rawTileData),this.collisionBoxArray=e.collisionBoxArray,this.featureIndex=e.featureIndex,this.featureIndex.rawTileData=this.rawTileData,this.buckets=deserializeBucket(e.buckets,t.style),i)for(var a in r.buckets){var s=r.buckets[a];s instanceof SymbolBucket&&(s.justReloaded=!0)}e.iconAtlasImage&&(this.iconAtlasImage=e.iconAtlasImage),e.glyphAtlasImage&&(this.glyphAtlasImage=e.glyphAtlasImage)},Tile.prototype.unloadVectorData=function(){var e=this;for(var t in e.buckets)e.buckets[t].destroy();this.buckets={},this.iconAtlasTexture&&this.iconAtlasTexture.destroy(),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.collisionBoxArray=null,this.featureIndex=null,this.state="unloaded"},Tile.prototype.unloadDEMData=function(){this.dem=null,this.neighboringTiles=null,this.state="unloaded"},Tile.prototype.getBucket=function(e){return this.buckets[e.id]},Tile.prototype.upload=function(e){var t=this;for(var i in t.buckets){var r=t.buckets[i];r.uploaded||(r.upload(e),r.uploaded=!0)}var a=e.gl;this.iconAtlasImage&&(this.iconAtlasTexture=new Texture(e,this.iconAtlasImage,a.RGBA),this.iconAtlasImage=null),this.glyphAtlasImage&&(this.glyphAtlasTexture=new Texture(e,this.glyphAtlasImage,a.ALPHA),this.glyphAtlasImage=null)},Tile.prototype.queryRenderedFeatures=function(e,t,i,r,a,s,o){var n=this;if(!this.featureIndex||!this.collisionBoxArray)return{};var l=0,u={};for(var h in e){var d=n.getBucket(e[h]);d&&(l=Math.max(l,e[h].queryRadius(d)),d instanceof SymbolBucket&&void 0!==d.bucketInstanceId&&(u[d.bucketInstanceId]=!0))}return this.featureIndex.query({queryGeometry:t,scale:i,tileSize:this.tileSize,bearing:a,params:r,additionalRadius:l,collisionBoxArray:this.collisionBoxArray,sourceID:s,collisionIndex:o,bucketInstanceIds:u},e)},Tile.prototype.querySourceFeatures=function(e,t){var i=this;if(this.rawTileData){this.vtLayers||(this.vtLayers=new vt.VectorTile(new Protobuf(this.rawTileData)).layers);var r=t?t.sourceLayer:"",a=this.vtLayers._geojsonTileLayer||this.vtLayers[r];if(a)for(var s=featureFilter(t&&t.filter),o={z:this.tileID.overscaledZ,x:this.tileID.canonical.x,y:this.tileID.canonical.y},n=0;n<a.length;n++){var l=a.feature(n);if(s({zoom:i.tileID.overscaledZ},l)){var u=new GeoJSONFeature(l,o.z,o.x,o.y);u.tile=o,e.push(u)}}}},Tile.prototype.clearMask=function(){this.segments&&(this.segments.destroy(),delete this.segments),this.maskedBoundsBuffer&&(this.maskedBoundsBuffer.destroy(),delete this.maskedBoundsBuffer),this.maskedIndexBuffer&&(this.maskedIndexBuffer.destroy(),delete this.maskedIndexBuffer)},Tile.prototype.setMask=function(e,t){var i=this;if(!util.deepEqual(this.mask,e)&&(this.mask=e,this.clearMask(),!util.deepEqual(e,{0:!0}))){var r=new RasterBoundsArray,a=new TriangleIndexArray;this.segments=new SegmentVector,this.segments.prepareSegment(0,r,a);for(var s=Object.keys(e),o=0;o<s.length;o++){var n=e[s[o]],l=EXTENT>>n.z,u=new Point(n.x*l,n.y*l),h=new Point(u.x+l,u.y+l),d=i.segments.prepareSegment(4,r,a);r.emplaceBack(u.x,u.y,u.x,u.y),r.emplaceBack(h.x,u.y,h.x,u.y),r.emplaceBack(u.x,h.y,u.x,h.y),r.emplaceBack(h.x,h.y,h.x,h.y);var c=d.vertexLength;a.emplaceBack(c,c+1,c+2),a.emplaceBack(c+1,c+2,c+3),d.vertexLength+=4,d.primitiveLength+=2}this.maskedBoundsBuffer=t.createVertexBuffer(r,rasterBoundsAttributes.members),this.maskedIndexBuffer=t.createIndexBuffer(a)}},Tile.prototype.hasData=function(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state},Tile.prototype.setExpiryData=function(e){var t=this.expirationTime;if(e.cacheControl){var i=util.parseCacheControl(e.cacheControl);i["max-age"]&&(this.expirationTime=Date.now()+1e3*i["max-age"])}else e.expires&&(this.expirationTime=new Date(e.expires).getTime());if(this.expirationTime){var r=Date.now(),a=!1;if(this.expirationTime>r)a=!1;else if(t)if(this.expirationTime<t)a=!0;else{var s=this.expirationTime-t;s?this.expirationTime=r+Math.max(s,CLOCK_SKEW_RETRY_TIMEOUT):a=!0}else a=!0;a?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0}},Tile.prototype.getExpiryTimeout=function(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)},module.exports=Tile;
},{"../data/array_types":39,"../data/bucket":40,"../data/bucket/symbol_bucket":51,"../data/extent":53,"../data/feature_index":54,"../data/index_array_type":55,"../data/raster_bounds_attributes":59,"../data/segment":60,"../render/texture":93,"../style-spec/feature_filter":148,"../symbol/collision_index":217,"../util/browser":252,"../util/util":275,"../util/vectortile_to_geojson":276,"@mapbox/point-geometry":4,"@mapbox/vector-tile":8,"pbf":30}],113:[function(_dereq_,module,exports){
"use strict";var LngLatBounds=_dereq_("../geo/lng_lat_bounds"),clamp=_dereq_("../util/util").clamp,TileBounds=function(t,n,o){this.bounds=LngLatBounds.convert(this.validateBounds(t)),this.minzoom=n||0,this.maxzoom=o||24};TileBounds.prototype.validateBounds=function(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]},TileBounds.prototype.contains=function(t){var n={minX:Math.floor(this.lngX(this.bounds.getWest(),t.z)),minY:Math.floor(this.latY(this.bounds.getNorth(),t.z)),maxX:Math.ceil(this.lngX(this.bounds.getEast(),t.z)),maxY:Math.ceil(this.latY(this.bounds.getSouth(),t.z))};return t.x>=n.minX&&t.x<n.maxX&&t.y>=n.minY&&t.y<n.maxY},TileBounds.prototype.lngX=function(t,n){return(t+180)*(Math.pow(2,n)/360)},TileBounds.prototype.latY=function(t,n){var o=clamp(Math.sin(Math.PI/180*t),-.9999,.9999),a=Math.pow(2,n)/(2*Math.PI);return Math.pow(2,n-1)+.5*Math.log((1+o)/(1-o))*-a},module.exports=TileBounds;
},{"../geo/lng_lat_bounds":63,"../util/util":275}],114:[function(_dereq_,module,exports){
"use strict";function calculateKey(e,i,a,t){(e*=2)<0&&(e=-1*e-1);var n=1<<i;return 32*(n*n*e+n*t+a)+i}function getQuadkey(e,i,a){for(var t,n="",c=e;c>0;c--)t=1<<c-1,n+=(i&t?1:0)+(a&t?2:0);return n}var WhooTS=_dereq_("@mapbox/whoots-js"),ref=_dereq_("../util/web_worker_transfer"),register=ref.register,Coordinate=_dereq_("../geo/coordinate"),CanonicalTileID=function(e,i,a){this.z=e,this.x=i,this.y=a,this.key=calculateKey(0,e,i,a)};CanonicalTileID.prototype.equals=function(e){return this.z===e.z&&this.x===e.x&&this.y===e.y},CanonicalTileID.prototype.url=function(e,i){var a=WhooTS.getTileBBox(this.x,this.y,this.z),t=getQuadkey(this.z,this.x,this.y);return e[(this.x+this.y)%e.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===i?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",t).replace("{bbox-epsg-3857}",a)};var UnwrappedTileID=function(e,i){this.wrap=e,this.canonical=i,this.key=calculateKey(e,i.z,i.x,i.y)},OverscaledTileID=function(e,i,a,t,n){this.overscaledZ=e,this.wrap=i,this.canonical=new CanonicalTileID(a,+t,+n),this.key=calculateKey(i,e,t,n)};OverscaledTileID.prototype.scaledTo=function(e){var i=this.canonical.z-e;return e>this.canonical.z?new OverscaledTileID(e,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new OverscaledTileID(e,this.wrap,e,this.canonical.x>>i,this.canonical.y>>i)},OverscaledTileID.prototype.isChildOf=function(e){var i=this.canonical.z-e.canonical.z;return 0===e.overscaledZ||e.overscaledZ<this.overscaledZ&&e.canonical.x===this.canonical.x>>i&&e.canonical.y===this.canonical.y>>i},OverscaledTileID.prototype.children=function(e){if(this.overscaledZ>=e)return[new OverscaledTileID(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];var i=this.canonical.z+1,a=2*this.canonical.x,t=2*this.canonical.y;return[new OverscaledTileID(i,this.wrap,i,a,t),new OverscaledTileID(i,this.wrap,i,a+1,t),new OverscaledTileID(i,this.wrap,i,a,t+1),new OverscaledTileID(i,this.wrap,i,a+1,t+1)]},OverscaledTileID.prototype.isLessThan=function(e){return this.wrap<e.wrap||!(this.wrap>e.wrap)&&(this.overscaledZ<e.overscaledZ||!(this.overscaledZ>e.overscaledZ)&&(this.canonical.x<e.canonical.x||!(this.canonical.x>e.canonical.x)&&this.canonical.y<e.canonical.y))},OverscaledTileID.prototype.wrapped=function(){return new OverscaledTileID(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)},OverscaledTileID.prototype.overscaleFactor=function(){return Math.pow(2,this.overscaledZ-this.canonical.z)},OverscaledTileID.prototype.toUnwrapped=function(){return new UnwrappedTileID(this.wrap,this.canonical)},OverscaledTileID.prototype.toString=function(){return this.overscaledZ+"/"+this.canonical.x+"/"+this.canonical.y},OverscaledTileID.prototype.toCoordinate=function(){return new Coordinate(this.canonical.x+Math.pow(2,this.wrap),this.canonical.y,this.canonical.z)},register("CanonicalTileID",CanonicalTileID),register("OverscaledTileID",OverscaledTileID,{omit:["posMatrix"]}),module.exports={CanonicalTileID:CanonicalTileID,OverscaledTileID:OverscaledTileID,UnwrappedTileID:UnwrappedTileID};
},{"../geo/coordinate":61,"../util/web_worker_transfer":278,"@mapbox/whoots-js":12}],115:[function(_dereq_,module,exports){
"use strict";var Evented=_dereq_("../util/evented"),util=_dereq_("../util/util"),loadTileJSON=_dereq_("./load_tilejson"),normalizeURL=_dereq_("../util/mapbox").normalizeTileURL,TileBounds=_dereq_("./tile_bounds"),ResourceType=_dereq_("../util/ajax").ResourceType,browser=_dereq_("../util/browser"),VectorTileSource=function(e){function t(t,i,o,r){if(e.call(this),this.id=t,this.dispatcher=o,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,util.extend(this,util.pick(i,["url","scheme","tileSize"])),this._options=util.extend({type:"vector"},i),this._collectResourceTiming=i.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512");this.setEventedParent(r)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.load=function(){var e=this;this.fire("dataloading",{dataType:"source"}),loadTileJSON(this._options,this.map._transformRequest,function(t,i){t?e.fire("error",t):i&&(util.extend(e,i),i.bounds&&(e.tileBounds=new TileBounds(i.bounds,e.minzoom,e.maxzoom)),e.fire("data",{dataType:"source",sourceDataType:"metadata"}),e.fire("data",{dataType:"source",sourceDataType:"content"}))})},t.prototype.hasTile=function(e){return!this.tileBounds||this.tileBounds.contains(e.canonical)},t.prototype.onAdd=function(e){this.map=e,this.load()},t.prototype.serialize=function(){return util.extend({},this._options)},t.prototype.loadTile=function(e,t){function i(i,o){return e.aborted?t(null):i?t(i):(o&&o.resourceTiming&&(e.resourceTiming=o.resourceTiming),this.map._refreshExpiredTiles&&e.setExpiryData(o),e.loadVectorData(o,this.map.painter),t(null),void(e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)))}var o=e.tileID.overscaleFactor(),r=normalizeURL(e.tileID.canonical.url(this.tiles,this.scheme),this.url),s={request:this.map._transformRequest(r,ResourceType.Tile),uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*o,type:this.type,source:this.id,pixelRatio:browser.devicePixelRatio,overscaling:o,showCollisionBoxes:this.map.showCollisionBoxes};s.request.collectResourceTiming=this._collectResourceTiming,void 0===e.workerID||"expired"===e.state?e.workerID=this.dispatcher.send("loadTile",s,i.bind(this)):"loading"===e.state?e.reloadCallback=t:this.dispatcher.send("reloadTile",s,i.bind(this),e.workerID)},t.prototype.abortTile=function(e){this.dispatcher.send("abortTile",{uid:e.uid,type:this.type,source:this.id},void 0,e.workerID)},t.prototype.unloadTile=function(e){e.unloadVectorData(),this.dispatcher.send("removeTile",{uid:e.uid,type:this.type,source:this.id},void 0,e.workerID)},t.prototype.hasTransition=function(){return!1},t}(Evented);module.exports=VectorTileSource;
},{"../util/ajax":251,"../util/browser":252,"../util/evented":260,"../util/mapbox":267,"../util/util":275,"./load_tilejson":103,"./tile_bounds":113}],116:[function(_dereq_,module,exports){
"use strict";function loadVectorTile(e,r){var o=ajax.getArrayBuffer(e.request,function(e,o){e?r(e):o&&r(null,{vectorTile:new vt.VectorTile(new Protobuf(o.data)),rawData:o.data,cacheControl:o.cacheControl,expires:o.expires})});return function(){o.abort(),r()}}var ajax=_dereq_("../util/ajax"),vt=_dereq_("@mapbox/vector-tile"),Protobuf=_dereq_("pbf"),WorkerTile=_dereq_("./worker_tile"),util=_dereq_("../util/util"),perf=_dereq_("../util/performance"),VectorTileWorkerSource=function(e,r,o){this.actor=e,this.layerIndex=r,this.loadVectorData=o||loadVectorTile,this.loading={},this.loaded={}};VectorTileWorkerSource.prototype.loadTile=function(e,r){var o=this,t=e.source,i=e.uid;this.loading[t]||(this.loading[t]={});var a=this.loading[t][i]=new WorkerTile(e);a.abort=this.loadVectorData(e,function(l,c){if(delete o.loading[t][i],l||!c)return r(l);var s=c.rawData,n={};c.expires&&(n.expires=c.expires),c.cacheControl&&(n.cacheControl=c.cacheControl);var u={};if(e.request&&e.request.collectResourceTiming){var d=perf.getEntriesByName(e.request.url);d&&(u.resourceTiming=JSON.parse(JSON.stringify(d)))}a.vectorTile=c.vectorTile,a.parse(c.vectorTile,o.layerIndex,o.actor,function(e,o){if(e||!o)return r(e);r(null,util.extend({rawTileData:s.slice(0)},o,n,u))}),o.loaded[t]=o.loaded[t]||{},o.loaded[t][i]=a})},VectorTileWorkerSource.prototype.reloadTile=function(e,r){function o(e,o){if(this.reloadCallback){var t=this.reloadCallback;delete this.reloadCallback,this.parse(this.vectorTile,a.layerIndex,a.actor,t)}r(e,o)}var t=this.loaded[e.source],i=e.uid,a=this;if(t&&t[i]){var l=t[i];l.showCollisionBoxes=e.showCollisionBoxes,"parsing"===l.status?l.reloadCallback=r:"done"===l.status&&l.parse(l.vectorTile,this.layerIndex,this.actor,o.bind(l))}},VectorTileWorkerSource.prototype.abortTile=function(e,r){var o=this.loading[e.source],t=e.uid;o&&o[t]&&o[t].abort&&(o[t].abort(),delete o[t]),r()},VectorTileWorkerSource.prototype.removeTile=function(e,r){var o=this.loaded[e.source],t=e.uid;o&&o[t]&&delete o[t],r()},module.exports=VectorTileWorkerSource;
},{"../util/ajax":251,"../util/performance":268,"../util/util":275,"./worker_tile":119,"@mapbox/vector-tile":8,"pbf":30}],117:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),ImageSource=_dereq_("./image_source"),rasterBoundsAttributes=_dereq_("../data/raster_bounds_attributes"),VertexArrayObject=_dereq_("../render/vertex_array_object"),Texture=_dereq_("../render/texture"),VideoSource=function(e){function t(t,r,i,o){e.call(this,t,r,i,o),this.roundZoom=!0,this.type="video",this.options=r}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.load=function(){var e=this,t=this.options;this.urls=t.urls,ajax.getVideo(t.urls,function(t,r){t?e.fire("error",{error:t}):r&&(e.video=r,e.video.loop=!0,e.video.addEventListener("playing",function(){e.map._rerender()}),e.map&&e.video.play(),e._finishLoading())})},t.prototype.getVideo=function(){return this.video},t.prototype.onAdd=function(e){this.map||(this.map=e,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)))},t.prototype.prepare=function(){var e=this;if(!(0===Object.keys(this.tiles).length||this.video.readyState<2)){var t=this.map.painter.context,r=t.gl;this.boundsBuffer||(this.boundsBuffer=t.createVertexBuffer(this._boundsArray,rasterBoundsAttributes.members)),this.boundsVAO||(this.boundsVAO=new VertexArrayObject),this.texture?this.video.paused||(this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE),r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,this.video)):(this.texture=new Texture(t,this.video,r.RGBA),this.texture.bind(r.LINEAR,r.CLAMP_TO_EDGE));for(var i in e.tiles){var o=e.tiles[i];"loaded"!==o.state&&(o.state="loaded",o.texture=e.texture)}}},t.prototype.serialize=function(){return{type:"video",urls:this.urls,coordinates:this.coordinates}},t.prototype.hasTransition=function(){return this.video&&!this.video.paused},t}(ImageSource);module.exports=VideoSource;
},{"../data/raster_bounds_attributes":59,"../render/texture":93,"../render/vertex_array_object":95,"../util/ajax":251,"./image_source":102}],118:[function(_dereq_,module,exports){
"use strict";var Actor=_dereq_("../util/actor"),StyleLayerIndex=_dereq_("../style/style_layer_index"),VectorTileWorkerSource=_dereq_("./vector_tile_worker_source"),RasterDEMTileWorkerSource=_dereq_("./raster_dem_tile_worker_source"),GeoJSONWorkerSource=_dereq_("./geojson_worker_source"),globalRTLTextPlugin=_dereq_("./rtl_text_plugin"),Worker=function(e){var r=this;this.self=e,this.actor=new Actor(e,this),this.layerIndexes={},this.workerSourceTypes={vector:VectorTileWorkerSource,geojson:GeoJSONWorkerSource},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=function(e,o){if(r.workerSourceTypes[e])throw new Error('Worker source with name "'+e+'" already registered.');r.workerSourceTypes[e]=o},this.self.registerRTLTextPlugin=function(e){if(globalRTLTextPlugin.applyArabicShaping||globalRTLTextPlugin.processBidirectionalText)throw new Error("RTL text plugin already registered.");globalRTLTextPlugin.applyArabicShaping=e.applyArabicShaping,globalRTLTextPlugin.processBidirectionalText=e.processBidirectionalText}};Worker.prototype.setLayers=function(e,r,o){this.getLayerIndex(e).replace(r),o()},Worker.prototype.updateLayers=function(e,r,o){this.getLayerIndex(e).update(r.layers,r.removedIds),o()},Worker.prototype.loadTile=function(e,r,o){this.getWorkerSource(e,r.type).loadTile(r,o)},Worker.prototype.loadDEMTile=function(e,r,o){this.getDEMWorkerSource(e).loadTile(r,o)},Worker.prototype.reloadTile=function(e,r,o){this.getWorkerSource(e,r.type).reloadTile(r,o)},Worker.prototype.abortTile=function(e,r,o){this.getWorkerSource(e,r.type).abortTile(r,o)},Worker.prototype.removeTile=function(e,r,o){this.getWorkerSource(e,r.type).removeTile(r,o)},Worker.prototype.removeDEMTile=function(e,r){this.getDEMWorkerSource(e).removeTile(r)},Worker.prototype.removeSource=function(e,r,o){var t=this.getWorkerSource(e,r.type);void 0!==t.removeSource?t.removeSource(r,o):o()},Worker.prototype.loadWorkerSource=function(e,r,o){try{this.self.importScripts(r.url),o()}catch(e){o(e)}},Worker.prototype.loadRTLTextPlugin=function(e,r,o){try{globalRTLTextPlugin.applyArabicShaping||globalRTLTextPlugin.processBidirectionalText||(this.self.importScripts(r),globalRTLTextPlugin.applyArabicShaping&&globalRTLTextPlugin.processBidirectionalText||o(new Error("RTL Text Plugin failed to import scripts from "+r)))}catch(e){o(e)}},Worker.prototype.getLayerIndex=function(e){var r=this.layerIndexes[e];return r||(r=this.layerIndexes[e]=new StyleLayerIndex),r},Worker.prototype.getWorkerSource=function(e,r){var o=this;if(this.workerSources[e]||(this.workerSources[e]={}),!this.workerSources[e][r]){var t={send:function(r,t,i){o.actor.send(r,t,i,e)}};this.workerSources[e][r]=new this.workerSourceTypes[r](t,this.getLayerIndex(e))}return this.workerSources[e][r]},Worker.prototype.getDEMWorkerSource=function(e){return this.demWorkerSources[e]||(this.demWorkerSources[e]=new RasterDEMTileWorkerSource),this.demWorkerSources[e]},module.exports=function(e){return new Worker(e)};
},{"../style/style_layer_index":210,"../util/actor":250,"./geojson_worker_source":100,"./raster_dem_tile_worker_source":107,"./rtl_text_plugin":109,"./vector_tile_worker_source":116}],119:[function(_dereq_,module,exports){
"use strict";function recalculateLayers(e,r){for(var i=new EvaluationParameters(r),o=0,a=e;o<a.length;o+=1){a[o].recalculate(i)}}var FeatureIndex=_dereq_("../data/feature_index"),ref=_dereq_("../symbol/symbol_layout"),performSymbolLayout=ref.performSymbolLayout,ref$1=_dereq_("../data/array_types"),CollisionBoxArray=ref$1.CollisionBoxArray,DictionaryCoder=_dereq_("../util/dictionary_coder"),SymbolBucket=_dereq_("../data/bucket/symbol_bucket"),util=_dereq_("../util/util"),ref$2=_dereq_("../render/image_atlas"),makeImageAtlas=ref$2.makeImageAtlas,ref$3=_dereq_("../render/glyph_atlas"),makeGlyphAtlas=ref$3.makeGlyphAtlas,EvaluationParameters=_dereq_("../style/evaluation_parameters"),ref$4=_dereq_("./tile_id"),OverscaledTileID=ref$4.OverscaledTileID,WorkerTile=function(e){this.tileID=new OverscaledTileID(e.tileID.overscaledZ,e.tileID.wrap,e.tileID.canonical.z,e.tileID.canonical.x,e.tileID.canonical.y),this.uid=e.uid,this.zoom=e.zoom,this.pixelRatio=e.pixelRatio,this.tileSize=e.tileSize,this.source=e.source,this.overscaling=e.overscaling,this.showCollisionBoxes=e.showCollisionBoxes,this.collectResourceTiming=!!e.collectResourceTiming};WorkerTile.prototype.parse=function(e,r,i,o){function a(){var e=this;if(k)return o(k);if(b&&D){var r=makeGlyphAtlas(b),i=makeImageAtlas(D);for(var a in n){var t=n[a];t instanceof SymbolBucket&&(recalculateLayers(t.layers,e.zoom),performSymbolLayout(t,b,r.positions,D,i.positions,e.showCollisionBoxes))}this.status="done",o(null,{buckets:util.values(n).filter(function(e){return!e.isEmpty()}),featureIndex:s,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:r.image,iconAtlasImage:i.image})}}var t=this;this.status="parsing",this.data=e,this.collisionBoxArray=new CollisionBoxArray;var l=new DictionaryCoder(Object.keys(e.layers).sort()),s=new FeatureIndex(this.tileID,this.overscaling);s.bucketLayerIDs=[];var n={},c={featureIndex:s,iconDependencies:{},glyphDependencies:{}},u=r.familiesBySource[this.source];for(var m in u){var y=e.layers[m];if(y){1===y.version&&util.warnOnce('Vector tile source "'+t.source+'" layer "'+m+'" does not use vector tile spec v2 and therefore may have some rendering errors.');for(var h=l.encode(m),d=[],f=0;f<y.length;f++){var p=y.feature(f);d.push({feature:p,index:f,sourceLayerIndex:h})}for(var v=0,g=u[m];v<g.length;v+=1){var x=g[v],I=x[0];if(!(I.minzoom&&t.zoom<Math.floor(I.minzoom))&&(!(I.maxzoom&&t.zoom>=I.maxzoom)&&"none"!==I.visibility)){recalculateLayers(x,t.zoom);(n[I.id]=I.createBucket({index:s.bucketLayerIDs.length,layers:x,zoom:t.zoom,pixelRatio:t.pixelRatio,overscaling:t.overscaling,collisionBoxArray:t.collisionBoxArray})).populate(d,c),s.bucketLayerIDs.push(x.map(function(e){return e.id}))}}}}var k,b,D,A=util.mapObject(c.glyphDependencies,function(e){return Object.keys(e).map(Number)});Object.keys(A).length?i.send("getGlyphs",{uid:this.uid,stacks:A},function(e,r){k||(k=e,b=r,a.call(t))}):b={};var z=Object.keys(c.iconDependencies);z.length?i.send("getImages",{icons:z},function(e,r){k||(k=e,D=r,a.call(t))}):D={},a.call(this)},module.exports=WorkerTile;
},{"../data/array_types":39,"../data/bucket/symbol_bucket":51,"../data/feature_index":54,"../render/glyph_atlas":85,"../render/image_atlas":87,"../style/evaluation_parameters":182,"../symbol/symbol_layout":227,"../util/dictionary_coder":257,"../util/util":275,"./tile_id":114}],120:[function(_dereq_,module,exports){
"use strict";function deref(r,e){var f={};for(var t in r)"ref"!==t&&(f[t]=r[t]);return refProperties.forEach(function(r){r in e&&(f[r]=e[r])}),f}function derefLayers(r){r=r.slice();for(var e=Object.create(null),f=0;f<r.length;f++)e[r[f].id]=r[f];for(var t=0;t<r.length;t++)"ref"in r[t]&&(r[t]=deref(r[t],e[r[t].ref]));return r}var refProperties=_dereq_("./util/ref_properties");module.exports=derefLayers;
},{"./util/ref_properties":159}],121:[function(_dereq_,module,exports){
"use strict";function addSource(e,r,o){o.push({command:operations.addSource,args:[e,r[e]]})}function removeSource(e,r,o){r.push({command:operations.removeSource,args:[e]}),o[e]=!0}function updateSource(e,r,o,a){removeSource(e,o,a),addSource(e,r,o)}function canUpdateGeoJSON(e,r,o){var a;for(a in e[o])if(e[o].hasOwnProperty(a)&&"data"!==a&&!isEqual(e[o][a],r[o][a]))return!1;for(a in r[o])if(r[o].hasOwnProperty(a)&&"data"!==a&&!isEqual(e[o][a],r[o][a]))return!1;return!0}function diffSources(e,r,o,a){e=e||{},r=r||{};var t;for(t in e)e.hasOwnProperty(t)&&(r.hasOwnProperty(t)||removeSource(t,o,a));for(t in r)r.hasOwnProperty(t)&&(e.hasOwnProperty(t)?isEqual(e[t],r[t])||("geojson"===e[t].type&&"geojson"===r[t].type&&canUpdateGeoJSON(e,r,t)?o.push({command:operations.setGeoJSONSourceData,args:[t,r[t].data]}):updateSource(t,r,o,a)):addSource(t,r,o))}function diffLayerPropertyChanges(e,r,o,a,t,s){e=e||{},r=r||{};var n;for(n in e)e.hasOwnProperty(n)&&(isEqual(e[n],r[n])||o.push({command:s,args:[a,n,r[n],t]}));for(n in r)r.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(isEqual(e[n],r[n])||o.push({command:s,args:[a,n,r[n],t]}))}function pluckId(e){return e.id}function indexById(e,r){return e[r.id]=r,e}function diffLayers(e,r,o){e=e||[],r=r||[];var a,t,s,n,i,p,u,m=e.map(pluckId),c=r.map(pluckId),l=e.reduce(indexById,{}),d=r.reduce(indexById,{}),y=m.slice(),h=Object.create(null);for(a=0,t=0;a<m.length;a++)s=m[a],d.hasOwnProperty(s)?t++:(o.push({command:operations.removeLayer,args:[s]}),y.splice(y.indexOf(s,t),1));for(a=0,t=0;a<c.length;a++)s=c[c.length-1-a],y[y.length-1-a]!==s&&(l.hasOwnProperty(s)?(o.push({command:operations.removeLayer,args:[s]}),y.splice(y.lastIndexOf(s,y.length-t),1)):t++,p=y[y.length-a],o.push({command:operations.addLayer,args:[d[s],p]}),y.splice(y.length-a,0,s),h[s]=!0);for(a=0;a<c.length;a++)if(s=c[a],n=l[s],i=d[s],!h[s]&&!isEqual(n,i))if(isEqual(n.source,i.source)&&isEqual(n["source-layer"],i["source-layer"])&&isEqual(n.type,i.type)){diffLayerPropertyChanges(n.layout,i.layout,o,s,null,operations.setLayoutProperty),diffLayerPropertyChanges(n.paint,i.paint,o,s,null,operations.setPaintProperty),isEqual(n.filter,i.filter)||o.push({command:operations.setFilter,args:[s,i.filter]}),isEqual(n.minzoom,i.minzoom)&&isEqual(n.maxzoom,i.maxzoom)||o.push({command:operations.setLayerZoomRange,args:[s,i.minzoom,i.maxzoom]});for(u in n)n.hasOwnProperty(u)&&"layout"!==u&&"paint"!==u&&"filter"!==u&&"metadata"!==u&&"minzoom"!==u&&"maxzoom"!==u&&(0===u.indexOf("paint.")?diffLayerPropertyChanges(n[u],i[u],o,s,u.slice(6),operations.setPaintProperty):isEqual(n[u],i[u])||o.push({command:operations.setLayerProperty,args:[s,u,i[u]]}));for(u in i)i.hasOwnProperty(u)&&!n.hasOwnProperty(u)&&"layout"!==u&&"paint"!==u&&"filter"!==u&&"metadata"!==u&&"minzoom"!==u&&"maxzoom"!==u&&(0===u.indexOf("paint.")?diffLayerPropertyChanges(n[u],i[u],o,s,u.slice(6),operations.setPaintProperty):isEqual(n[u],i[u])||o.push({command:operations.setLayerProperty,args:[s,u,i[u]]}))}else o.push({command:operations.removeLayer,args:[s]}),p=y[y.lastIndexOf(s)+1],o.push({command:operations.addLayer,args:[i,p]})}function diffStyles(e,r){if(!e)return[{command:operations.setStyle,args:[r]}];var o=[];try{if(!isEqual(e.version,r.version))return[{command:operations.setStyle,args:[r]}];isEqual(e.center,r.center)||o.push({command:operations.setCenter,args:[r.center]}),isEqual(e.zoom,r.zoom)||o.push({command:operations.setZoom,args:[r.zoom]}),isEqual(e.bearing,r.bearing)||o.push({command:operations.setBearing,args:[r.bearing]}),isEqual(e.pitch,r.pitch)||o.push({command:operations.setPitch,args:[r.pitch]}),isEqual(e.sprite,r.sprite)||o.push({command:operations.setSprite,args:[r.sprite]}),isEqual(e.glyphs,r.glyphs)||o.push({command:operations.setGlyphs,args:[r.glyphs]}),isEqual(e.transition,r.transition)||o.push({command:operations.setTransition,args:[r.transition]}),isEqual(e.light,r.light)||o.push({command:operations.setLight,args:[r.light]});var a={},t=[];diffSources(e.sources,r.sources,t,a);var s=[];e.layers&&e.layers.forEach(function(e){a[e.source]?o.push({command:operations.removeLayer,args:[e.id]}):s.push(e)}),o=o.concat(t),diffLayers(s,r.layers,o)}catch(e){console.warn("Unable to compute style diff:",e),o=[{command:operations.setStyle,args:[r]}]}return o}var isEqual=_dereq_("./util/deep_equal"),operations={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"};module.exports=diffStyles,module.exports.operations=operations;
},{"./util/deep_equal":155}],122:[function(_dereq_,module,exports){
"use strict";function ValidationError(i,e,l){this.message=(i?i+": ":"")+l,null!==e&&void 0!==e&&e.__line__&&(this.line=e.__line__)}module.exports=ValidationError;
},{}],123:[function(_dereq_,module,exports){
"use strict";function varargs(r){return{type:r}}function stringifySignature(r){return Array.isArray(r)?"("+r.map(toString).join(", ")+")":"("+toString(r.type)+"...)"}var ref=_dereq_("./types"),toString=ref.toString,ParsingContext=_dereq_("./parsing_context"),EvaluationContext=_dereq_("./evaluation_context"),CompoundExpression=function(r,e,n,t){this.name=r,this.type=e,this._evaluate=n,this.args=t};CompoundExpression.prototype.evaluate=function(r){return this._evaluate(r,this.args)},CompoundExpression.prototype.eachChild=function(r){this.args.forEach(r)},CompoundExpression.prototype.possibleOutputs=function(){return[void 0]},CompoundExpression.parse=function(r,e){var n=r[0],t=CompoundExpression.definitions[n];if(!t)return e.error('Unknown expression "'+n+'". If you wanted a literal array, use ["literal", [...]].',0);for(var o=Array.isArray(t)?t[0]:t.type,i=Array.isArray(t)?[[t[1],t[2]]]:t.overloads,s=i.filter(function(e){var n=e[0];return!Array.isArray(n)||n.length===r.length-1}),a=[],u=1;u<r.length;u++){var p=r[u],l=void 0;if(1===s.length){var g=s[0][0];l=Array.isArray(g)?g[u-1]:g.type}var y=e.parse(p,1+a.length,l);if(!y)return null;a.push(y)}for(var f=null,h=0,d=s;h<d.length;h+=1){var v=d[h],c=v[0],x=v[1];if(f=new ParsingContext(e.registry,e.path,null,e.scope),Array.isArray(c)&&c.length!==a.length)f.error("Expected "+c.length+" arguments, but found "+a.length+" instead.");else{for(var m=0;m<a.length;m++){var C=Array.isArray(c)?c[m]:c.type,E=a[m];f.concat(m+1).checkSubtype(C,E.type)}if(0===f.errors.length)return new CompoundExpression(n,o,x,a)}}if(1===s.length)e.errors.push.apply(e.errors,f.errors);else{var A=s.length?s:i,S=A.map(function(r){return stringifySignature(r[0])}).join(" | "),b=a.map(function(r){return toString(r.type)}).join(", ");e.error("Expected arguments of type "+S+", but found ("+b+") instead.")}return null},CompoundExpression.register=function(r,e){CompoundExpression.definitions=e;for(var n in e)r[n]=CompoundExpression},module.exports={CompoundExpression:CompoundExpression,varargs:varargs};
},{"./evaluation_context":138,"./parsing_context":141,"./types":146}],124:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../types"),toString=ref.toString,array=ref.array,ValueType=ref.ValueType,StringType=ref.StringType,NumberType=ref.NumberType,BooleanType=ref.BooleanType,checkSubtype=ref.checkSubtype,ref$1=_dereq_("../values"),typeOf=ref$1.typeOf,RuntimeError=_dereq_("../runtime_error"),types={string:StringType,number:NumberType,boolean:BooleanType},ArrayAssertion=function(e,r){this.type=e,this.input=r};ArrayAssertion.parse=function(e,r){if(e.length<2||e.length>4)return r.error("Expected 1, 2, or 3 arguments, but found "+(e.length-1)+" instead.");var t,n;if(e.length>2){var i=e[1];if("string"!=typeof i||!(i in types))return r.error('The item type argument of "array" must be one of string, number, boolean',1);t=types[i]}else t=ValueType;if(e.length>3){if("number"!=typeof e[2]||e[2]<0||e[2]!==Math.floor(e[2]))return r.error('The length argument to "array" must be a positive integer literal',2);n=e[2]}var o=array(t,n),u=r.parse(e[e.length-1],e.length-1,ValueType);return u?new ArrayAssertion(o,u):null},ArrayAssertion.prototype.evaluate=function(e){var r=this.input.evaluate(e);if(checkSubtype(this.type,typeOf(r)))throw new RuntimeError("Expected value to be of type "+toString(this.type)+", but found "+toString(typeOf(r))+" instead.");return r},ArrayAssertion.prototype.eachChild=function(e){e(this.input)},ArrayAssertion.prototype.possibleOutputs=function(){return this.input.possibleOutputs()},module.exports=ArrayAssertion;
},{"../runtime_error":143,"../types":146,"../values":147}],125:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../types"),ObjectType=ref.ObjectType,ValueType=ref.ValueType,StringType=ref.StringType,NumberType=ref.NumberType,BooleanType=ref.BooleanType,RuntimeError=_dereq_("../runtime_error"),ref$1=_dereq_("../types"),checkSubtype=ref$1.checkSubtype,toString=ref$1.toString,ref$2=_dereq_("../values"),typeOf=ref$2.typeOf,types={string:StringType,number:NumberType,boolean:BooleanType,object:ObjectType},Assertion=function(e,r){this.type=e,this.args=r};Assertion.parse=function(e,r){if(e.length<2)return r.error("Expected at least one argument.");for(var t=e[0],n=types[t],o=[],p=1;p<e.length;p++){var s=r.parse(e[p],p,ValueType);if(!s)return null;o.push(s)}return new Assertion(n,o)},Assertion.prototype.evaluate=function(e){for(var r=this,t=0;t<this.args.length;t++){var n=r.args[t].evaluate(e);if(!checkSubtype(r.type,typeOf(n)))return n;if(t===r.args.length-1)throw new RuntimeError("Expected value to be of type "+toString(r.type)+", but found "+toString(typeOf(n))+" instead.")}return null},Assertion.prototype.eachChild=function(e){this.args.forEach(e)},Assertion.prototype.possibleOutputs=function(){return(e=[]).concat.apply(e,this.args.map(function(e){return e.possibleOutputs()}));var e},module.exports=Assertion;
},{"../runtime_error":143,"../types":146,"../values":147}],126:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../types"),array=ref.array,ValueType=ref.ValueType,NumberType=ref.NumberType,RuntimeError=_dereq_("../runtime_error"),At=function(e,t,r){this.type=e,this.index=t,this.input=r};At.parse=function(e,t){if(3!==e.length)return t.error("Expected 2 arguments, but found "+(e.length-1)+" instead.");var r=t.parse(e[1],1,NumberType),n=t.parse(e[2],2,array(t.expectedType||ValueType));if(!r||!n)return null;var u=n.type;return new At(u.itemType,r,n)},At.prototype.evaluate=function(e){var t=this.index.evaluate(e),r=this.input.evaluate(e);if(t<0||t>=r.length)throw new RuntimeError("Array index out of bounds: "+t+" > "+r.length+".");if(t!==Math.floor(t))throw new RuntimeError("Array index must be an integer, but found "+t+" instead.");return r[t]},At.prototype.eachChild=function(e){e(this.index),e(this.input)},At.prototype.possibleOutputs=function(){return[void 0]},module.exports=At;
},{"../runtime_error":143,"../types":146}],127:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../types"),BooleanType=ref.BooleanType,Case=function(e,t,r){this.type=e,this.branches=t,this.otherwise=r};Case.parse=function(e,t){if(e.length<4)return t.error("Expected at least 3 arguments, but found only "+(e.length-1)+".");if(e.length%2!=0)return t.error("Expected an odd number of arguments.");var r;t.expectedType&&"value"!==t.expectedType.kind&&(r=t.expectedType);for(var n=[],a=1;a<e.length-1;a+=2){var s=t.parse(e[a],a,BooleanType);if(!s)return null;var o=t.parse(e[a+1],a+1,r);if(!o)return null;n.push([s,o]),r=r||o.type}var u=t.parse(e[e.length-1],e.length-1,r);return u?new Case(r,n,u):null},Case.prototype.evaluate=function(e){for(var t=this,r=0,n=t.branches;r<n.length;r+=1){var a=n[r],s=a[0],o=a[1];if(s.evaluate(e))return o.evaluate(e)}return this.otherwise.evaluate(e)},Case.prototype.eachChild=function(e){for(var t=this,r=0,n=t.branches;r<n.length;r+=1){var a=n[r],s=a[0],o=a[1];e(s),e(o)}e(this.otherwise)},Case.prototype.possibleOutputs=function(){return(e=[]).concat.apply(e,this.branches.map(function(e){e[0];return e[1].possibleOutputs()})).concat(this.otherwise.possibleOutputs());var e},module.exports=Case;
},{"../types":146}],128:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../types"),checkSubtype=ref.checkSubtype,ValueType=ref.ValueType,Coalesce=function(e,t){this.type=e,this.args=t};Coalesce.parse=function(e,t){if(e.length<2)return t.error("Expectected at least one argument.");var r=null,a=t.expectedType;a&&"value"!==a.kind&&(r=a);for(var n=[],o=0,u=e.slice(1);o<u.length;o+=1){var s=u[o],l=t.parse(s,1+n.length,r,void 0,{omitTypeAnnotations:!0});if(!l)return null;r=r||l.type,n.push(l)}return a&&n.some(function(e){return checkSubtype(a,e.type)})?new Coalesce(ValueType,n):new Coalesce(r,n)},Coalesce.prototype.evaluate=function(e){for(var t=this,r=null,a=0,n=t.args;a<n.length;a+=1){if(null!==(r=n[a].evaluate(e)))break}return r},Coalesce.prototype.eachChild=function(e){this.args.forEach(e)},Coalesce.prototype.possibleOutputs=function(){return(e=[]).concat.apply(e,this.args.map(function(e){return e.possibleOutputs()}));var e},module.exports=Coalesce;
},{"../types":146}],129:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../types"),ColorType=ref.ColorType,ValueType=ref.ValueType,NumberType=ref.NumberType,ref$1=_dereq_("../values"),Color=ref$1.Color,validateRGBA=ref$1.validateRGBA,RuntimeError=_dereq_("../runtime_error"),types={"to-number":NumberType,"to-color":ColorType},Coercion=function(r,e){this.type=r,this.args=e};Coercion.parse=function(r,e){if(r.length<2)return e.error("Expected at least one argument.");for(var t=r[0],o=types[t],n=[],i=1;i<r.length;i++){var a=e.parse(r[i],i,ValueType);if(!a)return null;n.push(a)}return new Coercion(o,n)},Coercion.prototype.evaluate=function(r){var e=this;if("color"===this.type.kind){for(var t,o,n=0,i=e.args;n<i.length;n+=1){if(t=i[n].evaluate(r),o=null,"string"==typeof t){var a=r.parseColor(t);if(a)return a}else if(Array.isArray(t)&&!(o=t.length<3||t.length>4?"Invalid rbga value "+JSON.stringify(t)+": expected an array containing either three or four numeric values.":validateRGBA(t[0],t[1],t[2],t[3])))return new Color(t[0]/255,t[1]/255,t[2]/255,t[3])}throw new RuntimeError(o||"Could not parse color from value '"+("string"==typeof t?t:JSON.stringify(t))+"'")}for(var u=null,l=0,s=e.args;l<s.length;l+=1){if(null!==(u=s[l].evaluate(r))){var p=Number(u);if(!isNaN(p))return p}}throw new RuntimeError("Could not convert "+JSON.stringify(u)+" to number.")},Coercion.prototype.eachChild=function(r){this.args.forEach(r)},Coercion.prototype.possibleOutputs=function(){return(r=[]).concat.apply(r,this.args.map(function(r){return r.possibleOutputs()}));var r},module.exports=Coercion;
},{"../runtime_error":143,"../types":146,"../values":147}],130:[function(_dereq_,module,exports){
"use strict";function isComparableType(e){return"string"===e.kind||"number"===e.kind||"boolean"===e.kind||"null"===e.kind}function makeComparison(e){return function(){function t(e,t){this.type=BooleanType,this.lhs=e,this.rhs=t}return t.parse=function(e,r){if(3!==e.length)return r.error("Expected two arguments.");var n=r.parse(e[1],1,ValueType);if(!n)return null;var o=r.parse(e[2],2,ValueType);return o?isComparableType(n.type)||isComparableType(o.type)?n.type.kind!==o.type.kind&&"value"!==n.type.kind&&"value"!==o.type.kind?r.error("Cannot compare "+toString(n.type)+" and "+toString(o.type)+"."):new t(n,o):r.error("Expected at least one argument to be a string, number, boolean, or null, but found ("+toString(n.type)+", "+toString(o.type)+") instead."):null},t.prototype.evaluate=function(t){return e(this.lhs.evaluate(t),this.rhs.evaluate(t))},t.prototype.eachChild=function(e){e(this.lhs),e(this.rhs)},t.prototype.possibleOutputs=function(){return[!0,!1]},t}()}var ref=_dereq_("../types"),ValueType=ref.ValueType,BooleanType=ref.BooleanType,ref$1=_dereq_("../types"),toString=ref$1.toString;module.exports={Equals:makeComparison(function(e,t){return e===t}),NotEquals:makeComparison(function(e,t){return e!==t})};
},{"../types":146}],131:[function(_dereq_,module,exports){
"use strict";function rgba(e,r){var t=r[0],a=r[1],n=r[2],u=r[3];t=t.evaluate(e),a=a.evaluate(e),n=n.evaluate(e);var o=u?u.evaluate(e):1,p=validateRGBA(t,a,n,o);if(p)throw new RuntimeError(p);return new Color(t/255*o,a/255*o,n/255*o,o)}function has(e,r){return e in r}function get(e,r){var t=r[e];return void 0===t?null:t}function length(e,r){return r[0].evaluate(e).length}function lt(e,r){var t=r[0],a=r[1];return t.evaluate(e)<a.evaluate(e)}function gt(e,r){var t=r[0],a=r[1];return t.evaluate(e)>a.evaluate(e)}function lteq(e,r){var t=r[0],a=r[1];return t.evaluate(e)<=a.evaluate(e)}function gteq(e,r){var t=r[0],a=r[1];return t.evaluate(e)>=a.evaluate(e)}function binarySearch(e,r,t,a){for(;t<=a;){var n=t+a>>1;if(r[n]===e)return!0;r[n]>e?a=n-1:t=n+1}return!1}var ref=_dereq_("../types"),NumberType=ref.NumberType,StringType=ref.StringType,BooleanType=ref.BooleanType,ColorType=ref.ColorType,ObjectType=ref.ObjectType,ValueType=ref.ValueType,ErrorType=ref.ErrorType,array=ref.array,toString=ref.toString,ref$1=_dereq_("../values"),typeOf=ref$1.typeOf,Color=ref$1.Color,validateRGBA=ref$1.validateRGBA,ref$2=_dereq_("../compound_expression"),CompoundExpression=ref$2.CompoundExpression,varargs=ref$2.varargs,RuntimeError=_dereq_("../runtime_error"),Let=_dereq_("./let"),Var=_dereq_("./var"),Literal=_dereq_("./literal"),Assertion=_dereq_("./assertion"),ArrayAssertion=_dereq_("./array"),Coercion=_dereq_("./coercion"),At=_dereq_("./at"),Match=_dereq_("./match"),Case=_dereq_("./case"),Step=_dereq_("./step"),Interpolate=_dereq_("./interpolate"),Coalesce=_dereq_("./coalesce"),ref$3=_dereq_("./equals"),Equals=ref$3.Equals,NotEquals=ref$3.NotEquals,expressions={"==":Equals,"!=":NotEquals,array:ArrayAssertion,at:At,boolean:Assertion,case:Case,coalesce:Coalesce,interpolate:Interpolate,let:Let,literal:Literal,match:Match,number:Assertion,object:Assertion,step:Step,string:Assertion,"to-color":Coercion,"to-number":Coercion,var:Var};CompoundExpression.register(expressions,{error:[ErrorType,[StringType],function(e,r){var t=r[0];throw new RuntimeError(t.evaluate(e))}],typeof:[StringType,[ValueType],function(e,r){var t=r[0];return toString(typeOf(t.evaluate(e)))}],"to-string":[StringType,[ValueType],function(e,r){var t=r[0];t=t.evaluate(e);var a=typeof t;return null===t||"string"===a||"number"===a||"boolean"===a?String(t):t instanceof Color?t.toString():JSON.stringify(t)}],"to-boolean":[BooleanType,[ValueType],function(e,r){var t=r[0];return Boolean(t.evaluate(e))}],"to-rgba":[array(NumberType,4),[ColorType],function(e,r){var t=r[0],a=t.evaluate(e),n=a.r,u=a.g,o=a.b,p=a.a;return[255*n/p,255*u/p,255*o/p,p]}],rgb:[ColorType,[NumberType,NumberType,NumberType],rgba],rgba:[ColorType,[NumberType,NumberType,NumberType,NumberType],rgba],length:{type:NumberType,overloads:[[[StringType],length],[[array(ValueType)],length]]},has:{type:BooleanType,overloads:[[[StringType],function(e,r){return has(r[0].evaluate(e),e.properties())}],[[StringType,ObjectType],function(e,r){var t=r[0],a=r[1];return has(t.evaluate(e),a.evaluate(e))}]]},get:{type:ValueType,overloads:[[[StringType],function(e,r){return get(r[0].evaluate(e),e.properties())}],[[StringType,ObjectType],function(e,r){var t=r[0],a=r[1];return get(t.evaluate(e),a.evaluate(e))}]]},properties:[ObjectType,[],function(e){return e.properties()}],"geometry-type":[StringType,[],function(e){return e.geometryType()}],id:[ValueType,[],function(e){return e.id()}],zoom:[NumberType,[],function(e){return e.globals.zoom}],"heatmap-density":[NumberType,[],function(e){return e.globals.heatmapDensity||0}],"+":[NumberType,varargs(NumberType),function(e,r){for(var t=0,a=0,n=r;a<n.length;a+=1){t+=n[a].evaluate(e)}return t}],"*":[NumberType,varargs(NumberType),function(e,r){for(var t=1,a=0,n=r;a<n.length;a+=1){t*=n[a].evaluate(e)}return t}],"-":{type:NumberType,overloads:[[[NumberType,NumberType],function(e,r){var t=r[0],a=r[1];return t.evaluate(e)-a.evaluate(e)}],[[NumberType],function(e,r){return-r[0].evaluate(e)}]]},"/":[NumberType,[NumberType,NumberType],function(e,r){var t=r[0],a=r[1];return t.evaluate(e)/a.evaluate(e)}],"%":[NumberType,[NumberType,NumberType],function(e,r){var t=r[0],a=r[1];return t.evaluate(e)%a.evaluate(e)}],ln2:[NumberType,[],function(){return Math.LN2}],pi:[NumberType,[],function(){return Math.PI}],e:[NumberType,[],function(){return Math.E}],"^":[NumberType,[NumberType,NumberType],function(e,r){var t=r[0],a=r[1];return Math.pow(t.evaluate(e),a.evaluate(e))}],sqrt:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.sqrt(t.evaluate(e))}],log10:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.log10(t.evaluate(e))}],ln:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.log(t.evaluate(e))}],log2:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.log2(t.evaluate(e))}],sin:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.sin(t.evaluate(e))}],cos:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.cos(t.evaluate(e))}],tan:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.tan(t.evaluate(e))}],asin:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.asin(t.evaluate(e))}],acos:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.acos(t.evaluate(e))}],atan:[NumberType,[NumberType],function(e,r){var t=r[0];return Math.atan(t.evaluate(e))}],min:[NumberType,varargs(NumberType),function(e,r){return Math.min.apply(Math,r.map(function(r){return r.evaluate(e)}))}],max:[NumberType,varargs(NumberType),function(e,r){return Math.max.apply(Math,r.map(function(r){return r.evaluate(e)}))}],"filter-==":[BooleanType,[StringType,ValueType],function(e,r){var t=r[0],a=r[1];return e.properties()[t.value]===a.value}],"filter-id-==":[BooleanType,[ValueType],function(e,r){var t=r[0];return e.id()===t.value}],"filter-type-==":[BooleanType,[StringType],function(e,r){var t=r[0];return e.geometryType()===t.value}],"filter-<":[BooleanType,[StringType,ValueType],function(e,r){var t=r[0],a=r[1],n=e.properties()[t.value],u=a.value;return typeof n==typeof u&&n<u}],"filter-id-<":[BooleanType,[ValueType],function(e,r){var t=r[0],a=e.id(),n=t.value;return typeof a==typeof n&&a<n}],"filter->":[BooleanType,[StringType,ValueType],function(e,r){var t=r[0],a=r[1],n=e.properties()[t.value],u=a.value;return typeof n==typeof u&&n>u}],"filter-id->":[BooleanType,[ValueType],function(e,r){var t=r[0],a=e.id(),n=t.value;return typeof a==typeof n&&a>n}],"filter-<=":[BooleanType,[StringType,ValueType],function(e,r){var t=r[0],a=r[1],n=e.properties()[t.value],u=a.value;return typeof n==typeof u&&n<=u}],"filter-id-<=":[BooleanType,[ValueType],function(e,r){var t=r[0],a=e.id(),n=t.value;return typeof a==typeof n&&a<=n}],"filter->=":[BooleanType,[StringType,ValueType],function(e,r){var t=r[0],a=r[1],n=e.properties()[t.value],u=a.value;return typeof n==typeof u&&n>=u}],"filter-id->=":[BooleanType,[ValueType],function(e,r){var t=r[0],a=e.id(),n=t.value;return typeof a==typeof n&&a>=n}],"filter-has":[BooleanType,[ValueType],function(e,r){return r[0].value in e.properties()}],"filter-has-id":[BooleanType,[],function(e){return null!==e.id()}],"filter-type-in":[BooleanType,[array(StringType)],function(e,r){return r[0].value.indexOf(e.geometryType())>=0}],"filter-id-in":[BooleanType,[array(ValueType)],function(e,r){return r[0].value.indexOf(e.id())>=0}],"filter-in-small":[BooleanType,[StringType,array(ValueType)],function(e,r){var t=r[0];return r[1].value.indexOf(e.properties()[t.value])>=0}],"filter-in-large":[BooleanType,[StringType,array(ValueType)],function(e,r){var t=r[0],a=r[1];return binarySearch(e.properties()[t.value],a.value,0,a.value.length-1)}],">":{type:BooleanType,overloads:[[[NumberType,NumberType],gt],[[StringType,StringType],gt]]},"<":{type:BooleanType,overloads:[[[NumberType,NumberType],lt],[[StringType,StringType],lt]]},">=":{type:BooleanType,overloads:[[[NumberType,NumberType],gteq],[[StringType,StringType],gteq]]},"<=":{type:BooleanType,overloads:[[[NumberType,NumberType],lteq],[[StringType,StringType],lteq]]},all:{type:BooleanType,overloads:[[[BooleanType,BooleanType],function(e,r){var t=r[0],a=r[1];return t.evaluate(e)&&a.evaluate(e)}],[varargs(BooleanType),function(e,r){for(var t=0,a=r;t<a.length;t+=1){if(!a[t].evaluate(e))return!1}return!0}]]},any:{type:BooleanType,overloads:[[[BooleanType,BooleanType],function(e,r){var t=r[0],a=r[1];return t.evaluate(e)||a.evaluate(e)}],[varargs(BooleanType),function(e,r){for(var t=0,a=r;t<a.length;t+=1){if(a[t].evaluate(e))return!0}return!1}]]},"!":[BooleanType,[BooleanType],function(e,r){return!r[0].evaluate(e)}],upcase:[StringType,[StringType],function(e,r){return r[0].evaluate(e).toUpperCase()}],downcase:[StringType,[StringType],function(e,r){return r[0].evaluate(e).toLowerCase()}],concat:[StringType,varargs(StringType),function(e,r){return r.map(function(r){return r.evaluate(e)}).join("")}]}),module.exports=expressions;
},{"../compound_expression":123,"../runtime_error":143,"../types":146,"../values":147,"./array":124,"./assertion":125,"./at":126,"./case":127,"./coalesce":128,"./coercion":129,"./equals":130,"./interpolate":132,"./let":133,"./literal":134,"./match":135,"./step":136,"./var":137}],132:[function(_dereq_,module,exports){
"use strict";function exponentialInterpolation(e,t,r,n){var i=n-r,o=e-r;return 0===i?0:1===t?o/i:(Math.pow(t,o)-1)/(Math.pow(t,i)-1)}var UnitBezier=_dereq_("@mapbox/unitbezier"),interpolate=_dereq_("../../util/interpolate"),ref=_dereq_("../types"),toString=ref.toString,NumberType=ref.NumberType,ref$1=_dereq_("../stops"),findStopLessThanOrEqualTo=ref$1.findStopLessThanOrEqualTo,Interpolate=function(e,t,r,n){var i=this;this.type=e,this.interpolation=t,this.input=r,this.labels=[],this.outputs=[];for(var o=0,a=n;o<a.length;o+=1){var u=a[o],p=u[0],l=u[1];i.labels.push(p),i.outputs.push(l)}};Interpolate.interpolationFactor=function(e,t,r,n){var i=0;if("exponential"===e.name)i=exponentialInterpolation(t,e.base,r,n);else if("linear"===e.name)i=exponentialInterpolation(t,1,r,n);else if("cubic-bezier"===e.name){var o=e.controlPoints,a=new UnitBezier(o[0],o[1],o[2],o[3]);i=a.solve(exponentialInterpolation(t,1,r,n))}return i},Interpolate.parse=function(e,t){var r=e[1],n=e[2],i=e.slice(3);if(!Array.isArray(r)||0===r.length)return t.error("Expected an interpolation type expression.",1);if("linear"===r[0])r={name:"linear"};else if("exponential"===r[0]){var o=r[1];if("number"!=typeof o)return t.error("Exponential interpolation requires a numeric base.",1,1);r={name:"exponential",base:o}}else{if("cubic-bezier"!==r[0])return t.error("Unknown interpolation type "+String(r[0]),1,0);var a=r.slice(1);if(4!==a.length||a.some(function(e){return"number"!=typeof e||e<0||e>1}))return t.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);r={name:"cubic-bezier",controlPoints:a}}if(e.length-1<4)return t.error("Expected at least 4 arguments, but found only "+(e.length-1)+".");if((e.length-1)%2!=0)return t.error("Expected an even number of arguments.");if(!(n=t.parse(n,2,NumberType)))return null;var u=[],p=null;t.expectedType&&"value"!==t.expectedType.kind&&(p=t.expectedType);for(var l=0;l<i.length;l+=2){var s=i[l],f=i[l+1],c=l+3,h=l+4;if("number"!=typeof s)return t.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',c);if(u.length&&u[u.length-1][0]>=s)return t.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',c);var v=t.parse(f,h,p);if(!v)return null;p=p||v.type,u.push([s,v])}return"number"===p.kind||"color"===p.kind||"array"===p.kind&&"number"===p.itemType.kind&&"number"==typeof p.N?new Interpolate(p,r,n,u):t.error("Type "+toString(p)+" is not interpolatable.")},Interpolate.prototype.evaluate=function(e){var t=this.labels,r=this.outputs;if(1===t.length)return r[0].evaluate(e);var n=this.input.evaluate(e);if(n<=t[0])return r[0].evaluate(e);var i=t.length;if(n>=t[i-1])return r[i-1].evaluate(e);var o=findStopLessThanOrEqualTo(t,n),a=t[o],u=t[o+1],p=Interpolate.interpolationFactor(this.interpolation,n,a,u),l=r[o].evaluate(e),s=r[o+1].evaluate(e);return interpolate[this.type.kind.toLowerCase()](l,s,p)},Interpolate.prototype.eachChild=function(e){var t=this;e(this.input);for(var r=0,n=t.outputs;r<n.length;r+=1){e(n[r])}},Interpolate.prototype.possibleOutputs=function(){return(e=[]).concat.apply(e,this.outputs.map(function(e){return e.possibleOutputs()}));var e},module.exports=Interpolate;
},{"../../util/interpolate":158,"../stops":145,"../types":146,"@mapbox/unitbezier":7}],133:[function(_dereq_,module,exports){
"use strict";var Let=function(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e};Let.prototype.evaluate=function(t){t.pushScope(this.bindings);var e=this.result.evaluate(t);return t.popScope(),e},Let.prototype.eachChild=function(t){for(var e=this,r=0,n=e.bindings;r<n.length;r+=1){t(n[r][1])}t(this.result)},Let.parse=function(t,e){if(t.length<4)return e.error("Expected at least 3 arguments, but found "+(t.length-1)+" instead.");for(var r=[],n=1;n<t.length-1;n+=2){var s=t[n];if("string"!=typeof s)return e.error("Expected string, but found "+typeof s+" instead.",n);if(/[^a-zA-Z0-9_]/.test(s))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);var i=e.parse(t[n+1],n+1);if(!i)return null;r.push([s,i])}var u=e.parse(t[t.length-1],t.length-1,void 0,r);return u?new Let(r,u):null},Let.prototype.possibleOutputs=function(){return this.result.possibleOutputs()},module.exports=Let;
},{}],134:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../values"),isValue=ref.isValue,typeOf=ref.typeOf,Literal=function(e,r){this.type=e,this.value=r};Literal.parse=function(e,r){if(2!==e.length)return r.error("'literal' expression requires exactly one argument, but found "+(e.length-1)+" instead.");if(!isValue(e[1]))return r.error("invalid value");var t=e[1],i=typeOf(t),a=r.expectedType;return"array"!==i.kind||0!==i.N||!a||"array"!==a.kind||"number"==typeof a.N&&0!==a.N||(i=a),new Literal(i,t)},Literal.prototype.evaluate=function(){return this.value},Literal.prototype.eachChild=function(){},Literal.prototype.possibleOutputs=function(){return[this.value]},module.exports=Literal;
},{"../values":147}],135:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../values"),typeOf=ref.typeOf,Match=function(e,t,r,n,u,s){this.inputType=e,this.type=t,this.input=r,this.cases=n,this.outputs=u,this.otherwise=s};Match.parse=function(e,t){if(e.length<5)return t.error("Expected at least 4 arguments, but found only "+(e.length-1)+".");if(e.length%2!=1)return t.error("Expected an even number of arguments.");var r,n;t.expectedType&&"value"!==t.expectedType.kind&&(n=t.expectedType);for(var u={},s=[],a=2;a<e.length-1;a+=2){var i=e[a],o=e[a+1];Array.isArray(i)||(i=[i]);var p=t.concat(a);if(0===i.length)return p.error("Expected at least one branch label.");for(var h=0,l=i;h<l.length;h+=1){var c=l[h];if("number"!=typeof c&&"string"!=typeof c)return p.error("Branch labels must be numbers or strings.");if("number"==typeof c&&Math.abs(c)>Number.MAX_SAFE_INTEGER)return p.error("Branch labels must be integers no larger than "+Number.MAX_SAFE_INTEGER+".");if("number"==typeof c&&Math.floor(c)!==c)return p.error("Numeric branch labels must be integer values.");if(r){if(p.checkSubtype(r,typeOf(c)))return null}else r=typeOf(c);if(void 0!==u[String(c)])return p.error("Branch labels must be unique.");u[String(c)]=s.length}var f=t.parse(o,a,n);if(!f)return null;n=n||f.type,s.push(f)}var b=t.parse(e[1],1,r);if(!b)return null;var y=t.parse(e[e.length-1],e.length-1,n);return y?new Match(r,n,b,u,s,y):null},Match.prototype.evaluate=function(e){var t=this.input.evaluate(e);return(this.outputs[this.cases[t]]||this.otherwise).evaluate(e)},Match.prototype.eachChild=function(e){e(this.input),this.outputs.forEach(e),e(this.otherwise)},Match.prototype.possibleOutputs=function(){return(e=[]).concat.apply(e,this.outputs.map(function(e){return e.possibleOutputs()})).concat(this.otherwise.possibleOutputs());var e},module.exports=Match;
},{"../values":147}],136:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../types"),NumberType=ref.NumberType,ref$1=_dereq_("../stops"),findStopLessThanOrEqualTo=ref$1.findStopLessThanOrEqualTo,Step=function(e,t,r){var u=this;this.type=e,this.input=t,this.labels=[],this.outputs=[];for(var n=0,s=r;n<s.length;n+=1){var p=s[n],a=p[0],i=p[1];u.labels.push(a),u.outputs.push(i)}};Step.parse=function(e,t){var r=e[1],u=e.slice(2);if(e.length-1<4)return t.error("Expected at least 4 arguments, but found only "+(e.length-1)+".");if((e.length-1)%2!=0)return t.error("Expected an even number of arguments.");if(!(r=t.parse(r,1,NumberType)))return null;var n=[],s=null;t.expectedType&&"value"!==t.expectedType.kind&&(s=t.expectedType),u.unshift(-1/0);for(var p=0;p<u.length;p+=2){var a=u[p],i=u[p+1],o=p+1,l=p+2;if("number"!=typeof a)return t.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',o);if(n.length&&n[n.length-1][0]>=a)return t.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',o);var f=t.parse(i,l,s);if(!f)return null;s=s||f.type,n.push([a,f])}return new Step(s,r,n)},Step.prototype.evaluate=function(e){var t=this.labels,r=this.outputs;if(1===t.length)return r[0].evaluate(e);var u=this.input.evaluate(e);if(u<=t[0])return r[0].evaluate(e);var n=t.length;return u>=t[n-1]?r[n-1].evaluate(e):r[findStopLessThanOrEqualTo(t,u)].evaluate(e)},Step.prototype.eachChild=function(e){var t=this;e(this.input);for(var r=0,u=t.outputs;r<u.length;r+=1){e(u[r])}},Step.prototype.possibleOutputs=function(){return(e=[]).concat.apply(e,this.outputs.map(function(e){return e.possibleOutputs()}));var e},module.exports=Step;
},{"../stops":145,"../types":146}],137:[function(_dereq_,module,exports){
"use strict";var Var=function(e,r){this.type=r,this.name=e};Var.parse=function(e,r){if(2!==e.length||"string"!=typeof e[1])return r.error("'var' expression requires exactly one string literal argument.");var t=e[1];return r.scope.has(t)?new Var(t,r.scope.get(t).type):r.error('Unknown variable "'+t+'". Make sure "'+t+'" has been bound in an enclosing "let" expression before using it.',1)},Var.prototype.evaluate=function(e){return e.scope.get(this.name).evaluate(e)},Var.prototype.eachChild=function(){},Var.prototype.possibleOutputs=function(){return[void 0]},module.exports=Var;
},{}],138:[function(_dereq_,module,exports){
"use strict";var Scope=_dereq_("./scope"),ref=_dereq_("./values"),Color=ref.Color,geometryTypes=["Unknown","Point","LineString","Polygon"],EvaluationContext=function(){this.scope=new Scope,this._parseColorCache={}};EvaluationContext.prototype.id=function(){return this.feature&&"id"in this.feature?this.feature.id:null},EvaluationContext.prototype.geometryType=function(){return this.feature?"number"==typeof this.feature.type?geometryTypes[this.feature.type]:this.feature.type:null},EvaluationContext.prototype.properties=function(){return this.feature&&this.feature.properties||{}},EvaluationContext.prototype.pushScope=function(t){this.scope=this.scope.concat(t)},EvaluationContext.prototype.popScope=function(){this.scope=this.scope.parent},EvaluationContext.prototype.parseColor=function(t){var e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=Color.parse(t)),e},module.exports=EvaluationContext;
},{"./scope":144,"./values":147}],139:[function(_dereq_,module,exports){
"use strict";function isExpression(e){return Array.isArray(e)&&e.length>0&&"string"==typeof e[0]&&e[0]in definitions}function createExpression(e,r,n){void 0===n&&(n={});var t=new ParsingContext(definitions,[],getExpectedType(r)),o=t.parse(e);return o?success(!1===n.handleErrors?new StyleExpression(o):new StyleExpressionWithErrorHandling(o,r)):error(t.errors)}function createPropertyExpression(e,r,n){if(void 0===n&&(n={}),e=createExpression(e,r,n),"error"===e.result)return e;var t=e.value.expression,o=isConstant.isFeatureConstant(t);if(!o&&!r["property-function"])return error([new ParsingError("","property expressions not supported")]);var i=isConstant.isGlobalPropertyConstant(t,["zoom"]);if(!i&&!1===r["zoom-function"])return error([new ParsingError("","zoom expressions not supported")]);var s=findZoomCurve(t);return s||i?s instanceof ParsingError?error([s]):s instanceof Interpolate&&"piecewise-constant"===r.function?error([new ParsingError("",'"interpolate" expressions cannot be used with this property')]):success(s?o?new ZoomDependentExpression("camera",e.value,s):new ZoomDependentExpression("composite",e.value,s):o?new ZoomConstantExpression("constant",e.value):new ZoomConstantExpression("source",e.value)):error([new ParsingError("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}function normalizePropertyExpression(e,r){if(isFunction(e))return new StylePropertyFunction(e,r);if(isExpression(e)){var n=createPropertyExpression(e,r);if("error"===n.result)throw new Error(n.value.map(function(e){return e.key+": "+e.message}).join(", "));return n.value}var t=e;return"string"==typeof e&&"color"===r.type&&(t=Color.parse(e)),{kind:"constant",evaluate:function(){return t}}}function findZoomCurve(e){var r=null;if(e instanceof Let)r=findZoomCurve(e.result);else if(e instanceof Coalesce)for(var n=0,t=e.args;n<t.length;n+=1){var o=t[n];if(r=findZoomCurve(o))break}else(e instanceof Step||e instanceof Interpolate)&&e.input instanceof CompoundExpression&&"zoom"===e.input.name&&(r=e);return r instanceof ParsingError?r:(e.eachChild(function(e){var n=findZoomCurve(e);n instanceof ParsingError?r=n:!r&&n?r=new ParsingError("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):r&&n&&r!==n&&(r=new ParsingError("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))}),r)}function getExpectedType(e){var r={color:ColorType,string:StringType,number:NumberType,enum:StringType,boolean:BooleanType};return"array"===e.type?array(r[e.value]||ValueType,e.length):r[e.type]||null}function getDefaultValue(e){return"color"===e.type&&isFunction(e.default)?new Color(0,0,0,0):"color"===e.type?Color.parse(e.default)||null:void 0===e.default?null:e.default}var extend=_dereq_("../util/extend"),ParsingError=_dereq_("./parsing_error"),ParsingContext=_dereq_("./parsing_context"),EvaluationContext=_dereq_("./evaluation_context"),ref=_dereq_("./compound_expression"),CompoundExpression=ref.CompoundExpression,Step=_dereq_("./definitions/step"),Interpolate=_dereq_("./definitions/interpolate"),Coalesce=_dereq_("./definitions/coalesce"),Let=_dereq_("./definitions/let"),definitions=_dereq_("./definitions"),isConstant=_dereq_("./is_constant"),RuntimeError=_dereq_("./runtime_error"),ref$1=_dereq_("../util/result"),success=ref$1.success,error=ref$1.error,StyleExpression=function(e){this.expression=e};StyleExpression.prototype.evaluate=function(e,r){return this._evaluator||(this._evaluator=new EvaluationContext),this._evaluator.globals=e,this._evaluator.feature=r,this.expression.evaluate(this._evaluator)};var StyleExpressionWithErrorHandling=function(e){function r(r,n){e.call(this,r),this._warningHistory={},this._defaultValue=getDefaultValue(n),"enum"===n.type&&(this._enumValues=n.values)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.evaluate=function(e,r){this._evaluator||(this._evaluator=new EvaluationContext),this._evaluator.globals=e,this._evaluator.feature=r;try{var n=this.expression.evaluate(this._evaluator);if(null===n||void 0===n)return this._defaultValue;if(this._enumValues&&!(n in this._enumValues))throw new RuntimeError("Expected value to be one of "+Object.keys(this._enumValues).map(function(e){return JSON.stringify(e)}).join(", ")+", but found "+JSON.stringify(n)+" instead.");return n}catch(e){return this._warningHistory[e.message]||(this._warningHistory[e.message]=!0,"undefined"!=typeof console&&console.warn(e.message)),this._defaultValue}},r}(StyleExpression),ZoomConstantExpression=function(e,r){this.kind=e,this._styleExpression=r};ZoomConstantExpression.prototype.evaluate=function(e,r){return this._styleExpression.evaluate(e,r)};var ZoomDependentExpression=function(e,r,n){this.kind=e,this.zoomStops=n.labels,this._styleExpression=r,n instanceof Interpolate&&(this._interpolationType=n.interpolation)};ZoomDependentExpression.prototype.evaluate=function(e,r){return this._styleExpression.evaluate(e,r)},ZoomDependentExpression.prototype.interpolationFactor=function(e,r,n){return this._interpolationType?Interpolate.interpolationFactor(this._interpolationType,e,r,n):0};var ref$2=_dereq_("../function"),isFunction=ref$2.isFunction,createFunction=ref$2.createFunction,ref$3=_dereq_("./values"),Color=ref$3.Color,StylePropertyFunction=function(e,r){this._parameters=e,this._specification=r,extend(this,createFunction(this._parameters,this._specification))};StylePropertyFunction.deserialize=function(e){return new StylePropertyFunction(e._parameters,e._specification)},StylePropertyFunction.serialize=function(e){return{_parameters:e._parameters,_specification:e._specification}},module.exports={StyleExpression:StyleExpression,StyleExpressionWithErrorHandling:StyleExpressionWithErrorHandling,isExpression:isExpression,createExpression:createExpression,createPropertyExpression:createPropertyExpression,normalizePropertyExpression:normalizePropertyExpression,ZoomConstantExpression:ZoomConstantExpression,ZoomDependentExpression:ZoomDependentExpression,StylePropertyFunction:StylePropertyFunction};var ref$4=_dereq_("./types"),ColorType=ref$4.ColorType,StringType=ref$4.StringType,NumberType=ref$4.NumberType,BooleanType=ref$4.BooleanType,ValueType=ref$4.ValueType,array=ref$4.array;
},{"../function":149,"../util/extend":156,"../util/result":160,"./compound_expression":123,"./definitions":131,"./definitions/coalesce":128,"./definitions/interpolate":132,"./definitions/let":133,"./definitions/step":136,"./evaluation_context":138,"./is_constant":140,"./parsing_context":141,"./parsing_error":142,"./runtime_error":143,"./types":146,"./values":147}],140:[function(_dereq_,module,exports){
"use strict";function isFeatureConstant(n){if(n instanceof CompoundExpression){if("get"===n.name&&1===n.args.length)return!1;if("has"===n.name&&1===n.args.length)return!1;if("properties"===n.name||"geometry-type"===n.name||"id"===n.name)return!1;if(/^filter-/.test(n.name))return!1}var e=!0;return n.eachChild(function(n){e&&!isFeatureConstant(n)&&(e=!1)}),e}function isGlobalPropertyConstant(n,e){if(n instanceof CompoundExpression&&e.indexOf(n.name)>=0)return!1;var t=!0;return n.eachChild(function(n){t&&!isGlobalPropertyConstant(n,e)&&(t=!1)}),t}var ref=_dereq_("./compound_expression"),CompoundExpression=ref.CompoundExpression;module.exports={isFeatureConstant:isFeatureConstant,isGlobalPropertyConstant:isGlobalPropertyConstant};
},{"./compound_expression":123}],141:[function(_dereq_,module,exports){
"use strict";function isConstant(e){var r=_dereq_("./compound_expression"),t=r.CompoundExpression,n=_dereq_("./is_constant"),i=n.isGlobalPropertyConstant,o=n.isFeatureConstant;if(e instanceof _dereq_("./definitions/var"))return!1;if(e instanceof t&&"error"===e.name)return!1;var a=!0;return e.eachChild(function(e){e instanceof Literal||(a=!1)}),!!a&&(o(e)&&i(e,["zoom","heatmap-density"]))}var Scope=_dereq_("./scope"),ref=_dereq_("./types"),checkSubtype=ref.checkSubtype,ParsingError=_dereq_("./parsing_error"),Literal=_dereq_("./definitions/literal"),Assertion=_dereq_("./definitions/assertion"),ArrayAssertion=_dereq_("./definitions/array"),Coercion=_dereq_("./definitions/coercion"),ParsingContext=function(e,r,t,n,i){void 0===r&&(r=[]),void 0===n&&(n=new Scope),void 0===i&&(i=[]),this.registry=e,this.path=r,this.key=r.map(function(e){return"["+e+"]"}).join(""),this.scope=n,this.errors=i,this.expectedType=t};ParsingContext.prototype.parse=function(e,r,t,n,i){void 0===i&&(i={});var o=this;if(r&&(o=o.concat(r,t,n)),null!==e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e||(e=["literal",e]),Array.isArray(e)){if(0===e.length)return o.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');var a=e[0];if("string"!=typeof a)return o.error("Expression name must be a string, but found "+typeof a+' instead. If you wanted a literal array, use ["literal", [...]].',0),null;var s=o.registry[a];if(s){var u=s.parse(e,o);if(!u)return null;if(o.expectedType){var p=o.expectedType,l=u.type;if("string"!==p.kind&&"number"!==p.kind&&"boolean"!==p.kind||"value"!==l.kind)if("array"===p.kind&&"value"===l.kind)i.omitTypeAnnotations||(u=new ArrayAssertion(p,u));else if("color"!==p.kind||"value"!==l.kind&&"string"!==l.kind){if(o.checkSubtype(o.expectedType,u.type))return null}else i.omitTypeAnnotations||(u=new Coercion(p,[u]));else i.omitTypeAnnotations||(u=new Assertion(p,[u]))}if(!(u instanceof Literal)&&isConstant(u)){var c=new(_dereq_("./evaluation_context"));try{u=new Literal(u.type,u.evaluate(c))}catch(e){return o.error(e.message),null}}return u}return o.error('Unknown expression "'+a+'". If you wanted a literal array, use ["literal", [...]].',0)}return void 0===e?o.error("'undefined' value invalid. Use null instead."):"object"==typeof e?o.error('Bare objects invalid. Use ["literal", {...}] instead.'):o.error("Expected an array, but found "+typeof e+" instead.")},ParsingContext.prototype.concat=function(e,r,t){var n="number"==typeof e?this.path.concat(e):this.path,i=t?this.scope.concat(t):this.scope;return new ParsingContext(this.registry,n,r||null,i,this.errors)},ParsingContext.prototype.error=function(e){for(var r=[],t=arguments.length-1;t-- >0;)r[t]=arguments[t+1];var n=""+this.key+r.map(function(e){return"["+e+"]"}).join("");this.errors.push(new ParsingError(n,e))},ParsingContext.prototype.checkSubtype=function(e,r){var t=checkSubtype(e,r);return t&&this.error(t),t},module.exports=ParsingContext;
},{"./compound_expression":123,"./definitions/array":124,"./definitions/assertion":125,"./definitions/coercion":129,"./definitions/literal":134,"./definitions/var":137,"./evaluation_context":138,"./is_constant":140,"./parsing_error":142,"./scope":144,"./types":146}],142:[function(_dereq_,module,exports){
"use strict";var ParsingError=function(r){function t(t,o){r.call(this,o),this.message=o,this.key=t}return r&&(t.__proto__=r),t.prototype=Object.create(r&&r.prototype),t.prototype.constructor=t,t}(Error);module.exports=ParsingError;
},{}],143:[function(_dereq_,module,exports){
"use strict";var RuntimeError=function(r){this.name="ExpressionEvaluationError",this.message=r};RuntimeError.prototype.toJSON=function(){return this.message},module.exports=RuntimeError;
},{}],144:[function(_dereq_,module,exports){
"use strict";var Scope=function(t,n){var i=this;void 0===n&&(n=[]),this.parent=t,this.bindings={};for(var e=0,r=n;e<r.length;e+=1){var o=r[e],s=o[0],p=o[1];i.bindings[s]=p}};Scope.prototype.concat=function(t){return new Scope(this,t)},Scope.prototype.get=function(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(t+" not found in scope.")},Scope.prototype.has=function(t){return!!this.bindings[t]||!!this.parent&&this.parent.has(t)},module.exports=Scope;
},{}],145:[function(_dereq_,module,exports){
"use strict";function findStopLessThanOrEqualTo(r,e){for(var n,t,o=r.length,u=0,i=o-1,a=0;u<=i;){if(a=Math.floor((u+i)/2),n=r[a],t=r[a+1],e===n||e>n&&e<t)return a;if(n<e)u=a+1;else{if(!(n>e))throw new RuntimeError("Input is not a number.");i=a-1}}return Math.max(a-1,0)}var RuntimeError=_dereq_("./runtime_error");module.exports={findStopLessThanOrEqualTo:findStopLessThanOrEqualTo};
},{"./runtime_error":143}],146:[function(_dereq_,module,exports){
"use strict";function array(e,r){return{kind:"array",itemType:e,N:r}}function toString(e){if("array"===e.kind){var r=toString(e.itemType);return"number"==typeof e.N?"array<"+r+", "+e.N+">":"value"===e.itemType.kind?"array":"array<"+r+">"}return e.kind}function checkSubtype(e,r){if("error"===r.kind)return null;if("array"===e.kind){if("array"===r.kind&&!checkSubtype(e.itemType,r.itemType)&&("number"!=typeof e.N||e.N===r.N))return null}else{if(e.kind===r.kind)return null;if("value"===e.kind)for(var n=0,y=valueMemberTypes;n<y.length;n+=1){var t=y[n];if(!checkSubtype(t,r))return null}}return"Expected "+toString(e)+" but found "+toString(r)+" instead."}var NullType={kind:"null"},NumberType={kind:"number"},StringType={kind:"string"},BooleanType={kind:"boolean"},ColorType={kind:"color"},ObjectType={kind:"object"},ValueType={kind:"value"},ErrorType={kind:"error"},valueMemberTypes=[NullType,NumberType,StringType,BooleanType,ColorType,ObjectType,array(ValueType)];module.exports={NullType:NullType,NumberType:NumberType,StringType:StringType,BooleanType:BooleanType,ColorType:ColorType,ObjectType:ObjectType,ValueType:ValueType,array:array,ErrorType:ErrorType,toString:toString,checkSubtype:checkSubtype};
},{}],147:[function(_dereq_,module,exports){
"use strict";function validateRGBA(e,r,t,n){if(!("number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255&&"number"==typeof t&&t>=0&&t<=255)){return"Invalid rgba value ["+("number"==typeof n?[e,r,t,n]:[e,r,t]).join(", ")+"]: 'r', 'g', and 'b' must be between 0 and 255."}return void 0===n||"number"==typeof n&&n>=0&&n<=1?null:"Invalid rgba value ["+[e,r,t,n].join(", ")+"]: 'a' must be between 0 and 1."}function isValue(e){if(null===e)return!0;if("string"==typeof e)return!0;if("boolean"==typeof e)return!0;if("number"==typeof e)return!0;if(e instanceof Color)return!0;if(Array.isArray(e)){for(var r=0,t=e;r<t.length;r+=1){if(!isValue(t[r]))return!1}return!0}if("object"==typeof e){for(var n in e)if(!isValue(e[n]))return!1;return!0}return!1}function typeOf(e){if(null===e)return NullType;if("string"==typeof e)return StringType;if("boolean"==typeof e)return BooleanType;if("number"==typeof e)return NumberType;if(e instanceof Color)return ColorType;if(Array.isArray(e)){for(var r,t=e.length,n=0,u=e;n<u.length;n+=1){var o=u[n],f=typeOf(o);if(r){if(r===f)continue;r=ValueType;break}r=f}return array(r||ValueType,t)}return ObjectType}var Color=_dereq_("../util/color"),ref=_dereq_("./types"),NullType=ref.NullType,NumberType=ref.NumberType,StringType=ref.StringType,BooleanType=ref.BooleanType,ColorType=ref.ColorType,ObjectType=ref.ObjectType,ValueType=ref.ValueType,array=ref.array;module.exports={Color:Color,validateRGBA:validateRGBA,isValue:isValue,typeOf:typeOf};
},{"../util/color":153,"./types":146}],148:[function(_dereq_,module,exports){
"use strict";function isExpressionFilter(e){if(!Array.isArray(e)||0===e.length)return!1;switch(e[0]){case"has":return e.length>=2&&"$id"!==e[1]&&"$type"!==e[1];case"in":case"!in":case"!has":case"none":return!1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3===e.length&&(Array.isArray(e[1])||Array.isArray(e[2]));case"any":case"all":for(var r=0,t=e.slice(1);r<t.length;r+=1){var n=t[r];if(!isExpressionFilter(n)&&"boolean"!=typeof n)return!1}return!0;default:return!0}}function createFilter(e){if(!e)return function(){return!0};isExpressionFilter(e)||(e=convertFilter(e));var r=createExpression(e,filterSpec);if("error"===r.result)throw new Error(r.value.map(function(e){return e.key+": "+e.message}).join(", "));return function(e,t){return r.value.evaluate(e,t)}}function compare(e,r){return e<r?-1:e>r?1:0}function convertFilter(e){if(!e)return!0;var r=e[0];return e.length<=1?"any"!==r:"=="===r?convertComparisonOp(e[1],e[2],"=="):"!="===r?convertNegation(convertComparisonOp(e[1],e[2],"==")):"<"===r||">"===r||"<="===r||">="===r?convertComparisonOp(e[1],e[2],r):"any"===r?convertDisjunctionOp(e.slice(1)):"all"===r?["all"].concat(e.slice(1).map(convertFilter)):"none"===r?["all"].concat(e.slice(1).map(convertFilter).map(convertNegation)):"in"===r?convertInOp(e[1],e.slice(2)):"!in"===r?convertNegation(convertInOp(e[1],e.slice(2))):"has"===r?convertHasOp(e[1]):"!has"!==r||convertNegation(convertHasOp(e[1]))}function convertComparisonOp(e,r,t){switch(e){case"$type":return["filter-type-"+t,r];case"$id":return["filter-id-"+t,r];default:return["filter-"+t,e,r]}}function convertDisjunctionOp(e){return["any"].concat(e.map(convertFilter))}function convertInOp(e,r){if(0===r.length)return!1;switch(e){case"$type":return["filter-type-in",["literal",r]];case"$id":return["filter-id-in",["literal",r]];default:return r.length>200&&!r.some(function(e){return typeof e!=typeof r[0]})?["filter-in-large",e,["literal",r.sort(compare)]]:["filter-in-small",e,["literal",r]]}}function convertHasOp(e){switch(e){case"$type":return!0;case"$id":return["filter-has-id"];default:return["filter-has",e]}}function convertNegation(e){return["!",e]}var ref=_dereq_("../expression"),createExpression=ref.createExpression;module.exports=createFilter,module.exports.isExpressionFilter=isExpressionFilter;var filterSpec={type:"boolean",default:!1,function:!0,"property-function":!0,"zoom-function":!0};
},{"../expression":139}],149:[function(_dereq_,module,exports){
"use strict";function isFunction(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function identityFunction(e){return e}function createFunction(e,t){var o="color"===t.type,r=e.stops&&"object"==typeof e.stops[0][0],n=r||void 0!==e.property,a=r||!n,i=e.type||("interpolated"===t.function?"exponential":"interval");if(o&&(e=extend({},e),e.stops&&(e.stops=e.stops.map(function(e){return[e[0],Color.parse(e[1])]})),e.default?e.default=Color.parse(e.default):e.default=Color.parse(t.default)),e.colorSpace&&"rgb"!==e.colorSpace&&!colorSpaces[e.colorSpace])throw new Error("Unknown color space: "+e.colorSpace);var u,p,l;if("exponential"===i)u=evaluateExponentialFunction;else if("interval"===i)u=evaluateIntervalFunction;else if("categorical"===i){u=evaluateCategoricalFunction,p=Object.create(null);for(var s=0,c=e.stops;s<c.length;s+=1){var f=c[s];p[f[0]]=f[1]}l=typeof e.stops[0][0]}else{if("identity"!==i)throw new Error('Unknown function type "'+i+'"');u=evaluateIdentityFunction}if(r){for(var v={},d=[],y=0;y<e.stops.length;y++){var F=e.stops[y],h=F[0].zoom;void 0===v[h]&&(v[h]={zoom:h,type:e.type,property:e.property,default:e.default,stops:[]},d.push(h)),v[h].stops.push([F[0].value,F[1]])}for(var m=[],g=0,b=d;g<b.length;g+=1){var S=b[g];m.push([v[S].zoom,createFunction(v[S],t)])}return{kind:"composite",interpolationFactor:Interpolate.interpolationFactor.bind(void 0,{name:"linear"}),zoomStops:m.map(function(e){return e[0]}),evaluate:function(o,r){var n=o.zoom;return evaluateExponentialFunction({stops:m,base:e.base},t,n).evaluate(n,r)}}}return a?{kind:"camera",interpolationFactor:"exponential"===i?Interpolate.interpolationFactor.bind(void 0,{name:"exponential",base:void 0!==e.base?e.base:1}):function(){return 0},zoomStops:e.stops.map(function(e){return e[0]}),evaluate:function(o){var r=o.zoom;return u(e,t,r,p,l)}}:{kind:"source",evaluate:function(o,r){var n=r&&r.properties?r.properties[e.property]:void 0;return void 0===n?coalesce(e.default,t.default):u(e,t,n,p,l)}}}function coalesce(e,t,o){return void 0!==e?e:void 0!==t?t:void 0!==o?o:void 0}function evaluateCategoricalFunction(e,t,o,r,n){return coalesce(typeof o===n?r[o]:void 0,e.default,t.default)}function evaluateIntervalFunction(e,t,o){if("number"!==getType(o))return coalesce(e.default,t.default);var r=e.stops.length;if(1===r)return e.stops[0][1];if(o<=e.stops[0][0])return e.stops[0][1];if(o>=e.stops[r-1][0])return e.stops[r-1][1];var n=findStopLessThanOrEqualTo(e.stops,o);return e.stops[n][1]}function evaluateExponentialFunction(e,t,o){var r=void 0!==e.base?e.base:1;if("number"!==getType(o))return coalesce(e.default,t.default);var n=e.stops.length;if(1===n)return e.stops[0][1];if(o<=e.stops[0][0])return e.stops[0][1];if(o>=e.stops[n-1][0])return e.stops[n-1][1];var a=findStopLessThanOrEqualTo(e.stops,o),i=interpolationFactor(o,r,e.stops[a][0],e.stops[a+1][0]),u=e.stops[a][1],p=e.stops[a+1][1],l=interpolate[t.type]||identityFunction;if(e.colorSpace&&"rgb"!==e.colorSpace){var s=colorSpaces[e.colorSpace];l=function(e,t){return s.reverse(s.interpolate(s.forward(e),s.forward(t),i))}}return"function"==typeof u.evaluate?{evaluate:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var o=u.evaluate.apply(void 0,e),r=p.evaluate.apply(void 0,e);if(void 0!==o&&void 0!==r)return l(o,r,i)}}:l(u,p,i)}function evaluateIdentityFunction(e,t,o){return"color"===t.type?o=Color.parse(o):getType(o)===t.type||"enum"===t.type&&t.values[o]||(o=void 0),coalesce(o,e.default,t.default)}function findStopLessThanOrEqualTo(e,t){for(var o,r,n=e.length,a=0,i=n-1,u=0;a<=i;){if(u=Math.floor((a+i)/2),o=e[u][0],r=e[u+1][0],t===o||t>o&&t<r)return u;o<t?a=u+1:o>t&&(i=u-1)}return Math.max(u-1,0)}function interpolationFactor(e,t,o,r){var n=r-o,a=e-o;return 0===n?0:1===t?a/n:(Math.pow(t,a)-1)/(Math.pow(t,n)-1)}var colorSpaces=_dereq_("../util/color_spaces"),Color=_dereq_("../util/color"),extend=_dereq_("../util/extend"),getType=_dereq_("../util/get_type"),interpolate=_dereq_("../util/interpolate"),Interpolate=_dereq_("../expression/definitions/interpolate");module.exports={createFunction:createFunction,isFunction:isFunction};
},{"../expression/definitions/interpolate":132,"../util/color":153,"../util/color_spaces":154,"../util/extend":156,"../util/get_type":157,"../util/interpolate":158}],150:[function(_dereq_,module,exports){
"use strict";function stringify(r){var t=typeof r;if("number"===t||"boolean"===t||"string"===t||void 0===r||null===r)return JSON.stringify(r);if(Array.isArray(r)){for(var e="[",i=0,n=r;i<n.length;i+=1){e+=stringify(n[i])+","}return e+"]"}for(var o=Object.keys(r).sort(),f="{",u=0;u<o.length;u++)f+=JSON.stringify(o[u])+":"+stringify(r[o[u]])+",";return f+"}"}function getKey(r){for(var t="",e=0,i=refProperties;e<i.length;e+=1){t+="/"+stringify(r[i[e]])}return t}function groupByLayout(r){for(var t={},e=0;e<r.length;e++){var i=getKey(r[e]),n=t[i];n||(n=t[i]=[]),n.push(r[e])}var o=[];for(var f in t)o.push(t[f]);return o}var refProperties=_dereq_("./util/ref_properties");module.exports=groupByLayout;
},{"./util/ref_properties":159}],151:[function(_dereq_,module,exports){
"use strict";module.exports=_dereq_("./v8.json");
},{"./v8.json":152}],152:[function(_dereq_,module,exports){
module.exports={"$version":8,"$root":{"version":{"required":true,"type":"enum","values":[8]},"name":{"type":"string"},"metadata":{"type":"*"},"center":{"type":"array","value":"number"},"zoom":{"type":"number"},"bearing":{"type":"number","default":0,"period":360,"units":"degrees"},"pitch":{"type":"number","default":0,"units":"degrees"},"light":{"type":"light"},"sources":{"required":true,"type":"sources"},"sprite":{"type":"string"},"glyphs":{"type":"string"},"transition":{"type":"transition"},"layers":{"required":true,"type":"array","value":"layer"}},"sources":{"*":{"type":"source"}},"source":["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image","source_canvas"],"source_vector":{"type":{"required":true,"type":"enum","values":{"vector":{}}},"url":{"type":"string"},"tiles":{"type":"array","value":"string"},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.0511,180,85.0511]},"minzoom":{"type":"number","default":0},"maxzoom":{"type":"number","default":22},"attribution":{"type":"string"},"*":{"type":"*"}},"source_raster":{"type":{"required":true,"type":"enum","values":{"raster":{}}},"url":{"type":"string"},"tiles":{"type":"array","value":"string"},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.0511,180,85.0511]},"minzoom":{"type":"number","default":0},"maxzoom":{"type":"number","default":22},"tileSize":{"type":"number","default":512,"units":"pixels"},"scheme":{"type":"enum","values":{"xyz":{},"tms":{}},"default":"xyz"},"attribution":{"type":"string"},"*":{"type":"*"}},"source_raster_dem":{"type":{"required":true,"type":"enum","values":{"raster-dem":{}}},"url":{"type":"string"},"tiles":{"type":"array","value":"string"},"bounds":{"type":"array","value":"number","length":4,"default":[-180,-85.0511,180,85.0511]},"minzoom":{"type":"number","default":0},"maxzoom":{"type":"number","default":22},"tileSize":{"type":"number","default":512,"units":"pixels"},"attribution":{"type":"string"},"*":{"type":"*"}},"source_geojson":{"type":{"required":true,"type":"enum","values":{"geojson":{}}},"data":{"type":"*"},"maxzoom":{"type":"number","default":18},"buffer":{"type":"number","default":128,"maximum":512,"minimum":0},"tolerance":{"type":"number","default":0.375},"cluster":{"type":"boolean","default":false},"clusterRadius":{"type":"number","default":50,"minimum":0},"clusterMaxZoom":{"type":"number"}},"source_video":{"type":{"required":true,"type":"enum","values":{"video":{}}},"urls":{"required":true,"type":"array","value":"string"},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}}},"source_image":{"type":{"required":true,"type":"enum","values":{"image":{}}},"url":{"required":true,"type":"string"},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}}},"source_canvas":{"type":{"required":true,"type":"enum","values":{"canvas":{}}},"coordinates":{"required":true,"type":"array","length":4,"value":{"type":"array","length":2,"value":"number"}},"animate":{"type":"boolean","default":"true"},"canvas":{"type":"string","required":true}},"layer":{"id":{"type":"string","required":true},"type":{"type":"enum","values":{"fill":{},"line":{},"symbol":{},"circle":{},"heatmap":{},"fill-extrusion":{},"raster":{},"hillshade":{},"background":{}},"required":true},"metadata":{"type":"*"},"source":{"type":"string"},"source-layer":{"type":"string"},"minzoom":{"type":"number","minimum":0,"maximum":24},"maxzoom":{"type":"number","minimum":0,"maximum":24},"filter":{"type":"filter"},"layout":{"type":"layout"},"paint":{"type":"paint"}},"layout":["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],"layout_background":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_fill":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_circle":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_heatmap":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_fill-extrusion":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_line":{"line-cap":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"butt":{},"round":{},"square":{}},"default":"butt"},"line-join":{"type":"enum","function":"piecewise-constant","zoom-function":true,"property-function":true,"values":{"bevel":{},"round":{},"miter":{}},"default":"miter"},"line-miter-limit":{"type":"number","default":2,"function":"interpolated","zoom-function":true,"requires":[{"line-join":"miter"}]},"line-round-limit":{"type":"number","default":1.05,"function":"interpolated","zoom-function":true,"requires":[{"line-join":"round"}]},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_symbol":{"symbol-placement":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"point":{},"line":{}},"default":"point"},"symbol-spacing":{"type":"number","default":250,"minimum":1,"function":"interpolated","zoom-function":true,"units":"pixels","requires":[{"symbol-placement":"line"}]},"symbol-avoid-edges":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false},"icon-allow-overlap":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image"]},"icon-ignore-placement":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image"]},"icon-optional":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image","text-field"]},"icon-rotation-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["icon-image"]},"icon-size":{"type":"number","default":1,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"units":"factor of the original icon size","requires":["icon-image"]},"icon-text-fit":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"none":{},"width":{},"height":{},"both":{}},"default":"none","requires":["icon-image","text-field"]},"icon-text-fit-padding":{"type":"array","value":"number","length":4,"default":[0,0,0,0],"units":"pixels","function":"interpolated","zoom-function":true,"requires":["icon-image","text-field",{"icon-text-fit":["both","width","height"]}]},"icon-image":{"type":"string","function":"piecewise-constant","zoom-function":true,"property-function":true,"tokens":true},"icon-rotate":{"type":"number","default":0,"period":360,"function":"interpolated","zoom-function":true,"property-function":true,"units":"degrees","requires":["icon-image"]},"icon-padding":{"type":"number","default":2,"minimum":0,"function":"interpolated","zoom-function":true,"units":"pixels","requires":["icon-image"]},"icon-keep-upright":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":"line"}]},"icon-offset":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"property-function":true,"requires":["icon-image"]},"icon-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"property-function":true,"values":{"center":{},"left":{},"right":{},"top":{},"bottom":{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},"default":"center","requires":["icon-image"]},"icon-pitch-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["icon-image"]},"text-pitch-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["text-field"]},"text-rotation-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{},"auto":{}},"default":"auto","requires":["text-field"]},"text-field":{"type":"string","function":"piecewise-constant","zoom-function":true,"property-function":true,"default":"","tokens":true},"text-font":{"type":"array","value":"string","function":"piecewise-constant","zoom-function":true,"property-function":true,"default":["Open Sans Regular","Arial Unicode MS Regular"],"requires":["text-field"]},"text-size":{"type":"number","default":16,"minimum":0,"units":"pixels","function":"interpolated","zoom-function":true,"property-function":true,"requires":["text-field"]},"text-max-width":{"type":"number","default":10,"minimum":0,"units":"ems","function":"interpolated","zoom-function":true,"property-function":true,"requires":["text-field"]},"text-line-height":{"type":"number","default":1.2,"units":"ems","function":"interpolated","zoom-function":true,"requires":["text-field"]},"text-letter-spacing":{"type":"number","default":0,"units":"ems","function":"interpolated","zoom-function":true,"property-function":true,"requires":["text-field"]},"text-justify":{"type":"enum","function":"piecewise-constant","zoom-function":true,"property-function":true,"values":{"left":{},"center":{},"right":{}},"default":"center","requires":["text-field"]},"text-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"property-function":true,"values":{"center":{},"left":{},"right":{},"top":{},"bottom":{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},"default":"center","requires":["text-field"]},"text-max-angle":{"type":"number","default":45,"units":"degrees","function":"interpolated","zoom-function":true,"requires":["text-field",{"symbol-placement":"line"}]},"text-rotate":{"type":"number","default":0,"period":360,"units":"degrees","function":"interpolated","zoom-function":true,"property-function":true,"requires":["text-field"]},"text-padding":{"type":"number","default":2,"minimum":0,"units":"pixels","function":"interpolated","zoom-function":true,"requires":["text-field"]},"text-keep-upright":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":true,"requires":["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":"line"}]},"text-transform":{"type":"enum","function":"piecewise-constant","zoom-function":true,"property-function":true,"values":{"none":{},"uppercase":{},"lowercase":{}},"default":"none","requires":["text-field"]},"text-offset":{"type":"array","value":"number","units":"ems","function":"interpolated","zoom-function":true,"property-function":true,"length":2,"default":[0,0],"requires":["text-field"]},"text-allow-overlap":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["text-field"]},"text-ignore-placement":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["text-field"]},"text-optional":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":false,"requires":["text-field","icon-image"]},"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_raster":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"layout_hillshade":{"visibility":{"type":"enum","values":{"visible":{},"none":{}},"default":"visible"}},"filter":{"type":"array","value":"*"},"filter_operator":{"type":"enum","values":{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},"in":{},"!in":{},"all":{},"any":{},"none":{},"has":{},"!has":{}}},"geometry_type":{"type":"enum","values":{"Point":{},"LineString":{},"Polygon":{}}},"function":{"expression":{"type":"expression"},"stops":{"type":"array","value":"function_stop"},"base":{"type":"number","default":1,"minimum":0},"property":{"type":"string","default":"$zoom"},"type":{"type":"enum","values":{"identity":{},"exponential":{},"interval":{},"categorical":{}},"default":"exponential"},"colorSpace":{"type":"enum","values":{"rgb":{},"lab":{},"hcl":{}},"default":"rgb"},"default":{"type":"*","required":false}},"function_stop":{"type":"array","minimum":0,"maximum":22,"value":["number","color"],"length":2},"expression":{"type":"array","value":"*","minimum":1},"expression_name":{"type":"enum","values":{"let":{"group":"Variable binding"},"var":{"group":"Variable binding"},"literal":{"group":"Types"},"array":{"group":"Types"},"at":{"group":"Lookup"},"case":{"group":"Decision"},"match":{"group":"Decision"},"coalesce":{"group":"Decision"},"step":{"group":"Ramps, scales, curves"},"interpolate":{"group":"Ramps, scales, curves"},"ln2":{"group":"Math"},"pi":{"group":"Math"},"e":{"group":"Math"},"typeof":{"group":"Types"},"string":{"group":"Types"},"number":{"group":"Types"},"boolean":{"group":"Types"},"object":{"group":"Types"},"to-string":{"group":"Types"},"to-number":{"group":"Types"},"to-boolean":{"group":"Types"},"to-rgba":{"group":"Color"},"to-color":{"group":"Types"},"rgb":{"group":"Color"},"rgba":{"group":"Color"},"get":{"group":"Lookup"},"has":{"group":"Lookup"},"length":{"group":"Lookup"},"properties":{"group":"Feature data"},"geometry-type":{"group":"Feature data"},"id":{"group":"Feature data"},"zoom":{"group":"Zoom"},"heatmap-density":{"group":"Heatmap"},"+":{"group":"Math"},"*":{"group":"Math"},"-":{"group":"Math"},"/":{"group":"Math"},"%":{"group":"Math"},"^":{"group":"Math"},"sqrt":{"group":"Math"},"log10":{"group":"Math"},"ln":{"group":"Math"},"log2":{"group":"Math"},"sin":{"group":"Math"},"cos":{"group":"Math"},"tan":{"group":"Math"},"asin":{"group":"Math"},"acos":{"group":"Math"},"atan":{"group":"Math"},"min":{"group":"Math"},"max":{"group":"Math"},"==":{"group":"Decision"},"!=":{"group":"Decision"},">":{"group":"Decision"},"<":{"group":"Decision"},">=":{"group":"Decision"},"<=":{"group":"Decision"},"all":{"group":"Decision"},"any":{"group":"Decision"},"!":{"group":"Decision"},"upcase":{"group":"String"},"downcase":{"group":"String"},"concat":{"group":"String"}}},"light":{"anchor":{"type":"enum","default":"viewport","values":{"map":{},"viewport":{}},"transition":false,"zoom-function":true,"property-function":false,"function":"piecewise-constant"},"position":{"type":"array","default":[1.15,210,30],"length":3,"value":"number","transition":true,"function":"interpolated","zoom-function":true,"property-function":false},"color":{"type":"color","default":"#ffffff","function":"interpolated","zoom-function":true,"property-function":false,"transition":true},"intensity":{"type":"number","default":0.5,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":false,"transition":true}},"paint":["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],"paint_fill":{"fill-antialias":{"type":"boolean","function":"piecewise-constant","zoom-function":true,"default":true},"fill-opacity":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":1,"minimum":0,"maximum":1,"transition":true},"fill-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"fill-pattern"}]},"fill-outline-color":{"type":"color","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"fill-pattern"},{"fill-antialias":true}]},"fill-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"fill-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["fill-translate"]},"fill-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true}},"paint_fill-extrusion":{"fill-extrusion-opacity":{"type":"number","function":"interpolated","zoom-function":true,"property-function":false,"default":1,"minimum":0,"maximum":1,"transition":true},"fill-extrusion-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"fill-extrusion-pattern"}]},"fill-extrusion-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"fill-extrusion-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["fill-extrusion-translate"]},"fill-extrusion-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true},"fill-extrusion-height":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":0,"minimum":0,"units":"meters","transition":true},"fill-extrusion-base":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":0,"minimum":0,"units":"meters","transition":true,"requires":["fill-extrusion-height"]}},"paint_line":{"line-opacity":{"type":"number","function":"interpolated","zoom-function":true,"property-function":true,"default":1,"minimum":0,"maximum":1,"transition":true},"line-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":[{"!":"line-pattern"}]},"line-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"line-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["line-translate"]},"line-width":{"type":"number","default":1,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"line-gap-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"line-offset":{"type":"number","default":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"line-blur":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"line-dasharray":{"type":"array","value":"number","function":"piecewise-constant","zoom-function":true,"minimum":0,"transition":true,"units":"line widths","requires":[{"!":"line-pattern"}]},"line-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true}},"paint_circle":{"circle-radius":{"type":"number","default":5,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"circle-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-blur":{"type":"number","default":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels"},"circle-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["circle-translate"]},"circle-pitch-scale":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map"},"circle-pitch-alignment":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"viewport"},"circle-stroke-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"circle-stroke-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true},"circle-stroke-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true}},"paint_heatmap":{"heatmap-radius":{"type":"number","default":30,"minimum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels"},"heatmap-weight":{"type":"number","default":1,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":false},"heatmap-intensity":{"type":"number","default":1,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":false,"transition":true},"heatmap-color":{"type":"color","default":["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",0.1,"royalblue",0.3,"cyan",0.5,"lime",0.7,"yellow",1,"red"],"function":"interpolated","zoom-function":false,"property-function":false,"transition":false},"heatmap-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":false,"transition":true}},"paint_symbol":{"icon-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["icon-image"]},"icon-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["icon-image"]},"icon-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["icon-image"]},"icon-halo-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["icon-image"]},"icon-halo-blur":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["icon-image"]},"icon-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels","requires":["icon-image"]},"icon-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["icon-image","icon-translate"]},"text-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["text-field"]},"text-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["text-field"]},"text-halo-color":{"type":"color","default":"rgba(0, 0, 0, 0)","function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"requires":["text-field"]},"text-halo-width":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["text-field"]},"text-halo-blur":{"type":"number","default":0,"minimum":0,"function":"interpolated","zoom-function":true,"property-function":true,"transition":true,"units":"pixels","requires":["text-field"]},"text-translate":{"type":"array","value":"number","length":2,"default":[0,0],"function":"interpolated","zoom-function":true,"transition":true,"units":"pixels","requires":["text-field"]},"text-translate-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"map","requires":["text-field","text-translate"]}},"paint_raster":{"raster-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true},"raster-hue-rotate":{"type":"number","default":0,"period":360,"function":"interpolated","zoom-function":true,"transition":true,"units":"degrees"},"raster-brightness-min":{"type":"number","function":"interpolated","zoom-function":true,"default":0,"minimum":0,"maximum":1,"transition":true},"raster-brightness-max":{"type":"number","function":"interpolated","zoom-function":true,"default":1,"minimum":0,"maximum":1,"transition":true},"raster-saturation":{"type":"number","default":0,"minimum":-1,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true},"raster-contrast":{"type":"number","default":0,"minimum":-1,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true},"raster-fade-duration":{"type":"number","default":300,"minimum":0,"function":"interpolated","zoom-function":true,"transition":false,"units":"milliseconds"}},"paint_hillshade":{"hillshade-illumination-direction":{"type":"number","default":335,"minimum":0,"maximum":359,"function":"interpolated","zoom-function":true,"transition":false},"hillshade-illumination-anchor":{"type":"enum","function":"piecewise-constant","zoom-function":true,"values":{"map":{},"viewport":{}},"default":"viewport"},"hillshade-exaggeration":{"type":"number","default":0.5,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true},"hillshade-shadow-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"transition":true},"hillshade-highlight-color":{"type":"color","default":"#FFFFFF","function":"interpolated","zoom-function":true,"transition":true},"hillshade-accent-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"transition":true}},"paint_background":{"background-color":{"type":"color","default":"#000000","function":"interpolated","zoom-function":true,"transition":true,"requires":[{"!":"background-pattern"}]},"background-pattern":{"type":"string","function":"piecewise-constant","zoom-function":true,"transition":true},"background-opacity":{"type":"number","default":1,"minimum":0,"maximum":1,"function":"interpolated","zoom-function":true,"transition":true}},"transition":{"duration":{"type":"number","default":300,"minimum":0,"units":"milliseconds"},"delay":{"type":"number","default":0,"minimum":0,"units":"milliseconds"}}}
},{}],153:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("csscolorparser"),parseCSSColor=ref.parseCSSColor,Color=function(r,o,t,e){void 0===e&&(e=1),this.r=r,this.g=o,this.b=t,this.a=e};Color.parse=function(r){if(r){if(r instanceof Color)return r;if("string"==typeof r){var o=parseCSSColor(r);if(o)return new Color(o[0]/255*o[3],o[1]/255*o[3],o[2]/255*o[3],o[3])}}},Color.prototype.toString=function(){var r=this,o=function(o){return Math.round(255*o/r.a)};return"rgba("+[this.r,this.g,this.b].map(o).concat(this.a).join(",")+")"},Color.black=new Color(0,0,0,1),Color.white=new Color(1,1,1,1),Color.transparent=new Color(0,0,0,0),module.exports=Color;
},{"csscolorparser":13}],154:[function(_dereq_,module,exports){
"use strict";function xyz2lab(a){return a>t3?Math.pow(a,1/3):a/t2+t0}function lab2xyz(a){return a>t1?a*a*a:t2*(a-t0)}function xyz2rgb(a){return 255*(a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055)}function rgb2xyz(a){return a/=255,a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)}function rgbToLab(a){var r=rgb2xyz(a.r),t=rgb2xyz(a.g),e=rgb2xyz(a.b),n=xyz2lab((.4124564*r+.3575761*t+.1804375*e)/Xn),l=xyz2lab((.2126729*r+.7151522*t+.072175*e)/Yn);return{l:116*l-16,a:500*(n-l),b:200*(l-xyz2lab((.0193339*r+.119192*t+.9503041*e)/Zn)),alpha:a.a}}function labToRgb(a){var r=(a.l+16)/116,t=isNaN(a.a)?r:r+a.a/500,e=isNaN(a.b)?r:r-a.b/200;return r=Yn*lab2xyz(r),t=Xn*lab2xyz(t),e=Zn*lab2xyz(e),new Color(xyz2rgb(3.2404542*t-1.5371385*r-.4985314*e),xyz2rgb(-.969266*t+1.8760108*r+.041556*e),xyz2rgb(.0556434*t-.2040259*r+1.0572252*e),a.alpha)}function interpolateLab(a,r,t){return{l:interpolateNumber(a.l,r.l,t),a:interpolateNumber(a.a,r.a,t),b:interpolateNumber(a.b,r.b,t),alpha:interpolateNumber(a.alpha,r.alpha,t)}}function rgbToHcl(a){var r=rgbToLab(a),t=r.l,e=r.a,n=r.b,l=Math.atan2(n,e)*rad2deg;return{h:l<0?l+360:l,c:Math.sqrt(e*e+n*n),l:t,alpha:a.a}}function hclToRgb(a){var r=a.h*deg2rad,t=a.c;return labToRgb({l:a.l,a:Math.cos(r)*t,b:Math.sin(r)*t,alpha:a.alpha})}function interpolateHue(a,r,t){var e=r-a;return a+t*(e>180||e<-180?e-360*Math.round(e/360):e)}function interpolateHcl(a,r,t){return{h:interpolateHue(a.h,r.h,t),c:interpolateNumber(a.c,r.c,t),l:interpolateNumber(a.l,r.l,t),alpha:interpolateNumber(a.alpha,r.alpha,t)}}var Color=_dereq_("./color"),interpolateNumber=_dereq_("./interpolate").number,Xn=.95047,Yn=1,Zn=1.08883,t0=4/29,t1=6/29,t2=3*t1*t1,t3=t1*t1*t1,deg2rad=Math.PI/180,rad2deg=180/Math.PI;module.exports={lab:{forward:rgbToLab,reverse:labToRgb,interpolate:interpolateLab},hcl:{forward:rgbToHcl,reverse:hclToRgb,interpolate:interpolateHcl}};
},{"./color":153,"./interpolate":158}],155:[function(_dereq_,module,exports){
"use strict";function deepEqual(e,r){if(Array.isArray(e)){if(!Array.isArray(r)||e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(!deepEqual(e[t],r[t]))return!1;return!0}if("object"==typeof e&&null!==e&&null!==r){if("object"!=typeof r)return!1;if(Object.keys(e).length!==Object.keys(r).length)return!1;for(var n in e)if(!deepEqual(e[n],r[n]))return!1;return!0}return e===r}module.exports=deepEqual;
},{}],156:[function(_dereq_,module,exports){
"use strict";module.exports=function(r){for(var t=[],e=arguments.length-1;e-- >0;)t[e]=arguments[e+1];for(var n=0,o=t;n<o.length;n+=1){var a=o[n];for(var f in a)r[f]=a[f]}return r};
},{}],157:[function(_dereq_,module,exports){
"use strict";module.exports=function(n){return n instanceof Number?"number":n instanceof String?"string":n instanceof Boolean?"boolean":Array.isArray(n)?"array":null===n?"null":typeof n};
},{}],158:[function(_dereq_,module,exports){
"use strict";function number(r,n,u){return r*(1-u)+n*u}function color(r,n,u){return new Color(number(r.r,n.r,u),number(r.g,n.g,u),number(r.b,n.b,u),number(r.a,n.a,u))}function array(r,n,u){return r.map(function(r,e){return number(r,n[e],u)})}var Color=_dereq_("./color");module.exports={number:number,color:color,array:array};
},{"./color":153}],159:[function(_dereq_,module,exports){
"use strict";module.exports=["type","source","source-layer","minzoom","maxzoom","filter","layout"];
},{}],160:[function(_dereq_,module,exports){
"use strict";function success(r){return{result:"success",value:r}}function error(r){return{result:"error",value:r}}module.exports={success:success,error:error};
},{}],161:[function(_dereq_,module,exports){
"use strict";function unbundle(e){return e instanceof Number||e instanceof String||e instanceof Boolean?e.valueOf():e}function deepUnbundle(e){return Array.isArray(e)?e.map(deepUnbundle):unbundle(e)}module.exports=unbundle,module.exports.deep=deepUnbundle;
},{}],162:[function(_dereq_,module,exports){
"use strict";var extend=_dereq_("../util/extend"),unbundle=_dereq_("../util/unbundle_jsonlint"),ref=_dereq_("../expression"),isExpression=ref.isExpression,ref$1=_dereq_("../function"),isFunction=ref$1.isFunction;module.exports=function(e){var r=_dereq_("./validate_function"),i=_dereq_("./validate_expression"),t=_dereq_("./validate_object"),n={"*":function(){return[]},array:_dereq_("./validate_array"),boolean:_dereq_("./validate_boolean"),number:_dereq_("./validate_number"),color:_dereq_("./validate_color"),constants:_dereq_("./validate_constants"),enum:_dereq_("./validate_enum"),filter:_dereq_("./validate_filter"),function:_dereq_("./validate_function"),layer:_dereq_("./validate_layer"),object:_dereq_("./validate_object"),source:_dereq_("./validate_source"),light:_dereq_("./validate_light"),string:_dereq_("./validate_string")},u=e.value,a=e.valueSpec,l=e.styleSpec;return a.function&&isFunction(unbundle(u))?r(e):a.function&&isExpression(unbundle.deep(u))?i(e):a.type&&n[a.type]?n[a.type](e):t(extend({},e,{valueSpec:a.type?l[a.type]:a}))};
},{"../expression":139,"../function":149,"../util/extend":156,"../util/unbundle_jsonlint":161,"./validate_array":163,"./validate_boolean":164,"./validate_color":165,"./validate_constants":166,"./validate_enum":167,"./validate_expression":168,"./validate_filter":169,"./validate_function":170,"./validate_layer":172,"./validate_light":174,"./validate_number":175,"./validate_object":176,"./validate_source":179,"./validate_string":180}],163:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),validate=_dereq_("./validate"),ValidationError=_dereq_("../error/validation_error");module.exports=function(e){var r=e.value,t=e.valueSpec,a=e.style,n=e.styleSpec,l=e.key,i=e.arrayElementValidator||validate;if("array"!==getType(r))return[new ValidationError(l,r,"array expected, "+getType(r)+" found")];if(t.length&&r.length!==t.length)return[new ValidationError(l,r,"array length "+t.length+" expected, length "+r.length+" found")];if(t["min-length"]&&r.length<t["min-length"])return[new ValidationError(l,r,"array length at least "+t["min-length"]+" expected, length "+r.length+" found")];var o={type:t.value};n.$version<7&&(o.function=t.function),"object"===getType(t.value)&&(o=t.value);for(var u=[],g=0;g<r.length;g++)u=u.concat(i({array:r,arrayIndex:g,value:r[g],valueSpec:o,style:a,styleSpec:n,key:l+"["+g+"]"}));return u};
},{"../error/validation_error":122,"../util/get_type":157,"./validate":162}],164:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),ValidationError=_dereq_("../error/validation_error");module.exports=function(e){var r=e.value,o=e.key,t=getType(r);return"boolean"!==t?[new ValidationError(o,r,"boolean expected, "+t+" found")]:[]};
},{"../error/validation_error":122,"../util/get_type":157}],165:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),parseCSSColor=_dereq_("csscolorparser").parseCSSColor;module.exports=function(r){var e=r.key,o=r.value,t=getType(o);return"string"!==t?[new ValidationError(e,o,"color expected, "+t+" found")]:null===parseCSSColor(o)?[new ValidationError(e,o,'color expected, "'+o+'" found')]:[]};
},{"../error/validation_error":122,"../util/get_type":157,"csscolorparser":13}],166:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error");module.exports=function(r){var e=r.key,a=r.value;return a?[new ValidationError(e,a,"constants have been deprecated as of v8")]:[]};
},{"../error/validation_error":122}],167:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),unbundle=_dereq_("../util/unbundle_jsonlint");module.exports=function(e){var r=e.key,n=e.value,u=e.valueSpec,i=[];return Array.isArray(u.values)?-1===u.values.indexOf(unbundle(n))&&i.push(new ValidationError(r,n,"expected one of ["+u.values.join(", ")+"], "+JSON.stringify(n)+" found")):-1===Object.keys(u.values).indexOf(unbundle(n))&&i.push(new ValidationError(r,n,"expected one of ["+Object.keys(u.values).join(", ")+"], "+JSON.stringify(n)+" found")),i};
},{"../error/validation_error":122,"../util/unbundle_jsonlint":161}],168:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),ref=_dereq_("../expression"),createExpression=ref.createExpression,createPropertyExpression=ref.createPropertyExpression,unbundle=_dereq_("../util/unbundle_jsonlint");module.exports=function(e){var r=("property"===e.expressionContext?createPropertyExpression:createExpression)(unbundle.deep(e.value),e.valueSpec);return"error"===r.result?r.value.map(function(r){return new ValidationError(""+e.key+r.key,e.value,r.message)}):"property"===e.expressionContext&&"text-font"===e.propertyKey&&-1!==r.value._styleExpression.expression.possibleOutputs().indexOf(void 0)?[new ValidationError(e.key,e.value,'Invalid data expression for "text-font". Output values must be contained as literals within the expression.')]:[]};
},{"../error/validation_error":122,"../expression":139,"../util/unbundle_jsonlint":161}],169:[function(_dereq_,module,exports){
"use strict";function validateNonExpressionFilter(e){var r=e.value,t=e.key;if("array"!==getType(r))return[new ValidationError(t,r,"array expected, "+getType(r)+" found")];var a,n=e.styleSpec,i=[];if(r.length<1)return[new ValidationError(t,r,"filter array must have at least 1 element")];switch(i=i.concat(validateEnum({key:t+"[0]",value:r[0],valueSpec:n.filter_operator,style:e.style,styleSpec:e.styleSpec})),unbundle(r[0])){case"<":case"<=":case">":case">=":r.length>=2&&"$type"===unbundle(r[1])&&i.push(new ValidationError(t,r,'"$type" cannot be use with operator "'+r[0]+'"'));case"==":case"!=":3!==r.length&&i.push(new ValidationError(t,r,'filter array for operator "'+r[0]+'" must have 3 elements'));case"in":case"!in":r.length>=2&&"string"!==(a=getType(r[1]))&&i.push(new ValidationError(t+"[1]",r[1],"string expected, "+a+" found"));for(var l=2;l<r.length;l++)a=getType(r[l]),"$type"===unbundle(r[1])?i=i.concat(validateEnum({key:t+"["+l+"]",value:r[l],valueSpec:n.geometry_type,style:e.style,styleSpec:e.styleSpec})):"string"!==a&&"number"!==a&&"boolean"!==a&&i.push(new ValidationError(t+"["+l+"]",r[l],"string, number, or boolean expected, "+a+" found"));break;case"any":case"all":case"none":for(var s=1;s<r.length;s++)i=i.concat(validateNonExpressionFilter({key:t+"["+s+"]",value:r[s],style:e.style,styleSpec:e.styleSpec}));break;case"has":case"!has":a=getType(r[1]),2!==r.length?i.push(new ValidationError(t,r,'filter array for "'+r[0]+'" operator must have 2 elements')):"string"!==a&&i.push(new ValidationError(t+"[1]",r[1],"string expected, "+a+" found"))}return i}var ValidationError=_dereq_("../error/validation_error"),validateExpression=_dereq_("./validate_expression"),validateEnum=_dereq_("./validate_enum"),getType=_dereq_("../util/get_type"),unbundle=_dereq_("../util/unbundle_jsonlint"),extend=_dereq_("../util/extend"),ref=_dereq_("../feature_filter"),isExpressionFilter=ref.isExpressionFilter;module.exports=function(e){return isExpressionFilter(unbundle.deep(e.value))?validateExpression(extend({},e,{expressionContext:"filter",valueSpec:{value:"boolean"}})):validateNonExpressionFilter(e)};
},{"../error/validation_error":122,"../feature_filter":148,"../util/extend":156,"../util/get_type":157,"../util/unbundle_jsonlint":161,"./validate_enum":167,"./validate_expression":168}],170:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),validate=_dereq_("./validate"),validateObject=_dereq_("./validate_object"),validateArray=_dereq_("./validate_array"),validateNumber=_dereq_("./validate_number"),unbundle=_dereq_("../util/unbundle_jsonlint");module.exports=function(e){function t(e){if("identity"===p)return[new ValidationError(e.key,e.value,'identity function may not have a "stops" property')];var t=[],a=e.value;return t=t.concat(validateArray({key:e.key,value:a,valueSpec:e.valueSpec,style:e.style,styleSpec:e.styleSpec,arrayElementValidator:r})),"array"===getType(a)&&0===a.length&&t.push(new ValidationError(e.key,a,"array must have at least one stop")),t}function r(e){var t=[],r=e.value,o=e.key;if("array"!==getType(r))return[new ValidationError(o,r,"array expected, "+getType(r)+" found")];if(2!==r.length)return[new ValidationError(o,r,"array length 2 expected, length "+r.length+" found")];if(d){if("object"!==getType(r[0]))return[new ValidationError(o,r,"object expected, "+getType(r[0])+" found")];if(void 0===r[0].zoom)return[new ValidationError(o,r,"object stop key must have zoom")];if(void 0===r[0].value)return[new ValidationError(o,r,"object stop key must have value")];if(l&&l>unbundle(r[0].zoom))return[new ValidationError(o,r[0].zoom,"stop zoom values must appear in ascending order")];unbundle(r[0].zoom)!==l&&(l=unbundle(r[0].zoom),i=void 0,s={}),t=t.concat(validateObject({key:o+"[0]",value:r[0],valueSpec:{zoom:{}},style:e.style,styleSpec:e.styleSpec,objectElementValidators:{zoom:validateNumber,value:a}}))}else t=t.concat(a({key:o+"[0]",value:r[0],valueSpec:{},style:e.style,styleSpec:e.styleSpec},r));return t.concat(validate({key:o+"[1]",value:r[1],valueSpec:u,style:e.style,styleSpec:e.styleSpec}))}function a(e,t){var r=getType(e.value),a=unbundle(e.value),o=null!==e.value?e.value:t;if(n){if(r!==n)return[new ValidationError(e.key,o,r+" stop domain type must match previous stop domain type "+n)]}else n=r;if("number"!==r&&"string"!==r&&"boolean"!==r)return[new ValidationError(e.key,o,"stop domain value must be a number, string, or boolean")];if("number"!==r&&"categorical"!==p){var l="number expected, "+r+" found";return u["property-function"]&&void 0===p&&(l+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new ValidationError(e.key,o,l)]}return"categorical"!==p||"number"!==r||isFinite(a)&&Math.floor(a)===a?"categorical"!==p&&"number"===r&&void 0!==i&&a<i?[new ValidationError(e.key,o,"stop domain values must appear in ascending order")]:(i=a,"categorical"===p&&a in s?[new ValidationError(e.key,o,"stop domain values must be unique")]:(s[a]=!0,[])):[new ValidationError(e.key,o,"integer expected, found "+a)]}function o(e){return validate({key:e.key,value:e.value,valueSpec:u,style:e.style,styleSpec:e.styleSpec})}var n,i,l,u=e.valueSpec,p=unbundle(e.value.type),s={},y="categorical"!==p&&void 0===e.value.property,c=!y,d="array"===getType(e.value.stops)&&"array"===getType(e.value.stops[0])&&"object"===getType(e.value.stops[0][0]),v=validateObject({key:e.key,value:e.value,valueSpec:e.styleSpec.function,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{stops:t,default:o}});return"identity"===p&&y&&v.push(new ValidationError(e.key,e.value,'missing required property "property"')),"identity"===p||e.value.stops||v.push(new ValidationError(e.key,e.value,'missing required property "stops"')),"exponential"===p&&"piecewise-constant"===e.valueSpec.function&&v.push(new ValidationError(e.key,e.value,"exponential functions not supported")),e.styleSpec.$version>=8&&(c&&!e.valueSpec["property-function"]?v.push(new ValidationError(e.key,e.value,"property functions not supported")):y&&!e.valueSpec["zoom-function"]&&"heatmap-color"!==e.objectKey&&v.push(new ValidationError(e.key,e.value,"zoom functions not supported"))),"categorical"!==p&&!d||void 0!==e.value.property||v.push(new ValidationError(e.key,e.value,'"property" property is required')),v};
},{"../error/validation_error":122,"../util/get_type":157,"../util/unbundle_jsonlint":161,"./validate":162,"./validate_array":163,"./validate_number":175,"./validate_object":176}],171:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),validateString=_dereq_("./validate_string");module.exports=function(r){var e=r.value,t=r.key,a=validateString(r);return a.length?a:(-1===e.indexOf("{fontstack}")&&a.push(new ValidationError(t,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&a.push(new ValidationError(t,e,'"glyphs" url must include a "{range}" token')),a)};
},{"../error/validation_error":122,"./validate_string":180}],172:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),unbundle=_dereq_("../util/unbundle_jsonlint"),validateObject=_dereq_("./validate_object"),validateFilter=_dereq_("./validate_filter"),validatePaintProperty=_dereq_("./validate_paint_property"),validateLayoutProperty=_dereq_("./validate_layout_property"),validateSpec=_dereq_("./validate"),extend=_dereq_("../util/extend");module.exports=function(e){var r=[],t=e.value,a=e.key,l=e.style,i=e.styleSpec;t.type||t.ref||r.push(new ValidationError(a,t,'either "type" or "ref" is required'));var u=unbundle(t.type),n=unbundle(t.ref);if(t.id)for(var o=unbundle(t.id),s=0;s<e.arrayIndex;s++){var y=l.layers[s];unbundle(y.id)===o&&r.push(new ValidationError(a,t.id,'duplicate layer id "'+t.id+'", previously used at line '+y.id.__line__))}if("ref"in t){["type","source","source-layer","filter","layout"].forEach(function(e){e in t&&r.push(new ValidationError(a,t[e],'"'+e+'" is prohibited for ref layers'))});var d;l.layers.forEach(function(e){unbundle(e.id)===n&&(d=e)}),d?d.ref?r.push(new ValidationError(a,t.ref,"ref cannot reference another ref layer")):u=unbundle(d.type):r.push(new ValidationError(a,t.ref,'ref layer "'+n+'" not found'))}else if("background"!==u)if(t.source){var c=l.sources&&l.sources[t.source],p=c&&unbundle(c.type);c?"vector"===p&&"raster"===u?r.push(new ValidationError(a,t.source,'layer "'+t.id+'" requires a raster source')):"raster"===p&&"raster"!==u?r.push(new ValidationError(a,t.source,'layer "'+t.id+'" requires a vector source')):"vector"!==p||t["source-layer"]?"raster-dem"===p&&"hillshade"!==u&&r.push(new ValidationError(a,t.source,"raster-dem source can only be used with layer type 'hillshade'.")):r.push(new ValidationError(a,t,'layer "'+t.id+'" must specify a "source-layer"')):r.push(new ValidationError(a,t.source,'source "'+t.source+'" not found'))}else r.push(new ValidationError(a,t,'missing required property "source"'));return r=r.concat(validateObject({key:a,value:t,valueSpec:i.layer,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{"*":function(){return[]},type:function(){return validateSpec({key:a+".type",value:t.type,valueSpec:i.layer.type,style:e.style,styleSpec:e.styleSpec,object:t,objectKey:"type"})},filter:validateFilter,layout:function(e){return validateObject({layer:t,key:e.key,value:e.value,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{"*":function(e){return validateLayoutProperty(extend({layerType:u},e))}}})},paint:function(e){return validateObject({layer:t,key:e.key,value:e.value,style:e.style,styleSpec:e.styleSpec,objectElementValidators:{"*":function(e){return validatePaintProperty(extend({layerType:u},e))}}})}}}))};
},{"../error/validation_error":122,"../util/extend":156,"../util/unbundle_jsonlint":161,"./validate":162,"./validate_filter":169,"./validate_layout_property":173,"./validate_object":176,"./validate_paint_property":177}],173:[function(_dereq_,module,exports){
"use strict";var validateProperty=_dereq_("./validate_property");module.exports=function(r){return validateProperty(r,"layout")};
},{"./validate_property":178}],174:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),validate=_dereq_("./validate");module.exports=function(e){var t=e.value,r=e.styleSpec,a=r.light,i=e.style,n=[],o=getType(t);if(void 0===t)return n;if("object"!==o)return n=n.concat([new ValidationError("light",t,"object expected, "+o+" found")]);for(var l in t){var c=l.match(/^(.*)-transition$/);n=c&&a[c[1]]&&a[c[1]].transition?n.concat(validate({key:l,value:t[l],valueSpec:r.transition,style:i,styleSpec:r})):a[l]?n.concat(validate({key:l,value:t[l],valueSpec:a[l],style:i,styleSpec:r})):n.concat([new ValidationError(l,t[l],'unknown property "'+l+'"')])}return n};
},{"../error/validation_error":122,"../util/get_type":157,"./validate":162}],175:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),ValidationError=_dereq_("../error/validation_error");module.exports=function(e){var r=e.key,i=e.value,m=e.valueSpec,a=getType(i);return"number"!==a?[new ValidationError(r,i,"number expected, "+a+" found")]:"minimum"in m&&i<m.minimum?[new ValidationError(r,i,i+" is less than the minimum value "+m.minimum)]:"maximum"in m&&i>m.maximum?[new ValidationError(r,i,i+" is greater than the maximum value "+m.maximum)]:[]};
},{"../error/validation_error":122,"../util/get_type":157}],176:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),validateSpec=_dereq_("./validate");module.exports=function(e){var r=e.key,t=e.value,i=e.valueSpec||{},a=e.objectElementValidators||{},o=e.style,l=e.styleSpec,n=[],u=getType(t);if("object"!==u)return[new ValidationError(r,t,"object expected, "+u+" found")];for(var d in t){var p=d.split(".")[0],c=i[p]||i["*"],v=void 0;if(a[p])v=a[p];else if(i[p])v=validateSpec;else if(a["*"])v=a["*"];else{if(!i["*"]){n.push(new ValidationError(r,t[d],'unknown property "'+d+'"'));continue}v=validateSpec}n=n.concat(v({key:(r?r+".":r)+d,value:t[d],valueSpec:c,style:o,styleSpec:l,object:t,objectKey:d},t))}for(var s in i)a[s]||i[s].required&&void 0===i[s].default&&void 0===t[s]&&n.push(new ValidationError(r,t,'missing required property "'+s+'"'));return n};
},{"../error/validation_error":122,"../util/get_type":157,"./validate":162}],177:[function(_dereq_,module,exports){
"use strict";var validateProperty=_dereq_("./validate_property");module.exports=function(r){return validateProperty(r,"paint")};
},{"./validate_property":178}],178:[function(_dereq_,module,exports){
"use strict";var validate=_dereq_("./validate"),ValidationError=_dereq_("../error/validation_error"),getType=_dereq_("../util/get_type"),ref=_dereq_("../function"),isFunction=ref.isFunction,unbundle=_dereq_("../util/unbundle_jsonlint");module.exports=function(e,t){var r=e.key,n=e.style,i=e.styleSpec,o=e.value,a=e.objectKey,u=i[t+"_"+e.layerType];if(!u)return[];var p=a.match(/^(.*)-transition$/);if("paint"===t&&p&&u[p[1]]&&u[p[1]].transition)return validate({key:r,value:o,valueSpec:i.transition,style:n,styleSpec:i});var l=e.valueSpec||u[a];if(!l)return[new ValidationError(r,o,'unknown property "'+a+'"')];var y;if("string"===getType(o)&&l["property-function"]&&!l.tokens&&(y=/^{([^}]+)}$/.exec(o)))return[new ValidationError(r,o,'"'+a+'" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": '+JSON.stringify(y[1])+" }`.")];var s=[];return"symbol"===e.layerType&&("text-field"===a&&n&&!n.glyphs&&s.push(new ValidationError(r,o,'use of "text-field" requires a style "glyphs" property')),"text-font"===a&&isFunction(unbundle.deep(o))&&"identity"===unbundle(o.type)&&s.push(new ValidationError(r,o,'"text-font" does not support identity functions'))),s.concat(validate({key:e.key,value:o,valueSpec:l,style:n,styleSpec:i,expressionContext:"property",propertyKey:a}))};
},{"../error/validation_error":122,"../function":149,"../util/get_type":157,"../util/unbundle_jsonlint":161,"./validate":162}],179:[function(_dereq_,module,exports){
"use strict";var ValidationError=_dereq_("../error/validation_error"),unbundle=_dereq_("../util/unbundle_jsonlint"),validateObject=_dereq_("./validate_object"),validateEnum=_dereq_("./validate_enum");module.exports=function(e){var a=e.value,r=e.key,t=e.styleSpec,l=e.style;if(!a.type)return[new ValidationError(r,a,'"type" is required')];var u=unbundle(a.type),s=[];switch(u){case"vector":case"raster":case"raster-dem":if(s=s.concat(validateObject({key:r,value:a,valueSpec:t["source_"+u.replace("-","_")],style:e.style,styleSpec:t})),"url"in a)for(var c in a)["type","url","tileSize"].indexOf(c)<0&&s.push(new ValidationError(r+"."+c,a[c],'a source with a "url" property may not include a "'+c+'" property'));return s;case"geojson":return validateObject({key:r,value:a,valueSpec:t.source_geojson,style:l,styleSpec:t});case"video":return validateObject({key:r,value:a,valueSpec:t.source_video,style:l,styleSpec:t});case"image":return validateObject({key:r,value:a,valueSpec:t.source_image,style:l,styleSpec:t});case"canvas":return validateObject({key:r,value:a,valueSpec:t.source_canvas,style:l,styleSpec:t});default:return validateEnum({key:r+".type",value:a.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image","canvas"]},style:l,styleSpec:t})}};
},{"../error/validation_error":122,"../util/unbundle_jsonlint":161,"./validate_enum":167,"./validate_object":176}],180:[function(_dereq_,module,exports){
"use strict";var getType=_dereq_("../util/get_type"),ValidationError=_dereq_("../error/validation_error");module.exports=function(r){var e=r.value,t=r.key,i=getType(e);return"string"!==i?[new ValidationError(t,e,"string expected, "+i+" found")]:[]};
},{"../error/validation_error":122,"../util/get_type":157}],181:[function(_dereq_,module,exports){
"use strict";function validateStyleMin(e,a){a=a||latestStyleSpec;var t=[];return t=t.concat(validate({key:"",value:e,valueSpec:a.$root,styleSpec:a,style:e,objectElementValidators:{glyphs:validateGlyphsURL,"*":function(){return[]}}})),e.constants&&(t=t.concat(validateConstants({key:"constants",value:e.constants,style:e,styleSpec:a}))),sortErrors(t)}function sortErrors(e){return[].concat(e).sort(function(e,a){return e.line-a.line})}function wrapCleanErrors(e){return function(){return sortErrors(e.apply(this,arguments))}}var validateConstants=_dereq_("./validate/validate_constants"),validate=_dereq_("./validate/validate"),latestStyleSpec=_dereq_("./reference/latest"),validateGlyphsURL=_dereq_("./validate/validate_glyphs_url");validateStyleMin.source=wrapCleanErrors(_dereq_("./validate/validate_source")),validateStyleMin.light=wrapCleanErrors(_dereq_("./validate/validate_light")),validateStyleMin.layer=wrapCleanErrors(_dereq_("./validate/validate_layer")),validateStyleMin.filter=wrapCleanErrors(_dereq_("./validate/validate_filter")),validateStyleMin.paintProperty=wrapCleanErrors(_dereq_("./validate/validate_paint_property")),validateStyleMin.layoutProperty=wrapCleanErrors(_dereq_("./validate/validate_layout_property")),module.exports=validateStyleMin;
},{"./reference/latest":151,"./validate/validate":162,"./validate/validate_constants":166,"./validate/validate_filter":169,"./validate/validate_glyphs_url":171,"./validate/validate_layer":172,"./validate/validate_layout_property":173,"./validate/validate_light":174,"./validate/validate_paint_property":177,"./validate/validate_source":179}],182:[function(_dereq_,module,exports){
"use strict";var ZoomHistory=_dereq_("./zoom_history"),EvaluationParameters=function(t,o){this.zoom=t,o?(this.now=o.now,this.fadeDuration=o.fadeDuration,this.zoomHistory=o.zoomHistory,this.transition=o.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new ZoomHistory,this.transition={})};EvaluationParameters.prototype.crossFadingFactor=function(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)},module.exports=EvaluationParameters;
},{"./zoom_history":212}],183:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../style-spec/reference/latest"),util=_dereq_("../util/util"),Evented=_dereq_("../util/evented"),validateStyle=_dereq_("./validate_style"),ref=_dereq_("../util/util"),sphericalToCartesian=ref.sphericalToCartesian,Color=_dereq_("../style-spec/util/color"),interpolate=_dereq_("../style-spec/util/interpolate"),ref$1=_dereq_("./properties"),Properties=ref$1.Properties,Transitionable=ref$1.Transitionable,Transitioning=ref$1.Transitioning,PossiblyEvaluated=ref$1.PossiblyEvaluated,DataConstantProperty=ref$1.DataConstantProperty,LightPositionProperty=function(){this.specification=styleSpec.light.position};LightPositionProperty.prototype.possiblyEvaluate=function(t,e){return sphericalToCartesian(t.expression.evaluate(e))},LightPositionProperty.prototype.interpolate=function(t,e,i){return{x:interpolate.number(t.x,e.x,i),y:interpolate.number(t.y,e.y,i),z:interpolate.number(t.z,e.z,i)}};var properties=new Properties({anchor:new DataConstantProperty(styleSpec.light.anchor),position:new LightPositionProperty,color:new DataConstantProperty(styleSpec.light.color),intensity:new DataConstantProperty(styleSpec.light.intensity)}),TRANSITION_SUFFIX="-transition",Light=function(t){function e(e){t.call(this),this._transitionable=new Transitionable(properties),this.setLight(e),this._transitioning=this._transitionable.untransitioned()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getLight=function(){return this._transitionable.serialize()},e.prototype.setLight=function(t){var e=this;if(!this._validate(validateStyle.light,t))for(var i in t){var r=t[i];util.endsWith(i,TRANSITION_SUFFIX)?e._transitionable.setTransition(i.slice(0,-TRANSITION_SUFFIX.length),r):e._transitionable.setValue(i,r)}},e.prototype.updateTransitions=function(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning)},e.prototype.hasTransition=function(){return this._transitioning.hasTransition()},e.prototype.recalculate=function(t){this.properties=this._transitioning.possiblyEvaluate(t)},e.prototype._validate=function(t,e){return validateStyle.emitErrors(this,t.call(validateStyle,util.extend({value:e,style:{glyphs:!0,sprite:!0},styleSpec:styleSpec})))},e}(Evented);module.exports=Light;
},{"../style-spec/reference/latest":151,"../style-spec/util/color":153,"../style-spec/util/interpolate":158,"../util/evented":260,"../util/util":275,"./properties":188,"./validate_style":211}],184:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/mapbox"),normalizeGlyphsURL=ref.normalizeGlyphsURL,ajax=_dereq_("../util/ajax"),parseGlyphPBF=_dereq_("./parse_glyph_pbf");module.exports=function(e,r,a,l,p){var i=256*r,s=i+255,t=l(normalizeGlyphsURL(a).replace("{fontstack}",e).replace("{range}",i+"-"+s),ajax.ResourceType.Glyphs);ajax.getArrayBuffer(t,function(e,r){if(e)p(e);else if(r){for(var a={},l=0,i=parseGlyphPBF(r.data);l<i.length;l+=1){var s=i[l];a[s.id]=s}p(null,a)}})};
},{"../util/ajax":251,"../util/mapbox":267,"./parse_glyph_pbf":186}],185:[function(_dereq_,module,exports){
"use strict";var ajax=_dereq_("../util/ajax"),browser=_dereq_("../util/browser"),ref=_dereq_("../util/mapbox"),normalizeSpriteURL=ref.normalizeSpriteURL,ref$1=_dereq_("../util/image"),RGBAImage=ref$1.RGBAImage;module.exports=function(e,i,r){function a(){if(n)r(n);else if(t&&o){var e=browser.getImageData(o),i={};for(var a in t){var u=t[a],g=u.width,l=u.height,x=u.x,m=u.y,p=u.sdf,f=u.pixelRatio,s=new RGBAImage({width:g,height:l});RGBAImage.copy(e,s,{x:x,y:m},{x:0,y:0},{width:g,height:l}),i[a]={data:s,pixelRatio:f,sdf:p}}r(null,i)}}var t,o,n,u=browser.devicePixelRatio>1?"@2x":"";ajax.getJSON(i(normalizeSpriteURL(e,u,".json"),ajax.ResourceType.SpriteJSON),function(e,i){n||(n=e,t=i,a())}),ajax.getImage(i(normalizeSpriteURL(e,u,".png"),ajax.ResourceType.SpriteImage),function(e,i){n||(n=e,o=i,a())})};
},{"../util/ajax":251,"../util/browser":252,"../util/image":263,"../util/mapbox":267}],186:[function(_dereq_,module,exports){
"use strict";function readFontstacks(e,a,r){1===e&&r.readMessage(readFontstack,a)}function readFontstack(e,a,r){if(3===e){var t=r.readMessage(readGlyph,{}),d=t.id,i=t.bitmap,n=t.width,o=t.height,h=t.left,s=t.top,p=t.advance;a.push({id:d,bitmap:new AlphaImage({width:n+2*border,height:o+2*border},i),metrics:{width:n,height:o,left:h,top:s,advance:p}})}}function readGlyph(e,a,r){1===e?a.id=r.readVarint():2===e?a.bitmap=r.readBytes():3===e?a.width=r.readVarint():4===e?a.height=r.readVarint():5===e?a.left=r.readSVarint():6===e?a.top=r.readSVarint():7===e&&(a.advance=r.readVarint())}var ref=_dereq_("../util/image"),AlphaImage=ref.AlphaImage,Protobuf=_dereq_("pbf"),border=3;module.exports=function(e){return new Protobuf(e).readFields(readFontstacks,[])},module.exports.GLYPH_PBF_BORDER=border;
},{"../util/image":263,"pbf":30}],187:[function(_dereq_,module,exports){
"use strict";var browser=_dereq_("../util/browser"),Placement=_dereq_("../symbol/placement"),LayerPlacement=function(){this._currentTileIndex=0,this._seenCrossTileIDs={}};LayerPlacement.prototype.continuePlacement=function(e,n,t,r,o){for(var l=this;this._currentTileIndex<e.length;){var s=e[l._currentTileIndex];if(n.placeLayerTile(r,s,t,l._seenCrossTileIDs),l._currentTileIndex++,o())return!0}};var PauseablePlacement=function(e,n,t,r,o){this.placement=new Placement(e,o),this._currentPlacementIndex=n.length-1,this._forceFullPlacement=t,this._showCollisionBoxes=r,this._done=!1};PauseablePlacement.prototype.isDone=function(){return this._done},PauseablePlacement.prototype.continuePlacement=function(e,n,t){for(var r=this,o=browser.now(),l=function(){var e=browser.now()-o;return!r._forceFullPlacement&&e>2};this._currentPlacementIndex>=0;){var s=e[r._currentPlacementIndex],a=n[s],i=r.placement.collisionIndex.transform.zoom;if("symbol"===a.type&&(!a.minzoom||a.minzoom<=i)&&(!a.maxzoom||a.maxzoom>i)){r._inProgressLayer||(r._inProgressLayer=new LayerPlacement);if(r._inProgressLayer.continuePlacement(t[a.source],r.placement,r._showCollisionBoxes,a,l))return;delete r._inProgressLayer}r._currentPlacementIndex--}this._done=!0},PauseablePlacement.prototype.commit=function(e,n){return this.placement.commit(e,n),this.placement},module.exports=PauseablePlacement;
},{"../symbol/placement":223,"../util/browser":252}],188:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/util"),clone=ref.clone,extend=ref.extend,easeCubicInOut=ref.easeCubicInOut,interpolate=_dereq_("../style-spec/util/interpolate"),ref$1=_dereq_("../style-spec/expression"),normalizePropertyExpression=ref$1.normalizePropertyExpression,Color=_dereq_("../style-spec/util/color"),ref$2=_dereq_("../util/web_worker_transfer"),register=ref$2.register,PropertyValue=function(t,e){this.property=t,this.value=e,this.expression=normalizePropertyExpression(void 0===e?t.specification.default:e,t.specification)};PropertyValue.prototype.isDataDriven=function(){return"source"===this.expression.kind||"composite"===this.expression.kind},PropertyValue.prototype.possiblyEvaluate=function(t){return this.property.possiblyEvaluate(this,t)};var TransitionablePropertyValue=function(t){this.property=t,this.value=new PropertyValue(t,void 0)};TransitionablePropertyValue.prototype.transitioned=function(t,e){return new TransitioningPropertyValue(this.property,this.value,e,extend({},t.transition,this.transition),t.now)},TransitionablePropertyValue.prototype.untransitioned=function(){return new TransitioningPropertyValue(this.property,this.value,null,{},0)};var Transitionable=function(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues)};Transitionable.prototype.getValue=function(t){return clone(this._values[t].value.value)},Transitionable.prototype.setValue=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new TransitionablePropertyValue(this._values[t].property)),this._values[t].value=new PropertyValue(this._values[t].property,null===e?void 0:clone(e))},Transitionable.prototype.getTransition=function(t){return clone(this._values[t].transition)},Transitionable.prototype.setTransition=function(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new TransitionablePropertyValue(this._values[t].property)),this._values[t].transition=clone(e)||void 0},Transitionable.prototype.serialize=function(){for(var t=this,e={},r=0,a=Object.keys(t._values);r<a.length;r+=1){var o=a[r],i=t.getValue(o);void 0!==i&&(e[o]=i);var n=t.getTransition(o);void 0!==n&&(e[o+"-transition"]=n)}return e},Transitionable.prototype.transitioned=function(t,e){for(var r=this,a=new Transitioning(this._properties),o=0,i=Object.keys(r._values);o<i.length;o+=1){var n=i[o];a._values[n]=r._values[n].transitioned(t,e._values[n])}return a},Transitionable.prototype.untransitioned=function(){for(var t=this,e=new Transitioning(this._properties),r=0,a=Object.keys(t._values);r<a.length;r+=1){var o=a[r];e._values[o]=t._values[o].untransitioned()}return e};var TransitioningPropertyValue=function(t,e,r,a,o){this.property=t,this.value=e,this.begin=o+a.delay||0,this.end=this.begin+a.duration||0,t.specification.transition&&(a.delay||a.duration)&&(this.prior=r)};TransitioningPropertyValue.prototype.possiblyEvaluate=function(t){var e=t.now||0,r=this.value.possiblyEvaluate(t),a=this.prior;if(a){if(e>this.end)return this.prior=null,r;if(this.value.isDataDriven())return this.prior=null,r;if(e<this.begin)return a.possiblyEvaluate(t);var o=(e-this.begin)/(this.end-this.begin);return this.property.interpolate(a.possiblyEvaluate(t),r,easeCubicInOut(o))}return r};var Transitioning=function(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues)};Transitioning.prototype.possiblyEvaluate=function(t){for(var e=this,r=new PossiblyEvaluated(this._properties),a=0,o=Object.keys(e._values);a<o.length;a+=1){var i=o[a];r._values[i]=e._values[i].possiblyEvaluate(t)}return r},Transitioning.prototype.hasTransition=function(){for(var t=this,e=0,r=Object.keys(t._values);e<r.length;e+=1){var a=r[e];if(t._values[a].prior)return!0}return!1};var Layout=function(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues)};Layout.prototype.getValue=function(t){return clone(this._values[t].value)},Layout.prototype.setValue=function(t,e){this._values[t]=new PropertyValue(this._values[t].property,null===e?void 0:clone(e))},Layout.prototype.serialize=function(){for(var t=this,e={},r=0,a=Object.keys(t._values);r<a.length;r+=1){var o=a[r],i=t.getValue(o);void 0!==i&&(e[o]=i)}return e},Layout.prototype.possiblyEvaluate=function(t){for(var e=this,r=new PossiblyEvaluated(this._properties),a=0,o=Object.keys(e._values);a<o.length;a+=1){var i=o[a];r._values[i]=e._values[i].possiblyEvaluate(t)}return r};var PossiblyEvaluatedPropertyValue=function(t,e,r){this.property=t,this.value=e,this.globals=r};PossiblyEvaluatedPropertyValue.prototype.isConstant=function(){return"constant"===this.value.kind},PossiblyEvaluatedPropertyValue.prototype.constantOr=function(t){return"constant"===this.value.kind?this.value.value:t},PossiblyEvaluatedPropertyValue.prototype.evaluate=function(t){return this.property.evaluate(this.value,this.globals,t)};var PossiblyEvaluated=function(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues)};PossiblyEvaluated.prototype.get=function(t){return this._values[t]};var DataConstantProperty=function(t){this.specification=t};DataConstantProperty.prototype.possiblyEvaluate=function(t,e){return t.expression.evaluate(e)},DataConstantProperty.prototype.interpolate=function(t,e,r){var a=interpolate[this.specification.type];return a?a(t,e,r):t};var DataDrivenProperty=function(t){this.specification=t};DataDrivenProperty.prototype.possiblyEvaluate=function(t,e){return"constant"===t.expression.kind||"camera"===t.expression.kind?new PossiblyEvaluatedPropertyValue(this,{kind:"constant",value:t.expression.evaluate(e)},e):new PossiblyEvaluatedPropertyValue(this,t.expression,e)},DataDrivenProperty.prototype.interpolate=function(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0!==t.value.value&&void 0!==e.value.value){var a=interpolate[this.specification.type];return a?new PossiblyEvaluatedPropertyValue(this,{kind:"constant",value:a(t.value.value,e.value.value,r)},t.globals):t}},DataDrivenProperty.prototype.evaluate=function(t,e,r){return"constant"===t.kind?t.value:t.evaluate(e,r)};var CrossFadedProperty=function(t){this.specification=t};CrossFadedProperty.prototype.possiblyEvaluate=function(t,e){if(void 0!==t.value){if("constant"===t.expression.kind){var r=t.expression.evaluate(e);return this._calculate(r,r,r,e)}return this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e)}},CrossFadedProperty.prototype._calculate=function(t,e,r,a){var o=a.zoom,i=o-Math.floor(o),n=a.crossFadingFactor();return o>a.zoomHistory.lastIntegerZoom?{from:t,to:e,fromScale:2,toScale:1,t:i+(1-i)*n}:{from:r,to:e,fromScale:.5,toScale:1,t:1-(1-n)*i}},CrossFadedProperty.prototype.interpolate=function(t){return t};var HeatmapColorProperty=function(t){this.specification=t};HeatmapColorProperty.prototype.possiblyEvaluate=function(){},HeatmapColorProperty.prototype.interpolate=function(){};var Properties=function(t){var e=this;this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={};for(var r in t){var a=t[r],o=e.defaultPropertyValues[r]=new PropertyValue(a,void 0),i=e.defaultTransitionablePropertyValues[r]=new TransitionablePropertyValue(a);e.defaultTransitioningPropertyValues[r]=i.untransitioned(),e.defaultPossiblyEvaluatedValues[r]=o.possiblyEvaluate({})}};register("DataDrivenProperty",DataDrivenProperty),register("DataConstantProperty",DataConstantProperty),register("CrossFadedProperty",CrossFadedProperty),register("HeatmapColorProperty",HeatmapColorProperty),module.exports={PropertyValue:PropertyValue,Transitionable:Transitionable,Transitioning:Transitioning,Layout:Layout,PossiblyEvaluatedPropertyValue:PossiblyEvaluatedPropertyValue,PossiblyEvaluated:PossiblyEvaluated,DataConstantProperty:DataConstantProperty,DataDrivenProperty:DataDrivenProperty,CrossFadedProperty:CrossFadedProperty,HeatmapColorProperty:HeatmapColorProperty,Properties:Properties};
},{"../style-spec/expression":139,"../style-spec/util/color":153,"../style-spec/util/interpolate":158,"../util/util":275,"../util/web_worker_transfer":278}],189:[function(_dereq_,module,exports){
"use strict";function getMaximumPaintValue(t,a,e){var n=a.paint.get(t).value;return"constant"===n.kind?n.value:e.programConfigurations.get(a.id).binders[t].statistics.max}function translateDistance(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function translate(t,a,e,n,r){if(!a[0]&&!a[1])return t;var i=Point.convert(a);"viewport"===e&&i._rotate(-n);for(var u=[],s=0;s<t.length;s++){for(var o=t[s],l=[],m=0;m<o.length;m++)l.push(o[m].sub(i._mult(r)));u.push(l)}return u}var Point=_dereq_("@mapbox/point-geometry");module.exports={getMaximumPaintValue:getMaximumPaintValue,translateDistance:translateDistance,translate:translate};
},{"@mapbox/point-geometry":4}],190:[function(_dereq_,module,exports){
"use strict";var Evented=_dereq_("../util/evented"),StyleLayer=_dereq_("./style_layer"),loadSprite=_dereq_("./load_sprite"),ImageManager=_dereq_("../render/image_manager"),GlyphManager=_dereq_("../render/glyph_manager"),Light=_dereq_("./light"),LineAtlas=_dereq_("../render/line_atlas"),util=_dereq_("../util/util"),ajax=_dereq_("../util/ajax"),mapbox=_dereq_("../util/mapbox"),browser=_dereq_("../util/browser"),Dispatcher=_dereq_("../util/dispatcher"),validateStyle=_dereq_("./validate_style"),getSourceType=_dereq_("../source/source").getType,setSourceType=_dereq_("../source/source").setType,QueryFeatures=_dereq_("../source/query_features"),SourceCache=_dereq_("../source/source_cache"),GeoJSONSource=_dereq_("../source/geojson_source"),styleSpec=_dereq_("../style-spec/reference/latest"),getWorkerPool=_dereq_("../util/global_worker_pool"),deref=_dereq_("../style-spec/deref"),diff=_dereq_("../style-spec/diff"),rtlTextPlugin=_dereq_("../source/rtl_text_plugin"),PauseablePlacement=_dereq_("./pauseable_placement"),ZoomHistory=_dereq_("./zoom_history"),CrossTileSymbolIndex=_dereq_("../symbol/cross_tile_symbol_index"),supportedDiffOperations=util.pick(diff.operations,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData"]),ignoredDiffOperations=util.pick(diff.operations,["setCenter","setZoom","setBearing","setPitch"]),Style=function(e){function r(r,t){var a=this;void 0===t&&(t={}),e.call(this),this.map=r,this.dispatcher=new Dispatcher(getWorkerPool(),this),this.imageManager=new ImageManager,this.glyphManager=new GlyphManager(r._transformRequest,t.localIdeographFontFamily),this.lineAtlas=new LineAtlas(256,512),this.crossTileSymbolIndex=new CrossTileSymbolIndex,this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory=new ZoomHistory,this._loaded=!1,this._resetUpdates();var i=this;this._rtlTextPluginCallback=rtlTextPlugin.registerForPluginAvailability(function(e){i.dispatcher.broadcast("loadRTLTextPlugin",e.pluginBlobURL,e.errorCallback);for(var r in i.sourceCaches)i.sourceCaches[r].reload()}),this.on("data",function(e){if("source"===e.dataType&&"metadata"===e.sourceDataType){var r=a.sourceCaches[e.sourceId];if(r){var t=r.getSource();if(t&&t.vectorLayerIds)for(var i in a._layers){var s=a._layers[i];s.source===t.id&&a._validateLayer(s)}}}})}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.loadURL=function(e,r){var t=this;void 0===r&&(r={}),this.fire("dataloading",{dataType:"style"});var a="boolean"==typeof r.validate?r.validate:!mapbox.isMapboxURL(e);e=mapbox.normalizeStyleURL(e,r.accessToken);var i=this.map._transformRequest(e,ajax.ResourceType.Style);ajax.getJSON(i,function(e,r){e?t.fire("error",{error:e}):r&&t._load(r,a)})},r.prototype.loadJSON=function(e,r){var t=this;void 0===r&&(r={}),this.fire("dataloading",{dataType:"style"}),browser.frame(function(){t._load(e,!1!==r.validate)})},r.prototype._load=function(e,r){var t=this;if(!r||!validateStyle.emitErrors(this,validateStyle(e))){this._loaded=!0,this.stylesheet=e;for(var a in e.sources)t.addSource(a,e.sources[a],{validate:!1});e.sprite?loadSprite(e.sprite,this.map._transformRequest,function(e,r){if(e)t.fire("error",e);else if(r)for(var a in r)t.imageManager.addImage(a,r[a]);t.imageManager.setLoaded(!0),t.fire("data",{dataType:"style"})}):this.imageManager.setLoaded(!0),this.glyphManager.setURL(e.glyphs);var i=deref(this.stylesheet.layers);this._order=i.map(function(e){return e.id}),this._layers={};for(var s=0,o=i;s<o.length;s+=1){var n=o[s];n=StyleLayer.create(n),n.setEventedParent(t,{layer:{id:n.id}}),t._layers[n.id]=n}this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new Light(this.stylesheet.light),this.fire("data",{dataType:"style"}),this.fire("style.load")}},r.prototype._validateLayer=function(e){var r=this.sourceCaches[e.source];if(r){var t=e.sourceLayer;if(t){var a=r.getSource();("geojson"===a.type||a.vectorLayerIds&&-1===a.vectorLayerIds.indexOf(t))&&this.fire("error",{error:new Error('Source layer "'+t+'" does not exist on source "'+a.id+'" as specified by style layer "'+e.id+'"')})}}},r.prototype.loaded=function(){var e=this;if(!this._loaded)return!1;if(Object.keys(this._updatedSources).length)return!1;for(var r in e.sourceCaches)if(!e.sourceCaches[r].loaded())return!1;return!!this.imageManager.isLoaded()},r.prototype._serializeLayers=function(e){var r=this;return e.map(function(e){return r._layers[e].serialize()})},r.prototype.hasTransitions=function(){var e=this;if(this.light&&this.light.hasTransition())return!0;for(var r in e.sourceCaches)if(e.sourceCaches[r].hasTransition())return!0;for(var t in e._layers)if(e._layers[t].hasTransition())return!0;return!1},r.prototype._checkLoaded=function(){if(!this._loaded)throw new Error("Style is not done loading")},r.prototype.update=function(e){var r=this;if(this._loaded){if(this._changed){var t=Object.keys(this._updatedLayers),a=Object.keys(this._removedLayers);(t.length||a.length)&&this._updateWorkerLayers(t,a);for(var i in r._updatedSources){var s=r._updatedSources[i];"reload"===s?r._reloadSource(i):"clear"===s&&r._clearSource(i)}for(var o in r._updatedPaintProps)r._layers[o].updateTransitions(e);this.light.updateTransitions(e),this._resetUpdates(),this.fire("data",{dataType:"style"})}for(var n in r.sourceCaches)r.sourceCaches[n].used=!1;for(var l=0,h=r._order;l<h.length;l+=1){var u=h[l],d=r._layers[u];d.recalculate(e),!d.isHidden(e.zoom)&&d.source&&(r.sourceCaches[d.source].used=!0)}this.light.recalculate(e),this.z=e.zoom}},r.prototype._updateWorkerLayers=function(e,r){this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(e),removedIds:r})},r.prototype._resetUpdates=function(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={}},r.prototype.setState=function(e){var r=this;if(this._checkLoaded(),validateStyle.emitErrors(this,validateStyle(e)))return!1;e=util.clone(e),e.layers=deref(e.layers);var t=diff(this.serialize(),e).filter(function(e){return!(e.command in ignoredDiffOperations)});if(0===t.length)return!1;var a=t.filter(function(e){return!(e.command in supportedDiffOperations)});if(a.length>0)throw new Error("Unimplemented: "+a.map(function(e){return e.command}).join(", ")+".");return t.forEach(function(e){"setTransition"!==e.command&&r[e.command].apply(r,e.args)}),this.stylesheet=e,!0},r.prototype.addImage=function(e,r){if(this.getImage(e))return this.fire("error",{error:new Error("An image with this name already exists.")});this.imageManager.addImage(e,r),this.fire("data",{dataType:"style"})},r.prototype.getImage=function(e){return this.imageManager.getImage(e)},r.prototype.removeImage=function(e){if(!this.getImage(e))return this.fire("error",{error:new Error("No image with this name exists.")});this.imageManager.removeImage(e),this.fire("data",{dataType:"style"})},r.prototype.addSource=function(e,r,t){var a=this;if(this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error("There is already a source with this ID");if(!r.type)throw new Error("The type property must be defined, but the only the following properties were given: "+Object.keys(r).join(", ")+".");if(!(["vector","raster","geojson","video","image","canvas"].indexOf(r.type)>=0&&this._validate(validateStyle.source,"sources."+e,r,null,t))){this.map&&this.map._collectResourceTiming&&(r.collectResourceTiming=!0);var i=this.sourceCaches[e]=new SourceCache(e,r,this.dispatcher);i.style=this,i.setEventedParent(this,function(){return{isSourceLoaded:a.loaded(),source:i.serialize(),sourceId:e}}),i.onAdd(this.map),this._changed=!0}},r.prototype.removeSource=function(e){var r=this;if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID");for(var t in r._layers)if(r._layers[t].source===e)return r.fire("error",{error:new Error('Source "'+e+'" cannot be removed while layer "'+t+'" is using it.')});var a=this.sourceCaches[e];delete this.sourceCaches[e],delete this._updatedSources[e],a.fire("data",{sourceDataType:"metadata",dataType:"source",sourceId:e}),a.setEventedParent(null),a.clearTiles(),a.onRemove&&a.onRemove(this.map),this._changed=!0},r.prototype.setGeoJSONSourceData=function(e,r){this._checkLoaded(),this.sourceCaches[e].getSource().setData(r),this._changed=!0},r.prototype.getSource=function(e){return this.sourceCaches[e]&&this.sourceCaches[e].getSource()},r.prototype.addLayer=function(e,r,t){this._checkLoaded();var a=e.id;if("object"==typeof e.source&&(this.addSource(a,e.source),e=util.clone(e),e=util.extend(e,{source:a})),!this._validate(validateStyle.layer,"layers."+a,e,{arrayIndex:-1},t)){var i=StyleLayer.create(e);this._validateLayer(i),i.setEventedParent(this,{layer:{id:a}});var s=r?this._order.indexOf(r):this._order.length;if(r&&-1===s)return void this.fire("error",{error:new Error('Layer with id "'+r+'" does not exist on this map.')});if(this._order.splice(s,0,a),this._layerOrderChanged=!0,this._layers[a]=i,this._removedLayers[a]&&i.source){var o=this._removedLayers[a];delete this._removedLayers[a],o.type!==i.type?this._updatedSources[i.source]="clear":(this._updatedSources[i.source]="reload",this.sourceCaches[i.source].pause())}this._updateLayer(i)}},r.prototype.moveLayer=function(e,r){if(this._checkLoaded(),this._changed=!0,!this._layers[e])return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be moved.")});var t=this._order.indexOf(e);this._order.splice(t,1);var a=r?this._order.indexOf(r):this._order.length;if(r&&-1===a)return void this.fire("error",{error:new Error('Layer with id "'+r+'" does not exist on this map.')});this._order.splice(a,0,e),this._layerOrderChanged=!0},r.prototype.removeLayer=function(e){this._checkLoaded();var r=this._layers[e];if(!r)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be removed.")});r.setEventedParent(null);var t=this._order.indexOf(e);this._order.splice(t,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=r,delete this._layers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e]},r.prototype.getLayer=function(e){return this._layers[e]},r.prototype.setLayerZoomRange=function(e,r,t){this._checkLoaded();var a=this.getLayer(e);if(!a)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot have zoom extent.")});a.minzoom===r&&a.maxzoom===t||(null!=r&&(a.minzoom=r),null!=t&&(a.maxzoom=t),this._updateLayer(a))},r.prototype.setFilter=function(e,r){this._checkLoaded();var t=this.getLayer(e);if(!t)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be filtered.")});if(!util.deepEqual(t.filter,r))return null===r||void 0===r?(t.filter=void 0,void this._updateLayer(t)):void(this._validate(validateStyle.filter,"layers."+t.id+".filter",r)||(t.filter=util.clone(r),this._updateLayer(t)))},r.prototype.getFilter=function(e){return util.clone(this.getLayer(e).filter)},r.prototype.setLayoutProperty=function(e,r,t){this._checkLoaded();var a=this.getLayer(e);if(!a)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")});util.deepEqual(a.getLayoutProperty(r),t)||(a.setLayoutProperty(r,t),this._updateLayer(a))},r.prototype.getLayoutProperty=function(e,r){return this.getLayer(e).getLayoutProperty(r)},r.prototype.setPaintProperty=function(e,r,t){this._checkLoaded();var a=this.getLayer(e);if(!a)return void this.fire("error",{error:new Error("The layer '"+e+"' does not exist in the map's style and cannot be styled.")});if(!util.deepEqual(a.getPaintProperty(r),t)){var i=a._transitionablePaint._values[r].value.isDataDriven();a.setPaintProperty(r,t);(a._transitionablePaint._values[r].value.isDataDriven()||i)&&this._updateLayer(a),this._changed=!0,this._updatedPaintProps[e]=!0}},r.prototype.getPaintProperty=function(e,r){return this.getLayer(e).getPaintProperty(r)},r.prototype.getTransition=function(){return util.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)},r.prototype.serialize=function(){var e=this;return util.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:util.mapObject(this.sourceCaches,function(e){return e.serialize()}),layers:this._order.map(function(r){return e._layers[r].serialize()})},function(e){return void 0!==e})},r.prototype._updateLayer=function(e){this._updatedLayers[e.id]=!0,e.source&&!this._updatedSources[e.source]&&(this._updatedSources[e.source]="reload",this.sourceCaches[e.source].pause()),this._changed=!0},r.prototype._flattenRenderedFeatures=function(e){for(var r=this,t=[],a=this._order.length-1;a>=0;a--)for(var i=r._order[a],s=0,o=e;s<o.length;s+=1){var n=o[s],l=n[i];if(l)for(var h=0,u=l;h<u.length;h+=1){var d=u[h];t.push(d)}}return t},r.prototype.queryRenderedFeatures=function(e,r,t,a){var i=this;r&&r.filter&&this._validate(validateStyle.filter,"queryRenderedFeatures.filter",r.filter);var s={};if(r&&r.layers){if(!Array.isArray(r.layers))return this.fire("error",{error:"parameters.layers must be an Array."}),[];for(var o=0,n=r.layers;o<n.length;o+=1){var l=n[o],h=i._layers[l];if(!h)return i.fire("error",{error:"The layer '"+l+"' does not exist in the map's style and cannot be queried for features."}),[];s[h.source]=!0}}var u=[];for(var d in i.sourceCaches)if(!r.layers||s[d]){var c=QueryFeatures.rendered(i.sourceCaches[d],i._layers,e,r,t,a,i.placement?i.placement.collisionIndex:null);u.push(c)}return this._flattenRenderedFeatures(u)},r.prototype.querySourceFeatures=function(e,r){r&&r.filter&&this._validate(validateStyle.filter,"querySourceFeatures.filter",r.filter);var t=this.sourceCaches[e];return t?QueryFeatures.source(t,r):[]},r.prototype.addSourceType=function(e,r,t){return getSourceType(e)?t(new Error('A source type called "'+e+'" already exists.')):(setSourceType(e,r),r.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:e,url:r.workerSourceURL},t):t(null,null))},r.prototype.getLight=function(){return this.light.getLight()},r.prototype.setLight=function(e){this._checkLoaded();var r=this.light.getLight(),t=!1;for(var a in e)if(!util.deepEqual(e[a],r[a])){t=!0;break}if(t){var i={now:browser.now(),transition:util.extend({duration:300,delay:0},this.stylesheet.transition)};this.light.setLight(e),this.light.updateTransitions(i)}},r.prototype._validate=function(e,r,t,a,i){return(!i||!1!==i.validate)&&validateStyle.emitErrors(this,e.call(validateStyle,util.extend({key:r,style:this.serialize(),value:t,styleSpec:styleSpec},a)))},r.prototype._remove=function(){var e=this;rtlTextPlugin.evented.off("pluginAvailable",this._rtlTextPluginCallback);for(var r in e.sourceCaches)e.sourceCaches[r].clearTiles();this.dispatcher.remove()},r.prototype._clearSource=function(e){this.sourceCaches[e].clearTiles()},r.prototype._reloadSource=function(e){this.sourceCaches[e].resume(),this.sourceCaches[e].reload()},r.prototype._updateSources=function(e){var r=this;for(var t in r.sourceCaches)r.sourceCaches[t].update(e)},r.prototype._generateCollisionBoxes=function(){var e=this;for(var r in e.sourceCaches)e._reloadSource(r)},r.prototype._updatePlacement=function(e,r,t){for(var a=this,i=!1,s=!1,o={},n=0,l=a._order;n<l.length;n+=1){var h=l[n],u=a._layers[h];if("symbol"===u.type){if(!o[u.source]){var d=a.sourceCaches[u.source];o[u.source]=d.getRenderableIds().map(function(e){return d.getTileByID(e)}).sort(function(e,r){return r.tileID.overscaledZ-e.tileID.overscaledZ||(e.tileID.isLessThan(r.tileID)?-1:1)})}var c=a.crossTileSymbolIndex.addLayer(u,o[u.source]);i=i||c}}this.crossTileSymbolIndex.pruneUnusedLayers(this._order);var y=this._layerOrderChanged;if((y||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(browser.now()))&&(this.pauseablePlacement=new PauseablePlacement(e,this._order,y,r,t),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,o),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(this.placement,browser.now()),s=!0),i&&this.pauseablePlacement.placement.setStale()),s||i)for(var p=0,f=a._order;p<f.length;p+=1){var v=f[p],g=a._layers[v];"symbol"===g.type&&a.placement.updateLayerOpacities(g,o[g.source])}return!this.pauseablePlacement.isDone()||this.placement.hasTransitions(browser.now())},r.prototype.getImages=function(e,r,t){this.imageManager.getImages(r.icons,t)},r.prototype.getGlyphs=function(e,r,t){this.glyphManager.getGlyphs(r.stacks,t)},r}(Evented);module.exports=Style;
},{"../render/glyph_manager":86,"../render/image_manager":88,"../render/line_atlas":89,"../source/geojson_source":99,"../source/query_features":105,"../source/rtl_text_plugin":109,"../source/source":110,"../source/source_cache":111,"../style-spec/deref":120,"../style-spec/diff":121,"../style-spec/reference/latest":151,"../symbol/cross_tile_symbol_index":218,"../util/ajax":251,"../util/browser":252,"../util/dispatcher":258,"../util/evented":260,"../util/global_worker_pool":262,"../util/mapbox":267,"../util/util":275,"./light":183,"./load_sprite":185,"./pauseable_placement":187,"./style_layer":191,"./validate_style":211,"./zoom_history":212}],191:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),styleSpec=_dereq_("../style-spec/reference/latest"),validateStyle=_dereq_("./validate_style"),Evented=_dereq_("../util/evented"),ref=_dereq_("./properties"),Layout=ref.Layout,Transitionable=ref.Transitionable,Transitioning=ref.Transitioning,Properties=ref.Properties,TRANSITION_SUFFIX="-transition",StyleLayer=function(t){function e(e,i){var a=this;t.call(this),this.id=e.id,this.metadata=e.metadata,this.type=e.type,this.minzoom=e.minzoom,this.maxzoom=e.maxzoom,this.visibility="visible","background"!==e.type&&(this.source=e.source,this.sourceLayer=e["source-layer"],this.filter=e.filter),this._featureFilter=function(){return!0},i.layout&&(this._unevaluatedLayout=new Layout(i.layout)),this._transitionablePaint=new Transitionable(i.paint);for(var r in e.paint)a.setPaintProperty(r,e.paint[r],{validate:!1});for(var s in e.layout)a.setLayoutProperty(s,e.layout[s],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getLayoutProperty=function(t){return"visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)},e.prototype.setLayoutProperty=function(t,e,i){if(null!==e&&void 0!==e){var a="layers."+this.id+".layout."+t;if(this._validate(validateStyle.layoutProperty,a,t,e,i))return}if("visibility"===t)return void(this.visibility="none"===e?e:"visible");this._unevaluatedLayout.setValue(t,e)},e.prototype.getPaintProperty=function(t){return util.endsWith(t,TRANSITION_SUFFIX)?this._transitionablePaint.getTransition(t.slice(0,-TRANSITION_SUFFIX.length)):this._transitionablePaint.getValue(t)},e.prototype.setPaintProperty=function(t,e,i){if(null!==e&&void 0!==e){var a="layers."+this.id+".paint."+t;if(this._validate(validateStyle.paintProperty,a,t,e,i))return}util.endsWith(t,TRANSITION_SUFFIX)?this._transitionablePaint.setTransition(t.slice(0,-TRANSITION_SUFFIX.length),e||void 0):this._transitionablePaint.setValue(t,e)},e.prototype.isHidden=function(t){return!!(this.minzoom&&t<this.minzoom)||(!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility)},e.prototype.updateTransitions=function(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint)},e.prototype.hasTransition=function(){return this._transitioningPaint.hasTransition()},e.prototype.recalculate=function(t){this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t)),this.paint=this._transitioningPaint.possiblyEvaluate(t)},e.prototype.serialize=function(){var t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return"none"===this.visibility&&(t.layout=t.layout||{},t.layout.visibility="none"),util.filterObject(t,function(t,e){return!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)})},e.prototype._validate=function(t,e,i,a,r){return(!r||!1!==r.validate)&&validateStyle.emitErrors(this,t.call(validateStyle,{key:e,layerType:this.type,objectKey:i,value:a,styleSpec:styleSpec,style:{glyphs:!0,sprite:!0}}))},e.prototype.hasOffscreenPass=function(){return!1},e.prototype.resize=function(){},e}(Evented);module.exports=StyleLayer;var subclasses={circle:_dereq_("./style_layer/circle_style_layer"),heatmap:_dereq_("./style_layer/heatmap_style_layer"),hillshade:_dereq_("./style_layer/hillshade_style_layer"),fill:_dereq_("./style_layer/fill_style_layer"),"fill-extrusion":_dereq_("./style_layer/fill_extrusion_style_layer"),line:_dereq_("./style_layer/line_style_layer"),symbol:_dereq_("./style_layer/symbol_style_layer"),background:_dereq_("./style_layer/background_style_layer"),raster:_dereq_("./style_layer/raster_style_layer")};StyleLayer.create=function(t){return new subclasses[t.type](t)};
},{"../style-spec/reference/latest":151,"../util/evented":260,"../util/util":275,"./properties":188,"./style_layer/background_style_layer":192,"./style_layer/circle_style_layer":194,"./style_layer/fill_extrusion_style_layer":196,"./style_layer/fill_style_layer":198,"./style_layer/heatmap_style_layer":200,"./style_layer/hillshade_style_layer":202,"./style_layer/line_style_layer":204,"./style_layer/raster_style_layer":206,"./style_layer/symbol_style_layer":208,"./validate_style":211}],192:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),properties=_dereq_("./background_style_layer_properties"),ref=_dereq_("../properties"),Transitionable=ref.Transitionable,Transitioning=ref.Transitioning,PossiblyEvaluated=ref.PossiblyEvaluated,BackgroundStyleLayer=function(e){function r(r){e.call(this,r,properties)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r}(StyleLayer);module.exports=BackgroundStyleLayer;
},{"../properties":188,"../style_layer":191,"./background_style_layer_properties":193}],193:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,paint=new Properties({"background-color":new DataConstantProperty(styleSpec.paint_background["background-color"]),"background-pattern":new CrossFadedProperty(styleSpec.paint_background["background-pattern"]),"background-opacity":new DataConstantProperty(styleSpec.paint_background["background-opacity"])});module.exports={paint:paint};
},{"../../style-spec/reference/latest":151,"../properties":188}],194:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),CircleBucket=_dereq_("../../data/bucket/circle_bucket"),ref=_dereq_("../../util/intersection_tests"),multiPolygonIntersectsBufferedMultiPoint=ref.multiPolygonIntersectsBufferedMultiPoint,ref$1=_dereq_("../query_utils"),getMaximumPaintValue=ref$1.getMaximumPaintValue,translateDistance=ref$1.translateDistance,translate=ref$1.translate,properties=_dereq_("./circle_style_layer_properties"),ref$2=_dereq_("../properties"),Transitionable=ref$2.Transitionable,Transitioning=ref$2.Transitioning,PossiblyEvaluated=ref$2.PossiblyEvaluated,CircleStyleLayer=function(e){function t(t){e.call(this,t,properties)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.createBucket=function(e){return new CircleBucket(e)},t.prototype.queryRadius=function(e){var t=e;return getMaximumPaintValue("circle-radius",this,t)+getMaximumPaintValue("circle-stroke-width",this,t)+translateDistance(this.paint.get("circle-translate"))},t.prototype.queryIntersectsFeature=function(e,t,r,i,a,n){var l=translate(e,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),a,n),s=this.paint.get("circle-radius").evaluate(t)*n,u=this.paint.get("circle-stroke-width").evaluate(t)*n;return multiPolygonIntersectsBufferedMultiPoint(l,r,s+u)},t}(StyleLayer);module.exports=CircleStyleLayer;
},{"../../data/bucket/circle_bucket":42,"../../util/intersection_tests":264,"../properties":188,"../query_utils":189,"../style_layer":191,"./circle_style_layer_properties":195}],195:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,paint=new Properties({"circle-radius":new DataDrivenProperty(styleSpec.paint_circle["circle-radius"]),"circle-color":new DataDrivenProperty(styleSpec.paint_circle["circle-color"]),"circle-blur":new DataDrivenProperty(styleSpec.paint_circle["circle-blur"]),"circle-opacity":new DataDrivenProperty(styleSpec.paint_circle["circle-opacity"]),"circle-translate":new DataConstantProperty(styleSpec.paint_circle["circle-translate"]),"circle-translate-anchor":new DataConstantProperty(styleSpec.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new DataConstantProperty(styleSpec.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new DataConstantProperty(styleSpec.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new DataDrivenProperty(styleSpec.paint_circle["circle-stroke-width"]),"circle-stroke-color":new DataDrivenProperty(styleSpec.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new DataDrivenProperty(styleSpec.paint_circle["circle-stroke-opacity"])});module.exports={paint:paint};
},{"../../style-spec/reference/latest":151,"../properties":188}],196:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),FillExtrusionBucket=_dereq_("../../data/bucket/fill_extrusion_bucket"),ref=_dereq_("../../util/intersection_tests"),multiPolygonIntersectsMultiPolygon=ref.multiPolygonIntersectsMultiPolygon,ref$1=_dereq_("../query_utils"),translateDistance=ref$1.translateDistance,translate=ref$1.translate,properties=_dereq_("./fill_extrusion_style_layer_properties"),ref$2=_dereq_("../properties"),Transitionable=ref$2.Transitionable,Transitioning=ref$2.Transitioning,PossiblyEvaluated=ref$2.PossiblyEvaluated,FillExtrusionStyleLayer=function(t){function e(e){t.call(this,e,properties)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new FillExtrusionBucket(t)},e.prototype.queryRadius=function(){return translateDistance(this.paint.get("fill-extrusion-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,n,o){var s=translate(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),n,o);return multiPolygonIntersectsMultiPolygon(s,r)},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("fill-extrusion-opacity")&&"none"!==this.visibility},e.prototype.resize=function(){this.viewportFrame&&(this.viewportFrame.destroy(),this.viewportFrame=null)},e}(StyleLayer);module.exports=FillExtrusionStyleLayer;
},{"../../data/bucket/fill_extrusion_bucket":46,"../../util/intersection_tests":264,"../properties":188,"../query_utils":189,"../style_layer":191,"./fill_extrusion_style_layer_properties":197}],197:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,paint=new Properties({"fill-extrusion-opacity":new DataConstantProperty(styleSpec["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new DataDrivenProperty(styleSpec["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new DataConstantProperty(styleSpec["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new DataConstantProperty(styleSpec["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new CrossFadedProperty(styleSpec["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new DataDrivenProperty(styleSpec["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new DataDrivenProperty(styleSpec["paint_fill-extrusion"]["fill-extrusion-base"])});module.exports={paint:paint};
},{"../../style-spec/reference/latest":151,"../properties":188}],198:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),FillBucket=_dereq_("../../data/bucket/fill_bucket"),ref=_dereq_("../../util/intersection_tests"),multiPolygonIntersectsMultiPolygon=ref.multiPolygonIntersectsMultiPolygon,ref$1=_dereq_("../query_utils"),translateDistance=ref$1.translateDistance,translate=ref$1.translate,properties=_dereq_("./fill_style_layer_properties"),ref$2=_dereq_("../properties"),Transitionable=ref$2.Transitionable,Transitioning=ref$2.Transitioning,PossiblyEvaluated=ref$2.PossiblyEvaluated,FillStyleLayer=function(t){function e(e){t.call(this,e,properties)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(t){this.paint=this._transitioningPaint.possiblyEvaluate(t),void 0===this._transitionablePaint.getValue("fill-outline-color")&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"])},e.prototype.createBucket=function(t){return new FillBucket(t)},e.prototype.queryRadius=function(){return translateDistance(this.paint.get("fill-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,l,n){var a=translate(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),l,n);return multiPolygonIntersectsMultiPolygon(a,r)},e}(StyleLayer);module.exports=FillStyleLayer;
},{"../../data/bucket/fill_bucket":44,"../../util/intersection_tests":264,"../properties":188,"../query_utils":189,"../style_layer":191,"./fill_style_layer_properties":199}],199:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,paint=new Properties({"fill-antialias":new DataConstantProperty(styleSpec.paint_fill["fill-antialias"]),"fill-opacity":new DataDrivenProperty(styleSpec.paint_fill["fill-opacity"]),"fill-color":new DataDrivenProperty(styleSpec.paint_fill["fill-color"]),"fill-outline-color":new DataDrivenProperty(styleSpec.paint_fill["fill-outline-color"]),"fill-translate":new DataConstantProperty(styleSpec.paint_fill["fill-translate"]),"fill-translate-anchor":new DataConstantProperty(styleSpec.paint_fill["fill-translate-anchor"]),"fill-pattern":new CrossFadedProperty(styleSpec.paint_fill["fill-pattern"])});module.exports={paint:paint};
},{"../../style-spec/reference/latest":151,"../properties":188}],200:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),HeatmapBucket=_dereq_("../../data/bucket/heatmap_bucket"),RGBAImage=_dereq_("../../util/image").RGBAImage,properties=_dereq_("./heatmap_style_layer_properties"),ref=_dereq_("../properties"),Transitionable=ref.Transitionable,Transitioning=ref.Transitioning,PossiblyEvaluated=ref.PossiblyEvaluated,HeatmapStyleLayer=function(t){function e(e){t.call(this,e,properties),this._updateColorRamp()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createBucket=function(t){return new HeatmapBucket(t)},e.prototype.setPaintProperty=function(e,r,a){t.prototype.setPaintProperty.call(this,e,r,a),"heatmap-color"===e&&this._updateColorRamp()},e.prototype._updateColorRamp=function(){for(var t=this._transitionablePaint._values["heatmap-color"].value.expression,e=new Uint8Array(1024),r=e.length,a=4;a<r;a+=4){var o=t.evaluate({heatmapDensity:a/r});e[a+0]=Math.floor(255*o.r/o.a),e[a+1]=Math.floor(255*o.g/o.a),e[a+2]=Math.floor(255*o.b/o.a),e[a+3]=Math.floor(255*o.a)}this.colorRamp=new RGBAImage({width:256,height:1},e),this.colorRampTexture=null},e.prototype.resize=function(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility},e}(StyleLayer);module.exports=HeatmapStyleLayer;
},{"../../data/bucket/heatmap_bucket":47,"../../util/image":263,"../properties":188,"../style_layer":191,"./heatmap_style_layer_properties":201}],201:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,paint=new Properties({"heatmap-radius":new DataDrivenProperty(styleSpec.paint_heatmap["heatmap-radius"]),"heatmap-weight":new DataDrivenProperty(styleSpec.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new DataConstantProperty(styleSpec.paint_heatmap["heatmap-intensity"]),"heatmap-color":new HeatmapColorProperty(styleSpec.paint_heatmap["heatmap-color"]),"heatmap-opacity":new DataConstantProperty(styleSpec.paint_heatmap["heatmap-opacity"])});module.exports={paint:paint};
},{"../../style-spec/reference/latest":151,"../properties":188}],202:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),properties=_dereq_("./hillshade_style_layer_properties"),ref=_dereq_("../properties"),Transitionable=ref.Transitionable,Transitioning=ref.Transitioning,PossiblyEvaluated=ref.PossiblyEvaluated,HillshadeStyleLayer=function(e){function r(r){e.call(this,r,properties)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.hasOffscreenPass=function(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility},r}(StyleLayer);module.exports=HillshadeStyleLayer;
},{"../properties":188,"../style_layer":191,"./hillshade_style_layer_properties":203}],203:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,paint=new Properties({"hillshade-illumination-direction":new DataConstantProperty(styleSpec.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new DataConstantProperty(styleSpec.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new DataConstantProperty(styleSpec.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new DataConstantProperty(styleSpec.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new DataConstantProperty(styleSpec.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new DataConstantProperty(styleSpec.paint_hillshade["hillshade-accent-color"])});module.exports={paint:paint};
},{"../../style-spec/reference/latest":151,"../properties":188}],204:[function(_dereq_,module,exports){
"use strict";function getLineWidth(t,e){return e>0?e+2*t:t}function offsetLine(t,e){for(var r=[],i=new Point(0,0),n=0;n<t.length;n++){for(var a=t[n],o=[],l=0;l<a.length;l++){var u=a[l-1],s=a[l],p=a[l+1],y=0===l?i:s.sub(u)._unit()._perp(),f=l===a.length-1?i:p.sub(s)._unit()._perp(),c=y._add(f)._unit(),h=c.x*f.x+c.y*f.y;c._mult(1/h),o.push(c._mult(e)._add(s))}r.push(o)}return r}var Point=_dereq_("@mapbox/point-geometry"),StyleLayer=_dereq_("../style_layer"),LineBucket=_dereq_("../../data/bucket/line_bucket"),ref=_dereq_("../../util/intersection_tests"),multiPolygonIntersectsBufferedMultiLine=ref.multiPolygonIntersectsBufferedMultiLine,ref$1=_dereq_("../query_utils"),getMaximumPaintValue=ref$1.getMaximumPaintValue,translateDistance=ref$1.translateDistance,translate=ref$1.translate,properties=_dereq_("./line_style_layer_properties"),ref$2=_dereq_("../../util/util"),extend=ref$2.extend,EvaluationParameters=_dereq_("../evaluation_parameters"),ref$3=_dereq_("../properties"),Transitionable=ref$3.Transitionable,Transitioning=ref$3.Transitioning,Layout=ref$3.Layout,PossiblyEvaluated=ref$3.PossiblyEvaluated,DataDrivenProperty=ref$3.DataDrivenProperty,LineFloorwidthProperty=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.possiblyEvaluate=function(e,r){return r=new EvaluationParameters(Math.floor(r.zoom),{now:r.now,fadeDuration:r.fadeDuration,zoomHistory:r.zoomHistory,transition:r.transition}),t.prototype.possiblyEvaluate.call(this,e,r)},e.prototype.evaluate=function(e,r,i){return r=extend({},r,{zoom:Math.floor(r.zoom)}),t.prototype.evaluate.call(this,e,r,i)},e}(DataDrivenProperty),lineFloorwidthProperty=new LineFloorwidthProperty(properties.paint.properties["line-width"].specification);lineFloorwidthProperty.useIntegerZoom=!0;var LineStyleLayer=function(t){function e(e){t.call(this,e,properties)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e){t.prototype.recalculate.call(this,e),this.paint._values["line-floorwidth"]=lineFloorwidthProperty.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,e)},e.prototype.createBucket=function(t){return new LineBucket(t)},e.prototype.queryRadius=function(t){var e=t,r=getLineWidth(getMaximumPaintValue("line-width",this,e),getMaximumPaintValue("line-gap-width",this,e)),i=getMaximumPaintValue("line-offset",this,e);return r/2+Math.abs(i)+translateDistance(this.paint.get("line-translate"))},e.prototype.queryIntersectsFeature=function(t,e,r,i,n,a){var o=translate(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),n,a),l=a/2*getLineWidth(this.paint.get("line-width").evaluate(e),this.paint.get("line-gap-width").evaluate(e)),u=this.paint.get("line-offset").evaluate(e);return u&&(r=offsetLine(r,u*a)),multiPolygonIntersectsBufferedMultiLine(o,r,l)},e}(StyleLayer);module.exports=LineStyleLayer;
},{"../../data/bucket/line_bucket":49,"../../util/intersection_tests":264,"../../util/util":275,"../evaluation_parameters":182,"../properties":188,"../query_utils":189,"../style_layer":191,"./line_style_layer_properties":205,"@mapbox/point-geometry":4}],205:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,layout=new Properties({"line-cap":new DataConstantProperty(styleSpec.layout_line["line-cap"]),"line-join":new DataDrivenProperty(styleSpec.layout_line["line-join"]),"line-miter-limit":new DataConstantProperty(styleSpec.layout_line["line-miter-limit"]),"line-round-limit":new DataConstantProperty(styleSpec.layout_line["line-round-limit"])}),paint=new Properties({"line-opacity":new DataDrivenProperty(styleSpec.paint_line["line-opacity"]),"line-color":new DataDrivenProperty(styleSpec.paint_line["line-color"]),"line-translate":new DataConstantProperty(styleSpec.paint_line["line-translate"]),"line-translate-anchor":new DataConstantProperty(styleSpec.paint_line["line-translate-anchor"]),"line-width":new DataDrivenProperty(styleSpec.paint_line["line-width"]),"line-gap-width":new DataDrivenProperty(styleSpec.paint_line["line-gap-width"]),"line-offset":new DataDrivenProperty(styleSpec.paint_line["line-offset"]),"line-blur":new DataDrivenProperty(styleSpec.paint_line["line-blur"]),"line-dasharray":new CrossFadedProperty(styleSpec.paint_line["line-dasharray"]),"line-pattern":new CrossFadedProperty(styleSpec.paint_line["line-pattern"])});module.exports={paint:paint,layout:layout};
},{"../../style-spec/reference/latest":151,"../properties":188}],206:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),properties=_dereq_("./raster_style_layer_properties"),ref=_dereq_("../properties"),Transitionable=ref.Transitionable,Transitioning=ref.Transitioning,PossiblyEvaluated=ref.PossiblyEvaluated,RasterStyleLayer=function(e){function r(r){e.call(this,r,properties)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r}(StyleLayer);module.exports=RasterStyleLayer;
},{"../properties":188,"../style_layer":191,"./raster_style_layer_properties":207}],207:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,paint=new Properties({"raster-opacity":new DataConstantProperty(styleSpec.paint_raster["raster-opacity"]),"raster-hue-rotate":new DataConstantProperty(styleSpec.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new DataConstantProperty(styleSpec.paint_raster["raster-brightness-min"]),"raster-brightness-max":new DataConstantProperty(styleSpec.paint_raster["raster-brightness-max"]),"raster-saturation":new DataConstantProperty(styleSpec.paint_raster["raster-saturation"]),"raster-contrast":new DataConstantProperty(styleSpec.paint_raster["raster-contrast"]),"raster-fade-duration":new DataConstantProperty(styleSpec.paint_raster["raster-fade-duration"])});module.exports={paint:paint};
},{"../../style-spec/reference/latest":151,"../properties":188}],208:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("../style_layer"),SymbolBucket=_dereq_("../../data/bucket/symbol_bucket"),resolveTokens=_dereq_("../../util/token"),ref=_dereq_("../../style-spec/expression"),isExpression=ref.isExpression,properties=_dereq_("./symbol_style_layer_properties"),ref$1=_dereq_("../properties"),Transitionable=ref$1.Transitionable,Transitioning=ref$1.Transitioning,Layout=ref$1.Layout,PossiblyEvaluated=ref$1.PossiblyEvaluated,SymbolStyleLayer=function(t){function e(e){t.call(this,e,properties)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.recalculate=function(e){t.prototype.recalculate.call(this,e),"auto"===this.layout.get("icon-rotation-alignment")&&("line"===this.layout.get("symbol-placement")?this.layout._values["icon-rotation-alignment"]="map":this.layout._values["icon-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-rotation-alignment")&&("line"===this.layout.get("symbol-placement")?this.layout._values["text-rotation-alignment"]="map":this.layout._values["text-rotation-alignment"]="viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment"))},e.prototype.getValueAndResolveTokens=function(t,e){var o=this.layout.get(t).evaluate(e),i=this._unevaluatedLayout._values[t];return i.isDataDriven()||isExpression(i.value)?o:resolveTokens(e.properties,o)},e.prototype.createBucket=function(t){return new SymbolBucket(t)},e.prototype.queryRadius=function(){return 0},e.prototype.queryIntersectsFeature=function(){return!1},e}(StyleLayer);module.exports=SymbolStyleLayer;
},{"../../data/bucket/symbol_bucket":51,"../../style-spec/expression":139,"../../util/token":274,"../properties":188,"../style_layer":191,"./symbol_style_layer_properties":209}],209:[function(_dereq_,module,exports){
"use strict";var styleSpec=_dereq_("../../style-spec/reference/latest"),ref=_dereq_("../properties"),Properties=ref.Properties,DataConstantProperty=ref.DataConstantProperty,DataDrivenProperty=ref.DataDrivenProperty,CrossFadedProperty=ref.CrossFadedProperty,HeatmapColorProperty=ref.HeatmapColorProperty,layout=new Properties({"symbol-placement":new DataConstantProperty(styleSpec.layout_symbol["symbol-placement"]),"symbol-spacing":new DataConstantProperty(styleSpec.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new DataConstantProperty(styleSpec.layout_symbol["symbol-avoid-edges"]),"icon-allow-overlap":new DataConstantProperty(styleSpec.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new DataConstantProperty(styleSpec.layout_symbol["icon-ignore-placement"]),"icon-optional":new DataConstantProperty(styleSpec.layout_symbol["icon-optional"]),"icon-rotation-alignment":new DataConstantProperty(styleSpec.layout_symbol["icon-rotation-alignment"]),"icon-size":new DataDrivenProperty(styleSpec.layout_symbol["icon-size"]),"icon-text-fit":new DataConstantProperty(styleSpec.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new DataConstantProperty(styleSpec.layout_symbol["icon-text-fit-padding"]),"icon-image":new DataDrivenProperty(styleSpec.layout_symbol["icon-image"]),"icon-rotate":new DataDrivenProperty(styleSpec.layout_symbol["icon-rotate"]),"icon-padding":new DataConstantProperty(styleSpec.layout_symbol["icon-padding"]),"icon-keep-upright":new DataConstantProperty(styleSpec.layout_symbol["icon-keep-upright"]),"icon-offset":new DataDrivenProperty(styleSpec.layout_symbol["icon-offset"]),"icon-anchor":new DataDrivenProperty(styleSpec.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new DataConstantProperty(styleSpec.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new DataConstantProperty(styleSpec.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new DataConstantProperty(styleSpec.layout_symbol["text-rotation-alignment"]),"text-field":new DataDrivenProperty(styleSpec.layout_symbol["text-field"]),"text-font":new DataDrivenProperty(styleSpec.layout_symbol["text-font"]),"text-size":new DataDrivenProperty(styleSpec.layout_symbol["text-size"]),"text-max-width":new DataDrivenProperty(styleSpec.layout_symbol["text-max-width"]),"text-line-height":new DataConstantProperty(styleSpec.layout_symbol["text-line-height"]),"text-letter-spacing":new DataDrivenProperty(styleSpec.layout_symbol["text-letter-spacing"]),"text-justify":new DataDrivenProperty(styleSpec.layout_symbol["text-justify"]),"text-anchor":new DataDrivenProperty(styleSpec.layout_symbol["text-anchor"]),"text-max-angle":new DataConstantProperty(styleSpec.layout_symbol["text-max-angle"]),"text-rotate":new DataDrivenProperty(styleSpec.layout_symbol["text-rotate"]),"text-padding":new DataConstantProperty(styleSpec.layout_symbol["text-padding"]),"text-keep-upright":new DataConstantProperty(styleSpec.layout_symbol["text-keep-upright"]),"text-transform":new DataDrivenProperty(styleSpec.layout_symbol["text-transform"]),"text-offset":new DataDrivenProperty(styleSpec.layout_symbol["text-offset"]),"text-allow-overlap":new DataConstantProperty(styleSpec.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new DataConstantProperty(styleSpec.layout_symbol["text-ignore-placement"]),"text-optional":new DataConstantProperty(styleSpec.layout_symbol["text-optional"])}),paint=new Properties({"icon-opacity":new DataDrivenProperty(styleSpec.paint_symbol["icon-opacity"]),"icon-color":new DataDrivenProperty(styleSpec.paint_symbol["icon-color"]),"icon-halo-color":new DataDrivenProperty(styleSpec.paint_symbol["icon-halo-color"]),"icon-halo-width":new DataDrivenProperty(styleSpec.paint_symbol["icon-halo-width"]),"icon-halo-blur":new DataDrivenProperty(styleSpec.paint_symbol["icon-halo-blur"]),"icon-translate":new DataConstantProperty(styleSpec.paint_symbol["icon-translate"]),"icon-translate-anchor":new DataConstantProperty(styleSpec.paint_symbol["icon-translate-anchor"]),"text-opacity":new DataDrivenProperty(styleSpec.paint_symbol["text-opacity"]),"text-color":new DataDrivenProperty(styleSpec.paint_symbol["text-color"]),"text-halo-color":new DataDrivenProperty(styleSpec.paint_symbol["text-halo-color"]),"text-halo-width":new DataDrivenProperty(styleSpec.paint_symbol["text-halo-width"]),"text-halo-blur":new DataDrivenProperty(styleSpec.paint_symbol["text-halo-blur"]),"text-translate":new DataConstantProperty(styleSpec.paint_symbol["text-translate"]),"text-translate-anchor":new DataConstantProperty(styleSpec.paint_symbol["text-translate-anchor"])});module.exports={paint:paint,layout:layout};
},{"../../style-spec/reference/latest":151,"../properties":188}],210:[function(_dereq_,module,exports){
"use strict";var StyleLayer=_dereq_("./style_layer"),util=_dereq_("../util/util"),featureFilter=_dereq_("../style-spec/feature_filter"),groupByLayout=_dereq_("../style-spec/group_by_layout"),StyleLayerIndex=function(e){e&&this.replace(e)};StyleLayerIndex.prototype.replace=function(e){this._layerConfigs={},this._layers={},this.update(e,[])},StyleLayerIndex.prototype.update=function(e,r){for(var t=this,a=0,i=e;a<i.length;a+=1){var l=i[a];t._layerConfigs[l.id]=l;var y=t._layers[l.id]=StyleLayer.create(l);y._featureFilter=featureFilter(y.filter)}for(var u=0,s=r;u<s.length;u+=1){var o=s[u];delete t._layerConfigs[o],delete t._layers[o]}this.familiesBySource={};for(var n=groupByLayout(util.values(this._layerConfigs)),f=0,p=n;f<p.length;f+=1){var c=p[f],_=c.map(function(e){return t._layers[e.id]}),d=_[0];if("none"!==d.visibility){var v=d.source||"",g=t.familiesBySource[v];g||(g=t.familiesBySource[v]={});var h=d.sourceLayer||"_geojsonTileLayer",L=g[h];L||(L=g[h]=[]),L.push(_)}}},module.exports=StyleLayerIndex;
},{"../style-spec/feature_filter":148,"../style-spec/group_by_layout":150,"../util/util":275,"./style_layer":191}],211:[function(_dereq_,module,exports){
"use strict";module.exports=_dereq_("../style-spec/validate_style.min"),module.exports.emitErrors=function(r,e){if(e&&e.length){for(var t=0,o=e;t<o.length;t+=1){var s=o[t],i=s.message;r.fire("error",{error:new Error(i)})}return!0}return!1};
},{"../style-spec/validate_style.min":181}],212:[function(_dereq_,module,exports){
"use strict";var ZoomHistory=function(){this.first=!0};ZoomHistory.prototype.update=function(o,t){var s=Math.floor(o);return this.first?(this.first=!1,this.lastIntegerZoom=s,this.lastIntegerZoomTime=0,this.lastZoom=o,this.lastFloorZoom=s,!0):(this.lastFloorZoom>s?(this.lastIntegerZoom=s+1,this.lastIntegerZoomTime=t):this.lastFloorZoom<s&&(this.lastIntegerZoom=s,this.lastIntegerZoomTime=t),o!==this.lastZoom&&(this.lastZoom=o,this.lastFloorZoom=s,!0))},module.exports=ZoomHistory;
},{}],213:[function(_dereq_,module,exports){
"use strict";var Point=_dereq_("@mapbox/point-geometry"),ref=_dereq_("../util/web_worker_transfer"),register=ref.register,Anchor=function(t){function e(e,r,o,n){t.call(this,e,r),this.angle=o,void 0!==n&&(this.segment=n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.x,this.y,this.angle,this.segment)},e}(Point);register("Anchor",Anchor),module.exports=Anchor;
},{"../util/web_worker_transfer":278,"@mapbox/point-geometry":4}],214:[function(_dereq_,module,exports){
"use strict";function checkMaxAngle(e,t,a,r,n){if(void 0===t.segment)return!0;for(var i=t,s=t.segment+1,f=0;f>-a/2;){if(--s<0)return!1;f-=e[s].dist(i),i=e[s]}f+=e[s].dist(e[s+1]),s++;for(var l=[],o=0;f<a/2;){var u=e[s-1],c=e[s],g=e[s+1];if(!g)return!1;var h=u.angleTo(c)-c.angleTo(g);for(h=Math.abs((h+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:f,angleDelta:h}),o+=h;f-l[0].distance>r;)o-=l.shift().angleDelta;if(o>n)return!1;s++,f+=c.dist(g)}return!0}module.exports=checkMaxAngle;
},{}],215:[function(_dereq_,module,exports){
"use strict";function clipLine(n,x,y,o,e){for(var r=[],t=0;t<n.length;t++)for(var i=n[t],u=void 0,d=0;d<i.length-1;d++){var P=i[d],w=i[d+1];P.x<x&&w.x<x||(P.x<x?P=new Point(x,P.y+(w.y-P.y)*((x-P.x)/(w.x-P.x)))._round():w.x<x&&(w=new Point(x,P.y+(w.y-P.y)*((x-P.x)/(w.x-P.x)))._round()),P.y<y&&w.y<y||(P.y<y?P=new Point(P.x+(w.x-P.x)*((y-P.y)/(w.y-P.y)),y)._round():w.y<y&&(w=new Point(P.x+(w.x-P.x)*((y-P.y)/(w.y-P.y)),y)._round()),P.x>=o&&w.x>=o||(P.x>=o?P=new Point(o,P.y+(w.y-P.y)*((o-P.x)/(w.x-P.x)))._round():w.x>=o&&(w=new Point(o,P.y+(w.y-P.y)*((o-P.x)/(w.x-P.x)))._round()),P.y>=e&&w.y>=e||(P.y>=e?P=new Point(P.x+(w.x-P.x)*((e-P.y)/(w.y-P.y)),e)._round():w.y>=e&&(w=new Point(P.x+(w.x-P.x)*((e-P.y)/(w.y-P.y)),e)._round()),u&&P.equals(u[u.length-1])||(u=[P],r.push(u)),u.push(w)))))}return r}var Point=_dereq_("@mapbox/point-geometry");module.exports=clipLine;
},{"@mapbox/point-geometry":4}],216:[function(_dereq_,module,exports){
"use strict";var CollisionFeature=function(t,e,i,o,a,r,l,n,s,d,h){var u=l.top*n-s,f=l.bottom*n+s,c=l.left*n-s,x=l.right*n+s;if(this.boxStartIndex=t.length,d){var m=f-u,v=x-c;m>0&&(m=Math.max(10*n,m),this._addLineCollisionCircles(t,e,i,i.segment,v,m,o,a,r,h))}else t.emplaceBack(i.x,i.y,c,u,x,f,o,a,r,0,0);this.boxEndIndex=t.length};CollisionFeature.prototype._addLineCollisionCircles=function(t,e,i,o,a,r,l,n,s,d){var h=r/2,u=Math.floor(a/h),f=1+.4*Math.log(d)/Math.LN2,c=Math.floor(u*f/2),x=-r/2,m=i,v=o+1,C=x,b=-a/2,g=b-a/4;do{if(--v<0){if(C>b)return;v=0;break}C-=e[v].dist(m),m=e[v]}while(C>g);for(var p=e[v].dist(e[v+1]),M=-c;M<u+c;M++){var _=M*h,k=b+_;if(_<0&&(k+=_),_>a&&(k+=_-a),!(k<C)){for(;C+p<k;){if(C+=p,++v+1>=e.length)return;p=e[v].dist(e[v+1])}var y=k-C,F=e[v],L=e[v+1],B=L.sub(F)._unit()._mult(y)._add(F)._round(),I=Math.abs(k-x)<h?0:.8*(k-x);t.emplaceBack(B.x,B.y,-r/2,-r/2,r/2,r/2,l,n,s,r/2,I)}}},module.exports=CollisionFeature;
},{}],217:[function(_dereq_,module,exports){
"use strict";function markCollisionCircleUsed(t,i,e){t[i+4]=e?1:0}var Point=_dereq_("@mapbox/point-geometry"),intersectionTests=_dereq_("../util/intersection_tests"),Grid=_dereq_("./grid_index"),glmatrix=_dereq_("@mapbox/gl-matrix"),mat4=glmatrix.mat4,projection=_dereq_("../symbol/projection"),viewportPadding=100,CollisionIndex=function(t,i,e){void 0===i&&(i=new Grid(t.width+2*viewportPadding,t.height+2*viewportPadding,25)),void 0===e&&(e=new Grid(t.width+2*viewportPadding,t.height+2*viewportPadding,25)),this.transform=t,this.grid=i,this.ignoredGrid=e,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+viewportPadding,this.screenBottomBoundary=t.height+viewportPadding};CollisionIndex.prototype.placeCollisionBox=function(t,i,e,n){var r=this.projectAndGetPerspectiveRatio(n,t.anchorPointX,t.anchorPointY),o=e*r.perspectiveRatio,s=t.x1*o+r.point.x,a=t.y1*o+r.point.y,c=t.x2*o+r.point.x,p=t.y2*o+r.point.y;return!i&&this.grid.hitTest(s,a,c,p)?{box:[],offscreen:!1}:{box:[s,a,c,p],offscreen:this.isOffscreen(s,a,c,p)}},CollisionIndex.prototype.approximateTileDistance=function(t,i,e,n,r){var o=r?1:n/this.pitchfactor,s=t.lastSegmentViewportDistance*e;return t.prevTileDistance+s+(o-1)*s*Math.abs(Math.sin(i))},CollisionIndex.prototype.placeCollisionCircles=function(t,i,e,n,r,o,s,a,c,p,d,l,h){var f=this,x=[],g=this.projectAnchor(p,o.anchorX,o.anchorY),u={},v=c/24,y=o.lineOffsetX*c,m=o.lineOffsetY*c,I=new Point(o.anchorX,o.anchorY),P=projection.project(I,d).point,C=projection.placeFirstAndLastGlyph(v,a,y,m,!1,P,I,o,s,d,u,!0),w=!1,D=!0,b=g.perspectiveRatio*n,j=1/(n*e),T=0,k=0;C&&(T=this.approximateTileDistance(C.first.tileDistance,C.first.angle,j,g.cameraDistance,h),k=this.approximateTileDistance(C.last.tileDistance,C.last.angle,j,g.cameraDistance,h));for(var G=0;G<t.length;G+=5){var M=t[G],R=t[G+1],q=t[G+2],B=t[G+3];if(!C||B<-T||B>k)markCollisionCircleUsed(t,G,!1);else{var A=f.projectPoint(p,M,R),O=q*b;if(x.length>0){var U=A.x-x[x.length-4],X=A.y-x[x.length-3];if(O*O*2>U*U+X*X){if(G+8<t.length){var Y=t[G+8];if(Y>-T&&Y<k){markCollisionCircleUsed(t,G,!1);continue}}}}var L=G/5;if(x.push(A.x,A.y,O,L),markCollisionCircleUsed(t,G,!0),D=D&&f.isOffscreen(A.x-O,A.y-O,A.x+O,A.y+O),!i&&f.grid.hitTestCircle(A.x,A.y,O)){if(!l)return{circles:[],offscreen:!1};w=!0}}}return{circles:w?[]:x,offscreen:D}},CollisionIndex.prototype.queryRenderedSymbols=function(t,i,e,n,r,o){var s=this,a={},c=[];if(0===t.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return c;for(var p=this.transform.calculatePosMatrix(i.toUnwrapped()),d=[],l=1/0,h=1/0,f=-1/0,x=-1/0,g=0;g<t.length;g++)for(var u=t[g],v=0;v<u.length;v++){var y=s.projectPoint(p,u[v].x,u[v].y);l=Math.min(l,y.x),h=Math.min(h,y.y),f=Math.max(f,y.x),x=Math.max(x,y.y),d.push(y)}for(var m=i.key,I=[],P=this.grid.query(l,h,f,x),C=0;C<P.length;C++)P[C].sourceID===r&&P[C].tileID===m&&o[P[C].bucketInstanceId]&&I.push(P[C].boxIndex);for(var w=this.ignoredGrid.query(l,h,f,x),D=0;D<w.length;D++)w[D].sourceID===r&&w[D].tileID===m&&o[w[D].bucketInstanceId]&&I.push(w[D].boxIndex);for(var b=0;b<I.length;b++){var j=n.get(I[b]),T=j.sourceLayerIndex,k=j.featureIndex,G=j.bucketIndex;if(void 0===a[T]&&(a[T]={}),void 0===a[T][k]&&(a[T][k]={}),!a[T][k][G]){var M=s.projectAndGetPerspectiveRatio(p,j.anchorPointX,j.anchorPointY),R=e*M.perspectiveRatio,q=j.x1*R+M.point.x,B=j.y1*R+M.point.y,A=j.x2*R+M.point.x,O=j.y2*R+M.point.y,U=[new Point(q,B),new Point(A,B),new Point(A,O),new Point(q,O)];intersectionTests.polygonIntersectsPolygon(d,U)&&(a[T][k][G]=!0,c.push(I[b]))}}return c},CollisionIndex.prototype.insertCollisionBox=function(t,i,e,n,r,o){var s=i?this.ignoredGrid:this.grid,a={tileID:e,sourceID:n,bucketInstanceId:r,boxIndex:o};s.insert(a,t[0],t[1],t[2],t[3])},CollisionIndex.prototype.insertCollisionCircles=function(t,i,e,n,r,o){for(var s=i?this.ignoredGrid:this.grid,a=0;a<t.length;a+=4){var c={tileID:e,sourceID:n,bucketInstanceId:r,boxIndex:o+t[a+3]};s.insertCircle(c,t[a],t[a+1],t[a+2])}},CollisionIndex.prototype.projectAnchor=function(t,i,e){var n=[i,e,0,1];return projection.xyTransformMat4(n,n,t),{perspectiveRatio:.5+this.transform.cameraToCenterDistance/n[3]*.5,cameraDistance:n[3]}},CollisionIndex.prototype.projectPoint=function(t,i,e){var n=[i,e,0,1];return projection.xyTransformMat4(n,n,t),new Point((n[0]/n[3]+1)/2*this.transform.width+viewportPadding,(-n[1]/n[3]+1)/2*this.transform.height+viewportPadding)},CollisionIndex.prototype.projectAndGetPerspectiveRatio=function(t,i,e){var n=[i,e,0,1];return projection.xyTransformMat4(n,n,t),{point:new Point((n[0]/n[3]+1)/2*this.transform.width+viewportPadding,(-n[1]/n[3]+1)/2*this.transform.height+viewportPadding),perspectiveRatio:.5+this.transform.cameraToCenterDistance/n[3]*.5}},CollisionIndex.prototype.isOffscreen=function(t,i,e,n){return e<viewportPadding||t>=this.screenRightBoundary||n<viewportPadding||i>this.screenBottomBoundary},module.exports=CollisionIndex;
},{"../symbol/projection":224,"../util/intersection_tests":264,"./grid_index":220,"@mapbox/gl-matrix":2,"@mapbox/point-geometry":4}],218:[function(_dereq_,module,exports){
"use strict";var EXTENT=_dereq_("../data/extent"),roundingFactor=512/EXTENT/2,TileLayerIndex=function(e,s,r){var n=this;this.tileID=e,this.indexedSymbolInstances={},this.bucketInstanceId=r;for(var o=0,t=s;o<t.length;o+=1){var i=t[o],a=i.key;n.indexedSymbolInstances[a]||(n.indexedSymbolInstances[a]=[]),n.indexedSymbolInstances[a].push({crossTileID:i.crossTileID,coord:n.getScaledCoordinates(i,e)})}};TileLayerIndex.prototype.getScaledCoordinates=function(e,s){var r=s.canonical.z-this.tileID.canonical.z,n=roundingFactor/Math.pow(2,r),o=e.anchor;return{x:Math.floor((s.canonical.x*EXTENT+o.x)*n),y:Math.floor((s.canonical.y*EXTENT+o.y)*n)}},TileLayerIndex.prototype.findMatches=function(e,s,r){for(var n=this,o=this.tileID.canonical.z<s.canonical.z?1:Math.pow(2,this.tileID.canonical.z-s.canonical.z),t=0,i=e;t<i.length;t+=1){var a=i[t];if(!a.crossTileID){var l=n.indexedSymbolInstances[a.key];if(l)for(var c=n.getScaledCoordinates(a,s),d=0,I=l;d<I.length;d+=1){var y=I[d];if(Math.abs(y.coord.x-c.x)<=o&&Math.abs(y.coord.y-c.y)<=o&&!r[y.crossTileID]){r[y.crossTileID]=!0,a.crossTileID=y.crossTileID;break}}}}};var CrossTileIDs=function(){this.maxCrossTileID=0};CrossTileIDs.prototype.generate=function(){return++this.maxCrossTileID};var CrossTileSymbolLayerIndex=function(){this.indexes={},this.usedCrossTileIDs={}};CrossTileSymbolLayerIndex.prototype.addBucket=function(e,s,r){var n=this;if(this.indexes[e.overscaledZ]&&this.indexes[e.overscaledZ][e.key]){if(this.indexes[e.overscaledZ][e.key].bucketInstanceId===s.bucketInstanceId)return!1;this.removeBucketCrossTileIDs(e.overscaledZ,this.indexes[e.overscaledZ][e.key])}for(var o=0,t=s.symbolInstances;o<t.length;o+=1){t[o].crossTileID=0}this.usedCrossTileIDs[e.overscaledZ]||(this.usedCrossTileIDs[e.overscaledZ]={});var i=this.usedCrossTileIDs[e.overscaledZ];for(var a in n.indexes){var l=n.indexes[a];if(Number(a)>e.overscaledZ)for(var c in l){var d=l[c];d.tileID.isChildOf(e)&&d.findMatches(s.symbolInstances,e,i)}else{var I=e.scaledTo(Number(a)),y=l[I.key];y&&y.findMatches(s.symbolInstances,e,i)}}for(var v=0,h=s.symbolInstances;v<h.length;v+=1){var u=h[v];u.crossTileID||(u.crossTileID=r.generate(),i[u.crossTileID]=!0)}return void 0===this.indexes[e.overscaledZ]&&(this.indexes[e.overscaledZ]={}),this.indexes[e.overscaledZ][e.key]=new TileLayerIndex(e,s.symbolInstances,s.bucketInstanceId),!0},CrossTileSymbolLayerIndex.prototype.removeBucketCrossTileIDs=function(e,s){var r=this;for(var n in s.indexedSymbolInstances)for(var o=0,t=s.indexedSymbolInstances[n];o<t.length;o+=1){var i=t[o];delete r.usedCrossTileIDs[e][i.crossTileID]}},CrossTileSymbolLayerIndex.prototype.removeStaleBuckets=function(e){var s=this,r=!1;for(var n in s.indexes){var o=s.indexes[n];for(var t in o)e[o[t].bucketInstanceId]||(s.removeBucketCrossTileIDs(n,o[t]),delete o[t],r=!0)}return r};var CrossTileSymbolIndex=function(){this.layerIndexes={},this.crossTileIDs=new CrossTileIDs,this.maxBucketInstanceId=0};CrossTileSymbolIndex.prototype.addLayer=function(e,s){var r=this,n=this.layerIndexes[e.id];void 0===n&&(n=this.layerIndexes[e.id]=new CrossTileSymbolLayerIndex);for(var o=!1,t={},i=0,a=s;i<a.length;i+=1){var l=a[i],c=l.getBucket(e);c&&(c.bucketInstanceId||(c.bucketInstanceId=++r.maxBucketInstanceId),n.addBucket(l.tileID,c,r.crossTileIDs)&&(o=!0),t[c.bucketInstanceId]=!0)}return n.removeStaleBuckets(t)&&(o=!0),o},CrossTileSymbolIndex.prototype.pruneUnusedLayers=function(e){var s=this,r={};e.forEach(function(e){r[e]=!0});for(var n in s.layerIndexes)r[n]||delete s.layerIndexes[n]},module.exports=CrossTileSymbolIndex;
},{"../data/extent":53}],219:[function(_dereq_,module,exports){
"use strict";function getAnchors(e,r,t,n,a,l,o,i,c){var h=n?.6*l*o:0,s=Math.max(n?n.right-n.left:0,a?a.right-a.left:0),u=0===e[0].x||e[0].x===c||0===e[0].y||e[0].y===c;r-s*o<r/4&&(r=s*o+r/4);var g=2*l;return resample(e,u?r/2*i%r:(s/2+g)*o*i%r,r,h,t,s*o,u,!1,c)}function resample(e,r,t,n,a,l,o,i,c){for(var h=l/2,s=0,u=0;u<e.length-1;u++)s+=e[u].dist(e[u+1]);for(var g=0,p=r-t,x=[],f=0;f<e.length-1;f++){for(var m=e[f],v=e[f+1],y=m.dist(v),A=v.angleTo(m);p+t<g+y;){p+=t;var d=(p-g)/y,k=interpolate(m.x,v.x,d),q=interpolate(m.y,v.y,d);if(k>=0&&k<c&&q>=0&&q<c&&p-h>=0&&p+h<=s){var M=new Anchor(k,q,A,f);M._round(),n&&!checkMaxAngle(e,M,l,n,a)||x.push(M)}}g+=y}return i||x.length||o||(x=resample(e,g/2,t,n,a,l,o,!0,c)),x}var interpolate=_dereq_("../style-spec/util/interpolate").number,Anchor=_dereq_("../symbol/anchor"),checkMaxAngle=_dereq_("./check_max_angle");module.exports=getAnchors;
},{"../style-spec/util/interpolate":158,"../symbol/anchor":213,"./check_max_angle":214}],220:[function(_dereq_,module,exports){
"use strict";var GridIndex=function(e,t,i){var r=this.boxCells=[],s=this.circleCells=[];this.xCellCount=Math.ceil(e/i),this.yCellCount=Math.ceil(t/i);for(var l=0;l<this.xCellCount*this.yCellCount;l++)r.push([]),s.push([]);this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=e,this.height=t,this.xScale=this.xCellCount/e,this.yScale=this.yCellCount/t,this.boxUid=0,this.circleUid=0};GridIndex.prototype.keysLength=function(){return this.boxKeys.length+this.circleKeys.length},GridIndex.prototype.insert=function(e,t,i,r,s){this._forEachCell(t,i,r,s,this._insertBoxCell,this.boxUid++),this.boxKeys.push(e),this.bboxes.push(t),this.bboxes.push(i),this.bboxes.push(r),this.bboxes.push(s)},GridIndex.prototype.insertCircle=function(e,t,i,r){this._forEachCell(t-r,i-r,t+r,i+r,this._insertCircleCell,this.circleUid++),this.circleKeys.push(e),this.circles.push(t),this.circles.push(i),this.circles.push(r)},GridIndex.prototype._insertBoxCell=function(e,t,i,r,s,l){this.boxCells[s].push(l)},GridIndex.prototype._insertCircleCell=function(e,t,i,r,s,l){this.circleCells[s].push(l)},GridIndex.prototype._query=function(e,t,i,r,s){if(i<0||e>this.width||r<0||t>this.height)return!s&&[];var l=[];if(e<=0&&t<=0&&this.width<=i&&this.height<=r)l=Array.prototype.slice.call(this.boxKeys).concat(this.circleKeys);else{var o={hitTest:s,seenUids:{box:{},circle:{}}};this._forEachCell(e,t,i,r,this._queryCell,l,o)}return s?l.length>0:l},GridIndex.prototype._queryCircle=function(e,t,i,r){var s=e-i,l=e+i,o=t-i,h=t+i;if(l<0||s>this.width||h<0||o>this.height)return!r&&[];var n=[],c={hitTest:r,circle:{x:e,y:t,radius:i},seenUids:{box:{},circle:{}}};return this._forEachCell(s,o,l,h,this._queryCellCircle,n,c),r?n.length>0:n},GridIndex.prototype.query=function(e,t,i,r){return this._query(e,t,i,r,!1)},GridIndex.prototype.hitTest=function(e,t,i,r){return this._query(e,t,i,r,!0)},GridIndex.prototype.hitTestCircle=function(e,t,i){return this._queryCircle(e,t,i,!0)},GridIndex.prototype._queryCell=function(e,t,i,r,s,l,o){var h=this,n=o.seenUids,c=this.boxCells[s];if(null!==c)for(var u=this.bboxes,d=0,C=c;d<C.length;d+=1){var a=C[d];if(!n.box[a]){n.box[a]=!0;var x=4*a;if(e<=u[x+2]&&t<=u[x+3]&&i>=u[x+0]&&r>=u[x+1]){if(o.hitTest)return l.push(!0),!0;l.push(h.boxKeys[a])}}}var p=this.circleCells[s];if(null!==p)for(var f=this.circles,y=0,v=p;y<v.length;y+=1){var b=v[y];if(!n.circle[b]){n.circle[b]=!0;var _=3*b;if(h._circleAndRectCollide(f[_],f[_+1],f[_+2],e,t,i,r)){if(o.hitTest)return l.push(!0),!0;l.push(h.circleKeys[b])}}}},GridIndex.prototype._queryCellCircle=function(e,t,i,r,s,l,o){var h=this,n=o.circle,c=o.seenUids,u=this.boxCells[s];if(null!==u)for(var d=this.bboxes,C=0,a=u;C<a.length;C+=1){var x=a[C];if(!c.box[x]){c.box[x]=!0;var p=4*x;if(h._circleAndRectCollide(n.x,n.y,n.radius,d[p+0],d[p+1],d[p+2],d[p+3]))return l.push(!0),!0}}var f=this.circleCells[s];if(null!==f)for(var y=this.circles,v=0,b=f;v<b.length;v+=1){var _=b[v];if(!c.circle[_]){c.circle[_]=!0;var G=3*_;if(h._circlesCollide(y[G],y[G+1],y[G+2],n.x,n.y,n.radius))return l.push(!0),!0}}},GridIndex.prototype._forEachCell=function(e,t,i,r,s,l,o){for(var h=this,n=this._convertToXCellCoord(e),c=this._convertToYCellCoord(t),u=this._convertToXCellCoord(i),d=this._convertToYCellCoord(r),C=n;C<=u;C++)for(var a=c;a<=d;a++){var x=h.xCellCount*a+C;if(s.call(h,e,t,i,r,x,l,o))return}},GridIndex.prototype._convertToXCellCoord=function(e){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(e*this.xScale)))},GridIndex.prototype._convertToYCellCoord=function(e){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(e*this.yScale)))},GridIndex.prototype._circlesCollide=function(e,t,i,r,s,l){var o=r-e,h=s-t,n=i+l;return n*n>o*o+h*h},GridIndex.prototype._circleAndRectCollide=function(e,t,i,r,s,l,o){var h=(l-r)/2,n=Math.abs(e-(r+h));if(n>h+i)return!1;var c=(o-s)/2,u=Math.abs(t-(s+c));if(u>c+i)return!1;if(n<=h||u<=c)return!0;var d=n-h,C=u-c;return d*d+C*C<=i*i},module.exports=GridIndex;
},{}],221:[function(_dereq_,module,exports){
"use strict";module.exports=function(e){function t(t){g.push(e[t]),l++}function r(e,t,r){var n=u[e];return delete u[e],u[t]=n,g[n].geometry[0].pop(),g[n].geometry[0]=g[n].geometry[0].concat(r[0]),n}function n(e,t,r){var n=i[t];return delete i[t],i[e]=n,g[n].geometry[0].shift(),g[n].geometry[0]=r[0].concat(g[n].geometry[0]),n}function o(e,t,r){var n=r?t[0][t[0].length-1]:t[0][0];return e+":"+n.x+":"+n.y}for(var i={},u={},g=[],l=0,m=0;m<e.length;m++){var y=e[m],c=y.geometry,f=y.text;if(f){var a=o(f,c),s=o(f,c,!0);if(a in u&&s in i&&u[a]!==i[s]){var v=n(a,s,c),d=r(a,s,g[v].geometry);delete i[a],delete u[s],u[o(f,g[d].geometry,!0)]=d,g[v].geometry=null}else a in u?r(a,s,c):s in i?n(a,s,c):(t(m),i[a]=l-1,u[s]=l-1)}else t(m)}return g.filter(function(e){return e.geometry})};
},{}],222:[function(_dereq_,module,exports){
"use strict";var ref=_dereq_("../util/web_worker_transfer"),register=ref.register,OpacityState=function(){this.opacity=0,this.targetOpacity=0,this.time=0};OpacityState.prototype.clone=function(){var t=new OpacityState;return t.opacity=this.opacity,t.targetOpacity=this.targetOpacity,t.time=this.time,t},register("OpacityState",OpacityState),module.exports=OpacityState;
},{"../util/web_worker_transfer":278}],223:[function(_dereq_,module,exports){
"use strict";function updateCollisionVertices(e,t,i){e.emplaceBack(t?1:0,i?1:0),e.emplaceBack(t?1:0,i?1:0),e.emplaceBack(t?1:0,i?1:0),e.emplaceBack(t?1:0,i?1:0)}function packOpacity(e){if(0===e.opacity&&!e.placed)return 0;if(1===e.opacity&&e.placed)return 4294967295;var t=e.placed?1:0,i=Math.floor(127*e.opacity);return i*shift25+t*shift24+i*shift17+t*shift16+i*shift9+t*shift8+i*shift1+t}var CollisionIndex=_dereq_("./collision_index"),EXTENT=_dereq_("../data/extent"),symbolSize=_dereq_("./symbol_size"),projection=_dereq_("./projection"),symbolLayoutProperties=_dereq_("../style/style_layer/symbol_style_layer_properties").layout,pixelsToTileUnits=_dereq_("../source/pixels_to_tile_units"),OpacityState=function(e,t,i,o){this.opacity=e?Math.max(0,Math.min(1,e.opacity+(e.placed?t:-t))):o&&i?1:0,this.placed=i};OpacityState.prototype.isHidden=function(){return 0===this.opacity&&!this.placed};var JointOpacityState=function(e,t,i,o,a){this.text=new OpacityState(e?e.text:null,t,i,a),this.icon=new OpacityState(e?e.icon:null,t,o,a)};JointOpacityState.prototype.isHidden=function(){return this.text.isHidden()&&this.icon.isHidden()};var JointPlacement=function(e,t,i){this.text=e,this.icon=t,this.skipFade=i},Placement=function(e,t){this.transform=e.clone(),this.collisionIndex=new CollisionIndex(this.transform),this.placements={},this.opacities={},this.stale=!1,this.fadeDuration=t};Placement.prototype.placeLayerTile=function(e,t,i,o){var a=t.getBucket(e);if(a){var l=a.layers[0].layout,n=Math.pow(2,this.transform.zoom-t.tileID.overscaledZ),r=t.tileSize/EXTENT,s=this.transform.calculatePosMatrix(t.tileID.toUnwrapped()),c=projection.getLabelPlaneMatrix(s,"map"===l.get("text-pitch-alignment"),"map"===l.get("text-rotation-alignment"),this.transform,pixelsToTileUnits(t,1,this.transform.zoom)),p=projection.getLabelPlaneMatrix(s,"map"===l.get("icon-pitch-alignment"),"map"===l.get("icon-rotation-alignment"),this.transform,pixelsToTileUnits(t,1,this.transform.zoom));this.placeLayerBucket(a,s,c,p,n,r,i,o,t.collisionBoxArray,t.tileID.key,e.source)}},Placement.prototype.placeLayerBucket=function(e,t,i,o,a,l,n,r,s,c,p){for(var x=this,y=e.layers[0].layout,h=symbolSize.evaluateSizeForZoom(e.textSizeData,this.transform.zoom,symbolLayoutProperties.properties["text-size"]),m=!e.hasTextData()||y.get("text-optional"),d=!e.hasIconData()||y.get("icon-optional"),u=0,f=e.symbolInstances;u<f.length;u+=1){var B=f[u];if(!r[B.crossTileID]){var g=!1,I=!1,v=!0,C=null,D=null,T=null;B.collisionArrays||(B.collisionArrays=e.deserializeCollisionBoxes(s,B.textBoxStartIndex,B.textBoxEndIndex,B.iconBoxStartIndex,B.iconBoxEndIndex)),B.collisionArrays.textBox&&(C=x.collisionIndex.placeCollisionBox(B.collisionArrays.textBox,y.get("text-allow-overlap"),l,t),g=C.box.length>0,v=v&&C.offscreen);var V=B.collisionArrays.textCircles;if(V){var S=e.text.placedSymbolArray.get(B.placedTextSymbolIndices[0]),A=symbolSize.evaluateSizeForFeature(e.textSizeData,h,S);D=x.collisionIndex.placeCollisionCircles(V,y.get("text-allow-overlap"),a,l,B.key,S,e.lineVertexArray,e.glyphOffsetArray,A,t,i,n,"map"===y.get("text-pitch-alignment")),g=y.get("text-allow-overlap")||D.circles.length>0,v=v&&D.offscreen}B.collisionArrays.iconBox&&(T=x.collisionIndex.placeCollisionBox(B.collisionArrays.iconBox,y.get("icon-allow-overlap"),l,t),I=T.box.length>0,v=v&&T.offscreen),m||d?d?m||(I=I&&g):g=I&&g:I=g=I&&g,g&&C&&x.collisionIndex.insertCollisionBox(C.box,y.get("text-ignore-placement"),c,p,e.bucketInstanceId,B.textBoxStartIndex),I&&T&&x.collisionIndex.insertCollisionBox(T.box,y.get("icon-ignore-placement"),c,p,e.bucketInstanceId,B.iconBoxStartIndex),g&&D&&x.collisionIndex.insertCollisionCircles(D.circles,y.get("text-ignore-placement"),c,p,e.bucketInstanceId,B.textBoxStartIndex),x.placements[B.crossTileID]=new JointPlacement(g,I,v||e.justReloaded),r[B.crossTileID]=!0}}e.justReloaded=!1},Placement.prototype.commit=function(e,t){var i=this;this.commitTime=t;var o=!1,a=e&&0!==this.fadeDuration?(this.commitTime-e.commitTime)/this.fadeDuration:1,l=e?e.opacities:{};for(var n in i.placements){var r=i.placements[n],s=l[n];s?(i.opacities[n]=new JointOpacityState(s,a,r.text,r.icon),o=o||r.text!==s.text.placed||r.icon!==s.icon.placed):(i.opacities[n]=new JointOpacityState(null,a,r.text,r.icon,r.skipFade),o=o||r.text||r.icon)}for(var c in l){var p=l[c];if(!i.opacities[c]){var x=new JointOpacityState(p,a,!1,!1);x.isHidden()||(i.opacities[c]=x,o=o||p.text.placed||p.icon.placed)}}o?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t)},Placement.prototype.updateLayerOpacities=function(e,t){for(var i=this,o={},a=0,l=t;a<l.length;a+=1){var n=l[a],r=n.getBucket(e);r&&i.updateBucketOpacities(r,o,n.collisionBoxArray)}},Placement.prototype.updateBucketOpacities=function(e,t,i){var o=this;e.hasTextData()&&e.text.opacityVertexArray.clear(),e.hasIconData()&&e.icon.opacityVertexArray.clear(),e.hasCollisionBoxData()&&e.collisionBox.collisionVertexArray.clear(),e.hasCollisionCircleData()&&e.collisionCircle.collisionVertexArray.clear();for(var a=e.layers[0].layout,l=new JointOpacityState(null,0,a.get("text-allow-overlap"),a.get("icon-allow-overlap"),!0),n=0;n<e.symbolInstances.length;n++){var r=e.symbolInstances[n],s=t[r.crossTileID],c=o.opacities[r.crossTileID];c?s&&(c=l):(c=l,o.opacities[r.crossTileID]=c),t[r.crossTileID]=!0;var p=r.numGlyphVertices>0||r.numVerticalGlyphVertices>0,x=r.numIconVertices>0;if(p){for(var y=packOpacity(c.text),h=(r.numGlyphVertices+r.numVerticalGlyphVertices)/4,m=0;m<h;m++)e.text.opacityVertexArray.emplaceBack(y);for(var d=0,u=r.placedTextSymbolIndices;d<u.length;d+=1){var f=u[d];e.text.placedSymbolArray.get(f).hidden=c.text.isHidden()}}if(x){for(var B=packOpacity(c.icon),g=0;g<r.numIconVertices/4;g++)e.icon.opacityVertexArray.emplaceBack(B);e.icon.placedSymbolArray.get(n).hidden=c.icon.isHidden()}r.collisionArrays||(r.collisionArrays=e.deserializeCollisionBoxes(i,r.textBoxStartIndex,r.textBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex));var I=r.collisionArrays;if(I){I.textBox&&e.hasCollisionBoxData()&&updateCollisionVertices(e.collisionBox.collisionVertexArray,c.text.placed,!1),I.iconBox&&e.hasCollisionBoxData()&&updateCollisionVertices(e.collisionBox.collisionVertexArray,c.icon.placed,!1);var v=I.textCircles;if(v&&e.hasCollisionCircleData())for(var C=0;C<v.length;C+=5){var D=s||0===v[C+4];updateCollisionVertices(e.collisionCircle.collisionVertexArray,c.text.placed,D)}}}e.sortFeatures(this.transform.angle),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasCollisionBoxData()&&e.collisionBox.collisionVertexBuffer&&e.collisionBox.collisionVertexBuffer.updateData(e.collisionBox.collisionVertexArray),e.hasCollisionCircleData()&&e.collisionCircle.collisionVertexBuffer&&e.collisionCircle.collisionVertexBuffer.updateData(e.collisionCircle.collisionVertexArray)},Placement.prototype.symbolFadeChange=function(e){return 0===this.fadeDuration?1:(e-this.commitTime)/this.fadeDuration},Placement.prototype.hasTransitions=function(e){return this.stale||e-this.lastPlacementChangeTime<this.fadeDuration},Placement.prototype.stillRecent=function(e){return"undefined"!==this.commitTime&&this.commitTime+this.fadeDuration>e},Placement.prototype.setStale=function(){this.stale=!0};var shift25=Math.pow(2,25),shift24=Math.pow(2,24),shift17=Math.pow(2,17),shift16=Math.pow(2,16),shift9=Math.pow(2,9),shift8=Math.pow(2,8),shift1=Math.pow(2,1);module.exports=Placement;
},{"../data/extent":53,"../source/pixels_to_tile_units":104,"../style/style_layer/symbol_style_layer_properties":209,"./collision_index":217,"./projection":224,"./symbol_size":228}],224:[function(_dereq_,module,exports){
"use strict";function getLabelPlaneMatrix(e,t,r,n,a){var i=mat4.identity(new Float32Array(16));return t?(mat4.identity(i),mat4.scale(i,i,[1/a,1/a,1]),r||mat4.rotateZ(i,i,n.angle)):(mat4.scale(i,i,[n.width/2,-n.height/2,1]),mat4.translate(i,i,[1,-1,0]),mat4.multiply(i,i,e)),i}function getGlCoordMatrix(e,t,r,n,a){var i=mat4.identity(new Float32Array(16));return t?(mat4.multiply(i,i,e),mat4.scale(i,i,[a,a,1]),r||mat4.rotateZ(i,i,-n.angle)):(mat4.scale(i,i,[1,-1,1]),mat4.translate(i,i,[-1,-1,0]),mat4.scale(i,i,[2/n.width,2/n.height,1])),i}function project(e,t){var r=[e.x,e.y,0,1];xyTransformMat4(r,r,t);var n=r[3];return{point:new Point(r[0]/n,r[1]/n),signedDistanceFromCamera:n}}function isVisible(e,t){var r=e[0]/e[3],n=e[1]/e[3];return r>=-t[0]&&r<=t[0]&&n>=-t[1]&&n<=t[1]}function updateLineLabels(e,t,r,n,a,i,o,l){var s=n?e.textSizeData:e.iconSizeData,p=symbolSize.evaluateSizeForZoom(s,r.transform.zoom,symbolLayoutProperties.properties[n?"text-size":"icon-size"]),u=[256/r.width*2+1,256/r.height*2+1],y=n?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray;y.clear();for(var c=e.lineVertexArray,m=n?e.text.placedSymbolArray:e.icon.placedSymbolArray,d=r.transform.width/r.transform.height,g=!1,h=0;h<m.length;h++){var f=m.get(h);if(f.hidden||f.writingMode===WritingMode.vertical&&!g)hideGlyphs(f.numGlyphs,y);else{g=!1;var x=[f.anchorX,f.anchorY,0,1];if(vec4.transformMat4(x,x,t),isVisible(x,u)){var v=x[3],b=.5+v/r.transform.cameraToCenterDistance*.5,L=symbolSize.evaluateSizeForFeature(s,p,f),A=o?L*b:L/b,G=new Point(f.anchorX,f.anchorY),M=project(G,a).point,S={},w=placeGlyphsAlongLine(f,A,!1,l,t,a,i,e.glyphOffsetArray,c,y,M,G,S,d);g=w.useVertical,(w.notEnoughRoom||g||w.needsFlipping&&placeGlyphsAlongLine(f,A,!0,l,t,a,i,e.glyphOffsetArray,c,y,M,G,S,d).notEnoughRoom)&&hideGlyphs(f.numGlyphs,y)}else hideGlyphs(f.numGlyphs,y)}}n?e.text.dynamicLayoutVertexBuffer.updateData(y):e.icon.dynamicLayoutVertexBuffer.updateData(y)}function placeFirstAndLastGlyph(e,t,r,n,a,i,o,l,s,p,u,y){var c=l.glyphStartIndex+l.numGlyphs,m=l.lineStartIndex,d=l.lineStartIndex+l.lineLength,g=t.getoffsetX(l.glyphStartIndex),h=t.getoffsetX(c-1),f=placeGlyphAlongLine(e*g,r,n,a,i,o,l.segment,m,d,s,p,u,y);if(!f)return null;var x=placeGlyphAlongLine(e*h,r,n,a,i,o,l.segment,m,d,s,p,u,y);return x?{first:f,last:x}:null}function requiresOrientationChange(e,t,r,n){if(e===WritingMode.horizontal){if(Math.abs(r.y-t.y)>Math.abs(r.x-t.x)*n)return{useVertical:!0}}return(e===WritingMode.vertical?t.y<r.y:t.x>r.x)?{needsFlipping:!0}:null}function placeGlyphsAlongLine(e,t,r,n,a,i,o,l,s,p,u,y,c,m){var d,g=t/24,h=e.lineOffsetX*t,f=e.lineOffsetY*t;if(e.numGlyphs>1){var x=e.glyphStartIndex+e.numGlyphs,v=e.lineStartIndex,b=e.lineStartIndex+e.lineLength,L=placeFirstAndLastGlyph(g,l,h,f,r,u,y,e,s,i,c,!1);if(!L)return{notEnoughRoom:!0};var A=project(L.first.point,o).point,G=project(L.last.point,o).point;if(n&&!r){var M=requiresOrientationChange(e.writingMode,A,G,m);if(M)return M}d=[L.first];for(var S=e.glyphStartIndex+1;S<x-1;S++)d.push(placeGlyphAlongLine(g*l.getoffsetX(S),h,f,r,u,y,e.segment,v,b,s,i,c,!1));d.push(L.last)}else{if(n&&!r){var w=project(y,a).point,F=e.lineStartIndex+e.segment+1,D=new Point(s.getx(F),s.gety(F)),I=project(D,a),j=I.signedDistanceFromCamera>0?I.point:projectTruncatedLineSegment(y,D,w,1,a),z=requiresOrientationChange(e.writingMode,w,j,m);if(z)return z}var P=placeGlyphAlongLine(g*l.getoffsetX(e.glyphStartIndex),h,f,r,u,y,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,s,i,c,!1);if(!P)return{notEnoughRoom:!0};d=[P]}for(var _=0,C=d;_<C.length;_+=1){var V=C[_];addDynamicAttributes(p,V.point,V.angle)}return{}}function projectTruncatedLineSegment(e,t,r,n,a){var i=project(e.add(e.sub(t)._unit()),a).point,o=r.sub(i);return r.add(o._mult(n/o.mag()))}function placeGlyphAlongLine(e,t,r,n,a,i,o,l,s,p,u,y,c){var m=n?e-t:e+t,d=m>0?1:-1,g=0;n&&(d*=-1,g=Math.PI),d<0&&(g+=Math.PI);for(var h=d>0?l+o:l+o+1,f=h,x=a,v=a,b=0,L=0,A=Math.abs(m);b+L<=A;){if((h+=d)<l||h>=s)return null;if(v=x,void 0===(x=y[h])){var G=new Point(p.getx(h),p.gety(h)),M=project(G,u);if(M.signedDistanceFromCamera>0)x=y[h]=M.point;else{var S=h-d;x=projectTruncatedLineSegment(0===b?i:new Point(p.getx(S),p.gety(S)),G,v,A-b+1,u)}}b+=L,L=v.dist(x)}var w=(A-b)/L,F=x.sub(v),D=F.mult(w)._add(v);return D._add(F._unit()._perp()._mult(r*d)),{point:D,angle:g+Math.atan2(x.y-v.y,x.x-v.x),tileDistance:c?{prevTileDistance:h-d===f?0:p.gettileUnitDistanceFromAnchor(h-d),lastSegmentViewportDistance:A-b}:null}}function hideGlyphs(e,t){for(var r=0;r<e;r++){var n=t.length;t.resize(n+4),t.float32.set(hiddenGlyphAttributes,3*n)}}function xyTransformMat4(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[4]*a+r[12],e[1]=r[1]*n+r[5]*a+r[13],e[3]=r[3]*n+r[7]*a+r[15],e}var Point=_dereq_("@mapbox/point-geometry"),ref=_dereq_("@mapbox/gl-matrix"),mat4=ref.mat4,vec4=ref.vec4,symbolSize=_dereq_("./symbol_size"),ref$1=_dereq_("../data/bucket/symbol_bucket"),addDynamicAttributes=ref$1.addDynamicAttributes,symbolLayoutProperties=_dereq_("../style/style_layer/symbol_style_layer_properties").layout,WritingMode=_dereq_("../symbol/shaping").WritingMode;module.exports={updateLineLabels:updateLineLabels,getLabelPlaneMatrix:getLabelPlaneMatrix,getGlCoordMatrix:getGlCoordMatrix,project:project,placeFirstAndLastGlyph:placeFirstAndLastGlyph,xyTransformMat4:xyTransformMat4};var hiddenGlyphAttributes=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0]);
},{"../data/bucket/symbol_bucket":51,"../style/style_layer/symbol_style_layer_properties":209,"../symbol/shaping":226,"./symbol_size":228,"@mapbox/gl-matrix":2,"@mapbox/point-geometry":4}],225:[function(_dereq_,module,exports){
"use strict";function getIconQuads(t,e,i,o,n,a,r){var u,l,g,d,f=e.image,c=i.layout,h=e.top-1/f.pixelRatio,x=e.left-1/f.pixelRatio,p=e.bottom+1/f.pixelRatio,s=e.right+1/f.pixelRatio;if("none"!==c.get("icon-text-fit")&&n){var P=s-x,_=p-h,w=c.get("text-size").evaluate(r)/24,m=n.left*w,v=n.right*w,y=n.top*w,M=n.bottom*w,R=v-m,b=M-y,G=c.get("icon-text-fit-padding")[0],B=c.get("icon-text-fit-padding")[1],I=c.get("icon-text-fit-padding")[2],Q=c.get("icon-text-fit-padding")[3],O="width"===c.get("icon-text-fit")?.5*(b-_):0,A="height"===c.get("icon-text-fit")?.5*(R-P):0,D="width"===c.get("icon-text-fit")||"both"===c.get("icon-text-fit")?R:P,E="height"===c.get("icon-text-fit")||"both"===c.get("icon-text-fit")?b:_;u=new Point(m+A-Q,y+O-G),l=new Point(m+A+B+D,y+O-G),g=new Point(m+A+B+D,y+O+I+E),d=new Point(m+A-Q,y+O+I+E)}else u=new Point(x,h),l=new Point(s,h),g=new Point(s,p),d=new Point(x,p);var F=i.layout.get("icon-rotate").evaluate(r)*Math.PI/180;if(F){var H=Math.sin(F),L=Math.cos(F),Y=[L,-H,H,L];u._matMult(Y),l._matMult(Y),d._matMult(Y),g._matMult(Y)}return[{tl:u,tr:l,bl:d,br:g,tex:{x:f.textureRect.x-1,y:f.textureRect.y-1,w:f.textureRect.w+2,h:f.textureRect.h+2},writingMode:void 0,glyphOffset:[0,0]}]}function getGlyphQuads(t,e,i,o,n,a,r){for(var u=i.layout.get("text-rotate").evaluate(a)*Math.PI/180,l=i.layout.get("text-offset").evaluate(a).map(function(t){return 24*t}),g=e.positionedGlyphs,d=[],f=0;f<g.length;f++){var c=g[f],h=r[c.glyph];if(h){var x=h.rect;if(x){var p=GLYPH_PBF_BORDER+1,s=h.metrics.advance/2,P=o?[c.x+s,c.y]:[0,0],_=o?[0,0]:[c.x+s+l[0],c.y+l[1]],w=h.metrics.left-p-s+_[0],m=-h.metrics.top-p+_[1],v=w+x.w,y=m+x.h,M=new Point(w,m),R=new Point(v,m),b=new Point(w,y),G=new Point(v,y);if(o&&c.vertical){var B=new Point(-s,s),I=-Math.PI/2,Q=new Point(5,0);M._rotateAround(I,B)._add(Q),R._rotateAround(I,B)._add(Q),b._rotateAround(I,B)._add(Q),G._rotateAround(I,B)._add(Q)}if(u){var O=Math.sin(u),A=Math.cos(u),D=[A,-O,O,A];M._matMult(D),R._matMult(D),b._matMult(D),G._matMult(D)}d.push({tl:M,tr:R,bl:b,br:G,tex:x,writingMode:e.writingMode,glyphOffset:P})}}}return d}var Point=_dereq_("@mapbox/point-geometry"),ref=_dereq_("../style/parse_glyph_pbf"),GLYPH_PBF_BORDER=ref.GLYPH_PBF_BORDER;module.exports={getIconQuads:getIconQuads,getGlyphQuads:getGlyphQuads};
},{"../style/parse_glyph_pbf":186,"@mapbox/point-geometry":4}],226:[function(_dereq_,module,exports){
"use strict";function breakLines(e,t){for(var a=[],r=0,i=0,n=t;i<n.length;i+=1){var l=n[i];a.push(e.substring(r,l)),r=l}return r<e.length&&a.push(e.substring(r,e.length)),a}function shapeText(e,t,a,r,i,n,l,o,c,s){var h=e.trim();s===WritingMode.vertical&&(h=verticalizePunctuation(h));var g,u=[],p={positionedGlyphs:u,text:h,top:o[1],bottom:o[1],left:o[0],right:o[0],writingMode:s},b=rtlTextPlugin.processBidirectionalText;return g=b?b(h,determineLineBreaks(h,l,a,t)):breakLines(h,determineLineBreaks(h,l,a,t)),shapeLines(p,t,g,r,i,n,s,l,c),!!u.length&&p}function determineAverageLineWidth(e,t,a,r){for(var i=0,n=0;n<e.length;n++){var l=r[e.charCodeAt(n)];l&&(i+=l.metrics.advance+t)}return i/Math.max(1,Math.ceil(i/a))}function calculateBadness(e,t,a,r){var i=Math.pow(e-t,2);return r?e<t?i/2:2*i:i+Math.abs(a)*a}function calculatePenalty(e,t){var a=0;return 10===e&&(a-=1e4),40!==e&&65288!==e||(a+=50),41!==t&&65289!==t||(a+=50),a}function evaluateBreak(e,t,a,r,i,n){for(var l=null,o=calculateBadness(t,a,i,n),c=0,s=r;c<s.length;c+=1){var h=s[c],g=t-h.x,u=calculateBadness(g,a,i,n)+h.badness;u<=o&&(l=h,o=u)}return{index:e,x:t,priorBreak:l,badness:o}}function leastBadBreaks(e){return e?leastBadBreaks(e.priorBreak).concat(e.index):[]}function determineLineBreaks(e,t,a,r){if(!a)return[];if(!e)return[];for(var i=[],n=determineAverageLineWidth(e,t,a,r),l=0,o=0;o<e.length;o++){var c=e.charCodeAt(o),s=r[c];s&&!whitespace[c]&&(l+=s.metrics.advance+t),o<e.length-1&&(breakable[c]||scriptDetection.charAllowsIdeographicBreaking(c))&&i.push(evaluateBreak(o+1,l,n,i,calculatePenalty(c,e.charCodeAt(o+1)),!1))}return leastBadBreaks(evaluateBreak(e.length,l,n,i,0,!0))}function getAnchorAlignment(e){var t=.5,a=.5;switch(e){case"right":case"top-right":case"bottom-right":t=1;break;case"left":case"top-left":case"bottom-left":t=0}switch(e){case"bottom":case"bottom-right":case"bottom-left":a=1;break;case"top":case"top-right":case"top-left":a=0}return{horizontalAlign:t,verticalAlign:a}}function shapeLines(e,t,a,r,i,n,l,o,c){for(var s=0,h=-17,g=0,u=e.positionedGlyphs,p="right"===n?1:"left"===n?0:.5,b=0,v=a;b<v.length;b+=1){var d=v[b];if(d=d.trim(),d.length){for(var f=u.length,k=0;k<d.length;k++){var m=d.charCodeAt(k),x=t[m];x&&(scriptDetection.charHasUprightVerticalOrientation(m)&&l!==WritingMode.horizontal?(u.push({glyph:m,x:s,y:0,vertical:!0}),s+=c+o):(u.push({glyph:m,x:s,y:h,vertical:!1}),s+=x.metrics.advance+o))}if(u.length!==f){var A=s-o;g=Math.max(A,g),justifyLine(u,t,f,u.length-1,p)}s=0,h+=r}else h+=r}var B=getAnchorAlignment(i),y=B.horizontalAlign,w=B.verticalAlign;align(u,p,y,w,g,r,a.length);var z=a.length*r;e.top+=-w*z,e.bottom=e.top+z,e.left+=-y*g,e.right=e.left+g}function justifyLine(e,t,a,r,i){if(i){var n=t[e[r].glyph];if(n)for(var l=n.metrics.advance,o=(e[r].x+l)*i,c=a;c<=r;c++)e[c].x-=o}}function align(e,t,a,r,i,n,l){for(var o=(t-a)*i,c=(-r*l+.5)*n,s=0;s<e.length;s++)e[s].x+=o,e[s].y+=c}function shapeIcon(e,t,a){var r=getAnchorAlignment(a),i=r.horizontalAlign,n=r.verticalAlign,l=t[0],o=t[1],c=l-e.displaySize[0]*i,s=c+e.displaySize[0],h=o-e.displaySize[1]*n;return{image:e,top:h,bottom:h+e.displaySize[1],left:c,right:s}}var scriptDetection=_dereq_("../util/script_detection"),verticalizePunctuation=_dereq_("../util/verticalize_punctuation"),rtlTextPlugin=_dereq_("../source/rtl_text_plugin"),WritingMode={horizontal:1,vertical:2,horizontalOnly:3};module.exports={shapeText:shapeText,shapeIcon:shapeIcon,WritingMode:WritingMode};var whitespace={};whitespace[9]=!0,whitespace[10]=!0,whitespace[11]=!0,whitespace[12]=!0,whitespace[13]=!0,whitespace[32]=!0;var breakable={};breakable[10]=!0,breakable[32]=!0,breakable[38]=!0,breakable[40]=!0,breakable[41]=!0,breakable[43]=!0,breakable[45]=!0,breakable[47]=!0,breakable[173]=!0,breakable[183]=!0,breakable[8203]=!0,breakable[8208]=!0,breakable[8211]=!0,breakable[8231]=!0;
},{"../source/rtl_text_plugin":109,"../util/script_detection":269,"../util/verticalize_punctuation":277}],227:[function(_dereq_,module,exports){
"use strict";function performSymbolLayout(e,t,a,i,o,n){e.createArrays(),e.symbolInstances=[];var r=512*e.overscaling;e.tilePixelRatio=EXTENT/r,e.compareText={},e.iconsNeedLinear=!1;var l=e.layers[0].layout,s=e.layers[0]._unevaluatedLayout._values,c={};if("composite"===e.textSizeData.functionType){var u=e.textSizeData.zoomRange,x=u.min,g=u.max;c.compositeTextSizes=[s["text-size"].possiblyEvaluate(new EvaluationParameters(x)),s["text-size"].possiblyEvaluate(new EvaluationParameters(g))]}if("composite"===e.iconSizeData.functionType){var y=e.iconSizeData.zoomRange,p=y.min,d=y.max;c.compositeIconSizes=[s["icon-size"].possiblyEvaluate(new EvaluationParameters(p)),s["icon-size"].possiblyEvaluate(new EvaluationParameters(d))]}c.layoutTextSize=s["text-size"].possiblyEvaluate(new EvaluationParameters(e.zoom+1)),c.layoutIconSize=s["icon-size"].possiblyEvaluate(new EvaluationParameters(e.zoom+1)),c.textMaxSize=s["text-size"].possiblyEvaluate(new EvaluationParameters(18));for(var m=24*l.get("text-line-height"),v="map"===l.get("text-rotation-alignment")&&"line"===l.get("symbol-placement"),f=l.get("text-keep-upright"),h=0,S=e.features;h<S.length;h+=1){var z=S[h],b=l.get("text-font").evaluate(z).join(","),T=t[b]||{},I=a[b]||{},E={},P=z.text;if(P){var w=scriptDetection.allowsVerticalWritingMode(P),q=l.get("text-offset").evaluate(z).map(function(e){return 24*e}),A=24*l.get("text-letter-spacing").evaluate(z),L=scriptDetection.allowsLetterSpacing(P)?A:0,D=l.get("text-anchor").evaluate(z),O=l.get("text-justify").evaluate(z),_="line"!==l.get("symbol-placement")?24*l.get("text-max-width").evaluate(z):0;E.horizontal=shapeText(P,T,_,m,D,O,L,q,24,WritingMode.horizontal),w&&v&&f&&(E.vertical=shapeText(P,T,_,m,D,O,L,q,24,WritingMode.vertical))}var R=void 0;if(z.icon){var B=i[z.icon];B&&(R=shapeIcon(o[z.icon],l.get("icon-offset").evaluate(z),l.get("icon-anchor").evaluate(z)),void 0===e.sdfIcons?e.sdfIcons=B.sdf:e.sdfIcons!==B.sdf&&util.warnOnce("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),B.pixelRatio!==e.pixelRatio?e.iconsNeedLinear=!0:0!==l.get("icon-rotate").constantOr(1)&&(e.iconsNeedLinear=!0))}(E.horizontal||R)&&addFeature(e,z,E,R,I,c)}n&&e.generateCollisionDebugBuffers()}function addFeature(e,t,a,i,o,n){var r=n.layoutTextSize.evaluate(t),l=n.layoutIconSize.evaluate(t),s=n.textMaxSize.evaluate(t);void 0===s&&(s=r);var c=e.layers[0].layout,u=c.get("text-offset").evaluate(t),x=c.get("icon-offset").evaluate(t),g=r/24,y=e.tilePixelRatio*g,p=e.tilePixelRatio*s/24,d=e.tilePixelRatio*l,m=e.tilePixelRatio*c.get("symbol-spacing"),v=c.get("text-padding")*e.tilePixelRatio,f=c.get("icon-padding")*e.tilePixelRatio,h=c.get("text-max-angle")/180*Math.PI,S="map"===c.get("text-rotation-alignment")&&"line"===c.get("symbol-placement"),z="map"===c.get("icon-rotation-alignment")&&"line"===c.get("symbol-placement"),b=c.get("symbol-placement"),T=m/2,I=function(r,l){l.x<0||l.x>=EXTENT||l.y<0||l.y>=EXTENT||e.symbolInstances.push(addSymbol(e,l,r,a,i,e.layers[0],e.collisionBoxArray,t.index,t.sourceLayerIndex,e.index,y,v,S,u,d,f,z,x,{zoom:e.zoom},t,o,n))};if("line"===b)for(var E=0,P=clipLine(t.geometry,0,0,EXTENT,EXTENT);E<P.length;E+=1)for(var w=P[E],q=getAnchors(w,m,h,a.vertical||a.horizontal,i,24,p,e.overscaling,EXTENT),A=0,L=q;A<L.length;A+=1){var D=L[A],O=a.horizontal;O&&anchorIsTooClose(e,O.text,T,D)||I(w,D)}else if("Polygon"===t.type)for(var _=0,R=classifyRings(t.geometry,0);_<R.length;_+=1){var B=R[_],M=findPoleOfInaccessibility(B,16);I(B[0],new Anchor(M.x,M.y,0))}else if("LineString"===t.type)for(var N=0,V=t.geometry;N<V.length;N+=1){var W=V[N];I(W,new Anchor(W[0].x,W[0].y,0))}else if("Point"===t.type)for(var X=0,C=t.geometry;X<C.length;X+=1)for(var F=C[X],k=0,G=F;k<G.length;k+=1){var Q=G[k];I([Q],new Anchor(Q.x,Q.y,0))}}function addTextVertices(e,t,a,i,o,n,r,l,s,c,u,x,g){var y=getGlyphQuads(t,a,i,o,n,r,x),p=e.textSizeData,d=null;return"source"===p.functionType?d=[10*i.layout.get("text-size").evaluate(r)]:"composite"===p.functionType&&(d=[10*g.compositeTextSizes[0].evaluate(r),10*g.compositeTextSizes[1].evaluate(r)]),e.addSymbols(e.text,y,d,l,o,r,c,t,s.lineStartIndex,s.lineLength),u.push(e.text.placedSymbolArray.length-1),4*y.length}function addSymbol(e,t,a,i,o,n,r,l,s,c,u,x,g,y,p,d,m,v,f,h,S,z){var b,T,I=e.addToLineVertexArray(t,a),E=0,P=0,w=0,q=i.horizontal?i.horizontal.text:"",A=[];i.horizontal&&(b=new CollisionFeature(r,a,t,l,s,c,i.horizontal,u,x,g,e.overscaling),P+=addTextVertices(e,t,i.horizontal,n,g,f,h,y,I,i.vertical?WritingMode.horizontal:WritingMode.horizontalOnly,A,S,z),i.vertical&&(w+=addTextVertices(e,t,i.vertical,n,g,f,h,y,I,WritingMode.vertical,A,S,z)));var L=b?b.boxStartIndex:e.collisionBoxArray.length,D=b?b.boxEndIndex:e.collisionBoxArray.length;if(o){var O=getIconQuads(t,o,n,m,i.horizontal,f,h);T=new CollisionFeature(r,a,t,l,s,c,o,p,d,!1,e.overscaling),E=4*O.length;var _=e.iconSizeData,R=null;"source"===_.functionType?R=[10*n.layout.get("icon-size").evaluate(h)]:"composite"===_.functionType&&(R=[10*z.compositeIconSizes[0].evaluate(h),10*z.compositeIconSizes[1].evaluate(h)]),e.addSymbols(e.icon,O,R,v,m,h,!1,t,I.lineStartIndex,I.lineLength)}var B=T?T.boxStartIndex:e.collisionBoxArray.length,M=T?T.boxEndIndex:e.collisionBoxArray.length;return e.glyphOffsetArray.length>=SymbolBucket.MAX_GLYPHS&&util.warnOnce("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),{key:q,textBoxStartIndex:L,textBoxEndIndex:D,iconBoxStartIndex:B,iconBoxEndIndex:M,textOffset:y,iconOffset:v,anchor:t,line:a,featureIndex:l,feature:h,numGlyphVertices:P,numVerticalGlyphVertices:w,numIconVertices:E,textOpacityState:new OpacityState,iconOpacityState:new OpacityState,isDuplicate:!1,placedTextSymbolIndices:A,crossTileID:0}}function anchorIsTooClose(e,t,a,i){var o=e.compareText;if(t in o){for(var n=o[t],r=n.length-1;r>=0;r--)if(i.dist(n[r])<a)return!0}else o[t]=[];return o[t].push(i),!1}var Anchor=_dereq_("./anchor"),getAnchors=_dereq_("./get_anchors"),clipLine=_dereq_("./clip_line"),OpacityState=_dereq_("./opacity_state"),ref=_dereq_("./shaping"),shapeText=ref.shapeText,shapeIcon=ref.shapeIcon,WritingMode=ref.WritingMode,ref$1=_dereq_("./quads"),getGlyphQuads=ref$1.getGlyphQuads,getIconQuads=ref$1.getIconQuads,CollisionFeature=_dereq_("./collision_feature"),util=_dereq_("../util/util"),scriptDetection=_dereq_("../util/script_detection"),findPoleOfInaccessibility=_dereq_("../util/find_pole_of_inaccessibility"),classifyRings=_dereq_("../util/classify_rings"),EXTENT=_dereq_("../data/extent"),SymbolBucket=_dereq_("../data/bucket/symbol_bucket"),EvaluationParameters=_dereq_("../style/evaluation_parameters"),Point=_dereq_("@mapbox/point-geometry");module.exports={performSymbolLayout:performSymbolLayout};
},{"../data/bucket/symbol_bucket":51,"../data/extent":53,"../style/evaluation_parameters":182,"../util/classify_rings":255,"../util/find_pole_of_inaccessibility":261,"../util/script_detection":269,"../util/util":275,"./anchor":213,"./clip_line":215,"./collision_feature":216,"./get_anchors":219,"./opacity_state":222,"./quads":225,"./shaping":226,"@mapbox/point-geometry":4}],228:[function(_dereq_,module,exports){
"use strict";function getSizeData(e,o){var i=o.expression;if("constant"===i.kind)return{functionType:"constant",layoutSize:i.evaluate({zoom:e+1})};if("source"===i.kind)return{functionType:"source"};for(var t=i.zoomStops,r=0;r<t.length&&t[r]<=e;)r++;r=Math.max(0,r-1);for(var a=r;a<t.length&&t[a]<e+1;)a++;a=Math.min(t.length-1,a);var n={min:t[r],max:t[a]};return"composite"===i.kind?{functionType:"composite",zoomRange:n,propertyValue:o.value}:{functionType:"camera",layoutSize:i.evaluate({zoom:e+1}),zoomRange:n,sizeRange:{min:i.evaluate({zoom:n.min}),max:i.evaluate({zoom:n.max})},propertyValue:o.value}}function evaluateSizeForFeature(e,o,i){var t=o;return"source"===e.functionType?i.lowerSize/10:"composite"===e.functionType?interpolate.number(i.lowerSize/10,i.upperSize/10,t.uSizeT):t.uSize}function evaluateSizeForZoom(e,o,i){if("constant"===e.functionType)return{uSizeT:0,uSize:e.layoutSize};if("source"===e.functionType)return{uSizeT:0,uSize:0};if("camera"===e.functionType){var t=e.propertyValue,r=e.zoomRange,a=e.sizeRange,n=normalizePropertyExpression(t,i.specification),u=util.clamp(n.interpolationFactor(o,r.min,r.max),0,1);return{uSizeT:0,uSize:a.min+u*(a.max-a.min)}}var p=e.propertyValue,l=e.zoomRange,m=normalizePropertyExpression(p,i.specification);return{uSizeT:util.clamp(m.interpolationFactor(o,l.min,l.max),0,1),uSize:0}}var ref=_dereq_("../style-spec/expression"),normalizePropertyExpression=ref.normalizePropertyExpression,interpolate=_dereq_("../style-spec/util/interpolate"),util=_dereq_("../util/util");module.exports={getSizeData:getSizeData,evaluateSizeForFeature:evaluateSizeForFeature,evaluateSizeForZoom:evaluateSizeForZoom};
},{"../style-spec/expression":139,"../style-spec/util/interpolate":158,"../util/util":275}],229:[function(_dereq_,module,exports){
"use strict";var rtlTextPlugin=_dereq_("../source/rtl_text_plugin");module.exports=function(e,t,r){var a=t.layout.get("text-transform").evaluate(r);return"uppercase"===a?e=e.toLocaleUpperCase():"lowercase"===a&&(e=e.toLocaleLowerCase()),rtlTextPlugin.applyArabicShaping&&(e=rtlTextPlugin.applyArabicShaping(e)),e};
},{"../source/rtl_text_plugin":109}],230:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../util/dom"),Point=_dereq_("@mapbox/point-geometry"),handlers={scrollZoom:_dereq_("./handler/scroll_zoom"),boxZoom:_dereq_("./handler/box_zoom"),dragRotate:_dereq_("./handler/drag_rotate"),dragPan:_dereq_("./handler/drag_pan"),keyboard:_dereq_("./handler/keyboard"),doubleClickZoom:_dereq_("./handler/dblclick_zoom"),touchZoomRotate:_dereq_("./handler/touch_zoom_rotate")};module.exports=function(e,t){function n(e){h("mouseout",e)}function o(t){e.doubleClickZoom.isActive()||e.stop(),b=DOM.mousePos(p,t),h("mousedown",t),L=!0}function r(t){var n=e.dragRotate&&e.dragRotate.isActive();E&&!n&&h("contextmenu",E),E=null,L=!1,h("mouseup",t)}function a(t){if(!(e.dragPan&&e.dragPan.isActive()||e.dragRotate&&e.dragRotate.isActive())){for(var n=t.toElement||t.target;n&&n!==p;)n=n.parentNode;n===p&&h("mousemove",t)}}function u(e){for(var t=e.toElement||e.target;t&&t!==p;)t=t.parentNode;t===p&&h("mouseover",e)}function i(t){e.stop(),g("touchstart",t),!t.touches||t.touches.length>1||(k?(clearTimeout(k),k=null,h("dblclick",t)):k=setTimeout(s,300))}function c(e){g("touchmove",e)}function d(e){g("touchend",e)}function l(e){g("touchcancel",e)}function s(){k=null}function v(e){DOM.mousePos(p,e).equals(b)&&h("click",e)}function m(e){h("dblclick",e),e.preventDefault()}function f(t){var n=e.dragRotate&&e.dragRotate.isActive();L||n?L&&(E=t):h("contextmenu",t),t.preventDefault()}function h(t,n){var o=DOM.mousePos(p,n);return e.fire(t,{lngLat:e.unproject(o),point:o,originalEvent:n})}function g(t,n){var o=DOM.touchPos(p,n),r=o.reduce(function(e,t,n,o){return e.add(t.div(o.length))},new Point(0,0));return e.fire(t,{lngLat:e.unproject(r),point:r,lngLats:o.map(function(t){return e.unproject(t)},this),points:o,originalEvent:n})}var p=e.getCanvasContainer(),E=null,L=!1,b=null,k=null;for(var q in handlers)e[q]=new handlers[q](e,t),t.interactive&&t[q]&&e[q].enable(t[q]);p.addEventListener("mouseout",n,!1),p.addEventListener("mousedown",o,!1),p.addEventListener("mouseup",r,!1),p.addEventListener("mousemove",a,!1),p.addEventListener("mouseover",u,!1),p.addEventListener("touchstart",i,!1),p.addEventListener("touchend",d,!1),p.addEventListener("touchmove",c,!1),p.addEventListener("touchcancel",l,!1),p.addEventListener("click",v,!1),p.addEventListener("dblclick",m,!1),p.addEventListener("contextmenu",f,!1)};
},{"../util/dom":259,"./handler/box_zoom":239,"./handler/dblclick_zoom":240,"./handler/drag_pan":241,"./handler/drag_rotate":242,"./handler/keyboard":243,"./handler/scroll_zoom":244,"./handler/touch_zoom_rotate":245,"@mapbox/point-geometry":4}],231:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),interpolate=_dereq_("../style-spec/util/interpolate").number,browser=_dereq_("../util/browser"),LngLat=_dereq_("../geo/lng_lat"),LngLatBounds=_dereq_("../geo/lng_lat_bounds"),Point=_dereq_("@mapbox/point-geometry"),Evented=_dereq_("../util/evented"),Camera=function(t){function i(i,e){t.call(this),this.moving=!1,this.transform=i,this._bearingSnap=e.bearingSnap}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.getCenter=function(){return this.transform.center},i.prototype.setCenter=function(t,i){return this.jumpTo({center:t},i)},i.prototype.panBy=function(t,i,e){return t=Point.convert(t).mult(-1),this.panTo(this.transform.center,util.extend({offset:t},i),e)},i.prototype.panTo=function(t,i,e){return this.easeTo(util.extend({center:t},i),e)},i.prototype.getZoom=function(){return this.transform.zoom},i.prototype.setZoom=function(t,i){return this.jumpTo({zoom:t},i),this},i.prototype.zoomTo=function(t,i,e){return this.easeTo(util.extend({zoom:t},i),e)},i.prototype.zoomIn=function(t,i){return this.zoomTo(this.getZoom()+1,t,i),this},i.prototype.zoomOut=function(t,i){return this.zoomTo(this.getZoom()-1,t,i),this},i.prototype.getBearing=function(){return this.transform.bearing},i.prototype.setBearing=function(t,i){return this.jumpTo({bearing:t},i),this},i.prototype.rotateTo=function(t,i,e){return this.easeTo(util.extend({bearing:t},i),e)},i.prototype.resetNorth=function(t,i){return this.rotateTo(0,util.extend({duration:1e3},t),i),this},i.prototype.snapToNorth=function(t,i){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,i):this},i.prototype.getPitch=function(){return this.transform.pitch},i.prototype.setPitch=function(t,i){return this.jumpTo({pitch:t},i),this},i.prototype.fitBounds=function(t,i,e){if(i=util.extend({padding:{top:0,bottom:0,right:0,left:0},offset:[0,0],maxZoom:this.transform.maxZoom},i),"number"==typeof i.padding){var o=i.padding;i.padding={top:o,bottom:o,right:o,left:o}}if(!util.deepEqual(Object.keys(i.padding).sort(function(t,i){return t<i?-1:t>i?1:0}),["bottom","left","right","top"]))return util.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'"),this;t=LngLatBounds.convert(t);var n=[(i.padding.left-i.padding.right)/2,(i.padding.top-i.padding.bottom)/2],r=Math.min(i.padding.right,i.padding.left),a=Math.min(i.padding.top,i.padding.bottom);i.offset=[i.offset[0]+n[0],i.offset[1]+n[1]];var s=Point.convert(i.offset),h=this.transform,p=h.project(t.getNorthWest()),u=h.project(t.getSouthEast()),c=u.sub(p),m=(h.width-2*r-2*Math.abs(s.x))/c.x,f=(h.height-2*a-2*Math.abs(s.y))/c.y;return f<0||m<0?(util.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset."),this):(i.center=h.unproject(p.add(u).div(2)),i.zoom=Math.min(h.scaleZoom(h.scale*Math.min(m,f)),i.maxZoom),i.bearing=0,i.linear?this.easeTo(i,e):this.flyTo(i,e))},i.prototype.jumpTo=function(t,i){this.stop();var e=this.transform,o=!1,n=!1,r=!1;return"zoom"in t&&e.zoom!==+t.zoom&&(o=!0,e.zoom=+t.zoom),void 0!==t.center&&(e.center=LngLat.convert(t.center)),"bearing"in t&&e.bearing!==+t.bearing&&(n=!0,e.bearing=+t.bearing),"pitch"in t&&e.pitch!==+t.pitch&&(r=!0,e.pitch=+t.pitch),this.fire("movestart",i).fire("move",i),o&&this.fire("zoomstart",i).fire("zoom",i).fire("zoomend",i),n&&this.fire("rotate",i),r&&this.fire("pitchstart",i).fire("pitch",i).fire("pitchend",i),this.fire("moveend",i)},i.prototype.easeTo=function(t,i){var e=this;this.stop(),t=util.extend({offset:[0,0],duration:500,easing:util.ease},t),!1===t.animate&&(t.duration=0);var o=this.transform,n=this.getZoom(),r=this.getBearing(),a=this.getPitch(),s="zoom"in t?+t.zoom:n,h="bearing"in t?this._normalizeBearing(t.bearing,r):r,p="pitch"in t?+t.pitch:a,u=o.centerPoint.add(Point.convert(t.offset)),c=o.pointLocation(u),m=LngLat.convert(t.center||c);this._normalizeCenter(m);var f,g,d=o.project(c),l=o.project(m).sub(d),v=o.zoomScale(s-n);return t.around&&(f=LngLat.convert(t.around),g=o.locationPoint(f)),this.zooming=s!==n,this.rotating=r!==h,this.pitching=p!==a,this._prepareEase(i,t.noMoveStart),clearTimeout(this._onEaseEnd),this._ease(function(t){if(e.zooming&&(o.zoom=interpolate(n,s,t)),e.rotating&&(o.bearing=interpolate(r,h,t)),e.pitching&&(o.pitch=interpolate(a,p,t)),f)o.setLocationAtPoint(f,g);else{var c=o.zoomScale(o.zoom-n),m=s>n?Math.min(2,v):Math.max(.5,v),_=Math.pow(m,1-t),b=o.unproject(d.add(l.mult(t*_)).mult(c));o.setLocationAtPoint(o.renderWorldCopies?b.wrap():b,u)}e._fireMoveEvents(i)},function(){t.delayEndEvents?e._onEaseEnd=setTimeout(function(){return e._afterEase(i)},t.delayEndEvents):e._afterEase(i)},t),this},i.prototype._prepareEase=function(t,i){this.moving=!0,i||this.fire("movestart",t),this.zooming&&this.fire("zoomstart",t),this.pitching&&this.fire("pitchstart",t)},i.prototype._fireMoveEvents=function(t){this.fire("move",t),this.zooming&&this.fire("zoom",t),this.rotating&&this.fire("rotate",t),this.pitching&&this.fire("pitch",t)},i.prototype._afterEase=function(t){var i=this.zooming,e=this.pitching;this.moving=!1,this.zooming=!1,this.rotating=!1,this.pitching=!1,i&&this.fire("zoomend",t),e&&this.fire("pitchend",t),this.fire("moveend",t)},i.prototype.flyTo=function(t,i){function e(t){var i=(M*M-z*z+(t?-1:1)*L*L*x*x)/(2*(t?M:z)*L*x);return Math.log(Math.sqrt(i*i+1)-i)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function n(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/n(t)}var a=this;this.stop(),t=util.extend({offset:[0,0],speed:1.2,curve:1.42,easing:util.ease},t);var s=this.transform,h=this.getZoom(),p=this.getBearing(),u=this.getPitch(),c="zoom"in t?util.clamp(+t.zoom,s.minZoom,s.maxZoom):h,m="bearing"in t?this._normalizeBearing(t.bearing,p):p,f="pitch"in t?+t.pitch:u,g=s.zoomScale(c-h),d=s.centerPoint.add(Point.convert(t.offset)),l=s.pointLocation(d),v=LngLat.convert(t.center||l);this._normalizeCenter(v);var _=s.project(l),b=s.project(v).sub(_),y=t.curve,z=Math.max(s.width,s.height),M=z/g,x=b.mag();if("minZoom"in t){var E=util.clamp(Math.min(t.minZoom,h,c),s.minZoom,s.maxZoom),T=z/s.zoomScale(E-h);y=Math.sqrt(T/x*2)}var L=y*y,j=e(0),w=function(t){return n(j)/n(j+y*t)},Z=function(t){return z*((n(j)*r(j+y*t)-o(j))/L)/x},P=(e(1)-j)/y;if(Math.abs(x)<1e-6||!isFinite(P)){if(Math.abs(z-M)<1e-6)return this.easeTo(t,i);var S=M<z?-1:1;P=Math.abs(Math.log(M/z))/y,Z=function(){return 0},w=function(t){return Math.exp(S*y*t)}}if("duration"in t)t.duration=+t.duration;else{var B="screenSpeed"in t?+t.screenSpeed/y:+t.speed;t.duration=1e3*P/B}return t.maxDuration&&t.duration>t.maxDuration&&(t.duration=0),this.zooming=!0,this.rotating=p!==m,this.pitching=f!==u,this._prepareEase(i,!1),this._ease(function(t){var e=t*P,o=1/w(e);s.zoom=h+s.scaleZoom(o),a.rotating&&(s.bearing=interpolate(p,m,t)),a.pitching&&(s.pitch=interpolate(u,f,t));var n=s.unproject(_.add(b.mult(Z(e))).mult(o));s.setLocationAtPoint(s.renderWorldCopies?n.wrap():n,d),a._fireMoveEvents(i)},function(){return a._afterEase(i)},t),this},i.prototype.isEasing=function(){return!!this._isEasing},i.prototype.isMoving=function(){return this.moving},i.prototype.stop=function(){return this._onFrame&&this._finishAnimation(),this},i.prototype._ease=function(t,i,e){var o=this;!1===e.animate||0===e.duration?(t(1),i()):(this._easeStart=browser.now(),this._isEasing=!0,this._easeOptions=e,this._startAnimation(function(i){var e=Math.min((browser.now()-o._easeStart)/o._easeOptions.duration,1);t(o._easeOptions.easing(e)),1===e&&o.stop()},function(){o._isEasing=!1,i()}))},i.prototype._updateCamera=function(){this._onFrame&&this._onFrame(this.transform)},i.prototype._startAnimation=function(t,i){return void 0===i&&(i=function(){}),this.stop(),this._onFrame=t,this._finishFn=i,this._update(),this},i.prototype._finishAnimation=function(){delete this._onFrame;var t=this._finishFn;delete this._finishFn,t.call(this)},i.prototype._normalizeBearing=function(t,i){t=util.wrap(t,-180,180);var e=Math.abs(t-i);return Math.abs(t-360-i)<e&&(t-=360),Math.abs(t+360-i)<e&&(t+=360),t},i.prototype._normalizeCenter=function(t){var i=this.transform;if(i.renderWorldCopies&&!i.lngRange){var e=t.lng-i.center.lng;t.lng+=e>180?-360:e<-180?360:0}},i}(Evented);module.exports=Camera;
},{"../geo/lng_lat":62,"../geo/lng_lat_bounds":63,"../style-spec/util/interpolate":158,"../util/browser":252,"../util/evented":260,"../util/util":275,"@mapbox/point-geometry":4}],232:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),config=_dereq_("../../util/config"),AttributionControl=function(t){this.options=t,util.bindAll(["_updateEditLink","_updateData","_updateCompact"],this)};AttributionControl.prototype.getDefaultPosition=function(){return"bottom-right"},AttributionControl.prototype.onAdd=function(t){var i=this.options&&this.options.compact;return this._map=t,this._container=DOM.create("div","mapboxgl-ctrl mapboxgl-ctrl-attrib"),i&&this._container.classList.add("mapboxgl-compact"),this._updateAttributions(),this._updateEditLink(),this._map.on("sourcedata",this._updateData),this._map.on("moveend",this._updateEditLink),void 0===i&&(this._map.on("resize",this._updateCompact),this._updateCompact()),this._container},AttributionControl.prototype.onRemove=function(){DOM.remove(this._container),this._map.off("sourcedata",this._updateData),this._map.off("moveend",this._updateEditLink),this._map.off("resize",this._updateCompact),this._map=void 0},AttributionControl.prototype._updateEditLink=function(){var t=this._editLink;t||(t=this._editLink=this._container.querySelector(".mapbox-improve-map"));var i=[{key:"owner",value:this.styleOwner},{key:"id",value:this.styleId},{key:"access_token",value:config.ACCESS_TOKEN}];if(t){var e=i.reduce(function(t,e,o){return e.value&&(t+=e.key+"="+e.value+(o<i.length-1?"&":"")),t},"?");t.href="https://www.mapbox.com/feedback/"+e+(this._map._hash?this._map._hash.getHashString(!0):"")}},AttributionControl.prototype._updateData=function(t){t&&"metadata"===t.sourceDataType&&(this._updateAttributions(),this._updateEditLink())},AttributionControl.prototype._updateAttributions=function(){if(this._map.style){var t=[];if(this._map.style.stylesheet){var i=this._map.style.stylesheet;this.styleOwner=i.owner,this.styleId=i.id}var e=this._map.style.sourceCaches;for(var o in e){var a=e[o].getSource();a.attribution&&t.indexOf(a.attribution)<0&&t.push(a.attribution)}t.sort(function(t,i){return t.length-i.length}),t=t.filter(function(i,e){for(var o=e+1;o<t.length;o++)if(t[o].indexOf(i)>=0)return!1;return!0}),t.length?(this._container.innerHTML=t.join(" | "),this._container.classList.remove("mapboxgl-attrib-empty")):this._container.classList.add("mapboxgl-attrib-empty"),this._editLink=null}},AttributionControl.prototype._updateCompact=function(){this._map.getCanvasContainer().offsetWidth<=640?this._container.classList.add("mapboxgl-compact"):this._container.classList.remove("mapboxgl-compact")},module.exports=AttributionControl;
},{"../../util/config":256,"../../util/dom":259,"../../util/util":275}],233:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),FullscreenControl=function(){this._fullscreen=!1,util.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in window.document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in window.document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in window.document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in window.document&&(this._fullscreenchange="MSFullscreenChange"),this._className="mapboxgl-ctrl"};FullscreenControl.prototype.onAdd=function(e){return this._map=e,this._mapContainer=this._map.getContainer(),this._container=DOM.create("div",this._className+" mapboxgl-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._container.style.display="none",util.warnOnce("This device does not support fullscreen mode.")),this._container},FullscreenControl.prototype.onRemove=function(){DOM.remove(this._container),this._map=null,window.document.removeEventListener(this._fullscreenchange,this._changeIcon)},FullscreenControl.prototype._checkFullscreenSupport=function(){return!!(window.document.fullscreenEnabled||window.document.mozFullScreenEnabled||window.document.msFullscreenEnabled||window.document.webkitFullscreenEnabled)},FullscreenControl.prototype._setupUI=function(){var e=this._fullscreenButton=DOM.create("button",this._className+"-icon "+this._className+"-fullscreen",this._container);e.setAttribute("aria-label","Toggle fullscreen"),e.type="button",this._fullscreenButton.addEventListener("click",this._onClickFullscreen),window.document.addEventListener(this._fullscreenchange,this._changeIcon)},FullscreenControl.prototype._isFullscreen=function(){return this._fullscreen},FullscreenControl.prototype._changeIcon=function(){(window.document.fullscreenElement||window.document.mozFullScreenElement||window.document.webkitFullscreenElement||window.document.msFullscreenElement)===this._mapContainer!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle(this._className+"-shrink"),this._fullscreenButton.classList.toggle(this._className+"-fullscreen"))},FullscreenControl.prototype._onClickFullscreen=function(){this._isFullscreen()?window.document.exitFullscreen?window.document.exitFullscreen():window.document.mozCancelFullScreen?window.document.mozCancelFullScreen():window.document.msExitFullscreen?window.document.msExitFullscreen():window.document.webkitCancelFullScreen&&window.document.webkitCancelFullScreen():this._mapContainer.requestFullscreen?this._mapContainer.requestFullscreen():this._mapContainer.mozRequestFullScreen?this._mapContainer.mozRequestFullScreen():this._mapContainer.msRequestFullscreen?this._mapContainer.msRequestFullscreen():this._mapContainer.webkitRequestFullscreen&&this._mapContainer.webkitRequestFullscreen()},module.exports=FullscreenControl;
},{"../../util/dom":259,"../../util/util":275,"../../util/window":254}],234:[function(_dereq_,module,exports){
"use strict";function checkGeolocationSupport(t){void 0!==supportsGeolocation?t(supportsGeolocation):void 0!==window.navigator.permissions?window.navigator.permissions.query({name:"geolocation"}).then(function(o){supportsGeolocation="denied"!==o.state,t(supportsGeolocation)}):(supportsGeolocation=!!window.navigator.geolocation,t(supportsGeolocation))}var Evented=_dereq_("../../util/evented"),DOM=_dereq_("../../util/dom"),window=_dereq_("../../util/window"),util=_dereq_("../../util/util"),LngLat=_dereq_("../../geo/lng_lat"),Marker=_dereq_("../marker"),defaultOptions={positionOptions:{enableHighAccuracy:!1,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showUserLocation:!0},className="mapboxgl-ctrl",supportsGeolocation,GeolocateControl=function(t){function o(o){t.call(this),this.options=util.extend({},defaultOptions,o),util.bindAll(["_onSuccess","_onError","_finish","_setupUI","_updateCamera","_updateMarker","_onClickGeolocate"],this)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.onAdd=function(t){return this._map=t,this._container=DOM.create("div",className+" "+className+"-group"),checkGeolocationSupport(this._setupUI),this._container},o.prototype.onRemove=function(){void 0!==this._geolocationWatchID&&(window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker.remove(),DOM.remove(this._container),this._map=void 0},o.prototype._onSuccess=function(t){if(this.options.trackUserLocation)switch(this._lastKnownPosition=t,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");break;case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(t),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(t),this.options.showUserLocation&&this._dotElement.classList.remove("mapboxgl-user-location-dot-stale"),this.fire("geolocate",t),this._finish()},o.prototype._updateCamera=function(t){var o=new LngLat(t.coords.longitude,t.coords.latitude),e=t.coords.accuracy;this._map.fitBounds(o.toBounds(e),this.options.fitBoundsOptions,{geolocateSource:!0})},o.prototype._updateMarker=function(t){t?this._userLocationDotMarker.setLngLat([t.coords.longitude,t.coords.latitude]).addTo(this._map):this._userLocationDotMarker.remove()},o.prototype._onError=function(t){if(this.options.trackUserLocation)if(1===t.code)this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),void 0!==this._geolocationWatchID&&this._clearWatch();else switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error");break;case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting");break;case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("mapboxgl-user-location-dot-stale"),this.fire("error",t),this._finish()},o.prototype._finish=function(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0},o.prototype._setupUI=function(t){var o=this;!1!==t&&(this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this._geolocateButton=DOM.create("button",className+"-icon "+className+"-geolocate",this._container),this._geolocateButton.type="button",this._geolocateButton.setAttribute("aria-label","Geolocate"),this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=DOM.create("div","mapboxgl-user-location-dot"),this._userLocationDotMarker=new Marker(this._dotElement),this.options.trackUserLocation&&(this._watchState="OFF")),this._geolocateButton.addEventListener("click",this._onClickGeolocate.bind(this)),this.options.trackUserLocation&&this._map.on("movestart",function(t){t.geolocateSource||"ACTIVE_LOCK"!==o._watchState||(o._watchState="BACKGROUND",o._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background"),o._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),o.fire("trackuserlocationend"))}))},o.prototype._onClickGeolocate=function(){if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire("trackuserlocationstart");break;case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":this._watchState="OFF",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"),this.fire("trackuserlocationend");break;case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire("trackuserlocationstart")}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");break;case"ACTIVE_LOCK":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");break;case"ACTIVE_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error");break;case"BACKGROUND":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background");break;case"BACKGROUND_ERROR":this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error")}"OFF"===this._watchState&&void 0!==this._geolocationWatchID?this._clearWatch():void 0===this._geolocationWatchID&&(this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),this._geolocationWatchID=window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,this.options.positionOptions))}else window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4)},o.prototype._clearWatch=function(){window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null)},o}(Evented);module.exports=GeolocateControl;
},{"../../geo/lng_lat":62,"../../util/dom":259,"../../util/evented":260,"../../util/util":275,"../../util/window":254,"../marker":248}],235:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),LogoControl=function(){util.bindAll(["_updateLogo"],this)};LogoControl.prototype.onAdd=function(o){this._map=o,this._container=DOM.create("div","mapboxgl-ctrl");var t=DOM.create("a","mapboxgl-ctrl-logo");return t.target="_blank",t.href="https://www.mapbox.com/",t.setAttribute("aria-label","Mapbox logo"),this._container.appendChild(t),this._container.style.display="none",this._map.on("sourcedata",this._updateLogo),this._updateLogo(),this._container},LogoControl.prototype.onRemove=function(){DOM.remove(this._container),this._map.off("sourcedata",this._updateLogo)},LogoControl.prototype.getDefaultPosition=function(){return"bottom-left"},LogoControl.prototype._updateLogo=function(o){o&&"metadata"!==o.sourceDataType||(this._container.style.display=this._logoRequired()?"block":"none")},LogoControl.prototype._logoRequired=function(){if(this._map.style){var o=this._map.style.sourceCaches;for(var t in o){if(o[t].getSource().mapbox_logo)return!0}return!1}},module.exports=LogoControl;
},{"../../util/dom":259,"../../util/util":275}],236:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),DragRotateHandler=_dereq_("../handler/drag_rotate"),defaultOptions={showCompass:!0,showZoom:!0},NavigationControl=function(t){var o=this;this.options=util.extend({},defaultOptions,t),this._container=DOM.create("div","mapboxgl-ctrl mapboxgl-ctrl-group"),this._container.addEventListener("contextmenu",function(t){return t.preventDefault()}),this.options.showZoom&&(this._zoomInButton=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in","Zoom In",function(){return o._map.zoomIn()}),this._zoomOutButton=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out","Zoom Out",function(){return o._map.zoomOut()})),this.options.showCompass&&(util.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-compass","Reset North",function(){return o._map.resetNorth()}),this._compassArrow=DOM.create("span","mapboxgl-ctrl-compass-arrow",this._compass))};NavigationControl.prototype._rotateCompassArrow=function(){var t="rotate("+this._map.transform.angle*(180/Math.PI)+"deg)";this._compassArrow.style.transform=t},NavigationControl.prototype.onAdd=function(t){return this._map=t,this.options.showCompass&&(this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new DragRotateHandler(t,{button:"left",element:this._compass}),this._handler.enable()),this._container},NavigationControl.prototype.onRemove=function(){DOM.remove(this._container),this.options.showCompass&&(this._map.off("rotate",this._rotateCompassArrow),this._handler.disable(),delete this._handler),delete this._map},NavigationControl.prototype._createButton=function(t,o,r){var e=DOM.create("button",t,this._container);return e.type="button",e.setAttribute("aria-label",o),e.addEventListener("click",r),e},module.exports=NavigationControl;
},{"../../util/dom":259,"../../util/util":275,"../handler/drag_rotate":242}],237:[function(_dereq_,module,exports){
"use strict";function updateScale(t,e,o){var n=o&&o.maxWidth||100,i=t._container.clientHeight/2,a=getDistance(t.unproject([0,i]),t.unproject([n,i]));if(o&&"imperial"===o.unit){var l=3.2808*a;if(l>5280){setScale(e,n,l/5280,"mi")}else setScale(e,n,l,"ft")}else if(o&&"nautical"===o.unit){var r=a/1852;setScale(e,n,r,"nm")}else setScale(e,n,a,"m")}function setScale(t,e,o,n){var i=getRoundNum(o),a=i/o;"m"===n&&i>=1e3&&(i/=1e3,n="km"),t.style.width=e*a+"px",t.innerHTML=i+n}function getDistance(t,e){var o=Math.PI/180,n=t.lat*o,i=e.lat*o,a=Math.sin(n)*Math.sin(i)+Math.cos(n)*Math.cos(i)*Math.cos((e.lng-t.lng)*o);return 6371e3*Math.acos(Math.min(a,1))}function getRoundNum(t){var e=Math.pow(10,(""+Math.floor(t)).length-1),o=t/e;return o=o>=10?10:o>=5?5:o>=3?3:o>=2?2:1,e*o}var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),ScaleControl=function(t){this.options=t,util.bindAll(["_onMove"],this)};ScaleControl.prototype.getDefaultPosition=function(){return"bottom-left"},ScaleControl.prototype._onMove=function(){updateScale(this._map,this._container,this.options)},ScaleControl.prototype.onAdd=function(t){return this._map=t,this._container=DOM.create("div","mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container},ScaleControl.prototype.onRemove=function(){DOM.remove(this._container),this._map.off("move",this._onMove),this._map=void 0},module.exports=ScaleControl;
},{"../../util/dom":259,"../../util/util":275}],238:[function(_dereq_,module,exports){
"use strict";
},{}],239:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),LngLatBounds=_dereq_("../../geo/lng_lat_bounds"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),BoxZoomHandler=function(o){this._map=o,this._el=o.getCanvasContainer(),this._container=o.getContainer(),util.bindAll(["_onMouseDown","_onMouseMove","_onMouseUp","_onKeyDown"],this)};BoxZoomHandler.prototype.isEnabled=function(){return!!this._enabled},BoxZoomHandler.prototype.isActive=function(){return!!this._active},BoxZoomHandler.prototype.enable=function(){this.isEnabled()||(this._map.dragPan&&this._map.dragPan.disable(),this._el.addEventListener("mousedown",this._onMouseDown,!1),this._map.dragPan&&this._map.dragPan.enable(),this._enabled=!0)},BoxZoomHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("mousedown",this._onMouseDown),this._enabled=!1)},BoxZoomHandler.prototype._onMouseDown=function(o){o.shiftKey&&0===o.button&&(window.document.addEventListener("mousemove",this._onMouseMove,!1),window.document.addEventListener("keydown",this._onKeyDown,!1),window.document.addEventListener("mouseup",this._onMouseUp,!1),DOM.disableDrag(),this._startPos=DOM.mousePos(this._el,o),this._active=!0)},BoxZoomHandler.prototype._onMouseMove=function(o){var e=this._startPos,t=DOM.mousePos(this._el,o);this._box||(this._box=DOM.create("div","mapboxgl-boxzoom",this._container),this._container.classList.add("mapboxgl-crosshair"),this._fireEvent("boxzoomstart",o));var n=Math.min(e.x,t.x),i=Math.max(e.x,t.x),s=Math.min(e.y,t.y),a=Math.max(e.y,t.y);DOM.setTransform(this._box,"translate("+n+"px,"+s+"px)"),this._box.style.width=i-n+"px",this._box.style.height=a-s+"px"},BoxZoomHandler.prototype._onMouseUp=function(o){if(0===o.button){var e=this._startPos,t=DOM.mousePos(this._el,o),n=(new LngLatBounds).extend(this._map.unproject(e)).extend(this._map.unproject(t));this._finish(),e.x===t.x&&e.y===t.y?this._fireEvent("boxzoomcancel",o):this._map.fitBounds(n,{linear:!0}).fire("boxzoomend",{originalEvent:o,boxZoomBounds:n})}},BoxZoomHandler.prototype._onKeyDown=function(o){27===o.keyCode&&(this._finish(),this._fireEvent("boxzoomcancel",o))},BoxZoomHandler.prototype._finish=function(){this._active=!1,window.document.removeEventListener("mousemove",this._onMouseMove,!1),window.document.removeEventListener("keydown",this._onKeyDown,!1),window.document.removeEventListener("mouseup",this._onMouseUp,!1),this._container.classList.remove("mapboxgl-crosshair"),this._box&&(DOM.remove(this._box),this._box=null),DOM.enableDrag()},BoxZoomHandler.prototype._fireEvent=function(o,e){return this._map.fire(o,{originalEvent:e})},module.exports=BoxZoomHandler;
},{"../../geo/lng_lat_bounds":63,"../../util/dom":259,"../../util/util":275,"../../util/window":254}],240:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../../util/util"),DoubleClickZoomHandler=function(o){this._map=o,util.bindAll(["_onDblClick","_onZoomEnd"],this)};DoubleClickZoomHandler.prototype.isEnabled=function(){return!!this._enabled},DoubleClickZoomHandler.prototype.isActive=function(){return!!this._active},DoubleClickZoomHandler.prototype.enable=function(){this.isEnabled()||(this._map.on("dblclick",this._onDblClick),this._enabled=!0)},DoubleClickZoomHandler.prototype.disable=function(){this.isEnabled()&&(this._map.off("dblclick",this._onDblClick),this._enabled=!1)},DoubleClickZoomHandler.prototype._onDblClick=function(o){this._active=!0,this._map.on("zoomend",this._onZoomEnd),this._map.zoomTo(this._map.getZoom()+(o.originalEvent.shiftKey?-1:1),{around:o.lngLat},o)},DoubleClickZoomHandler.prototype._onZoomEnd=function(){this._active=!1,this._map.off("zoomend",this._onZoomEnd)},module.exports=DoubleClickZoomHandler;
},{"../../util/util":275}],241:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),browser=_dereq_("../../util/browser"),inertiaLinearity=.3,inertiaEasing=util.bezier(0,0,inertiaLinearity,1),inertiaMaxSpeed=1400,inertiaDeceleration=2500,DragPanHandler=function(e){this._map=e,this._el=e.getCanvasContainer(),util.bindAll(["_onDown","_onMove","_onUp","_onTouchEnd","_onMouseUp","_onDragFrame","_onDragFinished"],this)};DragPanHandler.prototype.isEnabled=function(){return!!this._enabled},DragPanHandler.prototype.isActive=function(){return!!this._active},DragPanHandler.prototype.enable=function(){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-drag-pan"),this._el.addEventListener("mousedown",this._onDown),this._el.addEventListener("touchstart",this._onDown),this._enabled=!0)},DragPanHandler.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-drag-pan"),this._el.removeEventListener("mousedown",this._onDown),this._el.removeEventListener("touchstart",this._onDown),this._enabled=!1)},DragPanHandler.prototype._onDown=function(e){this._ignoreEvent(e)||this.isActive()||(e.touches?(window.document.addEventListener("touchmove",this._onMove),window.document.addEventListener("touchend",this._onTouchEnd)):(window.document.addEventListener("mousemove",this._onMove),window.document.addEventListener("mouseup",this._onMouseUp)),window.addEventListener("blur",this._onMouseUp),this._active=!1,this._previousPos=DOM.mousePos(this._el,e),this._inertia=[[browser.now(),this._previousPos]])},DragPanHandler.prototype._onMove=function(e){if(!this._ignoreEvent(e)){this._lastMoveEvent=e,e.preventDefault();var t=DOM.mousePos(this._el,e);if(this._drainInertiaBuffer(),this._inertia.push([browser.now(),t]),!this._previousPos)return void(this._previousPos=t);this._pos=t,this.isActive()||(this._active=!0,this._map.moving=!0,this._fireEvent("dragstart",e),this._fireEvent("movestart",e),this._map._startAnimation(this._onDragFrame,this._onDragFinished)),this._map._update()}},DragPanHandler.prototype._onDragFrame=function(e){var t=this._lastMoveEvent;t&&(e.setLocationAtPoint(e.pointLocation(this._previousPos),this._pos),this._fireEvent("drag",t),this._fireEvent("move",t),this._previousPos=this._pos,delete this._lastMoveEvent)},DragPanHandler.prototype._onDragFinished=function(e){var t=this;if(this.isActive()){this._active=!1,delete this._lastMoveEvent,delete this._previousPos,delete this._pos,this._fireEvent("dragend",e),this._drainInertiaBuffer();var n=function(){t._map.moving=!1,t._fireEvent("moveend",e)},i=this._inertia;if(i.length<2)return void n();var o=i[i.length-1],r=i[0],s=o[1].sub(r[1]),a=(o[0]-r[0])/1e3;if(0===a||o[1].equals(r[1]))return void n();var h=s.mult(inertiaLinearity/a),u=h.mag();u>inertiaMaxSpeed&&(u=inertiaMaxSpeed,h._unit()._mult(u));var d=u/(inertiaDeceleration*inertiaLinearity),_=h.mult(-d/2);this._map.panBy(_,{duration:1e3*d,easing:inertiaEasing,noMoveStart:!0},{originalEvent:e})}},DragPanHandler.prototype._onUp=function(e){this._onDragFinished(e)},DragPanHandler.prototype._onMouseUp=function(e){this._ignoreEvent(e)||(this._onUp(e),window.document.removeEventListener("mousemove",this._onMove),window.document.removeEventListener("mouseup",this._onMouseUp),window.removeEventListener("blur",this._onMouseUp))},DragPanHandler.prototype._onTouchEnd=function(e){this._ignoreEvent(e)||(this._onUp(e),window.document.removeEventListener("touchmove",this._onMove),window.document.removeEventListener("touchend",this._onTouchEnd))},DragPanHandler.prototype._fireEvent=function(e,t){return this._map.fire(e,t?{originalEvent:t}:{})},DragPanHandler.prototype._ignoreEvent=function(e){var t=this._map;return!(!t.boxZoom||!t.boxZoom.isActive())||(!(!t.dragRotate||!t.dragRotate.isActive())||(e.touches?e.touches.length>1:!!e.ctrlKey||"mousemove"!==e.type&&e.button&&0!==e.button))},DragPanHandler.prototype._drainInertiaBuffer=function(){for(var e=this._inertia,t=browser.now();e.length>0&&t-e[0][0]>160;)e.shift()},module.exports=DragPanHandler;
},{"../../util/browser":252,"../../util/dom":259,"../../util/util":275,"../../util/window":254}],242:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),browser=_dereq_("../../util/browser"),inertiaLinearity=.25,inertiaEasing=util.bezier(0,0,inertiaLinearity,1),inertiaMaxSpeed=180,inertiaDeceleration=720,DragRotateHandler=function(t,e){this._map=t,this._el=e.element||t.getCanvasContainer(),this._button=e.button||"right",this._bearingSnap=e.bearingSnap||0,this._pitchWithRotate=!1!==e.pitchWithRotate,util.bindAll(["_onDown","_onMove","_onUp","_onDragFrame","_onDragFinished"],this)};DragRotateHandler.prototype.isEnabled=function(){return!!this._enabled},DragRotateHandler.prototype.isActive=function(){return!!this._active},DragRotateHandler.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("mousedown",this._onDown),this._enabled=!0)},DragRotateHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("mousedown",this._onDown),this._enabled=!1)},DragRotateHandler.prototype._onDown=function(t){if(!(this._map.boxZoom&&this._map.boxZoom.isActive()||this._map.dragPan&&this._map.dragPan.isActive()||this.isActive())){if("right"===this._button){var e=t.ctrlKey?0:2,i=t.button;if(void 0!==window.InstallTrigger&&2===t.button&&t.ctrlKey&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0&&(i=0),i!==e)return}else if(t.ctrlKey||0!==t.button)return;DOM.disableDrag(),window.document.addEventListener("mousemove",this._onMove,{capture:!0}),window.document.addEventListener("mouseup",this._onUp),window.addEventListener("blur",this._onUp),this._active=!1,this._inertia=[[browser.now(),this._map.getBearing()]],this._previousPos=DOM.mousePos(this._el,t),this._center=this._map.transform.centerPoint,t.preventDefault()}},DragRotateHandler.prototype._onMove=function(t){this._lastMoveEvent=t;var e=DOM.mousePos(this._el,t);if(!this._previousPos)return void(this._previousPos=e);this._pos=e,this.isActive()||(this._active=!0,this._map.moving=!0,this._fireEvent("rotatestart",t),this._fireEvent("movestart",t),this._pitchWithRotate&&this._fireEvent("pitchstart",t),this._map._startAnimation(this._onDragFrame,this._onDragFinished)),this._map._update()},DragRotateHandler.prototype._onUp=function(t){window.document.removeEventListener("mousemove",this._onMove,{capture:!0}),window.document.removeEventListener("mouseup",this._onUp),window.removeEventListener("blur",this._onUp),DOM.enableDrag(),this._onDragFinished(t)},DragRotateHandler.prototype._onDragFrame=function(t){var e=this._lastMoveEvent;if(e){var i=this._previousPos,n=this._pos,r=.8*(i.x-n.x),a=-.5*(i.y-n.y),o=t.bearing-r,s=t.pitch-a,h=this._inertia,_=h[h.length-1];this._drainInertiaBuffer(),h.push([browser.now(),this._map._normalizeBearing(o,_[1])]),t.bearing=o,this._pitchWithRotate&&(this._fireEvent("pitch",e),t.pitch=s),this._fireEvent("rotate",e),this._fireEvent("move",e),delete this._lastMoveEvent,this._previousPos=this._pos}},DragRotateHandler.prototype._onDragFinished=function(t){var e=this;if(this.isActive()){this._active=!1,delete this._lastMoveEvent,delete this._previousPos,this._fireEvent("rotateend",t),this._drainInertiaBuffer();var i=this._map,n=i.getBearing(),r=this._inertia,a=function(){Math.abs(n)<e._bearingSnap?i.resetNorth({noMoveStart:!0},{originalEvent:t}):(e._map.moving=!1,e._fireEvent("moveend",t)),e._pitchWithRotate&&e._fireEvent("pitchend",t)};if(r.length<2)return void a();var o=r[0],s=r[r.length-1],h=r[r.length-2],_=i._normalizeBearing(n,h[1]),v=s[1]-o[1],p=v<0?-1:1,d=(s[0]-o[0])/1e3;if(0===v||0===d)return void a();var u=Math.abs(v*(inertiaLinearity/d));u>inertiaMaxSpeed&&(u=inertiaMaxSpeed);var l=u/(inertiaDeceleration*inertiaLinearity);_+=p*u*(l/2),Math.abs(i._normalizeBearing(_,0))<this._bearingSnap&&(_=i._normalizeBearing(0,_)),i.rotateTo(_,{duration:1e3*l,easing:inertiaEasing,noMoveStart:!0},{originalEvent:t})}},DragRotateHandler.prototype._fireEvent=function(t,e){return this._map.fire(t,e?{originalEvent:e}:{})},DragRotateHandler.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=browser.now();t.length>0&&e-t[0][0]>160;)t.shift()},module.exports=DragRotateHandler;
},{"../../util/browser":252,"../../util/dom":259,"../../util/util":275,"../../util/window":254}],243:[function(_dereq_,module,exports){
"use strict";function easeOut(e){return e*(2-e)}var util=_dereq_("../../util/util"),panStep=100,bearingStep=15,pitchStep=10,KeyboardHandler=function(e){this._map=e,this._el=e.getCanvasContainer(),util.bindAll(["_onKeyDown"],this)};KeyboardHandler.prototype.isEnabled=function(){return!!this._enabled},KeyboardHandler.prototype.enable=function(){this.isEnabled()||(this._el.addEventListener("keydown",this._onKeyDown,!1),this._enabled=!0)},KeyboardHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("keydown",this._onKeyDown),this._enabled=!1)},KeyboardHandler.prototype._onKeyDown=function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=0,a=0,n=0,r=0,i=0;switch(e.keyCode){case 61:case 107:case 171:case 187:t=1;break;case 189:case 109:case 173:t=-1;break;case 37:e.shiftKey?a=-1:(e.preventDefault(),r=-1);break;case 39:e.shiftKey?a=1:(e.preventDefault(),r=1);break;case 38:e.shiftKey?n=1:(e.preventDefault(),i=-1);break;case 40:e.shiftKey?n=-1:(i=1,e.preventDefault());break;default:return}var s=this._map,o=s.getZoom(),l={duration:300,delayEndEvents:500,easing:easeOut,zoom:t?Math.round(o)+t*(e.shiftKey?2:1):o,bearing:s.getBearing()+a*bearingStep,pitch:s.getPitch()+n*pitchStep,offset:[-r*panStep,-i*panStep],center:s.getCenter()};s.easeTo(l,{originalEvent:e})}},module.exports=KeyboardHandler;
},{"../../util/util":275}],244:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),browser=_dereq_("../../util/browser"),window=_dereq_("../../util/window"),interpolate=_dereq_("../../style-spec/util/interpolate").number,LngLat=_dereq_("../../geo/lng_lat"),wheelZoomDelta=4.000244140625,defaultZoomRate=.01,wheelZoomRate=1/450,maxScalePerFrame=2,ua=window.navigator.userAgent.toLowerCase(),firefox=-1!==ua.indexOf("firefox"),safari=-1!==ua.indexOf("safari")&&-1===ua.indexOf("chrom"),ScrollZoomHandler=function(t){this._map=t,this._el=t.getCanvasContainer(),this._delta=0,util.bindAll(["_onWheel","_onTimeout","_onScrollFrame","_onScrollFinished"],this)};ScrollZoomHandler.prototype.isEnabled=function(){return!!this._enabled},ScrollZoomHandler.prototype.isActive=function(){return!!this._active},ScrollZoomHandler.prototype.enable=function(t){this.isEnabled()||(this._el.addEventListener("wheel",this._onWheel,!1),this._el.addEventListener("mousewheel",this._onWheel,!1),this._enabled=!0,this._aroundCenter=t&&"center"===t.around)},ScrollZoomHandler.prototype.disable=function(){this.isEnabled()&&(this._el.removeEventListener("wheel",this._onWheel),this._el.removeEventListener("mousewheel",this._onWheel),this._enabled=!1)},ScrollZoomHandler.prototype._onWheel=function(t){var e=0;"wheel"===t.type?(e=t.deltaY,firefox&&t.deltaMode===window.WheelEvent.DOM_DELTA_PIXEL&&(e/=browser.devicePixelRatio),t.deltaMode===window.WheelEvent.DOM_DELTA_LINE&&(e*=40)):"mousewheel"===t.type&&(e=-t.wheelDeltaY,safari&&(e/=3));var i=browser.now(),o=i-(this._lastWheelEventTime||0);this._lastWheelEventTime=i,0!==e&&e%wheelZoomDelta==0?this._type="wheel":0!==e&&Math.abs(e)<4?this._type="trackpad":o>400?(this._type=null,this._lastValue=e,this._timeout=setTimeout(this._onTimeout,40,t)):this._type||(this._type=Math.abs(o*e)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,e+=this._lastValue)),t.shiftKey&&e&&(e/=4),this._type&&(this._lastWheelEvent=t,this._delta-=e,this.isActive()||this._start(t)),t.preventDefault()},ScrollZoomHandler.prototype._onTimeout=function(t){this._type="wheel",this._delta-=this._lastValue,this.isActive()||this._start(t)},ScrollZoomHandler.prototype._start=function(t){if(this._delta){this._active=!0,this._map.moving=!0,this._map.zooming=!0,this._map.fire("movestart",{originalEvent:t}),this._map.fire("zoomstart",{originalEvent:t}),clearTimeout(this._finishTimeout);var e=DOM.mousePos(this._el,t);this._around=LngLat.convert(this._aroundCenter?this._map.getCenter():this._map.unproject(e)),this._aroundPoint=this._map.transform.locationPoint(this._around),this._map._startAnimation(this._onScrollFrame,this._onScrollFinished)}},ScrollZoomHandler.prototype._onScrollFrame=function(t){if(this.isActive()){if(0!==this._delta){var e="wheel"===this._type&&Math.abs(this._delta)>wheelZoomDelta?wheelZoomRate:defaultZoomRate,i=maxScalePerFrame/(1+Math.exp(-Math.abs(this._delta*e)));this._delta<0&&0!==i&&(i=1/i);var o="number"==typeof this._targetZoom?t.zoomScale(this._targetZoom):t.scale;this._targetZoom=Math.min(t.maxZoom,Math.max(t.minZoom,t.scaleZoom(o*i))),"wheel"===this._type&&(this._startZoom=t.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0}if("wheel"===this._type){var a=Math.min((browser.now()-this._lastWheelEventTime)/200,1),s=this._easing(a);t.zoom=interpolate(this._startZoom,this._targetZoom,s),1===a&&this._map.stop()}else t.zoom=this._targetZoom,this._map.stop();t.setLocationAtPoint(this._around,this._aroundPoint),this._map.fire("move",{originalEvent:this._lastWheelEvent}),this._map.fire("zoom",{originalEvent:this._lastWheelEvent})}},ScrollZoomHandler.prototype._onScrollFinished=function(){var t=this;this.isActive()&&(this._active=!1,this._finishTimeout=setTimeout(function(){t._map.moving=!1,t._map.zooming=!1,t._map.fire("zoomend"),t._map.fire("moveend"),delete t._targetZoom},200))},ScrollZoomHandler.prototype._smoothOutEasing=function(t){var e=util.ease;if(this._prevEase){var i=this._prevEase,o=(browser.now()-i.start)/i.duration,a=i.easing(o+.01)-i.easing(o),s=.27/Math.sqrt(a*a+1e-4)*.01,r=Math.sqrt(.0729-s*s);e=util.bezier(s,r,.25,1)}return this._prevEase={start:browser.now(),duration:t,easing:e},e},module.exports=ScrollZoomHandler;
},{"../../geo/lng_lat":62,"../../style-spec/util/interpolate":158,"../../util/browser":252,"../../util/dom":259,"../../util/util":275,"../../util/window":254}],245:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../../util/dom"),util=_dereq_("../../util/util"),window=_dereq_("../../util/window"),browser=_dereq_("../../util/browser"),inertiaLinearity=.15,inertiaEasing=util.bezier(0,0,inertiaLinearity,1),inertiaDeceleration=12,inertiaMaxSpeed=2.5,significantScaleThreshold=.15,significantRotateThreshold=10,TouchZoomRotateHandler=function(t){this._map=t,this._el=t.getCanvasContainer(),util.bindAll(["_onStart","_onMove","_onEnd"],this)};TouchZoomRotateHandler.prototype.isEnabled=function(){return!!this._enabled},TouchZoomRotateHandler.prototype.enable=function(t){this.isEnabled()||(this._el.classList.add("mapboxgl-touch-zoom-rotate"),this._el.addEventListener("touchstart",this._onStart,!1),this._enabled=!0,this._aroundCenter=t&&"center"===t.around)},TouchZoomRotateHandler.prototype.disable=function(){this.isEnabled()&&(this._el.classList.remove("mapboxgl-touch-zoom-rotate"),this._el.removeEventListener("touchstart",this._onStart),this._enabled=!1)},TouchZoomRotateHandler.prototype.disableRotation=function(){this._rotationDisabled=!0},TouchZoomRotateHandler.prototype.enableRotation=function(){this._rotationDisabled=!1},TouchZoomRotateHandler.prototype._onStart=function(t){if(2===t.touches.length){var e=DOM.mousePos(this._el,t.touches[0]),o=DOM.mousePos(this._el,t.touches[1]);this._startVec=e.sub(o),this._startScale=this._map.transform.scale,this._startBearing=this._map.transform.bearing,this._gestureIntent=void 0,this._inertia=[],window.document.addEventListener("touchmove",this._onMove,!1),window.document.addEventListener("touchend",this._onEnd,!1)}},TouchZoomRotateHandler.prototype._onMove=function(t){if(2===t.touches.length){var e=DOM.mousePos(this._el,t.touches[0]),o=DOM.mousePos(this._el,t.touches[1]),i=e.add(o).div(2),n=e.sub(o),a=n.mag()/this._startVec.mag(),r=this._rotationDisabled?0:180*n.angleWith(this._startVec)/Math.PI,s=this._map;if(this._gestureIntent){var h={duration:0,around:s.unproject(i)};"rotate"===this._gestureIntent&&(h.bearing=this._startBearing+r),"zoom"!==this._gestureIntent&&"rotate"!==this._gestureIntent||(h.zoom=s.transform.scaleZoom(this._startScale*a)),s.stop(),this._drainInertiaBuffer(),this._inertia.push([browser.now(),a,i]),s.easeTo(h,{originalEvent:t})}else{var u=Math.abs(1-a)>significantScaleThreshold;Math.abs(r)>significantRotateThreshold?this._gestureIntent="rotate":u&&(this._gestureIntent="zoom"),this._gestureIntent&&(this._startVec=n,this._startScale=s.transform.scale,this._startBearing=s.transform.bearing)}t.preventDefault()}},TouchZoomRotateHandler.prototype._onEnd=function(t){window.document.removeEventListener("touchmove",this._onMove),window.document.removeEventListener("touchend",this._onEnd),this._drainInertiaBuffer();var e=this._inertia,o=this._map;if(e.length<2)return void o.snapToNorth({},{originalEvent:t});var i=e[e.length-1],n=e[0],a=o.transform.scaleZoom(this._startScale*i[1]),r=o.transform.scaleZoom(this._startScale*n[1]),s=a-r,h=(i[0]-n[0])/1e3,u=i[2];if(0===h||a===r)return void o.snapToNorth({},{originalEvent:t});var l=s*inertiaLinearity/h;Math.abs(l)>inertiaMaxSpeed&&(l=l>0?inertiaMaxSpeed:-inertiaMaxSpeed);var d=1e3*Math.abs(l/(inertiaDeceleration*inertiaLinearity)),c=a+l*d/2e3;c<0&&(c=0),o.easeTo({zoom:c,duration:d,easing:inertiaEasing,around:this._aroundCenter?o.getCenter():o.unproject(u)},{originalEvent:t})},TouchZoomRotateHandler.prototype._drainInertiaBuffer=function(){for(var t=this._inertia,e=browser.now();t.length>2&&e-t[0][0]>160;)t.shift()},module.exports=TouchZoomRotateHandler;
},{"../../util/browser":252,"../../util/dom":259,"../../util/util":275,"../../util/window":254}],246:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("../util/util"),window=_dereq_("../util/window"),throttle=_dereq_("../util/throttle"),Hash=function(){util.bindAll(["_onHashChange","_updateHash"],this),this._updateHash=throttle(this._updateHashUnthrottled.bind(this),300)};Hash.prototype.addTo=function(t){return this._map=t,window.addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this},Hash.prototype.remove=function(){return window.removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),delete this._map,this},Hash.prototype.getHashString=function(t){var e=this._map.getCenter(),h=Math.round(100*this._map.getZoom())/100,a=Math.ceil((h*Math.LN2+Math.log(512/360/.5))/Math.LN10),n=Math.pow(10,a),i=Math.round(e.lng*n)/n,o=Math.round(e.lat*n)/n,s=this._map.getBearing(),r=this._map.getPitch(),u="";return u+=t?"#/"+i+"/"+o+"/"+h:"#"+h+"/"+o+"/"+i,(s||r)&&(u+="/"+Math.round(10*s)/10),r&&(u+="/"+Math.round(r)),u},Hash.prototype._onHashChange=function(){var t=window.location.hash.replace("#","").split("/");return t.length>=3&&(this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:+(t[3]||0),pitch:+(t[4]||0)}),!0)},Hash.prototype._updateHashUnthrottled=function(){var t=this.getHashString();window.history.replaceState("","",t)},module.exports=Hash;
},{"../util/throttle":272,"../util/util":275,"../util/window":254}],247:[function(_dereq_,module,exports){
"use strict";function removeNode(t){t.parentNode&&t.parentNode.removeChild(t)}var util=_dereq_("../util/util"),browser=_dereq_("../util/browser"),window=_dereq_("../util/window"),ref=_dereq_("../util/window"),HTMLImageElement=ref.HTMLImageElement,HTMLElement=ref.HTMLElement,DOM=_dereq_("../util/dom"),ajax=_dereq_("../util/ajax"),Style=_dereq_("../style/style"),EvaluationParameters=_dereq_("../style/evaluation_parameters"),Painter=_dereq_("../render/painter"),Transform=_dereq_("../geo/transform"),Hash=_dereq_("./hash"),bindHandlers=_dereq_("./bind_handlers"),Camera=_dereq_("./camera"),LngLat=_dereq_("../geo/lng_lat"),LngLatBounds=_dereq_("../geo/lng_lat_bounds"),Point=_dereq_("@mapbox/point-geometry"),AttributionControl=_dereq_("./control/attribution_control"),LogoControl=_dereq_("./control/logo_control"),isSupported=_dereq_("@mapbox/mapbox-gl-supported"),ref$1=_dereq_("../util/image"),RGBAImage=ref$1.RGBAImage;_dereq_("./events");var defaultMinZoom=0,defaultMaxZoom=22,defaultOptions={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:defaultMinZoom,maxZoom:defaultMaxZoom,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,bearingSnap:7,hash:!1,attributionControl:!0,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,transformRequest:null,fadeDuration:300},Map=function(t){function e(e){if(e=util.extend({},defaultOptions,e),null!=e.minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than minZoom");var r=new Transform(e.minZoom,e.maxZoom,e.renderWorldCopies);t.call(this,r,e),this._interactive=e.interactive,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming;var o=e.transformRequest;if(this._transformRequest=o?function(t,e){return o(t,e)||{url:t}}:function(t){return{url:t}},"string"==typeof e.container){var i=window.document.getElementById(e.container);if(!i)throw new Error("Container '"+e.container+"' not found.");this._container=i}else{if(!(e.container instanceof HTMLElement))throw new Error("Invalid type: 'container' must be a String or HTMLElement.");this._container=e.container}e.maxBounds&&this.setMaxBounds(e.maxBounds),util.bindAll(["_onWindowOnline","_onWindowResize","_contextLost","_contextRestored","_update","_render","_onData","_onDataLoading"],this),this._setupContainer(),this._setupPainter(),this.on("move",this._update.bind(this,!1)),this.on("zoom",this._update.bind(this,!0)),void 0!==window&&(window.addEventListener("online",this._onWindowOnline,!1),window.addEventListener("resize",this._onWindowResize,!1)),bindHandlers(this,e),this._hash=e.hash&&(new Hash).addTo(this),this._hash&&this._hash._onHashChange()||this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),this.resize(),e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new AttributionControl),this.addControl(new LogoControl,e.logoPosition),this.on("style.load",function(){this.transform.unmodified&&this.jumpTo(this.style.stylesheet)}),this.on("data",this._onData),this.on("dataloading",this._onDataLoading)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={showTileBoundaries:{},showCollisionBoxes:{},showOverdrawInspector:{},repaint:{},vertices:{}};return e.prototype.addControl=function(t,e){void 0===e&&t.getDefaultPosition&&(e=t.getDefaultPosition()),void 0===e&&(e="top-right");var r=t.onAdd(this),o=this._controlPositions[e];return-1!==e.indexOf("bottom")?o.insertBefore(r,o.firstChild):o.appendChild(r),this},e.prototype.removeControl=function(t){return t.onRemove(this),this},e.prototype.resize=function(){var t=this._containerDimensions(),e=t[0],r=t[1];return this._resizeCanvas(e,r),this.transform.resize(e,r),this.painter.resize(e,r),this.fire("movestart").fire("move").fire("resize").fire("moveend")},e.prototype.getBounds=function(){var t=new LngLatBounds(this.transform.pointLocation(new Point(0,this.transform.height)),this.transform.pointLocation(new Point(this.transform.width,0)));return(this.transform.angle||this.transform.pitch)&&(t.extend(this.transform.pointLocation(new Point(this.transform.size.x,0))),t.extend(this.transform.pointLocation(new Point(0,this.transform.size.y)))),t},e.prototype.getMaxBounds=function(){return this.transform.latRange&&2===this.transform.latRange.length&&this.transform.lngRange&&2===this.transform.lngRange.length?new LngLatBounds([this.transform.lngRange[0],this.transform.latRange[0]],[this.transform.lngRange[1],this.transform.latRange[1]]):null},e.prototype.setMaxBounds=function(t){if(t){var e=LngLatBounds.convert(t);this.transform.lngRange=[e.getWest(),e.getEast()],this.transform.latRange=[e.getSouth(),e.getNorth()],this.transform._constrain(),this._update()}else null!==t&&void 0!==t||(this.transform.lngRange=null,this.transform.latRange=null,this._update());return this},e.prototype.setMinZoom=function(t){if((t=null===t||void 0===t?defaultMinZoom:t)>=defaultMinZoom&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this;throw new Error("minZoom must be between "+defaultMinZoom+" and the current maxZoom, inclusive")},e.prototype.getMinZoom=function(){return this.transform.minZoom},e.prototype.setMaxZoom=function(t){if((t=null===t||void 0===t?defaultMaxZoom:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this;throw new Error("maxZoom must be greater than the current minZoom")},e.prototype.getMaxZoom=function(){return this.transform.maxZoom},e.prototype.project=function(t){return this.transform.locationPoint(LngLat.convert(t))},e.prototype.unproject=function(t){return this.transform.pointLocation(Point.convert(t))},e.prototype.on=function(e,r,o){var i=this;if(void 0===o)return t.prototype.on.call(this,e,r);var n=function(){if("mouseenter"===e||"mouseover"===e){var t=!1;return{layer:r,listener:o,delegates:{mousemove:function(n){var s=i.getLayer(r)?i.queryRenderedFeatures(n.point,{layers:[r]}):[];s.length?t||(t=!0,o.call(i,util.extend({features:s},n,{type:e}))):t=!1},mouseout:function(){t=!1}}}}if("mouseleave"===e||"mouseout"===e){var n=!1;return{layer:r,listener:o,delegates:{mousemove:function(t){(i.getLayer(r)?i.queryRenderedFeatures(t.point,{layers:[r]}):[]).length?n=!0:n&&(n=!1,o.call(i,util.extend({},t,{type:e})))},mouseout:function(t){n&&(n=!1,o.call(i,util.extend({},t,{type:e})))}}}}var s=function(t){var e=i.getLayer(r)?i.queryRenderedFeatures(t.point,{layers:[r]}):[];e.length&&o.call(i,util.extend({features:e},t))};return{layer:r,listener:o,delegates:(a={},a[e]=s,a)};var a}();this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[e]=this._delegatedListeners[e]||[],this._delegatedListeners[e].push(n);for(var s in n.delegates)i.on(s,n.delegates[s]);return this},e.prototype.off=function(e,r,o){var i=this;if(void 0===o)return t.prototype.off.call(this,e,r);if(this._delegatedListeners&&this._delegatedListeners[e])for(var n=this._delegatedListeners[e],s=0;s<n.length;s++){var a=n[s];if(a.layer===r&&a.listener===o){for(var h in a.delegates)i.off(h,a.delegates[h]);return n.splice(s,1),i}}return this},e.prototype.queryRenderedFeatures=function(t,e){return 2===arguments.length?(t=arguments[0],e=arguments[1]):1===arguments.length&&function(t){return t instanceof Point||Array.isArray(t)}(arguments[0])?(t=arguments[0],e={}):1===arguments.length?(t=void 0,e=arguments[0]):(t=void 0,e={}),this.style?this.style.queryRenderedFeatures(this._makeQueryGeometry(t),e,this.transform.zoom,this.transform.angle):[]},e.prototype._makeQueryGeometry=function(t){var e=this;void 0===t&&(t=[Point.convert([0,0]),Point.convert([this.transform.width,this.transform.height])]);var r;if(t instanceof Point||"number"==typeof t[0]){r=[Point.convert(t)]}else{var o=[Point.convert(t[0]),Point.convert(t[1])];r=[o[0],new Point(o[1].x,o[0].y),o[1],new Point(o[0].x,o[1].y),o[0]]}return r=r.map(function(t){return e.transform.pointCoordinate(t)})},e.prototype.querySourceFeatures=function(t,e){return this.style.querySourceFeatures(t,e)},e.prototype.setStyle=function(t,e){if((!e||!1!==e.diff&&!e.localIdeographFontFamily)&&this.style&&t&&"object"==typeof t)try{return this.style.setState(t)&&this._update(!0),this}catch(t){util.warnOnce("Unable to perform style diff: "+(t.message||t.error||t)+".  Rebuilding the style from scratch.")}return this.style&&(this.style.setEventedParent(null),this.style._remove()),t?(this.style=new Style(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t):this.style.loadJSON(t),this):(delete this.style,this)},e.prototype.getStyle=function(){if(this.style)return this.style.serialize()},e.prototype.isStyleLoaded=function(){return this.style?this.style.loaded():util.warnOnce("There is no style added to the map.")},e.prototype.addSource=function(t,e){return this.style.addSource(t,e),this._update(!0),this},e.prototype.isSourceLoaded=function(t){var e=this.style&&this.style.sourceCaches[t];return void 0===e?void this.fire("error",{error:new Error("There is no source with ID '"+t+"'")}):e.loaded()},e.prototype.areTilesLoaded=function(){var t=this.style&&this.style.sourceCaches;for(var e in t){var r=t[e],o=r._tiles;for(var i in o){var n=o[i];if("loaded"!==n.state&&"errored"!==n.state)return!1}}return!0},e.prototype.addSourceType=function(t,e,r){return this.style.addSourceType(t,e,r)},e.prototype.removeSource=function(t){return this.style.removeSource(t),this._update(!0),this},e.prototype.getSource=function(t){return this.style.getSource(t)},e.prototype.addImage=function(t,e,r){void 0===r&&(r={});var o=r.pixelRatio;void 0===o&&(o=1);var i=r.sdf;if(void 0===i&&(i=!1),e instanceof HTMLImageElement){var n=browser.getImageData(e),s=n.width,a=n.height,h=n.data;this.style.addImage(t,{data:new RGBAImage({width:s,height:a},h),pixelRatio:o,sdf:i})}else{if(void 0===e.width||void 0===e.height)return this.fire("error",{error:new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")});var l=e.width,u=e.height,d=e.data;this.style.addImage(t,{data:new RGBAImage({width:l,height:u},d.slice(0)),pixelRatio:o,sdf:i})}},e.prototype.hasImage=function(t){return t?!!this.style.getImage(t):(this.fire("error",{error:new Error("Missing required image id")}),!1)},e.prototype.removeImage=function(t){this.style.removeImage(t)},e.prototype.loadImage=function(t,e){ajax.getImage(this._transformRequest(t,ajax.ResourceType.Image),e)},e.prototype.addLayer=function(t,e){return this.style.addLayer(t,e),this._update(!0),this},e.prototype.moveLayer=function(t,e){return this.style.moveLayer(t,e),this._update(!0),this},e.prototype.removeLayer=function(t){return this.style.removeLayer(t),this._update(!0),this},e.prototype.getLayer=function(t){return this.style.getLayer(t)},e.prototype.setFilter=function(t,e){return this.style.setFilter(t,e),this._update(!0),this},e.prototype.setLayerZoomRange=function(t,e,r){return this.style.setLayerZoomRange(t,e,r),this._update(!0),this},e.prototype.getFilter=function(t){return this.style.getFilter(t)},e.prototype.setPaintProperty=function(t,e,r){return this.style.setPaintProperty(t,e,r),this._update(!0),this},e.prototype.getPaintProperty=function(t,e){return this.style.getPaintProperty(t,e)},e.prototype.setLayoutProperty=function(t,e,r){return this.style.setLayoutProperty(t,e,r),this._update(!0),this},e.prototype.getLayoutProperty=function(t,e){return this.style.getLayoutProperty(t,e)},e.prototype.setLight=function(t){return this.style.setLight(t),this._update(!0),this},e.prototype.getLight=function(){return this.style.getLight()},e.prototype.getContainer=function(){return this._container},e.prototype.getCanvasContainer=function(){return this._canvasContainer},e.prototype.getCanvas=function(){return this._canvas},e.prototype._containerDimensions=function(){var t=0,e=0;return this._container&&(t=this._container.offsetWidth||400,e=this._container.offsetHeight||300),[t,e]},e.prototype._setupContainer=function(){var t=this._container;t.classList.add("mapboxgl-map"),(this._missingCSSContainer=DOM.create("div","mapboxgl-missing-css",t)).innerHTML="Missing Mapbox GL JS CSS";var e=this._canvasContainer=DOM.create("div","mapboxgl-canvas-container",t);this._interactive&&e.classList.add("mapboxgl-interactive"),this._canvas=DOM.create("canvas","mapboxgl-canvas",e),this._canvas.style.position="absolute",this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map");var r=this._containerDimensions();this._resizeCanvas(r[0],r[1]);var o=this._controlContainer=DOM.create("div","mapboxgl-control-container",t),i=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach(function(t){i[t]=DOM.create("div","mapboxgl-ctrl-"+t,o)})},e.prototype._resizeCanvas=function(t,e){var r=window.devicePixelRatio||1;this._canvas.width=r*t,this._canvas.height=r*e,this._canvas.style.width=t+"px",this._canvas.style.height=e+"px"},e.prototype._setupPainter=function(){var t=util.extend({failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer},isSupported.webGLContextAttributes),e=this._canvas.getContext("webgl",t)||this._canvas.getContext("experimental-webgl",t);if(!e)return void this.fire("error",{error:new Error("Failed to initialize WebGL")});this.painter=new Painter(e,this.transform)},e.prototype._contextLost=function(t){t.preventDefault(),this._frameId&&(browser.cancelFrame(this._frameId),this._frameId=null),this.fire("webglcontextlost",{originalEvent:t})},e.prototype._contextRestored=function(t){this._setupPainter(),this.resize(),this._update(),this.fire("webglcontextrestored",{originalEvent:t})},e.prototype.loaded=function(){return!this._styleDirty&&!this._sourcesDirty&&!(!this.style||!this.style.loaded())},e.prototype._update=function(t){this.style&&(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this._rerender())},e.prototype._render=function(){this._updateCamera();var t=!1;if(this.style&&this._styleDirty){this._styleDirty=!1;var e=this.transform.zoom,r=browser.now();this.style.zoomHistory.update(e,r);var o=new EvaluationParameters(e,{now:r,fadeDuration:this._fadeDuration,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),i=o.crossFadingFactor();1===i&&i===this._crossFadingFactor||(t=!0,this._crossFadingFactor=i),this.style.update(o)}return this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,this._fadeDuration),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.rotating,zooming:this.zooming,fadeDuration:this._fadeDuration}),this.fire("render"),this.loaded()&&!this._loaded&&(this._loaded=!0,this.fire("load")),this.style&&(this.style.hasTransitions()||t)&&(this._styleDirty=!0),(this._sourcesDirty||this._repaint||this._styleDirty||this._placementDirty)&&this._rerender(),this},e.prototype.remove=function(){this._hash&&this._hash.remove(),browser.cancelFrame(this._frameId),this._frameId=null,this.setStyle(null),void 0!==window&&(window.removeEventListener("resize",this._onWindowResize,!1),window.removeEventListener("online",this._onWindowOnline,!1));var t=this.painter.context.gl.getExtension("WEBGL_lose_context");t&&t.loseContext(),removeNode(this._canvasContainer),removeNode(this._controlContainer),removeNode(this._missingCSSContainer),this._container.classList.remove("mapboxgl-map"),this.fire("remove")},e.prototype._rerender=function(){var t=this;this.style&&!this._frameId&&(this._frameId=browser.frame(function(){t._frameId=null,t._render()}))},e.prototype._onWindowOnline=function(){this._update()},e.prototype._onWindowResize=function(){this._trackResize&&this.stop().resize()._update()},r.showTileBoundaries.get=function(){return!!this._showTileBoundaries},r.showTileBoundaries.set=function(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update())},r.showCollisionBoxes.get=function(){return!!this._showCollisionBoxes},r.showCollisionBoxes.set=function(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update())},r.showOverdrawInspector.get=function(){return!!this._showOverdrawInspector},r.showOverdrawInspector.set=function(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update())},r.repaint.get=function(){return!!this._repaint},r.repaint.set=function(t){this._repaint=t,this._update()},r.vertices.get=function(){return!!this._vertices},r.vertices.set=function(t){this._vertices=t,this._update()},e.prototype._onData=function(t){this._update("style"===t.dataType),this.fire(t.dataType+"data",t)},e.prototype._onDataLoading=function(t){this.fire(t.dataType+"dataloading",t)},Object.defineProperties(e.prototype,r),e}(Camera);module.exports=Map;
},{"../geo/lng_lat":62,"../geo/lng_lat_bounds":63,"../geo/transform":64,"../render/painter":90,"../style/evaluation_parameters":182,"../style/style":190,"../util/ajax":251,"../util/browser":252,"../util/dom":259,"../util/image":263,"../util/util":275,"../util/window":254,"./bind_handlers":230,"./camera":231,"./control/attribution_control":232,"./control/logo_control":235,"./events":238,"./hash":246,"@mapbox/mapbox-gl-supported":3,"@mapbox/point-geometry":4}],248:[function(_dereq_,module,exports){
"use strict";var DOM=_dereq_("../util/dom"),LngLat=_dereq_("../geo/lng_lat"),Point=_dereq_("@mapbox/point-geometry"),smartWrap=_dereq_("../util/smart_wrap"),ref=_dereq_("../util/util"),bindAll=ref.bindAll,Marker=function(t,e){if(bindAll(["_update","_onMapClick"],this),!t){t=DOM.create("div");var r=DOM.createNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS(null,"height","41px"),r.setAttributeNS(null,"width","27px"),r.setAttributeNS(null,"viewBox","0 0 27 41");var i=DOM.createNS("http://www.w3.org/2000/svg","g");i.setAttributeNS(null,"stroke","none"),i.setAttributeNS(null,"stroke-width","1"),i.setAttributeNS(null,"fill","none"),i.setAttributeNS(null,"fill-rule","evenodd");var s=DOM.createNS("http://www.w3.org/2000/svg","g");s.setAttributeNS(null,"fill-rule","nonzero");var p=DOM.createNS("http://www.w3.org/2000/svg","g");p.setAttributeNS(null,"transform","translate(3.0, 29.0)"),p.setAttributeNS(null,"fill","#000000");for(var n=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}],l=0,o=n;l<o.length;l+=1){var a=o[l],u=DOM.createNS("http://www.w3.org/2000/svg","ellipse");u.setAttributeNS(null,"opacity","0.04"),u.setAttributeNS(null,"cx","10.5"),u.setAttributeNS(null,"cy","5.80029008"),u.setAttributeNS(null,"rx",a.rx),u.setAttributeNS(null,"ry",a.ry),p.appendChild(u)}var h=DOM.createNS("http://www.w3.org/2000/svg","g");h.setAttributeNS(null,"fill","#3FB1CE");var _=DOM.createNS("http://www.w3.org/2000/svg","path");_.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),h.appendChild(_);var g=DOM.createNS("http://www.w3.org/2000/svg","g");g.setAttributeNS(null,"opacity","0.25"),g.setAttributeNS(null,"fill","#000000");var f=DOM.createNS("http://www.w3.org/2000/svg","path");f.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),g.appendChild(f);var d=DOM.createNS("http://www.w3.org/2000/svg","g");d.setAttributeNS(null,"transform","translate(6.0, 7.0)"),d.setAttributeNS(null,"fill","#FFFFFF");var w=DOM.createNS("http://www.w3.org/2000/svg","g");w.setAttributeNS(null,"transform","translate(8.0, 8.0)");var c=DOM.createNS("http://www.w3.org/2000/svg","circle");c.setAttributeNS(null,"fill","#000000"),c.setAttributeNS(null,"opacity","0.25"),c.setAttributeNS(null,"cx","5.5"),c.setAttributeNS(null,"cy","5.5"),c.setAttributeNS(null,"r","5.4999962");var v=DOM.createNS("http://www.w3.org/2000/svg","circle");v.setAttributeNS(null,"fill","#FFFFFF"),v.setAttributeNS(null,"cx","5.5"),v.setAttributeNS(null,"cy","5.5"),v.setAttributeNS(null,"r","5.4999962"),w.appendChild(c),w.appendChild(v),s.appendChild(p),s.appendChild(h),s.appendChild(g),s.appendChild(d),s.appendChild(w),r.appendChild(s),t.appendChild(r);var m=[0,-14];e&&e.offset||(e?e.offset=m:e={offset:m})}this._offset=Point.convert(e&&e.offset||[0,0]),t.classList.add("mapboxgl-marker"),this._element=t,this._popup=null};Marker.prototype.addTo=function(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this._update(),this._map.on("click",this._onMapClick),this},Marker.prototype.remove=function(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),delete this._map),DOM.remove(this._element),this._popup&&this._popup.remove(),this},Marker.prototype.getLngLat=function(){return this._lngLat},Marker.prototype.setLngLat=function(t){return this._lngLat=LngLat.convert(t),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this},Marker.prototype.getElement=function(){return this._element},Marker.prototype.setPopup=function(t){return this._popup&&(this._popup.remove(),this._popup=null),t&&("offset"in t.options||(t.options.offset=this._offset),this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat)),this},Marker.prototype._onMapClick=function(t){var e=t.originalEvent.target,r=this._element;this._popup&&(e===r||r.contains(e))&&this.togglePopup()},Marker.prototype.getPopup=function(){return this._popup},Marker.prototype.togglePopup=function(){var t=this._popup;return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this},Marker.prototype._update=function(t){this._map&&(this._map.transform.renderWorldCopies&&(this._lngLat=smartWrap(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset),t&&"moveend"!==t.type||(this._pos=this._pos.round()),DOM.setTransform(this._element,"translate(-50%, -50%) translate("+this._pos.x+"px, "+this._pos.y+"px)"))},Marker.prototype.getOffset=function(){return this._offset},Marker.prototype.setOffset=function(t){return this._offset=Point.convert(t),this._update(),this},module.exports=Marker;
},{"../geo/lng_lat":62,"../util/dom":259,"../util/smart_wrap":270,"../util/util":275,"@mapbox/point-geometry":4}],249:[function(_dereq_,module,exports){
"use strict";function normalizeOffset(t){if(t){if("number"==typeof t){var o=Math.round(Math.sqrt(.5*Math.pow(t,2)));return{top:new Point(0,t),"top-left":new Point(o,o),"top-right":new Point(-o,o),bottom:new Point(0,-t),"bottom-left":new Point(o,-o),"bottom-right":new Point(-o,-o),left:new Point(t,0),right:new Point(-t,0)}}if(t instanceof Point||Array.isArray(t)){var e=Point.convert(t);return{top:e,"top-left":e,"top-right":e,bottom:e,"bottom-left":e,"bottom-right":e,left:e,right:e}}return{top:Point.convert(t.top||[0,0]),"top-left":Point.convert(t["top-left"]||[0,0]),"top-right":Point.convert(t["top-right"]||[0,0]),bottom:Point.convert(t.bottom||[0,0]),"bottom-left":Point.convert(t["bottom-left"]||[0,0]),"bottom-right":Point.convert(t["bottom-right"]||[0,0]),left:Point.convert(t.left||[0,0]),right:Point.convert(t.right||[0,0])}}return normalizeOffset(new Point(0,0))}var util=_dereq_("../util/util"),Evented=_dereq_("../util/evented"),DOM=_dereq_("../util/dom"),LngLat=_dereq_("../geo/lng_lat"),Point=_dereq_("@mapbox/point-geometry"),window=_dereq_("../util/window"),smartWrap=_dereq_("../util/smart_wrap"),defaultOptions={closeButton:!0,closeOnClick:!0},Popup=function(t){function o(o){t.call(this),this.options=util.extend(Object.create(defaultOptions),o),util.bindAll(["_update","_onClickClose"],this)}return t&&(o.__proto__=t),o.prototype=Object.create(t&&t.prototype),o.prototype.constructor=o,o.prototype.addTo=function(t){return this._map=t,this._map.on("move",this._update),this.options.closeOnClick&&this._map.on("click",this._onClickClose),this._update(),this},o.prototype.isOpen=function(){return!!this._map},o.prototype.remove=function(){return this._content&&DOM.remove(this._content),this._container&&(DOM.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("click",this._onClickClose),delete this._map),this.fire("close"),this},o.prototype.getLngLat=function(){return this._lngLat},o.prototype.setLngLat=function(t){return this._lngLat=LngLat.convert(t),this._pos=null,this._update(),this},o.prototype.setText=function(t){return this.setDOMContent(window.document.createTextNode(t))},o.prototype.setHTML=function(t){var o,e=window.document.createDocumentFragment(),n=window.document.createElement("body");for(n.innerHTML=t;;){if(!(o=n.firstChild))break;e.appendChild(o)}return this.setDOMContent(e)},o.prototype.setDOMContent=function(t){return this._createContent(),this._content.appendChild(t),this._update(),this},o.prototype._createContent=function(){this._content&&DOM.remove(this._content),this._content=DOM.create("div","mapboxgl-popup-content",this._container),this.options.closeButton&&(this._closeButton=DOM.create("button","mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClickClose))},o.prototype._update=function(){if(this._map&&this._lngLat&&this._content){this._container||(this._container=DOM.create("div","mapboxgl-popup",this._map.getContainer()),this._tip=DOM.create("div","mapboxgl-popup-tip",this._container),this._container.appendChild(this._content)),this._map.transform.renderWorldCopies&&(this._lngLat=smartWrap(this._lngLat,this._pos,this._map.transform));var t=this._pos=this._map.project(this._lngLat),o=this.options.anchor,e=normalizeOffset(this.options.offset);if(!o){var n=this._container.offsetWidth,i=this._container.offsetHeight;o=t.y+e.bottom.y<i?["top"]:t.y>this._map.transform.height-i?["bottom"]:[],t.x<n/2?o.push("left"):t.x>this._map.transform.width-n/2&&o.push("right"),o=0===o.length?"bottom":o.join("-")}var r=t.add(e[o]).round(),s={top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"},p=this._container.classList;for(var a in s)p.remove("mapboxgl-popup-anchor-"+a);p.add("mapboxgl-popup-anchor-"+o),DOM.setTransform(this._container,s[o]+" translate("+r.x+"px,"+r.y+"px)")}},o.prototype._onClickClose=function(){this.remove()},o}(Evented);module.exports=Popup;
},{"../geo/lng_lat":62,"../util/dom":259,"../util/evented":260,"../util/smart_wrap":270,"../util/util":275,"../util/window":254,"@mapbox/point-geometry":4}],250:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("./util"),ref=_dereq_("./web_worker_transfer"),serialize=ref.serialize,deserialize=ref.deserialize,Actor=function(e,t,r){this.target=e,this.parent=t,this.mapId=r,this.callbacks={},this.callbackID=0,util.bindAll(["receive"],this),this.target.addEventListener("message",this.receive,!1)};Actor.prototype.send=function(e,t,r,i){var a=r?this.mapId+":"+this.callbackID++:null;r&&(this.callbacks[a]=r);var s=[];this.target.postMessage({targetMapId:i,sourceMapId:this.mapId,type:e,id:String(a),data:serialize(t,s)},s)},Actor.prototype.receive=function(e){var t,r=this,i=e.data,a=i.id;if(!i.targetMapId||this.mapId===i.targetMapId){var s=function(e,t){var i=[];r.target.postMessage({sourceMapId:r.mapId,type:"<response>",id:String(a),error:e?String(e):null,data:serialize(t,i)},i)};if("<response>"===i.type)t=this.callbacks[i.id],delete this.callbacks[i.id],t&&i.error?t(new Error(i.error)):t&&t(null,deserialize(i.data));else if(void 0!==i.id&&this.parent[i.type])this.parent[i.type](i.sourceMapId,deserialize(i.data),s);else if(void 0!==i.id&&this.parent.getWorkerSource){var d=i.type.split("."),l=this.parent.getWorkerSource(i.sourceMapId,d[0]);l[d[1]](deserialize(i.data),s)}else this.parent[i.type](deserialize(i.data))}},Actor.prototype.remove=function(){this.target.removeEventListener("message",this.receive,!1)},module.exports=Actor;
},{"./util":275,"./web_worker_transfer":278}],251:[function(_dereq_,module,exports){
"use strict";function makeRequest(e){var t=new window.XMLHttpRequest;t.open("GET",e.url,!0);for(var r in e.headers)t.setRequestHeader(r,e.headers[r]);return t.withCredentials="include"===e.credentials,t}function sameOrigin(e){var t=window.document.createElement("a");return t.href=e,t.protocol===window.document.location.protocol&&t.host===window.document.location.host}var window=_dereq_("./window"),ResourceType={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};exports.ResourceType=ResourceType,"function"==typeof Object.freeze&&Object.freeze(ResourceType);var AJAXError=function(e){function t(t,r){e.call(this,t),this.status=r}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(Error);exports.getJSON=function(e,t){var r=makeRequest(e);return r.setRequestHeader("Accept","application/json"),r.onerror=function(){t(new Error(r.statusText))},r.onload=function(){if(r.status>=200&&r.status<300&&r.response){var e;try{e=JSON.parse(r.response)}catch(e){return t(e)}t(null,e)}else t(new AJAXError(r.statusText,r.status))},r.send(),r},exports.getArrayBuffer=function(e,t){var r=makeRequest(e);return r.responseType="arraybuffer",r.onerror=function(){t(new Error(r.statusText))},r.onload=function(){var e=r.response;if(0===e.byteLength&&200===r.status)return t(new Error("http status 200 returned without content."));r.status>=200&&r.status<300&&r.response?t(null,{data:e,cacheControl:r.getResponseHeader("Cache-Control"),expires:r.getResponseHeader("Expires")}):t(new AJAXError(r.statusText,r.status))},r.send(),r};var transparentPngUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";exports.getImage=function(e,t){return exports.getArrayBuffer(e,function(e,r){if(e)t(e);else if(r){var n=new window.Image,o=window.URL||window.webkitURL;n.onload=function(){t(null,n),o.revokeObjectURL(n.src)};var s=new window.Blob([new Uint8Array(r.data)],{type:"image/png"});n.cacheControl=r.cacheControl,n.expires=r.expires,n.src=r.data.byteLength?o.createObjectURL(s):transparentPngUrl}})},exports.getVideo=function(e,t){var r=window.document.createElement("video");r.onloadstart=function(){t(null,r)};for(var n=0;n<e.length;n++){var o=window.document.createElement("source");sameOrigin(e[n])||(r.crossOrigin="Anonymous"),o.src=e[n],r.appendChild(o)}return r};
},{"./window":254}],252:[function(_dereq_,module,exports){
"use strict";var window=_dereq_("./window"),now=window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now.bind(Date),frame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,cancel=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame;module.exports={now:now,frame:function(e){return frame(e)},cancelFrame:function(e){return cancel(e)},getImageData:function(e){var n=window.document.createElement("canvas"),t=n.getContext("2d");if(!t)throw new Error("failed to create canvas 2d context");return n.width=e.width,n.height=e.height,t.drawImage(e,0,0,e.width,e.height),t.getImageData(0,0,e.width,e.height)},hardwareConcurrency:window.navigator.hardwareConcurrency||4,get devicePixelRatio(){return window.devicePixelRatio},supportsWebp:!1};var webpImgTest=window.document.createElement("img");webpImgTest.onload=function(){module.exports.supportsWebp=!0},webpImgTest.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";
},{"./window":254}],253:[function(_dereq_,module,exports){
"use strict";var WebWorkify=_dereq_("webworkify"),window=_dereq_("../window"),workerURL=window.URL.createObjectURL(new WebWorkify(_dereq_("../../source/worker"),{bare:!0}));module.exports=function(){return new window.Worker(workerURL)};
},{"../../source/worker":118,"../window":254,"webworkify":36}],254:[function(_dereq_,module,exports){
"use strict";module.exports=self;
},{}],255:[function(_dereq_,module,exports){
"use strict";function compareAreas(e,r){return r.area-e.area}var quickselect=_dereq_("quickselect"),calculateSignedArea=_dereq_("./util").calculateSignedArea;module.exports=function(e,r){var a=e.length;if(a<=1)return[e];for(var t,u,c=[],i=0;i<a;i++){var l=calculateSignedArea(e[i]);0!==l&&(e[i].area=Math.abs(l),void 0===u&&(u=l<0),u===l<0?(t&&c.push(t),t=[e[i]]):t.push(e[i]))}if(t&&c.push(t),r>1)for(var n=0;n<c.length;n++)c[n].length<=r||(quickselect(c[n],r,1,c[n].length-1,compareAreas),c[n]=c[n].slice(0,r));return c};
},{"./util":275,"quickselect":31}],256:[function(_dereq_,module,exports){
"use strict";var config={API_URL:"https://api.mapbox.com",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null};module.exports=config;
},{}],257:[function(_dereq_,module,exports){
"use strict";var DictionaryCoder=function(r){var t=this;this._stringToNumber={},this._numberToString=[];for(var o=0;o<r.length;o++){var i=r[o];t._stringToNumber[i]=o,t._numberToString[o]=i}};DictionaryCoder.prototype.encode=function(r){return this._stringToNumber[r]},DictionaryCoder.prototype.decode=function(r){return this._numberToString[r]},module.exports=DictionaryCoder;
},{}],258:[function(_dereq_,module,exports){
"use strict";var util=_dereq_("./util"),Actor=_dereq_("./actor"),Dispatcher=function(t,r){var o=this;this.workerPool=t,this.actors=[],this.currentActor=0,this.id=util.uniqueId();for(var i=this.workerPool.acquire(this.id),e=0;e<i.length;e++){var s=i[e],c=new Actor(s,r,o.id);c.name="Worker "+e,o.actors.push(c)}};Dispatcher.prototype.broadcast=function(t,r,o){o=o||function(){},util.asyncAll(this.actors,function(o,i){o.send(t,r,i)},o)},Dispatcher.prototype.send=function(t,r,o,i){return("number"!=typeof i||isNaN(i))&&(i=this.currentActor=(this.currentActor+1)%this.actors.length),this.actors[i].send(t,r,o),i},Dispatcher.prototype.remove=function(){this.actors.forEach(function(t){t.remove()}),this.actors=[],this.workerPool.release(this.id)},module.exports=Dispatcher;
},{"./actor":250,"./util":275}],259:[function(_dereq_,module,exports){
"use strict";function testProp(e){for(var t=0;t<e.length;t++)if(e[t]in docStyle)return e[t];return e[0]}var Point=_dereq_("@mapbox/point-geometry"),window=_dereq_("./window");exports.create=function(e,t,n){var o=window.document.createElement(e);return t&&(o.className=t),n&&n.appendChild(o),o},exports.createNS=function(e,t){return window.document.createElementNS(e,t)};var docStyle=window.document.documentElement.style,selectProp=testProp(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]),userSelect;exports.disableDrag=function(){selectProp&&(userSelect=docStyle[selectProp],docStyle[selectProp]="none")},exports.enableDrag=function(){selectProp&&(docStyle[selectProp]=userSelect)};var transformProp=testProp(["transform","WebkitTransform"]);exports.setTransform=function(e,t){e.style[transformProp]=t};var suppressClick=function(e){e.preventDefault(),e.stopPropagation(),window.removeEventListener("click",suppressClick,!0)};exports.suppressClick=function(){window.addEventListener("click",suppressClick,!0),window.setTimeout(function(){window.removeEventListener("click",suppressClick,!0)},0)},exports.mousePos=function(e,t){var n=e.getBoundingClientRect();return t=t.touches?t.touches[0]:t,new Point(t.clientX-n.left-e.clientLeft,t.clientY-n.top-e.clientTop)},exports.touchPos=function(e,t){for(var n=e.getBoundingClientRect(),o=[],r="touchend"===t.type?t.changedTouches:t.touches,c=0;c<r.length;c++)o.push(new Point(r[c].clientX-n.left-e.clientLeft,r[c].clientY-n.top-e.clientTop));return o},exports.remove=function(e){e.parentNode&&e.parentNode.removeChild(e)};
},{"./window":254,"@mapbox/point-geometry":4}],260:[function(_dereq_,module,exports){
"use strict";function _addEventListener(e,t,n){n[e]=n[e]||[],n[e].push(t)}function _removeEventListener(e,t,n){if(n&&n[e]){var i=n[e].indexOf(t);-1!==i&&n[e].splice(i,1)}}var util=_dereq_("./util"),Evented=function(){};Evented.prototype.on=function(e,t){return this._listeners=this._listeners||{},_addEventListener(e,t,this._listeners),this},Evented.prototype.off=function(e,t){return _removeEventListener(e,t,this._listeners),_removeEventListener(e,t,this._oneTimeListeners),this},Evented.prototype.once=function(e,t){return this._oneTimeListeners=this._oneTimeListeners||{},_addEventListener(e,t,this._oneTimeListeners),this},Evented.prototype.fire=function(e,t){var n=this;if(this.listens(e)){t=util.extend({},t,{type:e,target:this});for(var i=this._listeners&&this._listeners[e]?this._listeners[e].slice():[],s=0,r=i;s<r.length;s+=1){r[s].call(n,t)}for(var o=this._oneTimeListeners&&this._oneTimeListeners[e]?this._oneTimeListeners[e].slice():[],h=0,_=o;h<_.length;h+=1){var v=_[h];_removeEventListener(e,v,n._oneTimeListeners),v.call(n,t)}this._eventedParent&&this._eventedParent.fire(e,util.extend({},t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData))}else util.endsWith(e,"error")&&console.error(t&&t.error||t||"Empty error event");return this},Evented.prototype.listens=function(e){return this._listeners&&this._listeners[e]&&this._listeners[e].length>0||this._oneTimeListeners&&this._oneTimeListeners[e]&&this._oneTimeListeners[e].length>0||this._eventedParent&&this._eventedParent.listens(e)},Evented.prototype.setEventedParent=function(e,t){return this._eventedParent=e,this._eventedParentData=t,this},module.exports=Evented;
},{"./util":275}],261:[function(_dereq_,module,exports){
"use strict";function compareMax(e,t){return t.max-e.max}function Cell(e,t,n,o){this.p=new Point(e,t),this.h=n,this.d=pointToPolygonDist(this.p,o),this.max=this.d+this.h*Math.SQRT2}function pointToPolygonDist(e,t){for(var n=!1,o=1/0,r=0;r<t.length;r++)for(var i=t[r],l=0,u=i.length,a=u-1;l<u;a=l++){var s=i[l],p=i[a];s.y>e.y!=p.y>e.y&&e.x<(p.x-s.x)*(e.y-s.y)/(p.y-s.y)+s.x&&(n=!n),o=Math.min(o,distToSegmentSquared(e,s,p))}return(n?1:-1)*Math.sqrt(o)}function getCentroidCell(e){for(var t=0,n=0,o=0,r=e[0],i=0,l=r.length,u=l-1;i<l;u=i++){var a=r[i],s=r[u],p=a.x*s.y-s.x*a.y;n+=(a.x+s.x)*p,o+=(a.y+s.y)*p,t+=3*p}return new Cell(n/t,o/t,0,e)}var Queue=_dereq_("tinyqueue"),Point=_dereq_("@mapbox/point-geometry"),distToSegmentSquared=_dereq_("./intersection_tests").distToSegmentSquared;module.exports=function(e,t,n){void 0===t&&(t=1),void 0===n&&(n=!1);for(var o=1/0,r=1/0,i=-1/0,l=-1/0,u=e[0],a=0;a<u.length;a++){var s=u[a];(!a||s.x<o)&&(o=s.x),(!a||s.y<r)&&(r=s.y),(!a||s.x>i)&&(i=s.x),(!a||s.y>l)&&(l=s.y)}var p=i-o,h=l-r,d=Math.min(p,h),x=d/2,y=new Queue(null,compareMax);if(0===d)return new Point(o,r);for(var g=o;g<i;g+=d)for(var f=r;f<l;f+=d)y.push(new Cell(g+x,f+x,x,e));for(var m=getCentroidCell(e),v=y.length;y.length;){var c=y.pop();(c.d>m.d||!m.d)&&(m=c,n&&console.log("found best %d after %d probes",Math.round(1e4*c.d)/1e4,v)),c.max-m.d<=t||(x=c.h/2,y.push(new Cell(c.p.x-x,c.p.y-x,x,e)),y.push(new Cell(c.p.x+x,c.p.y-x,x,e)),y.push(new Cell(c.p.x-x,c.p.y+x,x,e)),y.push(new Cell(c.p.x+x,c.p.y+x,x,e)),v+=4)}return n&&(console.log("num probes: "+v),console.log("best distance: "+m.d)),m.p};
},{"./intersection_tests":264,"@mapbox/point-geometry":4,"tinyqueue":33}],262:[function(_dereq_,module,exports){
"use strict";var WorkerPool=_dereq_("./worker_pool"),globalWorkerPool;module.exports=function(){return globalWorkerPool||(globalWorkerPool=new WorkerPool),globalWorkerPool};
},{"./worker_pool":279}],263:[function(_dereq_,module,exports){
"use strict";function createImage(e,t,i,h){var a=t.width,r=t.height;if(h){if(h.length!==a*r*i)throw new RangeError("mismatched image size")}else h=new Uint8Array(a*r*i);return e.width=a,e.height=r,e.data=h,e}function resizeImage(e,t,i){var h=t.width,a=t.height;if(h!==e.width||a!==e.height){var r=createImage({},{width:h,height:a},i);copyImage(e,r,{x:0,y:0},{x:0,y:0},{width:Math.min(e.width,h),height:Math.min(e.height,a)},i),e.width=h,e.height=a,e.data=r.data}}function copyImage(e,t,i,h,a,r){if(0===a.width||0===a.height)return t;if(a.width>e.width||a.height>e.height||i.x>e.width-a.width||i.y>e.height-a.height)throw new RangeError("out of range source coordinates for image copy");if(a.width>t.width||a.height>t.height||h.x>t.width-a.width||h.y>t.height-a.height)throw new RangeError("out of range destination coordinates for image copy");for(var g=e.data,n=t.data,o=0;o<a.height;o++)for(var m=((i.y+o)*e.width+i.x)*r,w=((h.y+o)*t.width+h.x)*r,d=0;d<a.width*r;d++)n[w+d]=g[m+d];return t}var ref=_dereq_("./web_worker_transfer"),register=ref.register,AlphaImage=function(e,t){createImage(this,e,1,t)};AlphaImage.prototype.resize=function(e){resizeImage(this,e,1)},AlphaImage.prototype.clone=function(){return new AlphaImage({width:this.width,height:this.height},new Uint8Array(this.data))},AlphaImage.copy=function(e,t,i,h,a){copyImage(e,t,i,h,a,1)};var RGBAImage=function(e,t){createImage(this,e,4,t)};RGBAImage.prototype.resize=function(e){resizeImage(this,e,4)},RGBAImage.prototype.clone=function(){return new RGBAImage({width:this.width,height:this.height},new Uint8Array(this.data))},RGBAImage.copy=function(e,t,i,h,a){copyImage(e,t,i,h,a,4)},register("AlphaImage",AlphaImage),register("RGBAImage",RGBAImage),module.exports={AlphaImage:AlphaImage,RGBAImage:RGBAImage};
},{"./web_worker_transfer":278}],264:[function(_dereq_,module,exports){
"use strict";function polygonIntersectsPolygon(n,t){for(var e=0;e<n.length;e++)if(polygonContainsPoint(t,n[e]))return!0;for(var r=0;r<t.length;r++)if(polygonContainsPoint(n,t[r]))return!0;return!!lineIntersectsLine(n,t)}function multiPolygonIntersectsBufferedMultiPoint(n,t,e){for(var r=0;r<n.length;r++)for(var o=n[r],i=0;i<t.length;i++)for(var l=t[i],u=0;u<l.length;u++){var s=l[u];if(polygonContainsPoint(o,s))return!0;if(pointIntersectsBufferedLine(s,o,e))return!0}return!1}function multiPolygonIntersectsMultiPolygon(n,t){if(1===n.length&&1===n[0].length)return multiPolygonContainsPoint(t,n[0][0]);for(var e=0;e<t.length;e++)for(var r=t[e],o=0;o<r.length;o++)if(multiPolygonContainsPoint(n,r[o]))return!0;for(var i=0;i<n.length;i++){for(var l=n[i],u=0;u<l.length;u++)if(multiPolygonContainsPoint(t,l[u]))return!0;for(var s=0;s<t.length;s++)if(lineIntersectsLine(l,t[s]))return!0}return!1}function multiPolygonIntersectsBufferedMultiLine(n,t,e){for(var r=0;r<t.length;r++)for(var o=t[r],i=0;i<n.length;i++){var l=n[i];if(l.length>=3)for(var u=0;u<o.length;u++)if(polygonContainsPoint(l,o[u]))return!0;if(lineIntersectsBufferedLine(l,o,e))return!0}return!1}function lineIntersectsBufferedLine(n,t,e){if(n.length>1){if(lineIntersectsLine(n,t))return!0;for(var r=0;r<t.length;r++)if(pointIntersectsBufferedLine(t[r],n,e))return!0}for(var o=0;o<n.length;o++)if(pointIntersectsBufferedLine(n[o],t,e))return!0;return!1}function lineIntersectsLine(n,t){if(0===n.length||0===t.length)return!1;for(var e=0;e<n.length-1;e++)for(var r=n[e],o=n[e+1],i=0;i<t.length-1;i++){var l=t[i],u=t[i+1];if(lineSegmentIntersectsLineSegment(r,o,l,u))return!0}return!1}function lineSegmentIntersectsLineSegment(n,t,e,r){return isCounterClockwise(n,e,r)!==isCounterClockwise(t,e,r)&&isCounterClockwise(n,t,e)!==isCounterClockwise(n,t,r)}function pointIntersectsBufferedLine(n,t,e){var r=e*e;if(1===t.length)return n.distSqr(t[0])<r;for(var o=1;o<t.length;o++){if(distToSegmentSquared(n,t[o-1],t[o])<r)return!0}return!1}function distToSegmentSquared(n,t,e){var r=t.distSqr(e);if(0===r)return n.distSqr(t);var o=((n.x-t.x)*(e.x-t.x)+(n.y-t.y)*(e.y-t.y))/r;return o<0?n.distSqr(t):o>1?n.distSqr(e):n.distSqr(e.sub(t)._mult(o)._add(t))}function multiPolygonContainsPoint(n,t){for(var e,r,o,i=!1,l=0;l<n.length;l++){e=n[l];for(var u=0,s=e.length-1;u<e.length;s=u++)r=e[u],o=e[s],r.y>t.y!=o.y>t.y&&t.x<(o.x-r.x)*(t.y-r.y)/(o.y-r.y)+r.x&&(i=!i)}return i}function polygonContainsPoint(n,t){for(var e=!1,r=0,o=n.length-1;r<n.length;o=r++){var i=n[r],l=n[o];i.y>t.y!=l.y>t.y&&t.x<(l.x-i.x)*(t.y-i.y)/(l.y-i.y)+i.x&&(e=!e)}return e}var ref=_dereq_("./util"),isCounterClockwise=ref.isCounterClockwise;module.exports={multiPolygonIntersectsBufferedMultiPoint:multiPolygonIntersectsBufferedMultiPoint,multiPolygonIntersectsMultiPolygon:multiPolygonIntersectsMultiPolygon,multiPolygonIntersectsBufferedMultiLine:multiPolygonIntersectsBufferedMultiLine,polygonIntersectsPolygon:polygonIntersectsPolygon,distToSegmentSquared:distToSegmentSquared};
},{"./util":275}],265:[function(_dereq_,module,exports){
"use strict";var unicodeBlockLookup={"Latin-1 Supplement":function(n){return n>=128&&n<=255},Arabic:function(n){return n>=1536&&n<=1791},"Arabic Supplement":function(n){return n>=1872&&n<=1919},"Arabic Extended-A":function(n){return n>=2208&&n<=2303},"Hangul Jamo":function(n){return n>=4352&&n<=4607},"Unified Canadian Aboriginal Syllabics":function(n){return n>=5120&&n<=5759},"Unified Canadian Aboriginal Syllabics Extended":function(n){return n>=6320&&n<=6399},"General Punctuation":function(n){return n>=8192&&n<=8303},"Letterlike Symbols":function(n){return n>=8448&&n<=8527},"Number Forms":function(n){return n>=8528&&n<=8591},"Miscellaneous Technical":function(n){return n>=8960&&n<=9215},"Control Pictures":function(n){return n>=9216&&n<=9279},"Optical Character Recognition":function(n){return n>=9280&&n<=9311},"Enclosed Alphanumerics":function(n){return n>=9312&&n<=9471},"Geometric Shapes":function(n){return n>=9632&&n<=9727},"Miscellaneous Symbols":function(n){return n>=9728&&n<=9983},"Miscellaneous Symbols and Arrows":function(n){return n>=11008&&n<=11263},"CJK Radicals Supplement":function(n){return n>=11904&&n<=12031},"Kangxi Radicals":function(n){return n>=12032&&n<=12255},"Ideographic Description Characters":function(n){return n>=12272&&n<=12287},"CJK Symbols and Punctuation":function(n){return n>=12288&&n<=12351},Hiragana:function(n){return n>=12352&&n<=12447},Katakana:function(n){return n>=12448&&n<=12543},Bopomofo:function(n){return n>=12544&&n<=12591},"Hangul Compatibility Jamo":function(n){return n>=12592&&n<=12687},Kanbun:function(n){return n>=12688&&n<=12703},"Bopomofo Extended":function(n){return n>=12704&&n<=12735},"CJK Strokes":function(n){return n>=12736&&n<=12783},"Katakana Phonetic Extensions":function(n){return n>=12784&&n<=12799},"Enclosed CJK Letters and Months":function(n){return n>=12800&&n<=13055},"CJK Compatibility":function(n){return n>=13056&&n<=13311},"CJK Unified Ideographs Extension A":function(n){return n>=13312&&n<=19903},"Yijing Hexagram Symbols":function(n){return n>=19904&&n<=19967},"CJK Unified Ideographs":function(n){return n>=19968&&n<=40959},"Yi Syllables":function(n){return n>=40960&&n<=42127},"Yi Radicals":function(n){return n>=42128&&n<=42191},"Hangul Jamo Extended-A":function(n){return n>=43360&&n<=43391},"Hangul Syllables":function(n){return n>=44032&&n<=55215},"Hangul Jamo Extended-B":function(n){return n>=55216&&n<=55295},"Private Use Area":function(n){return n>=57344&&n<=63743},"CJK Compatibility Ideographs":function(n){return n>=63744&&n<=64255},"Arabic Presentation Forms-A":function(n){return n>=64336&&n<=65023},"Vertical Forms":function(n){return n>=65040&&n<=65055},"CJK Compatibility Forms":function(n){return n>=65072&&n<=65103},"Small Form Variants":function(n){return n>=65104&&n<=65135},"Arabic Presentation Forms-B":function(n){return n>=65136&&n<=65279},"Halfwidth and Fullwidth Forms":function(n){return n>=65280&&n<=65519}};module.exports=unicodeBlockLookup;
},{}],266:[function(_dereq_,module,exports){
"use strict";var LRUCache=function(t,e){this.max=t,this.onRemove=e,this.reset()};LRUCache.prototype.reset=function(){var t=this;for(var e in t.data)t.onRemove(t.data[e]);return this.data={},this.order=[],this},LRUCache.prototype.add=function(t,e){if(this.has(t))this.order.splice(this.order.indexOf(t),1),this.data[t]=e,this.order.push(t);else if(this.data[t]=e,this.order.push(t),this.order.length>this.max){var r=this.getAndRemove(this.order[0]);r&&this.onRemove(r)}return this},LRUCache.prototype.has=function(t){return t in this.data},LRUCache.prototype.keys=function(){return this.order},LRUCache.prototype.getAndRemove=function(t){if(!this.has(t))return null;var e=this.data[t];return delete this.data[t],this.order.splice(this.order.indexOf(t),1),e},LRUCache.prototype.get=function(t){return this.has(t)?this.data[t]:null},LRUCache.prototype.remove=function(t){if(!this.has(t))return this;var e=this.data[t];return delete this.data[t],this.onRemove(e),this.order.splice(this.order.indexOf(t),1),this},LRUCache.prototype.setMaxSize=function(t){var e=this;for(this.max=t;this.order.length>this.max;){var r=e.getAndRemove(e.order[0]);r&&e.onRemove(r)}return this},module.exports=LRUCache;
},{}],267:[function(_dereq_,module,exports){
"use strict";function makeAPIURL(r,e){var t=parseUrl(config.API_URL);if(r.protocol=t.protocol,r.authority=t.authority,"/"!==t.path&&(r.path=""+t.path+r.path),!config.REQUIRE_ACCESS_TOKEN)return formatUrl(r);if(!(e=e||config.ACCESS_TOKEN))throw new Error("An API access token is required to use Mapbox GL. "+help);if("s"===e[0])throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). "+help);return r.params.push("access_token="+e),formatUrl(r)}function isMapboxURL(r){return 0===r.indexOf("mapbox:")}function replaceTempAccessToken(r){for(var e=0;e<r.length;e++)0===r[e].indexOf("access_token=tk.")&&(r[e]="access_token="+(config.ACCESS_TOKEN||""))}function parseUrl(r){var e=r.match(urlRe);if(!e)throw new Error("Unable to parse URL object");return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function formatUrl(r){var e=r.params.length?"?"+r.params.join("&"):"";return r.protocol+"://"+r.authority+r.path+e}var config=_dereq_("./config"),browser=_dereq_("./browser"),help="See https://www.mapbox.com/api-documentation/#access-tokens";exports.isMapboxURL=isMapboxURL,exports.normalizeStyleURL=function(r,e){if(!isMapboxURL(r))return r;var t=parseUrl(r);return t.path="/styles/v1"+t.path,makeAPIURL(t,e)},exports.normalizeGlyphsURL=function(r,e){if(!isMapboxURL(r))return r;var t=parseUrl(r);return t.path="/fonts/v1"+t.path,makeAPIURL(t,e)},exports.normalizeSourceURL=function(r,e){if(!isMapboxURL(r))return r;var t=parseUrl(r);return t.path="/v4/"+t.authority+".json",t.params.push("secure"),makeAPIURL(t,e)},exports.normalizeSpriteURL=function(r,e,t,a){var o=parseUrl(r);return isMapboxURL(r)?(o.path="/styles/v1"+o.path+"/sprite"+e+t,makeAPIURL(o,a)):(o.path+=""+e+t,formatUrl(o))};var imageExtensionRe=/(\.(png|jpg)\d*)(?=$)/;exports.normalizeTileURL=function(r,e,t){if(!e||!isMapboxURL(e))return r;var a=parseUrl(r),o=browser.devicePixelRatio>=2||512===t?"@2x":"",p=browser.supportsWebp?".webp":"$1";return a.path=a.path.replace(imageExtensionRe,""+o+p),replaceTempAccessToken(a.params),formatUrl(a)};var urlRe=/^(\w+):\/\/([^\/?]*)(\/[^?]+)?\??(.+)?/;
},{"./browser":252,"./config":256}],268:[function(_dereq_,module,exports){
"use strict";module.exports={getEntriesByName:function(e){return!(!performance||!performance.getEntriesByName)&&performance.getEntriesByName(e)}};
},{}],269:[function(_dereq_,module,exports){
"use strict";var isChar=_dereq_("./is_char_in_unicode_block");module.exports.allowsIdeographicBreaking=function(a){for(var i=0,r=a;i<r.length;i+=1){var s=r[i];if(!exports.charAllowsIdeographicBreaking(s.charCodeAt(0)))return!1}return!0},module.exports.allowsVerticalWritingMode=function(a){for(var i=0,r=a;i<r.length;i+=1){var s=r[i];if(exports.charHasUprightVerticalOrientation(s.charCodeAt(0)))return!0}return!1},module.exports.allowsLetterSpacing=function(a){for(var i=0,r=a;i<r.length;i+=1){var s=r[i];if(!exports.charAllowsLetterSpacing(s.charCodeAt(0)))return!1}return!0},module.exports.charAllowsLetterSpacing=function(a){return!isChar.Arabic(a)&&(!isChar["Arabic Supplement"](a)&&(!isChar["Arabic Extended-A"](a)&&(!isChar["Arabic Presentation Forms-A"](a)&&!isChar["Arabic Presentation Forms-B"](a))))},module.exports.charAllowsIdeographicBreaking=function(a){return!(a<11904)&&(!!isChar["Bopomofo Extended"](a)||(!!isChar.Bopomofo(a)||(!!isChar["CJK Compatibility Forms"](a)||(!!isChar["CJK Compatibility Ideographs"](a)||(!!isChar["CJK Compatibility"](a)||(!!isChar["CJK Radicals Supplement"](a)||(!!isChar["CJK Strokes"](a)||(!!isChar["CJK Symbols and Punctuation"](a)||(!!isChar["CJK Unified Ideographs Extension A"](a)||(!!isChar["CJK Unified Ideographs"](a)||(!!isChar["Enclosed CJK Letters and Months"](a)||(!!isChar["Halfwidth and Fullwidth Forms"](a)||(!!isChar.Hiragana(a)||(!!isChar["Ideographic Description Characters"](a)||(!!isChar["Kangxi Radicals"](a)||(!!isChar["Katakana Phonetic Extensions"](a)||(!!isChar.Katakana(a)||(!!isChar["Vertical Forms"](a)||(!!isChar["Yi Radicals"](a)||!!isChar["Yi Syllables"](a))))))))))))))))))))},exports.charHasUprightVerticalOrientation=function(a){return 746===a||747===a||!(a<4352)&&(!!isChar["Bopomofo Extended"](a)||(!!isChar.Bopomofo(a)||(!(!isChar["CJK Compatibility Forms"](a)||a>=65097&&a<=65103)||(!!isChar["CJK Compatibility Ideographs"](a)||(!!isChar["CJK Compatibility"](a)||(!!isChar["CJK Radicals Supplement"](a)||(!!isChar["CJK Strokes"](a)||(!(!isChar["CJK Symbols and Punctuation"](a)||a>=12296&&a<=12305||a>=12308&&a<=12319||12336===a)||(!!isChar["CJK Unified Ideographs Extension A"](a)||(!!isChar["CJK Unified Ideographs"](a)||(!!isChar["Enclosed CJK Letters and Months"](a)||(!!isChar["Hangul Compatibility Jamo"](a)||(!!isChar["Hangul Jamo Extended-A"](a)||(!!isChar["Hangul Jamo Extended-B"](a)||(!!isChar["Hangul Jamo"](a)||(!!isChar["Hangul Syllables"](a)||(!!isChar.Hiragana(a)||(!!isChar["Ideographic Description Characters"](a)||(!!isChar.Kanbun(a)||(!!isChar["Kangxi Radicals"](a)||(!!isChar["Katakana Phonetic Extensions"](a)||(!(!isChar.Katakana(a)||12540===a)||(!(!isChar["Halfwidth and Fullwidth Forms"](a)||65288===a||65289===a||65293===a||a>=65306&&a<=65310||65339===a||65341===a||65343===a||a>=65371&&a<=65503||65507===a||a>=65512&&a<=65519)||(!(!isChar["Small Form Variants"](a)||a>=65112&&a<=65118||a>=65123&&a<=65126)||(!!isChar["Unified Canadian Aboriginal Syllabics"](a)||(!!isChar["Unified Canadian Aboriginal Syllabics Extended"](a)||(!!isChar["Vertical Forms"](a)||(!!isChar["Yijing Hexagram Symbols"](a)||(!!isChar["Yi Syllables"](a)||!!isChar["Yi Radicals"](a))))))))))))))))))))))))))))))},exports.charHasNeutralVerticalOrientation=function(a){return!(!isChar["Latin-1 Supplement"](a)||167!==a&&169!==a&&174!==a&&177!==a&&188!==a&&189!==a&&190!==a&&215!==a&&247!==a)||(!(!isChar["General Punctuation"](a)||8214!==a&&8224!==a&&8225!==a&&8240!==a&&8241!==a&&8251!==a&&8252!==a&&8258!==a&&8263!==a&&8264!==a&&8265!==a&&8273!==a)||(!!isChar["Letterlike Symbols"](a)||(!!isChar["Number Forms"](a)||(!(!isChar["Miscellaneous Technical"](a)||!(a>=8960&&a<=8967||a>=8972&&a<=8991||a>=8996&&a<=9e3||9003===a||a>=9085&&a<=9114||a>=9150&&a<=9165||9167===a||a>=9169&&a<=9179||a>=9186&&a<=9215))||(!(!isChar["Control Pictures"](a)||9251===a)||(!!isChar["Optical Character Recognition"](a)||(!!isChar["Enclosed Alphanumerics"](a)||(!!isChar["Geometric Shapes"](a)||(!(!isChar["Miscellaneous Symbols"](a)||a>=9754&&a<=9759)||(!(!isChar["Miscellaneous Symbols and Arrows"](a)||!(a>=11026&&a<=11055||a>=11088&&a<=11097||a>=11192&&a<=11243))||(!!isChar["CJK Symbols and Punctuation"](a)||(!!isChar.Katakana(a)||(!!isChar["Private Use Area"](a)||(!!isChar["CJK Compatibility Forms"](a)||(!!isChar["Small Form Variants"](a)||(!!isChar["Halfwidth and Fullwidth Forms"](a)||(8734===a||8756===a||8757===a||a>=9984&&a<=10087||a>=10102&&a<=10131||65532===a||65533===a)))))))))))))))))},exports.charHasRotatedVerticalOrientation=function(a){return!(exports.charHasUprightVerticalOrientation(a)||exports.charHasNeutralVerticalOrientation(a))};
},{"./is_char_in_unicode_block":265}],270:[function(_dereq_,module,exports){
"use strict";var LngLat=_dereq_("../geo/lng_lat");module.exports=function(n,t,l){if(n=new LngLat(n.lng,n.lat),t){var a=new LngLat(n.lng-360,n.lat),i=new LngLat(n.lng+360,n.lat),o=l.locationPoint(n).distSqr(t);l.locationPoint(a).distSqr(t)<o?n=a:l.locationPoint(i).distSqr(t)<o&&(n=i)}for(;Math.abs(n.lng-l.center.lng)>180;){var e=l.locationPoint(n);if(e.x>=0&&e.y>=0&&e.x<=l.width&&e.y<=l.height)break;n.lng>l.center.lng?n.lng-=360:n.lng+=360}return n};
},{"../geo/lng_lat":62}],271:[function(_dereq_,module,exports){
"use strict";function createLayout(t,r){void 0===r&&(r=1);var e=0,i=0;return{members:t.map(function(t){var a=sizeOf(t.type),s=e=align(e,Math.max(r,a)),n=t.components||1;return i=Math.max(i,a),e+=a*n,{name:t.name,type:t.type,components:n,offset:s}}),size:align(e,Math.max(i,r)),alignment:r}}function sizeOf(t){return viewTypes[t].BYTES_PER_ELEMENT}function align(t,r){return Math.ceil(t/r)*r}var viewTypes={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array},Struct=function(t,r){this._structArray=t,this._pos1=r*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8},DEFAULT_CAPACITY=128,RESIZE_MULTIPLIER=5,StructArray=function(){this.isTransferred=!1,this.capacity=-1,this.resize(0)};StructArray.serialize=function(t,r){return t._trim(),r&&(t.isTransferred=!0,r.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}},StructArray.deserialize=function(t){var r=Object.create(this.prototype);return r.arrayBuffer=t.arrayBuffer,r.length=t.length,r.capacity=t.arrayBuffer.byteLength/r.bytesPerElement,r._refreshViews(),r},StructArray.prototype._trim=function(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews())},StructArray.prototype.clear=function(){this.length=0},StructArray.prototype.resize=function(t){this.reserve(t),this.length=t},StructArray.prototype.reserve=function(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(this.capacity*RESIZE_MULTIPLIER),DEFAULT_CAPACITY),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);var r=this.uint8;this._refreshViews(),r&&this.uint8.set(r)}},StructArray.prototype._refreshViews=function(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")},module.exports.StructArray=StructArray,module.exports.Struct=Struct,module.exports.viewTypes=viewTypes,module.exports.createLayout=createLayout;
},{}],272:[function(_dereq_,module,exports){
"use strict";module.exports=function(t,n){var u=!1,e=0,r=function(){e=0,u&&(t(),e=setTimeout(r,n),u=!1)};return function(){return u=!0,e||r(),e}};
},{}],273:[function(_dereq_,module,exports){
"use strict";function tileCover(e,r,a,n){function d(r,d,t){var y,c,l,x;if(t>=0&&t<=o)for(y=r;y<d;y++)c=Math.floor(y/o),l=(y%o+o)%o,0!==c&&!0!==n||(x=new OverscaledTileID(a,c,e,l,t),i[x.key]=x)}void 0===n&&(n=!0);var o=1<<e,i={};return scanTriangle(r[0],r[1],r[2],0,o,d),scanTriangle(r[2],r[3],r[0],0,o,d),Object.keys(i).map(function(e){return i[e]})}function edge(e,r){if(e.row>r.row){var a=e;e=r,r=a}return{x0:e.column,y0:e.row,x1:r.column,y1:r.row,dx:r.column-e.column,dy:r.row-e.row}}function scanSpans(e,r,a,n,d){var o=Math.max(a,Math.floor(r.y0)),i=Math.min(n,Math.ceil(r.y1));if(e.x0===r.x0&&e.y0===r.y0?e.x0+r.dy/e.dy*e.dx<r.x1:e.x1-r.dy/e.dy*e.dx<r.x0){var t=e;e=r,r=t}for(var y=e.dx/e.dy,c=r.dx/r.dy,l=e.dx>0,x=r.dx<0,u=o;u<i;u++){var s=y*Math.max(0,Math.min(e.dy,u+l-e.y0))+e.x0,f=c*Math.max(0,Math.min(r.dy,u+x-r.y0))+r.x0;d(Math.floor(f),Math.ceil(s),u)}}function scanTriangle(e,r,a,n,d,o){var i,t=edge(e,r),y=edge(r,a),c=edge(a,e);t.dy>y.dy&&(i=t,t=y,y=i),t.dy>c.dy&&(i=t,t=c,c=i),y.dy>c.dy&&(i=y,y=c,c=i),t.dy&&scanSpans(c,t,n,d,o),y.dy&&scanSpans(c,y,n,d,o)}var Coordinate=_dereq_("../geo/coordinate"),ref=_dereq_("../source/tile_id"),OverscaledTileID=ref.OverscaledTileID;module.exports=tileCover;
},{"../geo/coordinate":61,"../source/tile_id":114}],274:[function(_dereq_,module,exports){
"use strict";function resolveTokens(e,n){return n.replace(/{([^{}]+)}/g,function(n,r){return r in e?String(e[r]):""})}module.exports=resolveTokens;
},{}],275:[function(_dereq_,module,exports){
"use strict";var UnitBezier=_dereq_("@mapbox/unitbezier"),Coordinate=_dereq_("../geo/coordinate"),Point=_dereq_("@mapbox/point-geometry");exports.easeCubicInOut=function(r){if(r<=0)return 0;if(r>=1)return 1;var e=r*r,n=e*r;return 4*(r<.5?n:3*(r-e)+n-.75)},exports.bezier=function(r,e,n,t){var o=new UnitBezier(r,e,n,t);return function(r){return o.solve(r)}},exports.ease=exports.bezier(.25,.1,.25,1),exports.clamp=function(r,e,n){return Math.min(n,Math.max(e,r))},exports.wrap=function(r,e,n){var t=n-e,o=((r-e)%t+t)%t+e;return o===e?n:o},exports.asyncAll=function(r,e,n){if(!r.length)return n(null,[]);var t=r.length,o=new Array(r.length),a=null;r.forEach(function(r,i){e(r,function(r,e){r&&(a=r),o[i]=e,0==--t&&n(a,o)})})},exports.values=function(r){var e=[];for(var n in r)e.push(r[n]);return e},exports.keysDifference=function(r,e){var n=[];for(var t in r)t in e||n.push(t);return n},exports.extend=function(r){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];for(var t=0,o=e;t<o.length;t+=1){var a=o[t];for(var i in a)r[i]=a[i]}return r},exports.pick=function(r,e){for(var n={},t=0;t<e.length;t++){var o=e[t];o in r&&(n[o]=r[o])}return n};var id=1;exports.uniqueId=function(){return id++},exports.bindAll=function(r,e){r.forEach(function(r){e[r]&&(e[r]=e[r].bind(e))})},exports.getCoordinatesCenter=function(r){for(var e=1/0,n=1/0,t=-1/0,o=-1/0,a=0;a<r.length;a++)e=Math.min(e,r[a].column),n=Math.min(n,r[a].row),t=Math.max(t,r[a].column),o=Math.max(o,r[a].row);var i=t-e,u=o-n,s=Math.max(i,u),c=Math.max(0,Math.floor(-Math.log(s)/Math.LN2));return new Coordinate((e+t)/2,(n+o)/2,0).zoomTo(c)},exports.endsWith=function(r,e){return-1!==r.indexOf(e,r.length-e.length)},exports.mapObject=function(r,e,n){var t=this,o={};for(var a in r)o[a]=e.call(n||t,r[a],a,r);return o},exports.filterObject=function(r,e,n){var t=this,o={};for(var a in r)e.call(n||t,r[a],a,r)&&(o[a]=r[a]);return o},exports.deepEqual=_dereq_("../style-spec/util/deep_equal"),exports.clone=function(r){return Array.isArray(r)?r.map(exports.clone):"object"==typeof r&&r?exports.mapObject(r,exports.clone):r},exports.arraysIntersect=function(r,e){for(var n=0;n<r.length;n++)if(e.indexOf(r[n])>=0)return!0;return!1};var warnOnceHistory={};exports.warnOnce=function(r){warnOnceHistory[r]||("undefined"!=typeof console&&console.warn(r),warnOnceHistory[r]=!0)},exports.isCounterClockwise=function(r,e,n){return(n.y-r.y)*(e.x-r.x)>(e.y-r.y)*(n.x-r.x)},exports.calculateSignedArea=function(r){for(var e=0,n=0,t=r.length,o=t-1,a=void 0,i=void 0;n<t;o=n++)a=r[n],i=r[o],e+=(i.x-a.x)*(a.y+i.y);return e},exports.isClosedPolygon=function(r){if(r.length<4)return!1;var e=r[0],n=r[r.length-1];return!(Math.abs(e.x-n.x)>0||Math.abs(e.y-n.y)>0)&&Math.abs(exports.calculateSignedArea(r))>.01},exports.sphericalToCartesian=function(r){var e=r[0],n=r[1],t=r[2];return n+=90,n*=Math.PI/180,t*=Math.PI/180,{x:e*Math.cos(n)*Math.sin(t),y:e*Math.sin(n)*Math.sin(t),z:e*Math.cos(t)}},exports.parseCacheControl=function(r){var e=/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,n={};if(r.replace(e,function(r,e,t,o){var a=t||o;return n[e]=!a||a.toLowerCase(),""}),n["max-age"]){var t=parseInt(n["max-age"],10);isNaN(t)?delete n["max-age"]:n["max-age"]=t}return n};
},{"../geo/coordinate":61,"../style-spec/util/deep_equal":155,"@mapbox/point-geometry":4,"@mapbox/unitbezier":7}],276:[function(_dereq_,module,exports){
"use strict";var Feature=function(e,t,r,o){this.type="Feature",this._vectorTileFeature=e,e._z=t,e._x=r,e._y=o,this.properties=e.properties,null!=e.id&&(this.id=e.id)},prototypeAccessors={geometry:{}};prototypeAccessors.geometry.get=function(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry},prototypeAccessors.geometry.set=function(e){this._geometry=e},Feature.prototype.toJSON=function(){var e=this,t={geometry:this.geometry};for(var r in e)"_geometry"!==r&&"_vectorTileFeature"!==r&&(t[r]=e[r]);return t},Object.defineProperties(Feature.prototype,prototypeAccessors),module.exports=Feature;
},{}],277:[function(_dereq_,module,exports){
"use strict";var scriptDetection=_dereq_("./script_detection");module.exports=function(t){for(var o="",e=0;e<t.length;e++){var r=t.charCodeAt(e+1)||null,l=t.charCodeAt(e-1)||null;(!r||!scriptDetection.charHasRotatedVerticalOrientation(r)||module.exports.lookup[t[e+1]])&&(!l||!scriptDetection.charHasRotatedVerticalOrientation(l)||module.exports.lookup[t[e-1]])&&module.exports.lookup[t[e]]?o+=module.exports.lookup[t[e]]:o+=t[e]}return o},module.exports.lookup={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};
},{"./script_detection":269}],278:[function(_dereq_,module,exports){
"use strict";function register(e,r,i){void 0===i&&(i={}),Object.defineProperty(r,"_classRegistryKey",{value:e,writeable:!1}),registry[e]={klass:r,omit:i.omit||[],shallow:i.shallow||[]}}function serialize(e,r){if(null===e||void 0===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||e instanceof Boolean||e instanceof Number||e instanceof String||e instanceof Date||e instanceof RegExp)return e;if(e instanceof ArrayBuffer)return r&&r.push(e),e;if(ArrayBuffer.isView(e)){var i=e;return r&&r.push(i.buffer),i}if(e instanceof ImageData)return r&&r.push(e.data.buffer),e;if(Array.isArray(e)){for(var s=[],o=0,t=e;o<t.length;o+=1){var n=t[o];s.push(serialize(n,r))}return s}if("object"==typeof e){var a=e.constructor,f=a._classRegistryKey;if(!f)throw new Error("can't serialize object of unregistered class");var l={};if(a.serialize)l._serialized=a.serialize(e,r);else for(var p in e)if(e.hasOwnProperty(p)&&!(registry[f].omit.indexOf(p)>=0)){var u=e[p];l[p]=registry[f].shallow.indexOf(p)>=0?u:serialize(u,r)}return{name:f,properties:l}}throw new Error("can't serialize object of type "+typeof e)}function deserialize(e){if(null===e||void 0===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||e instanceof Boolean||e instanceof Number||e instanceof String||e instanceof Date||e instanceof RegExp||e instanceof ArrayBuffer||ArrayBuffer.isView(e)||e instanceof ImageData)return e;if(Array.isArray(e))return e.map(function(e){return deserialize(e)});if("object"==typeof e){var r=e,i=r.name,s=r.properties;if(!i)throw new Error("can't deserialize object of anonymous class");var o=registry[i],t=o.klass;if(!t)throw new Error("can't deserialize unregistered class "+i);if(t.deserialize)return t.deserialize(s._serialized);for(var n=Object.create(t.prototype),a=0,f=Object.keys(s);a<f.length;a+=1){var l=f[a];n[l]=registry[i].shallow.indexOf(l)>=0?s[l]:deserialize(s[l])}return n}throw new Error("can't deserialize object of type "+typeof e)}var Grid=_dereq_("grid-index"),Color=_dereq_("../style-spec/util/color"),ref=_dereq_("../style-spec/expression"),StylePropertyFunction=ref.StylePropertyFunction,StyleExpression=ref.StyleExpression,StyleExpressionWithErrorHandling=ref.StyleExpressionWithErrorHandling,ZoomDependentExpression=ref.ZoomDependentExpression,ZoomConstantExpression=ref.ZoomConstantExpression,ref$1=_dereq_("../style-spec/expression/compound_expression"),CompoundExpression=ref$1.CompoundExpression,expressions=_dereq_("../style-spec/expression/definitions"),ref$2=_dereq_("./window"),ImageData=ref$2.ImageData,registry={};register("Object",Object),Grid.serialize=function(e,r){var i=e.toArrayBuffer();return r&&r.push(i),i},Grid.deserialize=function(e){return new Grid(e)},register("Grid",Grid),register("Color",Color),register("StylePropertyFunction",StylePropertyFunction),register("StyleExpression",StyleExpression,{omit:["_evaluator"]}),register("StyleExpressionWithErrorHandling",StyleExpressionWithErrorHandling,{omit:["_evaluator"]}),register("ZoomDependentExpression",ZoomDependentExpression),register("ZoomConstantExpression",ZoomConstantExpression),register("CompoundExpression",CompoundExpression,{omit:["_evaluate"]});for(var name in expressions)expressions[name]._classRegistryKey||register("Expression_"+name,expressions[name]);module.exports={register:register,serialize:serialize,deserialize:deserialize};
},{"../style-spec/expression":139,"../style-spec/expression/compound_expression":123,"../style-spec/expression/definitions":131,"../style-spec/util/color":153,"./window":254,"grid-index":24}],279:[function(_dereq_,module,exports){
"use strict";var WebWorker=_dereq_("./web_worker"),WorkerPool=function(){this.active={}};WorkerPool.prototype.acquire=function(r){var e=this;if(!this.workers){var o=_dereq_("../").workerCount;for(this.workers=[];this.workers.length<o;)e.workers.push(new WebWorker)}return this.active[r]=!0,this.workers.slice()},WorkerPool.prototype.release=function(r){delete this.active[r],0===Object.keys(this.active).length&&(this.workers.forEach(function(r){r.terminate()}),this.workers=null)},module.exports=WorkerPool;
},{"../":73,"./web_worker":253}]},{},[73])(73)
});


//# sourceMappingURL=mapbox-gl.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
  // install ES6 Promise polyfill
  __webpack_require__(16);
}

var interceptor = __webpack_require__(1);

var callbackify = interceptor({
  success: function (response) {
    var callback = response && response.callback;

    if (typeof callback === 'function') {
      callback(null, response.entity, response);
    }

    return response;
  },
  error: function (response) {
    var callback = response && response.callback;

    if (typeof callback === 'function') {
      var err = response.error || response.entity;
      if (typeof err !== 'object') err = new Error(err);
      callback(err);
    }

    return response;
  }
});

module.exports = callbackify;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Promise === 'undefined') {
  // install ES6 Promise polyfill
  __webpack_require__(16);
}

var rest = __webpack_require__(64);
var standardResponse = __webpack_require__(63);
var callbackify = __webpack_require__(58);

// rest.js client with MIME support
module.exports = function(config) {
  return rest
    .wrap(__webpack_require__(67))
    .wrap(__webpack_require__(20), { prefix: config.endpoint })
    .wrap(__webpack_require__(68), { mime: 'application/json' })
    .wrap(__webpack_require__(69))
    .wrap(__webpack_require__(66), {
      params: { access_token: config.accessToken }
    })
    .wrap(__webpack_require__(21))
    .wrap(standardResponse)
    .wrap(callbackify);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var b64 = __webpack_require__(75);

/**
 * Access tokens actually are data, and using them we can derive
 * a user's username. This method attempts to do just that,
 * decoding the part of the token after the first `.` into
 * a username.
 *
 * @private
 * @param {string} token an access token
 * @return {string} username
 */
function getUser(token) {
  var data = token.split('.')[1];
  if (!data) return null;
  data = data.replace(/-/g, '+').replace(/_/g, '/');

  var mod = data.length % 4;
  if (mod === 2) data += '==';
  if (mod === 3) data += '=';
  if (mod === 1 || mod > 3) return null;

  try {
    return JSON.parse(b64.decode(data)).u;
  } catch(err) {
    return null;
  }
}

module.exports = getUser;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var invariant = __webpack_require__(15);
var constants = __webpack_require__(14);
var client = __webpack_require__(59);
var getUser = __webpack_require__(60);

/**
 * Services all have the same constructor pattern: you initialize them
 * with an access token and options, and they validate those arguments
 * in a predictable way. This is a constructor-generator that makes
 * it possible to require each service's API individually.
 *
 * @private
 * @param {string} name the name of the Mapbox API this class will access:
 * this is set to the name of the function so it will show up in tracebacks
 * @returns {Function} constructor function
 */
function makeService(name) {

  function service(accessToken, options) {
    this.name = name;

    invariant(typeof accessToken === 'string',
      'accessToken required to instantiate Mapbox client');

    var endpoint = constants.DEFAULT_ENDPOINT;

    if (options !== undefined) {
      invariant(typeof options === 'object', 'options must be an object');
      if (options.endpoint) {
        invariant(typeof options.endpoint === 'string', 'endpoint must be a string');
        endpoint = options.endpoint;
      }
      if (options.account) {
        invariant(typeof options.account === 'string', 'account must be a string');
        this.owner = options.account;
      }
    }

    this.client = client({
      endpoint: endpoint,
      accessToken: accessToken
    });

    this.accessToken = accessToken;
    this.endpoint = endpoint;
    this.owner = this.owner || getUser(accessToken);
    invariant(!!this.owner, 'could not determine account from provided accessToken');

  }

  return service;
}

module.exports = makeService;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var invariant = __webpack_require__(15),
  makeService = __webpack_require__(61),
  constants = __webpack_require__(14);

var MapboxGeocoding = makeService('MapboxGeocoding');

var REVERSE_GEOCODING_PRECISION = 5;
var FORWARD_GEOCODING_PROXIMITY_PRECISION = 3;

function roundTo(value, places) {
  var mult = Math.pow(10, places);
  return Math.round(value * mult) / mult;
}

/**
 * Search for a location with a string, using the
 * [Mapbox Geocoding API](https://www.mapbox.com/api-documentation/#geocoding).
 *
 * The `query` parmeter can be an array of strings only if batch geocoding
 * is used by specifying `mapbox.places-permanent` as the `dataset` option.
 *
 * @param {string|Array<string>} query desired location
 * @param {Object} [options={}] additional options meant to tune
 * the request
 * @param {Object} options.proximity a proximity argument: this is
 * a geographical point given as an object with latitude and longitude
 * properties. Search results closer to this point will be given
 * higher priority.
 * @param {Array} options.bbox a bounding box argument: this is
 * a bounding box given as an array in the format [minX, minY, maxX, maxY].
 * Search results will be limited to the bounding box.
 * @param {string} options.types a comma seperated list of types that filter
 * results to match those specified. See https://www.mapbox.com/developers/api/geocoding/#filter-type
 * for available types.
 * @param {number=5} options.limit is the maximum number of results to return, between 1 and 10 inclusive.
 * Some very specific queries may return fewer results than the limit.
 * @param {string} options.country a comma separated list of country codes to
 * limit results to specified country or countries.
 * @param {boolean=true} options.autocomplete whether to include results that include
 * the query only as a prefix. This is useful for UIs where users type
 * values, but if you have complete addresses as input, you'll want to turn it off
 * @param {string} [options.dataset=mapbox.places] the desired data to be
 * geocoded against. The default, mapbox.places, does not permit unlimited
 * caching. `mapbox.places-permanent` is available on request and does
 * permit permanent caching.
 * @param {Function} callback called with (err, results)
 * @returns {undefined} nothing, calls callback
 * @memberof MapboxClient
 * @example
 * var mapboxClient = new MapboxClient('ACCESSTOKEN');
 * mapboxClient.geocodeForward('Paris, France', function(err, res) {
 *   // res is a GeoJSON document with geocoding matches
 * });
 * // using the proximity option to weight results closer to texas
 * mapboxClient.geocodeForward('Paris, France', {
 *   proximity: { latitude: 33.6875431, longitude: -95.4431142 }
 * }, function(err, res) {
 *   // res is a GeoJSON document with geocoding matches
 * });
 * // using the bbox option to limit results to a portion of Washington, D.C.
 * mapboxClient.geocodeForward('Starbucks', {
 *   bbox: [-77.083056,38.908611,-76.997778,38.959167]
 * }, function(err, res) {
 *   // res is a GeoJSON document with geocoding matches
 * });
 */
MapboxGeocoding.prototype.geocodeForward = function(query, options, callback) {

  // permit the options argument to be omitted
  if (callback === undefined && typeof options === 'function') {
    callback = options;
    options = {};
  }

  // typecheck arguments
  if (Array.isArray(query)) {
    if (options.dataset !== 'mapbox.places-permanent') {
      throw new Error('Batch geocoding is only available with the mapbox.places-permanent endpoint. See https://mapbox.com/api-documentation/#batch-requests for details')
    } else {
      query = query.join(';');
    }
  }
  invariant(typeof query === 'string', 'query must be a string');
  invariant(typeof options === 'object', 'options must be an object');

  var queryOptions = {
    query: query,
    dataset: 'mapbox.places'
  };

  var autocomplete = true;
  var precision = FORWARD_GEOCODING_PROXIMITY_PRECISION;
  if (options.precision) {
    invariant(typeof options.precision === 'number', 'precision option must be number');
    precision = options.precision;
  }

  if (options.proximity) {
    invariant(typeof options.proximity.latitude === 'number' &&
      typeof options.proximity.longitude === 'number',
      'proximity must be an object with numeric latitude & longitude properties');
    queryOptions.proximity = roundTo(options.proximity.longitude, precision) + ',' + roundTo(options.proximity.latitude, precision);
  }

  if (options.bbox) {
    invariant(typeof options.bbox[0] === 'number' &&
      typeof options.bbox[1] === 'number' &&
      typeof options.bbox[2] === 'number' &&
      typeof options.bbox[3] === 'number' &&
      options.bbox.length === 4,
      'bbox must be an array with numeric values in the form [minX, minY, maxX, maxY]');
    queryOptions.bbox = options.bbox[0] + "," + options.bbox[1] + "," + options.bbox[2] + "," + options.bbox[3];
  }

  if (options.limit) {
    invariant(typeof options.limit === 'number',
      'limit must be a number');
    queryOptions.limit = options.limit;
  }

  if (options.dataset) {
    invariant(typeof options.dataset === 'string', 'dataset option must be string');
    queryOptions.dataset = options.dataset;
  }

  if (options.country) {
    invariant(typeof options.country === 'string', 'country option must be string');
    queryOptions.country = options.country;
  }

  if (options.types) {
    invariant(typeof options.types === 'string', 'types option must be string');
    queryOptions.types = options.types;
  }

  if (typeof options.autocomplete === 'boolean') {
    invariant(typeof options.autocomplete === 'boolean', 'autocomplete must be a boolean');
    queryOptions.autocomplete = options.autocomplete;
  }

  return this.client({
    path: constants.API_GEOCODING_FORWARD,
    params: queryOptions,
    callback: callback
  });
};

/**
 * Given a location, determine what geographical features are located
 * there. This uses the [Mapbox Geocoding API](https://www.mapbox.com/api-documentation/#geocoding).
 *
 * @param {Object} location the geographical point to search
 * @param {number} location.latitude decimal degrees latitude, in range -90 to 90
 * @param {number} location.longitude decimal degrees longitude, in range -180 to 180
 * @param {Object} [options={}] additional options meant to tune
 * the request.
 * @param {string} options.types a comma seperated list of types that filter
 * results to match those specified. See 
 * https://www.mapbox.com/api-documentation/#retrieve-places-near-a-location
 * for available types.
 * @param {number=1} options.limit is the maximum number of results to return, between 1 and 5
 * inclusive. Requires a single options.types to be specified (see example).
 * @param {string} [options.dataset=mapbox.places] the desired data to be
 * geocoded against. The default, mapbox.places, does not permit unlimited
 * caching. `mapbox.places-permanent` is available on request and does
 * permit permanent caching.
 * @param {Function} callback called with (err, results)
 * @returns {undefined} nothing, calls callback
 * @example
 * var mapboxClient = new MapboxGeocoding('ACCESSTOKEN');
 * mapboxClient.geocodeReverse(
 *   { latitude: 33.6875431, longitude: -95.4431142 },
 *   function(err, res) {
 *   // res is a GeoJSON document with geocoding matches
 * });
 * @example
 * var mapboxClient = new MapboxGeocoding('ACCESSTOKEN');
 * mapboxClient.geocodeReverse(
 *   { latitude: 33.6875431, longitude: -95.4431142, options: { types: address, limit: 3 } },
 *   function(err, res) {
 *   // res is a GeoJSON document with up to 3 geocoding matches
 * });
 */
MapboxGeocoding.prototype.geocodeReverse = function(location, options, callback) {

  // permit the options argument to be omitted
  if (callback === undefined && typeof options === 'function') {
    callback = options;
    options = {};
  }

  // typecheck arguments
  invariant(typeof location === 'object', 'location must be an object');
  invariant(typeof options === 'object', 'options must be an object');

  invariant(typeof location.latitude === 'number' &&
    typeof location.longitude === 'number',
    'location must be an object with numeric latitude & longitude properties');

  var queryOptions = {
    dataset: 'mapbox.places'
  };

  if (options.dataset) {
    invariant(typeof options.dataset === 'string', 'dataset option must be string');
    queryOptions.dataset = options.dataset;
  }

  var precision = REVERSE_GEOCODING_PRECISION;
  if (options.precision) {
    invariant(typeof options.precision === 'number', 'precision option must be number');
    precision = options.precision;
  }

  if (options.types) {
    invariant(typeof options.types === 'string', 'types option must be string');
    queryOptions.types = options.types;
  }

  if (options.limit) {
    invariant(typeof options.limit === 'number', 'limit option must be a number');
    invariant(options.types.split(',').length === 1, 'a single type must be specified to use the limit option');
    queryOptions.limit = options.limit;
  }

  queryOptions.longitude = roundTo(location.longitude, precision);
  queryOptions.latitude = roundTo(location.latitude, precision);

  return this.client({
    path: constants.API_GEOCODING_REVERSE,
    params: queryOptions,
    callback: callback
  });
};

module.exports = MapboxGeocoding;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var interceptor = __webpack_require__(1);

var standardResponse = interceptor({
  response: transform,
});

function transform(response) {
  return {
    url: response.url,
    status: response.status ? response.status.code : undefined,
    headers: response.headers,
    entity: response.entity,
    error: response.error,
    callback: response.request.callback
  };
};

module.exports = standardResponse;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var rest = __webpack_require__(19),
    browser = __webpack_require__(65);

rest.setPlatformDefaultClient(browser);

module.exports = rest;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var normalizeHeaderName, responsePromise, client, headerSplitRE;

normalizeHeaderName = __webpack_require__(25);
responsePromise = __webpack_require__(8);
client = __webpack_require__(7);

// according to the spec, the line break is '\r\n', but doesn't hold true in practice
headerSplitRE = /[\r|\n]+/;

function parseHeaders(raw) {
	// Note: Set-Cookie will be removed by the browser
	var headers = {};

	if (!raw) { return headers; }

	raw.trim().split(headerSplitRE).forEach(function (header) {
		var boundary, name, value;
		boundary = header.indexOf(':');
		name = normalizeHeaderName(header.substring(0, boundary).trim());
		value = header.substring(boundary + 1).trim();
		if (headers[name]) {
			if (Array.isArray(headers[name])) {
				// add to an existing array
				headers[name].push(value);
			}
			else {
				// convert single value to array
				headers[name] = [headers[name], value];
			}
		}
		else {
			// new, single value
			headers[name] = value;
		}
	});

	return headers;
}

function safeMixin(target, source) {
	Object.keys(source || {}).forEach(function (prop) {
		// make sure the property already exists as
		// IE 6 will blow up if we add a new prop
		if (source.hasOwnProperty(prop) && prop in target) {
			try {
				target[prop] = source[prop];
			}
			catch (e) {
				// ignore, expected for some properties at some points in the request lifecycle
			}
		}
	});

	return target;
}

module.exports = client(function xhr(request) {
	return responsePromise.promise(function (resolve, reject) {
		/*jshint maxcomplexity:20 */

		var client, method, url, headers, entity, headerName, response, XHR;

		request = typeof request === 'string' ? { path: request } : request || {};
		response = { request: request };

		if (request.canceled) {
			response.error = 'precanceled';
			reject(response);
			return;
		}

		XHR = request.engine || XMLHttpRequest;
		if (!XHR) {
			reject({ request: request, error: 'xhr-not-available' });
			return;
		}

		entity = request.entity;
		request.method = request.method || (entity ? 'POST' : 'GET');
		method = request.method;
		url = response.url = request.path || '';

		try {
			client = response.raw = new XHR();

			// mixin extra request properties before and after opening the request as some properties require being set at different phases of the request
			safeMixin(client, request.mixin);
			client.open(method, url, true);
			safeMixin(client, request.mixin);

			headers = request.headers;
			for (headerName in headers) {
				/*jshint forin:false */
				if (headerName === 'Content-Type' && headers[headerName] === 'multipart/form-data') {
					// XMLHttpRequest generates its own Content-Type header with the
					// appropriate multipart boundary when sending multipart/form-data.
					continue;
				}

				client.setRequestHeader(headerName, headers[headerName]);
			}

			request.canceled = false;
			request.cancel = function cancel() {
				request.canceled = true;
				client.abort();
				reject(response);
			};

			client.onreadystatechange = function (/* e */) {
				if (request.canceled) { return; }
				if (client.readyState === (XHR.DONE || 4)) {
					response.status = {
						code: client.status,
						text: client.statusText
					};
					response.headers = parseHeaders(client.getAllResponseHeaders());
					response.entity = client.responseText;

					// #125 -- Sometimes IE8-9 uses 1223 instead of 204
					// http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
					if (response.status.code === 1223) {
						response.status.code = 204;
					}

					if (response.status.code > 0) {
						// check status code as readystatechange fires before error event
						resolve(response);
					}
					else {
						// give the error callback a chance to fire before resolving
						// requests for file:// URLs do not have a status code
						setTimeout(function () {
							resolve(response);
						}, 0);
					}
				}
			};

			try {
				client.onerror = function (/* e */) {
					response.error = 'loaderror';
					reject(response);
				};
			}
			catch (e) {
				// IE 6 will not support error handling
			}

			client.send(entity);
		}
		catch (e) {
			response.error = 'loaderror';
			reject(response);
		}

	});
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2013-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var interceptor, mixinUtil, defaulter;

interceptor = __webpack_require__(1);
mixinUtil = __webpack_require__(3);

defaulter = (function () {

	function mixin(prop, target, defaults) {
		if (prop in target || prop in defaults) {
			target[prop] = mixinUtil({}, defaults[prop], target[prop]);
		}
	}

	function copy(prop, target, defaults) {
		if (prop in defaults && !(prop in target)) {
			target[prop] = defaults[prop];
		}
	}

	var mappings = {
		method: copy,
		path: copy,
		params: mixin,
		headers: mixin,
		entity: copy,
		mixin: mixin
	};

	return function (target, defaults) {
		for (var prop in mappings) {
			/*jshint forin: false */
			mappings[prop](prop, target, defaults);
		}
		return target;
	};

}());

/**
 * Provide default values for a request. These values will be applied to the
 * request if the request object does not already contain an explicit value.
 *
 * For 'params', 'headers', and 'mixin', individual values are mixed in with the
 * request's values. The result is a new object representiing the combined
 * request and config values. Neither input object is mutated.
 *
 * @param {Client} [client] client to wrap
 * @param {string} [config.method] the default method
 * @param {string} [config.path] the default path
 * @param {Object} [config.params] the default params, mixed with the request's existing params
 * @param {Object} [config.headers] the default headers, mixed with the request's existing headers
 * @param {Object} [config.mixin] the default "mixins" (http/https options), mixed with the request's existing "mixins"
 *
 * @returns {Client}
 */
module.exports = interceptor({
	request: function handleRequest(request, config) {
		return defaulter(request, config);
	}
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var interceptor;

interceptor = __webpack_require__(1);

/**
 * Rejects the response promise based on the status code.
 *
 * Codes greater than or equal to the provided value are rejected.  Default
 * value 400.
 *
 * @param {Client} [client] client to wrap
 * @param {number} [config.code=400] code to indicate a rejection
 *
 * @returns {Client}
 */
module.exports = interceptor({
	init: function (config) {
		config.code = config.code || 400;
		return config;
	},
	response: function (response, config) {
		if (response.status && response.status.code >= config.code) {
			return Promise.reject(response);
		}
		return response;
	}
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var interceptor, mime, registry, noopConverter, missingConverter, attempt;

interceptor = __webpack_require__(1);
mime = __webpack_require__(22);
registry = __webpack_require__(70);
attempt = __webpack_require__(24);

noopConverter = {
	read: function (obj) { return obj; },
	write: function (obj) { return obj; }
};

missingConverter = {
	read: function () { throw 'No read method found on converter'; },
	write: function () { throw 'No write method found on converter'; }
};

/**
 * MIME type support for request and response entities.  Entities are
 * (de)serialized using the converter for the MIME type.
 *
 * Request entities are converted using the desired converter and the
 * 'Accept' request header prefers this MIME.
 *
 * Response entities are converted based on the Content-Type response header.
 *
 * @param {Client} [client] client to wrap
 * @param {string} [config.mime='text/plain'] MIME type to encode the request
 *   entity
 * @param {string} [config.accept] Accept header for the request
 * @param {Client} [config.client=<request.originator>] client passed to the
 *   converter, defaults to the client originating the request
 * @param {Registry} [config.registry] MIME registry, defaults to the root
 *   registry
 * @param {boolean} [config.permissive] Allow an unkown request MIME type
 *
 * @returns {Client}
 */
module.exports = interceptor({
	init: function (config) {
		config.registry = config.registry || registry;
		return config;
	},
	request: function (request, config) {
		var type, headers;

		headers = request.headers || (request.headers = {});
		type = mime.parse(headers['Content-Type'] || config.mime || 'text/plain');
		headers.Accept = headers.Accept || config.accept || type.raw + ', application/json;q=0.8, text/plain;q=0.5, */*;q=0.2';

		if (!('entity' in request)) {
			return request;
		}

		headers['Content-Type'] = type.raw;

		return config.registry.lookup(type)['catch'](function () {
			// failed to resolve converter
			if (config.permissive) {
				return noopConverter;
			}
			throw 'mime-unknown';
		}).then(function (converter) {
			var client = config.client || request.originator,
				write = converter.write || missingConverter.write;

			return attempt(write.bind(void 0, request.entity, { client: client, request: request, mime: type, registry: config.registry }))
				['catch'](function() {
					throw 'mime-serialization';
				})
				.then(function(entity) {
					request.entity = entity;
					return request;
				});
		});
	},
	response: function (response, config) {
		if (!(response.headers && response.headers['Content-Type'] && response.entity)) {
			return response;
		}

		var type = mime.parse(response.headers['Content-Type']);

		return config.registry.lookup(type)['catch'](function () { return noopConverter; }).then(function (converter) {
			var client = config.client || response.request && response.request.originator,
				read = converter.read || missingConverter.read;

			return attempt(read.bind(void 0, response.entity, { client: client, response: response, mime: type, registry: config.registry }))
				['catch'](function (e) {
					response.error = 'mime-deserialization';
					response.cause = e;
					throw response;
				})
				.then(function (entity) {
					response.entity = entity;
					return response;
				});
		});
	}
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var interceptor, UrlBuilder;

interceptor = __webpack_require__(1);
UrlBuilder = __webpack_require__(18);

/**
 * Applies request params to the path by token replacement
 *
 * Params not applied as a token are appended to the query string. Params
 * are removed from the request object, as they have been consumed.
 *
 * @deprecated The template interceptor `rest/interceptor/template` is a
 * much richer way to apply paramters to a template. This interceptor is
 * available as a bridge to users who previousled depended on this
 * functionality being available directly on clients.
 *
 * @param {Client} [client] client to wrap
 * @param {Object} [config.params] default param values
 *
 * @returns {Client}
 */
module.exports = interceptor({
	init: function (config) {
		config.params = config.params || {};
		return config;
	},
	request: function (request, config) {
		var path, params;

		path = request.path || '';
		params = request.params || {};

		request.path = new UrlBuilder(path, config.params).append('', params).build();
		delete request.params;

		return request;
	}
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var mime, registry;

mime = __webpack_require__(22);

function Registry(mimes) {

	/**
	 * Lookup the converter for a MIME type
	 *
	 * @param {string} type the MIME type
	 * @return a promise for the converter
	 */
	this.lookup = function lookup(type) {
		var parsed;

		parsed = typeof type === 'string' ? mime.parse(type) : type;

		if (mimes[parsed.raw]) {
			return mimes[parsed.raw];
		}
		if (mimes[parsed.type + parsed.suffix]) {
			return mimes[parsed.type + parsed.suffix];
		}
		if (mimes[parsed.type]) {
			return mimes[parsed.type];
		}
		if (mimes[parsed.suffix]) {
			return mimes[parsed.suffix];
		}

		return Promise.reject(new Error('Unable to locate converter for mime "' + parsed.raw + '"'));
	};

	/**
	 * Create a late dispatched proxy to the target converter.
	 *
	 * Common when a converter is registered under multiple names and
	 * should be kept in sync if updated.
	 *
	 * @param {string} type mime converter to dispatch to
	 * @returns converter whose read/write methods target the desired mime converter
	 */
	this.delegate = function delegate(type) {
		return {
			read: function () {
				var args = arguments;
				return this.lookup(type).then(function (converter) {
					return converter.read.apply(this, args);
				}.bind(this));
			}.bind(this),
			write: function () {
				var args = arguments;
				return this.lookup(type).then(function (converter) {
					return converter.write.apply(this, args);
				}.bind(this));
			}.bind(this)
		};
	};

	/**
	 * Register a custom converter for a MIME type
	 *
	 * @param {string} type the MIME type
	 * @param converter the converter for the MIME type
	 * @return a promise for the converter
	 */
	this.register = function register(type, converter) {
		mimes[type] = Promise.resolve(converter);
		return mimes[type];
	};

	/**
	 * Create a child registry whoes registered converters remain local, while
	 * able to lookup converters from its parent.
	 *
	 * @returns child MIME registry
	 */
	this.child = function child() {
		return new Registry(Object.create(mimes));
	};

}

registry = new Registry({});

// include provided serializers
registry.register('application/hal', __webpack_require__(71));
registry.register('application/json', __webpack_require__(72));
registry.register('application/x-www-form-urlencoded', __webpack_require__(23));
registry.register('multipart/form-data', __webpack_require__(73));
registry.register('text/plain', __webpack_require__(74));

registry.register('+json', registry.delegate('application/json'));

module.exports = registry;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2013-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var pathPrefix, template, find, lazyPromise, responsePromise;

pathPrefix = __webpack_require__(20);
template = __webpack_require__(21);
find = __webpack_require__(76);
lazyPromise = __webpack_require__(77);
responsePromise = __webpack_require__(8);

function defineProperty(obj, name, value) {
	Object.defineProperty(obj, name, {
		value: value,
		configurable: true,
		enumerable: false,
		writeable: true
	});
}

/**
 * Hypertext Application Language serializer
 *
 * Implemented to https://tools.ietf.org/html/draft-kelly-json-hal-06
 *
 * As the spec is still a draft, this implementation will be updated as the
 * spec evolves
 *
 * Objects are read as HAL indexing links and embedded objects on to the
 * resource. Objects are written as plain JSON.
 *
 * Embedded relationships are indexed onto the resource by the relationship
 * as a promise for the related resource.
 *
 * Links are indexed onto the resource as a lazy promise that will GET the
 * resource when a handler is first registered on the promise.
 *
 * A `requestFor` method is added to the entity to make a request for the
 * relationship.
 *
 * A `clientFor` method is added to the entity to get a full Client for a
 * relationship.
 *
 * The `_links` and `_embedded` properties on the resource are made
 * non-enumerable.
 */
module.exports = {

	read: function (str, opts) {
		var client, console;

		opts = opts || {};
		client = opts.client;
		console = opts.console || console;

		function deprecationWarning(relationship, deprecation) {
			if (deprecation && console && console.warn || console.log) {
				(console.warn || console.log).call(console, 'Relationship \'' + relationship + '\' is deprecated, see ' + deprecation);
			}
		}

		return opts.registry.lookup(opts.mime.suffix).then(function (converter) {
			return converter.read(str, opts);
		}).then(function (root) {
			find.findProperties(root, '_embedded', function (embedded, resource, name) {
				Object.keys(embedded).forEach(function (relationship) {
					if (relationship in resource) { return; }
					var related = responsePromise({
						entity: embedded[relationship]
					});
					defineProperty(resource, relationship, related);
				});
				defineProperty(resource, name, embedded);
			});
			find.findProperties(root, '_links', function (links, resource, name) {
				Object.keys(links).forEach(function (relationship) {
					var link = links[relationship];
					if (relationship in resource) { return; }
					defineProperty(resource, relationship, responsePromise.make(lazyPromise(function () {
						if (link.deprecation) { deprecationWarning(relationship, link.deprecation); }
						if (link.templated === true) {
							return template(client)({ path: link.href });
						}
						return client({ path: link.href });
					})));
				});
				defineProperty(resource, name, links);
				defineProperty(resource, 'clientFor', function (relationship, clientOverride) {
					var link = links[relationship];
					if (!link) {
						throw new Error('Unknown relationship: ' + relationship);
					}
					if (link.deprecation) { deprecationWarning(relationship, link.deprecation); }
					if (link.templated === true) {
						return template(
							clientOverride || client,
							{ template: link.href }
						);
					}
					return pathPrefix(
						clientOverride || client,
						{ prefix: link.href }
					);
				});
				defineProperty(resource, 'requestFor', function (relationship, request, clientOverride) {
					var client = this.clientFor(relationship, clientOverride);
					return client(request);
				});
			});

			return root;
		});

	},

	write: function (obj, opts) {
		return opts.registry.lookup(opts.mime.suffix).then(function (converter) {
			return converter.write(obj, opts);
		});
	}

};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



/**
 * Create a new JSON converter with custom reviver/replacer.
 *
 * The extended converter must be published to a MIME registry in order
 * to be used. The existing converter will not be modified.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 *
 * @param {function} [reviver=undefined] custom JSON.parse reviver
 * @param {function|Array} [replacer=undefined] custom JSON.stringify replacer
 */
function createConverter(reviver, replacer) {
	return {

		read: function (str) {
			return JSON.parse(str, reviver);
		},

		write: function (obj) {
			return JSON.stringify(obj, replacer);
		},

		extend: createConverter

	};
}

module.exports = createConverter();


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2014-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Michael Jackson
 */

/* global FormData, File, Blob */



function isFormElement(object) {
	return object &&
		object.nodeType === 1 && // Node.ELEMENT_NODE
		object.tagName === 'FORM';
}

function createFormDataFromObject(object) {
	var formData = new FormData();

	var value;
	for (var property in object) {
		if (object.hasOwnProperty(property)) {
			value = object[property];

			if (value instanceof File) {
				formData.append(property, value, value.name);
			} else if (value instanceof Blob) {
				formData.append(property, value);
			} else {
				formData.append(property, String(value));
			}
		}
	}

	return formData;
}

module.exports = {

	write: function (object) {
		if (typeof FormData === 'undefined') {
			throw new Error('The multipart/form-data mime serializer requires FormData support');
		}

		// Support FormData directly.
		if (object instanceof FormData) {
			return object;
		}

		// Support <form> elements.
		if (isFormElement(object)) {
			return new FormData(object);
		}

		// Support plain objects, may contain File/Blob as value.
		if (typeof object === 'object' && object !== null) {
			return createFormDataFromObject(object);
		}

		throw new Error('Unable to create FormData from object ' + object);
	}

};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2012-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



module.exports = {

	read: function (str) {
		return str;
	},

	write: function (obj) {
		return obj.toString();
	}

};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2009 Nicholas C. Zakas. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/*
 * Base 64 implementation in JavaScript
 * Original source available at https://raw.github.com/nzakas/computer-science-in-javascript/02a2745b4aa8214f2cae1bf0b15b447ca1a91b23/encodings/base64/base64.js
 *
 * Linter refinement by Scott Andrews
 */



/*jshint bitwise: false */

var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/**
 * Base64-encodes a string of text.
 *
 * @param {string} text The text to encode.
 * @return {string} The base64-encoded string.
 */
function base64Encode(text) {

	if (/([^\u0000-\u00ff])/.test(text)) {
		throw new Error('Can\'t base64 encode non-ASCII characters.');
	}

	var i = 0,
		cur, prev, byteNum,
		result = [];

	while (i < text.length) {

		cur = text.charCodeAt(i);
		byteNum = i % 3;

		switch (byteNum) {
		case 0: //first byte
			result.push(digits.charAt(cur >> 2));
			break;

		case 1: //second byte
			result.push(digits.charAt((prev & 3) << 4 | (cur >> 4)));
			break;

		case 2: //third byte
			result.push(digits.charAt((prev & 0x0f) << 2 | (cur >> 6)));
			result.push(digits.charAt(cur & 0x3f));
			break;
		}

		prev = cur;
		i += 1;
	}

	if (byteNum === 0) {
		result.push(digits.charAt((prev & 3) << 4));
		result.push('==');
	} else if (byteNum === 1) {
		result.push(digits.charAt((prev & 0x0f) << 2));
		result.push('=');
	}

	return result.join('');
}

/**
 * Base64-decodes a string of text.
 *
 * @param {string} text The text to decode.
 * @return {string} The base64-decoded string.
 */
function base64Decode(text) {

	//ignore white space
	text = text.replace(/\s/g, '');

	//first check for any unexpected input
	if (!(/^[a-z0-9\+\/\s]+\={0,2}$/i.test(text)) || text.length % 4 > 0) {
		throw new Error('Not a base64-encoded string.');
	}

	//local variables
	var cur, prev, digitNum,
		i = 0,
		result = [];

	//remove any equals signs
	text = text.replace(/\=/g, '');

	//loop over each character
	while (i < text.length) {

		cur = digits.indexOf(text.charAt(i));
		digitNum = i % 4;

		switch (digitNum) {

		//case 0: first digit - do nothing, not enough info to work with

		case 1: //second digit
			result.push(String.fromCharCode(prev << 2 | cur >> 4));
			break;

		case 2: //third digit
			result.push(String.fromCharCode((prev & 0x0f) << 4 | cur >> 2));
			break;

		case 3: //fourth digit
			result.push(String.fromCharCode((prev & 3) << 6 | cur));
			break;
		}

		prev = cur;
		i += 1;
	}

	//return a string
	return result.join('');

}

module.exports = {
	encode: base64Encode,
	decode: base64Decode
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2013-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



module.exports = {

	/**
	 * Find objects within a graph the contain a property of a certain name.
	 *
	 * NOTE: this method will not discover object graph cycles.
	 *
	 * @param {*} obj object to search on
	 * @param {string} prop name of the property to search for
	 * @param {Function} callback function to receive the found properties and their parent
	 */
	findProperties: function findProperties(obj, prop, callback) {
		if (typeof obj !== 'object' || obj === null) { return; }
		if (prop in obj) {
			callback(obj[prop], obj, prop);
		}
		Object.keys(obj).forEach(function (key) {
			findProperties(obj[key], prop, callback);
		});
	}

};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2013-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var attempt = __webpack_require__(24);

/**
 * Create a promise whose work is started only when a handler is registered.
 *
 * The work function will be invoked at most once. Thrown values will result
 * in promise rejection.
 *
 * @param {Function} work function whose ouput is used to resolve the
 *   returned promise.
 * @returns {Promise} a lazy promise
 */
function lazyPromise(work) {
	var started, resolver, promise, then;

	started = false;

	promise = new Promise(function (resolve, reject) {
		resolver = {
			resolve: resolve,
			reject: reject
		};
	});
	then = promise.then;

	promise.then = function () {
		if (!started) {
			started = true;
			attempt(work).then(resolver.resolve, resolver.reject);
		}
		return then.apply(promise, arguments);
	};

	return promise;
}

module.exports = lazyPromise;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var charMap;

charMap = (function () {
	var strings = {
		alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
		digit: '0123456789'
	};

	strings.genDelims = ':/?#[]@';
	strings.subDelims = '!$&\'()*+,;=';
	strings.reserved = strings.genDelims + strings.subDelims;
	strings.unreserved = strings.alpha + strings.digit + '-._~';
	strings.url = strings.reserved + strings.unreserved;
	strings.scheme = strings.alpha + strings.digit + '+-.';
	strings.userinfo = strings.unreserved + strings.subDelims + ':';
	strings.host = strings.unreserved + strings.subDelims;
	strings.port = strings.digit;
	strings.pchar = strings.unreserved + strings.subDelims + ':@';
	strings.segment = strings.pchar;
	strings.path = strings.segment + '/';
	strings.query = strings.pchar + '/?';
	strings.fragment = strings.pchar + '/?';

	return Object.keys(strings).reduce(function (charMap, set) {
		charMap[set] = strings[set].split('').reduce(function (chars, myChar) {
			chars[myChar] = true;
			return chars;
		}, {});
		return charMap;
	}, {});
}());

function encode(str, allowed) {
	if (typeof str !== 'string') {
		throw new Error('String required for URL encoding');
	}
	return str.split('').map(function (myChar) {
		if (allowed.hasOwnProperty(myChar)) {
			return myChar;
		}
		var code = myChar.charCodeAt(0);
		if (code <= 127) {
			var encoded = code.toString(16).toUpperCase();
 			return '%' + (encoded.length % 2 === 1 ? '0' : '') + encoded;
		}
		else {
			return encodeURIComponent(myChar).toUpperCase();
		}
	}).join('');
}

function makeEncoder(allowed) {
	allowed = allowed || charMap.unreserved;
	return function (str) {
		return encode(str, allowed);
	};
}

function decode(str) {
	return decodeURIComponent(str);
}

module.exports = {

	/*
	 * Decode URL encoded strings
	 *
	 * @param {string} URL encoded string
	 * @returns {string} URL decoded string
	 */
	decode: decode,

	/*
	 * URL encode a string
	 *
	 * All but alpha-numerics and a very limited set of punctuation - . _ ~ are
	 * encoded.
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encode: makeEncoder(),

	/*
	* URL encode a URL
	*
	* All character permitted anywhere in a URL are left unencoded even
	* if that character is not permitted in that portion of a URL.
	*
	* Note: This method is typically not what you want.
	*
	* @param {string} string to encode
	* @returns {string} URL encoded string
	*/
	encodeURL: makeEncoder(charMap.url),

	/*
	 * URL encode the scheme portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeScheme: makeEncoder(charMap.scheme),

	/*
	 * URL encode the user info portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeUserInfo: makeEncoder(charMap.userinfo),

	/*
	 * URL encode the host portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeHost: makeEncoder(charMap.host),

	/*
	 * URL encode the port portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodePort: makeEncoder(charMap.port),

	/*
	 * URL encode a path segment portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodePathSegment: makeEncoder(charMap.segment),

	/*
	 * URL encode the path portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodePath: makeEncoder(charMap.path),

	/*
	 * URL encode the query portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeQuery: makeEncoder(charMap.query),

	/*
	 * URL encode the fragment portion of a URL
	 *
	 * @param {string} string to encode
	 * @returns {string} URL encoded string
	 */
	encodeFragment: makeEncoder(charMap.fragment)

};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2015-2016 the original author or authors
 * @license MIT, see LICENSE.txt for details
 *
 * @author Scott Andrews
 */



var uriEncoder, operations, prefixRE;

uriEncoder = __webpack_require__(78);

prefixRE = /^([^:]*):([0-9]+)$/;
operations = {
	'':  { first: '',  separator: ',', named: false, empty: '',  encoder: uriEncoder.encode },
	'+': { first: '',  separator: ',', named: false, empty: '',  encoder: uriEncoder.encodeURL },
	'#': { first: '#', separator: ',', named: false, empty: '',  encoder: uriEncoder.encodeURL },
	'.': { first: '.', separator: '.', named: false, empty: '',  encoder: uriEncoder.encode },
	'/': { first: '/', separator: '/', named: false, empty: '',  encoder: uriEncoder.encode },
	';': { first: ';', separator: ';', named: true,  empty: '',  encoder: uriEncoder.encode },
	'?': { first: '?', separator: '&', named: true,  empty: '=', encoder: uriEncoder.encode },
	'&': { first: '&', separator: '&', named: true,  empty: '=', encoder: uriEncoder.encode },
	'=': { reserved: true },
	',': { reserved: true },
	'!': { reserved: true },
	'@': { reserved: true },
	'|': { reserved: true }
};

function apply(operation, expression, params) {
	/*jshint maxcomplexity:11 */
	return expression.split(',').reduce(function (result, variable) {
		var opts, value;

		opts = {};
		if (variable.slice(-1) === '*') {
			variable = variable.slice(0, -1);
			opts.explode = true;
		}
		if (prefixRE.test(variable)) {
			var prefix = prefixRE.exec(variable);
			variable = prefix[1];
			opts.maxLength = parseInt(prefix[2]);
		}

		variable = uriEncoder.decode(variable);
		value = params[variable];

		if (value === void 0 || value === null) {
			return result;
		}
		if (Array.isArray(value)) {
			result = value.reduce(function (result, value) {
				if (result.length) {
					result += opts.explode ? operation.separator : ',';
					if (operation.named && opts.explode) {
						result += operation.encoder(variable);
						result += value.length ? '=' : operation.empty;
					}
				}
				else {
					result += operation.first;
					if (operation.named) {
						result += operation.encoder(variable);
						result += value.length ? '=' : operation.empty;
					}
				}
				result += operation.encoder(value);
				return result;
			}, result);
		}
		else if (typeof value === 'object') {
			result = Object.keys(value).reduce(function (result, name) {
				if (result.length) {
					result += opts.explode ? operation.separator : ',';
				}
				else {
					result += operation.first;
					if (operation.named && !opts.explode) {
						result += operation.encoder(variable);
						result += value[name].length ? '=' : operation.empty;
					}
				}
				result += operation.encoder(name);
				result += opts.explode ? '=' : ',';
				result += operation.encoder(value[name]);
				return result;
			}, result);
		}
		else {
			value = String(value);
			if (opts.maxLength) {
				value = value.slice(0, opts.maxLength);
			}
			result += result.length ? operation.separator : operation.first;
			if (operation.named) {
				result += operation.encoder(variable);
				result += value.length ? '=' : operation.empty;
			}
			result += operation.encoder(value);
		}

		return result;
	}, '');
}

function expandExpression(expression, params) {
	var operation;

	operation = operations[expression.slice(0,1)];
	if (operation) {
		expression = expression.slice(1);
	}
	else {
		operation = operations[''];
	}

	if (operation.reserved) {
		throw new Error('Reserved expression operations are not supported');
	}

	return apply(operation, expression, params);
}

function expandTemplate(template, params) {
	var start, end, uri;

	uri = '';
	end = 0;
	while (true) {
		start = template.indexOf('{', end);
		if (start === -1) {
			// no more expressions
			uri += template.slice(end);
			break;
		}
		uri += template.slice(end, start);
		end = template.indexOf('}', start) + 1;
		uri += expandExpression(template.slice(start + 1, end - 1), params);
	}

	return uri;
}

module.exports = {

	/**
	 * Expand a URI Template with parameters to form a URI.
	 *
	 * Full implementation (level 4) of rfc6570.
	 * @see https://tools.ietf.org/html/rfc6570
	 *
	 * @param {string} template URI template
	 * @param {Object} [params] params to apply to the template durring expantion
	 * @returns {string} expanded URI
	 */
	expand: expandTemplate

};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A typeahead component for inputs
 * @class Suggestions
 *
 * @param {HTMLInputElement} el A valid HTML input element
 * @param {Array} data An array of data used for results
 * @param {Object} options
 * @param {Number} [options.limit=5] Max number of results to display in the auto suggest list.
 * @param {Number} [options.minLength=2] Number of characters typed into an input to trigger suggestions.
 * @return {Suggestions} `this`
 * @example
 * // in the browser
 * var input = document.querySelector('input');
 * var data = [
 *   'Roy Eldridge',
 *   'Roy Hargrove',
 *   'Rex Stewart'
 * ];
 *
 * new Suggestions(input, data);
 *
 * // with options
 * var input = document.querySelector('input');
 * var data = [{
 *   name: 'Roy Eldridge',
 *   year: 1911
 * }, {
 *   name: 'Roy Hargrove',
 *   year: 1969
 * }, {
 *   name: 'Rex Stewart',
 *   year: 1907
 * }];
 *
 * var typeahead = new Suggestions(input, data, {
 *   filter: false, // Disable filtering
 *   minLength: 3, // Number of characters typed into an input to trigger suggestions.
 *   limit: 3 //  Max number of results to display.
 * });
 *
 * // As we're passing an object of an arrays as data, override
 * // `getItemValue` by specifying the specific property to search on.
 * typeahead.getItemValue = function(item) { return item.name };
 *
 * input.addEventListener('change', function() {
 *   console.log(typeahead.selected); // Current selected item.
 * });
 *
 * // With browserify
 * var Suggestions = require('suggestions');
 *
 * new Suggestions(input, data);
 */
var Suggestions = __webpack_require__(82);
window.Suggestions = module.exports = Suggestions;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

'Use strict';

var List = function(component) {
  this.component = component;
  this.items = [];
  this.active = 0;
  this.element = document.createElement('ul');
  this.element.className = 'suggestions';

  // selectingListItem is set to true in the time between the mousedown and mouseup when clicking an item in the list
  // mousedown on a list item will cause the input to blur which normally hides the list, so this flag is used to keep
  // the list open until the mouseup
  this.selectingListItem = false;

  component.el.parentNode.insertBefore(this.element, component.el.nextSibling);
  return this;
};

List.prototype.show = function() {
  this.element.style.display = 'block';
};

List.prototype.hide = function() {
  this.element.style.display = 'none';
};

List.prototype.add = function(item) {
  this.items.push(item);
};

List.prototype.clear = function() {
  this.items = [];
  this.active = 0;
};

List.prototype.isEmpty = function() {
  return !this.items.length;
};

List.prototype.draw = function() {
  this.element.innerHTML = '';

  if (this.items.length === 0) {
    this.hide();
    return;
  }

  for (var i = 0; i < this.items.length; i++) {
    this.drawItem(this.items[i], this.active === i);
  }

  this.show();
};

List.prototype.drawItem = function(item, active) {
  var li = document.createElement('li'),
    a = document.createElement('a');

  if (active) li.className += ' active';

  a.innerHTML = item.string;

  li.appendChild(a);
  this.element.appendChild(li);

  li.addEventListener('mousedown', function() {
    this.selectingListItem = true;
  }.bind(this));

  li.addEventListener('mouseup', function() {
    this.handleMouseUp.call(this, item);
  }.bind(this));
};

List.prototype.handleMouseUp = function(item) {
  this.selectingListItem = false;
  this.component.value(item.original);
  this.clear();
  this.draw();
};

List.prototype.move = function(index) {
  this.active = index;
  this.draw();
};

List.prototype.previous = function() {
  this.move(this.active === 0 ? this.items.length - 1 : this.active - 1);
};

List.prototype.next = function() {
  this.move(this.active === this.items.length - 1 ? 0 : this.active + 1);
};

module.exports = List;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var extend = __webpack_require__(27);
var fuzzy = __webpack_require__(53);
var List = __webpack_require__(81);

var Suggestions = function(el, data, options) {
  options = options || {};

  this.options = extend({
    minLength: 2,
    limit: 5,
    filter: true
  }, options);

  this.el = el;
  this.data = data || [];
  this.list = new List(this);

  this.query = '';
  this.selected = null;

  this.list.draw();

  this.el.addEventListener('keyup', function(e) {
    this.handleKeyUp(e.keyCode);
  }.bind(this), false);

  this.el.addEventListener('keydown', function(e) {
    this.handleKeyDown(e);
  }.bind(this));

  this.el.addEventListener('focus', function() {
    this.handleFocus();
  }.bind(this));

  this.el.addEventListener('blur', function() {
    this.handleBlur();
  }.bind(this));

  this.el.addEventListener('paste', function(e) {
    this.handlePaste(e);
  }.bind(this));

  return this;
};

Suggestions.prototype.handleKeyUp = function(keyCode) {
  // 40 - DOWN
  // 38 - UP
  // 27 - ESC
  // 13 - ENTER
  // 9 - TAB

  if (keyCode === 40 ||
      keyCode === 38 ||
      keyCode === 27 ||
      keyCode === 13 ||
      keyCode === 9) return;

  this.handleInputChange(this.el.value);
};

Suggestions.prototype.handleKeyDown = function(e) {
  switch (e.keyCode) {
    case 13: // ENTER
    case 9:  // TAB
      e.preventDefault();
      if (!this.list.isEmpty()) {
        this.value(this.list.items[this.list.active].original);
        this.list.hide();
      }
    break;
    case 27: // ESC
      if (!this.list.isEmpty()) this.list.hide();
    break;
    case 38: // UP
      this.list.previous();
    break;
    case 40: // DOWN
      this.list.next();
    break;
  }
};

Suggestions.prototype.handleBlur = function() {
  if (!this.list.selectingListItem) {
    this.list.hide();
  }
};

Suggestions.prototype.handlePaste = function(e) {
  if (e.clipboardData) {
    this.handleInputChange(e.clipboardData.getData('Text'));
  } else {
    var self = this;
    setTimeout(function () {
      self.handleInputChange(e.target.value);
    }, 100);
  }
};

Suggestions.prototype.handleInputChange = function(query) {
  this.query = this.normalize(query);

  this.list.clear();

  if (this.query.length < this.options.minLength) {
    this.list.draw();
    return;
  }

  this.getCandidates(function(data) {
    for (var i = 0; i < data.length; i++) {
      this.list.add(data[i]);
      if (i === (this.options.limit - 1)) break;
    }
    this.list.draw();
  }.bind(this));
};

Suggestions.prototype.handleFocus = function() {
  if (!this.list.isEmpty()) this.list.show();
  this.list.selectingListItem = false;
};

/**
 * Update data previously passed
 *
 * @param {Array} revisedData
 */
Suggestions.prototype.update = function(revisedData) {
  this.data = revisedData;
  this.handleKeyUp();
};

/**
 * Clears data
 */
Suggestions.prototype.clear = function() {
  this.data = [];
  this.list.clear();
};

/**
 * Normalize the results list and input value for matching
 *
 * @param {String} value
 * @return {String}
 */
Suggestions.prototype.normalize = function(value) {
  value = value.toLowerCase();
  return value;
};

/**
 * Evaluates whether an array item qualifies as a match with the current query
 *
 * @param {String} candidate a possible item from the array passed
 * @param {String} query the current query
 * @return {Boolean}
 */
Suggestions.prototype.match = function(candidate, query) {
  return candidate.indexOf(query) > -1;
};

Suggestions.prototype.value = function(value) {
  this.selected = value;
  this.el.value = this.getItemValue(value);

  if (document.createEvent) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent('change', true, false);
    this.el.dispatchEvent(e);
  } else {
    this.el.fireEvent('onchange');
  }
};

Suggestions.prototype.getCandidates = function(callback) {
  var options = {
    pre: '<strong>',
    post: '</strong>',
    extract: function(d) { return this.getItemValue(d); }.bind(this)
  };

  var results = this.options.filter ?
    fuzzy.filter(this.query, this.data, options) :
    this.data.map(function(d) {
      var boldString = this.getItemValue(d);
      var indexString = this.normalize(boldString);
      var indexOfQuery = indexString.lastIndexOf(this.query);
      while(indexOfQuery > -1) {
        var endIndexOfQuery = indexOfQuery + this.query.length;
        boldString = boldString.slice(0, indexOfQuery) + '<strong>' + boldString.slice(indexOfQuery, endIndexOfQuery) + '</strong>' + boldString.slice(endIndexOfQuery);
        indexOfQuery = indexString.slice(0, indexOfQuery).lastIndexOf(this.query);
      }
      return {
        original: d,
        string: boldString
      };
    }.bind(this));

  callback(results);
};

/**
 * For a given item in the data array, return what should be used as the candidate string
 *
 * @param {Object|String} item an item from the data array
 * @return {String} item
 */
Suggestions.prototype.getItemValue = function(item) {
  return item;
};

module.exports = Suggestions;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(32);

var _bling = __webpack_require__(4);

var _autocomplete = __webpack_require__(28);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _typeAhead = __webpack_require__(31);

var _typeAhead2 = _interopRequireDefault(_typeAhead);

var _map = __webpack_require__(30);

var _map2 = _interopRequireDefault(_map);

var _heart = __webpack_require__(29);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _autocomplete2.default)((0, _bling.$)('#address'), (0, _bling.$)('#lat'), (0, _bling.$)('#lng'));

(0, _typeAhead2.default)((0, _bling.$)('.search'));

(0, _map2.default)((0, _bling.$)('#map'));

var heartForms = (0, _bling.$$)('form.heart');
heartForms.on('submit', _heart2.default);

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map