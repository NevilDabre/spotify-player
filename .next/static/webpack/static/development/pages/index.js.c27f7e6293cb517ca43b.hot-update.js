webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: authEndpoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authEndpoint", function() { return authEndpoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! spotify-web-api-js */ "./node_modules/spotify-web-api-js/src/spotify-web-api.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Nevil\\Documents\\Study Projects\\React\\spot-player\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var spotifyApi = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_1___default.a();
var authEndpoint = 'https://accounts.spotify.com/authorize';
var clientId = 'bc49f02eb2ed4712ae02fd6c17d41f5c';
var redirectUri = 'http://localhost:3000';
var scopes = ['user-read-currently-playing', 'user-read-playback-state'];

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      token = _useState[0],
      setToken = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      albumName = _useState2[0],
      setAlbumName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      albumArt = _useState3[0],
      setAlbumArt = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Get the hash of the url
    var hash = window.location.hash.substring(1).split("&").reduce(function (initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }

      return initial;
    }, {});
    window.location.hash = "";
    var _token = hash.access_token;

    if (_token) {
      //Set token
      setToken(_token);
    }
  });

  var getNowPlaying = function getNowPlaying() {
    spotifyApi.setAccessToken(token);
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
      if (err) console.error(err);else console.log('Artist albums', data);
    });
  };

  return __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Hello Spotify!"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, !token && __jsx("a", {
    href: "".concat(authEndpoint, "?client_id=").concat(clientId, "&redirect_uri=").concat(redirectUri, "&scope=").concat(scopes.join("%20"), "&response_type=token&show_dialog=true"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Login to Spotify"), token && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Now Playing: ", albumName), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: albumArt,
    style: {
      height: 150
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx("button", {
    onClick: function onClick() {
      return getNowPlaying();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Check Now Playing"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c27f7e6293cb517ca43b.hot-update.js.map