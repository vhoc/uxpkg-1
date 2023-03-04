import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { Typography } from './Typography';
export var PickListRowHeading = function (_a) {
    var title = _a.title, style = _a.style, _b = _a.button, button = _b === void 0 ? 'add' : _b, onClickAddAll = _a.onClickAddAll, onClickRemoveAll = _a.onClickRemoveAll;
    return (React.createElement("div", { style: __assign({ minWidth: 'fit-content', 
            //height: '32px',
            backgroundColor: '#f9fbfc', borderStyle: 'solid', borderWidth: '1px', borderColor: colors.gray[20], paddingLeft: '16px', paddingRight: '16px', paddingTop: '6px', paddingBottom: '6px', display: 'flex', justifyContent: 'space-between', gap: '16px' }, style) },
        React.createElement(Typography, { variant: 'breadcrumbLink' }, title),
        React.createElement(Typography, { variant: 'breadcrumbLink', onClick: button === 'add' ? onClickAddAll : onClickRemoveAll, style: {
                cursor: 'pointer',
                color: button === 'add' ? colors.blue[60] : colors.gray[50]
            } }, button === 'add' ? 'Add all' : 'Remove all')));
};
