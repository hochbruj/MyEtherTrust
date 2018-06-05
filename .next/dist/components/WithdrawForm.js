'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _trust = require('../ethereum/trust');

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