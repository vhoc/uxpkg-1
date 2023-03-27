"use strict";
exports.__esModule = true;
exports.Default = void 0;
var DonutChartCard_1 = require("../../../components/elements/Dashboard/DonutChartCard");
exports["default"] = {
    title: 'dashboard/DonutChartCard',
    component: DonutChartCard_1.DonutChartCard
};
exports.Default = {
    args: {
        title: 'Identity Intelligence',
        shortTitle: 'Identities',
        items: [
            {
                type: 'Critical',
                color: '#DA5942',
                value: 240,
                percent: 40,
                caption: 'Excessive Privilege'
            },
            {
                type: 'High',
                color: '#FF9B4B',
                value: 90,
                percent: 15,
                caption: 'Excessive Privilege'
            },
            {
                type: 'Medium',
                color: '#FFE4AF',
                value: 90,
                percent: 15,
                caption: 'Excessive Privilege'
            },
            {
                type: 'Low',
                color: '#A7CF8C',
                value: 180,
                percent: 30,
                caption: 'Excessive Privilege'
            }
        ]
    }
};
