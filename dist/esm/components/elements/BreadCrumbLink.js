import React, { useState } from 'react';
import { Link } from '@mui/material';
import { Typography } from './Typography';
export var BreadCrumbLink = function (_a) {
    var label = _a.label, href = _a.href;
    var _b = useState(false), hover = _b[0], setHover = _b[1];
    var _c = useState(false), active = _c[0], setActive = _c[1];
    return (React.createElement(Link, { onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onMouseDown: function () { return setActive(true); }, onMouseUp: function () { return setActive(false); }, underline: 'none', href: href },
        React.createElement(Typography, { variant: active ? 'breadcrumbLink-pressed' : hover ? 'breadcrumbLink-hover' : 'breadcrumbLink' }, label)));
};
