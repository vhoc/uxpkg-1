"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var AppHeader_1 = tslib_1.__importDefault(require("../../components/elements/AppHeader"));
var sample_data_1 = require("../../util/sample-data");
exports["default"] = {
    title: 'Composite/AppHeader',
    component: AppHeader_1["default"]
};
exports.Default = {
    args: {
        variant: 'default',
        imgUrl: 'https://uxneighbor.com/customer-files/procyon/procyon-logo.png',
        userName: 'John Doe',
        userRole: 'coke/admin',
        dropDownMenuItems: sample_data_1.menu3Items,
        onClickNotificationButton: function () { return alert("Some action triggered."); }
    }
};
