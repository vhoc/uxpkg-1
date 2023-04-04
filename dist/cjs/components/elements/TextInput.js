"use strict";
exports.__esModule = true;
exports.TextInput = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var material_1 = require("@mui/material");
var theme_1 = require("../../theme");
var styles_1 = require("@mui/material/styles");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Typography_1 = require("./Typography");
var MyInput = (0, styles_1.styled)(material_1.OutlinedInput)({
    backgroundColor: theme_1.colors.white,
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    color: theme_1.colors.gray[90],
    borderColor: theme_1.colors.gray[20],
    minHeight: '40px',
    '&:hover': {
        backgroundColor: theme_1.colors.blue[5],
        borderColor: theme_1.colors.gray[20],
        borderWidth: '0px',
        border: 'none'
    },
    '&:disabled': {
        borderColor: theme_1.colors.gray[20],
        color: theme_1.colors.gray[30]
    },
    '&.Mui-focused fieldset': {
        borderColor: theme_1.colors.blue[40] + ' !important',
        borderWidth: '1px !important',
        //border: 'inherited',
        boxShadow: 'none'
    }
});
var TextInput = function (_a) {
    var label = _a.label, autoComplete = _a.autoComplete, autoFocus = _a.autoFocus, classes = _a.classes, defaultValue = _a.defaultValue, _b = _a.disabled, disabled = _b === void 0 ? false : _b, error = _a.error, id = _a.id, icon = _a.icon, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, _c = _a.iconPosition, iconPosition = _c === void 0 ? 'start' : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.multiline, multiline = _e === void 0 ? false : _e, _f = _a.readOnly, readOnly = _f === void 0 ? false : _f, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.rows, rows = _h === void 0 ? 1 : _h, sx = _a.sx, type = _a.type, value = _a.value, onClickEndIcon = _a.onClickEndIcon, iconStyle = _a.iconStyle, props = tslib_1.__rest(_a, ["label", "autoComplete", "autoFocus", "classes", "defaultValue", "disabled", "error", "id", "icon", "name", "onChange", "placeholder", "iconPosition", "fullWidth", "multiline", "readOnly", "required", "rows", "sx", "type", "value", "onClickEndIcon", "iconStyle"]);
    return (react_1["default"].createElement(material_1.FormControl, { sx: tslib_1.__assign({ fontFamily: 'IBM Plex Sans', p: 0, minHeight: '40px', '&:hover fieldset': {
                borderColor: theme_1.colors.gray[20] + ' !important',
                borderWidth: '1px',
                boxShadow: 'none'
            } }, sx), size: 'small', disabled: disabled },
        label && label.length >= 1 ?
            react_1["default"].createElement(Typography_1.Typography, { variant: 'body-regular', style: {
                    marginBottom: '4px'
                } }, label)
            :
                null,
        react_1["default"].createElement(MyInput, tslib_1.__assign({ id: id, autoComplete: autoComplete, autoFocus: autoFocus, classes: classes, defaultValue: defaultValue, error: error, name: name, onChange: onChange, placeholder: placeholder, fullWidth: fullWidth, multiline: multiline, readOnly: readOnly, required: required, rows: rows, sx: { width: '100%' }, type: type, value: value, startAdornment: icon && iconPosition === 'start' ?
                react_1["default"].createElement(material_1.InputAdornment, { position: iconPosition },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon, style: { color: theme_1.colors.gray[30] } }))
                :
                    null, endAdornment: icon && iconPosition === 'end' ?
                react_1["default"].createElement(material_1.InputAdornment, { position: iconPosition, onClick: onClickEndIcon },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon, style: iconStyle }))
                :
                    null }, props))));
};
exports.TextInput = TextInput;
