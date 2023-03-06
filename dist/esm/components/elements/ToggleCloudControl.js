import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { colors } from '../../theme';
import imgAwsColor from '../../assets/icons/aws-color-18px.png';
import imgAwsGray from '../../assets/icons/aws-gray-18px.png';
import imgGoogleColor from '../../assets/icons/google-color-18px.png';
import imgGoogleGray from '../../assets/icons/google-gray-18px.png';
import imgAzureColor from '../../assets/icons/azure-color-18px.png';
import imgAzureGray from '../../assets/icons/azure-gray-18px.png';
export var ToggleCloudControl = function (_a) {
    var _b = _a.ariaLabel, ariaLabel = _b === void 0 ? 'cloud control' : _b, _c = _a.multiSelect, multiSelect = _c === void 0 ? false : _c;
    var _d = useState(function () { return ['']; }), values = _d[0], setValues = _d[1];
    console.log(values);
    var handleChange = function (event, newValues) {
        setValues(newValues);
    };
    return (React.createElement(ToggleButtonGroup, { value: values, exclusive: !multiSelect, onChange: handleChange, "aria-label": ariaLabel, sx: {
            height: '40px',
            borderWidth: '0px'
        } },
        React.createElement(ToggleButton, { value: 'aws', "aria-label": 'aws', 
            //onClick={item.onClick}
            //onChange={item.onChange}
            //disabled={item.disabled || false}
            sx: {
                backgroundColor: colors.gray[10],
                paddingLeft: '14px',
                paddingRight: '14px',
                '&.Mui-selected': {
                    backgroundColor: colors.white
                }
            } },
            React.createElement("img", { src: (values === 'aws' || (Array.isArray(values) && values.find(function (value) { return value === 'aws'; }))) ?
                    imgAwsColor
                    :
                        imgAwsGray, alt: 'AWS' })),
        React.createElement(ToggleButton, { value: 'google', "aria-label": 'google', 
            //selected={item.selected}
            //onClick={item.onClick}
            //onChange={item.onChange}
            //disabled={item.disabled || false}
            sx: {
                backgroundColor: colors.gray[10],
                paddingLeft: '14px',
                paddingRight: '14px',
                '&.Mui-selected': {
                    backgroundColor: colors.white
                }
            } },
            React.createElement("img", { src: (values === 'google' || (Array.isArray(values) && values.find(function (value) { return value === 'google'; }))) ? imgGoogleColor : imgGoogleGray, alt: 'Google' })),
        React.createElement(ToggleButton, { value: 'azure', "aria-label": 'azure', 
            //selected={item.selected}
            //onClick={item.onClick}
            //onChange={item.onChange}
            //disabled={item.disabled || false}
            sx: {
                backgroundColor: colors.gray[10],
                paddingLeft: '14px',
                paddingRight: '14px',
                '&.Mui-selected': {
                    backgroundColor: colors.white
                }
            } },
            React.createElement("img", { src: (values === 'azure' || (Array.isArray(values) && values.find(function (value) { return value === 'azure'; }))) ? imgAzureColor : imgAzureGray, alt: 'Azure' }))));
};
