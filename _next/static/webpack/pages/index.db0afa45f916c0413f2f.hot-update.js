webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TeamCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/fernandoferrufino/Library/CloudStorage/OneDrive-ThompsonRiversUniversity/University/Main Page/Aurora/src/components/team-card.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\nfunction TeamCard(_ref) {\n  var _this = this;\n\n  var src = _ref.src,\n      altText = _ref.altText,\n      title = _ref.title,\n      designation = _ref.designation,\n      social = _ref.social;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: src,\n    alt: altText,\n    sx: styles.memberThumb,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.infoWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    className: \"info__name\",\n    sx: styles.infoWrapper.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    className: \"info__designation\",\n    sx: styles.infoWrapper.designation,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.socialShare,\n    className: \"social__share\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, social.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      key: item.id,\n      href: item.path,\n      className: item.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }, item.icon);\n  })));\n}\n_c = TeamCard;\nvar styles = {\n  card: {\n    display: 'flex',\n    alignItems: 'center',\n    flexDirection: 'column',\n    py: [0, null, 4, 5, 6],\n    px: [2, null, 6, 7],\n    transition: 'ease-in-out 0.4s',\n    borderRadius: '8px',\n    position: 'relative',\n    '&:hover': {\n      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],\n      '.info__name': {\n        color: 'primary'\n      },\n      '.info__designation': {\n        color: 'primary'\n      },\n      '.social__share': {\n        opacity: 1,\n        a: {\n          my: 0,\n          py: [0, null, 1]\n        }\n      }\n    }\n  },\n  memberThumb: {\n    width: ['70px', '80px', '100px', null, null, '130px'],\n    height: ['70px', '80px', '100px', null, null, '130px'],\n    flexShrink: 0,\n    border: '2px solid',\n    borderColor: 'primary',\n    borderRadius: '50%'\n  },\n  infoWrapper: {\n    width: '100%',\n    textAlign: 'center',\n    mt: [3, null, 4],\n    name: {\n      fontSize: [1, 2, 3, null, null, 4],\n      fontWeight: 'bold',\n      lineHeight: [1.25, 1.35],\n      transition: 'color 0.25s',\n      mb: 1\n    },\n    designation: {\n      fontSize: ['14px', null, null, 2],\n      fontWeight: 'body',\n      lineHeight: 'heading',\n      color: 'text',\n      transition: 'color 0.25s'\n    }\n  },\n  socialShare: {\n    position: ['relative', null, 'absolute'],\n    right: [0, null, 6, null, 4, 6],\n    bottom: [0, null, '18px', 5],\n    width: ['100%', null, 'auto'],\n    display: 'flex',\n    flexDirection: ['row', null, 'column'],\n    alignItems: 'center',\n    justifyContent: 'center',\n    transition: 'all 0.25s',\n    opacity: [1, null, 0],\n    pt: 2,\n    a: {\n      fontSize: [0, 1, null, 2],\n      color: ['text', null, 'primary'],\n      lineHeight: '1em',\n      my: [0, null, '-2px'],\n      px: 1,\n      transition: 'all 0.25s',\n      '&:hover': {\n        color: ['primary', null, 'text']\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"TeamCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzPzNiMzkiXSwibmFtZXMiOlsiVGVhbUNhcmQiLCJzcmMiLCJhbHRUZXh0IiwidGl0bGUiLCJkZXNpZ25hdGlvbiIsInNvY2lhbCIsInN0eWxlcyIsImNhcmQiLCJtZW1iZXJUaHVtYiIsImluZm9XcmFwcGVyIiwibmFtZSIsInNvY2lhbFNoYXJlIiwibWFwIiwiaXRlbSIsImlkIiwicGF0aCIsImljb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInJpZ2h0IiwiYm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBOztBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDN0UsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVB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LENBQUosRUFBTyxJQUFQLEVBQWEsQ0FBYixDQURUO0FBRURYLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsU0FBZixDQUZOO0FBR0RhLGdCQUFVLEVBQUUsS0FIWDtBQUlEVixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsQ0FKSDtBQUtEUixRQUFFLEVBQUUsQ0FMSDtBQU1EQyxnQkFBVSxFQUFFLFdBTlg7QUFPRCxpQkFBVztBQUNUSSxhQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksSUFBWixFQUFrQixNQUFsQjtBQURFO0FBUFY7QUFaUTtBQXZEQSxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLm1lbWJlclRodW1ifS8+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaW5mb1dyYXBwZXJ9PlxuICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJpbmZvX19uYW1lXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5uYW1lfT5cbiAgICAgICAgICB7dGl0bGV9XG5cbiAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImluZm9fX2Rlc2lnbmF0aW9uXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5kZXNpZ25hdGlvbn0+XG4gICAgICAgICAge2Rlc2lnbmF0aW9ufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbFNoYXJlfSBjbGFzc05hbWU9XCJzb2NpYWxfX3NoYXJlXCI+XG4gICAgICAgICAge3NvY2lhbC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gaHJlZj17aXRlbS5wYXRofSBjbGFzc05hbWUgPSB7aXRlbS5uYW1lfT5cbiAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcHk6IFswLCBudWxsLCA0LCA1LCA2XSxcbiAgICBweDogWzIsIG51bGwsIDYsIDddLFxuICAgIHRyYW5zaXRpb246ICdlYXNlLWluLW91dCAwLjRzJyxcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiBbJ25vbmUnLCBudWxsLCAnMCA0cHggMTBweCByZ2JhKDM5LCA4MywgMTIzLCAwLjEyKSddLFxuICAgICAgJy5pbmZvX19uYW1lJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcuaW5mb19fZGVzaWduYXRpb24nOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJy5zb2NpYWxfX3NoYXJlJzoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBhOiB7XG4gICAgICAgICAgbXk6IDAsXG4gICAgICAgICAgcHk6IFswLCBudWxsLCAxXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtZW1iZXJUaHVtYjoge1xuICAgIHdpZHRoOiBbJzcwcHgnLCAnODBweCcsICcxMDBweCcsIG51bGwsIG51bGwsICcxMzBweCddLFxuICAgIGhlaWdodDogWyc3MHB4JywgJzgwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXG4gICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBpbmZvV3JhcHBlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtdDogWzMsIG51bGwsIDRdLFxuICAgIG5hbWU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS4zNV0sXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxuICAgICAgbWI6IDEsXG4gICAgfSxcbiAgICBkZXNpZ25hdGlvbjoge1xuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXG4gICAgfSxcbiAgfSxcbiAgc29jaWFsU2hhcmU6IHtcbiAgICBwb3NpdGlvbjogWydyZWxhdGl2ZScsIG51bGwsICdhYnNvbHV0ZSddLFxuICAgIHJpZ2h0OiBbMCwgbnVsbCwgNiwgbnVsbCwgNCwgNl0sXG4gICAgYm90dG9tOiBbMCwgbnVsbCwgJzE4cHgnLCA1XSxcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJ2F1dG8nXSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogWydyb3cnLCBudWxsLCAnY29sdW1uJ10sXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgIG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcbiAgICBwdDogMixcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxuICAgICAgY29sb3I6IFsndGV4dCcsIG51bGwsICdwcmltYXJ5J10sXG4gICAgICBsaW5lSGVpZ2h0OiAnMWVtJyxcbiAgICAgIG15OiBbMCwgbnVsbCwgJy0ycHgnXSxcbiAgICAgIHB4OiAxLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IFsncHJpbWFyeScsIG51bGwsICd0ZXh0J10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/team-card.js\n");

/***/ })

})