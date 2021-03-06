((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/SideBySideContent/SideBySideContent.js":
/*!***********************************************************!*\
  !*** ./components/SideBySideContent/SideBySideContent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_constants_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global_constants/Constants */ "./global_constants/Constants.js");
/* harmony import */ var _SideBySideStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBySideStyle.css */ "./components/SideBySideContent/SideBySideStyle.css");
/* harmony import */ var _SideBySideStyle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBySideStyle_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/williamk/Desktop/Projects/iGEM_2019/uwigem.com/components/SideBySideContent/SideBySideContent.js";



/**
 * @returns {React.Component}
 */

var SideBySideContent = function SideBySideContent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sbsContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sbsChild",
    style: {
      width: props.leftWidth ? props.leftWidth + "%" : '50%',
      backgroundColor: "lightBlue"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.LeftChild), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sbsChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " ", props.RightChild, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBySideContent);

/***/ }),

/***/ "./global_constants/Constants.js":
/*!***************************************!*\
  !*** ./global_constants/Constants.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Constants = function Constants() {
  return {
    primaryColor: "#420dab",
    fontFamily: "Arial",
    navbarLinks: []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Constants);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_87199d8fc0875f6de062 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_87199d8fc0875f6de062 */ "dll-reference dll_87199d8fc0875f6de062"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SideBySideContent_SideBySideContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideBySideContent/SideBySideContent */ "./components/SideBySideContent/SideBySideContent.js");
/* harmony import */ var _global_constants_Global_Styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global_constants/Global_Styles.css */ "./global_constants/Global_Styles.css");
/* harmony import */ var _global_constants_Global_Styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_constants_Global_Styles_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/williamk/Desktop/Projects/iGEM_2019/uwigem.com/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 //import Dubs from "../static/dubs.jpeg";

var LeftChild =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftChild, _React$Component);

  function LeftChild() {
    _classCallCheck(this, LeftChild);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftChild).apply(this, arguments));
  }

  _createClass(LeftChild, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: {
          backgroundColor: "blue"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "LeftChild");
    }
  }]);

  return LeftChild;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;

var RightChild =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(RightChild, _React$Component2);

  function RightChild() {
    _classCallCheck(this, RightChild);

    return _possibleConstructorReturn(this, _getPrototypeOf(RightChild).apply(this, arguments));
  }

  _createClass(RightChild, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "RightChild");
    }
  }]);

  return RightChild;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideBySideContent_SideBySideContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    LeftChild: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LeftChild, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }),
    RightChild: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RightChild, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_87199d8fc0875f6de062":
/*!*******************************************!*\
  !*** external "dll_87199d8fc0875f6de062" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_87199d8fc0875f6de062;

/***/ })

},[[3,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map