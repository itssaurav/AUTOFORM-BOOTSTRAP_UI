'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseGroup2 = require('./BaseGroup');

var _BaseGroup3 = _interopRequireDefault(_BaseGroup2);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_BaseGroup) {
    _inherits(Group, _BaseGroup);

    function Group() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Group);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.getHeader = function () {
            var layout = _this.props.layout;


            return layout.title ? _react2.default.createElement(
                'header',
                { className: 'metaform-group-header' },
                _react2.default.createElement(
                    'span',
                    { className: 'metaform-group-title' },
                    layout.title
                )
            ) : null;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Group, [{
        key: 'render',
        value: function render() {
            var layout = this.props.layout;

            var content = this.getContent();
            var header = !layout.headLess ? this.getHeader() : null;
            var style = layout.headLess ? { marginTop: "15px" } : null;

            return _react2.default.createElement(
                'section',
                { style: style },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'metaform-group' },
                        header,
                        _react2.default.createElement(
                            'div',
                            { className: 'metaform-group-content' },
                            content
                        )
                    )
                )
            );
        }
    }]);

    return Group;
}(_BaseGroup3.default);

Group.propTypes = {
    component: _react.PropTypes.string,
    fields: _react.PropTypes.array.isRequired,
    layout: _react.PropTypes.object.isRequired,
    componentFactory: _react.PropTypes.object.isRequired
};
exports.default = Group;
module.exports = exports['default'];