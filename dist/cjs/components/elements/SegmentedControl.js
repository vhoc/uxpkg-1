"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var material_1 = require("@mui/material");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var theme_1 = require("../../theme");
var SegmentedControl = function (_a) {
    var items = _a.items, _b = _a.multiSelect, multiSelect = _b === void 0 ? false : _b, _c = _a.ariaLabel, ariaLabel = _c === void 0 ? 'segmented control' : _c;
    var _d = (0, react_1.useState)(''), value = _d[0], setValue = _d[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    if (items && items.length >= 1) {
        return (react_1["default"].createElement(material_1.ToggleButtonGroup, { value: value, exclusive: !multiSelect, onChange: handleChange, "aria-label": ariaLabel, sx: {
                borderWidth: '0px'
            } }, items.map(function (item, index) {
            return (react_1["default"].createElement(material_1.ToggleButton, { key: index, value: item.value, "aria-label": item.ariaLabel, sx: {
                    backgroundColor: theme_1.colors.gray[10],
                    paddingLeft: '14px',
                    paddingRight: '14px',
                    '&.Mui-selected': {
                        backgroundColor: theme_1.colors.white
                    }
                } }, react_1["default"].isValidElement(item.icon) ?
                (item.icon)
                :
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: item.icon })));
        })));
    }
    return (react_1["default"].createElement("div", null));
};
exports["default"] = SegmentedControl;
