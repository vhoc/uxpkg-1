"use strict";
exports.__esModule = true;
exports.Paginator = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var material_3 = require("@mui/material");
var theme_1 = require("../../theme");
//import ArrowLeftIcon from '@mui/icons-material';
//import ArrowRightIcon from '@mui/icons-material/ArrowRight';
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var Paginator = function (_a) {
    var _b = _a.boundaryCount, boundaryCount = _b === void 0 ? 1 : _b, classes = _a.classes, _c = _a.count, count = _c === void 0 ? 1 : _c, _d = _a.page, page = _d === void 0 ? 1 : _d, _e = _a.defaultPage, defaultPage = _e === void 0 ? 1 : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.hideNextButton, hideNextButton = _g === void 0 ? false : _g, _h = _a.hidePrevButton, hidePrevButton = _h === void 0 ? false : _h, _j = _a.showFirstButton, showFirstButton = _j === void 0 ? false : _j, _k = _a.showLastButton, showLastButton = _k === void 0 ? false : _k, _l = _a.siblingCount, siblingCount = _l === void 0 ? 1 : _l, onChange = _a.onChange;
    var MyPagination = (0, material_3.styled)(material_1.Pagination)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        .MuiPaginationItem-text {\n            font-family: IBM Plex Sans !important;\n            color: ", "\n        }\n        .MuiPaginationItem-text:hover {\n            background-color: ", " !important;\n        }\n        .Mui-selected {\n            background-color: ", " !important;\n            color: ", " !important;\n        }\n    "], ["\n        .MuiPaginationItem-text {\n            font-family: IBM Plex Sans !important;\n            color: ", "\n        }\n        .MuiPaginationItem-text:hover {\n            background-color: ", " !important;\n        }\n        .Mui-selected {\n            background-color: ", " !important;\n            color: ", " !important;\n        }\n    "])), theme_1.colors.gray[70], theme_1.colors.blue[5], theme_1.colors.blue[10], theme_1.colors.blue[60]);
    return (react_1["default"].createElement(MyPagination, { boundaryCount: boundaryCount, classes: classes, count: count, page: page, defaultPage: defaultPage, onChange: onChange, disabled: disabled, hideNextButton: hideNextButton, hidePrevButton: hidePrevButton, showFirstButton: showFirstButton, showLastButton: showLastButton, siblingCount: siblingCount, shape: "rounded", renderItem: function (item) { return (react_1["default"].createElement(material_2.PaginationItem, tslib_1.__assign({ slots: {
                previous: function () { return react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCaretLeft, color: theme_1.colors.gray[70] }); },
                next: function () { return react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faCaretRight, color: theme_1.colors.gray[70] }); }
            } }, item))); }, style: {
            backgroundColor: theme_1.colors.white,
            width: 'fit-content'
        } }));
};
exports.Paginator = Paginator;
var templateObject_1;
