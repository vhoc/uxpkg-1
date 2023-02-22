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
        onChange: function () { return alert("Date changed!"); },
        onClick: function () { return alert("Component clicked"); }
    }
};
