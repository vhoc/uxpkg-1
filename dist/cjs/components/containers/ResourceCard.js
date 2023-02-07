"use strict";
exports.__esModule = true;
exports.ResourceCard = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var View_1 = require("../layout/View");
var theme_1 = require("../../theme");
var ResourceCard = function (_a) {
    var props = tslib_1.__rest(_a, []);
    return (react_1["default"].createElement(View_1.View, { radius: "4px", borderColor: theme_1.colors.blue[20], borderStyle: 'solid', borderWidth: '1px', backgroundColor: theme_1.colors.white, padding: '16px 16px 16px 24px' },
        react_1["default"].createElement("div", tslib_1.__assign({}, props))));
};
exports.ResourceCard = ResourceCard;
