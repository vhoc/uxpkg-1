"use strict";
exports.__esModule = true;
exports.Spinner = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Ring_1 = require("./Ring");
var gray_logo_png_1 = tslib_1.__importDefault(require("../../assets/icons/gray-logo.png"));
require("./Spinner.css");
var Spinner = function () {
    return (react_1["default"].createElement("div", { style: {
            width: 'fit-content',
            height: '53px',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: "url(".concat(gray_logo_png_1["default"], ")"),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        } },
        react_1["default"].createElement(Ring_1.Ring, { style: {
                position: 'relative'
            }, className: 'animationSpin' })));
};
exports.Spinner = Spinner;
