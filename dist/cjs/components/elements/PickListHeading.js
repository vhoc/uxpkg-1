"use strict";
exports.__esModule = true;
exports.PickListHeading = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var SimpleDropDown_1 = require("./SimpleDropDown");
var PickListHeading = function (_a) {
    var title = _a.title, dropDownItems = _a.dropDownItems, dropDownValue = _a.dropDownValue, style = _a.style, onChange = _a.onChange;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '396px', height: '32px', backgroundColor: theme_1.colors.gray[10], borderStyle: 'solid', borderWidth: '1px', borderColor: theme_1.colors.gray[20], borderTopLeftRadius: '4px', borderTopRightRadius: '4px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', paddingLeft: '16px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between' }, style) },
        react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink' }, title),
        dropDownItems && dropDownItems.length >= 1 ?
            react_1["default"].createElement(SimpleDropDown_1.SimpleDropDown, { menuItems: dropDownItems, value: dropDownValue, onChange: onChange })
            :
                null));
};
exports.PickListHeading = PickListHeading;
