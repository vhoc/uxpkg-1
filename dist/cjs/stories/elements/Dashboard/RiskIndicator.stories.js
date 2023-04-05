"use strict";
exports.__esModule = true;
exports.Offline = exports.Online = exports.Critical = exports.High = exports.Medium = exports.Low = void 0;
var RiskIndicator_1 = require("../../../components/elements/Dashboard/RiskIndicator");
exports["default"] = {
    title: 'dashboard/AccountRiskItems/RiskIndicator',
    component: RiskIndicator_1.RiskIndicator
};
exports.Low = {
    args: {
        variant: 'low'
    }
};
exports.Medium = {
    args: {
        variant: 'medium'
    }
};
exports.High = {
    args: {
        variant: 'high'
    }
};
exports.Critical = {
    args: {
        variant: 'critical'
    }
};
exports.Online = {
    args: {
        variant: 'online'
    }
};
exports.Offline = {
    args: {
        variant: 'offline'
    }
};
