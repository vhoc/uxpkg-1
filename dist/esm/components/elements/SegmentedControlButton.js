import React from 'react';
import { ToggleButton } from '@mui/material';
var SegmentedControlButton = function (_a) {
    var style = _a.style, children = _a.children, value = _a.value, _b = _a.ariaLabel, ariaLabel = _b === void 0 ? '' : _b;
    return (React.createElement(ToggleButton, { style: style, value: value, "aria-label": ariaLabel }, children));
};
export default SegmentedControlButton;
