"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var FilterBarResources_1 = tslib_1.__importDefault(require("../../components/elements/FilterBarResources"));
var FilterBarCategory_1 = tslib_1.__importDefault(require("../../components/elements/FilterBarCategory"));
var FilterBarItem_1 = tslib_1.__importDefault(require("../../components/elements/FilterBarItem"));
exports["default"] = {
    title: 'Composite/FilterBarResources',
    component: FilterBarResources_1["default"]
};
exports.Default = {
    args: {
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(FilterBarCategory_1["default"], { name: 'Access Status' },
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'Granted', amount: 2 }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'No Access', amount: 234, checked: true }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'Bookmarked', amount: 3 })),
            react_1["default"].createElement(FilterBarCategory_1["default"], { name: 'resource types' },
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'EC2 EBS Volume' }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'EC2 Elastic IP' }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'EC2 Instance' }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'EC2 Key Pair' }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'EC2 Load Balancer' }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'EKS' }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'KMS' }),
                react_1["default"].createElement(FilterBarItem_1["default"], { name: 'LAMBDA' })))
    }
};
