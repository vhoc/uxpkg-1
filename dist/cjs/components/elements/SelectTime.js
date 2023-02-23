"use strict";
exports.__esModule = true;
exports.SelectTime = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var AdapterMoment_1 = require("@mui/x-date-pickers/AdapterMoment");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var x_date_pickers_2 = require("@mui/x-date-pickers");
//import { Box, TextField } from '@mui/material'
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../../theme");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var SelectTime = function (_a) {
    //const [value, setValue] = useState<any>()
    //const [isOpen, setIsOpen] = useState<boolean>(false)
    var onChange = _a.onChange, closeOnSelect = _a.closeOnSelect, value = _a.value, open = _a.open, _b = _a.openTo, openTo = _b === void 0 ? 'hours' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, getOpenDialogAriaText = _a.getOpenDialogAriaText, inputFormat = _a.inputFormat, inputRef = _a.inputRef, onAccept = _a.onAccept, onClose = _a.onClose, onOpen = _a.onOpen, orientation = _a.orientation, readOnly = _a.readOnly, _d = _a.ampm, ampm = _d === void 0 ? true : _d, _e = _a.views, views = _e === void 0 ? ['hours', 'minutes'] : _e;
    var MyTimePicker = (0, styles_1.styled)(x_date_pickers_2.TimePicker)({
        backgroundColor: theme_1.colors.white,
        fontFamily: 'IBM Plex Sans',
        fontSize: '14px',
        color: theme_1.colors.gray[90],
        borderWidth: '1px',
        borderColor: theme_1.colors.gray[20],
        borderRadius: '4px',
        width: 'fit-content',
        //height: '40px',
        //cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme_1.colors.blue[5],
            borderColor: theme_1.colors.gray[20]
        },
        '&:disabled': {
            borderColor: theme_1.colors.gray[20],
            color: theme_1.colors.gray[30]
        },
        '&.MuiOutlinedInput-root fieldset': {
            borderColor: theme_1.colors.blue[40] + ' !important',
            borderWidth: '1px !important',
            //border: 'inherited',
            boxShadow: 'none'
        }
    });
    var MyInput = (0, styles_1.styled)(material_1.TextField)({
        backgroundColor: theme_1.colors.white,
        //cursor: 'pointer',
        border: 'none',
        outline: 'none !important',
        fontFamily: 'IBM Plex Sans !important',
        fontSize: '14px',
        color: theme_1.colors.gray[90],
        borderWidth: '1px',
        borderColor: theme_1.colors.gray[20],
        borderRadius: '4px',
        width: 'fit-content',
        '&:focus': {
            border: 'none',
            outline: 'none !important'
        },
        '&:hover': {
            border: 'none',
            outline: 'none !important'
        },
        "& .MuiOutlinedInput-input": {
            fontFamily: 'IBM Plex Sans',
            color: theme_1.colors.gray[90],
            fontSize: '14px',
            outline: 'none'
        }
    });
    return (react_1["default"].createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterMoment_1.AdapterMoment },
        react_1["default"].createElement(MyTimePicker, { value: value, closeOnSelect: closeOnSelect, onChange: onChange, open: open, disabled: disabled, getOpenDialogAriaText: getOpenDialogAriaText, inputFormat: inputFormat, inputRef: inputRef, onAccept: onAccept, onClose: onClose, openTo: openTo, onOpen: onOpen, orientation: orientation, readOnly: readOnly, components: { OpenPickerIcon: function () { return react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { size: 'xs', icon: pro_solid_svg_icons_1.faCaretDown }); } }, ampm: ampm, views: views, renderInput: function (params) {
                return (react_1["default"].createElement(MyInput, tslib_1.__assign({}, params, { size: 'small' })));
            } })));
};
exports.SelectTime = SelectTime;
