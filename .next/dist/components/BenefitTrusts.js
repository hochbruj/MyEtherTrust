'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BenefitTrustItem = require('./BenefitTrustItem');

var _BenefitTrustItem2 = _interopRequireDefault(_BenefitTrustItem);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\ETH_Projects\\MyEtherTrust\\components\\BenefitTrusts.js';


var BenefitTrusts = function BenefitTrusts(props) {
    var trustItems = props.trusts.map(function (address) {
        return _react2.default.createElement(_BenefitTrustItem2.default, {
            key: address,
            address: address, __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        });
    });

    return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, trustItems);
};

exports.default = BenefitTrusts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJlbmVmaXRUcnVzdHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCZW5lZml0VHJ1c3RJdGVtIiwiQ2FyZCIsIkJlbmVmaXRUcnVzdHMiLCJwcm9wcyIsInRydXN0SXRlbXMiLCJ0cnVzdHMiLCJtYXAiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFTOzs7Ozs7O0FBRVQsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsY0FBQSxBQUFDLE9BQVUsQUFDN0I7UUFBTSxtQkFBYSxBQUFNLE9BQU4sQUFBYSxJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQzdDOytCQUNBLEFBQUM7aUJBQUQsQUFDUyxBQUNMO3FCQUZKLEFBRWE7MEJBRmI7NEJBREEsQUFDQSxBQUlIO0FBSkc7QUFDSSxTQURKO0FBRkosQUFBbUIsQUFTbkIsS0FUbUI7OzJCQVVkLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSztBQURMO0FBQUEsS0FBQSxFQURKLEFBQ0ksQUFJUDtBQWZELEFBaUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkJlbmVmaXRUcnVzdHMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSmFuL0VUSF9Qcm9qZWN0cy9NeUV0aGVyVHJ1c3QifQ==