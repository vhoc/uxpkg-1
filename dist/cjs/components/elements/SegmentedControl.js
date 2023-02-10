"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var material_1 = require("@mui/material");
var SegmentedControl = function (_a) {
    var children = _a.children, _b = _a.multiSelect, multiSelect = _b === void 0 ? false : _b, _c = _a.ariaLabel, ariaLabel = _c === void 0 ? 'segmented control' : _c;
    var _d = (0, react_1.useState)(''), value = _d[0], setValue = _d[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (react_1["default"].createElement(material_1.ToggleButtonGroup, { value: value, exclusive: !multiSelect, onChange: handleChange, "aria-label": ariaLabel }, children));
};
exports["default"] = SegmentedControl;
