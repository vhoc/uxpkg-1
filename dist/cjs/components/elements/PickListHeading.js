"use strict";
exports.__esModule = true;
exports.PickListHeading = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var SimpleDropDown_1 = require("./SimpleDropDown");
var PickListHeading = function (_a) {
    var existingCount = _a.existingCount, dropDownItems = _a.dropDownItems, dropDownValue = _a.dropDownValue, style = _a.style;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '396px', height: '32px', backgroundColor: theme_1.colors.gray[10], borderStyle: 'solid', borderWidth: '1px', borderColor: theme_1.colors.gray[20], borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px', paddingLeft: '16px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between' }, style) },
        react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink' }, "Existing (".concat((existingCount === null || existingCount === void 0 ? void 0 : existingCount.toString()) || '0', ")")),
        dropDownItems && dropDownItems.length >= 1 ?
            react_1["default"].createElement(SimpleDropDown_1.SimpleDropDown, { menuItems: dropDownItems, value: dropDownValue })
            :
                null));
};
exports.PickListHeading = PickListHeading;
