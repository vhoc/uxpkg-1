import React, { useState } from 'react';
import { ToggleButtonGroup } from '@mui/material';
var SegmentedControl = function (_a) {
    var children = _a.children, _b = _a.multiSelect, multiSelect = _b === void 0 ? false : _b, _c = _a.ariaLabel, ariaLabel = _c === void 0 ? 'segmented control' : _c;
    var _d = useState(''), value = _d[0], setValue = _d[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (React.createElement(ToggleButtonGroup, { value: value, exclusive: !multiSelect, onChange: handleChange, "aria-label": ariaLabel }, children));
};
export default SegmentedControl;
