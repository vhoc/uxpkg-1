"use strict";
exports.__esModule = true;
exports.Default = void 0;
var PickListHeading_1 = require("../../components/elements/PickListHeading");
exports["default"] = {
    title: 'composite/PickList Elements/PickListHeading',
    component: PickListHeading_1.PickListHeading
};
exports.Default = {
    args: {
        existingCount: 123,
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
