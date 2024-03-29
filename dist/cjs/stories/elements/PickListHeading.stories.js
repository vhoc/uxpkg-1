"use strict";
exports.__esModule = true;
exports.WithoutDropdown = exports.Default = void 0;
var PickListHeading_1 = require("../../components/elements/PickListHeading");
exports["default"] = {
    title: 'composite/PickList Elements/PickListHeading',
    component: PickListHeading_1.PickListHeading
};
exports.Default = {
    args: {
        title: 'Existing (123)',
        onChange: function () { return alert("SimpleDropDown onChange event!"); },
        dropDownItems: [
            {
                label: 'Show: Users & Groups',
                value: 'all'
            },
            {
                label: 'Show: Users',
                value: 'users'
            },
            {
                label: 'Show: Groups',
                value: 'groups'
            }
        ]
    }
};
exports.WithoutDropdown = {
    args: {
        title: 'Existing (123)',
        showDropDown: false
    }
};
