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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

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