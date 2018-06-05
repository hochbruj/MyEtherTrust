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
        key: 'renderCreatedTrusts',
        value: function renderCreatedTrusts() {
            if (this.state.createdTrusts.length > null) {
                return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                }, _react2.default.createElement('h2', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, 'Trusts which I set up'), _react2.default.createElement(_CreatedTrusts2.default, {
                    trusts: this.state.createdTrusts, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
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
                        lineNumber: 37
                    }
                }, _react2.default.createElement('h2', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, 'Trusts which I am a benficiary to'), _react2.default.createElement(_BenefitTrusts2.default, {
                    trusts: this.state.benefitTrusts, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
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
                    lineNumber: 50
                }
            }, this.renderCreatedTrusts(), this.renderBenefitTrusts());
        }
    }]);

    return TrustIndex;
}(_react.Component);

exports.default = TrustIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiQ3JlYXRlZFRydXN0cyIsIkJlbmVmaXRUcnVzdHMiLCJDb250YWluZXIiLCJUcnVzdEluZGV4Iiwic3RhdGUiLCJjcmVhdGVkVHJ1c3RzIiwiYmVuZWZpdFRydXN0cyIsImNvbXBvbmVudERpZE1vdW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRDcmVhdGVkVHJ1c3RzIiwiY2FsbCIsImdldEJlbmVmaXRUcnVzdHMiLCJzZXRTdGF0ZSIsImxlbmd0aCIsIm1hcmdpblRvcCIsInJlbmRlckNyZWF0ZWRUcnVzdHMiLCJyZW5kZXJCZW5lZml0VHJ1c3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBbUI7Ozs7QUFDMUIsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0Y7MkJBQVEsQUFDVyxBQUNmOzJCQUZJLEFBRVcsQTtBQUZYLEFBQ0osaUIsQUFJSiw2RkFBb0IsbUJBQUE7eUNBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQUE7NENBQUE7bUNBQ08sY0FBQSxBQUFLLElBRFosQUFDTyxBQUFTOzs2QkFBMUI7QUFEVSxnREFBQTs0Q0FBQTttQ0FFWSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsaUJBQWlCLFNBQWpDLEFBQWlDLEFBQVMsSUFGdEQsQUFFWSxBQUE4Qzs7NkJBQXBFO0FBRlUscURBQUE7NENBQUE7bUNBR1ksa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGlCQUFpQixTQUFqQyxBQUFpQyxBQUFTLElBSHRELEFBR1ksQUFBOEM7OzZCQUFwRTtBQUhVLHFEQUloQjs7a0NBQUEsQUFBSyxTQUFTLEVBQUUsZUFBRixlQUFpQixlQUpmLEFBSWhCLEFBQWM7OzZCQUpFOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0E7Ozs7OzhDQU9FLEFBQ2xCO2dCQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixTQUE3QixBQUFzQyxNQUFNLEFBQ3hDO3VDQUNJLEFBQUMsNENBQVUsT0FBTyxFQUFFLFdBQXBCLEFBQWtCLEFBQVk7a0NBQTlCO29DQUFBLEFBQ007QUFETjtpQkFBQSxrQkFDTSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBRE4sQUFDTSxBQUNBLDBDQUFBLEFBQUM7NEJBQ0ssS0FBQSxBQUFLLE1BRFgsQUFDaUI7a0NBRGpCO29DQUhWLEFBQ0ksQUFFTSxBQUliO0FBSmE7QUFDRjtBQUlmOzs7OzhDQUVxQixBQUNsQjtnQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQVgsQUFBeUIsU0FBN0IsQUFBc0MsTUFBTSxBQUN4Qzt1Q0FDSSxBQUFDLDRDQUFVLE9BQU8sRUFBRSxXQUFwQixBQUFrQixBQUFZO2tDQUE5QjtvQ0FBQSxBQUNNO0FBRE47aUJBQUEsa0JBQ00sY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUROLEFBQ00sQUFDQSxzREFBQSxBQUFDOzRCQUNLLEtBQUEsQUFBSyxNQURYLEFBQ2lCO2tDQURqQjtvQ0FIVixBQUNJLEFBRU0sQUFJYjtBQUphO0FBQ0Y7QUFJZjs7OztpQ0FJUSxBQUNMO21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0s7QUFETDtBQUFBLGFBQUEsT0FBQSxBQUNLLEFBQUssQUFDTCw0QkFITCxBQUNBLEFBRUssQUFBSyxBQUVSOzs7OztBQTdDZSxBLEFBZ0R6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9KYW4vRVRIX1Byb2plY3RzL015RXRoZXJUcnVzdCJ9