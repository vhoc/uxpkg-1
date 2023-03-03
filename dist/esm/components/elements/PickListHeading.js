import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { Typography } from './Typography';
import { SimpleDropDown } from './SimpleDropDown';
export var PickListHeading = function (_a) {
    var title = _a.title, dropDownItems = _a.dropDownItems, dropDownValue = _a.dropDownValue, style = _a.style, onChange = _a.onChange;
    return (React.createElement("div", { style: __assign({ width: '396px', height: '32px', backgroundColor: colors.gray[10], borderStyle: 'solid', borderWidth: '1px', borderColor: colors.gray[20], borderTopLeftRadius: '4px', borderTopRightRadius: '4px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', paddingLeft: '16px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between' }, style) },
        React.createElement(Typography, { variant: 'breadcrumbLink' }, title),
        dropDownItems && dropDownItems.length >= 1 ?
            React.createElement(SimpleDropDown, { menuItems: dropDownItems, value: dropDownValue, onChange: onChange })
            :
                null));
};
