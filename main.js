/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant-background.jpg */ \"./src/images/restaurant-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\n    --mainFont: \"Cinzel\";\n    --secondaryFont:\"Raleway\";\n    --secondcolor:#fcf3c7;\n}\n\n*{\n    padding: 0%;\n    margin: 0%;\n    box-sizing: border-box;\n}\n.hide{\n    display: none !important ;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    background-position: center;\n    background-color:rgba(0, 0, 0, 0.6);\n    background-blend-mode: darken;\n    box-sizing: border-box;\n}\nheader{\n    width: 100%;\n    height: 70px;\n    display:flex;\n    margin-right: auto;\n    padding: 20px;\n    background-color: rgba(0, 0, 0, 0.5);\n    align-items: center;\n\n     \n}\nnav{\n    display: flex;\n    gap: 8px;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n}\n#homebtn,\n#menubtn,\n#aboutbtn{\n    background-color: transparent;\n    padding: 10px 15px; \n    font-size: 1.3rem;\n    font-weight: 500;\n    text-align: center;\n    color: var(--secondcolor);\n    font-family: var(--secondaryFont);\n    transition: transform 0.1s ease;\n    border: none;\n}\n#homebtn:hover,\n#menubtn:hover,\n#aboutbtn:hover{\n    border-bottom: 1px solid var(--secondcolor);\n}\nfooter {\n    width: 100%; /* عرض كامل الشاشة */\n    height: 100px; /* ارتفاع معتدل */\n    background-color: rgba(0, 0, 0, 0.5); /* خلفية شبه شفافة أسود */\n    display: flex;\n    justify-content: center; /* تمركز أفقي */\n    align-items: center; /* تمركز عمودي */\n    gap: 20px; /* مسافة بين الأزرار */\n}\n\nfooter button {\n    background: none; /* بدون خلفية */\n    border: none; /* بدون حدود */\n    cursor: pointer; /* شكل المؤشر عند المرور */\n    padding: 0; /* إزالة المساحات الداخلية الافتراضية */\n    margin: 10px\n}\n\nfooter button svg {\n    fill: var(--secondcolor); /* لون الـ SVG */\n    width: 30px; /* حجم مناسب */\n    height: 30px; /* نفس الحجم عمودي */\n    transition: transform 0.3s; /* لإضافة تأثير عند المرور إذا أحببت */\n}\n\nfooter button:hover svg {\n    transform: scale(1.2); /* تكبير خفيف عند المرور */\n}\n\n#main{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n#homeinfo{\n    width: 50%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    text-align: start;\n}\n#main h1{\n    font-family: var(--mainFont);\n    font-weight: 700;\n    font-size: 3rem;\n    color: var(--secondcolor);\n}\n#main p{\n    font-family: var(--secondaryFont);\n    font-weight: 500;\n    font-size: 1.5rem;\n    color: var(--secondcolor);\n\n}\n#tomenu{\n    padding: 14px 10px;\n    border: none;\n    background-color: transparent;\n    color: var(--secondcolor);\n    font-weight: bold;\n    font-size: medium;\n    border-bottom: 2px solid var(--secondcolor);\n    border-top: 2px solid var(--secondcolor);\n    margin-right: auto;\n    margin-top: 20px;\n    font-family: var(--mainFont);\n}\n#tomenu:hover{\n    background-color: var(--secondcolor);\n    color: #2A3663;\n}\n#menu{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 0%;\n    justify-content: center;\n    align-items: center;\n}\n.middle{\n    height: 100%;\n    width: 100%;\n}\n#h1menu{\n    font-family: var(--mainFont);\n    font-weight: 700;\n    font-size: 2.5rem;\n    color: var(--secondcolor);\n    text-align: center;\n}\n#container{\n    height: 100%;\n    width: 70%;\n    display: grid !important;\n    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));\n    gap: 70px;\n    margin-left:auto;\n    margin-right: auto;\n    padding: 50px;\n   \n}\n\n.wrapper{\n    perspective: 3000px;\n}\n.card{\n    width: 100%;\n    height: 250px;\n    transform-style: preserve-3d;\n    transition: transform .8s ease-in-out;\n    cursor: pointer;\n    border: 1px solid #fcf3c792;\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2),\n    -5px -5px 10px rgba(0, 0, 0, 0.05);\n    border-radius: 15px;\n}\n\n.card:hover{\n    transform: rotateY(180deg);\n}\n.front-page,\n.back-page{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    border-radius: 15px;\n}\n\n.card-info{\n    position: relative;\n    /* inset: 0%; */\n    bottom: 80px;\n    /* left: 45px; */\n    color: var(--secondcolor);\n    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);\n    text-align: center;\n    height: auto;\n   \n}\n.card-title{\n    font-size: 1.4rem;\n    font-weight: bold;\n}\n.card-subtitle{\n    font-size: 1rem;\n    font-weight: 400;\n    margin-top: 5px;\n    color: var(--secondcolor);\n}\n.back-page{\n    background-color: #121627;\n    color: var(--secondcolor);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: rotateY(180deg);\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n.card-content{\n    text-align: center;\n    padding: 20px;\n    max-width: 300px;\n}\n.card-content h3{\n    font-size: 1rem;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n.card-description{\n    font-size: 1.2rem;\n    color:var(--secondcolor) ;\n    margin-top: 20px;\n    line-height: 1.6;\n}\n.card-button{\n    background-color: transparent;\n    color: var(--secondcolor);\n    font-size: 1rem;\n    padding: 12px 24px;\n    border: 1px solid var(--secondcolor);\n    cursor: pointer;\n    transition: all 0.3s ease;\n    color: var(--secondcolor);\n    margin-top: 25px;\n}\n\n.card-button:hover{\n    background-color: transparent;\n    color: var(--secondcolor);\n    border:  1px solid var(--secondcolor);\n}\n.front-page img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover; \n  border-radius: 15px;\n  filter: brightness(65%);\n}\n#about{\n    display: flex;\n    justify-content: center;\n    align-items: center; \n    min-height: calc(100vh - 120px); /* ارتفاع كامل الشاشة ناقص ارتفاع الهيدر والفوتر تقريبا */\n    padding: 20px;\n}\n/* ===================== About Container ===================== */\n.aboutcontainer {\n    display: flex;               /* خلي الديف يكون فليكس لسهولة المحاذاة */\n    justify-content: center;     /* نحط المحتوى بالمنتصف أفقياً */\n    align-items: center;         /* نحط المحتوى بالمنتصف عمودياً */\n    min-height: 70vh;            /* ارتفاع الديف يغطي جزء كبير من الشاشة بدون ما يكون كامل الهيدر والفوتر */\n    padding: 20px;               /* مساحة داخلية من كل الجهات */\n    background-color:/*  #fcf3c7da */transparent;   /* لون خلفية خفيف وراقي */\n}\n\n.about {\n    background-color: #fcf3c7da;   /* خلفية بيضاء للبطاقة */\n    padding: 30px 40px;          /* مساحة داخلية أكبر للبطاقة */\n    border-radius: 15px;         /* حواف دائرية ناعمة */\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* ظل بسيط يعطي إحساس بالارتفاع */\n    max-width: 600px;            /* أقصى عرض للبطاقة */\n    width: 100%;                 /* عرض كامل حتى يضبط على الشاشات الصغيرة */\n    text-align: center;           /* نصوص بالمنتصف */\n    transition: transform 0.3s ease, box-shadow 0.3s ease; /* تأثير عند hover */\n}\n\n.about:hover {\n    transform: translateY(-5px); /* رفع خفيف عند تمرير الفأرة */\n    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); /* تكبير الظل */\n}\n\n.about h2 {\n    font-family: var(--mainFont); /* خط أنيق */\n    font-weight: 700;                    /* ثقيل شوي */\n    font-size: 28px;                     /* حجم مناسب */\n    margin-bottom: 15px;                 /* مسافة تحت العنوان */\n    color: #2A3663;                         /* لون داكن للعنوان */\n}\n\n.about p {\n    font-family: var(--secondaryFont);\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.6;                   /* ارتفاع السطر لسهولة القراءة */\n    color: #2A3663;                        /* لون نص خفيف */\n    margin-bottom: 20px;\n}\n\n.about .links {\n    display: flex;\n    justify-content: center;             /* نحط الروابط بالمنتصف */\n    gap: 20px;                           /* مسافة بين كل رابط */\n    align-items: center;                 /* محاذاة الأيقونات مع النص */\n    font-family: var(--mainFont);\n    font-weight: 500;\n    color: #2A3663;\n}\n\n.about .links a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 45px;\n    height: 45px;\n    background-color:#faf4d8;\n    border-radius: 50%;                  /* شكل دائري للأيقونات */\n    transition: background-color 0.3s ease, transform 0.3s ease;\n    text-decoration: none;               /* إزالة الخط السفلي */\n    color: #2A3663;\n}\n\n.about .links a:hover {\n    background-color: #36467e;           /* تغيير لون عند hover */\n    transform: scale(1.1);               /* تكبير خفيف */\n    color: var(--secondcolor);\n}\n\n.about .links svg {\n    width: 24px;\n    height: 24px;\n    fill: currentColor;                  /* يأخذ لون النص */\n}\n\n/* ===================== Responsive ===================== */\n@media (max-width: 768px) {\n    .about {\n        padding: 20px 25px;\n    }\n\n    .about h2 {\n        font-size: 24px;\n    }\n\n    .about p {\n        font-size: 15px;\n    }\n\n    .about .links {\n        gap: 15px;\n    }\n\n    .about .links a {\n        width: 40px;\n        height: 40px;\n    }\n\n    .about .links svg {\n        width: 20px;\n        height: 20px;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout(){\n    const aboutcontent = document.getElementById(\"about\");\n    aboutcontent.innerHTML = `\n    <div class=\"aboutcontainer\">\n    <div class=\"about\">\n        <h2>About Us</h2>\n        <p>Italian dishes with a modern twist, focusing on high-quality ingredients and elegant presentation.</p>\n        <div class=\"links\">Book a meal:\n            <a href=\"#\" class=\"email\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                <title>email-multiple</title>\n                <path d=\"M22,6V4L14,9L6,4V6L14,11L22,6M22,2A2,2 0 0,1 24,4V16A2,2 0 0,1 22,18H6C4.89,18 4,17.1 4,16V4C4,2.89 4.89,2 6,2H22M2,6V20H20V22H2A2,2 0 0,1 0,20V6H2Z\" />\n            </svg></a>\n            <a href=\"#\" class=\"number\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n                    <title>phone</title>\n                    <path d=\"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z\" />\n            </svg></a>\n        </div>\n    </div>\n    </div>\n    `;\n}\n\n//# sourceURL=webpack://restaurantpage/./src/about.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n\nfunction loadHome() {\n    \n    const content = document.getElementById(\"main\");\n        content.innerHTML = `\n        <div id=\"homeinfo\">\n             <h1 id=\"h1main\">Bellavista</h1>\n             <p id=\"pmain\">At Bellavista, we transform dining into a full sensory experience. Using the finest Italian ingredients with contemporary touches, we create dishes that delight the senses. Whether it’s a romantic dinner, business meeting, or a moment to relax, our warm and elegant atmosphere ensures every visit feels special.</p>\n             <button  id=\"tomenu\">GO TO MENU</button>\n             </div>`;\n\n             \n    // هنا نضيف الـ listener للزر بعد إضافته\n    const tomenu = document.getElementById(\"tomenu\");\n    tomenu.addEventListener(\"click\", () => {\n        // هذا نفس اللي بصير لما تضغطين على menubtn\n        const menu = document.getElementById(\"menu\");\n        const main = document.getElementById(\"main\");\n        const about = document.getElementById(\"about\");\n\n        // استدعاء loadMenu إذا عندك\n        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./menu.js */ \"./src/menu.js\")).then(module => {\n            module.loadMenu();\n        });\n\n        // إظهار menu وإخفاء الباقي\n        main.classList.add(\"hide\");\n        menu.classList.remove(\"hide\");\n        about.classList.add(\"hide\");\n    });\n}\n\n\n                \n\n//# sourceURL=webpack://restaurantpage/./src/home.js?\n}");

/***/ }),

/***/ "./src/images/Gamberi.jpg":
/*!********************************!*\
  !*** ./src/images/Gamberi.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"1b1bc5e24f8a85878765.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Gamberi.jpg?\n}");

/***/ }),

/***/ "./src/images/Tagliata-steak.jpg":
/*!***************************************!*\
  !*** ./src/images/Tagliata-steak.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"c5077e8839498b716b61.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Tagliata-steak.jpg?\n}");

/***/ }),

/***/ "./src/images/Tagliatelle.jpg":
/*!************************************!*\
  !*** ./src/images/Tagliatelle.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"07ee3ce36947367a241e.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Tagliatelle.jpg?\n}");

/***/ }),

/***/ "./src/images/Tiramisu.jpg":
/*!*********************************!*\
  !*** ./src/images/Tiramisu.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"2f19af1c094e70c8fbfb.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Tiramisu.jpg?\n}");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"9dc1a24ea4d2f0d45953.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/pizza.jpg?\n}");

/***/ }),

/***/ "./src/images/restaurant-background.jpg":
/*!**********************************************!*\
  !*** ./src/images/restaurant-background.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"45f31b1d441baf7074ec.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/restaurant-background.jpg?\n}");

/***/ }),

/***/ "./src/images/risotto.jpg":
/*!********************************!*\
  !*** ./src/images/risotto.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"6957564baefb684e7913.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/risotto.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\nconst homebtn = document.getElementById(\"homebtn\");\nconst menubtn = document.getElementById(\"menubtn\");\nconst aboutbtn = document.getElementById(\"aboutbtn\");\nconst main = document.getElementById(\"main\");\nconst menu = document.getElementById(\"menu\");\nconst about = document.getElementById(\"about\");\nconst tomenu = document.getElementById(\"tomenu\");\n\n\n\n\n\n// دالة لإظهار قسم وإخفاء الباقي\nfunction showSection(sectionToShow) {\n    const sections = [main, menu, about];\n    sections.forEach(section => {\n        if(section === sectionToShow) {\n            section.classList.remove(\"hide\");\n        } else {\n            section.classList.add(\"hide\");\n        }\n    });\n}\n\n// أول مرة تظهر الهوم\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\nshowSection(main);\n\n// أزرار التبديل\nhomebtn.addEventListener(\"click\", () => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n    showSection(main);\n});\n\nmenubtn.addEventListener(\"click\", () => {\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\n    showSection(menu);\n});\n\naboutbtn.addEventListener(\"click\", () => {\n    (0,_about__WEBPACK_IMPORTED_MODULE_3__.loadAbout)();\n    showSection(about);\n});\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _images_risotto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/risotto.jpg */ \"./src/images/risotto.jpg\");\n/* harmony import */ var _images_Tagliata_steak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Tagliata-steak.jpg */ \"./src/images/Tagliata-steak.jpg\");\n/* harmony import */ var _images_Gamberi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Gamberi.jpg */ \"./src/images/Gamberi.jpg\");\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pizza.jpg */ \"./src/images/pizza.jpg\");\n/* harmony import */ var _images_Tagliatelle_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Tagliatelle.jpg */ \"./src/images/Tagliatelle.jpg\");\n/* harmony import */ var _images_Tiramisu_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/Tiramisu.jpg */ \"./src/images/Tiramisu.jpg\");\n\n\n\n\n\n\n\n\nfunction loadMenu(){\n    const menuContent = document.getElementById(\"menu\");\n    menuContent.innerHTML=`\n\n        <h1 id=\"h1menu\">MENU</h1>\n\n    <div id=\"container\">\n        <div class=\"wrapper\">\n            <div class=\"card\">\n                <div class=\"front-page\">\n                    <img src=\"${_images_risotto_jpg__WEBPACK_IMPORTED_MODULE_0__}\">\n                    <div class=\"card-info\">\n                        <h2 class=\"card-title\">Risotto al Tartufo</h2>\n                        <p class=\"card-subtitle\">$22</p>\n                    </div>\n                </div>\n\n                <div class=\"back-page\">\n                    <div class=\"card-content\">\n                        <h3></h3>\n                        <p class=\"card-description\">Creamy risotto with black truffle and Parmesan cheese shavings.</p>\n                        <button class=\"card-button\">Add to Order</button>\n                    </div class=\"card-content\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"wrapper\">\n            <div class=\"card\">\n                <div class=\"front-page\">\n                    <img src=\"${_images_Tagliata_steak_jpg__WEBPACK_IMPORTED_MODULE_1__}\">\n                    <div class=\"card-info\">\n                        <h2 class=\"card-title\">Tagliata di Manzo</h2>\n                        <p class=\"card-subtitle\">$28</p>\n                    </div>\n                </div>\n\n                <div class=\"back-page\">\n                    <div class=\"card-content\">\n                        <h3></h3>\n                        <p class=\"card-description\">Grilled beef slices with rosemary sauce and roasted potatoes.</p>\n                        <button class=\"card-button\">Add to Order</button>\n                    </div class=\"card-content\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"wrapper\">\n            <div class=\"card\">\n                <div class=\"front-page\">\n                    <img src=\"${_images_Gamberi_jpg__WEBPACK_IMPORTED_MODULE_2__}\">\n                    <div class=\"card-info\">\n                        <h2 class=\"card-title\">Gamberi alla Griglia</h2>\n                        <p class=\"card-subtitle\">$24</p>\n                    </div>\n                </div>\n\n                <div class=\"back-page\">\n                    <div class=\"card-content\">\n                        <h3></h3>\n                        <p class=\"card-description\">Grilled prawns with lemon-garlic sauce, served with green salad.</p>\n                        <button class=\"card-button\">Add to Order</button>\n                    </div class=\"card-content\">\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper\">\n            <div class=\"card\">\n                <div class=\"front-page\">\n                    <img src=\"${_images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__}\">\n                    <div class=\"card-info\">\n                        <h2 class=\"card-title\">Pizza Bianca</h2>\n                        <p class=\"card-subtitle\">$18</p>\n                    </div>\n                </div>\n\n                <div class=\"back-page\">\n                    <div class=\"card-content\">\n                        <h3></h3>\n                        <p class=\"card-description\">White pizza with Italian ham slices and fresh mozzarella.</p>\n                        <button class=\"card-button\">Add to Order</button>\n                    </div class=\"card-content\">\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper\">\n            <div class=\"card\">\n                <div class=\"front-page\">\n                    <img src=\"${_images_Tagliatelle_jpg__WEBPACK_IMPORTED_MODULE_4__}\">\n                    <div class=\"card-info\">\n                        <h2 class=\"card-title\">Tagliatelle al Salmone</h2>\n                        <p class=\"card-subtitle\">$24</p>\n                    </div>\n                </div>\n\n                <div class=\"back-page\">\n                    <div class=\"card-content\">\n                        <h3></h3>\n                        <p class=\"card-description\">Fresh tagliatelle with smoked cream sauce and smoked salmon pieces.</p>\n                        <button class=\"card-button\">Add to Order</button>\n                    </div class=\"card-content\">\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"wrapper\">\n            <div class=\"card\">\n                <div class=\"front-page\">\n                    <img src=\"${_images_Tiramisu_jpg__WEBPACK_IMPORTED_MODULE_5__}\">\n                    <div class=\"card-info\">\n                        <h2 class=\"card-title\">Tiramisu Classico</h2>\n                        <p class=\"card-subtitle\">$29</p>\n                    </div>\n                </div>\n\n                <div class=\"back-page\">\n                    <div class=\"card-content\">\n                        <h3></h3>\n                        <p class=\"card-description\">Authentic Italian tiramisu with espresso coffee and cocoa powder.</p>\n                        <button class=\"card-button\">Add to Order</button>\n                    </div class=\"card-content\">\n                </div>\n            </div>\n        </div>\n    </div>\n    `;\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;