/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */




/**
 * Register block styles
 *
 * @type {Object} Add the names of blocks and styles to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const registerBlockStyles = {
  'core/image': [{
    name: 'position-absolute-left',
    label: 'Absolute Left'
  }, {
    name: 'position-absolute-right',
    label: 'Absolute Right'
  }, {
    name: 'position-absolute-bottom',
    label: 'Absolute Bottom'
  }],
  'core/group': [{
    name: 'position-relative',
    label: 'Relative Position'
  }],
  'core/columns': [{
    name: 'reverse-on-mobile',
    label: 'Reverse on Mobile'
  }]
};

/**
 * Register block variations
 *
 * @type {Object} Add the names of blocks and variations to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const registerBlockVariations = {
  'core/group': {
    name: 'group-section',
    title: 'Section',
    description: 'Section Block',
    attributes: {
      tagName: 'section'
    }
  }
};

/**
 * Unregister blocks
 *
 * @type {Array} Add the names of blocks to unregister here
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#using-a-deny-list
 */
const unregisterBlocks = [
  // "core/verse"
];

/**
 * Remove editor panels
 *
 * @type {Array} Add the names of panels to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/data/data-core-edit-post/#removeeditorpanel
 */
const removeEditorPanels = [
  //"discussion-panel"
];

/**
 * Remove block styles
 *
 * @type {Object} Add the names of blocks and styles to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const unregisterBlockStyles = {
  // "core/button": "outline",
};

/**
 * Remove block variations
 *
 * @type {Object} Add the names of blocks and variations to remove here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const unregisterBlockVariations = {
  // "core/columns": "two-columns-two-thirds-one-third",
};

/**
 * Here we hook into the editor initialization and unregister the blocks,
 * remove editor panels, remove block styles, remove block variations,
 * register block styles, and register block variations – all as defined above.
 */
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  Object.keys(registerBlockStyles).forEach(block => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockStyle)(block, registerBlockStyles[block]);
  });
  Object.keys(registerBlockVariations).forEach(block => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)(block, registerBlockVariations[block]);
  });
  unregisterBlocks.forEach(block => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockType)(block);
  });

  // Only run if we are in the post editor
  if (null !== (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/edit-post')) {
    const {
      removeEditorPanel
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)('core/edit-post');
    removeEditorPanels.forEach(panel => {
      removeEditorPanel(panel);
    });
  }
  Object.keys(unregisterBlockStyles).forEach(block => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockStyle)(block, unregisterBlockStyles[block]);
  });
  Object.keys(unregisterBlockVariations).forEach(block => {
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.unregisterBlockVariation)(block, unregisterBlockVariations[block]);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map