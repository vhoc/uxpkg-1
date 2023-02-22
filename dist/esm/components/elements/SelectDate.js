import { __assign } from "tslib";
import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { colors } from '../../theme';
export var SelectDate = function (_a) {
    //const [value, setValue] = useState<any>()
    //const [isOpen, setIsOpen] = useState<boolean>(false)
    var onChange = _a.onChange, placeholder = _a.placeholder, closeOnSelect = _a.closeOnSelect, value = _a.value, open = _a.open, dayOfWeekFormatter = _a.dayOfWeekFormatter, onClick = _a.onClick, defaultCalendarMonth = _a.defaultCalendarMonth, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.disablePast, disablePast = _c === void 0 ? true : _c, _d = _a.disableFuture, disableFuture = _d === void 0 ? false : _d, _e = _a.disableHighlightToday, disableHighlightToday = _e === void 0 ? false : _e, getOpenDialogAriaText = _a.getOpenDialogAriaText, inputFormat = _a.inputFormat, inputRef = _a.inputRef, maxDate = _a.maxDate, minDate = _a.minDate, onAccept = _a.onAccept, onClose = _a.onClose, onMonthChange = _a.onMonthChange, onOpen = _a.onOpen, onViewChange = _a.onViewChange, onYearChange = _a.onYearChange, openTo = _a.openTo, orientation = _a.orientation, readOnly = _a.readOnly, reduceAnimations = _a.reduceAnimations, renderDay = _a.renderDay, renderLoading = _a.renderLoading, shouldDisableDate = _a.shouldDisableDate, shouldDisableMonth = _a.shouldDisableMonth, shouldDisableYear = _a.shouldDisableYear, views = _a.views;
    var MyBox = styled(Box)({
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
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.blue[5],
            borderColor: colors.gray[20]
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
    var MyInput = styled('input')({
        backgroundColor: 'transparent',
        cursor: 'pointer',
        '&:focus': {
            border: 'none',
            outline: 'none'
        }
    });
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterMoment },
        React.createElement(DatePicker, { value: value, closeOnSelect: closeOnSelect, onChange: onChange, open: open, dayOfWeekFormatter: dayOfWeekFormatter, defaultCalendarMonth: defaultCalendarMonth, disabled: disabled, disableFuture: disableFuture, disablePast: disablePast, disableHighlightToday: disableHighlightToday, getOpenDialogAriaText: getOpenDialogAriaText, inputFormat: inputFormat, inputRef: inputRef, maxDate: maxDate, minDate: minDate, onAccept: onAccept, onClose: onClose, onMonthChange: onMonthChange, onOpen: onOpen, onViewChange: onViewChange, onYearChange: onYearChange, openTo: openTo, orientation: orientation, readOnly: readOnly, reduceAnimations: reduceAnimations, renderDay: renderDay, renderLoading: renderLoading, shouldDisableDate: shouldDisableDate, shouldDisableMonth: shouldDisableMonth, shouldDisableYear: shouldDisableYear, views: views, 
            //renderInput={(params) => <TextField {...params} />}
            renderInput: function (_a) {
                var inputRef = _a.inputRef, inputProps = _a.inputProps, InputProps = _a.InputProps;
                return (React.createElement(MyBox, { sx: {
                        display: 'flex',
                        alignItems: 'center'
                    } },
                    React.createElement(MyInput, __assign({ ref: inputRef }, inputProps, { placeholder: placeholder })), InputProps === null || InputProps === void 0 ? void 0 :
                    InputProps.endAdornment));
            } })));
};
