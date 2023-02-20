import { __assign, __rest } from "tslib";
import * as React from 'react';
import { useState } from 'react';
import { Tabs, ThemeProvider } from '@mui/material';
import { Tab } from '@mui/material';
import { colors } from '../../theme';
import { mtheme } from "../../theme";
export var TabPanel = function (_a) {
    var children = _a.children, index = _a.index, value = _a.value, props = __rest(_a, ["children", "index", "value"]);
    return (React.createElement("div", __assign({ role: 'tabpanel', hidden: value !== index, id: "tabpanel-".concat(index), "aria-labelledby": "tab-".concat(index), style: {
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '24px',
            paddingRight: '24px',
            backgroundColor: colors.white
        } }, props), value === index ?
        (React.createElement(ThemeProvider, { theme: mtheme },
            React.createElement("div", null, children)))
        :
            null));
};
var a11yProps = function (index) {
    return {
        id: "tab-".concat(index),
        'aria-controls': "tabpanel-".concat(index)
    };
};
export var TabGroup = function (_a) {
    var tabs = _a.tabs;
    var _b = useState(0), value = _b[0], setValue = _b[1];
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
            color: value === currentValue ? colors.blue[60] : colors.gray[70],
            bgcolor: value === currentValue ? colors.white : colors.blue[5],
            borderBottom: value !== currentValue ? "1px solid ".concat(colors.blue[30]) : 'none',
            borderTop: "1px solid ".concat(colors.blue[30]),
            borderLeft: "1px solid ".concat(colors.blue[30]),
            borderRight: "1px solid ".concat(colors.blue[30]),
            borderRadius: '4px 4px 0px 0px',
            '&:active': {
                bgcolor: colors.white
            }
        };
    };
    return (React.createElement(ThemeProvider, { theme: mtheme },
        React.createElement("div", { style: {
                width: '100%'
            } },
            React.createElement("div", null, tabs && tabs.length >= 1 ?
                React.createElement(Tabs, { value: value, onChange: handleChange, "aria-label": "here are the tabs", TabIndicatorProps: {
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
                        bgcolor: colors.white,
                        borderBottom: "1px solid ".concat(colors.blue[30])
                    } }, tabs.map(function (tab, index) {
                    return (React.createElement(Tab, __assign({ key: index, sx: tabStyles(index), label: tab.label }, a11yProps(index))));
                }))
                :
                    null),
            tabs && tabs.length >= 1 ?
                React.createElement(React.Fragment, null, tabs.map(function (tab, index) {
                    return (React.createElement(TabPanel, { key: index, value: value, index: index }, tab.tabContent));
                }))
                :
                    null)));
};
