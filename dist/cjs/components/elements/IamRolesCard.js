"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var IamRolesCard = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.expanded, expanded = _c === void 0 ? false : _c, title = _a.title, description = _a.description, onClickButtonTopRight = _a.onClickButtonTopRight, onClickButtonBottomLeft = _a.onClickButtonBottomLeft, style = _a.style, props = tslib_1.__rest(_a, ["selected", "expanded", "title", "description", "onClickButtonTopRight", "onClickButtonBottomLeft", "style"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: tslib_1.__assign({ width: '605px', minHeight: '72px', backgroundColor: selected ? theme_1.colors.blue[30] : theme_1.colors.white, borderWidth: '1px', borderColor: theme_1.colors.gray[20], borderRadius: '8px', paddingTop: '14px', paddingBottom: '22px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', justifyContent: 'space-between', fontFamily: theme_1.theme.font.body.regular.fontFamily, fontSize: theme_1.theme.font.body.regular.fontSize, fontWeight: theme_1.theme.font.body.regular.fontWeight, color: theme_1.theme.font.body.regular.color }, style) }, props), /** EXPANDED RENDER */ expanded ?
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } }),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column'
                } }))
        :
            react_1["default"].createElement("div", { style: {
                    width: '605px',
                    display: 'flex',
                    justifyContent: 'space-between'
                } },
                react_1["default"].createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column'
                    } },
                    react_1["default"].createElement("div", { style: tslib_1.__assign({}, theme_1.theme.font.body.semiBold) }, title),
                    react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.caption.regular), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px' }) }, description)),
                react_1["default"].createElement("div", { style: { display: 'flex' } },
                    react_1["default"].createElement("div", { style: { width: '60px' } }, "more btn here"),
                    react_1["default"].createElement("div", { style: { width: '34px' } }, "topRightBtn here")))));
};
exports["default"] = IamRolesCard;
