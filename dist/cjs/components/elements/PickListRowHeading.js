"use strict";
exports.__esModule = true;
exports.PickListRowHeading = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var PickListRowHeading = function (_a) {
    var title = _a.title, style = _a.style, _b = _a.button, button = _b === void 0 ? 'add' : _b, onClickAddAll = _a.onClickAddAll, onClickRemoveAll = _a.onClickRemoveAll;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ minWidth: 'fit-content', backgroundColor: '#f9fbfc', borderStyle: 'solid', borderWidth: '1px', borderColor: theme_1.colors.gray[20], paddingLeft: '16px', paddingRight: '16px', paddingTop: '6px', paddingBottom: '6px', display: 'flex', justifyContent: 'space-between', gap: '16px' }, style) },
        react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink' }, title),
        react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink', onClick: button === 'add' ? onClickAddAll : onClickRemoveAll, style: {
                cursor: 'pointer',
                color: button === 'add' ? theme_1.colors.blue[60] : theme_1.colors.gray[50]
            } }, button === 'add' ? 'Add all' : 'Remove all')));
};
exports.PickListRowHeading = PickListRowHeading;
