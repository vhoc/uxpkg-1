"use strict";
exports.__esModule = true;
exports.Open = exports.Default = void 0;
var SelectDate_1 = require("../../components/elements/SelectDate");
exports["default"] = {
    title: 'elements/Inputs/SelectDate',
    component: SelectDate_1.SelectDate
};
exports.Default = {
    args: {
        onChange: function () { return alert("Date changed!"); },
        //onClick: () => alert(`Component clicked`),
        value: function () { return '2014-08-18T21:11:54'; },
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date'
    }
};
exports.Open = {
    args: {
        onChange: function () { return alert("Date changed!"); },
        //onClick: () => alert(`Component clicked`),
        value: function () { return '2014-08-18T21:11:54'; },
        inputFormat: "MM/DD/YYYY",
        placeholder: 'Select Date'
    }
};
