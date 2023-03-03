"use strict";
exports.__esModule = true;
exports.SimpleDropDown = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../../theme");
var SimpleDropDown = function (_a) {
    var value = _a.value, menuItems = _a.menuItems, disabled = _a.disabled, onChange = _a.onChange;
    var MySelect = (0, styles_1.styled)('select')(tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.regular), { backgroundColor: 'transparent', paddingRight: '8px', '&:focus-visible': {
            outline: 'none'
        } }));
    return (react_1["default"].createElement(MySelect, { value: value, disabled: disabled, onChange: onChange }, menuItems && menuItems.length >= 1 ?
        menuItems.map(function (item) {
            return (react_1["default"].createElement("option", { key: item.value, value: item.value }, item.label));
        })
        :
            null));
};
exports.SimpleDropDown = SimpleDropDown;
