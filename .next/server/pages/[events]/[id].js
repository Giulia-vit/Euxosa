"use strict";
(() => {
var exports = {};
exports.id = "pages/[events]/[id]";
exports.ids = ["pages/[events]/[id]"];
exports.modules = {

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectToDatabase": () => (/* binding */ connectToDatabase)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME; // check the MongoDB URI

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environmental variable');
} // check the MongoDB DB


if (!MONGODB_DB) {
  throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb
    };
  } // set the connection options


  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }; // Connect to cluster

  let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);
  await client.connect();
  let db = client.db(MONGODB_DB); // set cache

  cachedClient = client;
  cachedDb = db;
  return {
    client: cachedClient,
    db: cachedDb
  };
}

/***/ }),

/***/ "./pages/[events]/[id].js":
/*!********************************!*\
  !*** ./pages/[events]/[id].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ refID),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/mongodb */ "./lib/mongodb.js");
/* harmony import */ var _utils_getThatEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/getThatEvent */ "./utils/getThatEvent.js");


var _jsxFileName = "C:\\Users\\Giulia Vittorangeli\\Desktop\\mongoDB02\\pages\\[events]\\[id].js";
//Logica del documento:
//prendo tutto l'array
//prendo l'id del documento scelto
//se l'id dell'array é uguale a quello preso allora gli prendo tutte le info 
//il che significa prendere il titolo e description
//restituisco quello che ho appena preso 


function refID({
  event
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: event._id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
async function getServerSideProps(ctx) {
  const {
    userID
  } = ctx.query;
  await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.default)();
  const user = await _utils_getThatEvent__WEBPACK_IMPORTED_MODULE_2__.default.findOne({
    userID
  }).lean();
  user._id = user._id.toString();
  return {
    props: {
      user
    }
  };
}

/***/ }),

/***/ "./utils/getThatEvent.js":
/*!*******************************!*\
  !*** ./utils/getThatEvent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Event)
/* harmony export */ });
// User come Event dove prendiamo tutti gli eventi
const {
  connectToDatabase
} = __webpack_require__(/*! ../lib/mongodb */ "./lib/mongodb.js");

function Event(req, res) {
  try {
    let {
      db
    } = connectToDatabase();
    let events = db.collection('events').find({}).sort({
      published: -1
    }).toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(events)),
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
} ///Questo é un commento per aggiornarmi: allora sei al punto che cerchi sempre di accedere al database con una funzione domani cerca di fare lo strsso ma con l'api ci sono più tutorialq

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[events]/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsU0FBUyxFQUFFLENBQUM7QUFBZCxLQUhJLEVBSVRDLE9BSlMsRUFBZDtBQUtBLFdBQU9OLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQ1pDLE1BQUFBLE9BQU8sRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlVixNQUFmLENBQVgsQ0FERztBQUVaVyxNQUFBQSxPQUFPLEVBQUU7QUFGRyxLQUFULENBQVA7QUFJSCxHQVhELENBV0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1osV0FBT2IsR0FBRyxDQUFDTyxJQUFKLENBQVM7QUFDWkMsTUFBQUEsT0FBTyxFQUFFLElBQUlsQyxLQUFKLENBQVV1QyxLQUFWLEVBQWlCTCxPQURkO0FBRVpJLE1BQUFBLE9BQU8sRUFBRTtBQUZHLEtBQVQsQ0FBUDtBQUlIO0FBQ0osRUFHRDs7Ozs7Ozs7OztBQzFCQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctYXBwLXdpdGgtbW9uZ29kYi8uL2xpYi9tb25nb2RiLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLWFwcC13aXRoLW1vbmdvZGIvLi9wYWdlcy9bZXZlbnRzXS9baWRdLmpzIiwid2VicGFjazovL25leHRqcy1ibG9nLWFwcC13aXRoLW1vbmdvZGIvLi91dGlscy9nZXRUaGF0RXZlbnQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWJsb2ctYXBwLXdpdGgtbW9uZ29kYi9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy1hcHAtd2l0aC1tb25nb2RiL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IE1PTkdPREJfREIgPSBwcm9jZXNzLmVudi5EQl9OQU1FO1xuXG4vLyBjaGVjayB0aGUgTW9uZ29EQiBVUklcbmlmICghTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnRhbCB2YXJpYWJsZScpO1xufVxuXG4vLyBjaGVjayB0aGUgTW9uZ29EQiBEQlxuaWYgKCFNT05HT0RCX0RCKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgdGhlIE1PTkdPREJfREIgZW52aXJvbm1lbnRhbCB2YXJpYWJsZScpO1xufVxuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbmxldCBjYWNoZWREYiA9IG51bGw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgICAvLyBjaGVjayB0aGUgY2FjaGVkLlxuICAgIGlmIChjYWNoZWRDbGllbnQgJiYgY2FjaGVkRGIpIHtcbiAgICAgICAgLy8gbG9hZCBmcm9tIGNhY2hlXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGllbnQ6IGNhY2hlZENsaWVudCxcbiAgICAgICAgICAgIGRiOiBjYWNoZWREYixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGNvbm5lY3Rpb24gb3B0aW9uc1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH07XG5cbiAgICAvLyBDb25uZWN0IHRvIGNsdXN0ZXJcbiAgICBsZXQgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KE1PTkdPREJfVVJJLCBvcHRzKTtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgIGxldCBkYiA9IGNsaWVudC5kYihNT05HT0RCX0RCKTtcblxuICAgIC8vIHNldCBjYWNoZVxuICAgIGNhY2hlZENsaWVudCA9IGNsaWVudDtcbiAgICBjYWNoZWREYiA9IGRiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50OiBjYWNoZWRDbGllbnQsXG4gICAgICAgIGRiOiBjYWNoZWREYixcbiAgICB9O1xufSIsIi8vTG9naWNhIGRlbCBkb2N1bWVudG86XHJcbi8vcHJlbmRvIHR1dHRvIGwnYXJyYXlcclxuLy9wcmVuZG8gbCdpZCBkZWwgZG9jdW1lbnRvIHNjZWx0b1xyXG4vL3NlIGwnaWQgZGVsbCdhcnJheSDDqSB1Z3VhbGUgYSBxdWVsbG8gcHJlc28gYWxsb3JhIGdsaSBwcmVuZG8gdHV0dGUgbGUgaW5mbyBcclxuLy9pbCBjaGUgc2lnbmlmaWNhIHByZW5kZXJlIGlsIHRpdG9sbyBlIGRlc2NyaXB0aW9uXHJcbi8vcmVzdGl0dWlzY28gcXVlbGxvIGNoZSBobyBhcHBlbmEgcHJlc28gXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IGNvbm5lY3RUb0RhdGFiYXNlIGZyb20gJy4uLy4uL2xpYi9tb25nb2RiJ1xyXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vLi4vdXRpbHMvZ2V0VGhhdEV2ZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZklEKHtldmVudH0pe1xyXG5yZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgPHA+e2V2ZW50Ll9pZH08L3A+XHJcbiAgICA8cD57ZXZlbnQudGl0bGV9PC9wPlxyXG4gICAgPC8+XHJcbik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCB7IHVzZXJJRCB9ID0gY3R4LnF1ZXJ5O1xyXG4gICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKVxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IEV2ZW50LmZpbmRPbmUoe3VzZXJJRH0pLmxlYW4oKSBcclxuICAgIHVzZXIuX2lkID0gdXNlci5faWQudG9TdHJpbmcoKVxyXG4gIFxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlciB9IH1cclxuICB9IiwiLy8gVXNlciBjb21lIEV2ZW50IGRvdmUgcHJlbmRpYW1vIHR1dHRpIGdsaSBldmVudGlcclxuXHJcbmNvbnN0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSA9IHJlcXVpcmUoJy4uL2xpYi9tb25nb2RiJyk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnQocmVxLCByZXMpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgeyBkYiB9ID0gIGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICAgICAgbGV0IGV2ZW50cyA9ICBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbignZXZlbnRzJylcclxuICAgICAgICAgICAgLmZpbmQoe30pXHJcbiAgICAgICAgICAgIC5zb3J0KHsgcHVibGlzaGVkOiAtMSB9KVxyXG4gICAgICAgICAgICAudG9BcnJheSgpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnRzKSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG5ldyBFcnJvcihlcnJvcikubWVzc2FnZSxcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLy9RdWVzdG8gw6kgdW4gY29tbWVudG8gcGVyIGFnZ2lvcm5hcm1pOiBhbGxvcmEgc2VpIGFsIHB1bnRvIGNoZSBjZXJjaGkgc2VtcHJlIGRpIGFjY2VkZXJlIGFsIGRhdGFiYXNlIGNvbiB1bmEgZnVuemlvbmUgZG9tYW5pIGNlcmNhIGRpIGZhcmUgbG8gc3Ryc3NvIG1hIGNvbiBsJ2FwaSBjaSBzb25vIHBpw7kgdHV0b3JpYWxxXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RCIiwiREJfTkFNRSIsIkVycm9yIiwiY2FjaGVkQ2xpZW50IiwiY2FjaGVkRGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImRiIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJFdmVudCIsInJlZklEIiwiZXZlbnQiLCJfaWQiLCJ0aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInVzZXJJRCIsInF1ZXJ5IiwidXNlciIsImZpbmRPbmUiLCJsZWFuIiwidG9TdHJpbmciLCJwcm9wcyIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJldmVudHMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInNvcnQiLCJwdWJsaXNoZWQiLCJ0b0FycmF5IiwianNvbiIsIm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9