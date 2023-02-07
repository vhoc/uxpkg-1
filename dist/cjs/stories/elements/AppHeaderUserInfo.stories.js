"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var AppHeaderUserInfo_1 = tslib_1.__importDefault(require("../../components/elements/AppHeaderUserInfo"));
exports["default"] = {
    title: 'Elements/AppHeader/AppHeaderUserInfo',
    component: AppHeaderUserInfo_1["default"]
};
exports.Default = {
    args: {
        userName: 'John Doe',
        userRole: 'coke/admin'
    }
};
