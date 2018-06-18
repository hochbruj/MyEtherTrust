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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _CreatedTrusts = require('../components/CreatedTrusts');

var _CreatedTrusts2 = _interopRequireDefault(_CreatedTrusts);

var _BenefitTrusts = require('../components/BenefitTrusts');

var _BenefitTrusts2 = _interopRequireDefault(_BenefitTrusts);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\pages\\index.js?entry';


var TrustIndex = function (_Component) {
    (0, _inherits3.default)(TrustIndex, _Component);

    function TrustIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TrustIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TrustIndex.__proto__ || (0, _getPrototypeOf2.default)(TrustIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            createdTrusts: [],
            benefitTrusts: []
        }, _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, createdTrusts, benefitTrusts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context.sent;
                            _context.next = 5;
                            return _factory2.default.methods.getCreatedTrusts(accounts[0]).call();

                        case 5:
                            createdTrusts = _context.sent;
                            _context.next = 8;
                            return _factory2.default.methods.getBenefitTrusts(accounts[0]).call();

                        case 8:
                            benefitTrusts = _context.sent;

                            _this.setState({ createdTrusts: createdTrusts, benefitTrusts: benefitTrusts });

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TrustIndex, [{
        key: 'renderInfoMessage',
        value: function renderInfoMessage() {
            if (this.state.createdTrusts.length == 0 && this.state.benefitTrusts.length == 0) {
                return _react2.default.createElement(_semanticUiReact.Message, { info: true, color: 'blue', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, 'Welcome to MyEtherTrust'), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, 'This Ethereum DApp lets you set up smart contracts on the  Ropsten Test Network. These contracts act as trusts. You can define a beneficiary and a weekly withdrawal limit. Only the beneficiary will be able to withdraw ethers up to the limit. Before you start please make sure you have installed MetaMask and selected the Ropsten Test Network.'));
            }
        }
    }, {
        key: 'renderCreatedTrusts',
        value: function renderCreatedTrusts() {
            if (this.state.createdTrusts.length > null) {
                return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }, _react2.default.createElement('h2', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, 'Trusts which I set up'), _react2.default.createElement(_CreatedTrusts2.default, {
                    trusts: this.state.createdTrusts, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }));
            }
        }
    }, {
        key: 'renderBenefitTrusts',
        value: function renderBenefitTrusts() {
            if (this.state.benefitTrusts.length > null) {
                return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }, _react2.default.createElement('h2', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }, 'Trusts which I am a benficiary to'), _react2.default.createElement(_BenefitTrusts2.default, {
                    trusts: this.state.benefitTrusts, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, this.renderInfoMessage(), this.renderCreatedTrusts(), this.renderBenefitTrusts());
        }
    }]);

    return TrustIndex;
}(_react.Component);

exports.default = TrustIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiQ3JlYXRlZFRydXN0cyIsIkJlbmVmaXRUcnVzdHMiLCJDb250YWluZXIiLCJNZXNzYWdlIiwiVHJ1c3RJbmRleCIsInN0YXRlIiwiY3JlYXRlZFRydXN0cyIsImJlbmVmaXRUcnVzdHMiLCJjb21wb25lbnREaWRNb3VudCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0Q3JlYXRlZFRydXN0cyIsImNhbGwiLCJnZXRCZW5lZml0VHJ1c3RzIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJyZW5kZXJJbmZvTWVzc2FnZSIsInJlbmRlckNyZWF0ZWRUcnVzdHMiLCJyZW5kZXJCZW5lZml0VHJ1c3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFTLEFBQVc7Ozs7Ozs7SUFFZCxBOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0YsQTsyQkFBUSxBQUNXLEFBQ2Y7MkJBRkksQSxBQUVXO0FBRlgsQUFDSixpQkFJSixBLDZGQUFvQixtQkFBQTt5Q0FBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FDTyxjQUFBLEFBQUssSUFEWixBQUNPLEFBQVM7OzZCQUExQjtBQURVLGdEQUFBOzRDQUFBO21DQUVZLGtCQUFBLEFBQVEsUUFBUixBQUFnQixpQkFBaUIsU0FBakMsQUFBaUMsQUFBUyxJQUZ0RCxBQUVZLEFBQThDOzs2QkFBcEU7QUFGVSxxREFBQTs0Q0FBQTttQ0FHWSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsaUJBQWlCLFNBQWpDLEFBQWlDLEFBQVMsSUFIdEQsQUFHWSxBQUE4Qzs7NkJBQXBFO0FBSFUscURBSWhCOztrQ0FBQSxBQUFLLFNBQVMsRUFBRSxlQUFGLGVBQWlCLGVBSmYsQUFJaEIsQUFBYzs7NkJBSkU7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QTs7Ozs7NENBT0EsQUFDaEI7Z0JBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLFVBQXpCLEFBQW1DLEtBQUssS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLFVBQXJFLEFBQStFLEdBQUcsQUFDOUU7dUNBQ0ksQUFBQywwQ0FBUSxNQUFULE1BQWMsT0FBZCxBQUFvQjtrQ0FBcEI7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNLLGNBQUQseUJBQUEsQUFBUzs7a0NBQVQ7b0NBQUE7QUFBQTtBQUFBLG1CQURKLEFBQ0ksQUFDQyw0Q0FBQSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBSFQsQUFDSSxBQUVLLEFBR1o7QUFDSjs7Ozs4Q0FFcUIsQUFDbEI7Z0JBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLFNBQTdCLEFBQXNDLE1BQU0sQUFDeEM7dUNBQ0ksQUFBQyw0Q0FBVSxPQUFPLEVBQUUsV0FBcEIsQUFBa0IsQUFBWTtrQ0FBOUI7b0NBQUEsQUFDTTtBQUROO2lCQUFBLGtCQUNNLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFETixBQUNNLEFBQ0EsMENBQUEsQUFBQzs0QkFDSyxLQUFBLEFBQUssTUFEWCxBQUNpQjtrQ0FEakI7b0NBSFYsQUFDSSxBQUVNLEFBSWI7QUFKYTtBQUNGO0FBSWY7Ozs7OENBRXFCLEFBQ2xCO2dCQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixTQUE3QixBQUFzQyxNQUFNLEFBQ3hDO3VDQUNJLEFBQUMsNENBQVUsT0FBTyxFQUFFLFdBQXBCLEFBQWtCLEFBQVk7a0NBQTlCO29DQUFBLEFBQ007QUFETjtpQkFBQSxrQkFDTSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBRE4sQUFDTSxBQUNBLHNEQUFBLEFBQUM7NEJBQ0ssS0FBQSxBQUFLLE1BRFgsQUFDaUI7a0NBRGpCO29DQUhWLEFBQ0ksQUFFTSxBQUliO0FBSmE7QUFDRjtBQUlmOzs7O2lDQUlRLEFBQ0w7bUNBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSztBQURMO0FBQUEsYUFBQSxPQUFBLEFBQ0ssQUFBSyxBQUNMLDBCQUZMLEFBRUssQUFBSyxBQUNMLDRCQUpMLEFBQ0EsQUFHSyxBQUFLLEFBRVI7Ozs7O0FBekRlLEEsQUE0RHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0phbi9FVEhfUHJvamVjdHMvTXlFdGhlclRydXN0In0=