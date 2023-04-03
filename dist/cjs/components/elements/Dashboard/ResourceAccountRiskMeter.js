"use strict";
exports.__esModule = true;
exports.ResourceAccountRiskMeter = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var CloudIcon_1 = require("../../graphical/CloudIcon");
var Typography_1 = require("../Typography");
var ChartPercentBar_1 = require("./ChartPercentBar");
var theme_1 = require("../../../theme");
var ResourceAccountRiskMeter = function (_a) {
    var icon = _a.icon, accountProvider = _a.accountProvider, title = _a.title, compliantUserPercentage = _a.compliantUserPercentage, lowRiskUserPercentage = _a.lowRiskUserPercentage, mediumRiskUserPercentage = _a.mediumRiskUserPercentage, highRiskUserPercentage = _a.highRiskUserPercentage, criticalRiskUserPercentage = _a.criticalRiskUserPercentage, style = _a.style;
    var iconOptions = {
        aws: 'aws',
        gcp: 'gcp',
        azure: 'gcp'
    };
    var selectedType = accountProvider;
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '290px', minWidth: '290px', display: 'flex', gap: '12px' }, style) },
        accountProvider ?
            react_1["default"].createElement("div", { style: {
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: "1px solid ".concat(theme_1.colors.gray[20]),
                    borderRadius: '2px'
                } },
                react_1["default"].createElement(CloudIcon_1.CloudIcon, { type: selectedType, style: { width: '18px', height: '18px' } }))
            :
                icon ?
                    react_1["default"].createElement("div", { style: { width: '32px', height: '32px' } }, icon)
                    :
                        null,
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                width: '80%'
            } },
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular', style: {
                        marginTop: '4px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%'
                    } }, title),
                react_1["default"].createElement(Typography_1.Typography, { variant: 'body-semiBold' }, "".concat(String(compliantUserPercentage || 0), "%"))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(ChartPercentBar_1.ChartPercentBar, { legend: false, 
                    //maxBarWidth={79}
                    //height={109}
                    criteria: 'Users', marginTop: '-36px', data: [
                        {
                            risk: 'Compliant',
                            'Users': 'Users',
                            value: compliantUserPercentage,
                            color: 'rgb(201, 206, 215)'
                        },
                        {
                            risk: 'Low Risk',
                            'Users': 'Users',
                            value: lowRiskUserPercentage,
                            color: '#a8d08d'
                        },
                        {
                            risk: 'Medium Risk',
                            'Users': 'Users',
                            value: mediumRiskUserPercentage,
                            color: '#ffe5b0'
                        },
                        {
                            risk: 'High Risk',
                            'Users': 'Users',
                            value: highRiskUserPercentage,
                            color: '#ff9c4a'
                        },
                        {
                            risk: 'Critial Risk',
                            'Users': 'Users',
                            value: criticalRiskUserPercentage,
                            color: '#db573f'
                        },
                    ] })))));
};
exports.ResourceAccountRiskMeter = ResourceAccountRiskMeter;
