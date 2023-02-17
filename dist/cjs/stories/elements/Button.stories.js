"use strict";
exports.__esModule = true;
exports.Success = exports.GrayRed = exports.GrayBlue = exports.Gray = exports.Primary = void 0;
var Button_1 = require("../../components/elements/Button");
exports["default"] = {
    title: 'Elements/Buttons/Button',
    component: Button_1.Button
};
exports.Primary = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Default button'
    }
};
exports.Gray = {
    args: {
        variant: 'gray',
        size: 'sm',
        children: 'Gray button'
    }
};
exports.GrayBlue = {
    args: {
        variant: 'grayBlue',
        size: 'sm',
        children: 'GrayBlue button'
    }
};
exports.GrayRed = {
    args: {
        variant: 'grayRed',
        size: 'sm',
        children: 'GrayRed button'
    }
};
exports.Success = {
    args: {
        variant: 'success',
        size: 'sm',
        children: 'Success button'
    }
};
