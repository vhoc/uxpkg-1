"use strict";
exports.__esModule = true;
exports.TargetInputModal = void 0;
var tslib_1 = require("tslib");
var IconButton_1 = require("./IconButton");
var Button_1 = require("./Button");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../theme");
var Typography_1 = require("./Typography");
var pro_regular_svg_icons_1 = require("@fortawesome/pro-regular-svg-icons");
var TextInput_1 = require("./TextInput");
var TargetInputModal = function (_a) {
    var icon = _a.icon, _b = _a.title, title = _b === void 0 ? 'Confirm' : _b, onCloseButtonClick = _a.onCloseButtonClick, onTextInputChange = _a.onTextInputChange, onClickConfirm = _a.onClickConfirm, _c = _a.confirmButtonLabel, confirmButtonLabel = _c === void 0 ? 'OK' : _c;
    var handleTextInputChange = function (event) {
        //setCommentsState(event.target.value)
        if (onTextInputChange) {
            onTextInputChange(event.target.value);
        }
    };
    return (react_1["default"].createElement("div", { style: {
            width: 'fit-content',
            minWidth: '431px',
            height: '134px',
            border: "1px solid ".concat(theme_1.colors.yellow[50]),
            borderRadius: '6px',
            backgroundColor: theme_1.colors.white,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '15px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: '26px',
            gap: '18px'
        } },
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between'
            } },
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center'
                } },
                icon,
                " ",
                react_1["default"].createElement(Typography_1.Typography, { variant: 'title-regular' }, title)),
            react_1["default"].createElement(IconButton_1.IconButton, { icon: pro_regular_svg_icons_1.faTimes, variant: 'gray', onClick: onCloseButtonClick })),
        react_1["default"].createElement("div", { style: {
                display: 'flex',
                gap: '18px'
            } },
            react_1["default"].createElement(TextInput_1.TextInput, { placeholder: 'Enter Principal', onChange: handleTextInputChange, sx: {
                    width: '265px'
                } }),
            react_1["default"].createElement(Button_1.Button, { variant: 'primary', size: 'md', onClick: onClickConfirm },
                react_1["default"].createElement(Typography_1.Typography, { variant: 'button-sm', style: { color: theme_1.colors.white } }, confirmButtonLabel)))));
};
exports.TargetInputModal = TargetInputModal;
