/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fontsource_poppins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/poppins */ \"./node_modules/@fontsource/poppins/index.css\");\n/* harmony import */ var _fontsource_poppins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_poppins__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined, _this1 = undefined;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Giulia Vittorangeli\\\\Desktop\\\\Next.js\\\\01_next\\\\pages\\\\index.js\",\n            lineNumber: 8,\n            columnNumber: 1\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.CSSReset, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Giulia Vittorangeli\\\\Desktop\\\\Next.js\\\\01_next\\\\pages\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 8\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_header__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Giulia Vittorangeli\\\\Desktop\\\\Next.js\\\\01_next\\\\pages\\\\index.js\",\n                    lineNumber: 10,\n                    columnNumber: 14\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Entrance, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Giulia Vittorangeli\\\\Desktop\\\\Next.js\\\\01_next\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 14\n                },\n                __self: _this\n            })\n        ]\n    });\n};\nvar Entrance = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            textAlign: 'center',\n            __source: {\n                fileName: \"C:\\\\Users\\\\Giulia Vittorangeli\\\\Desktop\\\\Next.js\\\\01_next\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            },\n            __self: _this1,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                bgGradient: \"linear(70deg, rgba(142,58,198,1) 26%, rgba(230,51,158,1) 76%, rgba(233,51,156,1) 78%)\",\n                bgClip: \"text\",\n                fontSize: \"17em\",\n                fontFamily: 'poppins',\n                p: '0.4em',\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Giulia Vittorangeli\\\\Desktop\\\\Next.js\\\\01_next\\\\pages\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this1,\n                children: \"EuXOsa\"\n            })\n        })\n    }));\n};\n_c = Entrance;\nvar _c;\n$RefreshReg$(_c, \"Entrance\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYjtBQUNFO0FBQ3dDOztBQUd0RSw2QkFBZSxzQ0FDZEU7a0JBQUQsTUFBTSx5REFBTEEsNERBQWM7Ozs7Ozs7O2lGQUNQRSxzREFBUTs7Ozs7Ozs7aUZBQ0ZKLDJEQUFNOzs7Ozs7OztpRkFDTk0sUUFBUTs7Ozs7Ozs7Ozs7QUFPdEIsR0FBSyxDQUFDQSxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQztJQUN0QixNQUFNLHNFQUFDO3VGQUVKSCxpREFBRztZQUFDSSxTQUFTLEVBQUUsQ0FBUTs7Ozs7OzsyRkFDckJGLGtEQUFJO2dCQUNIRyxVQUFVLEVBQUMsQ0FBdUY7Z0JBQ2xHQyxNQUFNLEVBQUMsQ0FBTTtnQkFDYkMsUUFBUSxFQUFDLENBQU07Z0JBQ2ZDLFVBQVUsRUFBRSxDQUFTO2dCQUNyQkMsQ0FBQyxFQUFFLENBQU87Ozs7Ozs7MEJBQ1QsQ0FFSDs7OztBQU9OLENBQUM7S0FuQktOLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBcIkBmb250c291cmNlL3BvcHBpbnNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIEJveCwgQ1NTUmVzZXQsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PihcbjxDaGFrcmFQcm92aWRlcj5cbiAgICAgICA8Q1NTUmVzZXQvPiAgXG4gICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICAgPEVudHJhbmNlLz5cbiAgICAgICAgICAgICAgIFxuPC9DaGFrcmFQcm92aWRlcj5cbilcblxuXG5cbmNvbnN0IEVudHJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4oXG4gICAgPD5cbiAgICA8Qm94IHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgPFRleHRcbiAgICAgICAgYmdHcmFkaWVudD0nbGluZWFyKDcwZGVnLCByZ2JhKDE0Miw1OCwxOTgsMSkgMjYlLCByZ2JhKDIzMCw1MSwxNTgsMSkgNzYlLCByZ2JhKDIzMyw1MSwxNTYsMSkgNzglKSdcbiAgICAgICAgYmdDbGlwPVwidGV4dFwiXG4gICAgICAgIGZvbnRTaXplPVwiMTdlbVwiXG4gICAgICAgIGZvbnRGYW1pbHk9eydwb3BwaW5zJ31cbiAgICAgICAgcD17JzAuNGVtJ31cbiAgICAgICAgPlxuICAgICAgICBFdVhPc2FcbiAgICAgIDwvVGV4dD5cblxuXG4gICAgPC9Cb3g+XG4gICAgPC8+XG4gIClcblxufVxuXG5cblxuXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiUmVhY3QiLCJDaGFrcmFQcm92aWRlciIsIkJveCIsIkNTU1Jlc2V0IiwiVGV4dCIsIkVudHJhbmNlIiwidGV4dEFsaWduIiwiYmdHcmFkaWVudCIsImJnQ2xpcCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});