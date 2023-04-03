"use strict";
exports.__esModule = true;
exports.Critical = exports.High = exports.Medium = exports.Low = void 0;
var SignalBars_1 = require("../../../components/elements/Dashboard/SignalBars");
exports["default"] = {
    title: 'dashboard/AccountRiskItems/SignalBars',
    component: SignalBars_1.SignalBars
};
exports.Low = {
    args: {
        level: 'low'
    }
};
exports.Medium = {
    args: {
        level: 'medium'
    }
};
exports.High = {
    args: {
        level: 'high'
    }
};
exports.Critical = {
    args: {
        level: 'critical'
    }
};
