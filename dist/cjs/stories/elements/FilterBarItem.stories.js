"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var FilterBarItem_1 = tslib_1.__importDefault(require("../../components/elements/FilterBarItem"));
exports["default"] = {
    title: 'Elements/Controls/FilterBarItem',
    component: FilterBarItem_1["default"]
};
exports.Default = {
    args: {
        name: 'Granted',
        checked: true,
        amount: 2,
        onClick: function () { return alert('Trigger something.'); }
    }
};
