import React from "react";
import { Bar } from "@ant-design/plots";
export var ChartPercentBar = function (_a) {
    var data = _a.data, _b = _a.legend, legend = _b === void 0 ? true : _b, _c = _a.maxBarWidth, maxBarWidth = _c === void 0 ? 4 : _c, _d = _a.height, height = _d === void 0 ? 36 : _d, criteria = _a.criteria, _e = _a.intervalPadding, intervalPadding = _e === void 0 ? 0 : _e, _f = _a.marginTop, marginTop = _f === void 0 ? '-7px' : _f;
    var colors = data.map(function (item) { return item.color; });
    return (React.createElement("div", { style: {
            marginTop: marginTop
        } },
        React.createElement(Bar, { autoFit: true, data: data, xField: 'value', yField: criteria, seriesField: 'risk', isPercent: true, isStack: true, maxBarWidth: maxBarWidth, height: height, color: colors, padding: [30, 0, 0, 0,], legend: legend ? { layout: 'horizontal', itemSpacing: 5 } : false, marginRatio: 0, intervalPadding: intervalPadding, xAxis: {
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
