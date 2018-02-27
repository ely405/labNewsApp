webpackHotUpdate("main",{

/***/ "./src/assets/js/components/LatestNewsSection.jsx":
/*!********************************************************!*\
  !*** ./src/assets/js/components/LatestNewsSection.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _setNewState = __webpack_require__(/*! ../utils/setNewState */ \"./src/assets/js/utils/setNewState.js\");\n\nvar _setNewState2 = _interopRequireDefault(_setNewState);\n\nvar _BaseNews = __webpack_require__(/*! ./BaseNews.jsx */ \"./src/assets/js/components/BaseNews.jsx\");\n\nvar _BaseNews2 = _interopRequireDefault(_BaseNews);\n\nvar _news = __webpack_require__(/*! ../../img/news/news-0.png */ \"./src/assets/img/news/news-0.png\");\n\nvar _news2 = _interopRequireDefault(_news);\n\nvar _news3 = __webpack_require__(/*! ../../img/news/news-1.png */ \"./src/assets/img/news/news-1.png\");\n\nvar _news4 = _interopRequireDefault(_news3);\n\nvar _news5 = __webpack_require__(/*! ../../img/news/news-2.png */ \"./src/assets/img/news/news-2.png\");\n\nvar _news6 = _interopRequireDefault(_news5);\n\nvar _news7 = __webpack_require__(/*! ../../img/news/news-3.png */ \"./src/assets/img/news/news-3.png\");\n\nvar _news8 = _interopRequireDefault(_news7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LatestNewsSection = function LatestNewsSection() {\n\tvar clases = [{\n\t\t0: 'news-0.png',\n\t\tclassElement: 'col-12',\n\t\tclassImg: 'h-medium',\n\t\tclassCard: 'col-md-8 position-absolute',\n\t\tclassBrief: 'col-md-10 d-none d-md-block'\n\t}, {\n\t\t1: 'news-1.png',\n\t\tclassElement: 'col-md-6',\n\t\tclassImg: 'h-medium',\n\t\tclassCard: ''\n\t}, {\n\t\t2: 'news-2.png',\n\t\tclassElement: 'col-md-3 flex-row flex-md-column',\n\t\tclassImg: 'h-small',\n\t\tclassCard: 'col-6 col-md-12'\n\t}, {\n\t\t3: 'news-3.png',\n\t\tclassElement: 'col-md-3 flex-row flex-md-column',\n\t\tclassImg: 'h-small',\n\t\tclassCard: 'col-6 col-md-12'\n\t}];\n\tvar eachNewsComponent = undefined.props.latestElements.map(function (element, i) {\n\t\tvar imgName = element.img;\n\t\tvar name = imgName.split('.');\n\t\tvar elements = clases.map(function (el, ind) {\n\t\t\tif (imgName === el[ind]) {\n\t\t\t\treturn _react2.default.createElement(_BaseNews2.default, {\n\t\t\t\t\tid: 'latest-' + name[0],\n\t\t\t\t\tkey: i,\n\t\t\t\t\timgUrl: 'img/' + element.img,\n\t\t\t\t\ttitle: element.title,\n\t\t\t\t\tclassStyle: el.classElement,\n\t\t\t\t\tclassImg: el.classImg,\n\t\t\t\t\tclassCard: el.classCard,\n\t\t\t\t\tclassBrief: el.classBrief,\n\t\t\t\t\tisVideo: element.isVideo,\n\t\t\t\t\thasBrief: element.brief\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\treturn elements;\n\t});\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'd-flex flex-wrap', id: 'loUltimo' },\n\t\teachNewsComponent\n\t);\n};\n\nexports.default = LatestNewsSection;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTGF0ZXN0TmV3c1NlY3Rpb24uanN4PzFmZTAiXSwibmFtZXMiOlsiTGF0ZXN0TmV3c1NlY3Rpb24iLCJjbGFzZXMiLCJjbGFzc0VsZW1lbnQiLCJjbGFzc0ltZyIsImNsYXNzQ2FyZCIsImNsYXNzQnJpZWYiLCJlYWNoTmV3c0NvbXBvbmVudCIsInByb3BzIiwibGF0ZXN0RWxlbWVudHMiLCJtYXAiLCJlbGVtZW50IiwiaSIsImltZ05hbWUiLCJpbWciLCJuYW1lIiwic3BsaXQiLCJlbGVtZW50cyIsImVsIiwiaW5kIiwidGl0bGUiLCJpc1ZpZGVvIiwiYnJpZWYiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixTQUFwQkEsaUJBQW9CLEdBQU07QUFDL0IsS0FBTUMsU0FBUyxDQUNkO0FBQ0UsS0FBRyxZQURMO0FBRUVDLGdCQUFjLFFBRmhCO0FBR0VDLFlBQVUsVUFIWjtBQUlDQyxhQUFXLDRCQUpaO0FBS0NDLGNBQVk7QUFMYixFQURjLEVBT1g7QUFDRixLQUFHLFlBREQ7QUFFRkgsZ0JBQWMsVUFGWjtBQUdGQyxZQUFVLFVBSFI7QUFJRkMsYUFBVztBQUpULEVBUFcsRUFhZDtBQUNDLEtBQUcsWUFESjtBQUVDRixnQkFBYyxrQ0FGZjtBQUdDQyxZQUFVLFNBSFg7QUFJQ0MsYUFBVztBQUpaLEVBYmMsRUFtQmQ7QUFDQyxLQUFHLFlBREo7QUFFQ0YsZ0JBQWMsa0NBRmY7QUFHQ0MsWUFBVSxTQUhYO0FBSUNDLGFBQVc7QUFKWixFQW5CYyxDQUFmO0FBMEJBLEtBQU1FLG9CQUFvQixVQUFLQyxLQUFMLENBQVdDLGNBQVgsQ0FBMEJDLEdBQTFCLENBQThCLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUN2RSxNQUFNQyxVQUFVRixRQUFRRyxHQUF4QjtBQUNBLE1BQU1DLE9BQU9GLFFBQVFHLEtBQVIsQ0FBYyxHQUFkLENBQWI7QUFDQSxNQUFNQyxXQUFXZixPQUFPUSxHQUFQLENBQVcsVUFBQ1EsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDeEMsT0FBSU4sWUFBWUssR0FBR0MsR0FBSCxDQUFoQixFQUF5QjtBQUN4QixXQUFPO0FBQ04scUJBQWNKLEtBQUssQ0FBTCxDQURSO0FBRU4sVUFBS0gsQ0FGQztBQUdOLHNCQUFlRCxRQUFRRyxHQUhqQjtBQUlOLFlBQU9ILFFBQVFTLEtBSlQ7QUFLTixpQkFBWUYsR0FBR2YsWUFMVDtBQU1OLGVBQVVlLEdBQUdkLFFBTlA7QUFPTixnQkFBV2MsR0FBR2IsU0FQUjtBQVFOLGlCQUFZYSxHQUFHWixVQVJUO0FBU04sY0FBU0ssUUFBUVUsT0FUWDtBQVVOLGVBQVVWLFFBQVFXO0FBVlosTUFBUDtBQVlBO0FBQ0QsR0FmZ0IsQ0FBakI7QUFnQkEsU0FBT0wsUUFBUDtBQUNBLEVBcEJ5QixDQUExQjtBQXFCQSxRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsa0JBQWYsRUFBa0MsSUFBRyxVQUFyQztBQUNFVjtBQURGLEVBREQ7QUFLQSxDQXJERDs7a0JBdURlTixpQiIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9MYXRlc3ROZXdzU2VjdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0IHNldE5ld1N0YXRlIGZyb20gJy4uL3V0aWxzL3NldE5ld1N0YXRlJztcclxuaW1wb3J0IEJhc2VOZXdzIGZyb20gJy4vQmFzZU5ld3MuanN4JztcclxuXHJcbmltcG9ydCBNaXRCdXNjYUltZyBmcm9tICcuLi8uLi9pbWcvbmV3cy9uZXdzLTAucG5nJztcclxuaW1wb3J0IFN0YW5mb3JkVW5pdmVyc2l0eUltZyBmcm9tICcuLi8uLi9pbWcvbmV3cy9uZXdzLTEucG5nJztcclxuaW1wb3J0IFRlY2hTdGFydHVwSW1nIGZyb20gJy4uLy4uL2ltZy9uZXdzL25ld3MtMi5wbmcnO1xyXG5pbXBvcnQgVm9sdW50ZWVyc0ZvckVkdWNhdGlvbkltZyBmcm9tICcuLi8uLi9pbWcvbmV3cy9uZXdzLTMucG5nJztcclxuXHJcbmNvbnN0IExhdGVzdE5ld3NTZWN0aW9uID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNsYXNlcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0IDA6ICduZXdzLTAucG5nJyxcclxuXHRcdFx0IGNsYXNzRWxlbWVudDogJ2NvbC0xMicsXHJcblx0XHRcdCBjbGFzc0ltZzogJ2gtbWVkaXVtJyxcclxuXHRcdFx0Y2xhc3NDYXJkOiAnY29sLW1kLTggcG9zaXRpb24tYWJzb2x1dGUnLFxyXG5cdFx0XHRjbGFzc0JyaWVmOiAnY29sLW1kLTEwIGQtbm9uZSBkLW1kLWJsb2NrJyxcclxuXHRcdH0sIHtcclxuXHRcdFx0MTogJ25ld3MtMS5wbmcnLFxyXG5cdFx0XHRjbGFzc0VsZW1lbnQ6ICdjb2wtbWQtNicsXHJcblx0XHRcdGNsYXNzSW1nOiAnaC1tZWRpdW0nLFxyXG5cdFx0XHRjbGFzc0NhcmQ6ICcnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0MjogJ25ld3MtMi5wbmcnLFxyXG5cdFx0XHRjbGFzc0VsZW1lbnQ6ICdjb2wtbWQtMyBmbGV4LXJvdyBmbGV4LW1kLWNvbHVtbicsXHJcblx0XHRcdGNsYXNzSW1nOiAnaC1zbWFsbCcsXHJcblx0XHRcdGNsYXNzQ2FyZDogJ2NvbC02IGNvbC1tZC0xMicsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHQzOiAnbmV3cy0zLnBuZycsXHJcblx0XHRcdGNsYXNzRWxlbWVudDogJ2NvbC1tZC0zIGZsZXgtcm93IGZsZXgtbWQtY29sdW1uJyxcclxuXHRcdFx0Y2xhc3NJbWc6ICdoLXNtYWxsJyxcclxuXHRcdFx0Y2xhc3NDYXJkOiAnY29sLTYgY29sLW1kLTEyJyxcclxuXHRcdH0sXHJcblx0XTtcclxuXHRjb25zdCBlYWNoTmV3c0NvbXBvbmVudCA9IHRoaXMucHJvcHMubGF0ZXN0RWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XHJcblx0XHRjb25zdCBpbWdOYW1lID0gZWxlbWVudC5pbWc7XHJcblx0XHRjb25zdCBuYW1lID0gaW1nTmFtZS5zcGxpdCgnLicpO1xyXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBjbGFzZXMubWFwKChlbCwgaW5kKSA9PiB7XHJcblx0XHRcdGlmIChpbWdOYW1lID09PSBlbFtpbmRdKSB7XHJcblx0XHRcdFx0cmV0dXJuIDxCYXNlTmV3c1xyXG5cdFx0XHRcdFx0aWQ9e2BsYXRlc3QtJHtuYW1lWzBdfWB9XHJcblx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRpbWdVcmw9e2BpbWcvJHtlbGVtZW50LmltZ31gfVxyXG5cdFx0XHRcdFx0dGl0bGU9e2VsZW1lbnQudGl0bGV9XHJcblx0XHRcdFx0XHRjbGFzc1N0eWxlPXtlbC5jbGFzc0VsZW1lbnR9XHJcblx0XHRcdFx0XHRjbGFzc0ltZz17ZWwuY2xhc3NJbWd9XHJcblx0XHRcdFx0XHRjbGFzc0NhcmQ9e2VsLmNsYXNzQ2FyZH1cclxuXHRcdFx0XHRcdGNsYXNzQnJpZWY9e2VsLmNsYXNzQnJpZWZ9XHJcblx0XHRcdFx0XHRpc1ZpZGVvPXtlbGVtZW50LmlzVmlkZW99XHJcblx0XHRcdFx0XHRoYXNCcmllZj17ZWxlbWVudC5icmllZn1cclxuXHRcdFx0XHQvPjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZWxlbWVudHM7XHJcblx0fSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC13cmFwJyBpZD0nbG9VbHRpbW8nPlxyXG5cdFx0XHR7ZWFjaE5ld3NDb21wb25lbnR9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0TmV3c1NlY3Rpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/components/LatestNewsSection.jsx\n");

/***/ })

})