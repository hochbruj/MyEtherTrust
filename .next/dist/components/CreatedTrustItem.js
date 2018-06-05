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

var _trust = require('../ethereum/trust');

var _trust2 = _interopRequireDefault(_trust);

var _FundForm = require('./FundForm');

var _FundForm2 = _interopRequireDefault(_FundForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\components\\CreatedTrustItem.js';


var CreatedTrustItem = function (_Component) {
    (0, _inherits3.default)(CreatedTrustItem, _Component);

    function CreatedTrustItem(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, CreatedTrustItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CreatedTrustItem.__proto__ || (0, _getPrototypeOf2.default)(CreatedTrustItem)).call(this, props));

        _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var trust, summary;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            trust = (0, _trust2.default)(_this.props.address);
                            _context.next = 3;
                            return trust.methods.getSummary().call();

                        case 3:
                            summary = _context.sent;

                            _this.setState({ summary: summary, trust: trust });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.state = {
            summary: ['', '', '', false, 0, 0, 0],
            trust: {}
        };
        return _this;
    }

    (0, _createClass3.default)(CreatedTrustItem, [{
        key: 'renderForm',
        value: function renderForm() {
            if (this.state.summary[3]) {
                return _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, _react2.default.createElement(_FundForm2.default, {
                    address: this.props.address, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, this.state.summary[0]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'Beneficiary: ', this.state.summary[2]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Weekly Withdrawal Limit: ', _web2.default.utils.fromWei(this.state.summary[4].toString(), 'ether'), ' Ether'), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Current Balance: ', _web2.default.utils.fromWei(this.state.summary[6].toString(), 'ether'), ' Ether')), this.renderForm());
        }
    }]);

    return CreatedTrustItem;
}(_react.Component);

exports.default = CreatedTrustItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENyZWF0ZWRUcnVzdEl0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwid2ViMyIsIlRydXN0IiwiRnVuZEZvcm0iLCJDcmVhdGVkVHJ1c3RJdGVtIiwicHJvcHMiLCJjb21wb25lbnREaWRNb3VudCIsInRydXN0IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJzZXRTdGF0ZSIsInN0YXRlIiwidXRpbHMiLCJmcm9tV2VpIiwidG9TdHJpbmciLCJyZW5kZXJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7OENBQ0Y7OzhCQUFBLEFBQVksT0FBTztxQkFBQTs7NENBQUE7OzhKQUFBLEFBQ1Q7O2NBRFMsQUFRbkIsNkZBQW9CLG1CQUFBO3VCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNWO0FBRFUsb0NBQ0YscUJBQU0sTUFBQSxBQUFLLE1BRFQsQUFDRixBQUFpQjs0Q0FEZjttQ0FFTSxNQUFBLEFBQU0sUUFBTixBQUFjLGFBRnBCLEFBRU0sQUFBMkI7OzZCQUEzQztBQUZVLCtDQUdoQjs7a0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixTQUFXLE9BSFQsQUFHaEIsQUFBYzs7NkJBSEU7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QUFSRCxBQUVmOztjQUFBLEFBQUs7cUJBQ1EsQ0FBQSxBQUFDLElBQUQsQUFBSSxJQUFKLEFBQU8sSUFBUCxBQUFVLE9BQVYsQUFBZ0IsR0FBaEIsQUFBa0IsR0FEbEIsQUFDQSxBQUFvQixBQUM3QjttQkFKVyxBQUVmLEFBQWEsQUFFRjtBQUZFLEFBQ1Q7ZUFHUDs7Ozs7cUNBVVksQUFDVDtnQkFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQWYsQUFBSSxBQUFtQixJQUFJLEFBQ3ZCO3VDQUNLLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7a0NBQUE7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLEFBQUM7NkJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCO2tDQUR4QjtvQ0FGUixBQUNJLEFBQ0ksQUFJWDtBQUpXO0FBQ0k7QUFJbkI7Ozs7aUNBRVEsQUFDTDttQ0FDSSxBQUFDLHVDQUFLLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQWM7QUFBZDtBQUFBLG9CQUFjLEFBQUssTUFBTCxBQUFXLFFBRDdCLEFBQ0ksQUFBYyxBQUFtQixBQUNqQyxxQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUF5QixzQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUZ4QyxBQUVJLEFBQXlCLEFBQW1CLEFBQzVDLHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBQXFDLDJDQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEdBQXRDLEFBQW1CLEFBQXNCLFlBQTlFLEFBQXFDLEFBQXFELFVBSDlGLEFBR0ksQUFDQSwyQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUE2QixtQ0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixHQUF0QyxBQUFtQixBQUFzQixZQUF0RSxBQUE2QixBQUFxRCxVQUwxRixBQUNJLEFBSUksQUFFSCxpQkFSVCxBQUNJLEFBT0ssQUFBSyxBQUtqQjs7Ozs7QUExQzBCLEEsQUFnRC9COztrQkFBQSxBQUFlIiwiZmlsZSI6IkNyZWF0ZWRUcnVzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSmFuL0VUSF9Qcm9qZWN0cy9NeUV0aGVyVHJ1c3QifQ==