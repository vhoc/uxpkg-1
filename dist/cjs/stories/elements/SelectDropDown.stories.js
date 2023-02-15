"use strict";
exports.__esModule = true;
exports.NoItems = exports.Default = void 0;
var tslib_1 = require("tslib");
var SelectDropDown_1 = tslib_1.__importDefault(require("../../components/elements/SelectDropDown"));
var material_1 = require("@mui/material");
exports["default"] = {
    title: 'elements/Inputs/SelectDropDown',
    component: SelectDropDown_1["default"],
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
exports.NoItems = {
    args: {
        value: "",
        menuItems: []
    }
};
