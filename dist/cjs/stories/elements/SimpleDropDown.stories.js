"use strict";
exports.__esModule = true;
exports.NoItems = exports.Default = void 0;
var SimpleDropDown_1 = require("../../components/elements/SimpleDropDown");
var material_1 = require("@mui/material");
exports["default"] = {
    title: 'elements/Inputs/SimpleDropDown',
    component: SimpleDropDown_1.SimpleDropDown,
    subcomponents: { MenuItem: material_1.MenuItem }
};
exports.Default = {
    args: {
        value: "",
        menuItems: [
            {
                value: "sort-name",
                label: 'Sort: by Name',
                selected: true
            },
            {
                value: "sort-lastName",
                label: 'Sort: by Last Name'
            },
        ]
    }
};
exports.NoItems = {
    args: {
        value: "",
        menuItems: []
    }
};
