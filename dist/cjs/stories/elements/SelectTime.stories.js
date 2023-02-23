"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var SelectTime_1 = require("../../components/elements/SelectTime");
var dayjs_1 = tslib_1.__importDefault(require("dayjs"));
exports["default"] = {
    title: 'elements/Inputs/SelectTime',
    component: SelectTime_1.SelectTime
};
exports.Default = {
    args: {
        onChange: function () { return console.log("Time changed"); },
        value: (0, dayjs_1["default"])('2024-08-18T21:11:54'),
        inputFormat: "hh:mm A",
        placeholder: 'Select Time'
    }
};
