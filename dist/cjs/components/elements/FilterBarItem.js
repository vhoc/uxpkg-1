"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var material_1 = require("@mui/material");
var theme_1 = require("../../theme");
var theme_2 = require("../../theme");
require("@fontsource/ibm-plex-sans");
var FilterBarItem = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.checked, checked = _c === void 0 ? false : _c, amount = _a.amount, onClick = _a.onClick, props = tslib_1.__rest(_a, ["name", "checked", "amount", "onClick"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            display: 'flex',
            width: 'fit-content'
        } }, props, { onClick: onClick }),
        react_1["default"].createElement(material_1.ThemeProvider, { theme: theme_2.mtheme },
            react_1["default"].createElement(material_1.FormControlLabel, { control: react_1["default"].createElement(material_1.Checkbox, { checked: checked, sx: {
                        color: theme_1.colors.gray[30]
                    } }), label: "".concat(name, " ").concat(amount ? '(' + amount + ')' : ''), sx: {
                    fontFamily: 'IBM Plex Sans !important',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    color: '#232529'
                } }))));
};
exports["default"] = FilterBarItem;
