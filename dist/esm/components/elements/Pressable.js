import { __assign } from "tslib";
import React from 'react';
export var Pressable = function (_a) {
    var onClick = _a.onClick, children = _a.children, style = _a.style;
    return (React.createElement("button", { style: __assign({ background: 'none', border: 'none', cursor: 'pointer' }, style), onClick: onClick }, children));
};
