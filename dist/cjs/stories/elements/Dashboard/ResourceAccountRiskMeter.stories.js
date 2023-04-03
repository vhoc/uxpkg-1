"use strict";
exports.__esModule = true;
exports.Default = void 0;
var ResourceAccountRiskMeter_1 = require("../../../components/elements/Dashboard/ResourceAccountRiskMeter");
exports["default"] = {
    title: 'dashboard/TopAccountsRiskCard/ResourceAccountRiskMeter',
    component: ResourceAccountRiskMeter_1.ResourceAccountRiskMeter
};
exports.Default = {
    args: {
        title: 'AWS 12312310291',
        accountProvider: 'aws',
        compliantUserPercentage: 69,
        lowRiskUserPercentage: 10,
        mediumRiskUserPercentage: 10,
        highRiskUserPercentage: 8,
        criticalRiskUserPercentage: 3
    }
};
