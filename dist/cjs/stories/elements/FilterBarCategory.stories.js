"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var FilterBarCategory_1 = require("../../components/elements/FilterBarCategory");
var FilterBarItem_1 = require("../../components/elements/FilterBarItem");
exports["default"] = {
    title: 'Elements/FilterBarResources/FilterBarCategory',
    component: FilterBarCategory_1.FilterBarCategory
};
exports.Default = {
    args: {
        name: 'Access Status',
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(FilterBarItem_1.FilterBarItem, { name: 'Granted', amount: 2 }),
            react_1["default"].createElement(FilterBarItem_1.FilterBarItem, { name: 'No Access', amount: 234, checked: true }),
            react_1["default"].createElement(FilterBarItem_1.FilterBarItem, { name: 'Bookmarked', amount: 3 }))
    }
};
