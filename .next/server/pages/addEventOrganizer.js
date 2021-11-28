(() => {
var exports = {};
exports.id = "pages/addEventOrganizer";
exports.ids = ["pages/addEventOrganizer"];
exports.modules = {

/***/ "./pages/addEventOrganizer.js":
/*!************************************!*\
  !*** ./pages/addEventOrganizer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPost)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Giulia Vittorangeli\\Desktop\\mongoDB02\\pages\\addEventOrganizer.js";


function AddPost() {
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: mainDescription,
    1: setMainDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: category,
    1: setCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: smallDescription,
    1: setSmallDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: maxNumber,
    1: setMaxNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: minAge,
    1: setMinAge
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: requirements,
    1: setRequirements
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: language,
    1: setLanguage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: location,
    1: setLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: importantDates,
    1: setImportantDates
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const handlePost = async e => {
    e.preventDefault(); // reset error and message

    setError('');
    setMessage(''); // fields check

    if (!title || !smallDescription || !category || !mainDescription || !language || !location || !importantDates) return setError('All fields are required'); // post structure

    let event = {
      title,
      category,
      smallDescription,
      mainDescription,
      maxNumber,
      minAge,
      requirements,
      language,
      location,
      importantDates,
      published: false,
      createdAt: new Date().toISOString()
    }; // save the post

    let response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(event)
    }); // get the data

    let data = await response.json();

    if (data.success) {
      // reset the fields
      setTitle('');
      setMainDescription('');
      setCategory('');
      setSmallDescription('');
      setMaxNumber('');
      setMinAge('');
      setRequirements('');
      setLanguage('');
      setLocation('');
      setImportantDates(''); // set the message

      return setMessage(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Event Organizer Form"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().containerForm),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handlePost,
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),
        children: [error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().error),
            children: error
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, this) : null, message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().message),
            children: message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "title",
            onChange: e => setTitle(e.target.value),
            value: title,
            placeholder: "Event's Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "category",
            onChange: e => setCategory(e.target.value),
            value: category,
            placeholder: "Category"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
            name: "smallDescription",
            onChange: e => setSmallDescription(e.target.value),
            value: smallDescription,
            placeholder: "Short Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
            name: "mainDescription",
            onChange: e => setMainDescription(e.target.value),
            value: mainDescription,
            placeholder: "Complete Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "maxNumber",
            onChange: e => setMaxNumber(e.target.value),
            value: maxNumber,
            placeholder: "Maximum Number of Participants"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number",
            name: "minAge",
            onChange: e => setMinAge(e.target.value),
            value: minAge,
            placeholder: "Minimum Age for Partecipying"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "requirements",
            onChange: e => setRequirements(e.target.value),
            value: requirements,
            placeholder: "Requirements for particying"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "language",
            onChange: e => setLanguage(e.target.value),
            value: language,
            placeholder: "Event Language"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "location",
            onChange: e => setLocation(e.target.value),
            value: location,
            placeholder: "Event Location"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "importantDates",
            onChange: e => setImportantDates(e.target.value),
            value: importantDates,
            placeholder: "Important Dates"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().formItem),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "Add post"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"form": "Home_form__1fOyp",
	"formItem": "Home_formItem__iHbnl",
	"error": "Home_error__2G27F",
	"message": "Home_message__1RpEB",
	"main": "Home_main__1x8gC"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/addEventOrganizer.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtSUg7Ozs7Ozs7Ozs7QUMzTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1ibG9nLWFwcC13aXRoLW1vbmdvZGIvLi9wYWdlcy9hZGRFdmVudE9yZ2FuaXplci5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy1hcHAtd2l0aC1tb25nb2RiLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy1hcHAtd2l0aC1tb25nb2RiL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy1hcHAtd2l0aC1tb25nb2RiL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFBvc3QoKSB7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21haW5EZXNjcmlwdGlvbiwgc2V0TWFpbkRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NtYWxsRGVzY3JpcHRpb24sIHNldFNtYWxsRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttYXhOdW1iZXIsIHNldE1heE51bWJlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21pbkFnZSwgc2V0TWluQWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcmVxdWlyZW1lbnRzLCBzZXRSZXF1aXJlbWVudHNdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpbXBvcnRhbnREYXRlcywgc2V0SW1wb3J0YW50RGF0ZXNdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgaGFuZGxlUG9zdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyByZXNldCBlcnJvciBhbmQgbWVzc2FnZVxuICAgICAgICBzZXRFcnJvcignJyk7XG4gICAgICAgIHNldE1lc3NhZ2UoJycpO1xuXG4gICAgICAgIC8vIGZpZWxkcyBjaGVja1xuICAgICAgICBpZiAoIXRpdGxlIHx8ICFzbWFsbERlc2NyaXB0aW9uIHx8ICFjYXRlZ29yeSB8fCAhbWFpbkRlc2NyaXB0aW9uIHx8ICFsYW5ndWFnZSB8fCAhbG9jYXRpb24gfHwgIWltcG9ydGFudERhdGVzKSByZXR1cm4gc2V0RXJyb3IoJ0FsbCBmaWVsZHMgYXJlIHJlcXVpcmVkJyk7XG5cbiAgICAgICAgLy8gcG9zdCBzdHJ1Y3R1cmVcbiAgICAgICAgbGV0IGV2ZW50ID0ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIHNtYWxsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtYWluRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtYXhOdW1iZXIsXG4gICAgICAgICAgICBtaW5BZ2UsXG4gICAgICAgICAgICByZXF1aXJlbWVudHMsXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgaW1wb3J0YW50RGF0ZXMsXG4gICAgICAgICAgICBwdWJsaXNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH07XG4gICAgICAgIC8vIHNhdmUgdGhlIHBvc3RcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZXZlbnRzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShldmVudCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGdldCB0aGUgZGF0YVxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAvLyByZXNldCB0aGUgZmllbGRzXG4gICAgICAgICAgICBzZXRUaXRsZSgnJyk7XG4gICAgICAgICAgICBzZXRNYWluRGVzY3JpcHRpb24oJycpO1xuICAgICAgICAgICAgc2V0Q2F0ZWdvcnkoJycpO1xuICAgICAgICAgICAgc2V0U21hbGxEZXNjcmlwdGlvbignJyk7XG4gICAgICAgICAgICBzZXRNYXhOdW1iZXIoJycpO1xuICAgICAgICAgICAgc2V0TWluQWdlKCcnKTtcbiAgICAgICAgICAgIHNldFJlcXVpcmVtZW50cygnJyk7XG4gICAgICAgICAgICBzZXRMYW5ndWFnZSgnJyk7XG4gICAgICAgICAgICBzZXRMb2NhdGlvbignJyk7XG4gICAgICAgICAgICBzZXRJbXBvcnRhbnREYXRlcygnJyk7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIG1lc3NhZ2VcbiAgICAgICAgICAgIHJldHVybiBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGgyPkV2ZW50IE9yZ2FuaXplciBGb3JtPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyRm9ybX0+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVBvc3R9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT57bWVzc2FnZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFdmVudCdzIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNtYWxsRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U21hbGxEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NtYWxsRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaG9ydCBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1haW5EZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYWluRGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttYWluRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wbGV0ZSBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbWF4TnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHNldE1heE51bWJlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWF4TnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J01heGltdW0gTnVtYmVyIG9mIFBhcnRpY2lwYW50cydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdtaW5BZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gc2V0TWluQWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttaW5BZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTWluaW11bSBBZ2UgZm9yIFBhcnRlY2lweWluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmVxdWlyZW1lbnRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHNldFJlcXVpcmVtZW50cyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVxdWlyZW1lbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JlcXVpcmVtZW50cyBmb3IgcGFydGljeWluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbGFuZ3VhZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gc2V0TGFuZ3VhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0V2ZW50IExhbmd1YWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiBzZXRMb2NhdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRXZlbnQgTG9jYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ltcG9ydGFudERhdGVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHNldEltcG9ydGFudERhdGVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbXBvcnRhbnREYXRlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdJbXBvcnRhbnQgRGF0ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgcG9zdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJmb3JtXCI6IFwiSG9tZV9mb3JtX18xZk95cFwiLFxuXHRcImZvcm1JdGVtXCI6IFwiSG9tZV9mb3JtSXRlbV9faUhibmxcIixcblx0XCJlcnJvclwiOiBcIkhvbWVfZXJyb3JfXzJHMjdGXCIsXG5cdFwibWVzc2FnZVwiOiBcIkhvbWVfbWVzc2FnZV9fMVJwRUJcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkFkZFBvc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwibWFpbkRlc2NyaXB0aW9uIiwic2V0TWFpbkRlc2NyaXB0aW9uIiwiZXJyb3IiLCJzZXRFcnJvciIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInNtYWxsRGVzY3JpcHRpb24iLCJzZXRTbWFsbERlc2NyaXB0aW9uIiwibWF4TnVtYmVyIiwic2V0TWF4TnVtYmVyIiwibWluQWdlIiwic2V0TWluQWdlIiwicmVxdWlyZW1lbnRzIiwic2V0UmVxdWlyZW1lbnRzIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJpbXBvcnRhbnREYXRlcyIsInNldEltcG9ydGFudERhdGVzIiwiaGFuZGxlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50IiwicHVibGlzaGVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJzdWNjZXNzIiwibWFpbiIsImNvbnRhaW5lckZvcm0iLCJmb3JtIiwiZm9ybUl0ZW0iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=