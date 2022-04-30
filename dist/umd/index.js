(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/domination-js/dist/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/domination-js/dist/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/**
 * Document Object Model - helper functions
 * Helps you interact with the DOM safely and easily.
 *
 */
class DOM {
    /**
     * Adds an event listener that follows the event delegation pattern. The advantage is that you can add
     * elements at any depth inside the parent container without having to worry about the event being
     * applied. This solves having to add, remove, and manage events per element.
     * @param type - Event type, example: click, dblclick, mouseover, ect..
     * @param selector - Same as query selector. Element class denoted with period, id denoted with #, or element name.
     * @param callback - A callback function to perform when the event is triggered.
     * @param useCapture - Optionally use capture instead of event bubbling.
     * @param parent - Optionally where to add the listener. Defaults to the document.
     *
     * ```javascript
     *
     * // Example 1 - Adds click to ID unique-id inside of document.
     * DOM.addEventDelegate('click', "#unique-id", () => { console.log("FIRE!") });
     *
     * // Example 2 - Adds click to class .btn inside of document.
     * DOM.addEventDelegate('click', ".btn", () => { console.log("FIRE!") });
     *
     * // Example 3 - Adds click to button elements inside window via capture.
     * DOM.addEventDelegate('click', "button", () => { console.log("FIRE!") }, true, window);
     *
     *
     * ```
     */
    static addEventDelegate(type, selector, callback, useCapture = false, parent = document) {
        parent.addEventListener(type, (e) => {
            if (e.target.matches(selector))
                callback(e);
        }, useCapture);
    }
    /**
     * Create a complex DOM element with a single funciton.
     * @param element - Standard HTML element. Example: div, span, input, button, ect...
     * @param attributes - (Optional) Pass an object using this pattern. **{ attributeName : value }**.
     * - ```text``` You are able to pass a string as textContent.
     * - ```append``` Pass an element/node, or an array of elements/nodes to append.
     * - ```html``` You are able to pass a string as HTML. **Do not pass user changable data for obvious security reasons!**
     * - ```class``` You are able to pass multiple classes using a space as the delimiter.
     * @param events - (Optional) Pass an object using this pattern to add events. **{ eventType: callback }**. The eventType consists of standard javascript events.
     * @returns The new created element inferred from the ```element``` param.
     * ```javascript
     *
     * // Example 1 - <div id="unique-id" class="text-class"> Some call to action text! </div>
     * let newElement = DOM.create("div", { id: "unique-id", class: "text-class", text: "Some call to action text!"});
     *
     * // Example 2 - When clicked it prints out "Clicked!" to the console.
     * // <button id="unique-id-2" class="button-class">
     * //  <div id="unique-id" class="text-class"> Some call to action text! </div>
     * // </button>
     * DOM.create("button", { id: "unique-id-2", class: "button-class", text: newElement}, { click: () => console.log('Clicked!') });
     *
     *
     * ```
     */
    static create(element, attributes = null, events = null) {
        let elem = document.createElement(element);
        if (attributes !== null) {
            Object.keys(attributes).forEach(attributeName => {
                switch (attributeName) {
                    case "class":
                        (attributes[attributeName].trim().split(/\s+/)).forEach(attrClass => { elem.classList.add(attrClass); });
                        break;
                    case "text":
                    case "append":
                        if (typeof attributes[attributeName] === "string") {
                            elem.textContent = attributes[attributeName];
                        }
                        else {
                            if (attributes[attributeName].length) {
                                elem.append(...attributes[attributeName]);
                            }
                            else {
                                elem.append(attributes[attributeName]);
                            }
                        }
                        break;
                    case "html":
                        elem.innerHTML = attributes[attributeName];
                        break;
                    case "dataset":
                        Object.entries(attributes[attributeName]).forEach(([dataKey, dataValue]) => {
                            elem.dataset[dataKey] = dataValue;
                        });
                        break;
                    default: elem.setAttribute(attributeName, attributes[attributeName]);
                }
            });
        }
        if (events !== null) {
            let eventList = Object.keys(events);
            eventList.forEach(event => elem.addEventListener(event, events[event]));
        }
        return elem;
    }
    /**
     * Shorthand for the query selector
     * @param query - A query selector string, Example: ```".class"```
     * @param element - (Optional) Defaults to the document object
     * @return The first or only element
     */
    static select(query, parent = document) {
        return parent.querySelector(query);
    }
    /**
     * Shorthand for the query selector all with the added bonus of returning an array.
     * @param query - A query selector string, Example: ```".class"```
     * @param element - (Optional) Defaults to the document object
     * @return An array of elements
     */
    static selectAll(query, parent = document) {
        return Array.prototype.slice.call(parent.querySelectorAll(query));
    }
    /**
     * Detach and return an Element from the DOM
     * @param reference A query selector string or elem reference (Element, ect...)
     * @return The detached element
     */
    static detach(reference) {
        let elem = typeof reference === "string" ? this.select(reference) : reference;
        return elem.parentElement.removeChild(elem);
    }
    /**
     * Two-way data binding between an object's property and an Element's attribute.
     * @param object - The parent object where the property will be added.
     * @param objectProperty - Create a property that binds with an attribute.
     * @param element - The element or query selector of the element.
     * @param elementAttribute - The attribute to bind to the object's property.
     * ```javascript
     *
     * // Example - Binds Object Property "name" (dataObject.name) to an element's attribute value.
     * let dataObject = {};
     * DOM.bindAttribute(dataObject, "name", "#unique-id", 'value');
     *
     *
     * ```
     */
    static bindAttribute(object, objectProperty, element, elementAttribute) {
        let elem = typeof element === "string" ? this.select(element) : element;
        Object.defineProperty(object, objectProperty, {
            get() {
                return elem.getAttribute(elementAttribute);
            },
            set(value) {
                elem.setAttribute(elementAttribute, value);
            }
        });
    }
    /**
     * Get a route based on current location path name.
     * @param isArray - (Optional) This will return the path as an array ```['some', 'path', 'defined']```
     * otherwise it will default to a string ```'/some/path/defined'```.
     * @return - A string or array representing the current document.location.pathName
     *
     * ```javascript
     *
     * // Example 1 - Get path `/some/path/defined`
     * let currentRoute = DOM.getRoute();
     *
     * // Example 2 - Get path as array ['some', 'path', 'defined']
     * let currentRoute = DOM.getRoute(true);
     *
     * ```
     */
    static getRoute(isArray = false) {
        return isArray ? document.location.pathname.split("/").filter(n => n) : document.location.pathname;
    }
    /**
     * Get the routes query string as a string or an object
     * @param isObject - (Optional) Defaults to true and will return an object by default.
     * @return - A string or object representing the current document.location.search
     *
     * ```javascript
     *
     * // Example 1 - Get query string as object ```{ test : 1 }```
     * let currentRoute = DOM.getRouteData();
     *
     * // Example 2 - Get query string as string ```"?test=1"```
     * let currentRoute = DOM.getRouteData(false);
     *
     * ```
     */
    static getRouteData(isObject = true) {
        return isObject ? Object.fromEntries(new URLSearchParams(document.location.search)) : document.location.search;
    }
    /**
     * Set the browser url and update browser history without triggering a full page refresh.
     * @param route - The path location with an optional query string
     *
     * ```javascript
     *
     * // Example 1 - Set url localhost:4200/some/path/defined
     * DOM.setRoute('/some/path/defined');
     *
     * // Example 2 - Gets current route as array ['some', 'path', 'defined']
     * //             Sets new route localhost:4200/some/path/new
     * let currentRoute = DOM.getRoute(true);
     * DOM.setRoute(`/${currentRoute[0]}/${currentRoute[1]}/new`);
     *
     * ```
     */
    static setRoute(route) {
        window.history.pushState({}, "", route);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/index.ts":
/*!******************************!*\
  !*** ./src/index-exposed.ts ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!../node_modules/ts-loader/index.js!./index.ts */ "./node_modules/ts-loader/index.js!./src/index.ts");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
___EXPOSE_LOADER_GLOBAL_THIS___["Infinite"] = ___EXPOSE_LOADER_IMPORT___;
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "./node_modules/expose-loader/dist/runtime/getGlobalThis.js":
/*!******************************************************************!*\
  !*** ./node_modules/expose-loader/dist/runtime/getGlobalThis.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// eslint-disable-next-line func-names
module.exports = function () {
  if (typeof globalThis === "object") {
    return globalThis;
  }

  var g;

  try {
    // This works if eval is allowed (see CSP)
    // eslint-disable-next-line no-new-func
    g = this || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") {
      return window;
    } // This works if the self reference is available


    if (typeof self === "object") {
      return self;
    } // This works if the global reference is available


    if (typeof __webpack_require__.g !== "undefined") {
      return __webpack_require__.g;
    }
  }

  return g;
}();

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/index.ts":
/*!********************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./src/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Infinite": () => (/* binding */ Infinite)
/* harmony export */ });
/* harmony import */ var domination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domination-js */ "./node_modules/domination-js/dist/esm/index.js");

/**
 * Quickly Create high quality UI
 *
 */
class Infinite {
    /**
     * Create standardized container and pass content
     * @param content - String | Element | Element[]
     */
    static createContainer(content) {
        return domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "container", append: content });
    }
    /**
     * Create standardize switch
     * @param status - On or off
     */
    static createSwitch(status, id) {
        let checkbox = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("input", { id: id, type: "checkbox", name: "jelly-switch", checked: status });
        let visual = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("label", { class: "switch-content", append: domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create('p', { class: "jelly-content" }) });
        return domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "switch", append: [checkbox, visual] });
    }
    static createRow() {
        return "cool";
    }
}


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXB0L2luZmluaXRlLXVpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Ad2ViZGlzcnVwdC9pbmZpbml0ZS11aS8uL25vZGVfbW9kdWxlcy9kb21pbmF0aW9uLWpzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL0B3ZWJkaXNydXB0L2luZmluaXRlLXVpLy4vc3JjL2luZGV4LnRzP2JmNmMiLCJ3ZWJwYWNrOi8vQHdlYmRpc3J1cHQvaW5maW5pdGUtdWkvLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qcyIsIndlYnBhY2s6Ly9Ad2ViZGlzcnVwdC9pbmZpbml0ZS11aS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Ad2ViZGlzcnVwdC9pbmZpbml0ZS11aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ad2ViZGlzcnVwdC9pbmZpbml0ZS11aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdlYmRpc3J1cHQvaW5maW5pdGUtdWkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9Ad2ViZGlzcnVwdC9pbmZpbml0ZS11aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B3ZWJkaXNydXB0L2luZmluaXRlLXVpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdlYmRpc3J1cHQvaW5maW5pdGUtdWkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9Ad2ViZGlzcnVwdC9pbmZpbml0ZS11aS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQHdlYmRpc3J1cHQvaW5maW5pdGUtdWkvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyoqXHJcbiAqIERvY3VtZW50IE9iamVjdCBNb2RlbCAtIGhlbHBlciBmdW5jdGlvbnNcclxuICogSGVscHMgeW91IGludGVyYWN0IHdpdGggdGhlIERPTSBzYWZlbHkgYW5kIGVhc2lseS5cclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBET00ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgZm9sbG93cyB0aGUgZXZlbnQgZGVsZWdhdGlvbiBwYXR0ZXJuLiBUaGUgYWR2YW50YWdlIGlzIHRoYXQgeW91IGNhbiBhZGRcclxuICAgICAqIGVsZW1lbnRzIGF0IGFueSBkZXB0aCBpbnNpZGUgdGhlIHBhcmVudCBjb250YWluZXIgd2l0aG91dCBoYXZpbmcgdG8gd29ycnkgYWJvdXQgdGhlIGV2ZW50IGJlaW5nXHJcbiAgICAgKiBhcHBsaWVkLiBUaGlzIHNvbHZlcyBoYXZpbmcgdG8gYWRkLCByZW1vdmUsIGFuZCBtYW5hZ2UgZXZlbnRzIHBlciBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHR5cGUgLSBFdmVudCB0eXBlLCBleGFtcGxlOiBjbGljaywgZGJsY2xpY2ssIG1vdXNlb3ZlciwgZWN0Li5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvciAtIFNhbWUgYXMgcXVlcnkgc2VsZWN0b3IuIEVsZW1lbnQgY2xhc3MgZGVub3RlZCB3aXRoIHBlcmlvZCwgaWQgZGVub3RlZCB3aXRoICMsIG9yIGVsZW1lbnQgbmFtZS5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcGVyZm9ybSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQuXHJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZSAtIE9wdGlvbmFsbHkgdXNlIGNhcHR1cmUgaW5zdGVhZCBvZiBldmVudCBidWJibGluZy5cclxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBPcHRpb25hbGx5IHdoZXJlIHRvIGFkZCB0aGUgbGlzdGVuZXIuIERlZmF1bHRzIHRvIHRoZSBkb2N1bWVudC5cclxuICAgICAqXHJcbiAgICAgKiBgYGBqYXZhc2NyaXB0XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAxIC0gQWRkcyBjbGljayB0byBJRCB1bmlxdWUtaWQgaW5zaWRlIG9mIGRvY3VtZW50LlxyXG4gICAgICogRE9NLmFkZEV2ZW50RGVsZWdhdGUoJ2NsaWNrJywgXCIjdW5pcXVlLWlkXCIsICgpID0+IHsgY29uc29sZS5sb2coXCJGSVJFIVwiKSB9KTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBBZGRzIGNsaWNrIHRvIGNsYXNzIC5idG4gaW5zaWRlIG9mIGRvY3VtZW50LlxyXG4gICAgICogRE9NLmFkZEV2ZW50RGVsZWdhdGUoJ2NsaWNrJywgXCIuYnRuXCIsICgpID0+IHsgY29uc29sZS5sb2coXCJGSVJFIVwiKSB9KTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDMgLSBBZGRzIGNsaWNrIHRvIGJ1dHRvbiBlbGVtZW50cyBpbnNpZGUgd2luZG93IHZpYSBjYXB0dXJlLlxyXG4gICAgICogRE9NLmFkZEV2ZW50RGVsZWdhdGUoJ2NsaWNrJywgXCJidXR0b25cIiwgKCkgPT4geyBjb25zb2xlLmxvZyhcIkZJUkUhXCIpIH0sIHRydWUsIHdpbmRvdyk7XHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkRXZlbnREZWxlZ2F0ZSh0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2ssIHVzZUNhcHR1cmUgPSBmYWxzZSwgcGFyZW50ID0gZG9jdW1lbnQpIHtcclxuICAgICAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlKTtcclxuICAgICAgICB9LCB1c2VDYXB0dXJlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29tcGxleCBET00gZWxlbWVudCB3aXRoIGEgc2luZ2xlIGZ1bmNpdG9uLlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBTdGFuZGFyZCBIVE1MIGVsZW1lbnQuIEV4YW1wbGU6IGRpdiwgc3BhbiwgaW5wdXQsIGJ1dHRvbiwgZWN0Li4uXHJcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAtIChPcHRpb25hbCkgUGFzcyBhbiBvYmplY3QgdXNpbmcgdGhpcyBwYXR0ZXJuLiAqKnsgYXR0cmlidXRlTmFtZSA6IHZhbHVlIH0qKi5cclxuICAgICAqIC0gYGBgdGV4dGBgYCBZb3UgYXJlIGFibGUgdG8gcGFzcyBhIHN0cmluZyBhcyB0ZXh0Q29udGVudC5cclxuICAgICAqIC0gYGBgYXBwZW5kYGBgIFBhc3MgYW4gZWxlbWVudC9ub2RlLCBvciBhbiBhcnJheSBvZiBlbGVtZW50cy9ub2RlcyB0byBhcHBlbmQuXHJcbiAgICAgKiAtIGBgYGh0bWxgYGAgWW91IGFyZSBhYmxlIHRvIHBhc3MgYSBzdHJpbmcgYXMgSFRNTC4gKipEbyBub3QgcGFzcyB1c2VyIGNoYW5nYWJsZSBkYXRhIGZvciBvYnZpb3VzIHNlY3VyaXR5IHJlYXNvbnMhKipcclxuICAgICAqIC0gYGBgY2xhc3NgYGAgWW91IGFyZSBhYmxlIHRvIHBhc3MgbXVsdGlwbGUgY2xhc3NlcyB1c2luZyBhIHNwYWNlIGFzIHRoZSBkZWxpbWl0ZXIuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRzIC0gKE9wdGlvbmFsKSBQYXNzIGFuIG9iamVjdCB1c2luZyB0aGlzIHBhdHRlcm4gdG8gYWRkIGV2ZW50cy4gKip7IGV2ZW50VHlwZTogY2FsbGJhY2sgfSoqLiBUaGUgZXZlbnRUeXBlIGNvbnNpc3RzIG9mIHN0YW5kYXJkIGphdmFzY3JpcHQgZXZlbnRzLlxyXG4gICAgICogQHJldHVybnMgVGhlIG5ldyBjcmVhdGVkIGVsZW1lbnQgaW5mZXJyZWQgZnJvbSB0aGUgYGBgZWxlbWVudGBgYCBwYXJhbS5cclxuICAgICAqIGBgYGphdmFzY3JpcHRcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDEgLSA8ZGl2IGlkPVwidW5pcXVlLWlkXCIgY2xhc3M9XCJ0ZXh0LWNsYXNzXCI+IFNvbWUgY2FsbCB0byBhY3Rpb24gdGV4dCEgPC9kaXY+XHJcbiAgICAgKiBsZXQgbmV3RWxlbWVudCA9IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBpZDogXCJ1bmlxdWUtaWRcIiwgY2xhc3M6IFwidGV4dC1jbGFzc1wiLCB0ZXh0OiBcIlNvbWUgY2FsbCB0byBhY3Rpb24gdGV4dCFcIn0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgMiAtIFdoZW4gY2xpY2tlZCBpdCBwcmludHMgb3V0IFwiQ2xpY2tlZCFcIiB0byB0aGUgY29uc29sZS5cclxuICAgICAqIC8vIDxidXR0b24gaWQ9XCJ1bmlxdWUtaWQtMlwiIGNsYXNzPVwiYnV0dG9uLWNsYXNzXCI+XHJcbiAgICAgKiAvLyAgPGRpdiBpZD1cInVuaXF1ZS1pZFwiIGNsYXNzPVwidGV4dC1jbGFzc1wiPiBTb21lIGNhbGwgdG8gYWN0aW9uIHRleHQhIDwvZGl2PlxyXG4gICAgICogLy8gPC9idXR0b24+XHJcbiAgICAgKiBET00uY3JlYXRlKFwiYnV0dG9uXCIsIHsgaWQ6IFwidW5pcXVlLWlkLTJcIiwgY2xhc3M6IFwiYnV0dG9uLWNsYXNzXCIsIHRleHQ6IG5ld0VsZW1lbnR9LCB7IGNsaWNrOiAoKSA9PiBjb25zb2xlLmxvZygnQ2xpY2tlZCEnKSB9KTtcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGUoZWxlbWVudCwgYXR0cmlidXRlcyA9IG51bGwsIGV2ZW50cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChhdHRyaWJ1dGVOYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjbGFzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXS50cmltKCkuc3BsaXQoL1xccysvKSkuZm9yRWFjaChhdHRyQ2xhc3MgPT4geyBlbGVtLmNsYXNzTGlzdC5hZGQoYXR0ckNsYXNzKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFwcGVuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hcHBlbmQoLi4uYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkYXRhc2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pLmZvckVhY2goKFtkYXRhS2V5LCBkYXRhVmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmRhdGFzZXRbZGF0YUtleV0gPSBkYXRhVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlbGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50TGlzdCA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdC5mb3JFYWNoKGV2ZW50ID0+IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRzW2V2ZW50XSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2hvcnRoYW5kIGZvciB0aGUgcXVlcnkgc2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSBxdWVyeSAtIEEgcXVlcnkgc2VsZWN0b3Igc3RyaW5nLCBFeGFtcGxlOiBgYGBcIi5jbGFzc1wiYGBgXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIChPcHRpb25hbCkgRGVmYXVsdHMgdG8gdGhlIGRvY3VtZW50IG9iamVjdFxyXG4gICAgICogQHJldHVybiBUaGUgZmlyc3Qgb3Igb25seSBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZWxlY3QocXVlcnksIHBhcmVudCA9IGRvY3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2hvcnRoYW5kIGZvciB0aGUgcXVlcnkgc2VsZWN0b3IgYWxsIHdpdGggdGhlIGFkZGVkIGJvbnVzIG9mIHJldHVybmluZyBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSBxdWVyeSAtIEEgcXVlcnkgc2VsZWN0b3Igc3RyaW5nLCBFeGFtcGxlOiBgYGBcIi5jbGFzc1wiYGBgXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIChPcHRpb25hbCkgRGVmYXVsdHMgdG8gdGhlIGRvY3VtZW50IG9iamVjdFxyXG4gICAgICogQHJldHVybiBBbiBhcnJheSBvZiBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2VsZWN0QWxsKHF1ZXJ5LCBwYXJlbnQgPSBkb2N1bWVudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2ggYW5kIHJldHVybiBhbiBFbGVtZW50IGZyb20gdGhlIERPTVxyXG4gICAgICogQHBhcmFtIHJlZmVyZW5jZSBBIHF1ZXJ5IHNlbGVjdG9yIHN0cmluZyBvciBlbGVtIHJlZmVyZW5jZSAoRWxlbWVudCwgZWN0Li4uKVxyXG4gICAgICogQHJldHVybiBUaGUgZGV0YWNoZWQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGV0YWNoKHJlZmVyZW5jZSkge1xyXG4gICAgICAgIGxldCBlbGVtID0gdHlwZW9mIHJlZmVyZW5jZSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuc2VsZWN0KHJlZmVyZW5jZSkgOiByZWZlcmVuY2U7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVHdvLXdheSBkYXRhIGJpbmRpbmcgYmV0d2VlbiBhbiBvYmplY3QncyBwcm9wZXJ0eSBhbmQgYW4gRWxlbWVudCdzIGF0dHJpYnV0ZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgLSBUaGUgcGFyZW50IG9iamVjdCB3aGVyZSB0aGUgcHJvcGVydHkgd2lsbCBiZSBhZGRlZC5cclxuICAgICAqIEBwYXJhbSBvYmplY3RQcm9wZXJ0eSAtIENyZWF0ZSBhIHByb3BlcnR5IHRoYXQgYmluZHMgd2l0aCBhbiBhdHRyaWJ1dGUuXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBlbGVtZW50IG9yIHF1ZXJ5IHNlbGVjdG9yIG9mIHRoZSBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnRBdHRyaWJ1dGUgLSBUaGUgYXR0cmlidXRlIHRvIGJpbmQgdG8gdGhlIG9iamVjdCdzIHByb3BlcnR5LlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgLSBCaW5kcyBPYmplY3QgUHJvcGVydHkgXCJuYW1lXCIgKGRhdGFPYmplY3QubmFtZSkgdG8gYW4gZWxlbWVudCdzIGF0dHJpYnV0ZSB2YWx1ZS5cclxuICAgICAqIGxldCBkYXRhT2JqZWN0ID0ge307XHJcbiAgICAgKiBET00uYmluZEF0dHJpYnV0ZShkYXRhT2JqZWN0LCBcIm5hbWVcIiwgXCIjdW5pcXVlLWlkXCIsICd2YWx1ZScpO1xyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpbmRBdHRyaWJ1dGUob2JqZWN0LCBvYmplY3RQcm9wZXJ0eSwgZWxlbWVudCwgZWxlbWVudEF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGxldCBlbGVtID0gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyB0aGlzLnNlbGVjdChlbGVtZW50KSA6IGVsZW1lbnQ7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgb2JqZWN0UHJvcGVydHksIHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKGVsZW1lbnRBdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGVsZW1lbnRBdHRyaWJ1dGUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSByb3V0ZSBiYXNlZCBvbiBjdXJyZW50IGxvY2F0aW9uIHBhdGggbmFtZS5cclxuICAgICAqIEBwYXJhbSBpc0FycmF5IC0gKE9wdGlvbmFsKSBUaGlzIHdpbGwgcmV0dXJuIHRoZSBwYXRoIGFzIGFuIGFycmF5IGBgYFsnc29tZScsICdwYXRoJywgJ2RlZmluZWQnXWBgYFxyXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgZGVmYXVsdCB0byBhIHN0cmluZyBgYGAnL3NvbWUvcGF0aC9kZWZpbmVkJ2BgYC5cclxuICAgICAqIEByZXR1cm4gLSBBIHN0cmluZyBvciBhcnJheSByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZG9jdW1lbnQubG9jYXRpb24ucGF0aE5hbWVcclxuICAgICAqXHJcbiAgICAgKiBgYGBqYXZhc2NyaXB0XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAxIC0gR2V0IHBhdGggYC9zb21lL3BhdGgvZGVmaW5lZGBcclxuICAgICAqIGxldCBjdXJyZW50Um91dGUgPSBET00uZ2V0Um91dGUoKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBHZXQgcGF0aCBhcyBhcnJheSBbJ3NvbWUnLCAncGF0aCcsICdkZWZpbmVkJ11cclxuICAgICAqIGxldCBjdXJyZW50Um91dGUgPSBET00uZ2V0Um91dGUodHJ1ZSk7XHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSb3V0ZShpc0FycmF5ID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gaXNBcnJheSA/IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIobiA9PiBuKSA6IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJvdXRlcyBxdWVyeSBzdHJpbmcgYXMgYSBzdHJpbmcgb3IgYW4gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gaXNPYmplY3QgLSAoT3B0aW9uYWwpIERlZmF1bHRzIHRvIHRydWUgYW5kIHdpbGwgcmV0dXJuIGFuIG9iamVjdCBieSBkZWZhdWx0LlxyXG4gICAgICogQHJldHVybiAtIEEgc3RyaW5nIG9yIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoXHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgMSAtIEdldCBxdWVyeSBzdHJpbmcgYXMgb2JqZWN0IGBgYHsgdGVzdCA6IDEgfWBgYFxyXG4gICAgICogbGV0IGN1cnJlbnRSb3V0ZSA9IERPTS5nZXRSb3V0ZURhdGEoKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBHZXQgcXVlcnkgc3RyaW5nIGFzIHN0cmluZyBgYGBcIj90ZXN0PTFcImBgYFxyXG4gICAgICogbGV0IGN1cnJlbnRSb3V0ZSA9IERPTS5nZXRSb3V0ZURhdGEoZmFsc2UpO1xyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Um91dGVEYXRhKGlzT2JqZWN0ID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdCA/IE9iamVjdC5mcm9tRW50cmllcyhuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCkpIDogZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGJyb3dzZXIgdXJsIGFuZCB1cGRhdGUgYnJvd3NlciBoaXN0b3J5IHdpdGhvdXQgdHJpZ2dlcmluZyBhIGZ1bGwgcGFnZSByZWZyZXNoLlxyXG4gICAgICogQHBhcmFtIHJvdXRlIC0gVGhlIHBhdGggbG9jYXRpb24gd2l0aCBhbiBvcHRpb25hbCBxdWVyeSBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBgYGBqYXZhc2NyaXB0XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAxIC0gU2V0IHVybCBsb2NhbGhvc3Q6NDIwMC9zb21lL3BhdGgvZGVmaW5lZFxyXG4gICAgICogRE9NLnNldFJvdXRlKCcvc29tZS9wYXRoL2RlZmluZWQnKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBHZXRzIGN1cnJlbnQgcm91dGUgYXMgYXJyYXkgWydzb21lJywgJ3BhdGgnLCAnZGVmaW5lZCddXHJcbiAgICAgKiAvLyAgICAgICAgICAgICBTZXRzIG5ldyByb3V0ZSBsb2NhbGhvc3Q6NDIwMC9zb21lL3BhdGgvbmV3XHJcbiAgICAgKiBsZXQgY3VycmVudFJvdXRlID0gRE9NLmdldFJvdXRlKHRydWUpO1xyXG4gICAgICogRE9NLnNldFJvdXRlKGAvJHtjdXJyZW50Um91dGVbMF19LyR7Y3VycmVudFJvdXRlWzFdfS9uZXdgKTtcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldFJvdXRlKHJvdXRlKSB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCByb3V0ZSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fID0gcmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LnRzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbl9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX19bXCJJbmZpbml0ZVwiXSA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xubW9kdWxlLmV4cG9ydHMgPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICB9XG5cbiAgdmFyIGc7XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBnID0gdGhpcyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9IC8vIFRoaXMgd29ya3MgaWYgdGhlIHNlbGYgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXG5cbiAgICBpZiAodHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0gLy8gVGhpcyB3b3JrcyBpZiB0aGUgZ2xvYmFsIHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblxuXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGc7XG59KCk7IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcImRvbWluYXRpb24tanNcIlxyXG5cclxuLyoqXHJcbiAqIFF1aWNrbHkgQ3JlYXRlIGhpZ2ggcXVhbGl0eSBVSVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgc3RhbmRhcmRpemVkIGNvbnRhaW5lciBhbmQgcGFzcyBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0gY29udGVudCAtIFN0cmluZyB8IEVsZW1lbnQgfCBFbGVtZW50W11cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUNvbnRhaW5lcihjb250ZW50OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gRE9NLmNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImNvbnRhaW5lclwiLCBhcHBlbmQ6IGNvbnRlbnQgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzdGFuZGFyZGl6ZSBzd2l0Y2ggXHJcbiAgICAgKiBAcGFyYW0gc3RhdHVzIC0gT24gb3Igb2ZmXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVTd2l0Y2goc3RhdHVzOiBib29sZWFuLCBpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gRE9NLmNyZWF0ZShcImlucHV0XCIsIHsgaWQ6IGlkLCB0eXBlOiBcImNoZWNrYm94XCIsIG5hbWU6IFwiamVsbHktc3dpdGNoXCIsIGNoZWNrZWQ6IHN0YXR1c30pO1xyXG4gICAgICAgIGxldCB2aXN1YWwgPSBET00uY3JlYXRlKFwibGFiZWxcIiwgeyBjbGFzczpcInN3aXRjaC1jb250ZW50XCIsIGFwcGVuZDogRE9NLmNyZWF0ZSgncCcsIHtjbGFzczpcImplbGx5LWNvbnRlbnRcIn0pIH0gKVxyXG4gICAgICAgIHJldHVybiBET00uY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3dpdGNoXCIsIGFwcGVuZDogW2NoZWNrYm94LCB2aXN1YWxdIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVSb3coKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gXCJjb29sXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9