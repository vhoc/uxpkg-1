"use strict";
exports.__esModule = true;
exports.ApprovalModal = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var FilterBarItem_1 = require("./FilterBarItem");
var SelectDropDown_1 = require("./SelectDropDown");
var TextInput_1 = require("./TextInput");
var Button_1 = require("./Button");
var ApprovalModal = function (_a) {
    var title = _a.title, _b = _a.allowsAutoApproval, allowsAutoApproval = _b === void 0 ? true : _b, _c = _a.autoApprove, autoApprove = _c === void 0 ? false : _c, comments = _a.comments, endDateValue = _a.endDateValue, endDateOptions = _a.endDateOptions, timeValue = _a.timeValue, timeOptions = _a.timeOptions, onCommentsChange = _a.onCommentsChange, onEndDateChange = _a.onEndDateChange, onTimeChange = _a.onTimeChange, onClickCancel = _a.onClickCancel, onClickApprove = _a.onClickApprove, style = _a.style, onAutoApproveChange = _a.onAutoApproveChange;
    var _d = (0, react_1.useState)(autoApprove), auto = _d[0], setAuto = _d[1];
    //const [endDateState, setEndDateState] = useState<any>(endDateValue)
    //const [timeState, setTimeState] = useState<any>(timeValue)
    //const [commentsState, setCommentsState] = useState<string | undefined>(comments)
    var handleAutoApproveChange = function () {
        setAuto(function (prevState) { return !prevState; });
    };
    var handleEndDateChange = function (event) {
        //setEndDateState(event.target.value as string)
        if (onEndDateChange) {
            onEndDateChange(event.target.value);
        }
    };
    var handleTimeChange = function (event) {
        //setTimeState(event.target.value as string)
        if (onTimeChange) {
            onTimeChange(event.target.value);
        }
    };
    var handleCommentsChange = function (event) {
        //setCommentsState(event.target.value)
        if (onCommentsChange) {
            onCommentsChange(event.target.value);
        }
    };
    (0, react_1.useEffect)(function () {
        if (onAutoApproveChange) {
            onAutoApproveChange(auto);
        }
    }, [auto]);
    return (react_1["default"].createElement("div", { style: tslib_1.__assign({ width: '584px', height: 'auto', paddingTop: '31px', paddingRight: '31px', paddingBottom: '24px', paddingLeft: '31px', display: 'flex', flexDirection: 'column', gap: '28px', backgroundColor: theme_1.colors.white, borderRadius: '8px', boxShadow: '0px 2px 4px rgba(34, 41, 69, 0.37)' }, style) },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            } },
            react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: pro_solid_svg_icons_1.faTriangleExclamation, 
                //size={'md'}
                color: theme_1.colors.yellow[50], style: {
                    backgroundColor: 'rgba(216, 160, 50, 0.1)',
                    borderRadius: '100%',
                    padding: '6px'
                } }),
            react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-medium', style: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%'
                } }, title)),
        allowsAutoApproval ?
            react_1["default"].createElement(FilterBarItem_1.FilterBarItem, { checked: auto, onClick: handleAutoApproveChange, name: 'Auto approve future requests with the same configuration' })
            :
                null,
        allowsAutoApproval && auto ?
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                } },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'h4-regular' }, "Auto approve until"),
                react_1["default"].createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '31px'
                    } },
                    react_1["default"].createElement(SelectDropDown_1.SelectDropDown, { label: "End Date", menuItems: endDateOptions, value: endDateValue, style: { width: '198px' }, onChange: handleEndDateChange }),
                    react_1["default"].createElement(SelectDropDown_1.SelectDropDown, { label: "Time", menuItems: timeOptions, value: timeValue, style: { width: '146px' }, onChange: handleTimeChange })))
            :
                null,
        react_1["default"].createElement(TextInput_1.TextInput, { label: 'Add comments', multiline: true, rows: 2, onChange: handleCommentsChange, value: comments }),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '16px'
            } },
            react_1["default"].createElement(Button_1.Button, { size: "sm", variant: "gray", onClick: onClickCancel }, "Cancel"),
            react_1["default"].createElement(Button_1.Button, { size: "sm", variant: "grayBlue", onClick: onClickApprove }, "Approve"))));
};
exports.ApprovalModal = ApprovalModal;
