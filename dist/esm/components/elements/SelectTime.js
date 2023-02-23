import { __assign } from "tslib";
import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';
//import { Box, TextField } from '@mui/material'
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
export var SelectTime = function (_a) {
    //const [value, setValue] = useState<any>()
    //const [isOpen, setIsOpen] = useState<boolean>(false)
    var onChange = _a.onChange, closeOnSelect = _a.closeOnSelect, value = _a.value, open = _a.open, openTo = _a.openTo, _b = _a.disabled, disabled = _b === void 0 ? false : _b, getOpenDialogAriaText = _a.getOpenDialogAriaText, inputFormat = _a.inputFormat, inputRef = _a.inputRef, onAccept = _a.onAccept, onClose = _a.onClose, onOpen = _a.onOpen, orientation = _a.orientation, readOnly = _a.readOnly, _c = _a.ampm, ampm = _c === void 0 ? true : _c, _d = _a.views, views = _d === void 0 ? ['hours', 'minutes'] : _d;
    var MyTimePicker = styled(TimePicker)({
        backgroundColor: colors.white,
        fontFamily: 'IBM Plex Sans',
        fontSize: '14px',
        color: colors.gray[90],
        borderWidth: '1px',
        borderColor: colors.gray[20],
        borderRadius: '4px',
        width: '116px',
        //height: '40px',
        //cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.blue[5],
            borderColor: colors.gray[20]
        },
        '&:disabled': {
            borderColor: colors.gray[20],
            color: colors.gray[30]
        },
        '&.MuiOutlinedInput-root fieldset': {
            borderColor: colors.blue[40] + ' !important',
            borderWidth: '1px !important',
            //border: 'inherited',
            boxShadow: 'none'
        }
    });
    var MyInput = styled(TextField)({
        backgroundColor: colors.white,
        //cursor: 'pointer',
        border: 'none',
        outline: 'none !important',
        fontFamily: 'IBM Plex Sans !important',
        fontSize: '14px',
        color: colors.gray[90],
        borderWidth: '1px',
        borderColor: colors.gray[20],
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
            color: colors.gray[90],
            fontSize: '14px',
            outline: 'none'
        }
    });
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterMoment },
        React.createElement(MyTimePicker, { value: value, closeOnSelect: closeOnSelect, onChange: onChange, open: open, disabled: disabled, getOpenDialogAriaText: getOpenDialogAriaText, inputFormat: inputFormat, inputRef: inputRef, onAccept: onAccept, onClose: onClose, openTo: openTo, onOpen: onOpen, orientation: orientation, readOnly: readOnly, components: { OpenPickerIcon: function () { return React.createElement(FontAwesomeIcon, { size: 'xs', icon: faCaretDown }); } }, ampm: ampm, views: views, renderInput: function (params) {
                return (React.createElement(MyInput, __assign({}, params, { size: 'small' })));
            } })));
};
