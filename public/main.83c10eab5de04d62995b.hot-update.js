webpackHotUpdate("main",{

/***/ "./src/assets/js/components/Carousel.jsx":
/*!***********************************************!*\
  !*** ./src/assets/js/components/Carousel.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _BaseNews = __webpack_require__(/*! ./BaseNews.jsx */ \"./src/assets/js/components/BaseNews.jsx\");\n\nvar _BaseNews2 = _interopRequireDefault(_BaseNews);\n\nvar _news = __webpack_require__(/*! ../../img/news/news-29.png */ \"./src/assets/img/news/news-29.png\");\n\nvar _news2 = _interopRequireDefault(_news);\n\nvar _news3 = __webpack_require__(/*! ../../img/news/news-30.png */ \"./src/assets/img/news/news-30.png\");\n\nvar _news4 = _interopRequireDefault(_news3);\n\nvar _news5 = __webpack_require__(/*! ../../img/news/news-31.png */ \"./src/assets/img/news/news-31.png\");\n\nvar _news6 = _interopRequireDefault(_news5);\n\nvar _news7 = __webpack_require__(/*! ../../img/news/news-32.png */ \"./src/assets/img/news/news-32.png\");\n\nvar _news8 = _interopRequireDefault(_news7);\n\nvar _flecha = __webpack_require__(/*! ../../img/flecha1.png */ \"./src/assets/img/flecha1.png\");\n\nvar _flecha2 = _interopRequireDefault(_flecha);\n\nvar _flecha3 = __webpack_require__(/*! ../../img/flecha2.png */ \"./src/assets/img/flecha2.png\");\n\nvar _flecha4 = _interopRequireDefault(_flecha3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Carousel = function Carousel(props) {\n\t(0, _jquery2.default)('#carouselNews').on('slide.bs.carousel', function (e) {\n\t\tvar carouselElement = (0, _jquery2.default)(e.relatedTarget);\n\t\tvar idElement = carouselElement.index();\n\t\tvar itemsPerSlide = 3;\n\t\tvar totalItems = (0, _jquery2.default)('.carousel-item').length;\n\n\t\tif (idElement >= totalItems - (itemsPerSlide - 1)) {\n\t\t\tvar it = itemsPerSlide - (totalItems - idElement);\n\t\t\tfor (var i = 0; i < it; i++) {\n\t\t\t\t// append slides to end\n\t\t\t\tif (e.direction == 'left') {\n\t\t\t\t\t(0, _jquery2.default)('.carousel-item').eq(i).appendTo('.carousel-inner');\n\t\t\t\t} else {\n\t\t\t\t\t(0, _jquery2.default)('.carousel-item').eq(0).appendTo('.carousel-inner');\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n\n\tvar itemsDeatil = [{\n\t\t0: 'news-29.png',\n\t\tclassElement: 'carousel-item col-md-4 active',\n\t\tclassImg: ''\n\t}, {\n\t\t1: 'news-30.png',\n\t\tclassElement: 'carousel-item col-md-4',\n\t\tclassImg: ''\n\t}, {\n\t\t2: 'news-31.png',\n\t\tclassElement: 'carousel-item col-md-4',\n\t\tclassImg: ''\n\t}, {\n\t\t3: 'news-32.png',\n\t\tclassElement: 'carousel-item col-md-4',\n\t\tclassImg: ''\n\t}];\n\n\tvar carouselItems = props.carouselElements.map(function (element, i) {\n\t\tvar imgName = element.img;\n\t\tvar elements = itemsDeatil.map(function (el, ind) {\n\t\t\tif (imgName === el[ind]) {\n\t\t\t\treturn _react2.default.createElement(_BaseNews2.default, {\n\t\t\t\t\tkey: i,\n\t\t\t\t\timgUrl: 'img/' + element.img,\n\t\t\t\t\ttitle: element.title,\n\t\t\t\t\tclassStyle: el.classElement,\n\t\t\t\t\tclassImg: el.classImg,\n\t\t\t\t\tisVideo: element.isVideo\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\treturn elements;\n\t});\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\t{ className: 'container-fluid d-none d-sm-block p-0' },\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ id: 'carouselNews', className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': '9000' },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'carousel-inner row w-100 mx-auto', role: 'listbox' },\n\t\t\t\tcarouselItems\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ className: 'carousel-control-prev', href: '#carouselNews', role: 'button', 'data-slide': 'prev' },\n\t\t\t\t_react2.default.createElement('img', { src: _flecha2.default, alt: 'Flecha hacia la izquierda' }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'sr-only' },\n\t\t\t\t\t'Previous'\n\t\t\t\t)\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'a',\n\t\t\t\t{ className: 'carousel-control-next text-faded', href: '#carouselNews', role: 'button', 'data-slide': 'next' },\n\t\t\t\t_react2.default.createElement('img', { src: _flecha4.default, alt: 'Flecha hacia la derecha' }),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'span',\n\t\t\t\t\t{ className: 'sr-only' },\n\t\t\t\t\t'Next'\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n};\n\nexports.default = Carousel;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4PzMzYTUiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJwcm9wcyIsIm9uIiwiZSIsImNhcm91c2VsRWxlbWVudCIsInJlbGF0ZWRUYXJnZXQiLCJpZEVsZW1lbnQiLCJpbmRleCIsIml0ZW1zUGVyU2xpZGUiLCJ0b3RhbEl0ZW1zIiwibGVuZ3RoIiwiaXQiLCJpIiwiZGlyZWN0aW9uIiwiZXEiLCJhcHBlbmRUbyIsIml0ZW1zRGVhdGlsIiwiY2xhc3NFbGVtZW50IiwiY2xhc3NJbWciLCJjYXJvdXNlbEl0ZW1zIiwiY2Fyb3VzZWxFbGVtZW50cyIsIm1hcCIsImVsZW1lbnQiLCJpbWdOYW1lIiwiaW1nIiwiZWxlbWVudHMiLCJlbCIsImluZCIsInRpdGxlIiwiaXNWaWRlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLHVCQUFFLGVBQUYsRUFBbUJDLEVBQW5CLENBQXNCLG1CQUF0QixFQUEyQyxVQUFDQyxDQUFELEVBQU87QUFDakQsTUFBTUMsa0JBQWtCLHNCQUFFRCxFQUFFRSxhQUFKLENBQXhCO0FBQ0EsTUFBTUMsWUFBWUYsZ0JBQWdCRyxLQUFoQixFQUFsQjtBQUNBLE1BQU1DLGdCQUFnQixDQUF0QjtBQUNBLE1BQU1DLGFBQWEsc0JBQUUsZ0JBQUYsRUFBb0JDLE1BQXZDOztBQUVBLE1BQUlKLGFBQWFHLGNBQWNELGdCQUFnQixDQUE5QixDQUFqQixFQUFtRDtBQUNsRCxPQUFNRyxLQUFLSCxpQkFBaUJDLGFBQWFILFNBQTlCLENBQVg7QUFDQSxRQUFLLElBQUlNLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsRUFBcEIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQzVCO0FBQ0EsUUFBSVQsRUFBRVUsU0FBRixJQUFlLE1BQW5CLEVBQTJCO0FBQzFCLDJCQUFFLGdCQUFGLEVBQW9CQyxFQUFwQixDQUF1QkYsQ0FBdkIsRUFBMEJHLFFBQTFCLENBQW1DLGlCQUFuQztBQUNBLEtBRkQsTUFFTztBQUNOLDJCQUFFLGdCQUFGLEVBQW9CRCxFQUFwQixDQUF1QixDQUF2QixFQUEwQkMsUUFBMUIsQ0FBbUMsaUJBQW5DO0FBQ0E7QUFDRDtBQUNEO0FBQ0QsRUFqQkQ7O0FBbUJBLEtBQU1DLGNBQWMsQ0FBQztBQUNwQixLQUFHLGFBRGlCO0FBRXBCQyxnQkFBYywrQkFGTTtBQUdwQkMsWUFBVTtBQUhVLEVBQUQsRUFJakI7QUFDRixLQUFHLGFBREQ7QUFFRkQsZ0JBQWMsd0JBRlo7QUFHRkMsWUFBVTtBQUhSLEVBSmlCLEVBUWpCO0FBQ0YsS0FBRyxhQUREO0FBRUZELGdCQUFjLHdCQUZaO0FBR0ZDLFlBQVU7QUFIUixFQVJpQixFQVlqQjtBQUNGLEtBQUcsYUFERDtBQUVGRCxnQkFBYyx3QkFGWjtBQUdGQyxZQUFVO0FBSFIsRUFaaUIsQ0FBcEI7O0FBa0JBLEtBQU1DLGdCQUFnQmxCLE1BQU1tQixnQkFBTixDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsT0FBRCxFQUFVVixDQUFWLEVBQWdCO0FBQ2hFLE1BQU1XLFVBQVVELFFBQVFFLEdBQXhCO0FBQ0EsTUFBTUMsV0FBV1QsWUFBWUssR0FBWixDQUFnQixVQUFDSyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUM3QyxPQUFJSixZQUFZRyxHQUFHQyxHQUFILENBQWhCLEVBQXlCO0FBQ3hCLFdBQ0M7QUFDQyxVQUFLZixDQUROO0FBRUMsc0JBQWVVLFFBQVFFLEdBRnhCO0FBR0MsWUFBT0YsUUFBUU0sS0FIaEI7QUFJQyxpQkFBWUYsR0FBR1QsWUFKaEI7QUFLQyxlQUFVUyxHQUFHUixRQUxkO0FBTUMsY0FBU0ksUUFBUU87QUFObEIsTUFERDtBQVVBO0FBQ0QsR0FiZ0IsQ0FBakI7QUFjQSxTQUFPSixRQUFQO0FBQ0EsRUFqQnFCLENBQXRCOztBQW9CQSxRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsdUNBQWY7QUFDQztBQUFBO0FBQUEsS0FBSyxJQUFHLGNBQVIsRUFBdUIsV0FBVSxnQkFBakMsRUFBa0QsYUFBVSxVQUE1RCxFQUF1RSxpQkFBYyxNQUFyRjtBQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsa0NBQWYsRUFBa0QsTUFBSyxTQUF2RDtBQUNFTjtBQURGLElBREQ7QUFJQztBQUFBO0FBQUEsTUFBRyxXQUFVLHVCQUFiLEVBQXFDLE1BQUssZUFBMUMsRUFBMEQsTUFBSyxRQUEvRCxFQUF3RSxjQUFXLE1BQW5GO0FBQ0MsMkNBQUsscUJBQUwsRUFBcUIsS0FBSSwyQkFBekIsR0FERDtBQUVDO0FBQUE7QUFBQSxPQUFNLFdBQVUsU0FBaEI7QUFBQTtBQUFBO0FBRkQsSUFKRDtBQVFDO0FBQUE7QUFBQSxNQUFHLFdBQVUsa0NBQWIsRUFBZ0QsTUFBSyxlQUFyRCxFQUFxRSxNQUFLLFFBQTFFLEVBQW1GLGNBQVcsTUFBOUY7QUFDQywyQ0FBSyxxQkFBTCxFQUFzQixLQUFJLHlCQUExQixHQUREO0FBRUM7QUFBQTtBQUFBLE9BQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUE7QUFGRDtBQVJEO0FBREQsRUFERDtBQWtCQSxDQTVFRDs7a0JBOEVlbkIsUSIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9DYXJvdXNlbC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0IEJhc2VOZXdzIGZyb20gJy4vQmFzZU5ld3MuanN4JztcclxuXHJcbmltcG9ydCBOZXdzMjlJbWcgZnJvbSAnLi4vLi4vaW1nL25ld3MvbmV3cy0yOS5wbmcnO1xyXG5pbXBvcnQgTmV3czMwSW1nIGZyb20gJy4uLy4uL2ltZy9uZXdzL25ld3MtMzAucG5nJztcclxuaW1wb3J0IE5ld3MzMUltZyBmcm9tICcuLi8uLi9pbWcvbmV3cy9uZXdzLTMxLnBuZyc7XHJcbmltcG9ydCBOZXdzMzJJbWcgZnJvbSAnLi4vLi4vaW1nL25ld3MvbmV3cy0zMi5wbmcnO1xyXG5pbXBvcnQgbGVmdEFycm93IGZyb20gJy4uLy4uL2ltZy9mbGVjaGExLnBuZyc7XHJcbmltcG9ydCByaWdodEFycm93IGZyb20gJy4uLy4uL2ltZy9mbGVjaGEyLnBuZyc7XHJcblxyXG5cclxuY29uc3QgQ2Fyb3VzZWwgPSAocHJvcHMpID0+IHtcclxuXHQkKCcjY2Fyb3VzZWxOZXdzJykub24oJ3NsaWRlLmJzLmNhcm91c2VsJywgKGUpID0+IHtcclxuXHRcdGNvbnN0IGNhcm91c2VsRWxlbWVudCA9ICQoZS5yZWxhdGVkVGFyZ2V0KTtcclxuXHRcdGNvbnN0IGlkRWxlbWVudCA9IGNhcm91c2VsRWxlbWVudC5pbmRleCgpO1xyXG5cdFx0Y29uc3QgaXRlbXNQZXJTbGlkZSA9IDM7XHJcblx0XHRjb25zdCB0b3RhbEl0ZW1zID0gJCgnLmNhcm91c2VsLWl0ZW0nKS5sZW5ndGg7XHJcblxyXG5cdFx0aWYgKGlkRWxlbWVudCA+PSB0b3RhbEl0ZW1zIC0gKGl0ZW1zUGVyU2xpZGUgLSAxKSkge1xyXG5cdFx0XHRjb25zdCBpdCA9IGl0ZW1zUGVyU2xpZGUgLSAodG90YWxJdGVtcyAtIGlkRWxlbWVudCk7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaXQ7IGkrKykge1xyXG5cdFx0XHRcdC8vIGFwcGVuZCBzbGlkZXMgdG8gZW5kXHJcblx0XHRcdFx0aWYgKGUuZGlyZWN0aW9uID09ICdsZWZ0Jykge1xyXG5cdFx0XHRcdFx0JCgnLmNhcm91c2VsLWl0ZW0nKS5lcShpKS5hcHBlbmRUbygnLmNhcm91c2VsLWlubmVyJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQoJy5jYXJvdXNlbC1pdGVtJykuZXEoMCkuYXBwZW5kVG8oJy5jYXJvdXNlbC1pbm5lcicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBpdGVtc0RlYXRpbCA9IFt7XHJcblx0XHQwOiAnbmV3cy0yOS5wbmcnLFxyXG5cdFx0Y2xhc3NFbGVtZW50OiAnY2Fyb3VzZWwtaXRlbSBjb2wtbWQtNCBhY3RpdmUnLFxyXG5cdFx0Y2xhc3NJbWc6ICcnLFxyXG5cdH0sIHtcclxuXHRcdDE6ICduZXdzLTMwLnBuZycsXHJcblx0XHRjbGFzc0VsZW1lbnQ6ICdjYXJvdXNlbC1pdGVtIGNvbC1tZC00JyxcclxuXHRcdGNsYXNzSW1nOiAnJyxcclxuXHR9LCB7XHJcblx0XHQyOiAnbmV3cy0zMS5wbmcnLFxyXG5cdFx0Y2xhc3NFbGVtZW50OiAnY2Fyb3VzZWwtaXRlbSBjb2wtbWQtNCcsXHJcblx0XHRjbGFzc0ltZzogJycsXHJcblx0fSwge1xyXG5cdFx0MzogJ25ld3MtMzIucG5nJyxcclxuXHRcdGNsYXNzRWxlbWVudDogJ2Nhcm91c2VsLWl0ZW0gY29sLW1kLTQnLFxyXG5cdFx0Y2xhc3NJbWc6ICcnLFxyXG5cdH1dO1xyXG5cclxuXHRjb25zdCBjYXJvdXNlbEl0ZW1zID0gcHJvcHMuY2Fyb3VzZWxFbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcclxuXHRcdGNvbnN0IGltZ05hbWUgPSBlbGVtZW50LmltZztcclxuXHRcdGNvbnN0IGVsZW1lbnRzID0gaXRlbXNEZWF0aWwubWFwKChlbCwgaW5kKSA9PiB7XHJcblx0XHRcdGlmIChpbWdOYW1lID09PSBlbFtpbmRdKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxCYXNlTmV3c1xyXG5cdFx0XHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0XHRcdGltZ1VybD17YGltZy8ke2VsZW1lbnQuaW1nfWB9XHJcblx0XHRcdFx0XHRcdHRpdGxlPXtlbGVtZW50LnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRjbGFzc1N0eWxlPXtlbC5jbGFzc0VsZW1lbnR9XHJcblx0XHRcdFx0XHRcdGNsYXNzSW1nPXtlbC5jbGFzc0ltZ31cclxuXHRcdFx0XHRcdFx0aXNWaWRlbz17ZWxlbWVudC5pc1ZpZGVvfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBlbGVtZW50cztcclxuXHR9KTtcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkLW5vbmUgZC1zbS1ibG9jayBwLTBcIj5cclxuXHRcdFx0PGRpdiBpZD1cImNhcm91c2VsTmV3c1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIiBkYXRhLWludGVydmFsPVwiOTAwMFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXIgcm93IHctMTAwIG14LWF1dG9cIiByb2xlPVwibGlzdGJveFwiPlxyXG5cdFx0XHRcdFx0e2Nhcm91c2VsSXRlbXN9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjYXJvdXNlbE5ld3NcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtsZWZ0QXJyb3d9IGFsdD0nRmxlY2hhIGhhY2lhIGxhIGl6cXVpZXJkYScvPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQgdGV4dC1mYWRlZFwiIGhyZWY9XCIjY2Fyb3VzZWxOZXdzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17cmlnaHRBcnJvd30gYWx0PSdGbGVjaGEgaGFjaWEgbGEgZGVyZWNoYScvPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/components/Carousel.jsx\n");

/***/ })

})