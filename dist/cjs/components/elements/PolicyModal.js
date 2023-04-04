"use strict";
exports.__esModule = true;
exports.PolicyModal = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var Button_1 = require("./Button");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var TabGroup_1 = require("./TabGroup");
var PolicyModal = function (_a) {
    var title = _a.title, caption = _a.caption, onClickFullDetail = _a.onClickFullDetail, onClickClose = _a.onClickClose, style = _a.style, tabs = _a.tabs;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ backgroundColor: theme_1.colors.white, borderStyle: 'solid', borderWidth: '1px', borderColor: theme_1.colors.gray[20], borderRadius: '8px', width: '626px', height: '540px', paddingTop: '29px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '16px', display: 'flex', flexDirection: 'column', gap: '24px', boxShadow: '3px 6px 12px 3px rgba(0,0,0,0.24)' }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex', justifyContent: 'space-between'
            } },
            react_1["default"].createElement("div", { style: {
                    display: 'flex', flexDirection: 'column'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'title-regular' }, title),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'caption-regular' }, caption)),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '12px'
                } },
                react_1["default"].createElement(Button_1.Button, { size: "sm", variant: "grayBlue", onClick: onClickFullDetail }, "View Full Detail"),
                react_1["default"].createElement(Button_1.Button, { icon: pro_regular_svg_icons_1.faTimes, iconPosition: "end", size: "sm", variant: "gray", onClick: onClickClose }, "Close"))),
        react_1["default"].createElement(TabGroup_1.TabGroup, { tabContentHeight: "360px", tabs: tabs })));
};
exports.PolicyModal = PolicyModal;
