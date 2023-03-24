import { __assign } from "tslib";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '../Typography';
import { CounterItem } from './CounterItem';
import { ChartPercentBar } from './ChartPercentBar';
import { colors } from '../../../theme';
export var CountersCard = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'simple' : _b, icon = _a.icon, title = _a.title, counterItems = _a.counterItems, data = _a.data, criteria = _a.criteria, content = _a.content, style = _a.style;
    var _c = useState(0), total = _c[0], setTotal = _c[1];
    /**
     * Sum the total of the 'count' property for all the items
     * in the counterItems object prop.
     */
    useEffect(function () {
        if (type === 'simple' && counterItems && counterItems.length >= 1) {
            var _sum = counterItems.reduce(function (accumulator, object) {
                return accumulator + object.count;
            }, 0);
            setTotal(_sum);
        }
        if (type === 'percent-bar' && data && data.length >= 1) {
            var _sum = data.reduce(function (accumulator, object) {
                return accumulator + object.value;
            }, 0);
            setTotal(_sum);
        }
    }, [counterItems, type, data]);
    return (React.createElement("div", { style: __assign({ minWidth: type === 'mini' ? '150px' : '250px', width: type === 'mini' ? '150px' : '250px', paddingTop: '12px', paddingRight: '16px', paddingLeft: '16px', paddingBottom: '8px', display: 'flex', flexDirection: 'column', gap: '12px', 
            //justifyContent: 'space-between',
            borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(216, 221, 228)', borderRadius: '4px', backgroundColor: colors.white }, style) },
        React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            React.createElement("div", { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
                icon ? React.createElement(FontAwesomeIcon, { icon: icon, color: colors.gray[70] }) : null,
                React.createElement(Typography, { variant: 'title-regular' }, title)),
            type !== "mini" ?
                React.createElement(Typography, { variant: 'h4-medium' }, String(total))
                :
                    null),
        type === 'percent-bar' ?
            React.createElement(ChartPercentBar, { data: data || [], criteria: title || '' })
            :
                type === 'mini' ?
                    React.createElement(Typography, { variant: 'inputText-typed' }, content)
                    :
                        counterItems && counterItems.length >= 1 ?
                            React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap' } }, counterItems.map(function (item, index) {
                                return (React.createElement(CounterItem, { key: index, element: item.element, count: item.count, style: { marginRight: '36px', marginBottom: '8px' } }));
                            }))
                            :
                                null));
};
