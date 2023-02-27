import { __assign } from "tslib";
import React from 'react';
import { colors } from '../../theme';
import { Typography } from './Typography';
import { SimpleDropDown } from './SimpleDropDown';
export var PickListHeading = function (_a) {
    var existingCount = _a.existingCount, dropDownItems = _a.dropDownItems, dropDownValue = _a.dropDownValue, style = _a.style;
    return (React.createElement("div", { style: __assign({ width: '396px', height: '32px', backgroundColor: colors.gray[10], borderStyle: 'solid', borderWidth: '1px', borderColor: colors.gray[20], borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px', paddingLeft: '16px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between' }, style) },
        React.createElement(Typography, { variant: 'breadcrumbLink' }, "Existing (".concat((existingCount === null || existingCount === void 0 ? void 0 : existingCount.toString()) || '0', ")")),
        dropDownItems && dropDownItems.length >= 1 ?
            React.createElement(SimpleDropDown, { menuItems: dropDownItems, value: dropDownValue })
            :
                null));
};
