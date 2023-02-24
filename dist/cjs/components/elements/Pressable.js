"use strict";
exports.__esModule = true;
exports.Pressable = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Pressable = function (_a) {
    var onClick = _a.onClick, children = _a.children, style = _a.style;
    return (react_1["default"].createElement("button", { style: tslib_1.__assign({ background: 'none', border: 'none', cursor: 'pointer' }, style), onClick: onClick }, children));
};
exports.Pressable = Pressable;
