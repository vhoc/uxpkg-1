import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationItem } from '@mui/material';
import { styled } from '@mui/material';
import { colors } from '../../theme';
//import ArrowLeftIcon from '@mui/icons-material';
//import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/pro-solid-svg-icons';
export var Paginator = function (_a) {
    var _b = _a.boundaryCount, boundaryCount = _b === void 0 ? 1 : _b, classes = _a.classes, _c = _a.count, count = _c === void 0 ? 1 : _c, _d = _a.page, page = _d === void 0 ? 1 : _d, _e = _a.defaultPage, defaultPage = _e === void 0 ? 1 : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.hideNextButton, hideNextButton = _g === void 0 ? false : _g, _h = _a.hidePrevButton, hidePrevButton = _h === void 0 ? false : _h, _j = _a.showFirstButton, showFirstButton = _j === void 0 ? false : _j, _k = _a.showLastButton, showLastButton = _k === void 0 ? false : _k, _l = _a.siblingCount, siblingCount = _l === void 0 ? 1 : _l, onChange = _a.onChange;
    var MyPagination = styled(Pagination)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        .MuiPaginationItem-text {\n            font-family: IBM Plex Sans !important;\n            color: ", "\n        }\n        .MuiPaginationItem-text:hover {\n            background-color: ", " !important;\n        }\n        .Mui-selected {\n            background-color: ", " !important;\n            color: ", " !important;\n        }\n    "], ["\n        .MuiPaginationItem-text {\n            font-family: IBM Plex Sans !important;\n            color: ", "\n        }\n        .MuiPaginationItem-text:hover {\n            background-color: ", " !important;\n        }\n        .Mui-selected {\n            background-color: ", " !important;\n            color: ", " !important;\n        }\n    "])), colors.gray[70], colors.blue[5], colors.blue[10], colors.blue[60]);
    return (React.createElement(MyPagination, { boundaryCount: boundaryCount, classes: classes, count: count, page: page, defaultPage: defaultPage, onChange: onChange, disabled: disabled, hideNextButton: hideNextButton, hidePrevButton: hidePrevButton, showFirstButton: showFirstButton, showLastButton: showLastButton, siblingCount: siblingCount, shape: "rounded", renderItem: function (item) { return (React.createElement(PaginationItem, __assign({ slots: {
                previous: function () { return React.createElement(FontAwesomeIcon, { icon: faCaretLeft, color: colors.gray[70] }); },
                next: function () { return React.createElement(FontAwesomeIcon, { icon: faCaretRight, color: colors.gray[70] }); }
            } }, item))); }, style: {
            backgroundColor: colors.white,
            width: 'fit-content'
        } }));
};
var templateObject_1;
