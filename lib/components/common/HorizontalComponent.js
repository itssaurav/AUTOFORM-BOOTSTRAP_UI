'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HorizontalComponent = function HorizontalComponent(_ref) {
	var children = _ref.children,
	    size = _ref.size;
	return _react2.default.createElement(
		'div',
		{ className: 'col-md-' + size },
		children
	);
};

HorizontalComponent.propTypes = {
	children: _react.PropTypes.object,
	size: _react.PropTypes.number
};

exports.default = HorizontalComponent;
module.exports = exports['default'];