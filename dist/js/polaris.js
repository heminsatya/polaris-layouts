(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Polaris"] = factory();
	else
		root["Polaris"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/polaris-core/dist/js/modules/Alerts.js":
/*!*************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Alerts.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alerts: () => (/* binding */ Alerts)
/* harmony export */ });
/* harmony import */ var _Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animations */ "./node_modules/polaris-core/dist/js/modules/Animations.js");
/**
 * Import the parent Class
 */

/**
 * @desc Used for setting alerts
 */
class Alerts extends _Animations__WEBPACK_IMPORTED_MODULE_0__.Animations {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    // Set Alert
    /**
     * @desc Sets an alert to alert__container#alert-blueprint
     *
     * @param {string} text     -- Alert text
     * @param {string} enter    -- Alert animation enter
     * @param {string} exit     -- Alert animation exit
     * @param {string} status   -- Alert status: notice | warning | success
     * @param {string} color    -- Alert color:  light | dark
     * @param {boolean} close   -- Closable alert: true | false
     * @param {number} duration -- Alert animation duration: number in miliseconds
     * @param {number} delay    -- Alert animation delay: number in miliseconds
     *
     * @return {void}
     */
    alert(text, enter = "fadeIn", exit = "fadeOut", status = "", color = "", close = true, duration = 500, delay = 250) {
        // Set the status code
        let statusCode = "";
        let statusClass = "";
        if (status)
            statusClass = ` ${this.nameAlert + this.modSep + this.nameIcon}`;
        if (status === "notice") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertCircle}"></div>`;
        }
        else if (status === "warning") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertTri}"></div>`;
        }
        else if (status === "success") {
            statusCode = `<div class="${this.nameAlert + this.chiSep + this.nameIcon} ${this.piAlertTick}"></div>`;
        }
        // Set the color class
        let colorClass = "";
        if (color === "light") {
            colorClass = ` ${this.nameAlert + this.modSep + color}`;
        }
        // Check the closable
        let closeCode = "";
        let closeClass = "";
        if (close) {
            closeCode = `<div class="${this.nameAlert + this.chiSep + this.nameClose} ${this.piClose}"></div>`;
            closeClass = ` ${this.nameAlert + this.modSep + this.nameClose}`;
        }
        // Produce the alert content
        let content = `<div class="${this.nameAlert + colorClass + statusClass + closeClass} ${this.nameAnimation}" style="animation-name:${enter}; --animation-duration: ${duration}ms;">`;
        content += statusCode;
        content += `<div class="${this.nameAlert + this.chiSep + this.nameContent}">`;
        content += text;
        content += '</div>';
        content += closeCode;
        content += '</div>';
        // Create the parent
        const parent = document.querySelector(`#${this.nameAlert + '-' + this.nameBlueprint}`);
        // Create the node
        const element = document.createElement('div');
        // Modify the node
        element.classList.add(this.nameAlert + this.parSep + this.nameControl, this.nameAnimation);
        element.style.cssText = `--animation-duration: ${duration}ms; --animation-height: 4.5rem;`;
        element.innerHTML = content;
        // Append the node to the parent
        parent.appendChild(element);
        // Find the child node
        const child = element.querySelector(`.${this.nameAlert}`);
        // Set animation exit timeout
        let timeout = setTimeout(() => {
            this.animation(child, exit);
            timeout = setTimeout(() => {
                this.animation(element, this.hideYAnimation).then(() => {
                    element.remove();
                });
            }, delay);
        }, this.hideTimeout);
        // Set animation exit on click
        if (element.querySelector(`.${this.nameAlert + this.chiSep + this.nameClose}`)) {
            element.querySelector(`.${this.nameAlert + this.chiSep + this.nameClose}`).onclick = () => {
                clearTimeout(timeout);
                this.animation(child, exit);
                timeout = setTimeout(() => {
                    this.animation(element, this.hideYAnimation).then(() => {
                        element.remove();
                    });
                }, delay);
            };
        }
    }
}
//# sourceMappingURL=Alerts.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Animations.js":
/*!*****************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Animations.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
/* harmony export */ });
/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers */ "./node_modules/polaris-core/dist/js/modules/Helpers.js");
/**
 * Import the parent Class
 */

/**
 * @desc Used for setting & handling animations
 */
class Animations extends _Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Sets and returns a new animation Promise
     *
     * @param {any}     selector  -- The selector name (object)
     * @param {string}  animation -- The animation name
     * @param {boolean} clear     -- For clearing the animation after it has been ended
     *
     * @return {any}
     */
    animation(selector, animation = "", clear = false) {
        let node = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Check animation
        if (animation == "") {
            // Unset the animation
            // node.removeAttribute('data-animation');
            node.style.removeProperty('animation-name');
            // Exit the method
            return false;
        }
        // // Check current animation
        // if (this.getStyle(selector, 'animation-name') == animation) {
        //     // TODO
        // }
        // // Wait for all animations to be finished
        // Promise.all(
        //     node.getAnimations({ subtree: false })
        //     .map((animation:any) => animation.finished)
        // ).then(() => {
        //     // TODO
        // });
        // Animation promise
        const promise = new Promise((resolve, reject) => {
            // Check datasets and set variables
            this.datasets(node);
            // Set the new animation
            // node.setAttribute("data-animation", animation);
            node.style.setProperty('animation-name', animation);
            // Animation resolve callback
            function animationEnd(event) {
                event.stopPropagation();
                // Check animation clearance
                if (clear) {
                    // node.removeAttribute('data-animation');
                    node.style.removeProperty('animation-name');
                }
                // Promise on resolve
                resolve('Animation ended!');
                // Promise on reject
                reject('Animation crashed!');
            }
            // Animation end listener
            node.addEventListener('animationend', animationEnd, { once: true });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Checks animation datasets and sets relevant variables
     *
     * @param {object} selector -- The selector object
     *
     * @return {void}
     */
    datasets(selector) {
        // data-animation
        if (selector.dataset.animation) {
            selector.style.setProperty('animation-name', selector.dataset.animation);
        }
        // data-duration
        if (selector.dataset.duration) {
            selector.style.setProperty('--animation-duration', selector.dataset.duration);
        }
        // data-delay
        if (selector.dataset.delay) {
            selector.style.setProperty('--animation-delay', selector.dataset.delay);
        }
        // data-count
        if (selector.dataset.count) {
            selector.style.setProperty('--animation-count', selector.dataset.count);
        }
        // data-function
        if (selector.dataset.function) {
            selector.style.setProperty('--animation-function', selector.dataset.function);
        }
        // data-state
        if (selector.dataset.state) {
            selector.style.setProperty('--animation-state', selector.dataset.state);
        }
        // data-position
        if (selector.dataset.position) {
            selector.style.setProperty('--animation-position', selector.dataset.position);
        }
        // data-scale
        if (selector.dataset.scale) {
            selector.style.setProperty('--animation-scale', selector.dataset.scale);
        }
        // data-perspective
        if (selector.dataset.perspective) {
            selector.style.setProperty('--animation-perspective', selector.dataset.perspective);
        }
        // data-degree
        if (selector.dataset.degree) {
            selector.style.setProperty('--animation-degree', selector.dataset.degree);
        }
        // data-height
        if (selector.dataset.height) {
            selector.style.setProperty('--animation-height', selector.dataset.height);
        }
        // data-width
        if (selector.dataset.width) {
            selector.style.setProperty('--animation-width', selector.dataset.width);
        }
        // data-brightness
        if (selector.dataset.brightness) {
            selector.style.setProperty('--animation-brightness', selector.dataset.brightness);
        }
        // data-dimension
        if (selector.dataset.dimension) {
            selector.style.setProperty('--animation-dimension', selector.dataset.dimension);
        }
    }
    /**
     * @desc Makes selectors animated
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {string}          mod      -- The scroll mod
     *
     * @return {void}
     */
    animated(selector, mod = 'bottom') {
        let nodes = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                nodes = document.querySelectorAll(selector);
            }
            else if (typeof (selector) === "object") {
                nodes = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        nodes.forEach((node) => {
            let tolerance = node.dataset.tolerance;
            let animationEnter = node.dataset.enter;
            let animationExit = node.dataset.exit;
            // Check data-tolerance
            if (!tolerance) {
                tolerance = 0;
            }
            // Check data-enter
            if (!animationEnter) {
                animationEnter = 'fadeIn';
            }
            // Check data-exit
            if (!animationExit) {
                animationExit = 'fadeOut';
            }
            // Check element visibility
            if (this.visible(node, mod, tolerance)) {
                // Animation enter
                this.animation(node, animationEnter);
            }
            else {
                // Animation exit
                this.animation(node, animationExit);
            }
        });
    }
    /**
     * @desc Loops an animation
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {number}          duration -- The loop duration (in miliseconds)
     * @param {number}          count    -- The loop count
     *
     * @return {void | boolean}
     */
    animating(selector, duration = 1000, count = Infinity) {
        let node = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Check element visibility
        if (this.visible(node, "both", 0)) {
            this.loop(() => {
                let animation = node.getAttribute('data-animation');
                // node.removeAttribute('data-animation');
                node.style.removeProperty('animation-name');
                node.offsetTop;
                // node.setAttribute('data-animation', animation);
                node.style.setProperty('animation-name', animation);
            }, duration, count - 1);
        }
    }
    /**
     * @desc For navigation active class on page scroll
     *
     * @param {string | object} selector  -- The selector name (object)
     * @param {string | object} navigator -- The navigator selector name (object)
     * @param {string}          active    -- The navigator active class
     * @param {number}          tolerance -- The scroll tolerance
     *
     * @return {void | boolean}
     */
    navigated(selector, navigator, active = 'active', tolerance = 0) {
        let selectors = null;
        let navigators = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                selectors = document.querySelectorAll(selector);
            }
            else if (typeof (selector) === "object") {
                selectors = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Check the navigators
        if (this.exist(navigator)['status']) {
            if (typeof (navigator) === "string") {
                navigators = document.querySelectorAll(navigator);
            }
            else if (typeof (navigator) === "object") {
                navigators = navigator;
            }
        }
        else {
            throw this.exist(navigator)['message'];
        }
        // Navigation links
        selectors.forEach((node) => {
            let top = window.scrollY;
            let height = node.offsetHeight;
            let offset = node.offsetTop - tolerance;
            let id = node.getAttribute("id");
            // Set the active class
            if (top >= offset && top < offset + height) {
                navigators.forEach((link) => {
                    link.classList.remove(active);
                    document.querySelector(`${navigator}[href*=${id}`).classList.add(active);
                });
            }
        });
    }
}
//# sourceMappingURL=Animations.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Blueprints.js":
/*!*****************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Blueprints.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Blueprints: () => (/* binding */ Blueprints)
/* harmony export */ });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./node_modules/polaris-core/dist/js/modules/Defaults.js");
/**
 * Import the parent Class
 */

/**
 * @desc Used for loading component blueprints
 */
class Blueprints extends _Defaults__WEBPACK_IMPORTED_MODULE_0__.Defaults {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Appends backdrop blueprint if not exists
     *
     * @return {void}
     */
    backdropBlueprint() {
        // Check backdrop blueprint
        if (!document.querySelector(`#${this.nameBackdrop + '-' + this.nameBlueprint}`)) {
            // Append backdrop blueprint
            this.append("div", "body", "", [this.nameBackdrop, this.nameAnimation, this.nameAnimation + this.modSep + this.nameAnimated], this.nameBackdrop + this.modSep + this.nameBlueprint);
        }
    }
    /**
     * @desc Appends alert blueprint if not exists
     *
     * @return {void}
     */
    alertBlueprint() {
        // Check alert blueprint
        if (!document.querySelector(`#${this.nameAlert + '-' + this.nameBlueprint}`)) {
            // Append alert blueprint
            this.append("div", "body", "", [this.nameAlert + this.parSep + this.nameContainer, this.nameAlert + this.parSep + this.nameContainer + this.modSep + this.alertPosition], this.nameAlert + this.modSep + this.nameBlueprint);
        }
    }
    /**
     * @desc Append modal blueprint if not exists
     *
     * @return {void}
     */
    modalBlueprint() {
        // Check modal blueprint
        if (!document.querySelector(`#${this.nameModal + '-' + this.nameBlueprint}`)) {
            // Append modal blueprint
            this.append("div", "body", "", [this.nameModal + this.parSep + this.nameContainer, this.nameAnimation, this.nameAnimation + this.modSep + this.nameAnimated], this.nameModal + this.modSep + this.nameBlueprint);
        }
    }
}
//# sourceMappingURL=Blueprints.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Config.js":
/*!*************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Config.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Config: () => (/* binding */ Config)
/* harmony export */ });
/**
 * @desc Used for the configuration of Polaris JS library
 */
class Config {
    constructor() {
        this.modSep = "-"; // Modifier Separator
        this.chiSep = "--"; // Child Separator
        this.sibSep = "_"; // Sibling Separator
        this.parSep = "__"; // Parent Separator
        this.nameDoc = "doc"; // Name key for document component
        this.nameLight = "light"; // Name key for light color
        this.nameDark = "dark"; // Name key for dark color
        this.nameAnimation = "animation"; // Name key for animation component
        this.nameAnimated = "animated"; // Name key for animation-animated
        this.nameRipple = "ripple"; // Name key for ripple component
        this.nameAlert = "alert"; // Name key for alert component
        this.nameMessages = "msg"; // Name key for msg component
        this.nameBackdrop = "backdrop"; // Name key for backdrop component
        this.namePopup = "popup"; // Name key for popup component
        this.nameMenu = "menu"; // Name key for menu component
        this.nameModal = "modal"; // Name key for modal component
        this.nameBlueprint = "blueprint"; // Name key for component's blueprint
        this.nameContainer = "container"; // Name key for container
        this.nameControl = "control"; // Name key for control
        this.nameIcon = "icon"; // Name key for icon
        this.nameContent = "content"; // Name key for content
        this.nameClose = "close"; // Name key for close
        this.nameClick = "click"; // Name key for click
        this.nameActive = "active"; // Name key for active
        this.nameVoid = "void"; // Name key for active
        this.nameOpen = "open"; // Name key for open inffix
        this.nameHeader = "header"; // Name key for header
        this.nameBody = "body"; // Name key for body
        this.nameFooter = "footer"; // Name key for footer
        this.nameWidth = "w"; // Name key for css width classes
        this.nameHeight = "h"; // Name key for css height classes
        this.nameRadius = "round"; // Name key for border-radius & component roundness
        this.namePosition = "position"; // Name key for position classes
        this.nameDraggable = "draggable"; // Name key for draggable
        this.nameDragging = "dragging"; // 2nd name key for draggable-dragging
        this.nameSwapping = "swapping"; // 2nd name key for draggable-swapping
        this.nameDragAuto = "auto"; // 2nd name key for draggable__auto
        this.fadeInAnimation = "fadeIn"; // fadeIn animation
        this.fadeOutAnimation = "fadeOut"; // fadeOut animation
        this.hideYAnimation = "hideY"; // hideY animation
        this.rippleAnimation = "ripple"; // ripple animation
        this.rippleAutoAnimation = "rippleAuto"; // rippleAuto animation
        this.piAlertCircle = "pi-alert-circle"; // Polaris Icon: alert-circle
        this.piAlertTri = "pi-alert-triangle"; // Polaris Icon: alert-triangle
        this.piAlertTick = "pi-alert-tick"; // Polaris Icon: alert-tick
        this.piClose = "pi-close"; // Polaris Icon: close
        this.hideTimeout = 8000; // Default hide timeout (in miliseconds)
        this.alertPosition = "bottom"; // Alert default position
        this.polarisSizes = ['xs', 'sm', 'md', 'lg', 'xl']; // Polaris standard sizes
        this.phoneWidth = 0; // Smartphone min-width
        this.tabletWidth = 768; // Tablet min-width
        this.desktopWidth = 1280; // Desktop min-width
    }
}
//# sourceMappingURL=Config.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Core.js":
/*!***********************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Core.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Core: () => (/* binding */ Core)
/* harmony export */ });
/* harmony import */ var _Blueprints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blueprints */ "./node_modules/polaris-core/dist/js/modules/Blueprints.js");
/**
 * Import the parent Class
 */

/**
 * @desc Used for method chaining & initializing defaults & loading Blueprints
 */
class Core extends _Blueprints__WEBPACK_IMPORTED_MODULE_0__.Blueprints {
    /**
     * @desc Constructor method
     */
    constructor(node = null, mode = null) {
        // Inherit the parent class
        super();
        // Initialize properties
        this.node = node;
        this.mode = mode;
        // Check the selector
        if (node && typeof (node) === "string") {
            // Array node
            if (mode === "all") {
                this.node = document.querySelectorAll(node);
            }
            // Single node
            else {
                this.node = document.querySelector(node);
            }
            // Chain the node
            this.chain();
            return this;
        }
    }
    /**
     * @desc Used for method chaining
     *
     * @return {any}
     */
    chain() {
        return this.node;
    }
    /**
     * @desc addEventListener shorthand
     *
     * @param {string}   e  -- The event name
     * @param {function} fn -- The callback function
     *
     * @return {Object}
     */
    event(e, fn) {
        // Check the selector
        if (typeof (this.node) === "object") {
            // Prepare the result
            this.node = this.node.addEventListener(e, () => fn());
            // Chain the result
            return this.chain();
        }
        else {
            throw `The method "event()" is only available if a selector passed into the class "Polaris".`;
        }
    }
    /**
     * @desc innerHTML simplified
     *
     * @param {string} content - The optional content
     *
     * @return {void | object}
     */
    html(content = "") {
        // Check the selector
        if (typeof (this.node) === "object") {
            // Prepare the result
            if (content) {
                this.node.innerHTML = content;
            }
            else {
                this.node = this.node.innerHTML;
            }
            // Chain the result
            return this.chain();
        }
        else {
            throw `The method "html()" is only available if a selector passed into the class "Polaris".`;
        }
    }
    /**
     * @desc The objects length
     *
     * @return {number}
     */
    length() {
        // Check the selector
        if (typeof (this.node) === "object") {
            // Prepare the result
            this.node = this.node.length;
            // Chain the result
            return this.chain();
        }
        else {
            throw `The method "length()" is only available if a selector passed into the class "Polaris".`;
        }
    }
    /**
     * Initializes the Polaris class
     *
     * @return {void}
     */
    init() {
        /**
         *  Load Defaults
         */
        /**
         *  Document default classes
         */
        this.docDefaults();
        /**
         *  Void links
         */
        this.linkDefaults();
        /**
         *  Ripple animations
         */
        this.rippleDefaults();
        /**
         *  Animation datasets
         */
        this.animationDefaults();
        /**
         *  Closable messages
         */
        this.messageDefaults();
        /**
         *  Clickable & animated popups
         */
        this.popupDefaults();
        /**
         *  Clickable & animated menus
         */
        this.menuDefaults();
        /**
         *  Auto draggable items
         */
        this.draggableDefaults();
        /**
         *  Load Blueprints
         */
        /**
         *  Backdrop blueprint
         */
        this.backdropBlueprint();
        /**
         *  Alert blueprint
         */
        this.alertBlueprint();
        /**
         *  Modal blueprint
         */
        this.modalBlueprint();
    }
}
//# sourceMappingURL=Core.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Defaults.js":
/*!***************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Defaults.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Defaults: () => (/* binding */ Defaults)
/* harmony export */ });
/* harmony import */ var _Draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draggable */ "./node_modules/polaris-core/dist/js/modules/Draggable.js");
/**
 * Import the parent Class
 */

/**
 * @desc Used for handling components default behaviors
 */
class Defaults extends _Draggable__WEBPACK_IMPORTED_MODULE_0__.Draggable {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Document default classes
     *
     * @return {void}
     */
    docDefaults() {
        let doc = document.querySelector('body');
        // Check the document class 
        if (!doc.classList.contains(`${this.nameDoc}`)) {
            doc.classList.add(`${this.nameDoc}`);
        }
        // Check the document color
        if (!doc.classList.contains(`${this.nameDoc + this.modSep + this.nameLight}`) &&
            !doc.classList.contains(`${this.nameDoc + this.modSep + this.nameDark}`)) {
            // Color scheme
            let scheme;
            // Dark mode
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                scheme = this.nameDark;
            }
            // Light mode
            else {
                scheme = this.nameLight;
            }
            // Set color scheme
            doc.classList.add(`${this.nameDoc + this.modSep + scheme}`);
            // Watch for changes
            window.matchMedia('(prefers-color-scheme: dark)').onchange = (event => {
                // Remove old scheme
                this.removeClass(`.${this.nameDoc}`, `${this.nameDoc + this.modSep + scheme}`);
                // Find new scheme
                scheme = event.matches ? this.nameDark : this.nameLight;
                // Set new color scheme
                doc.classList.add(`${this.nameDoc + this.modSep + scheme}`);
            });
        }
    }
    /**
     * @desc Handles void links
     *
     * @return {void}
     */
    linkDefaults() {
        if (document.querySelectorAll(`.${this.nameVoid}`).length) {
            document.querySelectorAll(`.${this.nameVoid}`).forEach((elem) => {
                // Check element href
                if (elem.getAttribute('href') === "#") {
                    elem.setAttribute('href', 'javascript:void(0)');
                }
                // Prevent default behavior
                // elem.onclick = () => {
                //     return false;
                // };
            });
        }
    }
    /**
     * @desc Sets ripple animations if any available
     *
     * @return {void}
     */
    rippleDefaults() {
        /**
         *  Ripple animations
         */
        if (document.querySelectorAll(`.${this.nameRipple}`).length) {
            // ripple
            document.querySelectorAll(`.${this.nameRipple}[data-animation=${this.rippleAnimation}]`).forEach((elem) => {
                elem.onclick = (event) => {
                    let x = event.clientX, y = event.clientY;
                    const REC = elem.getBoundingClientRect(), DIM = Math.sqrt(Math.pow(REC.width, 2) + Math.pow(REC.height, 2));
                    // Unset the previous ripple animation
                    elem.removeAttribute('data-animation');
                    elem.offsetTop;
                    // Set the new ripple animation
                    elem.setAttribute('data-animation', this.rippleAnimation);
                    elem.style.setProperty('--animation-dimension', DIM + 'px');
                    elem.style.setProperty('--animation-left', x - REC.left + 'px');
                    elem.style.setProperty('--animation-top', y - REC.top + 'px');
                    // Set datasets and variables
                    this.datasets(elem);
                };
            });
            // rippleAuto
            document.querySelectorAll(`.${this.nameRipple}[data-animation=${this.rippleAutoAnimation}]`).forEach((elem) => {
                // Set datasets and variables
                this.datasets(elem);
            });
        }
    }
    /**
     * @desc Handles animation datasets if any available
     *
     * @return {void}
     */
    animationDefaults() {
        if (document.querySelectorAll(`.${this.nameAnimation}`).length) {
            document.querySelectorAll(`.${this.nameAnimation}`).forEach((elem) => {
                // Set CSS properties and variables
                this.datasets(elem);
            });
        }
    }
    /**
     * @desc Handles closable messages
     *
     * @return {void}
     */
    messageDefaults() {
        if (document.querySelectorAll(`.${this.nameMessages + this.chiSep + this.nameClose}`).length) {
            document.querySelectorAll(`.${this.nameMessages + this.chiSep + this.nameClose}`).forEach((elem) => {
                elem.onclick = () => {
                    let parent = elem.parentElement.parentElement;
                    this.animation(parent, this.hideYAnimation).then(() => {
                        parent.remove();
                    });
                };
            });
        }
    }
    /**
     * @desc Handles clickable popups
     *
     * @return {void}
     */
    popupDefaults() {
        if (document.querySelectorAll(`.${this.namePopup + this.parSep + this.nameControl}`).length) {
            document.querySelectorAll(`.${this.namePopup + this.parSep + this.nameControl}`).forEach((elem) => {
                // Check clickable
                if (elem.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`)) {
                    elem.onclick = (i) => {
                        // Popup component
                        let popup = elem.querySelector(`.${this.namePopup + this.modSep + this.nameClick}`);
                        // Ignore the click for component and its children(:not(.popup--close))
                        let ignoreClick = false;
                        elem.querySelectorAll(`.${this.namePopup} *:not(.${this.namePopup + this.chiSep + this.nameClose})`).forEach((j) => {
                            if (i.target == j) {
                                ignoreClick = true;
                            }
                        });
                        // Check ignore click
                        if (ignoreClick || i.target == popup)
                            return;
                        // Remove open class (hide popup)
                        if (elem.querySelector(`.${this.namePopup + this.modSep + this.nameOpen}`)) {
                            popup.classList.remove(`${this.namePopup + this.modSep + this.nameOpen}`);
                        }
                        // Add open class (show popup)
                        else {
                            popup.classList.add(`${this.namePopup + this.modSep + this.nameOpen}`);
                        }
                        // Prevent default behavior
                        return false;
                    };
                }
            });
        }
    }
    /**
     * @desc Handles clickable and hoverable animated menu
     *
     * @return {void}
     */
    menuDefaults() {
        // Clickable submenu
        if (document.querySelectorAll(`.${this.nameMenu + this.chiSep + this.nameClick}`).length) {
            document.querySelectorAll(`.${this.nameMenu + this.chiSep + this.nameClick}`).forEach((elem) => {
                elem.querySelector(`.${this.nameMenu + this.chiSep + this.nameClick} a`).onclick = () => {
                    // Submenu
                    let submenu = elem.querySelector(`.${this.nameMenu + this.chiSep + this.nameClick} ul`);
                    // Check animated submenu
                    if (submenu.classList.contains(`${this.nameAnimation}`)) {
                        let animationIn, animationOut;
                        // Menu is open
                        if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                            animationIn = "fadeOut";
                            animationOut = "fadeIn";
                            // Check data-exit
                            if (submenu.getAttribute("data-exit"))
                                animationIn = submenu.getAttribute("data-exit");
                            // Check data-enter
                            if (submenu.getAttribute("data-enter"))
                                animationOut = submenu.getAttribute("data-enter");
                        }
                        // Menu is closed
                        else {
                            animationIn = "fadeIn";
                            animationOut = "fadeOut";
                            // Check data-enter
                            if (submenu.getAttribute("data-enter"))
                                animationIn = submenu.getAttribute("data-enter");
                            // Check data-exit
                            if (submenu.getAttribute("data-exit"))
                                animationOut = submenu.getAttribute("data-exit");
                        }
                        // Check data-animation
                        if (this.getStyle(submenu, 'animation-name') !== 'none') {
                            if (this.getStyle(submenu, 'animation-name') == animationIn) {
                                this.animation(submenu, animationOut);
                            }
                            else if (this.getStyle(submenu, 'animation-name') == animationOut) {
                                this.animation(submenu, animationIn);
                            }
                        }
                        else {
                            this.animation(submenu, animationIn);
                        }
                    }
                    // Remove open class (hide menu)
                    else if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                        submenu.classList.remove(`${this.nameMenu + this.chiSep + this.nameOpen}`);
                    }
                    // Add open class (show menu)
                    else {
                        submenu.classList.add(`${this.nameMenu + this.chiSep + this.nameOpen}`);
                    }
                    // Prevent default behavior
                    return false;
                };
            });
        }
        // Hoverable animated submenu
        if (document.querySelectorAll(`.${this.nameMenu} li:not(.${this.nameMenu + this.chiSep + this.nameClick})`).length) {
            document.querySelectorAll(`.${this.nameMenu} li:not(.${this.nameMenu + this.chiSep + this.nameClick})`).forEach((elem) => {
                // Submenu
                let submenu = elem.querySelector(`.${this.nameMenu} li ul.${this.nameAnimation}`);
                if (submenu) {
                    let animationIn, animationOut;
                    // Menu is open
                    if (submenu.classList.contains(`${this.nameMenu + this.chiSep + this.nameOpen}`)) {
                        animationIn = "fadeOut";
                        animationOut = "fadeIn";
                        // Check data-exit
                        if (submenu.getAttribute("data-exit"))
                            animationIn = submenu.getAttribute("data-exit");
                        // Check data-enter
                        if (submenu.getAttribute("data-enter"))
                            animationOut = submenu.getAttribute("data-enter");
                    }
                    // Menu is closed
                    else {
                        animationIn = "fadeIn";
                        animationOut = "fadeOut";
                        // Check data-enter
                        if (submenu.getAttribute("data-enter"))
                            animationIn = submenu.getAttribute("data-enter");
                        // Check data-exit
                        if (submenu.getAttribute("data-exit"))
                            animationOut = submenu.getAttribute("data-exit");
                    }
                    // Mouse over
                    elem.onmouseover = () => {
                        // Show submenu
                        this.animation(submenu, animationIn).then();
                    };
                    // Mouse out
                    elem.onmouseout = () => {
                        // Hide submenu
                        this.animation(submenu, animationOut);
                    };
                }
            });
        }
    }
    /**
     * @desc Handles auto draggable items
     *
     * @return {void}
     */
    draggableDefaults() {
        if (document.querySelectorAll(`.${this.nameDraggable + this.parSep + this.nameDragAuto}`).length) {
            document.querySelectorAll(`.${this.nameDraggable + this.parSep + this.nameDragAuto}`).forEach((elem) => {
                // Set CSS properties and variables
                this.draggable(elem);
            });
        }
    }
}
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Draggable.js":
/*!****************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Draggable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draggable: () => (/* binding */ Draggable)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./node_modules/polaris-core/dist/js/modules/Modal.js");
/**
 * Import the parent Class
 */

/**
 * @desc Used for handling draggable items
 */
class Draggable extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Hadnles the dragable items on drag
     *
     * @param {HTMLElement} container -- The dragable container
     *
     * @return {Promise}
     */
    draggable(container) {
        let selector = null;
        // Check the container
        if (this.exist(container)['status']) {
            if (typeof (container) === "string") {
                selector = document.querySelector(container);
            }
            else if (typeof (container) === "object") {
                selector = container;
            }
        }
        else {
            throw this.exist(container)['message'];
        }
        // Animation promise
        const promise = new Promise((resolve, reject) => {
            const draggables = Array.from(selector.children);
            // Items
            let counter = 1;
            draggables.forEach((draggable) => {
                // Check the data-order
                if (!draggable.dataset.order) {
                    draggable.dataset.order = counter;
                }
                // Drag start
                draggable.ondragstart = (e) => {
                    if (e.target === draggable) {
                        draggable.classList.add(this.nameDraggable + this.modSep + this.nameDragging);
                    }
                };
                // Drag enter
                draggable.ondragenter = (e) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                const draggingOrder = dragging.dataset.order;
                                const draggableOrder = draggable.dataset.order;
                                // Swap orders
                                dragging.dataset.order = draggableOrder;
                                draggable.dataset.order = draggingOrder;
                                // Swap items
                                this.swap(dragging, draggable);
                                // Swaping
                                draggable.classList.add(this.nameDraggable + this.modSep + this.nameSwapping);
                                dragging.classList.add(this.nameDraggable + this.modSep + this.nameSwapping);
                            }
                        }
                    }
                };
                // Drag leave
                draggable.ondragleave = (e) => {
                    if (e.target === draggable) {
                        const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
                        if (draggable != dragging && dragging) {
                            if (dragging.parentNode === draggable.parentNode) {
                                // Swaping
                                draggable.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);
                                dragging.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);
                            }
                        }
                    }
                };
                // Drag over
                draggable.ondragover = (e) => {
                    const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
                    if (dragging) {
                        if (dragging.parentNode === draggable.parentNode) {
                            e.preventDefault();
                        }
                    }
                };
                // Drag end
                draggable.ondragend = (e) => {
                    if (e.target === draggable) {
                        // Swaping
                        const swaping = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameSwapping}`);
                        if (swaping)
                            swaping.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);
                        const dragging = selector.querySelector(`.${this.nameDraggable + this.modSep + this.nameDragging}`);
                        if (dragging)
                            dragging.classList.remove(this.nameDraggable + this.modSep + this.nameSwapping);
                        draggable.classList.remove(this.nameDraggable + this.modSep + this.nameDragging);
                    }
                    // Promise on resolve
                    resolve('Dragabble ended!');
                    // Promise on reject
                    reject('Dragabble crashed!');
                };
                // Increase counter
                counter++;
            });
        });
        // Return the promise
        return promise;
    }
}
//# sourceMappingURL=Draggable.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Helpers.js":
/*!**************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Helpers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Helpers: () => (/* binding */ Helpers)
/* harmony export */ });
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./node_modules/polaris-core/dist/js/modules/Config.js");
/**
 * Import the parent Class
 */

/**
 * @desc Polaris JS helper methods
 */
class Helpers extends _Config__WEBPACK_IMPORTED_MODULE_0__.Config {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
        /**
         * @desc For removeing character(s) in a string before some character(s)
         *
         * @param {string}  str    -- The string to format
         * @param {string}  find   -- The character(s) to find
         * @param {boolean} strict -- Remove the character itself?
         *
         * @return {string | undefined}
         */
        this.removeBefore = (str, find, strict = false) => {
            if (strict) {
                return str.split(find).pop();
            }
            else {
                return find + str.split(find).pop();
            }
        };
        /**
         * @desc For removeing character(s) in a string after some character(s)
         *
         * @param {string}  str    -- The string to format
         * @param {string}  find   -- The character(s) to find
         * @param {boolean} strict -- Remove the character itself?
         *
         * @return {string}
         */
        this.removeAfter = (str, find, strict = false) => {
            if (strict) {
                return str.split(find)[0];
            }
            else {
                return str.split(find)[0] + find;
            }
        };
    }
    /**
     * @desc Checks a selector for type & existence
     *
     * @param {string | HTMLElement} selector -- The selector name (object)
     *
     * @return {object}
     */
    exist(selector = null) {
        // Default variables
        let result = {};
        // Set the default result response
        result = {
            status: true,
            message: `Passed!`
        };
        // Empty or null selector
        if (!selector) {
            result = {
                status: false,
                message: `The "selector" parameter cannot be empty or null.`
            };
        }
        // String type
        else if (typeof (selector) === "string") {
            if (document.querySelectorAll(selector).length == 0) {
                result = {
                    status: false,
                    message: `The selector "${selector}" not exists on the window object!`
                };
            }
        }
        // Object type
        else if (typeof (selector) === "object") {
            if (selector.length == 0) {
                result = {
                    status: false,
                    message: `The selector object not exists on the window object!`
                };
            }
        }
        // Return the result
        return result;
    }
    /**
     * @desc Produces the querySelector object
     *
     * @param {string} selector -- The selector name
     *
     * @return {object}
     */
    selector(selector) {
        // Check selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        else if (this.exist(selector)['status']) {
            // Return the result
            return document.querySelector(selector);
        }
        else {
            throw this.exist(selector)['message'];
        }
    }
    /**
     * @desc Produces the querySelectorAll object
     *
     * @param {string} selector -- The selector name
     *
     * @return {object}
     */
    selectors(selector) {
        // Check selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        else if (this.exist(selector)['status']) {
            // Return the result
            return document.querySelectorAll(selector);
        }
        else {
            throw this.exist(selector)['message'];
        }
    }
    /**
     * @desc Checks if an element is visible on the screen
     *
     * @param {string | object} selector  -- The selector name (object)
     * @param {string}          from      -- Visible from (top, bottom, or both)
     * @param {number}          tolerance -- The scroll tolerance
     *
     * @return {boolean}
     */
    visible(selector, from = 'both', tolerance = 0) {
        let result = false;
        let rect = null;
        let windowHeight = window.innerHeight;
        let viewHeight = Math.max(document.documentElement.clientHeight, windowHeight);
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                rect = document.querySelector(selector);
                rect = rect.getBoundingClientRect();
            }
            else if (typeof (selector) === "object") {
                rect = selector.getBoundingClientRect();
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Scroll top & bottom
        if (from == 'both') {
            result = rect.bottom >= tolerance && rect.top < viewHeight - tolerance;
        }
        // Scroll top
        else if (from == 'top') {
            result = rect.top < viewHeight - tolerance;
        }
        // Scroll bottom
        else if (from == 'bottom') {
            result = rect.bottom >= tolerance;
        }
        // Return result
        return result;
    }
    /**
     * @desc Prepends an HTML element to a parent element
     *
     * @param {string}          selector  -- The selector name
     * @param {string | object} parent    -- The selector's parent name (object)
     * @param {string}          content   -- The selector's content
     * @param {object}          classList -- The selector's class list ['class-1', 'class-2', ...]
     * @param {string}          id        -- The selector's id name
     * @param {string}          style     -- The selector's inline CSS styles
     * @param {object}          attrs     -- The selector's attributes
     *
     * @return {HTMLElement | boolean}
     */
    prepend(selector, parent, content, classList = [], id = "", style = "", attrs = {}) {
        let parentNode = null;
        // Check the selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        // Check the parent
        if (this.exist(parent)['status']) {
            if (typeof (parent) === "string") {
                parentNode = document.querySelector(parent);
            }
            else if (typeof (parent) === "object") {
                parentNode = parent;
            }
        }
        else {
            throw this.exist(parent)['message'];
        }
        // Create the node
        const node = document.createElement(selector);
        // Add class list
        classList.forEach((cls) => {
            node.classList.add(cls);
        });
        // Add id
        if (id) {
            node.setAttribute("id", id);
        }
        // Add style
        if (style) {
            node.style.cssText = style;
        }
        // Add attributes
        if (attrs) {
            for (let attr in attrs) {
                node.setAttribute(attr, attrs[attr]);
            }
        }
        // Prepend the node
        node.innerHTML = content;
        parentNode.insertBefore(node, parentNode.firstChild);
        // Return the node
        return node;
    }
    /**
     * @desc Appends an HTML element to a parent element
     *
     * @param {string}          selector  -- The selector name
     * @param {string | object} parent    -- The selector's parent name (object)
     * @param {string}          content   -- The selector's content
     * @param {object}          classList -- The selector's class list ['class-1', 'class-2', ...]
     * @param {string}          id        -- The selector's id name
     * @param {string}          style     -- The selector's inline CSS styles
     * @param {object}          attrs     -- The selector's attributes
     *
     * @return {HTMLElement | boolean}
     */
    append(selector, parent, content, classList = [], id = "", style = "", attrs = {}) {
        let parentNode = null;
        // Check the selector
        if (typeof (selector) !== "string") {
            throw `The selector must be of type "string".`;
        }
        // Check the parent
        if (this.exist(parent)['status']) {
            if (typeof (parent) === "string") {
                parentNode = document.querySelector(parent);
            }
            else if (typeof (parent) === "object") {
                parentNode = parent;
            }
        }
        else {
            throw this.exist(parent)['message'];
        }
        // Create the node
        const node = document.createElement(selector);
        // Add class list
        classList.forEach((cls) => {
            node.classList.add(cls);
        });
        // Add id
        if (id) {
            node.setAttribute("id", id);
        }
        // Add style
        if (style) {
            node.style.cssText = style;
        }
        // Add attributes
        if (attrs) {
            for (let attr in attrs) {
                node.setAttribute(attr, attrs[attr]);
            }
        }
        // Append the node
        node.innerHTML = content;
        parentNode.appendChild(node);
        // Return the node
        return node;
    }
    /**
     * @desc Removes an HTML element from the DOM
     *
     * @param {string | object} selector -- The selector name (object)
     *
     * @return {void | boolean}
     */
    remove(selector) {
        let node = null;
        // Check the selectors
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Remove the node
        node.remove();
    }
    /**
     * @desc For writing the whole document
     *
     * @param {string} content -- The document content
     *
     * @return {void}
     */
    write(content = "") {
        javascript: document.open('text/html');
        document.write(content);
        document.close();
    }
    /**
     * @desc Loops a function for a couple of times
     *
     * @param {function} fn    -- The function that needed to be looped
     * @param {number}   delay -- The time delay for each iteration
     * @param {number}   count -- The loop count
     *
     * @return {void}
     */
    loop(fn, delay = 1000, count = Infinity) {
        let i = 0;
        let interval = setInterval(() => {
            // Exit the loop
            if (i == count || count <= 0) {
                clearInterval(interval);
                return false;
            }
            // Invoke the function
            fn();
            i++;
        }, delay);
    }
    /**
     * @desc Excecutes a function after document fully loaded
     *
     * @param {function} fn -- The callback function
     *
     * @return {void}
     */
    loaded(fn) {
        return document.addEventListener('DOMContentLoaded', () => {
            fn();
        });
    }
    /**
     * @desc For escaping Regular Expression search characters
     *
     * @param {string} str -- The string to format
     *
     * @return {string}
     */
    escape(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    /**
     * @desc For replacing character(s) in a string
     *
     * @param {string} str     -- The string to format
     * @param {string} find    -- The character(s) to find
     * @param {string} replace -- The character(s) to replace
     *
     * @return {string}
     */
    replace(str, find, replace) {
        return str.replace(new RegExp(this.escape(find), 'g'), replace);
    }
    /**
     * @desc For redirecting http URLs
     *
     * @param {string} url -- The URL to redirect
     *
     * @return {void}
     */
    redirect(url = "/") {
        window.location.href = url;
    }
    /**
     * @desc Finds page relative href
     *
     * @return {string}
     */
    href() {
        return this.replace(window.location.href, window.location.origin, "");
    }
    /**
     * @desc Calculates the scrollbar width
     *
     * @return {number}
     */
    scrollWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }
    /**
     * @desc Checks a file for existence
     *
     * @param {string} file -- The absolute file path
     *
     * @return {boolean}
     */
    fileExist(file) {
        // Create a new XML HTTP Request
        let xhr = new XMLHttpRequest();
        // Request the file
        xhr.open('HEAD', file, false);
        xhr.send();
        // File not found
        if (xhr.status == "404") {
            return false;
        }
        // File found
        else {
            return true;
        }
    }
    /**
     * @desc Reads and returns a file content as a promise in JSON format
     *
     * @param {string} file -- The absolute file path
     *
     * @return {object|boolean}
     */
    json(file, strict = false) {
        // Check strict mod
        if (strict) {
            // Check file existence
            if (!this.fileExist(file)) {
                return false;
            }
        }
        // Create a new promise
        const promise = new Promise((resolve, reject) => {
            let final = null;
            // Fetch file
            fetch(file)
                .then(response => response.json())
                .then(result => {
                final = result;
            })
                .then(() => {
                // Resolve the promise
                resolve(final);
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Reads and returns a file content as a promise in plain text
     *
     * @param {string} file -- The absolute file path
     *
     * @return {object|boolean}
     */
    text(file, strict = false) {
        // Check strict mod
        if (strict) {
            // Check file existence
            if (!this.fileExist(file)) {
                return false;
            }
        }
        // Create a new promise
        const promise = new Promise((resolve, reject) => {
            let final = null;
            // Fetch file
            fetch(file)
                .then(response => response.text())
                .then(result => {
                final = result;
            })
                .then(() => {
                // Resolve the promise
                resolve(final);
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Creates a promise to copy a text to clipboard and returns the result
     *
     * @param {string} text -- The text to copy
     *
     * @return {void|boolean}
     */
    copy(text) {
        // Create a new promise
        const promise = new Promise((resolve, reject) => {
            let result = null;
            navigator.clipboard.writeText(text)
                .then(() => result = true, err => {
                console.error('Copy Error: ', err);
                result = false;
            })
                .then(() => {
                // Resolve the promise
                resolve(result);
            });
        });
        // Return the promise
        return promise;
    }
    /**
     * @desc Adds a class to a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string} cls             -- The class name
     *
     * @return {void}
     */
    addClass(selector, cls) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Add the class
        if (!node.classList.contains(cls)) {
            node.classList.add(cls);
        }
    }
    /**
     * @desc Removes a class to a selector
     *
     * @param {string | object} selector -- The selector name (object)
     * @param {string} cls               -- The class name
     *
     * @return {void}
     */
    removeClass(selector, cls) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Remove the class
        if (node.classList.contains(cls)) {
            node.classList.remove(cls);
        }
    }
    /**
     * @desc Toggles an old class with a new class for a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string}        oldCls   -- The old class name
     * @param {string}        newCls   -- The new class name
     *
     * @return {void}
     */
    toggleClass(selector, oldCls, newCls) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Remove the old class
        if (node.classList.contains(oldCls)) {
            node.classList.remove(oldCls);
        }
        // Add the new class
        if (!node.classList.contains(newCls)) {
            node.classList.add(newCls);
        }
    }
    /**
     * @desc Adds a class list(array) to a selector
     *
     * @param {string|object} selector -- The selector name (object)
     * @param {string[]} classList     -- The class list (array)
     *
     * @return {void}
     */
    addClasses(selector, classList) {
        let node = null;
        // Check the selector
        if (this.exist(selector)['status']) {
            if (typeof (selector) === "string") {
                node = document.querySelector(selector);
            }
            else if (typeof (selector) === "object") {
                node = selector;
            }
        }
        else {
            throw this.exist(selector)['message'];
        }
        // Loop classes
        classList.forEach((cls) => {
            // Add the class
            if (!node.classList.contains(cls)) {
                node.classList.add(cls);
            }
        });
    }
    /**
     * @desc Converts and returns a string into uppercase, taking into account the current locale
     *
     * @param {string} text -- The text to excecute
     *
     * @return {string}
     */
    upper(text) {
        return text.toLocaleUpperCase();
    }
    /**
     * @desc Converts and returns a string into lowercase, taking into account the current locale
     *
     * @param {string} text -- The text to excecute
     *
     * @return {string}
     */
    lower(text) {
        return text.toLocaleLowerCase();
    }
    /**
     * @desc Returns the computed style for an element
     *
     * @param {string | HTMLElement} selector -- The node seclector
     *
     * @return {string}
     */
    getStyle(selector, property) {
        let node, result;
        // String type
        if (typeof (selector) == "string") {
            node = document.querySelectorAll(selector);
        }
        else {
            node = selector;
        }
        // Property exists
        const view = (node.ownerDocument || document).defaultView;
        if (view && view.getComputedStyle) {
            result = view.getComputedStyle(node, null).getPropertyValue(property);
        }
        // Property not exists
        else {
            result == undefined;
        }
        // Return result
        return result;
    }
    /**
     * @desc Checks if the browser is fullscreen
     *
     * @return {boolean}
     */
    isFullscreen() {
        if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @desc Request an element to be fullscreen
     *
     * @var {any} method -- The request method
     *
     * @return {void}
     */
    fullscreen(elem) {
        if (!this.isFullscreen()) {
            const method = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen || elem.msRequestFullScreen;
            return method.call(elem);
        }
    }
    /**
     * @desc Exits browser fullscreen
     *
     * @var {any} elem -- The document object
     *
     * @return {void}
     */
    exitFullscreen() {
        const elem = document;
        if (this.isFullscreen()) {
            return elem.exitFullscreen() || elem.webkitExitFullscreen() || elem.mozCancelFullScreen() || elem.msExitFullscreen();
        }
    }
    /**
     * @desc Calls a function on class change for an elemnent
     *
     * @param {any}      elem -- The element to listen
     * @param {Function} fn   -- The callback function
     *
     * @var {object} listener -- The event listener
     *
     * @return {void}
     */
    onClassChange(elem, fn) {
        const listener = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    fn(mutation.target);
                }
            });
        });
        listener.observe(elem, { attributes: true });
        return listener.disconnect;
    }
    /**
     * @desc For swaping two nodes from the same flow
     *
     * @param {HTMLElement} nodeA -- The first node
     * @param {HTMLElement} nodeB -- The second node
     *
     * @var {HTMLElement} siblingA -- The sibling of first node
     *
     * @return {void}
     */
    swap(nodeA, nodeB) {
        // Find the next sibling of nodeA
        const siblingA = (nodeA.nextSibling === nodeB) ? nodeA : nodeA.nextSibling;
        // Move nodeA before the nodeB
        nodeB.parentNode.insertBefore(nodeA, nodeB);
        // Move nodeB before the next sibling of nodeA
        nodeA.parentNode.insertBefore(nodeB, siblingA);
    }
    ;
}
//# sourceMappingURL=Helpers.js.map

/***/ }),

/***/ "./node_modules/polaris-core/dist/js/modules/Modal.js":
/*!************************************************************!*\
  !*** ./node_modules/polaris-core/dist/js/modules/Modal.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts */ "./node_modules/polaris-core/dist/js/modules/Alerts.js");
/**
 * Import the parent Class
 */

/**
 * @desc Used for setting modal
 */
class Modal extends _Alerts__WEBPACK_IMPORTED_MODULE_0__.Alerts {
    /**
     * @desc Constructor method
     */
    constructor() {
        // Inherit the parent class
        super();
    }
    /**
     * @desc Sets modal to modal__container#modal-blueprint
     *
     * @param {string} title     -- Modal title
     * @param {string} body      -- Modal body
     * @param {string} footer    -- Modal footer
     * @param {string} size      -- Modal size (xs, sm, md, lg, xl)
     * @param {string} enter     -- Modal animation enter
     * @param {string} exit      -- Modal animation exit
     * @param {string} color     -- Modal color:  light | dark
     * @param {boolean} close    -- Closable modal: true | false
     * @param {boolean} backdrop -- Has backdrop: true | false
     * @param {number} duration  -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    modal(title, body, footer = "", size = "xs", enter = "fadeIn", exit = "fadeOut", color = "", close = true, backdrop = true, duration = 500) {
        // Check size
        let sizeCLass = "";
        if (this.polarisSizes.includes(size)) {
            sizeCLass = ` ${this.nameModal + this.modSep + size}`;
        }
        else if (size) {
            sizeCLass = ` ${size}`;
        }
        else {
            sizeCLass = ` ${this.nameWidth}-100`;
        }
        // Set the color class
        let colorClass = "";
        if (color === "light") {
            colorClass = ` ${this.nameModal + this.modSep + color}`;
        }
        // Check the closable
        let closeCode = "";
        if (close) {
            closeCode = `<div class="${this.nameModal + this.chiSep + this.nameClose} ${this.piClose}"></div>`;
        }
        // Check footer
        let footerCode = "";
        if (footer) {
            footerCode = `<footer class="${this.nameModal + this.chiSep + this.nameFooter}">${footer}</main>`;
        }
        // Produce the modal content
        let content = `<div class="${this.nameModal + sizeCLass + colorClass} ${this.nameAnimation} scroll scroll-sm scroll-radius-sm" style="animation-name:${enter}; --animation-duration: ${duration}ms;">`;
        content += closeCode;
        content += `<header class="${this.nameModal + this.chiSep + this.nameHeader}">`;
        content += `<h1>${title}</h1>`;
        content += '</header>';
        content += `<main class="${this.nameModal + this.chiSep + this.nameBody}">`;
        content += body;
        content += '</main>';
        content += footerCode;
        content += '</div>';
        // Find the parent
        const parent = document.querySelector(`#${this.nameModal + '-' + this.nameBlueprint}`);
        // Find the backdrop
        const bdrop = document.querySelector(`.${this.nameBackdrop}`);
        // Create the node
        const element = document.createElement('div');
        // Append the node to the parent
        parent.appendChild(element);
        // Modify the node
        element.outerHTML = content;
        // Find the child node
        const child = parent.querySelector(`.${this.nameModal}`);
        // Hide the scrollbar
        let bodyElement = document.querySelector('body');
        bodyElement.style.paddingRight = this.scrollWidth() + "px";
        bodyElement.style.overflow = "hidden";
        // Show the backdrop
        if (backdrop) {
            this.animation(bdrop, this.fadeInAnimation);
        }
        // Show the parent
        this.animation(parent, this.fadeInAnimation);
        // Set animation exit on click
        if (child.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
            child.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`).onclick = () => {
                // Hide the backdrop
                if (backdrop) {
                    this.animation(bdrop, this.fadeOutAnimation);
                }
                // Show the scrollbar
                setTimeout(() => {
                    bodyElement.style.paddingRight = "";
                    bodyElement.style.overflow = "";
                }, duration / 2);
                // Hide the child
                this.animation(child, exit).then(() => {
                    // Remove the child
                    child.remove();
                    // Hide the parent
                    this.animation(parent, this.fadeOutAnimation);
                });
            };
        }
    }
    /**
     * @desc Sets custom modal to custom modal__container
     *
     * @param {string|object} parent -- Modal container selector or object
     * @param {string} enter         -- Modal animation enter
     * @param {string} exit          -- Modal animation exit
     * @param {boolean} backdrop     -- Has backdrop: true | false
     * @param {number} duration      -- Modal animation duration: number in miliseconds
     *
     * @return {void}
     */
    setModal(parent, enter = "fadeIn", exit = "fadeOut", backdrop = true, duration = 500) {
        // Find the parent
        let parentNode;
        if (typeof (parent) === "string")
            parentNode = document.querySelector(parent);
        else if (typeof (parent) === "object")
            parentNode = parent;
        // Find the modal
        const modal = parentNode.querySelector(`.${this.nameModal}`);
        // Find the backdrop
        const bdrop = document.querySelector(`.${this.nameBackdrop}`);
        // Hide the scrollbar
        let bodyElement = document.querySelector('body');
        bodyElement.style.paddingRight = this.scrollWidth() + "px";
        bodyElement.style.overflow = "hidden";
        // Show the backdrop
        if (backdrop) {
            this.animation(bdrop, this.fadeInAnimation);
        }
        // Show the parent
        this.animation(parentNode, this.fadeInAnimation);
        // Show the modal
        this.animation(modal, enter);
        // Set animation exit on click
        if (modal.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`)) {
            modal.querySelector(`.${this.nameModal + this.chiSep + this.nameClose}`).onclick = () => {
                // Hide the backdrop
                if (backdrop) {
                    this.animation(bdrop, this.fadeOutAnimation);
                }
                // Show the scrollbar
                setTimeout(() => {
                    bodyElement.style.paddingRight = "";
                    bodyElement.style.overflow = "";
                }, duration / 2);
                // Hide the modal
                this.animation(modal, exit).then(() => {
                    // Hide the parent
                    this.animation(parentNode, this.fadeOutAnimation);
                });
            };
        }
    }
}
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "./node_modules/polaris-slideshow/dist/js/modules/Slideshow.js":
/*!*********************************************************************!*\
  !*** ./node_modules/polaris-slideshow/dist/js/modules/Slideshow.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slideshow: () => (/* binding */ Slideshow)
/* harmony export */ });
/* harmony import */ var polaris_core_dist_js_modules_Animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polaris-core/dist/js/modules/Animations */ "./node_modules/polaris-core/dist/js/modules/Animations.js");

/**
 * Dependencies
 */

/**
 * @desc The Slideshow class for handling slideshow componet and its slides
 */
class Slideshow extends polaris_core_dist_js_modules_Animations__WEBPACK_IMPORTED_MODULE_0__.Animations {
    /**
     * @desc Constructor method
     *
     * @param {string|HTMLElement} slideshow -- The required slideshow selector
     * @param {object}             options   -- The optional slideshow options
     */
    constructor(slideshow, options = {}) {
        // Inherit the parent class
        super();
        /**
         * @desc Class properties
         */
        // Name keys
        this.nameSlideshow = 'slideshow';
        this.nameSlideshowItem = 'item';
        this.nameSlideshowMedia = 'media';
        this.nameSlideshowOverlays = 'overlays';
        this.nameSlideshowOverlay = 'overlay';
        this.nameSlideshowCaptions = 'captions';
        this.nameSlideshowCaption = 'caption';
        this.nameSlideshowOption = 'option';
        this.nameSlideshowProgress = 'progress';
        this.nameSlideshowCounter = 'counter';
        this.nameSlideshowPrev = 'prev';
        this.nameSlideshowNext = 'next';
        this.nameSlideshowDots = 'dots';
        this.nameSlideshowFilter = 'filter';
        // Slideshow selectors
        this.slideshow = null;
        this.slideshowItems = null;
        this.slideshowMedias = null;
        this.slideshowProgress = null;
        this.slideshowCounter = null;
        this.slideshowPrev = null;
        this.slideshowNext = null;
        this.slideshowDots = null;
        // Private properties
        this.itemsCount = 0;
        this.activeItem = null;
        this.activeDot = null;
        this.activeIndex = 0;
        this.animationEnter = this.fadeInAnimation;
        this.animationExit = this.fadeOutAnimation;
        this.slideInterval = null;
        this.timerInterval = null;
        this.pauseIntervals = false;
        this.remainingTime = 0;
        this.sliding = false;
        this.firstLoad = true;
        this.mediaLoaded = false;
        // Default options
        this.mediaShrink = true;
        this.isAutoplay = false;
        this.hoverPause = false;
        this.timeout = 6000;
        this.hasProgress = false;
        this.hasCounter = false;
        this.hasControls = true;
        this.hasDots = false;
        this.width = 0;
        this.height = 0;
        this.slideshowSkin = 'auto';
        this.mediaFilter = false;
        this.mediaControls = true;
        this.mediaAutoplay = false;
        this.syncRatio = 0.5;
        // Slideshow options
        this.options = {
            "mediaShrink": this.mediaShrink,
            "isAutoplay": this.isAutoplay,
            "hoverPause": this.hoverPause,
            "timeout": this.timeout,
            "hasProgress": this.hasProgress,
            "hasCounter": this.hasCounter,
            "hasControls": this.hasControls,
            "hasDots": this.hasDots,
            "round": false,
            "width": null,
            "height": null,
            "skin": this.slideshowSkin,
            "mediaControls": this.mediaControls,
            "mediaAutoplay": this.mediaAutoplay,
            "syncRatio": this.syncRatio,
            "mediaFilter": this.mediaFilter,
            "phoneHeight": null,
            "tabletHeight": null,
            "desktopHeight": null,
            "mediaEnter": null,
            "mediaExit": null,
            "mediaEnterPrev": null,
            "mediaExitPrev": null,
            "mediaEnterNext": null,
            "mediaExitNext": null,
            "overlayEnter": null,
            "overlayExit": null,
            "overlayEnterPrev": null,
            "overlayExitPrev": null,
            "overlayEnterNext": null,
            "overlayExitNext": null,
            "captionEnter": null,
            "captionExit": null,
            "captionEnterPrev": null,
            "captionExitPrev": null,
            "captionEnterNext": null,
            "captionExitNext": null,
            "counterPosition": null,
            "dotsPosition": null,
            "captionsPosition": null,
            "overlaysPosition": null,
        };
        // Valid slideshow selector
        if (this.exist(slideshow)['status']) {
            // String slideshow selector
            if (typeof (slideshow) === "string") {
                this.slideshow = document.querySelector(slideshow);
            }
            // HTMLElement slideshow selector
            else if (typeof (slideshow) === "object") {
                this.slideshow = slideshow;
            }
            // Set slideshow items
            this.slideshowItems = this.slideshow.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowItem}`);
            this.itemsCount = this.slideshowItems.length;
            // No slide
            if (this.itemsCount == 0) {
                throw 'No slide found!';
            }
            // Set items media
            this.slideshowMedias = this.slideshow.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowMedia}`);
            // Update options
            if (options)
                this.options = options;
            // Check options
            if (!('mediaShrink' in this.options))
                this.options['mediaShrink'] = this.mediaShrink;
            if (!('isAutoplay' in this.options))
                this.options['isAutoplay'] = this.isAutoplay;
            if (!('hoverPause' in this.options))
                this.options['hoverPause'] = this.hoverPause;
            if (!('timeout' in this.options))
                this.options['timeout'] = this.timeout;
            if (!('hasProgress' in this.options))
                this.options['hasProgress'] = this.hasProgress;
            if (!('hasCounter' in this.options))
                this.options['hasCounter'] = this.hasCounter;
            if (!('hasControls' in this.options))
                this.options['hasControls'] = this.hasControls;
            if (!('hasDots' in this.options))
                this.options['hasDots'] = this.hasDots;
            if (!('mediaControls' in this.options))
                this.options['mediaControls'] = this.mediaControls;
            if (!('mediaAutoplay' in this.options))
                this.options['mediaAutoplay'] = this.mediaAutoplay;
            if (!('syncRatio' in this.options))
                this.options['syncRatio'] = this.syncRatio;
            if (!('skin' in this.options))
                this.options['skin'] = this.slideshowSkin;
            if (!('mediaFilter' in this.options))
                this.options['mediaFilter'] = this.mediaFilter;
            // Final check filter
            if (this.options['mediaFilter']) {
                this.options['skin'] = this.nameLight;
            }
            // Refine ratio
            if (this.options['syncRatio'] < 0) {
                this.options['syncRatio'] = 0;
            }
            else if (this.options['syncRatio'] > 1) {
                this.options['syncRatio'] = 1;
            }
            // Start the slideshow
            this.start();
        }
        // Invalid slideshow selector
        else {
            throw 'The "slideshow" property of the Slideshow class cannot be empty or null!';
        }
    }
    /**
     * @desc Starts the Slideshow
     *
     * @return {void}
     */
    start() {
        // Set items
        this.setItems();
        // Set options
        this.setOptions();
        // Previous Slide
        this.prevSlide();
        // Next Slide
        this.nextSlide();
        // Dots Slide
        this.dotSlide();
        // Slideshow events
        this.slideEvents();
        /**
         *  Set the deault slide
         */
        let interval = setInterval(() => {
            // Fully loaded
            if (this.mediaLoaded) {
                this.setSlide(0);
                // Clear the interval
                clearInterval(interval);
            }
        }, 10);
    }
    /**
     * @desc Sets Slideshow items
     *
     * @var {HTMLElement}   media       -- The items media
     * @var {HTMLElement[]} overlays    -- The items overlays
     * @var {HTMLElement[]} captions    -- The items captions
     *
     * @return {void}
     */
    setItems() {
        // Loop items
        for (let i = 0; i < this.itemsCount; i++) {
            // Set data-index
            this.slideshowItems[i].dataset.index = i;
            // Item media
            if (this.slideshowItems[i].querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowMedia}`)) {
                const media = this.slideshowItems[i].querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowMedia}`);
                // Add animation, animation-animated classList
                this.addClasses(media, [this.nameAnimation, this.nameAnimation + this.modSep + this.nameAnimated]);
                // Set content for the media
                this.setContent(media, 'media');
                // Set the default slide active class
                if (i == 0) {
                    // Set the active class
                    this.activeItem = this.slideshowItems[0];
                    // Add active class to slide
                    this.addClass(this.activeItem, this.nameActive);
                }
                // Set default --animation
                media.style.setProperty('--animation', 'none');
            }
            // Item overlays
            if (this.slideshowItems[i].querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowOverlay}`).length) {
                const overlays = this.slideshowItems[i].querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowOverlay}`);
                // Set item overlays
                overlays.forEach((overlay) => {
                    // Add animation, animation-animated classList
                    this.addClasses(overlay, [this.nameAnimation, this.nameAnimation + this.modSep + this.nameAnimated]);
                    // Set content for overlays
                    this.setContent(overlay);
                    // Set default --animation
                    overlay.style.setProperty('--animation', 'none');
                });
            }
            // Item captions
            if (this.slideshowItems[i].querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowCaption}`).length) {
                const captions = this.slideshowItems[i].querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowCaption}`);
                // Set item captions
                captions.forEach((caption) => {
                    // Add animation, animation-animated classList
                    this.addClasses(caption, [this.nameAnimation, this.nameAnimation + this.modSep + this.nameAnimated]);
                    // Set default --animation
                    caption.style.setProperty('--animation', 'none');
                });
            }
        }
    }
    /**
     * @desc Extract extension from a file name
     *
     * @param {string} file -- The file name to process
     *
     * @var {string} ext -- The file extension
     * @var {array}  arr -- The file string array
     *
     * @return {string}
     */
    fileExtension(file) {
        let ext = '';
        let arr = [];
        // Set file array
        arr = file.split('.');
        // Set extension
        ext = '.' + arr[arr.length - 1];
        // Return the extracted extension
        return ext;
    }
    /**
     * @desc Sets the slide content
     *
     * @param {HTMLElement} node -- The node to set content for
     *
     * @var {HTMLElement} inner    -- The inner media element
     * @var {string}      maxWidth -- Media images max-width
     * @var {string}      alt      -- The image alternative text
     * @var {string}      ext      -- The media extension
     * @var {string}      type     -- The media MIME type
     * @var {string}      controls -- The video controls
     * @var {string}      muted    -- The muted video
     *
     * @return {void}
     */
    setContent(node, mode = null) {
        let inner, index = 0, maxWidth = '', alt = '', ext = '', type = '', controls = '', muted = '';
        // Check mode
        if (mode == 'media') {
            // Find index
            index = Number(node.parentElement.dataset.index);
            // Find extension
            if (node.dataset.src)
                ext = this.fileExtension(node.dataset.src);
            // Check mediaControls
            if (this.options['mediaControls'])
                controls = ' controls';
        }
        // Media max-width
        if (this.options['mediaShrink'])
            maxWidth = ' style="max-width: inherit;"';
        // Image
        if (node.dataset.type == 'image') {
            // Check type
            if (!['.webp', '.jpg', '.jpeg', '.apng', '.png', '.avif', '.gif', '.svg'].includes(ext)) {
                throw `Unsupported image extension detected! \nSupported image extensions are: ['.webp', '.jpg', '.jpeg', '.apng', '.png', '.avif', '.gif', '.svg']`;
            }
            // Check alternative text
            if (node.dataset.alt)
                alt = ` alt="${node.dataset.alt}"`;
            // Set node content
            node.innerHTML = `<img src="${node.dataset.src}"${alt + maxWidth}>`;
            // Set inner node
            inner = node.querySelector('img');
        }
        // Video
        else if (node.dataset.type == 'video') {
            // Produce file type
            if (ext == '.mp4')
                type = 'video/mp4';
            else if (ext == '.webm')
                type = 'video/webm';
            else
                type = '';
            // Check type
            if (!type) {
                throw `Unsupported video extension detected! \nSupported video extensions are: ['.mp4', '.webm']`;
            }
            // Check autoplay
            if (this.options['mediaAutoplay']) {
                muted = ' muted loop';
            }
            // Set node content
            node.innerHTML = `<video preload="metadata"${controls + muted + maxWidth}><source src="${node.dataset.src}" type="${type}"></video>`;
            // Set inner node
            inner = node.querySelector('video');
        }
        // HTML
        else if (node.dataset.type == 'html') {
            // Set node content
            if (node.dataset.html)
                node.innerHTML = node.dataset.html;
            // Set inner node
            if (node.firstElementChild)
                inner = node.firstElementChild;
            else
                inner = node;
        }
        // Unknown
        else {
            throw 'Unsupported media format detected!';
        }
        // Check heigts
        if (this.options['height'] || this.options['phoneHeight'] || this.options['tabletHeight'] || this.options['desktopHeight']) {
            if (this.options['mediaShrink'])
                inner.style.maxHeight = '100%';
        }
        // Media mode        
        if (mode == 'media') {
            // Fetch inner size after loading
            // Image
            if (node.dataset.type == 'image') {
                inner.onload = () => {
                    // Set the default width
                    if (!this.options['width'] && inner.naturalWidth > this.width)
                        this.width = inner.naturalWidth;
                    if (!this.options['width'] && inner.getBoundingClientRect().width > this.width)
                        this.width = inner.getBoundingClientRect().width;
                    // Set the default height
                    if (!this.options['height'] && inner.clientHeight > this.height)
                        this.height = inner.clientHeight;
                    // if (!this.options['height'] && inner.getBoundingClientRect().height > this.height) this.height = inner.getBoundingClientRect().height;
                    // Fully loaded
                    if (index + 1 == this.itemsCount)
                        this.mediaLoaded = true;
                };
            }
            // Video
            else if (node.dataset.type == 'video') {
                inner.onloadedmetadata = () => {
                    // Set the default width
                    if (!this.options['width'] && inner.clientWidth > this.width)
                        this.width = inner.clientWidth;
                    if (!this.options['width'] && inner.getBoundingClientRect().width > this.width)
                        this.width = inner.getBoundingClientRect().width;
                    // Set the default height
                    if (!this.options['height'] && inner.clientHeight > this.height)
                        this.height = inner.clientHeight;
                    // if (!this.options['height'] && inner.getBoundingClientRect().height > this.height) this.height = inner.getBoundingClientRect().height;
                    // Fully loaded
                    if (index + 1 == this.itemsCount)
                        this.mediaLoaded = true;
                };
            }
            // Others
            else {
                setTimeout(() => {
                    // Fully loaded
                    if (index + 1 == this.itemsCount)
                        this.mediaLoaded = true;
                }, 10);
            }
        }
    }
    /**
     * @desc Sets Slideshow options
     *
     * @var {string}      controlsContent -- Slideshow controls (prev & next) HTML content
     * @var {string}      dotsContent     -- Slideshow dots HTML content
     * @var {HTMLElement} dots            -- Dots parent (container)
     * @var {HTMLElement} captions        -- Captions parent (container)
     * @var {HTMLElement} overlays        -- Overlays parent (container)
     * @var {number}      windowWidth     -- Window available width
     * @var {HTMLElement} inner           -- The inner media element
     * @var {function}    interval        -- Slideshow size interval
     * @var {string[]}    filterCls       -- the filter class list
     *
     * @return {void|boolean}
     */
    setOptions() {
        var _a;
        /**
         *  Single & Multiple slide
         */
        if (this.itemsCount >= 1) {
            // Check progress
            if (this.options['hasProgress']) {
                if (!this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowProgress}`)) {
                    this.append("div", this.slideshow, "", [this.nameSlideshow + this.chiSep + this.nameSlideshowProgress]);
                }
            }
            // Check counter
            if (this.options['hasCounter']) {
                if (!this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowCounter}`)) {
                    this.append("div", this.slideshow, "", [this.nameSlideshow + this.chiSep + this.nameSlideshowCounter]);
                }
            }
            // Create controls
            if (!this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowPrev}`)) {
                const controlsContent = '&#10094;';
                this.append("div", this.slideshow, controlsContent, [this.nameSlideshow + this.chiSep + this.nameSlideshowPrev]);
            }
            if (!this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowNext}`)) {
                const controlsContent = '&#10095;';
                this.append("div", this.slideshow, controlsContent, [this.nameSlideshow + this.chiSep + this.nameSlideshowNext]);
            }
            // Check controls
            if (!this.options['hasControls']) {
                this.slideshowPrev.style.display = 'none';
                this.slideshowNext.style.display = 'none';
            }
            // Check dots
            if (this.options['hasDots']) {
                if (!this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowDots}`)) {
                    let dotsContent = '';
                    for (let i = 0; i < this.itemsCount; i++) {
                        this.slideshowItems[i].dataset.index = i;
                        dotsContent += `<li data-index="${i}"></li>`;
                    }
                    this.append("ul", this.slideshow, dotsContent, [this.nameSlideshow + this.chiSep + this.nameSlideshowDots]);
                }
            }
            // Update slide items
            this.slideshowProgress = this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowProgress}`);
            this.slideshowCounter = this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowCounter}`);
            this.slideshowPrev = this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowPrev}`);
            this.slideshowNext = this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowNext}`);
            this.slideshowDots = this.slideshow.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowDots} li`);
            // Set the default dot
            if (this.slideshowDots.length) {
                // Set the active class
                this.addClass(this.slideshowDots[0], this.nameActive);
                // Update the active dot
                this.activeDot = this.slideshowDots[0];
            }
        }
        /**
         *  Single slide
         */
        if (this.itemsCount == 1) {
            // Hide progress & controls
            this.slideshowProgress.style.display = 'none';
            this.slideshowPrev.style.display = 'none';
            this.slideshowNext.style.display = 'none';
            // Hide dots parent
            this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowDots}`).style.display = 'none';
        }
        /**
         *  Set slideshow width, height
         */
        let interval = setInterval(() => {
            // Fully loaded
            if (this.mediaLoaded) {
                /**
                 * Slideshow width
                 */
                // Check width property
                if (this.options['width'])
                    this.width = this.options['width'];
                // Set slideshow width
                if (this.options['width'])
                    this.slideshow.style.maxWidth = this.options['width'];
                else
                    this.slideshow.style.maxWidth = this.width + 'px';
                /**
                 * Slideshow height
                 */
                // Check height property
                if (this.options['height'])
                    this.height = this.options['height'];
                else if (this.height > window.innerHeight)
                    this.height = window.innerHeight;
                // Window width
                const windowWidth = window.innerWidth;
                // Desktop
                if (windowWidth >= this.desktopWidth && this.options['desktopHeight']) {
                    this.slideshow.style.height = this.options['desktopHeight'];
                }
                // Tablet
                else if (windowWidth < this.desktopWidth && windowWidth >= this.tabletWidth && this.options['tabletHeight']) {
                    this.slideshow.style.height = this.options['tabletHeight'];
                }
                // Smartphone
                else if (windowWidth < this.tabletWidth && windowWidth >= this.phoneWidth && this.options['phoneHeight']) {
                    this.slideshow.style.height = this.options['phoneHeight'];
                }
                // All devices
                else {
                    if (this.options['height'])
                        this.slideshow.style.height = this.options['height'];
                    else
                        this.slideshow.style.height = this.height + 'px';
                }
                // Clear the interval
                clearInterval(interval);
            }
        }, 10);
        /**
         *  Set slideshow skin
         */
        // Reverse colors
        if (this.options['skin'] == 'reverse') {
            // Check document color
            if ((_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.contains(`${this.nameDoc + this.modSep + this.nameLight}`)) {
                this.addClass(this.slideshow, this.nameSlideshow + this.modSep + this.nameDark);
            }
            else {
                this.addClass(this.slideshow, this.nameSlideshow + this.modSep + this.nameLight);
            }
            // On class change
            this.onClassChange(document.querySelector('body'), (node) => {
                // Check document color
                if (node.classList.contains(`${this.nameDoc + this.modSep + this.nameLight}`)) {
                    this.removeClass(this.slideshow, this.nameSlideshow + this.modSep + this.nameLight);
                    this.addClass(this.slideshow, this.nameSlideshow + this.modSep + this.nameDark);
                }
                else {
                    this.removeClass(this.slideshow, this.nameSlideshow + this.modSep + this.nameDark);
                    this.addClass(this.slideshow, this.nameSlideshow + this.modSep + this.nameLight);
                }
            });
        }
        // Normal colors
        else if (this.options['skin'] != 'auto') {
            this.addClass(this.slideshow, this.nameSlideshow + this.modSep + this.options['skin']);
        }
        /**
         *  Set slideshow filter
         */
        if (this.options['mediaFilter']) {
            // Produce the filter class
            const filterCls = this.nameSlideshow + this.chiSep + this.nameSlideshowFilter;
            // Append the filter
            this.append('div', this.slideshow, '', [filterCls]);
        }
        /**
         *  Set slideshow roundness
         */
        if (this.options['round']) {
            this.addClass(this.slideshow, this.nameSlideshow + this.modSep + this.nameRadius);
        }
        /**
         *  Set slideshow positions
         */
        // Conter position
        if (this.options['counterPosition']) {
            // Check element existence
            if (this.slideshowCounter) {
                // Unset default positions
                this.slideshowCounter.style.inset = "unset";
                // Set alternative margin
                if (['top', 'bottom'].includes(this.options['counterPosition'])) {
                    this.slideshowCounter.style.margin = "1rem 0";
                }
                else if (['top-left', 'left', 'bottom-left', 'top-right', 'right', 'bottom-right'].includes(this.options['counterPosition'])) {
                    this.slideshowCounter.style.margin = "1rem";
                }
                // Add position class
                this.addClass(this.slideshowCounter, this.namePosition + this.modSep + this.options['counterPosition']);
            }
        }
        // Dots position
        if (this.options['dotsPosition']) {
            const dots = this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowDots}`);
            // Check element existence
            if (dots) {
                // Unset default positions
                dots.style.inset = "unset";
                // Set alternative margin
                if (['top', 'bottom'].includes(this.options['dotsPosition'])) {
                    dots.style.margin = "1rem 0";
                }
                else if (['top-left', 'left', 'bottom-left', 'top-right', 'right', 'bottom-right'].includes(this.options['dotsPosition'])) {
                    dots.style.margin = "1rem";
                }
                // Add position class
                this.addClass(dots, this.namePosition + this.modSep + this.options['dotsPosition']);
            }
        }
        // Captions position
        if (this.options['captionsPosition']) {
            const captions = this.slideshow.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowCaptions}`);
            // Check element existence
            if (captions.length) {
                captions.forEach((caption) => {
                    // Unset default positions
                    caption.style.inset = "unset";
                    // Set alternative margin
                    if (['top', 'bottom'].includes(this.options['captionsPosition'])) {
                        caption.style.margin = "1rem 0";
                    }
                    else if (['top-left', 'left', 'bottom-left', 'top-right', 'right', 'bottom-right'].includes(this.options['captionsPosition'])) {
                        caption.style.margin = "1rem";
                    }
                    // Add position class
                    this.addClass(caption, this.namePosition + this.modSep + this.options['captionsPosition']);
                });
            }
        }
        // Overlays position
        if (this.options['overlaysPosition']) {
            const overlays = this.slideshow.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowOverlays}`);
            // Check element existence
            if (overlays.length) {
                overlays.forEach((overlay) => {
                    // Unset default positions
                    overlay.style.inset = "unset";
                    // Set alternative margin
                    if (['top', 'bottom'].includes(this.options['overlaysPosition'])) {
                        overlay.style.margin = "1rem 0";
                    }
                    else if (['top-left', 'left', 'bottom-left', 'top-right', 'right', 'bottom-right'].includes(this.options['overlaysPosition'])) {
                        overlay.style.margin = "1rem";
                    }
                    // Add position class
                    this.addClass(overlay, this.namePosition + this.modSep + this.options['overlaysPosition']);
                });
            }
        }
    }
    /**
     * @desc Handles prev control click
     *
     * @var {number} index -- Previous slide index
     *
     * @return {void}
     */
    prevSlide() {
        if (this.options['hasControls']) {
            this.slideshowPrev.onclick = () => {
                // Find previous index
                let index = this.activeIndex - 1;
                // Check index
                if (index < 0)
                    index = this.itemsCount - 1;
                // Set slide
                this.setSlide(index, 'previous');
            };
        }
    }
    /**
     * @desc Handles next control click
     *
     * @var {number} index -- Next slide index
     *
     * @return {void}
     */
    nextSlide() {
        if (this.options['hasControls']) {
            this.slideshowNext.onclick = () => {
                // Find next index
                let index = this.activeIndex + 1;
                // Check index
                if (index >= this.itemsCount)
                    index = 0;
                // Set slide
                this.setSlide(index, 'next');
            };
        }
    }
    /**
     * @desc Handles dots click
     *
     * @var {number} index -- Clicked slide index
     *
     * @return {void}
     */
    dotSlide() {
        if (this.options['hasDots']) {
            this.slideshowDots.forEach((dot) => {
                dot.onclick = () => {
                    // Find index
                    let index = Number(dot.dataset.index);
                    // Set slide
                    if (index != this.activeIndex)
                        this.setSlide(index);
                };
            });
        }
    }
    /**
     * @desc Handles automatic slide
     *
     * @param {number} timeout -- Slideshow timeout
     *
     * @var   {number} remain  -- Remaining time
     *
     * @return {void}
     */
    autoSlide(timeout = 0) {
        if (this.options['isAutoplay']) {
            let remain;
            // Set remain time
            if (timeout)
                remain = timeout;
            else
                remain = this.options['timeout'];
            // Set slide interval
            this.slideInterval = setInterval(() => {
                // Set next slide
                if (!this.pauseIntervals)
                    this.slideshowNext.click();
            }, remain);
        }
    }
    /**
     * @desc Handles slideshow hover events
     *
     * @return {void}
     */
    hoverEvents() {
        // On hover
        this.slideshow.onmouseover = () => {
            // Pause the interval
            this.pauseIntervals = true;
            // Clear the interval
            if (this.slideInterval)
                clearInterval(this.slideInterval);
        };
        // On leave hover
        this.slideshow.onmouseleave = () => {
            // Resume the interval
            this.pauseIntervals = false;
            // Clear the interval
            if (this.slideInterval)
                clearInterval(this.slideInterval);
            // Rerun the slideshow with the remaining time
            this.autoSlide(this.remainingTime);
            // Rerun the slide timer
            this.slideTimer();
        };
    }
    /**
     * @desc Handles slideshow window events
     *
     * @var {number}      windowWidth -- Window available width
     * @var {HTMLElement} inner       -- The inner media element
     *
     * @return {void}
     */
    windowEvents() {
        // Leave window
        window.onblur = () => {
            // Pause the media
            // Video
            if (this.activeItem.querySelector('video'))
                this.activeItem.querySelector('video').pause();
            // Audio
            if (this.activeItem.querySelector('audio'))
                this.activeItem.querySelector('audio').pause();
            // Pause the interval
            this.pauseIntervals = true;
            // Clear the interval
            if (this.slideInterval)
                clearInterval(this.slideInterval);
        };
        // Show window
        window.onfocus = () => {
            // Reload the media
            if (this.options['mediaAutoplay']) {
                // Video
                if (this.activeItem.querySelector('video')) {
                    this.activeItem.querySelector('video').play();
                }
                // Audio
                if (this.activeItem.querySelector('audio')) {
                    this.activeItem.querySelector('audio').play();
                }
            }
            // Resume the interval
            this.pauseIntervals = false;
            // Clear the interval
            if (this.slideInterval)
                clearInterval(this.slideInterval);
            // Rerun the slideshow with the remaining time
            this.autoSlide(this.remainingTime);
            // Rerun the slide timer
            this.slideTimer();
        };
        // Window resize
        window.onresize = () => {
            // Reset height
            this.height = 0;
            // Check items media
            this.slideshowMedias.forEach((media) => {
                // Inner element
                if (media.firstElementChild) {
                    const inner = media.firstElementChild;
                    // Set height property
                    if (!this.options['height'] && inner.clientHeight > this.height)
                        this.height = inner.clientHeight;
                    if (!this.options['height'] && this.height > window.innerHeight)
                        this.height = window.innerHeight;
                    // if (!this.options['height'] && inner.getBoundingClientRect().height > this.height) this.height = inner.getBoundingClientRect().height;
                }
                // Only text
                else {
                    // Set height property
                    if (!this.options['height'] && media.getBoundingClientRect().height > this.height)
                        this.height = media.getBoundingClientRect().height;
                }
            });
            /**
             * Slideshow height
             */
            // Check height property
            if (this.options['height'])
                this.height = this.options['height'];
            // Window width
            const windowWidth = window.innerWidth;
            // Desktop
            if (windowWidth >= this.desktopWidth && this.options['desktopHeight']) {
                this.slideshow.style.height = this.options['desktopHeight'];
            }
            // Tablet
            else if (windowWidth < this.desktopWidth && windowWidth >= this.tabletWidth && this.options['tabletHeight']) {
                this.slideshow.style.height = this.options['tabletHeight'];
            }
            // Smartphone
            else if (windowWidth < this.tabletWidth && windowWidth >= this.phoneWidth && this.options['phoneHeight']) {
                this.slideshow.style.height = this.options['phoneHeight'];
            }
            // All devices
            else {
                if (this.options['height'])
                    this.slideshow.style.height = this.options['height'];
                else
                    this.slideshow.style.height = this.height + 'px';
            }
        };
    }
    /**
     * @desc Handles slideshow events
     *
     * @return {void}
     */
    slideEvents() {
        if (this.options['isAutoplay']) {
            // Pause on hover
            if (this.options['hoverPause']) {
                // Hover events 
                this.hoverEvents();
            }
            // Window events
            this.windowEvents();
        }
    }
    /**
     * @desc Handles slides timer
     *
     * @var {number} progressWidth -- The slideshow progress width (0-100)
     *
     * @return {void}
     */
    slideTimer() {
        // Clear the interval
        if (this.timerInterval)
            clearInterval(this.timerInterval);
        if (this.options['isAutoplay']) {
            // Check progress option
            if (!this.pauseIntervals) {
                let progressWidth;
                // Default remaining time
                if (this.remainingTime <= 0)
                    this.remainingTime = this.options['timeout'];
                // Set timer interval
                this.timerInterval = setInterval(() => {
                    // Set remaining time
                    this.remainingTime -= 10;
                    // Produce progress width
                    progressWidth = 100 - ((this.remainingTime / this.options['timeout']) * 100);
                    // Set the progress width
                    if (this.options['hasProgress'])
                        this.slideshowProgress.style.width = progressWidth + '%';
                    // Check pause or remaining time
                    if (this.pauseIntervals || this.remainingTime <= 0) {
                        clearInterval(this.timerInterval);
                        if (this.remainingTime <= 0 && this.options['hasProgress'])
                            this.slideshowProgress.style.width = '0%';
                    }
                }, 10);
            }
        }
    }
    /**
     * @desc Sets a slide
     *
     * @param {number} index -- The index number
     * @param {number} mode -- The slide mode (next, previous)
     *
     * @var {HTMLElement}   slide            -- The slideshow item (slide)
     * @var {HTMLElement}   media            -- The item media
     * @var {HTMLElement[]} overlays         -- The item overlays
     * @var {HTMLElement[]} captions         -- The item captions
     * @var {string}        mediaAnimation   -- The media animation
     * @var {string}        overlayAnimation -- A specefic overlay animation
     * @var {string}        captionAnimation -- A specefic caption animation
     * @var {string}        slideMode        -- The slide mode {next, previous}
     *
     * @return {void}
     */
    setSlide(index, mode = null) {
        // Check sliding
        if (!this.sliding) {
            // Clear the timer interval
            if (this.timerInterval)
                clearInterval(this.timerInterval);
            // Stop the slide interval
            if (this.slideInterval)
                clearInterval(this.slideInterval);
            // Reset the progressbar
            if (this.options['hasProgress'])
                this.slideshowProgress.style.width = '0%';
            // Reset the timer
            this.remainingTime = 0;
            // Start sliding
            this.sliding = true;
            // Default vaiables
            let slide, media, overlays, captions;
            let mediaAnimation, overlayAnimation, captionAnimation;
            let slideMode;
            let ratio;
            let itemTimout;
            // Set mode
            if (mode)
                slideMode = mode;
            else if (index >= this.activeIndex)
                slideMode = 'next';
            else
                slideMode = 'previous';
            /**
             * Old (current) Slide
             */
            if (!this.firstLoad) {
                // Fetch old slide items
                slide = this.slideshowItems[this.activeIndex];
                media = slide.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowMedia}`);
                overlays = slide.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowOverlay}`);
                captions = slide.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowCaption}`);
                // Fetch the active slide & dot
                this.activeItem = this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowItem}.${this.nameActive}`);
                this.activeDot = this.slideshow.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowDots} li.${this.nameActive}`);
                // Remove active class
                this.removeClass(this.activeItem, this.nameActive);
                // Remove active dot class
                if (this.activeDot) {
                    // Remove active class
                    this.removeClass(this.activeDot, this.nameActive);
                }
                // Hide captions
                if (captions.length) {
                    captions.forEach((caption) => {
                        // Find animation
                        if (caption.dataset.exit)
                            captionAnimation = caption.dataset.exit;
                        else if (caption.dataset.exitPrev && slideMode == 'previous')
                            captionAnimation = caption.dataset.exitPrev;
                        else if (caption.dataset.exitNext && slideMode == 'next')
                            captionAnimation = caption.dataset.exitNext;
                        else if (this.options['captionExit'])
                            captionAnimation = this.options['captionExit'];
                        else if (this.options['captionExitPrev'] && slideMode == 'previous')
                            captionAnimation = this.options['captionExitPrev'];
                        else if (this.options['captionExitNext'] && slideMode == 'next')
                            captionAnimation = this.options['captionExitNext'];
                        else
                            captionAnimation = this.animationExit;
                        // Set animation
                        this.animation(caption, captionAnimation);
                    });
                }
                // Hide overlays
                if (overlays.length) {
                    overlays.forEach((overlay) => {
                        // Find animation
                        if (overlay.dataset.exit)
                            overlayAnimation = overlay.dataset.exit;
                        else if (overlay.dataset.exitPrev && slideMode == 'previous')
                            overlayAnimation = overlay.dataset.exitPrev;
                        else if (overlay.dataset.exitNext && slideMode == 'next')
                            overlayAnimation = overlay.dataset.exitNext;
                        else if (this.options['overlayExit'])
                            overlayAnimation = this.options['overlayExit'];
                        else if (this.options['overlayExitPrev'] && slideMode == 'previous')
                            overlayAnimation = this.options['overlayExitPrev'];
                        else if (this.options['overlayExitNext'] && slideMode == 'next')
                            overlayAnimation = this.options['overlayExitNext'];
                        else
                            overlayAnimation = this.animationExit;
                        // Set animation
                        this.animation(overlay, overlayAnimation);
                    });
                }
                // Hide media
                if (media) {
                    // Pause the media
                    // Video
                    if (media.querySelector('video'))
                        media.querySelector('video').pause();
                    // Audio
                    if (media.querySelector('audio'))
                        media.querySelector('audio').pause();
                    // Find animation
                    if (media.dataset.exit)
                        mediaAnimation = media.dataset.exit;
                    else if (media.dataset.exitPrev && slideMode == 'previous')
                        mediaAnimation = media.dataset.exitPrev;
                    else if (media.dataset.exitNext && slideMode == 'next')
                        mediaAnimation = media.dataset.exitNext;
                    else if (this.options['mediaExit'])
                        mediaAnimation = this.options['mediaExit'];
                    else if (this.options['mediaExitPrev'] && slideMode == 'previous')
                        mediaAnimation = this.options['mediaExitPrev'];
                    else if (this.options['mediaExitNext'] && slideMode == 'next')
                        mediaAnimation = this.options['mediaExitNext'];
                    else
                        mediaAnimation = this.animationExit;
                    // Set animation
                    this.animation(media, mediaAnimation);
                }
            }
            /**
             * New Slide
             */
            // Update the first load
            if (this.firstLoad)
                this.firstLoad = false;
            // Find new slide items
            slide = this.slideshowItems[index];
            media = slide.querySelector(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowMedia}`);
            overlays = slide.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowOverlay}`);
            captions = slide.querySelectorAll(`.${this.nameSlideshow + this.chiSep + this.nameSlideshowCaption}`);
            // Update the active item
            this.activeItem = slide;
            // Add active class to slide
            this.addClass(slide, this.nameActive);
            // Add active class to relative dot
            this.slideshowDots.forEach((dot) => {
                if (Number(dot.dataset.index) == index) {
                    this.addClass(dot, this.nameActive);
                    // Update the active dot
                    this.activeDot = dot;
                }
            });
            // Show media
            if (media) {
                // Reload the media
                if (this.options['mediaAutoplay']) {
                    // Video
                    if (media.querySelector('video')) {
                        media.querySelector('video').load();
                        media.querySelector('video').play();
                    }
                    // Audio
                    if (media.querySelector('audio')) {
                        media.querySelector('audio').load();
                        media.querySelector('audio').play();
                    }
                }
                // Find animation
                if (media.dataset.enter)
                    mediaAnimation = media.dataset.enter;
                else if (media.dataset.enterPrev && slideMode == 'previous')
                    mediaAnimation = media.dataset.enterPrev;
                else if (media.dataset.enterNext && slideMode == 'next')
                    mediaAnimation = media.dataset.enterNext;
                else if (this.options['mediaEnter'])
                    mediaAnimation = this.options['mediaEnter'];
                else if (this.options['mediaEnterPrev'] && slideMode == 'previous')
                    mediaAnimation = this.options['mediaEnterPrev'];
                else if (this.options['mediaEnterNext'] && slideMode == 'next')
                    mediaAnimation = this.options['mediaEnterNext'];
                else
                    mediaAnimation = this.animationEnter;
                // Set animation
                this.animation(media, mediaAnimation).then(() => {
                    // Clear the timer interval
                    if (this.timerInterval)
                        clearInterval(this.timerInterval);
                    // Stop the intervals
                    if (this.slideInterval)
                        clearInterval(this.slideInterval);
                    // Run Autoplay
                    this.autoSlide();
                    // Run timer
                    this.slideTimer();
                    // Stop sliding
                    this.sliding = false;
                });
            }
            // Synchronicity ratio
            if (media.dataset.duration) {
                // Miliseconds
                if (media.dataset.duration.search("ms")) {
                    ratio = parseInt(media.dataset.duration);
                }
                // Seconds
                else {
                    ratio = parseInt(media.dataset.duration) * 1000;
                }
            }
            else {
                ratio = 1000;
            }
            // Refine ratio
            ratio *= this.options['syncRatio'];
            // Show slide items
            clearTimeout(itemTimout);
            itemTimout = setTimeout(() => {
                // Show overlays
                if (overlays.length) {
                    overlays.forEach((overlay) => {
                        // Find animation
                        if (overlay.dataset.enter)
                            overlayAnimation = overlay.dataset.enter;
                        else if (overlay.dataset.enterPrev && slideMode == 'previous')
                            overlayAnimation = overlay.dataset.enterPrev;
                        else if (overlay.dataset.enterNext && slideMode == 'next')
                            overlayAnimation = overlay.dataset.enterNext;
                        else if (this.options['overlayEnter'])
                            overlayAnimation = this.options['overlayEnter'];
                        else if (this.options['overlayEnterPrev'] && slideMode == 'previous')
                            overlayAnimation = this.options['overlayEnterPrev'];
                        else if (this.options['overlayEnterNext'] && slideMode == 'next')
                            overlayAnimation = this.options['overlayEnterNext'];
                        else
                            overlayAnimation = this.animationEnter;
                        // Set animation
                        this.animation(overlay, overlayAnimation);
                    });
                }
                // Show captions
                if (captions.length) {
                    captions.forEach((caption) => {
                        // Find animation
                        if (caption.dataset.enter)
                            captionAnimation = caption.dataset.enter;
                        else if (caption.dataset.enterPrev && slideMode == 'previous')
                            captionAnimation = caption.dataset.enterPrev;
                        else if (caption.dataset.enterNext && slideMode == 'next')
                            captionAnimation = caption.dataset.enterNext;
                        else if (this.options['captionEnter'])
                            captionAnimation = this.options['captionEnter'];
                        else if (this.options['captionEnterPrev'] && slideMode == 'previous')
                            captionAnimation = this.options['captionEnterPrev'];
                        else if (this.options['captionEnterNext'] && slideMode == 'next')
                            captionAnimation = this.options['captionEnterNext'];
                        else
                            captionAnimation = this.animationEnter;
                        // Set animation
                        this.animation(caption, captionAnimation);
                    });
                }
            }, ratio);
            // Set counter
            if (this.options['hasCounter'])
                this.slideshowCounter.innerHTML = `${Number(slide.dataset.index) + 1}/${this.itemsCount}`;
            // Update active index
            this.activeIndex = index;
        }
    }
}
//# sourceMappingURL=Slideshow.js.map

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
/*!***************************!*\
  !*** ./src/ts/polaris.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var polaris_core_dist_js_modules_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polaris-core/dist/js/modules/Core */ "./node_modules/polaris-core/dist/js/modules/Core.js");
/* harmony import */ var polaris_slideshow_dist_js_modules_Slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polaris-slideshow/dist/js/modules/Slideshow */ "./node_modules/polaris-slideshow/dist/js/modules/Slideshow.js");
/**
 * Import the Core Class
 */

/**
 * Import Plugins
 */

/**
 * Polaris object
 */
const Polaris = {
    Core: polaris_core_dist_js_modules_Core__WEBPACK_IMPORTED_MODULE_0__.Core,
    Slideshow: polaris_slideshow_dist_js_modules_Slideshow__WEBPACK_IMPORTED_MODULE_1__.Slideshow,
};
/**
 * Export default
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Polaris);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=polaris.js.map