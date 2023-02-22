import { __assign } from "tslib";
import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
//import { Box, TextField } from '@mui/material'
import { TextField } from '@mui/material';
//import { styled } from '@mui/material/styles';
//import { colors } from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
export var SelectDate = function (_a) {
    //const [value, setValue] = useState<any>()
    //const [isOpen, setIsOpen] = useState<boolean>(false)
    /*
        const MyBox = styled(Box)({
            backgroundColor: colors.white,
            fontFamily: 'IBM Plex Sans',
            fontSize: '14px',
            color: colors.gray[90],
            borderWidth: '1px',
            borderColor: colors.gray[20],
            borderRadius: '4px',
            width: 'fit-content',
            paddingLeft: '12px',
            paddingRight: '12px',
            height: '40px',
            //cursor: 'pointer',
            '&:hover' : {
                backgroundColor: colors.blue[5],
                borderColor: colors.gray[20],
                //borderWidth: 'px',
                //border: 'none',
            },
            '&:disabled': {
                borderColor: colors.gray[20],
                color: colors.gray[30],
            },
            '&.Mui-focused fieldset' : {
                borderColor: colors.blue[40] + ' !important',
                borderWidth: '1px !important',
                //border: 'inherited',
                boxShadow: 'none',
            },
        })
    
        const MyInput = styled('input')({
            backgroundColor: 'transparent',
            //cursor: 'pointer',
            border: 'none',
            outline: 'none',
            '&:focus': {
                border: 'none',
                outline: 'none',
            },
        })*/
    var onChange = _a.onChange, placeholder = _a.placeholder, closeOnSelect = _a.closeOnSelect, value = _a.value, open = _a.open, dayOfWeekFormatter = _a.dayOfWeekFormatter, defaultCalendarMonth = _a.defaultCalendarMonth, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.disablePast, disablePast = _c === void 0 ? true : _c, _d = _a.disableFuture, disableFuture = _d === void 0 ? false : _d, _e = _a.disableHighlightToday, disableHighlightToday = _e === void 0 ? false : _e, getOpenDialogAriaText = _a.getOpenDialogAriaText, inputFormat = _a.inputFormat, inputRef = _a.inputRef, maxDate = _a.maxDate, minDate = _a.minDate, onAccept = _a.onAccept, onClose = _a.onClose, onMonthChange = _a.onMonthChange, onOpen = _a.onOpen, onViewChange = _a.onViewChange, onYearChange = _a.onYearChange, openTo = _a.openTo, orientation = _a.orientation, readOnly = _a.readOnly, reduceAnimations = _a.reduceAnimations, renderDay = _a.renderDay, renderLoading = _a.renderLoading, shouldDisableDate = _a.shouldDisableDate, shouldDisableMonth = _a.shouldDisableMonth, shouldDisableYear = _a.shouldDisableYear, views = _a.views;
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterMoment },
        React.createElement(DatePicker, { value: value, closeOnSelect: closeOnSelect, onChange: onChange, open: open, dayOfWeekFormatter: dayOfWeekFormatter, defaultCalendarMonth: defaultCalendarMonth, disabled: disabled, disableFuture: disableFuture, disablePast: disablePast, disableHighlightToday: disableHighlightToday, getOpenDialogAriaText: getOpenDialogAriaText, inputFormat: inputFormat, inputRef: inputRef, maxDate: maxDate, minDate: minDate, onAccept: onAccept, onClose: onClose, onMonthChange: onMonthChange, onOpen: onOpen, onViewChange: onViewChange, onYearChange: onYearChange, openTo: openTo, orientation: orientation, readOnly: readOnly, reduceAnimations: reduceAnimations, renderDay: renderDay, renderLoading: renderLoading, shouldDisableDate: shouldDisableDate, shouldDisableMonth: shouldDisableMonth, shouldDisableYear: shouldDisableYear, views: views, components: { OpenPickerIcon: function () { return React.createElement(FontAwesomeIcon, { size: 'xs', icon: faCaretDown }); } }, renderInput: function (params) { return React.createElement(TextField, __assign({}, params)); } })));
};
