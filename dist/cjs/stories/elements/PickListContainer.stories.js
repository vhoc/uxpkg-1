"use strict";
exports.__esModule = true;
exports.WithChildren = exports.Default = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var PickListContainer_1 = require("../../components/elements/PickListContainer");
var UserGroupBar_1 = require("../../components/elements/UserGroupBar");
exports["default"] = {
    title: 'composite/PickList Elements/PickListContainer',
    component: PickListContainer_1.PickListContainer
};
exports.Default = {
    args: {
        style: {
            width: '396px',
            height: '459px'
        }
    }
};
exports.WithChildren = {
    args: {
        style: {
            width: '396px',
            height: '459px'
        },
        children: react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "bill@company.com", name: "Bill Murray", removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "user" }),
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "keanu@company.com", name: "Keanu Reeves", removeButtonOnClick: function () { return console.log('click'); }, selected: true, style: {
                    width: '394px'
                }, type: "user" }),
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "ana@company.com", name: "Ana de Armas", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "user" }),
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }),
            react_1["default"].createElement(UserGroupBar_1.UserGroupBar, { addButtonOnClick: function () { return console.log('click'); }, caption: "12 users", name: "Billing Team", assigned: true, removeButtonOnClick: function () { return console.log('click'); }, style: {
                    width: '394px'
                }, type: "group" }))
    }
};
