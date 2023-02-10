"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var material_1 = require("@mui/material");
var SegmentedControlButton = function (_a) {
    var style = _a.style, children = _a.children, value = _a.value, _b = _a.ariaLabel, ariaLabel = _b === void 0 ? '' : _b;
    return (react_1["default"].createElement(material_1.ToggleButton, { style: style, value: value, "aria-label": ariaLabel }, children));
};
exports["default"] = SegmentedControlButton;
