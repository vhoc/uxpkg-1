"use strict";
exports.__esModule = true;
exports.Default = void 0;
var SelectTime_1 = require("../../components/elements/SelectTime");
exports["default"] = {
    title: 'elements/Inputs/SelectTime',
    component: SelectTime_1.SelectTime
};
exports.Default = {
    args: {
        onChange: function () { return console.log("Time changed"); },
        value: "11:00",
        inputFormat: "hh:mm",
        placeholder: 'Select Time'
    }
};
