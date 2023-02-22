"use strict";
exports.__esModule = true;
exports.IamRolesCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../theme");
var RoundedToggleButton_1 = require("./RoundedToggleButton");
var sharp_solid_svg_icons_1 = require("@fortawesome/sharp-solid-svg-icons");
var IconButton_1 = require("./IconButton");
var Button_1 = require("./Button");
var styles_1 = require("@mui/material/styles");
var MyDiv = (0, styles_1.styled)('div')({
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '4px'
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: theme_1.colors.gray[10],
        borderRadius: '3px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme_1.colors.gray[50],
        borderRadius: '3px'
    }
});
var IamRolesCard = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.assigned, assigned = _c === void 0 ? false : _c, title = _a.title, description = _a.description, onClickButtonTopRight = _a.onClickButtonTopRight, onClickButtonBottomLeft = _a.onClickButtonBottomLeft, style = _a.style, children = _a.children, props = tslib_1.__rest(_a, ["selected", "assigned", "title", "description", "onClickButtonTopRight", "onClickButtonBottomLeft", "style", "children"]);
    var _d = (0, react_1.useState)(false), expanded = _d[0], setExpanded = _d[1];
    return (react_1["default"].createElement("div", tslib_1.__assign({ style: tslib_1.__assign({ width: '605px', maxWidth: '605px', minHeight: '72px', height: expanded ? 'fit-content' : '72px', backgroundColor: selected ? theme_1.colors.gray[5] : theme_1.colors.white, borderWidth: '1px', borderColor: theme_1.colors.gray[20] || '#D8DDE4 !important', borderRadius: '8px', borderStyle: 'solid', paddingTop: '14px', paddingBottom: expanded ? '16px' : '12px', paddingLeft: '24px', paddingRight: '16px', display: 'flex', justifyContent: 'space-between', fontFamily: theme_1.theme.font.body.regular.fontFamily, fontSize: theme_1.theme.font.body.regular.fontSize, fontWeight: theme_1.theme.font.body.regular.fontWeight, color: theme_1.theme.font.body.regular.color }, style) }, props), /** EXPANDED RENDER */ expanded ?
        react_1["default"].createElement("div", { style: { display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
            } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { style: {
                        display: 'flex',
                        justifyContent: 'space-between'
                    } },
                    react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.semiBold), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px', textAlign: 'left' }) }, title),
                    react_1["default"].createElement(IconButton_1.IconButton, { style: { alignSelf: 'start' }, icon: assigned ? sharp_solid_svg_icons_1.faCircleMinus : sharp_solid_svg_icons_1.faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: onClickButtonTopRight })),
                react_1["default"].createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '573px'
                    } },
                    react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.caption.regular), { width: '509px', maxWidth: '509px', textAlign: 'left' }) }, description),
                    react_1["default"].createElement(MyDiv, { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.caption.regular), { width: '100%', height: 'fit-content', maxHeight: '280px', 
                            //height: '100px',
                            paddingRight: '100px', textAlign: 'left' }) }, children))),
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifySelf: 'flex-end',
                    width: '509px'
                } },
                react_1["default"].createElement(Button_1.Button, { variant: "grayBlue", size: "sm", onClick: onClickButtonBottomLeft }, "Open in new tab"),
                react_1["default"].createElement(RoundedToggleButton_1.RoundedToggleButton, { icon: expanded ? sharp_solid_svg_icons_1.faCaretUp : sharp_solid_svg_icons_1.faCaretDown, label: expanded ? 'Less' : 'More', onClick: function () { return setExpanded(function (prevState) { return !prevState; }); } })))
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
                    react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.body.semiBold), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px', textAlign: 'left' }) }, title),
                    react_1["default"].createElement("div", { style: tslib_1.__assign(tslib_1.__assign({}, theme_1.theme.font.caption.regular), { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '400px', textAlign: 'left' }) }, description)),
                react_1["default"].createElement("div", { style: { display: 'flex', gap: '16px', alignItems: 'flex-end' } },
                    react_1["default"].createElement(RoundedToggleButton_1.RoundedToggleButton, { icon: expanded ? sharp_solid_svg_icons_1.faCaretUp : sharp_solid_svg_icons_1.faCaretDown, label: expanded ? 'Less' : 'More', onClick: function () { return setExpanded(function (prevState) { return !prevState; }); } }),
                    react_1["default"].createElement(IconButton_1.IconButton, { style: { alignSelf: 'start' }, icon: assigned ? sharp_solid_svg_icons_1.faCircleMinus : sharp_solid_svg_icons_1.faCirclePlus, variant: assigned ? 'gray' : 'grayBlue', size: 'sm', onClick: onClickButtonTopRight })))));
};
exports.IamRolesCard = IamRolesCard;
