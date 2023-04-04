import { __assign, __rest } from "tslib";
import React from 'react';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { colors } from '../../theme';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from './Typography';
var MyInput = styled(OutlinedInput)({
    backgroundColor: colors.white,
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    color: colors.gray[90],
    borderColor: colors.gray[20],
    minHeight: '40px',
    '&:hover': {
        backgroundColor: colors.blue[5],
        borderColor: colors.gray[20],
        borderWidth: '0px',
        border: 'none'
    },
    '&:disabled': {
        borderColor: colors.gray[20],
        color: colors.gray[30]
    },
    '&.Mui-focused fieldset': {
        borderColor: colors.blue[40] + ' !important',
        borderWidth: '1px !important',
        //border: 'inherited',
        boxShadow: 'none'
    }
});
export var TextInput = function (_a) {
    var label = _a.label, autoComplete = _a.autoComplete, autoFocus = _a.autoFocus, classes = _a.classes, defaultValue = _a.defaultValue, _b = _a.disabled, disabled = _b === void 0 ? false : _b, error = _a.error, id = _a.id, icon = _a.icon, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, _c = _a.iconPosition, iconPosition = _c === void 0 ? 'start' : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.multiline, multiline = _e === void 0 ? false : _e, _f = _a.readOnly, readOnly = _f === void 0 ? false : _f, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.rows, rows = _h === void 0 ? 1 : _h, sx = _a.sx, type = _a.type, value = _a.value, onClickEndIcon = _a.onClickEndIcon, iconStyle = _a.iconStyle, props = __rest(_a, ["label", "autoComplete", "autoFocus", "classes", "defaultValue", "disabled", "error", "id", "icon", "name", "onChange", "placeholder", "iconPosition", "fullWidth", "multiline", "readOnly", "required", "rows", "sx", "type", "value", "onClickEndIcon", "iconStyle"]);
    return (React.createElement(FormControl, { sx: __assign({ fontFamily: 'IBM Plex Sans', p: 0, minHeight: '40px', '&:hover fieldset': {
                borderColor: colors.gray[20] + ' !important',
                borderWidth: '1px',
                boxShadow: 'none'
            } }, sx), size: 'small', disabled: disabled },
        label && label.length >= 1 ?
            React.createElement(Typography, { variant: 'body-regular', style: {
                    marginBottom: '4px'
                } }, label)
            :
                null,
        React.createElement(MyInput, __assign({ id: id, autoComplete: autoComplete, autoFocus: autoFocus, classes: classes, defaultValue: defaultValue, error: error, name: name, onChange: onChange, placeholder: placeholder, fullWidth: fullWidth, multiline: multiline, readOnly: readOnly, required: required, rows: rows, sx: { width: '100%' }, type: type, value: value, startAdornment: icon && iconPosition === 'start' ?
                React.createElement(InputAdornment, { position: iconPosition },
                    React.createElement(FontAwesomeIcon, { icon: icon, style: { color: colors.gray[30] } }))
                :
                    null, endAdornment: icon && iconPosition === 'end' ?
                React.createElement(InputAdornment, { position: iconPosition, onClick: onClickEndIcon },
                    React.createElement(FontAwesomeIcon, { icon: icon, style: iconStyle }))
                :
                    null }, props))));
};
