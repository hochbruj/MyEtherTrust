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

var _WithdrawForm = require('./WithdrawForm');

var _WithdrawForm2 = _interopRequireDefault(_WithdrawForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\components\\BenefitTrustItem.js';


var BenefitTrustItem = function (_Component) {
    (0, _inherits3.default)(BenefitTrustItem, _Component);

    function BenefitTrustItem(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, BenefitTrustItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BenefitTrustItem.__proto__ || (0, _getPrototypeOf2.default)(BenefitTrustItem)).call(this, props));

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

    (0, _createClass3.default)(BenefitTrustItem, [{
        key: 'renderForm',
        value: function renderForm() {
            if (!this.state.summary[3]) {
                return _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }, _react2.default.createElement(_WithdrawForm2.default, {
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
            }, 'Trust was set up by: ', this.state.summary[1]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Weekly withdrawal limit: ', _web2.default.utils.fromWei(this.state.summary[4].toString(), 'ether'), ' Ether'), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Amount available for withdrawal: ', _web2.default.utils.fromWei(this.state.summary[5].toString(), 'ether'), ' Ether')), this.renderForm());
        }
    }]);

    return BenefitTrustItem;
}(_react.Component);

exports.default = BenefitTrustItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJlbmVmaXRUcnVzdEl0ZW0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwid2ViMyIsIlRydXN0IiwiV2l0aGRyYXdGb3JtIiwiQmVuZWZpdFRydXN0SXRlbSIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJ0cnVzdCIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Iiwic2V0U3RhdGUiLCJzdGF0ZSIsInV0aWxzIiwiZnJvbVdlaSIsInRvU3RyaW5nIiwicmVuZGVyRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFrQjs7Ozs7Ozs7O0ksQUFFbkI7OENBQ0Y7OzhCQUFBLEFBQVksT0FBTztxQkFBQTs7NENBQUE7OzhKQUFBLEFBQ1Q7O2NBRFMsQUFRbkIsNkZBQW9CLG1CQUFBO3VCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUNWO0FBRFUsb0NBQ0YscUJBQU0sTUFBQSxBQUFLLE1BRFQsQUFDRixBQUFpQjs0Q0FEZjttQ0FFTSxNQUFBLEFBQU0sUUFBTixBQUFjLGFBRnBCLEFBRU0sQUFBMkI7OzZCQUEzQztBQUZVLCtDQUdoQjs7a0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixTQUFXLE9BSFQsQUFHaEIsQUFBYzs7NkJBSEU7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QUFSRCxBQUVmOztjQUFBLEFBQUs7cUJBQ1EsQ0FBQSxBQUFDLElBQUQsQUFBSSxJQUFKLEFBQU8sSUFBUCxBQUFVLE9BQVYsQUFBZ0IsR0FBaEIsQUFBa0IsR0FEbEIsQUFDQSxBQUFvQixBQUM3QjttQkFKVyxBQUVmLEFBQWEsQUFFRjtBQUZFLEFBQ1Q7ZUFHUDs7Ozs7cUNBVVksQUFDVDtnQkFBSSxDQUFDLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBaEIsQUFBSyxBQUFtQixJQUFJLEFBQ3hCO3VDQUNLLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7a0NBQUE7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLEFBQUM7NkJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCO2tDQUR4QjtvQ0FGUixBQUNJLEFBQ0ksQUFJWDtBQUpXO0FBQ0k7QUFJbkI7Ozs7aUNBRVEsQUFDTDttQ0FDSSxBQUFDLHVDQUFLLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQWM7QUFBZDtBQUFBLG9CQUFjLEFBQUssTUFBTCxBQUFXLFFBRDdCLEFBQ0ksQUFBYyxBQUFtQixBQUNqQyxxQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUFpQyw4QkFBQSxBQUFLLE1BQUwsQUFBVyxRQUZoRCxBQUVJLEFBQWlDLEFBQW1CLEFBQ3BELHFCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBQXFDLDJDQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLEdBQXRDLEFBQW1CLEFBQXNCLFlBQTlFLEFBQXFDLEFBQXFELFVBSDlGLEFBR0ksQUFDQSwyQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUE2QyxtREFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixHQUF0QyxBQUFtQixBQUFzQixZQUF0RixBQUE2QyxBQUFxRCxVQUwxRyxBQUNJLEFBSUksQUFFSCxpQkFSVCxBQUNJLEFBT0ssQUFBSyxBQUtqQjs7Ozs7QUExQzBCLEEsQUFnRC9COztrQkFBQSxBQUFlIiwiZmlsZSI6IkJlbmVmaXRUcnVzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSmFuL0VUSF9Qcm9qZWN0cy9NeUV0aGVyVHJ1c3QifQ==