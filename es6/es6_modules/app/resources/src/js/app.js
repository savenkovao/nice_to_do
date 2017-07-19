(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterModule = exports.FooterModule = function () {
    function FooterModule() {
        _classCallCheck(this, FooterModule);

        this.addFooter();
    }

    _createClass(FooterModule, [{
        key: 'addFooter',
        value: function addFooter() {
            $('body').append($('<footer></footer>').html('<h2>I\'m footer</h2>'));
            console.log('footer');
        }
    }]);

    return FooterModule;
}();

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderModule = exports.HeaderModule = function () {
    function HeaderModule() {
        _classCallCheck(this, HeaderModule);

        this.addHeader();
    }

    _createClass(HeaderModule, [{
        key: 'addHeader',
        value: function addHeader() {
            $('body').prepend($('<header></header>').html('<h1>I\'m header</h1>'));
            console.log('asdsadsa');
        }
    }]);

    return HeaderModule;
}();

},{}],3:[function(require,module,exports){
'use strict';

var _page = require('./page.module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
    _classCallCheck(this, App);

    this.pageModule = new _page.PageModule();
};

window.App = new App();

},{"./page.module":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageModule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = require('../header.module');

var _footer = require('../footer.module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageModule = exports.PageModule = function () {
    function PageModule() {
        _classCallCheck(this, PageModule);

        this.sayHi();
        this.header = new _header.HeaderModule();
        this.footer = new _footer.FooterModule();
    }

    _createClass(PageModule, [{
        key: 'sayHi',
        value: function sayHi() {
            console.log('hello from module');
            $('div').css({
                color: 'red',
                'font-size': '15px'
            });

            $('div').addClass('container');
        }
    }]);

    return PageModule;
}();

},{"../footer.module":1,"../header.module":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxmb290ZXIubW9kdWxlXFxpbmRleC5qcyIsInNyY1xcanNcXGhlYWRlci5tb2R1bGVcXGluZGV4LmpzIiwic3JjXFxqc1xcaW5kZXguanMiLCJzcmNcXGpzXFxwYWdlLm1vZHVsZVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQWEsWSxXQUFBLFk7QUFDVCw0QkFBYTtBQUFBOztBQUNULGFBQUssU0FBTDtBQUNIOzs7O29DQUVXO0FBQ1IsY0FBRSxNQUFGLEVBQVUsTUFBVixDQUFrQixFQUFFLG1CQUFGLEVBQXVCLElBQXZCLENBQTRCLHNCQUE1QixDQUFsQjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUlEsWSxXQUFBLFk7QUFDVCw0QkFBYTtBQUFBOztBQUNULGFBQUssU0FBTDtBQUNIOzs7O29DQUNXO0FBQ1IsY0FBRSxNQUFGLEVBQVUsT0FBVixDQUFrQixFQUFFLG1CQUFGLEVBQXVCLElBQXZCLENBQTRCLHNCQUE1QixDQUFsQjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxVQUFaO0FBQ0g7Ozs7Ozs7OztBQ05MOzs7O0lBRU0sRyxHQUNGLGVBQWM7QUFBQTs7QUFDVixTQUFLLFVBQUwsR0FBa0Isc0JBQWxCO0FBQ0gsQzs7QUFHTCxPQUFPLEdBQVAsR0FBYSxJQUFJLEdBQUosRUFBYjs7Ozs7Ozs7Ozs7O0FDVEE7O0FBQ0E7Ozs7SUFFYSxVLFdBQUEsVTtBQUNULDBCQUFhO0FBQUE7O0FBQ1QsYUFBSyxLQUFMO0FBQ0EsYUFBSyxNQUFMLEdBQWMsMEJBQWQ7QUFDQSxhQUFLLE1BQUwsR0FBYywwQkFBZDtBQUNIOzs7O2dDQUVPO0FBQ0osb0JBQVEsR0FBUixDQUFZLG1CQUFaO0FBQ0EsY0FBRSxLQUFGLEVBQVMsR0FBVCxDQUFhO0FBQ1QsdUJBQU8sS0FERTtBQUVULDZCQUFhO0FBRkosYUFBYjs7QUFLQSxjQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLFdBQWxCO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIEZvb3Rlck1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYWRkRm9vdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRm9vdGVyKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoICQoJzxmb290ZXI+PC9mb290ZXI+JykuaHRtbCgnPGgyPklcXCdtIGZvb3RlcjwvaDI+JykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb290ZXInKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hZGRIZWFkZXIoKTtcclxuICAgIH1cclxuICAgIGFkZEhlYWRlcigpIHtcclxuICAgICAgICAkKCdib2R5JykucHJlcGVuZCgkKCc8aGVhZGVyPjwvaGVhZGVyPicpLmh0bWwoJzxoMT5JXFwnbSBoZWFkZXI8L2gxPicpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXNkc2Fkc2EnKTtcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgeyBQYWdlTW9kdWxlIH0gZnJvbSAnLi9wYWdlLm1vZHVsZSc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlTW9kdWxlID0gbmV3IFBhZ2VNb2R1bGUoKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LkFwcCA9IG5ldyBBcHAoKTsiLCJpbXBvcnQgeyBIZWFkZXJNb2R1bGUgfSBmcm9tICcuLi9oZWFkZXIubW9kdWxlJztcclxuaW1wb3J0IHsgRm9vdGVyTW9kdWxlIH0gZnJvbSAnLi4vZm9vdGVyLm1vZHVsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc2F5SGkoKTtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXJNb2R1bGUoKTtcclxuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXJNb2R1bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXlIaSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8gZnJvbSBtb2R1bGUnKTtcclxuICAgICAgICAkKCdkaXYnKS5jc3Moe1xyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICdmb250LXNpemUnOiAnMTVweCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnZGl2JykuYWRkQ2xhc3MoJ2NvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
