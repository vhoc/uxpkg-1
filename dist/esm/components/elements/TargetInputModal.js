import { IconButton } from './IconButton';
import { Button } from './Button';
import React from 'react';
import { colors } from '../../theme';
import { Typography } from './Typography';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { TextInput } from './TextInput';
export var TargetInputModal = function (_a) {
    var icon = _a.icon, _b = _a.title, title = _b === void 0 ? 'Confirm' : _b, onClickCloseButton = _a.onClickCloseButton, onChangeTextInput = _a.onChangeTextInput, onClickConfirm = _a.onClickConfirm, _c = _a.confirmButtonLabel, confirmButtonLabel = _c === void 0 ? 'OK' : _c;
    var handleTextInputChange = function (event) {
        if (onChangeTextInput) {
            onChangeTextInput(event.target.value);
        }
    };
    return (React.createElement("div", { style: {
            width: 'fit-content',
            minWidth: '431px',
            height: '134px',
            border: "1px solid ".concat(colors.yellow[50]),
            borderRadius: '6px',
            backgroundColor: colors.white,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '15px',
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingBottom: '26px',
            gap: '18px'
        } },
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'space-between'
            } },
            React.createElement("div", { style: {
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center'
                } },
                icon,
                " ",
                React.createElement(Typography, { variant: 'title-regular' }, title)),
            React.createElement(IconButton, { icon: faTimes, variant: 'gray', onClick: onClickCloseButton })),
        React.createElement("div", { style: {
                display: 'flex',
                gap: '18px'
            } },
            React.createElement(TextInput, { placeholder: 'Enter Principal', onChange: handleTextInputChange, sx: {
                    width: '265px'
                } }),
            React.createElement(Button, { variant: 'primary', size: 'md', onClick: onClickConfirm },
                React.createElement(Typography, { variant: 'button-sm', style: { color: colors.white } }, confirmButtonLabel)))));
};
