"use strict";
(() => {
var exports = {};
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
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

/***/ "./pages/api/events.js":
/*!*****************************!*\
  !*** ./pages/api/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {
  connectToDatabase
} = __webpack_require__(/*! ../../lib/mongodb */ "./lib/mongodb.js");

const ObjectId = __webpack_require__(/*! mongodb */ "mongodb").ObjectId;

async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET':
      {
        return getPosts(req, res);
      }

    case 'POST':
      {
        return addPost(req, res);
      }

    case 'PUT':
      {
        return updatePost(req, res);
      }

    case 'DELETE':
      {
        return deletePost(req, res);
      }
  }
} // Getting all posts.

async function getPosts(req, res) {
  try {
    let {
      db
    } = await connectToDatabase();
    let events = await db.collection('events').find({}).sort({
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
} // Adding a new post


async function addPost(req, res) {
  try {
    let {
      db
    } = await connectToDatabase();
    await db.collection('events').insertOne(JSON.parse(req.body));
    return res.json({
      message: 'Post added successfully',
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
} // Updating a post


async function updatePost(req, res) {
  try {
    let {
      db
    } = await connectToDatabase();
    await db.collection('events').updateOne({
      _id: new ObjectId(req.body)
    }, {
      $set: {
        published: true
      }
    });
    return res.json({
      message: 'Post updated successfully',
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
} // deleting a post


async function deletePost(req, res) {
  try {
    let {
      db
    } = await connectToDatabase();
    await db.collection('events').deleteOne({
      _id: new ObjectId(req.body)
    });
    return res.json({
      message: 'Post deleted successfully',
      success: true
    });
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/events.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL25leHRqcy1ibG9nLWFwcC13aXRoLW1vbmdvZGIvLi9saWIvbW9uZ29kYi5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy1hcHAtd2l0aC1tb25nb2RiLy4vcGFnZXMvYXBpL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9uZXh0anMtYmxvZy1hcHAtd2l0aC1tb25nb2RiL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBNT05HT0RCX0RCID0gcHJvY2Vzcy5lbnYuREJfTkFNRTtcblxuLy8gY2hlY2sgdGhlIE1vbmdvREIgVVJJXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50YWwgdmFyaWFibGUnKTtcbn1cblxuLy8gY2hlY2sgdGhlIE1vbmdvREIgREJcbmlmICghTU9OR09EQl9EQikge1xuICAgIHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSBNT05HT0RCX0RCIGVudmlyb25tZW50YWwgdmFyaWFibGUnKTtcbn1cblxubGV0IGNhY2hlZENsaWVudCA9IG51bGw7XG5sZXQgY2FjaGVkRGIgPSBudWxsO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gICAgLy8gY2hlY2sgdGhlIGNhY2hlZC5cbiAgICBpZiAoY2FjaGVkQ2xpZW50ICYmIGNhY2hlZERiKSB7XG4gICAgICAgIC8vIGxvYWQgZnJvbSBjYWNoZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xpZW50OiBjYWNoZWRDbGllbnQsXG4gICAgICAgICAgICBkYjogY2FjaGVkRGIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgLy8gQ29ubmVjdCB0byBjbHVzdGVyXG4gICAgbGV0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChNT05HT0RCX1VSSSwgb3B0cyk7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBsZXQgZGIgPSBjbGllbnQuZGIoTU9OR09EQl9EQik7XG5cbiAgICAvLyBzZXQgY2FjaGVcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gICAgY2FjaGVkRGIgPSBkYjtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNsaWVudDogY2FjaGVkQ2xpZW50LFxuICAgICAgICBkYjogY2FjaGVkRGIsXG4gICAgfTtcbn0iLCIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgeyBjb25uZWN0VG9EYXRhYmFzZSB9ID0gcmVxdWlyZSgnLi4vLi4vbGliL21vbmdvZGInKTtcbmNvbnN0IE9iamVjdElkID0gcmVxdWlyZSgnbW9uZ29kYicpLk9iamVjdElkO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgLy8gc3dpdGNoIHRoZSBtZXRob2RzXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ0dFVCc6IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRQb3N0cyhyZXEsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdQT1NUJzoge1xuICAgICAgICAgICAgcmV0dXJuIGFkZFBvc3QocmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnUFVUJzoge1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVBvc3QocmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnREVMRVRFJzoge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZVBvc3QocmVxLCByZXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBHZXR0aW5nIGFsbCBwb3N0cy5cbmFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gICAgICAgIGxldCBldmVudHMgPSBhd2FpdCBkYlxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2V2ZW50cycpXG4gICAgICAgICAgICAuZmluZCh7fSlcbiAgICAgICAgICAgIC5zb3J0KHsgcHVibGlzaGVkOiAtMSB9KVxuICAgICAgICAgICAgLnRvQXJyYXkoKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnRzKSksXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gQWRkaW5nIGEgbmV3IHBvc3RcbmFzeW5jIGZ1bmN0aW9uIGFkZFBvc3QocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZXZlbnRzJykuaW5zZXJ0T25lKEpTT04ucGFyc2UocmVxLmJvZHkpKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQb3N0IGFkZGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gVXBkYXRpbmcgYSBwb3N0XG5hc3luYyBmdW5jdGlvbiB1cGRhdGVQb3N0KHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZXZlbnRzJykudXBkYXRlT25lKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9pZDogbmV3IE9iamVjdElkKHJlcS5ib2R5KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7ICRzZXQ6IHsgcHVibGlzaGVkOiB0cnVlIH0gfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiAnUG9zdCB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogbmV3IEVycm9yKGVycm9yKS5tZXNzYWdlLFxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8gZGVsZXRpbmcgYSBwb3N0XG5hc3luYyBmdW5jdGlvbiBkZWxldGVQb3N0KHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZXZlbnRzJykuZGVsZXRlT25lKHtcbiAgICAgICAgICAgIF9pZDogbmV3IE9iamVjdElkKHJlcS5ib2R5KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQb3N0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBuZXcgRXJyb3IoZXJyb3IpLm1lc3NhZ2UsXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9EQiIsIkRCX05BTUUiLCJFcnJvciIsImNhY2hlZENsaWVudCIsImNhY2hlZERiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJkYiIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0IiwicmVxdWlyZSIsIk9iamVjdElkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldFBvc3RzIiwiYWRkUG9zdCIsInVwZGF0ZVBvc3QiLCJkZWxldGVQb3N0IiwiZXZlbnRzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwicHVibGlzaGVkIiwidG9BcnJheSIsImpzb24iLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImVycm9yIiwiaW5zZXJ0T25lIiwiYm9keSIsInVwZGF0ZU9uZSIsIl9pZCIsIiRzZXQiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9