"use strict";
exports.__esModule = true;
exports.ChartPercentBar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var plots_1 = require("@ant-design/plots");
var ChartPercentBar = function (_a) {
    var data = _a.data, criteria = _a.criteria;
    return (react_1["default"].createElement("div", { style: {
            marginTop: '-7px'
        } },
        react_1["default"].createElement(plots_1.Bar, { data: data, xField: 'value', yField: criteria, seriesField: 'risk', isPercent: true, isStack: true, maxBarWidth: 4, height: 36, color: ['#a8d08d', '#ffe5b0', '#ff9c4a', '#db573f',], padding: [30, 0, 0, 0,], legend: {
                layout: 'horizontal',
                itemSpacing: 5
            }, xAxis: {
                label: {
                    style: {
                        opacity: 0
                    }
                },
                grid: {
                    line: {
                        style: {
                            lineWidth: 0
                        }
                    }
                }
            }, yAxis: {
                label: {
                    style: {
                        opacity: 0
                    }
                },
                grid: {
                    line: {
                        style: {
                            lineWidth: 0
                        }
                    }
                }
            } })));
};
exports.ChartPercentBar = ChartPercentBar;
