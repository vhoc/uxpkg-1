"use strict";
exports.__esModule = true;
exports.Critical = exports.High = exports.Medium = exports.Low = void 0;
var RiskIndicator_1 = require("../../../components/elements/Dashboard/RiskIndicator");
exports["default"] = {
    title: 'dashboard/AccountRiskItems/RiskIndicator',
    component: RiskIndicator_1.RiskIndicator
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
