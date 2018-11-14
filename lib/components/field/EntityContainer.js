"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntityContainer = function (_Component) {
    _inherits(EntityContainer, _Component);

    function EntityContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EntityContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EntityContainer.__proto__ || Object.getPrototypeOf(EntityContainer)).call.apply(_ref, [this].concat(args))), _this), _this._renderHeader = function () {
            var displayName = _this.props.displayName;


            if (displayName) {
                return _react2.default.createElement(
                    "header",
                    { className: "metaform-group-header no-lateral-margin" },
                    _react2.default.createElement(
                        "span",
                        { className: "metaform-group-title" },
                        displayName
                    )
                );
            }

            return null;
        }, _this._renderComponents = function () {
            var _this$props = _this.props,
                componentFactory = _this$props.componentFactory,
                layout = _this$props.layout,
                fields = _this$props.fields,
                disabled = _this$props.disabled;

            fields = fields.map(function (field) {
                return _extends({}, field, { disabled: disabled });
            });
            return componentFactory.buildGroupComponent({
                component: layout.component,
                layout: layout,
                fields: fields,
                componentFactory: componentFactory
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EntityContainer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "entity-container" },
                this._renderHeader(),
                _react2.default.createElement(
                    "div",
                    { className: "entity-container-content" },
                    this._renderComponents()
                )
            );
        }
    }]);

    return EntityContainer;
}(_react.Component);

EntityContainer.props = {
    //Number props
    innerSize: _react.PropTypes.number,

    //Any props
    value: _react.PropTypes.any,
    options: _react.PropTypes.any,

    //Bool props
    checked: _react.PropTypes.bool,
    valid: _react.PropTypes.bool,
    invalid: _react.PropTypes.bool,
    dirty: _react.PropTypes.bool,
    pristine: _react.PropTypes.bool,
    active: _react.PropTypes.bool,
    touched: _react.PropTypes.bool,
    visited: _react.PropTypes.bool,
    autofilled: _react.PropTypes.bool,
    required: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,

    //String props
    group: _react.PropTypes.string,
    addonBefore: _react.PropTypes.string,
    addonAfter: _react.PropTypes.string,
    component: _react.PropTypes.string,
    help: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    name: _react.PropTypes.string,
    error: _react.PropTypes.string,
    type: _react.PropTypes.string,
    displayName: _react.PropTypes.string,
    initialValue: _react.PropTypes.string,
    fieldLayout: _react.PropTypes.string,

    //Function props
    autofill: _react.PropTypes.func,
    onBlur: _react.PropTypes.func,
    onDragStart: _react.PropTypes.func,
    onDrop: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    onUpdate: _react.PropTypes.func,
    onChange: _react.PropTypes.func,

    //Object props
    componentFactory: _react.PropTypes.object,
    reduxFormProps: _react.PropTypes.object,
    _extra: _react.PropTypes.object
};

exports.default = EntityContainer;
module.exports = exports["default"];