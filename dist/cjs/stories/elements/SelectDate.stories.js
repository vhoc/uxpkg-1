"use strict";
exports.__esModule = true;
exports.Open = exports.Default = void 0;
var SelectDate_1 = require("../../components/elements/SelectDate");
exports["default"] = {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate_1.SelectDate
};
var date = new Date();
exports.Default = {
    args: {
        onChange: function () { return console.log("Date changed"); },
        //onClick: () => alert(`Component clicked`),
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date',
        error: false
    }
};
exports.Open = {
    args: {
        onChange: function () { return date; },
        //onClick: () => alert(`Component clicked`),
        value: "02/22/2024",
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date'
    }
};
