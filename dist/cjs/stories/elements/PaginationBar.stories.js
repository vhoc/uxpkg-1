"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var PaginationBar_1 = require("../../components/elements/PaginationBar");
var Paginator_1 = require("../../components/elements/Paginator");
var react_1 = tslib_1.__importDefault(require("react"));
exports["default"] = {
    title: 'composite/PaginationBar',
    component: PaginationBar_1.PaginationBar
};
exports.Default = {
    args: {
        caption: '1-50 of 1234 Total resources',
        style: {
            width: '800px'
        },
        children: react_1["default"].createElement(Paginator_1.Paginator, { count: 10, page: 2, onChange: function () { return alert("Change page event."); }, boundaryCount: 1 })
    }
};
