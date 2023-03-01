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
    var value = _a.value, onChange = _a.onChange, _b = _a.ariaLabel, ariaLabel = _b === void 0 ? 'cloud control' : _b;
    return (React.createElement(ToggleButtonGroup, { value: value, exclusive: true, onChange: onChange, "aria-label": ariaLabel, sx: {
            height: '40px',
            borderWidth: '0px'
        } },
        React.createElement(ToggleButton, { value: 'aws', "aria-label": 'aws', selected: value === 'aws', 
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
            React.createElement("img", { src: value === 'aws' ? imgAwsColor : imgAwsGray, alt: 'AWS' })),
        React.createElement(ToggleButton, { value: 'google', "aria-label": 'google', selected: value === 'google', 
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
            React.createElement("img", { src: value === 'google' ? imgGoogleColor : imgGoogleGray, alt: 'Google' })),
        React.createElement(ToggleButton, { value: 'azure', "aria-label": 'azure', selected: value === 'azure', 
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
            React.createElement("img", { src: value === 'azure' ? imgAzureColor : imgAzureGray, alt: 'Azure' }))));
};
