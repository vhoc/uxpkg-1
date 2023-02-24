"use strict";
exports.__esModule = true;
exports.Spinner = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Ring_1 = require("./Ring");
var ProcyonShield_1 = require("./ProcyonShield");
require("./Spinner.css");
var Spinner = function () {
    return (react_1["default"].createElement("div", { style: {
            width: 'fit-content',
            height: '53px',
            display: 'flex',
            justifyContent: 'center'
        } },
        react_1["default"].createElement(Ring_1.Ring, { style: {
                position: 'relative',
                left: '0'
            }, className: 'animationSpin' }),
        react_1["default"].createElement(ProcyonShield_1.ProcyonShield, { style: {
                position: 'relative',
                top: '11px',
                left: '-38px'
            } })));
};
exports.Spinner = Spinner;
