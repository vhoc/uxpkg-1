"use strict";
exports.__esModule = true;
exports.TabGroup = exports.TabPanel = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var theme_1 = require("../../theme");
var theme_2 = require("../../theme");
var TabPanel = function (_a) {
    var children = _a.children, index = _a.index, value = _a.value, props = tslib_1.__rest(_a, ["children", "index", "value"]);
    return (React.createElement("div", tslib_1.__assign({ role: 'tabpanel', hidden: value !== index, id: "tabpanel-".concat(index), "aria-labelledby": "tab-".concat(index), style: {
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '24px',
            paddingRight: '24px',
            backgroundColor: theme_1.colors.white
        } }, props), value === index ?
        (React.createElement(material_1.ThemeProvider, { theme: theme_2.mtheme },
            React.createElement("div", null, children)))
        :
            null));
};
exports.TabPanel = TabPanel;
var a11yProps = function (index) {
    return {
        id: "tab-".concat(index),
        'aria-controls': "tabpanel-".concat(index)
    };
};
var TabGroup = function (_a) {
    var tabs = _a.tabs;
    var _b = (0, react_1.useState)(0), value = _b[0], setValue = _b[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    var tabStyles = function (currentValue) {
        return {
            marginRight: '4px',
            minHeight: '41px',
            fontWeight: value === currentValue ? 'bold' : 'regular',
            textTransform: 'capitalize',
            paddingRight: '25px',
            paddingLeft: '25px',
            color: value === currentValue ? theme_1.colors.blue[60] : theme_1.colors.gray[70],
            bgcolor: value === currentValue ? theme_1.colors.white : theme_1.colors.blue[5],
            borderBottom: value !== currentValue ? "1px solid ".concat(theme_1.colors.blue[30]) : 'none',
            borderTop: "1px solid ".concat(theme_1.colors.blue[30]),
            borderLeft: "1px solid ".concat(theme_1.colors.blue[30]),
            borderRight: "1px solid ".concat(theme_1.colors.blue[30]),
            borderRadius: '4px 4px 0px 0px',
            '&:active': {
                bgcolor: theme_1.colors.white
            }
        };
    };
    return (React.createElement(material_1.ThemeProvider, { theme: theme_2.mtheme },
        React.createElement("div", { style: {
                width: '100%'
            } },
            React.createElement("div", null, tabs && tabs.length >= 1 ?
                React.createElement(material_1.Tabs, { value: value, onChange: handleChange, "aria-label": "here are the tabs", TabIndicatorProps: {
                        style: {
                            display: 'none'
                        }
                    }, style: {
                        height: '41px',
                        minHeight: '41px',
                        maxHeight: '41px'
                    }, sx: {
                        height: '41px',
                        minHeight: '41px',
                        maxHeight: '41px',
                        '& .MuiTabs-flexContainer': {
                            height: '41px',
                            minHeight: '41px',
                            maxHeight: '41px'
                        },
                        bgcolor: theme_1.colors.white,
                        borderBottom: "1px solid ".concat(theme_1.colors.blue[30])
                    } }, tabs.map(function (tab, index) {
                    return (React.createElement(material_2.Tab, tslib_1.__assign({ key: index, sx: tabStyles(index), label: tab.label }, a11yProps(index))));
                }))
                :
                    null),
            tabs && tabs.length >= 1 ?
                React.createElement(React.Fragment, null, tabs.map(function (tab, index) {
                    return (React.createElement(exports.TabPanel, { key: index, value: value, index: index }, tab.tabContent));
                }))
                :
                    null)));
};
exports.TabGroup = TabGroup;
