"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var FilterBarCategory_1 = tslib_1.__importDefault(require("../../components/elements/FilterBarCategory"));
var FilterBarItem_1 = tslib_1.__importDefault(require("../../components/elements/FilterBarItem"));
exports["default"] = {
    title: 'Elements/FilterBarResources/FilterBarCategory',
    component: FilterBarCategory_1["default"]
};
exports.Default = {
    args: {
        name: 'Access Status',
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(FilterBarItem_1["default"], { name: 'Granted', amount: 2 }),
            react_1["default"].createElement(FilterBarItem_1["default"], { name: 'No Access', amount: 234, checked: true }),
            react_1["default"].createElement(FilterBarItem_1["default"], { name: 'Bookmarked', amount: 3 }))
    }
};
