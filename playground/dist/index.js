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

/***/ "../dist/esm/classes/UUIDv4.js":
/*!*************************************!*\
  !*** ../dist/esm/classes/UUIDv4.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UUIDv4": () => (/* binding */ UUIDv4)
/* harmony export */ });
class UUIDv4 {
    static generateNumber(limit) {
        var value = limit * Math.random();
        return value | 0;
    }
    static generateX() {
        var value = this.generateNumber(16);
        return value.toString(16);
    }
    static generateXes(count) {
        var result = '';
        for (var i = 0; i < count; ++i) {
            result += this.generateX();
        }
        return result;
    }
    static generateVariant() {
        var value = this.generateNumber(16);
        var variant = (value & 0x3) | 0x8;
        return variant.toString(16);
    }
    ;
    // UUID v4
    //
    //   varsion: M=4 
    //   variant: N
    //   pattern: xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
    //
    static generate = function () {
        var result = this.generateXes(8)
            + '-' + this.generateXes(4)
            + '-' + '4' + this.generateXes(3)
            + '-' + this.generateVariant() + this.generateXes(3)
            + '-' + this.generateXes(12);
        return result;
    };
}
//# sourceMappingURL=UUIDv4.js.map

/***/ }),

/***/ "../dist/esm/enum/actions.js":
/*!***********************************!*\
  !*** ../dist/esm/enum/actions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionTypes": () => (/* binding */ ActionTypes)
/* harmony export */ });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["none"] = 0] = "none";
    ActionTypes[ActionTypes["label"] = 1] = "label";
    ActionTypes[ActionTypes["switch"] = 2] = "switch";
    ActionTypes[ActionTypes["action"] = 3] = "action";
    ActionTypes[ActionTypes["input"] = 4] = "input";
    ActionTypes[ActionTypes["textarea"] = 5] = "textarea";
})(ActionTypes || (ActionTypes = {}));
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../dist/esm/index.js":
/*!****************************!*\
  !*** ../dist/esm/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Infinite": () => (/* binding */ Infinite)
/* harmony export */ });
/* harmony import */ var domination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! domination-js */ "../node_modules/domination-js/dist/esm/index.js");
/* harmony import */ var _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/UUIDv4 */ "../dist/esm/classes/UUIDv4.js");
/* harmony import */ var _enum_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enum/actions */ "../dist/esm/enum/actions.js");



/**
 * Quickly Create high quality UI
 *
 */
class Infinite {
    static createSettingsRow() {
    }
    /**
     * Create Label which includes a title and optional description
     * @param name - A useful name to quick describe a setting.
     * @param desc - (Optional) Describes setting controls in greater detail.
     */
    static createLabel(name, description = "") {
        const id = _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__.UUIDv4.generate();
        let title = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { id: id, class: "title", append: [domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("h5", { text: name }), domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("span", { text: description })] });
        return {
            id: id,
            type: _enum_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.label,
            ref: title
        };
    }
    /**
     * Create Switch Toggle
     * @param name - A useful description/name for this switch.
     * @param status - On or off
     * @param events - Pass an object with different functions.
     */
    static createSwitch(name, status, events = { change: (e) => console.log("Switch -> status: ", e.target.checked) }) {
        const id = _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__.UUIDv4.generate();
        let checkbox = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("input", { id: id, type: "checkbox" }, events);
        checkbox.checked = status;
        let visual = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("label", { class: "visual", text: "Toggle", for: id });
        let container = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "switch", 'aria-label': name, 'tooltip-direction': "up", append: [checkbox, visual] });
        let switchData = {
            id: id,
            type: _enum_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes["switch"],
            ref: container
        };
        domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.bindAttribute(switchData, "value", checkbox, 'checked');
        return switchData;
    }
    /**
     * Create Icon button
     * @param name - A useful description/name for this button.
     * @param icon - Icon that represents the action.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createIconButton(name, icon, events = { click: (e) => console.log("Action -> triggered: ", e.target) }) {
        const id = _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__.UUIDv4.generate();
        let button = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("button", { id: id, 'aria-label': name, 'tooltip-direction': "up", class: "std button", append: domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create('i', { class: icon }) }, events);
        return {
            id: id,
            type: _enum_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.action,
            ref: button
        };
    }
    /**
     * Create Text button
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createTextButton(name, events = { click: (e) => console.log("Action -> triggered: ", e.target) }) {
        const id = _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__.UUIDv4.generate();
        let button = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("button", { id: id, class: "std button text-fill", text: name }, events);
        return {
            id: id,
            type: _enum_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.action,
            ref: button
        };
    }
    /**
     * Create Text Input
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createInput(name, events = { change: (e) => console.log("Change -> triggered: ", e.target) }) {
        const id = _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__.UUIDv4.generate();
        let input = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("input", { id: id, type: "text", class: "text-input", placeholder: name }, events);
        let container = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { 'tooltip-direction': "up", append: input });
        return {
            id: id,
            type: _enum_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.input,
            ref: container
        };
    }
    /**
     * Create Hidden Text Input
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createHiddenInput(name, events = { change: (e) => console.log("Change -> triggered: ", e.target) }) {
        const id = _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__.UUIDv4.generate();
        let input = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("input", { id: id, type: "password", class: "text-input", placeholder: name }, events);
        let container = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { 'tooltip-direction': "up", append: input });
        return {
            id: id,
            type: _enum_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.input,
            ref: container
        };
    }
    /**
     * Create textarea for multi-line input
     * @param name - A useful description/name for this button.
     * @param events - Pass an object with different functions.
     * @returns
     */
    static createTextArea(name, events = { change: (e) => console.log("Change -> triggered: ", e.target) }) {
        const id = _classes_UUIDv4__WEBPACK_IMPORTED_MODULE_1__.UUIDv4.generate();
        let textarea = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("textarea", { id: id, class: "text-area", placeholder: name }, events);
        let container = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { 'tooltip-direction': "up", append: textarea });
        return {
            id: id,
            type: _enum_actions__WEBPACK_IMPORTED_MODULE_2__.ActionTypes.textarea,
            ref: container
        };
    }
    static createRow(content) {
        return domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "row", append: content });
    }
    /**
     * Create a settings container which is the root level container element.
     * You can then add SettingsGroups to that container.
     * @param attributes - (Optional) pass html attributes to add to container element.
     * @param parent - (Optional) pass a parent container or it will default ot the document body.
     * @returns
     */
    static createSettingsContainer(attributes = { class: "settings-contianer" }, parent = document.body) {
        if (!attributes.hasOwnProperty("class")) {
            attributes.class = "settings-contianer";
        }
        else if (!attributes.class.includes("settings-contianer")) {
            attributes.class = "settings-contianer " + attributes.class;
        }
        let container = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", attributes);
        parent.append(container);
        return container;
    }
    /**
     * Create a setting group
     * @param container - Pass a container where this group belongs.
     * @param title - Pass a title for this group
     * @param settings - pass an array of setting containers
     * @returns
     */
    static addSettingsGroup(container, title, settings = null) {
        let titleElem = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "group-title", text: title });
        let blockElem = settings === null ? domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "block" }) : domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "block", append: settings });
        let settingsGroup = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: "settings-group", append: [titleElem, blockElem] });
        container.append(settingsGroup);
        return settingsGroup;
    }
    /**
     * Add a spacer to seperate setting group
     * @param height - How much to space between
     * @param settingsGroup - Where should this setting be added
     * @param includeDivider - (Optional) Add divider to bottom of row, defaults to false.
     * @returns
     */
    static addSettingSpacer(height, settingsGroup = null, includeDivider = false) {
        let rowClass = includeDivider ? "spacer divider" : "spacer";
        let group = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: rowClass, style: `height: ${height}px;`, text: "" });
        if (settingsGroup !== null)
            settingsGroup.querySelector(".block").append(group);
        if (settingsGroup === null)
            console.log("The settings group doesn't exist.");
        return group;
    }
    /**
     * Add a new setting row to a setting group
     * @param components - Add components which add functionality and utility to rows.
     * @param settingsGroup - Where should this setting be added
     * @param includeDivider - (Optional) Add divider to bottom of row, defaults to true.
     * @returns
     */
    static addSetting(components, settingsGroup = null, includeDivider = true) {
        let rowClass = includeDivider ? "row divider" : "row";
        let group = domination_js__WEBPACK_IMPORTED_MODULE_0__.DOM.create("div", { class: rowClass, append: components });
        if (settingsGroup !== null)
            settingsGroup.querySelector(".block").append(group);
        if (settingsGroup === null)
            console.log("The settings group doesn't exist.");
        return group;
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/domination-js/dist/esm/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/domination-js/dist/esm/index.js ***!
  \*******************************************************/
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
                return elementAttribute === "checked" ? elem[elementAttribute] : elem.getAttribute(elementAttribute);
            },
            set(value) {
                if (elementAttribute === "checked") {
                    if (value == false) {
                        elem['checked'] = false;
                        elem.removeAttribute('checked');
                    }
                    else {
                        elem['checked'] = true;
                        elem.setAttribute('checked', '');
                    }
                }
                else {
                    elem.setAttribute(elementAttribute, value);
                }
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

/***/ "./src/index-exposed.ts":
/*!******************************!*\
  !*** ./src/index-exposed.ts ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js!./index.ts */ "../node_modules/ts-loader/index.js!./src/index.ts");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../node_modules/expose-loader/dist/runtime/getGlobalThis.js */ "../node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
___EXPOSE_LOADER_GLOBAL_THIS___["DOM"] = ___EXPOSE_LOADER_IMPORT___;
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "../node_modules/expose-loader/dist/runtime/getGlobalThis.js":
/*!*******************************************************************!*\
  !*** ../node_modules/expose-loader/dist/runtime/getGlobalThis.js ***!
  \*******************************************************************/
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

/***/ "../node_modules/ts-loader/index.js!./src/index.ts":
/*!*********************************************************!*\
  !*** ../node_modules/ts-loader/index.js!./src/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/esm/index */ "../dist/esm/index.js");

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.background = "#f6f6f6";
/**
 *
 * Settings example
 *
 */
let settingsContainer = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createSettingsContainer();
let settingsGroup = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSettingsGroup(settingsContainer, "Important Options");
// Single button setting
let label1 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Action Setting", "Some desscription that could help explain this functionality.");
let button1 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createIconButton("Some action", "fas fa-cog");
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([label1.ref, button1.ref], settingsGroup);
// Switch input
let label2 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Toggle Setting", "Some desscription that could help explain this functionality.");
let switch1 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createSwitch("Toggle something", true);
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([label2.ref, switch1.ref], settingsGroup);
// Two buttons
let label3 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Duo Action Setting", "Some desscription that could help explain this functionality.");
let button2 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createIconButton("Some action 1", "fas fa-check");
let button3 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createIconButton("Some action 2", "fas fa-times");
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([label3.ref, button2.ref, button3.ref], settingsGroup);
// Multiple buttons
let label4 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Multiple Action Setting", "Some desscription that could help explain this functionality.");
let testButtonUp = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createIconButton("Some action up", "fas fa-arrow-up");
let testButtonDown = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createIconButton("Some action down", "fas fa-arrow-down");
let testButtonLeft = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createIconButton("Some action left", "fas fa-arrow-left");
let testButtonRight = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createIconButton("Some action right", "fas fa-arrow-right");
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([label4.ref, testButtonUp.ref, testButtonDown.ref, testButtonLeft.ref, testButtonRight.ref], settingsGroup);
// textbox
let label5 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Text Input Setting", "Some desscription that could help explain this functionality.");
let testInput = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createInput("Enter a Name");
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([label5.ref, testInput.ref], settingsGroup);
// Textarea
let label6 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Textarea Setting", "Some desscription that could help explain this functionality.");
let testTextarea = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createTextArea("Enter a Description");
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([label6.ref, testTextarea.ref], settingsGroup);
/**
 *
 * Login example
 *
 */
let settingsContainer2 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createSettingsContainer({ style: "width:480px;margin:40px;" });
let settingsGroup2 = _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSettingsGroup(settingsContainer2, "Login example");
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Login to your persona.", "Recoving a persona is not possible at this time, so please always save your password somehwere.").ref,
], settingsGroup2, false);
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Username").ref,
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createInput("Enter a username").ref
], settingsGroup2, false);
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createLabel("Password").ref,
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createHiddenInput("Enter a password").ref
], settingsGroup2, false);
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSettingSpacer(20, settingsGroup2);
_dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.addSetting([
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createTextButton("Cancel").ref,
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createTextButton("Create").ref,
    _dist_esm_index__WEBPACK_IMPORTED_MODULE_0__.Infinite.createTextButton("Login").ref
], settingsGroup2, false);


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index-exposed.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUM5QixzRUFBeUIsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDOUMsZ0VBQW1CLENBQ2Y7SUFDSSxzRUFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHO0lBQ3ZDLHNFQUF5QixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7SUFDdkMsc0VBQXlCLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRztDQUN6QyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7OztVQzlFOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzLy4uL2Rpc3QvZXNtL2NsYXNzZXMvVVVJRHY0LmpzIiwid2VicGFjazovL2RvbWluYXRpb24tanMvLi4vZGlzdC9lc20vZW51bS9hY3Rpb25zLmpzIiwid2VicGFjazovL2RvbWluYXRpb24tanMvLi4vZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy8uLi9ub2RlX21vZHVsZXMvZG9taW5hdGlvbi1qcy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzLy4vc3JjL2luZGV4LWV4cG9zZWQudHMiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy8uLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qcyIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2RvbWluYXRpb24tanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2RvbWluYXRpb24tanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2RvbWluYXRpb24tanMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2RvbWluYXRpb24tanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0IGNsYXNzIFVVSUR2NCB7XHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVOdW1iZXIobGltaXQpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBsaW1pdCAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlIHwgMDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVgoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZW5lcmF0ZU51bWJlcigxNik7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVhlcyhjb3VudCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuZ2VuZXJhdGVYKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVWYXJpYW50KCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2VuZXJhdGVOdW1iZXIoMTYpO1xyXG4gICAgICAgIHZhciB2YXJpYW50ID0gKHZhbHVlICYgMHgzKSB8IDB4ODtcclxuICAgICAgICByZXR1cm4gdmFyaWFudC50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvLyBVVUlEIHY0XHJcbiAgICAvL1xyXG4gICAgLy8gICB2YXJzaW9uOiBNPTQgXHJcbiAgICAvLyAgIHZhcmlhbnQ6IE5cclxuICAgIC8vICAgcGF0dGVybjogeHh4eHh4eHgteHh4eC1NeHh4LU54eHgteHh4eHh4eHh4eHh4XHJcbiAgICAvL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmdlbmVyYXRlWGVzKDgpXHJcbiAgICAgICAgICAgICsgJy0nICsgdGhpcy5nZW5lcmF0ZVhlcyg0KVxyXG4gICAgICAgICAgICArICctJyArICc0JyArIHRoaXMuZ2VuZXJhdGVYZXMoMylcclxuICAgICAgICAgICAgKyAnLScgKyB0aGlzLmdlbmVyYXRlVmFyaWFudCgpICsgdGhpcy5nZW5lcmF0ZVhlcygzKVxyXG4gICAgICAgICAgICArICctJyArIHRoaXMuZ2VuZXJhdGVYZXMoMTIpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVVSUR2NC5qcy5tYXAiLCJleHBvcnQgdmFyIEFjdGlvblR5cGVzO1xyXG4oZnVuY3Rpb24gKEFjdGlvblR5cGVzKSB7XHJcbiAgICBBY3Rpb25UeXBlc1tBY3Rpb25UeXBlc1tcIm5vbmVcIl0gPSAwXSA9IFwibm9uZVwiO1xyXG4gICAgQWN0aW9uVHlwZXNbQWN0aW9uVHlwZXNbXCJsYWJlbFwiXSA9IDFdID0gXCJsYWJlbFwiO1xyXG4gICAgQWN0aW9uVHlwZXNbQWN0aW9uVHlwZXNbXCJzd2l0Y2hcIl0gPSAyXSA9IFwic3dpdGNoXCI7XHJcbiAgICBBY3Rpb25UeXBlc1tBY3Rpb25UeXBlc1tcImFjdGlvblwiXSA9IDNdID0gXCJhY3Rpb25cIjtcclxuICAgIEFjdGlvblR5cGVzW0FjdGlvblR5cGVzW1wiaW5wdXRcIl0gPSA0XSA9IFwiaW5wdXRcIjtcclxuICAgIEFjdGlvblR5cGVzW0FjdGlvblR5cGVzW1widGV4dGFyZWFcIl0gPSA1XSA9IFwidGV4dGFyZWFcIjtcclxufSkoQWN0aW9uVHlwZXMgfHwgKEFjdGlvblR5cGVzID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWN0aW9ucy5qcy5tYXAiLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiZG9taW5hdGlvbi1qc1wiO1xyXG5pbXBvcnQgeyBVVUlEdjQgfSBmcm9tIFwiLi9jbGFzc2VzL1VVSUR2NFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gXCIuL2VudW0vYWN0aW9uc1wiO1xyXG4vKipcclxuICogUXVpY2tseSBDcmVhdGUgaGlnaCBxdWFsaXR5IFVJXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5maW5pdGUge1xyXG4gICAgc3RhdGljIGNyZWF0ZVNldHRpbmdzUm93KCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgTGFiZWwgd2hpY2ggaW5jbHVkZXMgYSB0aXRsZSBhbmQgb3B0aW9uYWwgZGVzY3JpcHRpb25cclxuICAgICAqIEBwYXJhbSBuYW1lIC0gQSB1c2VmdWwgbmFtZSB0byBxdWljayBkZXNjcmliZSBhIHNldHRpbmcuXHJcbiAgICAgKiBAcGFyYW0gZGVzYyAtIChPcHRpb25hbCkgRGVzY3JpYmVzIHNldHRpbmcgY29udHJvbHMgaW4gZ3JlYXRlciBkZXRhaWwuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVMYWJlbChuYW1lLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBpZCA9IFVVSUR2NC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBpZDogaWQsIGNsYXNzOiBcInRpdGxlXCIsIGFwcGVuZDogW0RPTS5jcmVhdGUoXCJoNVwiLCB7IHRleHQ6IG5hbWUgfSksIERPTS5jcmVhdGUoXCJzcGFuXCIsIHsgdGV4dDogZGVzY3JpcHRpb24gfSldIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZXMubGFiZWwsXHJcbiAgICAgICAgICAgIHJlZjogdGl0bGVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgU3dpdGNoIFRvZ2dsZVxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBBIHVzZWZ1bCBkZXNjcmlwdGlvbi9uYW1lIGZvciB0aGlzIHN3aXRjaC5cclxuICAgICAqIEBwYXJhbSBzdGF0dXMgLSBPbiBvciBvZmZcclxuICAgICAqIEBwYXJhbSBldmVudHMgLSBQYXNzIGFuIG9iamVjdCB3aXRoIGRpZmZlcmVudCBmdW5jdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVTd2l0Y2gobmFtZSwgc3RhdHVzLCBldmVudHMgPSB7IGNoYW5nZTogKGUpID0+IGNvbnNvbGUubG9nKFwiU3dpdGNoIC0+IHN0YXR1czogXCIsIGUudGFyZ2V0LmNoZWNrZWQpIH0pIHtcclxuICAgICAgICBjb25zdCBpZCA9IFVVSUR2NC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIGxldCBjaGVja2JveCA9IERPTS5jcmVhdGUoXCJpbnB1dFwiLCB7IGlkOiBpZCwgdHlwZTogXCJjaGVja2JveFwiIH0sIGV2ZW50cyk7XHJcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHN0YXR1cztcclxuICAgICAgICBsZXQgdmlzdWFsID0gRE9NLmNyZWF0ZShcImxhYmVsXCIsIHsgY2xhc3M6IFwidmlzdWFsXCIsIHRleHQ6IFwiVG9nZ2xlXCIsIGZvcjogaWQgfSk7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzd2l0Y2hcIiwgJ2FyaWEtbGFiZWwnOiBuYW1lLCAndG9vbHRpcC1kaXJlY3Rpb24nOiBcInVwXCIsIGFwcGVuZDogW2NoZWNrYm94LCB2aXN1YWxdIH0pO1xyXG4gICAgICAgIGxldCBzd2l0Y2hEYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLnN3aXRjaCxcclxuICAgICAgICAgICAgcmVmOiBjb250YWluZXJcclxuICAgICAgICB9O1xyXG4gICAgICAgIERPTS5iaW5kQXR0cmlidXRlKHN3aXRjaERhdGEsIFwidmFsdWVcIiwgY2hlY2tib3gsICdjaGVja2VkJyk7XHJcbiAgICAgICAgcmV0dXJuIHN3aXRjaERhdGE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBJY29uIGJ1dHRvblxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBBIHVzZWZ1bCBkZXNjcmlwdGlvbi9uYW1lIGZvciB0aGlzIGJ1dHRvbi5cclxuICAgICAqIEBwYXJhbSBpY29uIC0gSWNvbiB0aGF0IHJlcHJlc2VudHMgdGhlIGFjdGlvbi5cclxuICAgICAqIEBwYXJhbSBldmVudHMgLSBQYXNzIGFuIG9iamVjdCB3aXRoIGRpZmZlcmVudCBmdW5jdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSWNvbkJ1dHRvbihuYW1lLCBpY29uLCBldmVudHMgPSB7IGNsaWNrOiAoZSkgPT4gY29uc29sZS5sb2coXCJBY3Rpb24gLT4gdHJpZ2dlcmVkOiBcIiwgZS50YXJnZXQpIH0pIHtcclxuICAgICAgICBjb25zdCBpZCA9IFVVSUR2NC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSBET00uY3JlYXRlKFwiYnV0dG9uXCIsIHsgaWQ6IGlkLCAnYXJpYS1sYWJlbCc6IG5hbWUsICd0b29sdGlwLWRpcmVjdGlvbic6IFwidXBcIiwgY2xhc3M6IFwic3RkIGJ1dHRvblwiLCBhcHBlbmQ6IERPTS5jcmVhdGUoJ2knLCB7IGNsYXNzOiBpY29uIH0pIH0sIGV2ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5hY3Rpb24sXHJcbiAgICAgICAgICAgIHJlZjogYnV0dG9uXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIFRleHQgYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtIEEgdXNlZnVsIGRlc2NyaXB0aW9uL25hbWUgZm9yIHRoaXMgYnV0dG9uLlxyXG4gICAgICogQHBhcmFtIGV2ZW50cyAtIFBhc3MgYW4gb2JqZWN0IHdpdGggZGlmZmVyZW50IGZ1bmN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVUZXh0QnV0dG9uKG5hbWUsIGV2ZW50cyA9IHsgY2xpY2s6IChlKSA9PiBjb25zb2xlLmxvZyhcIkFjdGlvbiAtPiB0cmlnZ2VyZWQ6IFwiLCBlLnRhcmdldCkgfSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gVVVJRHY0LmdlbmVyYXRlKCk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IERPTS5jcmVhdGUoXCJidXR0b25cIiwgeyBpZDogaWQsIGNsYXNzOiBcInN0ZCBidXR0b24gdGV4dC1maWxsXCIsIHRleHQ6IG5hbWUgfSwgZXZlbnRzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLmFjdGlvbixcclxuICAgICAgICAgICAgcmVmOiBidXR0b25cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgVGV4dCBJbnB1dFxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBBIHVzZWZ1bCBkZXNjcmlwdGlvbi9uYW1lIGZvciB0aGlzIGJ1dHRvbi5cclxuICAgICAqIEBwYXJhbSBldmVudHMgLSBQYXNzIGFuIG9iamVjdCB3aXRoIGRpZmZlcmVudCBmdW5jdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSW5wdXQobmFtZSwgZXZlbnRzID0geyBjaGFuZ2U6IChlKSA9PiBjb25zb2xlLmxvZyhcIkNoYW5nZSAtPiB0cmlnZ2VyZWQ6IFwiLCBlLnRhcmdldCkgfSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gVVVJRHY0LmdlbmVyYXRlKCk7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gRE9NLmNyZWF0ZShcImlucHV0XCIsIHsgaWQ6IGlkLCB0eXBlOiBcInRleHRcIiwgY2xhc3M6IFwidGV4dC1pbnB1dFwiLCBwbGFjZWhvbGRlcjogbmFtZSB9LCBldmVudHMpO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgJ3Rvb2x0aXAtZGlyZWN0aW9uJzogXCJ1cFwiLCBhcHBlbmQ6IGlucHV0IH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZXMuaW5wdXQsXHJcbiAgICAgICAgICAgIHJlZjogY29udGFpbmVyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIEhpZGRlbiBUZXh0IElucHV0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtIEEgdXNlZnVsIGRlc2NyaXB0aW9uL25hbWUgZm9yIHRoaXMgYnV0dG9uLlxyXG4gICAgICogQHBhcmFtIGV2ZW50cyAtIFBhc3MgYW4gb2JqZWN0IHdpdGggZGlmZmVyZW50IGZ1bmN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVIaWRkZW5JbnB1dChuYW1lLCBldmVudHMgPSB7IGNoYW5nZTogKGUpID0+IGNvbnNvbGUubG9nKFwiQ2hhbmdlIC0+IHRyaWdnZXJlZDogXCIsIGUudGFyZ2V0KSB9KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBVVUlEdjQuZ2VuZXJhdGUoKTtcclxuICAgICAgICBsZXQgaW5wdXQgPSBET00uY3JlYXRlKFwiaW5wdXRcIiwgeyBpZDogaWQsIHR5cGU6IFwicGFzc3dvcmRcIiwgY2xhc3M6IFwidGV4dC1pbnB1dFwiLCBwbGFjZWhvbGRlcjogbmFtZSB9LCBldmVudHMpO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgJ3Rvb2x0aXAtZGlyZWN0aW9uJzogXCJ1cFwiLCBhcHBlbmQ6IGlucHV0IH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZXMuaW5wdXQsXHJcbiAgICAgICAgICAgIHJlZjogY29udGFpbmVyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRleHRhcmVhIGZvciBtdWx0aS1saW5lIGlucHV0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtIEEgdXNlZnVsIGRlc2NyaXB0aW9uL25hbWUgZm9yIHRoaXMgYnV0dG9uLlxyXG4gICAgICogQHBhcmFtIGV2ZW50cyAtIFBhc3MgYW4gb2JqZWN0IHdpdGggZGlmZmVyZW50IGZ1bmN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGVUZXh0QXJlYShuYW1lLCBldmVudHMgPSB7IGNoYW5nZTogKGUpID0+IGNvbnNvbGUubG9nKFwiQ2hhbmdlIC0+IHRyaWdnZXJlZDogXCIsIGUudGFyZ2V0KSB9KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBVVUlEdjQuZ2VuZXJhdGUoKTtcclxuICAgICAgICBsZXQgdGV4dGFyZWEgPSBET00uY3JlYXRlKFwidGV4dGFyZWFcIiwgeyBpZDogaWQsIGNsYXNzOiBcInRleHQtYXJlYVwiLCBwbGFjZWhvbGRlcjogbmFtZSB9LCBldmVudHMpO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgJ3Rvb2x0aXAtZGlyZWN0aW9uJzogXCJ1cFwiLCBhcHBlbmQ6IHRleHRhcmVhIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZXMudGV4dGFyZWEsXHJcbiAgICAgICAgICAgIHJlZjogY29udGFpbmVyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjcmVhdGVSb3coY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiBET00uY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwicm93XCIsIGFwcGVuZDogY29udGVudCB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgc2V0dGluZ3MgY29udGFpbmVyIHdoaWNoIGlzIHRoZSByb290IGxldmVsIGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAgICogWW91IGNhbiB0aGVuIGFkZCBTZXR0aW5nc0dyb3VwcyB0byB0aGF0IGNvbnRhaW5lci5cclxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIC0gKE9wdGlvbmFsKSBwYXNzIGh0bWwgYXR0cmlidXRlcyB0byBhZGQgdG8gY29udGFpbmVyIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50IC0gKE9wdGlvbmFsKSBwYXNzIGEgcGFyZW50IGNvbnRhaW5lciBvciBpdCB3aWxsIGRlZmF1bHQgb3QgdGhlIGRvY3VtZW50IGJvZHkuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU2V0dGluZ3NDb250YWluZXIoYXR0cmlidXRlcyA9IHsgY2xhc3M6IFwic2V0dGluZ3MtY29udGlhbmVyXCIgfSwgcGFyZW50ID0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGlmICghYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzXCIpKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuY2xhc3MgPSBcInNldHRpbmdzLWNvbnRpYW5lclwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghYXR0cmlidXRlcy5jbGFzcy5pbmNsdWRlcyhcInNldHRpbmdzLWNvbnRpYW5lclwiKSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gXCJzZXR0aW5ncy1jb250aWFuZXIgXCIgKyBhdHRyaWJ1dGVzLmNsYXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29udGFpbmVyID0gRE9NLmNyZWF0ZShcImRpdlwiLCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgc2V0dGluZyBncm91cFxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciAtIFBhc3MgYSBjb250YWluZXIgd2hlcmUgdGhpcyBncm91cCBiZWxvbmdzLlxyXG4gICAgICogQHBhcmFtIHRpdGxlIC0gUGFzcyBhIHRpdGxlIGZvciB0aGlzIGdyb3VwXHJcbiAgICAgKiBAcGFyYW0gc2V0dGluZ3MgLSBwYXNzIGFuIGFycmF5IG9mIHNldHRpbmcgY29udGFpbmVyc1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZFNldHRpbmdzR3JvdXAoY29udGFpbmVyLCB0aXRsZSwgc2V0dGluZ3MgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlRWxlbSA9IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJncm91cC10aXRsZVwiLCB0ZXh0OiB0aXRsZSB9KTtcclxuICAgICAgICBsZXQgYmxvY2tFbGVtID0gc2V0dGluZ3MgPT09IG51bGwgPyBET00uY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiYmxvY2tcIiB9KSA6IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJibG9ja1wiLCBhcHBlbmQ6IHNldHRpbmdzIH0pO1xyXG4gICAgICAgIGxldCBzZXR0aW5nc0dyb3VwID0gRE9NLmNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInNldHRpbmdzLWdyb3VwXCIsIGFwcGVuZDogW3RpdGxlRWxlbSwgYmxvY2tFbGVtXSB9KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNldHRpbmdzR3JvdXApO1xyXG4gICAgICAgIHJldHVybiBzZXR0aW5nc0dyb3VwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBzcGFjZXIgdG8gc2VwZXJhdGUgc2V0dGluZyBncm91cFxyXG4gICAgICogQHBhcmFtIGhlaWdodCAtIEhvdyBtdWNoIHRvIHNwYWNlIGJldHdlZW5cclxuICAgICAqIEBwYXJhbSBzZXR0aW5nc0dyb3VwIC0gV2hlcmUgc2hvdWxkIHRoaXMgc2V0dGluZyBiZSBhZGRlZFxyXG4gICAgICogQHBhcmFtIGluY2x1ZGVEaXZpZGVyIC0gKE9wdGlvbmFsKSBBZGQgZGl2aWRlciB0byBib3R0b20gb2Ygcm93LCBkZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRTZXR0aW5nU3BhY2VyKGhlaWdodCwgc2V0dGluZ3NHcm91cCA9IG51bGwsIGluY2x1ZGVEaXZpZGVyID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgcm93Q2xhc3MgPSBpbmNsdWRlRGl2aWRlciA/IFwic3BhY2VyIGRpdmlkZXJcIiA6IFwic3BhY2VyXCI7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gRE9NLmNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiByb3dDbGFzcywgc3R5bGU6IGBoZWlnaHQ6ICR7aGVpZ2h0fXB4O2AsIHRleHQ6IFwiXCIgfSk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzR3JvdXAgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHNldHRpbmdzR3JvdXAucXVlcnlTZWxlY3RvcihcIi5ibG9ja1wiKS5hcHBlbmQoZ3JvdXApO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0dyb3VwID09PSBudWxsKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBzZXR0aW5ncyBncm91cCBkb2Vzbid0IGV4aXN0LlwiKTtcclxuICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIG5ldyBzZXR0aW5nIHJvdyB0byBhIHNldHRpbmcgZ3JvdXBcclxuICAgICAqIEBwYXJhbSBjb21wb25lbnRzIC0gQWRkIGNvbXBvbmVudHMgd2hpY2ggYWRkIGZ1bmN0aW9uYWxpdHkgYW5kIHV0aWxpdHkgdG8gcm93cy5cclxuICAgICAqIEBwYXJhbSBzZXR0aW5nc0dyb3VwIC0gV2hlcmUgc2hvdWxkIHRoaXMgc2V0dGluZyBiZSBhZGRlZFxyXG4gICAgICogQHBhcmFtIGluY2x1ZGVEaXZpZGVyIC0gKE9wdGlvbmFsKSBBZGQgZGl2aWRlciB0byBib3R0b20gb2Ygcm93LCBkZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZFNldHRpbmcoY29tcG9uZW50cywgc2V0dGluZ3NHcm91cCA9IG51bGwsIGluY2x1ZGVEaXZpZGVyID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCByb3dDbGFzcyA9IGluY2x1ZGVEaXZpZGVyID8gXCJyb3cgZGl2aWRlclwiIDogXCJyb3dcIjtcclxuICAgICAgICBsZXQgZ3JvdXAgPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IHJvd0NsYXNzLCBhcHBlbmQ6IGNvbXBvbmVudHMgfSk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzR3JvdXAgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHNldHRpbmdzR3JvdXAucXVlcnlTZWxlY3RvcihcIi5ibG9ja1wiKS5hcHBlbmQoZ3JvdXApO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0dyb3VwID09PSBudWxsKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBzZXR0aW5ncyBncm91cCBkb2Vzbid0IGV4aXN0LlwiKTtcclxuICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXHJcbiAqIERvY3VtZW50IE9iamVjdCBNb2RlbCAtIGhlbHBlciBmdW5jdGlvbnNcclxuICogSGVscHMgeW91IGludGVyYWN0IHdpdGggdGhlIERPTSBzYWZlbHkgYW5kIGVhc2lseS5cclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBET00ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgZm9sbG93cyB0aGUgZXZlbnQgZGVsZWdhdGlvbiBwYXR0ZXJuLiBUaGUgYWR2YW50YWdlIGlzIHRoYXQgeW91IGNhbiBhZGRcclxuICAgICAqIGVsZW1lbnRzIGF0IGFueSBkZXB0aCBpbnNpZGUgdGhlIHBhcmVudCBjb250YWluZXIgd2l0aG91dCBoYXZpbmcgdG8gd29ycnkgYWJvdXQgdGhlIGV2ZW50IGJlaW5nXHJcbiAgICAgKiBhcHBsaWVkLiBUaGlzIHNvbHZlcyBoYXZpbmcgdG8gYWRkLCByZW1vdmUsIGFuZCBtYW5hZ2UgZXZlbnRzIHBlciBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHR5cGUgLSBFdmVudCB0eXBlLCBleGFtcGxlOiBjbGljaywgZGJsY2xpY2ssIG1vdXNlb3ZlciwgZWN0Li5cclxuICAgICAqIEBwYXJhbSBzZWxlY3RvciAtIFNhbWUgYXMgcXVlcnkgc2VsZWN0b3IuIEVsZW1lbnQgY2xhc3MgZGVub3RlZCB3aXRoIHBlcmlvZCwgaWQgZGVub3RlZCB3aXRoICMsIG9yIGVsZW1lbnQgbmFtZS5cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcGVyZm9ybSB3aGVuIHRoZSBldmVudCBpcyB0cmlnZ2VyZWQuXHJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZSAtIE9wdGlvbmFsbHkgdXNlIGNhcHR1cmUgaW5zdGVhZCBvZiBldmVudCBidWJibGluZy5cclxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBPcHRpb25hbGx5IHdoZXJlIHRvIGFkZCB0aGUgbGlzdGVuZXIuIERlZmF1bHRzIHRvIHRoZSBkb2N1bWVudC5cclxuICAgICAqXHJcbiAgICAgKiBgYGBqYXZhc2NyaXB0XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAxIC0gQWRkcyBjbGljayB0byBJRCB1bmlxdWUtaWQgaW5zaWRlIG9mIGRvY3VtZW50LlxyXG4gICAgICogRE9NLmFkZEV2ZW50RGVsZWdhdGUoJ2NsaWNrJywgXCIjdW5pcXVlLWlkXCIsICgpID0+IHsgY29uc29sZS5sb2coXCJGSVJFIVwiKSB9KTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBBZGRzIGNsaWNrIHRvIGNsYXNzIC5idG4gaW5zaWRlIG9mIGRvY3VtZW50LlxyXG4gICAgICogRE9NLmFkZEV2ZW50RGVsZWdhdGUoJ2NsaWNrJywgXCIuYnRuXCIsICgpID0+IHsgY29uc29sZS5sb2coXCJGSVJFIVwiKSB9KTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDMgLSBBZGRzIGNsaWNrIHRvIGJ1dHRvbiBlbGVtZW50cyBpbnNpZGUgd2luZG93IHZpYSBjYXB0dXJlLlxyXG4gICAgICogRE9NLmFkZEV2ZW50RGVsZWdhdGUoJ2NsaWNrJywgXCJidXR0b25cIiwgKCkgPT4geyBjb25zb2xlLmxvZyhcIkZJUkUhXCIpIH0sIHRydWUsIHdpbmRvdyk7XHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkRXZlbnREZWxlZ2F0ZSh0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2ssIHVzZUNhcHR1cmUgPSBmYWxzZSwgcGFyZW50ID0gZG9jdW1lbnQpIHtcclxuICAgICAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlKTtcclxuICAgICAgICB9LCB1c2VDYXB0dXJlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29tcGxleCBET00gZWxlbWVudCB3aXRoIGEgc2luZ2xlIGZ1bmNpdG9uLlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBTdGFuZGFyZCBIVE1MIGVsZW1lbnQuIEV4YW1wbGU6IGRpdiwgc3BhbiwgaW5wdXQsIGJ1dHRvbiwgZWN0Li4uXHJcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAtIChPcHRpb25hbCkgUGFzcyBhbiBvYmplY3QgdXNpbmcgdGhpcyBwYXR0ZXJuLiAqKnsgYXR0cmlidXRlTmFtZSA6IHZhbHVlIH0qKi5cclxuICAgICAqIC0gYGBgdGV4dGBgYCBZb3UgYXJlIGFibGUgdG8gcGFzcyBhIHN0cmluZyBhcyB0ZXh0Q29udGVudC5cclxuICAgICAqIC0gYGBgYXBwZW5kYGBgIFBhc3MgYW4gZWxlbWVudC9ub2RlLCBvciBhbiBhcnJheSBvZiBlbGVtZW50cy9ub2RlcyB0byBhcHBlbmQuXHJcbiAgICAgKiAtIGBgYGh0bWxgYGAgWW91IGFyZSBhYmxlIHRvIHBhc3MgYSBzdHJpbmcgYXMgSFRNTC4gKipEbyBub3QgcGFzcyB1c2VyIGNoYW5nYWJsZSBkYXRhIGZvciBvYnZpb3VzIHNlY3VyaXR5IHJlYXNvbnMhKipcclxuICAgICAqIC0gYGBgY2xhc3NgYGAgWW91IGFyZSBhYmxlIHRvIHBhc3MgbXVsdGlwbGUgY2xhc3NlcyB1c2luZyBhIHNwYWNlIGFzIHRoZSBkZWxpbWl0ZXIuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRzIC0gKE9wdGlvbmFsKSBQYXNzIGFuIG9iamVjdCB1c2luZyB0aGlzIHBhdHRlcm4gdG8gYWRkIGV2ZW50cy4gKip7IGV2ZW50VHlwZTogY2FsbGJhY2sgfSoqLiBUaGUgZXZlbnRUeXBlIGNvbnNpc3RzIG9mIHN0YW5kYXJkIGphdmFzY3JpcHQgZXZlbnRzLlxyXG4gICAgICogQHJldHVybnMgVGhlIG5ldyBjcmVhdGVkIGVsZW1lbnQgaW5mZXJyZWQgZnJvbSB0aGUgYGBgZWxlbWVudGBgYCBwYXJhbS5cclxuICAgICAqIGBgYGphdmFzY3JpcHRcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDEgLSA8ZGl2IGlkPVwidW5pcXVlLWlkXCIgY2xhc3M9XCJ0ZXh0LWNsYXNzXCI+IFNvbWUgY2FsbCB0byBhY3Rpb24gdGV4dCEgPC9kaXY+XHJcbiAgICAgKiBsZXQgbmV3RWxlbWVudCA9IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBpZDogXCJ1bmlxdWUtaWRcIiwgY2xhc3M6IFwidGV4dC1jbGFzc1wiLCB0ZXh0OiBcIlNvbWUgY2FsbCB0byBhY3Rpb24gdGV4dCFcIn0pO1xyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgMiAtIFdoZW4gY2xpY2tlZCBpdCBwcmludHMgb3V0IFwiQ2xpY2tlZCFcIiB0byB0aGUgY29uc29sZS5cclxuICAgICAqIC8vIDxidXR0b24gaWQ9XCJ1bmlxdWUtaWQtMlwiIGNsYXNzPVwiYnV0dG9uLWNsYXNzXCI+XHJcbiAgICAgKiAvLyAgPGRpdiBpZD1cInVuaXF1ZS1pZFwiIGNsYXNzPVwidGV4dC1jbGFzc1wiPiBTb21lIGNhbGwgdG8gYWN0aW9uIHRleHQhIDwvZGl2PlxyXG4gICAgICogLy8gPC9idXR0b24+XHJcbiAgICAgKiBET00uY3JlYXRlKFwiYnV0dG9uXCIsIHsgaWQ6IFwidW5pcXVlLWlkLTJcIiwgY2xhc3M6IFwiYnV0dG9uLWNsYXNzXCIsIHRleHQ6IG5ld0VsZW1lbnR9LCB7IGNsaWNrOiAoKSA9PiBjb25zb2xlLmxvZygnQ2xpY2tlZCEnKSB9KTtcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGUoZWxlbWVudCwgYXR0cmlidXRlcyA9IG51bGwsIGV2ZW50cyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChhdHRyaWJ1dGVOYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjbGFzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXS50cmltKCkuc3BsaXQoL1xccysvKSkuZm9yRWFjaChhdHRyQ2xhc3MgPT4geyBlbGVtLmNsYXNzTGlzdC5hZGQoYXR0ckNsYXNzKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFwcGVuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hcHBlbmQoLi4uYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkYXRhc2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pLmZvckVhY2goKFtkYXRhS2V5LCBkYXRhVmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmRhdGFzZXRbZGF0YUtleV0gPSBkYXRhVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlbGVtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudHMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50TGlzdCA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdC5mb3JFYWNoKGV2ZW50ID0+IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRzW2V2ZW50XSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2hvcnRoYW5kIGZvciB0aGUgcXVlcnkgc2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSBxdWVyeSAtIEEgcXVlcnkgc2VsZWN0b3Igc3RyaW5nLCBFeGFtcGxlOiBgYGBcIi5jbGFzc1wiYGBgXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIChPcHRpb25hbCkgRGVmYXVsdHMgdG8gdGhlIGRvY3VtZW50IG9iamVjdFxyXG4gICAgICogQHJldHVybiBUaGUgZmlyc3Qgb3Igb25seSBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZWxlY3QocXVlcnksIHBhcmVudCA9IGRvY3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2hvcnRoYW5kIGZvciB0aGUgcXVlcnkgc2VsZWN0b3IgYWxsIHdpdGggdGhlIGFkZGVkIGJvbnVzIG9mIHJldHVybmluZyBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSBxdWVyeSAtIEEgcXVlcnkgc2VsZWN0b3Igc3RyaW5nLCBFeGFtcGxlOiBgYGBcIi5jbGFzc1wiYGBgXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIChPcHRpb25hbCkgRGVmYXVsdHMgdG8gdGhlIGRvY3VtZW50IG9iamVjdFxyXG4gICAgICogQHJldHVybiBBbiBhcnJheSBvZiBlbGVtZW50c1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2VsZWN0QWxsKHF1ZXJ5LCBwYXJlbnQgPSBkb2N1bWVudCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2ggYW5kIHJldHVybiBhbiBFbGVtZW50IGZyb20gdGhlIERPTVxyXG4gICAgICogQHBhcmFtIHJlZmVyZW5jZSBBIHF1ZXJ5IHNlbGVjdG9yIHN0cmluZyBvciBlbGVtIHJlZmVyZW5jZSAoRWxlbWVudCwgZWN0Li4uKVxyXG4gICAgICogQHJldHVybiBUaGUgZGV0YWNoZWQgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGV0YWNoKHJlZmVyZW5jZSkge1xyXG4gICAgICAgIGxldCBlbGVtID0gdHlwZW9mIHJlZmVyZW5jZSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMuc2VsZWN0KHJlZmVyZW5jZSkgOiByZWZlcmVuY2U7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVHdvLXdheSBkYXRhIGJpbmRpbmcgYmV0d2VlbiBhbiBvYmplY3QncyBwcm9wZXJ0eSBhbmQgYW4gRWxlbWVudCdzIGF0dHJpYnV0ZS5cclxuICAgICAqIEBwYXJhbSBvYmplY3QgLSBUaGUgcGFyZW50IG9iamVjdCB3aGVyZSB0aGUgcHJvcGVydHkgd2lsbCBiZSBhZGRlZC5cclxuICAgICAqIEBwYXJhbSBvYmplY3RQcm9wZXJ0eSAtIENyZWF0ZSBhIHByb3BlcnR5IHRoYXQgYmluZHMgd2l0aCBhbiBhdHRyaWJ1dGUuXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIFRoZSBlbGVtZW50IG9yIHF1ZXJ5IHNlbGVjdG9yIG9mIHRoZSBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnRBdHRyaWJ1dGUgLSBUaGUgYXR0cmlidXRlIHRvIGJpbmQgdG8gdGhlIG9iamVjdCdzIHByb3BlcnR5LlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgLSBCaW5kcyBPYmplY3QgUHJvcGVydHkgXCJuYW1lXCIgKGRhdGFPYmplY3QubmFtZSkgdG8gYW4gZWxlbWVudCdzIGF0dHJpYnV0ZSB2YWx1ZS5cclxuICAgICAqIGxldCBkYXRhT2JqZWN0ID0ge307XHJcbiAgICAgKiBET00uYmluZEF0dHJpYnV0ZShkYXRhT2JqZWN0LCBcIm5hbWVcIiwgXCIjdW5pcXVlLWlkXCIsICd2YWx1ZScpO1xyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpbmRBdHRyaWJ1dGUob2JqZWN0LCBvYmplY3RQcm9wZXJ0eSwgZWxlbWVudCwgZWxlbWVudEF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGxldCBlbGVtID0gdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyB0aGlzLnNlbGVjdChlbGVtZW50KSA6IGVsZW1lbnQ7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgb2JqZWN0UHJvcGVydHksIHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRBdHRyaWJ1dGUgPT09IFwiY2hlY2tlZFwiID8gZWxlbVtlbGVtZW50QXR0cmlidXRlXSA6IGVsZW0uZ2V0QXR0cmlidXRlKGVsZW1lbnRBdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50QXR0cmlidXRlID09PSBcImNoZWNrZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtWydjaGVja2VkJ10gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bJ2NoZWNrZWQnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGVsZW1lbnRBdHRyaWJ1dGUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSByb3V0ZSBiYXNlZCBvbiBjdXJyZW50IGxvY2F0aW9uIHBhdGggbmFtZS5cclxuICAgICAqIEBwYXJhbSBpc0FycmF5IC0gKE9wdGlvbmFsKSBUaGlzIHdpbGwgcmV0dXJuIHRoZSBwYXRoIGFzIGFuIGFycmF5IGBgYFsnc29tZScsICdwYXRoJywgJ2RlZmluZWQnXWBgYFxyXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgZGVmYXVsdCB0byBhIHN0cmluZyBgYGAnL3NvbWUvcGF0aC9kZWZpbmVkJ2BgYC5cclxuICAgICAqIEByZXR1cm4gLSBBIHN0cmluZyBvciBhcnJheSByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZG9jdW1lbnQubG9jYXRpb24ucGF0aE5hbWVcclxuICAgICAqXHJcbiAgICAgKiBgYGBqYXZhc2NyaXB0XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAxIC0gR2V0IHBhdGggYC9zb21lL3BhdGgvZGVmaW5lZGBcclxuICAgICAqIGxldCBjdXJyZW50Um91dGUgPSBET00uZ2V0Um91dGUoKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBHZXQgcGF0aCBhcyBhcnJheSBbJ3NvbWUnLCAncGF0aCcsICdkZWZpbmVkJ11cclxuICAgICAqIGxldCBjdXJyZW50Um91dGUgPSBET00uZ2V0Um91dGUodHJ1ZSk7XHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRSb3V0ZShpc0FycmF5ID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gaXNBcnJheSA/IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5maWx0ZXIobiA9PiBuKSA6IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHJvdXRlcyBxdWVyeSBzdHJpbmcgYXMgYSBzdHJpbmcgb3IgYW4gb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gaXNPYmplY3QgLSAoT3B0aW9uYWwpIERlZmF1bHRzIHRvIHRydWUgYW5kIHdpbGwgcmV0dXJuIGFuIG9iamVjdCBieSBkZWZhdWx0LlxyXG4gICAgICogQHJldHVybiAtIEEgc3RyaW5nIG9yIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoXHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgMSAtIEdldCBxdWVyeSBzdHJpbmcgYXMgb2JqZWN0IGBgYHsgdGVzdCA6IDEgfWBgYFxyXG4gICAgICogbGV0IGN1cnJlbnRSb3V0ZSA9IERPTS5nZXRSb3V0ZURhdGEoKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBHZXQgcXVlcnkgc3RyaW5nIGFzIHN0cmluZyBgYGBcIj90ZXN0PTFcImBgYFxyXG4gICAgICogbGV0IGN1cnJlbnRSb3V0ZSA9IERPTS5nZXRSb3V0ZURhdGEoZmFsc2UpO1xyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Um91dGVEYXRhKGlzT2JqZWN0ID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdCA/IE9iamVjdC5mcm9tRW50cmllcyhuZXcgVVJMU2VhcmNoUGFyYW1zKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCkpIDogZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGJyb3dzZXIgdXJsIGFuZCB1cGRhdGUgYnJvd3NlciBoaXN0b3J5IHdpdGhvdXQgdHJpZ2dlcmluZyBhIGZ1bGwgcGFnZSByZWZyZXNoLlxyXG4gICAgICogQHBhcmFtIHJvdXRlIC0gVGhlIHBhdGggbG9jYXRpb24gd2l0aCBhbiBvcHRpb25hbCBxdWVyeSBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBgYGBqYXZhc2NyaXB0XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAxIC0gU2V0IHVybCBsb2NhbGhvc3Q6NDIwMC9zb21lL3BhdGgvZGVmaW5lZFxyXG4gICAgICogRE9NLnNldFJvdXRlKCcvc29tZS9wYXRoL2RlZmluZWQnKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBHZXRzIGN1cnJlbnQgcm91dGUgYXMgYXJyYXkgWydzb21lJywgJ3BhdGgnLCAnZGVmaW5lZCddXHJcbiAgICAgKiAvLyAgICAgICAgICAgICBTZXRzIG5ldyByb3V0ZSBsb2NhbGhvc3Q6NDIwMC9zb21lL3BhdGgvbmV3XHJcbiAgICAgKiBsZXQgY3VycmVudFJvdXRlID0gRE9NLmdldFJvdXRlKHRydWUpO1xyXG4gICAgICogRE9NLnNldFJvdXRlKGAvJHtjdXJyZW50Um91dGVbMF19LyR7Y3VycmVudFJvdXRlWzFdfS9uZXdgKTtcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNldFJvdXRlKHJvdXRlKSB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCByb3V0ZSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fID0gcmVxdWlyZShcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LnRzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0VUX0dMT0JBTF9USElTX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbl9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX19bXCJET01cIl0gPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXztcbm1vZHVsZS5leHBvcnRzID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcztcbiAgfVxuXG4gIHZhciBnO1xuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZyA9IHRoaXMgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfSAvLyBUaGlzIHdvcmtzIGlmIHRoZSBzZWxmIHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblxuXG4gICAgaWYgKHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2VsZjtcbiAgICB9IC8vIFRoaXMgd29ya3MgaWYgdGhlIGdsb2JhbCByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cblxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnO1xufSgpOyIsImltcG9ydCB7IEluZmluaXRlIH0gZnJvbSBcIi4uLy4uL2Rpc3QvZXNtL2luZGV4XCI7XHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiNmNmY2ZjZcIjtcclxuXHJcbi8qKiBcclxuICogXHJcbiAqIFNldHRpbmdzIGV4YW1wbGVcclxuICogXHJcbiAqL1xyXG5sZXQgc2V0dGluZ3NDb250YWluZXIgPSBJbmZpbml0ZS5jcmVhdGVTZXR0aW5nc0NvbnRhaW5lcigpO1xyXG5sZXQgc2V0dGluZ3NHcm91cCA9IEluZmluaXRlLmFkZFNldHRpbmdzR3JvdXAoc2V0dGluZ3NDb250YWluZXIsIFwiSW1wb3J0YW50IE9wdGlvbnNcIik7XHJcblxyXG4vLyBTaW5nbGUgYnV0dG9uIHNldHRpbmdcclxubGV0IGxhYmVsMSA9IEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiQWN0aW9uIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgYnV0dG9uMSA9IEluZmluaXRlLmNyZWF0ZUljb25CdXR0b24oXCJTb21lIGFjdGlvblwiLCBcImZhcyBmYS1jb2dcIik7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoW2xhYmVsMS5yZWYsIGJ1dHRvbjEucmVmXSwgc2V0dGluZ3NHcm91cCk7XHJcblxyXG4vLyBTd2l0Y2ggaW5wdXRcclxubGV0IGxhYmVsMiA9IEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiVG9nZ2xlIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgc3dpdGNoMSA9IEluZmluaXRlLmNyZWF0ZVN3aXRjaChcIlRvZ2dsZSBzb21ldGhpbmdcIiwgdHJ1ZSk7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoW2xhYmVsMi5yZWYsIHN3aXRjaDEucmVmXSwgc2V0dGluZ3NHcm91cCk7XHJcblxyXG4vLyBUd28gYnV0dG9uc1xyXG5sZXQgbGFiZWwzID0gSW5maW5pdGUuY3JlYXRlTGFiZWwoXCJEdW8gQWN0aW9uIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgYnV0dG9uMiA9IEluZmluaXRlLmNyZWF0ZUljb25CdXR0b24oXCJTb21lIGFjdGlvbiAxXCIsIFwiZmFzIGZhLWNoZWNrXCIpO1xyXG5sZXQgYnV0dG9uMyA9IEluZmluaXRlLmNyZWF0ZUljb25CdXR0b24oXCJTb21lIGFjdGlvbiAyXCIsIFwiZmFzIGZhLXRpbWVzXCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFtsYWJlbDMucmVmLCBidXR0b24yLnJlZiwgYnV0dG9uMy5yZWZdLCBzZXR0aW5nc0dyb3VwKTtcclxuXHJcbi8vIE11bHRpcGxlIGJ1dHRvbnNcclxubGV0IGxhYmVsNCA9IEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiTXVsdGlwbGUgQWN0aW9uIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgdGVzdEJ1dHRvblVwID0gSW5maW5pdGUuY3JlYXRlSWNvbkJ1dHRvbihcIlNvbWUgYWN0aW9uIHVwXCIsIFwiZmFzIGZhLWFycm93LXVwXCIpO1xyXG5sZXQgdGVzdEJ1dHRvbkRvd24gPSBJbmZpbml0ZS5jcmVhdGVJY29uQnV0dG9uKFwiU29tZSBhY3Rpb24gZG93blwiLCBcImZhcyBmYS1hcnJvdy1kb3duXCIpO1xyXG5sZXQgdGVzdEJ1dHRvbkxlZnQgPSBJbmZpbml0ZS5jcmVhdGVJY29uQnV0dG9uKFwiU29tZSBhY3Rpb24gbGVmdFwiLCBcImZhcyBmYS1hcnJvdy1sZWZ0XCIpO1xyXG5sZXQgdGVzdEJ1dHRvblJpZ2h0ID0gSW5maW5pdGUuY3JlYXRlSWNvbkJ1dHRvbihcIlNvbWUgYWN0aW9uIHJpZ2h0XCIsIFwiZmFzIGZhLWFycm93LXJpZ2h0XCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFtsYWJlbDQucmVmLCB0ZXN0QnV0dG9uVXAucmVmLCB0ZXN0QnV0dG9uRG93bi5yZWYsIHRlc3RCdXR0b25MZWZ0LnJlZiwgdGVzdEJ1dHRvblJpZ2h0LnJlZl0sIHNldHRpbmdzR3JvdXApO1xyXG5cclxuLy8gdGV4dGJveFxyXG5sZXQgbGFiZWw1ID0gSW5maW5pdGUuY3JlYXRlTGFiZWwoXCJUZXh0IElucHV0IFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgdGVzdElucHV0ID0gSW5maW5pdGUuY3JlYXRlSW5wdXQoXCJFbnRlciBhIE5hbWVcIik7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoW2xhYmVsNS5yZWYsIHRlc3RJbnB1dC5yZWZdLCBzZXR0aW5nc0dyb3VwKTtcclxuXHJcbi8vIFRleHRhcmVhXHJcbmxldCBsYWJlbDYgPSBJbmZpbml0ZS5jcmVhdGVMYWJlbChcIlRleHRhcmVhIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgdGVzdFRleHRhcmVhID0gSW5maW5pdGUuY3JlYXRlVGV4dEFyZWEoXCJFbnRlciBhIERlc2NyaXB0aW9uXCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFtsYWJlbDYucmVmLCB0ZXN0VGV4dGFyZWEucmVmXSwgc2V0dGluZ3NHcm91cCk7XHJcblxyXG5cclxuLyoqIFxyXG4gKiBcclxuICogTG9naW4gZXhhbXBsZVxyXG4gKiBcclxuICovXHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lcjIgPSBJbmZpbml0ZS5jcmVhdGVTZXR0aW5nc0NvbnRhaW5lcih7IHN0eWxlOiBcIndpZHRoOjQ4MHB4O21hcmdpbjo0MHB4O1wiIH0pO1xyXG5sZXQgc2V0dGluZ3NHcm91cDIgPSBJbmZpbml0ZS5hZGRTZXR0aW5nc0dyb3VwKHNldHRpbmdzQ29udGFpbmVyMiwgXCJMb2dpbiBleGFtcGxlXCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFxyXG4gICAgW1xyXG4gICAgICAgIEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiTG9naW4gdG8geW91ciBwZXJzb25hLlwiLCBcIlJlY292aW5nIGEgcGVyc29uYSBpcyBub3QgcG9zc2libGUgYXQgdGhpcyB0aW1lLCBzbyBwbGVhc2UgYWx3YXlzIHNhdmUgeW91ciBwYXNzd29yZCBzb21laHdlcmUuXCIpLnJlZixcclxuICAgIF0sIHNldHRpbmdzR3JvdXAyLCBmYWxzZSk7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoXHJcbiAgICBbXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlTGFiZWwoXCJVc2VybmFtZVwiKS5yZWYsXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlSW5wdXQoXCJFbnRlciBhIHVzZXJuYW1lXCIpLnJlZlxyXG4gICAgXSwgc2V0dGluZ3NHcm91cDIsIGZhbHNlKTtcclxuSW5maW5pdGUuYWRkU2V0dGluZyhcclxuICAgIFtcclxuICAgICAgICBJbmZpbml0ZS5jcmVhdGVMYWJlbChcIlBhc3N3b3JkXCIpLnJlZixcclxuICAgICAgICBJbmZpbml0ZS5jcmVhdGVIaWRkZW5JbnB1dChcIkVudGVyIGEgcGFzc3dvcmRcIikucmVmXHJcbiAgICBdLCBzZXR0aW5nc0dyb3VwMiwgZmFsc2UpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nU3BhY2VyKDIwLCBzZXR0aW5nc0dyb3VwMik7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoXHJcbiAgICBbXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlVGV4dEJ1dHRvbihcIkNhbmNlbFwiKS5yZWYsXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlVGV4dEJ1dHRvbihcIkNyZWF0ZVwiKS5yZWYsXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlVGV4dEJ1dHRvbihcIkxvZ2luXCIpLnJlZlxyXG4gICAgXSwgc2V0dGluZ3NHcm91cDIsIGZhbHNlKTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC1leHBvc2VkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9