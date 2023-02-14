import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../theme';
var SegmentedControl = function (_a) {
    var items = _a.items, _b = _a.multiSelect, multiSelect = _b === void 0 ? false : _b, _c = _a.ariaLabel, ariaLabel = _c === void 0 ? 'segmented control' : _c;
    var _d = useState(''), value = _d[0], setValue = _d[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    if (items && items.length >= 1) {
        return (React.createElement(ToggleButtonGroup, { value: value, exclusive: !multiSelect, onChange: handleChange, "aria-label": ariaLabel, sx: {
                borderWidth: '0px'
            } }, items.map(function (item, index) {
            return (React.createElement(ToggleButton, { key: index, value: item.value, "aria-label": item.ariaLabel, selected: item.selected, onClick: item.onClick, onChange: item.onChange, disabled: item.disabled || false, sx: {
                    backgroundColor: colors.gray[10],
                    paddingLeft: '14px',
                    paddingRight: '14px',
                    '&.Mui-selected': {
                        backgroundColor: colors.white
                    }
                } }, React.isValidElement(item.icon) ?
                (item.icon)
                :
                    React.createElement(FontAwesomeIcon, { icon: item.icon })));
        })));
    }
    return (React.createElement("div", null));
};
export default SegmentedControl;
