"use strict";
exports.__esModule = true;
exports.Low = exports.Medium = exports.High = exports.InlineCritical = exports.Critical = void 0;
var ChartItem_1 = require("../../../components/elements/Dashboard/ChartItem");
exports["default"] = {
    title: 'dashboard/ChartItem',
    component: ChartItem_1.ChartItem
};
exports.Critical = {
    args: {
        title: 'Critical',
        color: '#DA5942',
        amount: 240,
        percent: 40,
        caption: 'Excessive Privilege'
    }
};
exports.InlineCritical = {
    args: {
        type: 'inline',
        title: 'Inactive Services',
        color: '#DA5942',
        amount: 240,
        showPercent: false
    }
};
exports.High = {
    args: {
        title: 'High',
        color: '#FF9B4B',
        amount: 90,
        percent: 15,
        caption: 'Excessive Privilege'
    }
};
exports.Medium = {
    args: {
        title: 'Medium',
        color: '#FFE4AF',
        amount: 90,
        percent: 15,
        caption: 'Excessive Privilege'
    }
};
exports.Low = {
    args: {
        title: 'Low',
        color: '#A7CF8C',
        amount: 180,
        percent: 30,
        caption: 'Excessive Privilege'
    }
};
