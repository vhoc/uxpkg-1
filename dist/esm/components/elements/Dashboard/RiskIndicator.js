import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../../theme';
import { SignalBars } from './SignalBars';
import { Typography } from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignalBars } from '@fortawesome/pro-solid-svg-icons';
import { faSignalSlash } from '@fortawesome/pro-regular-svg-icons';
export var RiskIndicator = function (_a) {
    var variant = _a.variant, style = _a.style;
    return (React.createElement("div", { style: __assign({ width: '84px', backgroundColor: variant === 'online' ? colors.blue[5] : variant === 'offline' ? 'rgb(254, 243, 245)' : colors.gray[5], paddingTop: '5px', paddingRight: '8px', paddingBottom: '3px', paddingLeft: '8px', display: 'flex', gap: '8px', alignItems: 'baseline', borderRadius: '4px' }, style) },
        variant === 'offline' || variant === 'online' ?
            variant === 'online' ?
                React.createElement(FontAwesomeIcon, { icon: faSignalBars, color: colors.blue[60] })
                :
                    React.createElement(FontAwesomeIcon, { icon: faSignalSlash, color: colors.red[50] })
            :
                React.createElement(SignalBars, { variant: variant }),
        React.createElement(Typography, { variant: 'body-regular', style: { textTransform: 'capitalize' } }, variant)));
};
