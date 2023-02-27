"use strict";
exports.__esModule = true;
exports.PickListContainer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Typography_1 = require("./Typography");
var theme_1 = require("../../theme");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var styles_1 = require("@mui/material/styles");
var PickListContainer = function (_a) {
    var children = _a.children, style = _a.style;
    var MyDiv = (0, styles_1.styled)('div')({
        overflowY: 'auto',
        overflowX: 'hidden',
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
    return (react_1["default"].createElement(MyDiv, { style: tslib_1.__assign({ width: '396px', minHeight: '230px', backgroundColor: theme_1.colors.gray[5], borderColor: theme_1.colors.gray[20], borderStyle: 'solid', borderWidth: '1px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: children ? 'flex-start' : 'center' }, style) }, children ?
        children
        :
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '50%',
                    minWidth: '176px',
                    gap: '6px'
                } },
                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faPlusCircle, color: theme_1.colors.gray[20], size: 'lg' }),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'breadcrumbLink', style: {
                        color: theme_1.colors.gray[40],
                        textAlign: 'center'
                    } }, "Drag & drop existing users and groups or click the + icon to add them to this policy"))));
};
exports.PickListContainer = PickListContainer;
