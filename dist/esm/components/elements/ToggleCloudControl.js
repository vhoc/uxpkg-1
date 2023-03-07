import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { colors } from '../../theme';
import imgAwsColor from '../../assets/icons/aws-color-18px.png';
import imgAwsGray from '../../assets/icons/aws-gray-18px.png';
import imgGoogleColor from '../../assets/icons/google-color-18px.png';
import imgGoogleGray from '../../assets/icons/google-gray-18px.png';
import imgAzureColor from '../../assets/icons/azure-color-18px.png';
import imgAzureGray from '../../assets/icons/azure-gray-18px.png';
export var ToggleCloudControl = function (_a) {
    var _b = _a.ariaLabel, ariaLabel = _b === void 0 ? 'cloud control' : _b, _c = _a.multiSelect, multiSelect = _c === void 0 ? false : _c, _d = _a.value, value = _d === void 0 ? ['aws'] : _d, onChange = _a.onChange;
    return (React.createElement(ToggleButtonGroup, { value: value, exclusive: !multiSelect, onChange: onChange, "aria-label": ariaLabel, sx: {
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
            React.createElement("img", { src: (value === 'aws' || (Array.isArray(value) && value.find(function (value) { return value === 'aws'; }))) ?
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
            React.createElement("img", { src: (value === 'google' || (Array.isArray(value) && value.find(function (value) { return value === 'google'; }))) ? imgGoogleColor : imgGoogleGray, alt: 'Google' })),
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
            React.createElement("img", { src: (value === 'azure' || (Array.isArray(value) && value.find(function (value) { return value === 'azure'; }))) ? imgAzureColor : imgAzureGray, alt: 'Azure' }))));
};
