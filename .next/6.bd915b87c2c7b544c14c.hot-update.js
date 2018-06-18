webpackHotUpdate(6,{

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(423);

var _Layout = __webpack_require__(743);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1031);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(431);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(529);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\pages\\trusts\\new.js?entry';


var TrustNew = function (_Component) {
    (0, _inherits3.default)(TrustNew, _Component);

    function TrustNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TrustNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TrustNew.__proto__ || (0, _getPrototypeOf2.default)(TrustNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: '',
            weeklyLimit: '',
            beneficiary: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var _this$state, name, weeklyLimit, beneficiary, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '', successMessage: 'Please wait until transction is confirmed...' });
                                _this$state = _this.state, name = _this$state.name, weeklyLimit = _this$state.weeklyLimit, beneficiary = _this$state.beneficiary;
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return _factory2.default.methods.createTrust(name, _web2.default.utils.toWei(weeklyLimit, 'ether'), beneficiary).send({
                                    from: accounts[0]
                                });

                            case 9:
                                _routes.Router.pushRoute('/');
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TrustNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Message, {
                attached: true,
                header: 'Set up a new trust!',
                content: 'Provide a name, beneficiary and weekly withdrawal limit. Only the address of the benficiary will be able to withraw money from the trust. Once the trust is set up you have to fund it with ethers.',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement(_semanticUiReact.Form, { className: 'attached fluid segment', onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Name'), _react2.default.createElement('input', {
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this3.setState({ name: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Beneficiary'), _react2.default.createElement('input', {
                value: this.state.beneficiary,
                onChange: function onChange(event) {
                    return _this3.setState({ beneficiary: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Weekly Withdrawal Limit'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'ether',
                labelPosition: 'right',
                value: this.state.weeklyLimit,
                onChange: function onChange(event) {
                    return _this3.setState({ weeklyLimit: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: !!this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Set Up!')));
        }
    }]);

    return TrustNew;
}(_react.Component);

exports.default = TrustNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0cnVzdHNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIlRydXN0TmV3Iiwic3RhdGUiLCJuYW1lIiwid2Vla2x5TGltaXQiLCJiZW5lZmljaWFyeSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInN1Y2Nlc3NNZXNzYWdlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVUcnVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0Y7a0JBQVEsQUFDRSxBQUNOO3lCQUZJLEFBRVMsQUFDYjt5QkFISSxBQUdTLEFBQ2I7MEJBSkksQUFJVSxBQUNkO3FCQUxJLEFBS0ssQTtBQUxMLEFBQ0osaUIsQUFPSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7aUVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBakIsQUFBK0IsSUFBSSxnQkFIMUMsQUFHUCxBQUFjLEFBQW1EOzhDQUN0QixNQUpwQyxBQUl5QyxPQUp6QyxBQUlDLG1CQUpELEFBSUMsTUFK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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\pages\\trusts\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\pages\\trusts\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/trusts\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iZDkxNWI4N2MyYzdiNTQ0YzE0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdHJ1c3RzL25ldy5qcz8xY2M3NDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBUcnVzdE5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgd2Vla2x5TGltaXQ6ICcnLFxyXG4gICAgICAgIGJlbmVmaWNpYXJ5OiAnJyxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycsIHN1Y2Nlc3NNZXNzYWdlOiAnUGxlYXNlIHdhaXQgdW50aWwgdHJhbnNjdGlvbiBpcyBjb25maXJtZWQuLi4nIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgd2Vla2x5TGltaXQsIGJlbmVmaWNpYXJ5IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgLmNyZWF0ZVRydXN0KFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgd2ViMy51dGlscy50b1dlaSh3ZWVrbHlMaW1pdCwgJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYmVuZWZpY2lhcnkpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2V9KTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgIGF0dGFjaGVkXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9J1NldCB1cCBhIG5ldyB0cnVzdCEnXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PSdQcm92aWRlIGEgbmFtZSwgYmVuZWZpY2lhcnkgYW5kIHdlZWtseSB3aXRoZHJhd2FsIGxpbWl0LiBPbmx5IHRoZSBhZGRyZXNzIG9mIHRoZSBiZW5maWNpYXJ5IHdpbGwgYmUgYWJsZSB0byB3aXRocmF3IG1vbmV5IGZyb20gdGhlIHRydXN0LiBPbmNlIHRoZSB0cnVzdCBpcyBzZXQgdXAgeW91IGhhdmUgdG8gZnVuZCBpdCB3aXRoIGV0aGVycy4nXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJhdHRhY2hlZCBmbHVpZCBzZWdtZW50XCIgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CZW5lZmljaWFyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmVuZWZpY2lhcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGJlbmVmaWNpYXJ5OiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldlZWtseSBXaXRoZHJhd2FsIExpbWl0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJldGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndlZWtseUxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3ZWVrbHlMaW1pdDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXshIXRoaXMuc3RhdGUubG9hZGluZ30gcHJpbWFyeT5TZXQgVXAhPC9CdXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJ1c3ROZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdHJ1c3RzL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFPQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQVBBO0FBQUE7QUFRQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFoQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWtCQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRkE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFGQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9