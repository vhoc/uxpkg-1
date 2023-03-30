import React from "react";
import { Bar } from "@ant-design/plots";
export var ChartPercentBar = function (_a) {
    var data = _a.data, _b = _a.legend, legend = _b === void 0 ? true : _b, _c = _a.maxBarWidth, maxBarWidth = _c === void 0 ? 4 : _c, _d = _a.height, height = _d === void 0 ? 36 : _d, criteria = _a.criteria, _e = _a.intervalPadding, intervalPadding = _e === void 0 ? 0 : _e;
    var colors = data.map(function (item) { return item.color; });
    return (React.createElement("div", { style: {
            marginTop: '-7px'
        } },
        React.createElement(Bar, { autoFit: true, data: data, xField: 'value', yField: criteria, seriesField: 'risk', isPercent: true, isStack: true, maxBarWidth: maxBarWidth, height: height, 
            //color={['#a8d08d', '#ffe5b0', '#ff9c4a', '#db573f', ]}
            color: colors, padding: [30, 0, 0, 0,], legend: legend ? { layout: 'horizontal', itemSpacing: 5 } : false, marginRatio: 0, intervalPadding: intervalPadding, xAxis: {
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
                tickLine: null,
                subTickLine: null,
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
