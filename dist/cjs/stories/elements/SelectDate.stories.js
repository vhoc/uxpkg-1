"use strict";
exports.__esModule = true;
exports.Default = void 0;
var SelectDate_1 = require("../../components/elements/SelectDate");
exports["default"] = {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate_1.SelectDate
};
exports.Default = {
    args: {
        onChange: function () { return console.log("Date changed"); },
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
        error: false
    }
};
