"use strict";
exports.__esModule = true;
exports.Selected = exports.Default = void 0;
var PageButton_1 = require("../../components/elements/PageButton");
exports["default"] = {
    title: 'elements/Buttons/PageButton',
    component: PageButton_1.PageButton
};
exports.Default = {
    args: {
        pageNumber: 1,
        onClick: function () { return alert("This is page number 1"); }
    }
};
exports.Selected = {
    args: {
        pageNumber: 1,
        onClick: function () { return alert("This is page number 1"); },
        selected: true
    }
};
