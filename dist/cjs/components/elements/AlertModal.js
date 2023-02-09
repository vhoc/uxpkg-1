"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var AlertModal = function (_a) {
    var icon = _a.icon, title = _a.title, description = _a.description, children = _a.children, props = tslib_1.__rest(_a, ["icon", "title", "description", "children"]);
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: {
            width: '657px',
            minHeight: '190px',
            backgroundColor: theme_1.colors.white,
            boxShadow: '3px 6px 12px 3px rgba(0,0,0,0.24)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '27px',
            paddingBottom: '24px',
            paddingLeft: '32px',
            paddingRight: '32px',
            borderRadius: '8px'
        } }, props),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                gap: '16px'
            } },
            icon ?
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { style: { marginTop: '6px' }, icon: icon, color: theme_1.colors.yellow[50] })
                :
                    react_1["default"].createElement("div", null, "\u00A0"),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: "column",
                    gap: '16px'
                } },
                react_1["default"].createElement("div", { style: {
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '18px',
                        fontWeight: 'normal',
                        color: theme_1.colors.gray[90]
                    } }, title),
                react_1["default"].createElement("div", { style: {
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        color: theme_1.colors.gray[70]
                    } }, description))),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '16px'
            } }, children)));
};
exports["default"] = AlertModal;
