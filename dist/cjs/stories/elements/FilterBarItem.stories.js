"use strict";
exports.__esModule = true;
exports.Default = void 0;
var FilterBarItem_1 = require("../../components/elements/FilterBarItem");
exports["default"] = {
    title: 'Elements/Controls/FilterBarItem',
    component: FilterBarItem_1.FilterBarItem
};
exports.Default = {
    args: {
        name: 'Granted',
        checked: true,
        amount: 2,
        onClick: function () { return alert('Trigger something.'); }
    }
};
