import { __assign, __rest } from "tslib";
import React, { useState } from 'react';
import { Typography } from './Typography';
import { Pressable } from './Pressable';
import { colors } from '../../theme';
export var BreadCrumb = function (_a) {
    var style = _a.style, items = _a.items, props = __rest(_a, ["style", "items"]);
    var _b = useState(false), hover = _b[0], setHover = _b[1];
    var _c = useState(false), active = _c[0], setActive = _c[1];
    return (React.createElement("div", __assign({ style: __assign({ display: 'flex' }, style) }, props), items && items.length >= 1 ?
        items.map(function (item, index) {
            return (React.createElement("div", { key: item.label, style: { display: 'flex' } },
                React.createElement(Pressable, { onClick: item.onClick, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, style: {
                        cursor: !item.onClick ? 'default' : 'pointer'
                    } },
                    React.createElement(Typography, { variant: active ? 'breadcrumbLink-pressed' : hover ? 'breadcrumbLink-hover' : 'breadcrumbLink' }, item.label)),
                index === (items.length - 1) ?
                    null
                    :
                        React.createElement(Typography, { variant: 'breadcrumbLink' },
                            React.createElement("span", { style: {
                                    marginLeft: '6px',
                                    marginRight: '6px',
                                    color: colors.gray[30]
                                } }, '>'))));
        })
        :
            null));
};
