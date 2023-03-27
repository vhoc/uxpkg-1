"use strict";
exports.__esModule = true;
exports.DonutChart = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var plots_1 = require("@ant-design/plots");
var DonutChart = function (_a) {
    var shortTitle = _a.shortTitle, data = _a.data, width = _a.width, height = _a.height;
    var color = data.map(function (item) { return item.color; });
    function renderStatistic(containerWidth, text, style) {
        var _a = (0, plots_1.measureTextWidth)(text, style), textWidth = _a.width, textHeight = _a.height;
        var R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
        var scale = 1;
        if (containerWidth < textWidth) {
            scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }
        var textStyleStr = "width:".concat(containerWidth, "px;");
        return "\n            <div style=\"".concat(textStyleStr, ";font-size:").concat(14, "px;line-height:").concat(scale < 1 ? 1 : 'inherit', ";font-weight:600; font-family: IBM Plex Sans;\">").concat(text, "</div>");
    }
    function renderStatistic2(containerWidth, text, style) {
        var _a = (0, plots_1.measureTextWidth)(text, style), textWidth = _a.width, textHeight = _a.height;
        var R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
        var scale = 1;
        if (containerWidth < textWidth) {
            scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }
        var textStyleStr = "width:".concat(containerWidth, "px;");
        return "\n            <div style=\"".concat(textStyleStr, ";font-size:").concat(24, "px;line-height:").concat(scale < 1 ? 1 : 'inherit', ";font-weight:500; font-family: IBM Plex Sans;\">").concat(text, "</div>");
    }
    return (react_1["default"].createElement(plots_1.Pie, { width: width, height: height, appendPadding: 10, data: data, color: color, angleField: 'value', colorField: 'type', radius: 1, innerRadius: 0.82, legend: false, label: {
            content: ""
        }, interactions: [
            {
                type: 'element-selected'
            },
            {
                type: 'element-active'
            },
            {
                type: 'pie-statistic-active'
            },
        ], statistic: {
            title: {
                offsetY: -4,
                customHtml: function (container, view, datum) {
                    var _a = container.getBoundingClientRect(), width = _a.width, height = _a.height;
                    var d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                    var text = datum ? datum.type : shortTitle;
                    return renderStatistic(d, text || 'Total', {
                        fontSize: 14
                    });
                }
            },
            content: {
                customHtml: function (container, view, datum) {
                    var _a = container.getBoundingClientRect(), width = _a.width, height = _a.height;
                    var d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                    var text = datum ? datum.value : (data.map(function (item) { return item.value; }).reduce(function (partialSum, a) { return partialSum + a; }, 0));
                    return renderStatistic2(d, text, {
                        fontSize: 24
                    });
                }
            }
        } }));
};
exports.DonutChart = DonutChart;
