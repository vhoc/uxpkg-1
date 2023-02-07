"use strict";
exports.__esModule = true;
exports.Warning = exports.Danger = exports.Success = exports.Gray = exports.GrayBlue = void 0;
var Label_1 = require("../../components/elements/Label");
exports["default"] = {
    title: 'Elements/Labels/Label',
    component: Label_1.Label
};
exports.GrayBlue = {
    args: {
        variant: 'grayBlue',
        text: 'Label'
    }
};
exports.Gray = {
    args: {
        variant: 'gray',
        text: 'Label'
    }
};
exports.Success = {
    args: {
        variant: 'success',
        text: 'Label'
    }
};
exports.Danger = {
    args: {
        variant: 'danger',
        text: 'Label'
    }
};
exports.Warning = {
    args: {
        variant: 'warning',
        text: 'Label'
    }
};
