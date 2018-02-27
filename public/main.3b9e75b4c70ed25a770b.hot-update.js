webpackHotUpdate("main",{

/***/ "./src/assets/js/components/WorldNews.jsx":
/*!************************************************!*\
  !*** ./src/assets/js/components/WorldNews.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _setNewState = __webpack_require__(/*! ../utils/setNewState */ \"./src/assets/js/utils/setNewState.js\");\n\nvar _setNewState2 = _interopRequireDefault(_setNewState);\n\nvar _BaseNews = __webpack_require__(/*! ./BaseNews.jsx */ \"./src/assets/js/components/BaseNews.jsx\");\n\nvar _BaseNews2 = _interopRequireDefault(_BaseNews);\n\nvar _news = __webpack_require__(/*! ../../img/news/news-4.png */ \"./src/assets/img/news/news-4.png\");\n\nvar _news2 = _interopRequireDefault(_news);\n\nvar _news3 = __webpack_require__(/*! ../../img/news/news-5.png */ \"./src/assets/img/news/news-5.png\");\n\nvar _news4 = _interopRequireDefault(_news3);\n\nvar _news5 = __webpack_require__(/*! ../../img/news/news-6.png */ \"./src/assets/img/news/news-6.png\");\n\nvar _news6 = _interopRequireDefault(_news5);\n\nvar _news7 = __webpack_require__(/*! ../../img/news/news-7.png */ \"./src/assets/img/news/news-7.png\");\n\nvar _news8 = _interopRequireDefault(_news7);\n\nvar _news9 = __webpack_require__(/*! ../../img/news/news-8.png */ \"./src/assets/img/news/news-8.png\");\n\nvar _news10 = _interopRequireDefault(_news9);\n\nvar _news11 = __webpack_require__(/*! ../../img/news/news-9.png */ \"./src/assets/img/news/news-9.png\");\n\nvar _news12 = _interopRequireDefault(_news11);\n\nvar _news13 = __webpack_require__(/*! ../../img/news/news-10.png */ \"./src/assets/img/news/news-10.png\");\n\nvar _news14 = _interopRequireDefault(_news13);\n\nvar _news15 = __webpack_require__(/*! ../../img/news/news-11.png */ \"./src/assets/img/news/news-11.png\");\n\nvar _news16 = _interopRequireDefault(_news15);\n\nvar _news17 = __webpack_require__(/*! ../../img/news/news-12.png */ \"./src/assets/img/news/news-12.png\");\n\nvar _news18 = _interopRequireDefault(_news17);\n\nvar _news19 = __webpack_require__(/*! ../../img/news/news-13.png */ \"./src/assets/img/news/news-13.png\");\n\nvar _news20 = _interopRequireDefault(_news19);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar WorldNews = function WorldNews(props) {\n\tvar firstColumn = [{\n\t\t0: 'news-4.png',\n\t\tclassElement: 'col-md-3',\n\t\tclassImg: 'h-medium',\n\t\tclassCard: ''\n\t}];\n\n\tvar firstColumnElements = props.worldElements.map(function (element, i) {\n\t\tvar imgName = element.img;\n\t\tvar name = imgName.split('.');\n\t\tvar elements = firstColumn.map(function (el, ind) {\n\t\t\tif (imgName === el[ind]) {\n\t\t\t\treturn _react2.default.createElement(_BaseNews2.default, {\n\t\t\t\t\tid: 'world-' + name[0],\n\t\t\t\t\tkey: i,\n\t\t\t\t\timgUrl: 'img/' + element.img,\n\t\t\t\t\ttitle: element.title,\n\t\t\t\t\tclassStyle: el.classElement,\n\t\t\t\t\tclassImg: el.classImg,\n\t\t\t\t\tclassCard: el.classCard,\n\t\t\t\t\tisVideo: element.isVideo\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\treturn elements;\n\t});\n\n\tvar secondColumn = [{\n\t\t0: 'news-5.png',\n\t\tclassElement: 'col-md-6 flex-row flex-md-column',\n\t\tclassImg: 'h-small',\n\t\tclassCard: 'col-6 col-md-12'\n\t}, {\n\t\t1: 'news-6.png',\n\t\tclassElement: 'col-md-6 d-none d-md-block',\n\t\tclassImg: 'h-small',\n\t\tclassCard: ''\n\t}, {\n\t\t2: 'news-7.png',\n\t\tclassElement: 'col-12 flex-row flex-md-column',\n\t\tclassImg: 'h-small',\n\t\tclassCard: 'col-6 col-md-12'\n\t}, {\n\t\t3: 'news-8.png',\n\t\tclassElement: 'col-12 flex-row flex-md-column',\n\t\tclassImg: 'h-small',\n\t\tclassCard: 'col-6 col-md-12'\n\t}];\n\n\tvar secondColumnElements = props.worldElements.map(function (element, i) {\n\t\tvar imgName = element.img;\n\t\tvar name = imgName.split('.');\n\t\tvar elements = secondColumn.map(function (el, ind) {\n\t\t\tif (imgName === el[ind]) {\n\t\t\t\treturn _react2.default.createElement(_BaseNews2.default, {\n\t\t\t\t\tkey: i,\n\t\t\t\t\tid: 'world-' + name[0],\n\t\t\t\t\timgUrl: 'img/' + element.img,\n\t\t\t\t\ttitle: element.title,\n\t\t\t\t\tclassStyle: el.classElement,\n\t\t\t\t\tclassImg: el.classImg,\n\t\t\t\t\tclassCard: el.classCard\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\treturn elements;\n\t});\n\n\tvar thirdColumn = [{\n\t\t0: 'news-9.png',\n\t\tclassElement: 'col-md-3 d-none d-md-block',\n\t\tclassImg: 'h-large',\n\t\tclassCard: ''\n\t}];\n\n\tvar thirdColumnElements = props.worldElements.map(function (element, i) {\n\t\tvar imgName = element.img;\n\t\tvar name = imgName.split('.');\n\t\tvar elements = thirdColumn.map(function (el, ind) {\n\t\t\tif (imgName === el[ind]) {\n\t\t\t\treturn _react2.default.createElement(_BaseNews2.default, {\n\t\t\t\t\tkey: i,\n\t\t\t\t\tid: 'world-' + name[0],\n\t\t\t\t\timgUrl: 'img/' + element.img,\n\t\t\t\t\ttitle: element.title,\n\t\t\t\t\tclassStyle: el.classElement,\n\t\t\t\t\tclassImg: el.classImg\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\treturn elements;\n\t});\n\n\tvar rowBotton = [{\n\t\t0: 'news-10.png',\n\t\tclassElement: 'col-md-3 d-none  d-md-block',\n\t\tclassImg: 'h-small'\n\t}, {\n\t\t1: 'news-11.png',\n\t\tclassElement: 'col-md-3 d-none d-md-block'\n\t}, {\n\t\t2: 'news-12.png',\n\t\tclassElement: 'col-md-3 d-none d-md-block'\n\t}, {\n\t\t3: 'news-13.png',\n\t\tclassElement: 'col-md-3 d-none d-md-block'\n\t}];\n\n\tvar rowBottonElements = props.worldElements.map(function (element, i) {\n\t\tvar imgName = element.img;\n\t\tvar name = imgName.split('.');\n\t\tvar elements = rowBotton.map(function (el, ind) {\n\t\t\tif (imgName === el[ind]) {\n\t\t\t\treturn _react2.default.createElement(_BaseNews2.default, {\n\t\t\t\t\tkey: i,\n\t\t\t\t\tid: 'world-' + name[0],\n\t\t\t\t\timgUrl: 'img/' + element.img,\n\t\t\t\t\ttitle: element.title,\n\t\t\t\t\tclassStyle: el.classElement,\n\t\t\t\t\tclassImg: el.classImg\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\treturn elements;\n\t});\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ id: 'world' },\n\t\t_react2.default.createElement(\n\t\t\t'h1',\n\t\t\tnull,\n\t\t\tprops.title\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'd-flex flex-wrap' },\n\t\t\tfirstColumnElements,\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'col-md-6 d-flex flex-wrap p-0' },\n\t\t\t\tsecondColumnElements\n\t\t\t),\n\t\t\tthirdColumnElements\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'd-flex flex-wrap' },\n\t\t\trowBottonElements\n\t\t)\n\t);\n};\n\nexports.default = WorldNews;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV29ybGROZXdzLmpzeD9kYTdhIl0sIm5hbWVzIjpbIldvcmxkTmV3cyIsInByb3BzIiwiZmlyc3RDb2x1bW4iLCJjbGFzc0VsZW1lbnQiLCJjbGFzc0ltZyIsImNsYXNzQ2FyZCIsImZpcnN0Q29sdW1uRWxlbWVudHMiLCJ3b3JsZEVsZW1lbnRzIiwibWFwIiwiZWxlbWVudCIsImkiLCJpbWdOYW1lIiwiaW1nIiwibmFtZSIsInNwbGl0IiwiZWxlbWVudHMiLCJlbCIsImluZCIsInRpdGxlIiwiaXNWaWRlbyIsInNlY29uZENvbHVtbiIsInNlY29uZENvbHVtbkVsZW1lbnRzIiwidGhpcmRDb2x1bW4iLCJ0aGlyZENvbHVtbkVsZW1lbnRzIiwicm93Qm90dG9uIiwicm93Qm90dG9uRWxlbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsS0FBTUMsY0FBYyxDQUNuQjtBQUNDLEtBQUcsWUFESjtBQUVDQyxnQkFBYyxVQUZmO0FBR0NDLFlBQVUsVUFIWDtBQUlDQyxhQUFXO0FBSlosRUFEbUIsQ0FBcEI7O0FBU0EsS0FBTUMsc0JBQXNCTCxNQUFNTSxhQUFOLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFELEVBQVVDLENBQVYsRUFBZ0I7QUFDbkUsTUFBTUMsVUFBVUYsUUFBUUcsR0FBeEI7QUFDQSxNQUFNQyxPQUFPRixRQUFRRyxLQUFSLENBQWMsR0FBZCxDQUFiO0FBQ0EsTUFBTUMsV0FBV2IsWUFBWU0sR0FBWixDQUFnQixVQUFDUSxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUM3QyxPQUFJTixZ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RixLQUFHLGFBREQ7QUFFRkEsZ0JBQWM7QUFGWixFQVJjLEVBV2Q7QUFDRixLQUFHLGFBREQ7QUFFRkEsZ0JBQWM7QUFGWixFQVhjLENBQWxCOztBQWlCQSxLQUFNc0Isb0JBQW9CeEIsTUFBTU0sYUFBTixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWLEVBQWdCO0FBQ2pFLE1BQU1DLFVBQVVGLFFBQVFHLEdBQXhCO0FBQ0EsTUFBTUMsT0FBT0YsUUFBUUcsS0FBUixDQUFjLEdBQWQsQ0FBYjtBQUNBLE1BQU1DLFdBQVdTLFVBQVVoQixHQUFWLENBQWMsVUFBQ1EsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDM0MsT0FBSU4sWUFBWUssR0FBR0MsR0FBSCxDQUFoQixFQUF5QjtBQUN4QixXQUNDO0FBQ0MsVUFBS1AsQ0FETjtBQUVDLG9CQUFhRyxLQUFLLENBQUwsQ0FGZDtBQUdDLHNCQUFlSixRQUFRRyxHQUh4QjtBQUlDLFlBQU9ILFFBQVFTLEtBSmhCO0FBS0MsaUJBQVlGLEdBQUdiLFlBTGhCO0FBTUMsZUFBVWEsR0FBR1o7QUFOZCxNQUREO0FBVUE7QUFDRCxHQWJnQixDQUFqQjtBQWNBLFNBQU9XLFFBQVA7QUFDQSxFQWxCeUIsQ0FBMUI7O0FBb0JBLFFBQ0M7QUFBQTtBQUFBLElBQUssSUFBRyxPQUFSO0FBQ0M7QUFBQTtBQUFBO0FBQUtkLFNBQU1pQjtBQUFYLEdBREQ7QUFFQztBQUFBO0FBQUEsS0FBSyxXQUFVLGtCQUFmO0FBQ0VaLHNCQURGO0FBRUM7QUFBQTtBQUFBLE1BQUssV0FBVSwrQkFBZjtBQUNFZTtBQURGLElBRkQ7QUFLRUU7QUFMRixHQUZEO0FBU0M7QUFBQTtBQUFBLEtBQUssV0FBVSxrQkFBZjtBQUNFRTtBQURGO0FBVEQsRUFERDtBQWVBLENBL0pEOztrQkFpS2V6QixTIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dvcmxkTmV3cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0IHNldE5ld1N0YXRlIGZyb20gJy4uL3V0aWxzL3NldE5ld1N0YXRlJztcclxuaW1wb3J0IEJhc2VOZXdzIGZyb20gJy4vQmFzZU5ld3MuanN4JztcclxuXHJcbmltcG9ydCBOZXdzNEltZyBmcm9tICcuLi8uLi9pbWcvbmV3cy9uZXdzLTQucG5nJztcclxuaW1wb3J0IE5ld3M1SW1nIGZyb20gJy4uLy4uL2ltZy9uZXdzL25ld3MtNS5wbmcnO1xyXG5pbXBvcnQgTmV3czZJbWcgZnJvbSAnLi4vLi4vaW1nL25ld3MvbmV3cy02LnBuZyc7XHJcbmltcG9ydCBOZXdzN0ltZyBmcm9tICcuLi8uLi9pbWcvbmV3cy9uZXdzLTcucG5nJztcclxuaW1wb3J0IE5ld3M4SW1nIGZyb20gJy4uLy4uL2ltZy9uZXdzL25ld3MtOC5wbmcnO1xyXG5pbXBvcnQgTmV3czlJbWcgZnJvbSAnLi4vLi4vaW1nL25ld3MvbmV3cy05LnBuZyc7XHJcbmltcG9ydCBOZXdzMTBJbWcgZnJvbSAnLi4vLi4vaW1nL25ld3MvbmV3cy0xMC5wbmcnO1xyXG5pbXBvcnQgTmV3czExSW1nIGZyb20gJy4uLy4uL2ltZy9uZXdzL25ld3MtMTEucG5nJztcclxuaW1wb3J0IE5ld3MxMkltZyBmcm9tICcuLi8uLi9pbWcvbmV3cy9uZXdzLTEyLnBuZyc7XHJcbmltcG9ydCBOZXdzMTNJbWcgZnJvbSAnLi4vLi4vaW1nL25ld3MvbmV3cy0xMy5wbmcnO1xyXG5cclxuY29uc3QgV29ybGROZXdzID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgZmlyc3RDb2x1bW4gPSBbXHJcblx0XHR7XHJcblx0XHRcdDA6ICduZXdzLTQucG5nJyxcclxuXHRcdFx0Y2xhc3NFbGVtZW50OiAnY29sLW1kLTMnLFxyXG5cdFx0XHRjbGFzc0ltZzogJ2gtbWVkaXVtJyxcclxuXHRcdFx0Y2xhc3NDYXJkOiAnJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgZmlyc3RDb2x1bW5FbGVtZW50cyA9IHByb3BzLndvcmxkRWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcblx0XHRjb25zdCBpbWdOYW1lID0gZWxlbWVudC5pbWc7XHJcblx0XHRjb25zdCBuYW1lID0gaW1nTmFtZS5zcGxpdCgnLicpO1xyXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBmaXJzdENvbHVtbi5tYXAoKGVsLCBpbmQpID0+IHtcclxuXHRcdFx0aWYgKGltZ05hbWUgPT09IGVsW2luZF0pIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PEJhc2VOZXdzXHJcblx0XHRcdFx0XHRcdGlkPXtgd29ybGQtJHtuYW1lWzBdfWB9XHJcblx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0aW1nVXJsPXtgaW1nLyR7ZWxlbWVudC5pbWd9YH1cclxuXHRcdFx0XHRcdFx0dGl0bGU9e2VsZW1lbnQudGl0bGV9XHJcblx0XHRcdFx0XHRcdGNsYXNzU3R5bGU9e2VsLmNsYXNzRWxlbWVudH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NJbWc9e2VsLmNsYXNzSW1nfVxyXG5cdFx0XHRcdFx0XHRjbGFzc0NhcmQ9e2VsLmNsYXNzQ2FyZH1cclxuXHRcdFx0XHRcdFx0aXNWaWRlbz17ZWxlbWVudC5pc1ZpZGVvfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBlbGVtZW50cztcclxuXHR9KTtcclxuXHJcblxyXG5cdGNvbnN0IHNlY29uZENvbHVtbiA9IFtcclxuXHRcdHtcclxuXHRcdFx0MDogJ25ld3MtNS5wbmcnLFxyXG5cdFx0XHRjbGFzc0VsZW1lbnQ6ICdjb2wtbWQtNiBmbGV4LXJvdyBmbGV4LW1kLWNvbHVtbicsXHJcblx0XHRcdGNsYXNzSW1nOiAnaC1zbWFsbCcsXHJcblx0XHRcdGNsYXNzQ2FyZDogJ2NvbC02IGNvbC1tZC0xMicsXHJcblx0XHR9LCB7XHJcblx0XHRcdDE6ICduZXdzLTYucG5nJyxcclxuXHRcdFx0Y2xhc3NFbGVtZW50OiAnY29sLW1kLTYgZC1ub25lIGQtbWQtYmxvY2snLFxyXG5cdFx0XHRjbGFzc0ltZzogJ2gtc21hbGwnLFxyXG5cdFx0XHRjbGFzc0NhcmQ6ICcnLFxyXG5cdFx0fSwge1xyXG5cdFx0XHQyOiAnbmV3cy03LnBuZycsXHJcblx0XHRcdGNsYXNzRWxlbWVudDogJ2NvbC0xMiBmbGV4LXJvdyBmbGV4LW1kLWNvbHVtbicsXHJcblx0XHRcdGNsYXNzSW1nOiAnaC1zbWFsbCcsXHJcblx0XHRcdGNsYXNzQ2FyZDogJ2NvbC02IGNvbC1tZC0xMicsXHJcblx0XHR9LCB7XHJcblx0XHRcdDM6ICduZXdzLTgucG5nJyxcclxuXHRcdFx0Y2xhc3NFbGVtZW50OiAnY29sLTEyIGZsZXgtcm93IGZsZXgtbWQtY29sdW1uJyxcclxuXHRcdFx0Y2xhc3NJbWc6ICdoLXNtYWxsJyxcclxuXHRcdFx0Y2xhc3NDYXJkOiAnY29sLTYgY29sLW1kLTEyJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3Qgc2Vjb25kQ29sdW1uRWxlbWVudHMgPSBwcm9wcy53b3JsZEVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xyXG5cdFx0Y29uc3QgaW1nTmFtZSA9IGVsZW1lbnQuaW1nO1xyXG5cdFx0Y29uc3QgbmFtZSA9IGltZ05hbWUuc3BsaXQoJy4nKTtcclxuXHRcdGNvbnN0IGVsZW1lbnRzID0gc2Vjb25kQ29sdW1uLm1hcCgoZWwsIGluZCkgPT4ge1xyXG5cdFx0XHRpZiAoaW1nTmFtZSA9PT0gZWxbaW5kXSkge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8QmFzZU5ld3NcclxuXHRcdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0XHRpZD17YHdvcmxkLSR7bmFtZVswXX1gfVxyXG5cdFx0XHRcdFx0XHRpbWdVcmw9e2BpbWcvJHtlbGVtZW50LmltZ31gfVxyXG5cdFx0XHRcdFx0XHR0aXRsZT17ZWxlbWVudC50aXRsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NTdHlsZT17ZWwuY2xhc3NFbGVtZW50fVxyXG5cdFx0XHRcdFx0XHRjbGFzc0ltZz17ZWwuY2xhc3NJbWd9XHJcblx0XHRcdFx0XHRcdGNsYXNzQ2FyZD17ZWwuY2xhc3NDYXJkfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBlbGVtZW50cztcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdGhpcmRDb2x1bW4gPSBbXHJcblx0XHR7XHJcblx0XHRcdDA6ICduZXdzLTkucG5nJyxcclxuXHRcdFx0Y2xhc3NFbGVtZW50OiAnY29sLW1kLTMgZC1ub25lIGQtbWQtYmxvY2snLFxyXG5cdFx0XHRjbGFzc0ltZzogJ2gtbGFyZ2UnLFxyXG5cdFx0XHRjbGFzc0NhcmQ6ICcnLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCB0aGlyZENvbHVtbkVsZW1lbnRzID0gcHJvcHMud29ybGRFbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHRcdGNvbnN0IGltZ05hbWUgPSBlbGVtZW50LmltZztcclxuXHRcdGNvbnN0IG5hbWUgPSBpbWdOYW1lLnNwbGl0KCcuJyk7XHJcblx0XHRjb25zdCBlbGVtZW50cyA9IHRoaXJkQ29sdW1uLm1hcCgoZWwsIGluZCkgPT4ge1xyXG5cdFx0XHRpZiAoaW1nTmFtZSA9PT0gZWxbaW5kXSkge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8QmFzZU5ld3NcclxuXHRcdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0XHRpZD17YHdvcmxkLSR7bmFtZVswXX1gfVxyXG5cdFx0XHRcdFx0XHRpbWdVcmw9e2BpbWcvJHtlbGVtZW50LmltZ31gfVxyXG5cdFx0XHRcdFx0XHR0aXRsZT17ZWxlbWVudC50aXRsZX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NTdHlsZT17ZWwuY2xhc3NFbGVtZW50fVxyXG5cdFx0XHRcdFx0XHRjbGFzc0ltZz17ZWwuY2xhc3NJbWd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGVsZW1lbnRzO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByb3dCb3R0b24gPSBbXHJcblx0XHR7XHJcblx0XHRcdDA6ICduZXdzLTEwLnBuZycsXHJcblx0XHRcdGNsYXNzRWxlbWVudDogJ2NvbC1tZC0zIGQtbm9uZSAgZC1tZC1ibG9jaycsXHJcblx0XHRcdGNsYXNzSW1nOiAnaC1zbWFsbCcsXHJcblx0XHR9LCB7XHJcblx0XHRcdDE6ICduZXdzLTExLnBuZycsXHJcblx0XHRcdGNsYXNzRWxlbWVudDogJ2NvbC1tZC0zIGQtbm9uZSBkLW1kLWJsb2NrJyxcclxuXHRcdH0sIHtcclxuXHRcdFx0MjogJ25ld3MtMTIucG5nJyxcclxuXHRcdFx0Y2xhc3NFbGVtZW50OiAnY29sLW1kLTMgZC1ub25lIGQtbWQtYmxvY2snLFxyXG5cdFx0fSwge1xyXG5cdFx0XHQzOiAnbmV3cy0xMy5wbmcnLFxyXG5cdFx0XHRjbGFzc0VsZW1lbnQ6ICdjb2wtbWQtMyBkLW5vbmUgZC1tZC1ibG9jaycsXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHJvd0JvdHRvbkVsZW1lbnRzID0gcHJvcHMud29ybGRFbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHRcdGNvbnN0IGltZ05hbWUgPSBlbGVtZW50LmltZztcclxuXHRcdGNvbnN0IG5hbWUgPSBpbWdOYW1lLnNwbGl0KCcuJyk7XHJcblx0XHRjb25zdCBlbGVtZW50cyA9IHJvd0JvdHRvbi5tYXAoKGVsLCBpbmQpID0+IHtcclxuXHRcdFx0aWYgKGltZ05hbWUgPT09IGVsW2luZF0pIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PEJhc2VOZXdzXHJcblx0XHRcdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRcdFx0aWQ9e2B3b3JsZC0ke25hbWVbMF19YH1cclxuXHRcdFx0XHRcdFx0aW1nVXJsPXtgaW1nLyR7ZWxlbWVudC5pbWd9YH1cclxuXHRcdFx0XHRcdFx0dGl0bGU9e2VsZW1lbnQudGl0bGV9XHJcblx0XHRcdFx0XHRcdGNsYXNzU3R5bGU9e2VsLmNsYXNzRWxlbWVudH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NJbWc9e2VsLmNsYXNzSW1nfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBlbGVtZW50cztcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgaWQ9J3dvcmxkJz5cclxuXHRcdFx0PGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtd3JhcCc+XHJcblx0XHRcdFx0e2ZpcnN0Q29sdW1uRWxlbWVudHN9XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IGQtZmxleCBmbGV4LXdyYXAgcC0wJz5cclxuXHRcdFx0XHRcdHtzZWNvbmRDb2x1bW5FbGVtZW50c31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7dGhpcmRDb2x1bW5FbGVtZW50c31cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC13cmFwJz5cclxuXHRcdFx0XHR7cm93Qm90dG9uRWxlbWVudHN9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmxkTmV3czsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/components/WorldNews.jsx\n");

/***/ })

})