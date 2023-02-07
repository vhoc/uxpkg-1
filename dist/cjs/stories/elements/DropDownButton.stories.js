"use strict";
exports.__esModule = true;
exports.GrayRed = exports.GrayBlue = exports.Gray = exports.Primary = void 0;
var DropDownButton_1 = require("../../components/elements/DropDownButton");
var sample_data_1 = require("../../util/sample-data");
exports["default"] = {
    title: 'Elements/Buttons/DropDownButton',
    component: DropDownButton_1.DropDownButton
};
exports.Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        menuItems: sample_data_1.menuItems
    }
};
exports.Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        menuItems: sample_data_1.menuItems
    }
};
exports.GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        menuItems: sample_data_1.menuItems
    }
};
exports.GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        menuItems: sample_data_1.menuItems
    }
};
