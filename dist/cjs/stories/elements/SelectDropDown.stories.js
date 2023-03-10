"use strict";
exports.__esModule = true;
exports.NoItems = exports.WithLabel = exports.Default = void 0;
var SelectDropDown_1 = require("../../components/elements/SelectDropDown");
var material_1 = require("@mui/material");
exports["default"] = {
    title: 'elements/Inputs/SelectDropDown',
    component: SelectDropDown_1.SelectDropDown,
    subcomponents: { MenuItem: material_1.MenuItem }
};
exports.Default = {
    args: {
        value: "",
        menuItems: [
            {
                value: "1",
                label: 'First item',
                selected: true
            },
            {
                value: "2",
                label: 'Seconds item'
            },
            {
                value: "3",
                label: 'Third item'
            },
        ]
    }
};
exports.WithLabel = {
    args: {
        label: 'This is a label',
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
