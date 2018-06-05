webpackHotUpdate(5,{

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _semanticUiReact = __webpack_require__(438);

var _web = __webpack_require__(446);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(679);

var _trust = __webpack_require__(740);

var _trust2 = _interopRequireDefault(_trust);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\components\\WithdrawForm.js';


var WithdrawForm = function (_Component) {
    (0, _inherits3.default)(WithdrawForm, _Component);

    function WithdrawForm(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, WithdrawForm);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WithdrawForm.__proto__ || (0, _getPrototypeOf2.default)(WithdrawForm)).call(this, props));

        _this.onSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, trust;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                trust = (0, _trust2.default)(_this.props.address);
                                _context.next = 9;
                                return trust.methods.withdrawFunds(_web2.default.utils.toWei(_this.state.value, 'ether')).send({
                                    from: accounts[0]
                                });

                            case 9:
                                window.location.reload(true);

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 12]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.state = {
            value: '',
            errorMessage: ''
        };
        return _this;
    }

    (0, _createClass3.default)(WithdrawForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Withdraw'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'ether',
                labelPosition: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: !!this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Submit'));
        }
    }]);

    return WithdrawForm;
}(_react.Component);

exports.default = WithdrawForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFdpdGhkcmF3Rm9ybS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJ3ZWIzIiwiUm91dGVyIiwiVHJ1c3QiLCJXaXRoZHJhd0Zvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJ0cnVzdCIsImFkZHJlc3MiLCJtZXRob2RzIiwid2l0aGRyYXdGdW5kcyIsInV0aWxzIiwidG9XZWkiLCJzdGF0ZSIsInZhbHVlIiwic2VuZCIsImZyb20iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFXOzs7Ozs7Ozs7SSxBQUVaOzBDQUNGOzswQkFBQSxBQUFZLE9BQU87cUJBQUE7OzRDQUFBOztzSkFBQSxBQUNUOztjQURTLEFBUW5CLHVCQVJtQjtnR0FRUixpQkFBQSxBQUFPLE9BQVA7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUVOOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh4QixBQUdQLEFBQWMsQUFBK0I7O2dEQUh0QztnREFBQTt1Q0FNb0IsY0FBQSxBQUFLLElBTnpCLEFBTW9CLEFBQVM7O2lDQUExQjtBQU5ILG9EQU9HO0FBUEgsd0NBT1cscUJBQU0sTUFBQSxBQUFLLE1BUHRCLEFBT1csQUFBaUI7Z0RBUDVCOzZDQVFHLEFBQU0sUUFBTixBQUNELGNBQWMsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQUR6QyxBQUNhLEFBQW1DLFVBRGhELEFBRUQ7MENBQ1MsU0FYWCxBQVFHLEFBRUksQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FIRjs7aUNBS047dUNBQUEsQUFBTyxTQUFQLEFBQWdCLE9BYmIsQUFhSCxBQUF1Qjs7Z0RBYnBCO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWlCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWpCM0IsQUFpQkgsQUFBYyxBQUFvQjs7aUNBSXRDOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsT0FBTyxPQXJCekIsQUFxQlAsQUFBYyxBQUF5Qjs7aUNBckJoQztpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBQVJROztpQ0FBQTt3Q0FBQTtBQUFBO0FBRWY7O2NBQUEsQUFBSzttQkFBUSxBQUNGLEFBQ1A7MEJBSlcsQUFFZixBQUFhLEFBRUs7QUFGTCxBQUNUO2VBR1A7Ozs7O2lDQTRCUTt5QkFDTDs7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0M7QUFERDtBQUFBLCtCQUNDLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURELEFBQ0MsQUFDQSw2QkFBQSxBQUFDO3VCQUNTLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRjFELEFBR0c7dUJBSEgsQUFHUyxBQUNOOytCQUpILEFBSWlCOzhCQUpqQjtnQ0FITCxBQUNJLEFBRUMsQUFNRDtBQU5DO0FBQ0csaUNBS0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FUSixBQVNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVMsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUF4QixBQUE4QixTQUFTLFNBQXZDOzhCQUFBO2dDQUFBO0FBQUE7ZUFYUixBQUNJLEFBVUksQUFJWDs7Ozs7QUFuRHNCLEEsQUFzRDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IldpdGhkcmF3Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9KYW4vRVRIX1Byb2plY3RzL015RXRoZXJUcnVzdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\components\\WithdrawForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\components\\WithdrawForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zZDU5OWRkZjRjY2JjZWYzY2U5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9XaXRoZHJhd0Zvcm0uanM/ZTlhYzU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IFRydXN0IGZyb20gJy4uL2V0aGVyZXVtL3RydXN0JztcclxuXHJcbmNsYXNzIFdpdGhkcmF3Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRydXN0ID0gVHJ1c3QodGhpcy5wcm9wcy5hZGRyZXNzKTtcclxuICAgICAgICAgICAgYXdhaXQgdHJ1c3QubWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgLndpdGhkcmF3RnVuZHMod2ViMy51dGlscy50b1dlaSh0aGlzLnN0YXRlLnZhbHVlLCAnZXRoZXInKSlcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJyAgfSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICA8bGFiZWw+V2l0aGRyYXc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17ISF0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aGRyYXdGb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvV2l0aGRyYXdGb3JtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQU5BO0FBQUE7QUFBQTtBQVFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBZEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlCQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBUkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFEQTtBQUdBOzs7OztBQTRCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7O0FBR0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==