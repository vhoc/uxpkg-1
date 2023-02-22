"use strict";
exports.__esModule = true;
exports.SelectDate = void 0;
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
var SelectDate = function (_a) {
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
    })*/
    var onChange = _a.onChange, placeholder = _a.placeholder, closeOnSelect = _a.closeOnSelect, value = _a.value, open = _a.open, dayOfWeekFormatter = _a.dayOfWeekFormatter, defaultCalendarMonth = _a.defaultCalendarMonth, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.disablePast, disablePast = _c === void 0 ? true : _c, _d = _a.disableFuture, disableFuture = _d === void 0 ? false : _d, _e = _a.disableHighlightToday, disableHighlightToday = _e === void 0 ? false : _e, getOpenDialogAriaText = _a.getOpenDialogAriaText, inputFormat = _a.inputFormat, inputRef = _a.inputRef, maxDate = _a.maxDate, minDate = _a.minDate, onAccept = _a.onAccept, onClose = _a.onClose, onMonthChange = _a.onMonthChange, onOpen = _a.onOpen, onViewChange = _a.onViewChange, onYearChange = _a.onYearChange, openTo = _a.openTo, orientation = _a.orientation, readOnly = _a.readOnly, reduceAnimations = _a.reduceAnimations, renderDay = _a.renderDay, renderLoading = _a.renderLoading, shouldDisableDate = _a.shouldDisableDate, shouldDisableMonth = _a.shouldDisableMonth, shouldDisableYear = _a.shouldDisableYear, views = _a.views;
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
        height: '40px !important',
        '&:focus': {
            border: 'none',
            outline: 'none !important'
        }
    });
    return (react_1["default"].createElement(x_date_pickers_1.LocalizationProvider, { dateAdapter: AdapterMoment_1.AdapterMoment },
        react_1["default"].createElement(x_date_pickers_2.DatePicker, { value: value, closeOnSelect: closeOnSelect, onChange: onChange, open: open, dayOfWeekFormatter: dayOfWeekFormatter, defaultCalendarMonth: defaultCalendarMonth, disabled: disabled, disableFuture: disableFuture, disablePast: disablePast, disableHighlightToday: disableHighlightToday, getOpenDialogAriaText: getOpenDialogAriaText, inputFormat: inputFormat, inputRef: inputRef, maxDate: maxDate, minDate: minDate, onAccept: onAccept, onClose: onClose, onMonthChange: onMonthChange, onOpen: onOpen, onViewChange: onViewChange, onYearChange: onYearChange, openTo: openTo, orientation: orientation, readOnly: readOnly, reduceAnimations: reduceAnimations, renderDay: renderDay, renderLoading: renderLoading, shouldDisableDate: shouldDisableDate, shouldDisableMonth: shouldDisableMonth, shouldDisableYear: shouldDisableYear, views: views, components: { OpenPickerIcon: function () { return react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { size: 'xs', icon: pro_solid_svg_icons_1.faCaretDown }); } }, 
            /*
            renderInput={(params) => {
                return (
                    <MyInput
                        {...params}
                        sx={{
                            height: '40px',
                        }}
                    />
                )
            }}*/
            renderInput: function (params) {
                return (react_1["default"].createElement(MyInput, tslib_1.__assign({}, params, { size: 'small', style: {
                        fontFamily: 'IBM Plex Sans'
                    }, sx: {
                        fontFamily: 'IBM Plex Sans',
                        height: '40px'
                    } })));
            } })));
};
exports.SelectDate = SelectDate;
