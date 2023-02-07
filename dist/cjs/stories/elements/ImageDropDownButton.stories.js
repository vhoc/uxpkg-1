"use strict";
exports.__esModule = true;
exports.Clear = void 0;
var ImageDropDownButton_1 = require("../../components/elements/ImageDropDownButton");
var sample_data_1 = require("../../util/sample-data");
exports["default"] = {
    title: 'Elements/Buttons/ImageDropDownButton',
    component: ImageDropDownButton_1.ImageDropDownButton
};
exports.Clear = {
    args: {
        variant: 'clear',
        size: 'sm',
        menuItems: sample_data_1.menu3Items
    }
};
