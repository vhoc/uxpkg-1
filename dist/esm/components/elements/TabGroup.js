import { __assign } from "tslib";
import * as React from 'react';
import { useState } from 'react';
import { Tabs, ThemeProvider } from '@mui/material';
import { Tab } from '@mui/material';
import { colors } from '../../theme';
import { mtheme } from "../../theme";
import { styled } from '@mui/material/styles';
export var TabPanel = function (_a) {
    var children = _a.children, index = _a.index, value = _a.value, style = _a.style, tabContentHeight = _a.tabContentHeight;
    var MyDiv = styled('div')({
        overflowY: 'auto',
        marginRight: '-12px',
        '&::-webkit-scrollbar': {
            width: '4px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: colors.gray[10],
            borderRadius: '3px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.gray[50],
            borderRadius: '3px'
        }
    });
    return (React.createElement("div", { role: 'tabpanel', hidden: value !== index, id: "tabpanel-".concat(index), "aria-labelledby": "tab-".concat(index), style: __assign({ paddingTop: '14px', paddingBottom: '14px', paddingLeft: '12px', paddingRight: '12px', backgroundColor: colors.white }, style) }, value === index ?
        (React.createElement(ThemeProvider, { theme: mtheme },
            React.createElement(MyDiv, { style: {
                    maxHeight: tabContentHeight,
                    height: tabContentHeight,
                    overflowY: 'auto'
                } }, children)))
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
    var _b = _a.controllable, controllable = _b === void 0 ? false : _b, activeIndex = _a.activeIndex, tabs = _a.tabs, tabContentHeight = _a.tabContentHeight;
    var _c = useState(0), value = _c[0], setValue = _c[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    var tabStyles = function (currentValue) {
        return {
            marginRight: '4px',
            minHeight: '41px',
            fontWeight: 'regular',
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
                React.createElement(Tabs, { value: controllable === true && activeIndex ? activeIndex : value, onChange: !controllable ? handleChange : undefined, "aria-label": "here are the tabs", TabIndicatorProps: {
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
                    return (React.createElement(TabPanel, { key: index, value: value, index: index, tabContentHeight: tabContentHeight }, tab.tabContent));
                }))
                :
                    null)));
};
