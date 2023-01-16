exports.id = "component---src-pages-participant-js";
exports.ids = ["component---src-pages-participant-js"];
exports.modules = {

/***/ "./node_modules/@react-icons/all-files/ai/AiOutlineMail.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/ai/AiOutlineMail.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// THIS FILE IS AUTO GENERATED
var GenIcon = (__webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon)
module.exports.AiOutlineMail = function AiOutlineMail (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/io/IoMdCall.js":
/*!************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/io/IoMdCall.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// THIS FILE IS AUTO GENERATED
var GenIcon = (__webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js").GenIcon)
module.exports.IoMdCall = function IoMdCall (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"}}]})(props);
};


/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/iconBase.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconBase.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenIcon": () => (/* binding */ GenIcon),
/* harmony export */   "IconBase": () => (/* binding */ IconBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ "./node_modules/@react-icons/all-files/lib/esm/iconContext.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), props.children);
  };

  return _iconContext__WEBPACK_IMPORTED_MODULE_1__.IconContext !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iconContext__WEBPACK_IMPORTED_MODULE_1__.IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__.DefaultContext);
}

/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/iconContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconContext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultContext": () => (/* binding */ DefaultContext),
/* harmony export */   "IconContext": () => (/* binding */ IconContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext) && react__WEBPACK_IMPORTED_MODULE_0___default().createContext(DefaultContext);

/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsManifest": () => (/* binding */ IconsManifest)
/* harmony export */ });
var IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/refactoringui/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]

/***/ }),

/***/ "./node_modules/@react-icons/all-files/lib/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-icons/all-files/lib/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultContext": () => (/* reexport safe */ _iconContext__WEBPACK_IMPORTED_MODULE_2__.DefaultContext),
/* harmony export */   "GenIcon": () => (/* reexport safe */ _iconBase__WEBPACK_IMPORTED_MODULE_1__.GenIcon),
/* harmony export */   "IconBase": () => (/* reexport safe */ _iconBase__WEBPACK_IMPORTED_MODULE_1__.IconBase),
/* harmony export */   "IconContext": () => (/* reexport safe */ _iconContext__WEBPACK_IMPORTED_MODULE_2__.IconContext),
/* harmony export */   "IconsManifest": () => (/* reexport safe */ _iconsManifest__WEBPACK_IMPORTED_MODULE_0__.IconsManifest)
/* harmony export */ });
/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ "./node_modules/@react-icons/all-files/lib/esm/iconsManifest.js");
/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ "./node_modules/@react-icons/all-files/lib/esm/iconBase.js");
/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ "./node_modules/@react-icons/all-files/lib/esm/iconContext.js");




/***/ }),

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./src/styles/footer.module.scss":
/*!***************************************!*\
  !*** ./src/styles/footer.module.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
// Exports
var footer = "footer-module--footer--02543";


/***/ }),

/***/ "./src/styles/layoutPage.module.scss":
/*!*******************************************!*\
  !*** ./src/styles/layoutPage.module.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heroMidSection": () => (/* binding */ heroMidSection),
/* harmony export */   "heroWrapper": () => (/* binding */ heroWrapper)
/* harmony export */ });
// Exports
var heroMidSection = "layoutPage-module--heroMidSection--f98d4";
var heroWrapper = "layoutPage-module--heroWrapper--2cbde";


/***/ }),

/***/ "./src/styles/logobar.module.scss":
/*!****************************************!*\
  !*** ./src/styles/logobar.module.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flag": () => (/* binding */ flag),
/* harmony export */   "logoContainer": () => (/* binding */ logoContainer)
/* harmony export */ });
// Exports
var logoContainer = "logobar-module--logoContainer--804b6";
var flag = "logobar-module--flag--69ba0";


/***/ }),

/***/ "./src/styles/participantBar.module.scss":
/*!***********************************************!*\
  !*** ./src/styles/participantBar.module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var wrapper = "participantBar-module--wrapper--a2586";


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ B),
/* harmony export */   "MainImage": () => (/* binding */ z),
/* harmony export */   "Placeholder": () => (/* binding */ T),
/* harmony export */   "StaticImage": () => (/* binding */ V),
/* harmony export */   "generateImageData": () => (/* binding */ f),
/* harmony export */   "getImage": () => (/* binding */ M),
/* harmony export */   "getImageData": () => (/* binding */ x),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ m),
/* harmony export */   "getSrc": () => (/* binding */ S),
/* harmony export */   "getSrcSet": () => (/* binding */ N),
/* harmony export */   "withArtDirection": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = function (e) {
    return console.warn(e);
  },
  c = function (e, t) {
    return e - t;
  },
  h = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function g(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function p(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    c = void 0 === d ? ["auto", "webp"] : d;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: c,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || 1.3333333333333333))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / 1.3333333333333333) : 800), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: c
  }));
}
function m(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = p(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function f(e) {
  var t,
    a = (e = p(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    c = e.options,
    m = e.width,
    f = e.height,
    b = e.filename,
    k = e.reporter,
    E = void 0 === k ? {
      warn: d
    } : k,
    M = e.backgroundColor,
    S = e.placeholderURL;
  if (a || E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = g(b)) : i = {
    width: m,
    height: f,
    format: (null == (t = i) ? void 0 : t.format) || g(b) || "auto"
  };
  var N = new Set(e.formats);
  (0 === N.size || N.has("auto") || N.has("")) && (N.delete("auto"), N.delete(""), N.add(i.format)), N.has("jpg") && N.has("png") && (E.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), N.delete("jpg" === i.format ? "png" : "jpg"));
  var x = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: d
        } : o,
        c = e.breakpoints,
        h = void 0 === c ? l : c,
        g = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (g.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + g.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          c = void 0 === u ? {
            warn: d
          } : u,
          h = a.width / a.height,
          g = v(void 0 === l ? s : l);
        if (i && r) {
          var p = y(a, {
            width: i,
            height: r,
            fit: o
          });
          i = p.width, r = p.height, h = p.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : 800;
        var m = i;
        if (a.width < i || a.height < r) {
          var f = a.width < i ? "width" : "height";
          c.warn("\nThe requested " + f + ' "' + ("width" === f ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + f + " of " + a[f] + "px. If possible, replace the current image with a larger one."), "width" === f ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: g.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: m,
          presentationHeight: Math.round(m / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? w(e) : "fullWidth" === i ? w(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    I = {
      sources: []
    },
    W = e.sizes;
  W || (W = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  }(x.presentationWidth, o)), N.forEach(function (e) {
    var t = x.sizes.map(function (t) {
      var i = r(b, t, Math.round(t / x.aspectRatio), e, u, c);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      E.warn("[" + a + "] The resolver for image " + b + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === x.unscaledWidth;
      }) || t[0];
      i && (I.fallback = {
        src: i.src,
        srcSet: h(t),
        sizes: W
      });
    } else {
      var n;
      null == (n = I.sources) || n.push({
        srcSet: h(t),
        sizes: W,
        type: "image/" + e
      });
    }
  });
  var j = {
    images: I,
    layout: o,
    backgroundColor: M
  };
  switch (S && (j.placeholder = {
    fallback: S
  }), o) {
    case "fixed":
      j.width = x.presentationWidth, j.height = x.presentationHeight;
      break;
    case "fullWidth":
      j.width = 1, j.height = 1 / x.aspectRatio;
      break;
    case "constrained":
      j.width = e.width || x.presentationWidth || 1, j.height = (j.width || 1) / x.aspectRatio;
  }
  return j;
}
var v = function (e) {
  return Array.from(new Set([1].concat(e))).sort(c);
};
function w(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    d = e.layout,
    h = a.width / a.height,
    g = v(void 0 === l ? s : l);
  if (i && r) {
    var p = y(a, {
      width: i,
      height: r,
      fit: o
    });
    i = p.width, r = p.height, h = p.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / h), i || (i = r * h);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(c),
    aspectRatio: h,
    presentationWidth: m,
    presentationHeight: Math.round(m / h),
    unscaledWidth: i
  };
}
function y(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var b = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  k = ["images", "placeholder"];
function E() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var M = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  S = function (e) {
    var t, a, i;
    return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  N = function (e) {
    var t, a, i;
    return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function x(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, b);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), f(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function I(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, k), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var W,
  j = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  R = ["fallback", "sources", "shouldLoad"],
  _ = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, j);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  A = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, R),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
_.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, A.displayName = "Picture", A.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var O = ["fallback"],
  T = function (t) {
    var a = t.fallback,
      i = o(t, O);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
T.displayName = "Placeholder", T.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (W = A.propTypes) ? void 0 : W.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var z = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t, {
    shouldLoad: !0
  }))));
};
z.displayName = "MainImage", z.propTypes = A.propTypes;
var L = ["children"],
  q = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  C = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  D = function (a) {
    var i = a.children,
      r = o(a, L);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, null));
  },
  P = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  H = ["style", "className"],
  F = function (e) {
    return e.replace(/\n/g, "");
  },
  B = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, P);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      M = u.placeholder,
      S = u.backgroundColor,
      N = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return E() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (E() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      x = N.style,
      I = N.className,
      W = o(N, H),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? F(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: F(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, x, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return E() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(M, 0, b, w, y, S, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), E() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  G = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  V = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, G);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(B),
  U = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  X = new Set(["fixed", "fullWidth", "constrained"]),
  Y = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: U,
    height: U,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !X.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
V.displayName = "StaticImage", V.propTypes = Y;


/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/footer.module.scss */ "./src/styles/footer.module.scss");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _react_icons_all_files_io_IoMdCall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-icons/all-files/io/IoMdCall */ "./node_modules/@react-icons/all-files/io/IoMdCall.js");
/* harmony import */ var _react_icons_all_files_ai_AiOutlineMail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-icons/all-files/ai/AiOutlineMail */ "./node_modules/@react-icons/all-files/ai/AiOutlineMail.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



// import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
// import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
// import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"
// import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft"



function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: `${_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__.footer} container-fluid my-2`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row px-1 px-md-5 py-4 mb-2 gap-md-0 gap-3 bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-7 col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Subscribe Us",
    className: "rounded-pill px-4 shadow"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../images/right.png",
    alt: "submit button image",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4223391110.json */ "./.cache/caches/gatsby-plugin-image/4223391110.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-5 col-12 d-flex justify-content-end gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com",
    className: "shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../images/instagram.png",
    alt: "instagram link img",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3050722743.json */ "./.cache/caches/gatsby-plugin-image/3050722743.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com",
    className: "shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../images/facebook.png",
    alt: "facebook link img",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2673816561.json */ "./.cache/caches/gatsby-plugin-image/2673816561.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/",
    className: "shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../images/youtube.png",
    alt: "youtube link img",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/114795751.json */ "./.cache/caches/gatsby-plugin-image/114795751.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-md-between justify-content-center align-items-center bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-4 col-10 p-2 p-md-5 text-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../images/modball run logo white.png",
    alt: "logo"
    // className={`${styles.imgCont}`}
    ,
    width: 120,
    height: 120,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/367343736.json */ "./.cache/caches/gatsby-plugin-image/367343736.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-light text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Lorem ipsum dolor sit, amet consectetur adipisicing edivt. Sunt facidivs at consectetur saepe autem maxime expdivcabo adipisci amet iure animi."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-4 col-10 p-2 p-md-5 d-flex justify-content-around align-items-center text-justify"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-around gap-3 align-items-start flex-md-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: "text-white text-decoration-none"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about",
    className: "text-white text-decoration-none"
  }, "Tour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/participant",
    className: "text-white text-decoration-none"
  }, "Participant")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/shop",
    className: "text-white text-decoration-none"
  }, "Shop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact",
    className: "text-white text-decoration-none"
  }, "Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-4 col-10 p-2 p-md-5 text-center d-flex align-items-center flex-md-column justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex align-items-start flex-md-column justify-content-around gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact",
    className: "btn border-white text-white"
  }, "Contact Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_icons_all_files_ai_AiOutlineMail__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMail, {
    className: "text-white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white"
  }, "modball@xyz.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_icons_all_files_io_IoMdCall__WEBPACK_IMPORTED_MODULE_5__.IoMdCall, {
    className: "text-white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-white"
  }, "+123456789")))))));
}

/***/ }),

/***/ "./src/components/ManagementCard.js":
/*!******************************************!*\
  !*** ./src/components/ManagementCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManagementCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");


// import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
// import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook"
// import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube"

function ManagementCard({
  classes
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/profile.webp",
    className: "rounded-circle",
    imgClassName: "img-fluid",
    width: 100,
    height: 100,
    alt: "profile pic of management",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/12816355.json */ "./.cache/caches/gatsby-plugin-image/12816355.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "display fw-bold"
  }, "Sean Rogers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Founder : Modball run"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Email: xyx@mail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between fs-1 align-items-center gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com",
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/instagram.png",
    alt: "instagram link img",
    imgClassName: "img-fluid",
    width: 30,
    height: 30,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/909315700.json */ "./.cache/caches/gatsby-plugin-image/909315700.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com",
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/facebook.png",
    alt: "facebook link img",
    imgClassName: "img-fluid",
    width: 30,
    height: 30,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1224755580.json */ "./.cache/caches/gatsby-plugin-image/1224755580.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/",
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.StaticImage, {
    src: "../images/youtube.png",
    alt: "youtube link img",
    imgClassName: "img-fluid",
    width: 30,
    height: 30,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3242281282.json */ "./.cache/caches/gatsby-plugin-image/3242281282.json")
  })))));
}

/***/ }),

/***/ "./src/components/ParticipantBar.js":
/*!******************************************!*\
  !*** ./src/components/ParticipantBar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParticipantBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_participantBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/participantBar.module.scss */ "./src/styles/participantBar.module.scss");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");






function ParticipantBar({
  profilePic,
  name,
  team,
  carName,
  carPic
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `row rounded-pill bg-black shadow text-light my-4 py-2 mx-md-5 mx-2 overflow-hidden ${_styles_participantBar_module_scss__WEBPACK_IMPORTED_MODULE_1__.wrapper}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-5 col-12 d-flex justify-content-md-start justify-content-around align-items-center gap-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage
  // src={profilePic}
  , {
    src: "../images/profile.webp",
    alt: "profile pic",
    imgClassName: "img-fluid",
    className: "rounded-circle"
    // height="100%"
    ,
    width: 80,
    height: 80,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1159675350.json */ "./.cache/caches/gatsby-plugin-image/1159675350.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-capitalize text-center text-nowrap m-auto"
  }, "Name : ", name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Team : ", team)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-2 col-6 d-flex justify-content-around fs-1 align-items-center m-auto gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com",
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/instagram.png",
    alt: "instagram link img",
    className: "p-1",
    width: 30,
    height: 30,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/909315700.json */ "./.cache/caches/gatsby-plugin-image/909315700.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com",
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/facebook.png",
    alt: "facebook link img",
    className: "p-1",
    width: 30,
    height: 30,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1224755580.json */ "./.cache/caches/gatsby-plugin-image/1224755580.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/",
    className: "text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    src: "../images/youtube.png",
    alt: "youtube link img",
    className: "p-1",
    width: 30,
    height: 30,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3242281282.json */ "./.cache/caches/gatsby-plugin-image/3242281282.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-md-5 col-6 d-flex justify-content-md-end justify-content-center gap-4 align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-capitalize text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Car:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), carName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage
  // src={carPic}
  , {
    src: "../images/car.jpg",
    alt: "car pic",
    imgClassName: "img-fluid",
    className: "rounded-circle"
    // height="100%"
    ,
    width: 80,
    height: 80,
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/871902968.json */ "./.cache/caches/gatsby-plugin-image/871902968.json")
  }))));
}

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _logobar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logobar */ "./src/components/logobar.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.scss */ "./src/components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_layoutPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/layoutPage.module.scss */ "./src/styles/layoutPage.module.scss");







const Layout = ({
  children
}) => {
  var _data$site$siteMetada;
  const data = _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `${_styles_layoutPage_module_scss__WEBPACK_IMPORTED_MODULE_5__.heroWrapper} container-fluid p-0`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_logobar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: `${_styles_layoutPage_module_scss__WEBPACK_IMPORTED_MODULE_5__.heroMidSection} container-fluid px-0`
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: ((_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.title) || `Title`
  }));
};
Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/logobar.js":
/*!***********************************!*\
  !*** ./src/components/logobar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logobar)
/* harmony export */ });
/* harmony import */ var _fontsource_ubuntu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fontsource/ubuntu */ "./node_modules/@fontsource/ubuntu/index.css");
/* harmony import */ var _fontsource_ubuntu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fontsource_ubuntu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_logobar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/logobar.module.scss */ "./src/styles/logobar.module.scss");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
 // Importing lato font. Defaults to weight 400.




function Logobar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container-fluid position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "row text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: `col-auto mx-auto d-flex justify-content-center align-items-center ${_styles_logobar_module_scss__WEBPACK_IMPORTED_MODULE_2__.logoContainer}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../images/modball run logo balck.png",
    alt: "logo",
    imgClassName: "img-fluid",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4224292492.json */ "./.cache/caches/gatsby-plugin-image/4224292492.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: `row position-absolute w-100 ${_styles_logobar_module_scss__WEBPACK_IMPORTED_MODULE_2__.flag}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    src: "../images/indiaFlag.svg",
    alt: "flag",
    className: "",
    imgClassName: "img-fluid",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1174459191.json */ "./.cache/caches/gatsby-plugin-image/1174459191.json")
  })));
}

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/navbar.scss */ "./src/styles/navbar.scss");
/* harmony import */ var _styles_navbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_scss__WEBPACK_IMPORTED_MODULE_2__);




const isActive = ({
  isCurrent
}) => {
  return isCurrent ? {
    className: "nav-link active"
  } : {
    className: "nav-link"
  };
};
const ExactNavLink = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({
  getProps: isActive
}, props));
const Navbar = ({
  siteTitle
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "navbar navbar-expand navbar-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collapse navbar-collapse",
    id: "main-navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-md-0 d-flex w-100 justify-content-center gap-md-5 gap-2 py-3 px-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item text-center fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExactNavLink, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item text-center fw-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExactNavLink, {
    to: "/tour"
  }, "Tour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item fw-bold text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExactNavLink, {
    to: "/participant"
  }, "Participant")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item fw-bold text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.modcrew.in",
    className: "text-decoration-none"
  }, "Shop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item fw-bold text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ExactNavLink, {
    to: "/contact"
  }, "Contact"))))));
};
Navbar.propTypes = {
  siteTitle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
Navbar.defaultProps = {
  siteTitle: ``
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/pages/participant.js?export=default":
/*!*************************************************!*\
  !*** ./src/pages/participant.js?export=default ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ participant)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _components_ParticipantBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ParticipantBar */ "./src/components/ParticipantBar.js");
/* harmony import */ var _components_ManagementCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ManagementCard */ "./src/components/ManagementCard.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");

// import * as styles from "../styles/participant.module.scss"





function participant() {
  const list = [{
    name: "S Bhaskar",
    team: "kalinga racers",
    carName: "Honda Brio",
    carPic: "../images/car.jpg",
    profilePic: "../images/profile.png",
    id: 1
  }, {
    name: "A Bhaskar",
    team: "kalinga racers",
    carName: "Honda Brio",
    carPic: "../images/car.jpg",
    profilePic: "../images/profile.png",
    id: 2
  }, {
    name: "b Bhaskar",
    team: "kalinga racers",
    carName: "Honda Brio",
    carPic: "../images/car.jpeg",
    profilePic: "../images/profile.png",
    id: 3
  }, {
    name: "f Bhaskar",
    team: "kalinga racers",
    carName: "Honda Brio",
    carPic: "../images/car.jpeg",
    profilePic: "../images/profile.png",
    id: 4
  }, {
    name: "m Bhaskar",
    team: "kalinga racers",
    carName: "Honda Brio",
    carPic: "../images/car.jpeg",
    profilePic: "../images/profile.png",
    id: 5
  }, {
    name: "the Bhaskar",
    team: "kalinga racers",
    carName: "Honda Brio",
    carPic: "../images/car.jpeg",
    profilePic: "../images/profile.png",
    id: 6
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `container-fluid p-0`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    src: "../images/participantBanner.jpg",
    alt: "banner img",
    className: "p-0 w-100",
    formats: ["AUTO", "WEBP"],
    imgClassName: "img-fluid",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3708129314.json */ "./.cache/caches/gatsby-plugin-image/3708129314.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-fluid text-light bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-5 p-4 text-center text-uppercase"
  }, "Participants")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-fluid"
  }, list.map(racer => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ParticipantBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      profilePic: racer.profilePic,
      name: racer.name,
      carName: racer.carName,
      carPic: racer.carPic,
      team: racer.team,
      key: racer.id
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-fluid text-light bg-black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "display-5 p-4 text-center text-uppercase"
  }, "Connect with Management")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-md container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ManagementCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    classes: "d-flex justify-content-center align-items-center gap-4 bg-black text-white m-auto p-4 rounded shadow mb-4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-10 col-sm-6 m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ManagementCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    classes: "d-flex justify-content-center align-items-center gap-4 bg-black text-white p-4 rounded shadow mb-4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-10 col-sm-6 m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ManagementCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    classes: "d-flex justify-content-center align-items-center gap-4 bg-black text-white p-4 rounded shadow mb-4"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/***/ }),

/***/ "./node_modules/@fontsource/ubuntu/index.css":
/*!***************************************************!*\
  !*** ./node_modules/@fontsource/ubuntu/index.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/layout.scss":
/*!************************************!*\
  !*** ./src/components/layout.scss ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/navbar.scss":
/*!********************************!*\
  !*** ./src/styles/navbar.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/114795751.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/114795751.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e80808","images":{"fallback":{"src":"/static/a1cc6d6c04cfd12be95b4d13cd881bfe/ccc41/youtube.png","srcSet":"/static/a1cc6d6c04cfd12be95b4d13cd881bfe/bf8e1/youtube.png 128w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/acb7c/youtube.png 256w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/ccc41/youtube.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/a1cc6d6c04cfd12be95b4d13cd881bfe/6766a/youtube.webp 128w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/22bfc/youtube.webp 256w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/d689f/youtube.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1159675350.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1159675350.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/48e9dad0cd4c2eada505d0ef9ebf5405/61ca6/profile.webp","srcSet":"/static/48e9dad0cd4c2eada505d0ef9ebf5405/264f2/profile.webp 20w,\\n/static/48e9dad0cd4c2eada505d0ef9ebf5405/e73fe/profile.webp 40w,\\n/static/48e9dad0cd4c2eada505d0ef9ebf5405/61ca6/profile.webp 80w,\\n/static/48e9dad0cd4c2eada505d0ef9ebf5405/60b4d/profile.webp 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[]},"width":80,"height":80}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1174459191.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1174459191.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6f4c09afe1dece7ede104132e19efa2a/a605f/indiaFlag.svg","srcSet":"/static/6f4c09afe1dece7ede104132e19efa2a/ea66d/indiaFlag.svg 13w,\\n/static/6f4c09afe1dece7ede104132e19efa2a/8f5df/indiaFlag.svg 26w,\\n/static/6f4c09afe1dece7ede104132e19efa2a/a605f/indiaFlag.svg 52w","sizes":"(min-width: 52px) 52px, 100vw"},"sources":[{"srcSet":"/static/6f4c09afe1dece7ede104132e19efa2a/f53a3/indiaFlag.webp 13w,\\n/static/6f4c09afe1dece7ede104132e19efa2a/1bdd1/indiaFlag.webp 26w,\\n/static/6f4c09afe1dece7ede104132e19efa2a/2090e/indiaFlag.webp 52w","type":"image/webp","sizes":"(min-width: 52px) 52px, 100vw"}]},"width":52,"height":9}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1224755580.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1224755580.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#1878d8","images":{"fallback":{"src":"/static/021ada146ffb7c1753557ff29618d04c/53973/facebook.png","srcSet":"/static/021ada146ffb7c1753557ff29618d04c/22867/facebook.png 8w,\\n/static/021ada146ffb7c1753557ff29618d04c/7961d/facebook.png 15w,\\n/static/021ada146ffb7c1753557ff29618d04c/53973/facebook.png 30w,\\n/static/021ada146ffb7c1753557ff29618d04c/7ab40/facebook.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/021ada146ffb7c1753557ff29618d04c/5d252/facebook.webp 8w,\\n/static/021ada146ffb7c1753557ff29618d04c/f57b3/facebook.webp 15w,\\n/static/021ada146ffb7c1753557ff29618d04c/bde72/facebook.webp 30w,\\n/static/021ada146ffb7c1753557ff29618d04c/927d1/facebook.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/12816355.json":
/*!*********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/12816355.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/48e9dad0cd4c2eada505d0ef9ebf5405/d8057/profile.webp","srcSet":"/static/48e9dad0cd4c2eada505d0ef9ebf5405/2fa99/profile.webp 25w,\\n/static/48e9dad0cd4c2eada505d0ef9ebf5405/dbc4a/profile.webp 50w,\\n/static/48e9dad0cd4c2eada505d0ef9ebf5405/d8057/profile.webp 100w,\\n/static/48e9dad0cd4c2eada505d0ef9ebf5405/2e34e/profile.webp 200w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[]},"width":100,"height":100}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2673816561.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2673816561.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#1878d8","images":{"fallback":{"src":"/static/021ada146ffb7c1753557ff29618d04c/ccc41/facebook.png","srcSet":"/static/021ada146ffb7c1753557ff29618d04c/bf8e1/facebook.png 128w,\\n/static/021ada146ffb7c1753557ff29618d04c/acb7c/facebook.png 256w,\\n/static/021ada146ffb7c1753557ff29618d04c/ccc41/facebook.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/021ada146ffb7c1753557ff29618d04c/6766a/facebook.webp 128w,\\n/static/021ada146ffb7c1753557ff29618d04c/22bfc/facebook.webp 256w,\\n/static/021ada146ffb7c1753557ff29618d04c/d689f/facebook.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3050722743.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3050722743.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8290266a5fb402a34b96f890bbdb2d60/ccc41/instagram.png","srcSet":"/static/8290266a5fb402a34b96f890bbdb2d60/bf8e1/instagram.png 128w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/acb7c/instagram.png 256w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/ccc41/instagram.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/8290266a5fb402a34b96f890bbdb2d60/6766a/instagram.webp 128w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/22bfc/instagram.webp 256w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/d689f/instagram.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3242281282.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3242281282.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e80808","images":{"fallback":{"src":"/static/a1cc6d6c04cfd12be95b4d13cd881bfe/53973/youtube.png","srcSet":"/static/a1cc6d6c04cfd12be95b4d13cd881bfe/22867/youtube.png 8w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/7961d/youtube.png 15w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/53973/youtube.png 30w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/7ab40/youtube.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/a1cc6d6c04cfd12be95b4d13cd881bfe/5d252/youtube.webp 8w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/f57b3/youtube.webp 15w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/bde72/youtube.webp 30w,\\n/static/a1cc6d6c04cfd12be95b4d13cd881bfe/927d1/youtube.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/367343736.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/367343736.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2934c93b9e98c682bacdc503848068a5/a8b52/modball%20run%20logo%20white.png","srcSet":"/static/2934c93b9e98c682bacdc503848068a5/53973/modball%20run%20logo%20white.png 30w,\\n/static/2934c93b9e98c682bacdc503848068a5/7ab40/modball%20run%20logo%20white.png 60w,\\n/static/2934c93b9e98c682bacdc503848068a5/a8b52/modball%20run%20logo%20white.png 120w,\\n/static/2934c93b9e98c682bacdc503848068a5/87351/modball%20run%20logo%20white.png 240w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/2934c93b9e98c682bacdc503848068a5/bde72/modball%20run%20logo%20white.webp 30w,\\n/static/2934c93b9e98c682bacdc503848068a5/927d1/modball%20run%20logo%20white.webp 60w,\\n/static/2934c93b9e98c682bacdc503848068a5/507b0/modball%20run%20logo%20white.webp 120w,\\n/static/2934c93b9e98c682bacdc503848068a5/8d565/modball%20run%20logo%20white.webp 240w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":120}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3708129314.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3708129314.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ed437bd340fb083e69df54893275962c/231aa/participantBanner.jpg","srcSet":"/static/ed437bd340fb083e69df54893275962c/12d7d/participantBanner.jpg 350w,\\n/static/ed437bd340fb083e69df54893275962c/cbf46/participantBanner.jpg 700w,\\n/static/ed437bd340fb083e69df54893275962c/231aa/participantBanner.jpg 1400w","sizes":"(min-width: 1400px) 1400px, 100vw"},"sources":[{"srcSet":"/static/ed437bd340fb083e69df54893275962c/a4795/participantBanner.webp 350w,\\n/static/ed437bd340fb083e69df54893275962c/377b6/participantBanner.webp 700w,\\n/static/ed437bd340fb083e69df54893275962c/793b4/participantBanner.webp 1400w","type":"image/webp","sizes":"(min-width: 1400px) 1400px, 100vw"}]},"width":1400,"height":700}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4223391110.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4223391110.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d961fc79e0ac8a2f3dc7f6bf817eca70/ccc41/right.png","srcSet":"/static/d961fc79e0ac8a2f3dc7f6bf817eca70/bf8e1/right.png 128w,\\n/static/d961fc79e0ac8a2f3dc7f6bf817eca70/acb7c/right.png 256w,\\n/static/d961fc79e0ac8a2f3dc7f6bf817eca70/ccc41/right.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/static/d961fc79e0ac8a2f3dc7f6bf817eca70/6766a/right.webp 128w,\\n/static/d961fc79e0ac8a2f3dc7f6bf817eca70/22bfc/right.webp 256w,\\n/static/d961fc79e0ac8a2f3dc7f6bf817eca70/d689f/right.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4224292492.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4224292492.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a4e74157a814c9e0420faa8b6019af95/b5658/modball%20run%20logo%20balck.png","srcSet":"/static/a4e74157a814c9e0420faa8b6019af95/acb7c/modball%20run%20logo%20balck.png 256w,\\n/static/a4e74157a814c9e0420faa8b6019af95/ccc41/modball%20run%20logo%20balck.png 512w,\\n/static/a4e74157a814c9e0420faa8b6019af95/b5658/modball%20run%20logo%20balck.png 1024w","sizes":"(min-width: 1024px) 1024px, 100vw"},"sources":[{"srcSet":"/static/a4e74157a814c9e0420faa8b6019af95/22bfc/modball%20run%20logo%20balck.webp 256w,\\n/static/a4e74157a814c9e0420faa8b6019af95/d689f/modball%20run%20logo%20balck.webp 512w,\\n/static/a4e74157a814c9e0420faa8b6019af95/67ded/modball%20run%20logo%20balck.webp 1024w","type":"image/webp","sizes":"(min-width: 1024px) 1024px, 100vw"}]},"width":1024,"height":1024}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/871902968.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/871902968.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#98a8a8","images":{"fallback":{"src":"/static/1fc7df4f420841d08a0a2fc61c9c0309/499f6/car.jpg","srcSet":"/static/1fc7df4f420841d08a0a2fc61c9c0309/f4935/car.jpg 20w,\\n/static/1fc7df4f420841d08a0a2fc61c9c0309/2f28c/car.jpg 40w,\\n/static/1fc7df4f420841d08a0a2fc61c9c0309/499f6/car.jpg 80w,\\n/static/1fc7df4f420841d08a0a2fc61c9c0309/41624/car.jpg 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[{"srcSet":"/static/1fc7df4f420841d08a0a2fc61c9c0309/264f2/car.webp 20w,\\n/static/1fc7df4f420841d08a0a2fc61c9c0309/e73fe/car.webp 40w,\\n/static/1fc7df4f420841d08a0a2fc61c9c0309/61ca6/car.webp 80w,\\n/static/1fc7df4f420841d08a0a2fc61c9c0309/60b4d/car.webp 160w","type":"image/webp","sizes":"(min-width: 80px) 80px, 100vw"}]},"width":80,"height":80}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/909315700.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/909315700.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8290266a5fb402a34b96f890bbdb2d60/53973/instagram.png","srcSet":"/static/8290266a5fb402a34b96f890bbdb2d60/22867/instagram.png 8w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/7961d/instagram.png 15w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/53973/instagram.png 30w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/7ab40/instagram.png 60w","sizes":"(min-width: 30px) 30px, 100vw"},"sources":[{"srcSet":"/static/8290266a5fb402a34b96f890bbdb2d60/5d252/instagram.webp 8w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/f57b3/instagram.webp 15w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/bde72/instagram.webp 30w,\\n/static/8290266a5fb402a34b96f890bbdb2d60/927d1/instagram.webp 60w","type":"image/webp","sizes":"(min-width: 30px) 30px, 100vw"}]},"width":30,"height":30}');

/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Modball"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-participant-js.js.map