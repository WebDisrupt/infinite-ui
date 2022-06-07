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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7O0FDVk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RvQztBQUNNO0FBQ0c7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNERBQWU7QUFDbEMsb0JBQW9CLHFEQUFVLFVBQVUsaUNBQWlDLHFEQUFVLFNBQVMsWUFBWSxHQUFHLHFEQUFVLFdBQVcsbUJBQW1CLElBQUk7QUFDdko7QUFDQTtBQUNBLGtCQUFrQiw0REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG9FQUFvRTtBQUNySCxtQkFBbUIsNERBQWU7QUFDbEMsdUJBQXVCLHFEQUFVLFlBQVksMEJBQTBCO0FBQ3ZFO0FBQ0EscUJBQXFCLHFEQUFVLFlBQVksMENBQTBDO0FBQ3JGLHdCQUF3QixxREFBVSxVQUFVLDRGQUE0RjtBQUN4STtBQUNBO0FBQ0Esa0JBQWtCLGdFQUFrQjtBQUNwQztBQUNBO0FBQ0EsUUFBUSw0REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDhEQUE4RDtBQUNqSCxtQkFBbUIsNERBQWU7QUFDbEMscUJBQXFCLHFEQUFVLGFBQWEsb0ZBQW9GLHFEQUFVLFFBQVEsYUFBYSxHQUFHO0FBQ2xLO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw4REFBOEQ7QUFDM0csbUJBQW1CLDREQUFlO0FBQ2xDLHFCQUFxQixxREFBVSxhQUFhLG1EQUFtRDtBQUMvRjtBQUNBO0FBQ0Esa0JBQWtCLDZEQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsK0RBQStEO0FBQ3ZHLG1CQUFtQiw0REFBZTtBQUNsQyxvQkFBb0IscURBQVUsWUFBWSw4REFBOEQ7QUFDeEcsd0JBQXdCLHFEQUFVLFVBQVUsMENBQTBDO0FBQ3RGO0FBQ0E7QUFDQSxrQkFBa0IsNERBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QywrREFBK0Q7QUFDN0csbUJBQW1CLDREQUFlO0FBQ2xDLG9CQUFvQixxREFBVSxZQUFZLGtFQUFrRTtBQUM1Ryx3QkFBd0IscURBQVUsVUFBVSwwQ0FBMEM7QUFDdEY7QUFDQTtBQUNBLGtCQUFrQiw0REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtEQUErRDtBQUMxRyxtQkFBbUIsNERBQWU7QUFDbEMsdUJBQXVCLHFEQUFVLGVBQWUsK0NBQStDO0FBQy9GLHdCQUF3QixxREFBVSxVQUFVLDZDQUE2QztBQUN6RjtBQUNBO0FBQ0Esa0JBQWtCLCtEQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVUsVUFBVSwrQkFBK0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw2QkFBNkI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVUsVUFBVSxtQ0FBbUM7QUFDL0UsNENBQTRDLHFEQUFVLFVBQVUsZ0JBQWdCLElBQUkscURBQVUsVUFBVSxrQ0FBa0M7QUFDMUksNEJBQTRCLHFEQUFVLFVBQVUseURBQXlEO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBVSxVQUFVLG1DQUFtQyxPQUFPLEdBQUcsYUFBYTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVUsVUFBVSxxQ0FBcUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHNCQUFzQjtBQUNqRjtBQUNBO0FBQ0EscURBQXFELHNCQUFzQjtBQUMzRTtBQUNBO0FBQ0EsdURBQXVELHNCQUFzQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLHVCQUF1QjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixxQkFBcUI7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsd0VBQXdFO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkRBQTJELElBQUksc0NBQXNDO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLGdDQUFnQztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFVBQVU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLEdBQUcsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzlOQSxpQ0FBaUMsbUJBQU8sQ0FBQyw2R0FBb0Q7QUFDN0YsMENBQTBDLG1CQUFPLENBQUMsbUlBQWdFO0FBQ2xIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0EsTUFBTTs7O0FBR04sZUFBZSxxQkFBTTtBQUNyQixhQUFhLHFCQUFNO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEMrQztBQUloRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7QUFFN0M7Ozs7R0FJRztBQUNILElBQUksaUJBQWlCLEdBQUcsNkVBQWdDLEVBQUUsQ0FBQztBQUMzRCxJQUFJLGFBQWEsR0FBRyxzRUFBeUIsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBRXRGLHdCQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRyxpRUFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSwrREFBK0QsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxHQUFHLHNFQUF5QixDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNyRSxnRUFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRTlELGVBQWU7QUFDZixJQUFJLE1BQU0sR0FBRyxpRUFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSwrREFBK0QsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxHQUFHLGtFQUFxQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELGdFQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFOUQsY0FBYztBQUNkLElBQUksTUFBTSxHQUFHLGlFQUFvQixDQUFDLG9CQUFvQixFQUFFLCtEQUErRCxDQUFDLENBQUM7QUFDekgsSUFBSSxPQUFPLEdBQUcsc0VBQXlCLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3pFLElBQUksT0FBTyxHQUFHLHNFQUF5QixDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN6RSxnRUFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFM0UsbUJBQW1CO0FBQ25CLElBQUksTUFBTSxHQUFHLGlFQUFvQixDQUFDLHlCQUF5QixFQUFFLCtEQUErRCxDQUFDLENBQUM7QUFDOUgsSUFBSSxZQUFZLEdBQUcsc0VBQXlCLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUNsRixJQUFJLGNBQWMsR0FBRyxzRUFBeUIsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3hGLElBQUksY0FBYyxHQUFHLHNFQUF5QixDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDeEYsSUFBSSxlQUFlLEdBQUcsc0VBQXlCLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUMzRixnRUFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRWhJLFVBQVU7QUFDVixJQUFJLE1BQU0sR0FBRyxpRUFBb0IsQ0FBQyxvQkFBb0IsRUFBRSwrREFBK0QsQ0FBQyxDQUFDO0FBQ3pILElBQUksU0FBUyxHQUFHLGlFQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3JELGdFQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFaEUsV0FBVztBQUNYLElBQUksTUFBTSxHQUFHLGlFQUFvQixDQUFDLGtCQUFrQixFQUFFLCtEQUErRCxDQUFDLENBQUM7QUFDdkgsSUFBSSxZQUFZLEdBQUcsb0VBQXVCLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNsRSxnRUFBbUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBR25FOzs7O0dBSUc7QUFDSCxJQUFJLGtCQUFrQixHQUFHLDZFQUFnQyxDQUFDLEVBQUUsS0FBSyxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQztBQUNqRyxJQUFJLGNBQWMsR0FBRyxzRUFBeUIsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNwRixnRUFBbUIsQ0FDZjtJQUNJLGlFQUFvQixDQUFDLHdCQUF3QixFQUFFLGlHQUFpRyxDQUFDLENBQUMsR0FBRztDQUN4SixFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5QixnRUFBbUIsQ0FDZjtJQUNJLGlFQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUc7SUFDcEMsaUVBQW9CLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHO0NBQy9DLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGdFQUFtQixDQUNmO0lBQ0ksaUVBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRztJQUNwQyx1RUFBMEIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUc7Q0FDckQsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDOUIsc0VBQXlCLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLGdFQUFtQixDQUNmO0lBQ0ksc0VBQXlCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRztJQUN2QyxzRUFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHO0lBQ3ZDLHNFQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Q0FDekMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7VUM3RTlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy8uLi9kaXN0L2VzbS9jbGFzc2VzL1VVSUR2NC5qcyIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzLy4uL2Rpc3QvZXNtL2VudW0vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzLy4uL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL2RvbWluYXRpb24tanMvLi4vbm9kZV9tb2R1bGVzL2RvbWluYXRpb24tanMvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy8uL3NyYy9pbmRleC1leHBvc2VkLnRzIiwid2VicGFjazovL2RvbWluYXRpb24tanMvLi4vbm9kZV9tb2R1bGVzL2V4cG9zZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldEdsb2JhbFRoaXMuanMiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RvbWluYXRpb24tanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RvbWluYXRpb24tanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9taW5hdGlvbi1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RvbWluYXRpb24tanMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kb21pbmF0aW9uLWpzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImV4cG9ydCBjbGFzcyBVVUlEdjQge1xyXG4gICAgc3RhdGljIGdlbmVyYXRlTnVtYmVyKGxpbWl0KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gbGltaXQgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSB8IDA7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVYKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2VuZXJhdGVOdW1iZXIoMTYpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVYZXMoY291bnQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLmdlbmVyYXRlWCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdlbmVyYXRlVmFyaWFudCgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdlbmVyYXRlTnVtYmVyKDE2KTtcclxuICAgICAgICB2YXIgdmFyaWFudCA9ICh2YWx1ZSAmIDB4MykgfCAweDg7XHJcbiAgICAgICAgcmV0dXJuIHZhcmlhbnQudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLy8gVVVJRCB2NFxyXG4gICAgLy9cclxuICAgIC8vICAgdmFyc2lvbjogTT00IFxyXG4gICAgLy8gICB2YXJpYW50OiBOXHJcbiAgICAvLyAgIHBhdHRlcm46IHh4eHh4eHh4LXh4eHgtTXh4eC1OeHh4LXh4eHh4eHh4eHh4eFxyXG4gICAgLy9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZW5lcmF0ZVhlcyg4KVxyXG4gICAgICAgICAgICArICctJyArIHRoaXMuZ2VuZXJhdGVYZXMoNClcclxuICAgICAgICAgICAgKyAnLScgKyAnNCcgKyB0aGlzLmdlbmVyYXRlWGVzKDMpXHJcbiAgICAgICAgICAgICsgJy0nICsgdGhpcy5nZW5lcmF0ZVZhcmlhbnQoKSArIHRoaXMuZ2VuZXJhdGVYZXMoMylcclxuICAgICAgICAgICAgKyAnLScgKyB0aGlzLmdlbmVyYXRlWGVzKDEyKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1VVUlEdjQuanMubWFwIiwiZXhwb3J0IHZhciBBY3Rpb25UeXBlcztcclxuKGZ1bmN0aW9uIChBY3Rpb25UeXBlcykge1xyXG4gICAgQWN0aW9uVHlwZXNbQWN0aW9uVHlwZXNbXCJub25lXCJdID0gMF0gPSBcIm5vbmVcIjtcclxuICAgIEFjdGlvblR5cGVzW0FjdGlvblR5cGVzW1wibGFiZWxcIl0gPSAxXSA9IFwibGFiZWxcIjtcclxuICAgIEFjdGlvblR5cGVzW0FjdGlvblR5cGVzW1wic3dpdGNoXCJdID0gMl0gPSBcInN3aXRjaFwiO1xyXG4gICAgQWN0aW9uVHlwZXNbQWN0aW9uVHlwZXNbXCJhY3Rpb25cIl0gPSAzXSA9IFwiYWN0aW9uXCI7XHJcbiAgICBBY3Rpb25UeXBlc1tBY3Rpb25UeXBlc1tcImlucHV0XCJdID0gNF0gPSBcImlucHV0XCI7XHJcbiAgICBBY3Rpb25UeXBlc1tBY3Rpb25UeXBlc1tcInRleHRhcmVhXCJdID0gNV0gPSBcInRleHRhcmVhXCI7XHJcbn0pKEFjdGlvblR5cGVzIHx8IChBY3Rpb25UeXBlcyA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFjdGlvbnMuanMubWFwIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcImRvbWluYXRpb24tanNcIjtcclxuaW1wb3J0IHsgVVVJRHY0IH0gZnJvbSBcIi4vY2xhc3Nlcy9VVUlEdjRcIjtcclxuaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9lbnVtL2FjdGlvbnNcIjtcclxuLyoqXHJcbiAqIFF1aWNrbHkgQ3JlYXRlIGhpZ2ggcXVhbGl0eSBVSVxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEluZmluaXRlIHtcclxuICAgIHN0YXRpYyBjcmVhdGVTZXR0aW5nc1JvdygpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIExhYmVsIHdoaWNoIGluY2x1ZGVzIGEgdGl0bGUgYW5kIG9wdGlvbmFsIGRlc2NyaXB0aW9uXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtIEEgdXNlZnVsIG5hbWUgdG8gcXVpY2sgZGVzY3JpYmUgYSBzZXR0aW5nLlxyXG4gICAgICogQHBhcmFtIGRlc2MgLSAoT3B0aW9uYWwpIERlc2NyaWJlcyBzZXR0aW5nIGNvbnRyb2xzIGluIGdyZWF0ZXIgZGV0YWlsLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTGFiZWwobmFtZSwgZGVzY3JpcHRpb24gPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBVVUlEdjQuZ2VuZXJhdGUoKTtcclxuICAgICAgICBsZXQgdGl0bGUgPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgaWQ6IGlkLCBjbGFzczogXCJ0aXRsZVwiLCBhcHBlbmQ6IFtET00uY3JlYXRlKFwiaDVcIiwgeyB0ZXh0OiBuYW1lIH0pLCBET00uY3JlYXRlKFwic3BhblwiLCB7IHRleHQ6IGRlc2NyaXB0aW9uIH0pXSB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLmxhYmVsLFxyXG4gICAgICAgICAgICByZWY6IHRpdGxlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIFN3aXRjaCBUb2dnbGVcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gQSB1c2VmdWwgZGVzY3JpcHRpb24vbmFtZSBmb3IgdGhpcyBzd2l0Y2guXHJcbiAgICAgKiBAcGFyYW0gc3RhdHVzIC0gT24gb3Igb2ZmXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRzIC0gUGFzcyBhbiBvYmplY3Qgd2l0aCBkaWZmZXJlbnQgZnVuY3Rpb25zLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlU3dpdGNoKG5hbWUsIHN0YXR1cywgZXZlbnRzID0geyBjaGFuZ2U6IChlKSA9PiBjb25zb2xlLmxvZyhcIlN3aXRjaCAtPiBzdGF0dXM6IFwiLCBlLnRhcmdldC5jaGVja2VkKSB9KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBVVUlEdjQuZ2VuZXJhdGUoKTtcclxuICAgICAgICBsZXQgY2hlY2tib3ggPSBET00uY3JlYXRlKFwiaW5wdXRcIiwgeyBpZDogaWQsIHR5cGU6IFwiY2hlY2tib3hcIiB9LCBldmVudHMpO1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBzdGF0dXM7XHJcbiAgICAgICAgbGV0IHZpc3VhbCA9IERPTS5jcmVhdGUoXCJsYWJlbFwiLCB7IGNsYXNzOiBcInZpc3VhbFwiLCB0ZXh0OiBcIlRvZ2dsZVwiLCBmb3I6IGlkIH0pO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwic3dpdGNoXCIsICdhcmlhLWxhYmVsJzogbmFtZSwgJ3Rvb2x0aXAtZGlyZWN0aW9uJzogXCJ1cFwiLCBhcHBlbmQ6IFtjaGVja2JveCwgdmlzdWFsXSB9KTtcclxuICAgICAgICBsZXQgc3dpdGNoRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5zd2l0Y2gsXHJcbiAgICAgICAgICAgIHJlZjogY29udGFpbmVyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBET00uYmluZEF0dHJpYnV0ZShzd2l0Y2hEYXRhLCBcInZhbHVlXCIsIGNoZWNrYm94LCAnY2hlY2tlZCcpO1xyXG4gICAgICAgIHJldHVybiBzd2l0Y2hEYXRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgSWNvbiBidXR0b25cclxuICAgICAqIEBwYXJhbSBuYW1lIC0gQSB1c2VmdWwgZGVzY3JpcHRpb24vbmFtZSBmb3IgdGhpcyBidXR0b24uXHJcbiAgICAgKiBAcGFyYW0gaWNvbiAtIEljb24gdGhhdCByZXByZXNlbnRzIHRoZSBhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRzIC0gUGFzcyBhbiBvYmplY3Qgd2l0aCBkaWZmZXJlbnQgZnVuY3Rpb25zLlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUljb25CdXR0b24obmFtZSwgaWNvbiwgZXZlbnRzID0geyBjbGljazogKGUpID0+IGNvbnNvbGUubG9nKFwiQWN0aW9uIC0+IHRyaWdnZXJlZDogXCIsIGUudGFyZ2V0KSB9KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBVVUlEdjQuZ2VuZXJhdGUoKTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gRE9NLmNyZWF0ZShcImJ1dHRvblwiLCB7IGlkOiBpZCwgJ2FyaWEtbGFiZWwnOiBuYW1lLCAndG9vbHRpcC1kaXJlY3Rpb24nOiBcInVwXCIsIGNsYXNzOiBcInN0ZCBidXR0b25cIiwgYXBwZW5kOiBET00uY3JlYXRlKCdpJywgeyBjbGFzczogaWNvbiB9KSB9LCBldmVudHMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZXMuYWN0aW9uLFxyXG4gICAgICAgICAgICByZWY6IGJ1dHRvblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBUZXh0IGJ1dHRvblxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBBIHVzZWZ1bCBkZXNjcmlwdGlvbi9uYW1lIGZvciB0aGlzIGJ1dHRvbi5cclxuICAgICAqIEBwYXJhbSBldmVudHMgLSBQYXNzIGFuIG9iamVjdCB3aXRoIGRpZmZlcmVudCBmdW5jdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVGV4dEJ1dHRvbihuYW1lLCBldmVudHMgPSB7IGNsaWNrOiAoZSkgPT4gY29uc29sZS5sb2coXCJBY3Rpb24gLT4gdHJpZ2dlcmVkOiBcIiwgZS50YXJnZXQpIH0pIHtcclxuICAgICAgICBjb25zdCBpZCA9IFVVSUR2NC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSBET00uY3JlYXRlKFwiYnV0dG9uXCIsIHsgaWQ6IGlkLCBjbGFzczogXCJzdGQgYnV0dG9uIHRleHQtZmlsbFwiLCB0ZXh0OiBuYW1lIH0sIGV2ZW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlcy5hY3Rpb24sXHJcbiAgICAgICAgICAgIHJlZjogYnV0dG9uXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIFRleHQgSW5wdXRcclxuICAgICAqIEBwYXJhbSBuYW1lIC0gQSB1c2VmdWwgZGVzY3JpcHRpb24vbmFtZSBmb3IgdGhpcyBidXR0b24uXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRzIC0gUGFzcyBhbiBvYmplY3Qgd2l0aCBkaWZmZXJlbnQgZnVuY3Rpb25zLlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUlucHV0KG5hbWUsIGV2ZW50cyA9IHsgY2hhbmdlOiAoZSkgPT4gY29uc29sZS5sb2coXCJDaGFuZ2UgLT4gdHJpZ2dlcmVkOiBcIiwgZS50YXJnZXQpIH0pIHtcclxuICAgICAgICBjb25zdCBpZCA9IFVVSUR2NC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIGxldCBpbnB1dCA9IERPTS5jcmVhdGUoXCJpbnB1dFwiLCB7IGlkOiBpZCwgdHlwZTogXCJ0ZXh0XCIsIGNsYXNzOiBcInRleHQtaW5wdXRcIiwgcGxhY2Vob2xkZXI6IG5hbWUgfSwgZXZlbnRzKTtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gRE9NLmNyZWF0ZShcImRpdlwiLCB7ICd0b29sdGlwLWRpcmVjdGlvbic6IFwidXBcIiwgYXBwZW5kOiBpbnB1dCB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLmlucHV0LFxyXG4gICAgICAgICAgICByZWY6IGNvbnRhaW5lclxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBIaWRkZW4gVGV4dCBJbnB1dFxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBBIHVzZWZ1bCBkZXNjcmlwdGlvbi9uYW1lIGZvciB0aGlzIGJ1dHRvbi5cclxuICAgICAqIEBwYXJhbSBldmVudHMgLSBQYXNzIGFuIG9iamVjdCB3aXRoIGRpZmZlcmVudCBmdW5jdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlSGlkZGVuSW5wdXQobmFtZSwgZXZlbnRzID0geyBjaGFuZ2U6IChlKSA9PiBjb25zb2xlLmxvZyhcIkNoYW5nZSAtPiB0cmlnZ2VyZWQ6IFwiLCBlLnRhcmdldCkgfSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gVVVJRHY0LmdlbmVyYXRlKCk7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gRE9NLmNyZWF0ZShcImlucHV0XCIsIHsgaWQ6IGlkLCB0eXBlOiBcInBhc3N3b3JkXCIsIGNsYXNzOiBcInRleHQtaW5wdXRcIiwgcGxhY2Vob2xkZXI6IG5hbWUgfSwgZXZlbnRzKTtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gRE9NLmNyZWF0ZShcImRpdlwiLCB7ICd0b29sdGlwLWRpcmVjdGlvbic6IFwidXBcIiwgYXBwZW5kOiBpbnB1dCB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLmlucHV0LFxyXG4gICAgICAgICAgICByZWY6IGNvbnRhaW5lclxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0ZXh0YXJlYSBmb3IgbXVsdGktbGluZSBpbnB1dFxyXG4gICAgICogQHBhcmFtIG5hbWUgLSBBIHVzZWZ1bCBkZXNjcmlwdGlvbi9uYW1lIGZvciB0aGlzIGJ1dHRvbi5cclxuICAgICAqIEBwYXJhbSBldmVudHMgLSBQYXNzIGFuIG9iamVjdCB3aXRoIGRpZmZlcmVudCBmdW5jdGlvbnMuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlVGV4dEFyZWEobmFtZSwgZXZlbnRzID0geyBjaGFuZ2U6IChlKSA9PiBjb25zb2xlLmxvZyhcIkNoYW5nZSAtPiB0cmlnZ2VyZWQ6IFwiLCBlLnRhcmdldCkgfSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gVVVJRHY0LmdlbmVyYXRlKCk7XHJcbiAgICAgICAgbGV0IHRleHRhcmVhID0gRE9NLmNyZWF0ZShcInRleHRhcmVhXCIsIHsgaWQ6IGlkLCBjbGFzczogXCJ0ZXh0LWFyZWFcIiwgcGxhY2Vob2xkZXI6IG5hbWUgfSwgZXZlbnRzKTtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gRE9NLmNyZWF0ZShcImRpdlwiLCB7ICd0b29sdGlwLWRpcmVjdGlvbic6IFwidXBcIiwgYXBwZW5kOiB0ZXh0YXJlYSB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGVzLnRleHRhcmVhLFxyXG4gICAgICAgICAgICByZWY6IGNvbnRhaW5lclxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlUm93KGNvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gRE9NLmNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcInJvd1wiLCBhcHBlbmQ6IGNvbnRlbnQgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHNldHRpbmdzIGNvbnRhaW5lciB3aGljaCBpcyB0aGUgcm9vdCBsZXZlbCBjb250YWluZXIgZWxlbWVudC5cclxuICAgICAqIFlvdSBjYW4gdGhlbiBhZGQgU2V0dGluZ3NHcm91cHMgdG8gdGhhdCBjb250YWluZXIuXHJcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyAtIChPcHRpb25hbCkgcGFzcyBodG1sIGF0dHJpYnV0ZXMgdG8gYWRkIHRvIGNvbnRhaW5lciBlbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHBhcmVudCAtIChPcHRpb25hbCkgcGFzcyBhIHBhcmVudCBjb250YWluZXIgb3IgaXQgd2lsbCBkZWZhdWx0IG90IHRoZSBkb2N1bWVudCBib2R5LlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZVNldHRpbmdzQ29udGFpbmVyKGF0dHJpYnV0ZXMgPSB7IGNsYXNzOiBcInNldHRpbmdzLWNvbnRpYW5lclwiIH0sIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoXCJjbGFzc1wiKSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gXCJzZXR0aW5ncy1jb250aWFuZXJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIWF0dHJpYnV0ZXMuY2xhc3MuaW5jbHVkZXMoXCJzZXR0aW5ncy1jb250aWFuZXJcIikpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IFwic2V0dGluZ3MtY29udGlhbmVyIFwiICsgYXR0cmlidXRlcy5jbGFzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5jcmVhdGUoXCJkaXZcIiwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHNldHRpbmcgZ3JvdXBcclxuICAgICAqIEBwYXJhbSBjb250YWluZXIgLSBQYXNzIGEgY29udGFpbmVyIHdoZXJlIHRoaXMgZ3JvdXAgYmVsb25ncy5cclxuICAgICAqIEBwYXJhbSB0aXRsZSAtIFBhc3MgYSB0aXRsZSBmb3IgdGhpcyBncm91cFxyXG4gICAgICogQHBhcmFtIHNldHRpbmdzIC0gcGFzcyBhbiBhcnJheSBvZiBzZXR0aW5nIGNvbnRhaW5lcnNcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRTZXR0aW5nc0dyb3VwKGNvbnRhaW5lciwgdGl0bGUsIHNldHRpbmdzID0gbnVsbCkge1xyXG4gICAgICAgIGxldCB0aXRsZUVsZW0gPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZ3JvdXAtdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XHJcbiAgICAgICAgbGV0IGJsb2NrRWxlbSA9IHNldHRpbmdzID09PSBudWxsID8gRE9NLmNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiBcImJsb2NrXCIgfSkgOiBET00uY3JlYXRlKFwiZGl2XCIsIHsgY2xhc3M6IFwiYmxvY2tcIiwgYXBwZW5kOiBzZXR0aW5ncyB9KTtcclxuICAgICAgICBsZXQgc2V0dGluZ3NHcm91cCA9IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogXCJzZXR0aW5ncy1ncm91cFwiLCBhcHBlbmQ6IFt0aXRsZUVsZW0sIGJsb2NrRWxlbV0gfSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzZXR0aW5nc0dyb3VwKTtcclxuICAgICAgICByZXR1cm4gc2V0dGluZ3NHcm91cDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgc3BhY2VyIHRvIHNlcGVyYXRlIHNldHRpbmcgZ3JvdXBcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgLSBIb3cgbXVjaCB0byBzcGFjZSBiZXR3ZWVuXHJcbiAgICAgKiBAcGFyYW0gc2V0dGluZ3NHcm91cCAtIFdoZXJlIHNob3VsZCB0aGlzIHNldHRpbmcgYmUgYWRkZWRcclxuICAgICAqIEBwYXJhbSBpbmNsdWRlRGl2aWRlciAtIChPcHRpb25hbCkgQWRkIGRpdmlkZXIgdG8gYm90dG9tIG9mIHJvdywgZGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkU2V0dGluZ1NwYWNlcihoZWlnaHQsIHNldHRpbmdzR3JvdXAgPSBudWxsLCBpbmNsdWRlRGl2aWRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHJvd0NsYXNzID0gaW5jbHVkZURpdmlkZXIgPyBcInNwYWNlciBkaXZpZGVyXCIgOiBcInNwYWNlclwiO1xyXG4gICAgICAgIGxldCBncm91cCA9IERPTS5jcmVhdGUoXCJkaXZcIiwgeyBjbGFzczogcm93Q2xhc3MsIHN0eWxlOiBgaGVpZ2h0OiAke2hlaWdodH1weDtgLCB0ZXh0OiBcIlwiIH0pO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0dyb3VwICE9PSBudWxsKVxyXG4gICAgICAgICAgICBzZXR0aW5nc0dyb3VwLnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tcIikuYXBwZW5kKGdyb3VwKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NHcm91cCA9PT0gbnVsbClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgc2V0dGluZ3MgZ3JvdXAgZG9lc24ndCBleGlzdC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBuZXcgc2V0dGluZyByb3cgdG8gYSBzZXR0aW5nIGdyb3VwXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50cyAtIEFkZCBjb21wb25lbnRzIHdoaWNoIGFkZCBmdW5jdGlvbmFsaXR5IGFuZCB1dGlsaXR5IHRvIHJvd3MuXHJcbiAgICAgKiBAcGFyYW0gc2V0dGluZ3NHcm91cCAtIFdoZXJlIHNob3VsZCB0aGlzIHNldHRpbmcgYmUgYWRkZWRcclxuICAgICAqIEBwYXJhbSBpbmNsdWRlRGl2aWRlciAtIChPcHRpb25hbCkgQWRkIGRpdmlkZXIgdG8gYm90dG9tIG9mIHJvdywgZGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRTZXR0aW5nKGNvbXBvbmVudHMsIHNldHRpbmdzR3JvdXAgPSBudWxsLCBpbmNsdWRlRGl2aWRlciA9IHRydWUpIHtcclxuICAgICAgICBsZXQgcm93Q2xhc3MgPSBpbmNsdWRlRGl2aWRlciA/IFwicm93IGRpdmlkZXJcIiA6IFwicm93XCI7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gRE9NLmNyZWF0ZShcImRpdlwiLCB7IGNsYXNzOiByb3dDbGFzcywgYXBwZW5kOiBjb21wb25lbnRzIH0pO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc0dyb3VwICE9PSBudWxsKVxyXG4gICAgICAgICAgICBzZXR0aW5nc0dyb3VwLnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tcIikuYXBwZW5kKGdyb3VwKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NHcm91cCA9PT0gbnVsbClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgc2V0dGluZ3MgZ3JvdXAgZG9lc24ndCBleGlzdC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxyXG4gKiBEb2N1bWVudCBPYmplY3QgTW9kZWwgLSBoZWxwZXIgZnVuY3Rpb25zXHJcbiAqIEhlbHBzIHlvdSBpbnRlcmFjdCB3aXRoIHRoZSBET00gc2FmZWx5IGFuZCBlYXNpbHkuXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRE9NIHtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGZvbGxvd3MgdGhlIGV2ZW50IGRlbGVnYXRpb24gcGF0dGVybi4gVGhlIGFkdmFudGFnZSBpcyB0aGF0IHlvdSBjYW4gYWRkXHJcbiAgICAgKiBlbGVtZW50cyBhdCBhbnkgZGVwdGggaW5zaWRlIHRoZSBwYXJlbnQgY29udGFpbmVyIHdpdGhvdXQgaGF2aW5nIHRvIHdvcnJ5IGFib3V0IHRoZSBldmVudCBiZWluZ1xyXG4gICAgICogYXBwbGllZC4gVGhpcyBzb2x2ZXMgaGF2aW5nIHRvIGFkZCwgcmVtb3ZlLCBhbmQgbWFuYWdlIGV2ZW50cyBwZXIgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSB0eXBlIC0gRXZlbnQgdHlwZSwgZXhhbXBsZTogY2xpY2ssIGRibGNsaWNrLCBtb3VzZW92ZXIsIGVjdC4uXHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3IgLSBTYW1lIGFzIHF1ZXJ5IHNlbGVjdG9yLiBFbGVtZW50IGNsYXNzIGRlbm90ZWQgd2l0aCBwZXJpb2QsIGlkIGRlbm90ZWQgd2l0aCAjLCBvciBlbGVtZW50IG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHBlcmZvcm0gd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLlxyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmUgLSBPcHRpb25hbGx5IHVzZSBjYXB0dXJlIGluc3RlYWQgb2YgZXZlbnQgYnViYmxpbmcuXHJcbiAgICAgKiBAcGFyYW0gcGFyZW50IC0gT3B0aW9uYWxseSB3aGVyZSB0byBhZGQgdGhlIGxpc3RlbmVyLiBEZWZhdWx0cyB0byB0aGUgZG9jdW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgMSAtIEFkZHMgY2xpY2sgdG8gSUQgdW5pcXVlLWlkIGluc2lkZSBvZiBkb2N1bWVudC5cclxuICAgICAqIERPTS5hZGRFdmVudERlbGVnYXRlKCdjbGljaycsIFwiI3VuaXF1ZS1pZFwiLCAoKSA9PiB7IGNvbnNvbGUubG9nKFwiRklSRSFcIikgfSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAyIC0gQWRkcyBjbGljayB0byBjbGFzcyAuYnRuIGluc2lkZSBvZiBkb2N1bWVudC5cclxuICAgICAqIERPTS5hZGRFdmVudERlbGVnYXRlKCdjbGljaycsIFwiLmJ0blwiLCAoKSA9PiB7IGNvbnNvbGUubG9nKFwiRklSRSFcIikgfSk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAzIC0gQWRkcyBjbGljayB0byBidXR0b24gZWxlbWVudHMgaW5zaWRlIHdpbmRvdyB2aWEgY2FwdHVyZS5cclxuICAgICAqIERPTS5hZGRFdmVudERlbGVnYXRlKCdjbGljaycsIFwiYnV0dG9uXCIsICgpID0+IHsgY29uc29sZS5sb2coXCJGSVJFIVwiKSB9LCB0cnVlLCB3aW5kb3cpO1xyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZEV2ZW50RGVsZWdhdGUodHlwZSwgc2VsZWN0b3IsIGNhbGxiYWNrLCB1c2VDYXB0dXJlID0gZmFsc2UsIHBhcmVudCA9IGRvY3VtZW50KSB7XHJcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZSk7XHJcbiAgICAgICAgfSwgdXNlQ2FwdHVyZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIGNvbXBsZXggRE9NIGVsZW1lbnQgd2l0aCBhIHNpbmdsZSBmdW5jaXRvbi5cclxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gU3RhbmRhcmQgSFRNTCBlbGVtZW50LiBFeGFtcGxlOiBkaXYsIHNwYW4sIGlucHV0LCBidXR0b24sIGVjdC4uLlxyXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZXMgLSAoT3B0aW9uYWwpIFBhc3MgYW4gb2JqZWN0IHVzaW5nIHRoaXMgcGF0dGVybi4gKip7IGF0dHJpYnV0ZU5hbWUgOiB2YWx1ZSB9KiouXHJcbiAgICAgKiAtIGBgYHRleHRgYGAgWW91IGFyZSBhYmxlIHRvIHBhc3MgYSBzdHJpbmcgYXMgdGV4dENvbnRlbnQuXHJcbiAgICAgKiAtIGBgYGFwcGVuZGBgYCBQYXNzIGFuIGVsZW1lbnQvbm9kZSwgb3IgYW4gYXJyYXkgb2YgZWxlbWVudHMvbm9kZXMgdG8gYXBwZW5kLlxyXG4gICAgICogLSBgYGBodG1sYGBgIFlvdSBhcmUgYWJsZSB0byBwYXNzIGEgc3RyaW5nIGFzIEhUTUwuICoqRG8gbm90IHBhc3MgdXNlciBjaGFuZ2FibGUgZGF0YSBmb3Igb2J2aW91cyBzZWN1cml0eSByZWFzb25zISoqXHJcbiAgICAgKiAtIGBgYGNsYXNzYGBgIFlvdSBhcmUgYWJsZSB0byBwYXNzIG11bHRpcGxlIGNsYXNzZXMgdXNpbmcgYSBzcGFjZSBhcyB0aGUgZGVsaW1pdGVyLlxyXG4gICAgICogQHBhcmFtIGV2ZW50cyAtIChPcHRpb25hbCkgUGFzcyBhbiBvYmplY3QgdXNpbmcgdGhpcyBwYXR0ZXJuIHRvIGFkZCBldmVudHMuICoqeyBldmVudFR5cGU6IGNhbGxiYWNrIH0qKi4gVGhlIGV2ZW50VHlwZSBjb25zaXN0cyBvZiBzdGFuZGFyZCBqYXZhc2NyaXB0IGV2ZW50cy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBuZXcgY3JlYXRlZCBlbGVtZW50IGluZmVycmVkIGZyb20gdGhlIGBgYGVsZW1lbnRgYGAgcGFyYW0uXHJcbiAgICAgKiBgYGBqYXZhc2NyaXB0XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAxIC0gPGRpdiBpZD1cInVuaXF1ZS1pZFwiIGNsYXNzPVwidGV4dC1jbGFzc1wiPiBTb21lIGNhbGwgdG8gYWN0aW9uIHRleHQhIDwvZGl2PlxyXG4gICAgICogbGV0IG5ld0VsZW1lbnQgPSBET00uY3JlYXRlKFwiZGl2XCIsIHsgaWQ6IFwidW5pcXVlLWlkXCIsIGNsYXNzOiBcInRleHQtY2xhc3NcIiwgdGV4dDogXCJTb21lIGNhbGwgdG8gYWN0aW9uIHRleHQhXCJ9KTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDIgLSBXaGVuIGNsaWNrZWQgaXQgcHJpbnRzIG91dCBcIkNsaWNrZWQhXCIgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgKiAvLyA8YnV0dG9uIGlkPVwidW5pcXVlLWlkLTJcIiBjbGFzcz1cImJ1dHRvbi1jbGFzc1wiPlxyXG4gICAgICogLy8gIDxkaXYgaWQ9XCJ1bmlxdWUtaWRcIiBjbGFzcz1cInRleHQtY2xhc3NcIj4gU29tZSBjYWxsIHRvIGFjdGlvbiB0ZXh0ISA8L2Rpdj5cclxuICAgICAqIC8vIDwvYnV0dG9uPlxyXG4gICAgICogRE9NLmNyZWF0ZShcImJ1dHRvblwiLCB7IGlkOiBcInVuaXF1ZS1pZC0yXCIsIGNsYXNzOiBcImJ1dHRvbi1jbGFzc1wiLCB0ZXh0OiBuZXdFbGVtZW50fSwgeyBjbGljazogKCkgPT4gY29uc29sZS5sb2coJ0NsaWNrZWQhJykgfSk7XHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlKGVsZW1lbnQsIGF0dHJpYnV0ZXMgPSBudWxsLCBldmVudHMgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goYXR0cmlidXRlTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGF0dHJpYnV0ZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xhc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0udHJpbSgpLnNwbGl0KC9cXHMrLykpLmZvckVhY2goYXR0ckNsYXNzID0+IHsgZWxlbS5jbGFzc0xpc3QuYWRkKGF0dHJDbGFzcyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBlbmRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYXBwZW5kKC4uLmF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5hcHBlbmQoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImh0bWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGF0YXNldFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKS5mb3JFYWNoKChbZGF0YUtleSwgZGF0YVZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5kYXRhc2V0W2RhdGFLZXldID0gZGF0YVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZWxlbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBldmVudExpc3QgPSBPYmplY3Qua2V5cyhldmVudHMpO1xyXG4gICAgICAgICAgICBldmVudExpc3QuZm9yRWFjaChldmVudCA9PiBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50c1tldmVudF0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNob3J0aGFuZCBmb3IgdGhlIHF1ZXJ5IHNlbGVjdG9yXHJcbiAgICAgKiBAcGFyYW0gcXVlcnkgLSBBIHF1ZXJ5IHNlbGVjdG9yIHN0cmluZywgRXhhbXBsZTogYGBgXCIuY2xhc3NcImBgYFxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSAoT3B0aW9uYWwpIERlZmF1bHRzIHRvIHRoZSBkb2N1bWVudCBvYmplY3RcclxuICAgICAqIEByZXR1cm4gVGhlIGZpcnN0IG9yIG9ubHkgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2VsZWN0KHF1ZXJ5LCBwYXJlbnQgPSBkb2N1bWVudCkge1xyXG4gICAgICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNob3J0aGFuZCBmb3IgdGhlIHF1ZXJ5IHNlbGVjdG9yIGFsbCB3aXRoIHRoZSBhZGRlZCBib251cyBvZiByZXR1cm5pbmcgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gcXVlcnkgLSBBIHF1ZXJ5IHNlbGVjdG9yIHN0cmluZywgRXhhbXBsZTogYGBgXCIuY2xhc3NcImBgYFxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSAoT3B0aW9uYWwpIERlZmF1bHRzIHRvIHRoZSBkb2N1bWVudCBvYmplY3RcclxuICAgICAqIEByZXR1cm4gQW4gYXJyYXkgb2YgZWxlbWVudHNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNlbGVjdEFsbChxdWVyeSwgcGFyZW50ID0gZG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGV0YWNoIGFuZCByZXR1cm4gYW4gRWxlbWVudCBmcm9tIHRoZSBET01cclxuICAgICAqIEBwYXJhbSByZWZlcmVuY2UgQSBxdWVyeSBzZWxlY3RvciBzdHJpbmcgb3IgZWxlbSByZWZlcmVuY2UgKEVsZW1lbnQsIGVjdC4uLilcclxuICAgICAqIEByZXR1cm4gVGhlIGRldGFjaGVkIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRldGFjaChyZWZlcmVuY2UpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IHR5cGVvZiByZWZlcmVuY2UgPT09IFwic3RyaW5nXCIgPyB0aGlzLnNlbGVjdChyZWZlcmVuY2UpIDogcmVmZXJlbmNlO1xyXG4gICAgICAgIHJldHVybiBlbGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFR3by13YXkgZGF0YSBiaW5kaW5nIGJldHdlZW4gYW4gb2JqZWN0J3MgcHJvcGVydHkgYW5kIGFuIEVsZW1lbnQncyBhdHRyaWJ1dGUuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIHBhcmVudCBvYmplY3Qgd2hlcmUgdGhlIHByb3BlcnR5IHdpbGwgYmUgYWRkZWQuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0UHJvcGVydHkgLSBDcmVhdGUgYSBwcm9wZXJ0eSB0aGF0IGJpbmRzIHdpdGggYW4gYXR0cmlidXRlLlxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBUaGUgZWxlbWVudCBvciBxdWVyeSBzZWxlY3RvciBvZiB0aGUgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSBlbGVtZW50QXR0cmlidXRlIC0gVGhlIGF0dHJpYnV0ZSB0byBiaW5kIHRvIHRoZSBvYmplY3QncyBwcm9wZXJ0eS5cclxuICAgICAqIGBgYGphdmFzY3JpcHRcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIC0gQmluZHMgT2JqZWN0IFByb3BlcnR5IFwibmFtZVwiIChkYXRhT2JqZWN0Lm5hbWUpIHRvIGFuIGVsZW1lbnQncyBhdHRyaWJ1dGUgdmFsdWUuXHJcbiAgICAgKiBsZXQgZGF0YU9iamVjdCA9IHt9O1xyXG4gICAgICogRE9NLmJpbmRBdHRyaWJ1dGUoZGF0YU9iamVjdCwgXCJuYW1lXCIsIFwiI3VuaXF1ZS1pZFwiLCAndmFsdWUnKTtcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaW5kQXR0cmlidXRlKG9iamVjdCwgb2JqZWN0UHJvcGVydHksIGVsZW1lbnQsIGVsZW1lbnRBdHRyaWJ1dGUpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiID8gdGhpcy5zZWxlY3QoZWxlbWVudCkgOiBlbGVtZW50O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIG9iamVjdFByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50QXR0cmlidXRlID09PSBcImNoZWNrZWRcIiA/IGVsZW1bZWxlbWVudEF0dHJpYnV0ZV0gOiBlbGVtLmdldEF0dHJpYnV0ZShlbGVtZW50QXR0cmlidXRlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudEF0dHJpYnV0ZSA9PT0gXCJjaGVja2VkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsnY2hlY2tlZCddID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtWydjaGVja2VkJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShlbGVtZW50QXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcm91dGUgYmFzZWQgb24gY3VycmVudCBsb2NhdGlvbiBwYXRoIG5hbWUuXHJcbiAgICAgKiBAcGFyYW0gaXNBcnJheSAtIChPcHRpb25hbCkgVGhpcyB3aWxsIHJldHVybiB0aGUgcGF0aCBhcyBhbiBhcnJheSBgYGBbJ3NvbWUnLCAncGF0aCcsICdkZWZpbmVkJ11gYGBcclxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIGRlZmF1bHQgdG8gYSBzdHJpbmcgYGBgJy9zb21lL3BhdGgvZGVmaW5lZCdgYGAuXHJcbiAgICAgKiBAcmV0dXJuIC0gQSBzdHJpbmcgb3IgYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhOYW1lXHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgMSAtIEdldCBwYXRoIGAvc29tZS9wYXRoL2RlZmluZWRgXHJcbiAgICAgKiBsZXQgY3VycmVudFJvdXRlID0gRE9NLmdldFJvdXRlKCk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAyIC0gR2V0IHBhdGggYXMgYXJyYXkgWydzb21lJywgJ3BhdGgnLCAnZGVmaW5lZCddXHJcbiAgICAgKiBsZXQgY3VycmVudFJvdXRlID0gRE9NLmdldFJvdXRlKHRydWUpO1xyXG4gICAgICpcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Um91dGUoaXNBcnJheSA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkgPyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikuZmlsdGVyKG4gPT4gbikgOiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSByb3V0ZXMgcXVlcnkgc3RyaW5nIGFzIGEgc3RyaW5nIG9yIGFuIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGlzT2JqZWN0IC0gKE9wdGlvbmFsKSBEZWZhdWx0cyB0byB0cnVlIGFuZCB3aWxsIHJldHVybiBhbiBvYmplY3QgYnkgZGVmYXVsdC5cclxuICAgICAqIEByZXR1cm4gLSBBIHN0cmluZyBvciBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaFxyXG4gICAgICpcclxuICAgICAqIGBgYGphdmFzY3JpcHRcclxuICAgICAqXHJcbiAgICAgKiAvLyBFeGFtcGxlIDEgLSBHZXQgcXVlcnkgc3RyaW5nIGFzIG9iamVjdCBgYGB7IHRlc3QgOiAxIH1gYGBcclxuICAgICAqIGxldCBjdXJyZW50Um91dGUgPSBET00uZ2V0Um91dGVEYXRhKCk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAyIC0gR2V0IHF1ZXJ5IHN0cmluZyBhcyBzdHJpbmcgYGBgXCI/dGVzdD0xXCJgYGBcclxuICAgICAqIGxldCBjdXJyZW50Um91dGUgPSBET00uZ2V0Um91dGVEYXRhKGZhbHNlKTtcclxuICAgICAqXHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFJvdXRlRGF0YShpc09iamVjdCA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QgPyBPYmplY3QuZnJvbUVudHJpZXMobmV3IFVSTFNlYXJjaFBhcmFtcyhkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gpKSA6IGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBicm93c2VyIHVybCBhbmQgdXBkYXRlIGJyb3dzZXIgaGlzdG9yeSB3aXRob3V0IHRyaWdnZXJpbmcgYSBmdWxsIHBhZ2UgcmVmcmVzaC5cclxuICAgICAqIEBwYXJhbSByb3V0ZSAtIFRoZSBwYXRoIGxvY2F0aW9uIHdpdGggYW4gb3B0aW9uYWwgcXVlcnkgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogYGBgamF2YXNjcmlwdFxyXG4gICAgICpcclxuICAgICAqIC8vIEV4YW1wbGUgMSAtIFNldCB1cmwgbG9jYWxob3N0OjQyMDAvc29tZS9wYXRoL2RlZmluZWRcclxuICAgICAqIERPTS5zZXRSb3V0ZSgnL3NvbWUvcGF0aC9kZWZpbmVkJyk7XHJcbiAgICAgKlxyXG4gICAgICogLy8gRXhhbXBsZSAyIC0gR2V0cyBjdXJyZW50IHJvdXRlIGFzIGFycmF5IFsnc29tZScsICdwYXRoJywgJ2RlZmluZWQnXVxyXG4gICAgICogLy8gICAgICAgICAgICAgU2V0cyBuZXcgcm91dGUgbG9jYWxob3N0OjQyMDAvc29tZS9wYXRoL25ld1xyXG4gICAgICogbGV0IGN1cnJlbnRSb3V0ZSA9IERPTS5nZXRSb3V0ZSh0cnVlKTtcclxuICAgICAqIERPTS5zZXRSb3V0ZShgLyR7Y3VycmVudFJvdXRlWzBdfS8ke2N1cnJlbnRSb3V0ZVsxXX0vbmV3YCk7XHJcbiAgICAgKlxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRSb3V0ZShyb3V0ZSkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgcm91dGUpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC50c1wiKTtcbnZhciBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvZXhwb3NlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0R2xvYmFsVGhpcy5qc1wiKTtcbnZhciBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fID0gX19fRVhQT1NFX0xPQURFUl9HRVRfR0xPQkFMX1RISVNfX187XG5fX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wiRE9NXCJdID0gX19fRVhQT1NFX0xPQURFUl9JTVBPUlRfX187XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIH1cblxuICB2YXIgZztcblxuICB0cnkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGcgPSB0aGlzIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH0gLy8gVGhpcyB3b3JrcyBpZiB0aGUgc2VsZiByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cblxuICAgIGlmICh0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfSAvLyBUaGlzIHdvcmtzIGlmIHRoZSBnbG9iYWwgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXG5cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGdsb2JhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZztcbn0oKTsiLCJpbXBvcnQgeyBJbmZpbml0ZSB9IGZyb20gXCIuLi8uLi9kaXN0L2VzbS9pbmRleFwiO1xyXG5cclxuXHJcblxyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuXHJcbi8qKiBcclxuICogXHJcbiAqIFNldHRpbmdzIGV4YW1wbGVcclxuICogXHJcbiAqL1xyXG5sZXQgc2V0dGluZ3NDb250YWluZXIgPSBJbmZpbml0ZS5jcmVhdGVTZXR0aW5nc0NvbnRhaW5lcigpO1xyXG5sZXQgc2V0dGluZ3NHcm91cCA9IEluZmluaXRlLmFkZFNldHRpbmdzR3JvdXAoc2V0dGluZ3NDb250YWluZXIsIFwiSW1wb3J0YW50IE9wdGlvbnNcIik7XHJcblxyXG4vLyBTaW5nbGUgYnV0dG9uIHNldHRpbmdcclxubGV0IGxhYmVsMSA9IEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiQWN0aW9uIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgYnV0dG9uMSA9IEluZmluaXRlLmNyZWF0ZUljb25CdXR0b24oXCJTb21lIGFjdGlvblwiLCBcImZhcyBmYS1jb2dcIik7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoW2xhYmVsMS5yZWYsIGJ1dHRvbjEucmVmXSwgc2V0dGluZ3NHcm91cCk7XHJcblxyXG4vLyBTd2l0Y2ggaW5wdXRcclxubGV0IGxhYmVsMiA9IEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiVG9nZ2xlIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgc3dpdGNoMSA9IEluZmluaXRlLmNyZWF0ZVN3aXRjaChcIlRvZ2dsZSBzb21ldGhpbmdcIiwgdHJ1ZSk7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoW2xhYmVsMi5yZWYsIHN3aXRjaDEucmVmXSwgc2V0dGluZ3NHcm91cCk7XHJcblxyXG4vLyBUd28gYnV0dG9uc1xyXG5sZXQgbGFiZWwzID0gSW5maW5pdGUuY3JlYXRlTGFiZWwoXCJEdW8gQWN0aW9uIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgYnV0dG9uMiA9IEluZmluaXRlLmNyZWF0ZUljb25CdXR0b24oXCJTb21lIGFjdGlvbiAxXCIsIFwiZmFzIGZhLWNoZWNrXCIpO1xyXG5sZXQgYnV0dG9uMyA9IEluZmluaXRlLmNyZWF0ZUljb25CdXR0b24oXCJTb21lIGFjdGlvbiAyXCIsIFwiZmFzIGZhLXRpbWVzXCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFtsYWJlbDMucmVmLCBidXR0b24yLnJlZiwgYnV0dG9uMy5yZWZdLCBzZXR0aW5nc0dyb3VwKTtcclxuXHJcbi8vIE11bHRpcGxlIGJ1dHRvbnNcclxubGV0IGxhYmVsNCA9IEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiTXVsdGlwbGUgQWN0aW9uIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgdGVzdEJ1dHRvblVwID0gSW5maW5pdGUuY3JlYXRlSWNvbkJ1dHRvbihcIlNvbWUgYWN0aW9uIHVwXCIsIFwiZmFzIGZhLWFycm93LXVwXCIpO1xyXG5sZXQgdGVzdEJ1dHRvbkRvd24gPSBJbmZpbml0ZS5jcmVhdGVJY29uQnV0dG9uKFwiU29tZSBhY3Rpb24gZG93blwiLCBcImZhcyBmYS1hcnJvdy1kb3duXCIpO1xyXG5sZXQgdGVzdEJ1dHRvbkxlZnQgPSBJbmZpbml0ZS5jcmVhdGVJY29uQnV0dG9uKFwiU29tZSBhY3Rpb24gbGVmdFwiLCBcImZhcyBmYS1hcnJvdy1sZWZ0XCIpO1xyXG5sZXQgdGVzdEJ1dHRvblJpZ2h0ID0gSW5maW5pdGUuY3JlYXRlSWNvbkJ1dHRvbihcIlNvbWUgYWN0aW9uIHJpZ2h0XCIsIFwiZmFzIGZhLWFycm93LXJpZ2h0XCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFtsYWJlbDQucmVmLCB0ZXN0QnV0dG9uVXAucmVmLCB0ZXN0QnV0dG9uRG93bi5yZWYsIHRlc3RCdXR0b25MZWZ0LnJlZiwgdGVzdEJ1dHRvblJpZ2h0LnJlZl0sIHNldHRpbmdzR3JvdXApO1xyXG5cclxuLy8gdGV4dGJveFxyXG5sZXQgbGFiZWw1ID0gSW5maW5pdGUuY3JlYXRlTGFiZWwoXCJUZXh0IElucHV0IFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgdGVzdElucHV0ID0gSW5maW5pdGUuY3JlYXRlSW5wdXQoXCJFbnRlciBhIE5hbWVcIik7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoW2xhYmVsNS5yZWYsIHRlc3RJbnB1dC5yZWZdLCBzZXR0aW5nc0dyb3VwKTtcclxuXHJcbi8vIFRleHRhcmVhXHJcbmxldCBsYWJlbDYgPSBJbmZpbml0ZS5jcmVhdGVMYWJlbChcIlRleHRhcmVhIFNldHRpbmdcIiwgXCJTb21lIGRlc3NjcmlwdGlvbiB0aGF0IGNvdWxkIGhlbHAgZXhwbGFpbiB0aGlzIGZ1bmN0aW9uYWxpdHkuXCIpO1xyXG5sZXQgdGVzdFRleHRhcmVhID0gSW5maW5pdGUuY3JlYXRlVGV4dEFyZWEoXCJFbnRlciBhIERlc2NyaXB0aW9uXCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFtsYWJlbDYucmVmLCB0ZXN0VGV4dGFyZWEucmVmXSwgc2V0dGluZ3NHcm91cCk7XHJcblxyXG5cclxuLyoqIFxyXG4gKiBcclxuICogTG9naW4gZXhhbXBsZVxyXG4gKiBcclxuICovXHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lcjIgPSBJbmZpbml0ZS5jcmVhdGVTZXR0aW5nc0NvbnRhaW5lcih7IHN0eWxlOiBcIndpZHRoOjQ4MHB4O21hcmdpbjo0MHB4O1wiIH0pO1xyXG5sZXQgc2V0dGluZ3NHcm91cDIgPSBJbmZpbml0ZS5hZGRTZXR0aW5nc0dyb3VwKHNldHRpbmdzQ29udGFpbmVyMiwgXCJMb2dpbiBleGFtcGxlXCIpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nKFxyXG4gICAgW1xyXG4gICAgICAgIEluZmluaXRlLmNyZWF0ZUxhYmVsKFwiTG9naW4gdG8geW91ciBwZXJzb25hLlwiLCBcIlJlY292aW5nIGEgcGVyc29uYSBpcyBub3QgcG9zc2libGUgYXQgdGhpcyB0aW1lLCBzbyBwbGVhc2UgYWx3YXlzIHNhdmUgeW91ciBwYXNzd29yZCBzb21laHdlcmUuXCIpLnJlZixcclxuICAgIF0sIHNldHRpbmdzR3JvdXAyLCBmYWxzZSk7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoXHJcbiAgICBbXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlTGFiZWwoXCJVc2VybmFtZVwiKS5yZWYsXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlSW5wdXQoXCJFbnRlciBhIHVzZXJuYW1lXCIpLnJlZlxyXG4gICAgXSwgc2V0dGluZ3NHcm91cDIsIGZhbHNlKTtcclxuSW5maW5pdGUuYWRkU2V0dGluZyhcclxuICAgIFtcclxuICAgICAgICBJbmZpbml0ZS5jcmVhdGVMYWJlbChcIlBhc3N3b3JkXCIpLnJlZixcclxuICAgICAgICBJbmZpbml0ZS5jcmVhdGVIaWRkZW5JbnB1dChcIkVudGVyIGEgcGFzc3dvcmRcIikucmVmXHJcbiAgICBdLCBzZXR0aW5nc0dyb3VwMiwgZmFsc2UpO1xyXG5JbmZpbml0ZS5hZGRTZXR0aW5nU3BhY2VyKDIwLCBzZXR0aW5nc0dyb3VwMik7XHJcbkluZmluaXRlLmFkZFNldHRpbmcoXHJcbiAgICBbXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlVGV4dEJ1dHRvbihcIkNhbmNlbFwiKS5yZWYsXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlVGV4dEJ1dHRvbihcIkNyZWF0ZVwiKS5yZWYsXHJcbiAgICAgICAgSW5maW5pdGUuY3JlYXRlVGV4dEJ1dHRvbihcIkxvZ2luXCIpLnJlZlxyXG4gICAgXSwgc2V0dGluZ3NHcm91cDIsIGZhbHNlKTtcclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC1leHBvc2VkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9