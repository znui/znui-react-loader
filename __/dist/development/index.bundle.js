(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DataLoader.js":
/*!***********************!*\
  !*** ./DataLoader.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

module.exports = React.createClass({
  displayName: 'ZRDataLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      color: 'primary',
      size: 'size-large',
      className: 'primary'
    };
  },
  render: function render() {
    return React.createElement("div", {
      className: znui.react.classname("zr-data-loader", this.props.className, this.props.color, this.props.size),
      style: this.props.style
    }, React.createElement("div", {
      className: "loader-loading",
      "data-loader": this.props.loader
    }), !!this.props.title && React.createElement("span", {
      className: "title"
    }, this.props.title));
  }
});

/***/ }),

/***/ "./Loader.js":
/*!*******************!*\
  !*** ./Loader.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var DataLoader = __webpack_require__(/*! ./DataLoader */ "./DataLoader.js");

module.exports = React.createClass({
  displayName: 'ZRLoader',
  getDefaultProps: function getDefaultProps() {
    return {
      loader: 'timer',
      color: 'white',
      content: 'Loading...',
      className: 'white-background',
      size: 'size-large',
      layout: 'flex-row'
    };
  },
  render: function render() {
    return React.createElement("div", {
      style: this.props.style,
      className: znui.react.classname("zr-loader", this.props.className, this.props.color, this.props.layout)
    }, React.createElement(DataLoader, {
      className: this.props.dataLoaderClassName,
      loader: this.props.loader,
      color: this.props.color,
      size: this.props.size
    }), React.createElement("div", {
      className: "content"
    }, this.props.content));
  }
});

/***/ }),

/***/ "./Loading.js":
/*!********************!*\
  !*** ./Loading.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");

var Loader = __webpack_require__(/*! ./Loader */ "./Loader.js");

module.exports = React.createClass({
  displayName: 'ZRLoading',
  getDefaultProps: function getDefaultProps() {
    return {
      data: null,
      loader: 'timer',
      content: 'Loading...'
    };
  },
  render: function render() {
    if (this.props.data) {
      return this.props.children;
    } else {
      return React.createElement(Loader, this.props);
    }
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'DataLoader': __webpack_require__(/*! ./DataLoader */ "./DataLoader.js"),
  'Loader': __webpack_require__(/*! ./Loader */ "./Loader.js"),
  'Loading': __webpack_require__(/*! ./Loading */ "./Loading.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRGF0YUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImxvYWRlciIsImNvbG9yIiwic2l6ZSIsImNsYXNzTmFtZSIsInJlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwicHJvcHMiLCJzdHlsZSIsInRpdGxlIiwiRGF0YUxvYWRlciIsImNvbnRlbnQiLCJsYXlvdXQiLCJkYXRhTG9hZGVyQ2xhc3NOYW1lIiwiTG9hZGVyIiwiZGF0YSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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QWtCO0FBQ2xDQyxhQUFXLEVBQUMsV0FEc0I7QUFFbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOZ0IsVUFBSSxFQUFFLElBREE7QUFFTmYsWUFBTSxFQUFFLE9BRkY7QUFHTlcsYUFBTyxFQUFFO0FBSEgsS0FBUDtBQUtBLEdBUmlDO0FBU2xDUCxRQUFNLEVBQUUsa0JBQVU7QUFDakIsUUFBRyxLQUFLRyxLQUFMLENBQVdRLElBQWQsRUFBbUI7QUFDbEIsYUFBTyxLQUFLUixLQUFMLENBQVdTLFFBQWxCO0FBQ0EsS0FGRCxNQUVNO0FBQ0wsYUFBTyxvQkFBQyxNQUFELEVBQVksS0FBS1QsS0FBakIsQ0FBUDtBQUNBO0FBQ0Q7QUFmaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNGQVosTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2IsZ0JBQWNGLG1CQUFPLENBQUMscUNBQUQsQ0FEUjtBQUViLFlBQVVBLG1CQUFPLENBQUMsNkJBQUQsQ0FGSjtBQUdiLGFBQVdBLG1CQUFPLENBQUMsK0JBQUQ7QUFITCxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUkRhdGFMb2FkZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkZXI6ICd0aW1lcicsXG5cdFx0XHRjb2xvcjogJ3ByaW1hcnknLFxuXHRcdFx0c2l6ZTogJ3NpemUtbGFyZ2UnLFxuXHRcdFx0Y2xhc3NOYW1lOiAncHJpbWFyeSdcblx0XHR9O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItZGF0YS1sb2FkZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuY29sb3IsIHRoaXMucHJvcHMuc2l6ZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkZXItbG9hZGluZ1wiIGRhdGEtbG9hZGVyPXt0aGlzLnByb3BzLmxvYWRlcn0gLz5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGl0bGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+IH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBEYXRhTG9hZGVyID0gcmVxdWlyZSgnLi9EYXRhTG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMb2FkZXInLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRsb2FkZXI6ICd0aW1lcicsXG5cdFx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHRcdGNvbnRlbnQ6ICdMb2FkaW5nLi4uJyxcblx0XHRcdGNsYXNzTmFtZTogJ3doaXRlLWJhY2tncm91bmQnLFxuXHRcdFx0c2l6ZTogJ3NpemUtbGFyZ2UnLFxuXHRcdFx0bGF5b3V0OiAnZmxleC1yb3cnXG5cdFx0fTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1sb2FkZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMucHJvcHMuY29sb3IsIHRoaXMucHJvcHMubGF5b3V0KX0+XG5cdFx0XHRcdDxEYXRhTG9hZGVyIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5kYXRhTG9hZGVyQ2xhc3NOYW1lfSBsb2FkZXI9e3RoaXMucHJvcHMubG9hZGVyfSBjb2xvcj17dGhpcy5wcm9wcy5jb2xvcn0gc2l6ZT17dGhpcy5wcm9wcy5zaXplfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57dGhpcy5wcm9wcy5jb250ZW50fTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9Mb2FkZXInKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJMb2FkaW5nJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdGxvYWRlcjogJ3RpbWVyJyxcblx0XHRcdGNvbnRlbnQ6ICdMb2FkaW5nLi4uJ1xuXHRcdH07XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEpe1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0fWVsc2Uge1xuXHRcdFx0cmV0dXJuIDxMb2FkZXIgey4uLnRoaXMucHJvcHN9IC8+O1xuXHRcdH1cblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnRGF0YUxvYWRlcic6IHJlcXVpcmUoJy4vRGF0YUxvYWRlcicpLFxuICAgICdMb2FkZXInOiByZXF1aXJlKCcuL0xvYWRlcicpLFxuICAgICdMb2FkaW5nJzogcmVxdWlyZSgnLi9Mb2FkaW5nJylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9