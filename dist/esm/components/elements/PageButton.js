import { __assign } from "tslib";
import React from 'react';
import { styled } from '@mui/material/styles';
import { colors } from '../../theme';
import { Typography } from './Typography';
export var PageButton = function (_a) {
    var pageNumber = _a.pageNumber, onClick = _a.onClick, style = _a.style, _b = _a.selected, selected = _b === void 0 ? false : _b;
    var MyButton = styled('button')(__assign({ minWidth: '34px', height: '34px', backgroundColor: selected ? colors.blue[5] : colors.white, borderStyle: 'solid', borderWidth: '1px', borderColor: selected ? colors.blue[40] : colors.gray[20], borderRadius: '4px', paddingTop: '6px', paddingBottom: '6px', paddingLeft: '12px', paddingRight: '12px', '&:hover': {
            backgroundColor: colors.blue[5],
            borderColor: colors.blue[30]
        } }, style));
    return (React.createElement(MyButton, { onClick: onClick },
        React.createElement(Typography, { variant: 'body-regular', style: { color: selected ? colors.blue[60] : colors.gray[70] } }, pageNumber.toString())));
};
